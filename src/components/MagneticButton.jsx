import React, { useRef } from 'react';

export default function MagneticButton({ children, ...props }) {
  const ref = useRef(null);
  // For brevity, this is a simple hover scale. For true magnetic effect, add pointermove logic.
  return (
    <a
      ref={ref}
      {...props}
      className="relative inline-block rounded-2xl bg-gradient-to-br from-white/80 to-blue-100/80 shadow-lg px-6 py-3 font-semibold text-gray-900 transition-transform duration-200 hover:-translate-y-1 hover:scale-105 active:shadow-inner"
    >
      {children}
    </a>
  );
}
