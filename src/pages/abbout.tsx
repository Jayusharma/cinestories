import React from 'react'
import Image from 'next/image'
const about = () => {
  return (
    <div className='bg-[#F6F3EC] w-[100vw]  pt-10 pb-10 '>
        <div className='w-full h-[12vh] relative flex justify-center items-center'>
            <Image 
          src="/cine.png" 
          alt="Interior detailing service" 
          width={200}
          height={300}               // 👈 this replaces width/height
          className="object-cover "
      />
        </div>
         <div className="">
            <h1 className="text-5xl lg:text-7xl font-thin text-center font-pali text-stone-700 leading-tight tracking-wide mb-10">
              Every picture tells a story.
            </h1>
          </div>


          <div className="text-center "> 
            <p className="text-lg lg:text-2xl text-stone-600 font-light font-serif leading-relaxed tracking-wide max-w-3xl mx-auto">
             We don&apos;t just capture weddings—we preserve the poetry of your story, the laughter between tears, and the still moments that speak the loudest.
            </p>
          </div>

           <div className="flex justify-center">
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-amber-300 to-transparent animate-scaleIn delay-400"></div>
          </div>

          {/* Philosophy */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg lg:text-2xl font-serif text-stone-600 font-light leading-relaxed tracking-wide">
                We believe in the art of invisible storytelling—capturing the unguarded laughter, 
                the stolen glances, and the quiet moments that become your most treasured memories. 
                
              </p>
            </div>
          </div>

          {/* Final Touch */}
          <div className="relative left-10 lg:left-[45vw] top-[4vh] mb-20  ">
            <p className="text-lg  text-stone-500 font-light italic tracking-wide">
              Because your love story deserves to be <span className='block md:inline'>told beautifully....</span>
            </p>
          </div>

          
    </div>
  )
}

export default about