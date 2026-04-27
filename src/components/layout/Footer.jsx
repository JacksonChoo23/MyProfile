import React from 'react';

const Footer = () => {
  const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wei-chun-choo-52a49232a/' },
    { label: 'GitHub', href: 'https://github.com/JacksonChoo23' },
    { label: 'Email', href: 'mailto:jacksonchoo03@gmail.com' },
  ];

  return (
    <footer className="py-10 mt-8">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="glass rounded-3xl px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center md:text-left">
            © {new Date().getFullYear()} Choo Wei Chun · Crafted with React + Tailwind + Framer Motion
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;