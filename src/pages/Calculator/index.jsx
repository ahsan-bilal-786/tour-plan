import React from 'react';
import Banner from "components/Calculator/Banner"
import FindTicketDiscount from "components/Calculator/FindTicketDiscount"
import Forms from "components/Calculator/Forms"
import WorldTickets from "components/Calculator/WorldTickets"
import Database from "components/Calculator/Database"

const Calculator = () => {
  return (
    <>
      <Banner />
      <FindTicketDiscount />
      <Forms />
      <WorldTickets />
      <Database />
    </>
  );
};

export default Calculator;