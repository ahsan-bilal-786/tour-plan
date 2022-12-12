import React from 'react';
import Travel from "assets/images/banner-img.png"

const Banner = () => {
  return (
    <section className="bg-tp-purple text-white">
      <div className="container mx-auto bg-primary text-center xs:pt-[45px] xs:pb-[38px] md:pt-[57px] md:pb-[83px]">
        <div className="flex justify-center">
          <img className="xs:max-w-[68px] sm:max-w-[129px] rounded-full" src={Travel} alt="Travel" />
        </div>
        <h1 className="xs:text-36 md:text-60 font-groteskBold font-semibold">
          Seven Dwarfs Mine Train
        </h1>
        <div className='xs:text-15 md:text-18 max-w-[640px] mx-auto'>
          <p className='font-bold xs:text-15 md:text-18 mb-1'>#16 of 58 Magic Kingdom Attractions</p>
          <p className='font-normal xs:text-15 md:text-18'>
            Last  updated: October 5, 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;