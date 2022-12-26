import React from 'react';
import Travel from "assets/images/banner-img.png"

const Banner = () => {
  return (
    <section className="bg-tp-purple text-white">
      <div className="container mx-auto bg-primary text-center xs:pt-[45px] xs:pb-[38px] md:pt-[57px] md:pb-[83px]">
        <div className="flex justify-center mb-4">
          <img className="xs:max-w-[68px] sm:max-w-[129px] rounded-full" src={Travel} alt="Travel" />
        </div>
        <h1 className="xs:text-30 font-groteskBold font-semibold">
          Height Requirements at Magic Kingdom
        </h1>
        <div className='xs:text-15 md:text-18 max-w-[640px] mx-auto'>
          <p className='font-bold xs:text-15 md:text-18 mb-1'>There are 7 attractions at Magic Kingdom with height requirements</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;