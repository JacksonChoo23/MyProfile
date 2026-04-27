import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "HTML5", "CSS3", "JavaScript", "Bootstrap 5", "PHP", "MySQL", "Node.js", "Java", "MVC Architecture", "Responsive Web Design", "Windows Server", "TCP/IP", "Git", "Joomla", "iLO4", "Opera PMS", "Infrasys POS"
];

const allSkills = [...skills, ...skills, ...skills];

const TechStack = () => {
  return (
    <section id="skills" className="py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl mb-16 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Tech Stack.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto"
        >
          Technical skills based on my internship and academic experience in software engineering and IT support.
        </motion.p>
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-neutral-50 dark:from-neutral-950 to-transparent" />

        <div className="relative flex overflow-hidden group">
          <div className="animate-marquee whitespace-nowrap flex space-x-6 md:space-x-8 items-center px-4 md:px-8 py-4 w-max">
            {allSkills.map((skill, index) => (
              <div key={`skill-1-${index}`} className="float-y [animation-delay:calc(var(--i)*120ms)]" style={{ '--i': index }}>
                <div className="flex items-center justify-center min-w-[170px] md:min-w-[220px] h-20 md:h-24 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-none hover:scale-105 hover:-translate-y-1 transition duration-300">
                  <span className="text-lg md:text-2xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-100">{skill}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-6 md:space-x-8 items-center px-4 md:px-8 py-4 w-max">
            {allSkills.map((skill, index) => (
              <div key={`skill-2-${index}`} className="float-y [animation-delay:calc(var(--i)*140ms)]" style={{ '--i': index }}>
                <div className="flex items-center justify-center min-w-[170px] md:min-w-[220px] h-20 md:h-24 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-none hover:scale-105 hover:-translate-y-1 transition duration-300">
                  <span className="text-lg md:text-2xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-100">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex overflow-hidden group mt-4 md:mt-6">
          <div className="animate-marquee-reverse whitespace-nowrap flex space-x-6 md:space-x-8 items-center px-4 md:px-8 py-4 w-max">
            {[...allSkills].reverse().map((skill, index) => (
              <div key={`skill-3-${index}`} className="float-y [animation-delay:calc(var(--i)*100ms)]" style={{ '--i': index }}>
                <div className="flex items-center justify-center min-w-[170px] md:min-w-[220px] h-16 md:h-20 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/50 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.05)] dark:shadow-none hover:scale-105 hover:-translate-y-1 transition duration-300">
                  <span className="text-base md:text-xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-200">{skill}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2-reverse whitespace-nowrap flex space-x-6 md:space-x-8 items-center px-4 md:px-8 py-4 w-max">
            {[...allSkills].reverse().map((skill, index) => (
              <div key={`skill-4-${index}`} className="float-y [animation-delay:calc(var(--i)*120ms)]" style={{ '--i': index }}>
                <div className="flex items-center justify-center min-w-[170px] md:min-w-[220px] h-16 md:h-20 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/50 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.05)] dark:shadow-none hover:scale-105 hover:-translate-y-1 transition duration-300">
                  <span className="text-base md:text-xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-200">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
