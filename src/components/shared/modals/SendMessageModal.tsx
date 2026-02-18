"use client";

import NotificationPopUp from "@/components/shared/notifications/NotificationPopUp";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import { Dispatch, SetStateAction, useState } from "react";
import ContactForm from "../forms/ContactForm";
import Modal from "./Modal";

interface SendMessageModalProps {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export default function SendMessageModal({
  isModalShown,
  setIsModalShown,
}: SendMessageModalProps) {
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown}>
      <ContactForm
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
      <NotificationPopUp
        title={isError ? "Something went wrong" : "Your message has been sent"}
        description={
          isError
            ? "Try submitting the form later."
            : "We have received your message and will get back to you shortly."
        }
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      />
      <Backdrop
        isVisible={isNotificationShown}
        onClick={() => {
          setIsNotificationShown(false);
        }}
      />
    </Modal>
  );
}
