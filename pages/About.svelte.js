import './About.svelte.css.proxy.js';
/* src/pages/About.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let h1;
	let header;
	let section;

	return {
		c() {
			h1 = element("h1");
			h1.textContent = "ABOUT";
			header = element("header");
			header.innerHTML = `<h2 class="underline svelte-ct3smr">A selfless promoter of Bangladesh’s apparel industry, with an innate desire to change the game.</h2><img class="background" src="images/optimized/about_header.jpg"/>`;
			section = element("section");
			section.innerHTML = `<img class="background svelte-ct3smr" src="images/optimized/about_background.jpg"/><article class="grid two svelte-ct3smr"><p class="svelte-ct3smr">Mr. Mostafiz Uddin is a visionary in the area of the sustainable apparel ecosystem in Bangladesh through his philosophy which evolved from his passion for social and environmental ethics. He is believed to be a game changer in the industry through the promotion of innovation and fashion disruption, which he sees as key to the future success of the Bangladesh apparel sector. He is a selfless promoter of the critical issues surrounding sustainable apparel which include responsible business, technology, innovation, circularity and transparency.</p><img src="images/optimized/about_1.jpg" class="svelte-ct3smr"/></article><article class="grid two svelte-ct3smr"><article class="svelte-ct3smr"><img src="images/optimized/about_2.jpg" class="svelte-ct3smr"/><p class="svelte-ct3smr">&quot;I was born in the southern Bangladesh district of Chattogram (Chittagong), into a middle-class family. In many considerations, my childhood was just ordinary, except for the support from and relationship with my Mom. She was the one who inspired me to be ‘myself&#39; and &#39;listen to my heart&#39;. When other kids were being protected from the outside world, my mother encouraged me to go out and experience the world first-hand.</p><p class="svelte-ct3smr">I joined the Bangladesh scouts at the age of 11, where I quickly became a group Leader. This leadership role drove me to later form a cricket team which entered into the district cricket tournament. In 1991 I actively worked with Operation Sea Angel, the US-led, military disaster relief programme, in the aftermath of the cyclone which had devastated the southern coast of Bangladesh that year.</p></article><article class="svelte-ct3smr"><p class="svelte-ct3smr">Right after completing my Higher Secondary School in 1995, my father Mr. Moslem Uddin (who was my role model) passed away following a heart attack, leaving me, as I was the eldest son, as head of my family. After completion of my HSC I gained admittance to the University of Madras in India. Having secured my degree I returned home in 1999 and I met a USA citizen who requested that I join him in his endeavour to help the Bangladesh Ready-Made-Garment sector.</p><p class="svelte-ct3smr">I started my career in an apparel company as a trainee merchandiser in 1999. What I experienced in this role drove me to start my own business and open a buying house the same year.</p><img src="images/optimized/about_3.jpg" class="svelte-ct3smr"/></article></article><article class="grid two svelte-ct3smr"><aside><img src="images/optimized/about_4.jpg" class="svelte-ct3smr"/><img src="images/optimized/about_4.jpg" class="svelte-ct3smr"/></aside><article class="svelte-ct3smr"><p class="svelte-ct3smr">To make my dreams come true and to put into practice what I had in mind for the textile sector, I soon realised I needed to establish my own factory, with my standards and incorporating my vision for the future. This is what I did in 2009, when Denim Expert Ltd. was founded.</p><p class="svelte-ct3smr">After 2009 I invested time and energy into my plans to create trade-fairs and industry summits in Bangladesh, the likes of which had never been seen before in the region, with a view to help promote my country and our industry.</p><p class="svelte-ct3smr">I am now working on the next steps in the journey, for my country, my people, for the industry and for the well-being of workers across the world.</p><p class="svelte-ct3smr">Come and join me!&quot;</p></article></article>`;
			attr(h1, "class", "svelte-ct3smr");
			attr(header, "class", "center overlay svelte-ct3smr");
			attr(section, "class", "center overlay svelte-ct3smr");
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			insert(target, header, anchor);
			insert(target, section, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(header);
			if (detaching) detach(section);
		}
	};
}

class About extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default About;