import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Logistics() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0">
      <Container>
        <SectionTitle className="mb-3 lg:mb-4.5">
          <span className="block">Storage &</span>
          <span className="block pl-[113px] lg:pl-[186px]">Logistics</span>
        </SectionTitle>
        <p className="lg:max-w-[440px]">
          Safe, efficient and scalable CO₂ infrastructure for any application.
        </p>
      </Container>
    </section>
  );
}
