import React from 'react';


const Row = ({ isOdd, title, genie, lane }) => {
  return (
    <div className={`${isOdd ? "bg-tp-gray-400" : ""}`}>
      <div className="max-w-1300 mx-auto">
        <div className='flex xs:flex-col md:flex-row md:text-left xs:gap-3 justify-between xs:py-6 xs:px-7 '>
          <div className="md:max-w-[331px] xs:text-2xl md:text-3xl  flex-1 font-light ">
            <div className='md:max-w-[198px] font-light font-eucliarLight'>{title}</div>
          </div>
          <div className="md:max-w-[435px] flex-1 ">
            <div className='md:max-w-[370px] xs:text-sm md:text-lg'>{genie}</div>
          </div>
          <div className="md:max-w-[420px] flex-1">
            <div className='md:max-w-[370px] xs:text-sm md:text-lg'>{lane}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Difference = () => {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto bg-primary text-center xs:pt-9 md:pt-20">
        <h1 className="text-30 xs:mb-6 md:mb-8 font-groteskBold text-tp-purple font-semibold">
          So what is the difference?
        </h1>

        <div>
          <div className='table-header xs:hidden md:block'>
            <div className='max-w-1300 mx-auto'>
              <div className="flex justify-between mb-3 text-30 font-light font-eucliarLight text-left xs:py-6 xs:px-7">
                <div className="max-w-[331px] flex-1"></div>
                <div className="max-w-[435px] flex-1">
                  <div className="md:max-w-[370px]">Genie+</div>
                </div>
                <div className="max-w-[420px] flex-1">
                  <div className="md:max-w-[370px]">Individual Lightning Lane</div>
                </div>
              </div>
            </div>
          </div>
          <Row
            isOdd={true}
            title="What is it?"
            genie="Genie+ is a paid, app-based version of Disney’s previous ride reservation system called FASTPASS, allowing you to make multiple reservations for the next available return time at each attraction and skip the standby line with priority to board."
            lane="A paid priority queue available at select attractions. It is an alternative to the standby queue (walking up to an attraction, getting in line, and waiting for your turn to ride.)"
          />

          <Row
            isOdd={false}
            title="How much does it cost?"
            genie="It costs $15.98 per person, per day (including tax). For a fixed daily price, Genie+ gets you ’next available’ access to Lightning Lanes at many attractions, one-at-a time."
            lane="Prices will vary by attraction and day of year, ranging from $7 to $17 per person per ride, with many attractions costing a couple dollars more (but still within that range) on weekends vs. mid-week. You do not need to purchase Genie+ to purchase."
          />

          <Row
            isOdd={true}
            title="Is it worth it?"
            genie="In general, yes: we recommend using Genie+ at the Magic Kingdom, Hollywood Studios, and Animal Kingdom, in conjunction with a touring plan."
            lane="That depends on how long the standby lines are and how large your party size is. Passes are sold per person, and guests are limited to two purchases per day. If you schedule appropriately with a Touring Plan, it may not be necessary."
          />
        </div>
      </div>
    </section>
  );
};

export default Difference;

