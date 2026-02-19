import React, { useRef } from 'react';

export default function MagneticButton({ children, ...props }) {
  const ref = useRef(null);
  // Lightweight magnetic hover using scale; keeps minimal skeuomorphic look
  return (
    <a
      ref={ref}
      {...props}
      className="relative inline-block skeuo-btn hover:scale-105 focus:outline-none"
    >
      {children}
    </a>
  );
}
