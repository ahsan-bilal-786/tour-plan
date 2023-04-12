import React from 'react';
import TourPlan from "assets/images/tour-plan.png"

const Banner = () => {
  return (
    <section className="bg-tp-purple-500 text-white">
      <div className="xs:max-w-[90%] md:container  mx-auto bg-primary text-center xs:pt-68 xs:pb-90 md:py-86 px-2  xs:w-full md:max-w-[715px]">
        <div className="flex justify-center xs:mb-5 md:mb-10">
          <img className="xs:w-[68px] md:w-[129px]" src={TourPlan} alt="TourPlan"  />
        </div>
        <h1 className="text-36 leading-60 mb-4 md:text-50 xl:text-60 font-groteskSemiBold font-semibold">Walt Disney World Touring Plans
        </h1>
        <div className='max-w-[640px] mx-auto'>
          <p>
            Our touring plans save you up to 4 hours in line. Every plan is customizable, so you can add more rides, meals, naps, and more. You can also use our free Disney World touring plan app to create your own customized touring plans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;