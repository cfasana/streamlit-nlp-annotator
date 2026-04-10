# streamlit-nlp-annotator
`streamlit-nlp-annotator` is a Streamlit component for interactive text annotation. This is especially useful for Natural Language Processing (NLP) tasks.

This component was inspired by the following works:
- [st-annotated-text](https://github.com/tvst/st-annotated-text) by [@tvst](https://github.com/tvst)
- [streamlit-annotator](https://github.com/EttoreCaputo/streamlit-annotator) by [@EttoreCaputo](https://github.com/EttoreCaputo)
- [streamlit-annotation-tools](https://github.com/rmarquet21/streamlit-annotation-tools) by [@rmarquet21](https://github.com/rmarquet21)

Unlike existing tools, `streamlit-nlp-annotator` allows a clean inline visualization of annotations.

## 👀 Features

- Inline annotations with visible labels
- Span selection with mouse
- Label assignment via popup
- Editable and removable annotations
- Deterministic color mapping
- JSON-compatible output format
- Supports controlled label sets

## ⚙️ Installation

```bash
pip install streamlit-nlp-annotator
```

## Output format

The component returns a list of annotations.

```python
[
  {
    "start": 21,
    "end": 27,
    "text": "Zurich",
    "label": "city",
  }
]
```

## 🚀 Usage example

```python
import streamlit as st
from streamlit_nlp_annotator import annotate_text

text = "Book a flight from Zurich to Paris tomorrow"

annotations = annotate_text(
    text=text,
    labels=["city", "date"],
)

st.write(annotations)
