// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\nbody {\n  min-height: 100vh;\n  scroll-padding-top: 100px;\n  scroll-behavior: smooth;\n  line-sizing: normal;\n  text-rendering: optimizeSpeed;\n  line-height: 1.6;\n  min-width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  font-size: 16px;\n}\n\nsection {\n  padding: 2.5em;\n}\n@media (min-width: 601px) {\n  section {\n    padding: 5em;\n  }\n}\n\na {\n  text-decoration: none;\n  display: block;\n}\n\n[type=submit],\n[type=email],\n[type=tel],\n[type=passowrd],\n[type=number],\ninput:not([type]),\n[type=date],\nselect,\ntextarea {\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n[type=submit]:focus,\n[type=email]:focus,\n[type=tel]:focus,\n[type=passowrd]:focus,\n[type=number]:focus,\ninput:not([type]):focus,\n[type=date]:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n}\n\nselect {\n  appearance: none;\n}\n\nlabel {\n  display: block;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nh1,\nh2,\nh3,\np {\n  max-width: 80ch;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\n[type=checkbox],\n[type=radio] {\n  margin-right: 0.5em;\n  transform: scale(1.25);\n}\n\niframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\ntextarea {\n  resize: none;\n  width: 100%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}