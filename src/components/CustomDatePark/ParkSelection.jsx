import React from "react";
import map from "lodash/map";
import range from "lodash/range";

const ParkSelection = () => {
  return (
    <div className="flex flex-col">
      <div className="text-black text-[13px] font-eucliarMedium font-medium uppercase  leading-tight mb-4">
        SELECT A PARK
      </div>
      <div className="flex xs:flex-col md:flex-row xs:gap-y-4 md:gap-x-6">
        {map(range(4), (val) => (
          <div
            key={val}
            className={` ${
              val > 0 ? "!border-stone-300 !bg-white" : ""
            } flex-1 bg-zinc-100 rounded-2xl border border-zinc-100 pt-[26px] flex justify-center items-center flex-col gap-y-3`}
          >
            <img
              src="https://via.placeholder.com/50x50"
              alt="abc-bac"
              className="rounded-full"
            />
            <h3 className="text-center text-black xs:text-[16px]  md:text-[18px] font-bold uppercase leading-7">
              MAGIC KINGDOM
            </h3>
            <div className="text-center flex flex-col gap-y-2 mb-4">
              <span className="text-black xs:text-[14px] md:text-[16px] font-bold leading-tight">
                9:00am–11:00pm
                <br />
              </span>
              <div className="text-black text-[14px] font-medium leading-tight flex flex-col gap-y-2">
                <span>Early Entry: 8:30am–9:00am</span>
                <span>Evening Hours: 11:00pm–1:00am</span>
              </div>
            </div>
            <div className="w-full border border-stone-300" />
            <div className="flex flex-row justify-center items-center gap-x-4 pb-4">
              <div className="text-center text-pink-800 text-[40px] font-semibold leading-10 font-groteskSemiBold">
                8
              </div>
              <div className=" text-pink-800 text-[13px] font-semibold leading-none font-groteskBold">
                Large Crowds
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkSelection;
