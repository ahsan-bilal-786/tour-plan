import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import { SectionHeading } from 'components/ParkLanding/elements/Headings';
import photo from "assets/images/photo-card.png"

export const PhotoCard = ({ photo, title, subtitle }) => {
  return (
    <div className='flex flex-col text-center items-center xs:mb-6 md:mb-0'>
      <div className='xs:w-[131px] md:w-[171px] mx-auto xs:mb-4 md:mb-6'>
        <img
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
          src={photo} alt="cardcover"
        />
      </div>
      <div className='xs:text-15 sm:text-18 w-[200px]'>
        <p className="text-tp-purple text-13">{title}</p>
        <h5 className="text-tp-purple font-bold xs:mb-0 md:mb-3 text-18">{subtitle}</h5>
      </div>
    </div>
  );
}

const OtherAttractions = () => {
  return (
    <Container bg="bg-tp-jacarta" className="xs:pt-[60px] md:pt-[125px] xs:pb-[55px] md:pb-[100px]">
      <SectionHeading className="text-white text-center xs:leading-7 xs:mb-11 md:mb-73 md:leading-46 xs:max-w-[270px] md:max-w-full mx-auto">
        Other attractions you might like
      </SectionHeading>
      <div className='xs:grid xs:grid-cols-2 md:flex md:justify-between mb-50'>
        <PhotoCard photo={photo} title="MAGIC KINGDOM" subtitle="Space Mountain" />
        <PhotoCard photo={photo} title="MAGIC KINGDOM" subtitle="Big Thunder Mountain Railroad" />
        <PhotoCard photo={photo} title="MAGIC KINGDOM" subtitle="Splash Mountain" />
        <PhotoCard photo={photo} title="EPCOT" subtitle="Soarin’ Around the World" />
      </div>
    </Container>
  );
};

export default OtherAttractions;