import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="pt-12 pb-24 lg:pt-[127px] lg:pb-[108px] text-white">
      <Container>
        <div className="relative px-3 lg:px-12 pt-8 pb-[178px] lg:py-[95px] rounded-[18px] overflow-hidden">
          <Image
            src="/images/engineeringSolutionsPage/cta/cta.webp"
            alt="Cta"
            fill
            className="object-cover -z-20"
          />
          <Image
            src="/images/engineeringSolutionsPage/cta/smokeMob.webp"
            alt=""
            width={338}
            height={524}
            className="pointer-events-none absolute right-0 -bottom-62 z-0 lg:hidden object-cover"
            aria-hidden
          />
          <Image
            src="/images/engineeringSolutionsPage/cta/smokeDesk.webp"
            alt=""
            width={636}
            height={436}
            className="pointer-events-none absolute right-0 bottom-0 z-0 object-contain hidden lg:block"
            aria-hidden
          />
          <div className="lg:hidden absolute inset-0 -z-10 opacity-60 bg-[linear-gradient(0deg,rgba(38,38,38,0.4),rgba(38,38,38,0.4)),linear-gradient(70.75deg,rgba(0,0,0,0)_6.59%,rgba(0,0,0,0.8)_86.62%)]"></div>
          <div className="lg:max-w-[604px]">
            <SectionTitle className="mb-3 lg:mb-8">
              Ready to build your CO₂ ecosystem?
            </SectionTitle>
            <p className="mb-8 lg:mb-12 text-[12px] lg:text-[18px] font-light leading-[120%]">
              Get a tailored solution for your production, purification or
              utilization needs.
            </p>
            <SecondaryButton>Request consultation</SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
