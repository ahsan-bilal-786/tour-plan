import React from 'react';
import Banner from 'components/LightningGenie/Banner';
import Difference from 'components/LightningGenie/Difference';
import GenieReservation from 'components/LightningGenie/GenieReservation';
import UnofficialTip from 'components/LightningGenie/UnofficialTips';
import NeedTouring from 'components/LightningGenie/NeedTouring';
import DontPayGenie from 'components/LightningGenie/DontPayGenie';
import UsingTourPlans from 'components/LightningGenie/UsingTourPlans';
import Saving from 'components/LightningGenie/Saving';
import TimeSaving from 'components/LightningGenie/TimeSaving';
import FAQs from 'components/LightningGenie/FAQs';
import Footer from 'components/Footer';
// // https://www.figma.com/file/x2h1F14g7XMFC24vrjbmIJ/Touring-Plans-Home?node-id=2906%3A4049
const LightningGenie = () => {
  return (
    <>
      <Banner />
      <Difference />
      <GenieReservation />
      <NeedTouring />
      <UsingTourPlans />
      <Saving />
      <TimeSaving />
      <DontPayGenie />
      <FAQs />
      <UnofficialTip />
      <Footer />
    </>
  );
};

export default LightningGenie;