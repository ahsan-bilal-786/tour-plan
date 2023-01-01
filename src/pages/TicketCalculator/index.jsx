import Banner from 'components/TicketCalculator/Banner';
import Form from 'components/TicketCalculator/Form';
import PricingConsideration from 'components/TicketCalculator/PricingConsideration';
import TipsToSave from 'components/TicketCalculator/TipsToSave';
import React from 'react';

const TicketCalculator = () => {
  return (
    <>
      <Banner />
      <Form />
      <TipsToSave />
      <PricingConsideration />
    </>
  );
};

export default TicketCalculator;