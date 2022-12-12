import React from 'react';
import travel from "assets/images/travel.png"
import Cover from 'components/AttractionDetail/Cover';
import Topheader from 'components/AttractionDetail/Topheader';
import Banner from 'components/AttractionDetail/Banner';
import Glance from 'components/AttractionDetail/Glance';
import TouringTips from 'components/AttractionDetail/TouringTips';
import OtherAttractions from 'components/AttractionDetail/OtherAttractions';
import WaitTimes from 'components/AttractionDetail/WaitTimes';
import DontMiss from 'components/AttractionDetail/DontMiss';
import TouringPlans from 'components/AttractionDetail/TouringPlans';

const AttractionDetail = () => {
  return (
    <>
      <Topheader />
      <Banner />
      <Glance />
      <Cover src={travel} className="xs:h-190 md:h-auto md:max-h-[698px]" />
      <TouringTips />
      <OtherAttractions />
      <WaitTimes />
      <DontMiss />
      <TouringPlans />
    </>
  );
};

export default AttractionDetail;