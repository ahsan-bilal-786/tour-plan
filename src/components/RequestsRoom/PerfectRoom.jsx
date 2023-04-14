import React from "react";

const PerfectRoomCard = () => {
  return (
    <div className="text-black mb-6 md:mb-0">
      <div className="mb-4 md:mb-9">
        <span className="border-4 border-tp-purple-500 rounded-full w-16 h-16 inline-flex items-center justify-center text-30 text-tp-purple-500 font-semibold font-groteskSemiBold">
          1
        </span>
      </div>
      <div className="text-18 font-bold mb-2">Select Your Filter</div>
      <div className="text-15 leading-6">
        Narrow your search by: Room Type, Walking distances to the lobby and/or
        transportation, Floors, Sound level, Accessibility, Recommendations, and
        Prices.
      </div>
    </div>
  );
};

const PerfectRoom = () => {
  return (
    <section className="bg-tp-neutral text-black">
      <div className="container mx-auto bg-primary text-center py-67">
        <h1 className="text-30 mb-56 font-groteskSemiBold text-tp-purple-500 font-semibold">
          How to find your perfect room:
        </h1>
        <div className="flex xs:flex-col md:flex-row gap-x-6">
          <PerfectRoomCard />
          <PerfectRoomCard />
          <PerfectRoomCard />
          <PerfectRoomCard />
        </div>
      </div>
    </section>
  );
};

export default PerfectRoom;
