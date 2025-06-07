import React from "react";
import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";

interface BackwardArrowProps {
  handleScrollBackward: () => void;
  className?: string;
  vertical?: boolean;
}

const BackwardArrow = React.forwardRef<HTMLButtonElement, BackwardArrowProps>(
  ({ handleScrollBackward, className, vertical = false }, ref) => {
    return (
      <button
        ref={ref}
        onClick={handleScrollBackward}
        className={`absolute shadow-md p-3 bg-gray-200 hover:bg-primary transition z-10 ${className} ${
          vertical
            ? "top-0 left-1/2 -translate-x-1/2"
            : "left-0 top-1/2 -translate-y-1/2"
        }`}
      >
        <LeftArrowIcon
          className={`fill-current text-white ${
            vertical ? "w-[20px] h-[15px] rotate-90" : "w-[15px] h-[20px]"
          }`}
        />
      </button>
    );
  },
);

BackwardArrow.displayName = "BackwardArrow";

export default BackwardArrow;
