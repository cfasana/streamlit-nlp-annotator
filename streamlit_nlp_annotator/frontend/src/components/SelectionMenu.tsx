import { FC, ReactElement } from "react";
import { LabelColor, SelectionRange } from "../types/types";
import { getColorForLabelFromMap } from "../utils/labelColorUtils";

type SelectionMenuProps = {
  selection: SelectionRange;
  filteredLabels: string[];
  labelSearch: string;
  onLabelSearchChange: (value: string) => void;
  onCreateAnnotation: (label: string) => void;
  onCancel: () => void;
  labelSearchInputRef: React.RefObject<HTMLInputElement>;
  selectionMenuRef: React.RefObject<HTMLDivElement>;
  selectionMenuStyle?: React.CSSProperties;
  labelColorMap: Map<string, LabelColor>;
  activePalette: LabelColor[];
};

/**
 * Floating menu shown after the user selects a valid plain-text range.
 *
 * The menu allows the user to:
 * - inspect the selected text
 * - filter labels
 * - apply a label to create a new annotation
 * - cancel the current selection
 */
const SelectionMenu: FC<SelectionMenuProps> = ({
  selection,
  filteredLabels,
  labelSearch,
  onLabelSearchChange,
  onCreateAnnotation,
  onCancel,
  labelSearchInputRef,
  selectionMenuRef,
  selectionMenuStyle,
  labelColorMap,
  activePalette,
}): ReactElement => {
  return (
    <div
      ref={selectionMenuRef}
      onMouseDown={(e) => e.stopPropagation()}
      className="nlp-annotator__menu nlp-annotator__menu--selection"
      style={selectionMenuStyle}
    >
      <div className="nlp-annotator__menu-caption">
        Annotate:{" "}
        <span className="nlp-annotator__menu-selection-text">{selection.text}</span>
      </div>

      <input
        ref={labelSearchInputRef}
        type="text"
        placeholder="Search label..."
        value={labelSearch}
        onChange={(e) => onLabelSearchChange(e.target.value)}
        onMouseDown={(e) => e.stopPropagation()}
        className="nlp-annotator__input nlp-annotator__input--menu"
      />

      <div className="nlp-annotator__menu-chip-list">
        {filteredLabels.length > 0 ? (
          filteredLabels.map((label) => {
            const colors = getColorForLabelFromMap(label, labelColorMap, activePalette);

            return (
              <button
                key={label}
                onClick={() => onCreateAnnotation(label)}
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
          onClick={onCancel}
          className="nlp-annotator__button nlp-annotator__button--ghost"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SelectionMenu;