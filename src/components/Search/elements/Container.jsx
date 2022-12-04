import React from 'react';

const Container = ({ bg, className, children }) => {
  return (
    <section className={bg || "bg-white"}>
      <div className={`xs:max-w-[100%] md:max-w-1085  md:mx-auto xs:px-4 md:px-0 ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Container;