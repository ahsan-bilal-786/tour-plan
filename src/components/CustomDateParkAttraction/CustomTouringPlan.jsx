import React, { useState } from "react";
import Container from "elements/Container";
import {
  FilterLinks,
  FilterRating,
  FilterTransportation,
} from "components/HotelLanding/Listing";
import InputField from "components/Search/elements/InputField";
import Table from "./Table";

const CustomTouringPlanAttraction = () => {
  const [keyword, setKeword] = useState("");
  return (
    <>
      <Container className="bg-white mb-28">
        <div className="flex flex-col gap-y-3 mb-[105px] xs:w-full ">
          <h1 className="w-full font-groteskBold font-bold text-center text-rose-500 text-30 leading-10">
            Choose Attractions
          </h1>
          <div className="text-center text-black text-[18px] font-normal leading-7">
            Select what you’d like to do during your day. Don’t worry about the
            order.
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
            <InputField
              showClosedIcon={false}
              handleChange={setKeword}
              value={keyword}
              type="filled"
            />
            <h3 className="mb-8 text-black text-[18px] font-bold font-eucliarBold leading-7">
              Filtered by “Our go-tos”
            </h3>
             <Table />
          </div>
        </div>
      </Container>
    </>
  );
};

export default CustomTouringPlanAttraction;
