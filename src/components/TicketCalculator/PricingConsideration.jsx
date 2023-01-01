import React, { useState } from 'react';
import Container from 'elements/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Tab = ({ title, children }) => {
  const [open, toggle] = useState(false);
  return (
    <div>
      <div
        className='font-eucliarLight cursor-pointer xs:mb-4 md:mb-4 xs:text-18 md:text-30 font-light leading-46 border-b border-black flex justify-between'
        onClick={() => toggle(!open)}
      >
        <div>{title}</div>
        <div className='text-18'><FontAwesomeIcon icon={faPlus} /></div>
      </div>
      <div className={`${!open && 'hidden'} pt-5 pb-30`}>{children}</div>
    </div>
  );
}


const Row = ({ title, avgTime, deadline }) => {
  return (
    <div className={`md:min-w-[500px] border-tp-purple-500 border-t text-[16px] font-bold font-eucliarBold`}>
      <div className={`max-w-[1080px] mx-auto`}>
        <div className='flex md:text-left xs:text-15 md:text-18 xs:gap-3 py-3 xs:pl-6 md:pl-0'>
          <div className={`xs:w-1/5 md:w-1/3`}>{title}</div>
          <div className={`xs:w-2/5 md:w-1/3`}>{avgTime}</div>
          <div className={`xs:w-2/5 md:w-1/3`}>{deadline}</div>
        </div>
      </div>
    </div>
  );
};

const TabContent = () => (
  <>
    <p className='pb-[40px]'>Along with the introduction of date-based pricing, Disney shortened the amount of time you have to use your tickets. Previously, all tickets expired at midnight 14 days after first use. Now, a ticket’s use period begins on the “start date” chosen at the time of purchase, and the time until expiration varies based on how many days you’re visiting the theme parks and water parks, as shown below:</p>

    <div className='overflow-auto text-tp-purple-500 pb-7 xs:w-[calc(100vw-50px)] md:w-auto'>
      <div className='xs:w-[840px] md:w-[1080px] '>
        <div className='table-header'>
          <div className='min-w-[500px] max-w-[1080px] mx-auto'>
            <div className="flex xs:text-15 md:text-18 border-tp-purple-500 border-t text-left  xs:pl-6 md:pl-0 leading-46">
              <div className={`xs:w-1/5 md:w-1/3 flex items-end`}>Ticket Days</div>
              <div className={`xs:w-2/5 md:w-1/3 flex items-end`}>1 Park Per Day Or Park Hopper Ticket</div>
              <div className={`xs:w-2/5 md:w-1/3 flex items-end`}>Park Hopper Plus </div>
            </div>
          </div>
        </div>
        <Row
          title="1-Day"
          avgTime="Only the start date"
          deadline={<>2 Days (start date and the day after)</>}
        />
        <Row
          title="2-Day"
          avgTime="4 Days"
          deadline="5 Days"
        />
        <Row
          title="3-Day"
          avgTime="4 Days"
          deadline="5 Days"
        />
      </div>
    </div>
    <p>For example, if you purchase a 4-Day 1 Park Per Day theme park ticket and specify you’ll start using it on June 15, 2022, you must complete your four days of theme park visits by the end of June 21, 2022. After that, the ticket is expired, even if you don’t use it.</p>
  </>
)


const PricingConsideration = () => {
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-12 md:pt-[57px] xs:pb-[90px] md:pb-[78px] xs:px-7 md:px-0">
      <div className='mb-10 text-center flex flex-col items-center'>
        <h1 className="capitalize xs:w-[320px] md:w-auto xs:text-24 md:text-30 mb-1 font-groteskBold text-tp-purple font-semibold">
          Pricing Considerations
        </h1>
      </div>
      <Tab title="Date-based Pricing + Surcharges"><TabContent /></Tab>
      <Tab title="Disney Ticket Add-ons"><TabContent /></Tab>
      <Tab title="Annual Passes"><TabContent /></Tab>
      <Tab title="Disney Price Increases"><TabContent /></Tab>


    </Container>
  );
};

export default PricingConsideration;

