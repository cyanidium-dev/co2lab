import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0">
      <Container className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-5">
        <div className="md:w-[calc(50%-10px)]">
          <SectionTitle className="mb-3 lg:mb-4.5">Who We Are?</SectionTitle>
          <p>
            CO₂ Lab is a technology-driven company focused on developing and
            delivering comprehensive CO₂ solutions for a range of industries. We
            combine engineering expertise with operational reliability to
            support businesses in optimizing gas usage, maintaining quality, and
            achieving sustainable outcomes.
          </p>
        </div>
        <div className="relative rounded-[18px] md:w-[calc(50%-10px)] h-[158px] md:h-auto lg:min-h-[288px] overflow-hidden">
          <Image
            src="/images/aboutPage/whoWeAre/whoWeAre.webp"
            alt="Who We Are?"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
