import React from 'react';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import Paragraph, { ParagraphNormal } from 'components/ParkLanding/elements/Paragraph';
import Container from 'components/ParkLanding/elements/Container';


const Dinning = () => {
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-[53px] md:pt-[125px] xs:pb-[33px] md:pb-[76px]">
      <SmallHeadings>Planning Your Day</SmallHeadings>
      <div className='flex xs:flex-col md:flex-row md:justify-between'>
        <div className='xs:mb-11 md:mb-0 md:max-w-[527px]'>
          <Paragraph>
            The Magic Kingdom has lots of options for food. Our TouringPlans menu database can help you find the best values in the Kingdom that your family will want to eat.
          </Paragraph>
        </div>
        <div className='md:max-w-[420px]'>
          <ParagraphNormal>
            <span className='font-bold'>From the highly popular Crystal Palace to fairytale-fare at Cinderella’s Royal Table and Be Our Guest, your party can sit down to a variety of offerings.</span>
            Quick-service restaurants like Casey’s Corner feature the best hot dogs around and Cosmic Ray’s offers plenty of kid-friendly choices. And don’t forget the snacks that have made the park famous, including the pineapple-flavored soft-serve Dole Whip, popcorn, churros, turkey legs, cupcakes, cake pops and more.
          </ParagraphNormal>
        </div>
      </div>
    </Container >
  );
};

export default Dinning;