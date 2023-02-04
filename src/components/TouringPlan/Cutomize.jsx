import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CustomizeYourTourPlan = () => {
  return (
    <section className="bg-tp-purple">
      <div className="container md:max-w-960 mx-auto bg-primary font-eucliar text-center pt-[79px] pb-[65px] px-4">
        <h1 className="xs:text-24 md:text-30 mb-3 xs:px-4 md:px-0 font-groteskBold text-white font-semibold leading-8">
          Customize your own Touring Plan
        </h1>
        <p className="xs:text-15 md:text-18 mb-4 font-normal">Select everything you’d like to do and we’ll optimize your plan throughout the day using real-time data. So if something unexpected happens, you'll be back on schedule in an instant.</p>
        <p className="text-white text-18 font-bold">
          Create a custom Touring Plan
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
        </p>
      </div>
    </section>
  );
};

export default CustomizeYourTourPlan;

