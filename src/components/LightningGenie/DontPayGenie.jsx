import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const DontPayGenie = () => {
  return (
    <section className="bg-tp-neutral">
      <div className="container mx-auto bg-primary text-center py-67 px-7">
        <h1 className="xs:text-24 md:text-30  mb-5 font-groteskSemiBold text-tp-purple font-semibold xs:leading-30 md:leading-46">
          What if I don’t want to pay for Genie+?
        </h1>
        <p className="xs:text-15 md:text-18 mb-4 font-normal">If you choose not to purchase Genie+, we recommend 3 things:</p>
        <p className="xs:text-15 md:text-18 mb-4 font-bold">1. Stay on site and show up early to maximize your time</p>
        <p className="xs:text-15 md:text-18 mb-4 font-bold">2. Show up late to XXXX</p>
        <p className="xs:text-15 md:text-18 mb-6 font-bold">3. Purchase a Touring Plans subscription to know the best time to visit each attraction</p>
        <p className="text-tp-purple xs:text-15 md:text-18 font-bold">
          Subscribe to Touring Plans
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
        </p>
      </div>
    </section>
  );
};

export default DontPayGenie;

