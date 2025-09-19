"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {useRouter} from 'next/navigation';
const AboutUsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const storyRef = useRef<HTMLElement>(null);
  const textBoxRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const router = useRouter();
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // GSAP ScrollTrigger effect for parallax - Enhanced version
  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      if (storyRef.current && textBoxRef.current && imagesRef.current) {
        const storyElement = storyRef.current;
        const textBoxElement = textBoxRef.current;
        const imagesElement = imagesRef.current;

        const ctx = gsap.context(() => {
          // Pin the text box while images scroll - improved end point
          ScrollTrigger.create({
            trigger: storyElement,
            start: "top top",
            end: "bottom-=200 bottom", // Better end timing
            pin: textBoxElement,
            pinSpacing: false,
          });

          // Animate images while section is pinned
          gsap.fromTo(imagesElement, 
            {
              y: 0
            },
            {
              y: -200,
              ease: "none",
              scrollTrigger: {
                trigger: storyElement,
                start: "top top",
                end: "bottom-=200 bottom", // Match pin end
                scrub: 1,
              }
            }
          );

          // Animate individual image items for extra effect
          if (imagesElement.children.length > 0) {
            gsap.fromTo(imagesElement.children, 
              {
                y: 0,
                opacity: 0.9
              },
              {
                y: -80,
                opacity: 1,
                stagger: 0.1,
                ease: "none",
                scrollTrigger: {
                  trigger: storyElement,
                  start: "top center",
                  end: "bottom-=200 bottom",
                  scrub: 2,
                }
              }
            );
          }

        }, storyRef);

        return () => ctx.revert();
      }
    };

    if (isLoaded) {
      loadGSAP();
    }
  }, [isLoaded]);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=500&fit=crop',
      width: 400,
      height: 500,
      grayscale: true
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=600&fit=crop',
      width: 400,
      height: 600,
      grayscale: false
    },
    {
      url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop',
      width: 600,
      height: 800,
      grayscale: true
    },
    {
      url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=450&fit=crop',
      width: 400,
      height: 450,
      grayscale: false
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop',
      width: 600,
      height: 800,
      grayscale: true
    },
  ];

  const services = [
    {
      title: 'Weddings',
      subtitle: 'Your forever story',
      description: 'Complete wedding coverage from intimate moments to grand celebrations',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop',
      width: 600,
      height: 800
    },
    {
      title: 'Pre-Wedding',
      subtitle: 'Before the vows',
      description: 'Capturing the excitement and love before your special day',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=800&fit=crop',
      width: 600,
      height: 800
    },
    {
      title: 'Engagements',
      subtitle: 'The proposal magic',
      description: 'Documenting the beginning of your journey together',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop',
      width: 600,
      height: 800
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & Michael',
      text: 'They captured our wedding day with such artistry and emotion. Every photograph tells the story of our love in the most beautiful way.',
      rating: 5
    },
    {
      name: 'Priya & Raj',
      text: 'The attention to detail and the way they made us feel comfortable was incredible. Our photos are beyond what we ever imagined.',
      rating: 5
    },
    {
      name: 'Emma & James',
      text: 'Professional, creative, and genuinely caring. They turned our special moments into timeless memories we will treasure forever.',
      rating: 5
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-[#F6F3EC]">
      {/* Hero Section - Team Photo */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-8 sm:mb-12 text-black font-dream">
              The faces behind
              <span className="block italic text-black/70">the lens</span>
            </h1>
            
            <div className="w-12 sm:w-16 lg:w-20 h-px bg-black/30 mx-auto mb-12 sm:mb-16"></div>
            
            <div className="max-w-4xl mx-auto relative">
              <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden rounded-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=500&fit=crop&auto=format"
                  alt="Our photography team"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                />
              </div>
            </div>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-8 sm:mt-12 px-4">
              We are storytellers, dreamers, and believers in the magic of authentic moments
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section with GSAP Parallax */}
      <section ref={storyRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative min-h-[200vh] lg:min-h-[250vh]">
        <div className="max-w-7xl mx-auto">
          
          {/* Mobile Layout - Text First, Then Images */}
          <div className="lg:hidden space-y-12 sm:space-y-16">
            {/* Text Box - Mobile */}
            <div className="relative">
              <div className=" backdrop-blur-sm p-6 sm:p-8 shadow-lg rounded-sm">
                <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6 font-dream">
                  Our Journey
                </h2>
                
                <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed font-serif text-sm sm:text-base">
                  <p>
                    What began as a shared passion for capturing fleeting moments has evolved into 
                    something far greater than we ever imagined. We believe that every couple has a 
                    unique story worth telling.
                  </p>
                  
                  <p>
                    Our approach is simple yet profound: we document, we don&apos;t direct. We seek the 
                    genuine laughter, the stolen glances, the quiet tears of joy that make your day 
                    authentically yours.
                  </p>
                  
                  <p>
                    With years of experience and countless love stories behind our lens, we&apos;ve learned 
                    that the most powerful photographs are born from trust, patience, and an 
                    unwavering commitment to authenticity.
                  </p>
                  
                  <p className="font-medium text-black text-sm sm:text-base">
                    We don&apos;t just take pictures. We preserve legacies.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Grid - Mobile with consistent gaps */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className={`overflow-hidden relative ${index % 3 === 0 ? 'row-span-2' : ''}`}
                >
                  <Image 
                    src={image.url}
                    alt={`Behind the scenes ${index + 1}`}
                    width={image.width}
                    height={image.height}
                    className={`w-full h-full object-cover hover:scale-110 transition-transform duration-700 ${
                      image.grayscale ? 'grayscale hover:grayscale-0' : ''
                    }`}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - GSAP Parallax */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">
            
            {/* Left - Text Box that will be pinned */}
            <div ref={textBoxRef} className="relative z-10">
              <div className="p-8 xl:p-12">
                <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-light text-black mb-8 xl:mb-10 font-dream">
                  Our Journey
                </h2>
                
                <div className="space-y-6 xl:space-y-8 text-gray-800 leading-relaxed text-base xl:text-lg">
                  <p>
                    What began as a shared passion for capturing fleeting moments has evolved into 
                    something far greater than we ever imagined. We believe that every couple has a 
                    unique story worth telling.
                  </p>
                  
                  <p>
                    Our approach is simple yet profound: we document, we don&apos;t direct. We seek the 
                    genuine laughter, the stolen glances, the quiet tears of joy that make your day 
                    authentically yours.
                  </p>
                  
                  <p>
                    With years of experience and countless love stories behind our lens, we&apos;ve learned 
                    that the most powerful photographs are born from trust, patience, and an 
                    unwavering commitment to authenticity.
                  </p>
                  
                  <p className="font-semibold text-black text-lg xl:text-xl">
                    We don&apos;t just take pictures. We preserve legacies.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Images that will scroll with consistent gaps */}
            <div ref={imagesRef} className="relative">
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`overflow-hidden transition-all duration-700 relative ${
                      index % 3 === 0 ? 'row-span-2' : ''
                    }`}
                  >
                    <Image 
                      src={image.url}
                      alt={`Behind the scenes ${index + 1}`}
                      width={image.width}
                      height={image.height}
                      className={`w-full h-full object-cover hover:scale-110 transition-transform duration-700 ${
                        image.grayscale ? 'grayscale hover:grayscale-0' : ''
                      }`}
                      sizes="(max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                ))}
              </div>
              
              {/* Extra content to enable more scrolling effect with consistent gaps */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                {galleryImages.slice(0, 4).map((image, index) => (
                  <div 
                    key={`extra-${index}`}
                    className="overflow-hidden relative"
                  >
                    <div className="relative h-48 xl:h-64 w-full">
                      <Image 
                        src={image.url}
                        alt={`Behind the scenes extra ${index + 1}`}
                        width={image.width}
                        height={image.height}
                        className={`w-full h-full object-cover hover:scale-110 transition-transform duration-700 ${
                          image.grayscale ? 'grayscale hover:grayscale-0' : ''
                        }`}
                        sizes="(max-width: 1024px) 25vw, 20vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-12 pt-2 sm:py-16 lg:pb-20 lgpt-0 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-black mb-4 sm:mb-6 font-dream">
              What we create
            </h2>
            <div className="w-12 sm:w-16 h-px bg-black/20 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden cursor-pointer"
              >
                <Image 
                  src={service.image}
                  alt={service.title}
                  width={service.width}
                  height={service.height}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Dark overlay by default for text visibility */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-700"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-6 lg:p-8">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white transition-colors duration-700 mb-2 font-dream">
                    {service.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-white/90 group-hover:opacity-0 transition-all duration-700 mb-3 sm:mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-sm sm:text-base text-white/70 group-hover:opacity-0 transition-all duration-700 max-w-xs">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-dream font-light text-black mb-6 sm:mb-8">
              Cherished words
            </h2>
            <div className="w-12 sm:w-16 h-px bg-black/20 mx-auto"></div>
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-black transition-colors" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 lg:translate-x-12 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-black transition-colors" />
            </button>

            {/* Testimonial Content */}
            <div className="overflow-hidden mx-8 sm:mx-12 lg:mx-16">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 text-center px-2 sm:px-4 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                      <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black/20 mx-auto mb-6 sm:mb-8" />
                      
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 italic">
                        &quot;{testimonial.text}&quot;
                      </p>
                      
                      <div className="flex justify-center mb-4 sm:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-black/50 fill-current mx-1" />
                        ))}
                      </div>
                      
                      <p className="font-medium text-black tracking-wide text-base sm:text-lg">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 sm:mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-black w-6 sm:w-8' 
                      : 'bg-black/30 hover:bg-black/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 sm:mt-20">
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black font-dream">
                Ready to tell your story?
              </h3>
              
              <button  onClick={() => router.push('/contact')}
              className="bg-black text-white px-8 sm:px-12 cursor-pointer py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase hover:bg-gray-900 transition-all duration-300 hover:shadow-lg">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUsPage;