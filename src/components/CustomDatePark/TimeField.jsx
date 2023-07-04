import Toggle from "elements/Form/Checkbox";
import Select from "elements/Form/Select";
import React from "react";

const TimeField = ({ title, subtitle, radioLabel, note }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label className=" text-black text-[13px] font-eucliarMedium font-medium uppercase  leading-tight">
        {title}
      </label>
      {subtitle && (
        <div className="text-zinc-600 text-[14px] font-bold leading-tight">
          {subtitle}
        </div>
      )}
      <div className="flex flex-row gap-x-4 mt-4">
        <Select
          name="time-fields"
          options={["12 AM", "01 AM", "02 AM", "03 AM"]}
          dropdownClassName="pr-8"
          className="!mb-0"
        />
        <div className="text-black text-[24px] font-medium leading-loose">
          :
        </div>
        <Select
          name="time-fields"
          options={["00", "05", "10", "15"]}
          dropdownClassName="pr-8"
          className="!mb-0"
        />
      </div>
      {radioLabel && (
        <div className="flex flex-row w-full">
          <Toggle />
          <div className=" text-black xs:text-15 md:text-[24px] font-medium leading-loose xs:w-[70%] md:w-auto">
            {radioLabel}
          </div>
        </div>
      )}
      {note && (
        <div>
          <div className="text-zinc-600 text-[14px] font-bold leading-tight">
            {note}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeField;
