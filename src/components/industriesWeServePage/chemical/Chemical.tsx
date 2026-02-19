import Container from "@/components/shared/container/Container";
import ImageCarousel from "@/components/shared/carousel/ImageCarousel";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";
import imageOne from "../../../../public/images/industriesWeServePage/chemical/imageOne.webp";
import imageTwo from "../../../../public/images/industriesWeServePage/chemical/imageTwo.webp";
import imageThree from "../../../../public/images/industriesWeServePage/chemical/imageThree.webp";

const logisticsImages = [
  { src: imageOne, alt: "CO₂ storage and logistics infrastructure" },
  { src: imageTwo, alt: "Industrial cylinders and dry ice equipment" },
  { src: imageThree, alt: "Cold chain and distribution systems" },
];

export default function Chemical() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0">
      <Container className="relative flex flex-col gap-8 lg:gap-12">
        <Image
          src="/images/engineeringSolutionsPage/logistics/bgMob.svg"
          alt="bg mobile"
          width={158}
          height={188}
          className="absolute -top-16.5 -right-6 -z-10 object-cover object-right pointer-events-none lg:hidden"
          aria-hidden
        />
        <Image
          src="/images/engineeringSolutionsPage/logistics/bgDesk.svg"
          alt="bg desktop"
          width={279}
          height={333}
          className="absolute -top-25 left-[418px] -z-10 object-cover object-right pointer-events-none hidden lg:block"
          aria-hidden
        />
        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
          {" "}
          <div className="sm:w-[calc(50%-16px)] xl:w-[46%]">
            <SectionTitle className="mb-3 lg:mb-4.5">
              <span className="block">Typical</span>
              <span className="block pl-[68px] xl:pl-[126px]">
                applications:
              </span>
            </SectionTitle>
            <p className="lg:max-w-[513px]">
              Chemical and pharmaceutical industries require precise gas quality
              and process stability.
            </p>
          </div>
          <ImageCarousel images={logisticsImages} />
        </div>
      </Container>
    </section>
  );
}
