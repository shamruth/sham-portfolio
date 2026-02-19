import React from 'react';

const Button = ({ children, href, type = 'button', disabled, download }) => {
  const baseClass = "skeuo-btn transition-transform active:translate-y-0.5 disabled:opacity-60";
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
