import React from "react";

import TimeField from "components/CustomDatePark/TimeField";
import Dropdown from "components/CustomDatePark/Dropdown";
import Textfield from "components/CustomDatePark/Textfield";
import TextArea from "elements/Form/TextArea";
import Button from "elements/Button";

const Form = () => (
  <>
    <div className="flex flex-col gap-y-12 xs:w-full md:w-3/4">
      <div className="flex flex-row xs:justify-between">
        <div className="md:flex-1">
          <TimeField title="WHAT TIME OF DAY?" />
        </div>
        <div className="md:flex-1">
          <Dropdown
            title="FLEXIBILITY"
            options={["10 minutes", "09 minutes", "08 minutes", "07 minutes"]}
            dropdownWrapper="md:min-w-[227px]"
          />
        </div>
      </div>
      <div className="flex flex-row xs:justify-between xs:gap-x-4 md:gap-0 ">
        <div className="xs:w-1/2 md:flex-1">
          <Dropdown
            title="HOW LONG DO YOU PLAN TO BE THERE?"
            options={["10 minutes", "09 minutes", "08 minutes", "07 minutes"]}
            dropdownWrapper="md:min-w-[227px]"
          />
        </div>
        <div className="xs:w-1/2 md:flex-1">
          <Textfield title="CONFIRMATION NUMBER (IF APPLICABLE)" />
        </div>
      </div>
    </div>
    <div className="flex flex-row w-full">
      <div className="flex-1">
        <TextArea
          label="ADDITIONAL INFORMATION"
          className="min-h-[150px] !w-full "
          wrapperClassName="!w-full !max-w-[inherit]"
        />
      </div>
    </div>
    <div className="flex flex-row w-full">
      <div className="flex-1">
        <Button className="text-black">Add to Plan</Button>
      </div>
    </div>
  </>
);

export default Form;
