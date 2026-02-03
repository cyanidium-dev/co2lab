import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";

export default function Efficiency() {
  return (
    <section className="py-12 lg:pt-[103px] lg:pb-0">
      <div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/homePage/efficiency/leftTop.webp"
            alt="Low Emissions"
            width={553}
            height={134}
          />
          <div>
            <p>Built for today and tomorrow.</p>
            <SectionTitle>Low Emissions</SectionTitle>
          </div>
          <Image
            src="/images/homePage/efficiency/rightTop.webp"
            alt="Low Emissions"
            width={580}
            height={94}
          />
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/homePage/efficiency/leftBottom.webp"
            alt="Low Emissions"
            width={624}
            height={142}
          />
          <div>
            <SectionTitle>High Efficiency</SectionTitle>
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
          />
        </div>
      </div>
    </section>
  );
}
