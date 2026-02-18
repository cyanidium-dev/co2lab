"use client";

import { useState } from "react";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import SendMessageModal from "@/components/shared/modals/SendMessageModal";
import Backdrop from "@/components/shared/backdrop/Backdrop";

export default function RequestDetailsApplication() {
  const [isModalShown, setIsModalShown] = useState(false);
  return (
    <>
      <SecondaryButton
        variant="white"
        onClick={() => setIsModalShown(true)}
        className="xs:max-w-[288px] mx-auto lg:mx-0"
      >
        Request Supply Details
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
