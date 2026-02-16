import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import ApproachList from "@/components/aboutPage/approach/ApproachList";

export default function Approach() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-8 lg:mb-14">
          <SectionTitle>Our Approach</SectionTitle>
          <p className="md:w-[calc(50%-10px)]">
            We prioritize technical excellence, reliability, and transparency in
            every project. Our solutions are engineered to meet industrial
            standards, adapted to customer needs, and delivered with full
            operational support — from planning to execution.
          </p>
        </div>
        <ApproachList />
      </Container>
    </section>
  );
}
