import "./NLPAnnotator.css";
import { Annotation, ColorPalette, LabelColor, Props, Segment, SelectionRange, SelectionWithComposedRanges, FloatingMenuPosition } from "./types/types";
import {
  FC,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { buildResolvedPalette, getDefaultPalette } from "./utils/styling";


function normalizeAnnotations(text: string, annotations: Annotation[]): Annotation[] {
  const sorted = [...annotations]
    .filter(
      (ann) =>
        Number.isInteger(ann.start) &&
        Number.isInteger(ann.end) &&
        ann.start >= 0 &&
        ann.end >= ann.start &&
        ann.end < text.length
    )
    .sort((a, b) => a.start - b.start);

  const result: Annotation[] = [];
  let lastEnd = -1;

  for (const ann of sorted) {
    if (ann.start <= lastEnd) continue;

    result.push({
      ...ann,
      text: text.slice(ann.start, ann.end + 1),
    });
    lastEnd = ann.end;
  }

  return result;
}

function buildSegments(text: string, annotations: Annotation[]): Segment[] {
  const normalized = normalizeAnnotations(text, annotations);
  const segments: Segment[] = [];

  let pos = 0;

  for (const ann of normalized) {
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

    pos = ann.end + 1;
  }

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

function clearSelection(): void {
  const sel = window.getSelection();
  if (sel) sel.removeAllRanges();
}

function overlapsExisting(annotations: Annotation[], start: number, end: number): boolean {
  return annotations.some((a) => !(end < a.start || start > a.end));
}

function clamp(value: number, min: number, max: number): number {
  if (max < min) return min;
  return Math.min(Math.max(value, min), max);
}

function getPlainSegmentElement(node: Node): HTMLElement | null {
  if (node.nodeType === Node.ELEMENT_NODE) {
    return (node as HTMLElement).closest(
      '[data-segment-type="plain"]'
    ) as HTMLElement | null;
  }

  return node.parentElement?.closest(
    '[data-segment-type="plain"]'
  ) as HTMLElement | null;
}

function getLocalOffset(
  segmentEl: HTMLElement,
  node: Node,
  offset: number
): number | null {
  try {
    const r = document.createRange();
    r.setStart(segmentEl, 0);
    r.setEnd(node, offset);
    return r.toString().length;
  } catch {
    return null;
  }
}

function getSelectionOffsets(container: HTMLElement): SelectionRange | null {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return null;

  const selection = sel as SelectionWithComposedRanges;
  const root = container.getRootNode();
  const shadowRoots = root instanceof ShadowRoot ? [root] : [];

  let range: StaticRange | Range | null = null;

  if (typeof selection.getComposedRanges === "function") {
    const ranges = selection.getComposedRanges({ shadowRoots });
    range = ranges?.[0] ?? null;
  } else if (selection.rangeCount > 0) {
    range = selection.getRangeAt(0);
  }

  if (range == null) return null;

  const selectedText = selection.toString();
  if (!selectedText || !selectedText.trim()) return null;

  const startEl = getPlainSegmentElement(range.startContainer);
  const endEl = getPlainSegmentElement(range.endContainer);

  if (!startEl || !endEl) return null;
  if (startEl !== endEl) return null;

  const segmentStart = Number(startEl.dataset.start);
  if (Number.isNaN(segmentStart)) return null;

  const localStart = getLocalOffset(
    startEl,
    range.startContainer,
    range.startOffset
  );
  const localEnd = getLocalOffset(
    startEl,
    range.endContainer,
    range.endOffset
  );

  if (localStart == null || localEnd == null) return null;

  const start = segmentStart + Math.min(localStart, localEnd);
  const end = segmentStart + Math.max(localStart, localEnd) - 1;

  if (end < start) return null;

  return {
    start,
    end,
    text: selectedText,
  };
}

function getSelectionMenuPosition(container: HTMLElement): FloatingMenuPosition | null {
  const sel = container.ownerDocument.getSelection();
  if (!sel) return null;

  const selection = sel as SelectionWithComposedRanges;
  let range: Range | null = null;

  if (typeof selection.getComposedRanges === "function") {
    const root = container.getRootNode();
    const shadowRoots = root instanceof ShadowRoot ? [root] : [];
    const composed = selection.getComposedRanges({ shadowRoots });
    const staticRange = composed?.[0];

    if (staticRange) {
      try {
        const r = container.ownerDocument.createRange();
        r.setStart(staticRange.startContainer, staticRange.startOffset);
        r.setEnd(staticRange.endContainer, staticRange.endOffset);
        range = r;
      } catch {
        return null;
      }
    }
  } else if (selection.rangeCount > 0) {
    range = selection.getRangeAt(0);
  }

  if (!range) return null;

  const rect = range.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  if (!rect.width && !rect.height) return null;

  return {
    anchorLeft: rect.left - containerRect.left + rect.width / 2,
    anchorTop: rect.top - containerRect.top,
  };
}

function getElementMenuPosition(
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

function buildLabelColorMap(
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

function getFallbackColor(): LabelColor {
  return {
    bg: "var(--st-secondary-background-color)",
    fg: "var(--st-primary-color)",
    border: "var(--st-primary-color)",
  };
}

function getColorForLabelFromMap(
  label: string,
  labelColorMap: Map<string, LabelColor>,
  activePalette: LabelColor[]
): LabelColor {
  return labelColorMap.get(label) ?? activePalette[0] ?? getFallbackColor();
}

function matchesLabel(label: string, query: string): boolean {
  if (!query.trim()) return true;
  return label.toLowerCase().includes(query.trim().toLowerCase());
}

function filteredLabelsKey(labels: string[], labelSearch: string): string {
  return `${labels.join("||")}__${labelSearch}`;
}

const NLPAnnotator: FC<Props> = ({
  text,
  labels: initialLabels,
  annotations: initialAnnotations,
  allow_runtime_labels,
  readonly,
  setStateValue,
  colorPalette,
  themeMode,
}): ReactElement => {
  const [annotations, setAnnotations] = useState<Annotation[]>(
    normalizeAnnotations(text, initialAnnotations)
  );
  const [labels, setLabels] = useState<string[]>(initialLabels);
  const [selection, setSelection] = useState<SelectionRange | null>(null);
  const [selectionMenuPosition, setSelectionMenuPosition] =
    useState<FloatingMenuPosition | null>(null);
  const [annotationMenuPosition, setAnnotationMenuPosition] =
    useState<FloatingMenuPosition | null>(null);
  const [labelSearch, setLabelSearch] = useState("");
  const [newLabel, setNewLabel] = useState("");
  const [selectedAnnotationId, setSelectedAnnotationId] = useState<string | null>(null);
  const [selectionMenuStyle, setSelectionMenuStyle] = useState<React.CSSProperties>();
  const [annotationMenuStyle, setAnnotationMenuStyle] = useState<React.CSSProperties>();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const labelSearchInputRef = useRef<HTMLInputElement | null>(null);
  const selectionMenuRef = useRef<HTMLDivElement | null>(null);
  const annotationMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setAnnotations(normalizeAnnotations(text, initialAnnotations));
    setLabels(initialLabels);
    setSelection(null);
    setLabelSearch("");
    setNewLabel("");
    setSelectedAnnotationId(null);
    setSelectionMenuPosition(null);
    setAnnotationMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setAnnotationMenuStyle(undefined);
    clearSelection();
  }, [text, initialLabels, initialAnnotations]);

  useEffect(() => {
    setStateValue("annotations", annotations);
    setStateValue("selection", selection);
    setStateValue("labels", labels);
  }, [annotations, selection, labels, setStateValue]);

  useLayoutEffect(() => {
    if (selection && selectionMenuPosition) {
      labelSearchInputRef.current?.focus();
    }
  }, [selection, selectionMenuPosition]);

  useLayoutEffect(() => {
    if (!containerRef.current || !selectionMenuRef.current || !selectionMenuPosition) {
      setSelectionMenuStyle(undefined);
      return;
    }

    const container = containerRef.current;
    const menu = selectionMenuRef.current;

    const containerRect = container.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    const padding = 8;
    const left = clamp(
      selectionMenuPosition.anchorLeft - menuRect.width / 2,
      padding,
      containerRect.width - menuRect.width - padding
    );

    const topAbove = selectionMenuPosition.anchorTop - menuRect.height - 10;
    const topBelow = selectionMenuPosition.anchorTop + 24;

    const top =
      topAbove >= padding
        ? topAbove
        : Math.min(topBelow, containerRect.height - menuRect.height - padding);

    setSelectionMenuStyle({
      left: `${left}px`,
      top: `${Math.max(padding, top)}px`,
    });
  }, [selectionMenuPosition, selection, labelSearch, filteredLabelsKey(labels, labelSearch)]);

  useLayoutEffect(() => {
    if (!containerRef.current || !annotationMenuRef.current || !annotationMenuPosition) {
      setAnnotationMenuStyle(undefined);
      return;
    }

    const container = containerRef.current;
    const menu = annotationMenuRef.current;

    const containerRect = container.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    const padding = 8;
    const left = clamp(
      annotationMenuPosition.anchorLeft - menuRect.width / 2,
      padding,
      containerRect.width - menuRect.width - padding
    );

    const topAbove = annotationMenuPosition.anchorTop - menuRect.height - 10;
    const topBelow = annotationMenuPosition.anchorTop + 12;

    const top =
      topAbove >= padding
        ? topAbove
        : Math.min(topBelow, containerRect.height - menuRect.height - padding);

    setAnnotationMenuStyle({
      left: `${left}px`,
      top: `${Math.max(padding, top)}px`,
    });
  }, [annotationMenuPosition, selectedAnnotationId]);

  useEffect(() => {
    const handleDocumentMouseDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!rootRef.current || !target) return;

      if (!rootRef.current.contains(target)) {
        setSelection(null);
        setSelectedAnnotationId(null);
        setSelectionMenuPosition(null);
        setAnnotationMenuPosition(null);
        setSelectionMenuStyle(undefined);
        setAnnotationMenuStyle(undefined);
        setLabelSearch("");
        clearSelection();
      }
    };

    document.addEventListener("mousedown", handleDocumentMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseDown);
    };
  }, []);

  const resolvedPalette = useMemo(
    () => buildResolvedPalette(colorPalette),
    [colorPalette]
  );

  const activePalette = useMemo(
    () => (themeMode === "dark" ? resolvedPalette.dark : resolvedPalette.light),
    [themeMode, resolvedPalette]
  );

  const allKnownLabels = useMemo(
    () =>
      Array.from(
        new Set([
          ...labels,
          ...annotations.map((ann) => ann.label),
          ...initialLabels,
          ...initialAnnotations.map((ann) => ann.label),
        ])
      ),
    [labels, annotations, initialLabels, initialAnnotations]
  );

  const labelColorMap = useMemo(
    () => buildLabelColorMap(allKnownLabels, activePalette),
    [allKnownLabels, activePalette]
  );

  const segments = useMemo(
    () => buildSegments(text, annotations),
    [text, annotations]
  );

  const filteredLabels = useMemo(
    () => labels.filter((label) => matchesLabel(label, labelSearch)),
    [labels, labelSearch]
  );

  function closeAllMenus() {
    setSelection(null);
    setSelectedAnnotationId(null);
    setSelectionMenuPosition(null);
    setAnnotationMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setAnnotationMenuStyle(undefined);
    setLabelSearch("");
    clearSelection();
  }

  const handleMouseUp = () => {
    if (readonly || !containerRef.current) return;

    requestAnimationFrame(() => {
      if (!containerRef.current) return;

      const sel = getSelectionOffsets(containerRef.current);
      if (!sel) return;

      if (overlapsExisting(annotations, sel.start, sel.end)) {
        setSelection(null);
        setSelectionMenuPosition(null);
        setSelectionMenuStyle(undefined);
        setLabelSearch("");
        clearSelection();
        return;
      }

      const pos = getSelectionMenuPosition(containerRef.current);
      setSelectedAnnotationId(null);
      setAnnotationMenuPosition(null);
      setAnnotationMenuStyle(undefined);
      setSelection(sel);
      setSelectionMenuPosition(pos);
      setLabelSearch("");
    });
  };

  const createAnnotation = (label: string) => {
    if (readonly || !selection || !label.trim()) return;

    if (overlapsExisting(annotations, selection.start, selection.end)) {
      closeAllMenus();
      return;
    }

    const newAnn: Annotation = {
      id: crypto.randomUUID(),
      start: selection.start,
      end: selection.end,
      label: label.trim(),
      text: text.slice(selection.start, selection.end + 1),
    };

    setAnnotations((prev) => normalizeAnnotations(text, [...prev, newAnn]));
    setSelection(null);
    setSelectionMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setLabelSearch("");
    clearSelection();
  };

  const removeSelectedAnnotation = () => {
    if (readonly || !selectedAnnotationId) return;

    setAnnotations((prev) => prev.filter((ann) => ann.id !== selectedAnnotationId));
    setSelectedAnnotationId(null);
    setAnnotationMenuPosition(null);
    setAnnotationMenuStyle(undefined);
    setSelection(null);
    setSelectionMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setLabelSearch("");
    clearSelection();
  };

  const addLabel = () => {
    if (!allow_runtime_labels || readonly) return;

    const trimmed = newLabel.trim();
    if (!trimmed || labels.includes(trimmed)) return;

    setLabels((prev) => [...prev, trimmed]);
    setNewLabel("");
  };

  const removeLabel = (label: string) => {
    if (!allow_runtime_labels || readonly) return;

    setLabels((prev) => prev.filter((l) => l !== label));
    setAnnotations((prev) => prev.filter((ann) => ann.label !== label));

    if (
      selectedAnnotationId &&
      annotations.some(
        (ann) => ann.id === selectedAnnotationId && ann.label === label
      )
    ) {
      setSelectedAnnotationId(null);
      setAnnotationMenuPosition(null);
      setAnnotationMenuStyle(undefined);
    }

    setSelection(null);
    setSelectionMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setLabelSearch("");
    clearSelection();
  };

  return (
    <div ref={rootRef} className="nlp-annotator">
      <h3 className="nlp-annotator__section-title">Labels</h3>

      {allow_runtime_labels && (
        <div className="nlp-annotator__label-controls">
          <input
            type="text"
            placeholder="Add label"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addLabel();
            }}
            disabled={readonly}
            className="nlp-annotator__input"
          />
          <button
            onClick={addLabel}
            disabled={readonly}
            className="nlp-annotator__button nlp-annotator__button--secondary"
          >
            Add
          </button>
        </div>
      )}

      <div className="nlp-annotator__chips">
        {labels.map((label) => {
          const colors = getColorForLabelFromMap(label, labelColorMap, activePalette);

          return (
            <div
              key={label}
              className="nlp-annotator__chip"
              style={
                {
                  "--label-bg": colors.bg,
                  "--label-fg": colors.fg,
                  "--label-border": colors.border,
                } as React.CSSProperties
              }
            >
              <span>{label}</span>
              {allow_runtime_labels && !readonly && (
                <button
                  onClick={() => removeLabel(label)}
                  className="nlp-annotator__chip-remove"
                  aria-label={`Remove label ${label}`}
                >
                  ×
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="nlp-annotator__text-section">
        <h3 className="nlp-annotator__section-title">Text</h3>

        <div
          ref={containerRef}
          onMouseUp={handleMouseUp}
          className="nlp-annotator__text-container"
          data-readonly={readonly ? "true" : "false"}
        >
          {segments.map((seg, i) => {
            if (seg.type === "plain") {
              return (
                <span
                  key={`plain-${i}-${seg.start}`}
                  data-segment-type="plain"
                  data-start={seg.start}
                  data-end={seg.end}
                  className="nlp-annotator__plain-segment"
                >
                  {seg.text}
                </span>
              );
            }

            const ann = seg.annotation;
            const colors = getColorForLabelFromMap(
              ann.label,
              labelColorMap,
              activePalette
            );
            const isSelected = ann.id === selectedAnnotationId;

            return (
              <span
                key={ann.id}
                data-annotation-id={ann.id}
                onClick={(e) => {
                  if (readonly || !containerRef.current) return;

                  e.stopPropagation();
                  clearSelection();
                  setSelection(null);
                  setSelectionMenuPosition(null);
                  setSelectionMenuStyle(undefined);
                  setLabelSearch("");
                  setSelectedAnnotationId(ann.id);
                  setAnnotationMenuPosition(
                    getElementMenuPosition(containerRef.current, e.currentTarget)
                  );
                }}
                className={`nlp-annotator__annotation ${isSelected ? "is-selected" : ""}`}
                style={
                  {
                    "--label-bg": colors.bg,
                    "--label-fg": colors.fg,
                    "--label-border": colors.border,
                  } as React.CSSProperties
                }
              >
                <span className="nlp-annotator__annotation-text">{ann.text}</span>
                <span className="nlp-annotator__annotation-label">{ann.label}</span>
              </span>
            );
          })}

          {selection && selectionMenuPosition && !readonly && (
            <div
              ref={selectionMenuRef}
              onMouseDown={(e) => e.stopPropagation()}
              className="nlp-annotator__menu nlp-annotator__menu--selection"
              style={selectionMenuStyle}
            >
              <div className="nlp-annotator__menu-caption">
                Annotate:{" "}
                <span className="nlp-annotator__menu-selection-text">
                  {selection.text}
                </span>
              </div>

              <input
                ref={labelSearchInputRef}
                type="text"
                placeholder="Search label..."
                value={labelSearch}
                onChange={(e) => setLabelSearch(e.target.value)}
                onMouseDown={(e) => e.stopPropagation()}
                className="nlp-annotator__input nlp-annotator__input--menu"
              />

              <div className="nlp-annotator__menu-chip-list">
                {filteredLabels.length > 0 ? (
                  filteredLabels.map((label) => {
                    const colors = getColorForLabelFromMap(
                      label,
                      labelColorMap,
                      activePalette
                    );

                    return (
                      <button
                        key={label}
                        onClick={() => createAnnotation(label)}
                        className="nlp-annotator__menu-chip"
                        style={
                          {
                            "--label-bg": colors.bg,
                            "--label-fg": colors.fg,
                            "--label-border": colors.border,
                          } as React.CSSProperties
                        }
                      >
                        {label}
                      </button>
                    );
                  })
                ) : (
                  <div className="nlp-annotator__menu-empty">No matching labels</div>
                )}
              </div>

              <div className="nlp-annotator__menu-footer">
                <button
                  onClick={() => {
                    setSelection(null);
                    setSelectionMenuPosition(null);
                    setSelectionMenuStyle(undefined);
                    setLabelSearch("");
                    clearSelection();
                  }}
                  className="nlp-annotator__button nlp-annotator__button--ghost"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {selectedAnnotationId && annotationMenuPosition && !readonly && (
            <div
              ref={annotationMenuRef}
              onMouseDown={(e) => e.stopPropagation()}
              className="nlp-annotator__menu nlp-annotator__menu--delete"
              style={annotationMenuStyle}
            >
              <button
                onClick={removeSelectedAnnotation}
                aria-label="Delete annotation"
                title="Delete annotation"
                className="nlp-annotator__delete-button"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NLPAnnotator;