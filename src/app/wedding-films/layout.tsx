// app/wedding-stories/layout.tsx
import React from 'react';
import Header from "@/components/header";

interface WeddingStoriesLayoutProps {
  children: React.ReactNode;
}

export default function WeddingStoriesLayout({ children }: WeddingStoriesLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      {children}
    </div>
  );
}