"use client";
import { useState } from 'react';

export default function WeddingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index : number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where are you based and do you travel for weddings?",
      answer: "We are based in Mumbai, India, but we absolutely love traveling for weddings! We cover destination weddings across India and internationally. Some of our favorite destinations include Goa, Rajasthan, Kerala, Himachal Pradesh, and we've also covered weddings in Dubai, Thailand, and Europe. Travel charges apply for outstation weddings, but we're always excited to capture your special day wherever it may be."
    },
    {
      question: "What is our style and how do you cover Weddings?",
      answer: "Our photography style blends candid storytelling with artistic portraiture. We believe in capturing genuine emotions and spontaneous moments while also creating beautiful, posed shots. Our approach includes documentary-style candid photography, artistic couple portraits, traditional family and group shots, detail shots of decor, jewelry, and ceremony elements, and creative use of natural light and artistic compositions. We work discreetly to capture authentic moments while ensuring we don't miss any important traditions or ceremonies."
    },
    {
      question: "What are your charges?",
      answer: "Our wedding photography packages start from ₹85,000 and vary based on number of days/events to be covered, number of photographers required, videography requirements, album and print requirements, and location (local vs destination). We offer customized packages to suit your specific needs and budget. Contact us for a detailed quote based on your wedding requirements."
    },
    {
      question: "Do you make videos for Wedding?",
      answer: "Yes, absolutely! We offer comprehensive videography services including cinematic wedding films (3-5 minutes highlight reel), traditional wedding videos (full ceremony coverage), pre-wedding shoots and save-the-date videos, same-day edits for reception screening, and drone footage (where permitted). Our videography team works seamlessly with our photographers to ensure comprehensive coverage without any interference."
    },
    {
      question: "Do we need traditional video if we are taking cinematic film?",
      answer: "It depends on your preference! Cinematic Film is a beautifully edited 3-5 minute highlight reel with music, focusing on emotions and key moments. Perfect for sharing on social media and reliving the best parts of your day. Traditional Video is complete ceremony coverage including full speeches, vows, and rituals. Important for families who want to preserve every detail and tradition. Many couples choose both - cinematic for the artistic experience and traditional for the complete memories."
    },
    {
      question: "What equipment do you use?",
      answer: "We use professional-grade equipment to ensure the highest quality. For Photography: Canon 5D Mark IV and Sony A7R IV cameras, premium lenses (24-70mm, 70-200mm, 85mm, 50mm), and professional lighting and flash equipment. For Videography: 4K capable cameras (Sony FX6, Canon C200), stabilization equipment (gimbals, steadicams), professional audio recording equipment, and drone for aerial shots (DJI Mavic Pro)."
    },
    {
      question: "How long will you take to deliver the photos or films?",
      answer: "Our delivery timeline: Sneak Peek in 48-72 hours (15-20 edited photos), Full Photo Gallery in 3-4 weeks (400-800 edited photos), Cinematic Film in 4-6 weeks, Traditional Video in 6-8 weeks, and Wedding Album in 8-10 weeks after photo approval. We understand you're excited to see your photos, so we always provide a sneak peek within 2-3 days to share with family and friends!"
    },
    {
      question: "Do we have to pay for your travel and accommodation?",
      answer: "For local weddings (within city limits), travel is included in our package. For outstation/destination weddings, travel and accommodation costs are additional including travel expenses (flight/train tickets), accommodation for the team (we prefer staying at the wedding venue or nearby), local transportation at the destination, and meals during the assignment. We always provide transparent estimates for all additional costs upfront."
    },
    {
      question: "Do you cover only marriages and couple-shoots?",
      answer: "Not at all! While weddings are our specialty, we cover a variety of events including pre-wedding and engagement shoots, anniversary celebrations, baby showers and maternity shoots, birthday parties and celebrations, corporate events and parties, family portraits and reunions, and festival celebrations. Each type of event gets the same attention to detail and artistic approach that we bring to weddings."
    },
    {
      question: "Do you give hard copy of photographs too?",
      answer: "Yes, we do! We offer various physical delivery options including USB Drive (all high-resolution photos in a beautiful custom USB), Wedding Albums (premium leather-bound albums with your favorite photos), Photo Prints (individual prints in various sizes), Canvas Prints (large format prints for wall display), and Photo Books (smaller format books perfect for gifting). All photos are also delivered digitally via our online gallery."
    },
    {
      question: "Do you offer discounts on your packages?",
      answer: "We occasionally offer discounts for early bookings (6+ months in advance), off-season weddings (monsoon and summer months), weekday weddings (Monday through Thursday), referrals (when you refer friends/family who book with us), and multiple events (engagement + wedding packages). We also offer flexible payment plans to make our services more accessible. Contact us to discuss options that work within your budget."
    },
    {
      question: "What happens if the photographs you stored on the hard disk get deleted by some accident?",
      answer: "Don't worry - we have multiple backup systems! Our data protection process includes dual memory cards (we shoot on cameras with two card slots for instant backup), multiple hard drives (photos are immediately backed up to 2-3 separate drives), cloud storage (additional backup on secure cloud servers), and archive storage (we maintain copies for 2+ years after delivery). Your memories are safe with us!"
    },
    {
      question: "How many photographers and cinematographers come to the wedding for assignment?",
      answer: "Our team size depends on your wedding scale and package. Standard Package includes 1 Lead Photographer + 1 Assistant Photographer, and 1 Cinematographer (if video is included). Premium Package includes 1 Lead Photographer + 2 Assistant Photographers, 1 Lead Cinematographer + 1 Assistant, and 1 Drone Operator (if required). For large weddings (300+ guests) or multi-day events, we can provide additional team members."
    },
    {
      question: "Are there any terms and conditions from your side?",
      answer: "Yes, we have some standard terms to ensure a smooth experience including 50% advance payment to confirm the date, wedding timeline to be shared at least 2 weeks before, we work in all weather conditions but have backup plans, meals to be provided for our team during events, additional charges for events extending beyond agreed hours, we retain rights for portfolio use (with your permission), and advance payment is non-refundable but can be rescheduled."
    }
  ];

  return (
     <div className="min-h-screen bg-[#F6F3EC] py-30 lg:py-60 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block text-black px-8 py-4 text-5xl font-light font-dream">
            The Answers You've Been Looking For
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-black transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-800 pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-600 font-light flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}