import React from "react";
import Carousel from "components/RoomDetails/Carousel";
import Header from "components/RoomDetails/Header";
import Notifications from "components/RoomDetails/Notifications";
import Slider from "components/RoomDetails/Slider";
import Comments from "components/RoomDetails/Comments";
import LikeView from "components/RoomDetails/LikeView";
import PrivateNotes from "components/RoomDetails/PrivateNotes";
import Tables from "components/RoomDetails/Tables";

/**
 *
 * @returns https://www.figma.com/file/x2h1F14g7XMFC24vrjbmIJ/Touring-Plans-Home?node-id=8533-5393&t=zr9cnLYPpRYkfN5W-0
 */
const RoomDetails = () => {
  return (
    <div className="scroll-pt-[200px] scroll-smooth py-7">
      <Notifications />
      <Header />
      <Slider />
      <Carousel />
      
      <Tables />
      <Comments />
      <PrivateNotes />
      <LikeView />
    </div>
  );
};

export default RoomDetails;
