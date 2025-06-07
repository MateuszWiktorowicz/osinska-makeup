"use client";
import { useState, useEffect } from "react";
import { getItemsForWidth, ItemsToShowConfig } from "@/lib/utils/breakpoints";

export function useResponsiveItems(itemsToShow: ItemsToShowConfig) {
  //TODO sypie bledem w konsoli, nie rozwala strony - do sprawdzenia
  const [items, setItems] = useState(
    getItemsForWidth(window.innerWidth, itemsToShow),
  );

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      const matchedItems = getItemsForWidth(width, itemsToShow);
      setItems(matchedItems);
    };

    updateItems();
    window.addEventListener("resize", updateItems);

    return () => window.removeEventListener("resize", updateItems);
  }, [itemsToShow]);

  return items;
}
