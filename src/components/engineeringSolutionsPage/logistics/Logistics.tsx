import Container from "@/components/shared/container/Container";
import ImageCarousel from "@/components/shared/carousel/ImageCarousel";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Logistics() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0">
      <Container className="flex flex-col md:flex-row gap-88">
        <SectionTitle className="mb-3 lg:mb-4.5">
          <span className="block">Storage &</span>
          <span className="block pl-[113px] lg:pl-[186px]">Logistics</span>
        </SectionTitle>
        <p className="lg:max-w-[440px]">
          Safe, efficient and scalable CO₂ infrastructure for any application.
        </p>
        <ImageCarousel />
      </Container>
    </section>
  );
}
