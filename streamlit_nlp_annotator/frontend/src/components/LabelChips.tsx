import { FC, ReactElement } from "react";
import { LabelColor } from "../types/types";
import { getColorForLabelFromMap } from "../utils/labelColorUtils";

type LabelChipsProps = {
  labels: string[];
  allowRuntimeLabels: boolean;
  readonly: boolean;
  labelColorMap: Map<string, LabelColor>;
  activePalette: LabelColor[];
  onRemoveLabel: (label: string) => void;
};

/**
 * Renders the list of available labels as colored chips.
 *
 * Each chip may optionally expose a remove button when:
 * - runtime labels are enabled
 * - the component is not read-only
 */
const LabelChips: FC<LabelChipsProps> = ({
  labels,
  allowRuntimeLabels,
  readonly,
  labelColorMap,
  activePalette,
  onRemoveLabel,
}): ReactElement => {
  return (
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

            {allowRuntimeLabels && !readonly && (
              <button
                onClick={() => onRemoveLabel(label)}
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
  );
};

export default LabelChips;