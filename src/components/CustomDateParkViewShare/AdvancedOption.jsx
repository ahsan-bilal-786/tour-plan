import Button from "elements/Button";
import Container from "elements/Container";
import Toggle from "elements/Form/Checkbox";

const AdvancedOption = () => {
  return (
    <>
      <Container className=" pt-[40px] xs:pb-[45px] md:pb-[40px] md:px-[56px] xs:mb-0 md:mb-[88px] md:rounded-2xl md:bg-zinc-100 md:border md:border-zinc-100">
        <div className=" xs:rounded-2xl xs:bg-zinc-100 border xs:border-zinc-100 xs:py-[18px] xs:px-[20px] xs:my-[18px] md:my-0 md:py-0 md:px-0  md:bg-inherit md:border-transparent">
          <h5 className=" text-black text-[13px] font-medium leading-tight mb-6">
            ADVANCED OPTIONS
          </h5>
          <div className="flex flex-col md:border-b-2 md:border-stone-300 pb-9">
            <div className="flex flex-row w-full">
              <Toggle className="!justify-start !pt-2 xs:w-[236px] md:w-auto" />
              <div className="flex flex-col gap-y-2">
                <div className=" text-black xs:text-15 md:text-[24px] font-eucliarSemiBold xs:font-bold  md:font-medium xs:w-[70%] md:w-auto">
                  Force use of inputted Lightning Lane return time
                </div>
                <div className="text-zinc-600 text-[14px] font-bold leading-tight">
                  If you optimize this plan, do you want to prioritize use of
                  the return times you input, even if using one or more of them
                  is inefficient?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" xs:rounded-2xl xs:bg-zinc-100 border xs:border-zinc-100 xs:py-[18px] xs:px-[20px] xs:my-[18px] md:my-0 md:py-0 md:px-0  md:bg-inherit md:border-transparent">
          <div className="pt-[35px] mb-7 md:w-1/2">
            <div className="flex flex-col gap-y-2">
              <h5 className=" text-black text-[13px] font-medium leading-tight mb-6 md:hidden">
                ADVANCED OPTIONS
              </h5>
              <div className=" text-black xs:text-15 md:text-[24px] font-eucliarSemiBold xs:font-bold  md:font-medium xs:w-[70%] md:w-auto">
                Additional Scheduled Return Times
              </div>
              <div className="text-zinc-600 text-[14px] font-bold leading-tight">
                This may be useful for those using Disability Access Service or
                some other way to use Lightning Lane queues at scheduled times.
              </div>
            </div>
          </div>
          <Button className="text-black !text-[14px] font-semibold font-eucliarSemiBold">
            Configure Additional Return Times
          </Button>
        </div>
      </Container>
    </>
  );
};

export default AdvancedOption;
