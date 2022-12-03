import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import Paragraph from 'components/ParkLanding/elements/Paragraph';
import { PhotoCard } from 'components/ParkLanding/elements/HorizontalCard';
import { SectionHeading } from 'components/ParkLanding/elements/Headings';
import photo from "assets/images/photo-card.png"

const WhatToSeeDo = () => {
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-[60px] md:pt-[125px] xs:pb-[55px] md:pb-[100px]">
      <SmallHeadings>What to See and Do</SmallHeadings>
      <Paragraph className="mb-9">The Magic Kingdom has so much to see and do that it could potentially take several days of your vacation to experience it all. Don’t miss:</Paragraph>
      <SectionHeading className="text-center xs:leading-7 xs:mb-11 md:mb-73 md:leading-46 xs:max-w-[270px] md:max-w-full mx-auto">
        The Magic Kingdom Mountain Tour
      </SectionHeading>
      <div className='xs:grid xs:grid-cols-2 md:flex md:justify-between mb-50'>
        <PhotoCard photo={photo} title="Space Mountain" />
        <PhotoCard photo={photo} title="Big Thunder Mountain Railroad" />
        <PhotoCard photo={photo} title="Splash Mountain" />
        <PhotoCard photo={photo} title="Seven Dwarfs Mine Train" />
      </div>
      <SectionHeading className="text-center xs:leading-7 xs:mb-11 md:mb-73 md:leading-46 xs:max-w-[270px] md:max-w-full mx-auto">
        And these are always crowd-pleasers
      </SectionHeading>
      <div className='xs:grid xs:grid-cols-2 md:flex md:justify-between'>
        <PhotoCard photo={photo} title="Space Mountain" />
        <PhotoCard photo={photo} title="Big Thunder Mountain Railroad" />
        <PhotoCard photo={photo} title="Splash Mountain" />
        <PhotoCard photo={photo} title="Seven Dwarfs Mine Train" />
      </div>
    </Container>
  );
};

export default WhatToSeeDo;