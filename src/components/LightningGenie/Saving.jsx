import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Row = ({ isOdd, title, avgTime, deadline }) => {
  return (
    <div className={`min-w-[500px] max-w-[1080px] mx-auto ${isOdd ? "bg-tp-bluish-300/50" : ""}`}>
      <div className='flex md:text-left xs:text-15 md:text-18 font-bold xs:gap-3 justify-between py-3 xs:pl-6 md:pl-0'>
        <div className="w-[49%]">{title}</div>
        <div className="w-[30%]">{avgTime}</div>
        <div className="font-normal w-[19%]">{deadline}</div>
      </div>
    </div>
  );
};

const Thumb = ({ title, isActive }) => {
  return (
    <div className={`flex-1 flex flex-col relative text-18 font-medium items-center uppercase md:pb-6  ${isActive ? "" : "opacity-50"}`}>
      <img className="mb-3 shadow rounded-full max-w-full h-auto align-middle border-none" src="https://via.placeholder.com/223x223.png" width="50px" height="50px" alt="" />
      <div className='xs:hidden md:block'>{title}</div>
      <span className={`absolute bottom-[-16px] bg-tp-neutral xs:hidden ${isActive ? "md:inline-block" : "hidden"}`}>
        <FontAwesomeIcon icon={faAngleDown} className="m-[-1px]" />
      </span>
    </div>
  );
};

const Saving = () => {
  return (
    <section className="bg-tp-neutral">
      <div className="mx-auto bg-tp-neutral py-20">
        <div className='mb-10 text-center'>
          <h1 className="xs:text-24 md:text-30 mb-1 font-groteskBold text-tp-purple-500 font-semibold">
            How much time could paying for Genie+ save me?
          </h1>
          <p className='xs:text-13 md:text-18 font-normal xs:uppercase md:normal-case'>Select a park to see its attractions</p>
        </div>
        <section>
          <div className='flex mb-10 max-w-[1080px] mx-auto xs:border-0 md:border-b-[2px] border-black'>
            <Thumb title="Magic Kingdom" isActive={true} />
            <Thumb title="EPCOT" isActive={false} />
            <Thumb title="HOLLYWOOD STUDIOS" isActive={false} />
            <Thumb title="ANIMAL Kingdom" isActive={false} />
          </div>


          <div className='overflow-auto'>
            <div className='table-header '>
              <div className='min-w-[500px] max-w-[1080px] mx-auto'>
                <div className="flex font-eucliarBold justify-between mb-3 xs:text-15 md:text-18 font-bold text-tp-bluish-300 text-left  xs:pl-6 md:pl-0">
                  <div className="w-[49%] ">Attraction</div>
                  <div className="w-[30%] ">Average Time in Line Saved</div>
                  <div className="w-[19%] ">Deadline to get Genie+</div>
                </div>
              </div>
            </div>
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
          </div>
        </section>
      </div>
    </section>
  );
};

export default Saving;

