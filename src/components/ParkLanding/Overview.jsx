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


const Event = ({ day, date, count, title, time, className }) => {
  return (
    <div className='text-center max-w-[125px]'>
      <div className='text-18 font-medium mb-3'>{day}</div>
      <div className='shadow-lg md:pt-3 pb-7 px-[10px] rounded-xl'>
        <div className='xs:text-13 md:text-15 text-tp-gray-200 mb-1 uppercase'>{date}</div>
        <div className={`xs:text-46 md:text-60 font-semibold text-groteskSemiBold ${className}`}>{count}</div>
        <div className={`text-13 mb-2 font-semibold text-groteskBold ${className}`}>{title}</div>
        <div className='text-15 font-bold	'>{time}</div>
      </div>
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
          <div className='flex my-5 gap-3 justify-around'>
            <Event
              className="text-tp-redoxide-500"
              day="Mon"
              date="OCT 3"
              count="8"
              title="Large Crowds"
              time="(8:30am) / 9am–11pm"
            />
            <Event
              className="text-tp-venetian-yellow"
              day="Mon"
              date="OCT 3"
              count="3"
              title="Large Crowds"
              time="(8:30am) / 9am–11pm"
            />
            <Event
              className="text-tp-redoxide-500"
              day="Mon"
              date="OCT 3"
              count="8"
              title="Large Crowds"
              time="(8:30am) / 9am–11pm"
            />
          </div>
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