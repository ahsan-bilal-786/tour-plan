import React from "react";
import Banner from "components/RequestsRoom/Banner";
// import Topheader from 'components/TouringPlan/Topheader';
import Subscriber from "components/RequestsRoom/Subscriber";
import ViewRoom from "components/RequestsRoom/ViewsRoom";
import PremiumWorth from "components/RequestsRoom/PremiumWorth";

import RoomMake from "components/RequestsRoom/RoomMake";
import PerfectRoom from "components/RequestsRoom/PerfectRoom";
import OptionsHotels from "components/RequestsRoom/OptionsHotels";



/**
 *
 * @returns https://www.figma.com/file/x2h1F14g7XMFC24vrjbmIJ/Touring-Plans-Home?node-id=2264%3A3086&t=L9YhUKfhbBW6JTiC-0
 */
const RequestRoom = () => {
  return (
    <div className="scroll-pt-[200px] scroll-smooth">
      {/* <Topheader /> */}
      <Banner />
      <Subscriber />
      <ViewRoom />
      <RoomMake />
      <PremiumWorth />
      <PerfectRoom />
      <OptionsHotels />
      
    </div>
  );
};

export default RequestRoom;
