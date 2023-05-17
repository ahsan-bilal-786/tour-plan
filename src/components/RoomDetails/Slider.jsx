import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import Container from "components/ParkLanding/elements/Container";
import roomdetails from "assets/images/roomdetails.png";

const SliderArrow = ({ icon, text, className }) => (
  <div className={`absolute flex rounded-full w-[66px] h-[66px] bg-tp-purple-500/70 text-white text-13 text-center justify-center items-center cursor-pointer ${className}`}>
    <FontAwesomeIcon icon={icon} />
    {text}
  </div>
);

const Slider = () => {
  return (
    <Container bg="bg-white" className="mb-58">
      <div className="relative">
        <img src={roomdetails} alt="arrows" width="100%" />
        <SliderArrow className="xs:top-2 md:top-5 left-[50%] translate-x-[-50%] flex-col" icon={faAngleUp} text="#6634" />
        <SliderArrow className="xs:left-2 md:left-5 top-[50%] translate-y-[-50%] flex-row" icon={faAngleLeft} text="#6632" />
        <SliderArrow className="xs:right-2 md:right-5 top-[50%] translate-y-[-50%]  flex-row-reverse" icon={faAngleRight} text="#6633" />
        <SliderArrow className="xs:bottom-2 md:bottom-5 left-[50%] translate-x-[-50%] flex-col-reverse !bg-tp-gray-300/70" icon={faAngleDown} text="N/A" />
      </div>
    </Container>
  );
};

export default Slider;
