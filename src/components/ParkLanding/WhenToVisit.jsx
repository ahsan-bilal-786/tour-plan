import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import Paragraph, { ParagraphNormal } from 'components/ParkLanding/elements/Paragraph';
import Container from 'components/ParkLanding/elements/Container';
import Chart from "assets/images/chart.png"


const WhenToVisit = () => {
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-[60px] md:pt-[125px] xs:pb-[76px] md:pb-[111px]">
      <SmallHeadings>When to Visit</SmallHeadings>
      <div className='flex xs:flex-col md:flex-row md:justify-between xs:mb-12 md:mb-138 '>
        <div className='xs:mb-11 md:mb-0 md:max-w-[527px]'>
          <Paragraph>
            The Magic Kingdom is Disney’s most popular park all year round so it can be tough to figure out when is the best time to go. Luckily, that is what TouringPlans does, and does it well.
          </Paragraph>
        </div>
        <div className='md:max-w-[420px]'>
          <ParagraphNormal className="mb-3">
            <span className='font-bold'>We track crowds at the Magic Kingdom every minute of every day all year round.</span>
            Check the Crowd Calendar to see how crowded it will be on the day of your visit. Crowd Levels vary a lot depending on when you choose to go and levels can change often too, so make sure you use the Crowd Tracker to be notified when the crowd levels change.
          </ParagraphNormal>
          <SmallHeadings>See the full Crowd Calendar <FontAwesomeIcon icon={faArrowRight} className="ml-3" /></SmallHeadings>
        </div>
      </div>
      <div>
        <img src={Chart} alt="chart"/>
      </div>
    </Container>
  );
};

export default WhenToVisit;