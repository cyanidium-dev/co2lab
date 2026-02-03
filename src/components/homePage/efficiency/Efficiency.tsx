import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";

export default function Efficiency() {
  return (
    <section className="overflow-x-hidden py-12 lg:pt-[103px] lg:pb-[108px] overflow-hidden">
      <div className="flex flex-col items-center gap-4 lg:gap-6">
        <div className="flex w-full justify-center items-center">
          <div className="flex min-w-[120vw] flex-nowrap items-center justify-center gap-4 lg:gap-[41px] mr-22 lg:mr-80">
            <Image
              src="/images/homePage/efficiency/leftTop.webp"
              alt="Low Emissions"
              width={553}
              height={134}
              className="opacity-0 sm:opacity-100 w-auto h-[104px] lg:h-[134px] shrink-0 lg:-mb-3"
            />
            <div className="w-60 lg:w-[411px] shrink-0 lg:mr-[41px]">
              <p className="mb-3 lg:mb-2">Built for today and tomorrow.</p>
              <SectionTitle>Low Emissions</SectionTitle>
            </div>
            <Image
              src="/images/homePage/efficiency/rightTop.webp"
              alt="Low Emissions"
              width={580}
              height={94}
              className="w-auto h-[73px] lg:h-[94px] shrink-0 lg:mb-2.5"
            />
          </div>
        </div>
        <div className="flex w-full justify-center items-center lg:items-end">
          <div className="flex min-w-[120vw] flex-nowrap items-center justify-center gap-4 lg:gap-[45px] ml-16 lg:ml-60">
            <Image
              src="/images/homePage/efficiency/leftBottom.webp"
              alt="Low Emissions"
              width={614}
              height={142}
              className="w-auto h-[114px] lg:h-[142px] shrink-0"
            />
            <div className="w-[260px] lg:w-[446px] shrink-0 lg:mr-3 lg:-mt-12">
              <SectionTitle className="mb-3 lg:mb-3.5">
                High Efficiency
              </SectionTitle>
              <p>
                Lower emissions, higher efficiency, reduced costs — sustainable
                technology that delivers now and in the future.
              </p>
            </div>
            <Image
              src="/images/homePage/efficiency/rightBottom.webp"
              alt="Low Emissions"
              width={569}
              height={160}
              className="opacity-0 sm:opacity-100 w-auto h-[128px] lg:h-[160px] shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
