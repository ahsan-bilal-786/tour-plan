import React from "react";
import Dropdown from "../CustomDatePark/Dropdown";
import StarFilled from "assets/images/blackStar.svg";
import StarPartial from "assets/images/blackPartialEmpty.svg";
import heartEmpty from "assets/images/heartEmpty.png";
import heartFilled from "assets/images/heartFilled.svg";
import repeat from "assets/images/fi_repeat.svg";
import downArrow from "assets/images/downArrow.svg";
import notesIcon from "assets/images/u_clipboard-notes.svg";

const RatingStars = ({ size = 18 }) => (
  <div className="flex gap-[2px]">
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarFilled} />

    <img alt="imagealt" width={size} height={size} src={StarFilled} />

    <img alt="imagealt" width={size} height={size} src={StarPartial} />
  </div>
);

const Row = ({
  wrapperClassName,
  likeSideContent,
  titleContent,
  starContent,
  dropdownContent,
  swapeContent,
  notesContent,
}) => {
  return (
    <div
      className={`w-full ${wrapperClassName} flex xs:flex-col md:flex-row py-4 border-b-2 border-black`}
    >
      <div className="flex flex-row">
        <div className="flex flex-row gap-x-2  w-[48px] items-center">
          {likeSideContent}
        </div>
        <div className="flex xs:flex-col md:flex-row gap-x-2 xs:gap-y-3 md:gap-y-0">
          <div className="flex flex-row  gap-x-2 flex-1 items-center">
            <div className="flex flex-row xs:w-[250px] md:min-w-[300px] items-center gap-x-2">
              {titleContent}
            </div>
          </div>
          <div className="flex flex-row gap-x-2 w-[130px] items-center">
            {starContent}
          </div>
        </div>
        <div className="flex flex-row  w-[88px] items-center">
          {dropdownContent}
        </div>
      </div>
      <div className="flex flex-row gap-x-2 xs:ml-[48px] md:ml-0 xs:mt-4  md:mt-0">
        <div className="flex flex-row md:w-[88px] items-center justify-center gap-x-2">
          {swapeContent}
        </div>
        <div className="flex flex-row md:w-[88px] items-center  gap-x-2">
          {notesContent}
        </div>
      </div>
    </div>
  );
};

const DataRows = () => {
  return (
    <Row
      wrapperClassName="xs:max-w-full md:max-w-[1080px] mx-auto overflow-hidden"
      likeSideContent={
        <>
          <img className="w-[16px] h-[14px]" src={heartFilled} alt="" />
        </>
      }
      titleContent={
        <>
          Meet Princess Tiana and a Visiting Princess at Princess Fairytale Hall
        </>
      }
      starContent={
        <>
          <RatingStars />
        </>
      }
      dropdownContent={
        <>
          <Dropdown fieldWrapperClass="!m-0" />
        </>
      }
      swapeContent={
        <>
          <img className="cursor-pointer" src={repeat} alt="repeat" />
          <span className="md:hidden capitalize text-black text-[10px] font-medium uppercase leading-none">
            CHILD SWAP?
          </span>
        </>
      }
      notesContent={
        <>
          <img className="w-[24px] h-[24]" src={notesIcon} alt="" />
          <span className="md:hidden capitalize text-black text-[10px] font-medium uppercase leading-none">
            Add notes
          </span>
        </>
      }
    />
  );
};

const Table = () => {
  return (
    <div className=" overflow-auto mb-20">
      <div className=" w-full table">
        <div className=" md:block table-header ">
          <div className="xs:max-w-full md:max-w-[1080px] mx-auto overflow-hidden">
            <Row
              wrapperClassName="flex gap-x-2 items-center text-black text-[13px] font-medium uppercase leading-tight"
              likeSideContent={
                <>
                  <img className="w-[16px] h-[14px] " src={heartEmpty} alt="" />
                  <img
                    className="cursor-pointer md:w-[12px] xs:h-[8px] "
                    src={downArrow}
                    alt="downArrow"
                  />
                </>
              }
              titleContent={
                <>
                  SORT A TO Z
                  <img
                    className="cursor-pointer md:w-[12px] xs:h-[8px] "
                    src={downArrow}
                    alt="downArrow"
                  />
                </>
              }
              starContent={
                <div className="md:flex flex-row xs:hidden justify-center items-center gap-x-2">
                  OUR RATING
                  <img
                    className="cursor-pointer md:w-[12px] xs:h-[8px] "
                    src={downArrow}
                    alt="downArrow"
                  />
                </div>
              }
              dropdownContent={<># TIMES?</>}
              swapeContent={
                <div className="md:flex flex-row xs:hidden justify-center items-center gap-x-2">
                  CHILD
                  <br />
                  SWAP?
                </div>
              }
              notesContent={
                <div className="md:flex flex-row xs:hidden justify-center items-center gap-x-2">
                  ADD
                  <br />
                  NOTES
                </div>
              }
            />
            <DataRows />
            <DataRows />
            <DataRows />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
