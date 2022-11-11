import React from 'react';
/**
 * 
    width: 66px;
    height: 66px;
    border: 3px solid #FFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
 */
const WhyConsiderCard = () => {
  return (
    <div className='text-white mb-6 md:mb-0'>
      <div className='mb-4 md:mb-9'>
        <span className='border-4 border-tp-brown-300 rounded-full w-16 h-16 inline-flex items-center justify-center text-30 text-tp-brown-300 font-semibold font-groteskSemiBold'>1</span>
      </div>
      <div className="text-18 font-bold mb-2">
        Better room quality</div>
      <div className="text-15 leading-6">
        Many Disney hotel rooms are among the best designed and appointed anywhere. Plus, they’re maintained much better than the average hotel room in Orlando.
      </div>
    </div>
  );
};

export default WhyConsiderCard;