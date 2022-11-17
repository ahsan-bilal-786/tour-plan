import React from 'react';
import Castle from "assets/images/castle.png"

const Banner = () => {
  return (
    <section className="bg-tp-purple text-white">
      <div className="container mx-auto bg-primary text-center py-67 px-2">
        <div className="flex justify-center">
          <img className="castle" src={Castle} alt="Castle" width="129px" />
        </div>
        <h1 className="text-36 md:text-50 xl:text-60 font-groteskSemiBold font-semibold">Walt Disney World Hotels</h1>
        <div className='max-w-[640px] mx-auto'>
          <p>
            Almost 90% of TouringPlans users stay at a Disney hotel during their trips. Beyond the convenience and
            amenities, users say they enjoy “being in the Disney bubble”— the special magic and peace of mind associated
            with staying inside Walt Disney World.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;