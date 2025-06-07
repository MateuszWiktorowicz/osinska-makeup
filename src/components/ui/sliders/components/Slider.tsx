"use client";

import React, { Children, ReactElement, CSSProperties, useRef } from "react";

import SliderDots from "../components/SliderDots";

import { useResponsiveItems } from "../hooks/useResponsiveItems";
import { useScrollArrows } from "../hooks/useScrollArrows";
import { SlideSpan } from "@/types/slider";
import BackwardArrow from "./BackwardArrow";
import ForwardArrow from "./ForwardArrow";

function getSpanFromChild(child: ReactElement): SlideSpan | undefined {
  const raw = child.props?.["data-span"];
  return raw !== undefined ? (Number(raw) as SlideSpan) : undefined;
}

function classicSize(
  _span: SlideSpan | undefined,
  visible: number,
  vertical: boolean,
): CSSProperties {
  if (vertical) {
    return { height: `${100 / visible}%`, width: "100%" };
  }
  return { width: `${100 / visible}%` };
}

function variableSize(
  span: SlideSpan | undefined,
  visible: number,
  vertical: boolean,
): CSSProperties | undefined {
  if (!span) return undefined;
  if (vertical) {
    return { height: `${(100 / visible) * span}%`, width: "100%" };
  }
  return { width: `${(100 / visible) * span}%` };
}

const pickSize = (variable: boolean) => (variable ? variableSize : classicSize);

interface SliderProps {
  children: React.ReactNode;
  itemsToShow: Record<string, number>;
  showDots?: boolean;
  variableWidth?: boolean;
  scrollStep?: number;
  childClassName?: string;
  vertical?: boolean;
}

export default function Slider({
  children,
  itemsToShow,
  showDots = false,
  variableWidth = false,
  scrollStep,
  childClassName = "",
  vertical = false,
}: SliderProps) {
  const visible = useResponsiveItems(itemsToShow);
  const compute = (span: SlideSpan | undefined, visible: number) =>
    pickSize(variableWidth)(span, visible, vertical);

  const scrollRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);

  const {
    handleScrollBackward,
    handleScrollForward,
    currentSlide,
    atStart,
    atEnd,
  } = useScrollArrows(scrollRef, visible, scrollStep ?? visible, vertical);

  const totalSlides = Math.ceil(Children.count(children) / visible);

  return (
    <div className="relative">
      <div className="relative w-full h-full">
        {!atStart && (
          <BackwardArrow
            ref={leftRef}
            handleScrollBackward={handleScrollBackward}
            vertical={vertical}
          />
        )}

        {!atEnd && (
          <ForwardArrow
            ref={rightRef}
            handleScrollForward={handleScrollForward}
            vertical={vertical}
          />
        )}

        <div
          ref={scrollRef}
          className={`flex scroll-smooth ${
            vertical ? "flex-col overflow-y-auto" : "overflow-x-auto"
          }`}
          style={{
            maxWidth: vertical ? undefined : "100%",
            height: vertical ? "300px" : undefined,
            overflow: vertical ? "auto" : "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {Children.map(children, (child) => {
            const span = getSpanFromChild(child as ReactElement);
            const sizeStyle = compute(span, visible);

            return (
              <div
                className={`shrink-0 flex items-center justify-center ${childClassName}`}
                style={sizeStyle}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
      {showDots && totalSlides > 1 && (
        <SliderDots totalSlides={totalSlides} currentSlide={currentSlide} />
      )}
    </div>
  );
}
