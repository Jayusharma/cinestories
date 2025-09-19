import React from 'react'
import WeddingHero from '../pages/hero'
import About from '../pages/abbout'
import ParallaxSection from '../components/Parallax'
import Book from '../components/book'
import Footer from '@/components/Footer'
import Loader from '@/pages/Loader'

import InfiniteScroller from '../components/test'
import MasonryGallery from '@/pages/gallery'
import Founder from '@/components/founder'
import Stories from '@/components/stories'
const page = () => {
  return (
    <>
      
       <WeddingHero />
       <About/>
        <InfiniteScroller />
        <MasonryGallery />
        <Founder />
        <Stories />
        <ParallaxSection/>  
        <Book/>
        <Footer />
    
    </>
  )

}

export default page