import React from 'react';

const TicketAddonsCard = ({ title, children }) => {
  return (
    <div className='flex-1 mb-9 md:mb-0 border-t-[1px] border-tp-purple-500 pt-5 mx-7 min-h-[90px]'>
      <div className="xs:text-15 md:text-18 font-bold mb-2 text-tp-purple">
        {title}
      </div>
      <div className="text-15 leading-6">
        {children}
      </div>
    </div>
  );
};

const TicketAddons = () => {
  return (
    <section className="bg-white">
      <div className="container max-w-1300 min-h-[496px] mx-auto xs:py-[54px] md:py-[67px]">
        <div className='mb-56 text-center flex flex-col items-center'>
          <h1 className="xs:text-24  md:text-30 text-center font-groteskSemiBold text-tp-purple font-semibold">
            DISNEY TICKET ADD-ONS
          </h1>
          <p className='xs:text-13 md:text-18 font-normal xs:uppercase md:normal-case md:max-w-[1080px]'>
            Three add-on options are offered with each ticket, each at an additional cost
          </p>
        </div>
        <div className="flex xs:flex-col md:flex-row gap-x-11">
          <TicketAddonsCard title="Park Hopper Option">
            <p>This add-on lets you visit more than one theme park per day. The cost is about $91 (including tax) on top of the price of any 4-Day or longer ticket (it's a bit cheaper for shorter ticket lengths). The longer your stay, the more affordable it is: as an add-on to a 7-Day 1 Park Per Day Ticket, for example, the flat fee works out to $11.41 per day for park-hopping privileges. If you want to visit the Magic Kingdom in the morning and eat at EPCOT in the evening, this is the feature to request.</p>
            <p>If you buy a ticket but then decide later that you want to add the Park Hopper option, you can do so. Note, though, that Disney doesn’t prorate the cost: if you add Park Hopper on the last day of your trip, you’ll pay the same price as if you’d bought it before you left home.</p>
          </TicketAddonsCard>
          <TicketAddonsCard title="Water Park and Sports Option">
            <p>Adding the Water Park and Sports option to your 1 Park Per Day ticket allows you admission to Disney's two water parks (Typhoon Lagoon and Blizzard Beach), as well as some of the sports-centric spots on Disney World property.</p>
            <p>The locations and options you can choose with this ticket are: Typhoon Lagoon Water Park, Blizzard Beach Water Park, ESPN Wide World of Sports, Oak Trail Golf Course (for 9-hole golf or FootGolf), Fantasia Gardens Miniature Golf, and Winter Summerland Miniature Golf.</p>
            <p>For an additional $74.55 (includes tax) per ticket you get a set number of visits based on the length of the ticket you purchase. For instance, buying a 4-day park ticket entitles you to 4 visits to a water park or sports location. You can't change how many "visits" you get; the number is fixed, and unused days aren’t refundable.</p>
            <p>If you buy a ticket but then decide later that you want to add the Water Park and Sports Option, you can do so. Note, though, that Disney doesn’t prorate the cost: if you add Water Park and Sports on the last day of your trip, you’ll pay the same price as if you’d bought it before you left home.</p>
          </TicketAddonsCard>
          <TicketAddonsCard title="Park Hopper Plus (PHP) Park Hopper Plus Option">
            <p>Park Hopper Plus combines the benefits of both the Park Hopper and the Water Park and Sports options together for an additional $91 to $112 (including tax), depending on the number of park days. The number of "plus" visits to the Water Park and Sports venues equals the number of days on your ticket. For example, if you buy an 8-Day Park Hopper Plus ticket, you get eight "visits." You can't change how many "visits" you get; the number is fixed, and unused days aren’t refundable.</p>
            <p>Note that Park Hopper Plus costs less than $22 more than Park Hopper on its own; if you are already planning to purchase Park Hopper and want to visit a water park only once, it's a good value.</p>
            <p>If you buy a ticket but then decide later that you want to add the Park Hopper Plus option, you can do so. Note, though, that Disney doesn’t prorate the cost: if you add Park Hopper Plus on the last day of your trip, you’ll pay the same price as if you’d bought it before you left home.</p>
          </TicketAddonsCard>
        </div>
      </div>
    </section>
  );
};

export default TicketAddons;