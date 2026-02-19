import Container from "@/components/shared/container/Container";
import ImageCarousel from "@/components/shared/carousel/ImageCarousel";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";
import imageOne from "../../../../public/images/equipmentAndSystemsPage/engineering/imageOne.webp";
import imageTwo from "../../../../public/images/equipmentAndSystemsPage/engineering/imageTwo.webp";
import imageThree from "../../../../public/images/equipmentAndSystemsPage/engineering/imageThree.webp";

const logisticsImages = [
  { src: imageOne, alt: "CO₂ storage and logistics infrastructure" },
  { src: imageTwo, alt: "Industrial cylinders and dry ice equipment" },
  { src: imageThree, alt: "Cold chain and distribution systems" },
];

export default function Engineering() {
  return (
    <section className="py-12 lg:pt-[98px] lg:pb-0">
      <Container className="relative flex flex-col sm:flex-row sm:items-center gap-8">
        <Image
          src="/images/supplyPage/biogenic/bgMob.svg"
          alt="bg mobile"
          width={158}
          height={188}
          className="absolute -top-21 -left-9 -z-10 object-cover object-right pointer-events-none lg:hidden"
          aria-hidden
        />
        <Image
          src="/images/supplyPage/biogenic/bgDesk.svg"
          alt="bg desktop"
          width="248"
          height="295"
          className="absolute -top-28 -left-10 -z-10 object-cover object-right pointer-events-none hidden lg:block"
          aria-hidden
        />
        <div className="sm:w-[calc(50%-16px)] xl:w-[46%]">
          <SectionTitle className="mb-3 lg:mb-4.5">
            <span className="block">Engineering &</span>
            <span className="block pl-[119px] sm:pl-19 xl:pl-[198px]">
              EPC Support
            </span>
          </SectionTitle>
          <p className="lg:max-w-[555px]">
            Our team provides full engineering and EPC support for CO₂
            technologies, enabling seamless project delivery at every stage.
          </p>
        </div>
        <ImageCarousel images={logisticsImages} />
      </Container>
    </section>
  );
}
