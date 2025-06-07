import React, { JSX, ReactNode } from "react";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const headingStyles: Record<number, string> = {
  1: "text-[48px] font-bold",
  2: "text-[34px] font-semibold",
  3: "text-[28px] font-semibold",
  4: "text-[24px] font-medium",
  5: "text-[20px] font-medium",
  6: "text-[16px] font-medium",
};

export function Heading({ level, className = "", children, ...props }: HeadingProps) {
  const Tag = `h${level}` as keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  const baseStyles = headingStyles[level] || "";

  return (
    <Tag className={`${baseStyles} text-center mb-5 ${className}`} {...props}>
      {children}
    </Tag>
  );
}
