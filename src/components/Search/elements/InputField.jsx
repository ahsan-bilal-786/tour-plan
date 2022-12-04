import React from 'react';
import get from "lodash/get";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const inputClasses = {
  common: `w-[100%] xs:text-18  md:text-24 font-medium xs:px-4 xs:py-3 md:px-9 md:py-18 mr-[27px] `,
  filled: ' bg-tp-neutral border border-tp-neutral rounded-md  focus:border-tp-neutral focus:outline-none focus:ring-0 ',
  outlined: 'border-0 border-b border-tp-gray-300 focus:outline-none focus:ring-0 focus:border-tp-gray-300',
}

const InputField = ({ type, value, handleChange }) => {
  return (
    <div className='flex items-center mb-[58px]'>
      <input
        className={`${inputClasses.common} ${get(inputClasses, `${type}`, inputClasses.filled)}`}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        placeholder="Search..."
        type="text"
      />
      <FontAwesomeIcon 
        className='cursor-pointer h-[18px] w-[18px] text-tp-purple' 
        icon={faTimes} 
        onClick={(e) => handleChange("")} 
      />
    </div>
  );
};

InputField.defaultProps = {
  type: 'filled',
  handleChange: () => { }
}

export default InputField;