"use client";
import { useState } from "react";
import Container from "../container/Container";
import LogoLink from "../logoLink/LogoLink";
import NavMenu from "./NavMenu";
import BurgerMenu from "./burgerMenu/BurgerMenu";

export default function Header() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 lg:py-11">
      <Container className="flex justify-between lg:justify-start items-center lg:gap-[228px] backdrop-blur-md md:backdrop-blur-none rounded-full">
        <LogoLink onNavigate={() => setIsOpenBurgerMenu(false)} />

        <NavMenu />
        <BurgerMenu
          isOpenBurgerMenu={isOpenBurgerMenu}
          setIsOpenBurgerMenu={setIsOpenBurgerMenu}
        />
      </Container>
    </header>
  );
}
