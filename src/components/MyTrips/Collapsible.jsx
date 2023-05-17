import React from "react";

const Plus = () => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="11" y1="23.5" x2="11" y2="0.5" stroke="black" />
    <line x1="4.37114e-08" y1="11.5" x2="23" y2="11.5" stroke="black" />
  </svg>
);

const Minus = () => (
  <svg
    width="23"
    height="1"
    viewBox="0 0 23 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="4.37114e-08" y1="0.5" x2="23" y2="0.500002" stroke="black" />
  </svg>
);

const Collapsible = ({ isOpen, heading, children }) => {
  return (
    <div className="flex flex-col border-b-2 border-black">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="w-[23px] mr-4">{isOpen ? <Minus /> : <Plus />}</div>
          <div
            className={`font-light text-3xl leading-[46px] text-tp-black-300 py-4`}
          >
            {heading}
          </div>
        </div>

        <div className="font-bold text-lg leading-7 text-right text-tp-purple">1/2</div>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;
