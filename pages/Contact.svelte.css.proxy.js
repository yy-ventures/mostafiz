// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".contact_background.svelte-10eg5zd.svelte-10eg5zd{width:100%;height:80vh;object-fit:cover}.contact_content.svelte-10eg5zd.svelte-10eg5zd{position:absolute;top:15%;left:50%;transform:translateX(-50%);text-align:center}.contact_content.svelte-10eg5zd h1.svelte-10eg5zd{letter-spacing:0.25ch;margin-bottom:1em}.contact_content.svelte-10eg5zd h5.svelte-10eg5zd{font-size:1.5em;margin:0;color:black}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}