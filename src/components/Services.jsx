import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, Car, Home, ShieldCheck, 
  ChevronRight, Check, Sparkles, Shield, ArrowUpRight
} from 'lucide-react';
import goldloan from '../assets/goldloan.jpeg';
import homeloan from '../assets/homeloan.jpeg';
import policy from '../assets/policy.jpeg';
import insurancepolicy from '../assets/insurancepolicy.jpeg';

const plans = [
  {
    id: 1,
    title: "Health Supreme",
    image: goldloan,
    icon: <HeartPulse size={24} />,
    description: "Our Health Supreme plan offers an expansive safety net for your family. From cashless treatments at over 12,000+ top-tier medical institutions to zero room rent restrictions, we ensure your recovery is your only focus.",
    price: "From $12/mo",
    color: "from-blue-600 to-indigo-700",
    bg: "bg-blue-50 text-blue-600",
    features: ["Global Treatment Cover", "AYUSH Hospitalization", "Daily Cash Allowance"],
    badge: "Most Popular"
  },
  {
    id: 2,
    title: "Motor Shield",
    image: homeloan,
    icon: <Car size={24} />,
    description: "Drive with absolute peace of mind. Motor Shield provides comprehensive zero-depreciation coverage for your vehicles, coupled with 24/7 on-road repair assistance and lightning-fast digital claim settlements.",
    price: "From $8/mo",
    color: "from-emerald-600 to-teal-700",
    bg: "bg-emerald-50 text-emerald-600",
    features: ["Zero-Depreciation", "Engine Protection", "Personal Accident Cover"],
    badge: "Instant Approval"
  },
  {
    id: 3,
    title: "Term Life Plus",
    image: policy  ,
    icon: <ShieldCheck size={24} />,
    description: "Securing the financial future of your loved ones is our core mission. Term Life Plus offers massive sum-assured benefits with a simple, transparent claim process that protects your family's lifestyle even in your absence.",
    price: "From $20/mo",
    color: "from-indigo-600 to-purple-700",
    bg: "bg-indigo-50 text-indigo-600",
    features: ["Critical Illness Rider", "Tax Benefit Savings", "Death Benefit Multiplier"],
    badge: "High Value"
  },
  {
    id: 4,
    title: "Home Secure",
    image: insurancepolicy,
    icon: <Home size={24} />,
    description: "Your home is more than just a building; it's an asset. Home Secure provides total protection against natural disasters, fire, and theft, covering both the structure and the precious valuables inside.",
    price: "From $5/mo",
    color: "from-amber-600 to-orange-700",
    bg: "bg-amber-50 text-amber-600",
    features: ["Structural Integrity", "Jewelry Protection", "Public Liability Cover"],
    badge: "Trending"
  }
];

export default function Services() {
  return (
    <section id="plans" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
        <Shield size={800} className="translate-x-1/4 -translate-y-1/4 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Premium Protection Tier</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-6">
              Insurance <br />
              <span className="text-blue-600">Perfected.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              We don't just sell policies; we provide a fortress of safety for your lifestyle. 
              Explore our diverse range of customized coverage plans.
            </p>
          </div>
          <button className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all">
            Browse All Categories <ArrowUpRight size={18} />
          </button>
        </div>

        {/* --- Card Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="group relative pt-10 h-full">
              
              {/* SHIELD UI CARD */}
              <div className="bg-white rounded-t-[6rem] rounded-b-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col h-full relative z-10 overflow-hidden hover:border-blue-500/20 transition-all duration-500">
                
                {/* Image Header */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img src={plan.image} alt={plan.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute bottom-4 left-8 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl ${plan.bg} border-4 border-white`}>
                    {plan.icon}
                  </div>
                </div>

                <div className="p-8 pt-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{plan.badge}</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">{plan.title}</h3>
                  
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-6 font-medium">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        <Check size={12} className="text-green-500" strokeWidth={4} /> {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Premium Starting</p>
                      <p className="text-xl font-black text-slate-900">{plan.price}</p>
                    </div>
                    <button className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${plan.color} shadow-lg shadow-blue-200 group-hover:rotate-45 transition-all`}>
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Shield Pointy Bottom */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-b border-r border-slate-100 rotate-45 z-0 group-hover:border-blue-500/20 transition-all"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}