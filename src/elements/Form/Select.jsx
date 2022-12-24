import React from 'react';
import map from "lodash/map";

const Select = ({ label, options, className, ...rest }) => {
  return (
    <div className={`flex flex-col xs:mb-5 md:mb-11 xs:w-full md:w-auto md:max-w-[500px] ${className}`}>
      <label className='text-[13px] text-black font-medium uppercase'>{label}</label>
      <select
        className='border-[2px] border-tp-gray-300 py-4 px-4'
        {...rest}
      >
        {map(options, (val) => (
          <option key={val}>{val}</option>
        ))}
      </select>
      {rest.hint && (
        <div className='relative'><p className='absolute text-13 font-medium italic text-tp-purple'>{rest.hint}</p></div>
      )}
    </div>
  );
};

Select.defaultProps = {
  className: ""
}

export default Select;