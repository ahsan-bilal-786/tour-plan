import React from 'react';

const Column = ({ isOdd, title, genie, lane }) => (
  <div className={`flex py-7 ${isOdd ? "bg-tp-gray-400" : ""}`}>
    <div className="flex-1 flex justify-center">
      <div className="w-[198px] text-3xl font-light">{title}</div>
    </div>
    <div className="flex-1">
      <div className="w-[310px]">
        {genie}
      </div>
    </div>
    <div className="flex-1">
      <div className="w-[310px]">
        {lane}
      </div>
    </div>
  </div>
)

const Difference = () => {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto bg-primary text-center pt-20">
        <h1 className="text-30 mb-16 font-groteskBold text-tp-purple font-semibold">
          So what is the difference?
        </h1>
        <section className='text-left'>
          <header className="flex text-30 font-light font-eucliarLight">
            <div className="flex-1"></div>
            <div className="flex-1">Genie+</div>
            <div className="flex-1">Individual Lightning Lane</div>
          </header>
          <Column
            isOdd={true}
            title="What is it?"
            genie="Genie+ is a paid, app-based version of Disney’s previous ride reservation system called FASTPASS, allowing you to make multiple reservations for the next available return time at each attraction and skip the standby line with priority to board."
            lane="A paid priority queue available at select attractions. It is an alternative to the standby queue (walking up to an attraction, getting in line, and waiting for your turn to ride.)"
          />

          <Column
            isOdd={false}
            title="How much does it cost?"
            genie="It costs $15.98 per person, per day (including tax). For a fixed daily price, Genie+ gets you ’next available’ access to Lightning Lanes at many attractions, one-at-a time."
            lane="Prices will vary by attraction and day of year, ranging from $7 to $17 per person per ride, with many attractions costing a couple dollars more (but still within that range) on weekends vs. mid-week. You do not need to purchase Genie+ to purchase."
          />

          <Column
            isOdd={true}
            title="Is it worth it?"
            genie="In general, yes: we recommend using Genie+ at the Magic Kingdom, Hollywood Studios, and Animal Kingdom, in conjunction with a touring plan."
            lane="That depends on how long the standby lines are and how large your party size is. Passes are sold per person, and guests are limited to two purchases per day. If you schedule appropriately with a Touring Plan, it may not be necessary."
          />

        </section>
      </div>
    </section>
  );
};

export default Difference;

