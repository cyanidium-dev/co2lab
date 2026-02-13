import Hero from "@/components/engineeringSolutionsPage/hero/Hero";
import Processing from "@/components/engineeringSolutionsPage/processing/Processing";
import Technologies from "@/components/engineeringSolutionsPage/technologies/Technologies";
import Monitoring from "@/components/engineeringSolutionsPage/monitoring/Monitoring";
import DryIce from "@/components/engineeringSolutionsPage/dryIce/DryIce";
import Cta from "@/components/shared/cta/ConsultationCTA";

export default function EngineeringSolutions() {
  return (
    <>
      <Hero />
      <Technologies />
      <Processing />
      <Monitoring />
      <DryIce />
      <Cta />
    </>
  );
}
