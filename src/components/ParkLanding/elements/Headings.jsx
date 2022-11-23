import React from 'react';

const SmallHeadings = ({ className, children }) => {
  return (
    <h5 className={`text-tp-purple font-bold text-18 xs:mb-6 md:mb-3 ${className}`}>
      {children}
    </h5>
  );
};

export default SmallHeadings;

export const SectionHeading = ({ className, children }) => {
  return (
    <h3 className={`text-tp-purple font-semibold xs:text-20 md:text-30 ${className}`}>
      {children}
    </h3>
  );
};