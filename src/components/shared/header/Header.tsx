import Container from "../container/Container";
import LogoLink from "../logoLink/LogoLink";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header>
      <Container className="flex py-4 lg:py-11 justify-between items-center lg:gap-[228px]">
        <LogoLink />
        <NavMenu />
      </Container>
    </header>
  );
}
