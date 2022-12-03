import React from 'react';
import Castle from "assets/images/castle.png"

const Banner = () => {
  return (
    <section className="bg-tp-purple text-white">
      <div className="container mx-auto bg-primary text-center xs:pt-[30px] xs:pb-[30px] md:pt-[66px] md:pb-[29px]">
        <div className="flex justify-center">
          <img className="xs:max-w-[68px] sm:max-w-[129px]" src={Castle} alt="Castle" />
        </div>
        <h1 className="xs:text-36 md:text-60 font-groteskBold font-semibold">Magic Kingdom</h1>
        <div className='xs:text-15 md:text-18 max-w-[640px] mx-auto'>
          <p>
            Last  updated: October 5, 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;