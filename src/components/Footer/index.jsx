import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <section className="bg-tp-gray-400">
      <div className="container mx-auto bg-primary text-center py-67">
        <h1 className="text-30 mb-3 font-groteskSemiBold text-tp-purple font-semibold">We’ll give you all the help in the World.</h1>
        <p className="text-18 mb-4">Let our team of destination experts help you plan and book a worry-free vacation.</p>
        <p className="text-tp-purple text-18 font-bold">
          Connect with our travel agents
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
        </p>
      </div>
    </section>
  );
};

export default Footer;

