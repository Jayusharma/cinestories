"use client";
import React, {  use } from 'react';
import { ArrowLeft, Heart} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface StoryDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

const StoryDetails = ({ params }: StoryDetailsProps) => {
  const router = useRouter();
  const { slug } = use(params);



  // Wedding story data based on slug
  const storyData = {
    'saba-usman-dubai-nikah': {
      title: 'Saba & Usman',
      subtitle: 'A Dubai Love Story',
      location: 'Dubai, UAE',
      date: 'January 11, 2025',
      venue: 'Burj Al Arab Terrace',
      type: 'Traditional Nikah',
      hero: '/h1.jpg',
      story: {
        opening: 'In the heart of Dubai, where modern luxury meets timeless tradition, two souls found their forever in each other. This is the story of Saba and Usman—a celebration that transcended cultures, united families, and created memories that will echo through generations.',
        chapter1: 'Love has its own language, one that speaks through gentle glances, shared laughter, and quiet moments of understanding. For Saba and Usman, this language was written long before they met, in the stars above Dubai&apos;s gleaming skyline.',
        chapter2: 'The Nikah ceremony unfolded like a dream against the backdrop of the Persian Gulf. As the evening call to prayer echoed across the city, their sacred vows were exchanged with the Burj Al Arab standing witness to this beautiful union.',
        chapter3: 'What followed was a symphony of celebration—three days of tradition, joy, and the merging of two families into one. From the intricate henna ceremonies to the elegant walima reception, every moment was a brushstroke in their love story.',
        chapter4: 'The mehndi night glowed with warmth and laughter, as generations of women came together to celebrate love in its purest form. Golden light danced across traditional fabrics, while the scent of jasmine filled the air.',
        chapter5: 'Their walima reception was elegance personified. Under a canopy of stars and fairy lights, Dubai&apos;s skyline provided the perfect backdrop for their first dance as husband and wife.',
        closing: 'Some love stories are written in the stars. Others are written in the quiet moments between heartbeats, in shared dreams, and in the promise of forever. Saba and Usman&apos;s story is both—a testament to love&apos;s power to create something beautiful, timeless, and true.'
      },
      images: [
        '/img4.webp',
        '/img5.webp',
        '/img6.webp',
        '/img7.webp',
        '/img8.webp',
        '/img4.webp'
      ],
      testimonial: 'Every photograph tells our story with such grace and emotion. These images capture not just moments, but the very essence of our love—something we&apos;ll treasure forever.',
      couple: 'Saba & Usman'
    },
    'dhruv-pippa-oleander-farms': {
      title: 'Dhruv & Pippa',
      subtitle: 'A Rustic Romance',
      location: 'Karjat, India',
      date: 'January 11, 2025',
      venue: 'Oleander Farms',
      type: 'Rustic Wedding',
      hero: '/h1.jpg',
      story: {
        opening: 'Sometimes the most beautiful love stories unfold in the most unexpected places. Dhruv and Pippa chose the rolling hills of Karjat for their celebration, creating a wedding that was authentically them—rustic, intimate, and absolutely magical.',
        chapter1: 'Love doesn&apos;t need grandeur to be grand. It needs authenticity, warmth, and the courage to be vulnerable. At Oleander Farms, surrounded by nature&apos;s simplest beauty, their love story found its perfect setting.',
        chapter2: 'The morning ceremony took place as golden light filtered through the trees. With wildflowers as their altar and the earth as their witness, Dhruv and Pippa exchanged vows that were as natural and unforced as the setting around them.',
        chapter3: 'Their celebration dinner was farm-to-table poetry—fresh ingredients, communal tables, and conversations that flowed like wine. This was hospitality in its truest form, where every guest felt like family.',
        chapter4: 'As the sun set over the hills, fairy lights transformed the farm into a wonderland. Their first dance happened under an open sky, with nothing but stars as their ceiling and love as their music.',
        chapter5: 'The evening continued with acoustic melodies and storytelling around a bonfire. This wasn&apos;t just a wedding reception—it was a gathering of souls, a celebration of community, and a testament to love&apos;s simplest truths.',
        closing: 'In a world that often chooses spectacle over substance, Dhruv and Pippa chose what matters most—each other, their loved ones, and the simple joy of being present in their own love story.'
      },
      images: [
       '/img4.webp',
        '/img5.webp',
        '/img6.webp',
        '/img7.webp',
        '/img8.webp',
        '/img4.webp'
      ],
      testimonial: 'They captured our story so beautifully—not just the big moments, but the quiet ones too. Every photograph feels like a window into our hearts.',
      couple: 'Dhruv & Pippa'
    }
  };

  const story = storyData[slug as keyof typeof storyData];

 

 

  if (!story) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Story not found</h1>
         <button 
                 onClick={() => router.back()}
                 className="fixed top-20 left-8 z-50 bg-white/80 backdrop-blur-sm text-black p-3 rounded-full hover:bg-white transition-all shadow-lg"
               >
                 <ArrowLeft size={20} />
               </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F3EC]">
      {/* Navigation */}
      
             <button 
                     onClick={() => router.back()}
                     className="fixed top-20 left-3 z-50 bg-white/80 backdrop-blur-sm text-black p-3 rounded-full hover:bg-white transition-all shadow-lg"
                   >
                     <ArrowLeft size={20} />
                   </button>
      {/* Header Section */}
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-light mb-8">
            {story.type}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light font-love text-gray-900 mb-4 tracking-tight leading-none">
            {story.title}
          </h1>
          <p className="text-xl text-gray-600  font-serif font-light mb-12">
            {story.subtitle}
          </p>
          
          <div className="w-20 h-px bg-gray-300 mx-auto"></div>
        </div>
      </div>

      {/* Opening Image */}
      <div className="px-8 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-sm overflow-hidden">
            <Image 
              src={story.hero} 
              alt={story.title}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Story Opening */}
      <div className="px-8 mb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            {story.story.opening}
          </p>
        </div>
      </div>

      {/* Chapter 1 */}
      <div className="px-8 mb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-16">
            {story.story.chapter1}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="relative h-80 rounded-sm overflow-hidden">
              <Image 
                src={story.images[0]} 
                alt="Wedding moment"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden">
              <Image 
                src={story.images[1]} 
                alt="Wedding moment"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 2 */}
      <div className="px-8 mb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-16">
            {story.story.chapter2}
          </p>
          
          <div className="relative h-96 md:h-[450px] rounded-sm overflow-hidden mb-16">
            < Image
              src={story.images[2]} 
              alt="Ceremony moment"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Chapter 3 */}
      <div className="px-8 mb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-16">
            {story.story.chapter3}
          </p>
        </div>
      </div>

      {/* Chapter 4 */}
      <div className="px-8 mb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-16">
            {story.story.chapter4}
          </p>
          
          <div className="relative h-80 md:h-96 rounded-sm overflow-hidden mb-16">
            <Image 
              src={story.images[3]} 
              alt="Wedding celebration"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Chapter 5 */}
      <div className="px-8 mb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-16">
            {story.story.chapter5}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="relative h-64 rounded-sm overflow-hidden">
              <Image 
                src={story.images[4]} 
                alt="Wedding detail"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-sm overflow-hidden">
              <Image 
                src={story.images[5]} 
                alt="Wedding detail"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-sm overflow-hidden">
              <Image 
                src={story.images[0]} 
                alt="Wedding detail"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Story Closing */}
      <div className="px-8 mb-24">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-px bg-gray-300 mx-auto mb-12"></div>
          <p className="text-xl text-gray-700 font-light leading-relaxed text-center">
            {story.story.closing}
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="px-8  bg-[#ECE4DA] py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-6 h-6 text-gray-400 mx-auto mb-8" />
          <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic mb-6 leading-relaxed">
            &quot;{story.testimonial}&quot;
          </blockquote>
          <cite className="text-gray-500 font-light">— {story.couple}</cite>
        </div>
      </div>

     {/* Call to Action */}
      
    </div>
  );
};

export default StoryDetails;