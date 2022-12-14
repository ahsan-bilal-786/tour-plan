import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button className={`${className} text-white border border-black font-bold	text-18 leading-7 min-h-57 md:min-w-[300px] px-7`}>
      {children}
    </button>
  );
};

export default Button;