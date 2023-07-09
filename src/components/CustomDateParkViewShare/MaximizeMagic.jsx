import Button from "elements/Button";
import Container from "elements/Container";

const MaximizeMagic = () => {
  return (
    <Container
      bg="bg-tp-purple"
      className="pt-[60px] xs:pb-[70px] md:pb-[86px] md:px-0 text-center flex justify-center"
    >
      <div className="flex flex-col md:w-[800px] max-auto">
        <h1 className=" text-30 mb-11 font-groteskSemiBold text-white font-semibold">
          Now get ready to maximize the magic...
        </h1>
        <div className="flex xs:flex-col md:flex-row justify-between text-left">
          <div className="flex flex-col gap-y-11 xs:max-w-full md:max-w-[300px] xs:justify-center md:justify-start">
            <p className="md:min-h-[80px] text-center">
              Want us to rearrange the order and optimize based on the latest
              estimates and real-time lines data?
            </p>
            <Button className="bg-white text-black !border-white">
              Optimize My Plan
            </Button>
          </div>
          <div className=" xs:border-b xs:border-white md:boder-0 my-9 h-[1px] md:hidden"></div>
          <div className="flex flex-col gap-y-11 xs:max-w-full md:max-w-[300px] xs:justify-center md:justify-start ">
            <p className="md:min-h-[80px] text-center">
              Want us to evaluate the order you’ve selected so you know what to
              expect?
            </p>
            <Button className="bg-white text-black !border-white">
              Evaluate My Plan
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MaximizeMagic;
