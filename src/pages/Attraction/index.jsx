import React from 'react';
import AttractionCard from 'components/Attraction';
import Container from 'elements/Container';

const Attraction = () => {
  return (
    <Container bg="bg-tp-purple" className="bg-white md:!max-w-850" >
      <div className='xs:max-w-342 md:max-w-800 mx-auto'>
        <AttractionCard />
        <AttractionCard />
      </div>
    </Container>
  );
};

export default Attraction;