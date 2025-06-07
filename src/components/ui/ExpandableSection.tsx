"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ExpandableSectionProps {
  isExpanded: boolean;
  children: ReactNode;
  className?: string;
  maxHeight?: number;
}

export default function ExpandableSection({
  isExpanded,
  children,
  className = "",
  maxHeight = 1000,
}: ExpandableSectionProps) {
  return (
    <div
      className={clsx(
        "transition-[max-height] duration-700 ease-in-out overflow-hidden",
        isExpanded ? `max-h-[${maxHeight}px]` : "max-h-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
