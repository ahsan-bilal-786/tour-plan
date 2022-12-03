import React from 'react';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import Paragraph, { ParagraphNormal } from 'components/ParkLanding/elements/Paragraph';
import Container from 'components/ParkLanding/elements/Container';


const PlanningYourDay = () => {
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-[60px] md:pt-[125px] xs:pb-[52px] md:pb-[127px]">
      <SmallHeadings>Planning Your Day</SmallHeadings>
      <div className='flex xs:flex-col md:flex-row md:justify-between'>
        <div className='xs:mb-11 md:mb-0 md:max-w-[527px]'>
          <Paragraph>
            Magic Kingdom has more attractions per square foot than the other parks which means more choices, and also means you can beat the crowds and save yourself a lot of time standing in line (if you plan it right).
          </Paragraph>
        </div>
        <div className='md:max-w-[420px]'>
          <ParagraphNormal>
            <span className='font-bold'>Our Touring Plans show you what to see, when to see it and how to minimize your time in line while doing it. We wrote the book on touring the Magic Kingdom - literally.</span>
            Want to know how to see Seven Dwarfs Mine Train without waiting seven hours? Subscribe to TouringPlans for full access to our Lines App, the #1 rated app for touring the Magic Kingdom. Lines shows you all the schedules, crowd levels and wait times you need to navigate the park.
          </ParagraphNormal>
        </div>
      </div>
    </Container>
  );
};

export default PlanningYourDay;