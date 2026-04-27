import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const experiences = [
  {
    id: 1,
    role: "Web Developer & IT Support Intern",
    company: "Frontdesk Sdn Bhd",
    period: "Jan 2025 - May 2025",
    description: "Engineered responsive frontend components using HTML, CSS, and JavaScript, applied MVC architecture in Joomla, and supported network deployment across 11 outlets.",
    tags: ['HTML/CSS/JS', 'MVC (Joomla)', 'QA Testing'],
  },
  {
    id: 2,
    role: "IT Support Assistant Intern",
    company: "W Kuala Lumpur (Marriott)",
    period: "Sep 2023 - Dec 2023",
    description: "Executed OS deployment using standardized imaging, maintained PMS/POS systems, supported server monitoring, and resolved hardware and software incidents.",
    tags: ['System Deployment', 'PMS/POS', 'IT Support'],
  }
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="h-full"
    >
      <Tilt
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
        perspective={1000}
        scale={1.015}
        transitionSpeed={2000}
        className="h-full"
      >
        <div className="glass p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div>
            <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4 tracking-wider uppercase">
              {exp.period}
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
              {exp.role}
            </h3>
            <div className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-6">
              {exp.company}
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              {exp.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs bg-black/5 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-neutral-100/50 dark:bg-neutral-900/20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
        >
          Experience.
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
