import React from 'react';
import { motion } from 'motion/react';
import { Activity, Shield, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-racing-red mb-4 flex items-center gap-3 italic tracking-widest text-sm">
            <span className="w-12 h-[1px] bg-racing-red shadow-[0_0_10px_rgba(255,62,62,0.5)]"></span>
            SYSTEM_INITIALIZED
          </div>
          <h1 
            className="text-7xl md:text-9xl font-black mb-8 italic-heading leading-[0.8] uppercase tracking-tighter"
          >
            AUWEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-white to-racing-red bg-[length:200%_auto] animate-[gradient_5s_linear_infinite] glow-red">
              LIMANTORO
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mb-10 font-mono italic leading-relaxed border-l-2 border-racing-red/30 pl-6">
            Full-Stack Developer & UI/UX Designer specialized in high-performance, futuristic digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-racing cursor-pointer"
            >
              <span>EXECUTE_MISSION</span>
            </motion.a>
            <motion.a 
              href="#works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white text-white font-bold font-mono uppercase tracking-tighter cursor-pointer hover:bg-white hover:text-asphalt transition-all"
              style={{ transform: 'skewX(-15deg)' }}
            >
              <span style={{ display: 'inline-block', transform: 'skewX(15deg)' }}>VIEW_ARCHIVES</span>
            </motion.a>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { icon: Activity, label: 'System Load', value: '2.4%' },
              { icon: Shield, label: 'Security', value: 'Encrypted' },
              { icon: Cpu, label: 'Uptime', value: '99.9%' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="racing-border p-4 bg-carbon/60 backdrop-blur-sm"
              >
                <item.icon className="w-5 h-5 text-racing-red mb-2" />
                <div className="text-[10px] font-mono text-gray-500 uppercase italic">{item.label}</div>
                <div className="text-xs font-mono text-white font-bold italic">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Profile Image Frame - Enhanced Wheel Style */}
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* Outer Rotating Ring */}
            <div className="absolute inset-0 rounded-full border border-racing-red/20 border-dashed animate-[spin_60s_linear_infinite]"></div>
            
            {/* Middle Glow Ring */}
            <div className="absolute inset-4 rounded-full border-2 border-racing-red/10 shadow-[0_0_60px_rgba(255,62,62,0.15)]"></div>
            
            {/* Inner Technical Ring */}
            <div className="absolute inset-8 rounded-full border-4 border-carbon shadow-2xl bg-carbon/40 backdrop-blur-sm flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-t-2 border-racing-red animate-[spin_3s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border-b-2 border-white/20 animate-[spin_5s_linear_infinite_reverse]"></div>
              
              <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-carbon shadow-inner">
                <img 
                  src="/profilewen.jpeg" 
                  alt="Auwen Limantoro" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600&h=600";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Decorative Racing Accents - Skewed Brackets */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-racing-red rounded-tr-[40px] opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-white rounded-bl-[40px] opacity-30"></div>
            
            {/* Floating Speed Accents */}
            <motion.div 
              animate={{ x: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 -left-12 w-16 h-[1px] bg-racing-red"
            />
            <motion.div 
              animate={{ x: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/3 -right-16 w-24 h-[1px] bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
