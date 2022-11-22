import React from 'react';

const Row = ({ isOdd, title, avgTime, highestCost, costPerHour }) => {
  return (
    <div className={`${isOdd ? "bg-tp-gray-400" : ""}`}>
      <div className="max-w-[1068px] mx-auto">
        <div className={`flex flex-wrap py-9 leading-7 text-18 items-center`}>
          <div className="xs:w-[100%] md:w-[30%] xs:pl-4 md:pl-0 xs:pb-2 md:pb-0 md:pr-2 xs:text-15 md:text-18 flex flex-row font-bold items-center">
            <img class="xs:w-[25px] md:w-[50px] xs:h-[25px] md:h-[50px] xs:mr-2 md:mr-5 shadow rounded-full max-w-full h-auto border-none" src="https://via.placeholder.com/223x223.png" alt="" />
            {title}
          </div>
          <div className="xs:w-[50%] md:w-[30%] md:pr-2 xs:pl-[50px] md:pl-[0px]  flex xs:text-24 md:text-36 font-light font-eucliarLight">{avgTime}</div>
          <div className="xs:w-[25%] md:w-[20%] md:pr-2 flex xs:text-24 md:text-36  font-light font-eucliarLight">
            <sup className='xs:text-[13px] md:text-18 mt-4'>$</sup>{highestCost}
          </div>
          <div className="xs:w-[25%] md:w-[20%] flex xs:text-24 md:text-36  font-light font-eucliarLight">
            <sup className='xs:text-[13px] md:text-18 mt-4'>$</sup>{costPerHour}
          </div>
        </div>
      </div>
    </div>
  );
};


const TimeSaving = () => {
  return (
    <section className="bg-white">
      <div className="py-67">
        <div className='xs:mb-10 md:mb-24 text-center mx-auto max-w-[1068px]'>
          <h1 className="xs:text-24 md:text-30 xs:leading-7 md:leading-10 xs:mx-6 md:mx-6 mb-3 font-groteskBold text-tp-san-marino font-semibold">
            What Individual Lightning Lanes can I purchase and how much time could it save me?
          </h1>
        </div>
        <div>
          <div className='table-header'>
            <div className='flex mb-6 font-semibold max-w-[1068px] mx-auto'>
              <div className="xs:hidden md:block w-[30%] md:pr-2"></div>
              <div className="xs:w-[50%] md:w-[30%] xs:pl-[50px] md:pl-[0px] md:pr-2">Average Time in Line Saved</div>
              <div className="xs:w-[25%] md:w-[20%] pr-2">Highest Cost</div>
              <div className="xs:w-[25%] md:w-[20%] xs:pr-2 md:pr-0">Cost Saved Per Hour</div>
            </div>
          </div>
          <div className='table-body'>
            <Row
              isOdd={true}
              image="https://via.placeholder.com/223x223.png"
              title="Rise of the Resistance"
              avgTime="91 minutes"
              highestCost="15"
              costPerHour="9.90"
            />

            <Row
              isOdd={false}
              image="https://via.placeholder.com/223x223.png"
              title="Meet Mickey Mouse at Town Square Theater"
              avgTime="91 minutes"
              highestCost="15"
              costPerHour="9.90"
            />

            <Row
              isOdd={true}
              image="https://via.placeholder.com/223x223.png"
              title="Monster’s Inc. Laugh Floor"
              avgTime="91 minutes"
              highestCost="15"
              costPerHour="9.90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSaving;

