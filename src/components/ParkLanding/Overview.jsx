import React from 'react';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import Paragraph from 'components/ParkLanding/elements/Paragraph';
import Container from 'components/ParkLanding/elements/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ title, children }) => {
  return (
    <div className=' md:flex-1 text-tp-purple border-t-[1px] border-t-tp-purple pt-2'>
      <div className='text-13 font-medium'>{title}</div>
      <div className='text-4 font-bold'>{children}</div>
    </div>
  );
}


const Overview = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[49px] md:pt-[92px] xs:pb-[70px] md:pb-[102px]">
      <div className='flex xs:flex-col md:flex-row md:justify-between xs:mb-73 md:mb-68 '>
        <div className='xs:mb-11 md:mb-0 md:max-w-[527px]'>
          <SmallHeadings>Overview</SmallHeadings>
          <Paragraph>
            As Walt Disney World’s most popular destination, the park can be overwhelming and become quite crowded, even during the low season. We’ll help you experience all of the magic without getting caught up in crowds and lines.
          </Paragraph>
        </div>
        <div className='md:max-w-[420px]'>
          <SmallHeadings>Today’s Park Information and Crowd Levels</SmallHeadings>
          <SmallHeadings>See the full Crowd Calendar <FontAwesomeIcon icon={faArrowRight} className="ml-3" /></SmallHeadings>
        </div>
      </div>
      <div className='xs:grid xs:grid-cols-2  md:flex gap-4'>
        <Footer title="Park Rating">
          <div className="font-bold">6,412 reader surveys</div>
          <div>assessing its attractions</div>
        </Footer>
        <Footer title="Attractions">
          XXXXX total<br />16 closures
        </Footer>
        <Footer title="TICKET PRICES">
          $104–$159, single-day, single-park<br />adult ticket
        </Footer>
        <Footer title="Address">
          1180 Seven Seas Dr<br />Lake Buena Vista, FL
        </Footer>
        <Footer title="Phone Number">
          (407) 939-5277
        </Footer>
      </div>
    </Container>
  );
};

export default Overview;