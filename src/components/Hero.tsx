import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        <div id="hero-content" className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-blue-50"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-bold text-gray-700 italic">Trusted by our community</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight leading-[0.9]"
          >
            Love <br />
            <span className="text-blue-600">your smile</span> <br />
            again.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-sm leading-relaxed"
          >
            At Texas.Ave Dental, we merge state-of-the-art technology with a compassionate, human approach. DR D. Rodriguez and his expert team are dedicated to crafting healthy, radiant smiles in a space that feels like home.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button 
              id="hero-cta-primary"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-95"
            >
              Schedule Your Visit 
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              id="hero-cta-secondary"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold border border-gray-200 hover:bg-gray-50 transition-all active:scale-95"
            >
              Explore Services
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-8 pt-8 border-t border-gray-200/50"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?u=${i}`} 
                  className="w-10 h-10 rounded-full border-4 border-white"
                  alt={`Patient ${i}`}
                />
              ))}
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Trusted by 500+ local patients</p>
            </div>
          </motion.div>
        </div>

        <div id="hero-visual" className="relative flex items-center justify-start min-h-[500px]">
          {/* Floating background elements */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"
          />
          <motion.div 
            animate={{ 
              y: [0, 30, 0],
              x: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-30"
          />

          <motion.div 
            id="doctor-widget"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md"
          >
            {/* The Main Image Widget */}
            <div className="relative rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl bg-white aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
                alt="DR D. Rodriguez" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Lead Clinician</p>
                <h3 className="text-2xl font-bold">DR D. Rodriguez</h3>
              </div>
            </div>

            {/* Floating Stats Widget */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-12 p-6 bg-white rounded-3xl shadow-xl border border-blue-50 flex items-center gap-4"
            >
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Experience</p>
                <p className="text-xl font-bold text-gray-900">15+ Years</p>
              </div>
            </motion.div>

            {/* Floating Review Widget */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-12 p-6 bg-white rounded-3xl shadow-xl border border-blue-50"
            >
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-900 italic">"The most gentle dentist I've ever visited."</p>
              <p className="text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-tight">— Robert K.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 h-full w-1/3 bg-white/20 -skew-x-12 transform translate-x-1/2"></div>
    </section>
  );
}
