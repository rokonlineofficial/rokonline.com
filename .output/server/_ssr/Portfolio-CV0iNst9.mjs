import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { o as portfolio, s as portfolioCategories } from "./Reveal-tsMK616m.mjs";
import { t as SectionHeading } from "./SectionHeading-mxICtInt.mjs";
import { O as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Portfolio-CV0iNst9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Portfolio({ withFilters = true }) {
	const [active, setActive] = (0, import_react.useState)("All");
	const gridRef = (0, import_react.useRef)(null);
	const items = active === "All" ? portfolio : portfolio.filter((p) => p.category === active);
	(0, import_react.useEffect)(() => {
		const el = gridRef.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".case-card", {
				opacity: 0,
				y: 60,
				duration: .9,
				ease: "power3.out",
				stagger: .1,
				scrollTrigger: {
					trigger: el,
					start: "top 85%"
				}
			});
			gsapWithCSS.from(".case-veil", {
				scaleX: 1,
				transformOrigin: "right",
				duration: 1.1,
				ease: "power4.inOut",
				stagger: .1,
				scrollTrigger: {
					trigger: el,
					start: "top 85%"
				}
			});
		}, el);
		return () => ctx.revert();
	}, [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "section-pad relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Portfolio",
					title: "Our Work Speaks For Results",
					subtitle: "Websites, search programs and campaigns built for measurable business outcomes."
				}),
				withFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-2",
					children: portfolioCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(c),
						className: `rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${active === c ? "border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground" : "border-border text-muted-foreground hover:border-accent hover:text-accent"}`,
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: gridRef,
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "case-card group relative overflow-hidden rounded-3xl border border-border bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: `${p.title} project showcase`,
									loading: "lazy",
									width: 768,
									height: 576,
									className: "absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-t ${p.accent} opacity-30 transition-opacity duration-500 group-hover:opacity-15` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "case-veil absolute inset-0 origin-left scale-x-0 bg-background" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 flex items-end justify-between p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-background/70 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent backdrop-blur",
										children: p.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 translate-y-3 place-items-center rounded-full bg-background/70 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: p.industry
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1.5 font-display text-xl font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: p.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground",
										children: s
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-sm font-bold text-accent",
									children: p.result
								})
							]
						})]
					}, p.title))
				})
			]
		})
	});
}
//#endregion
export { Portfolio as t };
