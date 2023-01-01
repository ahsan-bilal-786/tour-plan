import React from 'react';
import map from "lodash/map";

const Select = ({ label, options, className, ...rest }) => {
  return (
    <div className={`flex flex-col xs:mb-5 md:mb-7 xs:w-full md:w-auto md:max-w-[500px] ${className}`}>
      <label className='text-[13px] text-black font-eucliarMedium font-medium uppercase leading-8'>{label}</label>
      <select
        className='border-[2px] border-tp-neutral bg-tp-neutral py-4 px-4 rounded-2xl font-eucliarMedium xs:text-4 md:text-6 xs:leading-5 md:leading-7 focus:border-tp-neutral focus:ring-0 '
        {...rest}
      >
        {map(options, (val) => (
          <option key={val}>{val}</option>
        ))}
      </select>
      {rest.hint && (
        <div className=''><p className='text-13 font-normal text-tp-gray-200'>{rest.hint}</p></div>
      )}
    </div>
  );
};

Select.defaultProps = {
  className: ""
}

export default Select;