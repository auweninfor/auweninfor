import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Database, Globe, Cpu, Layers } from 'lucide-react';

const skillGroups = [
  {
    title: 'FRONTEND_ENGINEERING',
    icon: Globe,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Framer Motion', level: 85 },
    ]
  },
  {
    title: 'BACKEND_SYSTEMS',
    icon: Database,
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'PostgreSQL / MongoDB', level: 82 },
      { name: 'GraphQL / REST', level: 90 },
      { name: 'Docker / K8s', level: 75 },
    ]
  },
  {
    title: 'DESIGN_INTERFACE',
    icon: Palette,
    skills: [
      { name: 'Figma / Adobe XD', level: 92 },
      { name: 'UI/UX Principles', level: 95 },
      { name: 'Motion Design', level: 80 },
      { name: 'Design Systems', level: 88 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-racing-red/30 bg-racing-red/5 text-racing-red font-mono text-xs mb-4 italic"
          >
            CORE_COMPETENCIES
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter italic">
            TECHNICAL <span className="text-racing-red">CAPABILITIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="racing-border p-8 bg-carbon/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-racing-red/10 rounded-lg">
                  <group.icon className="w-6 h-6 text-racing-red" />
                </div>
                <h3 className="font-mono font-bold text-sm tracking-widest text-white italic">
                  {group.title}
                </h3>
              </div>

              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 font-mono text-xs italic">
                      <span className="text-gray-400">{skill.name}</span>
                      <span className="text-racing-red">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-racing-red to-white shadow-[0_0_10px_rgba(255,62,62,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-20 flex justify-center gap-8 opacity-20 grayscale">
          <Code2 className="w-8 h-8" />
          <Cpu className="w-8 h-8" />
          <Layers className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
