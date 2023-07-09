import Button from "elements/Button";
import Container from "elements/Container";
import shareplan from "assets/images/share-plan.svg";

const PrintBanner = () => {
  return (
    <Container
      bg="bg-tp-purple-500"
      className="xs:pt-[79px] md:pt-[92px] xs:pb-[70px] md:pb-[76px]  text-center"
    >
      <h1 className="capitalize text-30 mb-3 font-groteskSemiBold text-white font-semibold">
        Ready to print or share your plan?
      </h1>
      <div className="s text-center text-white text-[18px] font-normal leading-7 mb-11">
        Print your plan or share a link to invite family and friends to view
        your Custom Touring Plan
      </div>
      <div className="flex xs:flex-col md:flex-row justify-center xs:gap-y-4 md:gap-x-9">
        <Button className=" bg-black">Print Plan</Button>
        <Button className=" bg-black flex flex-row justify-center items-center gap-x-2">
          <img src={shareplan} alt="shareplan h-[24px]" />
          Share Plan
        </Button>
      </div>
    </Container>
  );
};

export default PrintBanner;
