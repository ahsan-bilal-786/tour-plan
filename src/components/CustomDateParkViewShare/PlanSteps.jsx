import map from "lodash/map";
import range from "lodash/range";
import Container from "elements/Container";
import Castle from "assets/images/castle.png";

const SVGIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
  >
    <line
      x1="1"
      y1="10"
      x2="22.3333"
      y2="10"
      stroke="#C4C4C4"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      x1="1"
      y1="16"
      x2="22.3333"
      y2="16"
      stroke="#C4C4C4"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M7.3335 21L11.3335 25L15.3335 21"
      stroke="#C4C4C4"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.3335 5L11.3335 1L7.3335 5"
      stroke="#C4C4C4"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Title = () => {
  return (
    <h2 className="text-center text-rose-500 text-[30px] font-eucliarBold font-semibold mb-[90px]">
      Review your selections then choose “Evaluate” for us to predict your wait
      times, or let us “Optimize” your plan with our recommended order.
    </h2>
  );
};

const Row = ({
  className,
  name,
  action,
  arrivalTime,
  wait,
  duration,
  freeTime,
  walkTime,
}) => {
  return (
    <div className={` flex xs:flex-col md:flex-row ${className} `}>
      <div className="md:w-[400px]">{name}</div>
      <div className="flex xs:flex-row-reverse md:flex-row xs:justify-end md:justify-start xs:gap-x-4 md:gap-x-0 xs:ml-10 md:ml-0 xs:mt-2 md:mt-0">
        <div className="md:w-[70px] flex items-center">{action}</div>
        <div className="w-[114px] flex items-center">{arrivalTime}</div>
      </div>
      <div className="flex-1 xs:hidden md:flex">{wait}</div>
      <div className="flex-1 xs:hidden md:flex">{duration}</div>
      <div className="flex-1 xs:hidden md:flex">{freeTime}</div>
      <div className="flex-1 xs:hidden md:flex">{walkTime}</div>
    </div>
  );
};

export const PlansTotal = ({ title, value, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="md:px-4 xs:px-0 min-h-[24px] md:border-b-2 md:border-black text-black text-[13px] font-medium uppercase  md:flex">
        {title}
      </div>
      <div className="flex xs:flex-col md:flex-row md:px-4 xs:px-0 text-black capitalize md:py-2 text-[24px] font-bold font-groteskBold items-start justify-start">
        {value}
        <div className="md:hidden font-semibold text-[12px]">
          {" "}
          Minutes In line
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div>
      <Row
        className="md:px-5"
        name={
          <div className="text-black text-[18px] font-bold font-eucliarBold">
            Your Plan Steps (drag to reorder)
          </div>
        }
        action={<></>}
        arrivalTime={
          <div className="text-black text-[13px] font-medium uppercase hidden md:flex">
            ARRIVAL TIME
          </div>
        }
        wait={
          <div className="text-black text-[13px] font-medium uppercase hidden md:flex">
            WAIT
          </div>
        }
        duration={
          <div className="text-black text-[13px] font-medium uppercase hidden md:flex">
            DURATION
          </div>
        }
        freeTime={
          <div className="text-black text-[13px] font-medium uppercase hidden md:flex">
            FREE TIME
          </div>
        }
        walkTime={
          <div className="text-black text-[13px] font-medium uppercase hidden md:flex">
            WALK TIME
          </div>
        }
      />

      {map(range(3), (val) => (
        <Row
          key={val}
          className="md:rounded-2xl xs:border-b xs:border-black md:border md:border-blue-400 mb-4 md:px-5 py-5"
          name={
            <div className="flex flex-row gap-x-4">
              <div className="flex md:items-center">
                <SVGIcon />
              </div>
              <div className="xs:hidden md:flex">
                <img
                  src={Castle}
                  alt="castle"
                  className="rounded-full h-[50px] w-[50px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-blue-400 text-[13px] font-semibold uppercase">
                  START MAKING GENIE+ RESERVATIONS
                </p>
                <p className="text-black text-[18px] font-bold">
                  My Disney Experience
                </p>
              </div>
            </div>
          }
          action={
            <div className="text-[13px] capitlize justify-center items-center flex xs:flex-row xs:gap-x-4 md:gap-x-0 md:flex-col text-tp-gray-300">
              <div>Edit</div>
              <div>Remove</div>
            </div>
          }
          arrivalTime={
            <div className="capitlize  text-13 text-tp-gray-300 justify-center items-center ">
              ADD LL/G+ TIME
            </div>
          }
          wait={<div className="flex justify-center items-center text-24 font-semibold">45</div>}
          duration={<div className="flex justify-center items-center text-24 font-semibold">24</div>}
          freeTime={<div className="flex justify-center items-center text-24 font-semibold">66</div>}
          walkTime={<div className="flex justify-center items-center text-24 font-semibold">335</div>}
        />
      ))}
      <div className="flex flex-row mt-10">
        <div className=" flex-1 xs:hidden md:flex">
          <PlansTotal title="" value="Plans Totals:" className="flex-1" />
        </div>
        <div className=" flex-1 flex xs:flex-col md:flex-row xs:gap-y-4 md:gap-y-0">
          <div className="xs:w-full md:w-auto xs:border-b xs:border-tp-gray-300 md:border-0 xs:pb-4 md:pb-0">
            <PlansTotal
              title="TOTAL TIME"
              value="690 mins"
              className="flex-1 xs:hidden md:flex"
            />
            <div className="md:hidden">690 mins total</div>
          </div>
          <div className="flex-1 flex flex-row xs:gap-x-3 md:gap-x-0">
            <PlansTotal title="IN LINE" value="234" className="flex-1" />
            <PlansTotal title="BUSY" value="324" className="flex-1" />
            <PlansTotal title="FREE TIME" value="564" className="flex-1" />
            <PlansTotal title="WALK TIME" value="342" className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PlanSteps = () => {
  return (
    <Container className="rounded-2xl pt-[40px] xs:pb-[135px] md:pb-[40px] mb-[74px] ">
      <Title />
      <Table />
    </Container>
  );
};

export default PlanSteps;
