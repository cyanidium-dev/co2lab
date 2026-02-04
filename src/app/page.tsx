import Hero from "@/components/homePage/hero/Hero";
import Redefining from "@/components/homePage/redefining/Redefining";
import About from "@/components/homePage/about/About";
import Efficiency from "@/components/homePage/efficiency/Efficiency";
import Activity from "@/components/homePage/activity/Activity";
import Benefits from "@/components/homePage/benefits/Benefits";

export default function Home() {
  return (
    <>
      <Hero />
      <Redefining />
      <About />
      <Efficiency />
      <Activity />
      <Benefits />
    </>
  );
}
