import ConsultationCTA from "@/components/shared/cta/ConsultationCTA";
import Hero from "@/components/supplyPage/hero/Hero";
import Standards from "@/components/supplyPage/standards/Standards";
import Distribution from "@/components/supplyPage/distribution/Distribution";
import Benefits from "@/components/supplyPage/benefits/Benefits";

export default function SupplyPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Standards />
      <Distribution />
      <ConsultationCTA />
    </>
  );
}
