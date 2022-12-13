import React from 'react';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import Container from 'components/ParkLanding/elements/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Event = ({ value, start, end, className }) => {
  return (
    <div className='flex-1 xs:text-left md:text-center'>
      <div className='md:pt-3 pb-7 px-[10px] xs:flex xs:items-center md:block'>
        <div className={`xs:text-46 md:text-60 font-semibold font-groteskSemiBold xs:mr-5 ${className}`}>{value}</div>
        <div className={`xs:text-24 md:text-30 font-light font-eucliarLight leading-10 xs:mr-2 md:mr-0`}>{start} to</div>
        <div className='xs:text-24 md:text-30 font-light font-eucliarLight leading-10'>{end}</div>
      </div>
    </div>
  );
}

const WaitTimes = () => {
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-[58px] md:pt-[75px] xs:pb-[47px] md:pb-[123px] xs:px-7 md:px-0 ">
      <div className='flex xs:flex-col md:flex-row md:justify-between'>
        <div className='w-full'>
          <SmallHeadings>Wait Times</SmallHeadings>
          <p className='xs:text-15 md:text-18 font-normal xs:mb-4 md:mb-11'>
            Here’s roughly how long you’ll wait for Seven Dwarfs Mine Train when you visit, per Magic Kingdom Crowd Level.
          </p>
          <div className='xs:grid xs:grid-cols-1 md:flex md:justify-between md:mb-5'>
            <Event className={`text-tp-numeric-1 `} value={1} start="50" end="70m" />
            <Event className={`text-tp-numeric-2 `} value={2} start="50" end="70m" />
            <Event className={`text-tp-numeric-3 `} value={3} start="50" end="70m" />
            <Event className={`text-tp-numeric-4 `} value={4} start="50" end="70m" />
            <Event className={`text-tp-numeric-5 `} value={5} start="50" end="70m" />
            <Event className={`text-tp-numeric-6 `} value={6} start="50" end="70m" />
            <Event className={`text-tp-numeric-8 `} value={8} start="50" end="70m" />
            <Event className={`text-tp-numeric-9 `} value={9} start="50" end="70m" />
            <Event className={`text-tp-numeric-10 `} value={10} start="50" end="70m" />
          </div>
          <p className='xs:hidden md:block md:leading-10'>For a better forecast for your specific travel dates:</p>
          <p class="xs:hidden md:block text-tp-purple text-18 font-bold">
            Connect with our travel agents
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WaitTimes;