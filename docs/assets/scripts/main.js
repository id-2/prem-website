var w = Object.defineProperty;
var m = (n, t, e) =>
	t in n
		? w(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
		: (n[t] = e);
var d = (n, t, e) => (m(n, typeof t != "symbol" ? t + "" : t, e), e);
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === "childList")
				for (const c of o.addedNodes)
					c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
					? (o.credentials = "omit")
					: (o.credentials = "same-origin"),
			o
		);
	}
	function s(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = e(i);
		fetch(i.href, o);
	}
})();
class p {
	constructor() {
		this.instances = {};
	}
	add(t, e, s) {
		this.instances[t] = { key: t, instance: e, preserve: s };
	}
	get(t) {
		return this.instances[t] && this.instances[t].instance
			? this.instances[t].instance
			: null;
	}
	getAll() {
		return this.instances;
	}
	remove(t) {
		const e = this.get(t);
		e && (!e.preserve && e.destroy && e.destroy(), (this.instances[t] = null));
	}
	removeAll() {
		for (const t in this.instances) this.remove(t);
	}
	destroy(t) {
		const e = this.get(t),
			s = this.instances[t] ? this.instances[t].preserve : !1;
		e && !s && e.destroy && e.destroy();
	}
	destroyAll() {
		for (const t in this.instances) this.destroy(t);
	}
	map(t, ...e) {
		for (const s in this.instances) {
			const i = this.get(s);
			i[t] && i[t](...e);
		}
	}
	call(t, e, ...s) {
		const i = this.get(t);
		if (i && i[e]) return i[e](...s);
	}
}
const a = new p();
class f {
	constructor() {
		(this.device = 0), (this.window = { width: 0, height: 0 });
	}
	detectApple() {
		(this.isIos =
			/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream),
			(this.isSafari = /^((?!chrome|android).)*safari/i.test(
				navigator.userAgent,
			));
	}
	createRuler() {
		let t = document.createElement("div");
		(t.style.position = "fixed"),
			(t.style.height = "100%"),
			(t.style.width = 0),
			(t.style.top = 0),
			document.documentElement.appendChild(t),
			(this.window.height = this.isIos ? t.offsetHeight : window.innerHeight),
			document.documentElement.removeChild(t),
			(t = null);
	}
	getWindow() {
		this.createRuler(), (this.window.width = window.innerWidth);
	}
	getDevice() {
		this.device = window.matchMedia("(min-width:1920px)").matches
			? 3
			: window.matchMedia("(min-width:1024px)").matches
				? 2
				: window.matchMedia("(min-width:768px)").matches
					? 1
					: 0;
	}
	isTouch() {
		return document.body.classList.contains("is-touch");
	}
	setup() {
		this.detectApple(), this.getDevice(), this.getWindow();
	}
	init() {
		this.setup();
	}
	resize() {
		const t = window.innerWidth,
			e = window.innerHeight;
		this.detectApple(),
			this.getDevice(),
			this.window.width !== t && (this.window.width = window.innerWidth),
			this.window.height !== e && this.createRuler();
	}
}
const r = new f();
class g {
	constructor() {
		this.init();
	}
	resize() {
		this.winW !== r.window.width &&
			((this.winW = r.window.width), this.setup());
	}
	setup() {
		const t = r.isIos ? window.screen.height : window.innerHeight;
		document.documentElement.style.setProperty(
			"--v-width",
			`${window.innerWidth}px`,
		),
			document.documentElement.style.setProperty("--v-height", `${t}px`);
	}
	init() {
		(this.winW = r.window.width), this.setup();
	}
}
function h(n, t, e) {
	var s;
	return function () {
		var i = this,
			o = arguments,
			c = function () {
				(s = null), e || n.apply(i, o);
			},
			u = e && !s;
		clearTimeout(s), (s = setTimeout(c, t)), u && n.apply(i, o);
	};
}
function l() {
	let n = !1;
	return (
		window.PointerEvent && "maxTouchPoints" in navigator
			? navigator.maxTouchPoints > 0 && (n = !0)
			: ((window.matchMedia &&
					window.matchMedia("(any-pointer:coarse)").matches) ||
					window.TouchEvent ||
					"ontouchstart" in window) &&
				(n = !0),
		n
	);
}
class v {
	constructor() {
		d(this, "onResize", () => {
			r.resize(),
				document.body.classList.toggle("is-touch", l()),
				a.map("resize");
		});
	}
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			(document.documentElement.className = "js"),
				document.body.classList.toggle("is-touch", l());
		}),
			window.addEventListener("load", () => {
				r.init(), a.add("viewportFixer", new g());
			}),
			window.addEventListener("resize", h(this.onResize, 150)),
			window.addEventListener("orientationchange", h(this.onResize, 150));
	}
}
const y = new v();
y.start();