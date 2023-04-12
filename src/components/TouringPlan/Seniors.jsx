import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import PlansLayout from './PlansLayout';
import { data } from './config';


const Seniors = () => {
  return (
    <Container bg="bg-tp-gray-400" className="xs:pt-[49px] md:pt-[68px] xs:pb-[68px] md:pb-[68px]">
      <PlansLayout 
        title="Seniors"
        data={data}
      />
    </Container>
  );
};

export default Seniors;