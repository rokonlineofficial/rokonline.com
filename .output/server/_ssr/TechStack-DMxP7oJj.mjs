import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { f as techGroups, m as timeline, n as Parallax, r as Reveal } from "./Reveal-tsMK616m.mjs";
import { t as SectionHeading } from "./SectionHeading-mxICtInt.mjs";
import { _ as HeartHandshake, v as Eye, y as Compass } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TechStack-DMxP7oJj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		icon: Compass,
		title: "Mission",
		text: "Give growing businesses the same digital firepower enterprise brands take for granted."
	},
	{
		icon: Eye,
		title: "Vision",
		text: "Become the most trusted growth partner for ambitious companies across North America."
	},
	{
		icon: HeartHandshake,
		title: "Values",
		text: "Transparency, measurable results, senior craftsmanship and communication you never chase."
	}
];
function About() {
	const lineRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = lineRef.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(".timeline-progress", { scaleY: 0 }, {
				scaleY: 1,
				transformOrigin: "top",
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 70%",
					end: "bottom 70%",
					scrub: .5
				}
			});
			gsapWithCSS.from(".timeline-item", {
				opacity: 0,
				x: -40,
				duration: .9,
				ease: "power3.out",
				stagger: .25,
				scrollTrigger: {
					trigger: el,
					start: "top 78%"
				}
			});
			gsapWithCSS.from(".timeline-dot", {
				scale: 0,
				duration: .6,
				ease: "back.out(2.5)",
				stagger: .25,
				scrollTrigger: {
					trigger: el,
					start: "top 78%"
				}
			});
		}, el);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "section-pad relative overflow-hidden bg-surface/25",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 top-20 size-[30rem] rounded-full bg-accent/10 blur-[140px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "About Rok Online",
					title: "Building Digital Experiences That Create Growth",
					subtitle: "Rok Online started as a small development studio in 2018 and grew into a full digital growth agency. Today our developers, designers, SEO specialists, ads experts and video editors work as one team behind every client's growth number."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-3",
					children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .08,
						className: "glass glass-hover rounded-2xl p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-5 text-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-bold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: p.text
							})
						]
					}, p.title))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
					strength: 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: lineRef,
						className: "relative pl-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[13px] top-2 h-[calc(100%-1rem)] w-px bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "timeline-progress absolute left-[13px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-accent to-gold" }),
							timeline.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "timeline-item relative mb-9 last:mb-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "timeline-dot absolute -left-10 top-1.5 grid size-7 place-items-center rounded-full border border-primary/50 bg-background",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-gradient-to-br from-primary to-accent" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-black tracking-widest text-gold",
										children: t.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl font-bold",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: t.text
									})
								]
							}, t.year))
						]
					})
				})]
			})
		})]
	});
}
function TechStack() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = root.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".tech-chip", {
				opacity: 0,
				scale: .6,
				y: 24,
				duration: .7,
				ease: "back.out(1.8)",
				stagger: {
					amount: 1.1,
					from: "random"
				},
				scrollTrigger: {
					trigger: el,
					start: "top 80%"
				}
			});
			gsapWithCSS.utils.toArray(".tech-chip").forEach((chip, i) => {
				gsapWithCSS.to(chip, {
					y: i % 3 === 0 ? -9 : i % 3 === 1 ? 7 : -5,
					duration: 2.6 + i % 5 * .4,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
					delay: i * .05
				});
			});
		}, el);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section-pad relative overflow-hidden bg-surface/25",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Expertise",
				title: "Technologies We Work With",
				subtitle: "A modern, battle-tested stack across engineering, content management, marketing platforms and design."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: root,
				className: "mt-16 space-y-8",
				children: techGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-40 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-black uppercase tracking-[0.22em] text-muted-foreground",
							children: g.group
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-3",
						children: g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tech-chip glass cursor-default rounded-2xl px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:border-accent/60 hover:text-accent",
							children: item
						}, item))
					})]
				}, g.group))
			})]
		})]
	});
}
//#endregion
export { TechStack as n, About as t };
