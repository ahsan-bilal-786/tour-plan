import React from 'react';
import mobileHand from "assets/images/mobileHand.png"

const Banner = () => {
  return (
    <section className="bg-tp-bluish-300 text-white">
      <div className="container mx-auto bg-primary text-center xs:py-9 md:py-67 px-2">
        <div className="flex justify-center xs:mb-7 md:mb-11">
          <img className="xs:w-[74px] md:w-[134px] shadow rounded-full max-w-full h-auto align-middle border-none" src={mobileHand} alt="mobileHand" />
        </div>
        <h1 className="text-36 md:text-50 xl:text-60 font-groteskBold font-semibold mb-3">
          Genie+ & Lightning Lane
        </h1>
        <div className='max-w-[640px] mx-auto'>
          <p className="mb-3">Disney’s latest iteration of FASTPASS has multiple components that can help you get the most from your day. We’ll show you how making the right choices (with the use of a Touring Plan) can make it even better.</p>
          <p>
            Last updated: October 12, 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;