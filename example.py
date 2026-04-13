import streamlit as st
from streamlit_nlp_annotator import streamlit_nlp_annotator

text = """John McCarthy who was born on September 4, 1927 was an American computer scientist and cognitive scientist. \
He was one of the founders of the discipline of artificial intelligence. \
He co-authored the document that coined the term "Artificial intelligence" (AI), developed the programming language family Lisp, \
and significantly influenced the design of the language ALGOL.
"""

default_labels = ["Name", "Date", "Profession", "Programming Language"]
customPalette = {
    "light": [
        {"bg": "#dbeafe", "fg": "#1e3a8a", "border": "#3b82f6"},
        {"bg": "#fee2e2", "fg": "#991b1b", "border": "#ef4444"},
        {"bg": "#d1fae5", "fg": "#065f46", "border": "#10b981"}, 
        {"bg": "#fef3c7", "fg": "#92400e", "border": "#f59e0b"},
        {"bg": "#ede9fe", "fg": "#5b21b6", "border": "#8b5cf6"},
    ],
    "dark": [
        {"bg": "#1e40af", "fg": "#bfdbfe", "border": "#3b82f6"}, 
        {"bg": "#7f1d1d", "fg": "#fecaca", "border": "#ef4444"}, 
        {"bg": "#064e3b", "fg": "#a7f3d0", "border": "#10b981"},  
        {"bg": "#78350f", "fg": "#fde68a", "border": "#f59e0b"}, 
        {"bg": "#4c1d95", "fg": "#ddd6fe", "border": "#8b5cf6"}, 
    ],
}

st.header("Streamlit NLP Annotator")
st.subheader("Annotator with default color palette and fixed labels")
default_result = streamlit_nlp_annotator(text = text, labels=default_labels, allow_runtime_labels=False, key="nlp-annotator-default")
with st.expander("Annotations:"):
    st.write(default_result)

st.subheader("Annotator with custom color palette and runtime labels")

custom_result = streamlit_nlp_annotator(text = text, labels=default_labels[:-1], allow_runtime_labels=True, colorPalette = customPalette, key="nlp-annotator-custom")
with st.expander("Annotations:"):
    st.write(custom_result)