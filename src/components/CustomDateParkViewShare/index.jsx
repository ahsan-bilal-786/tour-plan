import Container from "elements/Container";
import Title from "./Title";
import PlanTimes from "./PlanTimes";
import PlanSteps from "./PlanSteps";
import WalkingRange from "./WalkingRange";
import LightningLaneAcces from "./LightningLaneAcces";
import AdvancedOption from "./AdvancedOption";
import MaximizeMagic from "./MaximizeMagic";
import EvaluateBanner from "./EvaluateBanner";
import DownloadApp from "./DownloadApp";
import PrintBanner from "./PrintBanner";
import MapArea from "./MapArea";

const ViewShare = () => {
  return (
    <Container className="bg-white mb-28 md:!max-w-[100%]">
      <Title />
      <PlanTimes />
      <PlanSteps />
      <WalkingRange />
      <LightningLaneAcces />
      <AdvancedOption />
      <MaximizeMagic />
      <EvaluateBanner />
      <DownloadApp />
      <PrintBanner />
      <MapArea />
    </Container>
  );
};

export default ViewShare;
