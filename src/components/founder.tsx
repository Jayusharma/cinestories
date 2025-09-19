import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#f8f5ee] pt-12  px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-10">
        
        {/* Left - Image Section */}
        <div className="flex flex-col  md:w-1/2 ">
          <div className="relative size-[200px] md:size-[280px] rounded-full  overflow-hidden  ">
            <Image 
              src="/qq.jpg" 
              alt="Follow us on Instagram" 
              fill
              className="w-full h-full object-cover grayscale-[50%]"
            />
          </div>
          <div className="relative size-[200px] md:size-[280px] rounded-full  overflow-hidden top-[-120px] md:top-[-120px] left-30 md:left-40">
            <Image 
              src="/ll.jpg" 
              alt="Follow us on Instagram" 
              fill
              className="w-full h-full object-cover grayscale-[50%] "
            />
          </div>
          <div> </div>

          
        </div>

        {/* Right - Text Section */}
        <div className="md:w-1/2 text-center md:text-center">
          <h2 className="text-4xl  text-gray-800 mb-4 font-dream">
            Celebrating Love <br />
            <span className="italic underline font-dream">with Every Frame</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            When we started KnotsbyAMP in 2014, it was more than just about clicking pictures—
            it was about capturing love, joy, and everything in between. Back then, <b>Soumi</b> 
            was a lawyer and MBA, and Anupam, a BITS Pilani grad, but life had other plans. 
            Our shared passion for storytelling brought us together, and the rest, as they say, 
            is history.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our journey has been nothing short of magical. Inspired by travel, street photography, 
            and our love for experimenting with light, we’ve crafted a unique style—a mix of candid 
            moments, fine art, and fashion vibes. It’s not just photography for us; it’s weaving 
            stories that couples cherish forever.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From being part of 600+ destination weddings to earning titles like “Wedding Photographer 
            and Filmmaker of the Year,” this adventure has been surreal. And with over 23 million views 
            on our wedding films, we’re reminded daily of the love we’ve been blessed to capture.
          </p>
        </div>
      </div>
    </section>
  );
}
