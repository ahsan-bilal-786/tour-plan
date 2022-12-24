import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import { SectionHeading } from 'components/ParkLanding/elements/Headings';
import HorizontalCard from 'components/ParkLanding/elements/HorizontalCard';
import photoCard from "assets/images/photo-card.png"


const WorldTickets = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[49px] md:pt-[100px] xs:pb-[100px] md:pb-[117px]">
      <SectionHeading className="text-center xs:leading-7 xs:mb-11 md:mb-73 md:leading-46">
        Walt Disney World Tickets
        <div className='xs:text-15 md:text-18 font-medium text-black'>
          Disney World offers more than seven thousand ticket options. These range from the humble 1-Day 1 Park Per Day
        </div>
      </SectionHeading>

      <div className='flex xs:flex-col md:flex-row justify-between xs:mb-10 xs:mb-15'>
        <div className='xs:mb-10 md:mb-0'>
          <HorizontalCard img={photoCard} title="Ticket">
            <p className='mb-5'>Ticket is good for a single day’s entry into one Disney theme park, to the blinged-out Incredi-Pass with Water Parks</p>
          </HorizontalCard>
        </div>
        <div>
          <HorizontalCard img={photoCard} title="Sports Option">
            <p className='mb-5'>Sports Option is good for 365 days of admission into every Disney theme or water park, plus Disney’s Oak Trail Golf Course and other attractions.</p>
          </HorizontalCard>
        </div>
      </div>
      <div className='xs:text-12 md:text-[16px] italic xs:font-bold md:font-medium text-tp-purple text-center'>
        The options will expand even further on December 8, 2022, when Disney starts charging park- and date-specific prices for 1-day tickets and varying the price of the Park Hopper option by date.
      </div>
    </Container>
  );
};

export default WorldTickets;