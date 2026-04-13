import streamlit as st
from typing import Any, TypedDict, List, Iterable

out = st.components.v2.component(
    name="streamlit-nlp-annotator.streamlit_nlp_annotator",
    js="index-*.js",
    css="index-*.css",
    html='<div class="react-root"></div>',
)


class Annotation(TypedDict, total=False):
    """
    Represents a single annotation for a text span.
    """
    id: str
    start: int
    end: int
    text: str
    label: str

class AnnotateTextResult(TypedDict, total=False):
    """Represents the result of annotating text."""
    annotations: List[Annotation]
    labels: List[str]
    selection: dict | None

def _get_component_state(key: str | None) -> dict[str, Any] | None:
    """
    Retrieves the component state for a given key.

    Args:
        key (str | None): The key to retrieve the component state for. If None, returns None.

    Returns:
        dict[str, Any] | None: The component state for the given key, or None if the key is not found.
    """
    if not key:
        return None

    state = st.session_state.get(key)
    if state is None:
        return None

    annotations = getattr(state, "annotations", None)
    labels = getattr(state, "labels", None)

    return {
        "annotations": annotations,
        "labels": labels,
    }



def streamlit_nlp_annotator(
    *,
    text: str,
    labels: Iterable[str] | None = None,
    annotations: List[Annotation] | None = None,
    allow_runtime_labels: bool = True,
    readonly: bool = False,
    colorPalette: dict | None = None,
    key: str | None = None,
) -> AnnotateTextResult:
    """
    Renders an NLPAnnotator component for annotating text.

    Args:
        text (str): The text to annotate.
        labels (Iterable[str] | None, optional): The available labels for annotation. Defaults to None.
        annotations (List[Annotation] | None, optional): The existing annotations on the text. Defaults to None.
        allow_runtime_labels (bool, optional): Whether to allow runtime labels. Defaults to True.
        readonly (bool, optional): Whether the component is in readonly mode. Defaults to False.
        colorPalette (dict | None, optional): The color palette for the component. Defaults to None.
        key (str | None, optional): The key to store the component state in the session state. Defaults to None.

    Returns:
        AnnotateTextResult: The rendered NLPAnnotator component.
    """
    initial_labels = [str(x) for x in (labels or [])]
    initial_annotations = annotations or []

    persisted = _get_component_state(key)

    effective_labels = (
        persisted["labels"]
        if persisted and persisted.get("labels") is not None
        else initial_labels
    )
    effective_annotations = (
        persisted["annotations"]
        if persisted and persisted.get("annotations") is not None
        else initial_annotations
    )

    result = out(
        key=key,
        default={
            "annotations": initial_annotations,
            "labels": initial_labels,
            "selection": None,
        },
        data={
            "text": text,
            "labels": effective_labels,
            "annotations": effective_annotations,
            "allow_runtime_labels": allow_runtime_labels,
            "readonly": readonly,
            "colorPalette": colorPalette,
            "themeMode": st.context.theme.type,
        },
        on_annotations_change=lambda: None,
        on_labels_change=lambda: None,
        on_selection_change=lambda: None,
    )
    return result