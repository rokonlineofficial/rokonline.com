import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { c as processSteps } from "./Reveal-tsMK616m.mjs";
import { t as SectionHeading } from "./SectionHeading-mxICtInt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Process-DyzcZpUH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Process() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = root.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(".process-line", { scaleX: 0 }, {
				scaleX: 1,
				transformOrigin: "left",
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 65%",
					end: "bottom 80%",
					scrub: .4
				}
			});
			gsapWithCSS.utils.toArray(".process-step").forEach((step, i) => {
				gsapWithCSS.from(step, {
					opacity: 0,
					y: 70,
					rotateX: 20,
					duration: .95,
					ease: "power3.out",
					delay: i * .05,
					scrollTrigger: {
						trigger: step,
						start: "top 88%"
					}
				});
			});
		}, el);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "process",
		className: "section-pad relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-1/4 size-[28rem] rounded-full bg-primary/10 blur-[140px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Process",
				title: "How We Turn Ideas Into Results",
				subtitle: "A proven five-stage system that keeps strategy, execution and reporting tightly connected."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: root,
				className: "relative mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-9 hidden h-px bg-border lg:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "process-line absolute left-0 right-0 top-9 hidden h-px origin-left bg-gradient-to-r from-primary via-accent to-gold lg:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-5",
						children: processSteps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "process-step group relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative z-10 grid size-[4.5rem] place-items-center rounded-2xl border border-border bg-background font-display text-xl font-black text-gradient transition-all duration-500 group-hover:-translate-y-2 group-hover:border-accent/60",
									children: s.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-lg font-bold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-sm leading-relaxed text-muted-foreground",
									children: s.text
								})
							]
						}, s.step))
					})
				]
			})]
		})]
	});
}
//#endregion
export { Process as t };
