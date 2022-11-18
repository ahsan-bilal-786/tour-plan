import React from 'react';

const Row = ({ isOdd, title, avgTime, highestCost, costPerHour }) => {
  return (
    <div className={`${isOdd ? "bg-tp-gray-400" : ""}`}>
      <div className="w-[1300px] mx-auto">
        <div className={`flex py-9 leading-7 text-18`}>
          <div className="flex-1 flex flex-row font-bold items-center">
            <img class="mb-3 mr-2 shadow rounded-full max-w-full h-auto align-middle border-none" src="https://via.placeholder.com/223x223.png" alt="" width="50px" height="50px" />
            {title}
          </div>
          <div className="flex-1 flex justify-center items-center text-36 font-light font-eucliarLight">{avgTime}</div>
          <div className="flex-1  flex justify-center items-center text-36 font-light font-eucliarLight">
            <small className='text-18'>$</small>{highestCost}
          </div>
          <div className="flex-1  flex justify-center  items-center text-36 font-light font-eucliarLight">
            <small className='text-18'>$</small>{costPerHour}
          </div>
        </div>
      </div>
    </div>
  );
};


const TimeSaving = () => {
  return (
    <section className="bg-white">
      <div className="text-center py-67">
        <div className='mb-24 text-center'>
          <h1 className="text-30 mb-3 font-groteskSemiBold text-tp-san-marino font-semibold">
            What Individual Lightning Lanes can I purchase and how much time could it save me?
          </h1>
        </div>
        <div>
          <div className='table-header'>
            <div className='w-[1300px] mx-auto'>
              <div className="flex mb-6 font-semibold">
                <div className="flex-1"></div>
                <div className="flex-1">Average Time in Line Saved</div>
                <div className="flex-1">Highest Cost</div>
                <div className="flex-1">Cost Saved Per Hour</div>
              </div>
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

