import Container from "elements/Container";

const EvaluateBanner = () => {
  return (
    <Container
      bg="bg-tp-black-300"
      className="pt-[69px] xs:pb-[135px] md:pb-[69px] md:px-0 text-center flex justify-center"
    >
      <div className="md:max-w-910 max-auto">
        <div className=" text-center text-rose-500 text-[18px] font-semibold leading-7 mb-6 font-eucliarBold">
          Don’t forget!
        </div>

        <div className=" text-center font-groteskSemiBold flex flex-col gap-y-2">
          <p>
            <span className="text-white text-[30px] font-semibold leading-10">
              Be sure to{" "}
            </span>
            <span className="text-rose-500 text-[30px] font-semibold leading-10">
              Evaluate
            </span>
            <span className="text-white text-[30px] font-semibold leading-10">
              {" "}
              again the day before your visit to make sure all the info is still
              up to date.
            </span>
          </p>
          <p>
            <span className="text-rose-500 text-[30px] font-semibold leading-10">
              And Optimize
            </span>
            <span className="text-white text-[30px] font-semibold leading-10">
              {" "}
              your plan after riding your first attraction for up-to the-minute
              recommendations.
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default EvaluateBanner;
