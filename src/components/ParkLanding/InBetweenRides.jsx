import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import Paragraph from 'components/ParkLanding/elements/Paragraph';
import { PhotoCard } from 'components/ParkLanding/elements/HorizontalCard';
import photo from "assets/images/photo-card.png"

const InBetweenRides = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[52px] md:pt-[83px] xs:pb-[62px] md:pb-[100px]">
      <Paragraph className="xs:mb-[36px] md:mb-[83px]">
        In between rides, take some time to meet and greet the Magic Kingdom’s most popular characters at meet and greet locations around the park:
      </Paragraph>
      <div className='xs:grid xs:grid-cols-2 md:flex md:justify-between mb-50'>
        <PhotoCard photo={photo} title="Princess friends at the Princess Fairytale Hall" />
        <PhotoCard photo={photo} title="Mickey Mouse at Town Square Theater" />
        <PhotoCard photo={photo} title="Splash Mountain" />
        <PhotoCard photo={photo} title="Seven Dwarfs Mine Train" />
      </div>
    </Container>
  );
};

export default InBetweenRides;