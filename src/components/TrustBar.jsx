import React from 'react';
import { Award, Users, Hospital, ShieldCheck, Activity, Globe, Scale, Lock, ArrowUpRight } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: "Claims Settlement",
    value: "99.9%",
    description: "Industry-leading payout ratio verified by independent statutory audits.",
    icon: <ShieldCheck size={24} />,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    label: "Active Families",
    value: "2.4M+",
    description: "Serving millions with a robust capital reserve and customer-first ethics.",
    icon: <Users size={24} />,
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    label: "Network Hospitals",
    value: "12,000+",
    description: "Instant cashless access to premium healthcare facilities across India.",
    icon: <Hospital size={24} />,
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    label: "Digital Approval",
    value: "30 Min",
    description: "AI-powered rapid underwriting for near-instant policy issuance.",
    icon: <Activity size={24} />,
    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=400"
  }
];

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-24 max-w-7xl mx-auto px-6">
      <div className="bg-slate-900 rounded-[3rem] p-1 shadow-2xl overflow-hidden">
        <div className="bg-white rounded-[2.8rem] p-8 lg:p-14">
          
          {/* Upper Info Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
                Institutional <span className="text-blue-600">Integrity</span>
              </h2>
              <p className="text-slate-500 mt-3 text-sm font-medium leading-relaxed">
                Kavasam operates under strict IRDAI regulations, ensuring every policyholder 
                is backed by a multi-layered financial safety net. Our metrics aren't just 
                numbers; they are our promise.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-slate-50 text-slate-900 rounded-2xl font-black text-[10px] tracking-widest uppercase border border-slate-100 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                Audit Reports <ArrowUpRight size={14}/>
              </button>
            </div>
          </div>

          {/* New Modern Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="group relative overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100 p-8 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500">
                {/* Background Image Reveal on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src={stat.img} alt="stats" className="w-full h-full object-cover grayscale" />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {stat.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-blue-700 transition-colors">
                      {stat.value}
                    </h3>
                    <div>
                      <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-2">
                        {stat.label}
                      </p>
                      <p className="text-[12px] leading-relaxed text-slate-500 font-bold uppercase tracking-tight">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Footer Bar */}
          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap justify-between items-center gap-8">
            <div className="flex flex-wrap gap-8 items-center">
              {[
                { icon: <Award size={16}/>, text: "IRDAI LIC. 102/26" },
                { icon: <Scale size={16}/>, text: "STATUTORY COMPLIANT" },
                { icon: <Lock size={16}/>, text: "ISO 27001 SECURE" },
                { icon: <Globe size={16}/>, text: "PAN-INDIA SERVICE" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 font-black text-[9px] tracking-[0.2em] text-slate-400 uppercase">
                  <span className="text-blue-500">{item.icon}</span> {item.text}
                </div>
              ))}
            </div>
            <div className="text-[9px] font-bold text-slate-300 max-w-[200px] text-right uppercase tracking-tighter">
              *All financial data is subject to annual regulatory verification.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}