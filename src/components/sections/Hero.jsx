import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 140]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const ringY = useTransform(scrollY, [0, 500], [0, -80]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 55, damping: 14 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[780px] h-[780px] bg-neutral-200 dark:bg-neutral-800 rounded-full blur-3xl opacity-30 dark:opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <motion.div style={{ y: ringY }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88vw] max-w-[980px] aspect-square rounded-full border border-neutral-200/70 dark:border-neutral-700/40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[780px] aspect-square rounded-full border border-neutral-200/50 dark:border-neutral-700/30" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={item} className="text-xs md:text-sm tracking-[0.28em] uppercase text-neutral-500 dark:text-neutral-400 mb-6 font-medium">
            Portfolio
          </motion.h2>
          <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-[-0.04em] mb-6 leading-[0.95]">
            Choo <span className="bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">Wei Chun</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-300 font-light mb-10">
            Software Engineer (Junior)
          </motion.p>

          <motion.div variants={item} className="mb-10 flex flex-wrap gap-3 justify-center">
            {['HTML5', 'JavaScript', 'PHP', 'MySQL', 'Node.js'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full text-xs md:text-sm glass border border-white/40 dark:border-white/10">
                {tag}
              </span>
            ))}
          </motion.div>
          
          <motion.div variants={item} className="flex justify-center flex-wrap gap-4">
            <a href="#about" className="px-8 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition-transform shadow-lg shadow-black/10">
              Explore
            </a>
            <a href="mailto:jacksonchoo03@gmail.com" className="px-8 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white transition-colors hover:scale-105 transition-transform">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-neutral-300 to-transparent dark:from-neutral-700"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
