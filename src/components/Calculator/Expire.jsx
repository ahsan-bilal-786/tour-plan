import React from 'react';


const Row = ({ isOdd, title, avgTime, deadline }) => {
  return (
    <div className={`min-w-[500px] ${isOdd ? "bg-tp-bluish-300/50" : ""}`}>
      <div className={`max-w-[1080px] mx-auto`}>
        <div className='flex md:text-left xs:text-15 md:text-18 xs:gap-3 py-3 xs:pl-6 md:pl-0'>
          <div className={`w-1/3`}>{title}</div>
          <div className={`w-1/3`}>{avgTime}</div>
          <div className={`w-1/3`}>{deadline}</div>
        </div>
      </div>
    </div>
  );
};


const Expire = () => {
  return (
    <section className="bg-tp-neutral">
      <div className="mx-auto bg-tp-neutral py-20">
        <div className='mb-10 text-center flex flex-col items-center'>
          <h1 className="xs:text-24 md:text-30 mb-1 font-groteskBold text-tp-purple-500 font-semibold">
            When disney tickets expire
          </h1>
          <p className='xs:text-13 md:text-18 font-normal xs:uppercase md:normal-case md:max-w-[1080px]'>
            Along with the introduction of date-based pricing, Disney shortened the amount of time you have to use your tickets. Previously, all tickets expired at midnight 14 days after first use. Now, a ticket's use period begins on the "start date" chosen at the time of purchase, and the time until expiration varies based on how many days you’re visiting the theme parks and water parks, as shown below:
          </p>
        </div>
        <section className='mb-14'>
          <div className='overflow-auto'>
            <div className='table-header '>
              <div className='min-w-[500px] max-w-[1080px] mx-auto'>
                <div className="flex font-eucliarBold mb-3 xs:text-15 md:text-18 font-bold text-tp-bluish-300 text-left  xs:pl-6 md:pl-0">
                  <div className={`w-1/3 flex items-end`}>Ticket Days</div>
                  <div className={`w-1/3 flex items-end`}>1 PARK PER DAY OR<br />PARK HOPPER TICKET</div>
                  <div className={`w-1/3 flex items-end`}>PARK HOPPER PLUS TICKET</div>
                </div>
              </div>
            </div>
            <Row
              isOdd={true}
              title="1-Day"
              avgTime="Only the start date"
              deadline={<>2 Days<br />(start date and the day after)</>}
            />
            <Row
              isOdd={false}
              title="2-Day"
              avgTime="4 Days"
              deadline="5 Days"
            />
            <Row
              isOdd={true}
              title="3-Day"
              avgTime="4 Days"
              deadline="5 Days"
            />
          </div>
        </section>
        <div className='mb-10 text-center flex flex-col items-center'>
          <p className='xs:text-13 md:text-18 font-normal xs:uppercase md:normal-case md:max-w-[1080px]'>
            For example, if you purchase a 4-Day 1 Park Per Day theme park ticket and specify you’ll start using it on June 15, 2023, you must complete your four days of theme park visits by the end of June 21, 2023. After that, the ticket is expired, even if you don’t use it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expire;

