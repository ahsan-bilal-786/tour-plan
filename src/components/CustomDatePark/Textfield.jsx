import React from "react";
import TextfieldComponent from "elements/Form/Textfield";

const Textfield = ({ title, note, options, dropdownWrapper, fieldWrapperClass }) => {
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
        <TextfieldComponent
          className={`!mb-0 border-[2px] !border-tp-neutral !bg-tp-neutral py-4 px-4 !rounded-2xl !font-eucliarMedium xs:!text-4 md:!text-6 xs:leading-5 md:leading-7 focus:border-tp-neutral focus:ring-0`}
        />
      </div>
    </div>
  );
};


Textfield.defaultProps = {
  options: ["Yes", "No"],
  dropdownWrapper: ''
}

export default Textfield;
