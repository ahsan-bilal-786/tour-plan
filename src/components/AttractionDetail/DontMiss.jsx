import React from 'react';
import Container from 'components/ParkLanding/elements/Container';

const DontLeaveHome = () => {
  return (
    <Container bg="bg-tp-black-300" className="xs:pt-63 md:pt-86 xs:pb-38 md:pb-74 xs:px-30 md:px-0 text-center flex justify-center" >
      <div className='md:max-w-910 max-auto'>
        <div className='text-tp-purple text-18'>
          Our Recommendation
        </div>
        <h3 className='font-groteskBold text-white xs:text-24 sm:text-30 font-semibold mb-3'>
          Don’t miss it!
        </h3>
      </div>
    </Container>
  );
};

export default DontLeaveHome;