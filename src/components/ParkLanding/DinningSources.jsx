import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'components/ParkLanding/elements/Container';
import { SectionHeading } from 'components/ParkLanding/elements/Headings';
import HorizontalCard from 'components/ParkLanding/elements/HorizontalCard';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import photoCard from "assets/images/photo-card.png"


const DinningSources = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[51px] md:pt-[100px] xs:pb-[69px] md:pb-[117px]">
      <SectionHeading className="text-center xs:leading-7 xs:mb-11 md:mb-73 md:leading-46">
        Dining resources to make your trip delicious
      </SectionHeading>
      <div className='flex xs:flex-col md:flex-row justify-between'>
        <div className='xs:mb-10 md:mb-0'>
          <HorizontalCard img={photoCard} title="Food Finder">
            <p className='mb-5'>
              View all restaurants and snack carts in the park, and search every item on every menu.
            </p>
            <SmallHeadings className="xs:text-[14px] md:text-18">Find a food <FontAwesomeIcon icon={faArrowRight} className="ml-3" /></SmallHeadings>
          </HorizontalCard>
        </div>
        <div>
          <HorizontalCard img={photoCard} title="Dining Reservation Finder">
            <p className='mb-5'>
              Disney restaurants fill up fast. We’ll help you pick the spot and make advanced reservations like a pro.
            </p>
            <SmallHeadings className="xs:text-[14px] md:text-18">
              Find a dining reservation
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </SmallHeadings>
          </HorizontalCard>
        </div>
      </div>
    </Container>
  );
};

export default DinningSources;