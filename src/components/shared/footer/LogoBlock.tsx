import LogoLink from "../logoLink/LogoLink";

export default function LogoBlock() {
  return (
    <div className="max-w-[217px]">
      <LogoLink variant="white" className="inline-block mb-6 lg:mb-8" />
      <p className="text-[12px] font-light leading-[120%]">
        Turning emissions into opportunity. Engineering the future of
        sustainable CO₂ technologies.
      </p>
    </div>
  );
}
