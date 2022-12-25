import React from 'react';
import Banner from "components/Calculator/Banner"
import FindTicketDiscount from "components/Calculator/FindTicketDiscount"
import Forms from "components/Calculator/Forms"
import WorldTickets from "components/Calculator/WorldTickets"
import Database from "components/Calculator/Database"
import Expire from "components/Calculator/Expire"
import TicketAddons from "components/Calculator/TicketAddons"
import AnnualPasses from "components/Calculator/AnnualPasses"
import SaveMoney from "components/Calculator/SaveMoney"
import PriceIncreases from "components/Calculator/PriceIncreases"

const Calculator = () => {
  return (
    <>
      <Banner />
      <FindTicketDiscount />
      <Forms />
      <WorldTickets />
      <Database />
      <Expire />
      <TicketAddons />
      <AnnualPasses />
      <SaveMoney />
      <PriceIncreases />
    </>
  );
};

export default Calculator;