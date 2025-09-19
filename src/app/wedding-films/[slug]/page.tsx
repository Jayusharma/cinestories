"use client";
import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Insta from '@/components/insta';
interface ProjectDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
  const router = useRouter();
  const { slug } = use(params);

  // Project data based on slug
  const projectData = {
    'sanchez-brand-identity': {
      title: 'Sanchez & Maria',
      src: 'https://youtu.be/svXIAHfaToI',
      description: 'A beautiful wedding celebration of love and joy, captured in timeless photographs that tell the story of Sanchez and Maria&apos;s special day.',
      storyText: 'Every love story is unique, and theirs was no exception. From the intimate glances shared during the ceremony to the joyous laughter echoing through the reception hall, each moment was a testament to their deep connection. The golden hour light filtered through ancient oak trees, creating the perfect backdrop for their vows. Their families came together, celebrating not just a union, but the beginning of a new chapter filled with hope and endless possibilities.',
      images: ['/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp'],
      testimonial: 'Working with the team was an incredible experience. They perfectly captured our vision and brought it to life with such artistic vision.',
      clientName: 'Sanchez & Maria'
    },
    'martinez-engagement-session': {
      title: 'Martinez Engagement',
       src: 'https://youtu.be/svXIAHfaToI',
      description: 'An intimate engagement session capturing the pure joy and anticipation of two souls about to embark on their journey together.',
      storyText: 'Their engagement session was filled with natural chemistry and genuine emotions. From sunrise to sunset, we captured their authentic connection in various settings that reflected their personalities. The soft morning light complemented their tender moments, while the dramatic evening sky provided the perfect backdrop for their passionate embrace.',
      images: ['/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp'],
      testimonial: 'The photos exceeded our expectations and perfectly captured our love story in the most beautiful way.',
      clientName: 'Martinez Couple'
    },
    'rodriguez-couple-photoshoot': {
      title: 'Rodriguez Love Story',
       src: 'https://youtu.be/svXIAHfaToI',
      description: 'A romantic couple photoshoot celebrating years of togetherness and the beauty of enduring love.',
      storyText: 'After years together, their love has only grown stronger. This photoshoot was a celebration of their journey, capturing the comfort, joy, and deep affection they share. Each frame tells a story of partnership, laughter, and the kind of love that stands the test of time.',
       images: ['/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp'],
      testimonial: 'These photos will be treasured for generations. Thank you for capturing our love so beautifully.',
      clientName: 'Rodriguez Family'
    },
    'johnson-pre-wedding': {
      title: 'Rodriguez Love Story',
       src: 'https://youtu.be/svXIAHfaToI',
      description: 'A romantic couple photoshoot celebrating years of togetherness and the beauty of enduring love.',
      storyText: 'After years together, their love has only grown stronger. This photoshoot was a celebration of their journey, capturing the comfort, joy, and deep affection they share. Each frame tells a story of partnership, laughter, and the kind of love that stands the test of time.',
      images: ['/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp'],
      testimonial: 'These photos will be treasured for generations. Thank you for capturing our love so beautifully.',
      clientName: 'Rodriguez Family'
    },
    'williams-maternity-session': {
      title: 'Rodriguez Love Story',
       src: 'https://youtu.be/svXIAHfaToI',
      description: 'A romantic couple photoshoot celebrating years of togetherness and the beauty of enduring love.',
      storyText: 'After years together, their love has only grown stronger. This photoshoot was a celebration of their journey, capturing the comfort, joy, and deep affection they share. Each frame tells a story of partnership, laughter, and the kind of love that stands the test of time.',
       images: ['/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp', '/img4.webp', '/img5.webp', '/image1.webp'],
      testimonial: 'These photos will be treasured for generations. Thank you for capturing our love so beautifully.',
      clientName: 'Rodriguez Family'
    }
  };

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => router.back()}
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E6DED0]">
      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        className="fixed top-20 left-8 z-50 bg-white/80 backdrop-blur-sm text-black p-3 rounded-full hover:bg-white transition-all shadow-lg"
      >
        <ArrowLeft size={20} />
      </button>

       <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2 pt-[10vh] md:pt-[15vh]">
        {/* Left column with image */}
        <div className="pl-4 pr-2 relative h-full">
          <div className="relative h-full w-full">
            <Image 
              src="/img4.webp" 
              alt="Interior detailing service" 
              fill 
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex justify-center items-center text-center px-6">
          <div className="max-w-2xl">
            <h1 className="text-black text-4xl md:text-6xl lg:text-8xl font-dream tracking-widest mb-6 md:mb-10"> 
              {project.title}
            </h1>
            <p className="text-black text-lg md:text-xl font-light font-serif tracking-wide mb-6 md:mb-10">
              {project.description}          
              </p>
            <Link 
               href={project.src}
               target="_blank" 
               rel="noopener noreferrer"
               className="group w-48 h-12 border border-black rounded-full mx-auto flex justify-center items-center hover:bg-black transition-colors cursor-pointer"
             >
               <span className="text-black font-serif text-xl transition-colors group-hover:text-white">
                 Watch Film
               </span>
             </Link>
          </div>
        </div>
      </div>

      {/* Story Text Section */}
      <div className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-black/70 text-xl md:text-2xl font-serif font-light leading-relaxed text-center">
            {project.storyText}
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* First row - 2 images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96 md:h-[500px]">
              <Image 
                src={project.images[0]} 
                alt="Wedding moment 1"
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative h-96 md:h-[500px]">
              <Image 
                src={project.images[1]} 
                alt="Wedding moment 2"
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Second row - 1 large image */}
          <div className="mb-8">
            <div className="relative h-96 md:h-[600px]">
              <Image 
                src={project.images[2]} 
                alt="Wedding moment 3"
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Third row - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="relative h-80 md:h-96">
              <Image 
                src={project.images[3]} 
                alt="Wedding moment 4"
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative h-80 md:h-96">
              <Image 
                src={project.images[4]} 
                alt="Wedding moment 5"
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative h-80 md:h-96">
              <Image 
                src={project.images[5]} 
                alt="Wedding moment 6"
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Fourth row - 2 images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96 md:h-[450px]">
              <Image 
                src={project.images[6]} 
                alt="Wedding moment 7"
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative h-96 md:h-[450px]">
              <Image 
                src={project.images[7]} 
                alt="Wedding moment 8"
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Fifth row - 1 large image */}
          <div className="mb-8">
            <div className="relative h-96 md:h-[550px]">
              <Image 
                src={project.images[8]} 
                alt="Wedding moment 9"
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Sixth row - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-80 md:h-96">
              <Image 
                src={project.images[9]} 
                alt="Wedding moment 10"
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative h-80 md:h-96">
              <Image 
                src={project.images[10]} 
                alt="Wedding moment 11"
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative h-80 md:h-96">
              <Image 
                src={project.images[11]} 
                alt="Wedding moment 12"
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-black/80 text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
            &quot;{project.testimonial}&quot;
          </blockquote>
          <cite className="text-black/60 text-lg font-light">— {project.clientName}</cite>
        </div>
      </div>

      {/* Ready to Connect CTA */}
      < Insta />
      <Footer />
    </div>
  );
};

export default ProjectDetails;