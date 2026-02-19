import React from 'react';

const Button = ({ children, href, type = 'button', disabled, download }) => {
  const baseClass = "rounded-[16px] bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner px-6 py-2 font-semibold transition-all focus:outline-none active:shadow-[inset_0_2px_8px_rgba(0,0,0,0.10)]";
  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        download={download}
        tabIndex={0}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={baseClass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
