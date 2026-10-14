globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-DlCmCVY1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"241-PoPUwKtssFn1Hsin31ixQ0Lpkb0\"",
		"mtime": "2026-10-14T17:46:17.611Z",
		"size": 577,
		"path": "../public/assets/about-DlCmCVY1.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-10-14T17:20:15.312Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"142b-01KdDe3gARZRpQPs4kKsJMtFRXo\"",
		"mtime": "2026-10-14T17:20:15.311Z",
		"size": 5163,
		"path": "../public/favicon.png"
	},
	"/assets/contact-DFU85xhR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a55-p901wmTLXG/YG+C/xm/Lhw2NEpQ\"",
		"mtime": "2026-10-14T17:46:17.612Z",
		"size": 6741,
		"path": "../public/assets/contact-DFU85xhR.js"
	},
	"/assets/CTA-ByvD9dee.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bca-KY3+FuMUDZkEW+zUOi1dRvCrJQM\"",
		"mtime": "2026-10-14T17:46:17.604Z",
		"size": 3018,
		"path": "../public/assets/CTA-ByvD9dee.js"
	},
	"/assets/Abdur-Rahman-Badsha-CP7dZ4Bm.webp": {
		"type": "image/webp",
		"etag": "\"8242-ojlGuz4jywBgufBJXDylZG+mQDs\"",
		"mtime": "2026-10-14T17:46:17.620Z",
		"size": 33346,
		"path": "../public/assets/Abdur-Rahman-Badsha-CP7dZ4Bm.webp"
	},
	"/assets/AL-Helal-DE7ZlFlu.webp": {
		"type": "image/webp",
		"etag": "\"9b86-hCrSaxVKqXF5BV8bPhjPtILrCrA\"",
		"mtime": "2026-10-14T17:46:17.620Z",
		"size": 39814,
		"path": "../public/assets/AL-Helal-DE7ZlFlu.webp"
	},
	"/assets/Azizul-Islam-Aziz-d-8T5I15.webp": {
		"type": "image/webp",
		"etag": "\"781a-HG637kwk8VxEgEtNv43lpIizF5Q\"",
		"mtime": "2026-10-14T17:46:17.621Z",
		"size": 30746,
		"path": "../public/assets/Azizul-Islam-Aziz-d-8T5I15.webp"
	},
	"/assets/Farid-web_dev-jB11SlM9.jpg": {
		"type": "image/jpeg",
		"etag": "\"15248-2DB2veaf5hGCpmmHnTONzoEMv88\"",
		"mtime": "2026-10-14T17:46:17.622Z",
		"size": 86600,
		"path": "../public/assets/Farid-web_dev-jB11SlM9.jpg"
	},
	"/assets/Josim-Uddin-DrL4Y-4x.webp": {
		"type": "image/webp",
		"etag": "\"8bac-yV8mYeER/uxmUx71VRXpbqWD4m0\"",
		"mtime": "2026-10-14T17:46:17.622Z",
		"size": 35756,
		"path": "../public/assets/Josim-Uddin-DrL4Y-4x.webp"
	},
	"/assets/EASY BEING GREEN (1)-BKiiShuU.jpg": {
		"type": "image/jpeg",
		"etag": "\"29381-HQQPbGLdMgNxZFIWEjuiUyq8Lrk\"",
		"mtime": "2026-10-14T17:46:17.621Z",
		"size": 168833,
		"path": "../public/assets/EASY BEING GREEN (1)-BKiiShuU.jpg"
	},
	"/assets/greenleaf-Bj5mr81H.png": {
		"type": "image/png",
		"etag": "\"1daf3-dw5s8JcQSAt9AHIfMPRbMErmEYI\"",
		"mtime": "2026-10-14T17:46:17.628Z",
		"size": 121587,
		"path": "../public/assets/greenleaf-Bj5mr81H.png"
	},
	"/assets/gloriaCleaning-C77cmxwA.png": {
		"type": "image/png",
		"etag": "\"1b4a1-5DPf3t7ko/Ww/xDTsK1RcmiMghI\"",
		"mtime": "2026-10-14T17:46:17.628Z",
		"size": 111777,
		"path": "../public/assets/gloriaCleaning-C77cmxwA.png"
	},
	"/assets/index-DrPlNiYH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"768d1-83qsFAZSRTHVk16x/ubrMBerqWo\"",
		"mtime": "2026-10-14T17:46:17.603Z",
		"size": 485585,
		"path": "../public/assets/index-DrPlNiYH.js"
	},
	"/assets/Junk Robbers-CY-Kj18N.png": {
		"type": "image/png",
		"etag": "\"1928b-IbQo2F9a9jVmo7Mn4dnW1rgQntE\"",
		"mtime": "2026-10-14T17:46:17.623Z",
		"size": 103051,
		"path": "../public/assets/Junk Robbers-CY-Kj18N.png"
	},
	"/assets/maid it-ocP9g8X0.png": {
		"type": "image/png",
		"etag": "\"127b5-GR0CXO3mRgv7w+NBWBpUDPRsIDE\"",
		"mtime": "2026-10-14T17:46:17.629Z",
		"size": 75701,
		"path": "../public/assets/maid it-ocP9g8X0.png"
	},
	"/assets/Mahadi-hasan-DvOW52KX.webp": {
		"type": "image/webp",
		"etag": "\"8c80-gtOHzFhGxT7Yhh2BB7euqLUkvyo\"",
		"mtime": "2026-10-14T17:46:17.623Z",
		"size": 35968,
		"path": "../public/assets/Mahadi-hasan-DvOW52KX.webp"
	},
	"/assets/PageHero-CqHning0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"437-nIwJkZJX1/DQwWK5nL0X5XcPpNs\"",
		"mtime": "2026-10-14T17:46:17.605Z",
		"size": 1079,
		"path": "../public/assets/PageHero-CqHning0.js"
	},
	"/assets/portfolio-CgokHj7x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1da-0ZCgyCZ9GOqLUFGOmL8xg7MHFGQ\"",
		"mtime": "2026-10-14T17:46:17.613Z",
		"size": 474,
		"path": "../public/assets/portfolio-CgokHj7x.js"
	},
	"/assets/Nahid-Hassan-BflrEEkV.webp": {
		"type": "image/webp",
		"etag": "\"75dc-O5ysXsT3kc+tjeU8rjeliXyL2q0\"",
		"mtime": "2026-10-14T17:46:17.625Z",
		"size": 30172,
		"path": "../public/assets/Nahid-Hassan-BflrEEkV.webp"
	},
	"/assets/Portfolio-DaB1CqWB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d40-q00M9whzH7lqCz5Cw8P1bGNAqoY\"",
		"mtime": "2026-10-14T17:46:17.606Z",
		"size": 3392,
		"path": "../public/assets/Portfolio-DaB1CqWB.js"
	},
	"/assets/process-8YE0Djpv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ce-gv3fuN3plLIunG967wPFg63zOmQ\"",
		"mtime": "2026-10-14T17:46:17.614Z",
		"size": 462,
		"path": "../public/assets/process-8YE0Djpv.js"
	},
	"/assets/Process-BLrTo2HJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80e-zDFZKyOF3VuJBijsjRRR7PUyZgI\"",
		"mtime": "2026-10-14T17:46:17.606Z",
		"size": 2062,
		"path": "../public/assets/Process-BLrTo2HJ.js"
	},
	"/assets/Masum-Billah-CvwZuxNe.webp": {
		"type": "image/webp",
		"etag": "\"7f7a-9Lg9wNeSNLHAI9siawhhNR6ynJM\"",
		"mtime": "2026-10-14T17:46:17.624Z",
		"size": 32634,
		"path": "../public/assets/Masum-Billah-CvwZuxNe.webp"
	},
	"/assets/Reveal-CTXVtqfO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a5f0-wcq8iR+XJgorFBNM2wtoHYnbaus\"",
		"mtime": "2026-10-14T17:46:17.607Z",
		"size": 108016,
		"path": "../public/assets/Reveal-CTXVtqfO.js"
	},
	"/assets/Rok-Online-Logo-CRP85G02.png": {
		"type": "image/png",
		"etag": "\"2659-6V7SNznVs4HqIv+8E92yd2RyRyg\"",
		"mtime": "2026-10-14T17:46:17.625Z",
		"size": 9817,
		"path": "../public/assets/Rok-Online-Logo-CRP85G02.png"
	},
	"/assets/routes-BIahom_H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"301e-GZWBWF1t8RI8HCkY5WcSdpa9IJQ\"",
		"mtime": "2026-10-14T17:46:17.615Z",
		"size": 12318,
		"path": "../public/assets/routes-BIahom_H.js"
	},
	"/assets/SectionHeading-DDWGAlvS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"317-6z09j5jFM0YEOmoqHnfSaqDxA2k\"",
		"mtime": "2026-10-14T17:46:17.607Z",
		"size": 791,
		"path": "../public/assets/SectionHeading-DDWGAlvS.js"
	},
	"/assets/robindev-DuksWr25.png": {
		"type": "image/png",
		"etag": "\"105df-qM9uEdNwVixbxVNtyYgb22sPv8Q\"",
		"mtime": "2026-10-14T17:46:17.629Z",
		"size": 67039,
		"path": "../public/assets/robindev-DuksWr25.png"
	},
	"/assets/services.index-D60lESHV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"500-EI0pB8yb5/hnIPH/MdUGCqjPlik\"",
		"mtime": "2026-10-14T17:46:17.616Z",
		"size": 1280,
		"path": "../public/assets/services.index-D60lESHV.js"
	},
	"/assets/services._slug-uAanJF2w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98d-bEMkGMBU9zFoCqLMg+QMgKBLVB4\"",
		"mtime": "2026-10-14T17:46:17.615Z",
		"size": 2445,
		"path": "../public/assets/services._slug-uAanJF2w.js"
	},
	"/assets/SplitText-B-Z94_KP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f3-Kyt3dF9vhk5/jQcbhumRsINH/U4\"",
		"mtime": "2026-10-14T17:46:17.608Z",
		"size": 1267,
		"path": "../public/assets/SplitText-B-Z94_KP.js"
	},
	"/assets/Rokon-Uz-Zaman-BhyadR_w.webp": {
		"type": "image/webp",
		"etag": "\"a078-NoTp92G/Sa61R/AWfJnmDH+udk8\"",
		"mtime": "2026-10-14T17:46:17.626Z",
		"size": 41080,
		"path": "../public/assets/Rokon-Uz-Zaman-BhyadR_w.webp"
	},
	"/assets/styles-D1_jdh8c.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18568-MpMoOcmF1C7eY651VH5BrsBO4As\"",
		"mtime": "2026-10-14T17:46:17.639Z",
		"size": 99688,
		"path": "../public/assets/styles-D1_jdh8c.css"
	},
	"/assets/Team-D58k1tZS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76a-6JpJtKX5VlCIW6LTOCYqb7JLDgs\"",
		"mtime": "2026-10-14T17:46:17.609Z",
		"size": 1898,
		"path": "../public/assets/Team-D58k1tZS.js"
	},
	"/assets/Senior-App-Developer-DPzyoaFU.jpg": {
		"type": "image/jpeg",
		"etag": "\"1eaa2-0/lRbLz4hhu4lGndPBPVpTsrUaQ\"",
		"mtime": "2026-10-14T17:46:17.626Z",
		"size": 125602,
		"path": "../public/assets/Senior-App-Developer-DPzyoaFU.jpg"
	},
	"/assets/team-D5acA8NW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dc-kiZW93rfxHo7PM9NfXCJeoRKkNE\"",
		"mtime": "2026-10-14T17:46:17.618Z",
		"size": 476,
		"path": "../public/assets/team-D5acA8NW.js"
	},
	"/assets/TechStack-BU66rWJm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15bc-Mkbx/SCSxn77Mi9tQ9xc0tLI7ts\"",
		"mtime": "2026-10-14T17:46:17.610Z",
		"size": 5564,
		"path": "../public/assets/TechStack-BU66rWJm.js"
	},
	"/assets/Testimonials-CVAr9-WR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15e7-J05peG1tfA+R6FUfzVjOOISNTQg\"",
		"mtime": "2026-10-14T17:46:17.611Z",
		"size": 5607,
		"path": "../public/assets/Testimonials-CVAr9-WR.js"
	},
	"/assets/testimonials-_Q9CReFy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d3-tW/qoHGxR/k1e2WRMBL1Xpl8TUU\"",
		"mtime": "2026-10-14T17:46:17.619Z",
		"size": 467,
		"path": "../public/assets/testimonials-_Q9CReFy.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_aQeuLI = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_aQeuLI
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
