import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Comparison() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0 relative">
      <Container>
        <div className="flex flex-col lg:items-center mb-8">
          <SectionTitle className="mb-3 lg:mb-4.5 lg:text-[44px] xl:text-[48px]">
            <span className="block">Modular vs</span>
            <span className="block pl-[24px] lg:pl-[276px]">
              Containerized CO₂
            </span>
          </SectionTitle>
          <p className="lg:max-w-[522px] lg:ml-[286px]">
            Quickly compare key features and choose the best solution for your
            project.
          </p>
        </div>
      </Container>
    </section>
  );
}
