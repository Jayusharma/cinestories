// pages/contact.tsx or app/contact/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  weddingDetails: string;
  weddingStyle: string;
  venueCity: string;
  guestCount: string;
  howDidYouFindUs: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    weddingDetails: '',
    weddingStyle: '',
    venueCity: '',
    guestCount: '',
    howDidYouFindUs: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          eventDate: '',
          eventType: '',
          weddingDetails: '',
          weddingStyle: '',
          venueCity: '',
          guestCount: '',
          howDidYouFindUs: '',
        });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" min-h-screen bg-[#F6F3EC] py-30 lg:py-50 px-4">
     <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 items-start">
  {/* Images Section */}
  <div className="relative flex flex-col mb-10 lg:mb-0">
    {/* Top image */}
    <div className="relative w-full h-[40vh] lg:h-[100vh] lg:w-[35vw] bg-amber-300 overflow-hidden rounded-t-full">
      <Image 
        src="/h1.jpg" 
        alt="Follow us on Instagram" 
        fill 
        className="object-cover"
      />
    </div>

    {/* Bottom image (only overlap on lg) */}
    <div className="relative mt-6 lg:absolute lg:top-[100vh] lg:left-0 h-[30vh] w-full lg:h-[80vh] lg:w-[35vw] bg-amber-300 overflow-hidden">
      <Image 
        src="/h2.jpg" 
        alt="Follow us on Instagram" 
        fill 
        className="object-cover"
      />
    </div>
  </div>

        {/* Form Section */}
        <div className="  p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="md:text-6xl text-4xl font-light text-gray-800 mb-4 font-dream ">
              Get in Touch
            </h1>
            <p className="text-gray-600 font-serif">
              We would love to schedule a call and know more about your wedding once we have all the details as mentioned below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-gray-400">(required)</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder='first name '
                    required
                    className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-gray-400">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone <span className="text-gray-400">(required)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of the Event <span className="text-gray-400">(required)</span>
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type 
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                
                className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">Select an option</option>
                <option value="wedding">Wedding</option>
                <option value="engagement">Engagement</option>
                <option value="pre-wedding">Pre-wedding</option>
                <option value="reception">Reception</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Wedding Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us more about your wedding 
              </label>
              <textarea
                name="weddingDetails"
                value={formData.weddingDetails}
                onChange={handleInputChange}
                placeholder="All the dates, event flows, venues and any other specific details"
                
                rows={4}
                className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-2xl  focus:ring-2 focus:ring-black outline-none transition-all resize-none"
              />
            </div>

            {/* Wedding Style */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What style of wedding is it? 
              </label>
              <input
                type="text"
                name="weddingStyle"
                value={formData.weddingStyle}
                onChange={handleInputChange}
               
                className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Venue City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Venue City 
              </label>
              <input
                type="text"
                name="venueCity"
                value={formData.venueCity}
                onChange={handleInputChange}
               
                className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Guest Count
              </label>
              <input
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                
                className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* How did you find us */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you find us? 
              </label>
              <select
                name="howDidYouFindUs"
                value={formData.howDidYouFindUs}
                onChange={handleInputChange}
                
                className="w-full px-4 py-3 text-black  bg-[#ECE4DA] border-0 rounded-full  focus:ring-2 focus:ring-black outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="referral">Friend/Family Referral</option>
                <option value="vendor">Wedding Vendor</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[100px] bg-gray-600 text-white  p-4 rounded-lg font-medium hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`p-4 rounded-lg text-center ${
                submitMessage.includes('successfully') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
     
    </div>
  );
}