import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import PlansLayout from './PlansLayout';
import { data } from './config';


const SmallChildren = () => {
  return (
    <Container bg="bg-tp-gray-400" className="xs:pt-[86px] md:pt-[68px] xs:pb-[68px] md:pb-[68px]">
      <PlansLayout 
        title="Parent With Small Children"
        subtitle="OVER 44'' TALL"
        data={data}
      />
    </Container>
  );
};

export default SmallChildren;