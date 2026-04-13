import { Annotation, Segment } from "../types/types";

/**
 * Checks whether an annotation is valid for the given source text.
 *
 * Validation rules:
 * - `start` and `end` must be integers
 * - `start` must be >= 0
 * - `end` must be >= `start`
 * - `end` must be within the text bounds
 *
 * Note:
 * Annotation indices are inclusive.
 *
 * @param text Full source text.
 * @param ann Annotation candidate to validate.
 * @returns `true` if the annotation boundaries are valid, otherwise `false`.
 */
export function isValidAnnotation(text: string, ann: Annotation): boolean {
  return (
    Number.isInteger(ann.start) &&
    Number.isInteger(ann.end) &&
    ann.start >= 0 &&
    ann.end >= ann.start &&
    ann.end < text.length
  );
}

/**
 * Normalizes a list of annotations for a specific source text.
 *
 * This function performs four steps:
 * 1. Removes invalid annotations
 * 2. Sorts remaining annotations by start index
 * 3. Removes overlapping annotations by keeping the earliest one
 * 4. Recomputes each annotation's `text` field from the source text
 *
 * Overlap policy:
 * If two annotations overlap, the earlier annotation in sorted order wins
 * and the later annotation is discarded.
 *
 * This makes rendering deterministic and avoids ambiguous overlap behavior.
 *
 * @param text Full source text.
 * @param annotations Raw annotation list.
 * @returns A cleaned, sorted, non-overlapping annotation list.
 */
export function normalizeAnnotations(
  text: string,
  annotations: Annotation[]
): Annotation[] {
  const sorted = [...annotations]
    .filter((ann) => isValidAnnotation(text, ann))
    .sort((a, b) => a.start - b.start);

  const result: Annotation[] = [];
  let lastEnd = -1;

  for (const ann of sorted) {
    // If this annotation starts before or inside the previous one,
    // we discard it to preserve a simple non-overlapping model.
    if (ann.start <= lastEnd) {
      continue;
    }

    result.push({
      ...ann,
      text: text.slice(ann.start, ann.end + 1),
    });

    lastEnd = ann.end;
  }

  return result;
}

/**
 * Splits the source text into ordered renderable segments.
 *
 * The returned array contains:
 * - plain segments for unannotated ranges
 * - annotation segments for annotated ranges
 *
 * This representation is useful because the UI can render the text linearly
 * without recalculating boundaries during render.
 *
 * @param text Full source text.
 * @param annotations Existing annotations.
 * @returns Ordered list of plain and annotated segments.
 */
export function buildSegments(text: string, annotations: Annotation[]): Segment[] {
  const normalized = normalizeAnnotations(text, annotations);
  const segments: Segment[] = [];

  let pos = 0;

  for (const ann of normalized) {
    // Emit the unannotated gap before the current annotation, if any.
    if (pos < ann.start) {
      segments.push({
        type: "plain",
        text: text.slice(pos, ann.start),
        start: pos,
        end: ann.start - 1,
      });
    }

    segments.push({
      type: "annotation",
      annotation: {
        ...ann,
        text: text.slice(ann.start, ann.end + 1),
      },
    });

    // Move the cursor to the first character after the annotation.
    pos = ann.end + 1;
  }

  // Emit the remaining trailing plain text after the last annotation.
  if (pos < text.length) {
    segments.push({
      type: "plain",
      text: text.slice(pos),
      start: pos,
      end: text.length - 1,
    });
  }

  return segments;
}

/**
 * Checks whether a proposed inclusive text range overlaps an existing annotation.
 *
 * Two ranges do not overlap only when one is fully before the other.
 *
 * @param annotations Existing annotations.
 * @param start Inclusive start index of the proposed range.
 * @param end Inclusive end index of the proposed range.
 * @returns `true` if the range overlaps any annotation, otherwise `false`.
 */
export function overlapsExisting(
  annotations: Annotation[],
  start: number,
  end: number
): boolean {
  return annotations.some((a) => !(end < a.start || start > a.end));
}