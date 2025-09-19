"use client";
import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
const Insta = () => {
  const router = useRouter();
  
  return (
    <div>
     <section className="py-24 px-6 bg-[#F6F3EC]">
            <div className="max-w-7xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-light text-black/80 mb-6 font-dream">
                  Follow our journey
                </h2>
                <p className="text-gray-600 text-lg font-serif max-w-2xl mx-auto leading-relaxed">
                  Discover behind-the-scenes moments, latest work, and the stories that inspire us daily
                </p>
                <div className="w-16 h-px bg-black/20 mx-auto mt-8"></div>
              </div>
    
              {/* Instagram Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 max-w-6xl mx-auto">
                <div className="aspect-square overflow-hidden group">
                  <Image 
                    src='/img4.webp' 
                    alt='Follow us on Instagram' 
                    width={300}
                    height={300}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className="aspect-square overflow-hidden group">
                  <Image 
                    src='/image1.webp' 
                    alt='Follow us on Instagram' 
                    width={300}
                    height={300}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className="aspect-square overflow-hidden group">
                  <Image 
                    src='/img5.webp' 
                    alt='Follow us on Instagram' 
                    width={300}
                    height={300}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className="aspect-square overflow-hidden group">
                  <Image 
                    src='/image2.webp' 
                    alt='Follow us on Instagram' 
                    width={300}
                    height={300}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className="aspect-square overflow-hidden group">
                  <Image 
                    src='/img6.webp' 
                    alt='Follow us on Instagram' 
                    width={300}
                    height={300}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
              </div>
    
              {/* Instagram Handle */}
              <div className="text-center mt-12">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 text-black hover:text-gray-600 transition-colors duration-300 group"
                >
                  <span className="text-lg font-serif">@studioname</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
    
            </div>
          </section>
          <section className="py-24 px-6 bg-white/95">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Elegant Header */}
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-light text-black mb-8 font-dream leading-none">
              Let's create something
              <span className="block italic text-black/70">beautiful together</span>
            </h2>
            <div className="w-20 h-px bg-black/30 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg font-serif leading-relaxed max-w-2xl mx-auto">
              Every love story is unique, and we're here to capture yours with the artistry 
              and authenticity it deserves.
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-12">
            
            {/* Primary CTA */}
            <div>
              <button onClick={() => router.push('/contact')}
              className="bg-black text-white px-12 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-gray-900 transition-all duration-300 hover:shadow-lg">
                Get in Touch
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-8">
              <div className="w-16 h-px bg-black/20"></div>
              <span className="text-black/40 text-sm font-serif">or</span>
              <div className="w-16 h-px bg-black/20"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <div>
                <a 
                  href="mailto:hello@studio.com" 
                  className="text-black hover:text-gray-600 transition-colors duration-300 text-lg font-serif"
                >
                  hello@studio.com
                </a>
              </div>
              
              
            </div>

          </div>
          
        </div>
      </section>
          </div>
  )
}

export default Insta