import React from 'react';

const Row = ({ isOdd, title, avgTime, deadline }) => {
  return (
    <div className={`flex py-2 leading-7 text-18 font-bold ${isOdd ? "bg-tp-bluish-300/50" : ""}`}>
      <div className="flex-1">{title}</div>
      <div className="flex-1">{avgTime}</div>
      <div className="flex-1 font-normal">{deadline}</div>
    </div>
  );
};

const Thumb = ({ title }) => {
  return (
    <div className='flex-1 flex flex-col text-18 font-medium items-center uppercase'>
      <img className="mb-3 shadow rounded-full max-w-full h-auto align-middle border-none" src="https://via.placeholder.com/223x223.png" width="50px" height="50px" alt=""/>
      <div>{title}</div>
    </div>
  );
};

const Saving = () => {
  return (
    <section className="bg-tp-neutral">
      <div className="mx-auto bg-tp-neutral py-20">
        <div className='mb-10 text-center'>
          <h1 className="text-30 mb-1 font-groteskSemiBold text-tp-purple-500 font-semibold">
            How much time could paying for Genie+ save me?
          </h1>
          <p className='text-18 font-normal'>Select a park to see its attractions</p>
        </div>
        <section>
          <div className='flex mb-6'>
            <Thumb title="Magic Kingdom" />
            <Thumb title="EPCOT" />
            <Thumb title="HOLLYWOOD STUDIOS" />
            <Thumb title="ANIMAL Kingdom" />
          </div>
          <header className="flex text-18 text-tp-bluish-300 py-1">
            <div className="flex-1">Attraction</div>
            <div className="flex-1">Average Time in Line Saved</div>
            <div className="flex-1">Deadline to get Genie+</div>
          </header>

          <Row
            isOdd={true}
            title="Jungle Cruise"
            avgTime="48 minutes"
            deadline="Before XXX"
          />
          <Row
            isOdd={false}
            title="Meet Mickey Mouse at Town Square Theater	"
            avgTime="48 minutes"
            deadline="Before XXX"
          />
          <Row
            isOdd={true}
            title="Monster’s Inc. Laugh Floor"
            avgTime="48 minutes"
            deadline="Before XXX"
          />
        </section>
      </div>
    </section>
  );
};

export default Saving;

