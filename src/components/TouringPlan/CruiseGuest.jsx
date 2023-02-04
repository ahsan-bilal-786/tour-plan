import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import PlansLayout from './PlansLayout';
import { data } from './config';


const CruiseGuest = () => {
  return (
    <Container bg="bg-tp-gray-400" className="xs:pt-[49px] md:pt-[68px] xs:pb-[68px] md:pb-[68px]">
      <PlansLayout 
        title="Mickey’s Halloween and Christmas Party  and Disney Cruise Guest"
        data={data}
      />
    </Container>
  );
};

export default CruiseGuest;