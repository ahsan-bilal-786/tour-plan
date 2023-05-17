import React from "react";
import { faker } from "@faker-js/faker";
import Container from "components/ParkLanding/elements/Container";
import arrows from "assets/images/arrows.png";

const Header = () => {
  return (
    <Container bg="bg-white" className="xs:mb-3 md:mb-7">
      <div className="flex xs:flex-col md:flex-row justify-between">
        <div className="flex xs:flex-col md:flex-row justify-center items-center gap-2 xs:text-center md:text-left">
          <img
            src={faker.image.avatar()}
            alt="fakeim"
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex flex-col">
            <p className=" text-3xl leading-10 text-tp-purple-500">
              View from Room 6534
            </p>
            <p className="font-medium text-[13px] leading-5 uppercase text-black">
              BACK TO DISNEY’S ART OF ANIMATION RESORT ROOMS
            </p>
          </div>
        </div>
        <div className="xs:w-full md:max-w-[220px] flex gap-2 justify-center items-center xs:pt-9 md:pt-0">
          <p className="font-normal text-15 leading-[22px] text-right text-tp-gray-200">
            Click in the photo to see views of adjacent rooms
          </p>
          <img src={arrows} alt="arrows" className="w-[35px] h-[35px] xs:hidden md:inline-block" />
        </div>
      </div>
    </Container>
  );
};

export default Header;
