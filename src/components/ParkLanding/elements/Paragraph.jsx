import React from 'react';

const Paragraph = ({ className, children }) => {
  return (
    <p className={`xs:text-18 md:text-30 font-light text-tp-black-300 xs:leading-7 md:leading-46 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;

export const ParagraphNormal = ({ className, children }) => {
  return (
    <p className={`xs:text-15 md:text-18 font-normal leading-7 ${className}`}>
      {children}
    </p>
  );
};
