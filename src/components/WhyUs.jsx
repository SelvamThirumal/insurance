import React from 'react';
import { 
  Zap, ShieldAlert, Headphones, MousePointer2, 
  Smartphone, BarChart3, CheckCircle2, ArrowRight
} from 'lucide-react';

export default function WhyUs() {
  const benefits = [
    {
      title: "Paperless Experience",
      desc: "Our 100% digital onboarding ensures you never have to deal with physical paperwork. From KYC to policy issuance, manage everything through our secure cloud-native infrastructure.",
      icon: <Smartphone className="text-blue-400" size={28} />,
      img: "https://images.unsplash.com/photo-1512428559083-a40ce9033afb?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "AI-Powered Claims",
      desc: "Using 'Kava-Bot' proprietary neural networks, we analyze claim veracity in real-time. This allows us to offer 30-minute expedited payouts for approved emergency claims.",
      icon: <Zap className="text-yellow-400" size={28} />,
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Institutional Support",
      desc: "Get 24/7 access to our specialized insurance advisors. Unlike standard call centers, our team is trained in complex policy law to provide you with expert financial guidance.",
      icon: <Headphones className="text-green-400" size={28} />,
      img: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 mb-16 overflow-hidden relative">
      
      {/* Background Decorative Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="tech-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Content Heavy Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-500/20">
              <BarChart3 size={14} /> The Kavasam Competitive Advantage
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-8 italic">
              Future-Proof <br /> 
              <span className="text-blue-500">Security.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg">
              We've replaced bureaucratic delays with algorithmic precision. Experience 
              insurance that moves at the speed of your life.
            </p>

            <div className="space-y-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex gap-6 group items-start p-6 rounded-3xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 shrink-0 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2 tracking-tight uppercase italic">{item.title}</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: FAQ & Trust UI */}
          <div className="relative">
            {/* Main Trust Card */}
            <div className="relative bg-white text-slate-900 p-10 lg:p-14 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(37,99,235,0.3)]">
              <h3 className="text-2xl font-black mb-10 tracking-tighter uppercase border-l-4 border-blue-600 pl-4">
                Transparent & <br />No Hidden Clauses
              </h3>
              
              <div className="space-y-6 mb-12">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <p className="font-black text-xs uppercase tracking-widest text-blue-600 mb-2">Policy Query #01</p>
                  <p className="font-bold text-lg leading-tight mb-2 italic">Are there hidden maintenance fees?</p>
                  <p className="text-slate-500 text-sm leading-relaxed">Absolutely not. Our pricing is inclusive of all taxes and service charges. What you quote is exactly what you pay.</p>
                </div>

                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <p className="font-black text-xs uppercase tracking-widest text-blue-600 mb-2">Policy Query #02</p>
                  <p className="font-bold text-lg leading-tight mb-2 italic">Can I switch plans mid-term?</p>
                  <p className="text-slate-500 text-sm leading-relaxed">Yes, our "Dynamic Shield" feature allows you to upgrade or port your coverage with pro-rata adjustments instantly.</p>
                </div>
              </div>

              {/* Stats Footer in Card */}
              <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white flex justify-between items-center group cursor-pointer overflow-hidden relative">
                 <div className="relative z-10">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Protection Grade</p>
                   <p className="text-2xl font-black italic">Institutional Tier-1</p>
                 </div>
                 <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-10 -translate-y-10"></div>
              </div>
            </div>

            {/* Floating Image Badge */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[10px] border-slate-900 overflow-hidden shadow-2xl hidden lg:block">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400" alt="customer-support" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}