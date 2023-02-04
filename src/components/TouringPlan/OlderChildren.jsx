import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import PlansLayout from './PlansLayout';
import { data } from './config';


const OlderChildren = () => {
  return (
    <Container bg="bg-tp-gray-400" className="xs:pt-[86px] md:pt-[68px] xs:pb-[68px] md:pb-[68px]">
      <PlansLayout 
        title="Parent With Older Children"
        data={data}
      />
    </Container>
  );
};

export default OlderChildren;