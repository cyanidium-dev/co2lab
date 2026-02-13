import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";
import BiogasList from "./BiogasList";

export default function Biogas() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0 text-white">
      <Container>
        <div className="px-4 lg:px-8 py-8 lg:py-10.5 rounded-[28px] bg-black">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-8 lg:mb-12">
            <SectionTitle>Biogas / Biomethane / Bioethanol</SectionTitle>
            <div>
              <p className="mb-2 text-[12px] lg:text-[18px] font-light leading-[120%]">
                CO₂ capture, purification, liquefaction, and reuse from
                renewable sources.
              </p>
              <p>
                CO₂ Lab supports renewable energy facilities by capturing and
                upgrading biogenic CO₂ into valuable products.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 lg:gap-4">
            <div className="relative h-[180px] rounded-[20px] overflow-hidden">
              <Image
                src="/images/industriesWeServePage/biogas/biogas.webp"
                alt="Biogas"
                fill
                className="object-cover"
              />
            </div>
            <BiogasList />
          </div>
        </div>
      </Container>
    </section>
  );
}
