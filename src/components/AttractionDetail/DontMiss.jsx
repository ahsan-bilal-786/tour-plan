import React from 'react';
import Container from 'components/ParkLanding/elements/Container';

const DontLeaveHome = () => {
  return (
    <Container 
    bg="bg-tp-black-300" 
    className="pt-[69px] xs:pb-[135px] md:pb-[104px] md:px-0 text-center flex justify-center" >
      <div className='md:max-w-910 max-auto'>
        <div className='text-tp-purple text-18 xs:mb-10 md:mb-[40px]'>
          Our Recommendation
        </div>
        <h3 className='font-groteskBold text-white xs:text-9 sm:text-60 font-bold'>
          Don’t miss it!
        </h3>
      </div>
    </Container>
  );
};

export default DontLeaveHome;