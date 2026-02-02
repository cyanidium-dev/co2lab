import Container from "@/components/shared/container/Container";
import MainButton from "@/components/shared/buttons/MainButton";
import PageTitle from "@/components/shared/titles/PageTitle";
import Image from "next/image";
import Badges from "./badge/Badges";

export default function Hero() {
  return (
    <section className="pt-22 lg:pt-8 pb-4 lg:pb-0">
      <Container className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className="lg:w-[calc(50%-16px)] lg:pt-30 lg:pb-10">
          <PageTitle className="mb-3 lg:mb-5.5">
            Turning emissions into opportunity
          </PageTitle>
          <p className="mb-4 lg:mb-10">
            Complete CO₂ solutions — from capture to application
          </p>
          <MainButton className="sm:max-w-[288px] lg:mb-20">
            Explore Solutions
          </MainButton>
          <Badges className="hidden lg:flex lg:max-w-[335px]" />
        </div>
        <div className="relative w-full lg:w-[calc(50%-16px)] h-[305px] lg:h-auto  bg-[linear-gradient(176.8deg,rgba(0,0,0,0)_59.28%,rgba(0,0,0,0.6)_79.3%)] rounded-[18px]">
          <Image
            src="/images/homePage/hero/bgMobile.svg"
            alt=""
            width={152}
            height={190}
            className="absolute -z-10 top-[-74px] right-[-41px] lg:hidden"
            aria-hidden
          />
          <Image
            src="/images/homePage/hero/bgDesk.svg"
            alt=""
            width={269}
            height={338}
            className="absolute -z-10 bottom-[-163px] left-[-164px] hidden lg:block"
            aria-hidden
          />
          <Image
            src="/images/homePage/hero/hero.webp"
            alt="Hero Image"
            fill
            priority
            fetchPriority="high"
            className="object-cover z-10 rounded-[18px]"
          />
        </div>
        <Badges className="lg:hidden" />
      </Container>
    </section>
  );
}
