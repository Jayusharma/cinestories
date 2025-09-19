"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
interface SelectedImage {
  src: string;
  index: number;
}

const MasonryGallery = () => {
  const images: string[] = [
    '/image1.webp', '/image2.webp', '/image3.webp', '/img4.webp',
    '/img5.webp', '/image1.webp', '/img6.webp', '/img7.webp',
    '/img8.webp', '/img4.webp', '/img5.webp', '/image2.webp',
    '/image3.webp', '/img4.webp', '/img5.webp', '/image1.webp',
    '/img6.webp', '/img7.webp', '/img8.webp', '/image2.webp',
    '/img4.webp', '/img5.webp', '/image1.webp', '/image3.webp',
    '/img6.webp'
  ];

  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Fixed heights pattern for consistent layout
  const getFixedRowSpan = (index: number, mobile: boolean) => {
    if (mobile) {
      // Mobile: compact, varied heights for Pinterest-like layout
      const mobilePattern = [16, 20, 14, 18, 12, 22, 16, 14, 19, 17, 13, 21, 15, 18, 16, 23, 14, 19, 12, 20];
      return mobilePattern[index % mobilePattern.length];
    } else {
      // Desktop: larger heights for better viewing
      const desktopPattern = [18, 15, 20, 28, 22, 26, 14, 18, 22, 25, 20, 20, 19, 10, 19, 16, 15, 23, 19, 20];
      return desktopPattern[index % desktopPattern.length];
    }
  };

  const modalRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const currentX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    startX.current = e.touches[0].clientX;
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    currentX.current = e.touches[0].clientX;
    const diffX = Math.abs(currentX.current - startX.current);
    if (diffX > 10) {
      isDragging.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging.current) return;
    
    const diffX = currentX.current - startX.current;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && selectedImage && selectedImage.index > 0) {
        // Swipe right - previous image
        goToPrevious();
      } else if (diffX < 0 && selectedImage && selectedImage.index < images.length - 1) {
        // Swipe left - next image
        goToNext();
      }
    }
    
    isDragging.current = false;
  };

  // Mouse handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    startX.current = e.clientX;
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    currentX.current = e.clientX;
    const diffX = Math.abs(currentX.current - startX.current);
    if (diffX > 10) {
      isDragging.current = true;
    }
  };

  const handleMouseUp = () => {
    if (isMobile || !isDragging.current) return;
    
    const diffX = currentX.current - startX.current;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && selectedImage && selectedImage.index > 0) {
        goToPrevious();
      } else if (diffX < 0 && selectedImage && selectedImage.index < images.length - 1) {
        goToNext();
      }
    }
    
    isDragging.current = false;
  };

  const openModal = (image: string, index: number) => {
    setSelectedImage({ src: image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage && selectedImage.index > 0) {
      const newIndex = selectedImage.index - 1;
      setSelectedImage({ src: images[newIndex], index: newIndex });
    }
  };

  const goToNext = () => {
    if (selectedImage && selectedImage.index < images.length - 1) {
      const newIndex = selectedImage.index + 1;
      setSelectedImage({ src: images[newIndex], index: newIndex });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F3EC]">
 
      

      {/* Gallery Grid with enhanced mobile design */}
      <div className="w-[94vw] mx-auto px-2 py-4 md:px-6 md:py-8">
        <div 
          className="grid gap-1.5 md:gap-4"
          style={{
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gridAutoRows: '6px', // Even smaller base row for tighter mobile layout
          }}
        >
          {images.map((image, index) => {
            const rowSpan = getFixedRowSpan(index, isMobile);
            
            return (
              <div
                key={`${image}-${index}`}
                className="relative group cursor-pointer overflow-hidden  shadow-sm hover:shadow-lg transition-all duration-500 bg-gray-100 transform hover:scale-[1.02] md:hover:scale-105"
                style={{ 
                  gridRowEnd: `span ${rowSpan}`,
                }}
                onClick={() => openModal(image, index)}
              >
                {/* Image */}
                <Image 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.placeholder-fallback')) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'placeholder-fallback absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center';
                      placeholder.innerHTML = `<div class="text-gray-400 text-xs md:text-sm font-medium">Image ${index + 1}</div>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
                
                {/* Enhanced hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-lg md:rounded-xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500"></div>
                
                {/* Image number indicator for mobile */}
                {isMobile && (
                  <div className="absolute top-1 right-1 bg-black/50 backdrop-blur-sm text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal with improved mobile experience */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          onClick={closeModal}
        >
          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <button
                onClick={closeModal}
                className="fixed top-6 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center group border border-white/20"
              >
                <X size={24} className="text-white group-hover:text-white transition-colors duration-200" />
              </button>

              {selectedImage.index > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="fixed left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center group border border-white/20"
                >
                  <ChevronLeft size={28} className="text-white group-hover:text-white transition-colors duration-200" />
                </button>
              )}

              {selectedImage.index < images.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="fixed right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center group border border-white/20"
                >
                  <ChevronRight size={28} className="text-white group-hover:text-white transition-colors duration-200" />
                </button>
              )}
            </>
          )}

          <div 
            ref={modalRef}
            className={`relative flex items-center justify-center ${
              isMobile 
                ? 'w-full h-full' 
                : 'w-[calc(100vw-200px)] h-[calc(100vh-100px)] max-w-6xl max-h-[90vh]'
            }`}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Mobile Close Button */}
            {isMobile && (
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full shadow-lg hover:bg-black/70 transition-all duration-300 flex items-center justify-center group border border-white/20"
              >
                <X size={18} className="text-white group-hover:text-white transition-colors duration-200" />
              </button>
            )}
            
            {/* Modal Image Container */}
            <div className={`relative overflow-hidden flex items-center justify-center ${
              isMobile 
                ? 'w-full h-full' 
                : 'w-full h-full rounded-2xl shadow-2xl bg-black/20'
            }`}>
              <div className="relative w-full h-full flex items-center justify-center p-2 md:p-8">
                <Image 
                  src={selectedImage.src}
                  fill
                  alt={`Gallery image ${selectedImage.index + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg md:rounded-xl shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.modal-placeholder-fallback')) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'modal-placeholder-fallback w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center';
                      placeholder.innerHTML = `<div class="text-white/70 text-lg md:text-xl font-medium">Gallery Image ${selectedImage.index + 1}</div>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            </div>

            {/* Enhanced Mobile Swipe Indicator */}
            {isMobile && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3 bg-black/50 backdrop-blur-md rounded-full px-4 py-3 border border-white/20">
                <div className="flex items-center space-x-2">
                  {selectedImage.index > 0 && (
                    <ChevronLeft size={16} className="text-white/70" />
                  )}
                  <span className="text-sm text-white font-medium">
                    {selectedImage.index + 1} / {images.length}
                  </span>
                  {selectedImage.index < images.length - 1 && (
                    <ChevronRight size={16} className="text-white/70" />
                  )}
                </div>
              </div>
            )}

            {/* Desktop Image Counter */}
            {!isMobile && (
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/20">
                <span className="text-sm text-white font-medium">
                  {selectedImage.index + 1} / {images.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default MasonryGallery;