import React from "react";
import Container from "components/ParkLanding/elements/Container";
import Image from "assets/images/img_02.png";

const RoomMake = () => {
  return (
    <Container bg="bg-tp-gray-400" className=" py-[60px] md:py-[85px]">
      <h3 class="text-tp-purple font-semibold xs:text-24 md:text-30 text-center xs:leading-7 xs:mb-7  md:mb-73 md:leading-46 font-groteskBold">
        What difference does a room make?
      </h3>
      <div className="flex gap-x-[70px] justify-between flex-col  md:flex-row ">
        <div>
          <p className="font-eucliar text-18 leading-7 pb-5 max-w-full text-center  md:text-left md:max-w-[310px]">
            Consider these photos, each of which is a room view you could get at
            random if you just let Disney make the decision for you. Even having
            a room just one floor higher can make all the difference.
          </p>
        </div>
        <div className="flex items-end gap-3 md:gap-[18px] justify-center  md:justify-start">
          <div className="flex gap-4 flex-col items-center">
            <img src={Image} alt="checkmate" />
            <h6 className="text-tp-purple text-sm md:text-18 text-center  font-bold leading-5 md:leading-7">
              The view from the ground floor
            </h6>{" "}
          </div>
          <div className="bg-tp-purple mt-5  min-w-[34px] min-h-[34px] md:min-w-[44px] md:min-h-[44px] rounded-full text-white flex justify-center text-sm md:text-18 leading-7 font-bold items-center">
            Vs.
          </div>
          <div className="flex gap-4 flex-col items-center">
            <img src={Image} alt="checkmate" />
            <h6 className="text-tp-purple text-sm md:text-18  text-center font-bold  leading-5 md:leading-7">
              The view from one floor higher
            </h6>{" "}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomMake;
