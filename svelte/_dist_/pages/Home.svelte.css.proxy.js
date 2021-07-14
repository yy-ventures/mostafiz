// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins\");header.svelte-8ub2mz.svelte-8ub2mz{display:grid;grid-template-columns:1fr 2fr}header.svelte-8ub2mz img.svelte-8ub2mz{width:100%;height:80vh;object-fit:cover}header.svelte-8ub2mz .summary.svelte-8ub2mz{position:relative}header.svelte-8ub2mz .summary.svelte-8ub2mz:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(45, 62, 134, 0.25)}header.svelte-8ub2mz .summary article.svelte-8ub2mz{width:max-content;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}header.svelte-8ub2mz .summary article h5.svelte-8ub2mz{max-width:60ch}header.svelte-8ub2mz .summary article h5.svelte-8ub2mz,header.svelte-8ub2mz .summary article h3.svelte-8ub2mz{color:white}header.svelte-8ub2mz .summary article h5.svelte-8ub2mz{font-size:1em}header.svelte-8ub2mz .summary article h3.svelte-8ub2mz{margin-top:1em;display:inline-block}header.svelte-8ub2mz .summary article h3.svelte-8ub2mz:after{content:\"\";display:block;width:50%;height:0.25em;background:white;margin-top:0.5em}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}