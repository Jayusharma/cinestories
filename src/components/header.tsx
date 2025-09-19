"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const GlassHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader, { passive: true });
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Wedding films", path: "/wedding-films" },
    { name: "Couple stories", path: "/couple-stories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/Faq" },
  ];

  return (
    <>
      {/* Light beam effect from top - exactly like in the image */}
      
        {/* Main light beam */}
       
    

      <header
        className={`fixed top-0  left-0 right-0  z-50 transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
      <div className="fixed top-[-5px] left-0 right-0 pointer-events-none z-50 h-16">
  {/* Light gradient with opacity fade */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#e4d0b5]/40 via-[#b7af9e]/50 to-transparent blur-xl" />
  
  {/* Extra subtle glow at very top */}

</div>
        <div className="backdrop-blur-sm bg-white/10 border border-white/10  px-4 py-5 shadow-2xl hover:bg-white/8 hover:border-white/20 transition-all duration-500 ease-out">
          <div className="flex justify-between items-center">
            {/* Logo Left */}
            <div className="flex items-center group cursor-pointer pl-2 md:pl-4">
              <h1 className="text-2xl md:text-4xl font-Dogla text-white drop-shadow-lg logo-glow">
                Cine Stories
              </h1>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-6">
              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`relative text-sm font-semibold font-serif transition-all duration-300 group px-3 py-2 drop-shadow-sm ${
                      pathname === item.path ? "text-white" : "text-gray-100"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div
                      className={`absolute inset-x-0 h-0.5 rounded-full transition-transform duration-300 left-1 ${
                        pathname === item.path
                          ? "scale-x-70 bg-white"
                          : "scale-x-0 group-hover:scale-x-70 bg-white/50"
                      }`}
                    ></div>
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Btn */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative w-5 h-5">
                  <Menu
                    className={`w-5 h-5 text-white absolute transition-all duration-300 drop-shadow-sm ${
                      isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    className={`w-5 h-5 text-white absolute transition-all duration-300 drop-shadow-sm ${
                      isMenuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
              isMenuOpen ? "max-h-96 opacity-100 pb-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-6 pb-2 border-t border-white/10 mt-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium transform hover:translate-x-1 drop-shadow-sm ${
                      pathname === item.path
                        ? "text-white bg-white/10"
                        : "text-gray-200 hover:text-white hover:bg-white/10"
                    }`}
                    style={{
                      animation: isMenuOpen
                        ? `slideIn 0.5s ease-out ${index * 0.1}s both`
                        : "none",
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
              .logo-glow {
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
        }
        `}</style>
      </header>
    </>
  );
};

export default GlassHeader;