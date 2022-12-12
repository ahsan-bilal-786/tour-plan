import React from 'react';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import Paragraph from 'components/ParkLanding/elements/Paragraph';
import Container from 'components/ParkLanding/elements/Container';



const Event = ({ value, start, end, className }) => {
  return (
    <div className='text-center max-w-[125px]'>
      {/* <div className='text-18 font-medium mb-3'>{day}</div> */}
      <div className='shadow-lg md:pt-3 pb-7 px-[10px] rounded-xl'>
        <div className='xs:text-13 md:text-15 text-tp-gray-200 mb-1 uppercase'>{value}</div>
        <div className={`xs:text-46 md:text-60 font-semibold text-groteskSemiBold ${className}`}>{value}</div>
        <div className={`text-13 mb-2 font-semibold text-groteskBold ${className}`}>{start}</div>
        <div className='text-15 font-bold	'>{end}</div>
      </div>
    </div>
  );
}

const WaitTimes = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[49px] md:pt-[108px] xs:pb-[80px] md:pb-[90px]">
      <div className='flex xs:flex-col md:flex-row md:justify-between md:mb-68 '>
        <div className='xs:mb-11 md:mb-0 md:max-w-[560px]'>
          <SmallHeadings>Wait Times</SmallHeadings>
          <p>
            Here’s roughly how long you’ll wait for Seven Dwarfs Mine Train when you visit, per Magic Kingdom Crowd Level.
          </p>
          <div className='xs:grid xs:grid-cols-2 md:flex md:justify-between'>
            <div className='md:flex-1'>LOCATION<div className='text-13 font-bold'>Fantasyland</div></div>
            <div className='md:flex-1'>RIDER SWAP?<div className='text-13 font-bold'>Yes</div></div>
            <div className='md:flex-1'>DURATION<div className='text-13 font-bold'>3 minutes</div></div>
            <div className='md:flex-1'>MINIMUM HEIGHT<div className='text-13 font-bold'>38 inches</div></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WaitTimes;