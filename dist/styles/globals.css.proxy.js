// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins\");\nhtml,\nbody {\n  font-family: sans-serif;\n  font-size: 14px;\n}\n@media (min-width: 601px) {\n  html,\nbody {\n    font-size: clamp(16px, 1vw, 1vw);\n  }\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.5rem;\n}\n\nbody {\n  overflow-x: hidden;\n  background: #2d3e86;\n}\n\nh1, h2, h3 {\n  color: #fff;\n}\n\np,\na {\n  color: #eee;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}