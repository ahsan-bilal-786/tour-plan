import React from "react";
import Button from "elements/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Event = ({ day, date, count, title, time, className }) => {
  return (
    <div className="border-b-4  overflow-hidden relative border-tp-gray-300 bg-tp-neutral py-[8px] px-[15px] rounded-[8px]  w-[55px] flex items-center justify-center">
      <div
        className={`md:text-[40px] leading-46 font-semibold text-groteskSemiBold ${className}`}
      >
        {count}
      </div>
      <div className="absolute top-0 w-[55px] h-[32px] bg-[#D9D9D980]"></div>
    </div>
  );
};

const Subscriber = () => {
  return (
    <section className="bg-tp-neutral  ">
      <div className="flex  gap-4 flex-col md:flex-row mx-auto">
        <div className="flex-1 p-[20px] m-0  md:m-[50px] lg:m-[140px] mr-0">
          <div className="max-w-full text-center md:text-left md:max-w-[450px]">
            <h6 className="text-tp-purple text-13 font-medium leading leading-5 mb-2 font-eucliarSemiBold">
              SUBSCRIBERS ONLY
            </h6>
            <h2 className="text-30 mb-3 font-groteskBold text-tp-purple-500 font-semibold leading-10 ">
              Your Subscription can request the World
            </h2>
            <p className="font-eucliar text-18 leading-7 pb-5">
              Check for the “Request Room” button next to your reserved resort
              name on your Account page under “My Trips.”
            </p>
            <Button className="bg-black">Log In / My Account</Button>
          </div>
        </div>
        <div className="flex-1 py-8 lg:py-16">
          <h3 className="ml-12 hidden md:flex text-30 text-[#F6576680] font-semibold leading-10 font-groteskSemiBold pb-5">
            My Trips
          </h3>
          <div className="bg-white rounded-[20px] border-2 border-[#F6576680] py-6 px-9 -mr-[20px] ">
            <div className="flex justify-between gap-2">
              <div>
                <div className="flex gap-6 text-[#00000080] font-eucliar flex-col">
                  <div className="">
                    <h2 className="leading-60 text-24 lg:text-36  font-semibold">
                      My Next Trip
                    </h2>
                    <p className=" text-20  leading-30">
                      {" "}
                      Walt Disney World Resort
                    </p>
                  </div>
                  <div className="text-20  leading-30">
                    My Dates (7 nights) <br />
                    My Family{" "}
                    <div className="text-[#F6576680] font-extrabold">
                      {" "}
                      My WDW Resort
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-center pt-3 -ml-[45px]">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-tp-purple text-30"
                  />
                  <span className="text-tp-purple text-18 leading-7 font-semibold cursor-pointer">
                    REQUEST ROOM
                  </span>
                </div>
                <div className="flex gap-7 lg:gap-12 text-tp-gray-300 font-semibold leading-6 uppercase text-18 pt-9">
                  <div className="cursor-pointer">REQUEST DINING</div>
                  <div className="cursor-pointer">EDIT</div>
                  <div className="cursor-pointer">REMOVE</div>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <div className="flex mb-3 gap-3 justify-around items-center">
                  <Event className="text-[#B6383980]" count="8" />
                  <Event className="text-[#B6383980]" count="1" />
                </div>
                <div className="text-tp-gray-300 text-18 leading-4 font-semibold"> 
                DAYS TO GO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriber;
