import Container from "@/components/shared/container/Container";
import ImageCarousel from "@/components/shared/carousel/ImageCarousel";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";
import imageOne from "../../../../public/images/engineeringSolutionsPage/logistics/imageOne.webp";
import imageTwo from "../../../../public/images/engineeringSolutionsPage/logistics/imageTwo.webp";
import imageThree from "../../../../public/images/engineeringSolutionsPage/logistics/imageThree.webp";

const logisticsImages = [
  { src: imageOne, alt: "CO₂ storage and logistics infrastructure" },
  { src: imageTwo, alt: "Industrial cylinders and dry ice equipment" },
  { src: imageThree, alt: "Cold chain and distribution systems" },
];

export default function Logistics() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0">
      <Container className="relative flex flex-col sm:flex-row sm:items-center gap-8">
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
        <div className="sm:w-[calc(50%-16px)] xl:w-[46%]">
          <SectionTitle className="mb-3 lg:mb-4.5">
            <span className="block">Storage &</span>
            <span className="block pl-[113px] lg:pl-[186px]">Logistics</span>
          </SectionTitle>
          <p className="lg:max-w-[440px]">
            Safe, efficient and scalable CO₂ infrastructure for any application.
          </p>
        </div>
        <ImageCarousel images={logisticsImages} />
      </Container>
    </section>
  );
}
