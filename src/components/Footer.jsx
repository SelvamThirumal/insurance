import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Facebook, Twitter, Instagram, Linkedin, 
  Mail, Phone, MapPin, ExternalLink, Banknote, Landmark, Wallet
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0f1c] text-slate-300 pt-24 pb-10 overflow-hidden">
      
      {/* --- Money & Growth Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Floating Currency Symbols */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [0, -100], 
              opacity: [0, 1, 0],
              x: Math.sin(i) * 50 
            }}
            transition={{ 
              duration: 8 + i, 
              repeat: Infinity, 
              delay: i * 2,
              ease: "linear" 
            }}
            className="absolute text-blue-500/40 font-black text-6xl"
            style={{ 
              left: `${15 * i}%`, 
              bottom: '-10%' 
            }}
          >
            {i % 2 === 0 ? '₹' : '$'}
          </motion.div>
        ))}
        
        {/* Abstract Financial Lines */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Trust Statement */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 mb-16 border-b border-slate-800/60 gap-8">
          <div className="max-w-xl">
             <div className="flex items-center gap-3 text-white font-black text-3xl tracking-tighter mb-4">
                <ShieldCheck className="text-blue-500" size={40} />
                KAVASAM <span className="text-blue-500">SHIELD</span>
             </div>
             <p className="text-slate-400 font-medium leading-relaxed">
               Managing over <span className="text-white font-bold">₹25,000 Crores</span> in assets under management (AUM). 
               Our financial stability is your family's ultimate fortress.
             </p>
          </div>
          <div className="flex gap-4 items-center bg-slate-800/40 p-6 rounded-[2rem] border border-slate-700/50 backdrop-blur-md">
            <div className="p-3 bg-blue-600 rounded-xl text-white">
              <Landmark size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Institutional Tier</p>
              <p className="text-xl font-black text-white italic">AA+ Rated Stability</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Quick Contact Card */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] italic border-l-2 border-blue-600 pl-4">Headquarters</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <span className="leading-relaxed">Kavasam Financial Hub, <br />Level 12, OMR IT Park, <br />Chennai, TN 600096</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <span className="font-bold">1800-KAVA-700 (Toll Free)</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <span>legal@kavasam.com</span>
              </li>
            </ul>
          </div>

          {/* Insurance Portfolios */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] italic border-l-2 border-blue-600 pl-4">Portfolios</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-blue-400 transition-all flex items-center gap-2 group"><Wallet size={14} className="group-hover:text-blue-400 transition-all"/> Wealth Management</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all flex items-center gap-2 group"><Banknote size={14} className="group-hover:text-blue-400 transition-all"/> Term Life Coverage</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all">Health Supreme Pro</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all">Corporate Shield</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all">Marine & Cargo</a></li>
            </ul>
          </div>

          {/* Governance */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] italic border-l-2 border-blue-600 pl-4">Governance</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-all">Investor Relations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all">Statutory Disclosures</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all">Board of Directors</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all">Public Ombudsman</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all flex items-center gap-2">IRDAI Portal <ExternalLink size={12}/></a></li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] italic border-l-2 border-blue-600 pl-4">Follow Trust</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Join our digital community for real-time claim updates and financial tips.</p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Legal Disclosure Box --- */}
        <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-[2rem] mb-12">
          <div className="flex items-center gap-2 text-blue-500 mb-4">
            <ShieldCheck size={16} />
            <p className="text-[10px] font-black uppercase tracking-widest">Official Statutory Information</p>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-500 italic uppercase tracking-tighter">
            * Kavasam Insurance Limited | CIN: L66010TN2026PLC000001 | Registered Office: Fintech Towers, OMR, Chennai. 
            Insurance is the subject matter of solicitation. The product information is indicative of the terms and conditions 
            and does not constitute a legal contract. For more details on risk factors and exclusions, please read the sales brochure 
            carefully before concluding a sale. IRDAI Registration No. 123/2026.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-800/60">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
            © {currentYear} KAVASAM INSURANCE LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 opacity-30 grayscale contrast-125">
             <span className="text-[9px] font-bold border border-slate-600 px-2 py-1">PCI COMPLIANT</span>
             <span className="text-[9px] font-bold border border-slate-600 px-2 py-1">ISO 27001</span>
             <span className="text-[9px] font-bold border border-slate-600 px-2 py-1">IRDAI CERTIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}