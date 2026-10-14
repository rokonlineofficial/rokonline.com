import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { a as company, l as services, r as Reveal, t as Magnetic } from "./Reveal-tsMK616m.mjs";
import { T as ChevronDown, d as Phone, g as Mail, h as MapPin, m as Menu, t as X } from "../_libs/lucide-react.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, j as notFound, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { i as FaXTwitter, n as FaInstagram, r as FaTiktok, t as FaFacebookF } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DW9dtryq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		lenis.on("scroll", ScrollTrigger.update);
		const raf = (time) => lenis.raf(time * 1e3);
		gsapWithCSS.ticker.add(raf);
		gsapWithCSS.ticker.lagSmoothing(0);
		return () => {
			gsapWithCSS.ticker.remove(raf);
			lenis.destroy();
		};
	}, []);
	return null;
}
function Cursor() {
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const dot = dotRef.current;
		const ring = ringRef.current;
		if (!dot || !ring) return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		gsapWithCSS.set([dot, ring], {
			xPercent: -50,
			yPercent: -50,
			opacity: 0
		});
		const dx = gsapWithCSS.quickTo(dot, "x", {
			duration: .12,
			ease: "power3"
		});
		const dy = gsapWithCSS.quickTo(dot, "y", {
			duration: .12,
			ease: "power3"
		});
		const rx = gsapWithCSS.quickTo(ring, "x", {
			duration: .55,
			ease: "power3"
		});
		const ry = gsapWithCSS.quickTo(ring, "y", {
			duration: .55,
			ease: "power3"
		});
		const move = (e) => {
			gsapWithCSS.to([dot, ring], {
				opacity: 1,
				duration: .3,
				overwrite: "auto"
			});
			dx(e.clientX);
			dy(e.clientY);
			rx(e.clientX);
			ry(e.clientY);
			const interactive = e.target?.closest("a,button,[data-cursor-hover]");
			gsapWithCSS.to(ring, {
				scale: interactive ? 1.9 : 1,
				borderColor: interactive ? "color-mix(in oklab, var(--accent) 80%, transparent)" : "color-mix(in oklab, var(--primary) 80%, transparent)",
				duration: .35,
				overwrite: "auto"
			});
		};
		const leave = () => gsapWithCSS.to([dot, ring], {
			opacity: 0,
			duration: .2
		});
		window.addEventListener("mousemove", move);
		document.addEventListener("mouseleave", leave);
		return () => {
			window.removeEventListener("mousemove", move);
			document.removeEventListener("mouseleave", leave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-[100] hidden md:block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: ringRef,
			className: "fixed size-9 rounded-full border border-primary/70"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: dotRef,
			className: "fixed size-1.5 rounded-full bg-accent"
		})]
	});
}
var Rok_Online_Logo_default = "/assets/Rok-Online-Logo-CRP85G02.png";
var nav = [
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Team",
		to: "/team"
	},
	{
		label: "Process",
		to: "/process"
	},
	{
		label: "Portfolio",
		to: "/portfolio"
	},
	{
		label: "Testimonials",
		to: "/testimonials"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 24);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		gsapWithCSS.fromTo(".mobile-nav-item", {
			x: 20,
			opacity: 0
		}, {
			x: 0,
			opacity: 1,
			duration: .4,
			stagger: .05,
			ease: "power3.out"
		});
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `
        fixed
        inset-x-0
        top-0
        z-[9999]
        h-[88px]
        transition-all
        duration-500

        ${scrolled ? "glass backdrop-blur-2xl" : "bg-transparent"}
      `,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "\r\n          mx-auto\r\n          flex\r\n          h-full\r\n          max-w-7xl\r\n          items-center\r\n          justify-between\r\n          gap-6\r\n          px-5\r\n        ",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "\r\n            flex\r\n            items-center\r\n            gap-2.5\r\n            shrink-0\r\n          ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Rok_Online_Logo_default,
						alt: "Rok Online",
						className: "\r\n              h-9\r\n              w-auto\r\n              object-contain\r\n            "
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "\r\n            hidden\r\n            items-center\r\n            gap-1\r\n            lg:flex\r\n          ",
					children: nav.map((n) => n.label === "Services" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "\r\n                      flex\r\n                      items-center\r\n                      gap-1\r\n                      rounded-full\r\n                      px-4\r\n                      py-2\r\n                      text-sm\r\n                      font-medium\r\n                      text-white\r\n                    ",
							children: ["Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "\r\n                        size-3.5\r\n                        transition-transform\r\n                        group-hover:rotate-180\r\n                      " })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "\r\n                      pointer-events-none\r\n                      absolute\r\n                      left-1/2\r\n                      top-full\r\n                      w-[560px]\r\n                      -translate-x-1/2\r\n                      pt-3\r\n                      opacity-0\r\n                      transition-all\r\n                      duration-300\r\n                      group-hover:pointer-events-auto\r\n                      group-hover:opacity-100\r\n                    ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\r\n                        glass\r\n                        grid\r\n                        grid-cols-2\r\n                        gap-1\r\n                        rounded-2xl\r\n                        p-3\r\n                      ",
								children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/$slug",
									params: { slug: s.slug },
									className: "\r\n                              rounded-xl\r\n                              px-3\r\n                              py-2.5\r\n                              hover:bg-white/10\r\n                            ",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "\r\n                                block\r\n                                text-sm\r\n                                font-semibold\r\n                                text-white\r\n                              ",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "\r\n                                block\r\n                                text-xs\r\n                                text-white/60\r\n                              ",
										children: s.short
									})]
								}, s.slug))
							})
						})]
					}, n.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "\r\n                    rounded-full\r\n                    px-4\r\n                    py-2\r\n                    text-sm\r\n                    font-medium\r\n                    text-white\r\n                  ",
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\r\n            flex\r\n            items-center\r\n            gap-3\r\n            shrink-0\r\n          ",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: company.phoneHref,
							className: "\r\n              hidden\r\n              items-center\r\n              gap-2\r\n              text-sm\r\n              font-semibold\r\n              text-white\r\n              xl:flex\r\n            ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), company.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
							className: "\r\n              hidden\r\n              sm:inline-block\r\n            ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "\r\n                inline-flex\r\n                items-center\r\n                rounded-full\r\n                bg-gradient-to-r\r\n                from-primary\r\n                to-accent\r\n                px-5\r\n                py-2.5\r\n                text-sm\r\n                font-semibold\r\n                text-white\r\n              ",
								children: "Free Consultation"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(!open),
							className: "\r\n              grid\r\n              size-10\r\n              place-items-center\r\n              rounded-xl\r\n              border\r\n              border-white/20\r\n              text-white\r\n              lg:hidden\r\n            ",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "\r\n              glass\r\n              mx-4\r\n              mt-3\r\n              max-h-[70vh]\r\n              overflow-y-auto\r\n              rounded-2xl\r\n              p-4\r\n              lg:hidden\r\n            ",
			children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: n.to,
				onClick: () => setOpen(false),
				className: "\r\n                    mobile-nav-item\r\n                    block\r\n                    rounded-xl\r\n                    px-4\r\n                    py-3\r\n                    text-base\r\n                    font-semibold\r\n                    text-white\r\n                    hover:bg-white/10\r\n                  ",
				children: n.label
			}, n.to))
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border bg-surface/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: Rok_Online_Logo_default,
								alt: "Rok Online",
								className: "h-9 w-auto object-contain"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "Rok Online helps businesses increase online visibility, generate qualified leads and improve conversions through modern websites, SEO, paid advertising and digital growth solutions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex gap-3",
							children: [
								{
									name: "Facebook",
									icon: FaFacebookF,
									link: "https://www.facebook.com/rokonlineinc"
								},
								{
									name: "X (Twitter)",
									icon: FaXTwitter,
									link: "https://x.com/rokonlineinc"
								},
								{
									name: "Instagram",
									icon: FaInstagram,
									link: "https://www.instagram.com/rokonlineinc"
								},
								{
									name: "TikTok",
									icon: FaTiktok,
									link: "https://www.tiktok.com/@rokonlineinc"
								}
							].map(({ icon: Icon, link, name }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": name,
								className: "\r\n                    grid\r\n                    size-10\r\n                    place-items-center\r\n                    rounded-xl\r\n                    border\r\n                    border-border\r\n                    transition-all\r\n                    hover:-translate-y-1\r\n                    hover:border-primary\r\n                    hover:text-accent\r\n                  ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
							}, name))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold uppercase tracking-widest text-muted-foreground",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-sm",
						children: [
							{
								label: "About",
								to: "/about"
							},
							{
								label: "Team",
								to: "/team"
							},
							{
								label: "Portfolio",
								to: "/portfolio"
							},
							{
								label: "Process",
								to: "/process"
							},
							{
								label: "Testimonials",
								to: "/testimonials"
							},
							{
								label: "Contact",
								to: "/contact"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-muted-foreground transition-colors hover:text-accent",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold uppercase tracking-widest text-muted-foreground",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-sm",
						children: services.slice(0, 8).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "text-muted-foreground transition-colors hover:text-accent",
							children: s.title
						}) }, s.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold uppercase tracking-widest text-muted-foreground",
						children: "Get in touch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									company.legal,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									company.street,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									company.city,
									", ",
									company.state,
									" ",
									company.zip
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.phoneHref,
								className: "flex gap-3 hover:text-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-accent" }),
									" ",
									company.phone
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${company.email}`,
								className: "flex gap-3 hover:text-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0 text-accent" }),
									" ",
									company.email
								]
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Rok Online Inc. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rangpur, Bangladesh · Serving clients worldwide" })]
			})]
		})]
	});
}
var styles_default = "/assets/styles-D1_jdh8c.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.png",
			type: "image/png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "bottom-right",
				theme: "dark",
				richColors: true
			})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-W6ZIv9Ft.mjs");
var Route$8 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({
		meta: [
			{ title: "Rok Online | Web Development & Digital Marketing Agency" },
			{
				name: "description",
				content: "Rok Online builds high-performing websites and runs SEO, Google Ads and Meta Ads campaigns that turn clicks into loyal customers. 150+ projects delivered."
			},
			{
				property: "og:title",
				content: "Rok Online | Digital Growth Agency Rangpur, Bangladesh"
			},
			{
				property: "og:description",
				content: "Data-driven websites and digital marketing designed to increase traffic, leads and revenue."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "Rok Online Inc.",
				description: "Digital marketing agency and web development company helping businesses grow online.",
				telephone: "+8801326131609",
				email: "email@rokonline.com",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Maddho Pirzabad",
					addressLocality: "Rangpur",
					addressRegion: "Bangladesh",
					postalCode: "5400",
					addressCountry: "US"
				},
				founder: {
					"@type": "Person",
					name: "Rokon Uz Zaman"
				},
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: "5",
					reviewCount: "145"
				}
			})
		}]
	})
});
var $$splitComponentImporter$7 = () => import("./about-DBHlsxV5.mjs");
var Route$7 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({
		meta: [
			{ title: "About Rok Online | Digital Growth Agency in Rangpur-BD" },
			{
				name: "description",
				content: "Learn how Rok Online grew from a web studio in 2018 into a full digital growth agency with 150+ projects and 145+ Upwork reviews."
			},
			{
				property: "og:title",
				content: "About Rok Online"
			},
			{
				property: "og:description",
				content: "Our story, mission, values and the milestones behind 150+ projects."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Rok Online Inc.",
				url: "/",
				founder: {
					"@type": "Person",
					name: "Rokon Uz Zaman"
				},
				foundingDate: "2018"
			})
		}]
	})
});
var $$splitComponentImporter$6 = () => import("./contact-DznEGgBs.mjs");
var Route$6 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({
		meta: [
			{ title: "Contact Rok Online | Free Digital Growth Consultation" },
			{
				name: "description",
				content: "Talk to Rok Online in Rangpur, Bangladesh about web development, SEO and paid ads. Call +8801326-131609 or book a free consultation."
			},
			{
				property: "og:title",
				content: "Contact Rok Online"
			},
			{
				property: "og:description",
				content: "Book a free digital growth consultation with the Rok Online team."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	})
});
var $$splitComponentImporter$5 = () => import("./portfolio-DX8L0WnO.mjs");
var Route$5 = createFileRoute("/portfolio")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({
		meta: [
			{ title: "Portfolio & Case Studies | Rok Online" },
			{
				name: "description",
				content: "Explore Rok Online case studies in web development, SEO, Google Ads, Meta Ads and branding with real performance results."
			},
			{
				property: "og:title",
				content: "Rok Online Portfolio & Case Studies"
			},
			{
				property: "og:description",
				content: "Real projects, real growth numbers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/portfolio"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/portfolio"
		}]
	})
});
var $$splitComponentImporter$4 = () => import("./process-DGohyzgF.mjs");
var Route$4 = createFileRoute("/process")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: "Our Process | How Rok Online Delivers Growth" },
			{
				name: "description",
				content: "See the five-stage Rok Online process: discovery, design, development, launch and growth optimization."
			},
			{
				property: "og:title",
				content: "The Rok Online Process"
			},
			{
				property: "og:description",
				content: "A proven five-stage growth system."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/process"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/process"
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./team-BRoaGhgK.mjs");
var Route$3 = createFileRoute("/team")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: "Our Team | Rok Online Digital Agency Experts" },
			{
				name: "description",
				content: "Meet the developers, designers, SEO specialists, ads experts and video editors behind Rok Online's client results."
			},
			{
				property: "og:title",
				content: "Meet The Rok Online Team"
			},
			{
				property: "og:description",
				content: "Senior specialists in development, SEO, paid media and creative."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/team"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/team"
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./testimonials-BfHDFY2_.mjs");
var Route$2 = createFileRoute("/testimonials")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: "Client Testimonials & Reviews | Rok Online" },
			{
				name: "description",
				content: "Read what clients say about working with Rok Online on web development, SEO and paid advertising projects."
			},
			{
				property: "og:title",
				content: "Rok Online Client Testimonials"
			},
			{
				property: "og:description",
				content: "145+ five-star reviews from happy clients."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/testimonials"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/testimonials"
		}]
	})
});
var $$splitComponentImporter$1 = () => import("./services.index-CIwhSWzW.mjs");
var Route$1 = createFileRoute("/services/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Digital Marketing & Web Development Services | Rok Online" },
			{
				name: "description",
				content: "Web development, SEO, Google Ads, Meta Ads, social media, branding, video editing and more — full-service digital growth from Rok Online."
			},
			{
				property: "og:title",
				content: "Rok Online Services"
			},
			{
				property: "og:description",
				content: "Everything you need to grow online, under one roof."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/services"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	})
});
var $$splitComponentImporter = () => import("./services._slug-DSr1QWM6.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = services.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return { service };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params, loaderData }) => {
		const s = loaderData?.service;
		const title = s ? `${s.title} Services | Rok Online` : "Service | Rok Online";
		const description = s?.short ?? "Digital growth services by Rok Online.";
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/services/${params.slug}`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: `/services/${params.slug}`
			}]
		};
	}
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var PortfolioRoute = Route$5.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$9
});
var ProcessRoute = Route$4.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$9
});
var TeamRoute = Route$3.update({
	id: "/team",
	path: "/team",
	getParentRoute: () => Route$9
});
var TestimonialsRoute = Route$2.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$9
});
var ServicesIndexRoute = Route$1.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PortfolioRoute,
	ProcessRoute,
	TeamRoute,
	TestimonialsRoute,
	ServicesSlugRoute: Route.update({
		id: "/services/$slug",
		path: "/services/$slug",
		getParentRoute: () => Route$9
	}),
	ServicesIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route as n, router_exports as t };
