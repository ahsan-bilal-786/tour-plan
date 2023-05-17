import React from "react";

const Accordion = () => {
  return (
    <>
      <div className="shadow-[0px_4px_10px_rgba(0,0,0,0.2)] pt-50 flex justify-center mb-9">
        <div className="flex flex-row w-full justify-between bg-white max-w-[70%]">
          <p className="font-bold py-3 text-lg leading-7 flex items-center text-center text-black border-b-2 border-tp-purple">
            Checklist
          </p>
          <p className="font-normal py-3 text-lg leading-7 flex items-center text-center text-black">
            Crowds
          </p>
          <p className="font-normal py-3 text-lg leading-7 flex items-center text-center text-black">
            Notes
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
