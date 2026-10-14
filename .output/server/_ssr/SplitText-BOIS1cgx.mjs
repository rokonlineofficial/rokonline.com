import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import "./Reveal-tsMK616m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SplitText-BOIS1cgx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SplitText({ text, className, as: Tag = "h2", delay = 0, mode = "words", stagger = .055 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const parts = Array.from(el.querySelectorAll("[data-split-part]"));
		if (!parts.length) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(parts, {
				yPercent: 118,
				opacity: 0,
				rotateX: -55
			}, {
				yPercent: 0,
				opacity: 1,
				rotateX: 0,
				duration: 1.05,
				delay,
				ease: "power4.out",
				stagger,
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play reverse play reverse"
				}
			});
			gsapWithCSS.fromTo(parts, {
				yPercent: 0,
				opacity: 1
			}, {
				yPercent: -70,
				opacity: 0,
				stagger: stagger * .6,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "bottom 20%",
					end: "bottom -5%",
					scrub: .6
				}
			});
		}, el);
		return () => ctx.revert();
	}, [
		text,
		delay,
		mode,
		stagger
	]);
	const units = mode === "words" ? text.split(" ") : text.split("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
		ref,
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: text
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "inline",
			children: units.map((unit, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-block overflow-hidden align-bottom pb-[0.22em] -mb-[0.22em]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"data-split-part": true,
					className: "inline-block will-change-transform",
					children: unit === " " ? "\xA0" : unit
				}), mode === "words" && i < units.length - 1 ? "\xA0" : null]
			}, `${unit}-${i}`))
		})]
	});
}
//#endregion
export { SplitText as t };
