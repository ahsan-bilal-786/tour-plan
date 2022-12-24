import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import Paragraph, { ParagraphNormal } from 'components/ParkLanding/elements/Paragraph';

const Database = () => {
  return (
    <Container bg="bg-tp-purple-500" className="xs:pt-[58px] xs:pb-[90px] md:pt-[80px]  md:pb-[100px] text-white  xs:px-7 md:px-0">
      <Paragraph className="mb-[60px] text-white">Date-based pricing and other surcharges</Paragraph>
      <div className='flex xs:flex-col md:flex-row md:justify-between md:gap-20'>
        <div >
          <ParagraphNormal>
            <p className="mb-2">Disney introduced date-based pricing for multi-day tickets in Fall 2018, following its switch to date-based pricing of single-day tickets in 2016. Roughly similar to hotel room or airline ticket pricing, Disney’s ticket prices vary considerably based on the days of the year you’re visiting.</p>

            <p className="mb-2">To avoid additional surcharges when buying tickets, you must tell Disney the first date on which you plan to visit a theme park or water park. Your ticket price will be based on that starting date, the number of days you plan to visit theme parks or water parks, and whether you plan to visit more than one theme park per day.</p>

            <p className="">The highest-priced tickets are generally found on dates when most children are out of school: Christmas and other holidays, Spring Break, and summer vacation. Less expensive tickets are generally available during non-holiday periods when children are in school, and during months subject to inclement weather: January and February, for example, and peak hurricane season in September.</p>

          </ParagraphNormal>
        </div>
        <div >
          <ParagraphNormal>
            <p className="mb-2">If you need to move your vacation dates from more expensive days to less expensive days, Disney will not refund the difference in ticket prices. But Disney will charge you the incremental cost if you need to move from less expensive to more expensive days.</p>

            <p className="mb-2">One-day admission to a Walt Disney World theme park costs the same, no matter which park you choose to visit. This is different from in years past, when the cost to visit Magic Kingdom was higher than the cost to visit EPCOT, Disney’s Hollywood Studios, or Disney’s Animal Kingdom.</p>

            <p className="">Note that Disney has not yet implemented date-based pricing for the Disneyland Resort's theme parks in California: Disneyland Park and Disney California Adventure.</p>

          </ParagraphNormal>
        </div>
      </div>
    </Container>
  );
};

export default Database;