import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Row = ({ isOdd, title, rating }) => {
  return (
    <div className={`${isOdd ? "bg-tp-gray-400" : ""}`}>
      <div className="max-w-[1068px] mx-auto">
        <div className={`flex flex-wrap py-9 leading-7 text-18 items-center`}>
          <div className="xs:w-[100%] md:w-[49%] xs:pl-4 md:pl-0 xs:pb-2 md:pb-0 md:pr-2 xs:text-15 md:text-18 flex flex-row font-bold items-center">
            <img
              class="xs:w-[25px] md:w-[50px] xs:h-[25px] md:h-[50px] xs:mr-2 md:mr-5 shadow rounded-full max-w-full h-auto border-none"
              src="https://via.placeholder.com/223x223.png"
              alt=""
            />
            {title}
          </div>
          <div className="xs:w-[50%] md:w-[30%] md:pr-2 xs:pl-[50px] md:pl-[0px]  flex xs:text-24 md:text-36 font-light font-eucliarLight">
            {rating}
          </div>
          <div className="xs:w-[25%] md:w-[19%] md:pr-2 flex xs:text-24 md:text-36  font-light font-eucliarLight">
            View Rooms
          </div>
        </div>
      </div>
    </div>
  );
};

const Thumb = ({ title, isActive }) => {
  return (
    <div
      className={`flex-1 flex flex-col relative text-18 font-medium items-center uppercase md:pb-6  ${
        isActive ? "[&>span]:md:inline-block" : "opacity-50 [&>span]:hidden"
      }`}
    >
      <img
        className="mb-3 shadow rounded-full max-w-full h-auto align-middle border-none"
        src="https://via.placeholder.com/223x223.png"
        width="50px"
        height="50px"
        alt=""
      />
      <div className="xs:hidden md:block uppercase">{title}</div>
      <span className={`absolute bottom-[-16px] bg-tp-neutral xs:hidden `}>
        <FontAwesomeIcon icon={faAngleDown} className="m-[-1px]" />
      </span>
    </div>
  );
};

const Saving = () => {
  return (
    <section className="bg-tp-white">
      <div className="mx-auto bg-tp-neutral py-20">
        <div className="mb-10 text-center">
          <h1 className="xs:text-24 md:text-30 mb-1 font-groteskBold text-tp-purple-500 font-semibold">
            What are my options for Disney hotels?
          </h1>
          <p className="xs:text-13 md:text-18 font-normal xs:uppercase md:normal-case">
            Select a price tier to view hotel options
          </p>
        </div>
        <section>
          <div className="flex mb-10 max-w-[1080px] mx-auto xs:border-0 md:border-b-[2px] border-black">
            <Thumb title="Deluxe villas" isActive={false} />
            <Thumb title="Deluxe" isActive={false} />
            <Thumb title="Moderate" isActive={true} />
            <Thumb title="Value" isActive={false} />
          </div>

          <div className="overflow-auto">
            <div className="table-header ">
              <div className="min-w-[500px] max-w-[1080px] mx-auto">
                <div className="flex font-eucliarBold justify-between mb-3 xs:text-15 md:text-18 font-bold text-tp-bluish-300 text-left  xs:pl-6 md:pl-0">
                  <div className="w-[49%] ">Hotel Name</div>
                  <div className="w-[30%] ">User Rating</div>
                  <div className="w-[19%] "></div>
                </div>
              </div>
            </div>
            <Row isOdd={true} title="Disney’s Pop Century Resort" rating={4} />
            <Row
              isOdd={false}
              title="Disney’s All-Star Music Resort	"
              rating={4}
            />
            <Row
              isOdd={true}
              title="Disney’s All-Star Movies Resort"
              rating={4}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Saving;
