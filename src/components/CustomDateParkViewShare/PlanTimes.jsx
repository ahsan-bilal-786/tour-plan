import Container from "elements/Container";
import Castle from "assets/images/castle.png";

const Heading = ({ label }) => {
  return (
    <p className="mb-2 capitalize text-black text-[13px] flex flex-row items-center gap-x-2">
      {label} <span className="capitalize text-109px] text-zinc-500">Edit</span>
    </p>
  );
};

const PlanTimes = () => {
  return (
    <Container className="bg-zinc-100 border border-zinc-100 rounded-2xl pt-[40px] xs:pb-[135px] md:pb-[40px] md:px-[56px] mb-[74px] ">
      <div className="flex xs:flex-col md:flex-row xs:gap-x-4">
        <div className="flex-1">
          <Heading label="YOUR DATE" />
          <div className="flex flex-col text-black mb-10">
            <p className="text-[24px] font-eucliarSemiBold font-medium ">
              Wednesday,
            </p>
            <p className="text-[20px] font-eucliarSemiBold font-medium">
              November 09, 2022
            </p>
          </div>
          <div className="flex flex-row items-center gap-x-4 pb-4">
            <img
              src={Castle}
              alt="castle"
              className="rounded-full h-[50px] w-[50px]"
            />
            <p>Magic Kingdom</p>
          </div>
          <div className="flex flex-row items-center gap-x-4 pb-4">
            <div className="min-w-[50px] text-center text-pink-800 text-[40px] font-semibold leading-10 font-groteskSemiBold">
              8
            </div>
            <div className=" text-pink-800 text-[13px] font-semibold leading-none font-groteskBold">
              Large Crowds
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <Heading label="YOUR PLAN TIMES" />
          <div className="flex flex-col text-black mb-10">
            <p className="text-[24px] font-eucliarSemiBold font-medium ">
              8:30am–11:00pm
            </p>
            <p className="text-[20px] font-eucliarSemiBold font-medium">
              Using Early Theme Park Entry
            </p>
          </div>
          <Heading label="PARK HOURS" />
          <div className="flex flex-col text-black">
            <p className="text-[24px] font-eucliarSemiBold font-medium ">
              8:30am–11:00pm
            </p>
            <p className="text-[20px] font-eucliarSemiBold font-medium text-tp-gray-300">
              Using Early Theme Park Entry
            </p>
            <p className="text-[20px] font-eucliarSemiBold font-medium text-tp-gray-300">
              Using Early Theme Park Entry
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col font-medium">
          <Heading label="PLAN NOTES" />

          <p className="text-black text-[18px] font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default PlanTimes;
