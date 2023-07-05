import React from "react";
import Dropdown from "../CustomDatePark/Dropdown";
import QuestionMark from "assets/images/questionMark.png";
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

const classes = {
  row1: "flex flex-row gap-x-2  min-w-[48px] items-center",
  row2: "flex flex-row  gap-x-2 flex-1 min-w-[400px] items-center",
  row3: "flex flex-row gap-x-2 min-w-[130px] items-center",
  row4: "flex flex-row  min-w-[88px] items-center",
  row5: "flex flex-row   min-w-[56px]  items-center",
  row6: "flex flex-row min-w-[56px]  items-center",
};

const Row = ({ isOdd, title, rating }) => {
  return (
    <div className="max-w-[1068px] mx-auto">
      <div className={`flex gap-x-2  items-center`}>
        <div className={`${classes.row1}`}>
          <img className="w-[16px] h-[14px]" src={heartFilled} alt="" />
        </div>
        <div className={`${classes.row2}`}>
          Meet Princess Tiana and a Visiting Princess at Princess Fairytale Hall
        </div>

        <div className={`${classes.row3}`}>
          <RatingStars />
        </div>
        <div className={`${classes.row4}`}>
          <Dropdown />
        </div>
        <div className={`${classes.row5}`}>
          <img className="cursor-pointer" src={repeat} alt="repeat" />
        </div>
        <div className={`${classes.row6}`}>
          <img className="w-[24px] h-[24]" src={notesIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className=" overflow-auto">
      <div className=" w-full table">
        <div className="hidden md:block table-header ">
          <div className="max-w-[1080px] mx-auto">
            <div className="flex gap-x-2 items-center text-black text-[13px] font-medium uppercase leading-tight">
              <div className={`${classes.row1}`}>
                <img className="w-[16px] h-[14px] " src={heartEmpty} alt="" />
                <img
                  className="cursor-pointer md:w-[12px] xs:h-[8px] "
                  src={downArrow}
                  alt="downArrow"
                />
              </div>
              <div className={`${classes.row2}`}>
                SORT A TO Z
                <img
                  className="cursor-pointer md:w-[12px] xs:h-[8px] "
                  src={downArrow}
                  alt="downArrow"
                />
              </div>
              <div className={`${classes.row3}`}>
                OUR RATING
                <img
                  className="cursor-pointer md:w-[12px] xs:h-[8px] "
                  src={downArrow}
                  alt="downArrow"
                />
              </div>
              <div className={`${classes.row4}`}># TIMES?</div>
              <div className={`${classes.row5}`}>CHILD SWAP?</div>
              <div className={`${classes.row6}`}>ADD NOTES</div>
            </div>
          </div>
        </div>
        <Row title="Disney’s Pop Century Resort" rating={4} />
        <Row title="Disney’s All-Star Music Resort	" rating={4} />
        <Row title="Disney’s All-Star Movies Resort" rating={4} />
      </div>
    </div>
  );
};

export default Table;
