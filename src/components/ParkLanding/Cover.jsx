import React from 'react';

const Cover = ({ src, className }) => {
  return (
    <img className={`w-[100%] object-cover ${className}`} src={src} alt="cover" />
  );
};

export default Cover;