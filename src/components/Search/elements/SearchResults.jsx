import React from 'react';

export const Heading = ({ title }) => {
  return (
    <b className='font-bold '>
      {title}
    </b>
  );
};

export const TaglineHeading = ({ title }) => {
  return (
    <span className='text-tp-purple-500'>
      {title}
    </span>
  );
};


export const Tagline = ({ children }) => {
  return (
    <div className='text-[12px] text-tp-gray-200 font-semibold uppercase'>
      {children}
    </div>
  );
};


export const ListHeading = ({ title }) => {
  return (
    <div className='text-3 font-semibold uppercase text-tp-gray-200 mb-3'>
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
      <div className='w-90 max-h-57 mr-5 shrink-0'>
        <img 
          alt="imagealt"
          className='shadow max-w-full h-auto align-middle border-none'
          src="https://via.placeholder.com/90x57.png"
        />
      </div>
      <div className='text-18'>
        {children}
        {date && <div className='text-tp-gray-200 uppercase font-semibold text-12'>
          <span className='text-tp-purple mr-2 uppercase'>BLOG</span>
          <span className='font-semibold'>{date}</span>
        </div>}
      </div>
    </div>
  );
};


export default SearchResult;