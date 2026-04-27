import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';

const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const ExternalLinkIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7"></path>
    <path d="M7 7h10v10"></path>
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
        >
          Featured Work.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SpotlightCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 rounded-full">Node.js</span>
                  <span className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 rounded-full">Bootstrap</span>
                  <span className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 rounded-full">Express</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">SkillSwap MY</h3>
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400 mb-4">Personal Project</p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-8">
                  A skill-exchange web project built to practice full-stack development concepts. The project uses a Node.js and Express backend.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/JacksonChoo23/SkillSwap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black text-sm font-semibold shadow-lg shadow-black/10 hover:scale-[1.03] transition-transform"
                  >
                    <GithubIcon size={18} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>

              <div className="order-1 md:order-2 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 relative group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
                <div className="absolute inset-4 rounded-xl bg-white/95 dark:bg-black shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.16)] transition-shadow duration-500">
                  <div className="h-8 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-4 space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-4 flex flex-col space-y-4">
                    <div className="h-24 bg-neutral-100 dark:bg-neutral-900 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 shine-bar" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 shine-bar" />
                      </div>
                      <div className="h-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 shine-bar" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-neutral-900/45 opacity-55 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-5 pointer-events-none">
                  {/* Removed GitHub Project visual indicator */}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
