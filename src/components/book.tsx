import React from 'react'
import Image from 'next/image'
const Book = () => {
  return (
    <div className=' h-[100vh] md:h-[60vh] w-[100vw] bg-[#695e4a] ' >
        <div className=' w-full md:w-[75vw] h-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 mx-auto'>
            <div className='relative pl-6 '>
                <div className='h-[95%] md:h-[95%] w-[70%] md:w-[65%]  z-40 relative top-[-5%] md:top-2 '>
                    <Image 
                        src='/img4.webp' 
                        alt='Follow us on Instagram' 
                        width={500}
                        height={500}
                        className='w-full h-full object-cover grayscale'
                    />
                </div>
                <div className='h-[70%] md:h-[70%] w-[50%] md:w-[40%] border border-white absolute z-50 left-[40%] md:left-[40%] top-[5%] md:top-[15%]'>
                  <Image 
                        src='/img6.webp' 
                        alt='Follow us on Instagram' 
                        width={500}
                        height={500}
                        className='w-full h-full object-cover grayscale'
                    />
                </div>
            </div>
            <div className='my-auto text-white max-w-xl leading-10 text-center md:text-start '>
                <h1 className='text-3xl md:text-5xl font-dream tracking-widest text-center md:text-start '>&apos;SEARCH NO FURTHER</h1>
                <h1 className='text-2xl md:text-4xl font-dream tracking-widest ml-3 mb-5 lg:mb-6'> YOU FOUND CINE !!&quot;</h1>
                <p className='text-sm md:text-lg font-serif ml-3 mb-10 leading-relaxed'>&quot;There are moments in life you wish you could relive forever — Cine Stories makes that possible. From the tiniest details to the grandest emotions, every frame feels alive. Their work is not just photography or film; it&apos;s poetry in motion. If you&apos;re searching for a team that understands love, laughter, and legacy — your search ends here.&quot;</p>
                <h1 className='text-3xl font-pali font-black tracking-widest ml-3 mb-10 underline underline-offset-10 decoration-2'>Book Now</h1>
            </div>
        </div>

    </div>
  )
}

export default Book