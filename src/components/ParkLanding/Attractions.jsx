import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'components/ParkLanding/elements/Container';
import HorizontalCard from 'components/ParkLanding/elements/HorizontalCard';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import photoCard from "assets/images/photo-card.png"

const Attractions = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[49px] md:pt-[98px] xs:pb-[80px] md:pb-[117px]">
      <div className='flex xs:flex-col md:flex-row justify-between'>
        <div className='xs:mb-10 md:mb-0'>
          <HorizontalCard img={photoCard} title="Attractions">
            <p className='mb-5'>
              Check out how you can make the most of your time with our Attraction listings with reviews and ratings.
            </p>
            <SmallHeadings className="xs:text-[14px] md:text-18">View Attractions <FontAwesomeIcon icon={faArrowRight} className="ml-3" /></SmallHeadings>
          </HorizontalCard>
        </div>
        <div>
          <HorizontalCard img={photoCard} title="Parades & Entertainment">
            <p className='mb-5'>
              Use our app to find show times and to know how to work this fun into your day.
            </p>
            <SmallHeadings className="xs:text-[14px] md:text-18">
              View Parades & Entertainment <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </SmallHeadings>
          </HorizontalCard>
        </div>
      </div>
    </Container>
  );
};

export default Attractions;