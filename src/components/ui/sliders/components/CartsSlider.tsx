/**
 * Generic, variable‑width slider.
 *
 * • If `variableWidth` is **false**  → every slide occupies 1 ⁄ visible width.
 * • If `variableWidth` is **true**   → each child must carry its own
 *   `data‑span={1|0.75|0.5}` attribute (a plain DOM prop) to decide its width.
 */

"use client";

import React, { Children, ReactElement, CSSProperties, useRef } from "react";

import LeftArrow from "./BackwardArrow";
import RightArrow from "./ForwardArrow";

import { useResponsiveItems } from "../hooks/useResponsiveItems";
import { useScrollArrows } from "../hooks/useScrollArrows";
import { SlideSpan } from "@/types/slider";

function getSpanFromChild(child: ReactElement): SlideSpan | undefined {
  const raw = child.props?.["data-span"];
  return raw !== undefined ? (Number(raw) as SlideSpan) : undefined;
}

interface SliderProps {
  children: React.ReactNode;
  variableWidth?: boolean;
  scrollStep?: number;
}

export default function CartsSlider({ children, scrollStep }: SliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);
  const visible = Children.count(children);

  const {
    handleScrollBackward,
    handleScrollForward,
    currentSlide,
    atStart,
    atEnd,
  } = useScrollArrows(scrollRef, visible, scrollStep ?? visible);

  return (
    <div className="w-full flex">
      <div className="relative">
        <LeftArrow
          ref={leftRef}
          handleScrollBackward={handleScrollBackward}
          className="relative h-full rounded-tl-[10px]"
        />
      </div>
      <div
        ref={scrollRef}
        className="flex flex-1 h-full overflow-x-auto scroll-smooth"
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* hide native scrollbar (WebKit) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {Children.map(children, (child) => {
          const span = getSpanFromChild(child as ReactElement);

          return (
            <div className="shrink-0 flex items-center justify-start">
              {child}
            </div>
          );
        })}
      </div>
      <div className="relative">
        <RightArrow
          ref={rightRef}
          handleScrollForward={handleScrollForward}
          className="relative h-full rounded-tr-[10px]"
        />
      </div>
    </div>
  );
}
