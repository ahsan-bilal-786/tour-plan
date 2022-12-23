import React from 'react';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import Paragraph from 'components/ParkLanding/elements/Paragraph';
import Container from 'components/ParkLanding/elements/Container';
import StarFilled from "assets/images/star-filled.png"
import StarEmpty from "assets/images/star-empty.png"

const RatingStars = ({ size = 18 }) => (
  <div className='flex gap-x-2 xs:my-[5px] md:my-[8px]'>
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarEmpty} />
    <img alt="imagealt" width={size} height={size} src={StarEmpty} />
    <img alt="imagealt" width={size} height={size} src={StarEmpty} />
  </div>
)

const Details = ({ title, children }) => {
  return (
    <div className='md:flex-1 text-tp-purple border-t-[1px] border-t-tp-purple pt-2'>
      <div className='xs:text-[10px] md:text-13 font-medium uppercase'>{title}</div>
      <div className='xs:mb-0'>{children}</div>
    </div>
  );
}


const Overview = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[49px] md:pt-[108px] xs:pb-[80px] md:pb-[90px] xs:px-7 md:px-0">
      <div className='flex xs:flex-col md:flex-row md:justify-between md:mb-68 '>
        <div className='xs:mb-11 md:mb-0 md:max-w-[560px]'>
          <SmallHeadings>At a glance</SmallHeadings>
          <Paragraph className="xs:mb-50 md:mb-80">
            Seven Dwarfs Mine Train is a headlining indoor-outdoor roller coaster (without any loops, inversions or steep drops) where you ride along with Snow White and friends.
          </Paragraph>
          <div className='xs:grid xs:grid-cols-2 md:flex md:justify-between'>
            <div className='md:flex-1'>LOCATION<div className='text-13 font-bold'>Fantasyland</div></div>
            <div className='md:flex-1'>RIDER SWAP?<div className='text-13 font-bold'>Yes</div></div>
            <div className='md:flex-1'>DURATION<div className='text-13 font-bold'>3 minutes</div></div>
            <div className='md:flex-1'>MINIMUM HEIGHT<div className='text-13 font-bold'>38 inches</div></div>
          </div>
        </div>
        <div className='md:w-[460px]'>
          <div className='flex my-5 xs:gap-8 md:gap-5 justify-around'>
            <div className='flex-1'>
              <Details title="CURRENT STANDBY  WAIT TIME">
                <div className="font-normal text-24 md:mt-4">68 minutes</div>
                <div className="font-bold text-4 xs:mb-[22px] md:mb-[22px]">View Full Forecast</div>
              </Details>
              <Details title="LIGHTNING LANE FOR 08/05/22">
                <div className="font-normal text-24 md:mt-4">Gone</div>
                <div className="font-bold text-4 xs:mb-[22px] md:mb-[22px]">As of 6:25pm EDT</div>
              </Details>
              <Details title="GUEST OVERALL RATING">
                <RatingStars size={18} />
              </Details>
              <Details title="OUR OVERALL RATING">
                <RatingStars size={18} />
              </Details>
            </div>
            <div className='flex-1'>
              <Details title="PRESCHOOL">
                <RatingStars size={18} />
              </Details>
              <Details title="GRADE SCHOOL">
                <RatingStars size={18} />
              </Details>
              <Details title="TEENS">
                <RatingStars size={18} />
              </Details>
              <Details title="YOUNG ADULTS">
                <RatingStars size={18} />
              </Details>
              <Details title="OVER 30">
                <RatingStars size={18} />
              </Details>
              <Details title="SENIORS">
                <RatingStars size={18} />
              </Details>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Overview;