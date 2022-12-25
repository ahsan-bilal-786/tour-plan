import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import { SectionHeading } from 'components/ParkLanding/elements/Headings';

const PriceIncreases = () => {
  return (
    <Container bg="bg-tp-jacarta" className="xs:pt-[87px] xs:pb-[80px] md:pt-[47px] md:pb-[100px] xs:px-7 md:px-0 ">
      <SectionHeading className="capitalize font-groteskBold text-white text-center xs:leading-7 xs:mb-11 md:mb-56 md:leading-46 xs:max-w-[270px] md:max-w-full mx-auto">
        disney price increases
      </SectionHeading>
      <div className='xs:grid md:flex md:justify-between gap-x-11 text-center text-white'>
        In the past, Disney has raised prices 1-2 times per year, with increases averaging between 5-10% each year. Nowadays ticket pricing is associated with the dates for which the tickets are valid, and movements in price are more subtle. However, we still expect prices to go up over time. If you are budgeting for a future trip, to be safe plan for tickets to increase in price by about 10% per year.
      </div>
    </Container>
  );
};

export default PriceIncreases;