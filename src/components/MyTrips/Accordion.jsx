import React from "react";

const IconLeftAngle = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const BtnBack = () => (
  <div className="md:hidden relative w-full flex justify-center min-h-[35px] items-center">
    <div className="absolute left-0">
      <IconLeftAngle />
    </div>
    <p className="text-15 font-bold font-eucliarBold">Kings January 2023</p>
  </div>
);

const Accordion = () => {
  return (
    <>
      <div className="shadow-[0px_4px_10px_rgba(0,0,0,0.2)] md:pt-[60px] flex flex-col  justify-center items-center mb-9 xs:bg-tp-neutral md:bg-white">
        <BtnBack />
        <div className="flex flex-row w-full justify-between xs:bg-tp-neutral md:bg-white max-w-[70%]">
          <p className="font-bold py-3 xs:text-15 md:text-lg leading-7 flex items-center text-center text-black border-b-2 border-tp-purple">
            Checklist
          </p>
          <p className="font-normal py-3 xs:text-15 md:text-lg leading-7 flex items-center text-center text-black">
            Crowds
          </p>
          <p className="font-normal py-3 xs:text-15 md:text-lg leading-7 flex items-center text-center text-black">
            Notes
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
