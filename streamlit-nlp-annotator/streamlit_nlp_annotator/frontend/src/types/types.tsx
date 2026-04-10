import { FrontendRendererArgs } from "@streamlit/component-v2-lib";

/*
    Annotation defines the structure of an annotation object, which includes:
    - id: A unique identifier for the annotation.
    - start: The starting index of the annotated text (inclusive).
    - end: The ending index of the annotated text (inclusive).
    - label: The label assigned to the annotated text.
    - text: The actual text that has been annotated.
*/
export type Annotation = {
  id: string;
  start: number; // inclusive
  end: number; // inclusive
  label: string;
  text: string;
};

/*
    SelectionWithComposedRanges extends the standard Selection object to include an optional method getComposedRanges,
    which can be used to retrieve an array of StaticRange objects.
    This is particularly useful for handling selections that may span across shadow DOM boundaries, allowing for more
    complex selection scenarios in web applications.
*/
export type SelectionWithComposedRanges = Selection & {
  getComposedRanges?: (options?: { shadowRoots?: ShadowRoot[] }) => StaticRange[];
};

/*
    LabelColor defines the color scheme for a label, including:
    - bg: The background color of the label.
    - fg: The foreground (text) color of the label.
    - border: The border color of the label.
*/
export type LabelColor = {
  bg: string;
  fg: string;
  border: string;
};

/*
    ColorPalette defines a color scheme for both light and dark themes, where each theme has an array of LabelColor objects.
    This allows for consistent styling of labels across different themes in the application.
*/
export type ColorPalette = {
  light: LabelColor[];
  dark: LabelColor[];
};

/* 
    Segment defines the structure of a segment, which can be either plain text or an annotation.
    - If the segment is of type "plain", it includes the text and its start and end indices.
    - If the segment is of type "annotation", it includes an Annotation object.
    This structure allows for a flexible representation of text that can contain both annotated and non-annotated segments.
*/
export type Segment =
  | {
      type: "plain";
      text: string;
      start: number;
      end: number; // inclusive
    }
  | {
      type: "annotation";
      annotation: Annotation;
    };

/*
    SelectionRange defines the structure of a text selection, including:
    - start: The starting index of the selected text.
    - end: The ending index of the selected text.
    - text: The actual text that has been selected.
*/
export type SelectionRange = {
  start: number;
  end: number;
  text: string;
};

/*
    FloatingMenuPosition defines the position of a floating menu, including:
    - anchorLeft: The left position of the anchor element.
    - anchorTop: The top position of the anchor element.
*/
export type FloatingMenuPosition = {
  anchorLeft: number;
  anchorTop: number;
};

/*
    Props defines the props for the NLPAnnotator component, which includes:
    - text: The text to annotate.
    - labels: An array of available labels for annotation.
    - annotations: An array of existing annotations on the text.
    - allow_runtime_labels: A boolean indicating whether runtime labels are allowed.
    - readonly: A boolean indicating whether the component is in readonly mode.
    - colorPalette: An optional color scheme for the component.
    - themeMode: The theme mode for the component, either "light" or "dark".
*/
export type Props = Pick<FrontendRendererArgs<any, any>, "setStateValue"> & {
  text: string;
  labels: string[];
  annotations: Annotation[];
  allow_runtime_labels: boolean;
  readonly: boolean;
  colorPalette?: Partial<ColorPalette>;
  themeMode: "light" | "dark";
};