import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      title: 'Education',
      content: 'Software Engineering Degree (APU), Feb 2024 – Mar 2026',
    },
    {
      title: 'Hands-on Experience',
      content: 'Frontend development, system deployment, and enterprise IT support',
    },
    {
      title: 'Core Competencies',
      content: 'MVC architecture, debugging, QA testing, and technical troubleshooting',
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              About Me.
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              <p>
                Hello! I'm <strong className="text-neutral-900 dark:text-neutral-100 font-medium">Choo Wei Chun</strong>, an entry-level Software Engineer with practical experience in frontend development, system deployment, and enterprise IT support.
              </p>
              <p>
                I build responsive web applications using HTML, CSS, JavaScript, and Bootstrap, with backend integration experience using PHP, Node.js, and MySQL.
              </p>
              <p>
                I also support enterprise systems through deployment, troubleshooting, and cross-functional collaboration to deliver reliable and maintainable solutions.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass rounded-2xl p-4 border border-white/35 dark:border-white/10"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-2">{item.title}</div>
                  <div className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">{item.content}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-800 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.03]">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-neutral-300 dark:border-neutral-700 opacity-80" />
                <div className="absolute inset-6 rounded-full border border-neutral-300 dark:border-neutral-700 opacity-70" />
                <div className="absolute inset-12 rounded-full border border-neutral-300 dark:border-neutral-700 opacity-60" />
                <div className="absolute inset-0 m-auto w-24 h-24 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-black grid place-items-center text-xs tracking-[0.2em]">
                  APU
                </div>
              </div>
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
