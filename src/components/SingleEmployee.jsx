import React from 'react';
import { 
  Mail, ShieldCheck, BadgeCheck, Linkedin, 
  Building2, Fingerprint, Code2, Terminal
} from 'lucide-react';
import empid from '../assets/empid.jpeg';

export default function SingleEmployee() {
  const employee = {
    id: "INM-2026-SP01",
    name: "Moula Hussain",
    role: "Web Developer",
    dept: "Innomatrics Tech",
    img: empid,
    email: "moula.h@innomatrics.com",
    verified: true
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* --- Left Side: Text Content --- */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
            <Code2 size={14} /> Lead Developer Spotlight
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
            Building the Digital <br />
            <span className="text-blue-600">Infrastructure.</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-md">
            Moula Hussain is the lead architect behind the Innomatrics digital ecosystem. 
            Specializing in high-performance web applications and secure cloud integration, 
            he ensures our insurance platforms are robust, scalable, and user-centric.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
             <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 border border-slate-100 px-3 py-1 rounded-lg">
                <Terminal size={12} className="text-blue-500"/> REACT / TAILWIND
             </div>
             <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 border border-slate-100 px-3 py-1 rounded-lg">
                <ShieldCheck size={12} className="text-blue-500"/> SECURE ARCHITECTURE
             </div>
          </div>
        </div>

        {/* --- Right Side: Compact ID Card --- */}
        <div className="relative group w-72 shrink-0">
          
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
            
            {/* Small Brand Header */}
            <div className="bg-slate-900 h-28 p-6 text-white relative">
              <div className="absolute -right-4 -top-4 opacity-5">
                <Building2 size={80} />
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h4 className="text-xs font-black tracking-widest italic">INNOMATRICS</h4>
                  <p className="text-[8px] text-blue-400 font-bold uppercase tracking-widest mt-1">Tech Division</p>
                </div>
                <Fingerprint size={18} className="text-blue-400 opacity-50" />
              </div>
            </div>

            {/* Compact Profile Image */}
            <div className="flex justify-center -mt-14 relative z-20">
              <div className="relative">
                <div className="w-28 h-28 rounded-[2rem] border-[4px] border-white shadow-lg overflow-hidden bg-slate-100">
                  <img src={employee.img} alt={employee.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-xl border-2 border-white">
                  <BadgeCheck size={14} />
                </div>
              </div>
            </div>

            {/* Compact Details */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">{employee.name}</h3>
              <p className="text-blue-600 font-black text-[9px] uppercase tracking-[0.15em] mt-1 mb-6">{employee.role}</p>
              
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 mb-6 text-left">
                <div className="flex justify-between text-[8px] font-black uppercase tracking-tighter">
                  <span className="text-slate-400">ID:</span>
                  <span className="text-slate-900">{employee.id}</span>
                </div>
                <div className="flex justify-between text-[8px] font-black uppercase tracking-tighter">
                  <span className="text-slate-400">Level:</span>
                  <span className="text-green-600">L4 ARCHITECT</span>
                </div>
              </div>

              {/* Minimal Actions */}
              <div className="flex gap-2">
                <a href={`mailto:${employee.email}`} className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-black text-[8px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-1">
                  <Mail size={12} /> Contact
                </a>
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 cursor-pointer border border-slate-200">
                  <Linkedin size={14} />
                </div>
              </div>
            </div>

            {/* Footer Strip */}
            <div className="bg-slate-50 py-2 border-t border-slate-100">
               <p className="text-[7px] font-black text-slate-300 text-center uppercase tracking-[0.3em]">Institutional ID Card</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}