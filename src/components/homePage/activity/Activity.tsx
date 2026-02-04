import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import ActivityList from "@/components/homePage/activity/ActivityList";
import { activityListItems } from "@/constants/activityList";

export default function Activity() {
  return (
    <section className="py-12 lg:py-0">
      <div className="rounded-[28px] bg-black py-8 lg:pt-[59px] lg:pb-12">
        <Container>
          <SectionTitle className="mb-3 text-white lg:mb-6">
            Areas of activity
          </SectionTitle>
          <p className="mb-8 lg:mb-[73px] text-white sm:max-w-[277px]">
            From design to delivery — engineered systems for every CO₂
            application.
          </p>
          <div className="mt-6 lg:mt-8">
            <ActivityList items={activityListItems} />
          </div>
        </Container>
      </div>
    </section>
  );
}
