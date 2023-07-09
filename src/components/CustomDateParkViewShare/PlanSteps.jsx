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
      <div>{name}</div>
      <div className="flex flex-row xs:gap-x-4 md:gap-x-0">
        <div>{action}</div>
        <div>{arrivalTime}</div>
      </div>
      <div>{wait}</div>
      <div>{duration}</div>
      <div>{freeTime}</div>
      <div>{walkTime}</div>
    </div>
  );
};

const Table = () => {
  return (
    <div>
      <Row
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
          className="rounded-2xl border border-blue-400 mb-4 px-5 py-5"
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
            <div className="flex xs:flex-row xs:gap-x-4 md:gap-x-0 md:flex-col text-tp-gray-300">
              <div>Edit</div>
              <div>Remove</div>
            </div>
          }
          arrivalTime={<div className="text-tp-gray-300">ADD LL/G+ TIME</div>}
          wait={<></>}
          duration={<></>}
          freeTime={<></>}
          walkTime={<></>}
        />
      ))}
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
