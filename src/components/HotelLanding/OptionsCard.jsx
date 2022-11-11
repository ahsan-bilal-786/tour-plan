import React from 'react';

const OptionsCard = () => {
  return (
    <div className='mb-73 md:mb-0'>
      <div className='flex flex-wrap justify-center mb-4'>
        <img alt="imagealt" src="https://via.placeholder.com/223x223.png" className='shadow rounded-full max-w-full h-auto align-middle border-none' />
      </div>
      <div className="text-30 font-semibold text-tp-purple mb-3">Deluxe Villas</div>
      <div className="text-18 mb-3 md:min-h-152 leading-7">
        Part of the Disney Vacation Club timeshare, generally suites with kitchens, and sometimes a better value
      </div>
      <div className="text-13 font-bold mb-17">FROM $XXX TO $XXX</div>
      <div className="text-13 font-medium mb-3">WE RECOMMEND</div>
      <div className="text-13 font-medium text-tp-purple">The Villas at Disney’s Grand Floridian Resort & Spa</div>
    </div>
  );
};

export default OptionsCard;