import React from "react";
import Select from "elements/Form/Select";

const Dropdown = ({ title, note }) => {
  return (
    <div className="flex flex-col gap-y-3">
      {title && (
        <label className=" text-black text-[13px] font-eucliarMedium font-medium uppercase  leading-tight">
          {title}
        </label>
      )}
      {note && (
        <div className="text-zinc-600 text-[14px] font-bold leading-tight">
          {note}
        </div>
      )}
      <div className="flex flex-row gap-x-4 mt-4">
        <Select
          name="time-fields"
          options={["Yes", "No"]}
          dropdownClassName="pr-8"
          className="!mb-0"
        />
      </div>
    </div>
  );
};

export default Dropdown;
