import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'components/ParkLanding/elements/Container';
import { SectionHeading } from 'components/ParkLanding/elements/Headings';
import HorizontalCard from 'components/ParkLanding/elements/HorizontalCard';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import photoCard from "assets/images/photo-card.png"

const SubscribeFullAccess = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[49px] md:pt-[100px] xs:pb-[100px] md:pb-[117px]">
      <SectionHeading className="text-center xs:leading-7 xs:mb-11  md:mb-73 md:leading-46">Subscribe for full access to these Touring Plans tools</SectionHeading>
      <div className='flex xs:flex-col md:flex-row justify-between'>
        <div className='xs:mb-10 md:mb-0'>
          <HorizontalCard img={photoCard} title="Crowd Calendar">
            <p className='mb-5'>See daily crowd predictions, show, parade and firework times and special events.</p>
            <SmallHeadings>Check the Crowd Calendar <FontAwesomeIcon icon={faArrowRight} className="ml-3" /></SmallHeadings>
          </HorizontalCard>
        </div>
        <div>
          <HorizontalCard img={photoCard} title="Crowd Tracker">
            <p className='mb-5'>See daily crowd predictions, show, parade and firework times and special events.</p>
            <SmallHeadings>Check the Crowd Tracker <FontAwesomeIcon icon={faArrowRight} className="ml-3" /></SmallHeadings>
          </HorizontalCard>
        </div>
      </div>
    </Container>
  );
};

export default SubscribeFullAccess;