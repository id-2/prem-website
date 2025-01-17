var ku = Object.defineProperty;
var Au = (a, t, e) =>
	t in a
		? ku(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
		: (a[t] = e);
var Nt = (a, t, e) => (Au(a, typeof t != "symbol" ? t + "" : t, e), e);
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
	new MutationObserver((n) => {
		for (const r of n)
			if (r.type === "childList")
				for (const s of r.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(n) {
		const r = {};
		return (
			n.integrity && (r.integrity = n.integrity),
			n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
			n.crossOrigin === "use-credentials"
				? (r.credentials = "include")
				: n.crossOrigin === "anonymous"
					? (r.credentials = "omit")
					: (r.credentials = "same-origin"),
			r
		);
	}
	function i(n) {
		if (n.ep) return;
		n.ep = !0;
		const r = e(n);
		fetch(n.href, r);
	}
})();
function Ni(a) {
	if (a === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return a;
}
function $l(a, t) {
	(a.prototype = Object.create(t.prototype)),
		(a.prototype.constructor = a),
		(a.__proto__ = t);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var si = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: { lineHeight: "" },
	},
	rr = { duration: 0.5, overwrite: !1, delay: 0 },
	ua,
	Oe,
	qt,
	di = 1e8,
	Bt = 1 / di,
	Ao = Math.PI * 2,
	Lu = Ao / 4,
	Iu = 0,
	jl = Math.sqrt,
	Ru = Math.cos,
	Fu = Math.sin,
	pe = function (t) {
		return typeof t == "string";
	},
	Qt = function (t) {
		return typeof t == "function";
	},
	ji = function (t) {
		return typeof t == "number";
	},
	fa = function (t) {
		return typeof t > "u";
	},
	Ri = function (t) {
		return typeof t == "object";
	},
	He = function (t) {
		return t !== !1;
	},
	da = function () {
		return typeof window < "u";
	},
	fs = function (t) {
		return Qt(t) || pe(t);
	},
	Vl =
		(typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
	Pe = Array.isArray,
	Lo = /(?:-?\.?\d|\.)+/gi,
	Wl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	Vn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	ao = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Gl = /[+-]=-?[.\d]+/,
	Ul = /[^,'"\[\]\s]+/gi,
	Nu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	jt,
	Pi,
	Io,
	ha,
	oi = {},
	zs = {},
	Kl,
	Ql = function (t) {
		return (zs = kn(t, oi)) && We;
	},
	pa = function (t, e) {
		return console.warn(
			"Invalid property",
			t,
			"set to",
			e,
			"Missing plugin? gsap.registerPlugin()",
		);
	},
	Wr = function (t, e) {
		return !e && console.warn(t);
	},
	Zl = function (t, e) {
		return (t && (oi[t] = e) && zs && (zs[t] = e)) || oi;
	},
	Gr = function () {
		return 0;
	},
	Bu = { suppressEvents: !0, isStart: !0, kill: !1 },
	Ds = { suppressEvents: !0, kill: !1 },
	zu = { suppressEvents: !0 },
	ga = {},
	rn = [],
	Ro = {},
	Jl,
	ti = {},
	lo = {},
	$a = 30,
	Os = [],
	_a = "",
	ma = function (t) {
		var e = t[0],
			i,
			n;
		if ((Ri(e) || Qt(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
			for (n = Os.length; n-- && !Os[n].targetTest(e); );
			i = Os[n];
		}
		for (n = t.length; n--; )
			(t[n] && (t[n]._gsap || (t[n]._gsap = new Tc(t[n], i)))) ||
				t.splice(n, 1);
		return t;
	},
	bn = function (t) {
		return t._gsap || ma(hi(t))[0]._gsap;
	},
	tc = function (t, e, i) {
		return (i = t[e]) && Qt(i)
			? t[e]()
			: (fa(i) && t.getAttribute && t.getAttribute(e)) || i;
	},
	$e = function (t, e) {
		return (t = t.split(",")).forEach(e) || t;
	},
	Jt = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	he = function (t) {
		return Math.round(t * 1e7) / 1e7 || 0;
	},
	Un = function (t, e) {
		var i = e.charAt(0),
			n = parseFloat(e.substr(2));
		return (
			(t = parseFloat(t)),
			i === "+" ? t + n : i === "-" ? t - n : i === "*" ? t * n : t / n
		);
	},
	qu = function (t, e) {
		for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
		return n < i;
	},
	qs = function () {
		var t = rn.length,
			e = rn.slice(0),
			i,
			n;
		for (Ro = {}, rn.length = 0, i = 0; i < t; i++)
			(n = e[i]),
				n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
	},
	ec = function (t, e, i, n) {
		rn.length && !Oe && qs(),
			t.render(e, i, n || (Oe && e < 0 && (t._initted || t._startAt))),
			rn.length && !Oe && qs();
	},
	ic = function (t) {
		var e = parseFloat(t);
		return (e || e === 0) && (t + "").match(Ul).length < 2
			? e
			: pe(t)
				? t.trim()
				: t;
	},
	nc = function (t) {
		return t;
	},
	gi = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	Yu = function (t) {
		return function (e, i) {
			for (var n in i)
				n in e || (n === "duration" && t) || n === "ease" || (e[n] = i[n]);
		};
	},
	kn = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t;
	},
	ja = function a(t, e) {
		for (var i in e)
			i !== "__proto__" &&
				i !== "constructor" &&
				i !== "prototype" &&
				(t[i] = Ri(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
		return t;
	},
	Ys = function (t, e) {
		var i = {},
			n;
		for (n in t) n in e || (i[n] = t[n]);
		return i;
	},
	kr = function (t) {
		var e = t.parent || jt,
			i = t.keyframes ? Yu(Pe(t.keyframes)) : gi;
		if (He(t.inherit))
			for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
		return t;
	},
	Xu = function (t, e) {
		for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; );
		return i < 0;
	},
	rc = function (t, e, i, n, r) {
		i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
		var s = t[n],
			o;
		if (r) for (o = e[r]; s && s[r] > o; ) s = s._prev;
		return (
			s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)),
			e._next ? (e._next._prev = e) : (t[n] = e),
			(e._prev = s),
			(e.parent = e._dp = t),
			e
		);
	},
	eo = function (t, e, i, n) {
		i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
		var r = e._prev,
			s = e._next;
		r ? (r._next = s) : t[i] === e && (t[i] = s),
			s ? (s._prev = r) : t[n] === e && (t[n] = r),
			(e._next = e._prev = e.parent = null);
	},
	an = function (t, e) {
		t.parent &&
			(!e || t.parent.autoRemoveChildren) &&
			t.parent.remove &&
			t.parent.remove(t),
			(t._act = 0);
	},
	Tn = function (t, e) {
		if (t && (!e || e._end > t._dur || e._start < 0))
			for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
		return t;
	},
	Hu = function (t) {
		for (var e = t.parent; e && e.parent; )
			(e._dirty = 1), e.totalDuration(), (e = e.parent);
		return t;
	},
	Fo = function (t, e, i, n) {
		return (
			t._startAt &&
			(Oe
				? t._startAt.revert(Ds)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
					t._startAt.render(e, !0, n))
		);
	},
	$u = function a(t) {
		return !t || (t._ts && a(t.parent));
	},
	Va = function (t) {
		return t._repeat ? sr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
	},
	sr = function (t, e) {
		var i = Math.floor((t /= e));
		return t && i === t ? i - 1 : i;
	},
	Xs = function (t, e) {
		return (
			(t - e._start) * e._ts +
			(e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
		);
	},
	io = function (t) {
		return (t._end = he(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || Bt) || 0),
		));
	},
	no = function (t, e) {
		var i = t._dp;
		return (
			i &&
				i.smoothChildTiming &&
				t._ts &&
				((t._start = he(
					i._time -
						(t._ts > 0
							? e / t._ts
							: ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
				)),
				io(t),
				i._dirty || Tn(i, t)),
			t
		);
	},
	sc = function (t, e) {
		var i;
		if (
			((e._time ||
				(!e._dur && e._initted) ||
				(e._start < t._time && (e._dur || !e.add))) &&
				((i = Xs(t.rawTime(), e)),
				(!e._dur || as(0, e.totalDuration(), i) - e._tTime > Bt) &&
					e.render(i, !0)),
			Tn(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
		) {
			if (t._dur < t.duration())
				for (i = t; i._dp; )
					i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
			t._zTime = -Bt;
		}
	},
	Ei = function (t, e, i, n) {
		return (
			e.parent && an(e),
			(e._start = he(
				(ji(i) ? i : i || t !== jt ? ci(t, i, e) : t._time) + e._delay,
			)),
			(e._end = he(
				e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
			)),
			rc(t, e, "_first", "_last", t._sort ? "_start" : 0),
			No(e) || (t._recent = e),
			n || sc(t, e),
			t._ts < 0 && no(t, t._tTime),
			t
		);
	},
	oc = function (t, e) {
		return (
			(oi.ScrollTrigger || pa("scrollTrigger", e)) &&
			oi.ScrollTrigger.create(e, t)
		);
	},
	ac = function (t, e, i, n, r) {
		if ((va(t, e, r), !t._initted)) return 1;
		if (
			!i &&
			t._pt &&
			!Oe &&
			((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
			Jl !== ei.frame
		)
			return rn.push(t), (t._lazy = [r, n]), 1;
	},
	ju = function a(t) {
		var e = t.parent;
		return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
	},
	No = function (t) {
		var e = t.data;
		return e === "isFromStart" || e === "isStart";
	},
	Vu = function (t, e, i, n) {
		var r = t.ratio,
			s =
				e < 0 ||
				(!e &&
					((!t._start && ju(t) && !(!t._initted && No(t))) ||
						((t._ts < 0 || t._dp._ts < 0) && !No(t))))
					? 0
					: 1,
			o = t._rDelay,
			c = 0,
			u,
			f,
			d;
		if (
			(o &&
				t._repeat &&
				((c = as(0, t._tDur, e)),
				(f = sr(c, o)),
				t._yoyo && f & 1 && (s = 1 - s),
				f !== sr(t._tTime, o) &&
					((r = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
			s !== r || Oe || n || t._zTime === Bt || (!e && t._zTime))
		) {
			if (!t._initted && ac(t, e, n, i, c)) return;
			for (
				d = t._zTime,
					t._zTime = e || (i ? Bt : 0),
					i || (i = e && !d),
					t.ratio = s,
					t._from && (s = 1 - s),
					t._time = 0,
					t._tTime = c,
					u = t._pt;
				u;

			)
				u.r(s, u.d), (u = u._next);
			e < 0 && Fo(t, e, i, !0),
				t._onUpdate && !i && ri(t, "onUpdate"),
				c && t._repeat && !i && t.parent && ri(t, "onRepeat"),
				(e >= t._tDur || e < 0) &&
					t.ratio === s &&
					(s && an(t, 1),
					!i &&
						!Oe &&
						(ri(t, s ? "onComplete" : "onReverseComplete", !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = e);
	},
	Wu = function (t, e, i) {
		var n;
		if (i > e)
			for (n = t._first; n && n._start <= i; ) {
				if (n.data === "isPause" && n._start > e) return n;
				n = n._next;
			}
		else
			for (n = t._last; n && n._start >= i; ) {
				if (n.data === "isPause" && n._start < e) return n;
				n = n._prev;
			}
	},
	or = function (t, e, i, n) {
		var r = t._repeat,
			s = he(e) || 0,
			o = t._tTime / t._tDur;
		return (
			o && !n && (t._time *= s / t._dur),
			(t._dur = s),
			(t._tDur = r ? (r < 0 ? 1e10 : he(s * (r + 1) + t._rDelay * r)) : s),
			o > 0 && !n && no(t, (t._tTime = t._tDur * o)),
			t.parent && io(t),
			i || Tn(t.parent, t),
			t
		);
	},
	Wa = function (t) {
		return t instanceof Re ? Tn(t) : or(t, t._dur);
	},
	Gu = { _start: 0, endTime: Gr, totalDuration: Gr },
	ci = function a(t, e, i) {
		var n = t.labels,
			r = t._recent || Gu,
			s = t.duration() >= di ? r.endTime(!1) : t._dur,
			o,
			c,
			u;
		return pe(e) && (isNaN(e) || e in n)
			? ((c = e.charAt(0)),
				(u = e.substr(-1) === "%"),
				(o = e.indexOf("=")),
				c === "<" || c === ">"
					? (o >= 0 && (e = e.replace(/=/, "")),
						(c === "<" ? r._start : r.endTime(r._repeat >= 0)) +
							(parseFloat(e.substr(1)) || 0) *
								(u ? (o < 0 ? r : i).totalDuration() / 100 : 1))
					: o < 0
						? (e in n || (n[e] = s), n[e])
						: ((c = parseFloat(e.charAt(o - 1) + e.substr(o + 1))),
							u && i && (c = (c / 100) * (Pe(i) ? i[0] : i).totalDuration()),
							o > 1 ? a(t, e.substr(0, o - 1), i) + c : s + c))
			: e == null
				? s
				: +e;
	},
	Ar = function (t, e, i) {
		var n = ji(e[1]),
			r = (n ? 2 : 1) + (t < 2 ? 0 : 1),
			s = e[r],
			o,
			c;
		if ((n && (s.duration = e[1]), (s.parent = i), t)) {
			for (o = s, c = i; c && !("immediateRender" in o); )
				(o = c.vars.defaults || {}), (c = He(c.vars.inherit) && c.parent);
			(s.immediateRender = He(o.immediateRender)),
				t < 2 ? (s.runBackwards = 1) : (s.startAt = e[r - 1]);
		}
		return new re(e[0], s, e[r + 1]);
	},
	un = function (t, e) {
		return t || t === 0 ? e(t) : e;
	},
	as = function (t, e, i) {
		return i < t ? t : i > e ? e : i;
	},
	De = function (t, e) {
		return !pe(t) || !(e = Nu.exec(t)) ? "" : e[1];
	},
	Uu = function (t, e, i) {
		return un(i, function (n) {
			return as(t, e, n);
		});
	},
	Bo = [].slice,
	lc = function (t, e) {
		return (
			t &&
			Ri(t) &&
			"length" in t &&
			((!e && !t.length) || (t.length - 1 in t && Ri(t[0]))) &&
			!t.nodeType &&
			t !== Pi
		);
	},
	Ku = function (t, e, i) {
		return (
			i === void 0 && (i = []),
			t.forEach(function (n) {
				var r;
				return (pe(n) && !e) || lc(n, 1)
					? (r = i).push.apply(r, hi(n))
					: i.push(n);
			}) || i
		);
	},
	hi = function (t, e, i) {
		return qt && !e && qt.selector
			? qt.selector(t)
			: pe(t) && !i && (Io || !ar())
				? Bo.call((e || ha).querySelectorAll(t), 0)
				: Pe(t)
					? Ku(t, i)
					: lc(t)
						? Bo.call(t, 0)
						: t
							? [t]
							: [];
	},
	zo = function (t) {
		return (
			(t = hi(t)[0] || Wr("Invalid scope") || {}),
			function (e) {
				var i = t.current || t.nativeElement || t;
				return hi(
					e,
					i.querySelectorAll
						? i
						: i === t
							? Wr("Invalid scope") || ha.createElement("div")
							: t,
				);
			}
		);
	},
	cc = function (t) {
		return t.sort(function () {
			return 0.5 - Math.random();
		});
	},
	uc = function (t) {
		if (Qt(t)) return t;
		var e = Ri(t) ? t : { each: t },
			i = Sn(e.ease),
			n = e.from || 0,
			r = parseFloat(e.base) || 0,
			s = {},
			o = n > 0 && n < 1,
			c = isNaN(n) || o,
			u = e.axis,
			f = n,
			d = n;
		return (
			pe(n)
				? (f = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
				: !o && c && ((f = n[0]), (d = n[1])),
			function (p, l, g) {
				var h = (g || e).length,
					m = s[h],
					_,
					y,
					S,
					x,
					b,
					C,
					M,
					O,
					E;
				if (!m) {
					if (((E = e.grid === "auto" ? 0 : (e.grid || [1, di])[1]), !E)) {
						for (
							M = -di;
							M < (M = g[E++].getBoundingClientRect().left) && E < h;

						);
						E < h && E--;
					}
					for (
						m = s[h] = [],
							_ = c ? Math.min(E, h) * f - 0.5 : n % E,
							y = E === di ? 0 : c ? (h * d) / E - 0.5 : (n / E) | 0,
							M = 0,
							O = di,
							C = 0;
						C < h;
						C++
					)
						(S = (C % E) - _),
							(x = y - ((C / E) | 0)),
							(m[C] = b = u ? Math.abs(u === "y" ? x : S) : jl(S * S + x * x)),
							b > M && (M = b),
							b < O && (O = b);
					n === "random" && cc(m),
						(m.max = M - O),
						(m.min = O),
						(m.v = h =
							(parseFloat(e.amount) ||
								parseFloat(e.each) *
									(E > h
										? h - 1
										: u
											? u === "y"
												? h / E
												: E
											: Math.max(E, h / E)) ||
								0) * (n === "edges" ? -1 : 1)),
						(m.b = h < 0 ? r - h : r),
						(m.u = De(e.amount || e.each) || 0),
						(i = i && h < 0 ? xc(i) : i);
				}
				return (
					(h = (m[p] - m.min) / m.max || 0),
					he(m.b + (i ? i(h) : h) * m.v) + m.u
				);
			}
		);
	},
	qo = function (t) {
		var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
		return function (i) {
			var n = he(Math.round(parseFloat(i) / t) * t * e);
			return (n - (n % 1)) / e + (ji(i) ? 0 : De(i));
		};
	},
	fc = function (t, e) {
		var i = Pe(t),
			n,
			r;
		return (
			!i &&
				Ri(t) &&
				((n = i = t.radius || di),
				t.values
					? ((t = hi(t.values)), (r = !ji(t[0])) && (n *= n))
					: (t = qo(t.increment))),
			un(
				e,
				i
					? Qt(t)
						? function (s) {
								return (r = t(s)), Math.abs(r - s) <= n ? r : s;
							}
						: function (s) {
								for (
									var o = parseFloat(r ? s.x : s),
										c = parseFloat(r ? s.y : 0),
										u = di,
										f = 0,
										d = t.length,
										p,
										l;
									d--;

								)
									r
										? ((p = t[d].x - o), (l = t[d].y - c), (p = p * p + l * l))
										: (p = Math.abs(t[d] - o)),
										p < u && ((u = p), (f = d));
								return (
									(f = !n || u <= n ? t[f] : s),
									r || f === s || ji(s) ? f : f + De(s)
								);
							}
					: qo(t),
			)
		);
	},
	dc = function (t, e, i, n) {
		return un(Pe(t) ? !e : i === !0 ? !!(i = 0) : !n, function () {
			return Pe(t)
				? t[~~(Math.random() * t.length)]
				: (i = i || 1e-5) &&
						(n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
						Math.floor(
							Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) *
								i *
								n,
						) / n;
		});
	},
	Qu = function () {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		return function (n) {
			return e.reduce(function (r, s) {
				return s(r);
			}, n);
		};
	},
	Zu = function (t, e) {
		return function (i) {
			return t(parseFloat(i)) + (e || De(i));
		};
	},
	Ju = function (t, e, i) {
		return pc(t, e, 0, 1, i);
	},
	hc = function (t, e, i) {
		return un(i, function (n) {
			return t[~~e(n)];
		});
	},
	tf = function a(t, e, i) {
		var n = e - t;
		return Pe(t)
			? hc(t, a(0, t.length), e)
			: un(i, function (r) {
					return ((n + ((r - t) % n)) % n) + t;
				});
	},
	ef = function a(t, e, i) {
		var n = e - t,
			r = n * 2;
		return Pe(t)
			? hc(t, a(0, t.length - 1), e)
			: un(i, function (s) {
					return (s = (r + ((s - t) % r)) % r || 0), t + (s > n ? r - s : s);
				});
	},
	Ur = function (t) {
		for (var e = 0, i = "", n, r, s, o; ~(n = t.indexOf("random(", e)); )
			(s = t.indexOf(")", n)),
				(o = t.charAt(n + 7) === "["),
				(r = t.substr(n + 7, s - n - 7).match(o ? Ul : Lo)),
				(i +=
					t.substr(e, n - e) + dc(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5)),
				(e = s + 1);
		return i + t.substr(e, t.length - e);
	},
	pc = function (t, e, i, n, r) {
		var s = e - t,
			o = n - i;
		return un(r, function (c) {
			return i + (((c - t) / s) * o || 0);
		});
	},
	nf = function a(t, e, i, n) {
		var r = isNaN(t + e)
			? 0
			: function (l) {
					return (1 - l) * t + l * e;
				};
		if (!r) {
			var s = pe(t),
				o = {},
				c,
				u,
				f,
				d,
				p;
			if ((i === !0 && (n = 1) && (i = null), s))
				(t = { p: t }), (e = { p: e });
			else if (Pe(t) && !Pe(e)) {
				for (f = [], d = t.length, p = d - 2, u = 1; u < d; u++)
					f.push(a(t[u - 1], t[u]));
				d--,
					(r = function (g) {
						g *= d;
						var h = Math.min(p, ~~g);
						return f[h](g - h);
					}),
					(i = e);
			} else n || (t = kn(Pe(t) ? [] : {}, t));
			if (!f) {
				for (c in e) ya.call(o, t, c, "get", e[c]);
				r = function (g) {
					return ba(g, o) || (s ? t.p : t);
				};
			}
		}
		return un(i, r);
	},
	Ga = function (t, e, i) {
		var n = t.labels,
			r = di,
			s,
			o,
			c;
		for (s in n)
			(o = n[s] - e),
				o < 0 == !!i && o && r > (o = Math.abs(o)) && ((c = s), (r = o));
		return c;
	},
	ri = function (t, e, i) {
		var n = t.vars,
			r = n[e],
			s = qt,
			o = t._ctx,
			c,
			u,
			f;
		if (r)
			return (
				(c = n[e + "Params"]),
				(u = n.callbackScope || t),
				i && rn.length && qs(),
				o && (qt = o),
				(f = c ? r.apply(u, c) : r.call(u)),
				(qt = s),
				f
			);
	},
	xr = function (t) {
		return (
			an(t),
			t.scrollTrigger && t.scrollTrigger.kill(!!Oe),
			t.progress() < 1 && ri(t, "onInterrupt"),
			t
		);
	},
	Wn,
	gc = [],
	_c = function (t) {
		if (t)
			if (((t = (!t.name && t.default) || t), da() || t.headless)) {
				var e = t.name,
					i = Qt(t),
					n =
						e && !i && t.init
							? function () {
									this._props = [];
								}
							: t,
					r = {
						init: Gr,
						render: ba,
						add: ya,
						kill: vf,
						modifier: yf,
						rawVars: 0,
					},
					s = {
						targetTest: 0,
						get: 0,
						getSetter: wa,
						aliases: {},
						register: 0,
					};
				if ((ar(), t !== n)) {
					if (ti[e]) return;
					gi(n, gi(Ys(t, r), s)),
						kn(n.prototype, kn(r, Ys(t, s))),
						(ti[(n.prop = e)] = n),
						t.targetTest && (Os.push(n), (ga[e] = 1)),
						(e =
							(e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
							"Plugin");
				}
				Zl(e, n), t.register && t.register(We, n, je);
			} else gc.push(t);
	},
	Lt = 255,
	wr = {
		aqua: [0, Lt, Lt],
		lime: [0, Lt, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, Lt],
		navy: [0, 0, 128],
		white: [Lt, Lt, Lt],
		olive: [128, 128, 0],
		yellow: [Lt, Lt, 0],
		orange: [Lt, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [Lt, 0, 0],
		pink: [Lt, 192, 203],
		cyan: [0, Lt, Lt],
		transparent: [Lt, Lt, Lt, 0],
	},
	co = function (t, e, i) {
		return (
			(t += t < 0 ? 1 : t > 1 ? -1 : 0),
			((t * 6 < 1
				? e + (i - e) * t * 6
				: t < 0.5
					? i
					: t * 3 < 2
						? e + (i - e) * (2 / 3 - t) * 6
						: e) *
				Lt +
				0.5) |
				0
		);
	},
	mc = function (t, e, i) {
		var n = t ? (ji(t) ? [t >> 16, (t >> 8) & Lt, t & Lt] : 0) : wr.black,
			r,
			s,
			o,
			c,
			u,
			f,
			d,
			p,
			l,
			g;
		if (!n) {
			if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), wr[t]))
				n = wr[t];
			else if (t.charAt(0) === "#") {
				if (
					(t.length < 6 &&
						((r = t.charAt(1)),
						(s = t.charAt(2)),
						(o = t.charAt(3)),
						(t =
							"#" +
							r +
							r +
							s +
							s +
							o +
							o +
							(t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
					t.length === 9)
				)
					return (
						(n = parseInt(t.substr(1, 6), 16)),
						[n >> 16, (n >> 8) & Lt, n & Lt, parseInt(t.substr(7), 16) / 255]
					);
				(t = parseInt(t.substr(1), 16)), (n = [t >> 16, (t >> 8) & Lt, t & Lt]);
			} else if (t.substr(0, 3) === "hsl") {
				if (((n = g = t.match(Lo)), !e))
					(c = (+n[0] % 360) / 360),
						(u = +n[1] / 100),
						(f = +n[2] / 100),
						(s = f <= 0.5 ? f * (u + 1) : f + u - f * u),
						(r = f * 2 - s),
						n.length > 3 && (n[3] *= 1),
						(n[0] = co(c + 1 / 3, r, s)),
						(n[1] = co(c, r, s)),
						(n[2] = co(c - 1 / 3, r, s));
				else if (~t.indexOf("="))
					return (n = t.match(Wl)), i && n.length < 4 && (n[3] = 1), n;
			} else n = t.match(Lo) || wr.transparent;
			n = n.map(Number);
		}
		return (
			e &&
				!g &&
				((r = n[0] / Lt),
				(s = n[1] / Lt),
				(o = n[2] / Lt),
				(d = Math.max(r, s, o)),
				(p = Math.min(r, s, o)),
				(f = (d + p) / 2),
				d === p
					? (c = u = 0)
					: ((l = d - p),
						(u = f > 0.5 ? l / (2 - d - p) : l / (d + p)),
						(c =
							d === r
								? (s - o) / l + (s < o ? 6 : 0)
								: d === s
									? (o - r) / l + 2
									: (r - s) / l + 4),
						(c *= 60)),
				(n[0] = ~~(c + 0.5)),
				(n[1] = ~~(u * 100 + 0.5)),
				(n[2] = ~~(f * 100 + 0.5))),
			i && n.length < 4 && (n[3] = 1),
			n
		);
	},
	yc = function (t) {
		var e = [],
			i = [],
			n = -1;
		return (
			t.split(sn).forEach(function (r) {
				var s = r.match(Vn) || [];
				e.push.apply(e, s), i.push((n += s.length + 1));
			}),
			(e.c = i),
			e
		);
	},
	Ua = function (t, e, i) {
		var n = "",
			r = (t + n).match(sn),
			s = e ? "hsla(" : "rgba(",
			o = 0,
			c,
			u,
			f,
			d;
		if (!r) return t;
		if (
			((r = r.map(function (p) {
				return (
					(p = mc(p, e, 1)) &&
					s +
						(e ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
						")"
				);
			})),
			i && ((f = yc(t)), (c = i.c), c.join(n) !== f.c.join(n)))
		)
			for (u = t.replace(sn, "1").split(Vn), d = u.length - 1; o < d; o++)
				n +=
					u[o] +
					(~c.indexOf(o)
						? r.shift() || s + "0,0,0,0)"
						: (f.length ? f : r.length ? r : i).shift());
		if (!u)
			for (u = t.split(sn), d = u.length - 1; o < d; o++) n += u[o] + r[o];
		return n + u[d];
	},
	sn = (function () {
		var a =
				"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
			t;
		for (t in wr) a += "|" + t + "\\b";
		return new RegExp(a + ")", "gi");
	})(),
	rf = /hsl[a]?\(/,
	vc = function (t) {
		var e = t.join(" "),
			i;
		if (((sn.lastIndex = 0), sn.test(e)))
			return (
				(i = rf.test(e)),
				(t[1] = Ua(t[1], i)),
				(t[0] = Ua(t[0], i, yc(t[1]))),
				!0
			);
	},
	Kr,
	ei = (function () {
		var a = Date.now,
			t = 500,
			e = 33,
			i = a(),
			n = i,
			r = 1e3 / 240,
			s = r,
			o = [],
			c,
			u,
			f,
			d,
			p,
			l,
			g = function h(m) {
				var _ = a() - n,
					y = m === !0,
					S,
					x,
					b,
					C;
				if (
					((_ > t || _ < 0) && (i += _ - e),
					(n += _),
					(b = n - i),
					(S = b - s),
					(S > 0 || y) &&
						((C = ++d.frame),
						(p = b - d.time * 1e3),
						(d.time = b = b / 1e3),
						(s += S + (S >= r ? 4 : r - S)),
						(x = 1)),
					y || (c = u(h)),
					x)
				)
					for (l = 0; l < o.length; l++) o[l](b, p, C, m);
			};
		return (
			(d = {
				time: 0,
				frame: 0,
				tick: function () {
					g(!0);
				},
				deltaRatio: function (m) {
					return p / (1e3 / (m || 60));
				},
				wake: function () {
					Kl &&
						(!Io &&
							da() &&
							((Pi = Io = window),
							(ha = Pi.document || {}),
							(oi.gsap = We),
							(Pi.gsapVersions || (Pi.gsapVersions = [])).push(We.version),
							Ql(zs || Pi.GreenSockGlobals || (!Pi.gsap && Pi) || {}),
							gc.forEach(_c)),
						(f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
						c && d.sleep(),
						(u =
							f ||
							function (m) {
								return setTimeout(m, (s - d.time * 1e3 + 1) | 0);
							}),
						(Kr = 1),
						g(2));
				},
				sleep: function () {
					(f ? cancelAnimationFrame : clearTimeout)(c), (Kr = 0), (u = Gr);
				},
				lagSmoothing: function (m, _) {
					(t = m || 1 / 0), (e = Math.min(_ || 33, t));
				},
				fps: function (m) {
					(r = 1e3 / (m || 240)), (s = d.time * 1e3 + r);
				},
				add: function (m, _, y) {
					var S = _
						? function (x, b, C, M) {
								m(x, b, C, M), d.remove(S);
							}
						: m;
					return d.remove(m), o[y ? "unshift" : "push"](S), ar(), S;
				},
				remove: function (m, _) {
					~(_ = o.indexOf(m)) && o.splice(_, 1) && l >= _ && l--;
				},
				_listeners: o,
			}),
			d
		);
	})(),
	ar = function () {
		return !Kr && ei.wake();
	},
	St = {},
	sf = /^[\d.\-M][\d.\-,\s]/,
	of = /["']/g,
	af = function (t) {
		for (
			var e = {},
				i = t.substr(1, t.length - 3).split(":"),
				n = i[0],
				r = 1,
				s = i.length,
				o,
				c,
				u;
			r < s;
			r++
		)
			(c = i[r]),
				(o = r !== s - 1 ? c.lastIndexOf(",") : c.length),
				(u = c.substr(0, o)),
				(e[n] = isNaN(u) ? u.replace(of, "").trim() : +u),
				(n = c.substr(o + 1).trim());
		return e;
	},
	lf = function (t) {
		var e = t.indexOf("(") + 1,
			i = t.indexOf(")"),
			n = t.indexOf("(", e);
		return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i);
	},
	cf = function (t) {
		var e = (t + "").split("("),
			i = St[e[0]];
		return i && e.length > 1 && i.config
			? i.config.apply(
					null,
					~t.indexOf("{") ? [af(e[1])] : lf(t).split(",").map(ic),
				)
			: St._CE && sf.test(t)
				? St._CE("", t)
				: i;
	},
	xc = function (t) {
		return function (e) {
			return 1 - t(1 - e);
		};
	},
	wc = function a(t, e) {
		for (var i = t._first, n; i; )
			i instanceof Re
				? a(i, e)
				: i.vars.yoyoEase &&
					(!i._yoyo || !i._repeat) &&
					i._yoyo !== e &&
					(i.timeline
						? a(i.timeline, e)
						: ((n = i._ease),
							(i._ease = i._yEase),
							(i._yEase = n),
							(i._yoyo = e))),
				(i = i._next);
	},
	Sn = function (t, e) {
		return (t && (Qt(t) ? t : St[t] || cf(t))) || e;
	},
	Bn = function (t, e, i, n) {
		i === void 0 &&
			(i = function (c) {
				return 1 - e(1 - c);
			}),
			n === void 0 &&
				(n = function (c) {
					return c < 0.5 ? e(c * 2) / 2 : 1 - e((1 - c) * 2) / 2;
				});
		var r = { easeIn: e, easeOut: i, easeInOut: n },
			s;
		return (
			$e(t, function (o) {
				(St[o] = oi[o] = r), (St[(s = o.toLowerCase())] = i);
				for (var c in r)
					St[
						s + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")
					] = St[o + "." + c] = r[c];
			}),
			r
		);
	},
	bc = function (t) {
		return function (e) {
			return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
		};
	},
	uo = function a(t, e, i) {
		var n = e >= 1 ? e : 1,
			r = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
			s = (r / Ao) * (Math.asin(1 / n) || 0),
			o = function (f) {
				return f === 1 ? 1 : n * Math.pow(2, -10 * f) * Fu((f - s) * r) + 1;
			},
			c =
				t === "out"
					? o
					: t === "in"
						? function (u) {
								return 1 - o(1 - u);
							}
						: bc(o);
		return (
			(r = Ao / r),
			(c.config = function (u, f) {
				return a(t, u, f);
			}),
			c
		);
	},
	fo = function a(t, e) {
		e === void 0 && (e = 1.70158);
		var i = function (s) {
				return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
			},
			n =
				t === "out"
					? i
					: t === "in"
						? function (r) {
								return 1 - i(1 - r);
							}
						: bc(i);
		return (
			(n.config = function (r) {
				return a(t, r);
			}),
			n
		);
	};
$e("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
	var e = t < 5 ? t + 1 : t;
	Bn(
		a + ",Power" + (e - 1),
		t
			? function (i) {
					return Math.pow(i, e);
				}
			: function (i) {
					return i;
				},
		function (i) {
			return 1 - Math.pow(1 - i, e);
		},
		function (i) {
			return i < 0.5
				? Math.pow(i * 2, e) / 2
				: 1 - Math.pow((1 - i) * 2, e) / 2;
		},
	);
});
St.Linear.easeNone = St.none = St.Linear.easeIn;
Bn("Elastic", uo("in"), uo("out"), uo());
(function (a, t) {
	var e = 1 / t,
		i = 2 * e,
		n = 2.5 * e,
		r = function (o) {
			return o < e
				? a * o * o
				: o < i
					? a * Math.pow(o - 1.5 / t, 2) + 0.75
					: o < n
						? a * (o -= 2.25 / t) * o + 0.9375
						: a * Math.pow(o - 2.625 / t, 2) + 0.984375;
		};
	Bn(
		"Bounce",
		function (s) {
			return 1 - r(1 - s);
		},
		r,
	);
})(7.5625, 2.75);
Bn("Expo", function (a) {
	return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
Bn("Circ", function (a) {
	return -(jl(1 - a * a) - 1);
});
Bn("Sine", function (a) {
	return a === 1 ? 1 : -Ru(a * Lu) + 1;
});
Bn("Back", fo("in"), fo("out"), fo());
St.SteppedEase =
	St.steps =
	oi.SteppedEase =
		{
			config: function (t, e) {
				t === void 0 && (t = 1);
				var i = 1 / t,
					n = t + (e ? 0 : 1),
					r = e ? 1 : 0,
					s = 1 - Bt;
				return function (o) {
					return (((n * as(0, s, o)) | 0) + r) * i;
				};
			},
		};
rr.ease = St["quad.out"];
$e(
	"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
	function (a) {
		return (_a += a + "," + a + "Params,");
	},
);
var Tc = function (t, e) {
		(this.id = Iu++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = e),
			(this.get = e ? e.get : tc),
			(this.set = e ? e.getSetter : wa);
	},
	Qr = (function () {
		function a(e) {
			(this.vars = e),
				(this._delay = +e.delay || 0),
				(this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
					((this._rDelay = e.repeatDelay || 0),
					(this._yoyo = !!e.yoyo || !!e.yoyoEase)),
				(this._ts = 1),
				or(this, +e.duration, 1, 1),
				(this.data = e.data),
				qt && ((this._ctx = qt), qt.data.push(this)),
				Kr || ei.wake();
		}
		var t = a.prototype;
		return (
			(t.delay = function (i) {
				return i || i === 0
					? (this.parent &&
							this.parent.smoothChildTiming &&
							this.startTime(this._start + i - this._delay),
						(this._delay = i),
						this)
					: this._delay;
			}),
			(t.duration = function (i) {
				return arguments.length
					? this.totalDuration(
							this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i,
						)
					: this.totalDuration() && this._dur;
			}),
			(t.totalDuration = function (i) {
				return arguments.length
					? ((this._dirty = 0),
						or(
							this,
							this._repeat < 0
								? i
								: (i - this._repeat * this._rDelay) / (this._repeat + 1),
						))
					: this._tDur;
			}),
			(t.totalTime = function (i, n) {
				if ((ar(), !arguments.length)) return this._tTime;
				var r = this._dp;
				if (r && r.smoothChildTiming && this._ts) {
					for (no(this, i), !r._dp || r.parent || sc(r, this); r && r.parent; )
						r.parent._time !==
							r._start +
								(r._ts >= 0
									? r._tTime / r._ts
									: (r.totalDuration() - r._tTime) / -r._ts) &&
							r.totalTime(r._tTime, !0),
							(r = r.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && i < this._tDur) ||
							(this._ts < 0 && i > 0) ||
							(!this._tDur && !i)) &&
						Ei(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== i ||
						(!this._dur && !n) ||
						(this._initted && Math.abs(this._zTime) === Bt) ||
						(!i && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = i), ec(this, i, n)),
					this
				);
			}),
			(t.time = function (i, n) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), i + Va(this)) %
								(this._dur + this._rDelay) || (i ? this._dur : 0),
							n,
						)
					: this._time;
			}),
			(t.totalProgress = function (i, n) {
				return arguments.length
					? this.totalTime(this.totalDuration() * i, n)
					: this.totalDuration()
						? Math.min(1, this._tTime / this._tDur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.progress = function (i, n) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
								Va(this),
							n,
						)
					: this.duration()
						? Math.min(1, this._time / this._dur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.iteration = function (i, n) {
				var r = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (i - 1) * r, n)
					: this._repeat
						? sr(this._tTime, r) + 1
						: 1;
			}),
			(t.timeScale = function (i, n) {
				if (!arguments.length) return this._rts === -Bt ? 0 : this._rts;
				if (this._rts === i) return this;
				var r =
					this.parent && this._ts ? Xs(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +i || 0),
					(this._ts = this._ps || i === -Bt ? 0 : this._rts),
					this.totalTime(as(-Math.abs(this._delay), this._tDur, r), n !== !1),
					io(this),
					Hu(this)
				);
			}),
			(t.paused = function (i) {
				return arguments.length
					? (this._ps !== i &&
							((this._ps = i),
							i
								? ((this._pTime =
										this._tTime || Math.max(-this._delay, this.rawTime())),
									(this._ts = this._act = 0))
								: (ar(),
									(this._ts = this._rts),
									this.totalTime(
										this.parent && !this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== Bt &&
											(this._tTime -= Bt),
									))),
						this)
					: this._ps;
			}),
			(t.startTime = function (i) {
				if (arguments.length) {
					this._start = i;
					var n = this.parent || this._dp;
					return (
						n && (n._sort || !this.parent) && Ei(n, this, i - this._delay), this
					);
				}
				return this._start;
			}),
			(t.endTime = function (i) {
				return (
					this._start +
					(He(i) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				);
			}),
			(t.rawTime = function (i) {
				var n = this.parent || this._dp;
				return n
					? i &&
						(!this._ts ||
							(this._repeat && this._time && this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
							? Xs(n.rawTime(i), this)
							: this._tTime
					: this._tTime;
			}),
			(t.revert = function (i) {
				i === void 0 && (i = zu);
				var n = Oe;
				return (
					(Oe = i),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(i),
						this.totalTime(-0.01, i.suppressEvents)),
					this.data !== "nested" && i.kill !== !1 && this.kill(),
					(Oe = n),
					this
				);
			}),
			(t.globalTime = function (i) {
				for (var n = this, r = arguments.length ? i : n.rawTime(); n; )
					(r = n._start + r / (Math.abs(n._ts) || 1)), (n = n._dp);
				return !this.parent && this._sat ? this._sat.globalTime(i) : r;
			}),
			(t.repeat = function (i) {
				return arguments.length
					? ((this._repeat = i === 1 / 0 ? -2 : i), Wa(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(t.repeatDelay = function (i) {
				if (arguments.length) {
					var n = this._time;
					return (this._rDelay = i), Wa(this), n ? this.time(n) : this;
				}
				return this._rDelay;
			}),
			(t.yoyo = function (i) {
				return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
			}),
			(t.seek = function (i, n) {
				return this.totalTime(ci(this, i), He(n));
			}),
			(t.restart = function (i, n) {
				return this.play().totalTime(i ? -this._delay : 0, He(n));
			}),
			(t.play = function (i, n) {
				return i != null && this.seek(i, n), this.reversed(!1).paused(!1);
			}),
			(t.reverse = function (i, n) {
				return (
					i != null && this.seek(i || this.totalDuration(), n),
					this.reversed(!0).paused(!1)
				);
			}),
			(t.pause = function (i, n) {
				return i != null && this.seek(i, n), this.paused(!0);
			}),
			(t.resume = function () {
				return this.paused(!1);
			}),
			(t.reversed = function (i) {
				return arguments.length
					? (!!i !== this.reversed() &&
							this.timeScale(-this._rts || (i ? -Bt : 0)),
						this)
					: this._rts < 0;
			}),
			(t.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -Bt), this;
			}),
			(t.isActive = function () {
				var i = this.parent || this._dp,
					n = this._start,
					r;
				return !!(
					!i ||
					(this._ts &&
						this._initted &&
						i.isActive() &&
						(r = i.rawTime(!0)) >= n &&
						r < this.endTime(!0) - Bt)
				);
			}),
			(t.eventCallback = function (i, n, r) {
				var s = this.vars;
				return arguments.length > 1
					? (n
							? ((s[i] = n),
								r && (s[i + "Params"] = r),
								i === "onUpdate" && (this._onUpdate = n))
							: delete s[i],
						this)
					: s[i];
			}),
			(t.then = function (i) {
				var n = this;
				return new Promise(function (r) {
					var s = Qt(i) ? i : nc,
						o = function () {
							var u = n.then;
							(n.then = null),
								Qt(s) && (s = s(n)) && (s.then || s === n) && (n.then = u),
								r(s),
								(n.then = u);
						};
					(n._initted && n.totalProgress() === 1 && n._ts >= 0) ||
					(!n._tTime && n._ts < 0)
						? o()
						: (n._prom = o);
				});
			}),
			(t.kill = function () {
				xr(this);
			}),
			a
		);
	})();
gi(Qr.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -Bt,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var Re = (function (a) {
	$l(t, a);
	function t(i, n) {
		var r;
		return (
			i === void 0 && (i = {}),
			(r = a.call(this, i) || this),
			(r.labels = {}),
			(r.smoothChildTiming = !!i.smoothChildTiming),
			(r.autoRemoveChildren = !!i.autoRemoveChildren),
			(r._sort = He(i.sortChildren)),
			jt && Ei(i.parent || jt, Ni(r), n),
			i.reversed && r.reverse(),
			i.paused && r.paused(!0),
			i.scrollTrigger && oc(Ni(r), i.scrollTrigger),
			r
		);
	}
	var e = t.prototype;
	return (
		(e.to = function (n, r, s) {
			return Ar(0, arguments, this), this;
		}),
		(e.from = function (n, r, s) {
			return Ar(1, arguments, this), this;
		}),
		(e.fromTo = function (n, r, s, o) {
			return Ar(2, arguments, this), this;
		}),
		(e.set = function (n, r, s) {
			return (
				(r.duration = 0),
				(r.parent = this),
				kr(r).repeatDelay || (r.repeat = 0),
				(r.immediateRender = !!r.immediateRender),
				new re(n, r, ci(this, s), 1),
				this
			);
		}),
		(e.call = function (n, r, s) {
			return Ei(this, re.delayedCall(0, n, r), s);
		}),
		(e.staggerTo = function (n, r, s, o, c, u, f) {
			return (
				(s.duration = r),
				(s.stagger = s.stagger || o),
				(s.onComplete = u),
				(s.onCompleteParams = f),
				(s.parent = this),
				new re(n, s, ci(this, c)),
				this
			);
		}),
		(e.staggerFrom = function (n, r, s, o, c, u, f) {
			return (
				(s.runBackwards = 1),
				(kr(s).immediateRender = He(s.immediateRender)),
				this.staggerTo(n, r, s, o, c, u, f)
			);
		}),
		(e.staggerFromTo = function (n, r, s, o, c, u, f, d) {
			return (
				(o.startAt = s),
				(kr(o).immediateRender = He(o.immediateRender)),
				this.staggerTo(n, r, o, c, u, f, d)
			);
		}),
		(e.render = function (n, r, s) {
			var o = this._time,
				c = this._dirty ? this.totalDuration() : this._tDur,
				u = this._dur,
				f = n <= 0 ? 0 : he(n),
				d = this._zTime < 0 != n < 0 && (this._initted || !u),
				p,
				l,
				g,
				h,
				m,
				_,
				y,
				S,
				x,
				b,
				C,
				M;
			if (
				(this !== jt && f > c && n >= 0 && (f = c), f !== this._tTime || s || d)
			) {
				if (
					(o !== this._time &&
						u &&
						((f += this._time - o), (n += this._time - o)),
					(p = f),
					(x = this._start),
					(S = this._ts),
					(_ = !S),
					d && (u || (o = this._zTime), (n || !r) && (this._zTime = n)),
					this._repeat)
				) {
					if (
						((C = this._yoyo),
						(m = u + this._rDelay),
						this._repeat < -1 && n < 0)
					)
						return this.totalTime(m * 100 + n, r, s);
					if (
						((p = he(f % m)),
						f === c
							? ((h = this._repeat), (p = u))
							: ((h = ~~(f / m)),
								h && h === f / m && ((p = u), h--),
								p > u && (p = u)),
						(b = sr(this._tTime, m)),
						!o &&
							this._tTime &&
							b !== h &&
							this._tTime - b * m - this._dur <= 0 &&
							(b = h),
						C && h & 1 && ((p = u - p), (M = 1)),
						h !== b && !this._lock)
					) {
						var O = C && b & 1,
							E = O === (C && h & 1);
						if (
							(h < b && (O = !O),
							(o = O ? 0 : f % u ? u : f),
							(this._lock = 1),
							(this.render(o || (M ? 0 : he(h * m)), r, !u)._lock = 0),
							(this._tTime = f),
							!r && this.parent && ri(this, "onRepeat"),
							this.vars.repeatRefresh && !M && (this.invalidate()._lock = 1),
							(o && o !== this._time) ||
								_ !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this;
						if (
							((u = this._dur),
							(c = this._tDur),
							E &&
								((this._lock = 2),
								(o = O ? u : -1e-4),
								this.render(o, !0),
								this.vars.repeatRefresh && !M && this.invalidate()),
							(this._lock = 0),
							!this._ts && !_)
						)
							return this;
						wc(this, M);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((y = Wu(this, he(o), he(p))), y && (f -= p - (p = y._start))),
					(this._tTime = f),
					(this._time = p),
					(this._act = !S),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = n),
						(o = 0)),
					!o && p && !r && !h && (ri(this, "onStart"), this._tTime !== f))
				)
					return this;
				if (p >= o && n >= 0)
					for (l = this._first; l; ) {
						if (
							((g = l._next), (l._act || p >= l._start) && l._ts && y !== l)
						) {
							if (l.parent !== this) return this.render(n, r, s);
							if (
								(l.render(
									l._ts > 0
										? (p - l._start) * l._ts
										: (l._dirty ? l.totalDuration() : l._tDur) +
												(p - l._start) * l._ts,
									r,
									s,
								),
								p !== this._time || (!this._ts && !_))
							) {
								(y = 0), g && (f += this._zTime = -Bt);
								break;
							}
						}
						l = g;
					}
				else {
					l = this._last;
					for (var L = n < 0 ? n : p; l; ) {
						if (((g = l._prev), (l._act || L <= l._end) && l._ts && y !== l)) {
							if (l.parent !== this) return this.render(n, r, s);
							if (
								(l.render(
									l._ts > 0
										? (L - l._start) * l._ts
										: (l._dirty ? l.totalDuration() : l._tDur) +
												(L - l._start) * l._ts,
									r,
									s || (Oe && (l._initted || l._startAt)),
								),
								p !== this._time || (!this._ts && !_))
							) {
								(y = 0), g && (f += this._zTime = L ? -Bt : Bt);
								break;
							}
						}
						l = g;
					}
				}
				if (
					y &&
					!r &&
					(this.pause(),
					(y.render(p >= o ? 0 : -Bt)._zTime = p >= o ? 1 : -1),
					this._ts)
				)
					return (this._start = x), io(this), this.render(n, r, s);
				this._onUpdate && !r && ri(this, "onUpdate", !0),
					((f === c && this._tTime >= this.totalDuration()) || (!f && o)) &&
						(x === this._start || Math.abs(S) !== Math.abs(this._ts)) &&
						(this._lock ||
							((n || !u) &&
								((f === c && this._ts > 0) || (!f && this._ts < 0)) &&
								an(this, 1),
							!r &&
								!(n < 0 && !o) &&
								(f || o || !c) &&
								(ri(
									this,
									f === c && n >= 0 ? "onComplete" : "onReverseComplete",
									!0,
								),
								this._prom &&
									!(f < c && this.timeScale() > 0) &&
									this._prom())));
			}
			return this;
		}),
		(e.add = function (n, r) {
			var s = this;
			if ((ji(r) || (r = ci(this, r, n)), !(n instanceof Qr))) {
				if (Pe(n))
					return (
						n.forEach(function (o) {
							return s.add(o, r);
						}),
						this
					);
				if (pe(n)) return this.addLabel(n, r);
				if (Qt(n)) n = re.delayedCall(0, n);
				else return this;
			}
			return this !== n ? Ei(this, n, r) : this;
		}),
		(e.getChildren = function (n, r, s, o) {
			n === void 0 && (n = !0),
				r === void 0 && (r = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = -di);
			for (var c = [], u = this._first; u; )
				u._start >= o &&
					(u instanceof re
						? r && c.push(u)
						: (s && c.push(u), n && c.push.apply(c, u.getChildren(!0, r, s)))),
					(u = u._next);
			return c;
		}),
		(e.getById = function (n) {
			for (var r = this.getChildren(1, 1, 1), s = r.length; s--; )
				if (r[s].vars.id === n) return r[s];
		}),
		(e.remove = function (n) {
			return pe(n)
				? this.removeLabel(n)
				: Qt(n)
					? this.killTweensOf(n)
					: (eo(this, n),
						n === this._recent && (this._recent = this._last),
						Tn(this));
		}),
		(e.totalTime = function (n, r) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = he(
							ei.time -
								(this._ts > 0
									? n / this._ts
									: (this.totalDuration() - n) / -this._ts),
						)),
					a.prototype.totalTime.call(this, n, r),
					(this._forcing = 0),
					this)
				: this._tTime;
		}),
		(e.addLabel = function (n, r) {
			return (this.labels[n] = ci(this, r)), this;
		}),
		(e.removeLabel = function (n) {
			return delete this.labels[n], this;
		}),
		(e.addPause = function (n, r, s) {
			var o = re.delayedCall(0, r || Gr, s);
			return (
				(o.data = "isPause"), (this._hasPause = 1), Ei(this, o, ci(this, n))
			);
		}),
		(e.removePause = function (n) {
			var r = this._first;
			for (n = ci(this, n); r; )
				r._start === n && r.data === "isPause" && an(r), (r = r._next);
		}),
		(e.killTweensOf = function (n, r, s) {
			for (var o = this.getTweensOf(n, s), c = o.length; c--; )
				Qi !== o[c] && o[c].kill(n, r);
			return this;
		}),
		(e.getTweensOf = function (n, r) {
			for (var s = [], o = hi(n), c = this._first, u = ji(r), f; c; )
				c instanceof re
					? qu(c._targets, o) &&
						(u
							? (!Qi || (c._initted && c._ts)) &&
								c.globalTime(0) <= r &&
								c.globalTime(c.totalDuration()) > r
							: !r || c.isActive()) &&
						s.push(c)
					: (f = c.getTweensOf(o, r)).length && s.push.apply(s, f),
					(c = c._next);
			return s;
		}),
		(e.tweenTo = function (n, r) {
			r = r || {};
			var s = this,
				o = ci(s, n),
				c = r,
				u = c.startAt,
				f = c.onStart,
				d = c.onStartParams,
				p = c.immediateRender,
				l,
				g = re.to(
					s,
					gi(
						{
							ease: r.ease || "none",
							lazy: !1,
							immediateRender: !1,
							time: o,
							overwrite: "auto",
							duration:
								r.duration ||
								Math.abs(
									(o - (u && "time" in u ? u.time : s._time)) / s.timeScale(),
								) ||
								Bt,
							onStart: function () {
								if ((s.pause(), !l)) {
									var m =
										r.duration ||
										Math.abs(
											(o - (u && "time" in u ? u.time : s._time)) /
												s.timeScale(),
										);
									g._dur !== m && or(g, m, 0, 1).render(g._time, !0, !0),
										(l = 1);
								}
								f && f.apply(g, d || []);
							},
						},
						r,
					),
				);
			return p ? g.render(0) : g;
		}),
		(e.tweenFromTo = function (n, r, s) {
			return this.tweenTo(r, gi({ startAt: { time: ci(this, n) } }, s));
		}),
		(e.recent = function () {
			return this._recent;
		}),
		(e.nextLabel = function (n) {
			return n === void 0 && (n = this._time), Ga(this, ci(this, n));
		}),
		(e.previousLabel = function (n) {
			return n === void 0 && (n = this._time), Ga(this, ci(this, n), 1);
		}),
		(e.currentLabel = function (n) {
			return arguments.length
				? this.seek(n, !0)
				: this.previousLabel(this._time + Bt);
		}),
		(e.shiftChildren = function (n, r, s) {
			s === void 0 && (s = 0);
			for (var o = this._first, c = this.labels, u; o; )
				o._start >= s && ((o._start += n), (o._end += n)), (o = o._next);
			if (r) for (u in c) c[u] >= s && (c[u] += n);
			return Tn(this);
		}),
		(e.invalidate = function (n) {
			var r = this._first;
			for (this._lock = 0; r; ) r.invalidate(n), (r = r._next);
			return a.prototype.invalidate.call(this, n);
		}),
		(e.clear = function (n) {
			n === void 0 && (n = !0);
			for (var r = this._first, s; r; ) (s = r._next), this.remove(r), (r = s);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				n && (this.labels = {}),
				Tn(this)
			);
		}),
		(e.totalDuration = function (n) {
			var r = 0,
				s = this,
				o = s._last,
				c = di,
				u,
				f,
				d;
			if (arguments.length)
				return s.timeScale(
					(s._repeat < 0 ? s.duration() : s.totalDuration()) /
						(s.reversed() ? -n : n),
				);
			if (s._dirty) {
				for (d = s.parent; o; )
					(u = o._prev),
						o._dirty && o.totalDuration(),
						(f = o._start),
						f > c && s._sort && o._ts && !s._lock
							? ((s._lock = 1), (Ei(s, o, f - o._delay, 1)._lock = 0))
							: (c = f),
						f < 0 &&
							o._ts &&
							((r -= f),
							((!d && !s._dp) || (d && d.smoothChildTiming)) &&
								((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)),
							s.shiftChildren(-f, !1, -1 / 0),
							(c = 0)),
						o._end > r && o._ts && (r = o._end),
						(o = u);
				or(s, s === jt && s._time > r ? s._time : r, 1, 1), (s._dirty = 0);
			}
			return s._tDur;
		}),
		(t.updateRoot = function (n) {
			if ((jt._ts && (ec(jt, Xs(n, jt)), (Jl = ei.frame)), ei.frame >= $a)) {
				$a += si.autoSleep || 120;
				var r = jt._first;
				if ((!r || !r._ts) && si.autoSleep && ei._listeners.length < 2) {
					for (; r && !r._ts; ) r = r._next;
					r || ei.sleep();
				}
			}
		}),
		t
	);
})(Qr);
gi(Re.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var uf = function (t, e, i, n, r, s, o) {
		var c = new je(this._pt, t, e, 0, 1, Cc, null, r),
			u = 0,
			f = 0,
			d,
			p,
			l,
			g,
			h,
			m,
			_,
			y;
		for (
			c.b = i,
				c.e = n,
				i += "",
				n += "",
				(_ = ~n.indexOf("random(")) && (n = Ur(n)),
				s && ((y = [i, n]), s(y, t, e), (i = y[0]), (n = y[1])),
				p = i.match(ao) || [];
			(d = ao.exec(n));

		)
			(g = d[0]),
				(h = n.substring(u, d.index)),
				l ? (l = (l + 1) % 5) : h.substr(-5) === "rgba(" && (l = 1),
				g !== p[f++] &&
					((m = parseFloat(p[f - 1]) || 0),
					(c._pt = {
						_next: c._pt,
						p: h || f === 1 ? h : ",",
						s: m,
						c: g.charAt(1) === "=" ? Un(m, g) - m : parseFloat(g) - m,
						m: l && l < 4 ? Math.round : 0,
					}),
					(u = ao.lastIndex));
		return (
			(c.c = u < n.length ? n.substring(u, n.length) : ""),
			(c.fp = o),
			(Gl.test(n) || _) && (c.e = 0),
			(this._pt = c),
			c
		);
	},
	ya = function (t, e, i, n, r, s, o, c, u, f) {
		Qt(n) && (n = n(r || 0, t, s));
		var d = t[e],
			p =
				i !== "get"
					? i
					: Qt(d)
						? u
							? t[
									e.indexOf("set") || !Qt(t["get" + e.substr(3)])
										? e
										: "get" + e.substr(3)
								](u)
							: t[e]()
						: d,
			l = Qt(d) ? (u ? gf : Oc) : xa,
			g;
		if (
			(pe(n) &&
				(~n.indexOf("random(") && (n = Ur(n)),
				n.charAt(1) === "=" &&
					((g = Un(p, n) + (De(p) || 0)), (g || g === 0) && (n = g))),
			!f || p !== n || Yo)
		)
			return !isNaN(p * n) && n !== ""
				? ((g = new je(
						this._pt,
						t,
						e,
						+p || 0,
						n - (p || 0),
						typeof d == "boolean" ? mf : Pc,
						0,
						l,
					)),
					u && (g.fp = u),
					o && g.modifier(o, this, t),
					(this._pt = g))
				: (!d && !(e in t) && pa(e, n),
					uf.call(this, t, e, p, n, l, c || si.stringFilter, u));
	},
	ff = function (t, e, i, n, r) {
		if (
			(Qt(t) && (t = Lr(t, r, e, i, n)),
			!Ri(t) || (t.style && t.nodeType) || Pe(t) || Vl(t))
		)
			return pe(t) ? Lr(t, r, e, i, n) : t;
		var s = {},
			o;
		for (o in t) s[o] = Lr(t[o], r, e, i, n);
		return s;
	},
	Sc = function (t, e, i, n, r, s) {
		var o, c, u, f;
		if (
			ti[t] &&
			(o = new ti[t]()).init(
				r,
				o.rawVars ? e[t] : ff(e[t], n, r, s, i),
				i,
				n,
				s,
			) !== !1 &&
			((i._pt = c = new je(i._pt, r, t, 0, 1, o.render, o, 0, o.priority)),
			i !== Wn)
		)
			for (u = i._ptLookup[i._targets.indexOf(r)], f = o._props.length; f--; )
				u[o._props[f]] = c;
		return o;
	},
	Qi,
	Yo,
	va = function a(t, e, i) {
		var n = t.vars,
			r = n.ease,
			s = n.startAt,
			o = n.immediateRender,
			c = n.lazy,
			u = n.onUpdate,
			f = n.runBackwards,
			d = n.yoyoEase,
			p = n.keyframes,
			l = n.autoRevert,
			g = t._dur,
			h = t._startAt,
			m = t._targets,
			_ = t.parent,
			y = _ && _.data === "nested" ? _.vars.targets : m,
			S = t._overwrite === "auto" && !ua,
			x = t.timeline,
			b,
			C,
			M,
			O,
			E,
			L,
			N,
			D,
			R,
			Y,
			X,
			V,
			H;
		if (
			(x && (!p || !r) && (r = "none"),
			(t._ease = Sn(r, rr.ease)),
			(t._yEase = d ? xc(Sn(d === !0 ? r : d, rr.ease)) : 0),
			d &&
				t._yoyo &&
				!t._repeat &&
				((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
			(t._from = !x && !!n.runBackwards),
			!x || (p && !n.stagger))
		) {
			if (
				((D = m[0] ? bn(m[0]).harness : 0),
				(V = D && n[D.prop]),
				(b = Ys(n, ga)),
				h &&
					(h._zTime < 0 && h.progress(1),
					e < 0 && f && o && !l ? h.render(-1, !0) : h.revert(f && g ? Ds : Bu),
					(h._lazy = 0)),
				s)
			) {
				if (
					(an(
						(t._startAt = re.set(
							m,
							gi(
								{
									data: "isStart",
									overwrite: !1,
									parent: _,
									immediateRender: !0,
									lazy: !h && He(c),
									startAt: null,
									delay: 0,
									onUpdate:
										u &&
										function () {
											return ri(t, "onUpdate");
										},
									stagger: 0,
								},
								s,
							),
						)),
					),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (Oe || (!o && !l)) && t._startAt.revert(Ds),
					o && g && e <= 0 && i <= 0)
				) {
					e && (t._zTime = e);
					return;
				}
			} else if (f && g && !h) {
				if (
					(e && (o = !1),
					(M = gi(
						{
							overwrite: !1,
							data: "isFromStart",
							lazy: o && !h && He(c),
							immediateRender: o,
							stagger: 0,
							parent: _,
						},
						b,
					)),
					V && (M[D.prop] = V),
					an((t._startAt = re.set(m, M))),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (Oe ? t._startAt.revert(Ds) : t._startAt.render(-1, !0)),
					(t._zTime = e),
					!o)
				)
					a(t._startAt, Bt, Bt);
				else if (!e) return;
			}
			for (
				t._pt = t._ptCache = 0, c = (g && He(c)) || (c && !g), C = 0;
				C < m.length;
				C++
			) {
				if (
					((E = m[C]),
					(N = E._gsap || ma(m)[C]._gsap),
					(t._ptLookup[C] = Y = {}),
					Ro[N.id] && rn.length && qs(),
					(X = y === m ? C : y.indexOf(E)),
					D &&
						(R = new D()).init(E, V || b, t, X, y) !== !1 &&
						((t._pt = O =
							new je(t._pt, E, R.name, 0, 1, R.render, R, 0, R.priority)),
						R._props.forEach(function (tt) {
							Y[tt] = O;
						}),
						R.priority && (L = 1)),
					!D || V)
				)
					for (M in b)
						ti[M] && (R = Sc(M, b, t, X, E, y))
							? R.priority && (L = 1)
							: (Y[M] = O =
									ya.call(t, E, M, "get", b[M], X, y, 0, n.stringFilter));
				t._op && t._op[C] && t.kill(E, t._op[C]),
					S &&
						t._pt &&
						((Qi = t),
						jt.killTweensOf(E, Y, t.globalTime(e)),
						(H = !t.parent),
						(Qi = 0)),
					t._pt && c && (Ro[N.id] = 1);
			}
			L && Ec(t), t._onInit && t._onInit(t);
		}
		(t._onUpdate = u),
			(t._initted = (!t._op || t._pt) && !H),
			p && e <= 0 && x.render(di, !0, !0);
	},
	df = function (t, e, i, n, r, s, o, c) {
		var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
			f,
			d,
			p,
			l;
		if (!u)
			for (
				u = t._ptCache[e] = [], p = t._ptLookup, l = t._targets.length;
				l--;

			) {
				if (((f = p[l][e]), f && f.d && f.d._pt))
					for (f = f.d._pt; f && f.p !== e && f.fp !== e; ) f = f._next;
				if (!f)
					return (
						(Yo = 1),
						(t.vars[e] = "+=0"),
						va(t, o),
						(Yo = 0),
						c ? Wr(e + " not eligible for reset") : 1
					);
				u.push(f);
			}
		for (l = u.length; l--; )
			(d = u[l]),
				(f = d._pt || d),
				(f.s = (n || n === 0) && !r ? n : f.s + (n || 0) + s * f.c),
				(f.c = i - f.s),
				d.e && (d.e = Jt(i) + De(d.e)),
				d.b && (d.b = f.s + De(d.b));
	},
	hf = function (t, e) {
		var i = t[0] ? bn(t[0]).harness : 0,
			n = i && i.aliases,
			r,
			s,
			o,
			c;
		if (!n) return e;
		r = kn({}, e);
		for (s in n)
			if (s in r) for (c = n[s].split(","), o = c.length; o--; ) r[c[o]] = r[s];
		return r;
	},
	pf = function (t, e, i, n) {
		var r = e.ease || n || "power1.inOut",
			s,
			o;
		if (Pe(e))
			(o = i[t] || (i[t] = [])),
				e.forEach(function (c, u) {
					return o.push({ t: (u / (e.length - 1)) * 100, v: c, e: r });
				});
		else
			for (s in e)
				(o = i[s] || (i[s] = [])),
					s === "ease" || o.push({ t: parseFloat(t), v: e[s], e: r });
	},
	Lr = function (t, e, i, n, r) {
		return Qt(t)
			? t.call(e, i, n, r)
			: pe(t) && ~t.indexOf("random(")
				? Ur(t)
				: t;
	},
	Mc = _a + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	Dc = {};
$e(Mc + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
	return (Dc[a] = 1);
});
var re = (function (a) {
	$l(t, a);
	function t(i, n, r, s) {
		var o;
		typeof n == "number" && ((r.duration = n), (n = r), (r = null)),
			(o = a.call(this, s ? n : kr(n)) || this);
		var c = o.vars,
			u = c.duration,
			f = c.delay,
			d = c.immediateRender,
			p = c.stagger,
			l = c.overwrite,
			g = c.keyframes,
			h = c.defaults,
			m = c.scrollTrigger,
			_ = c.yoyoEase,
			y = n.parent || jt,
			S = (Pe(i) || Vl(i) ? ji(i[0]) : "length" in n) ? [i] : hi(i),
			x,
			b,
			C,
			M,
			O,
			E,
			L,
			N;
		if (
			((o._targets = S.length
				? ma(S)
				: Wr(
						"GSAP target " + i + " not found. https://gsap.com",
						!si.nullTargetWarn,
					) || []),
			(o._ptLookup = []),
			(o._overwrite = l),
			g || p || fs(u) || fs(f))
		) {
			if (
				((n = o.vars),
				(x = o.timeline =
					new Re({
						data: "nested",
						defaults: h || {},
						targets: y && y.data === "nested" ? y.vars.targets : S,
					})),
				x.kill(),
				(x.parent = x._dp = Ni(o)),
				(x._start = 0),
				p || fs(u) || fs(f))
			) {
				if (((M = S.length), (L = p && uc(p)), Ri(p)))
					for (O in p) ~Mc.indexOf(O) && (N || (N = {}), (N[O] = p[O]));
				for (b = 0; b < M; b++)
					(C = Ys(n, Dc)),
						(C.stagger = 0),
						_ && (C.yoyoEase = _),
						N && kn(C, N),
						(E = S[b]),
						(C.duration = +Lr(u, Ni(o), b, E, S)),
						(C.delay = (+Lr(f, Ni(o), b, E, S) || 0) - o._delay),
						!p &&
							M === 1 &&
							C.delay &&
							((o._delay = f = C.delay), (o._start += f), (C.delay = 0)),
						x.to(E, C, L ? L(b, E, S) : 0),
						(x._ease = St.none);
				x.duration() ? (u = f = 0) : (o.timeline = 0);
			} else if (g) {
				kr(gi(x.vars.defaults, { ease: "none" })),
					(x._ease = Sn(g.ease || n.ease || "none"));
				var D = 0,
					R,
					Y,
					X;
				if (Pe(g))
					g.forEach(function (V) {
						return x.to(S, V, ">");
					}),
						x.duration();
				else {
					C = {};
					for (O in g)
						O === "ease" || O === "easeEach" || pf(O, g[O], C, g.easeEach);
					for (O in C)
						for (
							R = C[O].sort(function (V, H) {
								return V.t - H.t;
							}),
								D = 0,
								b = 0;
							b < R.length;
							b++
						)
							(Y = R[b]),
								(X = {
									ease: Y.e,
									duration: ((Y.t - (b ? R[b - 1].t : 0)) / 100) * u,
								}),
								(X[O] = Y.v),
								x.to(S, X, D),
								(D += X.duration);
					x.duration() < u && x.to({}, { duration: u - x.duration() });
				}
			}
			u || o.duration((u = x.duration()));
		} else o.timeline = 0;
		return (
			l === !0 && !ua && ((Qi = Ni(o)), jt.killTweensOf(S), (Qi = 0)),
			Ei(y, Ni(o), r),
			n.reversed && o.reverse(),
			n.paused && o.paused(!0),
			(d ||
				(!u &&
					!g &&
					o._start === he(y._time) &&
					He(d) &&
					$u(Ni(o)) &&
					y.data !== "nested")) &&
				((o._tTime = -Bt), o.render(Math.max(0, -f) || 0)),
			m && oc(Ni(o), m),
			o
		);
	}
	var e = t.prototype;
	return (
		(e.render = function (n, r, s) {
			var o = this._time,
				c = this._tDur,
				u = this._dur,
				f = n < 0,
				d = n > c - Bt && !f ? c : n < Bt ? 0 : n,
				p,
				l,
				g,
				h,
				m,
				_,
				y,
				S,
				x;
			if (!u) Vu(this, n, r, s);
			else if (
				d !== this._tTime ||
				!n ||
				s ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== f)
			) {
				if (((p = d), (S = this.timeline), this._repeat)) {
					if (((h = u + this._rDelay), this._repeat < -1 && f))
						return this.totalTime(h * 100 + n, r, s);
					if (
						((p = he(d % h)),
						d === c
							? ((g = this._repeat), (p = u))
							: ((g = ~~(d / h)),
								g && g === he(d / h) && ((p = u), g--),
								p > u && (p = u)),
						(_ = this._yoyo && g & 1),
						_ && ((x = this._yEase), (p = u - p)),
						(m = sr(this._tTime, h)),
						p === o && !s && this._initted && g === m)
					)
						return (this._tTime = d), this;
					g !== m &&
						(S && this._yEase && wc(S, _),
						this.vars.repeatRefresh &&
							!_ &&
							!this._lock &&
							this._time !== h &&
							this._initted &&
							((this._lock = s = 1),
							(this.render(he(h * g), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (ac(this, f ? n : p, s, r, d)) return (this._tTime = 0), this;
					if (o !== this._time && !(s && this.vars.repeatRefresh && g !== m))
						return this;
					if (u !== this._dur) return this.render(n, r, s);
				}
				if (
					((this._tTime = d),
					(this._time = p),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = y = (x || this._ease)(p / u)),
					this._from && (this.ratio = y = 1 - y),
					p && !o && !r && !g && (ri(this, "onStart"), this._tTime !== d))
				)
					return this;
				for (l = this._pt; l; ) l.r(y, l.d), (l = l._next);
				(S && S.render(n < 0 ? n : S._dur * S._ease(p / this._dur), r, s)) ||
					(this._startAt && (this._zTime = n)),
					this._onUpdate &&
						!r &&
						(f && Fo(this, n, r, s), ri(this, "onUpdate")),
					this._repeat &&
						g !== m &&
						this.vars.onRepeat &&
						!r &&
						this.parent &&
						ri(this, "onRepeat"),
					(d === this._tDur || !d) &&
						this._tTime === d &&
						(f && !this._onUpdate && Fo(this, n, !0, !0),
						(n || !u) &&
							((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
							an(this, 1),
						!r &&
							!(f && !o) &&
							(d || o || _) &&
							(ri(this, d === c ? "onComplete" : "onReverseComplete", !0),
							this._prom && !(d < c && this.timeScale() > 0) && this._prom()));
			}
			return this;
		}),
		(e.targets = function () {
			return this._targets;
		}),
		(e.invalidate = function (n) {
			return (
				(!n || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(n),
				a.prototype.invalidate.call(this, n)
			);
		}),
		(e.resetTo = function (n, r, s, o, c) {
			Kr || ei.wake(), this._ts || this.play();
			var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				f;
			return (
				this._initted || va(this, u),
				(f = this._ease(u / this._dur)),
				df(this, n, r, s, o, f, u, c)
					? this.resetTo(n, r, s, o, 1)
					: (no(this, 0),
						this.parent ||
							rc(
								this._dp,
								this,
								"_first",
								"_last",
								this._dp._sort ? "_start" : 0,
							),
						this.render(0))
			);
		}),
		(e.kill = function (n, r) {
			if ((r === void 0 && (r = "all"), !n && (!r || r === "all")))
				return (this._lazy = this._pt = 0), this.parent ? xr(this) : this;
			if (this.timeline) {
				var s = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(n, r, Qi && Qi.vars.overwrite !== !0)
						._first || xr(this),
					this.parent &&
						s !== this.timeline.totalDuration() &&
						or(this, (this._dur * this.timeline._tDur) / s, 0, 1),
					this
				);
			}
			var o = this._targets,
				c = n ? hi(n) : o,
				u = this._ptLookup,
				f = this._pt,
				d,
				p,
				l,
				g,
				h,
				m,
				_;
			if ((!r || r === "all") && Xu(o, c))
				return r === "all" && (this._pt = 0), xr(this);
			for (
				d = this._op = this._op || [],
					r !== "all" &&
						(pe(r) &&
							((h = {}),
							$e(r, function (y) {
								return (h[y] = 1);
							}),
							(r = h)),
						(r = hf(o, r))),
					_ = o.length;
				_--;

			)
				if (~c.indexOf(o[_])) {
					(p = u[_]),
						r === "all"
							? ((d[_] = r), (g = p), (l = {}))
							: ((l = d[_] = d[_] || {}), (g = r));
					for (h in g)
						(m = p && p[h]),
							m &&
								((!("kill" in m.d) || m.d.kill(h) === !0) && eo(this, m, "_pt"),
								delete p[h]),
							l !== "all" && (l[h] = 1);
				}
			return this._initted && !this._pt && f && xr(this), this;
		}),
		(t.to = function (n, r) {
			return new t(n, r, arguments[2]);
		}),
		(t.from = function (n, r) {
			return Ar(1, arguments);
		}),
		(t.delayedCall = function (n, r, s, o) {
			return new t(r, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: n,
				onComplete: r,
				onReverseComplete: r,
				onCompleteParams: s,
				onReverseCompleteParams: s,
				callbackScope: o,
			});
		}),
		(t.fromTo = function (n, r, s) {
			return Ar(2, arguments);
		}),
		(t.set = function (n, r) {
			return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new t(n, r);
		}),
		(t.killTweensOf = function (n, r, s) {
			return jt.killTweensOf(n, r, s);
		}),
		t
	);
})(Qr);
gi(re.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
$e("staggerTo,staggerFrom,staggerFromTo", function (a) {
	re[a] = function () {
		var t = new Re(),
			e = Bo.call(arguments, 0);
		return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
	};
});
var xa = function (t, e, i) {
		return (t[e] = i);
	},
	Oc = function (t, e, i) {
		return t[e](i);
	},
	gf = function (t, e, i, n) {
		return t[e](n.fp, i);
	},
	_f = function (t, e, i) {
		return t.setAttribute(e, i);
	},
	wa = function (t, e) {
		return Qt(t[e]) ? Oc : fa(t[e]) && t.setAttribute ? _f : xa;
	},
	Pc = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
	},
	mf = function (t, e) {
		return e.set(e.t, e.p, !!(e.s + e.c * t), e);
	},
	Cc = function (t, e) {
		var i = e._pt,
			n = "";
		if (!t && e.b) n = e.b;
		else if (t === 1 && e.e) n = e.e;
		else {
			for (; i; )
				(n =
					i.p +
					(i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
					n),
					(i = i._next);
			n += e.c;
		}
		e.set(e.t, e.p, n, e);
	},
	ba = function (t, e) {
		for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
	},
	yf = function (t, e, i, n) {
		for (var r = this._pt, s; r; )
			(s = r._next), r.p === n && r.modifier(t, e, i), (r = s);
	},
	vf = function (t) {
		for (var e = this._pt, i, n; e; )
			(n = e._next),
				(e.p === t && !e.op) || e.op === t
					? eo(this, e, "_pt")
					: e.dep || (i = 1),
				(e = n);
		return !i;
	},
	xf = function (t, e, i, n) {
		n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
	},
	Ec = function (t) {
		for (var e = t._pt, i, n, r, s; e; ) {
			for (i = e._next, n = r; n && n.pr > e.pr; ) n = n._next;
			(e._prev = n ? n._prev : s) ? (e._prev._next = e) : (r = e),
				(e._next = n) ? (n._prev = e) : (s = e),
				(e = i);
		}
		t._pt = r;
	},
	je = (function () {
		function a(e, i, n, r, s, o, c, u, f) {
			(this.t = i),
				(this.s = r),
				(this.c = s),
				(this.p = n),
				(this.r = o || Pc),
				(this.d = c || this),
				(this.set = u || xa),
				(this.pr = f || 0),
				(this._next = e),
				e && (e._prev = this);
		}
		var t = a.prototype;
		return (
			(t.modifier = function (i, n, r) {
				(this.mSet = this.mSet || this.set),
					(this.set = xf),
					(this.m = i),
					(this.mt = r),
					(this.tween = n);
			}),
			a
		);
	})();
$e(
	_a +
		"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
	function (a) {
		return (ga[a] = 1);
	},
);
oi.TweenMax = oi.TweenLite = re;
oi.TimelineLite = oi.TimelineMax = Re;
jt = new Re({
	sortChildren: !1,
	defaults: rr,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0,
});
si.stringFilter = vc;
var Mn = [],
	Ps = {},
	wf = [],
	Ka = 0,
	bf = 0,
	ho = function (t) {
		return (Ps[t] || wf).map(function (e) {
			return e();
		});
	},
	Xo = function () {
		var t = Date.now(),
			e = [];
		t - Ka > 2 &&
			(ho("matchMediaInit"),
			Mn.forEach(function (i) {
				var n = i.queries,
					r = i.conditions,
					s,
					o,
					c,
					u;
				for (o in n)
					(s = Pi.matchMedia(n[o]).matches),
						s && (c = 1),
						s !== r[o] && ((r[o] = s), (u = 1));
				u && (i.revert(), c && e.push(i));
			}),
			ho("matchMediaRevert"),
			e.forEach(function (i) {
				return i.onMatch(i, function (n) {
					return i.add(null, n);
				});
			}),
			(Ka = t),
			ho("matchMedia"));
	},
	kc = (function () {
		function a(e, i) {
			(this.selector = i && zo(i)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = bf++),
				e && this.add(e);
		}
		var t = a.prototype;
		return (
			(t.add = function (i, n, r) {
				Qt(i) && ((r = n), (n = i), (i = Qt));
				var s = this,
					o = function () {
						var u = qt,
							f = s.selector,
							d;
						return (
							u && u !== s && u.data.push(s),
							r && (s.selector = zo(r)),
							(qt = s),
							(d = n.apply(s, arguments)),
							Qt(d) && s._r.push(d),
							(qt = u),
							(s.selector = f),
							(s.isReverted = !1),
							d
						);
					};
				return (
					(s.last = o),
					i === Qt
						? o(s, function (c) {
								return s.add(null, c);
							})
						: i
							? (s[i] = o)
							: o
				);
			}),
			(t.ignore = function (i) {
				var n = qt;
				(qt = null), i(this), (qt = n);
			}),
			(t.getTweens = function () {
				var i = [];
				return (
					this.data.forEach(function (n) {
						return n instanceof a
							? i.push.apply(i, n.getTweens())
							: n instanceof re &&
									!(n.parent && n.parent.data === "nested") &&
									i.push(n);
					}),
					i
				);
			}),
			(t.clear = function () {
				this._r.length = this.data.length = 0;
			}),
			(t.kill = function (i, n) {
				var r = this;
				if (
					(i
						? (function () {
								for (var o = r.getTweens(), c = r.data.length, u; c--; )
									(u = r.data[c]),
										u.data === "isFlip" &&
											(u.revert(),
											u.getChildren(!0, !0, !1).forEach(function (f) {
												return o.splice(o.indexOf(f), 1);
											}));
								for (
									o
										.map(function (f) {
											return {
												g:
													f._dur ||
													f._delay ||
													(f._sat && !f._sat.vars.immediateRender)
														? f.globalTime(0)
														: -1 / 0,
												t: f,
											};
										})
										.sort(function (f, d) {
											return d.g - f.g || -1 / 0;
										})
										.forEach(function (f) {
											return f.t.revert(i);
										}),
										c = r.data.length;
									c--;

								)
									(u = r.data[c]),
										u instanceof Re
											? u.data !== "nested" &&
												(u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
											: !(u instanceof re) && u.revert && u.revert(i);
								r._r.forEach(function (f) {
									return f(i, r);
								}),
									(r.isReverted = !0);
							})()
						: this.data.forEach(function (o) {
								return o.kill && o.kill();
							}),
					this.clear(),
					n)
				)
					for (var s = Mn.length; s--; )
						Mn[s].id === this.id && Mn.splice(s, 1);
			}),
			(t.revert = function (i) {
				this.kill(i || {});
			}),
			a
		);
	})(),
	Tf = (function () {
		function a(e) {
			(this.contexts = []), (this.scope = e), qt && qt.data.push(this);
		}
		var t = a.prototype;
		return (
			(t.add = function (i, n, r) {
				Ri(i) || (i = { matches: i });
				var s = new kc(0, r || this.scope),
					o = (s.conditions = {}),
					c,
					u,
					f;
				qt && !s.selector && (s.selector = qt.selector),
					this.contexts.push(s),
					(n = s.add("onMatch", n)),
					(s.queries = i);
				for (u in i)
					u === "all"
						? (f = 1)
						: ((c = Pi.matchMedia(i[u])),
							c &&
								(Mn.indexOf(s) < 0 && Mn.push(s),
								(o[u] = c.matches) && (f = 1),
								c.addListener
									? c.addListener(Xo)
									: c.addEventListener("change", Xo)));
				return (
					f &&
						n(s, function (d) {
							return s.add(null, d);
						}),
					this
				);
			}),
			(t.revert = function (i) {
				this.kill(i || {});
			}),
			(t.kill = function (i) {
				this.contexts.forEach(function (n) {
					return n.kill(i, !0);
				});
			}),
			a
		);
	})(),
	Hs = {
		registerPlugin: function () {
			for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
				e[i] = arguments[i];
			e.forEach(function (n) {
				return _c(n);
			});
		},
		timeline: function (t) {
			return new Re(t);
		},
		getTweensOf: function (t, e) {
			return jt.getTweensOf(t, e);
		},
		getProperty: function (t, e, i, n) {
			pe(t) && (t = hi(t)[0]);
			var r = bn(t || {}).get,
				s = i ? nc : ic;
			return (
				i === "native" && (i = ""),
				t &&
					(e
						? s(((ti[e] && ti[e].get) || r)(t, e, i, n))
						: function (o, c, u) {
								return s(((ti[o] && ti[o].get) || r)(t, o, c, u));
							})
			);
		},
		quickSetter: function (t, e, i) {
			if (((t = hi(t)), t.length > 1)) {
				var n = t.map(function (f) {
						return We.quickSetter(f, e, i);
					}),
					r = n.length;
				return function (f) {
					for (var d = r; d--; ) n[d](f);
				};
			}
			t = t[0] || {};
			var s = ti[e],
				o = bn(t),
				c = (o.harness && (o.harness.aliases || {})[e]) || e,
				u = s
					? function (f) {
							var d = new s();
							(Wn._pt = 0),
								d.init(t, i ? f + i : f, Wn, 0, [t]),
								d.render(1, d),
								Wn._pt && ba(1, Wn);
						}
					: o.set(t, c);
			return s
				? u
				: function (f) {
						return u(t, c, i ? f + i : f, o, 1);
					};
		},
		quickTo: function (t, e, i) {
			var n,
				r = We.to(
					t,
					kn(((n = {}), (n[e] = "+=0.1"), (n.paused = !0), n), i || {}),
				),
				s = function (c, u, f) {
					return r.resetTo(e, c, u, f);
				};
			return (s.tween = r), s;
		},
		isTweening: function (t) {
			return jt.getTweensOf(t, !0).length > 0;
		},
		defaults: function (t) {
			return t && t.ease && (t.ease = Sn(t.ease, rr.ease)), ja(rr, t || {});
		},
		config: function (t) {
			return ja(si, t || {});
		},
		registerEffect: function (t) {
			var e = t.name,
				i = t.effect,
				n = t.plugins,
				r = t.defaults,
				s = t.extendTimeline;
			(n || "").split(",").forEach(function (o) {
				return (
					o && !ti[o] && !oi[o] && Wr(e + " effect requires " + o + " plugin.")
				);
			}),
				(lo[e] = function (o, c, u) {
					return i(hi(o), gi(c || {}, r), u);
				}),
				s &&
					(Re.prototype[e] = function (o, c, u) {
						return this.add(lo[e](o, Ri(c) ? c : (u = c) && {}, this), u);
					});
		},
		registerEase: function (t, e) {
			St[t] = Sn(e);
		},
		parseEase: function (t, e) {
			return arguments.length ? Sn(t, e) : St;
		},
		getById: function (t) {
			return jt.getById(t);
		},
		exportRoot: function (t, e) {
			t === void 0 && (t = {});
			var i = new Re(t),
				n,
				r;
			for (
				i.smoothChildTiming = He(t.smoothChildTiming),
					jt.remove(i),
					i._dp = 0,
					i._time = i._tTime = jt._time,
					n = jt._first;
				n;

			)
				(r = n._next),
					(e ||
						!(
							!n._dur &&
							n instanceof re &&
							n.vars.onComplete === n._targets[0]
						)) &&
						Ei(i, n, n._start - n._delay),
					(n = r);
			return Ei(jt, i, 0), i;
		},
		context: function (t, e) {
			return t ? new kc(t, e) : qt;
		},
		matchMedia: function (t) {
			return new Tf(t);
		},
		matchMediaRefresh: function () {
			return (
				Mn.forEach(function (t) {
					var e = t.conditions,
						i,
						n;
					for (n in e) e[n] && ((e[n] = !1), (i = 1));
					i && t.revert();
				}) || Xo()
			);
		},
		addEventListener: function (t, e) {
			var i = Ps[t] || (Ps[t] = []);
			~i.indexOf(e) || i.push(e);
		},
		removeEventListener: function (t, e) {
			var i = Ps[t],
				n = i && i.indexOf(e);
			n >= 0 && i.splice(n, 1);
		},
		utils: {
			wrap: tf,
			wrapYoyo: ef,
			distribute: uc,
			random: dc,
			snap: fc,
			normalize: Ju,
			getUnit: De,
			clamp: Uu,
			splitColor: mc,
			toArray: hi,
			selector: zo,
			mapRange: pc,
			pipe: Qu,
			unitize: Zu,
			interpolate: nf,
			shuffle: cc,
		},
		install: Ql,
		effects: lo,
		ticker: ei,
		updateRoot: Re.updateRoot,
		plugins: ti,
		globalTimeline: jt,
		core: {
			PropTween: je,
			globals: Zl,
			Tween: re,
			Timeline: Re,
			Animation: Qr,
			getCache: bn,
			_removeLinkedListItem: eo,
			reverting: function () {
				return Oe;
			},
			context: function (t) {
				return t && qt && (qt.data.push(t), (t._ctx = qt)), qt;
			},
			suppressOverwrites: function (t) {
				return (ua = t);
			},
		},
	};
$e("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
	return (Hs[a] = re[a]);
});
ei.add(Re.updateRoot);
Wn = Hs.to({}, { duration: 0 });
var Sf = function (t, e) {
		for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
			i = i._next;
		return i;
	},
	Mf = function (t, e) {
		var i = t._targets,
			n,
			r,
			s;
		for (n in e)
			for (r = i.length; r--; )
				(s = t._ptLookup[r][n]),
					s &&
						(s = s.d) &&
						(s._pt && (s = Sf(s, n)),
						s && s.modifier && s.modifier(e[n], t, i[r], n));
	},
	po = function (t, e) {
		return {
			name: t,
			rawVars: 1,
			init: function (n, r, s) {
				s._onInit = function (o) {
					var c, u;
					if (
						(pe(r) &&
							((c = {}),
							$e(r, function (f) {
								return (c[f] = 1);
							}),
							(r = c)),
						e)
					) {
						c = {};
						for (u in r) c[u] = e(r[u]);
						r = c;
					}
					Mf(o, r);
				};
			},
		};
	},
	We =
		Hs.registerPlugin(
			{
				name: "attr",
				init: function (t, e, i, n, r) {
					var s, o, c;
					this.tween = i;
					for (s in e)
						(c = t.getAttribute(s) || ""),
							(o = this.add(
								t,
								"setAttribute",
								(c || 0) + "",
								e[s],
								n,
								r,
								0,
								0,
								s,
							)),
							(o.op = s),
							(o.b = c),
							this._props.push(s);
				},
				render: function (t, e) {
					for (var i = e._pt; i; )
						Oe ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
				},
			},
			{
				name: "endArray",
				init: function (t, e) {
					for (var i = e.length; i--; )
						this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
				},
			},
			po("roundProps", qo),
			po("modifiers"),
			po("snap", fc),
		) || Hs;
re.version = Re.version = We.version = "3.12.5";
Kl = 1;
da() && ar();
St.Power0;
St.Power1;
St.Power2;
St.Power3;
St.Power4;
St.Linear;
St.Quad;
St.Cubic;
St.Quart;
St.Quint;
St.Strong;
St.Elastic;
St.Back;
St.SteppedEase;
St.Bounce;
St.Sine;
St.Expo;
St.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Qa,
	Zi,
	Kn,
	Ta,
	xn,
	Za,
	Sa,
	Df = function () {
		return typeof window < "u";
	},
	Vi = {},
	_n = 180 / Math.PI,
	Qn = Math.PI / 180,
	zn = Math.atan2,
	Ja = 1e8,
	Ma = /([A-Z])/g,
	Of = /(left|right|width|margin|padding|x)/i,
	Pf = /[\s,\(]\S/,
	ki = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity",
	},
	Ho = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
	},
	Cf = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
			e,
		);
	},
	Ef = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
			e,
		);
	},
	kf = function (t, e) {
		var i = e.s + e.c * t;
		e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
	},
	Ac = function (t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e);
	},
	Lc = function (t, e) {
		return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
	},
	Af = function (t, e, i) {
		return (t.style[e] = i);
	},
	Lf = function (t, e, i) {
		return t.style.setProperty(e, i);
	},
	If = function (t, e, i) {
		return (t._gsap[e] = i);
	},
	Rf = function (t, e, i) {
		return (t._gsap.scaleX = t._gsap.scaleY = i);
	},
	Ff = function (t, e, i, n, r) {
		var s = t._gsap;
		(s.scaleX = s.scaleY = i), s.renderTransform(r, s);
	},
	Nf = function (t, e, i, n, r) {
		var s = t._gsap;
		(s[e] = i), s.renderTransform(r, s);
	},
	Vt = "transform",
	Ve = Vt + "Origin",
	Bf = function a(t, e) {
		var i = this,
			n = this.target,
			r = n.style,
			s = n._gsap;
		if (t in Vi && r) {
			if (((this.tfm = this.tfm || {}), t !== "transform"))
				(t = ki[t] || t),
					~t.indexOf(",")
						? t.split(",").forEach(function (o) {
								return (i.tfm[o] = Bi(n, o));
							})
						: (this.tfm[t] = s.x ? s[t] : Bi(n, t)),
					t === Ve && (this.tfm.zOrigin = s.zOrigin);
			else
				return ki.transform.split(",").forEach(function (o) {
					return a.call(i, o, e);
				});
			if (this.props.indexOf(Vt) >= 0) return;
			s.svg &&
				((this.svgo = n.getAttribute("data-svg-origin")),
				this.props.push(Ve, e, "")),
				(t = Vt);
		}
		(r || e) && this.props.push(t, e, r[t]);
	},
	Ic = function (t) {
		t.translate &&
			(t.removeProperty("translate"),
			t.removeProperty("scale"),
			t.removeProperty("rotate"));
	},
	zf = function () {
		var t = this.props,
			e = this.target,
			i = e.style,
			n = e._gsap,
			r,
			s;
		for (r = 0; r < t.length; r += 3)
			t[r + 1]
				? (e[t[r]] = t[r + 2])
				: t[r + 2]
					? (i[t[r]] = t[r + 2])
					: i.removeProperty(
							t[r].substr(0, 2) === "--"
								? t[r]
								: t[r].replace(Ma, "-$1").toLowerCase(),
						);
		if (this.tfm) {
			for (s in this.tfm) n[s] = this.tfm[s];
			n.svg &&
				(n.renderTransform(),
				e.setAttribute("data-svg-origin", this.svgo || "")),
				(r = Sa()),
				(!r || !r.isStart) &&
					!i[Vt] &&
					(Ic(i),
					n.zOrigin &&
						i[Ve] &&
						((i[Ve] += " " + n.zOrigin + "px"),
						(n.zOrigin = 0),
						n.renderTransform()),
					(n.uncache = 1));
		}
	},
	Rc = function (t, e) {
		var i = { target: t, props: [], revert: zf, save: Bf };
		return (
			t._gsap || We.core.getCache(t),
			e &&
				e.split(",").forEach(function (n) {
					return i.save(n);
				}),
			i
		);
	},
	Fc,
	$o = function (t, e) {
		var i = Zi.createElementNS
			? Zi.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: Zi.createElement(t);
		return i && i.style ? i : Zi.createElement(t);
	},
	Li = function a(t, e, i) {
		var n = getComputedStyle(t);
		return (
			n[e] ||
			n.getPropertyValue(e.replace(Ma, "-$1").toLowerCase()) ||
			n.getPropertyValue(e) ||
			(!i && a(t, lr(e) || e, 1)) ||
			""
		);
	},
	tl = "O,Moz,ms,Ms,Webkit".split(","),
	lr = function (t, e, i) {
		var n = e || xn,
			r = n.style,
			s = 5;
		if (t in r && !i) return t;
		for (
			t = t.charAt(0).toUpperCase() + t.substr(1);
			s-- && !(tl[s] + t in r);

		);
		return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? tl[s] : "") + t;
	},
	jo = function () {
		Df() &&
			window.document &&
			((Qa = window),
			(Zi = Qa.document),
			(Kn = Zi.documentElement),
			(xn = $o("div") || { style: {} }),
			$o("div"),
			(Vt = lr(Vt)),
			(Ve = Vt + "Origin"),
			(xn.style.cssText =
				"border-width:0;line-height:0;position:absolute;padding:0"),
			(Fc = !!lr("perspective")),
			(Sa = We.core.reverting),
			(Ta = 1));
	},
	go = function a(t) {
		var e = $o(
				"svg",
				(this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
					"http://www.w3.org/2000/svg",
			),
			i = this.parentNode,
			n = this.nextSibling,
			r = this.style.cssText,
			s;
		if (
			(Kn.appendChild(e),
			e.appendChild(this),
			(this.style.display = "block"),
			t)
		)
			try {
				(s = this.getBBox()),
					(this._gsapBBox = this.getBBox),
					(this.getBBox = a);
			} catch {}
		else this._gsapBBox && (s = this._gsapBBox());
		return (
			i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
			Kn.removeChild(e),
			(this.style.cssText = r),
			s
		);
	},
	el = function (t, e) {
		for (var i = e.length; i--; )
			if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
	},
	Nc = function (t) {
		var e;
		try {
			e = t.getBBox();
		} catch {
			e = go.call(t, !0);
		}
		return (
			(e && (e.width || e.height)) || t.getBBox === go || (e = go.call(t, !0)),
			e && !e.width && !e.x && !e.y
				? {
						x: +el(t, ["x", "cx", "x1"]) || 0,
						y: +el(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
					}
				: e
		);
	},
	Bc = function (t) {
		return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Nc(t));
	},
	An = function (t, e) {
		if (e) {
			var i = t.style,
				n;
			e in Vi && e !== Ve && (e = Vt),
				i.removeProperty
					? ((n = e.substr(0, 2)),
						(n === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
						i.removeProperty(
							n === "--" ? e : e.replace(Ma, "-$1").toLowerCase(),
						))
					: i.removeAttribute(e);
		}
	},
	Ji = function (t, e, i, n, r, s) {
		var o = new je(t._pt, e, i, 0, 1, s ? Lc : Ac);
		return (t._pt = o), (o.b = n), (o.e = r), t._props.push(i), o;
	},
	il = { deg: 1, rad: 1, turn: 1 },
	qf = { grid: 1, flex: 1 },
	ln = function a(t, e, i, n) {
		var r = parseFloat(i) || 0,
			s = (i + "").trim().substr((r + "").length) || "px",
			o = xn.style,
			c = Of.test(e),
			u = t.tagName.toLowerCase() === "svg",
			f = (u ? "client" : "offset") + (c ? "Width" : "Height"),
			d = 100,
			p = n === "px",
			l = n === "%",
			g,
			h,
			m,
			_;
		if (n === s || !r || il[n] || il[s]) return r;
		if (
			(s !== "px" && !p && (r = a(t, e, i, "px")),
			(_ = t.getCTM && Bc(t)),
			(l || s === "%") && (Vi[e] || ~e.indexOf("adius")))
		)
			return (
				(g = _ ? t.getBBox()[c ? "width" : "height"] : t[f]),
				Jt(l ? (r / g) * d : (r / 100) * g)
			);
		if (
			((o[c ? "width" : "height"] = d + (p ? s : n)),
			(h =
				~e.indexOf("adius") || (n === "em" && t.appendChild && !u)
					? t
					: t.parentNode),
			_ && (h = (t.ownerSVGElement || {}).parentNode),
			(!h || h === Zi || !h.appendChild) && (h = Zi.body),
			(m = h._gsap),
			m && l && m.width && c && m.time === ei.time && !m.uncache)
		)
			return Jt((r / m.width) * d);
		if (l && (e === "height" || e === "width")) {
			var y = t.style[e];
			(t.style[e] = d + n), (g = t[f]), y ? (t.style[e] = y) : An(t, e);
		} else
			(l || s === "%") &&
				!qf[Li(h, "display")] &&
				(o.position = Li(t, "position")),
				h === t && (o.position = "static"),
				h.appendChild(xn),
				(g = xn[f]),
				h.removeChild(xn),
				(o.position = "absolute");
		return (
			c && l && ((m = bn(h)), (m.time = ei.time), (m.width = h[f])),
			Jt(p ? (g * r) / d : g && r ? (d / g) * r : 0)
		);
	},
	Bi = function (t, e, i, n) {
		var r;
		return (
			Ta || jo(),
			e in ki &&
				e !== "transform" &&
				((e = ki[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
			Vi[e] && e !== "transform"
				? ((r = Jr(t, n)),
					(r =
						e !== "transformOrigin"
							? r[e]
							: r.svg
								? r.origin
								: js(Li(t, Ve)) + " " + r.zOrigin + "px"))
				: ((r = t.style[e]),
					(!r || r === "auto" || n || ~(r + "").indexOf("calc(")) &&
						(r =
							($s[e] && $s[e](t, e, i)) ||
							Li(t, e) ||
							tc(t, e) ||
							(e === "opacity" ? 1 : 0))),
			i && !~(r + "").trim().indexOf(" ") ? ln(t, e, r, i) + i : r
		);
	},
	Yf = function (t, e, i, n) {
		if (!i || i === "none") {
			var r = lr(e, t, 1),
				s = r && Li(t, r, 1);
			s && s !== i
				? ((e = r), (i = s))
				: e === "borderColor" && (i = Li(t, "borderTopColor"));
		}
		var o = new je(this._pt, t.style, e, 0, 1, Cc),
			c = 0,
			u = 0,
			f,
			d,
			p,
			l,
			g,
			h,
			m,
			_,
			y,
			S,
			x,
			b;
		if (
			((o.b = i),
			(o.e = n),
			(i += ""),
			(n += ""),
			n === "auto" &&
				((h = t.style[e]),
				(t.style[e] = n),
				(n = Li(t, e) || n),
				h ? (t.style[e] = h) : An(t, e)),
			(f = [i, n]),
			vc(f),
			(i = f[0]),
			(n = f[1]),
			(p = i.match(Vn) || []),
			(b = n.match(Vn) || []),
			b.length)
		) {
			for (; (d = Vn.exec(n)); )
				(m = d[0]),
					(y = n.substring(c, d.index)),
					g
						? (g = (g + 1) % 5)
						: (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1),
					m !== (h = p[u++] || "") &&
						((l = parseFloat(h) || 0),
						(x = h.substr((l + "").length)),
						m.charAt(1) === "=" && (m = Un(l, m) + x),
						(_ = parseFloat(m)),
						(S = m.substr((_ + "").length)),
						(c = Vn.lastIndex - S.length),
						S ||
							((S = S || si.units[e] || x),
							c === n.length && ((n += S), (o.e += S))),
						x !== S && (l = ln(t, e, h, S) || 0),
						(o._pt = {
							_next: o._pt,
							p: y || u === 1 ? y : ",",
							s: l,
							c: _ - l,
							m: (g && g < 4) || e === "zIndex" ? Math.round : 0,
						}));
			o.c = c < n.length ? n.substring(c, n.length) : "";
		} else o.r = e === "display" && n === "none" ? Lc : Ac;
		return Gl.test(n) && (o.e = 0), (this._pt = o), o;
	},
	nl = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
	Xf = function (t) {
		var e = t.split(" "),
			i = e[0],
			n = e[1] || "50%";
		return (
			(i === "top" || i === "bottom" || n === "left" || n === "right") &&
				((t = i), (i = n), (n = t)),
			(e[0] = nl[i] || i),
			(e[1] = nl[n] || n),
			e.join(" ")
		);
	},
	Hf = function (t, e) {
		if (e.tween && e.tween._time === e.tween._dur) {
			var i = e.t,
				n = i.style,
				r = e.u,
				s = i._gsap,
				o,
				c,
				u;
			if (r === "all" || r === !0) (n.cssText = ""), (c = 1);
			else
				for (r = r.split(","), u = r.length; --u > -1; )
					(o = r[u]),
						Vi[o] && ((c = 1), (o = o === "transformOrigin" ? Ve : Vt)),
						An(i, o);
			c &&
				(An(i, Vt),
				s &&
					(s.svg && i.removeAttribute("transform"),
					Jr(i, 1),
					(s.uncache = 1),
					Ic(n)));
		}
	},
	$s = {
		clearProps: function (t, e, i, n, r) {
			if (r.data !== "isFromStart") {
				var s = (t._pt = new je(t._pt, e, i, 0, 0, Hf));
				return (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(i), 1;
			}
		},
	},
	Zr = [1, 0, 0, 1, 0, 0],
	zc = {},
	qc = function (t) {
		return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
	},
	rl = function (t) {
		var e = Li(t, Vt);
		return qc(e) ? Zr : e.substr(7).match(Wl).map(Jt);
	},
	Da = function (t, e) {
		var i = t._gsap || bn(t),
			n = t.style,
			r = rl(t),
			s,
			o,
			c,
			u;
		return i.svg && t.getAttribute("transform")
			? ((c = t.transform.baseVal.consolidate().matrix),
				(r = [c.a, c.b, c.c, c.d, c.e, c.f]),
				r.join(",") === "1,0,0,1,0,0" ? Zr : r)
			: (r === Zr &&
					!t.offsetParent &&
					t !== Kn &&
					!i.svg &&
					((c = n.display),
					(n.display = "block"),
					(s = t.parentNode),
					(!s || !t.offsetParent) &&
						((u = 1), (o = t.nextElementSibling), Kn.appendChild(t)),
					(r = rl(t)),
					c ? (n.display = c) : An(t, "display"),
					u &&
						(o
							? s.insertBefore(t, o)
							: s
								? s.appendChild(t)
								: Kn.removeChild(t))),
				e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
	},
	Vo = function (t, e, i, n, r, s) {
		var o = t._gsap,
			c = r || Da(t, !0),
			u = o.xOrigin || 0,
			f = o.yOrigin || 0,
			d = o.xOffset || 0,
			p = o.yOffset || 0,
			l = c[0],
			g = c[1],
			h = c[2],
			m = c[3],
			_ = c[4],
			y = c[5],
			S = e.split(" "),
			x = parseFloat(S[0]) || 0,
			b = parseFloat(S[1]) || 0,
			C,
			M,
			O,
			E;
		i
			? c !== Zr &&
				(M = l * m - g * h) &&
				((O = x * (m / M) + b * (-h / M) + (h * y - m * _) / M),
				(E = x * (-g / M) + b * (l / M) - (l * y - g * _) / M),
				(x = O),
				(b = E))
			: ((C = Nc(t)),
				(x = C.x + (~S[0].indexOf("%") ? (x / 100) * C.width : x)),
				(b = C.y + (~(S[1] || S[0]).indexOf("%") ? (b / 100) * C.height : b))),
			n || (n !== !1 && o.smooth)
				? ((_ = x - u),
					(y = b - f),
					(o.xOffset = d + (_ * l + y * h) - _),
					(o.yOffset = p + (_ * g + y * m) - y))
				: (o.xOffset = o.yOffset = 0),
			(o.xOrigin = x),
			(o.yOrigin = b),
			(o.smooth = !!n),
			(o.origin = e),
			(o.originIsAbsolute = !!i),
			(t.style[Ve] = "0px 0px"),
			s &&
				(Ji(s, o, "xOrigin", u, x),
				Ji(s, o, "yOrigin", f, b),
				Ji(s, o, "xOffset", d, o.xOffset),
				Ji(s, o, "yOffset", p, o.yOffset)),
			t.setAttribute("data-svg-origin", x + " " + b);
	},
	Jr = function (t, e) {
		var i = t._gsap || new Tc(t);
		if ("x" in i && !e && !i.uncache) return i;
		var n = t.style,
			r = i.scaleX < 0,
			s = "px",
			o = "deg",
			c = getComputedStyle(t),
			u = Li(t, Ve) || "0",
			f,
			d,
			p,
			l,
			g,
			h,
			m,
			_,
			y,
			S,
			x,
			b,
			C,
			M,
			O,
			E,
			L,
			N,
			D,
			R,
			Y,
			X,
			V,
			H,
			tt,
			gt,
			T,
			nt,
			ut,
			I,
			F,
			G;
		return (
			(f = d = p = h = m = _ = y = S = x = 0),
			(l = g = 1),
			(i.svg = !!(t.getCTM && Bc(t))),
			c.translate &&
				((c.translate !== "none" ||
					c.scale !== "none" ||
					c.rotate !== "none") &&
					(n[Vt] =
						(c.translate !== "none"
							? "translate3d(" +
								(c.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
								") "
							: "") +
						(c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") +
						(c.scale !== "none"
							? "scale(" + c.scale.split(" ").join(",") + ") "
							: "") +
						(c[Vt] !== "none" ? c[Vt] : "")),
				(n.scale = n.rotate = n.translate = "none")),
			(M = Da(t, i.svg)),
			i.svg &&
				(i.uncache
					? ((tt = t.getBBox()),
						(u = i.xOrigin - tt.x + "px " + (i.yOrigin - tt.y) + "px"),
						(H = ""))
					: (H = !e && t.getAttribute("data-svg-origin")),
				Vo(t, H || u, !!H || i.originIsAbsolute, i.smooth !== !1, M)),
			(b = i.xOrigin || 0),
			(C = i.yOrigin || 0),
			M !== Zr &&
				((N = M[0]),
				(D = M[1]),
				(R = M[2]),
				(Y = M[3]),
				(f = X = M[4]),
				(d = V = M[5]),
				M.length === 6
					? ((l = Math.sqrt(N * N + D * D)),
						(g = Math.sqrt(Y * Y + R * R)),
						(h = N || D ? zn(D, N) * _n : 0),
						(y = R || Y ? zn(R, Y) * _n + h : 0),
						y && (g *= Math.abs(Math.cos(y * Qn))),
						i.svg && ((f -= b - (b * N + C * R)), (d -= C - (b * D + C * Y))))
					: ((G = M[6]),
						(I = M[7]),
						(T = M[8]),
						(nt = M[9]),
						(ut = M[10]),
						(F = M[11]),
						(f = M[12]),
						(d = M[13]),
						(p = M[14]),
						(O = zn(G, ut)),
						(m = O * _n),
						O &&
							((E = Math.cos(-O)),
							(L = Math.sin(-O)),
							(H = X * E + T * L),
							(tt = V * E + nt * L),
							(gt = G * E + ut * L),
							(T = X * -L + T * E),
							(nt = V * -L + nt * E),
							(ut = G * -L + ut * E),
							(F = I * -L + F * E),
							(X = H),
							(V = tt),
							(G = gt)),
						(O = zn(-R, ut)),
						(_ = O * _n),
						O &&
							((E = Math.cos(-O)),
							(L = Math.sin(-O)),
							(H = N * E - T * L),
							(tt = D * E - nt * L),
							(gt = R * E - ut * L),
							(F = Y * L + F * E),
							(N = H),
							(D = tt),
							(R = gt)),
						(O = zn(D, N)),
						(h = O * _n),
						O &&
							((E = Math.cos(O)),
							(L = Math.sin(O)),
							(H = N * E + D * L),
							(tt = X * E + V * L),
							(D = D * E - N * L),
							(V = V * E - X * L),
							(N = H),
							(X = tt)),
						m &&
							Math.abs(m) + Math.abs(h) > 359.9 &&
							((m = h = 0), (_ = 180 - _)),
						(l = Jt(Math.sqrt(N * N + D * D + R * R))),
						(g = Jt(Math.sqrt(V * V + G * G))),
						(O = zn(X, V)),
						(y = Math.abs(O) > 2e-4 ? O * _n : 0),
						(x = F ? 1 / (F < 0 ? -F : F) : 0)),
				i.svg &&
					((H = t.getAttribute("transform")),
					(i.forceCSS = t.setAttribute("transform", "") || !qc(Li(t, Vt))),
					H && t.setAttribute("transform", H))),
			Math.abs(y) > 90 &&
				Math.abs(y) < 270 &&
				(r
					? ((l *= -1), (y += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
					: ((g *= -1), (y += y <= 0 ? 180 : -180))),
			(e = e || i.uncache),
			(i.x =
				f -
				((i.xPercent =
					f &&
					((!e && i.xPercent) ||
						(Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
					? (t.offsetWidth * i.xPercent) / 100
					: 0) +
				s),
			(i.y =
				d -
				((i.yPercent =
					d &&
					((!e && i.yPercent) ||
						(Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
					? (t.offsetHeight * i.yPercent) / 100
					: 0) +
				s),
			(i.z = p + s),
			(i.scaleX = Jt(l)),
			(i.scaleY = Jt(g)),
			(i.rotation = Jt(h) + o),
			(i.rotationX = Jt(m) + o),
			(i.rotationY = Jt(_) + o),
			(i.skewX = y + o),
			(i.skewY = S + o),
			(i.transformPerspective = x + s),
			(i.zOrigin = parseFloat(u.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
				(n[Ve] = js(u)),
			(i.xOffset = i.yOffset = 0),
			(i.force3D = si.force3D),
			(i.renderTransform = i.svg ? jf : Fc ? Yc : $f),
			(i.uncache = 0),
			i
		);
	},
	js = function (t) {
		return (t = t.split(" "))[0] + " " + t[1];
	},
	_o = function (t, e, i) {
		var n = De(e);
		return Jt(parseFloat(e) + parseFloat(ln(t, "x", i + "px", n))) + n;
	},
	$f = function (t, e) {
		(e.z = "0px"),
			(e.rotationY = e.rotationX = "0deg"),
			(e.force3D = 0),
			Yc(t, e);
	},
	dn = "0deg",
	gr = "0px",
	hn = ") ",
	Yc = function (t, e) {
		var i = e || this,
			n = i.xPercent,
			r = i.yPercent,
			s = i.x,
			o = i.y,
			c = i.z,
			u = i.rotation,
			f = i.rotationY,
			d = i.rotationX,
			p = i.skewX,
			l = i.skewY,
			g = i.scaleX,
			h = i.scaleY,
			m = i.transformPerspective,
			_ = i.force3D,
			y = i.target,
			S = i.zOrigin,
			x = "",
			b = (_ === "auto" && t && t !== 1) || _ === !0;
		if (S && (d !== dn || f !== dn)) {
			var C = parseFloat(f) * Qn,
				M = Math.sin(C),
				O = Math.cos(C),
				E;
			(C = parseFloat(d) * Qn),
				(E = Math.cos(C)),
				(s = _o(y, s, M * E * -S)),
				(o = _o(y, o, -Math.sin(C) * -S)),
				(c = _o(y, c, O * E * -S + S));
		}
		m !== gr && (x += "perspective(" + m + hn),
			(n || r) && (x += "translate(" + n + "%, " + r + "%) "),
			(b || s !== gr || o !== gr || c !== gr) &&
				(x +=
					c !== gr || b
						? "translate3d(" + s + ", " + o + ", " + c + ") "
						: "translate(" + s + ", " + o + hn),
			u !== dn && (x += "rotate(" + u + hn),
			f !== dn && (x += "rotateY(" + f + hn),
			d !== dn && (x += "rotateX(" + d + hn),
			(p !== dn || l !== dn) && (x += "skew(" + p + ", " + l + hn),
			(g !== 1 || h !== 1) && (x += "scale(" + g + ", " + h + hn),
			(y.style[Vt] = x || "translate(0, 0)");
	},
	jf = function (t, e) {
		var i = e || this,
			n = i.xPercent,
			r = i.yPercent,
			s = i.x,
			o = i.y,
			c = i.rotation,
			u = i.skewX,
			f = i.skewY,
			d = i.scaleX,
			p = i.scaleY,
			l = i.target,
			g = i.xOrigin,
			h = i.yOrigin,
			m = i.xOffset,
			_ = i.yOffset,
			y = i.forceCSS,
			S = parseFloat(s),
			x = parseFloat(o),
			b,
			C,
			M,
			O,
			E;
		(c = parseFloat(c)),
			(u = parseFloat(u)),
			(f = parseFloat(f)),
			f && ((f = parseFloat(f)), (u += f), (c += f)),
			c || u
				? ((c *= Qn),
					(u *= Qn),
					(b = Math.cos(c) * d),
					(C = Math.sin(c) * d),
					(M = Math.sin(c - u) * -p),
					(O = Math.cos(c - u) * p),
					u &&
						((f *= Qn),
						(E = Math.tan(u - f)),
						(E = Math.sqrt(1 + E * E)),
						(M *= E),
						(O *= E),
						f &&
							((E = Math.tan(f)),
							(E = Math.sqrt(1 + E * E)),
							(b *= E),
							(C *= E))),
					(b = Jt(b)),
					(C = Jt(C)),
					(M = Jt(M)),
					(O = Jt(O)))
				: ((b = d), (O = p), (C = M = 0)),
			((S && !~(s + "").indexOf("px")) || (x && !~(o + "").indexOf("px"))) &&
				((S = ln(l, "x", s, "px")), (x = ln(l, "y", o, "px"))),
			(g || h || m || _) &&
				((S = Jt(S + g - (g * b + h * M) + m)),
				(x = Jt(x + h - (g * C + h * O) + _))),
			(n || r) &&
				((E = l.getBBox()),
				(S = Jt(S + (n / 100) * E.width)),
				(x = Jt(x + (r / 100) * E.height))),
			(E =
				"matrix(" + b + "," + C + "," + M + "," + O + "," + S + "," + x + ")"),
			l.setAttribute("transform", E),
			y && (l.style[Vt] = E);
	},
	Vf = function (t, e, i, n, r) {
		var s = 360,
			o = pe(r),
			c = parseFloat(r) * (o && ~r.indexOf("rad") ? _n : 1),
			u = c - n,
			f = n + u + "deg",
			d,
			p;
		return (
			o &&
				((d = r.split("_")[1]),
				d === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
				d === "cw" && u < 0
					? (u = ((u + s * Ja) % s) - ~~(u / s) * s)
					: d === "ccw" && u > 0 && (u = ((u - s * Ja) % s) - ~~(u / s) * s)),
			(t._pt = p = new je(t._pt, e, i, n, u, Cf)),
			(p.e = f),
			(p.u = "deg"),
			t._props.push(i),
			p
		);
	},
	sl = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t;
	},
	Wf = function (t, e, i) {
		var n = sl({}, i._gsap),
			r = "perspective,force3D,transformOrigin,svgOrigin",
			s = i.style,
			o,
			c,
			u,
			f,
			d,
			p,
			l,
			g;
		n.svg
			? ((u = i.getAttribute("transform")),
				i.setAttribute("transform", ""),
				(s[Vt] = e),
				(o = Jr(i, 1)),
				An(i, Vt),
				i.setAttribute("transform", u))
			: ((u = getComputedStyle(i)[Vt]),
				(s[Vt] = e),
				(o = Jr(i, 1)),
				(s[Vt] = u));
		for (c in Vi)
			(u = n[c]),
				(f = o[c]),
				u !== f &&
					r.indexOf(c) < 0 &&
					((l = De(u)),
					(g = De(f)),
					(d = l !== g ? ln(i, c, u, g) : parseFloat(u)),
					(p = parseFloat(f)),
					(t._pt = new je(t._pt, o, c, d, p - d, Ho)),
					(t._pt.u = g || 0),
					t._props.push(c));
		sl(o, n);
	};
$e("padding,margin,Width,Radius", function (a, t) {
	var e = "Top",
		i = "Right",
		n = "Bottom",
		r = "Left",
		s = (t < 3 ? [e, i, n, r] : [e + r, e + i, n + i, n + r]).map(function (o) {
			return t < 2 ? a + o : "border" + o + a;
		});
	$s[t > 1 ? "border" + a : a] = function (o, c, u, f, d) {
		var p, l;
		if (arguments.length < 4)
			return (
				(p = s.map(function (g) {
					return Bi(o, g, u);
				})),
				(l = p.join(" ")),
				l.split(p[0]).length === 5 ? p[0] : l
			);
		(p = (f + "").split(" ")),
			(l = {}),
			s.forEach(function (g, h) {
				return (l[g] = p[h] = p[h] || p[((h - 1) / 2) | 0]);
			}),
			o.init(c, l, d);
	};
});
var Xc = {
	name: "css",
	register: jo,
	targetTest: function (t) {
		return t.style && t.nodeType;
	},
	init: function (t, e, i, n, r) {
		var s = this._props,
			o = t.style,
			c = i.vars.startAt,
			u,
			f,
			d,
			p,
			l,
			g,
			h,
			m,
			_,
			y,
			S,
			x,
			b,
			C,
			M,
			O;
		Ta || jo(),
			(this.styles = this.styles || Rc(t)),
			(O = this.styles.props),
			(this.tween = i);
		for (h in e)
			if (h !== "autoRound" && ((f = e[h]), !(ti[h] && Sc(h, e, i, n, t, r)))) {
				if (
					((l = typeof f),
					(g = $s[h]),
					l === "function" && ((f = f.call(i, n, t, r)), (l = typeof f)),
					l === "string" && ~f.indexOf("random(") && (f = Ur(f)),
					g)
				)
					g(this, t, h, f, i) && (M = 1);
				else if (h.substr(0, 2) === "--")
					(u = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
						(f += ""),
						(sn.lastIndex = 0),
						sn.test(u) || ((m = De(u)), (_ = De(f))),
						_ ? m !== _ && (u = ln(t, h, u, _) + _) : m && (f += m),
						this.add(o, "setProperty", u, f, n, r, 0, 0, h),
						s.push(h),
						O.push(h, 0, o[h]);
				else if (l !== "undefined") {
					if (
						(c && h in c
							? ((u = typeof c[h] == "function" ? c[h].call(i, n, t, r) : c[h]),
								pe(u) && ~u.indexOf("random(") && (u = Ur(u)),
								De(u + "") ||
									u === "auto" ||
									(u += si.units[h] || De(Bi(t, h)) || ""),
								(u + "").charAt(1) === "=" && (u = Bi(t, h)))
							: (u = Bi(t, h)),
						(p = parseFloat(u)),
						(y = l === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
						y && (f = f.substr(2)),
						(d = parseFloat(f)),
						h in ki &&
							(h === "autoAlpha" &&
								(p === 1 && Bi(t, "visibility") === "hidden" && d && (p = 0),
								O.push("visibility", 0, o.visibility),
								Ji(
									this,
									o,
									"visibility",
									p ? "inherit" : "hidden",
									d ? "inherit" : "hidden",
									!d,
								)),
							h !== "scale" &&
								h !== "transform" &&
								((h = ki[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
						(S = h in Vi),
						S)
					) {
						if (
							(this.styles.save(h),
							x ||
								((b = t._gsap),
								(b.renderTransform && !e.parseTransform) ||
									Jr(t, e.parseTransform),
								(C = e.smoothOrigin !== !1 && b.smooth),
								(x = this._pt =
									new je(this._pt, o, Vt, 0, 1, b.renderTransform, b, 0, -1)),
								(x.dep = 1)),
							h === "scale")
						)
							(this._pt = new je(
								this._pt,
								b,
								"scaleY",
								b.scaleY,
								(y ? Un(b.scaleY, y + d) : d) - b.scaleY || 0,
								Ho,
							)),
								(this._pt.u = 0),
								s.push("scaleY", h),
								(h += "X");
						else if (h === "transformOrigin") {
							O.push(Ve, 0, o[Ve]),
								(f = Xf(f)),
								b.svg
									? Vo(t, f, 0, C, 0, this)
									: ((_ = parseFloat(f.split(" ")[2]) || 0),
										_ !== b.zOrigin && Ji(this, b, "zOrigin", b.zOrigin, _),
										Ji(this, o, h, js(u), js(f)));
							continue;
						} else if (h === "svgOrigin") {
							Vo(t, f, 1, C, 0, this);
							continue;
						} else if (h in zc) {
							Vf(this, b, h, p, y ? Un(p, y + f) : f);
							continue;
						} else if (h === "smoothOrigin") {
							Ji(this, b, "smooth", b.smooth, f);
							continue;
						} else if (h === "force3D") {
							b[h] = f;
							continue;
						} else if (h === "transform") {
							Wf(this, f, t);
							continue;
						}
					} else h in o || (h = lr(h) || h);
					if (S || ((d || d === 0) && (p || p === 0) && !Pf.test(f) && h in o))
						(m = (u + "").substr((p + "").length)),
							d || (d = 0),
							(_ = De(f) || (h in si.units ? si.units[h] : m)),
							m !== _ && (p = ln(t, h, u, _)),
							(this._pt = new je(
								this._pt,
								S ? b : o,
								h,
								p,
								(y ? Un(p, y + d) : d) - p,
								!S && (_ === "px" || h === "zIndex") && e.autoRound !== !1
									? kf
									: Ho,
							)),
							(this._pt.u = _ || 0),
							m !== _ && _ !== "%" && ((this._pt.b = u), (this._pt.r = Ef));
					else if (h in o) Yf.call(this, t, h, u, y ? y + f : f);
					else if (h in t) this.add(t, h, u || t[h], y ? y + f : f, n, r);
					else if (h !== "parseTransform") {
						pa(h, f);
						continue;
					}
					S || (h in o ? O.push(h, 0, o[h]) : O.push(h, 1, u || t[h])),
						s.push(h);
				}
			}
		M && Ec(this);
	},
	render: function (t, e) {
		if (e.tween._time || !Sa())
			for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
		else e.styles.revert();
	},
	get: Bi,
	aliases: ki,
	getSetter: function (t, e, i) {
		var n = ki[e];
		return (
			n && n.indexOf(",") < 0 && (e = n),
			e in Vi && e !== Ve && (t._gsap.x || Bi(t, "x"))
				? i && Za === i
					? e === "scale"
						? Rf
						: If
					: (Za = i || {}) && (e === "scale" ? Ff : Nf)
				: t.style && !fa(t.style[e])
					? Af
					: ~e.indexOf("-")
						? Lf
						: wa(t, e)
		);
	},
	core: { _removeProperty: An, _getMatrix: Da },
};
We.utils.checkPrefix = lr;
We.core.getStyleSaver = Rc;
(function (a, t, e, i) {
	var n = $e(a + "," + t + "," + e, function (r) {
		Vi[r] = 1;
	});
	$e(t, function (r) {
		(si.units[r] = "deg"), (zc[r] = 1);
	}),
		(ki[n[13]] = a + "," + t),
		$e(i, function (r) {
			var s = r.split(":");
			ki[s[1]] = n[s[0]];
		});
})(
	"x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
	"rotation,rotationX,rotationY,skewX,skewY",
	"transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
	"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
$e(
	"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
	function (a) {
		si.units[a] = "px";
	},
);
We.registerPlugin(Xc);
var $ = We.registerPlugin(Xc) || We;
$.core.Tween;
function ol(a, t) {
	for (var e = 0; e < t.length; e++) {
		var i = t[e];
		(i.enumerable = i.enumerable || !1),
			(i.configurable = !0),
			"value" in i && (i.writable = !0),
			Object.defineProperty(a, i.key, i);
	}
}
function Gf(a, t, e) {
	return t && ol(a.prototype, t), e && ol(a, e), a;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ve,
	Cs,
	ii,
	tn,
	en,
	Zn,
	Hc,
	mn,
	Ir,
	$c,
	Yi,
	mi,
	jc,
	Vc = function () {
		return (
			ve ||
			(typeof window < "u" && (ve = window.gsap) && ve.registerPlugin && ve)
		);
	},
	Wc = 1,
	Gn = [],
	xt = [],
	Ii = [],
	Rr = Date.now,
	Wo = function (t, e) {
		return e;
	},
	Uf = function () {
		var t = Ir.core,
			e = t.bridge || {},
			i = t._scrollers,
			n = t._proxies;
		i.push.apply(i, xt),
			n.push.apply(n, Ii),
			(xt = i),
			(Ii = n),
			(Wo = function (s, o) {
				return e[s](o);
			});
	},
	on = function (t, e) {
		return ~Ii.indexOf(t) && Ii[Ii.indexOf(t) + 1][e];
	},
	Fr = function (t) {
		return !!~$c.indexOf(t);
	},
	ke = function (t, e, i, n, r) {
		return t.addEventListener(e, i, { passive: n !== !1, capture: !!r });
	},
	Ee = function (t, e, i, n) {
		return t.removeEventListener(e, i, !!n);
	},
	ds = "scrollLeft",
	hs = "scrollTop",
	Go = function () {
		return (Yi && Yi.isPressed) || xt.cache++;
	},
	Vs = function (t, e) {
		var i = function n(r) {
			if (r || r === 0) {
				Wc && (ii.history.scrollRestoration = "manual");
				var s = Yi && Yi.isPressed;
				(r = n.v = Math.round(r) || (Yi && Yi.iOS ? 1 : 0)),
					t(r),
					(n.cacheID = xt.cache),
					s && Wo("ss", r);
			} else
				(e || xt.cache !== n.cacheID || Wo("ref")) &&
					((n.cacheID = xt.cache), (n.v = t()));
			return n.v + n.offset;
		};
		return (i.offset = 0), t && i;
	},
	Fe = {
		s: ds,
		p: "left",
		p2: "Left",
		os: "right",
		os2: "Right",
		d: "width",
		d2: "Width",
		a: "x",
		sc: Vs(function (a) {
			return arguments.length
				? ii.scrollTo(a, ce.sc())
				: ii.pageXOffset || tn[ds] || en[ds] || Zn[ds] || 0;
		}),
	},
	ce = {
		s: hs,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: Fe,
		sc: Vs(function (a) {
			return arguments.length
				? ii.scrollTo(Fe.sc(), a)
				: ii.pageYOffset || tn[hs] || en[hs] || Zn[hs] || 0;
		}),
	},
	Ye = function (t, e) {
		return (
			((e && e._ctx && e._ctx.selector) || ve.utils.toArray)(t)[0] ||
			(typeof t == "string" && ve.config().nullTargetWarn !== !1
				? console.warn("Element not found:", t)
				: null)
		);
	},
	cn = function (t, e) {
		var i = e.s,
			n = e.sc;
		Fr(t) && (t = tn.scrollingElement || en);
		var r = xt.indexOf(t),
			s = n === ce.sc ? 1 : 2;
		!~r && (r = xt.push(t) - 1), xt[r + s] || ke(t, "scroll", Go);
		var o = xt[r + s],
			c =
				o ||
				(xt[r + s] =
					Vs(on(t, i), !0) ||
					(Fr(t)
						? n
						: Vs(function (u) {
								return arguments.length ? (t[i] = u) : t[i];
							})));
		return (
			(c.target = t),
			o || (c.smooth = ve.getProperty(t, "scrollBehavior") === "smooth"),
			c
		);
	},
	Uo = function (t, e, i) {
		var n = t,
			r = t,
			s = Rr(),
			o = s,
			c = e || 50,
			u = Math.max(500, c * 3),
			f = function (g, h) {
				var m = Rr();
				h || m - s > c
					? ((r = n), (n = g), (o = s), (s = m))
					: i
						? (n += g)
						: (n = r + ((g - r) / (m - o)) * (s - o));
			},
			d = function () {
				(r = n = i ? 0 : n), (o = s = 0);
			},
			p = function (g) {
				var h = o,
					m = r,
					_ = Rr();
				return (
					(g || g === 0) && g !== n && f(g),
					s === o || _ - o > u
						? 0
						: ((n + (i ? m : -m)) / ((i ? _ : s) - h)) * 1e3
				);
			};
		return { update: f, reset: d, getVelocity: p };
	},
	_r = function (t, e) {
		return (
			e && !t._gsapAllow && t.preventDefault(),
			t.changedTouches ? t.changedTouches[0] : t
		);
	},
	al = function (t) {
		var e = Math.max.apply(Math, t),
			i = Math.min.apply(Math, t);
		return Math.abs(e) >= Math.abs(i) ? e : i;
	},
	Gc = function () {
		(Ir = ve.core.globals().ScrollTrigger), Ir && Ir.core && Uf();
	},
	Uc = function (t) {
		return (
			(ve = t || Vc()),
			!Cs &&
				ve &&
				typeof document < "u" &&
				document.body &&
				((ii = window),
				(tn = document),
				(en = tn.documentElement),
				(Zn = tn.body),
				($c = [ii, tn, en, Zn]),
				ve.utils.clamp,
				(jc = ve.core.context || function () {}),
				(mn = "onpointerenter" in Zn ? "pointer" : "mouse"),
				(Hc = te.isTouch =
					ii.matchMedia &&
					ii.matchMedia("(hover: none), (pointer: coarse)").matches
						? 1
						: "ontouchstart" in ii ||
							  navigator.maxTouchPoints > 0 ||
							  navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(mi = te.eventTypes =
					(
						"ontouchstart" in en
							? "touchstart,touchmove,touchcancel,touchend"
							: "onpointerdown" in en
								? "pointerdown,pointermove,pointercancel,pointerup"
								: "mousedown,mousemove,mouseup,mouseup"
					).split(",")),
				setTimeout(function () {
					return (Wc = 0);
				}, 500),
				Gc(),
				(Cs = 1)),
			Cs
		);
	};
Fe.op = ce;
xt.cache = 0;
var te = (function () {
	function a(e) {
		this.init(e);
	}
	var t = a.prototype;
	return (
		(t.init = function (i) {
			Cs || Uc(ve) || console.warn("Please gsap.registerPlugin(Observer)"),
				Ir || Gc();
			var n = i.tolerance,
				r = i.dragMinimum,
				s = i.type,
				o = i.target,
				c = i.lineHeight,
				u = i.debounce,
				f = i.preventDefault,
				d = i.onStop,
				p = i.onStopDelay,
				l = i.ignore,
				g = i.wheelSpeed,
				h = i.event,
				m = i.onDragStart,
				_ = i.onDragEnd,
				y = i.onDrag,
				S = i.onPress,
				x = i.onRelease,
				b = i.onRight,
				C = i.onLeft,
				M = i.onUp,
				O = i.onDown,
				E = i.onChangeX,
				L = i.onChangeY,
				N = i.onChange,
				D = i.onToggleX,
				R = i.onToggleY,
				Y = i.onHover,
				X = i.onHoverEnd,
				V = i.onMove,
				H = i.ignoreCheck,
				tt = i.isNormalizer,
				gt = i.onGestureStart,
				T = i.onGestureEnd,
				nt = i.onWheel,
				ut = i.onEnable,
				I = i.onDisable,
				F = i.onClick,
				G = i.scrollSpeed,
				J = i.capture,
				U = i.allowClicks,
				K = i.lockAxis,
				lt = i.onLockAxis;
			(this.target = o = Ye(o) || en),
				(this.vars = i),
				l && (l = ve.utils.toArray(l)),
				(n = n || 1e-9),
				(r = r || 0),
				(g = g || 1),
				(G = G || 1),
				(s = s || "wheel,touch,pointer"),
				(u = u !== !1),
				c || (c = parseFloat(ii.getComputedStyle(Zn).lineHeight) || 22);
			var ft,
				et,
				W,
				Z,
				ot,
				st,
				Et,
				P = this,
				Mt = 0,
				Xt = 0,
				ue = i.passive || !f,
				kt = cn(o, Fe),
				Rt = cn(o, ce),
				Ge = kt(),
				Be = Rt(),
				Ht =
					~s.indexOf("touch") &&
					!~s.indexOf("pointer") &&
					mi[0] === "pointerdown",
				Wt = Fr(o),
				Pt = o.ownerDocument || tn,
				se = [0, 0, 0],
				Gt = [0, 0, 0],
				ge = 0,
				_i = function () {
					return (ge = Rr());
				},
				At = function (k, z) {
					return (
						((P.event = k) && l && ~l.indexOf(k.target)) ||
						(z && Ht && k.pointerType !== "touch") ||
						(H && H(k, z))
					);
				},
				Si = function () {
					P._vx.reset(), P._vy.reset(), et.pause(), d && d(P);
				},
				Ue = function () {
					var k = (P.deltaX = al(se)),
						z = (P.deltaY = al(Gt)),
						A = Math.abs(k) >= n,
						j = Math.abs(z) >= n;
					N && (A || j) && N(P, k, z, se, Gt),
						A &&
							(b && P.deltaX > 0 && b(P),
							C && P.deltaX < 0 && C(P),
							E && E(P),
							D && P.deltaX < 0 != Mt < 0 && D(P),
							(Mt = P.deltaX),
							(se[0] = se[1] = se[2] = 0)),
						j &&
							(O && P.deltaY > 0 && O(P),
							M && P.deltaY < 0 && M(P),
							L && L(P),
							R && P.deltaY < 0 != Xt < 0 && R(P),
							(Xt = P.deltaY),
							(Gt[0] = Gt[1] = Gt[2] = 0)),
						(Z || W) && (V && V(P), W && (y(P), (W = !1)), (Z = !1)),
						st && !(st = !1) && lt && lt(P),
						ot && (nt(P), (ot = !1)),
						(ft = 0);
				},
				Ke = function (k, z, A) {
					(se[A] += k),
						(Gt[A] += z),
						P._vx.update(k),
						P._vy.update(z),
						u ? ft || (ft = requestAnimationFrame(Ue)) : Ue();
				},
				ze = function (k, z) {
					K &&
						!Et &&
						((P.axis = Et = Math.abs(k) > Math.abs(z) ? "x" : "y"), (st = !0)),
						Et !== "y" && ((se[2] += k), P._vx.update(k, !0)),
						Et !== "x" && ((Gt[2] += z), P._vy.update(z, !0)),
						u ? ft || (ft = requestAnimationFrame(Ue)) : Ue();
				},
				Qe = function (k) {
					if (!At(k, 1)) {
						k = _r(k, f);
						var z = k.clientX,
							A = k.clientY,
							j = z - P.x,
							B = A - P.y,
							Q = P.isDragging;
						(P.x = z),
							(P.y = A),
							(Q ||
								Math.abs(P.startX - z) >= r ||
								Math.abs(P.startY - A) >= r) &&
								(y && (W = !0),
								Q || (P.isDragging = !0),
								ze(j, B),
								Q || (m && m(P)));
					}
				},
				Ce = (P.onPress = function (w) {
					At(w, 1) ||
						(w && w.button) ||
						((P.axis = Et = null),
						et.pause(),
						(P.isPressed = !0),
						(w = _r(w)),
						(Mt = Xt = 0),
						(P.startX = P.x = w.clientX),
						(P.startY = P.y = w.clientY),
						P._vx.reset(),
						P._vy.reset(),
						ke(tt ? o : Pt, mi[1], Qe, ue, !0),
						(P.deltaX = P.deltaY = 0),
						S && S(P));
				}),
				dt = (P.onRelease = function (w) {
					if (!At(w, 1)) {
						Ee(tt ? o : Pt, mi[1], Qe, !0);
						var k = !isNaN(P.y - P.startY),
							z = P.isDragging,
							A =
								z &&
								(Math.abs(P.x - P.startX) > 3 || Math.abs(P.y - P.startY) > 3),
							j = _r(w);
						!A &&
							k &&
							(P._vx.reset(),
							P._vy.reset(),
							f &&
								U &&
								ve.delayedCall(0.08, function () {
									if (Rr() - ge > 300 && !w.defaultPrevented) {
										if (w.target.click) w.target.click();
										else if (Pt.createEvent) {
											var B = Pt.createEvent("MouseEvents");
											B.initMouseEvent(
												"click",
												!0,
												!0,
												ii,
												1,
												j.screenX,
												j.screenY,
												j.clientX,
												j.clientY,
												!1,
												!1,
												!1,
												!1,
												0,
												null,
											),
												w.target.dispatchEvent(B);
										}
									}
								})),
							(P.isDragging = P.isGesturing = P.isPressed = !1),
							d && z && !tt && et.restart(!0),
							_ && z && _(P),
							x && x(P, A);
					}
				}),
				xe = function (k) {
					return (
						k.touches &&
						k.touches.length > 1 &&
						(P.isGesturing = !0) &&
						gt(k, P.isDragging)
					);
				},
				Ft = function () {
					return (P.isGesturing = !1) || T(P);
				},
				we = function (k) {
					if (!At(k)) {
						var z = kt(),
							A = Rt();
						Ke((z - Ge) * G, (A - Be) * G, 1),
							(Ge = z),
							(Be = A),
							d && et.restart(!0);
					}
				},
				qe = function (k) {
					if (!At(k)) {
						(k = _r(k, f)), nt && (ot = !0);
						var z =
							(k.deltaMode === 1 ? c : k.deltaMode === 2 ? ii.innerHeight : 1) *
							g;
						Ke(k.deltaX * z, k.deltaY * z, 0), d && !tt && et.restart(!0);
					}
				},
				Mi = function (k) {
					if (!At(k)) {
						var z = k.clientX,
							A = k.clientY,
							j = z - P.x,
							B = A - P.y;
						(P.x = z),
							(P.y = A),
							(Z = !0),
							d && et.restart(!0),
							(j || B) && ze(j, B);
					}
				},
				at = function (k) {
					(P.event = k), Y(P);
				},
				v = function (k) {
					(P.event = k), X(P);
				},
				q = function (k) {
					return At(k) || (_r(k, f) && F(P));
				};
			(et = P._dc = ve.delayedCall(p || 0.25, Si).pause()),
				(P.deltaX = P.deltaY = 0),
				(P._vx = Uo(0, 50, !0)),
				(P._vy = Uo(0, 50, !0)),
				(P.scrollX = kt),
				(P.scrollY = Rt),
				(P.isDragging = P.isGesturing = P.isPressed = !1),
				jc(this),
				(P.enable = function (w) {
					return (
						P.isEnabled ||
							(ke(Wt ? Pt : o, "scroll", Go),
							s.indexOf("scroll") >= 0 && ke(Wt ? Pt : o, "scroll", we, ue, J),
							s.indexOf("wheel") >= 0 && ke(o, "wheel", qe, ue, J),
							((s.indexOf("touch") >= 0 && Hc) || s.indexOf("pointer") >= 0) &&
								(ke(o, mi[0], Ce, ue, J),
								ke(Pt, mi[2], dt),
								ke(Pt, mi[3], dt),
								U && ke(o, "click", _i, !0, !0),
								F && ke(o, "click", q),
								gt && ke(Pt, "gesturestart", xe),
								T && ke(Pt, "gestureend", Ft),
								Y && ke(o, mn + "enter", at),
								X && ke(o, mn + "leave", v),
								V && ke(o, mn + "move", Mi)),
							(P.isEnabled = !0),
							w && w.type && Ce(w),
							ut && ut(P)),
						P
					);
				}),
				(P.disable = function () {
					P.isEnabled &&
						(Gn.filter(function (w) {
							return w !== P && Fr(w.target);
						}).length || Ee(Wt ? Pt : o, "scroll", Go),
						P.isPressed &&
							(P._vx.reset(), P._vy.reset(), Ee(tt ? o : Pt, mi[1], Qe, !0)),
						Ee(Wt ? Pt : o, "scroll", we, J),
						Ee(o, "wheel", qe, J),
						Ee(o, mi[0], Ce, J),
						Ee(Pt, mi[2], dt),
						Ee(Pt, mi[3], dt),
						Ee(o, "click", _i, !0),
						Ee(o, "click", q),
						Ee(Pt, "gesturestart", xe),
						Ee(Pt, "gestureend", Ft),
						Ee(o, mn + "enter", at),
						Ee(o, mn + "leave", v),
						Ee(o, mn + "move", Mi),
						(P.isEnabled = P.isPressed = P.isDragging = !1),
						I && I(P));
				}),
				(P.kill = P.revert =
					function () {
						P.disable();
						var w = Gn.indexOf(P);
						w >= 0 && Gn.splice(w, 1), Yi === P && (Yi = 0);
					}),
				Gn.push(P),
				tt && Fr(o) && (Yi = P),
				P.enable(h);
		}),
		Gf(a, [
			{
				key: "velocityX",
				get: function () {
					return this._vx.getVelocity();
				},
			},
			{
				key: "velocityY",
				get: function () {
					return this._vy.getVelocity();
				},
			},
		]),
		a
	);
})();
te.version = "3.12.5";
te.create = function (a) {
	return new te(a);
};
te.register = Uc;
te.getAll = function () {
	return Gn.slice();
};
te.getById = function (a) {
	return Gn.filter(function (t) {
		return t.vars.id === a;
	})[0];
};
Vc() && ve.registerPlugin(te);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var it,
	$n,
	bt,
	$t,
	vi,
	zt,
	Kc,
	Ws,
	ts,
	Nr,
	br,
	ps,
	Se,
	ro,
	Ko,
	Le,
	ll,
	cl,
	jn,
	Qc,
	mo,
	Zc,
	Ae,
	Qo,
	Jc,
	tu,
	Ui,
	Zo,
	Oa,
	Jn,
	Pa,
	Gs,
	Jo,
	yo,
	gs = 1,
	Me = Date.now,
	vo = Me(),
	pi = 0,
	Tr = 0,
	ul = function (t, e, i) {
		var n = Je(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
		return (i["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
	},
	fl = function (t, e) {
		return e && (!Je(t) || t.substr(0, 6) !== "clamp(")
			? "clamp(" + t + ")"
			: t;
	},
	Kf = function a() {
		return Tr && requestAnimationFrame(a);
	},
	dl = function () {
		return (ro = 1);
	},
	hl = function () {
		return (ro = 0);
	},
	Ci = function (t) {
		return t;
	},
	Sr = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	eu = function () {
		return typeof window < "u";
	},
	iu = function () {
		return it || (eu() && (it = window.gsap) && it.registerPlugin && it);
	},
	Ln = function (t) {
		return !!~Kc.indexOf(t);
	},
	nu = function (t) {
		return (
			(t === "Height" ? Pa : bt["inner" + t]) ||
			vi["client" + t] ||
			zt["client" + t]
		);
	},
	ru = function (t) {
		return (
			on(t, "getBoundingClientRect") ||
			(Ln(t)
				? function () {
						return (Is.width = bt.innerWidth), (Is.height = Pa), Is;
					}
				: function () {
						return qi(t);
					})
		);
	},
	Qf = function (t, e, i) {
		var n = i.d,
			r = i.d2,
			s = i.a;
		return (s = on(t, "getBoundingClientRect"))
			? function () {
					return s()[n];
				}
			: function () {
					return (e ? nu(r) : t["client" + r]) || 0;
				};
	},
	Zf = function (t, e) {
		return !e || ~Ii.indexOf(t)
			? ru(t)
			: function () {
					return Is;
				};
	},
	Ai = function (t, e) {
		var i = e.s,
			n = e.d2,
			r = e.d,
			s = e.a;
		return Math.max(
			0,
			(i = "scroll" + n) && (s = on(t, i))
				? s() - ru(t)()[r]
				: Ln(t)
					? (vi[i] || zt[i]) - nu(n)
					: t[i] - t["offset" + n],
		);
	},
	_s = function (t, e) {
		for (var i = 0; i < jn.length; i += 3)
			(!e || ~e.indexOf(jn[i + 1])) && t(jn[i], jn[i + 1], jn[i + 2]);
	},
	Je = function (t) {
		return typeof t == "string";
	},
	Ne = function (t) {
		return typeof t == "function";
	},
	Mr = function (t) {
		return typeof t == "number";
	},
	yn = function (t) {
		return typeof t == "object";
	},
	mr = function (t, e, i) {
		return t && t.progress(e ? 0 : 1) && i && t.pause();
	},
	xo = function (t, e) {
		if (t.enabled) {
			var i = t._ctx
				? t._ctx.add(function () {
						return e(t);
					})
				: e(t);
			i && i.totalTime && (t.callbackAnimation = i);
		}
	},
	qn = Math.abs,
	su = "left",
	ou = "top",
	Ca = "right",
	Ea = "bottom",
	Dn = "width",
	On = "height",
	Br = "Right",
	zr = "Left",
	qr = "Top",
	Yr = "Bottom",
	ie = "padding",
	ui = "margin",
	cr = "Width",
	ka = "Height",
	ae = "px",
	fi = function (t) {
		return bt.getComputedStyle(t);
	},
	Jf = function (t) {
		var e = fi(t).position;
		t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
	},
	pl = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	qi = function (t, e) {
		var i =
				e &&
				fi(t)[Ko] !== "matrix(1, 0, 0, 1, 0, 0)" &&
				it
					.to(t, {
						x: 0,
						y: 0,
						xPercent: 0,
						yPercent: 0,
						rotation: 0,
						rotationX: 0,
						rotationY: 0,
						scale: 1,
						skewX: 0,
						skewY: 0,
					})
					.progress(1),
			n = t.getBoundingClientRect();
		return i && i.progress(0).kill(), n;
	},
	Us = function (t, e) {
		var i = e.d2;
		return t["offset" + i] || t["client" + i] || 0;
	},
	au = function (t) {
		var e = [],
			i = t.labels,
			n = t.duration(),
			r;
		for (r in i) e.push(i[r] / n);
		return e;
	},
	td = function (t) {
		return function (e) {
			return it.utils.snap(au(t), e);
		};
	},
	Aa = function (t) {
		var e = it.utils.snap(t),
			i =
				Array.isArray(t) &&
				t.slice(0).sort(function (n, r) {
					return n - r;
				});
		return i
			? function (n, r, s) {
					s === void 0 && (s = 0.001);
					var o;
					if (!r) return e(n);
					if (r > 0) {
						for (n -= s, o = 0; o < i.length; o++) if (i[o] >= n) return i[o];
						return i[o - 1];
					} else for (o = i.length, n += s; o--; ) if (i[o] <= n) return i[o];
					return i[0];
				}
			: function (n, r, s) {
					s === void 0 && (s = 0.001);
					var o = e(n);
					return !r || Math.abs(o - n) < s || o - n < 0 == r < 0
						? o
						: e(r < 0 ? n - t : n + t);
				};
	},
	ed = function (t) {
		return function (e, i) {
			return Aa(au(t))(e, i.direction);
		};
	},
	ms = function (t, e, i, n) {
		return i.split(",").forEach(function (r) {
			return t(e, r, n);
		});
	},
	de = function (t, e, i, n, r) {
		return t.addEventListener(e, i, { passive: !n, capture: !!r });
	},
	fe = function (t, e, i, n) {
		return t.removeEventListener(e, i, !!n);
	},
	ys = function (t, e, i) {
		(i = i && i.wheelHandler), i && (t(e, "wheel", i), t(e, "touchmove", i));
	},
	gl = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal",
	},
	vs = { toggleActions: "play", anticipatePin: 0 },
	Ks = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	Es = function (t, e) {
		if (Je(t)) {
			var i = t.indexOf("="),
				n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
			~i && (t.indexOf("%") > i && (n *= e / 100), (t = t.substr(0, i - 1))),
				(t =
					n +
					(t in Ks
						? Ks[t] * e
						: ~t.indexOf("%")
							? (parseFloat(t) * e) / 100
							: parseFloat(t) || 0));
		}
		return t;
	},
	xs = function (t, e, i, n, r, s, o, c) {
		var u = r.startColor,
			f = r.endColor,
			d = r.fontSize,
			p = r.indent,
			l = r.fontWeight,
			g = $t.createElement("div"),
			h = Ln(i) || on(i, "pinType") === "fixed",
			m = t.indexOf("scroller") !== -1,
			_ = h ? zt : i,
			y = t.indexOf("start") !== -1,
			S = y ? u : f,
			x =
				"border-color:" +
				S +
				";font-size:" +
				d +
				";color:" +
				S +
				";font-weight:" +
				l +
				";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
		return (
			(x += "position:" + ((m || c) && h ? "fixed;" : "absolute;")),
			(m || c || !h) &&
				(x += (n === ce ? Ca : Ea) + ":" + (s + parseFloat(p)) + "px;"),
			o &&
				(x +=
					"box-sizing:border-box;text-align:left;width:" +
					o.offsetWidth +
					"px;"),
			(g._isStart = y),
			g.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
			(g.style.cssText = x),
			(g.innerText = e || e === 0 ? t + "-" + e : t),
			_.children[0] ? _.insertBefore(g, _.children[0]) : _.appendChild(g),
			(g._offset = g["offset" + n.op.d2]),
			ks(g, 0, n, y),
			g
		);
	},
	ks = function (t, e, i, n) {
		var r = { display: "block" },
			s = i[n ? "os2" : "p2"],
			o = i[n ? "p2" : "os2"];
		(t._isFlipped = n),
			(r[i.a + "Percent"] = n ? -100 : 0),
			(r[i.a] = n ? "1px" : 0),
			(r["border" + s + cr] = 1),
			(r["border" + o + cr] = 0),
			(r[i.p] = e + "px"),
			it.set(t, r);
	},
	yt = [],
	ta = {},
	es,
	_l = function () {
		return Me() - pi > 34 && (es || (es = requestAnimationFrame($i)));
	},
	Yn = function () {
		(!Ae || !Ae.isPressed || Ae.startX > zt.clientWidth) &&
			(xt.cache++,
			Ae ? es || (es = requestAnimationFrame($i)) : $i(),
			pi || Rn("scrollStart"),
			(pi = Me()));
	},
	wo = function () {
		(tu = bt.innerWidth), (Jc = bt.innerHeight);
	},
	Dr = function () {
		xt.cache++,
			!Se &&
				!Zc &&
				!$t.fullscreenElement &&
				!$t.webkitFullscreenElement &&
				(!Qo ||
					tu !== bt.innerWidth ||
					Math.abs(bt.innerHeight - Jc) > bt.innerHeight * 0.25) &&
				Ws.restart(!0);
	},
	In = {},
	id = [],
	lu = function a() {
		return fe(mt, "scrollEnd", a) || wn(!0);
	},
	Rn = function (t) {
		return (
			(In[t] &&
				In[t].map(function (e) {
					return e();
				})) ||
			id
		);
	},
	Ze = [],
	cu = function (t) {
		for (var e = 0; e < Ze.length; e += 5)
			(!t || (Ze[e + 4] && Ze[e + 4].query === t)) &&
				((Ze[e].style.cssText = Ze[e + 1]),
				Ze[e].getBBox && Ze[e].setAttribute("transform", Ze[e + 2] || ""),
				(Ze[e + 3].uncache = 1));
	},
	La = function (t, e) {
		var i;
		for (Le = 0; Le < yt.length; Le++)
			(i = yt[Le]),
				i && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
		(Gs = !0), e && cu(e), e || Rn("revert");
	},
	uu = function (t, e) {
		xt.cache++,
			(e || !Ie) &&
				xt.forEach(function (i) {
					return Ne(i) && i.cacheID++ && (i.rec = 0);
				}),
			Je(t) && (bt.history.scrollRestoration = Oa = t);
	},
	Ie,
	Pn = 0,
	ml,
	nd = function () {
		if (ml !== Pn) {
			var t = (ml = Pn);
			requestAnimationFrame(function () {
				return t === Pn && wn(!0);
			});
		}
	},
	fu = function () {
		zt.appendChild(Jn),
			(Pa = (!Ae && Jn.offsetHeight) || bt.innerHeight),
			zt.removeChild(Jn);
	},
	yl = function (t) {
		return ts(
			".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
		).forEach(function (e) {
			return (e.style.display = t ? "none" : "block");
		});
	},
	wn = function (t, e) {
		if (pi && !t && !Gs) {
			de(mt, "scrollEnd", lu);
			return;
		}
		fu(),
			(Ie = mt.isRefreshing = !0),
			xt.forEach(function (n) {
				return Ne(n) && ++n.cacheID && (n.rec = n());
			});
		var i = Rn("refreshInit");
		Qc && mt.sort(),
			e || La(),
			xt.forEach(function (n) {
				Ne(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
			}),
			yt.slice(0).forEach(function (n) {
				return n.refresh();
			}),
			(Gs = !1),
			yt.forEach(function (n) {
				if (n._subPinOffset && n.pin) {
					var r = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
						s = n.pin[r];
					n.revert(!0, 1), n.adjustPinSpacing(n.pin[r] - s), n.refresh();
				}
			}),
			(Jo = 1),
			yl(!0),
			yt.forEach(function (n) {
				var r = Ai(n.scroller, n._dir),
					s = n.vars.end === "max" || (n._endClamp && n.end > r),
					o = n._startClamp && n.start >= r;
				(s || o) &&
					n.setPositions(
						o ? r - 1 : n.start,
						s ? Math.max(o ? r : n.start + 1, r) : n.end,
						!0,
					);
			}),
			yl(!1),
			(Jo = 0),
			i.forEach(function (n) {
				return n && n.render && n.render(-1);
			}),
			xt.forEach(function (n) {
				Ne(n) &&
					(n.smooth &&
						requestAnimationFrame(function () {
							return (n.target.style.scrollBehavior = "smooth");
						}),
					n.rec && n(n.rec));
			}),
			uu(Oa, 1),
			Ws.pause(),
			Pn++,
			(Ie = 2),
			$i(2),
			yt.forEach(function (n) {
				return Ne(n.vars.onRefresh) && n.vars.onRefresh(n);
			}),
			(Ie = mt.isRefreshing = !1),
			Rn("refresh");
	},
	ea = 0,
	As = 1,
	Xr,
	$i = function (t) {
		if (t === 2 || (!Ie && !Gs)) {
			(mt.isUpdating = !0), Xr && Xr.update(0);
			var e = yt.length,
				i = Me(),
				n = i - vo >= 50,
				r = e && yt[0].scroll();
			if (
				((As = ea > r ? -1 : 1),
				Ie || (ea = r),
				n &&
					(pi && !ro && i - pi > 200 && ((pi = 0), Rn("scrollEnd")),
					(br = vo),
					(vo = i)),
				As < 0)
			) {
				for (Le = e; Le-- > 0; ) yt[Le] && yt[Le].update(0, n);
				As = 1;
			} else for (Le = 0; Le < e; Le++) yt[Le] && yt[Le].update(0, n);
			mt.isUpdating = !1;
		}
		es = 0;
	},
	ia = [
		su,
		ou,
		Ea,
		Ca,
		ui + Yr,
		ui + Br,
		ui + qr,
		ui + zr,
		"display",
		"flexShrink",
		"float",
		"zIndex",
		"gridColumnStart",
		"gridColumnEnd",
		"gridRowStart",
		"gridRowEnd",
		"gridArea",
		"justifySelf",
		"alignSelf",
		"placeSelf",
		"order",
	],
	Ls = ia.concat([
		Dn,
		On,
		"boxSizing",
		"max" + cr,
		"max" + ka,
		"position",
		ui,
		ie,
		ie + qr,
		ie + Br,
		ie + Yr,
		ie + zr,
	]),
	rd = function (t, e, i) {
		tr(i);
		var n = t._gsap;
		if (n.spacerIsNative) tr(n.spacerState);
		else if (t._gsap.swappedIn) {
			var r = e.parentNode;
			r && (r.insertBefore(t, e), r.removeChild(e));
		}
		t._gsap.swappedIn = !1;
	},
	bo = function (t, e, i, n) {
		if (!t._gsap.swappedIn) {
			for (var r = ia.length, s = e.style, o = t.style, c; r--; )
				(c = ia[r]), (s[c] = i[c]);
			(s.position = i.position === "absolute" ? "absolute" : "relative"),
				i.display === "inline" && (s.display = "inline-block"),
				(o[Ea] = o[Ca] = "auto"),
				(s.flexBasis = i.flexBasis || "auto"),
				(s.overflow = "visible"),
				(s.boxSizing = "border-box"),
				(s[Dn] = Us(t, Fe) + ae),
				(s[On] = Us(t, ce) + ae),
				(s[ie] = o[ui] = o[ou] = o[su] = "0"),
				tr(n),
				(o[Dn] = o["max" + cr] = i[Dn]),
				(o[On] = o["max" + ka] = i[On]),
				(o[ie] = i[ie]),
				t.parentNode !== e &&
					(t.parentNode.insertBefore(e, t), e.appendChild(t)),
				(t._gsap.swappedIn = !0);
		}
	},
	sd = /([A-Z])/g,
	tr = function (t) {
		if (t) {
			var e = t.t.style,
				i = t.length,
				n = 0,
				r,
				s;
			for ((t.t._gsap || it.core.getCache(t.t)).uncache = 1; n < i; n += 2)
				(s = t[n + 1]),
					(r = t[n]),
					s
						? (e[r] = s)
						: e[r] && e.removeProperty(r.replace(sd, "-$1").toLowerCase());
		}
	},
	ws = function (t) {
		for (var e = Ls.length, i = t.style, n = [], r = 0; r < e; r++)
			n.push(Ls[r], i[Ls[r]]);
		return (n.t = t), n;
	},
	od = function (t, e, i) {
		for (var n = [], r = t.length, s = i ? 8 : 0, o; s < r; s += 2)
			(o = t[s]), n.push(o, o in e ? e[o] : t[s + 1]);
		return (n.t = t.t), n;
	},
	Is = { left: 0, top: 0 },
	vl = function (t, e, i, n, r, s, o, c, u, f, d, p, l, g) {
		Ne(t) && (t = t(c)),
			Je(t) &&
				t.substr(0, 3) === "max" &&
				(t = p + (t.charAt(4) === "=" ? Es("0" + t.substr(3), i) : 0));
		var h = l ? l.time() : 0,
			m,
			_,
			y;
		if ((l && l.seek(0), isNaN(t) || (t = +t), Mr(t)))
			l &&
				(t = it.utils.mapRange(
					l.scrollTrigger.start,
					l.scrollTrigger.end,
					0,
					p,
					t,
				)),
				o && ks(o, i, n, !0);
		else {
			Ne(e) && (e = e(c));
			var S = (t || "0").split(" "),
				x,
				b,
				C,
				M;
			(y = Ye(e, c) || zt),
				(x = qi(y) || {}),
				(!x || (!x.left && !x.top)) &&
					fi(y).display === "none" &&
					((M = y.style.display),
					(y.style.display = "block"),
					(x = qi(y)),
					M ? (y.style.display = M) : y.style.removeProperty("display")),
				(b = Es(S[0], x[n.d])),
				(C = Es(S[1] || "0", i)),
				(t = x[n.p] - u[n.p] - f + b + r - C),
				o && ks(o, C, n, i - C < 20 || (o._isStart && C > 20)),
				(i -= i - C);
		}
		if ((g && ((c[g] = t || -0.001), t < 0 && (t = 0)), s)) {
			var O = t + i,
				E = s._isStart;
			(m = "scroll" + n.d2),
				ks(
					s,
					O,
					n,
					(E && O > 20) ||
						(!E && (d ? Math.max(zt[m], vi[m]) : s.parentNode[m]) <= O + 1),
				),
				d &&
					((u = qi(o)),
					d && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + ae));
		}
		return (
			l &&
				y &&
				((m = qi(y)),
				l.seek(p),
				(_ = qi(y)),
				(l._caScrollDist = m[n.p] - _[n.p]),
				(t = (t / l._caScrollDist) * p)),
			l && l.seek(h),
			l ? t : Math.round(t)
		);
	},
	ad = /(webkit|moz|length|cssText|inset)/i,
	xl = function (t, e, i, n) {
		if (t.parentNode !== e) {
			var r = t.style,
				s,
				o;
			if (e === zt) {
				(t._stOrig = r.cssText), (o = fi(t));
				for (s in o)
					!+s &&
						!ad.test(s) &&
						o[s] &&
						typeof r[s] == "string" &&
						s !== "0" &&
						(r[s] = o[s]);
				(r.top = i), (r.left = n);
			} else r.cssText = t._stOrig;
			(it.core.getCache(t).uncache = 1), e.appendChild(t);
		}
	},
	du = function (t, e, i) {
		var n = e,
			r = n;
		return function (s) {
			var o = Math.round(t());
			return (
				o !== n &&
					o !== r &&
					Math.abs(o - n) > 3 &&
					Math.abs(o - r) > 3 &&
					((s = o), i && i()),
				(r = n),
				(n = s),
				s
			);
		};
	},
	bs = function (t, e, i) {
		var n = {};
		(n[e.p] = "+=" + i), it.set(t, n);
	},
	wl = function (t, e) {
		var i = cn(t, e),
			n = "_scroll" + e.p2,
			r = function s(o, c, u, f, d) {
				var p = s.tween,
					l = c.onComplete,
					g = {};
				u = u || i();
				var h = du(i, u, function () {
					p.kill(), (s.tween = 0);
				});
				return (
					(d = (f && d) || 0),
					(f = f || o - u),
					p && p.kill(),
					(c[n] = o),
					(c.inherit = !1),
					(c.modifiers = g),
					(g[n] = function () {
						return h(u + f * p.ratio + d * p.ratio * p.ratio);
					}),
					(c.onUpdate = function () {
						xt.cache++, s.tween && $i();
					}),
					(c.onComplete = function () {
						(s.tween = 0), l && l.call(p);
					}),
					(p = s.tween = it.to(t, c)),
					p
				);
			};
		return (
			(t[n] = i),
			(i.wheelHandler = function () {
				return r.tween && r.tween.kill() && (r.tween = 0);
			}),
			de(t, "wheel", i.wheelHandler),
			mt.isTouch && de(t, "touchmove", i.wheelHandler),
			r
		);
	},
	mt = (function () {
		function a(e, i) {
			$n ||
				a.register(it) ||
				console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
				Zo(this),
				this.init(e, i);
		}
		var t = a.prototype;
		return (
			(t.init = function (i, n) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!Tr)
				) {
					this.update = this.refresh = this.kill = Ci;
					return;
				}
				i = pl(Je(i) || Mr(i) || i.nodeType ? { trigger: i } : i, vs);
				var r = i,
					s = r.onUpdate,
					o = r.toggleClass,
					c = r.id,
					u = r.onToggle,
					f = r.onRefresh,
					d = r.scrub,
					p = r.trigger,
					l = r.pin,
					g = r.pinSpacing,
					h = r.invalidateOnRefresh,
					m = r.anticipatePin,
					_ = r.onScrubComplete,
					y = r.onSnapComplete,
					S = r.once,
					x = r.snap,
					b = r.pinReparent,
					C = r.pinSpacer,
					M = r.containerAnimation,
					O = r.fastScrollEnd,
					E = r.preventOverlaps,
					L =
						i.horizontal || (i.containerAnimation && i.horizontal !== !1)
							? Fe
							: ce,
					N = !d && d !== 0,
					D = Ye(i.scroller || bt),
					R = it.core.getCache(D),
					Y = Ln(D),
					X =
						("pinType" in i
							? i.pinType
							: on(D, "pinType") || (Y && "fixed")) === "fixed",
					V = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
					H = N && i.toggleActions.split(" "),
					tt = "markers" in i ? i.markers : vs.markers,
					gt = Y ? 0 : parseFloat(fi(D)["border" + L.p2 + cr]) || 0,
					T = this,
					nt =
						i.onRefreshInit &&
						function () {
							return i.onRefreshInit(T);
						},
					ut = Qf(D, Y, L),
					I = Zf(D, Y),
					F = 0,
					G = 0,
					J = 0,
					U = cn(D, L),
					K,
					lt,
					ft,
					et,
					W,
					Z,
					ot,
					st,
					Et,
					P,
					Mt,
					Xt,
					ue,
					kt,
					Rt,
					Ge,
					Be,
					Ht,
					Wt,
					Pt,
					se,
					Gt,
					ge,
					_i,
					At,
					Si,
					Ue,
					Ke,
					ze,
					Qe,
					Ce,
					dt,
					xe,
					Ft,
					we,
					qe,
					Mi,
					at,
					v;
				if (
					((T._startClamp = T._endClamp = !1),
					(T._dir = L),
					(m *= 45),
					(T.scroller = D),
					(T.scroll = M ? M.time.bind(M) : U),
					(et = U()),
					(T.vars = i),
					(n = n || i.animation),
					"refreshPriority" in i &&
						((Qc = 1), i.refreshPriority === -9999 && (Xr = T)),
					(R.tweenScroll = R.tweenScroll || {
						top: wl(D, ce),
						left: wl(D, Fe),
					}),
					(T.tweenTo = K = R.tweenScroll[L.p]),
					(T.scrubDuration = function (A) {
						(xe = Mr(A) && A),
							xe
								? dt
									? dt.duration(A)
									: (dt = it.to(n, {
											ease: "expo",
											totalProgress: "+=0",
											inherit: !1,
											duration: xe,
											paused: !0,
											onComplete: function () {
												return _ && _(T);
											},
										}))
								: (dt && dt.progress(1).kill(), (dt = 0));
					}),
					n &&
						((n.vars.lazy = !1),
						(n._initted && !T.isReverted) ||
							(n.vars.immediateRender !== !1 &&
								i.immediateRender !== !1 &&
								n.duration() &&
								n.render(0, !0, !0)),
						(T.animation = n.pause()),
						(n.scrollTrigger = T),
						T.scrubDuration(d),
						(Qe = 0),
						c || (c = n.vars.id)),
					x &&
						((!yn(x) || x.push) && (x = { snapTo: x }),
						"scrollBehavior" in zt.style &&
							it.set(Y ? [zt, vi] : D, { scrollBehavior: "auto" }),
						xt.forEach(function (A) {
							return (
								Ne(A) &&
								A.target === (Y ? $t.scrollingElement || vi : D) &&
								(A.smooth = !1)
							);
						}),
						(ft = Ne(x.snapTo)
							? x.snapTo
							: x.snapTo === "labels"
								? td(n)
								: x.snapTo === "labelsDirectional"
									? ed(n)
									: x.directional !== !1
										? function (A, j) {
												return Aa(x.snapTo)(
													A,
													Me() - G < 500 ? 0 : j.direction,
												);
											}
										: it.utils.snap(x.snapTo)),
						(Ft = x.duration || { min: 0.1, max: 2 }),
						(Ft = yn(Ft) ? Nr(Ft.min, Ft.max) : Nr(Ft, Ft)),
						(we = it
							.delayedCall(x.delay || xe / 2 || 0.1, function () {
								var A = U(),
									j = Me() - G < 500,
									B = K.tween;
								if (
									(j || Math.abs(T.getVelocity()) < 10) &&
									!B &&
									!ro &&
									F !== A
								) {
									var Q = (A - Z) / kt,
										ct = n && !N ? n.totalProgress() : Q,
										rt = j ? 0 : ((ct - Ce) / (Me() - br)) * 1e3 || 0,
										_t = it.utils.clamp(-Q, 1 - Q, (qn(rt / 2) * rt) / 0.185),
										Dt = Q + (x.inertia === !1 ? 0 : _t),
										Ot,
										vt,
										wt = x,
										Ct = wt.onStart,
										pt = wt.onInterrupt,
										_e = wt.onComplete;
									if (
										((Ot = ft(Dt, T)),
										Mr(Ot) || (Ot = Dt),
										(vt = Math.round(Z + Ot * kt)),
										A <= ot && A >= Z && vt !== A)
									) {
										if (B && !B._initted && B.data <= qn(vt - A)) return;
										x.inertia === !1 && (_t = Ot - Q),
											K(
												vt,
												{
													duration: Ft(
														qn(
															(Math.max(qn(Dt - ct), qn(Ot - ct)) * 0.185) /
																rt /
																0.05 || 0,
														),
													),
													ease: x.ease || "power3",
													data: qn(vt - A),
													onInterrupt: function () {
														return we.restart(!0) && pt && pt(T);
													},
													onComplete: function () {
														T.update(),
															(F = U()),
															n &&
																(dt
																	? dt.resetTo(
																			"totalProgress",
																			Ot,
																			n._tTime / n._tDur,
																		)
																	: n.progress(Ot)),
															(Qe = Ce =
																n && !N ? n.totalProgress() : T.progress),
															y && y(T),
															_e && _e(T);
													},
												},
												A,
												_t * kt,
												vt - A - _t * kt,
											),
											Ct && Ct(T, K.tween);
									}
								} else T.isActive && F !== A && we.restart(!0);
							})
							.pause())),
					c && (ta[c] = T),
					(p = T.trigger = Ye(p || (l !== !0 && l))),
					(v = p && p._gsap && p._gsap.stRevert),
					v && (v = v(T)),
					(l = l === !0 ? p : Ye(l)),
					Je(o) && (o = { targets: p, className: o }),
					l &&
						(g === !1 ||
							g === ui ||
							(g =
								!g &&
								l.parentNode &&
								l.parentNode.style &&
								fi(l.parentNode).display === "flex"
									? !1
									: ie),
						(T.pin = l),
						(lt = it.core.getCache(l)),
						lt.spacer
							? (Rt = lt.pinState)
							: (C &&
									((C = Ye(C)),
									C && !C.nodeType && (C = C.current || C.nativeElement),
									(lt.spacerIsNative = !!C),
									C && (lt.spacerState = ws(C))),
								(lt.spacer = Ht = C || $t.createElement("div")),
								Ht.classList.add("pin-spacer"),
								c && Ht.classList.add("pin-spacer-" + c),
								(lt.pinState = Rt = ws(l))),
						i.force3D !== !1 && it.set(l, { force3D: !0 }),
						(T.spacer = Ht = lt.spacer),
						(ze = fi(l)),
						(_i = ze[g + L.os2]),
						(Pt = it.getProperty(l)),
						(se = it.quickSetter(l, L.a, ae)),
						bo(l, Ht, ze),
						(Be = ws(l))),
					tt)
				) {
					(Xt = yn(tt) ? pl(tt, gl) : gl),
						(P = xs("scroller-start", c, D, L, Xt, 0)),
						(Mt = xs("scroller-end", c, D, L, Xt, 0, P)),
						(Wt = P["offset" + L.op.d2]);
					var q = Ye(on(D, "content") || D);
					(st = this.markerStart = xs("start", c, q, L, Xt, Wt, 0, M)),
						(Et = this.markerEnd = xs("end", c, q, L, Xt, Wt, 0, M)),
						M && (at = it.quickSetter([st, Et], L.a, ae)),
						!X &&
							!(Ii.length && on(D, "fixedMarkers") === !0) &&
							(Jf(Y ? zt : D),
							it.set([P, Mt], { force3D: !0 }),
							(Si = it.quickSetter(P, L.a, ae)),
							(Ke = it.quickSetter(Mt, L.a, ae)));
				}
				if (M) {
					var w = M.vars.onUpdate,
						k = M.vars.onUpdateParams;
					M.eventCallback("onUpdate", function () {
						T.update(0, 0, 1), w && w.apply(M, k || []);
					});
				}
				if (
					((T.previous = function () {
						return yt[yt.indexOf(T) - 1];
					}),
					(T.next = function () {
						return yt[yt.indexOf(T) + 1];
					}),
					(T.revert = function (A, j) {
						if (!j) return T.kill(!0);
						var B = A !== !1 || !T.enabled,
							Q = Se;
						B !== T.isReverted &&
							(B &&
								((qe = Math.max(U(), T.scroll.rec || 0)),
								(J = T.progress),
								(Mi = n && n.progress())),
							st &&
								[st, Et, P, Mt].forEach(function (ct) {
									return (ct.style.display = B ? "none" : "block");
								}),
							B && ((Se = T), T.update(B)),
							l &&
								(!b || !T.isActive) &&
								(B ? rd(l, Ht, Rt) : bo(l, Ht, fi(l), At)),
							B || T.update(B),
							(Se = Q),
							(T.isReverted = B));
					}),
					(T.refresh = function (A, j, B, Q) {
						if (!((Se || !T.enabled) && !j)) {
							if (l && A && pi) {
								de(a, "scrollEnd", lu);
								return;
							}
							!Ie && nt && nt(T),
								(Se = T),
								K.tween && !B && (K.tween.kill(), (K.tween = 0)),
								dt && dt.pause(),
								h && n && n.revert({ kill: !1 }).invalidate(),
								T.isReverted || T.revert(!0, !0),
								(T._subPinOffset = !1);
							var ct = ut(),
								rt = I(),
								_t = M ? M.duration() : Ai(D, L),
								Dt = kt <= 0.01,
								Ot = 0,
								vt = Q || 0,
								wt = yn(B) ? B.end : i.end,
								Ct = i.endTrigger || p,
								pt = yn(B)
									? B.start
									: i.start || (i.start === 0 || !p ? 0 : l ? "0 0" : "0 100%"),
								_e = (T.pinnedContainer =
									i.pinnedContainer && Ye(i.pinnedContainer, T)),
								Ut = (p && Math.max(0, yt.indexOf(T))) || 0,
								me = Ut,
								ye,
								be,
								fn,
								cs,
								Te,
								oe,
								Di,
								oo,
								Ha,
								dr,
								Oi,
								hr,
								us;
							for (
								tt &&
								yn(B) &&
								((hr = it.getProperty(P, L.p)), (us = it.getProperty(Mt, L.p)));
								me--;

							)
								(oe = yt[me]),
									oe.end || oe.refresh(0, 1) || (Se = T),
									(Di = oe.pin),
									Di &&
										(Di === p || Di === l || Di === _e) &&
										!oe.isReverted &&
										(dr || (dr = []), dr.unshift(oe), oe.revert(!0, !0)),
									oe !== yt[me] && (Ut--, me--);
							for (
								Ne(pt) && (pt = pt(T)),
									pt = ul(pt, "start", T),
									Z =
										vl(
											pt,
											p,
											ct,
											L,
											U(),
											st,
											P,
											T,
											rt,
											gt,
											X,
											_t,
											M,
											T._startClamp && "_startClamp",
										) || (l ? -0.001 : 0),
									Ne(wt) && (wt = wt(T)),
									Je(wt) &&
										!wt.indexOf("+=") &&
										(~wt.indexOf(" ")
											? (wt = (Je(pt) ? pt.split(" ")[0] : "") + wt)
											: ((Ot = Es(wt.substr(2), ct)),
												(wt = Je(pt)
													? pt
													: (M
															? it.utils.mapRange(
																	0,
																	M.duration(),
																	M.scrollTrigger.start,
																	M.scrollTrigger.end,
																	Z,
																)
															: Z) + Ot),
												(Ct = p))),
									wt = ul(wt, "end", T),
									ot =
										Math.max(
											Z,
											vl(
												wt || (Ct ? "100% 0" : _t),
												Ct,
												ct,
												L,
												U() + Ot,
												Et,
												Mt,
												T,
												rt,
												gt,
												X,
												_t,
												M,
												T._endClamp && "_endClamp",
											),
										) || -0.001,
									Ot = 0,
									me = Ut;
								me--;

							)
								(oe = yt[me]),
									(Di = oe.pin),
									Di &&
										oe.start - oe._pinPush <= Z &&
										!M &&
										oe.end > 0 &&
										((ye =
											oe.end -
											(T._startClamp ? Math.max(0, oe.start) : oe.start)),
										((Di === p && oe.start - oe._pinPush < Z) || Di === _e) &&
											isNaN(pt) &&
											(Ot += ye * (1 - oe.progress)),
										Di === l && (vt += ye));
							if (
								((Z += Ot),
								(ot += Ot),
								T._startClamp && (T._startClamp += Ot),
								T._endClamp &&
									!Ie &&
									((T._endClamp = ot || -0.001), (ot = Math.min(ot, Ai(D, L)))),
								(kt = ot - Z || ((Z -= 0.01) && 0.001)),
								Dt && (J = it.utils.clamp(0, 1, it.utils.normalize(Z, ot, qe))),
								(T._pinPush = vt),
								st &&
									Ot &&
									((ye = {}),
									(ye[L.a] = "+=" + Ot),
									_e && (ye[L.p] = "-=" + U()),
									it.set([st, Et], ye)),
								l && !(Jo && T.end >= Ai(D, L)))
							)
								(ye = fi(l)),
									(cs = L === ce),
									(fn = U()),
									(Gt = parseFloat(Pt(L.a)) + vt),
									!_t &&
										ot > 1 &&
										((Oi = (Y ? $t.scrollingElement || vi : D).style),
										(Oi = {
											style: Oi,
											value: Oi["overflow" + L.a.toUpperCase()],
										}),
										Y &&
											fi(zt)["overflow" + L.a.toUpperCase()] !== "scroll" &&
											(Oi.style["overflow" + L.a.toUpperCase()] = "scroll")),
									bo(l, Ht, ye),
									(Be = ws(l)),
									(be = qi(l, !0)),
									(oo = X && cn(D, cs ? Fe : ce)()),
									g
										? ((At = [g + L.os2, kt + vt + ae]),
											(At.t = Ht),
											(me = g === ie ? Us(l, L) + kt + vt : 0),
											me &&
												(At.push(L.d, me + ae),
												Ht.style.flexBasis !== "auto" &&
													(Ht.style.flexBasis = me + ae)),
											tr(At),
											_e &&
												yt.forEach(function (pr) {
													pr.pin === _e &&
														pr.vars.pinSpacing !== !1 &&
														(pr._subPinOffset = !0);
												}),
											X && U(qe))
										: ((me = Us(l, L)),
											me &&
												Ht.style.flexBasis !== "auto" &&
												(Ht.style.flexBasis = me + ae)),
									X &&
										((Te = {
											top: be.top + (cs ? fn - Z : oo) + ae,
											left: be.left + (cs ? oo : fn - Z) + ae,
											boxSizing: "border-box",
											position: "fixed",
										}),
										(Te[Dn] = Te["max" + cr] = Math.ceil(be.width) + ae),
										(Te[On] = Te["max" + ka] = Math.ceil(be.height) + ae),
										(Te[ui] =
											Te[ui + qr] =
											Te[ui + Br] =
											Te[ui + Yr] =
											Te[ui + zr] =
												"0"),
										(Te[ie] = ye[ie]),
										(Te[ie + qr] = ye[ie + qr]),
										(Te[ie + Br] = ye[ie + Br]),
										(Te[ie + Yr] = ye[ie + Yr]),
										(Te[ie + zr] = ye[ie + zr]),
										(Ge = od(Rt, Te, b)),
										Ie && U(0)),
									n
										? ((Ha = n._initted),
											mo(1),
											n.render(n.duration(), !0, !0),
											(ge = Pt(L.a) - Gt + kt + vt),
											(Ue = Math.abs(kt - ge) > 1),
											X && Ue && Ge.splice(Ge.length - 2, 2),
											n.render(0, !0, !0),
											Ha || n.invalidate(!0),
											n.parent || n.totalTime(n.totalTime()),
											mo(0))
										: (ge = kt),
									Oi &&
										(Oi.value
											? (Oi.style["overflow" + L.a.toUpperCase()] = Oi.value)
											: Oi.style.removeProperty("overflow-" + L.a));
							else if (p && U() && !M)
								for (be = p.parentNode; be && be !== zt; )
									be._pinOffset &&
										((Z -= be._pinOffset), (ot -= be._pinOffset)),
										(be = be.parentNode);
							dr &&
								dr.forEach(function (pr) {
									return pr.revert(!1, !0);
								}),
								(T.start = Z),
								(T.end = ot),
								(et = W = Ie ? qe : U()),
								!M && !Ie && (et < qe && U(qe), (T.scroll.rec = 0)),
								T.revert(!1, !0),
								(G = Me()),
								we && ((F = -1), we.restart(!0)),
								(Se = 0),
								n &&
									N &&
									(n._initted || Mi) &&
									n.progress() !== Mi &&
									n.progress(Mi || 0, !0).render(n.time(), !0, !0),
								(Dt || J !== T.progress || M || h) &&
									(n &&
										!N &&
										n.totalProgress(
											M && Z < -0.001 && !J ? it.utils.normalize(Z, ot, 0) : J,
											!0,
										),
									(T.progress = Dt || (et - Z) / kt === J ? 0 : J)),
								l && g && (Ht._pinOffset = Math.round(T.progress * ge)),
								dt && dt.invalidate(),
								isNaN(hr) ||
									((hr -= it.getProperty(P, L.p)),
									(us -= it.getProperty(Mt, L.p)),
									bs(P, L, hr),
									bs(st, L, hr - (Q || 0)),
									bs(Mt, L, us),
									bs(Et, L, us - (Q || 0))),
								Dt && !Ie && T.update(),
								f && !Ie && !ue && ((ue = !0), f(T), (ue = !1));
						}
					}),
					(T.getVelocity = function () {
						return ((U() - W) / (Me() - br)) * 1e3 || 0;
					}),
					(T.endAnimation = function () {
						mr(T.callbackAnimation),
							n &&
								(dt
									? dt.progress(1)
									: n.paused()
										? N || mr(n, T.direction < 0, 1)
										: mr(n, n.reversed()));
					}),
					(T.labelToScroll = function (A) {
						return (
							(n &&
								n.labels &&
								(Z || T.refresh() || Z) + (n.labels[A] / n.duration()) * kt) ||
							0
						);
					}),
					(T.getTrailing = function (A) {
						var j = yt.indexOf(T),
							B = T.direction > 0 ? yt.slice(0, j).reverse() : yt.slice(j + 1);
						return (
							Je(A)
								? B.filter(function (Q) {
										return Q.vars.preventOverlaps === A;
									})
								: B
						).filter(function (Q) {
							return T.direction > 0 ? Q.end <= Z : Q.start >= ot;
						});
					}),
					(T.update = function (A, j, B) {
						if (!(M && !B && !A)) {
							var Q = Ie === !0 ? qe : T.scroll(),
								ct = A ? 0 : (Q - Z) / kt,
								rt = ct < 0 ? 0 : ct > 1 ? 1 : ct || 0,
								_t = T.progress,
								Dt,
								Ot,
								vt,
								wt,
								Ct,
								pt,
								_e,
								Ut;
							if (
								(j &&
									((W = et),
									(et = M ? U() : Q),
									x && ((Ce = Qe), (Qe = n && !N ? n.totalProgress() : rt))),
								m &&
									l &&
									!Se &&
									!gs &&
									pi &&
									(!rt && Z < Q + ((Q - W) / (Me() - br)) * m
										? (rt = 1e-4)
										: rt === 1 &&
											ot > Q + ((Q - W) / (Me() - br)) * m &&
											(rt = 0.9999)),
								rt !== _t && T.enabled)
							) {
								if (
									((Dt = T.isActive = !!rt && rt < 1),
									(Ot = !!_t && _t < 1),
									(pt = Dt !== Ot),
									(Ct = pt || !!rt != !!_t),
									(T.direction = rt > _t ? 1 : -1),
									(T.progress = rt),
									Ct &&
										!Se &&
										((vt = rt && !_t ? 0 : rt === 1 ? 1 : _t === 1 ? 2 : 3),
										N &&
											((wt =
												(!pt && H[vt + 1] !== "none" && H[vt + 1]) || H[vt]),
											(Ut =
												n &&
												(wt === "complete" || wt === "reset" || wt in n)))),
									E &&
										(pt || Ut) &&
										(Ut || d || !n) &&
										(Ne(E)
											? E(T)
											: T.getTrailing(E).forEach(function (fn) {
													return fn.endAnimation();
												})),
									N ||
										(dt && !Se && !gs
											? (dt._dp._time - dt._start !== dt._time &&
													dt.render(dt._dp._time - dt._start),
												dt.resetTo
													? dt.resetTo("totalProgress", rt, n._tTime / n._tDur)
													: ((dt.vars.totalProgress = rt),
														dt.invalidate().restart()))
											: n && n.totalProgress(rt, !!(Se && (G || A)))),
									l)
								) {
									if ((A && g && (Ht.style[g + L.os2] = _i), !X))
										se(Sr(Gt + ge * rt));
									else if (Ct) {
										if (
											((_e = !A && rt > _t && ot + 1 > Q && Q + 1 >= Ai(D, L)),
											b)
										)
											if (!A && (Dt || _e)) {
												var me = qi(l, !0),
													ye = Q - Z;
												xl(
													l,
													zt,
													me.top + (L === ce ? ye : 0) + ae,
													me.left + (L === ce ? 0 : ye) + ae,
												);
											} else xl(l, Ht);
										tr(Dt || _e ? Ge : Be),
											(Ue && rt < 1 && Dt) ||
												se(Gt + (rt === 1 && !_e ? ge : 0));
									}
								}
								x && !K.tween && !Se && !gs && we.restart(!0),
									o &&
										(pt || (S && rt && (rt < 1 || !yo))) &&
										ts(o.targets).forEach(function (fn) {
											return fn.classList[Dt || S ? "add" : "remove"](
												o.className,
											);
										}),
									s && !N && !A && s(T),
									Ct && !Se
										? (N &&
												(Ut &&
													(wt === "complete"
														? n.pause().totalProgress(1)
														: wt === "reset"
															? n.restart(!0).pause()
															: wt === "restart"
																? n.restart(!0)
																: n[wt]()),
												s && s(T)),
											(pt || !yo) &&
												(u && pt && xo(T, u),
												V[vt] && xo(T, V[vt]),
												S && (rt === 1 ? T.kill(!1, 1) : (V[vt] = 0)),
												pt || ((vt = rt === 1 ? 1 : 3), V[vt] && xo(T, V[vt]))),
											O &&
												!Dt &&
												Math.abs(T.getVelocity()) > (Mr(O) ? O : 2500) &&
												(mr(T.callbackAnimation),
												dt
													? dt.progress(1)
													: mr(n, wt === "reverse" ? 1 : !rt, 1)))
										: N && s && !Se && s(T);
							}
							if (Ke) {
								var be = M ? (Q / M.duration()) * (M._caScrollDist || 0) : Q;
								Si(be + (P._isFlipped ? 1 : 0)), Ke(be);
							}
							at && at((-Q / M.duration()) * (M._caScrollDist || 0));
						}
					}),
					(T.enable = function (A, j) {
						T.enabled ||
							((T.enabled = !0),
							de(D, "resize", Dr),
							Y || de(D, "scroll", Yn),
							nt && de(a, "refreshInit", nt),
							A !== !1 && ((T.progress = J = 0), (et = W = F = U())),
							j !== !1 && T.refresh());
					}),
					(T.getTween = function (A) {
						return A && K ? K.tween : dt;
					}),
					(T.setPositions = function (A, j, B, Q) {
						if (M) {
							var ct = M.scrollTrigger,
								rt = M.duration(),
								_t = ct.end - ct.start;
							(A = ct.start + (_t * A) / rt), (j = ct.start + (_t * j) / rt);
						}
						T.refresh(
							!1,
							!1,
							{
								start: fl(A, B && !!T._startClamp),
								end: fl(j, B && !!T._endClamp),
							},
							Q,
						),
							T.update();
					}),
					(T.adjustPinSpacing = function (A) {
						if (At && A) {
							var j = At.indexOf(L.d) + 1;
							(At[j] = parseFloat(At[j]) + A + ae),
								(At[1] = parseFloat(At[1]) + A + ae),
								tr(At);
						}
					}),
					(T.disable = function (A, j) {
						if (
							T.enabled &&
							(A !== !1 && T.revert(!0, !0),
							(T.enabled = T.isActive = !1),
							j || (dt && dt.pause()),
							(qe = 0),
							lt && (lt.uncache = 1),
							nt && fe(a, "refreshInit", nt),
							we && (we.pause(), K.tween && K.tween.kill() && (K.tween = 0)),
							!Y)
						) {
							for (var B = yt.length; B--; )
								if (yt[B].scroller === D && yt[B] !== T) return;
							fe(D, "resize", Dr), Y || fe(D, "scroll", Yn);
						}
					}),
					(T.kill = function (A, j) {
						T.disable(A, j), dt && !j && dt.kill(), c && delete ta[c];
						var B = yt.indexOf(T);
						B >= 0 && yt.splice(B, 1),
							B === Le && As > 0 && Le--,
							(B = 0),
							yt.forEach(function (Q) {
								return Q.scroller === T.scroller && (B = 1);
							}),
							B || Ie || (T.scroll.rec = 0),
							n &&
								((n.scrollTrigger = null),
								A && n.revert({ kill: !1 }),
								j || n.kill()),
							st &&
								[st, Et, P, Mt].forEach(function (Q) {
									return Q.parentNode && Q.parentNode.removeChild(Q);
								}),
							Xr === T && (Xr = 0),
							l &&
								(lt && (lt.uncache = 1),
								(B = 0),
								yt.forEach(function (Q) {
									return Q.pin === l && B++;
								}),
								B || (lt.spacer = 0)),
							i.onKill && i.onKill(T);
					}),
					yt.push(T),
					T.enable(!1, !1),
					v && v(T),
					n && n.add && !kt)
				) {
					var z = T.update;
					(T.update = function () {
						(T.update = z), Z || ot || T.refresh();
					}),
						it.delayedCall(0.01, T.update),
						(kt = 0.01),
						(Z = ot = 0);
				} else T.refresh();
				l && nd();
			}),
			(a.register = function (i) {
				return (
					$n ||
						((it = i || iu()),
						eu() && window.document && a.enable(),
						($n = Tr)),
					$n
				);
			}),
			(a.defaults = function (i) {
				if (i) for (var n in i) vs[n] = i[n];
				return vs;
			}),
			(a.disable = function (i, n) {
				(Tr = 0),
					yt.forEach(function (s) {
						return s[n ? "kill" : "disable"](i);
					}),
					fe(bt, "wheel", Yn),
					fe($t, "scroll", Yn),
					clearInterval(ps),
					fe($t, "touchcancel", Ci),
					fe(zt, "touchstart", Ci),
					ms(fe, $t, "pointerdown,touchstart,mousedown", dl),
					ms(fe, $t, "pointerup,touchend,mouseup", hl),
					Ws.kill(),
					_s(fe);
				for (var r = 0; r < xt.length; r += 3)
					ys(fe, xt[r], xt[r + 1]), ys(fe, xt[r], xt[r + 2]);
			}),
			(a.enable = function () {
				if (
					((bt = window),
					($t = document),
					(vi = $t.documentElement),
					(zt = $t.body),
					it &&
						((ts = it.utils.toArray),
						(Nr = it.utils.clamp),
						(Zo = it.core.context || Ci),
						(mo = it.core.suppressOverwrites || Ci),
						(Oa = bt.history.scrollRestoration || "auto"),
						(ea = bt.pageYOffset),
						it.core.globals("ScrollTrigger", a),
						zt))
				) {
					(Tr = 1),
						(Jn = document.createElement("div")),
						(Jn.style.height = "100vh"),
						(Jn.style.position = "absolute"),
						fu(),
						Kf(),
						te.register(it),
						(a.isTouch = te.isTouch),
						(Ui =
							te.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						(Qo = te.isTouch === 1),
						de(bt, "wheel", Yn),
						(Kc = [bt, $t, vi, zt]),
						it.matchMedia
							? ((a.matchMedia = function (c) {
									var u = it.matchMedia(),
										f;
									for (f in c) u.add(f, c[f]);
									return u;
								}),
								it.addEventListener("matchMediaInit", function () {
									return La();
								}),
								it.addEventListener("matchMediaRevert", function () {
									return cu();
								}),
								it.addEventListener("matchMedia", function () {
									wn(0, 1), Rn("matchMedia");
								}),
								it.matchMedia("(orientation: portrait)", function () {
									return wo(), wo;
								}))
							: console.warn("Requires GSAP 3.11.0 or later"),
						wo(),
						de($t, "scroll", Yn);
					var i = zt.style,
						n = i.borderTopStyle,
						r = it.core.Animation.prototype,
						s,
						o;
					for (
						r.revert ||
							Object.defineProperty(r, "revert", {
								value: function () {
									return this.time(-0.01, !0);
								},
							}),
							i.borderTopStyle = "solid",
							s = qi(zt),
							ce.m = Math.round(s.top + ce.sc()) || 0,
							Fe.m = Math.round(s.left + Fe.sc()) || 0,
							n ? (i.borderTopStyle = n) : i.removeProperty("border-top-style"),
							ps = setInterval(_l, 250),
							it.delayedCall(0.5, function () {
								return (gs = 0);
							}),
							de($t, "touchcancel", Ci),
							de(zt, "touchstart", Ci),
							ms(de, $t, "pointerdown,touchstart,mousedown", dl),
							ms(de, $t, "pointerup,touchend,mouseup", hl),
							Ko = it.utils.checkPrefix("transform"),
							Ls.push(Ko),
							$n = Me(),
							Ws = it.delayedCall(0.2, wn).pause(),
							jn = [
								$t,
								"visibilitychange",
								function () {
									var c = bt.innerWidth,
										u = bt.innerHeight;
									$t.hidden
										? ((ll = c), (cl = u))
										: (ll !== c || cl !== u) && Dr();
								},
								$t,
								"DOMContentLoaded",
								wn,
								bt,
								"load",
								wn,
								bt,
								"resize",
								Dr,
							],
							_s(de),
							yt.forEach(function (c) {
								return c.enable(0, 1);
							}),
							o = 0;
						o < xt.length;
						o += 3
					)
						ys(fe, xt[o], xt[o + 1]), ys(fe, xt[o], xt[o + 2]);
				}
			}),
			(a.config = function (i) {
				"limitCallbacks" in i && (yo = !!i.limitCallbacks);
				var n = i.syncInterval;
				(n && clearInterval(ps)) || ((ps = n) && setInterval(_l, n)),
					"ignoreMobileResize" in i &&
						(Qo = a.isTouch === 1 && i.ignoreMobileResize),
					"autoRefreshEvents" in i &&
						(_s(fe) || _s(de, i.autoRefreshEvents || "none"),
						(Zc = (i.autoRefreshEvents + "").indexOf("resize") === -1));
			}),
			(a.scrollerProxy = function (i, n) {
				var r = Ye(i),
					s = xt.indexOf(r),
					o = Ln(r);
				~s && xt.splice(s, o ? 6 : 2),
					n && (o ? Ii.unshift(bt, n, zt, n, vi, n) : Ii.unshift(r, n));
			}),
			(a.clearMatchMedia = function (i) {
				yt.forEach(function (n) {
					return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0);
				});
			}),
			(a.isInViewport = function (i, n, r) {
				var s = (Je(i) ? Ye(i) : i).getBoundingClientRect(),
					o = s[r ? Dn : On] * n || 0;
				return r
					? s.right - o > 0 && s.left + o < bt.innerWidth
					: s.bottom - o > 0 && s.top + o < bt.innerHeight;
			}),
			(a.positionInViewport = function (i, n, r) {
				Je(i) && (i = Ye(i));
				var s = i.getBoundingClientRect(),
					o = s[r ? Dn : On],
					c =
						n == null
							? o / 2
							: n in Ks
								? Ks[n] * o
								: ~n.indexOf("%")
									? (parseFloat(n) * o) / 100
									: parseFloat(n) || 0;
				return r ? (s.left + c) / bt.innerWidth : (s.top + c) / bt.innerHeight;
			}),
			(a.killAll = function (i) {
				if (
					(yt.slice(0).forEach(function (r) {
						return r.vars.id !== "ScrollSmoother" && r.kill();
					}),
					i !== !0)
				) {
					var n = In.killAll || [];
					(In = {}),
						n.forEach(function (r) {
							return r();
						});
				}
			}),
			a
		);
	})();
mt.version = "3.12.5";
mt.saveStyles = function (a) {
	return a
		? ts(a).forEach(function (t) {
				if (t && t.style) {
					var e = Ze.indexOf(t);
					e >= 0 && Ze.splice(e, 5),
						Ze.push(
							t,
							t.style.cssText,
							t.getBBox && t.getAttribute("transform"),
							it.core.getCache(t),
							Zo(),
						);
				}
			})
		: Ze;
};
mt.revert = function (a, t) {
	return La(!a, t);
};
mt.create = function (a, t) {
	return new mt(a, t);
};
mt.refresh = function (a) {
	return a ? Dr() : ($n || mt.register()) && wn(!0);
};
mt.update = function (a) {
	return ++xt.cache && $i(a === !0 ? 2 : 0);
};
mt.clearScrollMemory = uu;
mt.maxScroll = function (a, t) {
	return Ai(a, t ? Fe : ce);
};
mt.getScrollFunc = function (a, t) {
	return cn(Ye(a), t ? Fe : ce);
};
mt.getById = function (a) {
	return ta[a];
};
mt.getAll = function () {
	return yt.filter(function (a) {
		return a.vars.id !== "ScrollSmoother";
	});
};
mt.isScrolling = function () {
	return !!pi;
};
mt.snapDirectional = Aa;
mt.addEventListener = function (a, t) {
	var e = In[a] || (In[a] = []);
	~e.indexOf(t) || e.push(t);
};
mt.removeEventListener = function (a, t) {
	var e = In[a],
		i = e && e.indexOf(t);
	i >= 0 && e.splice(i, 1);
};
mt.batch = function (a, t) {
	var e = [],
		i = {},
		n = t.interval || 0.016,
		r = t.batchMax || 1e9,
		s = function (u, f) {
			var d = [],
				p = [],
				l = it
					.delayedCall(n, function () {
						f(d, p), (d = []), (p = []);
					})
					.pause();
			return function (g) {
				d.length || l.restart(!0),
					d.push(g.trigger),
					p.push(g),
					r <= d.length && l.progress(1);
			};
		},
		o;
	for (o in t)
		i[o] =
			o.substr(0, 2) === "on" && Ne(t[o]) && o !== "onRefreshInit"
				? s(o, t[o])
				: t[o];
	return (
		Ne(r) &&
			((r = r()),
			de(mt, "refresh", function () {
				return (r = t.batchMax());
			})),
		ts(a).forEach(function (c) {
			var u = {};
			for (o in i) u[o] = i[o];
			(u.trigger = c), e.push(mt.create(u));
		}),
		e
	);
};
var bl = function (t, e, i, n) {
		return (
			e > n ? t(n) : e < 0 && t(0),
			i > n ? (n - e) / (i - e) : i < 0 ? e / (e - i) : 1
		);
	},
	To = function a(t, e) {
		e === !0
			? t.style.removeProperty("touch-action")
			: (t.style.touchAction =
					e === !0
						? "auto"
						: e
							? "pan-" + e + (te.isTouch ? " pinch-zoom" : "")
							: "none"),
			t === vi && a(zt, e);
	},
	Ts = { auto: 1, scroll: 1 },
	ld = function (t) {
		var e = t.event,
			i = t.target,
			n = t.axis,
			r = (e.changedTouches ? e.changedTouches[0] : e).target,
			s = r._gsap || it.core.getCache(r),
			o = Me(),
			c;
		if (!s._isScrollT || o - s._isScrollT > 2e3) {
			for (
				;
				r &&
				r !== zt &&
				((r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth) ||
					!(Ts[(c = fi(r)).overflowY] || Ts[c.overflowX]));

			)
				r = r.parentNode;
			(s._isScroll =
				r &&
				r !== i &&
				!Ln(r) &&
				(Ts[(c = fi(r)).overflowY] || Ts[c.overflowX])),
				(s._isScrollT = o);
		}
		(s._isScroll || n === "x") && (e.stopPropagation(), (e._gsapAllow = !0));
	},
	hu = function (t, e, i, n) {
		return te.create({
			target: t,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: e,
			onWheel: (n = n && ld),
			onPress: n,
			onDrag: n,
			onScroll: n,
			onEnable: function () {
				return i && de($t, te.eventTypes[0], Sl, !1, !0);
			},
			onDisable: function () {
				return fe($t, te.eventTypes[0], Sl, !0);
			},
		});
	},
	cd = /(input|label|select|textarea)/i,
	Tl,
	Sl = function (t) {
		var e = cd.test(t.target.tagName);
		(e || Tl) && ((t._gsapAllow = !0), (Tl = e));
	},
	ud = function (t) {
		yn(t) || (t = {}),
			(t.preventDefault = t.isNormalizer = t.allowClicks = !0),
			t.type || (t.type = "wheel,touch"),
			(t.debounce = !!t.debounce),
			(t.id = t.id || "normalizer");
		var e = t,
			i = e.normalizeScrollX,
			n = e.momentum,
			r = e.allowNestedScroll,
			s = e.onRelease,
			o,
			c,
			u = Ye(t.target) || vi,
			f = it.core.globals().ScrollSmoother,
			d = f && f.get(),
			p =
				Ui &&
				((t.content && Ye(t.content)) ||
					(d && t.content !== !1 && !d.smooth() && d.content())),
			l = cn(u, ce),
			g = cn(u, Fe),
			h = 1,
			m =
				(te.isTouch && bt.visualViewport
					? bt.visualViewport.scale * bt.visualViewport.width
					: bt.outerWidth) / bt.innerWidth,
			_ = 0,
			y = Ne(n)
				? function () {
						return n(o);
					}
				: function () {
						return n || 2.8;
					},
			S,
			x,
			b = hu(u, t.type, !0, r),
			C = function () {
				return (x = !1);
			},
			M = Ci,
			O = Ci,
			E = function () {
				(c = Ai(u, ce)),
					(O = Nr(Ui ? 1 : 0, c)),
					i && (M = Nr(0, Ai(u, Fe))),
					(S = Pn);
			},
			L = function () {
				(p._gsap.y = Sr(parseFloat(p._gsap.y) + l.offset) + "px"),
					(p.style.transform =
						"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
						parseFloat(p._gsap.y) +
						", 0, 1)"),
					(l.offset = l.cacheID = 0);
			},
			N = function () {
				if (x) {
					requestAnimationFrame(C);
					var tt = Sr(o.deltaY / 2),
						gt = O(l.v - tt);
					if (p && gt !== l.v + l.offset) {
						l.offset = gt - l.v;
						var T = Sr((parseFloat(p && p._gsap.y) || 0) - l.offset);
						(p.style.transform =
							"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
							T +
							", 0, 1)"),
							(p._gsap.y = T + "px"),
							(l.cacheID = xt.cache),
							$i();
					}
					return !0;
				}
				l.offset && L(), (x = !0);
			},
			D,
			R,
			Y,
			X,
			V = function () {
				E(),
					D.isActive() &&
						D.vars.scrollY > c &&
						(l() > c ? D.progress(1) && l(c) : D.resetTo("scrollY", c));
			};
		return (
			p && it.set(p, { y: "+=0" }),
			(t.ignoreCheck = function (H) {
				return (
					(Ui && H.type === "touchmove" && N()) ||
					(h > 1.05 && H.type !== "touchstart") ||
					o.isGesturing ||
					(H.touches && H.touches.length > 1)
				);
			}),
			(t.onPress = function () {
				x = !1;
				var H = h;
				(h = Sr(((bt.visualViewport && bt.visualViewport.scale) || 1) / m)),
					D.pause(),
					H !== h && To(u, h > 1.01 ? !0 : i ? !1 : "x"),
					(R = g()),
					(Y = l()),
					E(),
					(S = Pn);
			}),
			(t.onRelease = t.onGestureStart =
				function (H, tt) {
					if ((l.offset && L(), !tt)) X.restart(!0);
					else {
						xt.cache++;
						var gt = y(),
							T,
							nt;
						i &&
							((T = g()),
							(nt = T + (gt * 0.05 * -H.velocityX) / 0.227),
							(gt *= bl(g, T, nt, Ai(u, Fe))),
							(D.vars.scrollX = M(nt))),
							(T = l()),
							(nt = T + (gt * 0.05 * -H.velocityY) / 0.227),
							(gt *= bl(l, T, nt, Ai(u, ce))),
							(D.vars.scrollY = O(nt)),
							D.invalidate().duration(gt).play(0.01),
							((Ui && D.vars.scrollY >= c) || T >= c - 1) &&
								it.to({}, { onUpdate: V, duration: gt });
					}
					s && s(H);
				}),
			(t.onWheel = function () {
				D._ts && D.pause(), Me() - _ > 1e3 && ((S = 0), (_ = Me()));
			}),
			(t.onChange = function (H, tt, gt, T, nt) {
				if (
					(Pn !== S && E(),
					tt && i && g(M(T[2] === tt ? R + (H.startX - H.x) : g() + tt - T[1])),
					gt)
				) {
					l.offset && L();
					var ut = nt[2] === gt,
						I = ut ? Y + H.startY - H.y : l() + gt - nt[1],
						F = O(I);
					ut && I !== F && (Y += F - I), l(F);
				}
				(gt || tt) && $i();
			}),
			(t.onEnable = function () {
				To(u, i ? !1 : "x"),
					mt.addEventListener("refresh", V),
					de(bt, "resize", V),
					l.smooth &&
						((l.target.style.scrollBehavior = "auto"),
						(l.smooth = g.smooth = !1)),
					b.enable();
			}),
			(t.onDisable = function () {
				To(u, !0),
					fe(bt, "resize", V),
					mt.removeEventListener("refresh", V),
					b.kill();
			}),
			(t.lockAxis = t.lockAxis !== !1),
			(o = new te(t)),
			(o.iOS = Ui),
			Ui && !l() && l(1),
			Ui && it.ticker.add(Ci),
			(X = o._dc),
			(D = it.to(o, {
				ease: "power4",
				paused: !0,
				inherit: !1,
				scrollX: i ? "+=0.1" : "+=0",
				scrollY: "+=0.1",
				modifiers: {
					scrollY: du(l, l(), function () {
						return D.pause();
					}),
				},
				onUpdate: $i,
				onComplete: X.vars.onComplete,
			})),
			o
		);
	};
mt.sort = function (a) {
	return yt.sort(
		a ||
			function (t, e) {
				return (
					(t.vars.refreshPriority || 0) * -1e6 +
					t.start -
					(e.start + (e.vars.refreshPriority || 0) * -1e6)
				);
			},
	);
};
mt.observe = function (a) {
	return new te(a);
};
mt.normalizeScroll = function (a) {
	if (typeof a > "u") return Ae;
	if (a === !0 && Ae) return Ae.enable();
	if (a === !1) {
		Ae && Ae.kill(), (Ae = a);
		return;
	}
	var t = a instanceof te ? a : ud(a);
	return Ae && Ae.target === t.target && Ae.kill(), Ln(t.target) && (Ae = t), t;
};
mt.core = {
	_getVelocityProp: Uo,
	_inputObserver: hu,
	_scrollers: xt,
	_proxies: Ii,
	bridge: {
		ss: function () {
			pi || Rn("scrollStart"), (pi = Me());
		},
		ref: function () {
			return Se;
		},
	},
};
iu() && it.registerPlugin(mt);
$.registerPlugin(mt);
class fd {
	constructor() {
		this.init();
	}
	setup() {
		this.visibilityTl = $.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top bottom",
				end: "bottom top",
				onEnter: () => {
					this.DOM.section.classList.add("is-active");
				},
				onLeave: () => {
					this.DOM.section.classList.remove("is-active");
				},
				onEnterBack: () => {
					this.DOM.section.classList.add("is-active");
				},
				onLeaveBack: () => {
					this.DOM.section.classList.remove("is-active");
				},
			},
		});
	}
	destroy() {
		var t;
		this.DOM &&
			((t = this.visibilityTl) == null || t.kill(),
			(this.visibilityTl = void 0),
			(this.DOM = void 0));
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelector(".js-compute-section");
		e && ((this.DOM = {}), (this.DOM.section = e), this.setup());
	}
}
function Ia(a) {
	return typeof a == "number";
}
function na(a) {
	return typeof a == "string";
}
function Ra(a) {
	return typeof a == "boolean";
}
function Ml(a) {
	return Object.prototype.toString.call(a) === "[object Object]";
}
function Yt(a) {
	return Math.abs(a);
}
function Fa(a) {
	return Math.sign(a);
}
function Hr(a, t) {
	return Yt(a - t);
}
function dd(a, t) {
	if (a === 0 || t === 0 || Yt(a) <= Yt(t)) return 0;
	const e = Hr(Yt(a), Yt(t));
	return Yt(e / a);
}
function is(a) {
	return ns(a).map(Number);
}
function bi(a) {
	return a[ls(a)];
}
function ls(a) {
	return Math.max(0, a.length - 1);
}
function Na(a, t) {
	return t === ls(a);
}
function Dl(a, t = 0) {
	return Array.from(Array(a), (e, i) => t + i);
}
function ns(a) {
	return Object.keys(a);
}
function pu(a, t) {
	return [a, t].reduce(
		(e, i) => (
			ns(i).forEach((n) => {
				const r = e[n],
					s = i[n],
					o = Ml(r) && Ml(s);
				e[n] = o ? pu(r, s) : s;
			}),
			e
		),
		{},
	);
}
function gu(a, t) {
	return typeof t.MouseEvent < "u" && a instanceof t.MouseEvent;
}
function hd(a, t) {
	const e = { start: i, center: n, end: r };
	function i() {
		return 0;
	}
	function n(c) {
		return r(c) / 2;
	}
	function r(c) {
		return t - c;
	}
	function s(c, u) {
		return na(a) ? e[a](c) : a(t, c, u);
	}
	return { measure: s };
}
function rs() {
	let a = [];
	function t(n, r, s, o = { passive: !0 }) {
		let c;
		if ("addEventListener" in n)
			n.addEventListener(r, s, o), (c = () => n.removeEventListener(r, s, o));
		else {
			const u = n;
			u.addListener(s), (c = () => u.removeListener(s));
		}
		return a.push(c), i;
	}
	function e() {
		a = a.filter((n) => n());
	}
	const i = { add: t, clear: e };
	return i;
}
function pd(a, t, e, i) {
	const n = rs(),
		r = 1e3 / 60;
	let s = null,
		o = 0,
		c = 0;
	function u() {
		n.add(a, "visibilitychange", () => {
			a.hidden && g();
		});
	}
	function f() {
		l(), n.clear();
	}
	function d(m) {
		if (!c) return;
		s || (s = m);
		const _ = m - s;
		for (s = m, o += _; o >= r; ) e(), (o -= r);
		const y = Yt(o / r);
		i(y), c && t.requestAnimationFrame(d);
	}
	function p() {
		c || (c = t.requestAnimationFrame(d));
	}
	function l() {
		t.cancelAnimationFrame(c), (s = null), (o = 0), (c = 0);
	}
	function g() {
		(s = null), (o = 0);
	}
	return { init: u, destroy: f, start: p, stop: l, update: e, render: i };
}
function gd(a, t) {
	const e = a === "y" ? "y" : "x",
		i = a === "y" ? "x" : "y",
		n = o(),
		r = c();
	function s(f) {
		const { width: d, height: p } = f;
		return e === "x" ? d : p;
	}
	function o() {
		return e === "y" ? "top" : t === "rtl" ? "right" : "left";
	}
	function c() {
		return e === "y" ? "bottom" : t === "rtl" ? "left" : "right";
	}
	return { scroll: e, cross: i, startEdge: n, endEdge: r, measureSize: s };
}
function Fn(a = 0, t = 0) {
	const e = Yt(a - t);
	function i(u) {
		return u < a;
	}
	function n(u) {
		return u > t;
	}
	function r(u) {
		return i(u) || n(u);
	}
	function s(u) {
		return r(u) ? (i(u) ? a : t) : u;
	}
	function o(u) {
		return e ? u - e * Math.ceil((u - t) / e) : u;
	}
	return {
		length: e,
		max: t,
		min: a,
		constrain: s,
		reachedAny: r,
		reachedMax: n,
		reachedMin: i,
		removeOffset: o,
	};
}
function _u(a, t, e) {
	const { constrain: i } = Fn(0, a),
		n = a + 1;
	let r = s(t);
	function s(p) {
		return e ? Yt((n + p) % n) : i(p);
	}
	function o() {
		return r;
	}
	function c(p) {
		return (r = s(p)), d;
	}
	function u(p) {
		return f().set(o() + p);
	}
	function f() {
		return _u(a, o(), e);
	}
	const d = { get: o, set: c, add: u, clone: f };
	return d;
}
function _d(a) {
	const t = a === "rtl" ? -1 : 1;
	function e(n) {
		return n * t;
	}
	return { apply: e };
}
function md(a, t, e, i, n, r, s, o, c, u, f, d, p, l, g, h, m, _, y, S) {
	const { cross: x } = a,
		b = ["INPUT", "SELECT", "TEXTAREA"],
		C = { passive: !1 },
		M = rs(),
		O = rs(),
		E = Fn(50, 225).constrain(g.measure(20)),
		L = { mouse: 300, touch: 400 },
		N = { mouse: 500, touch: 600 },
		D = h ? 43 : 25;
	let R = !1,
		Y = 0,
		X = 0,
		V = !1,
		H = !1,
		tt = !1,
		gt = !1;
	function T(W) {
		if (!S) return;
		function Z(st) {
			(Ra(S) || S(W, st)) && J(st);
		}
		const ot = e;
		M.add(ot, "dragstart", (st) => st.preventDefault(), C)
			.add(ot, "touchmove", () => {}, C)
			.add(ot, "touchend", () => {})
			.add(ot, "touchstart", Z)
			.add(ot, "mousedown", Z)
			.add(ot, "touchcancel", K)
			.add(ot, "contextmenu", K)
			.add(ot, "click", lt, !0);
	}
	function nt() {
		M.clear(), O.clear();
	}
	function ut() {
		const W = gt ? i : e;
		O.add(W, "touchmove", U, C)
			.add(W, "touchend", K)
			.add(W, "mousemove", U, C)
			.add(W, "mouseup", K);
	}
	function I(W) {
		const Z = W.nodeName || "";
		return b.includes(Z);
	}
	function F() {
		return (h ? N : L)[gt ? "mouse" : "touch"];
	}
	function G(W, Z) {
		const ot = p.add(Fa(W) * -1),
			st = d.byDistance(W, !h).distance;
		return h || Yt(W) < E
			? st
			: _ && Z
				? st * 0.5
				: d.byIndex(ot.get(), 0).distance;
	}
	function J(W) {
		const Z = gu(W, n);
		(gt = Z),
			!(Z && W.button !== 0) &&
				(I(W.target) ||
					((tt = h && Z && !W.buttons && R),
					(R = Hr(r.get(), o.get()) >= 2),
					(V = !0),
					s.pointerDown(W),
					f.useFriction(0).useDuration(0),
					r.set(o),
					ut(),
					(Y = s.readPoint(W)),
					(X = s.readPoint(W, x)),
					l.emit("pointerDown")));
	}
	function U(W) {
		const Z = s.readPoint(W),
			ot = s.readPoint(W, x),
			st = Hr(Z, Y),
			Et = Hr(ot, X);
		if (!H && !gt && (!W.cancelable || ((H = st > Et), !H))) return K(W);
		const P = s.pointerMove(W);
		st > m && (tt = !0),
			f.useFriction(0.3).useDuration(1),
			c.start(),
			r.add(t.apply(P)),
			W.preventDefault();
	}
	function K(W) {
		const ot = d.byDistance(0, !1).index !== p.get(),
			st = s.pointerUp(W) * F(),
			Et = G(t.apply(st), ot),
			P = dd(st, Et),
			Mt = D - 10 * P,
			Xt = y + P / 50;
		(H = !1),
			(V = !1),
			O.clear(),
			f.useDuration(Mt).useFriction(Xt),
			u.distance(Et, !h),
			(gt = !1),
			l.emit("pointerUp");
	}
	function lt(W) {
		tt && (W.stopPropagation(), W.preventDefault());
	}
	function ft() {
		return V;
	}
	return { init: T, pointerDown: ft, destroy: nt };
}
function yd(a, t) {
	let i, n;
	function r(d) {
		return d.timeStamp;
	}
	function s(d, p) {
		const g = `client${(p || a.scroll) === "x" ? "X" : "Y"}`;
		return (gu(d, t) ? d : d.touches[0])[g];
	}
	function o(d) {
		return (i = d), (n = d), s(d);
	}
	function c(d) {
		const p = s(d) - s(n),
			l = r(d) - r(i) > 170;
		return (n = d), l && (i = d), p;
	}
	function u(d) {
		if (!i || !n) return 0;
		const p = s(n) - s(i),
			l = r(d) - r(i),
			g = r(d) - r(n) > 170,
			h = p / l;
		return l && !g && Yt(h) > 0.1 ? h : 0;
	}
	return { pointerDown: o, pointerMove: c, pointerUp: u, readPoint: s };
}
function vd() {
	function a(e) {
		const { offsetTop: i, offsetLeft: n, offsetWidth: r, offsetHeight: s } = e;
		return {
			top: i,
			right: n + r,
			bottom: i + s,
			left: n,
			width: r,
			height: s,
		};
	}
	return { measure: a };
}
function xd(a) {
	function t(i) {
		return a * (i / 100);
	}
	return { measure: t };
}
function wd(a, t, e, i, n, r, s) {
	let o,
		c,
		u = [],
		f = !1;
	function d(h) {
		return n.measureSize(s.measure(h));
	}
	function p(h) {
		if (!r) return;
		(c = d(a)), (u = i.map(d));
		function m(y) {
			for (const S of y) {
				const x = S.target === a,
					b = i.indexOf(S.target),
					C = x ? c : u[b],
					M = d(x ? a : i[b]);
				if (Yt(M - C) >= 0.5) {
					e.requestAnimationFrame(() => {
						h.reInit(), t.emit("resize");
					});
					break;
				}
			}
		}
		(o = new ResizeObserver((y) => {
			f || ((Ra(r) || r(h, y)) && m(y));
		})),
			[a].concat(i).forEach((y) => o.observe(y));
	}
	function l() {
		o && o.disconnect(), (f = !0);
	}
	return { init: p, destroy: l };
}
function bd(a, t, e, i, n) {
	let r = 0,
		s = 0,
		o = i,
		c = n,
		u = a.get(),
		f = 0;
	function d() {
		const b = e.get() - a.get(),
			C = !o;
		let M = 0;
		return (
			C
				? ((r = 0), a.set(e), (M = b))
				: ((r += b / o), (r *= c), (u += r), a.add(r), (M = u - f)),
			(s = Fa(M)),
			(f = u),
			x
		);
	}
	function p() {
		const b = e.get() - t.get();
		return Yt(b) < 0.001;
	}
	function l() {
		return o;
	}
	function g() {
		return s;
	}
	function h() {
		return r;
	}
	function m() {
		return y(i);
	}
	function _() {
		return S(n);
	}
	function y(b) {
		return (o = b), x;
	}
	function S(b) {
		return (c = b), x;
	}
	const x = {
		direction: g,
		duration: l,
		velocity: h,
		seek: d,
		settled: p,
		useBaseFriction: _,
		useBaseDuration: m,
		useFriction: S,
		useDuration: y,
	};
	return x;
}
function Td(a, t, e, i, n) {
	const r = n.measure(10),
		s = n.measure(50),
		o = Fn(0.1, 0.99);
	let c = !1;
	function u() {
		return !(c || !a.reachedAny(e.get()) || !a.reachedAny(t.get()));
	}
	function f(l) {
		if (!u()) return;
		const g = a.reachedMin(t.get()) ? "min" : "max",
			h = Yt(a[g] - t.get()),
			m = e.get() - t.get(),
			_ = o.constrain(h / s);
		e.subtract(m * _),
			!l &&
				Yt(m) < r &&
				(e.set(a.constrain(e.get())), i.useDuration(25).useBaseFriction());
	}
	function d(l) {
		c = !l;
	}
	return { constrain: f, toggleActive: d };
}
function Sd(a, t, e, i, n) {
	const r = Fn(-t + a, 0),
		s = d(),
		o = f(),
		c = p();
	function u(g, h) {
		return Hr(g, h) < 1;
	}
	function f() {
		const g = s[0],
			h = bi(s),
			m = s.lastIndexOf(g),
			_ = s.indexOf(h) + 1;
		return Fn(m, _);
	}
	function d() {
		return e
			.map((g, h) => {
				const { min: m, max: _ } = r,
					y = r.constrain(g),
					S = !h,
					x = Na(e, h);
				return S ? _ : x || u(m, y) ? m : u(_, y) ? _ : y;
			})
			.map((g) => parseFloat(g.toFixed(3)));
	}
	function p() {
		if (t <= a + n) return [r.max];
		if (i === "keepSnaps") return s;
		const { min: g, max: h } = o;
		return s.slice(g, h);
	}
	return { snapsContained: c, scrollContainLimit: o };
}
function Md(a, t, e) {
	const i = t[0],
		n = e ? i - a : bi(t);
	return { limit: Fn(n, i) };
}
function Dd(a, t, e, i) {
	const r = t.min + 0.1,
		s = t.max + 0.1,
		{ reachedMin: o, reachedMax: c } = Fn(r, s);
	function u(p) {
		return p === 1 ? c(e.get()) : p === -1 ? o(e.get()) : !1;
	}
	function f(p) {
		if (!u(p)) return;
		const l = a * (p * -1);
		i.forEach((g) => g.add(l));
	}
	return { loop: f };
}
function Od(a) {
	const { max: t, length: e } = a;
	function i(r) {
		const s = r - t;
		return e ? s / -e : 0;
	}
	return { get: i };
}
function Pd(a, t, e, i, n) {
	const { startEdge: r, endEdge: s } = a,
		{ groupSlides: o } = n,
		c = d().map(t.measure),
		u = p(),
		f = l();
	function d() {
		return o(i)
			.map((h) => bi(h)[s] - h[0][r])
			.map(Yt);
	}
	function p() {
		return i.map((h) => e[r] - h[r]).map((h) => -Yt(h));
	}
	function l() {
		return o(u)
			.map((h) => h[0])
			.map((h, m) => h + c[m]);
	}
	return { snaps: u, snapsAligned: f };
}
function Cd(a, t, e, i, n, r) {
	const { groupSlides: s } = n,
		{ min: o, max: c } = i,
		u = f();
	function f() {
		const p = s(r),
			l = !a || t === "keepSnaps";
		return e.length === 1
			? [r]
			: l
				? p
				: p.slice(o, c).map((g, h, m) => {
						const _ = !h,
							y = Na(m, h);
						if (_) {
							const S = bi(m[0]) + 1;
							return Dl(S);
						}
						if (y) {
							const S = ls(r) - bi(m)[0] + 1;
							return Dl(S, bi(m)[0]);
						}
						return g;
					});
	}
	return { slideRegistry: u };
}
function Ed(a, t, e, i, n) {
	const { reachedAny: r, removeOffset: s, constrain: o } = i;
	function c(g) {
		return g.concat().sort((h, m) => Yt(h) - Yt(m))[0];
	}
	function u(g) {
		const h = a ? s(g) : o(g),
			m = t
				.map((y) => y - h)
				.map((y) => f(y, 0))
				.map((y, S) => ({ diff: y, index: S }))
				.sort((y, S) => Yt(y.diff) - Yt(S.diff)),
			{ index: _ } = m[0];
		return { index: _, distance: h };
	}
	function f(g, h) {
		const m = [g, g + e, g - e];
		if (!a) return m[0];
		if (!h) return c(m);
		const _ = m.filter((y) => Fa(y) === h);
		return _.length ? c(_) : bi(m) - e;
	}
	function d(g, h) {
		const m = t[g] - n.get(),
			_ = f(m, h);
		return { index: g, distance: _ };
	}
	function p(g, h) {
		const m = n.get() + g,
			{ index: _, distance: y } = u(m),
			S = !a && r(m);
		if (!h || S) return { index: _, distance: g };
		const x = t[_] - y,
			b = g + f(x, 0);
		return { index: _, distance: b };
	}
	return { byDistance: p, byIndex: d, shortcut: f };
}
function kd(a, t, e, i, n, r, s) {
	function o(d) {
		const p = d.distance,
			l = d.index !== t.get();
		r.add(p),
			p && (i.duration() ? a.start() : (a.update(), a.render(1), a.update())),
			l && (e.set(t.get()), t.set(d.index), s.emit("select"));
	}
	function c(d, p) {
		const l = n.byDistance(d, p);
		o(l);
	}
	function u(d, p) {
		const l = t.clone().set(d),
			g = n.byIndex(l.get(), p);
		o(g);
	}
	return { distance: c, index: u };
}
function Ad(a, t, e, i, n, r) {
	let s = 0;
	function o() {
		r.add(document, "keydown", c, !1), t.forEach(u);
	}
	function c(d) {
		d.code === "Tab" && (s = new Date().getTime());
	}
	function u(d) {
		const p = () => {
			if (new Date().getTime() - s > 10) return;
			a.scrollLeft = 0;
			const h = t.indexOf(d),
				m = e.findIndex((_) => _.includes(h));
			Ia(m) && (n.useDuration(0), i.index(m, 0));
		};
		r.add(d, "focus", p, { passive: !0, capture: !0 });
	}
	return { init: o };
}
function Rs(a) {
	let t = a;
	function e() {
		return t;
	}
	function i(c) {
		t = s(c);
	}
	function n(c) {
		t += s(c);
	}
	function r(c) {
		t -= s(c);
	}
	function s(c) {
		return Ia(c) ? c : c.get();
	}
	return { get: e, set: i, add: n, subtract: r };
}
function mu(a, t, e) {
	const i = a.scroll === "x" ? s : o,
		n = e.style;
	let r = !1;
	function s(p) {
		return `translate3d(${p}px,0px,0px)`;
	}
	function o(p) {
		return `translate3d(0px,${p}px,0px)`;
	}
	function c(p) {
		r || (n.transform = i(t.apply(p)));
	}
	function u(p) {
		r = !p;
	}
	function f() {
		r ||
			((n.transform = ""),
			e.getAttribute("style") || e.removeAttribute("style"));
	}
	return { clear: f, to: c, toggleActive: u };
}
function Ld(a, t, e, i, n, r, s, o, c, u) {
	const d = is(r),
		p = is(r).reverse(),
		l = y().concat(S());
	function g(O, E) {
		return O.reduce((L, N) => L - r[N], E);
	}
	function h(O, E) {
		return O.reduce((L, N) => (g(L, E) > 0 ? L.concat([N]) : L), []);
	}
	function m(O) {
		return s.map((E, L) => ({
			start: E - n[L] + 0.5 + O,
			end: E + e - 0.5 + O,
		}));
	}
	function _(O, E, L) {
		const N = m(E);
		return O.map((D) => {
			const R = L ? 0 : -i,
				Y = L ? i : 0,
				X = L ? "end" : "start",
				V = N[D][X];
			return {
				index: D,
				loopPoint: V,
				slideLocation: Rs(-1),
				translate: mu(a, t, u[D]),
				target: () => (c.get() > V ? R : Y),
			};
		});
	}
	function y() {
		const O = o[0],
			E = h(p, O);
		return _(E, i, !1);
	}
	function S() {
		const O = e - o[0] - 1,
			E = h(d, O);
		return _(E, -i, !0);
	}
	function x() {
		return l.every(({ index: O }) => {
			const E = d.filter((L) => L !== O);
			return g(E, e) <= 0.1;
		});
	}
	function b() {
		l.forEach((O) => {
			const { target: E, translate: L, slideLocation: N } = O,
				D = E();
			D !== N.get() && (L.to(D), N.set(D));
		});
	}
	function C() {
		l.forEach((O) => O.translate.clear());
	}
	return { canLoop: x, clear: C, loop: b, loopPoints: l };
}
function Id(a, t, e) {
	let i,
		n = !1;
	function r(c) {
		if (!e) return;
		function u(f) {
			for (const d of f)
				if (d.type === "childList") {
					c.reInit(), t.emit("slidesChanged");
					break;
				}
		}
		(i = new MutationObserver((f) => {
			n || ((Ra(e) || e(c, f)) && u(f));
		})),
			i.observe(a, { childList: !0 });
	}
	function s() {
		i && i.disconnect(), (n = !0);
	}
	return { init: r, destroy: s };
}
function Rd(a, t, e, i) {
	const n = {};
	let r = null,
		s = null,
		o,
		c = !1;
	function u() {
		(o = new IntersectionObserver(
			(g) => {
				c ||
					(g.forEach((h) => {
						const m = t.indexOf(h.target);
						n[m] = h;
					}),
					(r = null),
					(s = null),
					e.emit("slidesInView"));
			},
			{ root: a.parentElement, threshold: i },
		)),
			t.forEach((g) => o.observe(g));
	}
	function f() {
		o && o.disconnect(), (c = !0);
	}
	function d(g) {
		return ns(n).reduce((h, m) => {
			const _ = parseInt(m),
				{ isIntersecting: y } = n[_];
			return ((g && y) || (!g && !y)) && h.push(_), h;
		}, []);
	}
	function p(g = !0) {
		if (g && r) return r;
		if (!g && s) return s;
		const h = d(g);
		return g && (r = h), g || (s = h), h;
	}
	return { init: u, destroy: f, get: p };
}
function Fd(a, t, e, i, n, r) {
	const { measureSize: s, startEdge: o, endEdge: c } = a,
		u = e[0] && n,
		f = g(),
		d = h(),
		p = e.map(s),
		l = m();
	function g() {
		if (!u) return 0;
		const y = e[0];
		return Yt(t[o] - y[o]);
	}
	function h() {
		if (!u) return 0;
		const y = r.getComputedStyle(bi(i));
		return parseFloat(y.getPropertyValue(`margin-${c}`));
	}
	function m() {
		return e
			.map((y, S, x) => {
				const b = !S,
					C = Na(x, S);
				return b ? p[S] + f : C ? p[S] + d : x[S + 1][o] - y[o];
			})
			.map(Yt);
	}
	return { slideSizes: p, slideSizesWithGaps: l, startGap: f, endGap: d };
}
function Nd(a, t, e, i, n, r, s, o, c, u) {
	const { startEdge: f, endEdge: d } = a,
		p = Ia(i);
	function l(_, y) {
		return is(_)
			.filter((S) => S % y === 0)
			.map((S) => _.slice(S, S + y));
	}
	function g(_) {
		return _.length
			? is(_)
					.reduce((y, S) => {
						const x = bi(y) || 0,
							b = x === 0,
							C = S === ls(_),
							M = r[f] - s[x][f],
							O = r[f] - s[S][d],
							E = !n && b ? t.apply(o) : 0,
							L = !n && C ? t.apply(c) : 0;
						return (
							Yt(O - L - (M + E)) > e + u && y.push(S), C && y.push(_.length), y
						);
					}, [])
					.map((y, S, x) => {
						const b = Math.max(x[S - 1] || 0);
						return _.slice(b, y);
					})
			: [];
	}
	function h(_) {
		return p ? l(_, i) : g(_);
	}
	return { groupSlides: h };
}
function Bd(a, t, e, i, n, r, s) {
	const {
			align: o,
			axis: c,
			direction: u,
			startIndex: f,
			loop: d,
			duration: p,
			dragFree: l,
			dragThreshold: g,
			inViewThreshold: h,
			slidesToScroll: m,
			skipSnaps: _,
			containScroll: y,
			watchResize: S,
			watchSlides: x,
			watchDrag: b,
		} = r,
		C = 2,
		M = vd(),
		O = M.measure(t),
		E = e.map(M.measure),
		L = _d(u),
		N = gd(c, u),
		D = N.measureSize(O),
		R = xd(D),
		Y = hd(o, D),
		X = !d && !!y,
		V = d || !!y,
		{
			slideSizes: H,
			slideSizesWithGaps: tt,
			startGap: gt,
			endGap: T,
		} = Fd(N, O, E, e, V, n),
		nt = Nd(N, L, D, m, d, O, E, gt, T, C),
		{ snaps: ut, snapsAligned: I } = Pd(N, Y, O, E, nt),
		F = -bi(ut) + bi(tt),
		{ snapsContained: G, scrollContainLimit: J } = Sd(D, F, I, y, C),
		U = X ? G : I,
		{ limit: K } = Md(F, U, d),
		lt = _u(ls(U), f, d),
		ft = lt.clone(),
		et = is(e),
		W = ({
			dragHandler: Gt,
			scrollBody: ge,
			scrollBounds: _i,
			options: { loop: At },
		}) => {
			At || _i.constrain(Gt.pointerDown()), ge.seek();
		},
		Z = (
			{
				scrollBody: Gt,
				translate: ge,
				location: _i,
				offsetLocation: At,
				scrollLooper: Si,
				slideLooper: Ue,
				dragHandler: Ke,
				animation: ze,
				eventHandler: Qe,
				options: { loop: Ce },
			},
			dt,
		) => {
			const xe = Gt.velocity(),
				Ft = Gt.settled();
			Ft && !Ke.pointerDown() && (ze.stop(), Qe.emit("settle")),
				Ft || Qe.emit("scroll"),
				At.set(_i.get() - xe + xe * dt),
				Ce && (Si.loop(Gt.direction()), Ue.loop()),
				ge.to(At.get());
		},
		ot = pd(
			i,
			n,
			() => W(se),
			(Gt) => Z(se, Gt),
		),
		st = 0.68,
		Et = U[lt.get()],
		P = Rs(Et),
		Mt = Rs(Et),
		Xt = Rs(Et),
		ue = bd(P, Mt, Xt, p, st),
		kt = Ed(d, U, F, K, Xt),
		Rt = kd(ot, lt, ft, ue, kt, Xt, s),
		Ge = Od(K),
		Be = rs(),
		Ht = Rd(t, e, s, h),
		{ slideRegistry: Wt } = Cd(X, y, U, J, nt, et),
		Pt = Ad(a, e, Wt, Rt, ue, Be),
		se = {
			ownerDocument: i,
			ownerWindow: n,
			eventHandler: s,
			containerRect: O,
			slideRects: E,
			animation: ot,
			axis: N,
			direction: L,
			dragHandler: md(
				N,
				L,
				a,
				i,
				n,
				Xt,
				yd(N, n),
				P,
				ot,
				Rt,
				ue,
				kt,
				lt,
				s,
				R,
				l,
				g,
				_,
				st,
				b,
			),
			eventStore: Be,
			percentOfView: R,
			index: lt,
			indexPrevious: ft,
			limit: K,
			location: P,
			offsetLocation: Mt,
			options: r,
			resizeHandler: wd(t, s, n, e, N, S, M),
			scrollBody: ue,
			scrollBounds: Td(K, Mt, Xt, ue, R),
			scrollLooper: Dd(F, K, Mt, [P, Mt, Xt]),
			scrollProgress: Ge,
			scrollSnapList: U.map(Ge.get),
			scrollSnaps: U,
			scrollTarget: kt,
			scrollTo: Rt,
			slideLooper: Ld(N, L, D, F, H, tt, ut, U, Mt, e),
			slideFocus: Pt,
			slidesHandler: Id(t, s, x),
			slidesInView: Ht,
			slideIndexes: et,
			slideRegistry: Wt,
			slidesToScroll: nt,
			target: Xt,
			translate: mu(N, L, t),
		};
	return se;
}
function zd() {
	const a = {};
	let t;
	function e(c) {
		t = c;
	}
	function i(c) {
		return a[c] || [];
	}
	function n(c) {
		return i(c).forEach((u) => u(t, c)), o;
	}
	function r(c, u) {
		return (a[c] = i(c).concat([u])), o;
	}
	function s(c, u) {
		return (a[c] = i(c).filter((f) => f !== u)), o;
	}
	const o = { init: e, emit: n, off: s, on: r };
	return o;
}
const qd = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: !1,
	dragThreshold: 10,
	loop: !1,
	skipSnaps: !1,
	duration: 25,
	startIndex: 0,
	active: !0,
	watchDrag: !0,
	watchResize: !0,
	watchSlides: !0,
};
function Yd(a) {
	function t(r, s) {
		return pu(r, s || {});
	}
	function e(r) {
		const s = r.breakpoints || {},
			o = ns(s)
				.filter((c) => a.matchMedia(c).matches)
				.map((c) => s[c])
				.reduce((c, u) => t(c, u), {});
		return t(r, o);
	}
	function i(r) {
		return r
			.map((s) => ns(s.breakpoints || {}))
			.reduce((s, o) => s.concat(o), [])
			.map(a.matchMedia);
	}
	return { mergeOptions: t, optionsAtMedia: e, optionsMediaQueries: i };
}
function Xd(a) {
	let t = [];
	function e(r, s) {
		return (
			(t = s.filter(({ options: o }) => a.optionsAtMedia(o).active !== !1)),
			t.forEach((o) => o.init(r, a)),
			s.reduce((o, c) => Object.assign(o, { [c.name]: c }), {})
		);
	}
	function i() {
		t = t.filter((r) => r.destroy());
	}
	return { init: e, destroy: i };
}
function Ba(a, t, e) {
	const i = a.ownerDocument,
		n = i.defaultView,
		r = Yd(n),
		s = Xd(r),
		o = rs(),
		c = zd(),
		{ mergeOptions: u, optionsAtMedia: f, optionsMediaQueries: d } = r,
		{ on: p, off: l, emit: g } = c,
		h = N;
	let m = !1,
		_,
		y = u(qd, Ba.globalOptions),
		S = u(y),
		x = [],
		b,
		C,
		M;
	function O() {
		const { container: et, slides: W } = S;
		C = (na(et) ? a.querySelector(et) : et) || a.children[0];
		const ot = na(W) ? C.querySelectorAll(W) : W;
		M = [].slice.call(ot || C.children);
	}
	function E(et) {
		const W = Bd(a, C, M, i, n, et, c);
		if (et.loop && !W.slideLooper.canLoop()) {
			const Z = Object.assign({}, et, { loop: !1 });
			return E(Z);
		}
		return W;
	}
	function L(et, W) {
		m ||
			((y = u(y, et)),
			(S = f(y)),
			(x = W || x),
			O(),
			(_ = E(S)),
			d([y, ...x.map(({ options: Z }) => Z)]).forEach((Z) =>
				o.add(Z, "change", N),
			),
			S.active &&
				(_.translate.to(_.location.get()),
				_.animation.init(),
				_.slidesInView.init(),
				_.slideFocus.init(),
				_.eventHandler.init(ft),
				_.resizeHandler.init(ft),
				_.slidesHandler.init(ft),
				_.options.loop && _.slideLooper.loop(),
				C.offsetParent && M.length && _.dragHandler.init(ft),
				(b = s.init(ft, x))));
	}
	function N(et, W) {
		const Z = nt();
		D(), L(u({ startIndex: Z }, et), W), c.emit("reInit");
	}
	function D() {
		_.dragHandler.destroy(),
			_.eventStore.clear(),
			_.translate.clear(),
			_.slideLooper.clear(),
			_.resizeHandler.destroy(),
			_.slidesHandler.destroy(),
			_.slidesInView.destroy(),
			_.animation.destroy(),
			s.destroy(),
			o.clear();
	}
	function R() {
		m || ((m = !0), o.clear(), D(), c.emit("destroy"));
	}
	function Y(et, W, Z) {
		!S.active ||
			m ||
			(_.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : S.duration),
			_.scrollTo.index(et, Z || 0));
	}
	function X(et) {
		const W = _.index.add(1).get();
		Y(W, et, -1);
	}
	function V(et) {
		const W = _.index.add(-1).get();
		Y(W, et, 1);
	}
	function H() {
		return _.index.add(1).get() !== nt();
	}
	function tt() {
		return _.index.add(-1).get() !== nt();
	}
	function gt() {
		return _.scrollSnapList;
	}
	function T() {
		return _.scrollProgress.get(_.location.get());
	}
	function nt() {
		return _.index.get();
	}
	function ut() {
		return _.indexPrevious.get();
	}
	function I() {
		return _.slidesInView.get();
	}
	function F() {
		return _.slidesInView.get(!1);
	}
	function G() {
		return b;
	}
	function J() {
		return _;
	}
	function U() {
		return a;
	}
	function K() {
		return C;
	}
	function lt() {
		return M;
	}
	const ft = {
		canScrollNext: H,
		canScrollPrev: tt,
		containerNode: K,
		internalEngine: J,
		destroy: R,
		off: l,
		on: p,
		emit: g,
		plugins: G,
		previousScrollSnap: ut,
		reInit: h,
		rootNode: U,
		scrollNext: X,
		scrollPrev: V,
		scrollProgress: T,
		scrollSnapList: gt,
		scrollTo: Y,
		selectedScrollSnap: nt,
		slideNodes: lt,
		slidesInView: I,
		slidesNotInView: F,
	};
	return L(t, e), setTimeout(() => c.emit("init"), 0), ft;
}
Ba.globalOptions = void 0;
const Hd = {
	active: !0,
	breakpoints: {},
	delay: 4e3,
	jump: !1,
	playOnInit: !0,
	stopOnFocusIn: !0,
	stopOnInteraction: !0,
	stopOnMouseEnter: !1,
	stopOnLastSnap: !1,
	rootNode: null,
};
function za(a = {}) {
	let t,
		e,
		i,
		n = !1,
		r = !0,
		s = !1,
		o = 0,
		c = 0;
	function u(x, b) {
		e = x;
		const { mergeOptions: C, optionsAtMedia: M } = b,
			O = C(Hd, za.globalOptions),
			E = C(O, a);
		if (((t = M(E)), e.scrollSnapList().length <= 1)) return;
		(s = t.jump), (i = !1);
		const { eventStore: L, ownerDocument: N } = e.internalEngine(),
			D = e.rootNode(),
			R = (t.rootNode && t.rootNode(D)) || D,
			Y = e.containerNode();
		e.on("pointerDown", p),
			t.stopOnInteraction || e.on("pointerUp", d),
			t.stopOnMouseEnter &&
				(L.add(R, "mouseenter", () => {
					(r = !1), p();
				}),
				t.stopOnInteraction ||
					L.add(R, "mouseleave", () => {
						(r = !0), d();
					})),
			t.stopOnFocusIn &&
				(L.add(Y, "focusin", p),
				t.stopOnInteraction || L.add(Y, "focusout", d)),
			L.add(N, "visibilitychange", l),
			t.playOnInit && e.on("init", d).on("reInit", d);
	}
	function f() {
		e.off("init", d).off("reInit", d).off("pointerDown", p).off("pointerUp", d),
			p(),
			cancelAnimationFrame(o),
			(o = 0),
			(i = !0),
			(n = !1);
	}
	function d() {
		if (i || !r) return;
		n || e.emit("autoplay:play");
		const { ownerWindow: x } = e.internalEngine();
		x.clearInterval(c), (c = x.setInterval(y, t.delay)), (n = !0);
	}
	function p() {
		if (i) return;
		n && e.emit("autoplay:stop");
		const { ownerWindow: x } = e.internalEngine();
		x.clearInterval(c), (c = 0), (n = !1);
	}
	function l() {
		const { ownerDocument: x } = e.internalEngine();
		if (x.visibilityState === "hidden") return (r = n), p();
		r && d();
	}
	function g(x) {
		typeof x < "u" && (s = x), (r = !0), d();
	}
	function h() {
		n && p();
	}
	function m() {
		n && g();
	}
	function _() {
		return n;
	}
	function y() {
		o = requestAnimationFrame(() => {
			const { index: x } = e.internalEngine(),
				b = x.clone().add(1).get(),
				C = e.scrollSnapList().length - 1;
			t.stopOnLastSnap && b === C && p(),
				e.canScrollNext() ? e.scrollNext(s) : e.scrollTo(0, s);
		});
	}
	return {
		name: "autoplay",
		options: a,
		init: u,
		destroy: f,
		play: g,
		stop: h,
		reset: m,
		isPlaying: _,
	};
}
za.globalOptions = void 0;
class $d {
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
const Kt = new $d();
function jd(a = 0) {
	window.scrollTo({ top: a, behavior: "smooth" });
}
function yu(a, t = 0) {
	const e = a.getBoundingClientRect(),
		i = (window.scrollY || document.documentElement.scrollTop) + e.top - t;
	jd(i);
}
/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Xi,
	Cn,
	qa,
	so,
	Or,
	Fs,
	Qs,
	$r,
	wi = "transform",
	ra = wi + "Origin",
	vu,
	xu = function (t) {
		var e = t.ownerDocument || t;
		for (
			!(wi in t.style) &&
			("msTransform" in t.style) &&
			((wi = "msTransform"), (ra = wi + "Origin"));
			e.parentNode && (e = e.parentNode);

		);
		if (((Cn = window), (Qs = new Nn()), e)) {
			(Xi = e),
				(qa = e.documentElement),
				(so = e.body),
				($r = Xi.createElementNS("http://www.w3.org/2000/svg", "g")),
				($r.style.transform = "none");
			var i = e.createElement("div"),
				n = e.createElement("div"),
				r = e && (e.body || e.firstElementChild);
			r &&
				r.appendChild &&
				(r.appendChild(i),
				i.appendChild(n),
				i.setAttribute(
					"style",
					"position:static;transform:translate3d(0,0,1px)",
				),
				(vu = n.offsetParent !== i),
				r.removeChild(i));
		}
		return e;
	},
	Vd = function (t) {
		for (var e, i; t && t !== so; )
			(i = t._gsap),
				i && i.uncache && i.get(t, "x"),
				i &&
					!i.scaleX &&
					!i.scaleY &&
					i.renderTransform &&
					((i.scaleX = i.scaleY = 1e-4),
					i.renderTransform(1, i),
					e ? e.push(i) : (e = [i])),
				(t = t.parentNode);
		return e;
	},
	wu = [],
	bu = [],
	Wd = function () {
		return Cn.pageYOffset || Xi.scrollTop || qa.scrollTop || so.scrollTop || 0;
	},
	Gd = function () {
		return (
			Cn.pageXOffset || Xi.scrollLeft || qa.scrollLeft || so.scrollLeft || 0
		);
	},
	Ya = function (t) {
		return (
			t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null)
		);
	},
	Ud = function a(t) {
		if (Cn.getComputedStyle(t).position === "fixed") return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return a(t);
	},
	So = function a(t, e) {
		if (t.parentNode && (Xi || xu(t))) {
			var i = Ya(t),
				n = i
					? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
					: "http://www.w3.org/1999/xhtml",
				r = i ? (e ? "rect" : "g") : "div",
				s = e !== 2 ? 0 : 100,
				o = e === 3 ? 100 : 0,
				c =
					"position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
				u = Xi.createElementNS
					? Xi.createElementNS(n.replace(/^https/, "http"), r)
					: Xi.createElement(r);
			return (
				e &&
					(i
						? (Fs || (Fs = a(t)),
							u.setAttribute("width", 0.01),
							u.setAttribute("height", 0.01),
							u.setAttribute("transform", "translate(" + s + "," + o + ")"),
							Fs.appendChild(u))
						: (Or || ((Or = a(t)), (Or.style.cssText = c)),
							(u.style.cssText =
								c +
								"width:0.1px;height:0.1px;top:" +
								o +
								"px;left:" +
								s +
								"px"),
							Or.appendChild(u))),
				u
			);
		}
		throw "Need document and parent.";
	},
	Kd = function (t) {
		for (var e = new Nn(), i = 0; i < t.numberOfItems; i++)
			e.multiply(t.getItem(i).matrix);
		return e;
	},
	Qd = function (t) {
		var e = t.getCTM(),
			i;
		return (
			e ||
				((i = t.style[wi]),
				(t.style[wi] = "none"),
				t.appendChild($r),
				(e = $r.getCTM()),
				t.removeChild($r),
				i
					? (t.style[wi] = i)
					: t.style.removeProperty(
							wi.replace(/([A-Z])/g, "-$1").toLowerCase(),
						)),
			e || Qs.clone()
		);
	},
	Zd = function (t, e) {
		var i = Ya(t),
			n = t === i,
			r = i ? wu : bu,
			s = t.parentNode,
			o,
			c,
			u,
			f,
			d,
			p;
		if (t === Cn) return t;
		if (
			(r.length || r.push(So(t, 1), So(t, 2), So(t, 3)), (o = i ? Fs : Or), i)
		)
			n
				? ((u = Qd(t)), (f = -u.e / u.a), (d = -u.f / u.d), (c = Qs))
				: t.getBBox
					? ((u = t.getBBox()),
						(c = t.transform ? t.transform.baseVal : {}),
						(c = c.numberOfItems
							? c.numberOfItems > 1
								? Kd(c)
								: c.getItem(0).matrix
							: Qs),
						(f = c.a * u.x + c.c * u.y),
						(d = c.b * u.x + c.d * u.y))
					: ((c = new Nn()), (f = d = 0)),
				e && t.tagName.toLowerCase() === "g" && (f = d = 0),
				(n ? i : s).appendChild(o),
				o.setAttribute(
					"transform",
					"matrix(" +
						c.a +
						"," +
						c.b +
						"," +
						c.c +
						"," +
						c.d +
						"," +
						(c.e + f) +
						"," +
						(c.f + d) +
						")",
				);
		else {
			if (((f = d = 0), vu))
				for (
					c = t.offsetParent, u = t;
					u && (u = u.parentNode) && u !== c && u.parentNode;

				)
					(Cn.getComputedStyle(u)[wi] + "").length > 4 &&
						((f = u.offsetLeft), (d = u.offsetTop), (u = 0));
			if (
				((p = Cn.getComputedStyle(t)),
				p.position !== "absolute" && p.position !== "fixed")
			)
				for (c = t.offsetParent; s && s !== c; )
					(f += s.scrollLeft || 0), (d += s.scrollTop || 0), (s = s.parentNode);
			(u = o.style),
				(u.top = t.offsetTop - d + "px"),
				(u.left = t.offsetLeft - f + "px"),
				(u[wi] = p[wi]),
				(u[ra] = p[ra]),
				(u.position = p.position === "fixed" ? "fixed" : "absolute"),
				t.parentNode.appendChild(o);
		}
		return o;
	},
	Mo = function (t, e, i, n, r, s, o) {
		return (t.a = e), (t.b = i), (t.c = n), (t.d = r), (t.e = s), (t.f = o), t;
	},
	Nn = (function () {
		function a(e, i, n, r, s, o) {
			e === void 0 && (e = 1),
				i === void 0 && (i = 0),
				n === void 0 && (n = 0),
				r === void 0 && (r = 1),
				s === void 0 && (s = 0),
				o === void 0 && (o = 0),
				Mo(this, e, i, n, r, s, o);
		}
		var t = a.prototype;
		return (
			(t.inverse = function () {
				var i = this.a,
					n = this.b,
					r = this.c,
					s = this.d,
					o = this.e,
					c = this.f,
					u = i * s - n * r || 1e-10;
				return Mo(
					this,
					s / u,
					-n / u,
					-r / u,
					i / u,
					(r * c - s * o) / u,
					-(i * c - n * o) / u,
				);
			}),
			(t.multiply = function (i) {
				var n = this.a,
					r = this.b,
					s = this.c,
					o = this.d,
					c = this.e,
					u = this.f,
					f = i.a,
					d = i.c,
					p = i.b,
					l = i.d,
					g = i.e,
					h = i.f;
				return Mo(
					this,
					f * n + p * s,
					f * r + p * o,
					d * n + l * s,
					d * r + l * o,
					c + g * n + h * s,
					u + g * r + h * o,
				);
			}),
			(t.clone = function () {
				return new a(this.a, this.b, this.c, this.d, this.e, this.f);
			}),
			(t.equals = function (i) {
				var n = this.a,
					r = this.b,
					s = this.c,
					o = this.d,
					c = this.e,
					u = this.f;
				return (
					n === i.a &&
					r === i.b &&
					s === i.c &&
					o === i.d &&
					c === i.e &&
					u === i.f
				);
			}),
			(t.apply = function (i, n) {
				n === void 0 && (n = {});
				var r = i.x,
					s = i.y,
					o = this.a,
					c = this.b,
					u = this.c,
					f = this.d,
					d = this.e,
					p = this.f;
				return (
					(n.x = r * o + s * u + d || 0), (n.y = r * c + s * f + p || 0), n
				);
			}),
			a
		);
	})();
function vn(a, t, e, i) {
	if (!a || !a.parentNode || (Xi || xu(a)).documentElement === a)
		return new Nn();
	var n = Vd(a),
		r = Ya(a),
		s = r ? wu : bu,
		o = Zd(a, e),
		c = s[0].getBoundingClientRect(),
		u = s[1].getBoundingClientRect(),
		f = s[2].getBoundingClientRect(),
		d = o.parentNode,
		p = !i && Ud(a),
		l = new Nn(
			(u.left - c.left) / 100,
			(u.top - c.top) / 100,
			(f.left - c.left) / 100,
			(f.top - c.top) / 100,
			c.left + (p ? 0 : Gd()),
			c.top + (p ? 0 : Wd()),
		);
	if ((d.removeChild(o), n))
		for (c = n.length; c--; )
			(u = n[c]), (u.scaleX = u.scaleY = 0), u.renderTransform(1, u);
	return t ? l.inverse() : l;
}
function Ol(a) {
	if (a === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return a;
}
function Jd(a, t) {
	(a.prototype = Object.create(t.prototype)),
		(a.prototype.constructor = a),
		(a.__proto__ = t);
}
var Tt,
	It,
	ni,
	Ti,
	Hi,
	Do,
	zi,
	sa,
	Pr,
	nn,
	Tu,
	oa,
	ss,
	Xa,
	Cr,
	yi,
	Er,
	Ns,
	Su,
	aa,
	Zs = 0,
	Mu = function () {
		return typeof window < "u";
	},
	Du = function () {
		return Tt || (Mu() && (Tt = window.gsap) && Tt.registerPlugin && Tt);
	},
	Ki = function (t) {
		return typeof t == "function";
	},
	jr = function (t) {
		return typeof t == "object";
	},
	xi = function (t) {
		return typeof t > "u";
	},
	Bs = function () {
		return !1;
	},
	Vr = "transform",
	la = "transformOrigin",
	Wi = function (t) {
		return Math.round(t * 1e4) / 1e4;
	},
	yr = Array.isArray,
	Ss = function (t, e) {
		var i = ni.createElementNS
			? ni.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: ni.createElement(t);
		return i.style ? i : ni.createElement(t);
	},
	Pl = 180 / Math.PI,
	pn = 1e20,
	th = new Nn(),
	Gi =
		Date.now ||
		function () {
			return new Date().getTime();
		},
	En = [],
	er = {},
	eh = 0,
	ih = /^(?:a|input|textarea|button|select)$/i,
	Cl = 0,
	Xn = {},
	Fi = {},
	Ou = function (t, e) {
		var i = {},
			n;
		for (n in t) i[n] = e ? t[n] * e : t[n];
		return i;
	},
	nh = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	El = function a(t, e) {
		for (var i = t.length, n; i--; )
			e
				? (t[i].style.touchAction = e)
				: t[i].style.removeProperty("touch-action"),
				(n = t[i].children),
				n && n.length && a(n, e);
	},
	Pu = function () {
		return En.forEach(function (t) {
			return t();
		});
	},
	rh = function (t) {
		En.push(t), En.length === 1 && Tt.ticker.add(Pu);
	},
	kl = function () {
		return !En.length && Tt.ticker.remove(Pu);
	},
	Al = function (t) {
		for (var e = En.length; e--; ) En[e] === t && En.splice(e, 1);
		Tt.to(kl, {
			overwrite: !0,
			delay: 15,
			duration: 0,
			onComplete: kl,
			data: "_draggable",
		});
	},
	sh = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	le = function (t, e, i, n) {
		if (t.addEventListener) {
			var r = ss[e];
			(n = n || (Tu ? { passive: !1 } : null)),
				t.addEventListener(r || e, i, n),
				r && e !== r && t.addEventListener(e, i, n);
		}
	},
	ee = function (t, e, i, n) {
		if (t.removeEventListener) {
			var r = ss[e];
			t.removeEventListener(r || e, i, n),
				r && e !== r && t.removeEventListener(e, i, n);
		}
	},
	ai = function (t) {
		t.preventDefault && t.preventDefault(),
			t.preventManipulation && t.preventManipulation();
	},
	oh = function (t, e) {
		for (var i = t.length; i--; ) if (t[i].identifier === e) return !0;
	},
	ah = function a(t) {
		(Xa = t.touches && Zs < t.touches.length), ee(t.target, "touchend", a);
	},
	Ll = function (t) {
		(Xa = t.touches && Zs < t.touches.length), le(t.target, "touchend", ah);
	},
	ir = function (t) {
		return (
			It.pageYOffset ||
			t.scrollTop ||
			t.documentElement.scrollTop ||
			t.body.scrollTop ||
			0
		);
	},
	nr = function (t) {
		return (
			It.pageXOffset ||
			t.scrollLeft ||
			t.documentElement.scrollLeft ||
			t.body.scrollLeft ||
			0
		);
	},
	Il = function a(t, e) {
		le(t, "scroll", e), ur(t.parentNode) || a(t.parentNode, e);
	},
	Rl = function a(t, e) {
		ee(t, "scroll", e), ur(t.parentNode) || a(t.parentNode, e);
	},
	ur = function (t) {
		return (
			!t ||
			t === Ti ||
			t.nodeType === 9 ||
			t === ni.body ||
			t === It ||
			!t.nodeType ||
			!t.parentNode
		);
	},
	Fl = function (t, e) {
		var i = e === "x" ? "Width" : "Height",
			n = "scroll" + i,
			r = "client" + i;
		return Math.max(
			0,
			ur(t)
				? Math.max(Ti[n], Hi[n]) - (It["inner" + i] || Ti[r] || Hi[r])
				: t[n] - t[r],
		);
	},
	Oo = function a(t, e) {
		var i = Fl(t, "x"),
			n = Fl(t, "y");
		ur(t) ? (t = Fi) : a(t.parentNode, e),
			(t._gsMaxScrollX = i),
			(t._gsMaxScrollY = n),
			e ||
				((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0));
	},
	Po = function (t, e, i) {
		var n = t.style;
		n &&
			(xi(n[e]) && (e = Pr(e, t) || e),
			i == null
				? n.removeProperty &&
					n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
				: (n[e] = i));
	},
	os = function (t) {
		return It.getComputedStyle(
			t instanceof Element ? t : t.host || (t.parentNode || {}).host || t,
		);
	},
	gn = {},
	Hn = function (t) {
		if (t === It)
			return (
				(gn.left = gn.top = 0),
				(gn.width = gn.right =
					Ti.clientWidth || t.innerWidth || Hi.clientWidth || 0),
				(gn.height = gn.bottom =
					(t.innerHeight || 0) - 20 < Ti.clientHeight
						? Ti.clientHeight
						: t.innerHeight || Hi.clientHeight || 0),
				gn
			);
		var e = t.ownerDocument || ni,
			i = xi(t.pageX)
				? !t.nodeType && !xi(t.left) && !xi(t.top)
					? t
					: nn(t)[0].getBoundingClientRect()
				: {
						left: t.pageX - nr(e),
						top: t.pageY - ir(e),
						right: t.pageX - nr(e) + 1,
						bottom: t.pageY - ir(e) + 1,
					};
		return (
			xi(i.right) && !xi(i.width)
				? ((i.right = i.left + i.width), (i.bottom = i.top + i.height))
				: xi(i.width) &&
					(i = {
						width: i.right - i.left,
						height: i.bottom - i.top,
						right: i.right,
						left: i.left,
						bottom: i.bottom,
						top: i.top,
					}),
			i
		);
	},
	Zt = function (t, e, i) {
		var n = t.vars,
			r = n[i],
			s = t._listeners[e],
			o;
		return (
			Ki(r) &&
				(o = r.apply(
					n.callbackScope || t,
					n[i + "Params"] || [t.pointerEvent],
				)),
			s && t.dispatchEvent(e) === !1 && (o = !1),
			o
		);
	},
	Nl = function (t, e) {
		var i = nn(t)[0],
			n,
			r,
			s;
		return !i.nodeType && i !== It
			? xi(t.left)
				? ((r = t.min || t.minX || t.minRotation || 0),
					(n = t.min || t.minY || 0),
					{
						left: r,
						top: n,
						width: (t.max || t.maxX || t.maxRotation || 0) - r,
						height: (t.max || t.maxY || 0) - n,
					})
				: ((s = { x: 0, y: 0 }),
					{
						left: t.left - s.x,
						top: t.top - s.y,
						width: t.width,
						height: t.height,
					})
			: lh(i, e);
	},
	li = {},
	lh = function (t, e) {
		e = nn(e)[0];
		var i = t.getBBox && t.ownerSVGElement,
			n = t.ownerDocument || ni,
			r,
			s,
			o,
			c,
			u,
			f,
			d,
			p,
			l,
			g,
			h,
			m,
			_;
		if (t === It)
			(o = ir(n)),
				(r = nr(n)),
				(s =
					r +
					(n.documentElement.clientWidth ||
						t.innerWidth ||
						n.body.clientWidth ||
						0)),
				(c =
					o +
					((t.innerHeight || 0) - 20 < n.documentElement.clientHeight
						? n.documentElement.clientHeight
						: t.innerHeight || n.body.clientHeight || 0));
		else {
			if (e === It || xi(e)) return t.getBoundingClientRect();
			(r = o = 0),
				i
					? ((g = t.getBBox()), (h = g.width), (m = g.height))
					: (t.viewBox &&
							(g = t.viewBox.baseVal) &&
							((r = g.x || 0), (o = g.y || 0), (h = g.width), (m = g.height)),
						h ||
							((_ = os(t)),
							(g = _.boxSizing === "border-box"),
							(h =
								(parseFloat(_.width) || t.clientWidth || 0) +
								(g
									? 0
									: parseFloat(_.borderLeftWidth) +
										parseFloat(_.borderRightWidth))),
							(m =
								(parseFloat(_.height) || t.clientHeight || 0) +
								(g
									? 0
									: parseFloat(_.borderTopWidth) +
										parseFloat(_.borderBottomWidth))))),
				(s = h),
				(c = m);
		}
		return t === e
			? { left: r, top: o, width: s - r, height: c - o }
			: ((u = vn(e, !0).multiply(vn(t))),
				(f = u.apply({ x: r, y: o })),
				(d = u.apply({ x: s, y: o })),
				(p = u.apply({ x: s, y: c })),
				(l = u.apply({ x: r, y: c })),
				(r = Math.min(f.x, d.x, p.x, l.x)),
				(o = Math.min(f.y, d.y, p.y, l.y)),
				{
					left: r,
					top: o,
					width: Math.max(f.x, d.x, p.x, l.x) - r,
					height: Math.max(f.y, d.y, p.y, l.y) - o,
				});
	},
	Co = function (t, e, i, n, r, s) {
		var o = {},
			c,
			u,
			f;
		if (e)
			if (r !== 1 && e instanceof Array) {
				if (((o.end = c = []), (f = e.length), jr(e[0])))
					for (u = 0; u < f; u++) c[u] = Ou(e[u], r);
				else for (u = 0; u < f; u++) c[u] = e[u] * r;
				(i += 1.1), (n -= 1.1);
			} else
				Ki(e)
					? (o.end = function (d) {
							var p = e.call(t, d),
								l,
								g;
							if (r !== 1)
								if (jr(p)) {
									l = {};
									for (g in p) l[g] = p[g] * r;
									p = l;
								} else p *= r;
							return p;
						})
					: (o.end = e);
		return (
			(i || i === 0) && (o.max = i),
			(n || n === 0) && (o.min = n),
			s && (o.velocity = 0),
			o
		);
	},
	ch = function a(t) {
		var e;
		return !t || !t.getAttribute || t === Hi
			? !1
			: (e = t.getAttribute("data-clickable")) === "true" ||
				  (e !== "false" &&
						(ih.test(t.nodeName + "") ||
							t.getAttribute("contentEditable") === "true"))
				? !0
				: a(t.parentNode);
	},
	Ms = function (t, e) {
		for (var i = t.length, n; i--; )
			(n = t[i]),
				(n.ondragstart = n.onselectstart = e ? null : Bs),
				Tt.set(n, { lazy: !0, userSelect: e ? "text" : "none" });
	},
	uh = function a(t) {
		if (os(t).position === "fixed") return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return a(t);
	},
	Cu,
	ca,
	fh = function (t, e) {
		(t = Tt.utils.toArray(t)[0]), (e = e || {});
		var i = document.createElement("div"),
			n = i.style,
			r = t.firstChild,
			s = 0,
			o = 0,
			c = t.scrollTop,
			u = t.scrollLeft,
			f = t.scrollWidth,
			d = t.scrollHeight,
			p = 0,
			l = 0,
			g = 0,
			h,
			m,
			_,
			y,
			S,
			x;
		Cu && e.force3D !== !1
			? ((S = "translate3d("), (x = "px,0px)"))
			: Vr && ((S = "translate("), (x = "px)")),
			(this.scrollTop = function (b, C) {
				if (!arguments.length) return -this.top();
				this.top(-b, C);
			}),
			(this.scrollLeft = function (b, C) {
				if (!arguments.length) return -this.left();
				this.left(-b, C);
			}),
			(this.left = function (b, C) {
				if (!arguments.length) return -(t.scrollLeft + o);
				var M = t.scrollLeft - u,
					O = o;
				if ((M > 2 || M < -2) && !C) {
					(u = t.scrollLeft),
						Tt.killTweensOf(this, { left: 1, scrollLeft: 1 }),
						this.left(-u),
						e.onKill && e.onKill();
					return;
				}
				(b = -b),
					b < 0
						? ((o = (b - 0.5) | 0), (b = 0))
						: b > l
							? ((o = (b - l) | 0), (b = l))
							: (o = 0),
					(o || O) &&
						(this._skip || (n[Vr] = S + -o + "px," + -s + x),
						o + p >= 0 && (n.paddingRight = o + p + "px")),
					(t.scrollLeft = b | 0),
					(u = t.scrollLeft);
			}),
			(this.top = function (b, C) {
				if (!arguments.length) return -(t.scrollTop + s);
				var M = t.scrollTop - c,
					O = s;
				if ((M > 2 || M < -2) && !C) {
					(c = t.scrollTop),
						Tt.killTweensOf(this, { top: 1, scrollTop: 1 }),
						this.top(-c),
						e.onKill && e.onKill();
					return;
				}
				(b = -b),
					b < 0
						? ((s = (b - 0.5) | 0), (b = 0))
						: b > g
							? ((s = (b - g) | 0), (b = g))
							: (s = 0),
					(s || O) && (this._skip || (n[Vr] = S + -o + "px," + -s + x)),
					(t.scrollTop = b | 0),
					(c = t.scrollTop);
			}),
			(this.maxScrollTop = function () {
				return g;
			}),
			(this.maxScrollLeft = function () {
				return l;
			}),
			(this.disable = function () {
				for (r = i.firstChild; r; )
					(y = r.nextSibling), t.appendChild(r), (r = y);
				t === i.parentNode && t.removeChild(i);
			}),
			(this.enable = function () {
				if (((r = t.firstChild), r !== i)) {
					for (; r; ) (y = r.nextSibling), i.appendChild(r), (r = y);
					t.appendChild(i), this.calibrate();
				}
			}),
			(this.calibrate = function (b) {
				var C = t.clientWidth === h,
					M,
					O,
					E;
				(c = t.scrollTop),
					(u = t.scrollLeft),
					!(
						C &&
						t.clientHeight === m &&
						i.offsetHeight === _ &&
						f === t.scrollWidth &&
						d === t.scrollHeight &&
						!b
					) &&
						((s || o) &&
							((O = this.left()),
							(E = this.top()),
							this.left(-t.scrollLeft),
							this.top(-t.scrollTop)),
						(M = os(t)),
						(!C || b) &&
							((n.display = "block"),
							(n.width = "auto"),
							(n.paddingRight = "0px"),
							(p = Math.max(0, t.scrollWidth - t.clientWidth)),
							p &&
								(p +=
									parseFloat(M.paddingLeft) +
									(ca ? parseFloat(M.paddingRight) : 0))),
						(n.display = "inline-block"),
						(n.position = "relative"),
						(n.overflow = "visible"),
						(n.verticalAlign = "top"),
						(n.boxSizing = "content-box"),
						(n.width = "100%"),
						(n.paddingRight = p + "px"),
						ca && (n.paddingBottom = M.paddingBottom),
						(h = t.clientWidth),
						(m = t.clientHeight),
						(f = t.scrollWidth),
						(d = t.scrollHeight),
						(l = t.scrollWidth - h),
						(g = t.scrollHeight - m),
						(_ = i.offsetHeight),
						(n.display = "block"),
						(O || E) && (this.left(O), this.top(E)));
			}),
			(this.content = i),
			(this.element = t),
			(this._skip = !1),
			this.enable();
	},
	Eo = function (t) {
		if (Mu() && document.body) {
			var e = window && window.navigator;
			(It = window),
				(ni = document),
				(Ti = ni.documentElement),
				(Hi = ni.body),
				(Do = Ss("div")),
				(Ns = !!window.PointerEvent),
				(zi = Ss("div")),
				(zi.style.cssText =
					"visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
				(Er = zi.style.cursor === "grab" ? "grab" : "move"),
				(Cr = e && e.userAgent.toLowerCase().indexOf("android") !== -1),
				(oa =
					("ontouchstart" in Ti && "orientation" in It) ||
					(e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
				(ca = (function () {
					var i = Ss("div"),
						n = Ss("div"),
						r = n.style,
						s = Hi,
						o;
					return (
						(r.display = "inline-block"),
						(r.position = "relative"),
						(i.style.cssText =
							"width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
						i.appendChild(n),
						s.appendChild(i),
						(o = n.offsetHeight + 18 > i.scrollHeight),
						s.removeChild(i),
						o
					);
				})()),
				(ss = (function (i) {
					for (
						var n = i.split(","),
							r = (
								("onpointerdown" in Do)
									? "pointerdown,pointermove,pointerup,pointercancel"
									: ("onmspointerdown" in Do)
										? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
										: i
							).split(","),
							s = {},
							o = 4;
						--o > -1;

					)
						(s[n[o]] = r[o]), (s[r[o]] = n[o]);
					try {
						Ti.addEventListener(
							"test",
							null,
							Object.defineProperty({}, "passive", {
								get: function () {
									Tu = 1;
								},
							}),
						);
					} catch {}
					return s;
				})("touchstart,touchmove,touchend,touchcancel")),
				le(ni, "touchcancel", Bs),
				le(It, "touchmove", Bs),
				Hi && Hi.addEventListener("touchstart", Bs),
				le(ni, "contextmenu", function () {
					for (var i in er) er[i].isPressed && er[i].endDrag();
				}),
				(Tt = sa = Du());
		}
		Tt
			? ((yi = Tt.plugins.inertia),
				(Su = Tt.core.context || function () {}),
				(Pr = Tt.utils.checkPrefix),
				(Vr = Pr(Vr)),
				(la = Pr(la)),
				(nn = Tt.utils.toArray),
				(aa = Tt.core.getStyleSaver),
				(Cu = !!Pr("perspective")))
			: t && console.warn("Please gsap.registerPlugin(Draggable)");
	},
	dh = (function () {
		function a(e) {
			(this._listeners = {}), (this.target = e || this);
		}
		var t = a.prototype;
		return (
			(t.addEventListener = function (i, n) {
				var r = this._listeners[i] || (this._listeners[i] = []);
				~r.indexOf(n) || r.push(n);
			}),
			(t.removeEventListener = function (i, n) {
				var r = this._listeners[i],
					s = r && r.indexOf(n);
				s >= 0 && r.splice(s, 1);
			}),
			(t.dispatchEvent = function (i) {
				var n = this,
					r;
				return (
					(this._listeners[i] || []).forEach(function (s) {
						return s.call(n, { type: i, target: n.target }) === !1 && (r = !1);
					}),
					r
				);
			}),
			a
		);
	})(),
	fr = (function (a) {
		Jd(t, a);
		function t(e, i) {
			var n;
			(n = a.call(this) || this),
				sa || Eo(1),
				(e = nn(e)[0]),
				(n.styles = aa && aa(e, "transform,left,top")),
				yi || (yi = Tt.plugins.inertia),
				(n.vars = i = Ou(i || {})),
				(n.target = e),
				(n.x = n.y = n.rotation = 0),
				(n.dragResistance = parseFloat(i.dragResistance) || 0),
				(n.edgeResistance = isNaN(i.edgeResistance)
					? 1
					: parseFloat(i.edgeResistance) || 0),
				(n.lockAxis = i.lockAxis),
				(n.autoScroll = i.autoScroll || 0),
				(n.lockedAxis = null),
				(n.allowEventDefault = !!i.allowEventDefault),
				Tt.getProperty(e, "x");
			var r = (i.type || "x,y").toLowerCase(),
				s = ~r.indexOf("x") || ~r.indexOf("y"),
				o = r.indexOf("rotation") !== -1,
				c = o ? "rotation" : s ? "x" : "left",
				u = s ? "y" : "top",
				f = !!(~r.indexOf("x") || ~r.indexOf("left") || r === "scroll"),
				d = !!(~r.indexOf("y") || ~r.indexOf("top") || r === "scroll"),
				p = i.minimumMovement || 2,
				l = Ol(n),
				g = nn(i.trigger || i.handle || e),
				h = {},
				m = 0,
				_ = !1,
				y = i.autoScrollMarginTop || 40,
				S = i.autoScrollMarginRight || 40,
				x = i.autoScrollMarginBottom || 40,
				b = i.autoScrollMarginLeft || 40,
				C = i.clickableTest || ch,
				M = 0,
				O = e._gsap || Tt.core.getCache(e),
				E = uh(e),
				L = function (v, q) {
					return parseFloat(O.get(e, v, q));
				},
				N = e.ownerDocument || ni,
				D,
				R,
				Y,
				X,
				V,
				H,
				tt,
				gt,
				T,
				nt,
				ut,
				I,
				F,
				G,
				J,
				U,
				K,
				lt,
				ft,
				et,
				W,
				Z,
				ot,
				st,
				Et,
				P,
				Mt,
				Xt,
				ue,
				kt,
				Rt,
				Ge,
				Be,
				Ht = function (v) {
					return (
						ai(v),
						v.stopImmediatePropagation && v.stopImmediatePropagation(),
						!1
					);
				},
				Wt = function at(v) {
					if (l.autoScroll && l.isDragging && (_ || K)) {
						var q = e,
							w = l.autoScroll * 15,
							k,
							z,
							A,
							j,
							B,
							Q,
							ct,
							rt;
						for (
							_ = !1,
								Fi.scrollTop =
									It.pageYOffset != null
										? It.pageYOffset
										: N.documentElement.scrollTop != null
											? N.documentElement.scrollTop
											: N.body.scrollTop,
								Fi.scrollLeft =
									It.pageXOffset != null
										? It.pageXOffset
										: N.documentElement.scrollLeft != null
											? N.documentElement.scrollLeft
											: N.body.scrollLeft,
								j = l.pointerX - Fi.scrollLeft,
								B = l.pointerY - Fi.scrollTop;
							q && !z;

						)
							(z = ur(q.parentNode)),
								(k = z ? Fi : q.parentNode),
								(A = z
									? {
											bottom: Math.max(Ti.clientHeight, It.innerHeight || 0),
											right: Math.max(Ti.clientWidth, It.innerWidth || 0),
											left: 0,
											top: 0,
										}
									: k.getBoundingClientRect()),
								(Q = ct = 0),
								d &&
									((rt = k._gsMaxScrollY - k.scrollTop),
									rt < 0
										? (ct = rt)
										: B > A.bottom - x && rt
											? ((_ = !0),
												(ct = Math.min(
													rt,
													(w * (1 - Math.max(0, A.bottom - B) / x)) | 0,
												)))
											: B < A.top + y &&
												k.scrollTop &&
												((_ = !0),
												(ct = -Math.min(
													k.scrollTop,
													(w * (1 - Math.max(0, B - A.top) / y)) | 0,
												))),
									ct && (k.scrollTop += ct)),
								f &&
									((rt = k._gsMaxScrollX - k.scrollLeft),
									rt < 0
										? (Q = rt)
										: j > A.right - S && rt
											? ((_ = !0),
												(Q = Math.min(
													rt,
													(w * (1 - Math.max(0, A.right - j) / S)) | 0,
												)))
											: j < A.left + b &&
												k.scrollLeft &&
												((_ = !0),
												(Q = -Math.min(
													k.scrollLeft,
													(w * (1 - Math.max(0, j - A.left) / b)) | 0,
												))),
									Q && (k.scrollLeft += Q)),
								z &&
									(Q || ct) &&
									(It.scrollTo(k.scrollLeft, k.scrollTop),
									xe(l.pointerX + Q, l.pointerY + ct)),
								(q = k);
					}
					if (K) {
						var _t = l.x,
							Dt = l.y;
						o
							? ((l.deltaX = _t - parseFloat(O.rotation)),
								(l.rotation = _t),
								(O.rotation = _t + "deg"),
								O.renderTransform(1, O))
							: R
								? (d && ((l.deltaY = Dt - R.top()), R.top(Dt)),
									f && ((l.deltaX = _t - R.left()), R.left(_t)))
								: s
									? (d &&
											((l.deltaY = Dt - parseFloat(O.y)), (O.y = Dt + "px")),
										f && ((l.deltaX = _t - parseFloat(O.x)), (O.x = _t + "px")),
										O.renderTransform(1, O))
									: (d &&
											((l.deltaY = Dt - parseFloat(e.style.top || 0)),
											(e.style.top = Dt + "px")),
										f &&
											((l.deltaX = _t - parseFloat(e.style.left || 0)),
											(e.style.left = _t + "px"))),
							gt &&
								!v &&
								!Xt &&
								((Xt = !0),
								Zt(l, "drag", "onDrag") === !1 &&
									(f && (l.x -= l.deltaX), d && (l.y -= l.deltaY), at(!0)),
								(Xt = !1));
					}
					K = !1;
				},
				Pt = function (v, q) {
					var w = l.x,
						k = l.y,
						z,
						A;
					e._gsap || (O = Tt.core.getCache(e)),
						O.uncache && Tt.getProperty(e, "x"),
						s
							? ((l.x = parseFloat(O.x)), (l.y = parseFloat(O.y)))
							: o
								? (l.x = l.rotation = parseFloat(O.rotation))
								: R
									? ((l.y = R.top()), (l.x = R.left()))
									: ((l.y =
											parseFloat(e.style.top || ((A = os(e)) && A.top)) || 0),
										(l.x = parseFloat(e.style.left || (A || {}).left) || 0)),
						(ft || et || W) &&
							!q &&
							(l.isDragging || l.isThrowing) &&
							(W &&
								((Xn.x = l.x),
								(Xn.y = l.y),
								(z = W(Xn)),
								z.x !== l.x && ((l.x = z.x), (K = !0)),
								z.y !== l.y && ((l.y = z.y), (K = !0))),
							ft &&
								((z = ft(l.x)),
								z !== l.x && ((l.x = z), o && (l.rotation = z), (K = !0))),
							et && ((z = et(l.y)), z !== l.y && (l.y = z), (K = !0))),
						K && Wt(!0),
						v ||
							((l.deltaX = l.x - w),
							(l.deltaY = l.y - k),
							Zt(l, "throwupdate", "onThrowUpdate"));
				},
				se = function (v, q, w, k) {
					return (
						q == null && (q = -pn),
						w == null && (w = pn),
						Ki(v)
							? function (z) {
									var A = l.isPressed ? 1 - l.edgeResistance : 1;
									return (
										v.call(
											l,
											(z > w ? w + (z - w) * A : z < q ? q + (z - q) * A : z) *
												k,
										) * k
									);
								}
							: yr(v)
								? function (z) {
										for (var A = v.length, j = 0, B = pn, Q, ct; --A > -1; )
											(Q = v[A]),
												(ct = Q - z),
												ct < 0 && (ct = -ct),
												ct < B && Q >= q && Q <= w && ((j = A), (B = ct));
										return v[j];
									}
								: isNaN(v)
									? function (z) {
											return z;
										}
									: function () {
											return v * k;
										}
					);
				},
				Gt = function (v, q, w, k, z, A, j) {
					return (
						(A = A && A < pn ? A * A : pn),
						Ki(v)
							? function (B) {
									var Q = l.isPressed ? 1 - l.edgeResistance : 1,
										ct = B.x,
										rt = B.y,
										_t,
										Dt,
										Ot;
									return (
										(B.x = ct =
											ct > w
												? w + (ct - w) * Q
												: ct < q
													? q + (ct - q) * Q
													: ct),
										(B.y = rt =
											rt > z
												? z + (rt - z) * Q
												: rt < k
													? k + (rt - k) * Q
													: rt),
										(_t = v.call(l, B)),
										_t !== B && ((B.x = _t.x), (B.y = _t.y)),
										j !== 1 && ((B.x *= j), (B.y *= j)),
										A < pn &&
											((Dt = B.x - ct),
											(Ot = B.y - rt),
											Dt * Dt + Ot * Ot > A && ((B.x = ct), (B.y = rt))),
										B
									);
								}
							: yr(v)
								? function (B) {
										for (
											var Q = v.length, ct = 0, rt = pn, _t, Dt, Ot, vt;
											--Q > -1;

										)
											(Ot = v[Q]),
												(_t = Ot.x - B.x),
												(Dt = Ot.y - B.y),
												(vt = _t * _t + Dt * Dt),
												vt < rt && ((ct = Q), (rt = vt));
										return rt <= A ? v[ct] : B;
									}
								: function (B) {
										return B;
									}
					);
				},
				ge = function () {
					var v, q, w, k;
					(tt = !1),
						R
							? (R.calibrate(),
								(l.minX = ut = -R.maxScrollLeft()),
								(l.minY = F = -R.maxScrollTop()),
								(l.maxX = nt = l.maxY = I = 0),
								(tt = !0))
							: i.bounds &&
								((v = Nl(i.bounds, e.parentNode)),
								o
									? ((l.minX = ut = v.left),
										(l.maxX = nt = v.left + v.width),
										(l.minY = F = l.maxY = I = 0))
									: !xi(i.bounds.maxX) || !xi(i.bounds.maxY)
										? ((v = i.bounds),
											(l.minX = ut = v.minX),
											(l.minY = F = v.minY),
											(l.maxX = nt = v.maxX),
											(l.maxY = I = v.maxY))
										: ((q = Nl(e, e.parentNode)),
											(l.minX = ut = Math.round(L(c, "px") + v.left - q.left)),
											(l.minY = F = Math.round(L(u, "px") + v.top - q.top)),
											(l.maxX = nt = Math.round(ut + (v.width - q.width))),
											(l.maxY = I = Math.round(F + (v.height - q.height)))),
								ut > nt && ((l.minX = nt), (l.maxX = nt = ut), (ut = l.minX)),
								F > I && ((l.minY = I), (l.maxY = I = F), (F = l.minY)),
								o && ((l.minRotation = ut), (l.maxRotation = nt)),
								(tt = !0)),
						i.liveSnap &&
							((w = i.liveSnap === !0 ? i.snap || {} : i.liveSnap),
							(k = yr(w) || Ki(w)),
							o
								? ((ft = se(k ? w : w.rotation, ut, nt, 1)), (et = null))
								: w.points
									? (W = Gt(
											k ? w : w.points,
											ut,
											nt,
											F,
											I,
											w.radius,
											R ? -1 : 1,
										))
									: (f &&
											(ft = se(
												k ? w : w.x || w.left || w.scrollLeft,
												ut,
												nt,
												R ? -1 : 1,
											)),
										d &&
											(et = se(
												k ? w : w.y || w.top || w.scrollTop,
												F,
												I,
												R ? -1 : 1,
											))));
				},
				_i = function () {
					(l.isThrowing = !1), Zt(l, "throwcomplete", "onThrowComplete");
				},
				At = function () {
					l.isThrowing = !1;
				},
				Si = function (v, q) {
					var w, k, z, A;
					v && yi
						? (v === !0 &&
								((w = i.snap || i.liveSnap || {}),
								(k = yr(w) || Ki(w)),
								(v = {
									resistance:
										(i.throwResistance || i.resistance || 1e3) / (o ? 10 : 1),
								}),
								o
									? (v.rotation = Co(l, k ? w : w.rotation, nt, ut, 1, q))
									: (f &&
											(v[c] = Co(
												l,
												k ? w : w.points || w.x || w.left,
												nt,
												ut,
												R ? -1 : 1,
												q || l.lockedAxis === "x",
											)),
										d &&
											(v[u] = Co(
												l,
												k ? w : w.points || w.y || w.top,
												I,
												F,
												R ? -1 : 1,
												q || l.lockedAxis === "y",
											)),
										(w.points || (yr(w) && jr(w[0]))) &&
											((v.linkedProps = c + "," + u), (v.radius = w.radius)))),
							(l.isThrowing = !0),
							(A = isNaN(i.overshootTolerance)
								? i.edgeResistance === 1
									? 0
									: 1 - l.edgeResistance + 0.2
								: i.overshootTolerance),
							v.duration ||
								(v.duration = {
									max: Math.max(
										i.minDuration || 0,
										"maxDuration" in i ? i.maxDuration : 2,
									),
									min: isNaN(i.minDuration)
										? A === 0 || (jr(v) && v.resistance > 1e3)
											? 0
											: 0.5
										: i.minDuration,
									overshoot: A,
								}),
							(l.tween = z =
								Tt.to(R || e, {
									inertia: v,
									data: "_draggable",
									inherit: !1,
									onComplete: _i,
									onInterrupt: At,
									onUpdate: i.fastMode ? Zt : Pt,
									onUpdateParams: i.fastMode
										? [l, "onthrowupdate", "onThrowUpdate"]
										: w && w.radius
											? [!1, !0]
											: [],
								})),
							i.fastMode ||
								(R && (R._skip = !0),
								z.render(1e9, !0, !0),
								Pt(!0, !0),
								(l.endX = l.x),
								(l.endY = l.y),
								o && (l.endRotation = l.x),
								z.play(0),
								Pt(!0, !0),
								R && (R._skip = !1)))
						: tt && l.applyBounds();
				},
				Ue = function (v) {
					var q = st,
						w;
					(st = vn(e.parentNode, !0)),
						v &&
							l.isPressed &&
							!st.equals(q || new Nn()) &&
							((w = q.inverse().apply({ x: Y, y: X })),
							st.apply(w, w),
							(Y = w.x),
							(X = w.y)),
						st.equals(th) && (st = null);
				},
				Ke = function () {
					var v = 1 - l.edgeResistance,
						q = E ? nr(N) : 0,
						w = E ? ir(N) : 0,
						k,
						z,
						A;
					s &&
						((O.x = L(c, "px") + "px"),
						(O.y = L(u, "px") + "px"),
						O.renderTransform()),
						Ue(!1),
						(li.x = l.pointerX - q),
						(li.y = l.pointerY - w),
						st && st.apply(li, li),
						(Y = li.x),
						(X = li.y),
						K && (xe(l.pointerX, l.pointerY), Wt(!0)),
						(Ge = vn(e)),
						R
							? (ge(), (H = R.top()), (V = R.left()))
							: (ze() ? (Pt(!0, !0), ge()) : l.applyBounds(),
								o
									? ((k = e.ownerSVGElement
											? [O.xOrigin - e.getBBox().x, O.yOrigin - e.getBBox().y]
											: (os(e)[la] || "0 0").split(" ")),
										(U = l.rotationOrigin =
											vn(e).apply({
												x: parseFloat(k[0]) || 0,
												y: parseFloat(k[1]) || 0,
											})),
										Pt(!0, !0),
										(z = l.pointerX - U.x - q),
										(A = U.y - l.pointerY + w),
										(V = l.x),
										(H = l.y = Math.atan2(A, z) * Pl))
									: ((H = L(u, "px")), (V = L(c, "px")))),
						tt &&
							v &&
							(V > nt
								? (V = nt + (V - nt) / v)
								: V < ut && (V = ut - (ut - V) / v),
							o ||
								(H > I
									? (H = I + (H - I) / v)
									: H < F && (H = F - (F - H) / v))),
						(l.startX = V = Wi(V)),
						(l.startY = H = Wi(H));
				},
				ze = function () {
					return l.tween && l.tween.isActive();
				},
				Qe = function () {
					zi.parentNode &&
						!ze() &&
						!l.isDragging &&
						zi.parentNode.removeChild(zi);
				},
				Ce = function (v, q) {
					var w;
					if (
						!D ||
						l.isPressed ||
						!v ||
						((v.type === "mousedown" || v.type === "pointerdown") &&
							!q &&
							Gi() - M < 30 &&
							ss[l.pointerEvent.type])
					) {
						Rt && v && D && ai(v);
						return;
					}
					if (
						((Et = ze()),
						(Be = !1),
						(l.pointerEvent = v),
						ss[v.type]
							? ((ot = ~v.type.indexOf("touch")
									? v.currentTarget || v.target
									: N),
								le(ot, "touchend", Ft),
								le(ot, "touchmove", dt),
								le(ot, "touchcancel", Ft),
								le(N, "touchstart", Ll))
							: ((ot = null), le(N, "mousemove", dt)),
						(Mt = null),
						(!Ns || !ot) &&
							(le(N, "mouseup", Ft),
							v && v.target && le(v.target, "mouseup", Ft)),
						(Z = C.call(l, v.target) && i.dragClickables === !1 && !q),
						Z)
					) {
						le(v.target, "change", Ft),
							Zt(l, "pressInit", "onPressInit"),
							Zt(l, "press", "onPress"),
							Ms(g, !0),
							(Rt = !1);
						return;
					}
					if (
						((P =
							!ot ||
							f === d ||
							l.vars.allowNativeTouchScrolling === !1 ||
							(l.vars.allowContextMenu && v && (v.ctrlKey || v.which > 2))
								? !1
								: f
									? "y"
									: "x"),
						(Rt = !P && !l.allowEventDefault),
						Rt && (ai(v), le(It, "touchforcechange", ai)),
						v.changedTouches
							? ((v = G = v.changedTouches[0]), (J = v.identifier))
							: v.pointerId
								? (J = v.pointerId)
								: (G = J = null),
						Zs++,
						rh(Wt),
						(X = l.pointerY = v.pageY),
						(Y = l.pointerX = v.pageX),
						Zt(l, "pressInit", "onPressInit"),
						(P || l.autoScroll) && Oo(e.parentNode),
						e.parentNode &&
							l.autoScroll &&
							!R &&
							!o &&
							e.parentNode._gsMaxScrollX &&
							!zi.parentNode &&
							!e.getBBox &&
							((zi.style.width = e.parentNode.scrollWidth + "px"),
							e.parentNode.appendChild(zi)),
						Ke(),
						l.tween && l.tween.kill(),
						(l.isThrowing = !1),
						Tt.killTweensOf(R || e, h, !0),
						R && Tt.killTweensOf(e, { scrollTo: 1 }, !0),
						(l.tween = l.lockedAxis = null),
						(i.zIndexBoost || (!o && !R && i.zIndexBoost !== !1)) &&
							(e.style.zIndex = t.zIndex++),
						(l.isPressed = !0),
						(gt = !!(i.onDrag || l._listeners.drag)),
						(T = !!(i.onMove || l._listeners.move)),
						i.cursor !== !1 || i.activeCursor)
					)
						for (w = g.length; --w > -1; )
							Tt.set(g[w], {
								cursor:
									i.activeCursor ||
									i.cursor ||
									(Er === "grab" ? "grabbing" : Er),
							});
					Zt(l, "press", "onPress");
				},
				dt = function (v) {
					var q = v,
						w,
						k,
						z,
						A,
						j,
						B;
					if (!D || Xa || !l.isPressed || !v) {
						Rt && v && D && ai(v);
						return;
					}
					if (((l.pointerEvent = v), (w = v.changedTouches), w)) {
						if (((v = w[0]), v !== G && v.identifier !== J)) {
							for (
								A = w.length;
								--A > -1 && (v = w[A]).identifier !== J && v.target !== e;

							);
							if (A < 0) return;
						}
					} else if (v.pointerId && J && v.pointerId !== J) return;
					if (
						ot &&
						P &&
						!Mt &&
						((li.x = v.pageX - (E ? nr(N) : 0)),
						(li.y = v.pageY - (E ? ir(N) : 0)),
						st && st.apply(li, li),
						(k = li.x),
						(z = li.y),
						(j = Math.abs(k - Y)),
						(B = Math.abs(z - X)),
						((j !== B && (j > p || B > p)) || (Cr && P === Mt)) &&
							((Mt = j > B && f ? "x" : "y"),
							P && Mt !== P && le(It, "touchforcechange", ai),
							l.vars.lockAxisOnTouchScroll !== !1 &&
								f &&
								d &&
								((l.lockedAxis = Mt === "x" ? "y" : "x"),
								Ki(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, q)),
							Cr && P === Mt))
					) {
						Ft(q);
						return;
					}
					!l.allowEventDefault &&
					(!P || (Mt && P !== Mt)) &&
					q.cancelable !== !1
						? (ai(q), (Rt = !0))
						: Rt && (Rt = !1),
						l.autoScroll && (_ = !0),
						xe(v.pageX, v.pageY, T);
				},
				xe = function (v, q, w) {
					var k = 1 - l.dragResistance,
						z = 1 - l.edgeResistance,
						A = l.pointerX,
						j = l.pointerY,
						B = H,
						Q = l.x,
						ct = l.y,
						rt = l.endX,
						_t = l.endY,
						Dt = l.endRotation,
						Ot = K,
						vt,
						wt,
						Ct,
						pt,
						_e,
						Ut;
					(l.pointerX = v),
						(l.pointerY = q),
						E && ((v -= nr(N)), (q -= ir(N))),
						o
							? ((pt = Math.atan2(U.y - q, v - U.x) * Pl),
								(_e = l.y - pt),
								_e > 180
									? ((H -= 360), (l.y = pt))
									: _e < -180 && ((H += 360), (l.y = pt)),
								l.x !== V || Math.abs(H - pt) > p
									? ((l.y = pt), (Ct = V + (H - pt) * k))
									: (Ct = V))
							: (st &&
									((Ut = v * st.a + q * st.c + st.e),
									(q = v * st.b + q * st.d + st.f),
									(v = Ut)),
								(wt = q - X),
								(vt = v - Y),
								wt < p && wt > -p && (wt = 0),
								vt < p && vt > -p && (vt = 0),
								(l.lockAxis || l.lockedAxis) &&
									(vt || wt) &&
									((Ut = l.lockedAxis),
									Ut ||
										((l.lockedAxis = Ut =
											f && Math.abs(vt) > Math.abs(wt) ? "y" : d ? "x" : null),
										Ut &&
											Ki(l.vars.onLockAxis) &&
											l.vars.onLockAxis.call(l, l.pointerEvent)),
									Ut === "y" ? (wt = 0) : Ut === "x" && (vt = 0)),
								(Ct = Wi(V + vt * k)),
								(pt = Wi(H + wt * k))),
						(ft || et || W) &&
							(l.x !== Ct || (l.y !== pt && !o)) &&
							(W &&
								((Xn.x = Ct),
								(Xn.y = pt),
								(Ut = W(Xn)),
								(Ct = Wi(Ut.x)),
								(pt = Wi(Ut.y))),
							ft && (Ct = Wi(ft(Ct))),
							et && (pt = Wi(et(pt)))),
						tt &&
							(Ct > nt
								? (Ct = nt + Math.round((Ct - nt) * z))
								: Ct < ut && (Ct = ut + Math.round((Ct - ut) * z)),
							o ||
								(pt > I
									? (pt = Math.round(I + (pt - I) * z))
									: pt < F && (pt = Math.round(F + (pt - F) * z)))),
						(l.x !== Ct || (l.y !== pt && !o)) &&
							(o
								? ((l.endRotation = l.x = l.endX = Ct), (K = !0))
								: (d && ((l.y = l.endY = pt), (K = !0)),
									f && ((l.x = l.endX = Ct), (K = !0))),
							!w || Zt(l, "move", "onMove") !== !1
								? !l.isDragging &&
									l.isPressed &&
									((l.isDragging = Be = !0), Zt(l, "dragstart", "onDragStart"))
								: ((l.pointerX = A),
									(l.pointerY = j),
									(H = B),
									(l.x = Q),
									(l.y = ct),
									(l.endX = rt),
									(l.endY = _t),
									(l.endRotation = Dt),
									(K = Ot)));
				},
				Ft = function at(v, q) {
					if (
						!D ||
						!l.isPressed ||
						(v &&
							J != null &&
							!q &&
							((v.pointerId && v.pointerId !== J && v.target !== e) ||
								(v.changedTouches && !oh(v.changedTouches, J))))
					) {
						Rt && v && D && ai(v);
						return;
					}
					l.isPressed = !1;
					var w = v,
						k = l.isDragging,
						z = l.vars.allowContextMenu && v && (v.ctrlKey || v.which > 2),
						A = Tt.delayedCall(0.001, Qe),
						j,
						B,
						Q,
						ct,
						rt;
					if (
						(ot
							? (ee(ot, "touchend", at),
								ee(ot, "touchmove", dt),
								ee(ot, "touchcancel", at),
								ee(N, "touchstart", Ll))
							: ee(N, "mousemove", dt),
						ee(It, "touchforcechange", ai),
						(!Ns || !ot) &&
							(ee(N, "mouseup", at),
							v && v.target && ee(v.target, "mouseup", at)),
						(K = !1),
						k && ((m = Cl = Gi()), (l.isDragging = !1)),
						Al(Wt),
						Z && !z)
					) {
						v && (ee(v.target, "change", at), (l.pointerEvent = w)),
							Ms(g, !1),
							Zt(l, "release", "onRelease"),
							Zt(l, "click", "onClick"),
							(Z = !1);
						return;
					}
					for (B = g.length; --B > -1; )
						Po(g[B], "cursor", i.cursor || (i.cursor !== !1 ? Er : null));
					if ((Zs--, v)) {
						if (
							((j = v.changedTouches),
							j && ((v = j[0]), v !== G && v.identifier !== J))
						) {
							for (
								B = j.length;
								--B > -1 && (v = j[B]).identifier !== J && v.target !== e;

							);
							if (B < 0 && !q) return;
						}
						(l.pointerEvent = w),
							(l.pointerX = v.pageX),
							(l.pointerY = v.pageY);
					}
					return (
						z && w
							? (ai(w), (Rt = !0), Zt(l, "release", "onRelease"))
							: w && !k
								? ((Rt = !1),
									Et && (i.snap || i.bounds) && Si(i.inertia || i.throwProps),
									Zt(l, "release", "onRelease"),
									(!Cr || w.type !== "touchmove") &&
										w.type.indexOf("cancel") === -1 &&
										(Zt(l, "click", "onClick"),
										Gi() - M < 300 && Zt(l, "doubleclick", "onDoubleClick"),
										(ct = w.target || e),
										(M = Gi()),
										(rt = function () {
											M !== ue &&
												l.enabled() &&
												!l.isPressed &&
												!w.defaultPrevented &&
												(ct.click
													? ct.click()
													: N.createEvent &&
														((Q = N.createEvent("MouseEvents")),
														Q.initMouseEvent(
															"click",
															!0,
															!0,
															It,
															1,
															l.pointerEvent.screenX,
															l.pointerEvent.screenY,
															l.pointerX,
															l.pointerY,
															!1,
															!1,
															!1,
															!1,
															0,
															null,
														),
														ct.dispatchEvent(Q)));
										}),
										!Cr && !w.defaultPrevented && Tt.delayedCall(0.05, rt)))
								: (Si(i.inertia || i.throwProps),
									!l.allowEventDefault &&
									w &&
									(i.dragClickables !== !1 || !C.call(l, w.target)) &&
									k &&
									(!P || (Mt && P === Mt)) &&
									w.cancelable !== !1
										? ((Rt = !0), ai(w))
										: (Rt = !1),
									Zt(l, "release", "onRelease")),
						ze() && A.duration(l.tween.duration()),
						k && Zt(l, "dragend", "onDragEnd"),
						!0
					);
				},
				we = function (v) {
					if (v && l.isDragging && !R) {
						var q = v.target || e.parentNode,
							w = q.scrollLeft - q._gsScrollX,
							k = q.scrollTop - q._gsScrollY;
						(w || k) &&
							(st
								? ((Y -= w * st.a + k * st.c), (X -= k * st.d + w * st.b))
								: ((Y -= w), (X -= k)),
							(q._gsScrollX += w),
							(q._gsScrollY += k),
							xe(l.pointerX, l.pointerY));
					}
				},
				qe = function (v) {
					var q = Gi(),
						w = q - M < 100,
						k = q - m < 50,
						z = w && ue === M,
						A = l.pointerEvent && l.pointerEvent.defaultPrevented,
						j = w && kt === M,
						B = v.isTrusted || (v.isTrusted == null && w && z);
					if (
						((z || (k && l.vars.suppressClickOnDrag !== !1)) &&
							v.stopImmediatePropagation &&
							v.stopImmediatePropagation(),
						w &&
							!(l.pointerEvent && l.pointerEvent.defaultPrevented) &&
							(!z || (B && !j)))
					) {
						B && z && (kt = M), (ue = M);
						return;
					}
					(l.isPressed || k || w) && (!B || !v.detail || !w || A) && ai(v),
						!w &&
							!k &&
							!Be &&
							(v && v.target && (l.pointerEvent = v),
							Zt(l, "click", "onClick"));
				},
				Mi = function (v) {
					return st
						? {
								x: v.x * st.a + v.y * st.c + st.e,
								y: v.x * st.b + v.y * st.d + st.f,
							}
						: { x: v.x, y: v.y };
				};
			return (
				(lt = t.get(e)),
				lt && lt.kill(),
				(n.startDrag = function (at, v) {
					var q, w, k, z;
					Ce(at || l.pointerEvent, !0),
						v &&
							!l.hitTest(at || l.pointerEvent) &&
							((q = Hn(at || l.pointerEvent)),
							(w = Hn(e)),
							(k = Mi({ x: q.left + q.width / 2, y: q.top + q.height / 2 })),
							(z = Mi({ x: w.left + w.width / 2, y: w.top + w.height / 2 })),
							(Y -= k.x - z.x),
							(X -= k.y - z.y)),
						l.isDragging ||
							((l.isDragging = Be = !0), Zt(l, "dragstart", "onDragStart"));
				}),
				(n.drag = dt),
				(n.endDrag = function (at) {
					return Ft(at || l.pointerEvent, !0);
				}),
				(n.timeSinceDrag = function () {
					return l.isDragging ? 0 : (Gi() - m) / 1e3;
				}),
				(n.timeSinceClick = function () {
					return (Gi() - M) / 1e3;
				}),
				(n.hitTest = function (at, v) {
					return t.hitTest(l.target, at, v);
				}),
				(n.getDirection = function (at, v) {
					var q =
							at === "velocity" && yi ? at : jr(at) && !o ? "element" : "start",
						w,
						k,
						z,
						A,
						j,
						B;
					return (
						q === "element" && ((j = Hn(l.target)), (B = Hn(at))),
						(w =
							q === "start"
								? l.x - V
								: q === "velocity"
									? yi.getVelocity(e, c)
									: j.left + j.width / 2 - (B.left + B.width / 2)),
						o
							? w < 0
								? "counter-clockwise"
								: "clockwise"
							: ((v = v || 2),
								(k =
									q === "start"
										? l.y - H
										: q === "velocity"
											? yi.getVelocity(e, u)
											: j.top + j.height / 2 - (B.top + B.height / 2)),
								(z = Math.abs(w / k)),
								(A = z < 1 / v ? "" : w < 0 ? "left" : "right"),
								z < v && (A !== "" && (A += "-"), (A += k < 0 ? "up" : "down")),
								A)
					);
				}),
				(n.applyBounds = function (at, v) {
					var q, w, k, z, A, j;
					if (at && i.bounds !== at) return (i.bounds = at), l.update(!0, v);
					if ((Pt(!0), ge(), tt && !ze())) {
						if (
							((q = l.x),
							(w = l.y),
							q > nt ? (q = nt) : q < ut && (q = ut),
							w > I ? (w = I) : w < F && (w = F),
							(l.x !== q || l.y !== w) &&
								((k = !0),
								(l.x = l.endX = q),
								o ? (l.endRotation = q) : (l.y = l.endY = w),
								(K = !0),
								Wt(!0),
								l.autoScroll && !l.isDragging))
						)
							for (
								Oo(e.parentNode),
									z = e,
									Fi.scrollTop =
										It.pageYOffset != null
											? It.pageYOffset
											: N.documentElement.scrollTop != null
												? N.documentElement.scrollTop
												: N.body.scrollTop,
									Fi.scrollLeft =
										It.pageXOffset != null
											? It.pageXOffset
											: N.documentElement.scrollLeft != null
												? N.documentElement.scrollLeft
												: N.body.scrollLeft;
								z && !j;

							)
								(j = ur(z.parentNode)),
									(A = j ? Fi : z.parentNode),
									d &&
										A.scrollTop > A._gsMaxScrollY &&
										(A.scrollTop = A._gsMaxScrollY),
									f &&
										A.scrollLeft > A._gsMaxScrollX &&
										(A.scrollLeft = A._gsMaxScrollX),
									(z = A);
						l.isThrowing &&
							(k || l.endX > nt || l.endX < ut || l.endY > I || l.endY < F) &&
							Si(i.inertia || i.throwProps, k);
					}
					return l;
				}),
				(n.update = function (at, v, q) {
					if (v && l.isPressed) {
						var w = vn(e),
							k = Ge.apply({ x: l.x - V, y: l.y - H }),
							z = vn(e.parentNode, !0);
						z.apply({ x: w.e - k.x, y: w.f - k.y }, k),
							(l.x -= k.x - z.e),
							(l.y -= k.y - z.f),
							Wt(!0),
							Ke();
					}
					var A = l.x,
						j = l.y;
					return (
						Ue(!v),
						at ? l.applyBounds() : (K && q && Wt(!0), Pt(!0)),
						v && (xe(l.pointerX, l.pointerY), K && Wt(!0)),
						l.isPressed &&
							!v &&
							((f && Math.abs(A - l.x) > 0.01) ||
								(d && Math.abs(j - l.y) > 0.01 && !o)) &&
							Ke(),
						l.autoScroll &&
							(Oo(e.parentNode, l.isDragging),
							(_ = l.isDragging),
							Wt(!0),
							Rl(e, we),
							Il(e, we)),
						l
					);
				}),
				(n.enable = function (at) {
					var v = { lazy: !0 },
						q,
						w,
						k;
					if (
						(i.cursor !== !1 && (v.cursor = i.cursor || Er),
						Tt.utils.checkPrefix("touchCallout") && (v.touchCallout = "none"),
						at !== "soft")
					) {
						for (
							El(
								g,
								f === d
									? "none"
									: (i.allowNativeTouchScrolling &&
												(e.scrollHeight === e.clientHeight) ==
													(e.scrollWidth === e.clientHeight)) ||
										  i.allowEventDefault
										? "manipulation"
										: f
											? "pan-y"
											: "pan-x",
							),
								w = g.length;
							--w > -1;

						)
							(k = g[w]),
								Ns || le(k, "mousedown", Ce),
								le(k, "touchstart", Ce),
								le(k, "click", qe, !0),
								Tt.set(k, v),
								k.getBBox &&
									k.ownerSVGElement &&
									f !== d &&
									Tt.set(k.ownerSVGElement, {
										touchAction:
											i.allowNativeTouchScrolling || i.allowEventDefault
												? "manipulation"
												: f
													? "pan-y"
													: "pan-x",
									}),
								i.allowContextMenu || le(k, "contextmenu", Ht);
						Ms(g, !1);
					}
					return (
						Il(e, we),
						(D = !0),
						yi &&
							at !== "soft" &&
							yi.track(R || e, s ? "x,y" : o ? "rotation" : "top,left"),
						(e._gsDragID = q = "d" + eh++),
						(er[q] = l),
						R && (R.enable(), (R.element._gsDragID = q)),
						(i.bounds || o) && Ke(),
						i.bounds && l.applyBounds(),
						l
					);
				}),
				(n.disable = function (at) {
					for (var v = l.isDragging, q = g.length, w; --q > -1; )
						Po(g[q], "cursor", null);
					if (at !== "soft") {
						for (El(g, null), q = g.length; --q > -1; )
							(w = g[q]),
								Po(w, "touchCallout", null),
								ee(w, "mousedown", Ce),
								ee(w, "touchstart", Ce),
								ee(w, "click", qe, !0),
								ee(w, "contextmenu", Ht);
						Ms(g, !0),
							ot &&
								(ee(ot, "touchcancel", Ft),
								ee(ot, "touchend", Ft),
								ee(ot, "touchmove", dt)),
							ee(N, "mouseup", Ft),
							ee(N, "mousemove", dt);
					}
					return (
						Rl(e, we),
						(D = !1),
						yi &&
							at !== "soft" &&
							(yi.untrack(R || e, s ? "x,y" : o ? "rotation" : "top,left"),
							l.tween && l.tween.kill()),
						R && R.disable(),
						Al(Wt),
						(l.isDragging = l.isPressed = Z = !1),
						v && Zt(l, "dragend", "onDragEnd"),
						l
					);
				}),
				(n.enabled = function (at, v) {
					return arguments.length ? (at ? l.enable(v) : l.disable(v)) : D;
				}),
				(n.kill = function () {
					return (
						(l.isThrowing = !1),
						l.tween && l.tween.kill(),
						l.disable(),
						Tt.set(g, { clearProps: "userSelect" }),
						delete er[e._gsDragID],
						l
					);
				}),
				(n.revert = function () {
					this.kill(), this.styles && this.styles.revert();
				}),
				~r.indexOf("scroll") &&
					((R = n.scrollProxy =
						new fh(
							e,
							nh(
								{
									onKill: function () {
										l.isPressed && Ft(null);
									},
								},
								i,
							),
						)),
					(e.style.overflowY = d && !oa ? "auto" : "hidden"),
					(e.style.overflowX = f && !oa ? "auto" : "hidden"),
					(e = R.content)),
				o ? (h.rotation = 1) : (f && (h[c] = 1), d && (h[u] = 1)),
				(O.force3D = "force3D" in i ? i.force3D : !0),
				Su(Ol(n)),
				n.enable(),
				n
			);
		}
		return (
			(t.register = function (i) {
				(Tt = i), Eo();
			}),
			(t.create = function (i, n) {
				return (
					sa || Eo(!0),
					nn(i).map(function (r) {
						return new t(r, n);
					})
				);
			}),
			(t.get = function (i) {
				return er[(nn(i)[0] || {})._gsDragID];
			}),
			(t.timeSinceDrag = function () {
				return (Gi() - Cl) / 1e3;
			}),
			(t.hitTest = function (i, n, r) {
				if (i === n) return !1;
				var s = Hn(i),
					o = Hn(n),
					c = s.top,
					u = s.left,
					f = s.right,
					d = s.bottom,
					p = s.width,
					l = s.height,
					g = o.left > f || o.right < u || o.top > d || o.bottom < c,
					h,
					m,
					_;
				return g || !r
					? !g
					: ((_ = (r + "").indexOf("%") !== -1),
						(r = parseFloat(r) || 0),
						(h = { left: Math.max(u, o.left), top: Math.max(c, o.top) }),
						(h.width = Math.min(f, o.right) - h.left),
						(h.height = Math.min(d, o.bottom) - h.top),
						h.width < 0 || h.height < 0
							? !1
							: _
								? ((r *= 0.01),
									(m = h.width * h.height),
									m >= p * l * r || m >= o.width * o.height * r)
								: h.width > r && h.height > r);
			}),
			t
		);
	})(dh);
sh(fr.prototype, {
	pointerX: 0,
	pointerY: 0,
	startX: 0,
	startY: 0,
	deltaX: 0,
	deltaY: 0,
	isDragging: !1,
	isPressed: !1,
});
fr.zIndex = 1e3;
fr.version = "3.12.5";
Du() && Tt.registerPlugin(fr);
const ht = "power4.inOut",
	Bl = "expo.inOut",
	Xe = (a, t = !0, e = 0) => (t ? e : a);
function hh(a, t) {
	(a = $.utils.toArray(a)), (t = t || {});
	let e = t.onChange,
		i = 0,
		n = $.timeline({
			repeat: t.repeat,
			onUpdate:
				e &&
				function () {
					let D = n.closestIndex();
					i !== D && ((i = D), e(a[D], D));
				},
			paused: t.paused,
			defaults: { ease: "none" },
			onReverseComplete: () => n.totalTime(n.rawTime() + n.duration() * 100),
		}),
		r = a.length,
		s = a[0].offsetLeft,
		o = [],
		c = [],
		u = [],
		f = [],
		d = 0,
		p = !1,
		l = t.center,
		g = (t.speed || 1) * 100,
		h = t.snap === !1 ? (D) => D : $.utils.snap(t.snap || 1),
		m = 0,
		_ = l === !0 ? a[0].parentNode : $.utils.toArray(l)[0] || a[0].parentNode,
		y,
		S = () =>
			a[r - 1].offsetLeft +
			(f[r - 1] / 100) * c[r - 1] -
			s +
			u[0] +
			a[r - 1].offsetWidth * $.getProperty(a[r - 1], "scaleX") +
			(parseFloat(t.paddingRight) || 0),
		x = () => {
			let D = _.getBoundingClientRect(),
				R;
			a.forEach((Y, X) => {
				(c[X] = parseFloat($.getProperty(Y, "width", "px"))),
					(f[X] = h(
						(parseFloat($.getProperty(Y, "x", "px")) / c[X]) * 100 +
							$.getProperty(Y, "xPercent"),
					)),
					(R = Y.getBoundingClientRect()),
					(u[X] = R.left - (X ? D.right : D.left)),
					(D = R);
			}),
				$.set(a, { xPercent: (Y) => f[Y] }),
				(y = S());
		},
		b,
		C = () => {
			(m = l ? (n.duration() * (_.offsetWidth / 2)) / y : 0),
				l &&
					o.forEach((D, R) => {
						o[R] = b(n.labels["label" + R] + (n.duration() * c[R]) / 2 / y - m);
					});
		},
		M = (D, R, Y) => {
			let X = D.length,
				V = 1e10,
				H = 0,
				tt;
			for (; X--; )
				(tt = Math.abs(D[X] - R)),
					tt > Y / 2 && (tt = Y - tt),
					tt < V && ((V = tt), (H = X));
			return H;
		},
		O = () => {
			let D, R, Y, X, V;
			for (n.clear(), D = 0; D < r; D++)
				(R = a[D]),
					(Y = (f[D] / 100) * c[D]),
					(X = R.offsetLeft + Y - s + u[0]),
					(V = X + c[D] * $.getProperty(R, "scaleX")),
					n
						.to(R, { xPercent: h(((Y - V) / c[D]) * 100), duration: V / g }, 0)
						.fromTo(
							R,
							{ xPercent: h(((Y - V + y) / c[D]) * 100) },
							{
								xPercent: f[D],
								duration: (Y - V + y - Y) / g,
								immediateRender: !1,
							},
							V / g,
						)
						.add("label" + D, X / g),
					(o[D] = X / g);
			b = $.utils.wrap(0, n.duration());
		},
		E = (D) => {
			let R = n.progress();
			n.progress(0, !0),
				x(),
				D && O(),
				C(),
				D && n.draggable ? n.time(o[d], !0) : n.progress(R, !0);
		},
		L;
	$.set(a, { x: 0 }),
		x(),
		O(),
		C(),
		window.addEventListener("resize", () => E(!0));
	function N(D, R) {
		(R = R || {}), Math.abs(D - d) > r / 2 && (D += D > d ? -r : r);
		let Y = $.utils.wrap(0, r, D),
			X = o[Y];
		return (
			X > n.time() != D > d &&
				D !== d &&
				(X += n.duration() * (D > d ? 1 : -1)),
			(X < 0 || X > n.duration()) && (R.modifiers = { time: b }),
			(d = Y),
			(R.overwrite = !0),
			$.killTweensOf(L),
			R.duration === 0 ? n.time(b(X)) : n.tweenTo(X, R)
		);
	}
	if (
		((n.toIndex = (D, R) => N(D, R)),
		(n.closestIndex = (D) => {
			let R = M(o, n.time(), n.duration());
			return D && ((d = R), (p = !1)), R;
		}),
		(n.current = () => (p ? n.closestIndex(!0) : d)),
		(n.next = (D) => N(n.current() + 1, D)),
		(n.previous = (D) => N(n.current() - 1, D)),
		(n.times = o),
		n.progress(1, !0).progress(0, !0),
		t.reversed && (n.vars.onReverseComplete(), n.reverse()),
		t.draggable && typeof fr == "function")
	) {
		L = document.createElement("div");
		let D = $.utils.wrap(0, 1),
			R,
			Y,
			X,
			V,
			H,
			tt = () => n.progress(D(Y + (X.startX - X.x) * R)),
			gt = () => n.closestIndex(!0);
		typeof InertiaPlugin > "u" &&
			console.warn(
				"InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club",
			),
			(X = fr.create(L, {
				trigger: a[0].parentNode,
				type: "x",
				onPressInit() {
					let T = this.x;
					$.killTweensOf(n),
						(Y = n.progress()),
						E(),
						(R = 1 / y),
						(H = Y / -R - T),
						$.set(L, { x: Y / -R });
				},
				onDrag: tt,
				onThrowUpdate: tt,
				overshootTolerance: 0,
				inertia: !0,
				snap(T) {
					if (Math.abs(Y / -R - this.x) < 10) return V + H;
					let nt = -(T * R) * n.duration(),
						ut = b(nt),
						I = o[M(o, ut, n.duration())],
						F = I - ut;
					return (
						Math.abs(F) > n.duration() / 2 &&
							(F += F < 0 ? n.duration() : -n.duration()),
						(V = (nt + F) / n.duration() / -R),
						V
					);
				},
				onRelease() {
					gt(), X.isThrowing && (p = !0);
				},
				onThrowComplete: gt,
			})[0]),
			(n.draggable = X);
	}
	return n.closestIndex(!0), (i = d), e && e(a[d], d), n;
}
const ko = 66,
	zl = 5e3;
class ph {
	constructor() {
		Nt(this, "onVisibilityChange", () => {
			var e, i;
			const t =
				(i = (e = this.instance) == null ? void 0 : e.plugins()) == null
					? void 0
					: i.autoplay;
			document.visibilityState === "visible"
				? (this.progressTl.restart(),
					this.progressTl.play(),
					t.reset(),
					t.play())
				: (this.progressTl.pause(), t.stop());
		});
		Nt(this, "onSlideCtaClick", (t) => {
			const e = t.currentTarget,
				i = e.closest(".js-features-carousel-item");
			if ((t.preventDefault(), i.classList.contains("is-active"))) {
				const n = e.getAttribute("href"),
					r = document.querySelector(`${n}`);
				r && yu(r, 150);
			} else this.instance.scrollTo(parseInt(i.dataset.index, 10));
		});
		Nt(this, "onSlideChange", () => {
			var s, o;
			const t =
					(o = (s = this.instance) == null ? void 0 : s.plugins()) == null
						? void 0
						: o.autoplay,
				e = this.instance.previousScrollSnap();
			this.activeIndex = this.instance.selectedScrollSnap();
			const i = this.DOM.slides[e],
				n = this.DOM.slides[this.activeIndex];
			$.timeline({
				onStart: () => {
					this.DOM.wrap.classList.add("is-animate"),
						t.stop(),
						this.progressTl.pause();
				},
				onComplete: () => {
					t.play(),
						this.progressTl.restart(),
						this.DOM.wrap.classList.remove("is-animate");
				},
			})
				.add(this.outSlide(i))
				.add(this.inSlide(n), "<");
		});
		Nt(this, "outSlide", (t) => {
			const e = t.querySelector(".js-features-carousel-item-text"),
				i = t.querySelector(".js-features-carousel-ill"),
				n = $.timeline({
					onStart: () => {
						t.classList.remove("is-active");
					},
				});
			return (
				Kt.device < 1
					? n
							.to(t, {
								opacity: 0,
								xPercent: -200,
								rotate: -5,
								duration: 0.8,
								ease: ht,
								onComplete: () => {
									$.set(t, { xPercent: 0, rotate: 5 });
								},
							})
							.to(i, { opacity: 0, duration: 0.8, ease: ht }, "-=0.67")
					: n
							.to(t, { height: ko, duration: 0.8, ease: ht })
							.to(i, { opacity: 0, duration: 0.4, ease: ht }, "-=0.8")
							.to(
								e,
								{ opacity: 0, height: 0, duration: 0.8, ease: ht },
								"-=0.8",
							),
				n
			);
		});
		Nt(this, "inSlide", (t, e = !1) => {
			const i = t.querySelector(".js-features-carousel-item-text"),
				n = t.querySelector(".js-features-carousel-ill"),
				r = $.timeline({
					onStart: () => {
						t.classList.add("is-active");
					},
				});
			return (
				Kt.device < 1
					? r
							.to(t, {
								opacity: 1,
								xPercent: -100,
								rotate: 0,
								duration: Xe(0.8, e),
								ease: ht,
							})
							.to(
								n,
								{ opacity: 1, duration: Xe(0.8, e), ease: ht },
								Xe("-=0.67", e),
							)
					: r
							.to(t, {
								height: () => t.offsetWidth * this.hRatio,
								duration: Xe(0.8, e),
								ease: ht,
							})
							.to(
								i,
								{ opacity: 1, height: "auto", duration: Xe(0.8, e), ease: ht },
								Xe("-=0.67", e),
							)
							.to(
								n,
								{ opacity: 1, duration: Xe(0.8, e), ease: ht },
								Xe("-=0.67", e),
							),
				r
			);
		});
		Nt(this, "start", () => {
			var t, e, i;
			this.progressTl.play(),
				(i =
					(e = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: e.autoplay) == null || i.play(),
				document.addEventListener("visibilitychange", this.onVisibilityChange);
		});
		Nt(this, "hide", () => {
			const t = $.timeline();
			if (Kt.device < 1) {
				const e = this.DOM.slides[this.activeIndex],
					i = e.querySelectorAll(".js-features-carousel-content");
				t.set(e, { transformOrigin: "50% 100%", scale: 0, y: 30 })
					.set(i, { opacity: 0 })
					.set(this.DOM.progress, { opacity: 0, y: 20 });
			} else
				for (let e = 0; e < this.DOM.slides.length; e++) {
					const i = this.DOM.slides[e],
						n = i.querySelectorAll(".js-features-carousel-content");
					t.set(i, { transformOrigin: "50% 100%", opacity: 0, y: 30 })
						.set(n, { opacity: 0 })
						.set(this.DOM.progress, { opacity: 0, y: 20 });
				}
			return t;
		});
		Nt(this, "reveal", () => {
			const t = $.timeline();
			if (Kt.device < 1) {
				const e = this.DOM.slides[this.activeIndex],
					i = e.querySelectorAll(".js-features-carousel-content");
				t.to(e, { scale: 1, y: 0, duration: 0.8, ease: ht })
					.to(i, { opacity: 1, duration: 0.8, ease: ht }, "-=0.3")
					.to(
						this.DOM.progress,
						{ opacity: 1, y: 0, duration: 0.8, ease: ht },
						"-=0.8",
					);
			} else {
				const e = $.utils.toArray(this.DOM.slides).reverse();
				for (let i = 0; i < e.length; i++) {
					const n = $.timeline(),
						r = e[i],
						s = r.querySelectorAll(".js-features-carousel-content");
					n
						.to(r, { y: 0, opacity: 1, duration: 0.8, ease: ht })
						.set(s, { opacity: 1, duration: 0.8, ease: ht }, "-=0.3")
						.to(
							this.DOM.progress,
							{ opacity: 1, y: 0, duration: 0.8, ease: ht },
							"-=0.8",
						),
						t.add(n, i * 0.07);
				}
			}
			return t;
		});
		this.init();
	}
	setup() {
		(this.layoutMode = Kt.device < 1 ? "mobile" : "desktop"),
			(this.hRatio = Kt.device < 1 ? 1 : 0.72331),
			(this.instance = Ba(this.DOM.fakeCarousel, { loop: !0 }, [
				za({ delay: zl, playOnInit: !1 }),
			])),
			Kt.device < 1 &&
				($.set(this.DOM.slides, { opacity: 0, xPercent: 0, rotate: 5 }),
				$.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 })),
			this.inSlide(this.DOM.slides[this.activeIndex], !0),
			this.DOM.slides[this.activeIndex].classList.add("is-active"),
			this.instance.on("select", this.onSlideChange);
		for (let t = 0; t < this.DOM.ctas.length; t++)
			this.DOM.ctas[t].addEventListener("click", this.onSlideCtaClick);
		this.progressTl = $.timeline({ paused: !0 }).to(this.DOM.progressbar, {
			scaleX: 1,
			duration: zl / 1e3,
			ease: "linear",
		});
	}
	destroy() {
		var t, e;
		if (this.DOM) {
			((e = (t = this.instance) == null ? void 0 : t.plugins()) == null
				? void 0
				: e.autoplay
			).stop(),
				this.instance.off("select", this.onSlideChange),
				this.instance.destroy();
			for (let n = 0; n < this.DOM.ctas.length; n++)
				this.DOM.ctas[n].removeEventListener("click", this.onSlideCtaClick);
			document.removeEventListener("visibilitychange", this.onVisibilityChange),
				(this.instance = void 0),
				(this.DOM = void 0);
		}
	}
	resize() {
		var t, e;
		if (this.DOM) {
			if (
				((this.hRatio = Kt.device < 1 ? 1 : 0.72331),
				Kt.device < 1 && this.layoutMode !== "mobile"
					? ($.set(this.DOM.slides, {
							opacity: 0,
							xPercent: 0,
							rotate: 5,
							height: "auto",
						}),
						$.set(this.DOM.slides[this.activeIndex], {
							opacity: 1,
							xPercent: -100,
							rotate: 0,
						}),
						$.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 }))
					: Kt.device >= 1 && this.layoutMode !== "desktop"
						? ($.set(this.DOM.slides, {
								opacity: 1,
								xPercent: "none",
								rotate: 0,
								height: ko,
							}),
							$.set(this.DOM.slidesTexts, { height: 0, opacity: 0 }),
							$.set(this.DOM.slides[this.activeIndex], {
								height: (i, n) => n.offsetWidth * this.hRatio,
							}),
							$.set(this.DOM.slidesTexts[this.activeIndex], { height: "auto" }))
						: Kt.device >= 1 &&
							this.layoutMode === "desktop" &&
							$.set(this.DOM.slides, {
								height: (i) =>
									i === this.activeIndex
										? this.DOM.slides[i].offsetWidth * this.hRatio
										: ko,
							}),
				Kt.device >= 1 || (Kt.device < 1 && this.layoutMode !== "mobile"))
			) {
				const i =
					(e = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: e.autoplay;
				this.progressTl.pause(),
					i.reset(),
					i.play(),
					this.progressTl.restart(),
					this.progressTl.play();
			}
			this.layoutMode = Kt.device < 1 ? "mobile" : "desktop";
		}
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelector(".js-features-carousel");
		e &&
			((this.DOM = {}),
			(this.DOM.wrap = e),
			(this.DOM.fakeCarousel = this.DOM.wrap.querySelector(
				".js-time-carousel-viewport",
			)),
			(this.DOM.slides = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-item",
			)),
			(this.DOM.slidesTexts = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-item-text",
			)),
			(this.DOM.ctas = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-cta",
			)),
			(this.DOM.progress = this.DOM.wrap.querySelector(
				".js-features-carousel-progress",
			)),
			(this.DOM.progressbar = this.DOM.wrap.querySelector(
				".js-features-carousel-progressbar",
			)),
			(this.instance = void 0),
			(this.activeIndex = 0),
			this.setup());
	}
}
class gh {
	constructor() {
		this.instances = {};
	}
	add(t, e, i) {
		this.instances[t] = { key: t, instance: e, preserve: i };
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
			i = this.instances[t] ? this.instances[t].preserve : !1;
		e && !i && e.destroy && e.destroy();
	}
	destroyAll() {
		for (const t in this.instances) this.destroy(t);
	}
	map(t, ...e) {
		for (const i in this.instances) {
			const n = this.get(i);
			n[t] && n[t](...e);
		}
	}
	call(t, e, ...i) {
		const n = this.get(t);
		if (n && n[e]) return n[e](...i);
	}
}
const ne = new gh();
class _h {
	constructor() {
		Nt(this, "onMouseMove", (t) => {
			const i = t.currentTarget.querySelectorAll(".js-glow-card");
			for (let n = 0; n < i.length; n++) {
				const r = i[n].getBoundingClientRect(),
					s = t.clientX - r.left,
					o = t.clientY - r.top;
				i[n].style.setProperty("--mouse-x", `${s}px`),
					i[n].style.setProperty("--mouse-y", `${o}px`);
			}
		});
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.sections.length; t++)
			this.DOM.sections[t].addEventListener("mousemove", this.onMouseMove);
	}
	destroy() {
		this.DOM && (this.DOM = void 0);
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelectorAll(".js-glow-cards");
		e.length && ((this.DOM = {}), (this.DOM.sections = e), this.setup());
	}
}
class mh {
	constructor() {
		Nt(this, "scrollLinkTo", (t) => {
			t.preventDefault();
			const i = t.currentTarget.getAttribute("href"),
				n = document.querySelector(`${i}`);
			n ? yu(n, 150) : console.warn("Target non esiste per l'id: ", i);
		});
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.hashElements.length; t++)
			this.DOM.hashElements[t].addEventListener("click", this.scrollLinkTo);
	}
	reinit(t) {
		this.init(t);
	}
	destroy() {
		if (this.DOM)
			for (let t = 0; t < this.DOM.hashElements.length; t++)
				this.DOM.hashElements[t].removeEventListener(
					"click",
					this.scrollLinkTo,
				);
	}
	init(t = document) {
		const e = t.querySelectorAll(".js-hash-scroll");
		e.length > 0 &&
			((this.DOM = {}), (this.DOM.hashElements = e), this.setup());
	}
}
class yh {
	constructor(t) {
		this.init(t);
	}
	start() {
		this.loop = hh(this.DOM.items, {
			paused: !1,
			repeat: this.config.repeat,
			speed: this.config.speed,
			reversed: this.config.reversed,
			paddingRight: 40,
		});
	}
	init(t) {
		(this.DOM = {}),
			(this.DOM.container = t.container),
			(this.DOM.items =
				this.DOM.container.querySelectorAll(".js-marquee-item")),
			(this.config = {
				repeat: t.config.repeat || -1,
				speed: t.config.speed || 1.6,
				reversed: t.config.reversed || !1,
			}),
			this.start();
	}
}
class vh {
	constructor() {
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.rows.length; t++) {
			const e = this.DOM.rows[t];
			e &&
				this.instances.push(
					new yh({
						container: e,
						config: {
							repeat: -1,
							speed: 1,
							reversed: e.dataset.reversed !== void 0,
						},
					}),
				);
		}
	}
	destroy() {
		if (this.DOM) {
			for (let t = 0; t < this.instances.length; t++)
				this.instances[t].destroy();
			(this.instances = []), (this.DOM = void 0);
		}
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelectorAll(".js-marquee-row");
		e.length &&
			((this.DOM = {}),
			(this.DOM.rows = e),
			(this.instances = []),
			this.setup());
	}
}
class xh {
	setActiveView(t) {
		this.activeView = t;
	}
	init() {
		(this.DOM = {}),
			(this.DOM.view = document.querySelector("[data-router-view]")),
			(this.activeView = this.DOM.view.dataset.routerView);
	}
}
const Js = new xh();
$.registerPlugin(mt);
class wh {
	constructor() {
		Nt(this, "toggleMenu", () => {
			this.isOpenMenu ? this.hideNav() : this.revealNav();
		});
		Nt(this, "onScroll", () => {
			const t = window.scrollY || document.documentElement.scrollTop;
			t > this.lastScrollTop
				? (document.body.classList.add("is-scrolling-down"),
					document.body.classList.remove("is-scrolling-up"))
				: (document.body.classList.add("is-scrolling-up"),
					document.body.classList.remove("is-scrolling-down")),
				(this.lastScrollTop = t <= 0 ? 0 : t);
		});
		Nt(this, "hideNav", (t = !1, e = !1) => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0),
					document.body.classList.remove("is-nav-open");
				const i = $.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !1), e && e();
					},
				});
				return (
					i
						.to(this.DOM.navMobileLinks, {
							yPercent: -100,
							duration: Xe(0.8, t),
							stagger: Xe(0.1, t),
							onComplete: () => {
								$.set(this.DOM.navMobileLinks, { yPercent: 100 });
							},
							ease: ht,
						})
						.to(
							this.DOM.navMobileCta,
							{
								yPercent: -100,
								duration: Xe(0.8, t),
								onComplete: () => {
									$.set(this.DOM.navMobileCta, { yPercent: 100 });
								},
								ease: ht,
							},
							Xe(0.1, t),
						)
						.set(this.DOM.navMobileBg, { transformOrigin: "50% 0%" })
						.to(this.DOM.navMobileBg, {
							yPercent: -100,
							duration: Xe(0.8, t),
							onComplete: () => {
								$.set(this.DOM.navMobileBg, { yPercent: 100 });
							},
							ease: ht,
						})
						.set(this.DOM.navMobile, {
							zIndex: -1,
							visibility: "hidden",
							pointerEvents: "none",
						}),
					i
				);
			}
		});
		Nt(this, "revealNav", () => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0), document.body.classList.add("is-nav-open");
				const t = $.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !0);
					},
				});
				return (
					t
						.set(this.DOM.navMobile, {
							zIndex: 399,
							visibility: "visible",
							pointerEvents: "all",
						})
						.set(this.DOM.navMobileBg, { transformOrigin: "50% 100%" })
						.to(this.DOM.navMobileBg, { yPercent: 0, duration: 0.8, ease: ht })
						.to(
							this.DOM.navMobileCta,
							{ yPercent: 0, duration: 0.8, ease: ht },
							"-=0.34",
						)
						.to(
							this.DOM.navMobileLinks,
							{ yPercent: 0, stagger: 0.1, duration: 0.8, ease: ht },
							"-=0.34",
						),
					t
				);
			}
		});
		Nt(this, "hide", () => $.set(this.DOM.nav, { opacity: 0 }));
		Nt(this, "reveal", () =>
			$.timeline().to(this.DOM.nav, {
				opacity: 1,
				duration: 0.8,
				ease: ht,
				clearProps: "opacity",
			}),
		);
		this.init();
	}
	setup() {
		this.addEvents(),
			this.hideNav(!0),
			this.setActiveItem(),
			this.setupScroll();
	}
	setActiveItem(t = Js.activeView) {
		const e = this.DOM.nav.querySelector(".js-nav-link.is-active");
		e && e.classList.remove("is-active");
		const i = this.DOM.nav.querySelector(`.js-nav-link[data-route="${t}"]`);
		i && i.classList.add("is-active");
	}
	addEvents() {
		this.DOM.navToggle.addEventListener("click", this.toggleMenu);
	}
	removeEvents() {
		this.DOM.navToggle.removeEventListener("click", this.toggleMenu),
			window.removeEventListener("scroll", this.onScroll, !1);
	}
	setupScroll() {
		(this.lastScrollTop = window.scrollY || document.documentElement.scrollTop),
			window.addEventListener("scroll", this.onScroll, !1);
	}
	reinit(t) {
		this.init(t);
	}
	destroy() {
		this.DOM &&
			(this.removeEvents(),
			this.headTrigger &&
				(this.headTrigger.kill(), (this.headTrigger = void 0)),
			(this.DOM = void 0));
	}
	init(t = document) {
		const e = t.querySelector(".js-nav"),
			i = t.querySelector(".js-nav-mobile");
		e &&
			i &&
			((this.DOM = {}),
			(this.DOM.nav = e),
			(this.DOM.navMobile = i),
			(this.DOM.navToggle = this.DOM.nav.querySelector(".js-nav-toggle")),
			(this.DOM.navMobileLinks = this.DOM.navMobile.querySelectorAll(
				".js-nav-mobile-link",
			)),
			(this.DOM.navMobileBg =
				this.DOM.navMobile.querySelector(".js-nav-mobile-bg")),
			(this.DOM.navMobileCta =
				this.DOM.navMobile.querySelector(".js-nav-mobile-cta")),
			(this.isOpenMenu = !1),
			(this.isAnimatingMenu = !1),
			this.setup());
	}
}
const bh = (a) => {
		const t = a.querySelectorAll(".js-divider-label-ill"),
			e = a.querySelector(".js-divider-label-text");
		return $.timeline()
			.set(t, {
				clipPath: (i) =>
					i === 0
						? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
						: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
			})
			.set(e, { yPercent: 100 });
	},
	Th = (a) => {
		const t = a.querySelectorAll(".js-divider-label-ill"),
			e = a.querySelector(".js-divider-label-text");
		return $.timeline()
			.to(t, {
				duration: 1,
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				stagger: 0.08,
				clearProps: "clipPath",
				ease: ht,
			})
			.to(e, { duration: 1, yPercent: 0, clearProps: "y", ease: ht }, "-=0.7");
	},
	Sh = (a) => {
		const e = ne
			.get("splitText", a)
			.getSubInstanceFrom(a, "wordsLinesInstance");
		e && $.set(e.lines, { yPercent: 10, opacity: 0 });
	},
	Mh = (a) => {
		const e = ne
			.get("splitText", a)
			.getSubInstanceFrom(a, "wordsLinesInstance");
		if (e)
			return $.to(e.lines, {
				duration: 1,
				yPercent: 0,
				opacity: 1,
				stagger: 0.08,
				clearProps: "y",
				ease: ht,
			});
	},
	ql = {
		hideAll: (a) => {
			for (let t = 0; t < a.length; t++) {
				const e = a[t],
					i = e.dataset.scrollTrigger;
				if (e)
					switch (i) {
						case "trusted": {
							const n = e.querySelector(".js-anim-title"),
								r = e.querySelectorAll(".js-anim-row"),
								s = e.querySelector(".js-anim-divider");
							Sh(n), $.set([s, r], { yPercent: 20, opacity: 0 });
							break;
						}
						case "collaborate": {
							const n = e.querySelector(".js-divider-label"),
								r = e.querySelector(".js-anim-title"),
								s = e.querySelectorAll(".js-anim-item"),
								o = e.querySelector(".js-anim-divider");
							bh(n), $.set([r, s, o], { yPercent: 20, opacity: 0 });
							break;
						}
						case "anim-group": {
							const n = e.querySelectorAll(".js-anim-item");
							$.set(n, { y: 50, opacity: 0 });
							break;
						}
						case "item": {
							$.set(e, { y: 50, opacity: 0 });
							break;
						}
					}
			}
		},
		activate: (a) => {
			$.registerPlugin(mt);
			for (let t = 0; t < a.length; t++) {
				const e = a[t],
					i = e.dataset.scrollTrigger,
					n = { trigger: e, start: "top bottom-=30%", end: "bottom top" };
				if (e)
					switch (i) {
						case "trusted": {
							const r = e.querySelector(".js-anim-title"),
								s = e.querySelectorAll(".js-anim-row"),
								o = e.querySelector(".js-anim-divider");
							$.timeline({ scrollTrigger: n })
								.add(Mh(r))
								.to(
									s,
									{
										duration: 1,
										yPercent: 0,
										opacity: 1,
										stagger: 0.08,
										clearProps: "y,opacity",
										ease: ht,
									},
									"<",
								)
								.to(
									o,
									{
										duration: 1,
										yPercent: 0,
										opacity: 1,
										clearProps: "y,opacity",
										ease: Bl,
									},
									"-=0.8",
								);
							break;
						}
						case "collaborate": {
							const r = e.querySelector(".js-divider-label"),
								s = e.querySelector(".js-anim-title"),
								o = e.querySelectorAll(".js-anim-item"),
								c = e.querySelector(".js-anim-divider");
							$.timeline({ scrollTrigger: n })
								.add(Th(r))
								.to(
									s,
									{ duration: 1, yPercent: 0, opacity: 1, ease: ht },
									"-=0.8",
								)
								.to(
									[o, c],
									{
										duration: 1,
										yPercent: 0,
										opacity: 1,
										stagger: 0.08,
										clearProps: "y,opacity",
										ease: Bl,
									},
									"-=0.8",
								);
							break;
						}
						case "anim-group": {
							const r = e.querySelectorAll(".js-anim-group"),
								s = $.timeline({ scrollTrigger: n });
							for (let o = 0; o < r.length; o++) {
								const u = r[o].querySelectorAll(".js-anim-item");
								s.to(
									u,
									{
										y: 0,
										opacity: 1,
										duration: 1,
										ease: ht,
										stagger: 0.08,
										clearProps: "y,opacity",
									},
									o === 0 ? 0 : "-=0.8",
								);
							}
							break;
						}
						case "item": {
							$.timeline({ scrollTrigger: n }).to(e, {
								y: 0,
								opacity: 1,
								duration: 1,
								ease: ht,
							});
							break;
						}
					}
			}
		},
	};
class Dh {
	constructor() {
		Nt(this, "start", () => {
			this.DOM &&
				this.DOM.scrollTriggerElements.length &&
				ql.activate(this.DOM.scrollTriggerElements);
		});
		Nt(this, "hide", () => {
			this.DOM &&
				this.DOM.scrollTriggerElements.length &&
				ql.hideAll(this.DOM.scrollTriggerElements);
		});
		this.init();
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelectorAll("[data-scroll-trigger]");
		e.length && ((this.DOM = {}), (this.DOM.scrollTriggerElements = e));
	}
}
var Oh =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
			? window
			: typeof global < "u"
				? global
				: typeof self < "u"
					? self
					: {};
function Ph(a) {
	return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
		? a.default
		: a;
}
var Eu = { exports: {} };
(function (a, t) {
	(function (e, i) {
		a.exports = i();
	})(Oh, function () {
		var e = document,
			i = e.createTextNode.bind(e);
		function n(I, F, G) {
			I.style.setProperty(F, G);
		}
		function r(I, F) {
			return I.appendChild(F);
		}
		function s(I, F, G, J) {
			var U = e.createElement("span");
			return (
				F && (U.className = F),
				G && (!J && U.setAttribute("data-" + F, G), (U.textContent = G)),
				(I && r(I, U)) || U
			);
		}
		function o(I, F) {
			return I.getAttribute("data-" + F);
		}
		function c(I, F) {
			return !I || I.length == 0
				? []
				: I.nodeName
					? [I]
					: [].slice.call(I[0].nodeName ? I : (F || e).querySelectorAll(I));
		}
		function u(I) {
			for (var F = []; I--; ) F[I] = [];
			return F;
		}
		function f(I, F) {
			I && I.some(F);
		}
		function d(I) {
			return function (F) {
				return I[F];
			};
		}
		function p(I, F, G) {
			var J = "--" + F,
				U = J + "-index";
			f(G, function (K, lt) {
				Array.isArray(K)
					? f(K, function (ft) {
							n(ft, U, lt);
						})
					: n(K, U, lt);
			}),
				n(I, J + "-total", G.length);
		}
		var l = {};
		function g(I, F, G) {
			var J = G.indexOf(I);
			if (J == -1)
				G.unshift(I),
					f(l[I].depends, function (K) {
						g(K, I, G);
					});
			else {
				var U = G.indexOf(F);
				G.splice(J, 1), G.splice(U, 0, I);
			}
			return G;
		}
		function h(I, F, G, J) {
			return { by: I, depends: F, key: G, split: J };
		}
		function m(I) {
			return g(I, 0, []).map(d(l));
		}
		function _(I) {
			l[I.by] = I;
		}
		function y(I, F, G, J, U) {
			I.normalize();
			var K = [],
				lt = document.createDocumentFragment();
			J && K.push(I.previousSibling);
			var ft = [];
			return (
				c(I.childNodes).some(function (et) {
					if (et.tagName && !et.hasChildNodes()) {
						ft.push(et);
						return;
					}
					if (et.childNodes && et.childNodes.length) {
						ft.push(et), K.push.apply(K, y(et, F, G, J, U));
						return;
					}
					var W = et.wholeText || "",
						Z = W.trim();
					Z.length &&
						(W[0] === " " && ft.push(i(" ")),
						f(Z.split(G), function (ot, st) {
							st && U && ft.push(s(lt, "whitespace", " ", U));
							var Et = s(lt, F, ot);
							K.push(Et), ft.push(Et);
						}),
						W[W.length - 1] === " " && ft.push(i(" ")));
				}),
				f(ft, function (et) {
					r(lt, et);
				}),
				(I.innerHTML = ""),
				r(I, lt),
				K
			);
		}
		var S = 0;
		function x(I, F) {
			for (var G in F) I[G] = F[G];
			return I;
		}
		var b = "words",
			C = h(b, S, "word", function (I) {
				return y(I, "word", /\s+/, 0, 1);
			}),
			M = "chars",
			O = h(M, [b], "char", function (I, F, G) {
				var J = [];
				return (
					f(G[b], function (U, K) {
						J.push.apply(J, y(U, "char", "", F.whitespace && K));
					}),
					J
				);
			});
		function E(I) {
			I = I || {};
			var F = I.key;
			return c(I.target || "[data-splitting]").map(function (G) {
				var J = G["🍌"];
				if (!I.force && J) return J;
				J = G["🍌"] = { el: G };
				var U = m(I.by || o(G, "splitting") || M),
					K = x({}, I);
				return (
					f(U, function (lt) {
						if (lt.split) {
							var ft = lt.by,
								et = (F ? "-" + F : "") + lt.key,
								W = lt.split(G, K, J);
							et && p(G, et, W), (J[ft] = W), G.classList.add(ft);
						}
					}),
					G.classList.add("splitting"),
					J
				);
			});
		}
		function L(I) {
			I = I || {};
			var F = (I.target = s());
			return (F.innerHTML = I.content), E(I), F.outerHTML;
		}
		(E.html = L), (E.add = _);
		function N(I, F, G) {
			var J = c(F.matching || I.children, I),
				U = {};
			return (
				f(J, function (K) {
					var lt = Math.round(K[G]);
					(U[lt] || (U[lt] = [])).push(K);
				}),
				Object.keys(U).map(Number).sort(D).map(d(U))
			);
		}
		function D(I, F) {
			return I - F;
		}
		var R = h("lines", [b], "line", function (I, F, G) {
				return N(I, { matching: G[b] }, "offsetTop");
			}),
			Y = h("items", S, "item", function (I, F) {
				return c(F.matching || I.children, I);
			}),
			X = h("rows", S, "row", function (I, F) {
				return N(I, F, "offsetTop");
			}),
			V = h("cols", S, "col", function (I, F) {
				return N(I, F, "offsetLeft");
			}),
			H = h("grid", ["rows", "cols"]),
			tt = "layout",
			gt = h(tt, S, S, function (I, F) {
				var G = (F.rows = +(F.rows || o(I, "rows") || 1)),
					J = (F.columns = +(F.columns || o(I, "columns") || 1));
				if (
					((F.image = F.image || o(I, "image") || I.currentSrc || I.src),
					F.image)
				) {
					var U = c("img", I)[0];
					F.image = U && (U.currentSrc || U.src);
				}
				F.image && n(I, "background-image", "url(" + F.image + ")");
				for (var K = G * J, lt = [], ft = s(S, "cell-grid"); K--; ) {
					var et = s(ft, "cell");
					s(et, "cell-inner"), lt.push(et);
				}
				return r(I, ft), lt;
			}),
			T = h("cellRows", [tt], "row", function (I, F, G) {
				var J = F.rows,
					U = u(J);
				return (
					f(G[tt], function (K, lt, ft) {
						U[Math.floor(lt / (ft.length / J))].push(K);
					}),
					U
				);
			}),
			nt = h("cellColumns", [tt], "col", function (I, F, G) {
				var J = F.columns,
					U = u(J);
				return (
					f(G[tt], function (K, lt) {
						U[lt % J].push(K);
					}),
					U
				);
			}),
			ut = h("cells", ["cellRows", "cellColumns"], "cell", function (I, F, G) {
				return G[tt];
			});
		return (
			_(C), _(O), _(R), _(Y), _(X), _(V), _(H), _(gt), _(T), _(nt), _(ut), E
		);
	});
})(Eu);
var Ch = Eu.exports;
const vr = Ph(Ch);
class Eh {
	constructor() {
		Nt(this, "getSubInstanceFrom", (t, e) => {
			const i = this[e];
			let n;
			for (let r = 0; r < i.length; r++) i[r].el === t && (n = i[r]);
			return n;
		});
	}
	initChars(t = document) {
		const e = t.querySelectorAll("[data-split='chars']");
		e.length > 0 &&
			((this.charsInstance = vr({ target: e, by: "chars" })),
			this.instances.push(this.charsInstance));
	}
	initWords(t = document) {
		const e = t.querySelectorAll("[data-split='words']");
		e.length > 0 &&
			((this.wordsInstance = vr({ target: e, by: "words" })),
			this.instances.push(this.wordsInstance));
	}
	initWordsLines() {
		const t = document.querySelectorAll("[data-split='lines']");
		t.length > 0 &&
			((this.wordsLinesInstance = vr({ target: t, by: "lines" })),
			this.instances.push(this.wordsLinesInstance));
	}
	initLines(t = document) {
		const e = t.querySelectorAll("[data-line]");
		for (let i = 0; i < e.length; i++) this.buildLine(e[i]);
	}
	buildLine(t) {
		const e = t.innerHTML,
			i = document.createElement("div"),
			n = document.createElement("div");
		(i.className = "line-wrap"),
			(n.className = "line-wrap__inner js-line-wrap-anim"),
			(n.innerHTML = e),
			(t.innerHTML = ""),
			i.appendChild(n),
			t.appendChild(i);
	}
	getInstance(t) {
		const e = this.instances.filter((i) => i.id === t);
		if (e !== void 0) return e[0];
	}
	addInstance(t, e, i = !0) {
		(this[t] = vr(e)), i && this.instances.push({ id: `${t}`, value: this[t] });
	}
	createInstance(t) {
		return vr(t);
	}
	removeInstance(t) {
		const e = this.instances.filter((i) => i.id !== t);
		this.instances = e;
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		(this.instances = []),
			this.initChars(t),
			this.initWords(),
			this.initWordsLines();
	}
}
const Yl = new Eh();
$.registerPlugin(mt);
class kh {
	constructor() {
		this.init();
	}
	setup() {
		$.matchMedia().add(
			{ isMobile: "(max-width: 1023px)", isDesk: "(min-width: 1024px)" },
			(e) => {
				const { isMobile: i, isDesk: n } = e.conditions;
				i && this.setMobileTrigger(), n && this.setTrigger();
			},
		);
	}
	setTrigger() {
		$.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top bottom",
				end: "bottom top",
				scrub: 1.5,
				ease: "none",
			},
		}).fromTo(
			this.DOM.cards,
			{ y: (e, i) => parseInt(i.dataset.index, 10) * 35 },
			{ y: 0, stagger: { each: 0.024 } },
		);
	}
	setMobileTrigger() {
		$.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top top+=75%",
				end: "bottom top",
			},
		}).from(this.DOM.cards, {
			opacity: 0,
			duration: 1,
			stagger: { each: 0.01, from: "random" },
			ease: "none",
		});
	}
	destroy() {
		this.DOM && (this.DOM = void 0);
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelector(".js-team-section");
		e &&
			((this.DOM = {}),
			(this.DOM.section = e),
			(this.DOM.cards = this.DOM.section.querySelectorAll(".js-team-card")),
			this.setup());
	}
}
$.registerPlugin(mt);
class Ah {
	constructor() {
		Nt(this, "onCarouselPrev", () => {
			if (!this.isAnimating) {
				this.isAnimating = !0;
				const t = this.activeIndex;
				this.activeIndex =
					this.activeIndex === 0
						? this.DOM.cards.length - 1
						: this.activeIndex - 1;
				const e = this.DOM.cards[t],
					i = this.DOM.cards[this.activeIndex];
				$.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(e))
					.add(this.enterSlide(i), 0);
			}
		});
		Nt(this, "onCarouselNext", () => {
			if (!this.isAnimating) {
				this.isAnimating = !0;
				const t = this.activeIndex;
				this.activeIndex =
					this.activeIndex === this.DOM.cards.length - 1
						? 0
						: this.activeIndex + 1;
				const e = this.DOM.cards[t],
					i = this.DOM.cards[this.activeIndex];
				$.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(e))
					.add(this.enterSlide(i), 0);
			}
		});
		Nt(this, "exitSlide", (t) => {
			const e = $.timeline();
			return (
				e.to(t, {
					opacity: 0,
					xPercent: -100,
					duration: 0.8,
					onComplete: () => {
						$.set(t, { opacity: 0, xPercent: 100 });
					},
					ease: ht,
				}),
				e
			);
		});
		Nt(this, "enterSlide", (t) => {
			const e = $.timeline();
			return e.to(t, { opacity: 1, xPercent: 0, duration: 0.8, ease: ht }), e;
		});
		Nt(this, "buildCardsTl", () => {
			const t = $.timeline();
			for (let e = 0; e < this.DOM.cards.length; e++) {
				const i = this.DOM.cards[e],
					n = $.timeline();
				n
					.from(i, { y: Kt.window.height * 0.7, duration: 1.4 })
					.to(
						i,
						{
							y: () => e * 10,
							scale: () => 1 - (this.DOM.cards.length - e) * 0.02,
							duration: 0.8,
						},
						1.5,
					),
					t.add(n, e === 0 ? 0 : "-=1.25");
			}
			return t;
		});
		this.init();
	}
	setup() {
		$.matchMedia().add(
			{ isMobile: "(max-width: 1023px)", isDesk: "(min-width: 1024px)" },
			(e) => {
				const { isDesk: i, isMobile: n } = e.conditions;
				i ? this.setTrigger() : n && this.setMobileCarousel();
			},
		),
			this.DOM.carouselPrev.addEventListener("click", this.onCarouselPrev),
			this.DOM.carouselNext.addEventListener("click", this.onCarouselNext);
	}
	setMobileCarousel() {
		$.set(this.DOM.cards, { opacity: 0, xPercent: 100 }),
			$.set(this.DOM.cards[this.activeIndex], { opacity: 1, xPercent: 0 });
	}
	setTrigger() {
		$.set(this.DOM.cards, { opacity: 1, xPercent: 0, rotate: 0 });
		const t = $.timeline({
				scrollTrigger: {
					trigger: this.DOM.section,
					start: "top -=30%",
					end: `+=${Kt.window.height * 5}`,
					pin: !0,
					scrub: !0,
					preventOverlaps: !0,
					fastScrollEnd: 3e3,
				},
			}),
			e = this.buildCardsTl();
		t.add(e, 0);
	}
	destroy() {
		this.DOM && (this.DOM = void 0);
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelector(".js-testimonial-section");
		e &&
			((this.DOM = {}),
			(this.DOM.section = e),
			(this.DOM.cards = this.DOM.section.querySelectorAll(
				".js-testimonial-card",
			)),
			(this.DOM.carouselPrev = this.DOM.section.querySelector(
				".js-testimonial-carousel-prev",
			)),
			(this.DOM.carouselNext = this.DOM.section.querySelector(
				".js-testimonial-carousel-next",
			)),
			(this.isAnimating = !1),
			(this.activeIndex = 0),
			this.setup());
	}
}
class Lh {
	constructor() {
		this.init();
	}
	resize() {
		this.winW !== Kt.window.width &&
			((this.winW = Kt.window.width), this.setup());
	}
	setup() {
		const t = Kt.isIos ? window.screen.height : window.innerHeight;
		document.documentElement.style.setProperty(
			"--v-width",
			`${window.innerWidth}px`,
		),
			document.documentElement.style.setProperty("--v-height", `${t}px`);
	}
	init() {
		(this.winW = Kt.window.width), this.setup();
	}
}
const Ih = ({ pageName: a, container: t = document }) => {
		const e = $.timeline(),
			i = ne.get("nav");
		switch ((i && e.add(i.hide(!0)), a)) {
			case "homepage": {
				const n = t.querySelector(".js-hero-content"),
					r = n.querySelector(".js-badge"),
					s = n.querySelector(".js-title"),
					o = n.querySelector(".js-subtitle"),
					c = n.querySelectorAll(".js-cta"),
					u = t.querySelector(".js-hero-ill"),
					f = u.querySelector(".js-path-outer"),
					d = u.querySelector(".js-path-middle"),
					p = u.querySelector(".js-path-inner"),
					l = o.querySelectorAll(".word"),
					g = ne.get("featuresCarousel");
				g && g.hide(),
					e
						.set([f, d, p], { scale: 0, y: -100, transformOrigin: "50% 0%" })
						.set([r, s, l, c], { opacity: 0, y: -40 });
				break;
			}
			case "company": {
				const n = t.querySelector(".js-hero-content"),
					r = n.querySelector(".js-badge"),
					s = n.querySelector(".js-title"),
					o = n.querySelector(".js-subtitle"),
					c = t.querySelector(".js-hero-ill"),
					u = c.querySelector(".js-path-radial"),
					f = c.querySelector(".js-path-stripe"),
					d = c.querySelectorAll(".js-path-ball"),
					p = c.querySelector(".js-path-ball-glow"),
					l = t.querySelector(".js-hero-bg"),
					g = f.getTotalLength(),
					h = o.querySelectorAll(".word");
				e.set([r, s, h], { opacity: 0, y: 40 })
					.set(l, { opacity: 0 })
					.set(u, { opacity: 0, scale: 0, transformOrigin: "50% 50%" })
					.set(f, { strokeDasharray: g, strokeDashoffset: g })
					.set(d, { scale: 0, transformOrigin: "50% 50%" })
					.set(p, { opacity: 0, scale: 0, transformOrigin: "50% 50%" });
				break;
			}
		}
		return e;
	},
	Rh = ({ pageName: a, container: t = document, cb: e = !1 }) => {
		const i = $.timeline({
				onComplete: () => {
					if (a === "homepage") {
						const r = ne.get("featuresCarousel");
						r && r.start();
					}
					e && e();
				},
			}),
			n = ne.get("nav");
		switch (a) {
			case "homepage": {
				const r = t.querySelector(".js-hero-content"),
					s = r.querySelector(".js-badge"),
					o = r.querySelector(".js-title"),
					c = r.querySelector(".js-subtitle"),
					u = r.querySelectorAll(".js-cta"),
					f = t.querySelector(".js-hero-ill"),
					d = f.querySelector(".js-path-outer"),
					p = f.querySelector(".js-path-middle"),
					l = f.querySelector(".js-path-inner"),
					g = ne.get("featuresCarousel"),
					h = c.querySelectorAll(".word");
				i
					.to([d, p, l], {
						duration: 2,
						y: 0,
						stagger: 0.1,
						scale: 1,
						clearProps: "scale,y",
						ease: ht,
					})
					.to(s, { duration: 1, opacity: 1, y: 0, ease: ht }, 0.75)
					.to(
						o,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.02, ease: ht },
						0.75,
					)
					.to(
						h,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.02, ease: ht },
						0.75,
					)
					.to(
						u,
						{
							duration: 1,
							opacity: 1,
							y: 0,
							stagger: 0.1,
							clearProps: "opacity,y",
							ease: ht,
						},
						0.75,
					),
					g && i.add(g.reveal(), 0.75);
				break;
			}
			case "company": {
				const r = t.querySelector(".js-hero-content"),
					s = r.querySelector(".js-badge"),
					o = r.querySelector(".js-title"),
					c = r.querySelector(".js-subtitle"),
					u = t.querySelector(".js-hero-ill"),
					f = u.querySelector(".js-path-radial"),
					d = u.querySelector(".js-path-stripe"),
					p = u.querySelectorAll(".js-path-ball"),
					l = u.querySelector(".js-path-ball-glow"),
					g = t.querySelector(".js-hero-bg"),
					h = c.querySelectorAll(".word");
				i.to(s, { duration: 1, opacity: 1, y: 0, ease: ht }, 0.75)
					.to(
						o,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.02, ease: ht },
						0.75,
					)
					.to(
						h,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.01, ease: ht },
						0.75,
					)
					.to(d, { duration: 2, strokeDashoffset: 0, ease: ht }, 0)
					.to(p, { duration: 0.8, scale: 1, stagger: 0.05, ease: ht }, "-=1")
					.to(l, { duration: 0.8, opacity: 1, scale: 1, ease: ht })
					.to(f, { duration: 2, scale: 1, opacity: 0.45, ease: ht }, 1)
					.to(g, { duration: 1, opacity: 1, ease: ht }, 1.5);
				break;
			}
		}
		return n && i.add(n.reveal(), 0.5), i;
	},
	to = { pageTransition: document.querySelector(".js-page-loader") },
	Fh = (a = !1) => {
		const t = $.timeline();
		return (
			t
				.set(to.pageTransition, { display: "block", zIndex: 421 })
				.to(to.pageTransition, { duration: Xe(1, a), opacity: 1, ease: ht }),
			t
		);
	},
	Nh = () => {
		const a = $.timeline({
			onComplete: () => {
				$.set(to.pageTransition, { display: "none", zIndex: -1 });
			},
		});
		return a.to(to.pageTransition, { duration: 1, opacity: 0, ease: ht }), a;
	},
	Bh = () => {
		const a = ne.get("scrollAnimator");
		a && a.hide(), Fh(!0), Ih({ pageName: Js.activeView });
		const t = $.timeline({
			onStart: () => {
				a && a.start();
			},
		});
		return t.add(Nh()).add(Rh({ pageName: Js.activeView }), "-=0.2"), t;
	};
function Xl(a, t, e) {
	var i;
	return function () {
		var n = this,
			r = arguments,
			s = function () {
				(i = null), e || a.apply(n, r);
			},
			o = e && !i;
		clearTimeout(i), (i = setTimeout(s, t)), o && a.apply(n, r);
	};
}
function Hl() {
	let a = !1;
	return (
		window.PointerEvent && "maxTouchPoints" in navigator
			? navigator.maxTouchPoints > 0 && (a = !0)
			: ((window.matchMedia &&
					window.matchMedia("(any-pointer:coarse)").matches) ||
					window.TouchEvent ||
					"ontouchstart" in window) &&
				(a = !0),
		a
	);
}
class zh {
	constructor() {
		Nt(this, "onResize", () => {
			Kt.resize(),
				document.body.classList.toggle("is-touch", Hl()),
				ne.map("resize");
		});
	}
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			(document.documentElement.className = "js"),
				document.body.classList.toggle("is-touch", Hl()),
				Js.init(),
				ne.add("nav", new wh());
		}),
			window.addEventListener("load", () => {
				Kt.init(),
					Yl.init(),
					ne.add("splitText", Yl, !0),
					ne.add("viewportFixer", new Lh()),
					ne.add("hashScroll", new mh()),
					ne.add("featuresCarousel", new ph()),
					ne.add("marqueeManager", new vh()),
					ne.add("computeBlock", new fd()),
					ne.add("testimonials", new Ah()),
					ne.add("glowCards", new _h()),
					ne.add("team", new kh()),
					ne.add("scrollAnimator", new Dh()),
					Bh();
			}),
			window.addEventListener("resize", Xl(this.onResize, 150)),
			window.addEventListener("orientationchange", Xl(this.onResize, 150));
	}
}
const qh = new zh();
qh.start();
