import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import PlansLayout from './PlansLayout';
import { data } from './config';


const Adults = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[49px] md:pt-[68px] xs:pb-[68px] md:pb-[68px]">
      <PlansLayout 
        title="Adults"
        data={data}
      />
    </Container>
  );
};

export default Adults;