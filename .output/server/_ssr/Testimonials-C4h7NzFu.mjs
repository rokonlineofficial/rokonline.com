import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { h as trustLogos, p as testimonials, r as Reveal } from "./Reveal-tsMK616m.mjs";
import { t as SectionHeading } from "./SectionHeading-mxICtInt.mjs";
import { C as ChevronRight, a as Star, l as Quote, w as ChevronLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-C4h7NzFu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Marquee({ children, speed = 30, reverse = false, className }) {
	const trackRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const track = trackRef.current;
		if (!track) return;
		const half = track.scrollWidth / 2;
		if (!half) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set(track, { x: reverse ? -half : 0 });
			gsapWithCSS.to(track, {
				x: reverse ? 0 : -half,
				duration: half / speed,
				ease: "none",
				repeat: -1
			});
		});
		return () => ctx.revert();
	}, [speed, reverse]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative overflow-hidden ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: trackRef,
				className: "flex w-max items-center gap-14 will-change-transform",
				children: [children, children]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" })
		]
	});
}
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-y border-border bg-surface/30 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mx-auto mb-8 max-w-7xl px-5 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground",
					children: "Trusted By Businesses Worldwide"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
				speed: 55,
				children: trustLogos.map((logo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex items-center gap-3 whitespace-nowrap px-2 text-2xl font-extrabold tracking-tight text-muted-foreground/60 transition-colors duration-300 hover:text-foreground sm:text-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary/60 transition-colors group-hover:bg-accent" }), logo]
				}, `${logo}-${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
					speed: 42,
					reverse: true,
					children: [
						"150+ Projects",
						"145+ Upwork Reviews",
						"10+ Years",
						"Charlotte, NC",
						"Full-Service Growth"
					].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "whitespace-nowrap rounded-full border border-border px-6 py-2 text-sm font-semibold text-muted-foreground",
						children: t
					}, `${t}-${i}`))
				})
			})
		]
	});
}
function Testimonials() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const cardRef = (0, import_react.useRef)(null);
	const active = testimonials[index] ?? testimonials[0];
	(0, import_react.useEffect)(() => {
		const el = cardRef.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(el, {
				opacity: 0,
				y: 36,
				filter: "blur(12px)",
				scale: .98
			}, {
				opacity: 1,
				y: 0,
				filter: "blur(0px)",
				scale: 1,
				duration: .8,
				ease: "power3.out"
			});
		});
		return () => ctx.revert();
	}, [index]);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "testimonials",
		className: "section-pad relative overflow-hidden bg-surface/25",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/4 top-10 size-[26rem] rounded-full bg-accent/10 blur-[140px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Testimonials",
				title: "What Our Clients Say",
				subtitle: "145+ five-star reviews from founders and marketing leaders who needed results, not reports."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-14 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: cardRef,
					className: "glass rounded-[2rem] p-8 sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-9 text-primary/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 font-display text-xl leading-relaxed sm:text-2xl",
							children: [
								"“",
								active.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 place-items-center rounded-full bg-gradient-to-br from-primary/40 to-accent/30 font-display font-black",
									children: active.initials
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display font-bold",
									children: active.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: active.company
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ml-auto flex gap-1",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-gold text-gold" }, i))
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
							"aria-label": "Previous testimonial",
							className: "grid size-11 place-items-center rounded-full border border-border transition-all hover:-translate-x-1 hover:border-accent hover:text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIndex(i),
								"aria-label": `Show testimonial ${i + 1}`,
								className: `h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-gradient-to-r from-primary to-accent" : "w-3 bg-border"}`
							}, t.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIndex((i) => (i + 1) % testimonials.length),
							"aria-label": "Next testimonial",
							className: "grid size-11 place-items-center rounded-full border border-border transition-all hover:translate-x-1 hover:border-accent hover:text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { TrustBar as n, Testimonials as t };
