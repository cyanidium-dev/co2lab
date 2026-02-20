import Container from "@/components/shared/container/Container";
import ImageCarousel from "@/components/shared/carousel/ImageCarousel";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import imageOne from "../../../../public/images/engineeringSolutionsPage/utilization/imageOne.webp";
import imageTwo from "../../../../public/images/engineeringSolutionsPage/utilization/imageTwo.webp";
import imageThree from "../../../../public/images/engineeringSolutionsPage/utilization/imageThree.webp";
import imageFour from "../../../../public/images/engineeringSolutionsPage/utilization/imageFour.webp";
import imageFive from "../../../../public/images/engineeringSolutionsPage/utilization/imageFive.webp";

const logisticsImages = [
  { src: imageOne, alt: "CO₂ storage tanks and cryogenic equipment" },
  { src: imageTwo, alt: "Dry ice production and logistics facility" },
  { src: imageThree, alt: "Industrial CO₂ distribution systems" },
  { src: imageFour, alt: "Cold chain storage and transportation" },
  { src: imageFive, alt: "CO₂ supply and logistics infrastructure" },
];

export default function Utilization() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0">
      <Container className="relative flex flex-col sm:flex-row-reverse sm:items-center gap-8">
        <div className="sm:w-[calc(50%-16px)] xl:w-[46%]">
          <SectionTitle className="mb-3 lg:mb-4.5 lg:text-[40px] xl:text-[48px]">
            CO₂ Utilization Across Industries
          </SectionTitle>
          <p className="lg:max-w-[528px]">
            Innovative and efficient use of CO₂ in various industries. Our
            solutions help the food and beverage industry maintain product
            quality and freshness, promote green agriculture and greenhouse
            complexes, ensure precision and safety in metal welding, efficient
            cooling and process control, and neutralization for environmentally
            friendly production solutions.
          </p>
        </div>
        <ImageCarousel images={logisticsImages} variant="left" />
      </Container>
    </section>
  );
}
