import {
  FloatingMenuPosition,
  SelectionRange,
  SelectionWithComposedRanges,
} from "../types/types";

/**
 * Clears the current browser text selection.
 *
 * This is used after actions such as:
 * - creating an annotation
 * - cancelling a selection
 * - clicking outside the annotator
 */
export function clearSelection(): void {
  const sel = window.getSelection();
  if (sel) {
    sel.removeAllRanges();
  }
}

/**
 * Restricts a value to a closed numeric interval.
 *
 * If `max < min`, the function returns `min` as a defensive fallback.
 *
 * @param value Value to clamp.
 * @param min Minimum allowed value.
 * @param max Maximum allowed value.
 * @returns Clamped value.
 */
export function clamp(value: number, min: number, max: number): number {
  if (max < min) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

/**
 * Returns the closest ancestor element representing a plain text segment.
 *
 * Only plain segments are eligible for creating new annotations.
 * Annotated segments are intentionally excluded from selection creation.
 *
 * @param node Starting DOM node.
 * @returns Closest plain segment element, or `null` if none exists.
 */
export function getPlainSegmentElement(node: Node): HTMLElement | null {
  if (node.nodeType === Node.ELEMENT_NODE) {
    return (node as HTMLElement).closest(
      '[data-segment-type="plain"]'
    ) as HTMLElement | null;
  }

  return node.parentElement?.closest(
    '[data-segment-type="plain"]'
  ) as HTMLElement | null;
}

/**
 * Computes the text offset of a DOM position relative to the beginning
 * of a plain segment element.
 *
 * Internally, this uses a temporary `Range` from the start of the segment
 * to the target DOM position and measures its string length.
 *
 * @param segmentEl Plain segment element that contains the DOM position.
 * @param node DOM node inside the segment.
 * @param offset DOM offset inside the node.
 * @returns Character offset relative to the segment, or `null` on failure.
 */
export function getLocalOffset(
  segmentEl: HTMLElement,
  node: Node,
  offset: number
): number | null {
  try {
    const range = document.createRange();
    range.setStart(segmentEl, 0);
    range.setEnd(node, offset);
    return range.toString().length;
  } catch {
    return null;
  }
}

/**
 * Converts the current browser text selection into source-text coordinates.
 *
 * Constraints enforced by this function:
 * - there must be an active selection
 * - selected text must not be empty or whitespace-only
 * - both selection endpoints must lie inside the same plain segment
 *
 * The "same plain segment" rule prevents users from selecting across
 * existing annotations, which keeps the annotation model simpler.
 *
 * Returned indices are inclusive.
 *
 * @param container Root annotator text container.
 * @returns Selection converted to text indices, or `null` if invalid.
 */
export function getSelectionOffsets(
  container: HTMLElement
): SelectionRange | null {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) {
    return null;
  }

  const selection = sel as SelectionWithComposedRanges;
  const root = container.getRootNode();
  const shadowRoots = root instanceof ShadowRoot ? [root] : [];

  let range: StaticRange | Range | null = null;

  if (typeof selection.getComposedRanges === "function") {
    const ranges = selection.getComposedRanges({ shadowRoots });
    range = ranges?.[0] ?? null;
  } else {
    range = selection.getRangeAt(0);
  }

  if (!range) {
    return null;
  }

  const selectedText = selection.toString();
  if (!selectedText || !selectedText.trim()) {
    return null;
  }

  const startEl = getPlainSegmentElement(range.startContainer);
  const endEl = getPlainSegmentElement(range.endContainer);

  if (!startEl || !endEl) {
    return null;
  }

  // Only allow selections inside one plain segment.
  // This prevents cross-annotation selection and simplifies overlap handling.
  if (startEl !== endEl) {
    return null;
  }

  const segmentStart = Number(startEl.dataset.start);
  if (Number.isNaN(segmentStart)) {
    return null;
  }

  const localStart = getLocalOffset(startEl, range.startContainer, range.startOffset);
  const localEnd = getLocalOffset(startEl, range.endContainer, range.endOffset);

  if (localStart == null || localEnd == null) {
    return null;
  }

  const start = segmentStart + Math.min(localStart, localEnd);
  const end = segmentStart + Math.max(localStart, localEnd) - 1;

  if (end < start) {
    return null;
  }

  return {
    start,
    end,
    text: selectedText,
  };
}

/**
 * Computes the anchor position for the floating selection menu.
 *
 * The anchor is expressed relative to the annotator container so the menu
 * can be absolutely positioned inside that container.
 *
 * @param container Annotator text container.
 * @returns Relative anchor coordinates, or `null` if unavailable.
 */
export function getSelectionMenuPosition(
  container: HTMLElement
): FloatingMenuPosition | null {
  const sel = container.ownerDocument.getSelection();
  if (!sel) {
    return null;
  }

  const selection = sel as SelectionWithComposedRanges;
  let range: Range | null = null;

  if (typeof selection.getComposedRanges === "function") {
    const root = container.getRootNode();
    const shadowRoots = root instanceof ShadowRoot ? [root] : [];
    const composed = selection.getComposedRanges({ shadowRoots });
    const staticRange = composed?.[0];

    if (staticRange) {
      try {
        // Convert StaticRange into a live Range so we can measure its geometry.
        const liveRange = container.ownerDocument.createRange();
        liveRange.setStart(staticRange.startContainer, staticRange.startOffset);
        liveRange.setEnd(staticRange.endContainer, staticRange.endOffset);
        range = liveRange;
      } catch {
        return null;
      }
    }
  } else if (selection.rangeCount > 0) {
    range = selection.getRangeAt(0);
  }

  if (!range) {
    return null;
  }

  const rect = range.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // If the selection has no measurable rectangle, the menu cannot be placed meaningfully.
  if (!rect.width && !rect.height) {
    return null;
  }

  return {
    anchorLeft: rect.left - containerRect.left + rect.width / 2,
    anchorTop: rect.top - containerRect.top,
  };
}

/**
 * Computes the menu anchor position for a specific element
 * relative to the annotator container.
 *
 * This is used for the small delete menu shown when clicking
 * an existing annotation.
 *
 * @param container Annotator text container.
 * @param targetEl Clicked annotation element.
 * @returns Relative anchor coordinates.
 */
export function getElementMenuPosition(
  container: HTMLElement,
  targetEl: HTMLElement
): FloatingMenuPosition {
  const rect = targetEl.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    anchorLeft: rect.left - containerRect.left + rect.width / 2,
    anchorTop: rect.top - containerRect.top,
  };
}

/**
 * Computes an absolute style object for a floating menu inside a container.
 *
 * Positioning strategy:
 * - horizontally center the menu around the anchor
 * - clamp it within the container bounds
 * - prefer rendering above the anchor
 * - if there is not enough room, render below the anchor instead
 *
 * @param container Bounding container.
 * @param menu Floating menu element.
 * @param anchor Anchor coordinates relative to the container.
 * @param topBelowOffset Vertical offset used when rendering below the anchor.
 * @returns Inline style object for the menu.
 */
export function computeFloatingMenuStyle(
  container: HTMLElement,
  menu: HTMLElement,
  anchor: FloatingMenuPosition,
  topBelowOffset: number
): React.CSSProperties {
  const containerRect = container.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();

  const padding = 8;

  const left = clamp(
    anchor.anchorLeft - menuRect.width / 2,
    padding,
    containerRect.width - menuRect.width - padding
  );

  const topAbove = anchor.anchorTop - menuRect.height - 10;
  const topBelow = anchor.anchorTop + topBelowOffset;

  const top =
    topAbove >= padding
      ? topAbove
      : Math.min(topBelow, containerRect.height - menuRect.height - padding);

  return {
    left: `${left}px`,
    top: `${Math.max(padding, top)}px`,
  };
}