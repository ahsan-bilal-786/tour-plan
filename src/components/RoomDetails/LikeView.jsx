import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const LikeView = () => {
  return (
    <section className="bg-tp-purple">
      <div className="container mx-auto bg-primary text-center py-67">
        <h1 className="text-30 mb-3 font-groteskSemiBold  font-semibold text-white">
          Like the View?
        </h1>
        <p className="text-18 mb-4">
          We can send Disney a request for this room on your behalf! Get a WDW
          Touring Plans subscription to get started!
        </p>
        <p className="text-18 font-bold text-white">
          Subscribe Now
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
        </p>
      </div>
    </section>
  );
};

export default LikeView;
