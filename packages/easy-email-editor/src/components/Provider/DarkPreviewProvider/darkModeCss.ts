export const DARK_PREVIEW_CSS_RAW = `
:root { color-scheme: dark; }
div[role="article"] {
  background-color: #1e1e1e !important;
  background: #1e1e1e !important;
}
div[role="article"] table, div[role="article"] tbody,
div[role="article"] tr, div[role="article"] td,
div[role="article"] th, div[role="article"] div {
  background-color: #2d2d2d !important;
  background: #2d2d2d !important;
}
div[role="article"] div, div[role="article"] td,
div[role="article"] th, div[role="article"] p,
div[role="article"] span, div[role="article"] li,
div[role="article"] ul, div[role="article"] ol,
div[role="article"] strong, div[role="article"] b,
div[role="article"] em, div[role="article"] i,
div[role="article"] font, div[role="article"] h1,
div[role="article"] h2, div[role="article"] h3,
div[role="article"] h4, div[role="article"] h5,
div[role="article"] h6 {
  color: #ffffff !important;
}
div[role="article"] a, div[role="article"] a span {
  color: #5b9bd5 !important;
}
div[role="article"] table, div[role="article"] td,
div[role="article"] th, div[role="article"] hr {
  border-color: #444 !important;
}
div[role="article"] img { opacity: 1 !important; }
`;

export const DARK_PREVIEW_CSS = `<style data-dark-preview>${DARK_PREVIEW_CSS_RAW}</style>`;

export const DARK_EDITOR_CSS_RAW = `
.node-type-page { background-color: #1e1e1e !important; }
.node-type-page table, .node-type-page tbody,
.node-type-page tr, .node-type-page td,
.node-type-page th {
  background-color: #2d2d2d !important;
}
.node-type-page .email-block > table,
.node-type-page .email-block > div:not([id*="InteractivePrompt"]) {
  background-color: #2d2d2d !important;
}
[id*="InteractivePrompt"] {
  background-color: transparent !important;
  background: transparent !important;
}
.node-type-page div:not([id*="InteractivePrompt"]),
.node-type-page td, .node-type-page th,
.node-type-page p, .node-type-page span,
.node-type-page li, .node-type-page ul,
.node-type-page ol, .node-type-page strong,
.node-type-page b, .node-type-page em,
.node-type-page i, .node-type-page font,
.node-type-page h1, .node-type-page h2,
.node-type-page h3, .node-type-page h4,
.node-type-page h5, .node-type-page h6 {
  color: #ffffff !important;
}
.node-type-page a, .node-type-page a span {
  color: #5b9bd5 !important;
}
.node-type-page table, .node-type-page td,
.node-type-page th, .node-type-page hr {
  border-color: #444 !important;
}
.node-type-page img { opacity: 1 !important; }
`;
