import React from "react";
import Container from "elements/Container";
import {
  FilterLinks,
  FilterRating,
  FilterTransportation,
} from "components/HotelLanding/Listing";
import Table from "./Table";
import Button from "elements/Button";
import Form from "./Form";

const CustomTouringPlanMeal = () => {
  return (
    <>
      <Container className="bg-white mb-28">
        <div className="flex flex-col gap-y-3 mb-[105px] xs:w-full ">
          <h1 className="w-full font-groteskBold font-bold text-center text-rose-500 text-30 leading-10">
            Add Meals
          </h1>
          <div className="text-center text-black text-[18px] font-normal leading-7">
            If you do not want to plan a meal, proceed to <u>Breaks</u>
          </div>
        </div>

        <div className="flex">
          <div className="hidden gap-y-2 md:block md:w-1/4">
            <FilterLinks title="FILTER BY TOP REVIEWED FOR" />
            <FilterRating />
            <FilterLinks title="FILTER BY LOCATION" />
            <FilterTransportation />
          </div>
          <div className="xs:w-full md:w-3/4">
            <Table />
            <Form />
            <div className="mt-[90px]">
              <Button className="bg-black">Proceed to Breaks</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CustomTouringPlanMeal;
