import React from 'react';

export const Heading = ({ title }) => {
  return (
    <b className='font-bold '>
      {title}
    </b>
  );
};

export const Tagline = ({ title }) => {
  return (
    <div className='text-[12px]'>
      {title}
    </div>
  );
};


export const ListHeading = ({ title }) => {
  return (
    <div className='text-3 font-semibold uppercase text-[#606060] mb-3'>
      {title}
    </div>
  );
};


export const ListItem = ({ title }) => {
  return (
    <div className='text-18 font-normal text-black mb-2'>
      {title}
    </div>
  );
};


const SearchResult = ({ date, children }) => {
  return (
    <div className='flex mb-5'>
      <div className='w-[90px] max-h-[57px] mr-5 shrink-0'>
        <img 
          alt="imagealt"
          className='shadow max-w-full h-auto align-middle border-none'
          src="https://via.placeholder.com/90x57.png"
        />
      </div>
      <div className='text-18'>
        {children}
        {date && <div className='text-[#606060] uppercase font-semibold text-[12px]'>
          <span className='text-[#F65766] mr-2'>BLOG</span>
          <span className='font-semibold'>{date}</span>
        </div>}
      </div>
    </div>
  );
};


export default SearchResult;