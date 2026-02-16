import SupportCTA from "@/components/shared/cta/SupportCTA";
import Hero from "@/components/industriesWeServePage/hero/Hero";
import Food from "@/components/industriesWeServePage/food/Food";
import Biogas from "@/components/industriesWeServePage/biogas/Biogas";
import Logistics from "@/components/industriesWeServePage/logistics/Logistics";

export default function IndustriesWeServe() {
  return (
    <>
      <Hero />
      <Food />
      <Biogas />
      <Logistics />
      <SupportCTA />
    </>
  );
}
