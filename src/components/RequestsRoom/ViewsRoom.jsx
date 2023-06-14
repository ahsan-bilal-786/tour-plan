import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "assets/images/img_01.png";

const ViewsRoom = () => {
  return (
    <section className="flex flex-col md:flex-row items-center mdl:items-start">
      <div className="flex justify-center mdl:justify-start max-w-full md:w-[50%]  flex-wrap">
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />

        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />

        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />

        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />

        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />

        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />

        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />

        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />

        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />

        <img src={Image} alt="checkmate" className="w-[75px] h-[75px] md:w-[135px] md:h-[135px] " />
      </div>
      <div className="flex-1 lg:py-[150px] md:max-w-[50%]  xs:p-[40px]  lg:px-[160px] max-w-full  ">
        <div className="max-w-full mdl:max-w-[450px] text-center md:text-left">
          <h2 className="text-30 mb-3 font-groteskBold text-tp-purple-500 font-semibold leading-10  ">
            Want a room with a view? We get it.
          </h2>
          <p className="font-eucliar text-18 leading-7 pb-5">
            Check out our database of all 30,000 room views and we’ll help you
            submit your request to Disney to reserve it for your stay.
          </p>
          <div className="flex items-center justify-center  md:justify-start gap-2 cursor-pointer">
            <span className="text-tp-purple text-18 font-bold leading-7">
              Select a hotel to view
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-tp-purple text-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewsRoom;
