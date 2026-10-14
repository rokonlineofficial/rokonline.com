import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as company, i as Stagger, l as services, r as Reveal, t as Magnetic } from "./Reveal-tsMK616m.mjs";
import { t as PageHero } from "./PageHero-DazTbn8Q.mjs";
import { S as CircleCheck, d as Phone, g as Mail, h as MapPin, s as Send, x as Clock } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DznEGgBs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		toast.success("Thanks! We'll be in touch within one business day.");
		e.currentTarget.reset();
	};
	const fieldClass = "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Let's Talk About Your Growth",
		subtitle: "Tell us about your business and goals. You'll hear back from a senior strategist — not a sales bot — within one business day."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad pt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.3fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "glass rounded-3xl p-7 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-extrabold",
						children: "Request a free consultation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Share a few details and we'll prepare an initial plan before we even meet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "name",
								placeholder: "Jane Smith",
								className: fieldClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								name: "email",
								placeholder: "jane@company.com",
								className: fieldClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								placeholder: "(704) 000-0000",
								className: fieldClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "company",
								placeholder: "Company name",
								className: fieldClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Interested service"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "service",
									className: fieldClass,
									defaultValue: "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select a service"
									}), services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s.title,
										children: s.title
									}, s.slug))]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									name: "message",
									rows: 5,
									placeholder: "What are you trying to achieve?",
									className: fieldClass
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]",
									children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Message sent"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4 transition-transform group-hover:translate-x-1" })] })
								}) })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-hover rounded-3xl p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "Contact information"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-4 text-sm text-muted-foreground",
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
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 shrink-0 text-accent" }), " 24 Hours Open"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass overflow-hidden rounded-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Rok Online office location map",
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.703409639301!2d89.20522717446146!3d25.747320009201005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3338f7c8ddfb9%3A0xe62a8e84a913c5db!2sRok%20Online!5e0!3m2!1sen!2sbd!4v1789432895800!5m2!1sen!2sbd",
							loading: "lazy",
							className: "h-72 w-full border-0 grayscale-[35%]",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-3xl p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "Follow us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [
								{
									name: "LinkedIn",
									url: "https://www.linkedin.com/company/rokonline"
								},
								{
									name: "Facebook",
									url: "https://www.facebook.com/rokonlineinc"
								},
								{
									name: "Instagram",
									url: "https://www.instagram.com/rokonlineinc"
								},
								{
									name: "YouTube",
									url: "https://www.youtube.com/@rokonline"
								},
								{
									name: "Upwork",
									url: "/#"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "\r\n                      rounded-full\r\n                      border\r\n                      border-border\r\n                      px-4\r\n                      py-2\r\n                      text-xs\r\n                      font-semibold\r\n                      text-muted-foreground\r\n                      transition-all\r\n                      hover:-translate-y-0.5\r\n                      hover:border-accent\r\n                      hover:text-accent\r\n                    ",
								children: s.name
							}, s.name))
						})]
					})
				]
			})]
		})
	})] });
}
var SplitComponent = ContactPage;
//#endregion
export { SplitComponent as component };
