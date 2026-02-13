import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import FoodList from "./FoodList";

export default function Food() {
  return (
    <section className="py-12 lg:pt-[132px] lg:pb-0">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4 lg:mb-6">
          <SectionTitle>Food & Beverage</SectionTitle>
          <p className="md:max-w-[295px]">
            CO₂ for carbonation, packaging, cooling, and quality preservation.
          </p>
        </div>
        <p className="md:max-w-[589px] mb-8 lg:mb-6">
          CO₂ is a critical component in food and beverage production — ensuring
          product quality, safety, and shelf life.
        </p>
        <FoodList />
      </Container>
    </section>
  );
}
