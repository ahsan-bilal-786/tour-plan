import React from 'react';

const Textfield = ({ label, ...rest }) => {
  return (
    <div className='flex flex-col xs:mb-5 md:mb-11 xs:w-full md:w-auto md:max-w-[500px]'>
      <label className='text-[13px] text-black font-eucliarMedium font-medium uppercase leading-8'>{label}</label>
      <input
        className={`border-[2px] border-tp-gray-300 py-4 px-4 ${rest.className || ''}`}
        type={rest.type || "text"}
        placeholder={rest.placeholder || label}
        {...rest}
      />
    </div>
  );
};

export default Textfield;