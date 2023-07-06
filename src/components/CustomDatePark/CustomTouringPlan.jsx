import React from "react";
import Container from "elements/Container";
import Button from "elements/Button";

import DateField from "./DateField";
import ParkSelection from "./ParkSelection";
import TimeField from "./TimeField";
import Dropdown from "./Dropdown";

const CustomTouringPlan = () => {
  return (
    <>
      <Container className="bg-white mb-28">
        <div className="flex flex-col gap-y-12 mb-[105px]">
          <h1 className="w-full font-groteskBold font-semibold text-center text-rose-500 text-30 leading-10">
            Pick Your Date & Park
          </h1>
          <DateField />
          <ParkSelection />
          <TimeField
            title="SELECT A START TIME"
            radioLabel="Use Early Theme Park Hours (start at 8:30am)."
          />
          <TimeField
            title="SELECT AN END TIME"
            radioLabel="Use Extended Evening Hours (stay past closing at 11:00pm)."
            note="Note: Extended Evening Hours are for Disney Deluxe and DVC guests."
          />
          <Dropdown
            title="WILL YOU BE USING GENIE+?"
            note="Note: Genie+ is a paid service to use the Lightning Lane for select attractions."
          />
          <TimeField
            title="WHAT TIME WILL YOU BEGIN MAKING YOUR GENIE+ RESERVATIONS FOR THE DAY?"
            subtitle="Note: You can begin making Magic Kingdom Genie+ reservations the morning of your park attendance beginning at 7am."
          />
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <Button className="bg-black">Proceed to Attractions</Button>
        </div>
      </Container>
    </>
  );
};

export default CustomTouringPlan;
