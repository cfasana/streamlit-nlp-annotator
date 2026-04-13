import { FC, ReactElement } from "react";

type AnnotationDeleteMenuProps = {
  annotationMenuRef: React.RefObject<HTMLDivElement>;
  annotationMenuStyle?: React.CSSProperties;
  onDelete: () => void;
};

/**
 * Small floating menu used to delete an existing annotation.
 *
 * This menu appears when the user clicks an annotation span.
 */
const AnnotationDeleteMenu: FC<AnnotationDeleteMenuProps> = ({
  annotationMenuRef,
  annotationMenuStyle,
  onDelete,
}): ReactElement => {
  return (
    <div
      ref={annotationMenuRef}
      onMouseDown={(e) => e.stopPropagation()}
      className="nlp-annotator__menu nlp-annotator__menu--delete"
      style={annotationMenuStyle}
    >
      <button
        onClick={onDelete}
        aria-label="Delete annotation"
        title="Delete annotation"
        className="nlp-annotator__delete-button"
      >
        ×
      </button>
    </div>
  );
};

export default AnnotationDeleteMenu;