import { ColorPalette, LabelColor } from "../types/types";

/**
 * Returns a default color palette, which includes a single label color
 * for both light and dark themes. The default color uses Streamlit's
 * secondary background color for the background, primary color for
 * the foreground, and primary color for the border.
 *
 * @returns {ColorPalette} A color palette with default colors for light and dark themes.
 */
export function getDefaultPalette(): ColorPalette {
  const defaultColor: LabelColor = {
    bg: "var(--st-secondary-background-color)",
    fg: "var(--st-primary-color)",
    border: "var(--st-primary-color)",
  };

  return {
    light: [defaultColor],
    dark: [defaultColor],
  };
}

/**
 * Builds a resolved color palette by combining the provided color palette
 * with the default color palette. If the provided color palette is
 * incomplete, it will be filled in with the default colors.
 *
 * @param {Partial<ColorPalette>} provided - The color palette to resolve.
 * @returns {ColorPalette} The resolved color palette.
 */
export function buildResolvedPalette(provided?: Partial<ColorPalette>): ColorPalette {
  const fallback = getDefaultPalette();

  return {
    light:
      provided?.light && provided.light.length > 0
        ? provided.light
        : fallback.light,
    dark:
      provided?.dark && provided.dark.length > 0
        ? provided.dark
        : fallback.dark,
  };
}