"use client";

import ContactForm from "@/components/shared/forms/ContactForm";
// import NotificationPopUp from "@/components/shared/notifications/NotificationPopUp";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import { useState } from "react";

export default function ContactFormWithNotifications() {
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      <ContactForm
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
      {/* <NotificationPopUp
        title={isError ? t("errorTitle") : t("successTitle")}
        description={isError ? t("errorDescription") : t("successDescription")}
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      /> */}
      <Backdrop
        isVisible={isNotificationShown}
        onClick={() => {
          setIsNotificationShown(false);
        }}
      />
    </>
  );
}
