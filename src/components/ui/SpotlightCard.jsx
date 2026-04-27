import React, { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden spotlight-card ${className}`}
      style={{
        '--mouse-x': `${position.x}px`,
        '--mouse-y': `${position.y}px`,
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.18), transparent 46%)`,
        }}
      />
      <div className="absolute inset-0 bg-neutral-100/50 dark:bg-black/50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute inset-px rounded-[calc(1.5rem-1px)] ring-1 ring-white/50 dark:ring-white/10 pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
