import Container from "@/components/shared/container/Container";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

const technologies = [
  {
    title: "Equipment & modular CO₂ systems",
    href: "/solutions/equipment-and-systems",
    image: "/images/engineeringSolutionsPage/technologies/first.webp",
    imageAlt: "Equipment and modular CO₂ systems",
    dark: true,
  },
  {
    title: "Full-cycle CO₂ production and supply",
    href: "/supply",
    image: "/images/engineeringSolutionsPage/technologies/second.webp",
    imageAlt: "Full-cycle CO₂ production and supply",
    dark: false,
  },
  {
    title: "Helping businesses optimize processes",
    href: "/solutions/industries-we-serve",
    image: "/images/engineeringSolutionsPage/technologies/third.webp",
    imageAlt: "Helping businesses optimize processes",
    dark: true,
  },
];

export default function Technologies() {
  return (
    <section className="py-12 lg:pt-[136px] lg:pb-24 relative">
      <Container className="relative z-10">
        <ul className="flex flex-col gap-4 lg:gap-6 list-none p-0 m-0">
          <li key="title" className="pb-4">
            <SectionTitle className="mb-3 lg:mb-6">
              <span className="block">CO₂ capture</span>
              <span className="block pl-[114px]">& upgrading</span>
            </SectionTitle>
            <p className="">
              Advanced technologies for efficient and sustainable CO₂ recovery
              from any source.
            </p>
          </li>

          {technologies.map((item) => (
            <li key={item.href} className="">
              <Link
                href={item.href}
                className={`group flex gap-3 p-4 lg:p-3 transition-opacity xl:hover:opacity-95 focus-visible:opacity-95 outline-none rounded-[20px] overflow-hidden ${
                  item.dark
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black"
                }`}
              >
                <div>
                  <h3 className="text-[20px] lg:text-[24px] font-semibold leading-[120%] uppercase mb-4 lg:mb-6">
                    {item.title}
                  </h3>
                  <SecondaryButton>Read more</SecondaryButton>
                </div>
                <div className="relative rounded-[12px] shrink-0 h-auto w-[137px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, 38vw"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
