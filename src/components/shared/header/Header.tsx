"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import Container from "../container/Container";
import LogoLink from "../logoLink/LogoLink";
import NavMenu from "./NavMenu";
import BurgerMenu from "./burgerMenu/BurgerMenu";

export default function Header() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest);
  });

  console.log(scrollPosition);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 py-4 lg:py-11">
      <Container className="relative z-10 flex items-center justify-between rounded-full lg:justify-start lg:gap-[228px]">
        <div className="relative py-2">
          <LogoLink onNavigate={() => setIsOpenBurgerMenu(false)} />
          {scrollPosition === 0 && (
            <>
              <div
                className="hidden md:block absolute w-[calc(100%+16px)] h-full top-0 -left-2 px-4 -z-10 rounded-full bg-[linear-gradient(90.95deg,rgba(231,231,231,0.8)_52.25%,rgba(255,255,255,0.8)_99.18%)] shadow-[inset_0px_4px_12.6px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px]"
                aria-hidden
              />
              <div
                className="hidden md:block absolute w-[calc(100%+16px)] h-full top-0 -left-2 -z-10 rounded-full pointer-events-none"
                style={{
                  background:
                    "linear-gradient(270.67deg, #F2F2F2 -9.58%, #C7C7C7 103.45%)",
                  padding: "1px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
                aria-hidden
              />
            </>
          )}
        </div>

        <NavMenu />
        <BurgerMenu
          isOpenBurgerMenu={isOpenBurgerMenu}
          setIsOpenBurgerMenu={setIsOpenBurgerMenu}
        />
      </Container>
    </header>
  );
}
