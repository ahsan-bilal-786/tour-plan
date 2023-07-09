import Button from "elements/Button";
import Container from "elements/Container";
import Toggle from "elements/Form/Checkbox";

const LightningLaneAcces = () => {
  return (
    <>
      <Container className="border !border-blue-400 pt-[40px] xs:pb-[40px] md:pb-[40px] md:px-[56px] mb-[23px] rounded-2xl ">
        <h5 className=" text-black text-[13px] font-medium leading-tight mb-6">
          ADVANCED OPTIONS
        </h5>
        <div className="flex flex-col pb-9 xs:pl-4 md:pl-0 ">
          <div className="flex flex-row w-full ">
            <Toggle className="!justify-start xs:w-[124px] md:w-auto" />
            <div className="flex flex-col gap-y-2">
              <div className=" text-black xs:text-15 md:text-18 font-semibold  md:w-auto">
                I play to buy{" "}
                <span className="border-b border-black">
                  Lightning Lane access via Individual Purchase
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xs:flex-col md:flex-row xs:gap-y-4 md:gap-y-0">
          <div className="flex-1">
            <div className="text-zinc-600 text-[14px] font-bold leading-tight md:w-[400px] mb-10">
              We recommend securing your Lightning Lane access via Individual
              Purchase return times via Disney’s app as soon as you are eligible
              each morning.
            </div>

            <Button className="bg-tp-bluish-300 border-tp-bluish-300 font-bold text-black">
              Configure LL/IND
            </Button>
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-bold text-tp-bluish-300 xs:text-left md:text-center">
              Star Wars: Rise of the Resistance (~$25) – NONE
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LightningLaneAcces;
