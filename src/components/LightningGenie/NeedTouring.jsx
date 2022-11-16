import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const NeedTouring = () => {
  return (
    <section className="bg-tp-purple">
      <div className="container md:w-[960px] mx-auto bg-primary font-eucliar text-center py-67">
        <h1 className="text-30 mb-3 font-groteskSemiBold text-white font-semibold">
        Do I still need a Touring Plan if I use Genie+?
        </h1>
        <p className="text-18 mb-4 font-normal">YES! Even with the potential to schedule your attractions, you’ll definitely want to use a Touring Plan to know the best time to visit each attraction and whether there’s a way to save paying for an Individual Lightning Lane. </p>
        <p className="text-18 mb-4 font-bold">Plus, our subscription is about the same price as one person’s use of Genie+ for the day or about the same price as one person paying to use the Lightning Lane. And you’ll get a lot more than just saved time!</p>
        <p className="text-white text-18 font-bold">
          Create a custom Touring Plan
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
        </p>
      </div>
    </section>
  );
};

export default NeedTouring;

