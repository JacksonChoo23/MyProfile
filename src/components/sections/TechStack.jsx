import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: "Frontend",
    summary: "Build responsive, modern interfaces with maintainable structure.",
    color: "from-sky-500/20 to-cyan-500/5",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Responsive Web Design"]
  },
  {
    title: "Backend",
    summary: "Develop server-side logic and connect data workflows.",
    color: "from-emerald-500/20 to-lime-500/5",
    skills: ["PHP", "Node.js", "MySQL", "Java", "MVC Architecture"]
  },
  {
    title: "Infrastructure & Tools",
    summary: "Support deployment, operations, and collaboration pipelines.",
    color: "from-amber-500/20 to-rose-500/5",
    skills: ["Windows Server", "TCP/IP", "Git", "Joomla", "iLO4", "Opera PMS", "Infrasys POS"]
  }
];

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
          A clearer snapshot of the technologies I use across frontend, backend, and IT support scenarios.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
              className="group relative rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/90 dark:bg-neutral-900/70 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative p-6 md:p-7">
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-2">Focus Area</p>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">{group.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{group.summary}</p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border border-neutral-300/80 dark:border-neutral-700 bg-white/90 dark:bg-neutral-950/60 text-neutral-700 dark:text-neutral-200 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-8"
        >
          Each stack area now includes context, so visitors can quickly understand where each skill is applied.
        </motion.p>
      </div>
    </section>
  );
};

export default TechStack;
