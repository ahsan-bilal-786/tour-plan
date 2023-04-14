import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "assets/images/img_01.png";

const ViewsRoom = () => {
  return (
    <section className="flex items-start flex-col md:flex-row">
      <div className="flex max-w-full md:max-w-[600px] xxl:max-w-[810px] flex-wrap">
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />

        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />

        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />

        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />

        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />

        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />

        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />

        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />

        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />

        <img src={Image} alt="image" className="min-w-[75px] max-h-[75px] md:min-w-[135px] md:max-h-[135px] grow" />
      </div>
      <div className="flex-1 md:py-[150px] xs:p-[40px]  md:px-[160px] max-w-full  md:max-w-auto">
        <div className="max-w-full md:max-w-[450px] text-center md:text-left">
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
