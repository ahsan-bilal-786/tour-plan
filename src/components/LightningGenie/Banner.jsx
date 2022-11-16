import React from 'react';
import mobileHand from "assets/images/mobileHand.png"

const Banner = () => {
  return (
    <section className="bg-tp-bluish-300 text-white">
      <div className="container mx-auto bg-primary text-center py-67 px-2">
        <div className="flex justify-center">
          <img className="shadow rounded-full max-w-full h-auto align-middle border-none" src={mobileHand} alt="mobileHand" width="134px" />
        </div>
        <h1 className="text-36 md:text-50 xl:text-60 font-groteskBold font-semibold mb-3">
          Genie+ & Lightning Lane
        </h1>
        <div className='max-w-[640px] mx-auto'>
          <p>
            Last updated: October 12, 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;