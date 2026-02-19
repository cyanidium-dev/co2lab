import Container from "@/components/shared/container/Container";
import ImageCarousel from "@/components/shared/carousel/ImageCarousel";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";
import imageOne from "../../../../public/images/supplyPage/biogenic/imageOne.webp";
import imageTwo from "../../../../public/images/supplyPage/biogenic/imageTwo.webp";
import imageThree from "../../../../public/images/supplyPage/biogenic/imageThree.webp";

const logisticsImages = [
  { src: imageOne, alt: "CO₂ storage and logistics infrastructure" },
  { src: imageTwo, alt: "Industrial cylinders and dry ice equipment" },
  { src: imageThree, alt: "Cold chain and distribution systems" },
];

export default function Biogenic() {
  return (
    <section className="py-12 lg:pt-[132px] lg:pb-0">
      <Container className="relative flex flex-col sm:flex-row sm:items-center gap-8">
        <Image
          src="/images/supplyPage/biogenic/bgMob.svg"
          alt="bg mobile"
          width={158}
          height={188}
          className="absolute -top-23.5 left-0 -z-10 object-cover object-right pointer-events-none lg:hidden"
          aria-hidden
        />
        <Image
          src="/images/supplyPage/biogenic/bgDesk.svg"
          alt="bg desktop"
          width={279}
          height={333}
          className="absolute -top-31 -left-21 -z-10 object-cover object-right pointer-events-none hidden lg:block"
          aria-hidden
        />
        <div className="sm:w-[calc(50%-16px)] xl:w-[46%]">
          <SectionTitle className="mb-3 lg:mb-4.5">
            <span className="block">Biogenic CO₂</span>
            <span className="block pl-[127px] sm:pl-[80px] xl:pl-[166px]">
              Production
            </span>
          </SectionTitle>
          <p className="lg:max-w-[513px]">
            We capture and liquefy biogenic CO₂ directly at biogas and
            biomethane plants, transforming emissions into a valuable industrial
            resource.
          </p>
        </div>
        <ImageCarousel images={logisticsImages} />
      </Container>
    </section>
  );
}
