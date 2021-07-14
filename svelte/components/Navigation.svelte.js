import './Navigation.svelte.css.proxy.js';
/* src/components/Navigation.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	text,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import { Link } from "../_snowpack/pkg/svelte-navigator.js";

function create_default_slot_5(ctx) {
	let img;
	let img_src_value;
	let h3;

	return {
		c() {
			img = element("img");
			h3 = element("h3");
			h3.textContent = "THE DENIM EXPERT";
			if (img.src !== (img_src_value = "images/logo.png")) attr(img, "src", img_src_value);
			attr(img, "class", "svelte-10mcdzl");
			attr(h3, "class", "svelte-10mcdzl");
		},
		m(target, anchor) {
			insert(target, img, anchor);
			insert(target, h3, anchor);
		},
		d(detaching) {
			if (detaching) detach(img);
			if (detaching) detach(h3);
		}
	};
}

// (1:232) <Link to="#">
function create_default_slot_4(ctx) {
	let t;

	return {
		c() {
			t = text("EXPERTISE");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (1:261) <Link to="#">
function create_default_slot_3(ctx) {
	let t;

	return {
		c() {
			t = text("SUSTAINABILITY");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (1:295) <Link to="#">
function create_default_slot_2(ctx) {
	let t;

	return {
		c() {
			t = text("NEWS");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (1:319) <Link to="#">
function create_default_slot_1(ctx) {
	let t;

	return {
		c() {
			t = text("ABOUT");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (1:344) <Link to="contact">
function create_default_slot(ctx) {
	let t;

	return {
		c() {
			t = text("CONTACT");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment(ctx) {
	let nav;
	let input;
	let label;
	let link0;
	let div3;
	let link1;
	let link2;
	let link3;
	let link4;
	let link5;
	let div2;
	let current;

	link0 = new Link({
			props: {
				to: "/",
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			}
		});

	link1 = new Link({
			props: {
				to: "#",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	link2 = new Link({
			props: {
				to: "#",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	link3 = new Link({
			props: {
				to: "#",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	link4 = new Link({
			props: {
				to: "#",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	link5 = new Link({
			props: {
				to: "contact",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			nav = element("nav");
			input = element("input");
			label = element("label");
			label.innerHTML = `<div id="menu_button" class="svelte-10mcdzl"><div id="bar" class="svelte-10mcdzl"></div></div>`;
			create_component(link0.$$.fragment);
			div3 = element("div");
			create_component(link1.$$.fragment);
			create_component(link2.$$.fragment);
			create_component(link3.$$.fragment);
			create_component(link4.$$.fragment);
			create_component(link5.$$.fragment);
			div2 = element("div");
			div2.innerHTML = `<a class="fab fa-instagram svelte-10mcdzl" href="#" target="_blank" rel="noopener noreferrer"></a><a class="fab fa-linkedin-in svelte-10mcdzl" href="#" target="_blank" rel="noopener noreferrer"></a><a class="fab fa-facebook-f svelte-10mcdzl" href="#" target="_blank" rel="noopener noreferrer"></a><a class="fab fa-twitter svelte-10mcdzl" href="#" target="_blank" rel="noopener noreferrer"></a>`;
			attr(input, "id", "toggler");
			attr(input, "type", "checkbox");
			attr(input, "class", "svelte-10mcdzl");
			attr(label, "for", "toggler");
			attr(label, "id", "menu_toggler_label");
			attr(label, "class", "svelte-10mcdzl");
			attr(div2, "class", "socials");
			attr(div3, "class", "menu svelte-10mcdzl");
			attr(nav, "class", "svelte-10mcdzl");
		},
		m(target, anchor) {
			insert(target, nav, anchor);
			append(nav, input);
			append(nav, label);
			mount_component(link0, nav, null);
			append(nav, div3);
			mount_component(link1, div3, null);
			mount_component(link2, div3, null);
			mount_component(link3, div3, null);
			mount_component(link4, div3, null);
			mount_component(link5, div3, null);
			append(div3, div2);
			current = true;
		},
		p(ctx, [dirty]) {
			const link0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				link0_changes.$$scope = { dirty, ctx };
			}

			link0.$set(link0_changes);
			const link1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				link1_changes.$$scope = { dirty, ctx };
			}

			link1.$set(link1_changes);
			const link2_changes = {};

			if (dirty & /*$$scope*/ 1) {
				link2_changes.$$scope = { dirty, ctx };
			}

			link2.$set(link2_changes);
			const link3_changes = {};

			if (dirty & /*$$scope*/ 1) {
				link3_changes.$$scope = { dirty, ctx };
			}

			link3.$set(link3_changes);
			const link4_changes = {};

			if (dirty & /*$$scope*/ 1) {
				link4_changes.$$scope = { dirty, ctx };
			}

			link4.$set(link4_changes);
			const link5_changes = {};

			if (dirty & /*$$scope*/ 1) {
				link5_changes.$$scope = { dirty, ctx };
			}

			link5.$set(link5_changes);
		},
		i(local) {
			if (current) return;
			transition_in(link0.$$.fragment, local);
			transition_in(link1.$$.fragment, local);
			transition_in(link2.$$.fragment, local);
			transition_in(link3.$$.fragment, local);
			transition_in(link4.$$.fragment, local);
			transition_in(link5.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(link0.$$.fragment, local);
			transition_out(link1.$$.fragment, local);
			transition_out(link2.$$.fragment, local);
			transition_out(link3.$$.fragment, local);
			transition_out(link4.$$.fragment, local);
			transition_out(link5.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(nav);
			destroy_component(link0);
			destroy_component(link1);
			destroy_component(link2);
			destroy_component(link3);
			destroy_component(link4);
			destroy_component(link5);
		}
	};
}

class Navigation extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Navigation;