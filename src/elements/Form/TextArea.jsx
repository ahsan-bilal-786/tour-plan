import React from 'react';
<div className="w-[747px] h-[150px] " />

const TextArea = ({ label, className, wrapperClassName, ...rest }) => {
  return (
    <div className={`flex flex-col xs:mb-5 md:mb-11 xs:w-full md:w-auto md:max-w-[500px] ${wrapperClassName}`}>
      <label className='text-[13px] text-black font-eucliarMedium font-medium uppercase leading-8'>{label}</label>
      <textarea
        className={`border-[1px] bg-white border-black py-4 px-4 ${className || ''}`}
        placeholder={rest.placeholder || label}
        {...rest}
      />
    </div>
  );
};

export default TextArea;