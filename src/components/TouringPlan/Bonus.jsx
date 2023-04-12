import React from 'react';

const Bonus = () => {
  return (
    <section className="bg-tp-purple-500">
      <div className="container md:max-w-960 mx-auto bg-primary font-eucliar text-center py-[79px] px-4">
        <h1 className="xs:text-24 md:text-30 mb-6 xs:px-4 md:px-0 font-groteskBold text-tp-purple font-semibold leading-8">
          Bonus Touring Plans
        </h1>
        <p className="xs:text-15 md:text-18 mb-4 font-normal text-tp-brown-300">
          We’ve also got touring plans for <b className='text-white'>Disney’s Blizzard Beach</b> and <b className='text-white'>Typhoon Lagoon</b> water parks, showing you which slides and rides to see first to avoid long waits in line.
        </p>
        <p className="xs:text-15 md:text-18 mb-4 font-normal text-tp-brown-300">
          And we have Ultimate Touring Plans. Not intended for families, these plans are for Disney veterans looking for a unique challenge. These plans cover every attraction, show and ride in the <b className='text-white'>Magic Kingdom, EPCOT, Hollywood Studios,</b> or <b className='text-white'>Animal Kingdom</b> in one day.
        </p>
      </div>
    </section>
  );
};

export default Bonus;

