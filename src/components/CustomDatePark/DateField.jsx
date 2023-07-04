import React from "react";
import TextField from "elements/Form/Textfield";

const DateField = () => {
  return (
    <>
      <TextField
        label="SELECT A DATE"
        name="firstDay"
        type="date"
        className="text-black text-[24px] font-medium bg-zinc-100 border border-zinc-100 rounded-2xl py-4"
      />
    </>
  );
};

export default DateField;
