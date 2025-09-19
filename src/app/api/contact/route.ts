import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Zod schema to validate incoming form data
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  eventDate: z.string().min(1, "Event date is required"),
  eventType: z.string(),
  weddingDetails: z.string(),
  weddingStyle: z.string(),
  venueCity: z.string(),
  guestCount: z.string(),
  howDidYouFindUs: z.string(),
});

function businessEmailTemplate(data: z.infer<typeof contactSchema>) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h1 style="color: #333; border-bottom: 2px solid #e6b89c; padding-bottom: 10px;">New Wedding Inquiry</h1>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Event:</strong> ${data.eventType} on ${new Date(
    data.eventDate
  ).toLocaleDateString()}</p>
        <p><strong>Style:</strong> ${data.weddingStyle}</p>
        <p><strong>Venue:</strong> ${data.venueCity}</p>
        <p><strong>Guests:</strong> ${data.guestCount}</p>
        <p><strong>How they found us:</strong> ${data.howDidYouFindUs}</p>
        <div style="margin-top:20px; background:#f8f8f8; padding:15px; border-left:4px solid #e6b89c;">
          <p>${data.weddingDetails}</p>
        </div>
        <p style="margin-top:30px; font-size:12px; color:#666;">Submitted on ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;
}

function clientEmailTemplate(data: z.infer<typeof contactSchema>) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h1 style="color: #333; text-align:center;">Thank You, ${data.firstName}!</h1>
        <p style="font-size:16px; color:#555;">
          We've received your inquiry about your ${data.eventType} on ${new Date(data.eventDate).toLocaleDateString()}.
          Our team will get back to you within 24–48 hours with availability and packages.
        </p>
        <div style="margin:20px 0; padding:15px; background:#e6b89c; color:white; border-radius:8px;">
          <p><strong>Event:</strong> ${data.eventType} in ${data.venueCity}</p>
          <p><strong>Date:</strong> ${new Date(data.eventDate).toLocaleDateString()}</p>
          <p><strong>Guests:</strong> ${data.guestCount}</p>
          <p><strong>Style:</strong> ${data.weddingStyle}</p>
        </div>
        <p style="text-align:center; color:#e6b89c; font-weight:bold;">
          We can't wait to be part of your love story ✨
        </p>
        <p style="text-align:center; font-size:12px; color:#999; margin-top:30px;">
          – The Cinestories Team<br>
          📧 hello@cinestories.com | 🌐 www.cinestories.com
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    console.log("API route called"); // Debug log

    // Check if RESEND_API_KEY exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log("Request body:", body); // Debug log

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      console.error("Validation error:", parsed.error.format());
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    console.log("Parsed data:", data); // Debug log

    // Send email to business
    console.log("Sending business email...");
    const businessEmail = await resend.emails.send({
      from: "Wedding Inquiries <onboarding@resend.dev>", // change after domain verification
      to: ["bravild.co@gmail.com"], // 👈 replace with your email for testing
      subject: `New Inquiry from ${data.firstName} ${data.lastName}`,
      html: businessEmailTemplate(data),
    });

    console.log("Business email result:", businessEmail);

    // Send confirmation to client
    console.log("Sending client email...");
    const clientEmail = await resend.emails.send({
      from: "Cinestories <hello@bravild.in>", // change after domain verification
      to: [data.email],
      subject: "Thank you for your wedding inquiry!",
      html: clientEmailTemplate(data),
    });

    console.log("Client email result:", clientEmail);

    // Handle errors
    if (businessEmail.error || clientEmail.error) {
      console.error("Email sending errors:", { businessEmail: businessEmail.error, clientEmail: clientEmail.error });
      return NextResponse.json(
        {
          error: "Some emails failed",
          details: { 
            businessEmail: businessEmail.error, 
            clientEmail: clientEmail.error 
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Emails sent successfully",
      businessId: businessEmail.data?.id,
      clientId: clientEmail.data?.id,
    });
  } catch (err) {
    console.error("Email error:", err);
    
    // More detailed error logging
    if (err instanceof Error) {
      console.error("Error message:", err.message);
      console.error("Error stack:", err.stack);
    }
    
    return NextResponse.json(
      { error: "Failed to send email", details: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}