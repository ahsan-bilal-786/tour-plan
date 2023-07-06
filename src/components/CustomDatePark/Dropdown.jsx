import React from "react";
import Select from "elements/Form/Select";

const Dropdown = ({ title, note, options, dropdownWrapper, fieldWrapperClass }) => {
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
      <div className={`flex flex-row gap-x-4 mt-4 ${fieldWrapperClass}`}>
        <Select
          name="time-fields"
          options={options}
          dropdownClassName="pr-8"
          className={`!mb-0 ${dropdownWrapper}`}
        />
      </div>
    </div>
  );
};


Dropdown.defaultProps = {
  options: ["Yes", "No"],
  dropdownWrapper: ''
}

export default Dropdown;