import React from "react";
import heartEmpty from "assets/images/heartEmpty.png";
import heartFilled from "assets/images/heartFilled.svg";
import downArrow from "assets/images/downArrow.svg";
import crossIcon from "assets/images/cross.svg";
import ThumbsUpIcon from "assets/images/ThumbsUp.svg";

const Row = ({
  wrapperClassName,
  likeSideContent,
  titleContent,
  ratingContent,
  typeContent,
  closeContent,
}) => {
  return (
    <div
      className={`w-full ${wrapperClassName} flex xs:flex-row md:flex-row py-4 border-b-2 border-black justify-between`}
    >
      <div className="flex flex-row">
        <div className="flex flex-row gap-x-2  w-[48px] xs:items-start md:items-center ">
          {likeSideContent}
        </div>
        <div className="flex xs:flex-col md:flex-row gap-x-2 xs:gap-y-3 md:gap-y-0">
          <div className="flex flex-row  gap-x-2 flex-1 items-center">
            <div className="flex flex-row xs:w-[250px] md:min-w-[300px] items-center gap-x-2">
              {titleContent}
            </div>
          </div>
          <div className="flex xs:flex-col-reverse md:flex-row gap-x-2 xs:gap-y-1 md:gap-y-0">
            <div className="flex flex-row gap-x-2 xs:w-full md:w-[130px] items-center">
              {ratingContent}
            </div>
            <div className="flex flex-row xs:w-full md:w-[88px] items-center">
              {typeContent}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row xs:flex-1 md:flex-0 gap-x-2 xs:ml-[48px] md:ml-0 xs:mt-2  md:mt-0  xs:items-start md:items-center md:justify-end">
        <div className="flex flex-row md:w-[88px] items-center  gap-x-2">
          {closeContent}
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
          <img className="w-[16px] h-[14px]  xs:mt-2  md:mt-0" src={heartFilled} alt="" />
        </>
      }
      titleContent={
        <>
          Meet Princess Tiana and a Visiting Princess at Princess Fairytale Hall
        </>
      }
      ratingContent={
        <div className="flex xs:flex-row xs:gap-x-1 md:flex-col md:gap-y-1 text-black text-[13px] font-medium uppercase ">
          <div className="flex flex-row gap-x-1">
            <img
              src={ThumbsUpIcon}
              alt="thumbsicon"
              className="w-[20px] h-[20]"
            />
            <div>79%</div>
          </div>
          <div>
            <span className="md:hidden">(</span>Above Average
            <span className="md:hidden">)</span>
          </div>
        </div>
      }
      typeContent={
        <div className=" text-black text-[13px] font-medium uppercase ">
          Table Service
        </div>
      }
      closeContent={
        <>
          <img className="w-[24px] h-[24]" src={crossIcon} alt="" />
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
                <div className="flex flex-row gap-x-2 items-center justify-center">
                  <img className="w-[16px] h-[14px] " src={heartEmpty} alt="" />
                  <img
                    className="cursor-pointer md:w-[12px] xs:h-[8px] "
                    src={downArrow}
                    alt="downArrow"
                  />
                </div>
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
              ratingContent={
                <div className="md:flex flex-row xs:hidden justify-center items-center gap-x-2">
                  GUEST RATING
                  <img
                    className="cursor-pointer md:w-[12px] xs:h-[8px] "
                    src={downArrow}
                    alt="downArrow"
                  />
                </div>
              }
              typeContent={<div className="xs:hidden md:block">TYPE</div>}
              closeContent={<></>}
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
