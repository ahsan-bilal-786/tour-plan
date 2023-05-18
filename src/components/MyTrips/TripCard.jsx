import ListItem from "./ListItems";

const Event = ({ count, className }) => {
  return (
    <div className="md:border-b-4 overflow-hidden relative md:border-tp-gray-300 md:bg-tp-neutral py-[5px] md:py-[8px] md:px-[15px] rounded-[8px] md:w-[55px] flex items-center justify-center">
      <div
        className={`text-[24px] md:text-[40px] leading-6 md:leading-46 font-bold md:font-semibold font-groteskBold  md:font-groteskSemiBold ${className}`}
      >
        {count}
      </div>
      <div className="absolute top-0 w-full md:w-[55px] h-[18px] md:h-[32px] md:bg-[#D9D9D980]"></div>
    </div>
  );
};

const DaysToGo = () => (
  <>
    <div className="flex mb-1 text-tp-purple md:text-[#B6383980] md:mb-1 gap-1 md:gap-3 justify-end md:justify-around items-center">
      <Event className="md:text-[#B6383980]" count="3" />
      <Event className="md:text-[#B6383980]" count="1" />
    </div>
    <div className="text-right md:text-center text-tp-purple md:text-tp-gray-300 xs:text-[10px] md:text-13 leading-4 font-semibold ">
      DAYS TO GO
    </div>
  </>
);

const SmallCard = () => {
  return (
    <div className="border-2 border-tp-gray-300 px-38 py-18 bg-white rounded-lg">
      <h3 className="font-bold xs:text-16 md:text-lg leading-7 text-tp-purple font-eucliarSemiBold">
        Family Reunion Spring Break 2023
      </h3>
      <p className="font-normal xs:text-15 md:text-lg leading-7 text-black">
        WDW | Jan 4–11, 2023 (7 nights)
      </p>
    </div>
  );
};

export default SmallCard;

export const BigCard = ({ className, children }) => {
  return (
    <div className="border-2 border-tp-purple px-38 py-18 bg-white rounded-lg flex flex-row">
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold xs:text-2xl md:xs:text-lg md:text-3xl leading-[46px] text-tp-black-300 font-eucliarSemiBold">
              Kings January 2023
            </h3>
            <div className="font-normal xs:text-15 md:text-lg leading-7 text-black mb-4">
            <p className="mb-5">Walt Disney World Resort</p>
            </div>
          </div>
          <div className="min-width-[72px] md:min-width-[inherit]">
            <DaysToGo />
          </div>
        </div>

        <div className="font-normal xs:text-15 md:text-lg leading-7 text-black mb-4">
          <p className="">Jan 4–11, 2023 (7 nights)</p>
          <p className="mb-1">2 Adults, 3 Children</p>
          <p className="text-purple font-bold text-tp-purple font-eucliarBold">Disney’s Fort Wilderness Resort</p>
        </div>
        <div>
          <p className="font-semibold text-[13px] leading-5 uppercase mb-3">
            <b className="font-semibold font-eucliarMedium">REQUESTING ROOM:</b> <span className="text-tp-purple">4007</span>
          </p>
          <ListItem
            isChecked={true}
            headingText="Request to be sent Dec 4. Stay tuned!"
            headingClass="!text-medium !text-black"
            isHeadingCutted={false}
            bodyText=""
          />
        </div>
        <div className="flex flex-row gap-x-5 uppercase text-tp-gray-300 xs:text-[10px] md:text-[13px] font-semibold font-eucliarMedium">
          <p>REQUEST DINING</p>
          <p>Edit</p>
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};
