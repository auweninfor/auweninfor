import React from 'react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-asphalt selection:bg-racing-red selection:text-white">
      {/* Racing Background Elements */}
      <div className="fixed inset-0 checkered-pattern opacity-5 pointer-events-none" />
      <div className="fixed inset-0 speed-lines opacity-10 pointer-events-none" />
      
      {/* Decorative Racing Accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-racing-red via-transparent to-racing-red opacity-30"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-racing-red via-transparent to-racing-red opacity-30"
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
