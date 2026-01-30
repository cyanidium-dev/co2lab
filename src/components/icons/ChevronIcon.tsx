type ChevronIconProps = {
    open?: boolean;
    className?: string;
};

export default function ChevronIcon({
    open = false,
    className = "",
}: ChevronIconProps) {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={`ml-1 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`.trim()}
            aria-hidden
        >
            <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
