import React from 'react';
import Banner from 'components/HotelLanding/Banner';
import WhyConsider from 'components/HotelLanding/WhyConsider';
import Options from 'components/HotelLanding/Options';
import Listing from 'components/HotelLanding/Listing';
import Footer from 'components/Footer';

const HotelLanding = () => {
  return (
    <>
      <Banner />
      <WhyConsider />
      <Options />
      <Listing />
      <Footer />
    </>
  );
};

export default HotelLanding;