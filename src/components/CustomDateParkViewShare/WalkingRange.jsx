import Container from "elements/Container";

const RangeSection = ({ className }) => {
  return (
    <div className={`flex flex-1 flex-col ${className}`}>
      <p className="flex flex-row gap-x-2 text-[18px] font-bold font-eucliarBold ">
        Set your walking Speed:
        <span className="text-rose-500 ">Relaxed</span>
      </p>
      <div className="mt-[45px]">
        <div className="border-t border-[#606060] flex flex-1 justify-around pt-6">
          <span>VERY RELAXED</span>
          <span>RELAXED</span>
          <span>AVERAGE</span>
          <span>FAST</span>
        </div>
      </div>
    </div>
  );
};

const WalkingRange = () => {
  return (
    <Container className="border pt-[40px] xs:pb-[135px] md:pb-[40px] md:px-[56px] mb-[23px] rounded-2xl ">
      <div className="flex xs:flex-col md:flex-row">
        <RangeSection className="border-r border-stone-300 md:pr-[66px]" />
        <RangeSection className="md:pl-[66px]" />
      </div>
    </Container>
  );
};

export default WalkingRange;
