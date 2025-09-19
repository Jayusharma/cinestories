// app/wedding-stories/layout.tsx
import React from 'react';

import Footer from "@/components/Footer";

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