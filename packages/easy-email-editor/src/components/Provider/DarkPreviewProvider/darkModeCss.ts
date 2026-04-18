export const DEFAULT_TEXT_COLOR = '#000000';
export const DARK_TEXT_COLOR = '#ffffff';

const PREVIEW_BASE_CSS_RAW = `
div[role="article"] {
  padding-bottom: 100px;
  box-sizing: border-box;
}
`;

export const PREVIEW_BASE_CSS = `<style data-preview-base>${PREVIEW_BASE_CSS_RAW}</style>`;

const DARK_PREVIEW_CSS_RAW = `
:root { color-scheme: dark; }
div[role="article"] {
  background-color: #585652 !important;
  background: #585652 !important;
  color: #ffffff !important;
}
div[role="article"] .mj-body,
div[role="article"] .mj-body > div,
div[role="article"] .mj-body > table,
div[role="article"] .mj-body > table > tbody,
div[role="article"] .mj-body > table > tbody > tr,
div[role="article"] .mj-body > table > tbody > tr > td {
  background-color: #585652 !important;
  background: #585652 !important;
}
div[role="article"] a:not([style*='color']),
div[role="article"] a span:not([style*='color']) {
  color: #5b9bd5 !important;
}
div[role="article"] table, div[role="article"] td,
div[role="article"] th, div[role="article"] hr {
  border-color: #444 !important;
}
div[role="article"] td:has(> .mj-hero-content),
div[role="article"] tr:has(> td > .mj-hero-content),
div[role="article"] tbody:has(> tr > td > .mj-hero-content),
div[role="article"] table:has(> tbody > tr > td > .mj-hero-content),
div[role="article"] div:has(> table > tbody > tr > td > .mj-hero-content),
div[role="article"] .mj-hero-content {
  background-color: #1e1e1e !important;
  background: #1e1e1e !important;
}
div[role="article"] img { opacity: 1 !important; }
`;

export const DARK_PREVIEW_CSS = `<style data-dark-preview>${DARK_PREVIEW_CSS_RAW}</style>`;

export const DARK_EDITOR_CSS_RAW = `
html, body {
  background-color: #ffffff !important;
}
.node-type-page {
  background-color: #585652 !important;
  background: #585652 !important;
  color: #ffffff !important;
}
.node-type-page > div:not([id*="InteractivePrompt"]),
.node-type-page > table,
.node-type-page > table > tbody,
.node-type-page > table > tbody > tr,
.node-type-page > table > tbody > tr > td {
  background-color: #585652 !important;
  background: #585652 !important;
}
.node-type-page :is(.node-type-hero, .node-type-advanced_hero).email-block,
.node-type-page :is(.node-type-hero, .node-type-advanced_hero).email-block > div:not([id*="InteractivePrompt"]),
.node-type-page :is(.node-type-hero, .node-type-advanced_hero).email-block > table,
.node-type-page :is(.node-type-hero, .node-type-advanced_hero).email-block > table > tbody,
.node-type-page :is(.node-type-hero, .node-type-advanced_hero).email-block > table > tbody > tr,
.node-type-page :is(.node-type-hero, .node-type-advanced_hero).email-block > table > tbody > tr > td,
.node-type-page :is(.node-type-hero, .node-type-advanced_hero).email-block > table > tbody > tr > td[style*='background:'],
.node-type-page :is(.node-type-hero, .node-type-advanced_hero).email-block > table > tbody > tr > td[style*='background-color:'] {
  background-color: #1e1e1e !important;
  background: #1e1e1e !important;
}

[id*="InteractivePrompt"] {
  background-color: transparent !important;
  background: transparent !important;
}
.node-type-page a:not([style*='color']),
.node-type-page a span:not([style*='color']) {
  color: #5b9bd5 !important;
}
.node-type-page table, .node-type-page td,
.node-type-page th, .node-type-page hr {
  border-color: #444 !important;
}
.node-type-page img { opacity: 1 !important; }
`;
