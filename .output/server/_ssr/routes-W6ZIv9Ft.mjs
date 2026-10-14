import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { t as Magnetic, u as stats } from "./Reveal-tsMK616m.mjs";
import { t as SplitText } from "./SplitText-BOIS1cgx.mjs";
import { t as SectionHeading } from "./SectionHeading-mxICtInt.mjs";
import { D as ChartColumn, O as ArrowUpRight, b as CodeXml, c as Search, g as Mail, i as Target, k as ArrowRight, n as Video, o as Share2, p as MousePointerClick, r as TrendingUp, u as Play } from "../_libs/lucide-react.mjs";
import { n as TechStack, t as About } from "./TechStack-DMxP7oJj.mjs";
import { t as Team } from "./Team-Dv3LE486.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CTA } from "./CTA-CzsJny0y.mjs";
import { t as Portfolio } from "./Portfolio-CV0iNst9.mjs";
import { t as Process } from "./Process-DyzcZpUH.mjs";
import { n as TrustBar, t as Testimonials } from "./Testimonials-C4h7NzFu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-W6ZIv9Ft.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ value, suffix = "", className }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obj = { n: 0 };
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.to(obj, {
				n: value,
				duration: 2,
				ease: "power3.out",
				onUpdate: () => {
					el.textContent = `${Math.round(obj.n)}${suffix}`;
				},
				scrollTrigger: {
					trigger: el,
					start: "top 92%"
				}
			});
		});
		return () => ctx.revert();
	}, [value, suffix]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: ["0", suffix]
	});
}
function Hero() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = root.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".hero-fade", {
				y: 30,
				opacity: 0,
				duration: 1,
				stagger: .12,
				delay: .45,
				ease: "power3.out"
			});
			gsapWithCSS.from(".hero-card", {
				y: 60,
				opacity: 0,
				rotateX: 25,
				scale: .92,
				duration: 1.1,
				stagger: .14,
				delay: .55,
				ease: "power3.out"
			});
			gsapWithCSS.utils.toArray(".hero-float").forEach((node, i) => {
				gsapWithCSS.to(node, {
					y: i % 2 === 0 ? -16 : 14,
					duration: 3.4 + i * .5,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut"
				});
			});
			gsapWithCSS.to(".hero-orb", {
				xPercent: 12,
				yPercent: -10,
				duration: 9,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				stagger: 1.2
			});
		}, el);
		const onMove = (e) => {
			const rx = (e.clientX / window.innerWidth - .5) * 2;
			const ry = (e.clientY / window.innerHeight - .5) * 2;
			gsapWithCSS.to(".hero-parallax", {
				x: (i) => rx * (14 + i * 9),
				y: (i) => ry * (10 + i * 7),
				rotateY: rx * 6,
				rotateX: -ry * 5,
				duration: 1,
				ease: "power3.out",
				overwrite: "auto"
			});
		};
		window.addEventListener("mousemove", onMove);
		return () => {
			window.removeEventListener("mousemove", onMove);
			ctx.revert();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		className: "relative overflow-hidden bg-hero-aura pb-20 pt-36 lg:pt-44",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-orb pointer-events-none absolute -left-24 top-24 size-[26rem] rounded-full bg-primary/25 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-orb pointer-events-none absolute -right-16 top-64 size-[22rem] rounded-full bg-accent/20 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hero-fade inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-pulse rounded-full bg-accent" }), "Digital Marketing & Web Development"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
						as: "h1",
						mode: "words",
						delay: .25,
						text: "Turning Clicks Into Loyal Customers",
						className: "mt-6 font-display text-[clamp(2.6rem,6.2vw,4.6rem)] font-extrabold leading-[1.02]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-fade mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
						children: "Data-driven websites and digital marketing solutions designed to increase traffic, leads and revenue."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-fade mt-9 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]",
							children: ["Get Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
							strength: .3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/portfolio",
								className: "group inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-bold transition-colors hover:border-accent hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), " View Our Work"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-fade mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-extrabold text-gradient",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								value: s.value,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
							children: s.label
						})] }, s.label))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative [perspective:1400px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-card hero-parallax glass relative rounded-3xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Website Analytics"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-extrabold",
									children: "184,920 sessions"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5" }), " +62%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBars, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-card hero-parallax hero-float glass absolute -left-6 bottom-8 w-56 rounded-2xl p-4 sm:-left-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4 text-gold" }), " SEO Growth"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-xl font-extrabold",
									children: "Top 3 Rankings"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-[82%] rounded-full bg-gradient-to-r from-gold to-accent" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-card hero-parallax hero-float glass absolute -right-3 -top-8 w-56 rounded-2xl p-4 sm:-right-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MousePointerClick, { className: "size-4 text-primary" }), " Google Ads"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-xl font-extrabold",
									children: "4.6x ROAS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-accent",
									children: "Cost per lead −38%"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-card hero-parallax hero-float glass absolute -bottom-10 right-2 w-52 rounded-2xl p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-4 text-accent" }), " Leads"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-display text-xl font-extrabold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: 1284 }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: "/ month"
									})
								]
							})]
						})
					]
				})]
			})
		]
	});
}
function ChartBars() {
	const ref = (0, import_react.useRef)(null);
	const values = [
		38,
		52,
		44,
		66,
		58,
		78,
		71,
		92,
		86,
		100
	];
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".chart-bar", {
				scaleY: 0,
				transformOrigin: "bottom",
				duration: 1.1,
				stagger: .06,
				delay: .9,
				ease: "power3.out"
			});
		}, el);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "mt-6 flex h-40 items-end gap-2",
		children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "chart-bar flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-accent",
			style: { height: `${v}%` }
		}, i))
	});
}
var cards = [
	{
		icon: CodeXml,
		title: "Web Development",
		text: "Fast, secure, SEO-friendly websites built with modern technology.",
		slug: "custom-web-development"
	},
	{
		icon: Search,
		title: "SEO",
		text: "Increase organic traffic and improve search visibility.",
		slug: "seo"
	},
	{
		icon: MousePointerClick,
		title: "Paid Advertising",
		text: "Performance-focused Google Ads and Meta Ads campaigns.",
		slug: "google-ads"
	},
	{
		icon: Share2,
		title: "Social Media Marketing",
		text: "Build brand awareness and customer engagement.",
		slug: "social-media-marketing"
	},
	{
		icon: Video,
		title: "Video Production",
		text: "Professional promotional videos for businesses.",
		slug: "video-production"
	},
	{
		icon: Mail,
		title: "Email Marketing",
		text: "Convert visitors into loyal customers.",
		slug: "email-marketing"
	}
];
function Services() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = root.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".service-card", {
				y: 70,
				opacity: 0,
				rotateX: 18,
				duration: 1,
				ease: "power3.out",
				stagger: { amount: .7 },
				scrollTrigger: {
					trigger: el,
					start: "top 80%"
				}
			});
		}, el);
		const cardsEls = Array.from(el.querySelectorAll(".service-card"));
		const handlers = [];
		cardsEls.forEach((card) => {
			const move = (e) => {
				const r = card.getBoundingClientRect();
				const px = (e.clientX - r.left) / r.width - .5;
				const py = (e.clientY - r.top) / r.height - .5;
				gsapWithCSS.to(card, {
					rotateY: px * 10,
					rotateX: -py * 10,
					y: -8,
					duration: .5,
					ease: "power3.out"
				});
				gsapWithCSS.to(card.querySelector(".service-glow"), {
					opacity: 1,
					x: e.clientX - r.left - 140,
					y: e.clientY - r.top - 140,
					duration: .5
				});
			};
			const leave = () => {
				gsapWithCSS.to(card, {
					rotateY: 0,
					rotateX: 0,
					y: 0,
					duration: .7,
					ease: "elastic.out(1,0.5)"
				});
				gsapWithCSS.to(card.querySelector(".service-glow"), {
					opacity: 0,
					duration: .4
				});
			};
			card.addEventListener("mousemove", move);
			card.addEventListener("mouseleave", leave);
			handlers.push(() => {
				card.removeEventListener("mousemove", move);
				card.removeEventListener("mouseleave", leave);
			});
		});
		return () => {
			handlers.forEach((fn) => fn());
			ctx.revert();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "section-pad relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-0 size-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Services",
				title: "Digital Solutions That Grow Your Business",
				subtitle: "One senior team covering everything from engineering to acquisition — so your website, search presence and campaigns finally work together."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: root,
				className: "mt-16 grid gap-6 [perspective:1400px] md:grid-cols-2 lg:grid-cols-3",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "service-card glass glass-hover group relative overflow-hidden rounded-3xl p-7 will-change-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "service-glow pointer-events-none absolute size-72 rounded-full bg-primary/25 opacity-0 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-14 place-items-center rounded-2xl border border-border bg-surface-2 transition-transform duration-500 group-hover:scale-110 group-hover:border-accent/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-6 text-accent transition-colors group-hover:text-gold" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-xl font-bold",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: c.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/$slug",
								params: { slug: c.slug },
								className: "mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent",
								children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" })]
							})
						]
					})]
				}, c.title))
			})]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, { limit: 4 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Home as component };
