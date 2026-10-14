import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { r as Reveal, t as Magnetic } from "./Reveal-tsMK616m.mjs";
import { t as SplitText } from "./SplitText-BOIS1cgx.mjs";
import { f as PhoneCall, k as ArrowRight } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTA-CzsJny0y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CTA() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = root.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.to(".cta-shape", {
				y: (i) => i % 2 === 0 ? -28 : 24,
				x: (i) => i % 3 === 0 ? 18 : -14,
				rotate: (i) => i % 2 === 0 ? 22 : -18,
				duration: 6,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				stagger: .6
			});
		}, el);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad relative px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: root,
			className: "relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-border bg-hero-aura p-10 text-center sm:p-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cta-shape pointer-events-none absolute -left-10 top-10 size-24 rounded-3xl border border-primary/40 bg-primary/10 backdrop-blur" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cta-shape pointer-events-none absolute right-8 top-16 size-16 rounded-full border border-accent/40 bg-accent/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cta-shape pointer-events-none absolute bottom-10 left-1/4 size-12 rotate-45 border border-gold/40 bg-gold/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cta-shape pointer-events-none absolute -bottom-6 right-1/4 size-28 rounded-full bg-primary/20 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
							as: "h2",
							text: "Ready To Grow Your Business Online?",
							className: "mx-auto max-w-3xl font-display text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.05]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
								children: "Let's build a powerful digital presence that attracts customers and increases revenue."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .2,
							className: "mt-10 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]",
								children: ["Book Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
								strength: .3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold transition-colors hover:border-accent hover:text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "size-4" }), " Contact Us"]
								})
							})]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { CTA as t };
