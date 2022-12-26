import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import { SectionHeading } from 'components/ParkLanding/elements/Headings';
import attraction from "assets/images/attraction.png"
import attraction_1 from "assets/images/attraction_1.png"
import attraction_2 from "assets/images/attraction_2.png"
import attraction_3 from "assets/images/attraction_3.png"

export const PhotoCard = ({ photo, attraction, title }) => {
  return (
    <div className='flex flex-col text-center items-center xs:mb-6 md:mb-0'>
      <div className='xs:w-[126px] md:w-[171px] mx-auto xs:mb-4 md:mb-6'>
        <img
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
          src={photo} alt="cardcover"
        />
      </div>
      <div className='xs:w-[126px] md:w-[171px]'>
        <p className="text-tp-purple xs:text-[10px] md:text-13">{attraction}</p>
        <h5 className="text-tp-purple font-bold xs:mb-0 md:mb-3 xs:text-16 md:text-18">{title}</h5>
      </div>
    </div>
  );
}

const OtherParks = () => {
  return (
    <Container bg="bg-tp-jacarta" className="xs:pt-[87px] xs:pb-[80px] md:pt-[47px] md:pb-[100px] xs:px-7 md:px-0 ">
      <SectionHeading className="font-groteskBold text-white text-center xs:leading-7 xs:mb-11 md:mb-73 md:leading-46 xs:max-w-[270px] md:max-w-full mx-auto">
        Height Requirements at Other Parks
      </SectionHeading>
      <div className='xs:grid xs:grid-cols-2 md:flex md:justify-between gap-x-11'>
        <PhotoCard photo={attraction} attraction="7 attractions" title="Magic Kingdom" />
        <PhotoCard photo={attraction_1} attraction="3 attractions" title="EPCOT" />
        <PhotoCard photo={attraction_2} attraction="11 attractions" title="Disney's Hollywood Studios" />
        <PhotoCard photo={attraction_3} attraction="9 attractions" title="Disney's Animal Kingdom" />
      </div>
    </Container>
  );
};

export default OtherParks;