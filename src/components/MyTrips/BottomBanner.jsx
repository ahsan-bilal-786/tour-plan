import React from "react";
import Button from 'elements/Button';
import Photo from "./BannerIcon";

const BottomBanner = () => {
  return (
    <div className="flex justify-end w-full bg-tp-green-700">
      <div className="w-1/2 flex justify-center">
        <div className="xs:max-w-[90%] md:max-w-[70%] w-full my-[70px]">
          <div className="mb-8">
            <Photo />
          </div>
          <p className="font-semibold xs:text-lg md:text-3xl text-white font-groteskSemiBold mb-3">
            Looking for that hard-to-get dining reservation?
          </p>
          <p className="font-normal xs:text-15 md:text-lg mb-8">
            Give our Dining Reservation Finder a try. We’ll do the work to get
            you the delicious spots to eat around Disney World.
          </p>
          <Button className="bg-black">Dining Reservation Finder</Button>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
