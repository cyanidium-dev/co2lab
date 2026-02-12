import Hero from "@/components/equipmentAndSystemsPage/hero/Hero";
import Comparison from "@/components/equipmentAndSystemsPage/comparison/Comparison";
import CriogenicTanks from "@/components/equipmentAndSystemsPage/criogenicTanks/CriogenicTanks";
import SupportCTA from "@/components/shared/cta/SupportCTA";

export default function EquipmentAndSystems() {
  return (
    <>
      <Hero />
      <Comparison />
      <CriogenicTanks />
      <SupportCTA />
    </>
  );
}
