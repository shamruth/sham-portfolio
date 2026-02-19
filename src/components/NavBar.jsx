import React from 'react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[90vw] max-w-3xl brut-card flex justify-between items-center px-8 py-4">
      <span className="font-extrabold text-2xl tracking-tight text-black uppercase">[Your Name]</span>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="brut-btn"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
