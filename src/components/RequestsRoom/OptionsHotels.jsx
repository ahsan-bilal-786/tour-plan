import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import QuestionMark from "assets/images/questionMark.png";
import StarFilled from "assets/images/blackStar.svg"
import StarPartial from "assets/images/blackPartialEmpty.svg"

const RatingStars = ({ size = 18 }) => (
  <div className='flex gap-[2px]'>
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarFilled} />

    <img alt="imagealt" width={size} height={size} src={StarFilled} />

    <img alt="imagealt" width={size} height={size} src={StarPartial} />
  </div>
)

const Row = ({ isOdd, title, rating }) => {
  return (
    <div className={`${isOdd ? "bg-tp-gray-400" : ""}` }>
      <div className="max-w-[1068px] mx-auto">
        <div className={`flex gap-3 md:gap-2  items-center`}>
          <div className="    xs:py-5 md:py-9 mr-auto w-[100%] xs:pl-4 md:pl-0   flex flex-row font-normal items-center">
            <img
              class="xs:w-[25px] hidden md:inline-flex  md:w-[50px] xs:h-[25px] md:h-[50px] xs:mr-2 md:mr-5 shadow rounded-full max-w-full h-auto border-none"
              src="https://via.placeholder.com/223x223.png"
              alt=""
            />
            <div className="xs:text-15 flex gap-3 items-center leading-5    md:text-30 md:leading-10 font-bold md:font-thin">
              {" "}
              {title}{" "}
              <img
                className="cursor-pointer"
                src={QuestionMark}
                alt="QuestionMark"
              />
            </div>
          </div>
          <div className="hidden  xs:py-5 md:py-9 w-[20%]  md:inline-flex xs:text-24 md:text-36 font-light font-eucliarLight">
    <RatingStars />
          </div>
          <div className="shrink-0 md:shrink  xs:py-5 md:py-9 w-[30%]  inline-flex text-tp-purple  xs:text-15 md:text-18  leading-5 md:leading-10 font-bold cursor-pointer font-groteskBold">
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

          <div className=" overflow-auto">
            <div className=" w-full table">
              <div className="hidden md:block table-header ">
                <div className=" max-w-[1080px] mx-auto">
                  <div className="flex text-tp-gray-200 font-eucliarBold justify-between mb-3 xs:text-15 md:text-18 font-bold  text-left  xs:pl-6 md:pl-0 items-center">
                    <div className="shrink-0 md:shrink w-[100%] ">Hotel Name</div>
                    <div className="w-[30%] shrink-0 md:shrink ">User Rating</div>
                    <div className="shrink-0 md:shrink w-[19%] "></div>
                  </div>
                </div>
              </div>
              <Row
                isOdd={true}
                title="Disney’s Pop Century Resort"
                rating={4}
              />
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
          </div>
        </section>
      </div>
    </section>
  );
};

export default Saving;
