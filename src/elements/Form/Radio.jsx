import React from 'react';
import map from "lodash/map";
import { useState } from 'react';

const Radio = ({ label, options, className, ...rest }) => {
  const [checkedValue, setCheckedValue] = useState(options[0]);
  return (
    <div className={`flex flex-col xs:mb-5 md:mb-7 xs:w-full md:w-auto md:max-w-[500px] ${className}`}>
      <label className='text-[13px] text-black font-eucliarMedium font-medium uppercase leading-8 mb-2'>{label}</label>
      <div className='flex xs:flex-col md:flex-row justify-between'>
        <div>
          {map(options, (val) => (
            <label key={val} className="inline-flex mr-7">
              <input type="radio" class="mr-3 md:text-6 w-[26px] h-[26px] bg-white checked:bg-tp-black-300 focus:checked:bg-tp-black-300 hover:checked:bg-tp-black-300 cursor-pointer ring-0" checked={checkedValue === val} onChange={(e) => {
                if (e.target.checked)
                  setCheckedValue(val)
              }} />
              <span className='md:text-4 md:text-6'>{val}</span>
            </label>
          ))}
        </div>

        {rest.hint && (
          <div className='xs:pt-4 md:pt-0'>
            <p className='md:w-[200px] text-13 font-normal text-tp-gray-200'>{rest.hint}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Radio.defaultProps = {
  className: ""
}

export default Radio;