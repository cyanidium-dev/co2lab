"use client";
import { useState } from "react";
import Container from "../container/Container";
import LogoLink from "../logoLink/LogoLink";
import NavMenu from "./NavMenu";
import BurgerMenu from "./burgerMenu/BurgerMenu";

export default function Header() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  return (
    <header>
      <Container className="flex py-4 lg:py-11 justify-between lg:justify-start items-center lg:gap-[228px]">
        <LogoLink />
        <NavMenu />
        <BurgerMenu
          isOpenBurgerMenu={isOpenBurgerMenu}
          setIsOpenBurgerMenu={setIsOpenBurgerMenu}
        />
      </Container>
    </header>
  );
}
