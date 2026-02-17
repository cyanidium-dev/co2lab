import { Dispatch, SetStateAction } from "react";
import Modal from "../modals/Modal";
import MainButton from "../buttons/MainButton";
import Image from "next/image";

interface NotificationPopUpProps {
  title: string;
  description: string;
  isPopUpShown: boolean;

  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationPopUp({
  title,
  description,
  isPopUpShown,

  setIsPopUpShown,
}: NotificationPopUpProps) {
  return (
    <Modal isModalShown={isPopUpShown} setIsModalShown={setIsPopUpShown}>
      <div className="relative px-4 lg:px-[45px] py-12 lg:py-[63px] relative flex flex-col justify-center items-center w-full">
        <h3 className="mb-8 text-[24px] lg:text-[32px] font-medium leading-[120%] text-center uppercase">
          {title}
        </h3>
        <p className="text-center">{description}</p>
      </div>
    </Modal>
  );
}
