import React from "react";
import TourPlan from "assets/images/tour-plan.png";

const Banner = () => {
  return (
    <section className="bg-tp-purple-500 text-white">
      <div className="xs:max-w-[90%] md:container  mx-auto bg-primary text-center xs:pt-68 xs:pb-90 md:py-86 px-2  xs:w-full md:max-w-[715px]">
        <div className="flex justify-center xs:mb-5 md:mb-10">
          <img
            className="xs:w-[68px] md:w-[129px]"
            src={TourPlan}
            alt="TourPlan"
          />
        </div>
        <h1 className="text-36 leading-60 mb-4 md:text-50 xl:text-60 font-groteskSemiBold font-semibold">
          Request Your Room
        </h1>
        <div className="max-w-[860px] mx-auto">
          <p>
            <b>
              With over 30,000 rooms available at WDW Resorts, we can help you
              reserve the right one.
            </b>
            <br />
            We’ll provide you with everything to tell Disney. And we’re the ONLY
            site where you can see the view you get from any room on property
            (with 30,000+ photos)!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
