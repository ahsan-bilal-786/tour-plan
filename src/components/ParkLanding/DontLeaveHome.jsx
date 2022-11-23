import React from 'react';
import Container from 'components/ParkLanding/elements/Container';

const DontLeaveHome = () => {
  return (
    <Container bg="bg-tp-black-300" className="xs:pt-63 md:pt-86 xs:pb-38 md:pb-74 xs:px-30 md:px-0 text-center flex justify-center" >
      <div className='md:max-w-910 max-auto'>
        <h3 className='font-groteskBold text-tp-purple xs:text-24 sm:text-30 font-semibold mb-3'>
          “Don't leave home without the trifecta — the Unofficial Guide, Touringplans.com research and the Lines app — to personalize your day and see how the lines look!”
        </h3>
        <div className='text-tp-brown-300 text-18'>
          <span className='font-bold'>Courtney,</span> Tennessee, USA
        </div>
      </div>
    </Container>
  );
};

export default DontLeaveHome;