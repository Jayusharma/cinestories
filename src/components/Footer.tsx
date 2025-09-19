import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2D1810] via-[#1A0F0A] to-black text-stone-300 relative overflow-hidden mt-1 bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:mx-[20vw] xl:px-8 pt-8 sm:pt-10 pb-5 relative z-10">
        
        {/* Mobile Logo Section - Centered at top */}
        <div className="flex justify-center mb-8 lg:hidden">
          <div className="w-40 sm:w-48">
            <Image 
              src={"/cine.png"} 
              alt="Cine Stories" 
              width={300} 
              height={300} 
              className="object-cover w-full h-auto" 
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-0">
          
          {/* Navigation */}
          <div className="lg:col-span-1 order-1 sm:order-1 lg:order-1">
            <h3 className="text-white font-dream text-lg uppercase tracking-wide mb-4 sm:hidden">Navigation</h3>
            <nav className="space-y-4 sm:space-y-6">
              {[
                { name: "Home", href: "/" },
                { name: "Wedding Films", href: "/wedding-films" },
                { name: "Couple Stories", href: "/couple-shoot" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-stone-300 hover:text-white transition-colors font-dream duration-300 font-light tracking-wide text-sm sm:text-md uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Brand Section - Desktop Only */}
          <div className="lg:col-span-1 hidden lg:block order-2">
            <div className="mt-10 translate-x-[-20%]">
              <Image 
                src={"/cine.png"} 
                alt="Cine Stories" 
                width={500} 
                height={500} 
                className="object-cover" 
              />
            </div>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-1 order-2 sm:order-2 lg:order-3 lg:ml-6">
            <h3 className="text-white font-dream text-lg uppercase tracking-wide mb-4 sm:hidden">Contact</h3>
            
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Phone className="w-4 h-4 text-stone-300 flex-shrink-0" />
                <span className="text-stone-300 font-light text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Mail className="w-4 h-4 text-stone-300 flex-shrink-0" />
                <span className="text-stone-300 font-light text-sm break-all sm:break-normal">
                  hello@cinestories.com
                </span>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />
                <span className="text-stone-300 font-light text-sm leading-relaxed">
                  123 Creative Ave<br />
                  New York, NY 10001
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-dream text-sm uppercase tracking-wide mb-4 sm:hidden">Follow Us</h4>
              <div className="flex space-x-4 sm:space-x-6 justify-start sm:justify-start">
                {[
                  { icon: Instagram, href: "https://instagram.com/yourpage" },
                  { icon: Facebook, href: "https://facebook.com/yourpage" },
                  { icon: Twitter, href: "https://twitter.com/yourpage" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 border border-stone-300 hover:border-white rounded-full flex items-center justify-center hover:bg-stone-500 transition-all duration-300"
                  >
                    <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 mt-8 sm:mt-10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-stone-500 text-xs font-light tracking-wide text-center sm:text-left">
              © 2024 CINE STORIES. ALL RIGHTS RESERVED.
            </div>
            <div className="flex space-x-6 sm:space-x-8 text-xs">
              <Link href="/privacy" className="text-stone-500 hover:text-stone-300 transition-colors font-light tracking-wide">
                PRIVACY
              </Link>
              <Link href="/terms" className="text-stone-500 hover:text-stone-300 transition-colors font-light tracking-wide">
                TERMS
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Hidden on mobile */}
        <div className="absolute top-12 right-12 w-px h-24 bg-stone-700 opacity-30 hidden lg:block"></div>
        <div className="absolute bottom-12 left-12 w-24 h-px bg-stone-700 opacity-30 hidden lg:block"></div>
      </div>
    </footer>
  );
};

export default Footer;
