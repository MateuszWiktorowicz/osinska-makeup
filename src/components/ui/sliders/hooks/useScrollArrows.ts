import { useState, useEffect } from "react";

/**
 * @param scrollRef  container that scrolls horizontally or vertically
 * @param visible    how many “items” are currently visible
 * @param step       by how many items we move on each click
 *                   (defaults to a full page = `visible`)
 * @param vertical   czy scroll jest pionowy (true) czy poziomy (false)
 */
export function useScrollArrows(
  scrollRef: React.RefObject<HTMLDivElement>,
  visible: number,
  step: number = visible,
  vertical: boolean = false,
) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [atStart, setAtStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      if (!scrollRef.current) return;
      if (vertical) {
        const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
        setAtStart(scrollTop <= 0);
        setAtEnd(scrollTop + clientHeight >= scrollHeight - 1);
      } else {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        setAtStart(scrollLeft <= 0);
        setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    checkPosition();
    scrollRef.current?.addEventListener("scroll", checkPosition);
    return () =>
      scrollRef.current?.removeEventListener("scroll", checkPosition);
  }, [scrollRef, vertical]);

  /* one “item” size = clientWidth/clientHeight divided by visible */
  const delta = () => {
    if (!scrollRef.current) return 0;
    if (vertical) {
      return (scrollRef.current.clientHeight / visible) * step;
    }
    return (scrollRef.current.clientWidth / visible) * step;
  };

  const handleScrollBackward = () => {
    if (!scrollRef.current) return;
    if (vertical) {
      scrollRef.current.scrollBy({ top: -delta(), behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: -delta(), behavior: "smooth" });
    }
    setCurrentSlide((prev) => prev - 1);
  };

  const handleScrollForward = () => {
    if (!scrollRef.current) return;
    if (vertical) {
      scrollRef.current.scrollBy({ top: delta(), behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: delta(), behavior: "smooth" });
    }
    setCurrentSlide((prev) => prev + 1);
  };

  return {
    atStart,
    atEnd,
    handleScrollBackward,
    handleScrollForward,
    currentSlide,
  };
}
