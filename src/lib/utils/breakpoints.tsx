export const breakpoints = [
  { name: "xxl", minWidth: 1440, maxWidth: Infinity },
  { name: "xl", minWidth: 1200, maxWidth: 1439 },
  { name: "lg", minWidth: 1024, maxWidth: 1199 },
  { name: "md", minWidth: 768, maxWidth: 1023 },
  { name: "sm", minWidth: 425, maxWidth: 767 },
  { name: "s", minWidth: 320, maxWidth: 424 },
] as const;

export type Breakpoint = (typeof breakpoints)[number]["name"];

/** Partial map of breakpoint → items to show (e.g. `{ xl: 3, md: 2 }`). */
export type ItemsToShowConfig = Partial<Record<Breakpoint, number>>;

/**
 * Returns how many items should be visible for a given viewport width.
 */
export function getItemsForWidth(
  width: number,
  config: ItemsToShowConfig,
): number {
  const matched = breakpoints.find(
    (bp) => width >= bp.minWidth && width <= bp.maxWidth,
  );

  if (matched) return config[matched.name] ?? 1;
  return 1;
}
