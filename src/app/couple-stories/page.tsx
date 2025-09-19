"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; // Add this import
import { Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface WeddingStory {
  id: number;
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  date: string;
  photos: number;
  venue: string;
  type: string;
}

const weddingStories: WeddingStory[] = [
  {
    id: 1,
    slug: "saba-usman-dubai-nikah",
    image: "/h1.jpg",
    title: "Pre-Wedding at Taj, Nashik",
    subtitle: "A Dubai Nikah Story",
    description: "Pankaj and Priyanshi wanted their pre-wedding to be done at their favourite weekend getaway destination – The Gateway Hotel Ambad Nashik.",
    location: "Dubai, UAE",
    date: "Jan 11, 2025",
    photos: 180,
    venue: "Burj Al Arab Terrace",
    type: "Traditional"
  },
  {
    id: 2,
    slug: "dhruv-pippa-oleander-farms",
    image: "/h2.jpg",
    title: "Offbeat Pre-Wedding Shoot in Mumbai",
    subtitle: "Rustic Romance",
    description: "We are sure you will find this pre-wedding shoot unusual and different from what you may have seen so far. As couples increasingly look to do something different from the rest, they are ready to get out of their comfort zone and try new ideas.",
    location: "Karjat, India",
    date: "Jan 11, 2025",
    photos: 145,
    venue: "Oleander Farms",
    type: "Rustic"
  },
  {
    id: 3,
    slug: "aneesh-maitri-goa-beach",
    image: "/h3.jpg",
    title: "Sunset Wedding in Goa",
    subtitle: "Sunset by the Sea",
    description: "Where golden sunsets met endless love—a magical beachside celebration that captured the essence of timeless romance and created memories to last a lifetime.",
    location: "Goa, India",
    date: "Jan 11, 2025",
    photos: 220,
    venue: "Taj Cidade De Goa",
    type: "Beach"
  },
  {
    id: 4,
    slug: "arya-vaibhav-royal-rajasthan",
    image: "/h4.jpg",
    title: "Royal Heritage Wedding",
    subtitle: "Royal Heritage",
    description: "A magnificent celebration where every moment echoed with the grandeur of Rajasthani tradition and contemporary sophistication blended perfectly.",
    location: "Rajasthan, India",
    date: "Jan 11, 2025",
    photos: 350,
    venue: "City Palace",
    type: "Royal"
  }
];

const WeddingStoriesPage = () => {
  const router = useRouter(); // Initialize router

  // Single handleStoryClick function with actual navigation
  const handleStoryClick = (story: WeddingStory) => {
    console.log(`Navigating to: /couple-stories/${story.slug}`);
    // Navigate to the actual page
    router.push(`/couple-stories/${story.slug}`);
  };

  return (
    <div className="min-h-screen bg-[#F6F3EC]">
      {/* Beautiful Minimal Hero Section */}
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mt-20">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight italic font-pali text-gray-900 mb-4 tracking-tight leading-none">
              couple stories 
            </h1>
          </div>
        </div>
      </div>

      {/* Stories Collection */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Stories Grid - 2 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {weddingStories.map((story, index) => (
            <StoryCard 
              key={story.id} 
              story={story} 
              onClick={handleStoryClick}
              index={index}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
};

// Story Card Component
const StoryCard = ({ story, onClick, index }: { 
  story: WeddingStory; 
  onClick: (story: WeddingStory) => void;
  index: number;
}) => {
  return (
    <article 
      className="group cursor-pointer"
      style={{ 
        animationDelay: `${index * 200}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
      onClick={() => onClick(story)} // Add click handler to the article
    >
      {/* Large Image */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
        <Image 
          src={story.image} 
          alt={story.title}
          fill
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
        
        {/* Small watermark */}
        <div className="absolute bottom-4 right-4 opacity-60">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-normal text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
          {story.title}
        </h3>

        {/* Description paragraph */}
        <p className="text-gray-600 leading-relaxed text-base">
          {story.description}
        </p>

        {/* Read More link */}
        <div className="pt-2">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent double click
              onClick(story);
            }}
            className="group/btn inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors duration-300"
          >
            <span className="font-medium">Read More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* Date at bottom */}
        <div className="pt-4 border-t border-gray-100">
          <time className="text-sm text-gray-500 font-light">
            {story.date}
          </time>
        </div>
      </div>
    </article>
  );
};

export default WeddingStoriesPage;