// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".contact_background.svelte-c4esta.svelte-c4esta{width:100%;height:80vh;object-fit:cover;margin-bottom:5em}.contact_content.svelte-c4esta.svelte-c4esta{position:absolute;top:15%;left:50%;transform:translateX(-50%);text-align:center}.contact_content.svelte-c4esta h1.svelte-c4esta{letter-spacing:0.25ch;margin-bottom:1em}.contact_content.svelte-c4esta h5.svelte-c4esta{font-size:1.5em;margin:0}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}