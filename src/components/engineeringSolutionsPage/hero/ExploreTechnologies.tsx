"use client";

import { useState } from "react";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import SendMessageModal from "@/components/shared/modals/SendMessageModal";
import Backdrop from "@/components/shared/backdrop/Backdrop";

export default function ExploreTechnologiesApplication() {
  const [isModalShown, setIsModalShown] = useState(false);
  return (
    <>
      <SecondaryButton
        variant="white"
        className="xs:max-w-[288px] mx-auto lg:mx-0"
        onClick={() => setIsModalShown(true)}
      >
        Explore technologies
      </SecondaryButton>
      <SendMessageModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
      <Backdrop
        isVisible={isModalShown}
        onClick={() => setIsModalShown(false)}
      />
    </>
  );
}
