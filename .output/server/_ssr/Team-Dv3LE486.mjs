import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as team, i as Stagger } from "./Reveal-tsMK616m.mjs";
import { t as SectionHeading } from "./SectionHeading-mxICtInt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Team-Dv3LE486.js
var import_jsx_runtime = require_jsx_runtime();
function Team({ limit }) {
	const members = limit ? team.slice(0, limit) : team;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "team",
		className: "section-pad relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-1/3 size-[26rem] rounded-full bg-gold/10 blur-[130px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Team",
				title: "Meet The Experts Behind Rok Online",
				subtitle: "Developers, designers, SEO strategists, paid ads specialists, social media managers and video editors — all senior, all in-house."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "glass glass-hover group relative overflow-hidden rounded-3xl p-6 text-center transition-transform duration-500 hover:-translate-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mx-auto size-28 overflow-hidden rounded-full bg-gradient-to-br from-primary/30 to-accent/25 p-[2px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.image,
								alt: `${m.name}, ${m.role}`,
								loading: "lazy",
								width: 112,
								height: 112,
								className: "size-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "relative mt-5 font-display text-lg font-bold",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative text-sm text-accent",
							children: m.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mt-4 flex flex-wrap justify-center gap-1.5",
							children: m.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground",
								children: s
							}, s))
						})
					]
				}, m.name))
			})]
		})]
	});
}
//#endregion
export { Team as t };
