// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins\");\nhtml,\nbody {\n  font-family: sans-serif;\n  font-size: 14px;\n}\n@media (min-width: 601px) {\n  html,\nbody {\n    font-size: 18px;\n  }\n}\n\nh1 {\n  font-size: 3.5rem;\n}\n\nh2 {\n  font-size: 2.5rem;\n}\n\nh3 {\n  font-size: 1.5rem;\n}\n\nbody {\n  background: #2d3e86;\n  padding-bottom: 2.5em;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np,\na {\n  color: white;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}