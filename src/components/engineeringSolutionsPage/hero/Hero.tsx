import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[72px] pb-4 md:pt-[82px] lg:pt-5 md:pb-0">
      <Container>
        <div className="relative px-3 lg:px-6.5 py-[168px] lg:pt-[275px] lg:pb-[154px] rounded-[18px] overflow-hidden">
          {" "}
          <Image
            src="/images/engineeringSolutionsPage/hero/hero.webp"
            alt="Hero"
            fill
            priority
            fetchPriority="high"
            className="object-cover -z-10"
          />
          <PageTitle className="max-w-[304px] lg:max-w-[903px] mb-4 lg:mb-5.5 mx-auto lg:mx-0 text-white text-center lg:text-left">
            Complete CO₂ Engineering Solutions
          </PageTitle>
          <p className="mb-6 lg:mb-10 text-white text-center lg:text-left">
            From capture to utilization
          </p>
          <MainButton
            variant="white"
            className="sm:max-w-[288px] mx-auto lg:mx-0"
          >
            Explore technologies
          </MainButton>
        </div>
      </Container>
    </section>
  );
}
