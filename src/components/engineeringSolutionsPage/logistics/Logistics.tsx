import Container from "@/components/shared/container/Container";
import ImageCarousel from "@/components/shared/carousel/ImageCarousel";
import SectionTitle from "@/components/shared/titles/SectionTitle";
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
      <Container className="flex flex-col sm:flex-row sm:items-center gap-8">
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
