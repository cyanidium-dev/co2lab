"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { heroSlides, HERO_SLIDE_DURATION_MS } from "@/constants/heroSlides";

const TOTAL = heroSlides.length;
const TRANSITION_MS = 500;
const STRIP_POSITIONS = TOTAL + 1;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % STRIP_POSITIONS);
    }, HERO_SLIDE_DURATION_MS);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (activeIndex !== STRIP_POSITIONS - 1) return;
    resetTimeoutRef.current = setTimeout(() => {
      setTransitionEnabled(false);
      setActiveIndex(0);
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }, TRANSITION_MS);
    return () => {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [activeIndex]);

  const displayIndex = Math.min(activeIndex, TOTAL - 1);

  return (
    <div className="flex h-full min-h-full flex-col justify-end rounded-[18px] py-3 pl-3 lg:px-7 lg:pl-7">
      {/* Top row: номер завжди 01, progress bar, total */}
      <div className="mb-2.5 lg:mb-3 flex items-center gap-3 w-[250px] lg:w-[311px]">
        <span className="text-[16px] lg:text-[20px] font-semibold leading-[120%] text-white">
          01
        </span>
        <div className="flex flex-1 overflow-hidden rounded-full bg-white/20 lg:h-1.5">
          <div
            className="h-1 rounded-full bg-white transition-all duration-300 ease-out lg:h-1.5"
            style={{
              width: `${((displayIndex + 1) / TOTAL) * 100}%`,
            }}
          />
        </div>
        <span className="text-[16px] lg:text-[20px] font-semibold leading-[120%] text-white">
          {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      {/* Cards strip: 4 слайди + клон, gap 12px; рух зправа наліво */}
      <div className="overflow-hidden rounded-[18px]">
        <div
          className="flex ease-out"
          style={{
            width: "calc(425% + 48px)",
            gap: "12px",
            transform: `translateX(calc(-${activeIndex} * (20% + 12px)))`,
            transition: transitionEnabled
              ? `transform ${TRANSITION_MS}ms ease-out`
              : "none",
          }}
        >
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="flex w-[250px] lg:w-[632px] shrink-0 items-center gap-2 lg:gap-3.5 rounded-[18px] p-2.5 backdrop-blur-[10px] shadow-[inset_0_4px_12.6px_0_rgba(255,255,255,0.25)]"
              style={{ minWidth: "20%" }}
            >
              <div className="relative h-[77px] lg:h-[107px] w-[84px] lg:w-[98px] shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="140px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 lg:mb-3 text-[14px] lg:text-[16px] font-medium uppercase leading-[120%] text-white">
                  {slide.title}
                </h3>
                <p className="text-[10px] lg:text-[12px] font-light leading-[120%] text-white">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
          {/* Клон першого слайду — превʼю нульового, коли активний слайд 3 */}
          {heroSlides[0] && (
            <div
              className="flex w-[250px] shrink-0 items-center gap-2 rounded-[18px] p-2.5 shadow-[inset_0_4px_12.6px_0_rgba(255,255,255,0.25)] backdrop-blur-[10px] lg:w-[632px] lg:gap-3.5"
              style={{ minWidth: "20%" }}
              aria-hidden
            >
              <div className="relative h-[77px] w-[84px] shrink-0 overflow-hidden rounded-[10px] lg:h-[107px] lg:w-[98px]">
                <Image
                  src={heroSlides[0].image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="140px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-[14px] font-medium uppercase leading-[120%] text-white lg:mb-3 lg:text-[16px]">
                  {heroSlides[0].title}
                </h3>
                <p className="text-[10px] font-light leading-[120%] text-white lg:text-[12px]">
                  {heroSlides[0].description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
