import React from 'react';
import Banner from 'components/TouringPlan/Banner';
// import Topheader from 'components/TouringPlan/Topheader';
import SmallChildren from 'components/TouringPlan/SmallChildren';
import OlderChildren from 'components/TouringPlan/OlderChildren';
import Adults from 'components/TouringPlan/Adults';
import Seniors from 'components/TouringPlan/Seniors';
import WholeFamily from 'components/TouringPlan/WholeFamily';
import CruiseGuest from 'components/TouringPlan/CruiseGuest';
import CutomizingPlans from 'components/TouringPlan/CutomizingPlans';
import PeopleSaying from 'components/TouringPlan/PeopleSaying';
import QuickTips from 'components/TouringPlan/QuickTips';
import CustomizeYourTourPlan from 'components/TouringPlan/Cutomize';
import Bonus from 'components/TouringPlan/Bonus';
import Recommendations from 'components/TouringPlan/Recommendations';
import Subscriber from 'components/RequestsRoom/Subscriber';
import ViewRoom from 'components/RequestsRoom/ViewsRoom';
import UnofficialTip from 'components/LightningGenie/UnofficialTips';

import RoomMake from 'components/RequestsRoom/RoomMake';




/**
 * 
 * @returns https://www.figma.com/file/x2h1F14g7XMFC24vrjbmIJ/Touring-Plans-Home?node-id=2264%3A3086&t=L9YhUKfhbBW6JTiC-0
 */
const RequestRoom = () => {
  return (
    <div className='scroll-pt-[200px] scroll-smooth'>
      {/* <Topheader /> */}
      <Banner />
      <Subscriber />
      <ViewRoom />
<RoomMake />
<CustomizeYourTourPlan />

       <SmallChildren />
      <CustomizeYourTourPlan />
      <UnofficialTip bg="bg-tp-gray-400"  />   
          <OlderChildren />
      <Adults />
      <Seniors />
      <WholeFamily />
      <CruiseGuest />
      <CutomizingPlans />
      <Recommendations />
      <PeopleSaying />
      <QuickTips />
      <Bonus /> 

    </div>
  );
};

export default RequestRoom;