import ArrowIcon from "../icons/ArrowIcon";
import { twMerge } from "tailwind-merge";

interface SecondaryButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
  variant?: "black" | "white";
  onClick?: () => void;
}

export default function SecondaryButton({
  type = "button",
  children,
  className,
  variant = "white",
  onClick,
}: SecondaryButtonProps) {
  const isBlack = variant === "black";

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        "group flex items-center h-11 lg:h-[54px] rounded-full cursor-pointer active:scale-[98%] will-change-transform transition duration-300 ease-in-out focus-visible:brightness-125 xl:hover:brightness-125",
        "text-[12px] lg:text-[14px] font-normal leading-[120%]",
        className,
      )}
    >
      <span
        className={`flex items-center justify-center h-full px-7 lg:px-9 py-3 rounded-full text-[12px] lg:text-[14px] font-normal leading-[120%] ${isBlack ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {children}
      </span>
      <span
        className={`flex items-center justify-center h-full aspect-square -ml-2 py-3 rounded-full ${isBlack ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <ArrowIcon className="h-[14px] w-[17px] shrink-0 transition-transform duration-300 ease-in-out group-focus-visible:translate-x-[2px] group-focus-visible:-translate-y-[2px] xl:group-hover:translate-x-[2px] xl:group-hover:-translate-y-[2px]" />
      </span>
    </button>
  );
}
