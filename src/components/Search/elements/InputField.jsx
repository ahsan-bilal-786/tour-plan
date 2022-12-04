import React from 'react';
import get from "lodash/get";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const inputClasses = {
  common: `w-[100%] text-24 font-medium px-9 py-18 mr-[27px] `,
  filled: ' bg-[#F2F2F2] border border-[#F2F2F2] rounded-md',
  outlined: 'border-0 border-b border-[#C4C4C4] focus:outline-none focus:ring-0 focus:border-[#C4C4C4]',
}

const InputField = ({ type, value, handleChange }) => {
  return (
    <div className='flex items-center'>
      <input
        className={`${inputClasses.common} ${get(inputClasses, `${type}`, inputClasses.filled)}`}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        type="text"
      />
      <FontAwesomeIcon 
        className='cursor-pointer h-[18px] w-[18px] text-[#F65766]' 
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