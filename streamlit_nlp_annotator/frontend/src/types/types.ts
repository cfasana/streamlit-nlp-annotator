import { FrontendRendererArgs } from "@streamlit/component-v2-lib";

/**
 * Represents a single annotation applied to the source text.
 *
 * Important:
 * - `start` and `end` are both inclusive indices.
 * - `text` should always match `sourceText.slice(start, end + 1)`.
 *
 * Example:
 * If the source text is `"hello"` and the annotation covers `"ell"`,
 * then:
 * - `start = 1`
 * - `end = 3`
 * - `text = "ell"`
 */
export type Annotation = {
  /** Stable unique identifier for the annotation. */
  id: string;

  /** Inclusive start index in the source text. */
  start: number;

  /** Inclusive end index in the source text. */
  end: number;

  /** Human-readable label assigned to the annotated text. */
  label: string;

  /** Text slice covered by the annotation. */
  text: string;
};

/**
 * Extends the browser `Selection` API with the optional
 * `getComposedRanges` method.
 *
 * Why this exists:
 * Some environments expose `getComposedRanges` for selection handling
 * across shadow DOM boundaries. Moreover, Streamlit returns a ShadowRoot instead of an HTMLElement for the container for better styling isolation.
 */
export type SelectionWithComposedRanges = Selection & {
  getComposedRanges?: (options?: { shadowRoots?: ShadowRoot[] }) => StaticRange[];
};

/**
 * Color configuration for a single label.
 *
 * - `bg`: background color
 * - `fg`: foreground/text color
 * - `border`: border color
 */
export type LabelColor = {
  bg: string;
  fg: string;
  border: string;
};

/**
 * Theme-aware label palette.
 *
 * Each theme contains a sequence of colors that can be assigned
 * deterministically to labels.
 */
export type ColorPalette = {
  light: LabelColor[];
  dark: LabelColor[];
};

/**
 * Renderable representation of the full text.
 *
 * The text is split into ordered segments so the UI can render
 * plain text and annotated text in a single linear flow.
 */
export type Segment =
  | {
      /**
       * Plain, unannotated text segment.
       */
      type: "plain";

      /** Raw text content of this segment. */
      text: string;

      /** Inclusive start index in the full source text. */
      start: number;

      /** Inclusive end index in the full source text. */
      end: number;
    }
  | {
      /**
       * Annotated text segment.
       */
      type: "annotation";

      /** Annotation metadata for this segment. */
      annotation: Annotation;
    };

/**
 * Represents a text selection converted into source-text coordinates.
 *
 * Important:
 * - `start` and `end` are inclusive.
 * - `text` is the text currently selected by the user.
 */
export type SelectionRange = {
  /** Inclusive start index in the full source text. */
  start: number;

  /** Inclusive end index in the full source text. */
  end: number;

  /** Selected text content. */
  text: string;
};

/**
 * Anchor coordinates for positioning floating menus relative
 * to the annotator container.
 */
export type FloatingMenuPosition = {
  /** Horizontal anchor position inside the container. */
  anchorLeft: number;

  /** Vertical anchor position inside the container. */
  anchorTop: number;
};

/**
 * Props for the main `NLPAnnotator` component.
 */
export type Props = Pick<FrontendRendererArgs<any, any>, "setStateValue"> & {
  /** Full source text to render and annotate. */
  text: string;

  /** Available labels shown in the UI. */
  labels: string[];

  /** Existing annotations already applied to the text. */
  annotations: Annotation[];

  /**
   * Whether users may create or removelabels dynamically at runtime.
   * If false, only labels passed via props are available.
   */
  allow_runtime_labels: boolean;

  /**
   * Whether the component is read-only.
   * In read-only mode, selection and annotation editing are disabled.
   */
  readonly: boolean;

  /**
   * Optional partial color palette.
   * Missing values should be resolved by the styling utility.
   */
  colorPalette?: Partial<ColorPalette>;

  /** Active theme mode used to pick the correct palette branch. */
  themeMode: "light" | "dark";
};