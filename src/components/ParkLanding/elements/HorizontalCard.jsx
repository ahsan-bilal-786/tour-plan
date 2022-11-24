import React from 'react';

const HorizontalCard = ({ img, title, children }) => {
  return (
    <div className='flex xs:flex-col md:flex-row xs:text-center md:text-left xs:items-center md:items-start'>
      <div className='w-[131px] md:w-[155px] md:mr-11 xs:mb-4 md:mb-0 shrink-0 md:shrink-1'>
        <img className="shadow rounded-full max-w-full h-auto align-middle border-none" src={img} alt="cardcover" />
      </div>
      <div className='xs:text-15 sm:text-18 max-w-[310px]'>
        <h5 className="text-tp-purple font-bold xs:text-18 md:text-6 xs:mb-0 md:mb-3">{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default HorizontalCard;

export const PhotoCard = ({ photo, title }) => {
  return (
    <div className='flex flex-col text-center items-center xs:mb-6 md:mb-0'>
      <div className='xs:w-[131px] md:w-[171px] mx-auto xs:mb-4 md:mb-6'>
        <img
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
          src={photo} alt="cardcover"
        />
      </div>
      <div className='xs:text-15 sm:text-18 w-[200px]'>
        <h5 className="text-tp-purple font-bold xs:mb-0 md:mb-3">{title}</h5>
      </div>
    </div>
  );
}