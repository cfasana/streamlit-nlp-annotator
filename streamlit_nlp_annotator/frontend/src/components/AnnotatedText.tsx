import { FC, ReactElement } from "react";
import {
  Annotation,
  LabelColor,
  Segment,
  SelectionRange,
} from "../types/types";
import { getColorForLabelFromMap } from "../utils/labelColorUtils";
import SelectionMenu from "./SelectionMenu";
import AnnotationDeleteMenu from "./AnnotationDeleteMenu";

type AnnotatedTextProps = {
  segments: Segment[];
  readonly: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  onMouseUp: () => void;
  onAnnotationClick: (
    event: React.MouseEvent<HTMLSpanElement>,
    annotation: Annotation
  ) => void;
  selectedAnnotationId: string | null;
  selection: SelectionRange | null;
  selectionMenuPositionVisible: boolean;
  annotationMenuPositionVisible: boolean;
  selectionMenuRef: React.RefObject<HTMLDivElement>;
  annotationMenuRef: React.RefObject<HTMLDivElement>;
  labelSearchInputRef: React.RefObject<HTMLInputElement>;
  selectionMenuStyle?: React.CSSProperties;
  annotationMenuStyle?: React.CSSProperties;
  filteredLabels: string[];
  labelSearch: string;
  onLabelSearchChange: (value: string) => void;
  onCreateAnnotation: (label: string) => void;
  onCancelSelection: () => void;
  onDeleteAnnotation: () => void;
  labelColorMap: Map<string, LabelColor>;
  activePalette: LabelColor[];
};

/**
 * Renders the main text area, including:
 * - plain text segments
 * - annotation spans
 * - floating selection menu
 * - floating annotation delete menu
 *
 * The component is intentionally mostly presentational:
 * the parent owns the state and passes the relevant callbacks.
 */
const AnnotatedText: FC<AnnotatedTextProps> = ({
  segments,
  readonly,
  containerRef,
  onMouseUp,
  onAnnotationClick,
  selectedAnnotationId,
  selection,
  selectionMenuPositionVisible,
  annotationMenuPositionVisible,
  selectionMenuRef,
  annotationMenuRef,
  labelSearchInputRef,
  selectionMenuStyle,
  annotationMenuStyle,
  filteredLabels,
  labelSearch,
  onLabelSearchChange,
  onCreateAnnotation,
  onCancelSelection,
  onDeleteAnnotation,
  labelColorMap,
  activePalette,
}): ReactElement => {
  return (
    <div className="nlp-annotator__text-section">
      <h3 className="nlp-annotator__section-title">Text</h3>

      <div
        ref={containerRef}
        onMouseUp={onMouseUp}
        className="nlp-annotator__text-container"
        data-readonly={readonly ? "true" : "false"}
      >
        {segments.map((seg, index) => {
          if (seg.type === "plain") {
            return (
              <span
                key={`plain-${index}-${seg.start}`}
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
          const colors = getColorForLabelFromMap(ann.label, labelColorMap, activePalette);
          const isSelected = ann.id === selectedAnnotationId;

          return (
            <span
              key={ann.id}
              data-annotation-id={ann.id}
              onClick={(event) => onAnnotationClick(event, ann)}
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

        {selection && selectionMenuPositionVisible && !readonly && (
          <SelectionMenu
            selection={selection}
            filteredLabels={filteredLabels}
            labelSearch={labelSearch}
            onLabelSearchChange={onLabelSearchChange}
            onCreateAnnotation={onCreateAnnotation}
            onCancel={onCancelSelection}
            labelSearchInputRef={labelSearchInputRef}
            selectionMenuRef={selectionMenuRef}
            selectionMenuStyle={selectionMenuStyle}
            labelColorMap={labelColorMap}
            activePalette={activePalette}
          />
        )}

        {selectedAnnotationId && annotationMenuPositionVisible && !readonly && (
          <AnnotationDeleteMenu
            annotationMenuRef={annotationMenuRef}
            annotationMenuStyle={annotationMenuStyle}
            onDelete={onDeleteAnnotation}
          />
        )}
      </div>
    </div>
  );
};

export default AnnotatedText;