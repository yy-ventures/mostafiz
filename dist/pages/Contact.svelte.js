import './Contact.svelte.css.proxy.js';
/* src/pages/Contact.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let img;
	let img_src_value;
	let div;

	return {
		c() {
			img = element("img");
			div = element("div");
			div.innerHTML = `<h1 class="contact svelte-c4esta">Contact</h1><h5 class="email svelte-c4esta">muddin@mostafiz.org</h5><h5 class="website svelte-c4esta">www.mostafiz.org</h5>`;
			attr(img, "class", "contact_background svelte-c4esta");
			if (img.src !== (img_src_value = "images/optimized/contact.jpg")) attr(img, "src", img_src_value);
			attr(div, "class", "contact_content svelte-c4esta");
		},
		m(target, anchor) {
			insert(target, img, anchor);
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(img);
			if (detaching) detach(div);
		}
	};
}

class Contact extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Contact;