import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Container from "components/ParkLanding/elements/Container";
import roomdetails from "assets/images/roomdetails.png";

const Arrow = ({ icon, text, className }) => (
  <div
    className={`absolute flex rounded-full  top-[50%] translate-y-[-100%]  w-[38px] h-[38px] bg-tp-gray-300 text-white text-13 text-center justify-center items-center cursor-pointer ${className}`}
  >
    <FontAwesomeIcon icon={icon} />
    {text}
  </div>
);

const CarouselItem = ({ title, className }) => {
  return (
    <div
      className={` w-[309px] flex flex-col gap-y-4 justify-center ${className} `}
    >
      <img src={roomdetails} alt="arrows" className="h-[207px]" />
      <p className="font-bold text-lg leading-7 text-center text-tp-purple">
        {title}
      </p>
    </div>
  );
};

const Carousel = () => {
  return (
    <Container bg="bg-white" className="border-0 border-b-2 border-black">
      <div className="flex flex-row gap-10 relative mb-10">
        <Arrow icon={faAngleLeft} className="left-[-48px]" />
        <Arrow icon={faAngleRight} className="right-[-48px]" />
        <CarouselItem className="flex-1" title="Room # 6534" />
        <CarouselItem className="flex-1" title="Room # 6534" />
        <div className="flex-1 flex pb-[42px]" >
          <div className="px-4 bg-tp-neutral flex flex-col justify-center items-center text-center">
            Have a photo of the view from this room? Share it with us
            <a href="emailto:athotel_photos@touringplans.com" alt="emailto">
              athotel_photos@touringplans.com
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
