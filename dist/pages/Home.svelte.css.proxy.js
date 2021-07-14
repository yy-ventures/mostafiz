// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins\");.home_header.svelte-1j0emdm.svelte-1j0emdm{display:grid;grid-template-columns:1fr 2fr}.home_header.svelte-1j0emdm img.svelte-1j0emdm{width:100%;height:80vh;object-fit:cover}.home_header.svelte-1j0emdm .summary.svelte-1j0emdm{position:relative}.home_header.svelte-1j0emdm .summary.svelte-1j0emdm:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(45, 62, 134, 0.25)}.home_header.svelte-1j0emdm .summary .content.svelte-1j0emdm{width:max-content;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.home_header.svelte-1j0emdm .summary .content h5.svelte-1j0emdm{max-width:60ch}.home_header.svelte-1j0emdm .summary .content h5.svelte-1j0emdm,.home_header.svelte-1j0emdm .summary .content h3.svelte-1j0emdm{color:white}.home_header.svelte-1j0emdm .summary .content h5.svelte-1j0emdm{font-size:1em}.home_header.svelte-1j0emdm .summary .content h3.svelte-1j0emdm{margin-top:1em;display:inline-block}.home_header.svelte-1j0emdm .summary .content h3.svelte-1j0emdm:after{content:\"\";display:block;width:50%;height:0.25em;background:white;margin-top:0.5em}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}