const EventTime = ({ count, title, time, className, isFaded }) => {
  const classNameFaded = isFaded ? "text-tp-gray-300" : ""
  return (
    <div className=" max-w-[125px]">
      <div className="md:pt-3 pb-7 px-[10px]">
        <div
          className={`xs:text-46 md:text-60 font-semibold text-groteskSemiBold ${className} ${classNameFaded}`}
        >
          {count}
        </div>
        <div
          className={`text-13 mb-2 text-groteskBold font-bold text-xs font-eucliarBold ${classNameFaded}`}
        >
          {title}
        </div>
        <div className={`text-15 font-bold text-xs italic ${classNameFaded}`}>{time}</div>
      </div>
    </div>
  );
};

const Event = () => {
  return (
    <div className=" border-t-2 border-black flex flex-col">
      <div className="flex flex-row justify-between items-center border-b border-tp-gray-300 py-4">
        <div className="text-tp-purple font-bold text-lg">
          Wednesday,
          <br />
          January 4, 2023
        </div>
        <div className="xs:text-46 md:text-[40px] font-semibold text-groteskSemiBold text-tp-numeric-8">
          7
        </div>
        <div className="text-tp-numeric-8 font-bold text-13">
          Large <br />
          Crowds
        </div>
        <div className="font-semibold text-13 text-tp-purple">
          ADD
          <br />
          PLAN
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <EventTime
          className="text-tp-numeric-8"
          day="Mon"
          date="OCT 3"
          count="8"
          title="Large Crowds"
          time="(8:30am) / 9am–11pm"
        />
        <EventTime
          className="text-tp-numeric-8"
          day="Mon"
          date="OCT 3"
          count="3"
          title="Large Crowds"
          time="(8:30am) / 9am–11pm"
          isFaded={true}
        />
        <EventTime
          className="text-tp-numeric-8"
          day="Mon"
          date="OCT 3"
          count="8"
          title="Large Crowds"
          time="(8:30am) / 9am–11pm"
        />
        <EventTime
          className="text-tp-numeric-8"
          day="Mon"
          date="OCT 3"
          count="8"
          title="Large Crowds"
          time="(8:30am) / 9am–11pm"
        />
      </div>
    </div>
  );
};

export default Event;
