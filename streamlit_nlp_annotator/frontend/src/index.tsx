import {
  FrontendRenderer,
  FrontendRendererArgs,
} from "@streamlit/component-v2-lib";
import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";

import NLPAnnotator, {
} from "./NLPAnnotator";


const reactRoots: WeakMap<FrontendRendererArgs["parentElement"], Root> =
  new WeakMap();

/**
 * A Streamlit frontend renderer that renders the NLPAnnotator component.
 *
 * This renderer is responsible for creating a React root element and rendering the NLPAnnotator component within it.
 * It also handles the cleanup of the React root element when the component is unmounted.
 *
 * @param {FrontendRendererArgs} args The arguments passed to the frontend renderer.
 * @returns {() => void} A function that is called when the component is unmounted.
 */
const NLPAnnotatorRoot: FrontendRenderer<
any, any> = (args) => {
  // Destructure the arguments passed to the frontend renderer.
  const { data, parentElement, setStateValue } = args;
  // Find the root element within the parent element where the React component will be rendered.
  const rootElement = parentElement.querySelector(".react-root");

  // If the root element is not found, throw an error.
  if (!rootElement) {
    throw new Error("Unexpected error: React root element not found");
  }

  // Check if a React root already exists for the parent element. If not, create a new React root and store it in the WeakMap.
  let reactRoot = reactRoots.get(parentElement);
  if (!reactRoot) {
    reactRoot = createRoot(rootElement);
    reactRoots.set(parentElement, reactRoot);
  }

  // Access the data passed from Streamlit on the Python side.
  const { text, labels, annotations, allow_runtime_labels, readonly, colorPalette, themeMode } = data;

  // Render the NLPAnnotator component within the React root.
  reactRoot.render(
    <StrictMode>
      <NLPAnnotator
        setStateValue={setStateValue}
        text={data.text}
        labels={data.labels}
        annotations={data.annotations}
        allow_runtime_labels={data.allow_runtime_labels}
        readonly={data.readonly}
        colorPalette={data.colorPalette}
        themeMode={data.themeMode}
      />
    </StrictMode>,
  );

  // Return a cleanup function that unmounts the React root and removes it from the WeakMap when the component is unmounted.
  return () => {
    const reactRoot = reactRoots.get(parentElement);

    if (reactRoot) {
      reactRoot.unmount();
      reactRoots.delete(parentElement);
    }
  };
};

export default NLPAnnotatorRoot;
