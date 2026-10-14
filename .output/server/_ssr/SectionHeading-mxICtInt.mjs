import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as Reveal } from "./Reveal-tsMK616m.mjs";
import { t as SplitText } from "./SplitText-BOIS1cgx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-mxICtInt.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, subtitle, align = "center", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				y: 18,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: eyebrow
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
				as: "h2",
				text: title,
				className: "mt-5 font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-extrabold leading-[1.08]"
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				y: 22,
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: subtitle
				})
			}),
			children
		]
	});
}
//#endregion
export { SectionHeading as t };
