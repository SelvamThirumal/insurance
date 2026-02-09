import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BadgeCheck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import goldloan from '../assets/goldloan.jpeg';
import homeloan from '../assets/homeloan.jpeg';
import policy from '../assets/policy.jpeg';
import insurancepolicy from '../assets/insurancepolicy.jpeg';
const sliderImages = [
  {
    url: goldloan,
    caption: "Institutional Trust for Your Family"
  },
  {
    url: homeloan,
    caption: "Comprehensive Property Protection"
  },
  {
    url: policy,
    caption: "Global Standard Health Coverage"
  },
  {
    url: insurancepolicy,
    caption: "Secure Your Future Legacy"
  },
  {
    url: insurancepolicy,
    caption: "Premium Motor Vehicle Insurance"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-20 lg:pt-32 pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content (Same as before - Text Heavy) */}
        <div className="z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-[0.2em] border border-blue-100">
            <BadgeCheck size={14} /> IRDAI Approved & Registered
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1] tracking-tighter mb-8 italic uppercase">
            Protection <span className="text-blue-600">Reimagined</span> <br />
            With Absolute <span className="text-blue-600">Trust.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mb-10">
            For over two decades, we have provided stable financial protection to millions. 
            Experience a blend of traditional reliability and modern technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-2">
              View All Plans <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Slider (Images will show here) */}
        <div className="relative h-[400px] lg:h-[550px] w-full order-1 lg:order-2">
          <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-100">
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img 
                  src={sliderImages[current].url} 
                  alt="Insurance Service" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <p className="text-white font-black text-2xl uppercase italic tracking-tighter flex items-center gap-2">
                    <ShieldCheck className="text-blue-400" /> {sliderImages[current].caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="absolute bottom-14 right-14 flex gap-3">
            <button onClick={() => setCurrent(current === 0 ? 4 : current - 1)} className="p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-black transition-all">
              <ChevronLeft />
            </button>
            <button onClick={() => setCurrent(current === 4 ? 0 : current + 1)} className="p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-black transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}