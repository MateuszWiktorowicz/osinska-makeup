import React from "react";
import RightArrowIcon from "@/assets/icons/RightArrowIcon";

interface ForwardArrowProps {
  handleScrollForward: () => void;
  className?: string;
  vertical?: boolean;
}

const ForwardArrow = React.forwardRef<HTMLButtonElement, ForwardArrowProps>(
  ({ handleScrollForward, className, vertical = false }, ref) => {
    return (
      <button
        ref={ref}
        onClick={handleScrollForward}
        className={`absolute shadow-md p-3 bg-gray-200 hover:bg-primary transition z-10 ${className} ${
          vertical
            ? "bottom-0 left-1/2 -translate-x-1/2"
            : "right-0 top-1/2 -translate-y-1/2"
        }`}
      >
        <RightArrowIcon
          className={`fill-current text-white ${
            vertical ? "w-[20px] h-[15px] rotate-90" : "w-[15px] h-[20px]"
          }`}
        />
      </button>
    );
  },
);

ForwardArrow.displayName = "ForwardArrow";

export default ForwardArrow;
