// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins\");\n.grid {\n  display: grid;\n  grid-gap: 2.5em;\n}\n@media (min-width: 601px) {\n  .grid.two {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 601px) {\n  .grid.three {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 601px) {\n  .grid.four {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.overlay {\n  position: relative;\n  z-index: 1;\n}\n.overlay:after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: rgba(45, 62, 134, 0.25);\n  z-index: -1;\n}\n\n.background {\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}