import React from "react";

const StepsNavigation = () => {
  return (
    <div className="w-full  xs:hidden md:flex flex-row min-h-[59px] mb-[50px]">
      <div className="flex-1 relative flex justify-center items-center text-center text-white text-[18px] font-bold leading-7 bg-rose-500">
        Custom Touring Plan
        <div class="w-11 absolute overflow-hidden inline-block right-[-44px] z-10">
          <div class=" h-16  bg-rose-500 rotate-45 transform origin-top-left"></div>
        </div>
      </div>
      <div className=" flex-1 relative flex justify-center items-center text-center text-black text-[18px] font-bold leading-7 bg-stone-300">
        1. Date & Park
        <div class="w-11 absolute overflow-hidden inline-block right-[-44px] z-10">
          <div class=" h-16  bg-stone-300 rotate-45 transform origin-top-left"></div>
        </div>
      </div>
      <div className=" flex-1 relative flex justify-center items-center text-center text-black text-opacity-50 text-[18px] font-normal bg-zinc-100 ">
        2. Attractions
      </div>
      <div className=" flex-1  flex justify-center items-center text-center text-black text-opacity-50 text-[18px] font-normal bg-zinc-100 ">
        3. Meals
      </div>
      <div className=" flex-1  flex justify-center items-center text-center text-black text-opacity-50 text-[18px] font-normal bg-zinc-100 ">
        4. Breaks
      </div>
      <div className=" flex-1  flex justify-center items-center text-center text-black text-opacity-50 text-[18px] font-normal bg-zinc-100">
        5. View & Share
      </div>
    </div>
  );
};

export default StepsNavigation;
