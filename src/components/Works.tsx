import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'NEURAL_OVERLAY_OS',
    category: 'SYSTEM_UI / UX',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=450',
    description: 'A high-performance operating system interface designed for neural-link hardware.',
    link: '#',
    github: '#'
  },
  {
    title: 'GHOST_PROTOCOL_VPN',
    category: 'CYBER_SECURITY',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=450',
    description: 'Encrypted communication layer utilizing quantum-resistant algorithms and stealth routing.',
    link: '#',
    github: '#'
  },
  {
    title: 'VOID_MARKET_DEX',
    category: 'BLOCKCHAIN_FINANCE',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=450',
    description: 'Decentralized exchange platform with zero-knowledge proof privacy features.',
    link: '#',
    github: '#'
  },
  {
    title: 'SENTINEL_AI_CORE',
    category: 'ARTIFICIAL_INTELLIGENCE',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=450',
    description: 'Autonomous threat detection system powered by advanced machine learning models.',
    link: '#',
    github: '#'
  },
  {
    title: 'NEON_GRID_ENGINE',
    category: 'GAME_DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800&h=450',
    description: 'High-fidelity 3D rendering engine optimized for cyberpunk-style neon lighting.',
    link: '#',
    github: '#'
  },
  {
    title: 'DATA_STREAM_VIS',
    category: 'DATA_VISUALIZATION',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=450',
    description: 'Real-time interactive dashboard for monitoring global data throughput and system health.',
    link: '#',
    github: '#'
  }
];

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 bg-carbon/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-racing-red mb-2 flex items-center gap-2 italic">
              <span className="w-8 h-[2px] bg-racing-red"></span>
              PROJECT_ARCHIVES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter italic">
              SELECTED <span className="text-racing-red">WORKS</span>
            </h2>
          </div>
          <div className="font-mono text-gray-500 text-sm max-w-xs italic">
            [TOTAL_ENTRIES: 06] [STATUS: VERIFIED]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-carbon/50 border border-white/5 overflow-hidden hover:border-racing-red/50 transition-colors"
              style={{ transform: 'skewX(-2deg)' }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-carbon/80 backdrop-blur-md text-[10px] font-mono text-racing-red border border-racing-red/30 italic">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6" style={{ transform: 'skewX(2deg)' }}>
                <h3 className="text-xl font-bold mb-2 font-mono group-hover:text-racing-red transition-colors italic">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-sans">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <a href={project.link} className="p-2 bg-carbon hover:bg-racing-red hover:text-white transition-all border border-white/10">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href={project.github} className="p-2 bg-carbon hover:bg-white hover:text-asphalt transition-all border border-white/10">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-racing-red/10 group-hover:bg-racing-red/20 transition-colors" style={{ transform: 'skewX(-45deg) translateX(50%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
