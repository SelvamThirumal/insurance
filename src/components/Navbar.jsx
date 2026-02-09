import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll pannum pothu background change aaga
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
            <ShieldCheck size={26} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
            Kavasam
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 text-[13px] font-bold text-slate-600 uppercase tracking-widest">
            <a href="#plans" className="hover:text-blue-600 flex items-center gap-1 transition-colors">
              Insurance Plans <ChevronDown size={14} />
            </a>
            <a href="#whyus" className="hover:text-blue-600 transition-colors">Why Kavasam</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Claims</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Renew</a>
          </div>

          <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>

          <div className="flex items-center gap-6">
            <a href="tel:1800123456" className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors">
              <PhoneCall size={18} className="text-blue-600" />
              <span className="text-sm">1800-123-456</span>
            </a>
            
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
      }`}>
        <div className="p-6 flex flex-col gap-6 font-bold text-slate-600 uppercase tracking-widest text-sm">
          <a href="#plans" onClick={() => setIsOpen(false)}>Insurance Plans</a>
          <a href="#whyus" onClick={() => setIsOpen(false)}>Why Kavasam</a>
          <a href="#" onClick={() => setIsOpen(false)}>Claims</a>
          <a href="#" onClick={() => setIsOpen(false)}>Renew</a>
          <hr className="border-slate-100" />
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl">Login / Register</button>
        </div>
      </div>
    </nav>
  );
}