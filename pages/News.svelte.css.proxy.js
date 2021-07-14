// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins\");#news.svelte-uggqs3.svelte-uggqs3.svelte-uggqs3{text-align:center;background:white}#news.svelte-uggqs3 h1.svelte-uggqs3.svelte-uggqs3{letter-spacing:0.25ch}#news.svelte-uggqs3 .filters.svelte-uggqs3.svelte-uggqs3{display:flex;justify-content:center}#news.svelte-uggqs3 .filters a.svelte-uggqs3.svelte-uggqs3{text-decoration:underline}#news.svelte-uggqs3 .filters .svelte-uggqs3+.svelte-uggqs3{margin-left:1em}#news.svelte-uggqs3 .grid.svelte-uggqs3.svelte-uggqs3{padding:1em}@media(min-width: 601px){#news.svelte-uggqs3 .grid.svelte-uggqs3.svelte-uggqs3{padding:5em}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}