import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as Reveal } from "./Reveal-tsMK616m.mjs";
import { t as SplitText } from "./SplitText-BOIS1cgx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-DazTbn8Q.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-hero-aura pb-16 pt-36 lg:pt-44",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-20 top-20 size-[24rem] rounded-full bg-primary/20 blur-[130px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						y: 16,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent",
							children: eyebrow
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
						as: "h1",
						text: title,
						className: "mt-6 font-display text-[clamp(2.2rem,5.4vw,4rem)] font-extrabold leading-[1.04]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
							children: subtitle
						})
					}),
					children
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
