// app/wedding-stories/layout.tsx
import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/Footer";
import Insta from '@/components/insta';
interface WeddingStoriesLayoutProps {
  children: React.ReactNode;
}

export default function WeddingStoriesLayout({ children }: WeddingStoriesLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      
      {children}

      <Footer />
    </div>
  );
}