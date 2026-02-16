import Container from "@/components/shared/container/Container";
import RecyclingList from "./RecyclingList";

export default function Recycling() {
  return (
    <section className="py-12 lg:pt-30 lg:pb-0">
      <Container>
        <RecyclingList />
      </Container>
    </section>
  );
}
