import React from 'react';
import Banner from 'components/ParkLanding/Banner';
import Overview from 'components/ParkLanding/Overview';
import WhenToVisit from 'components/ParkLanding/WhenToVisit';
import Cover from 'components/ParkLanding/Cover';
import SpecialEvents from 'components/ParkLanding/SpecialEvents';
import SubscribeFullAccess from 'components/ParkLanding/SubscribeFullAccess';
import Footer from 'components/Footer';
import cartoon from "assets/images/cartoon.png"
import dinning from "assets/images/dinning.png"
import fireworks from "assets/images/fireworks.png"
import travel from "assets/images/travel.png"
import PlanningYourDay from 'components/ParkLanding/PlanningYourDay';
import MinuteAccess from 'components/ParkLanding/MinuteAccess';
import DontLeaveHome from 'components/ParkLanding/DontLeaveHome';
import WhatToSeeDo from 'components/ParkLanding/WhatToSeeDo';
import InBetweenRides from 'components/ParkLanding/InBetweenRides';
import RoundOutDay from 'components/ParkLanding/RoundOutDay';
import Attractions from 'components/ParkLanding/Attractions';
import Dinning from 'components/ParkLanding/Dinning';
import DinningSources from 'components/ParkLanding/DinningSources';
import Topheader from 'components/ParkLanding/Topheader';

/**
 * 
 * @returns https://www.figma.com/file/x2h1F14g7XMFC24vrjbmIJ/Touring-Plans-Home?node-id=3365%3A3332&t=uhpkw9LvxLRVjHDK-0
 */
const ParkLanding = () => {
  return (
    <>
      <Topheader />
      <Banner />
      <Overview />
      <WhenToVisit />
      <Cover src={cartoon} className="max-h-[458px]" />
      <SpecialEvents />
      <SubscribeFullAccess />
      <Cover src={travel} className="max-h-[464px]" />
      <PlanningYourDay />
      <MinuteAccess />
      <DontLeaveHome />
      <WhatToSeeDo />
      <InBetweenRides />
      <RoundOutDay />
      <Cover src={fireworks} className="max-h-[887px]" />
      <Attractions />
      <Dinning />
      <Cover src={dinning} className="max-h-[564px]" />
      <DinningSources />
      <Footer />
    </>
  );
};

export default ParkLanding;