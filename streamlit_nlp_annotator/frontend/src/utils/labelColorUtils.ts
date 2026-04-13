import { LabelColor } from "../types/types";

/**
 * Builds a deterministic map from label name to color.
 *
 * Strategy:
 * - remove duplicates
 * - sort labels alphabetically
 * - assign colors in palette order
 * - cycle when labels outnumber palette entries
 *
 * Sorting keeps the mapping stable across renders and avoids
 * accidental color reassignment caused by input order changes.
 *
 * @param labels Labels to colorize.
 * @param palette Active palette.
 * @returns Map from label to assigned color.
 */
export function buildLabelColorMap(
  labels: string[],
  palette: LabelColor[]
): Map<string, LabelColor> {
  const map = new Map<string, LabelColor>();

  if (palette.length === 0) {
    return map;
  }

  const uniqueSortedLabels = Array.from(new Set(labels)).sort((a, b) =>
    a.localeCompare(b)
  );

  uniqueSortedLabels.forEach((label, index) => {
    map.set(label, palette[index % palette.length]);
  });

  return map;
}

/**
 * Returns a safe fallback color when no usable palette entry exists.
 *
 * The fallback uses CSS custom properties so it can integrate with
 * surrounding app theming.
 *
 * @returns Default label color configuration.
 */
export function getFallbackColor(): LabelColor {
  return {
    bg: "var(--st-secondary-background-color)",
    fg: "var(--st-primary-color)",
    border: "var(--st-primary-color)",
  };
}

/**
 * Returns the color assigned to a label, with safe fallbacks.
 *
 * Fallback order:
 * 1. label-specific map entry
 * 2. first color in the active palette
 * 3. hardcoded fallback color
 *
 * @param label Label name.
 * @param labelColorMap Precomputed map from label to color.
 * @param activePalette Palette for the active theme.
 * @returns Color configuration for the label.
 */
export function getColorForLabelFromMap(
  label: string,
  labelColorMap: Map<string, LabelColor>,
  activePalette: LabelColor[]
): LabelColor {
  return labelColorMap.get(label) ?? activePalette[0] ?? getFallbackColor();
}

/**
 * Returns whether a label matches the current search query.
 *
 * Matching rules:
 * - empty or whitespace-only query matches everything
 * - otherwise matching is case-insensitive substring matching
 *
 * @param label Candidate label.
 * @param query Search text entered by the user.
 * @returns `true` if the label matches, otherwise `false`.
 */
export function matchesLabel(label: string, query: string): boolean {
  if (!query.trim()) {
    return true;
  }

  return label.toLowerCase().includes(query.trim().toLowerCase());
}