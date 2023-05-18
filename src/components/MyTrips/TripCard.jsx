import ListItem from "./ListItems";

const Event = ({ count, className }) => {
  return (
    <div className="border-b-4  overflow-hidden relative border-tp-gray-300 bg-tp-neutral py-[5px] md:py-[8px] px-[15px] rounded-[8px]  w-[33px] md:w-[55px] flex items-center justify-center">
      <div
        className={`md:text-[40px] leading-6 md:leading-46 font-semibold text-groteskSemiBold ${className}`}
      >
        {count}
      </div>
      <div className="absolute top-0 w-[33px] md:w-[55px] h-[18px] md:h-[32px] bg-[#D9D9D980]"></div>
    </div>
  );
};

const DaysToGo = () => (
  <>
    <div className="flex mb-1 md:mb-3 gap-3 justify-around items-center">
      <Event className="text-[#B6383980]" count="3" />
      <Event className="text-[#B6383980]" count="1" />
    </div>
    <div className="text-tp-gray-300 text-[10px] md:text-18 leading-4 font-semibold">
      DAYS TO GO
    </div>
  </>
);

const SmallCard = () => {
  return (
    <div className="border-2 border-tp-gray-300 px-38 py-18 bg-white rounded-lg">
      <h3 className="font-bold text-lg leading-7 text-tp-purple">
        Family Reunion Spring Break 2023
      </h3>
      <p className="font-normal text-lg leading-7 text-black">
        WDW | Jan 4–11, 2023 (7 nights)
      </p>
    </div>
  );
};

export default SmallCard;

export const BigCard = ({ className, children }) => {
  return (
    <div className="border-2 border-tp-purple px-38 py-18 bg-white rounded-lg flex flex-row">
      <div>
        <h3 className="font-semibold text-3xl leading-[46px] text-tp-black-300">
          Kings January 2023
        </h3>

        <div className="font-normal text-lg leading-7 text-black mb-4">
          <p className="mb-5">Walt Disney World Resort</p>
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
        <div className="flex flex-row gap-x-5 uppercase text-tp-gray-300 text-13 font-semibold font-eucliarMedium">
          <p>REQUEST DINING</p>
          <p>Edit</p>
          <p>Remove</p>
        </div>
      </div>
      <div>
        <DaysToGo />
      </div>
    </div>
  );
};
