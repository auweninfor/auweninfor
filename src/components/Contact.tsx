import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Github, Mail, MessageSquare, Send } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/auwenlimantoro_', color: 'hover:text-pink-500', value: '@auwenlimantoro_' },
  { name: 'WhatsApp', icon: MessageSquare, href: 'https://wa.me/6281257592626', color: 'hover:text-green-500', value: '081257592626' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/auweninfor', color: 'hover:text-white', value: 'auweninfor' },
  { name: 'Email', icon: Mail, href: 'mailto:auwenlimantoro@gmail.com', color: 'hover:text-cyber-cyan', value: 'auwenlimantoro@gmail.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-racing-red/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-racing-red mb-2 flex items-center gap-2 italic">
              <span className="w-8 h-[2px] bg-racing-red"></span>
              PIT_STOP
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 italic">
              READY TO <span className="text-racing-red">COLLABORATE?</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-md font-mono text-sm leading-relaxed italic">
              System is online and ready for new directives. Reach out via the encrypted channels below or send a direct transmission.
            </p>

            <div className="space-y-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-4 p-4 bg-carbon/40 border border-white/5 group transition-all ${link.color}`}
                  style={{ transform: 'skewX(-10deg)' }}
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-current group-hover:text-black transition-all" style={{ transform: 'skewX(10deg)' }}>
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div style={{ transform: 'skewX(10deg)' }}>
                    <div className="text-[10px] font-mono text-gray-500 uppercase italic">{link.name}</div>
                    <div className="text-sm font-mono font-bold italic">{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="racing-border p-8 bg-carbon/60 backdrop-blur-md"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-gray-500 uppercase italic">Identification</label>
                  <input 
                    type="text" 
                    placeholder="NAME_HERE"
                    className="w-full bg-white/5 border border-white/10 p-3 font-mono text-sm focus:border-racing-red focus:outline-none transition-colors italic"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-gray-500 uppercase italic">Communication_Node</label>
                  <input 
                    type="email" 
                    placeholder="EMAIL_HERE"
                    className="w-full bg-white/5 border border-white/10 p-3 font-mono text-sm focus:border-racing-red focus:outline-none transition-colors italic"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-gray-500 uppercase italic">Transmission_Payload</label>
                <textarea 
                  rows={5}
                  placeholder="MESSAGE_CONTENT_HERE..."
                  className="w-full bg-white/5 border border-white/10 p-3 font-mono text-sm focus:border-racing-red focus:outline-none transition-colors resize-none italic"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-racing w-full flex items-center justify-center gap-2"
              >
                <span>SEND_TRANSMISSION</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-gray-600 italic">
          <div>© 2026 AUWEN_LIMANTORO. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <span>ENCRYPTION: AES-256</span>
            <span>STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
