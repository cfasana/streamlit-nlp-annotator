import "./NLPAnnotator.css";
import {
  Annotation,
  LabelColor,
  Props,
  SelectionRange,
  FloatingMenuPosition,
} from "./types/types";
import {
  FC,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { buildResolvedPalette } from "./utils/stylingUtils";
import {
  buildSegments,
  normalizeAnnotations,
  overlapsExisting,
} from "./utils/annotationUtils";
import {
  clearSelection,
  computeFloatingMenuStyle,
  getElementMenuPosition,
  getSelectionMenuPosition,
  getSelectionOffsets,
} from "./utils/selectionUtils";
import {
  buildLabelColorMap,
  matchesLabel,
} from "./utils/labelColorUtils";
import LabelChips from "./components/LabelChips";
import AnnotatedText from "./components/AnnotatedText";

/**
 * Main NLP text annotation component.
 *
 * Responsibilities:
 * - store annotation and label state
 * - synchronize state with the host application
 * - compute derived structures such as segments and color maps
 * - coordinate floating menus for selection and annotation deletion
 *
 * Design choice:
 * This component owns the interaction state, while smaller child components
 * focus on rendering.
 */
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
  const [selectionMenuStyle, setSelectionMenuStyle] =
    useState<React.CSSProperties>();
  const [annotationMenuStyle, setAnnotationMenuStyle] =
    useState<React.CSSProperties>();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const labelSearchInputRef = useRef<HTMLInputElement | null>(null);
  const selectionMenuRef = useRef<HTMLDivElement | null>(null);
  const annotationMenuRef = useRef<HTMLDivElement | null>(null);

  /**
   * Resets internal state whenever the external text or initial data changes.
   *
   * This ensures the component behaves predictably when the parent replaces
   * the text, labels, or annotation list.
   */
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

  /**
   * Pushes the current component state back to the host environment.
   *
   * This is useful when the Streamlit parent needs to react to:
   * - annotation changes
   * - selection changes
   * - label changes
   */
  useEffect(() => {
    setStateValue("annotations", annotations);
    setStateValue("selection", selection);
    setStateValue("labels", labels);
  }, [annotations, selection, labels, setStateValue]);

  /**
   * Focuses the label-search input whenever the selection menu becomes visible.
   *
   * `useLayoutEffect` is used so the focus happens after layout is ready
   * but before the browser paints another frame.
   */
  useLayoutEffect(() => {
    if (selection && selectionMenuPosition) {
      labelSearchInputRef.current?.focus();
    }
  }, [selection, selectionMenuPosition]);

  /**
   * Recomputes the visual position of the selection menu whenever its anchor
   * or content-relevant dependencies change.
   */
  useLayoutEffect(() => {
    if (!containerRef.current || !selectionMenuRef.current || !selectionMenuPosition) {
      setSelectionMenuStyle(undefined);
      return;
    }

    setSelectionMenuStyle(
      computeFloatingMenuStyle(
        containerRef.current,
        selectionMenuRef.current,
        selectionMenuPosition,
        24
      )
    );
  }, [selectionMenuPosition, selection, labelSearch, labels]);

  /**
   * Recomputes the visual position of the annotation delete menu.
   */
  useLayoutEffect(() => {
    if (!containerRef.current || !annotationMenuRef.current || !annotationMenuPosition) {
      setAnnotationMenuStyle(undefined);
      return;
    }

    setAnnotationMenuStyle(
      computeFloatingMenuStyle(
        containerRef.current,
        annotationMenuRef.current,
        annotationMenuPosition,
        12
      )
    );
  }, [annotationMenuPosition, selectedAnnotationId]);

  /**
   * Closes menus and clears selection when the user clicks outside the annotator.
   */
  useEffect(() => {
    const handleDocumentMouseDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!rootRef.current || !target) {
        return;
      }

      if (!rootRef.current.contains(target)) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleDocumentMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseDown);
    };
  }, []);

  /**
   * Resolves the possibly partial palette into a complete light/dark palette.
   */
  const resolvedPalette = useMemo(
    () => buildResolvedPalette(colorPalette),
    [colorPalette]
  );

  /**
   * Picks the active palette branch based on the current theme mode.
   */
  const activePalette = useMemo(
    () => (themeMode === "dark" ? resolvedPalette.dark : resolvedPalette.light),
    [themeMode, resolvedPalette]
  );

  /**
   * Collects every label the component knows about.
   *
   * Why include labels from annotations and initial props too?
   * Because an annotation may still refer to a label even if the current
   * `labels` state does not explicitly contain it anymore.
   */
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

  /**
   * Stable mapping from label name to color.
   */
  const labelColorMap = useMemo(
    () => buildLabelColorMap(allKnownLabels, activePalette),
    [allKnownLabels, activePalette]
  );

  /**
   * Converts the text + annotations into renderable segments.
   */
  const segments = useMemo(
    () => buildSegments(text, annotations),
    [text, annotations]
  );

  /**
   * Filters the visible labels according to the label search query.
   */
  const filteredLabels = useMemo(
    () => labels.filter((label) => matchesLabel(label, labelSearch)),
    [labels, labelSearch]
  );

  /**
   * Clears selection and closes every floating menu.
   *
   * Centralizing this avoids duplicating the same reset sequence
   * in many event handlers.
   */
  function closeAllMenus(): void {
    setSelection(null);
    setSelectedAnnotationId(null);
    setSelectionMenuPosition(null);
    setAnnotationMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setAnnotationMenuStyle(undefined);
    setLabelSearch("");
    clearSelection();
  }

  /**
   * Handles mouse-up in the text area and tries to convert the browser
   * selection into an annotatable text range.
   */
  function handleMouseUp(): void {
    if (readonly || !containerRef.current) {
      return;
    }

    // Wait one animation frame so the browser selection is fully settled
    // after the mouse-up event before reading it.
    requestAnimationFrame(() => {
      if (!containerRef.current) {
        return;
      }

      const sel = getSelectionOffsets(containerRef.current);
      if (!sel) {
        return;
      }

      // New selections are rejected if they overlap an existing annotation.
      if (overlapsExisting(annotations, sel.start, sel.end)) {
        setSelection(null);
        setSelectionMenuPosition(null);
        setSelectionMenuStyle(undefined);
        setLabelSearch("");
        clearSelection();
        return;
      }

      const pos = getSelectionMenuPosition(containerRef.current);

      // When opening the selection menu we close the annotation delete menu,
      // because only one interaction mode should be active at a time.
      setSelectedAnnotationId(null);
      setAnnotationMenuPosition(null);
      setAnnotationMenuStyle(undefined);

      setSelection(sel);
      setSelectionMenuPosition(pos);
      setLabelSearch("");
    });
  }

  /**
   * Creates a new annotation from the current selection and chosen label.
   *
   * Defensive checks ensure:
   * - the component is not read-only
   * - a valid selection exists
   * - the label is not empty
   * - the selected range still does not overlap an existing annotation
   *
   * The overlap check is repeated here because state may have changed
   * since the selection menu was opened.
   *
   * @param label Label to assign to the current selection.
   */
  function createAnnotation(label: string): void {
    if (readonly || !selection || !label.trim()) {
      return;
    }

    if (overlapsExisting(annotations, selection.start, selection.end)) {
      closeAllMenus();
      return;
    }

    const newAnnotation: Annotation = {
      id: crypto.randomUUID(),
      start: selection.start,
      end: selection.end,
      label: label.trim(),
      text: text.slice(selection.start, selection.end + 1),
    };

    setAnnotations((prev) => normalizeAnnotations(text, [...prev, newAnnotation]));
    setSelection(null);
    setSelectionMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setLabelSearch("");
    clearSelection();
  }

  /**
   * Deletes the currently selected annotation.
   */
  function removeSelectedAnnotation(): void {
    if (readonly || !selectedAnnotationId) {
      return;
    }

    setAnnotations((prev) => prev.filter((ann) => ann.id !== selectedAnnotationId));
    setSelectedAnnotationId(null);
    setAnnotationMenuPosition(null);
    setAnnotationMenuStyle(undefined);
    setSelection(null);
    setSelectionMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setLabelSearch("");
    clearSelection();
  }

  /**
   * Adds a new runtime label to the available label list.
   *
   * The label is ignored if:
   * - runtime labels are disabled
   * - the component is read-only
   * - the input is empty after trimming
   * - the label already exists
   */
  function addLabel(): void {
    if (!allow_runtime_labels || readonly) {
      return;
    }

    const trimmed = newLabel.trim();
    if (!trimmed || labels.includes(trimmed)) {
      return;
    }

    setLabels((prev) => [...prev, trimmed]);
    setNewLabel("");
  }

  /**
   * Removes a label from the available label list and also removes
   * any annotations that currently use that label.
   *
   * Note:
   * This is a destructive operation because annotations with the removed
   * label no longer have a valid label to reference.
   *
   * @param label Label to remove.
   */
  function removeLabel(label: string): void {
    if (!allow_runtime_labels || readonly) {
      return;
    }

    const selectedAnnotation = annotations.find(
      (ann) => ann.id === selectedAnnotationId
    );
    const selectedAnnotationUsesRemovedLabel =
      selectedAnnotation?.label === label;

    setLabels((prev) => prev.filter((existingLabel) => existingLabel !== label));
    setAnnotations((prev) => prev.filter((ann) => ann.label !== label));

    if (selectedAnnotationUsesRemovedLabel) {
      setSelectedAnnotationId(null);
      setAnnotationMenuPosition(null);
      setAnnotationMenuStyle(undefined);
    }

    setSelection(null);
    setSelectionMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setLabelSearch("");
    clearSelection();
  }

  /**
   * Handles clicks on an existing annotation.
   *
   * Clicking an annotation:
   * - clears any text selection
   * - closes the selection menu
   * - marks the annotation as selected
   * - opens the delete menu anchored to the clicked annotation
   *
   * @param event Click event from the annotation span.
   * @param annotation Clicked annotation.
   */
  function handleAnnotationClick(
    event: React.MouseEvent<HTMLSpanElement>,
    annotation: Annotation
  ): void {
    if (readonly || !containerRef.current) {
      return;
    }

    event.stopPropagation();

    clearSelection();
    setSelection(null);
    setSelectionMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setLabelSearch("");

    setSelectedAnnotationId(annotation.id);
    setAnnotationMenuPosition(
      getElementMenuPosition(containerRef.current, event.currentTarget)
    );
  }

  /**
   * Cancels the current text selection and closes the selection menu only.
   */
  function cancelSelection(): void {
    setSelection(null);
    setSelectionMenuPosition(null);
    setSelectionMenuStyle(undefined);
    setLabelSearch("");
    clearSelection();
  }

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
              if (e.key === "Enter") {
                addLabel();
              }
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

      <LabelChips
        labels={labels}
        allowRuntimeLabels={allow_runtime_labels}
        readonly={readonly}
        labelColorMap={labelColorMap}
        activePalette={activePalette as LabelColor[]}
        onRemoveLabel={removeLabel}
      />

      <AnnotatedText
        segments={segments}
        readonly={readonly}
        containerRef={containerRef}
        onMouseUp={handleMouseUp}
        onAnnotationClick={handleAnnotationClick}
        selectedAnnotationId={selectedAnnotationId}
        selection={selection}
        selectionMenuPositionVisible={Boolean(selectionMenuPosition)}
        annotationMenuPositionVisible={Boolean(annotationMenuPosition)}
        selectionMenuRef={selectionMenuRef}
        annotationMenuRef={annotationMenuRef}
        labelSearchInputRef={labelSearchInputRef}
        selectionMenuStyle={selectionMenuStyle}
        annotationMenuStyle={annotationMenuStyle}
        filteredLabels={filteredLabels}
        labelSearch={labelSearch}
        onLabelSearchChange={setLabelSearch}
        onCreateAnnotation={createAnnotation}
        onCancelSelection={cancelSelection}
        onDeleteAnnotation={removeSelectedAnnotation}
        labelColorMap={labelColorMap}
        activePalette={activePalette as LabelColor[]}
      />
    </div>
  );
};

export default NLPAnnotator;