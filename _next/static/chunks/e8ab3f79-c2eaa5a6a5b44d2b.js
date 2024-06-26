(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [3433], {
       9521: function(t, e) {
           ! function(t) {
               "use strict";

               function _inheritsLoose(t, e) {
                   t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
               }

               function _assertThisInitialized(t) {
                   if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return t
               }
               /*!
                * GSAP 3.12.2
                * https://greensock.com
                *
                * @license Copyright 2008-2023, GreenSock. All rights reserved.
                * Subject to the terms at https://greensock.com/standard-license or for
                * Club GreenSock members, the agreement issued with that membership.
                * @author: Jack Doyle, jack@greensock.com
                */
               var e, r, i, n, s, a, o, _, u, l, h, c, d, p, m, g, v, y, T, w, P, x, b, S, C, k, O, E, M, A = {
                       autoSleep: 120,
                       force3D: "auto",
                       nullTargetWarn: 1,
                       units: {
                           lineHeight: ""
                       }
                   },
                   F = {
                       duration: .5,
                       overwrite: !1,
                       delay: 0
                   },
                   D = 2 * Math.PI,
                   R = D / 4,
                   N = 0,
                   B = Math.sqrt,
                   z = Math.cos,
                   I = Math.sin,
                   _isString = function(t) {
                       return "string" == typeof t
                   },
                   _isFunction = function(t) {
                       return "function" == typeof t
                   },
                   _isNumber = function(t) {
                       return "number" == typeof t
                   },
                   _isUndefined = function(t) {
                       return void 0 === t
                   },
                   _isObject = function(t) {
                       return "object" == typeof t
                   },
                   _isNotFalse = function(t) {
                       return !1 !== t
                   },
                   _windowExists = function() {
                       return "undefined" != typeof window
                   },
                   _isFuncOrString = function(t) {
                       return _isFunction(t) || _isString(t)
                   },
                   L = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
                   U = Array.isArray,
                   V = /(?:-?\.?\d|\.)+/gi,
                   Y = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                   j = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                   G = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                   X = /[+-]=-?[.\d]+/,
                   W = /[^,'"\[\]\s]+/gi,
                   q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
                   H = {},
                   Q = {},
                   _install = function(t) {
                       return (Q = _merge(t, H)) && tz
                   },
                   _missingPlugin = function(t, e) {
                       return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
                   },
                   _warn = function(t, e) {
                       return !e && console.warn(t)
                   },
                   _addGlobal = function(t, e) {
                       return t && (H[t] = e) && Q && (Q[t] = e) || H
                   },
                   _emptyFunc = function() {
                       return 0
                   },
                   Z = {
                       suppressEvents: !0,
                       isStart: !0,
                       kill: !1
                   },
                   K = {
                       suppressEvents: !0,
                       kill: !1
                   },
                   $ = {
                       suppressEvents: !0
                   },
                   J = {},
                   tt = [],
                   te = {},
                   tr = {},
                   ti = {},
                   tn = 30,
                   ts = [],
                   ta = "",
                   _harness = function(t) {
                       var e, r, i = t[0];
                       if (_isObject(i) || _isFunction(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
                           for (r = ts.length; r-- && !ts[r].targetTest(i););
                           e = ts[r]
                       }
                       for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new GSCache(t[r], e))) || t.splice(r, 1);
                       return t
                   },
                   _getCache = function(t) {
                       return t._gsap || _harness(toArray(t))[0]._gsap
                   },
                   _getProperty = function(t, e, r) {
                       return (r = t[e]) && _isFunction(r) ? t[e]() : _isUndefined(r) && t.getAttribute && t.getAttribute(e) || r
                   },
                   _forEachName = function(t, e) {
                       return (t = t.split(",")).forEach(e) || t
                   },
                   _round = function(t) {
                       return Math.round(1e5 * t) / 1e5 || 0
                   },
                   _roundPrecise = function(t) {
                       return Math.round(1e7 * t) / 1e7 || 0
                   },
                   _parseRelative = function(t, e) {
                       var r = e.charAt(0),
                           i = parseFloat(e.substr(2));
                       return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
                   },
                   _arrayContainsAny = function(t, e) {
                       for (var r = e.length, i = 0; 0 > t.indexOf(e[i]) && ++i < r;);
                       return i < r
                   },
                   _lazyRender = function() {
                       var t, e, r = tt.length,
                           i = tt.slice(0);
                       for (t = 0, te = {}, tt.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
                   },
                   _lazySafeRender = function(t, e, r, i) {
                       tt.length && !w && _lazyRender(), t.render(e, r, i || w && e < 0 && (t._initted || t._startAt)), tt.length && !w && _lazyRender()
                   },
                   _numericIfPossible = function(t) {
                       var e = parseFloat(t);
                       return (e || 0 === e) && (t + "").match(W).length < 2 ? e : _isString(t) ? t.trim() : t
                   },
                   _passThrough = function(t) {
                       return t
                   },
                   _setDefaults = function(t, e) {
                       for (var r in e) r in t || (t[r] = e[r]);
                       return t
                   },
                   _merge = function(t, e) {
                       for (var r in e) t[r] = e[r];
                       return t
                   },
                   _mergeDeep = function _mergeDeep(t, e) {
                       for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = _isObject(e[r]) ? _mergeDeep(t[r] || (t[r] = {}), e[r]) : e[r]);
                       return t
                   },
                   _copyExcluding = function(t, e) {
                       var r, i = {};
                       for (r in t) r in e || (i[r] = t[r]);
                       return i
                   },
                   _inheritDefaults = function(t) {
                       var e, r = t.parent || x,
                           i = t.keyframes ? (e = U(t.keyframes), function(t, r) {
                               for (var i in r) i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
                           }) : _setDefaults;
                       if (_isNotFalse(t.inherit))
                           for (; r;) i(t, r.vars.defaults), r = r.parent || r._dp;
                       return t
                   },
                   _arraysMatch = function(t, e) {
                       for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                       return r < 0
                   },
                   _addLinkedListItem = function(t, e, r, i, n) {
                       void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                       var s, a = t[i];
                       if (n)
                           for (s = e[n]; a && a[n] > s;) a = a._prev;
                       return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e
                   },
                   _removeLinkedListItem = function(t, e, r, i) {
                       void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                       var n = e._prev,
                           s = e._next;
                       n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
                   },
                   _removeFromParent = function(t, e) {
                       t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
                   },
                   _uncache = function(t, e) {
                       if (t && (!e || e._end > t._dur || e._start < 0))
                           for (var r = t; r;) r._dirty = 1, r = r.parent;
                       return t
                   },
                   _recacheAncestors = function(t) {
                       for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                       return t
                   },
                   _rewindStartAt = function(t, e, r, i) {
                       return t._startAt && (w ? t._startAt.revert(K) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
                   },
                   _elapsedCycleDuration = function(t) {
                       return t._repeat ? _animationCycle(t._tTime, t = t.duration() + t._rDelay) * t : 0
                   },
                   _animationCycle = function(t, e) {
                       var r = Math.floor(t /= e);
                       return t && r === t ? r - 1 : r
                   },
                   _parentToChildTotalTime = function(t, e) {
                       return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
                   },
                   _setEnd = function(t) {
                       return t._end = _roundPrecise(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
                   },
                   _alignPlayhead = function(t, e) {
                       var r = t._dp;
                       return r && r.smoothChildTiming && t._ts && (t._start = _roundPrecise(r._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))), _setEnd(t), r._dirty || _uncache(r, t)), t
                   },
                   _postAddChecks = function(t, e) {
                       var r;
                       if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = _parentToChildTotalTime(t.rawTime(), e), (!e._dur || _clamp(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)), _uncache(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                           if (t._dur < t.duration())
                               for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                           t._zTime = -.00000001
                       }
                   },
                   _addToTimeline = function(t, e, r, i) {
                       return e.parent && _removeFromParent(e), e._start = _roundPrecise((_isNumber(r) ? r : r || t !== x ? _parsePosition(t, r, e) : t._time) + e._delay), e._end = _roundPrecise(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), _addLinkedListItem(t, e, "_first", "_last", t._sort ? "_start" : 0), _isFromOrFromStart(e) || (t._recent = e), i || _postAddChecks(t, e), t._ts < 0 && _alignPlayhead(t, t._tTime), t
                   },
                   _scrollTrigger = function(t, e) {
                       return (H.ScrollTrigger || _missingPlugin("scrollTrigger", e)) && H.ScrollTrigger.create(e, t)
                   },
                   _attemptInitTween = function(t, e, r, i, n) {
                       return (_initTween(t, e, n), t._initted) ? !r && t._pt && !w && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && O !== tf.frame ? (tt.push(t), t._lazy = [n, i], 1) : void 0 : 1
                   },
                   _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(t) {
                       var e = t.parent;
                       return e && e._ts && e._initted && !e._lock && (0 > e.rawTime() || _parentPlayheadIsBeforeStart(e))
                   },
                   _isFromOrFromStart = function(t) {
                       var e = t.data;
                       return "isFromStart" === e || "isStart" === e
                   },
                   _renderZeroDurationTween = function(t, e, r, i) {
                       var n, s, a, o = t.ratio,
                           _ = e < 0 || !e && (!t._start && _parentPlayheadIsBeforeStart(t) && !(!t._initted && _isFromOrFromStart(t)) || (t._ts < 0 || t._dp._ts < 0) && !_isFromOrFromStart(t)) ? 0 : 1,
                           u = t._rDelay,
                           l = 0;
                       if (u && t._repeat && (s = _animationCycle(l = _clamp(0, t._tDur, e), u), t._yoyo && 1 & s && (_ = 1 - _), s !== _animationCycle(t._tTime, u) && (o = 1 - _, t.vars.repeatRefresh && t._initted && t.invalidate())), _ !== o || w || i || 1e-8 === t._zTime || !e && t._zTime) {
                           if (!t._initted && _attemptInitTween(t, e, i, r, l)) return;
                           for (a = t._zTime, t._zTime = e || (r ? 1e-8 : 0), r || (r = e && !a), t.ratio = _, t._from && (_ = 1 - _), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(_, n.d), n = n._next;
                           e < 0 && _rewindStartAt(t, e, r, !0), t._onUpdate && !r && _callback(t, "onUpdate"), l && t._repeat && !r && t.parent && _callback(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === _ && (_ && _removeFromParent(t, 1), r || w || (_callback(t, _ ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                       } else t._zTime || (t._zTime = e)
                   },
                   _findNextPauseTween = function(t, e, r) {
                       var i;
                       if (r > e)
                           for (i = t._first; i && i._start <= r;) {
                               if ("isPause" === i.data && i._start > e) return i;
                               i = i._next
                           } else
                               for (i = t._last; i && i._start >= r;) {
                                   if ("isPause" === i.data && i._start < e) return i;
                                   i = i._prev
                               }
                   },
                   _setDuration = function(t, e, r, i) {
                       var n = t._repeat,
                           s = _roundPrecise(e) || 0,
                           a = t._tTime / t._tDur;
                       return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : _roundPrecise(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && _alignPlayhead(t, t._tTime = t._tDur * a), t.parent && _setEnd(t), r || _uncache(t.parent, t), t
                   },
                   _onUpdateTotalDuration = function(t) {
                       return t instanceof tv ? _uncache(t) : _setDuration(t, t._dur)
                   },
                   to = {
                       _start: 0,
                       endTime: _emptyFunc,
                       totalDuration: _emptyFunc
                   },
                   _parsePosition = function _parsePosition(t, e, r) {
                       var i, n, s, a = t.labels,
                           o = t._recent || to,
                           _ = t.duration() >= 1e8 ? o.endTime(!1) : t._dur;
                       return _isString(e) && (isNaN(e) || e in a) ? (n = e.charAt(0), s = "%" === e.substr(-1), i = e.indexOf("="), "<" === n || ">" === n) ? (i >= 0 && (e = e.replace(/=/, "")), ("<" === n ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (s ? (i < 0 ? o : r).totalDuration() / 100 : 1)) : i < 0 ? (e in a || (a[e] = _), a[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)), s && r && (n = n / 100 * (U(r) ? r[0] : r).totalDuration()), i > 1 ? _parsePosition(t, e.substr(0, i - 1), r) + n : _ + n) : null == e ? _ : +e
                   },
                   _createTweenType = function(t, e, r) {
                       var i, n, s = _isNumber(e[1]),
                           a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                           o = e[a];
                       if (s && (o.duration = e[1]), o.parent = r, t) {
                           for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = _isNotFalse(n.vars.inherit) && n.parent;
                           o.immediateRender = _isNotFalse(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
                       }
                       return new tk(e[0], o, e[a + 1])
                   },
                   _conditionalReturn = function(t, e) {
                       return t || 0 === t ? e(t) : e
                   },
                   _clamp = function(t, e, r) {
                       return r < t ? t : r > e ? e : r
                   },
                   getUnit = function(t, e) {
                       return _isString(t) && (e = q.exec(t)) ? e[1] : ""
                   },
                   t_ = [].slice,
                   _isArrayLike = function(t, e) {
                       return t && _isObject(t) && "length" in t && (!e && !t.length || t.length - 1 in t && _isObject(t[0])) && !t.nodeType && t !== b
                   },
                   toArray = function(t, e, r) {
                       var i;
                       return P && !e && P.selector ? P.selector(t) : _isString(t) && !r && (S || !_wake()) ? t_.call((e || C).querySelectorAll(t), 0) : U(t) ? (void 0 === i && (i = []), t.forEach(function(t) {
                           var e;
                           return _isString(t) && !r || _isArrayLike(t, 1) ? (e = i).push.apply(e, toArray(t)) : i.push(t)
                       }) || i) : _isArrayLike(t) ? t_.call(t, 0) : t ? [t] : []
                   },
                   selector = function(t) {
                       return t = toArray(t)[0] || _warn("Invalid scope") || {},
                           function(e) {
                               var r = t.current || t.nativeElement || t;
                               return toArray(e, r.querySelectorAll ? r : r === t ? _warn("Invalid scope") || C.createElement("div") : t)
                           }
                   },
                   shuffle = function(t) {
                       return t.sort(function() {
                           return .5 - Math.random()
                       })
                   },
                   distribute = function(t) {
                       if (_isFunction(t)) return t;
                       var e = _isObject(t) ? t : {
                               each: t
                           },
                           r = _parseEase(e.ease),
                           i = e.from || 0,
                           n = parseFloat(e.base) || 0,
                           s = {},
                           a = i > 0 && i < 1,
                           o = isNaN(i) || a,
                           _ = e.axis,
                           u = i,
                           l = i;
                       return _isString(i) ? u = l = ({
                               center: .5,
                               edges: .5,
                               end: 1
                           })[i] || 0 : !a && o && (u = i[0], l = i[1]),
                           function(t, a, h) {
                               var c, d, p, m, g, v, y, T, w, P = (h || e).length,
                                   x = s[P];
                               if (!x) {
                                   if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                                       for (y = -1e8; y < (y = h[w++].getBoundingClientRect().left) && w < P;);
                                       w--
                                   }
                                   for (v = 0, x = s[P] = [], c = o ? Math.min(w, P) * u - .5 : i % w, d = 1e8 === w ? 0 : o ? P * l / w - .5 : i / w | 0, y = 0, T = 1e8; v < P; v++) p = v % w - c, m = d - (v / w | 0), x[v] = g = _ ? Math.abs("y" === _ ? m : p) : B(p * p + m * m), g > y && (y = g), g < T && (T = g);
                                   "random" === i && shuffle(x), x.max = y - T, x.min = T, x.v = P = (parseFloat(e.amount) || parseFloat(e.each) * (w > P ? P - 1 : _ ? "y" === _ ? P / w : w : Math.max(w, P / w)) || 0) * ("edges" === i ? -1 : 1), x.b = P < 0 ? n - P : n, x.u = getUnit(e.amount || e.each) || 0, r = r && P < 0 ? _invertEase(r) : r
                               }
                               return P = (x[t] - x.min) / x.max || 0, _roundPrecise(x.b + (r ? r(P) : P) * x.v) + x.u
                           }
                   },
                   _roundModifier = function(t) {
                       var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                       return function(r) {
                           var i = _roundPrecise(Math.round(parseFloat(r) / t) * t * e);
                           return (i - i % 1) / e + (_isNumber(r) ? 0 : getUnit(r))
                       }
                   },
                   snap = function(t, e) {
                       var r, i, n = U(t);
                       return !n && _isObject(t) && (r = n = t.radius || 1e8, t.values ? (i = !_isNumber((t = toArray(t.values))[0])) && (r *= r) : t = _roundModifier(t.increment)), _conditionalReturn(e, n ? _isFunction(t) ? function(e) {
                           return Math.abs((i = t(e)) - e) <= r ? i : e
                       } : function(e) {
                           for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), _ = 1e8, u = 0, l = t.length; l--;)(n = i ? (n = t[l].x - a) * n + (s = t[l].y - o) * s : Math.abs(t[l] - a)) < _ && (_ = n, u = l);
                           return u = !r || _ <= r ? t[u] : e, i || u === e || _isNumber(e) ? u : u + getUnit(e)
                       } : _roundModifier(t))
                   },
                   random = function(t, e, r, i) {
                       return _conditionalReturn(U(t) ? !e : !0 === r ? (r = 0, !1) : !i, function() {
                           return U(t) ? t[~~(Math.random() * t.length)] : (i = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
                       })
                   },
                   _wrapArray = function(t, e, r) {
                       return _conditionalReturn(r, function(r) {
                           return t[~~e(r)]
                       })
                   },
                   _replaceRandom = function(t) {
                       for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? W : V), a += t.substr(s, e - s) + random(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
                       return a + t.substr(s, t.length - s)
                   },
                   mapRange = function(t, e, r, i, n) {
                       var s = e - t,
                           a = i - r;
                       return _conditionalReturn(n, function(e) {
                           return r + ((e - t) / s * a || 0)
                       })
                   },
                   _getLabelInDirection = function(t, e, r) {
                       var i, n, s, a = t.labels,
                           o = 1e8;
                       for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
                       return s
                   },
                   _callback = function(t, e, r) {
                       var i, n, s, a = t.vars,
                           o = a[e],
                           _ = P,
                           u = t._ctx;
                       if (o) return i = a[e + "Params"], n = a.callbackScope || t, r && tt.length && _lazyRender(), u && (P = u), s = i ? o.apply(n, i) : o.call(n), P = _, s
                   },
                   _interrupt = function(t) {
                       return _removeFromParent(t), t.scrollTrigger && t.scrollTrigger.kill(!!w), 1 > t.progress() && _callback(t, "onInterrupt"), t
                   },
                   tu = [],
                   _createPlugin = function(t) {
                       if (_windowExists() && t) {
                           var e = (t = !t.name && t.default || t).name,
                               r = _isFunction(t),
                               i = e && !r && t.init ? function() {
                                   this._props = []
                               } : t,
                               n = {
                                   init: _emptyFunc,
                                   render: _renderPropTweens,
                                   add: _addPropTween,
                                   kill: _killPropTweensOf,
                                   modifier: _addPluginModifier,
                                   rawVars: 0
                               },
                               s = {
                                   targetTest: 0,
                                   get: 0,
                                   getSetter: _getSetter,
                                   aliases: {},
                                   register: 0
                               };
                           if (_wake(), t !== i) {
                               if (tr[e]) return;
                               _setDefaults(i, _setDefaults(_copyExcluding(t, n), s)), _merge(i.prototype, _merge(n, _copyExcluding(t, s))), tr[i.prop = e] = i, t.targetTest && (ts.push(i), J[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                           }
                           _addGlobal(e, i), t.register && t.register(tz, i, tO)
                       } else t && tu.push(t)
                   },
                   tl = {
                       aqua: [0, 255, 255],
                       lime: [0, 255, 0],
                       silver: [192, 192, 192],
                       black: [0, 0, 0],
                       maroon: [128, 0, 0],
                       teal: [0, 128, 128],
                       blue: [0, 0, 255],
                       navy: [0, 0, 128],
                       white: [255, 255, 255],
                       olive: [128, 128, 0],
                       yellow: [255, 255, 0],
                       orange: [255, 165, 0],
                       gray: [128, 128, 128],
                       purple: [128, 0, 128],
                       green: [0, 128, 0],
                       red: [255, 0, 0],
                       pink: [255, 192, 203],
                       cyan: [0, 255, 255],
                       transparent: [255, 255, 255, 0]
                   },
                   _hue = function(t, e, r) {
                       return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * 255 + .5 | 0
                   },
                   splitColor = function(t, e, r) {
                       var i, n, s, a, o, _, u, l, h, c, d = t ? _isNumber(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : tl.black;
                       if (!d) {
                           if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), tl[t]) d = tl[t];
                           else if ("#" === t.charAt(0)) {
                               if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & 255, 255 & d, parseInt(t.substr(7), 16) / 255];
                               d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                           } else if ("hsl" === t.substr(0, 3)) {
                               if (d = c = t.match(V), e) {
                                   if (~t.indexOf("=")) return d = t.match(Y), r && d.length < 4 && (d[3] = 1), d
                               } else a = +d[0] % 360 / 360, o = +d[1] / 100, n = (_ = +d[2] / 100) <= .5 ? _ * (o + 1) : _ + o - _ * o, i = 2 * _ - n, d.length > 3 && (d[3] *= 1), d[0] = _hue(a + 1 / 3, i, n), d[1] = _hue(a, i, n), d[2] = _hue(a - 1 / 3, i, n)
                           } else d = t.match(V) || tl.transparent;
                           d = d.map(Number)
                       }
                       return e && !c && (_ = ((u = Math.max(i = d[0] / 255, n = d[1] / 255, s = d[2] / 255)) + (l = Math.min(i, n, s))) / 2, u === l ? a = o = 0 : (h = u - l, o = _ > .5 ? h / (2 - u - l) : h / (u + l), a = (u === i ? (n - s) / h + (n < s ? 6 : 0) : u === n ? (s - i) / h + 2 : (i - n) / h + 4) * 60), d[0] = ~~(a + .5), d[1] = ~~(100 * o + .5), d[2] = ~~(100 * _ + .5)), r && d.length < 4 && (d[3] = 1), d
                   },
                   _colorOrderData = function(t) {
                       var e = [],
                           r = [],
                           i = -1;
                       return t.split(th).forEach(function(t) {
                           var n = t.match(j) || [];
                           e.push.apply(e, n), r.push(i += n.length + 1)
                       }), e.c = r, e
                   },
                   _formatColors = function(t, e, r) {
                       var i, n, s, a, o = "",
                           _ = (t + o).match(th),
                           u = e ? "hsla(" : "rgba(",
                           l = 0;
                       if (!_) return t;
                       if (_ = _.map(function(t) {
                               return (t = splitColor(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                           }), r && (s = _colorOrderData(t), (i = r.c).join(o) !== s.c.join(o)))
                           for (a = (n = t.replace(th, "1").split(j)).length - 1; l < a; l++) o += n[l] + (~i.indexOf(l) ? _.shift() || u + "0,0,0,0)" : (s.length ? s : _.length ? _ : r).shift());
                       if (!n)
                           for (a = (n = t.split(th)).length - 1; l < a; l++) o += n[l] + _[l];
                       return o + n[a]
                   },
                   th = function() {
                       var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                       for (t in tl) e += "|" + t + "\\b";
                       return RegExp(e + ")", "gi")
                   }(),
                   tc = /hsl[a]?\(/,
                   _colorStringFilter = function(t) {
                       var e, r = t.join(" ");
                       if (th.lastIndex = 0, th.test(r)) return e = tc.test(r), t[1] = _formatColors(t[1], e), t[0] = _formatColors(t[0], e, _colorOrderData(t[1])), !0
                   },
                   tf = (l = Date.now, h = 500, c = 33, p = d = l(), m = 1e3 / 240, g = 1e3 / 240, v = [], y = function _tick(t) {
                       var e, r, i, a, y = l() - p,
                           T = !0 === t;
                       if (y > h && (d += y - c), p += y, ((e = (i = p - d) - g) > 0 || T) && (a = ++o.frame, _ = i - 1e3 * o.time, o.time = i /= 1e3, g += e + (e >= m ? 4 : m - e), r = 1), T || (n = s(_tick)), r)
                           for (u = 0; u < v.length; u++) v[u](i, _, a, t)
                   }, o = {
                       time: 0,
                       frame: 0,
                       tick: function() {
                           y(!0)
                       },
                       deltaRatio: function(t) {
                           return _ / (1e3 / (t || 60))
                       },
                       wake: function() {
                           k && (!S && _windowExists() && (C = (b = S = window).document || {}, H.gsap = tz, (b.gsapVersions || (b.gsapVersions = [])).push(tz.version), _install(Q || b.GreenSockGlobals || !b.gsap && b || {}), a = b.requestAnimationFrame, tu.forEach(_createPlugin)), n && o.sleep(), s = a || function(t) {
                               return setTimeout(t, g - 1e3 * o.time + 1 | 0)
                           }, M = 1, y(2))
                       },
                       sleep: function() {
                           (a ? b.cancelAnimationFrame : clearTimeout)(n), M = 0, s = _emptyFunc
                       },
                       lagSmoothing: function(t, e) {
                           c = Math.min(e || 33, h = t || 1 / 0)
                       },
                       fps: function(t) {
                           m = 1e3 / (t || 240), g = 1e3 * o.time + m
                       },
                       add: function(t, e, r) {
                           var i = e ? function(e, r, n, s) {
                               t(e, r, n, s), o.remove(i)
                           } : t;
                           return o.remove(t), v[r ? "unshift" : "push"](i), _wake(), i
                       },
                       remove: function(t, e) {
                           ~(e = v.indexOf(t)) && v.splice(e, 1) && u >= e && u--
                       },
                       _listeners: v
                   }),
                   _wake = function() {
                       return !M && tf.wake()
                   },
                   td = {},
                   tp = /^[\d.\-M][\d.\-,\s]/,
                   tm = /["']/g,
                   _parseObjectInString = function(t) {
                       for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, _ = s.length; o < _; o++) r = s[o], e = o !== _ - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(tm, "").trim() : +i, a = r.substr(e + 1).trim();
                       return n
                   },
                   _valueInParentheses = function(t) {
                       var e = t.indexOf("(") + 1,
                           r = t.indexOf(")"),
                           i = t.indexOf("(", e);
                       return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
                   },
                   _configEaseFromString = function(t) {
                       var e = (t + "").split("("),
                           r = td[e[0]];
                       return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [_parseObjectInString(e[1])] : _valueInParentheses(t).split(",").map(_numericIfPossible)) : td._CE && tp.test(t) ? td._CE("", t) : r
                   },
                   _invertEase = function(t) {
                       return function(e) {
                           return 1 - t(1 - e)
                       }
                   },
                   _propagateYoyoEase = function _propagateYoyoEase(t, e) {
                       for (var r, i = t._first; i;) i instanceof tv ? _propagateYoyoEase(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? _propagateYoyoEase(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
                   },
                   _parseEase = function(t, e) {
                       return t && (_isFunction(t) ? t : td[t] || _configEaseFromString(t)) || e
                   },
                   _insertEase = function(t, e, r, i) {
                       void 0 === r && (r = function(t) {
                           return 1 - e(1 - t)
                       }), void 0 === i && (i = function(t) {
                           return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
                       });
                       var n, s = {
                           easeIn: e,
                           easeOut: r,
                           easeInOut: i
                       };
                       return _forEachName(t, function(t) {
                           for (var e in td[t] = H[t] = s, td[n = t.toLowerCase()] = r, s) td[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = td[t + "." + e] = s[e]
                       }), s
                   },
                   _easeInOutFromOut = function(t) {
                       return function(e) {
                           return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t((e - .5) * 2) / 2
                       }
                   },
                   _configElastic = function _configElastic(t, e, r) {
                       var i = e >= 1 ? e : 1,
                           n = (r || (t ? .3 : .45)) / (e < 1 ? e : 1),
                           s = n / D * (Math.asin(1 / i) || 0),
                           easeOut = function(t) {
                               return 1 === t ? 1 : i * Math.pow(2, -10 * t) * I((t - s) * n) + 1
                           },
                           a = "out" === t ? easeOut : "in" === t ? function(t) {
                               return 1 - easeOut(1 - t)
                           } : _easeInOutFromOut(easeOut);
                       return n = D / n, a.config = function(e, r) {
                           return _configElastic(t, e, r)
                       }, a
                   },
                   _configBack = function _configBack(t, e) {
                       void 0 === e && (e = 1.70158);
                       var easeOut = function(t) {
                               return t ? --t * t * ((e + 1) * t + e) + 1 : 0
                           },
                           r = "out" === t ? easeOut : "in" === t ? function(t) {
                               return 1 - easeOut(1 - t)
                           } : _easeInOutFromOut(easeOut);
                       return r.config = function(e) {
                           return _configBack(t, e)
                       }, r
                   };
               _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
                   var r = e < 5 ? e + 1 : e;
                   _insertEase(t + ",Power" + (r - 1), e ? function(t) {
                       return Math.pow(t, r)
                   } : function(t) {
                       return t
                   }, function(t) {
                       return 1 - Math.pow(1 - t, r)
                   }, function(t) {
                       return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
                   })
               }), td.Linear.easeNone = td.none = td.Linear.easeIn, _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic()), tT = 2 * (ty = 1 / 2.75), tw = 2.5 * ty, _insertEase("Bounce", function(t) {
                   return 1 - tP(1 - t)
               }, tP = function(t) {
                   return t < ty ? 7.5625 * t * t : t < tT ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < tw ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + .984375
               }), _insertEase("Expo", function(t) {
                   return t ? Math.pow(2, 10 * (t - 1)) : 0
               }), _insertEase("Circ", function(t) {
                   return -(B(1 - t * t) - 1)
               }), _insertEase("Sine", function(t) {
                   return 1 === t ? 1 : -z(t * R) + 1
               }), _insertEase("Back", _configBack("in"), _configBack("out"), _configBack()), td.SteppedEase = td.steps = H.SteppedEase = {
                   config: function(t, e) {
                       void 0 === t && (t = 1);
                       var r = 1 / t,
                           i = t + (e ? 0 : 1),
                           n = e ? 1 : 0;
                       return function(t) {
                           return ((i * _clamp(0, .99999999, t) | 0) + n) * r
                       }
                   }
               }, F.ease = td["quad.out"], _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
                   return ta += t + "," + t + "Params,"
               });
               var GSCache = function(t, e) {
                       this.id = N++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : _getProperty, this.set = e ? e.getSetter : _getSetter
                   },
                   tg = function() {
                       function Animation(t) {
                           this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, _setDuration(this, +t.duration, 1, 1), this.data = t.data, P && (this._ctx = P, P.data.push(this)), M || tf.wake()
                       }
                       var t = Animation.prototype;
                       return t.delay = function(t) {
                           return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                       }, t.duration = function(t) {
                           return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                       }, t.totalDuration = function(t) {
                           return arguments.length ? (this._dirty = 0, _setDuration(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                       }, t.totalTime = function(t, e) {
                           if (_wake(), !arguments.length) return this._tTime;
                           var r = this._dp;
                           if (r && r.smoothChildTiming && this._ts) {
                               for (_alignPlayhead(this, t), !r._dp || r.parent || _postAddChecks(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : -((r.totalDuration() - r._tTime) / r._ts)) && r.totalTime(r._tTime, !0), r = r.parent;
                               !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && _addToTimeline(this._dp, this, this._start - this._delay)
                           }
                           return this._tTime === t && (this._dur || e) && (!this._initted || 1e-8 !== Math.abs(this._zTime)) && (t || this._initted || !this.add && !this._ptLookup) || (this._ts || (this._pTime = t), _lazySafeRender(this, t, e)), this
                       }, t.time = function(t, e) {
                           return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
                       }, t.totalProgress = function(t, e) {
                           return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                       }, t.progress = function(t, e) {
                           return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + _elapsedCycleDuration(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                       }, t.iteration = function(t, e) {
                           var r = this.duration() + this._rDelay;
                           return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? _animationCycle(this._tTime, r) + 1 : 1
                       }, t.timeScale = function(t) {
                           if (!arguments.length) return -.00000001 === this._rts ? 0 : this._rts;
                           if (this._rts === t) return this;
                           var e = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
                           return this._rts = +t || 0, this._ts = this._ps || -.00000001 === t ? 0 : this._rts, this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, e), !0), _setEnd(this), _recacheAncestors(this)
                       }, t.paused = function(t) {
                           return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (_wake(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
                       }, t.startTime = function(t) {
                           if (arguments.length) {
                               this._start = t;
                               var e = this.parent || this._dp;
                               return e && (e._sort || !this.parent) && _addToTimeline(e, this, t - this._delay), this
                           }
                           return this._start
                       }, t.endTime = function(t) {
                           return this._start + (_isNotFalse(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                       }, t.rawTime = function(t) {
                           var e = this.parent || this._dp;
                           return e ? t && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? _parentToChildTotalTime(e.rawTime(t), this) : this._tTime : this._tTime
                       }, t.revert = function(t) {
                           void 0 === t && (t = $);
                           var e = w;
                           return w = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), w = e, this
                       }, t.globalTime = function(t) {
                           for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
                           return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : r
                       }, t.repeat = function(t) {
                           return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, _onUpdateTotalDuration(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                       }, t.repeatDelay = function(t) {
                           if (arguments.length) {
                               var e = this._time;
                               return this._rDelay = t, _onUpdateTotalDuration(this), e ? this.time(e) : this
                           }
                           return this._rDelay
                       }, t.yoyo = function(t) {
                           return arguments.length ? (this._yoyo = t, this) : this._yoyo
                       }, t.seek = function(t, e) {
                           return this.totalTime(_parsePosition(this, t), _isNotFalse(e))
                       }, t.restart = function(t, e) {
                           return this.play().totalTime(t ? -this._delay : 0, _isNotFalse(e))
                       }, t.play = function(t, e) {
                           return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                       }, t.reverse = function(t, e) {
                           return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                       }, t.pause = function(t, e) {
                           return null != t && this.seek(t, e), this.paused(!0)
                       }, t.resume = function() {
                           return this.paused(!1)
                       }, t.reversed = function(t) {
                           return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -.00000001 : 0)), this) : this._rts < 0
                       }, t.invalidate = function() {
                           return this._initted = this._act = 0, this._zTime = -.00000001, this
                       }, t.isActive = function() {
                           var t, e = this.parent || this._dp,
                               r = this._start;
                           return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8)
                       }, t.eventCallback = function(t, e, r) {
                           var i = this.vars;
                           return arguments.length > 1 ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
                       }, t.then = function(t) {
                           var e = this;
                           return new Promise(function(r) {
                               var i = _isFunction(t) ? t : _passThrough,
                                   _resolve = function() {
                                       var t = e.then;
                                       e.then = null, _isFunction(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), r(i), e.then = t
                                   };
                               e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? _resolve() : e._prom = _resolve
                           })
                       }, t.kill = function() {
                           _interrupt(this)
                       }, Animation
                   }();
               _setDefaults(tg.prototype, {
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
                   _zTime: -.00000001,
                   _prom: 0,
                   _ps: !1,
                   _rts: 1
               });
               var tv = function(t) {
                   function Timeline(e, r) {
                       var i;
                       return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = _isNotFalse(e.sortChildren), x && _addToTimeline(e.parent || x, _assertThisInitialized(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && _scrollTrigger(_assertThisInitialized(i), e.scrollTrigger), i
                   }
                   _inheritsLoose(Timeline, t);
                   var e = Timeline.prototype;
                   return e.to = function(t, e, r) {
                       return _createTweenType(0, arguments, this), this
                   }, e.from = function(t, e, r) {
                       return _createTweenType(1, arguments, this), this
                   }, e.fromTo = function(t, e, r, i) {
                       return _createTweenType(2, arguments, this), this
                   }, e.set = function(t, e, r) {
                       return e.duration = 0, e.parent = this, _inheritDefaults(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new tk(t, e, _parsePosition(this, r), 1), this
                   }, e.call = function(t, e, r) {
                       return _addToTimeline(this, tk.delayedCall(0, t, e), r)
                   }, e.staggerTo = function(t, e, r, i, n, s, a) {
                       return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new tk(t, r, _parsePosition(this, n)), this
                   }, e.staggerFrom = function(t, e, r, i, n, s, a) {
                       return r.runBackwards = 1, _inheritDefaults(r).immediateRender = _isNotFalse(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
                   }, e.staggerFromTo = function(t, e, r, i, n, s, a, o) {
                       return i.startAt = r, _inheritDefaults(i).immediateRender = _isNotFalse(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
                   }, e.render = function(t, e, r) {
                       var i, n, s, a, o, _, u, l, h, c, d, p, m = this._time,
                           g = this._dirty ? this.totalDuration() : this._tDur,
                           v = this._dur,
                           y = t <= 0 ? 0 : _roundPrecise(t),
                           T = this._zTime < 0 != t < 0 && (this._initted || !v);
                       if (this !== x && y > g && t >= 0 && (y = g), y !== this._tTime || r || T) {
                           if (m !== this._time && v && (y += this._time - m, t += this._time - m), i = y, h = this._start, _ = !(l = this._ts), T && (v || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                               if (d = this._yoyo, o = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                               if (i = _roundPrecise(y % o), y === g ? (a = this._repeat, i = v) : ((a = ~~(y / o)) && a === y / o && (i = v, a--), i > v && (i = v)), c = _animationCycle(this._tTime, o), !m && this._tTime && c !== a && this._tTime - c * o - this._dur <= 0 && (c = a), d && 1 & a && (i = v - i, p = 1), a !== c && !this._lock) {
                                   var P = d && 1 & c,
                                       b = P === (d && 1 & a);
                                   if (a < c && (P = !P), m = P ? 0 : y % v ? v : y, this._lock = 1, this.render(m || (p ? 0 : _roundPrecise(a * o)), e, !v)._lock = 0, this._tTime = y, !e && this.parent && _callback(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), m && m !== this._time || !this._ts !== _ || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur, g = this._tDur, b && (this._lock = 2, m = P ? v : -.0001, this.render(m, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !_)) return this;
                                   _propagateYoyoEase(this, p)
                               }
                           }
                           if (this._hasPause && !this._forcing && this._lock < 2 && (u = _findNextPauseTween(this, _roundPrecise(m), _roundPrecise(i))) && (y -= i - (i = u._start)), this._tTime = y, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && i && !e && !a && (_callback(this, "onStart"), this._tTime !== y)) return this;
                           if (i >= m && t >= 0)
                               for (n = this._first; n;) {
                                   if (s = n._next, (n._act || i >= n._start) && n._ts && u !== n) {
                                       if (n.parent !== this) return this.render(t, e, r);
                                       if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !_) {
                                           u = 0, s && (y += this._zTime = -.00000001);
                                           break
                                       }
                                   }
                                   n = s
                               } else {
                                   n = this._last;
                                   for (var S = t < 0 ? t : i; n;) {
                                       if (s = n._prev, (n._act || S <= n._end) && n._ts && u !== n) {
                                           if (n.parent !== this) return this.render(t, e, r);
                                           if (n.render(n._ts > 0 ? (S - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (S - n._start) * n._ts, e, r || w && (n._initted || n._startAt)), i !== this._time || !this._ts && !_) {
                                               u = 0, s && (y += this._zTime = S ? -.00000001 : 1e-8);
                                               break
                                           }
                                       }
                                       n = s
                                   }
                               }
                           if (u && !e && (this.pause(), u.render(i >= m ? 0 : -.00000001)._zTime = i >= m ? 1 : -1, this._ts)) return this._start = h, _setEnd(this), this.render(t, e, r);
                           this._onUpdate && !e && _callback(this, "onUpdate", !0), (y === g && this._tTime >= this.totalDuration() || !y && m) && (h === this._start || Math.abs(l) !== Math.abs(this._ts)) && !this._lock && ((t || !v) && (y === g && this._ts > 0 || !y && this._ts < 0) && _removeFromParent(this, 1), e || t < 0 && !m || !y && !m && g || (_callback(this, y === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < g && this.timeScale() > 0) && this._prom()))
                       }
                       return this
                   }, e.add = function(t, e) {
                       var r = this;
                       if (_isNumber(e) || (e = _parsePosition(this, e, t)), !(t instanceof tg)) {
                           if (U(t)) return t.forEach(function(t) {
                               return r.add(t, e)
                           }), this;
                           if (_isString(t)) return this.addLabel(t, e);
                           if (!_isFunction(t)) return this;
                           t = tk.delayedCall(0, t)
                       }
                       return this !== t ? _addToTimeline(this, t, e) : this
                   }, e.getChildren = function(t, e, r, i) {
                       void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -1e8);
                       for (var n = [], s = this._first; s;) s._start >= i && (s instanceof tk ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
                       return n
                   }, e.getById = function(t) {
                       for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                           if (e[r].vars.id === t) return e[r]
                   }, e.remove = function(t) {
                       return _isString(t) ? this.removeLabel(t) : _isFunction(t) ? this.killTweensOf(t) : (_removeLinkedListItem(this, t), t === this._recent && (this._recent = this._last), _uncache(this))
                   }, e.totalTime = function(e, r) {
                       return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = _roundPrecise(tf.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
                   }, e.addLabel = function(t, e) {
                       return this.labels[t] = _parsePosition(this, e), this
                   }, e.removeLabel = function(t) {
                       return delete this.labels[t], this
                   }, e.addPause = function(t, e, r) {
                       var i = tk.delayedCall(0, e || _emptyFunc, r);
                       return i.data = "isPause", this._hasPause = 1, _addToTimeline(this, i, _parsePosition(this, t))
                   }, e.removePause = function(t) {
                       var e = this._first;
                       for (t = _parsePosition(this, t); e;) e._start === t && "isPause" === e.data && _removeFromParent(e), e = e._next
                   }, e.killTweensOf = function(t, e, r) {
                       for (var i = this.getTweensOf(t, r), n = i.length; n--;) tx !== i[n] && i[n].kill(t, e);
                       return this
                   }, e.getTweensOf = function(t, e) {
                       for (var r, i = [], n = toArray(t), s = this._first, a = _isNumber(e); s;) s instanceof tk ? _arrayContainsAny(s._targets, n) && (a ? (!tx || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
                       return i
                   }, e.tweenTo = function(t, e) {
                       e = e || {};
                       var r, i = this,
                           n = _parsePosition(i, t),
                           s = e,
                           a = s.startAt,
                           o = s.onStart,
                           _ = s.onStartParams,
                           u = s.immediateRender,
                           l = tk.to(i, _setDefaults({
                               ease: e.ease || "none",
                               lazy: !1,
                               immediateRender: !1,
                               time: n,
                               overwrite: "auto",
                               duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || 1e-8,
                               onStart: function() {
                                   if (i.pause(), !r) {
                                       var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                                       l._dur !== t && _setDuration(l, t, 0, 1).render(l._time, !0, !0), r = 1
                                   }
                                   o && o.apply(l, _ || [])
                               }
                           }, e));
                       return u ? l.render(0) : l
                   }, e.tweenFromTo = function(t, e, r) {
                       return this.tweenTo(e, _setDefaults({
                           startAt: {
                               time: _parsePosition(this, t)
                           }
                       }, r))
                   }, e.recent = function() {
                       return this._recent
                   }, e.nextLabel = function(t) {
                       return void 0 === t && (t = this._time), _getLabelInDirection(this, _parsePosition(this, t))
                   }, e.previousLabel = function(t) {
                       return void 0 === t && (t = this._time), _getLabelInDirection(this, _parsePosition(this, t), 1)
                   }, e.currentLabel = function(t) {
                       return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
                   }, e.shiftChildren = function(t, e, r) {
                       void 0 === r && (r = 0);
                       for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
                       if (e)
                           for (i in s) s[i] >= r && (s[i] += t);
                       return _uncache(this)
                   }, e.invalidate = function(e) {
                       var r = this._first;
                       for (this._lock = 0; r;) r.invalidate(e), r = r._next;
                       return t.prototype.invalidate.call(this, e)
                   }, e.clear = function(t) {
                       void 0 === t && (t = !0);
                       for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
                       return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), _uncache(this)
                   }, e.totalDuration = function(t) {
                       var e, r, i, n = 0,
                           s = this._last,
                           a = 1e8;
                       if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
                       if (this._dirty) {
                           for (i = this.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && this._sort && s._ts && !this._lock ? (this._lock = 1, _addToTimeline(this, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (n -= r, (!i && !this._dp || i && i.smoothChildTiming) && (this._start += r / this._ts, this._time -= r, this._tTime -= r), this.shiftChildren(-r, !1, -Infinity), a = 0), s._end > n && s._ts && (n = s._end), s = e;
                           _setDuration(this, this === x && this._time > n ? this._time : n, 1, 1), this._dirty = 0
                       }
                       return this._tDur
                   }, Timeline.updateRoot = function(t) {
                       if (x._ts && (_lazySafeRender(x, _parentToChildTotalTime(t, x)), O = tf.frame), tf.frame >= tn) {
                           tn += A.autoSleep || 120;
                           var e = x._first;
                           if ((!e || !e._ts) && A.autoSleep && tf._listeners.length < 2) {
                               for (; e && !e._ts;) e = e._next;
                               e || tf.sleep()
                           }
                       }
                   }, Timeline
               }(tg);
               _setDefaults(tv.prototype, {
                   _lock: 0,
                   _hasPause: 0,
                   _forcing: 0
               });
               var ty, tT, tw, tP, tx, tb, _addComplexStringPropTween = function(t, e, r, i, n, s, a) {
                       var o, _, u, l, h, c, d, p, m = new tO(this._pt, t, e, 0, 1, _renderComplexString, null, n),
                           g = 0,
                           v = 0;
                       for (m.b = r, m.e = i, r += "", i += "", (d = ~i.indexOf("random(")) && (i = _replaceRandom(i)), s && (s(p = [r, i], t, e), r = p[0], i = p[1]), _ = r.match(G) || []; o = G.exec(i);) l = o[0], h = i.substring(g, o.index), u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1), l !== _[v++] && (c = parseFloat(_[v - 1]) || 0, m._pt = {
                           _next: m._pt,
                           p: h || 1 === v ? h : ",",
                           s: c,
                           c: "=" === l.charAt(1) ? _parseRelative(c, l) - c : parseFloat(l) - c,
                           m: u && u < 4 ? Math.round : 0
                       }, g = G.lastIndex);
                       return m.c = g < i.length ? i.substring(g, i.length) : "", m.fp = a, (X.test(i) || d) && (m.e = 0), this._pt = m, m
                   },
                   _addPropTween = function(t, e, r, i, n, s, a, o, _, u) {
                       _isFunction(i) && (i = i(n || 0, t, s));
                       var l, h = t[e],
                           c = "get" !== r ? r : _isFunction(h) ? _ ? t[e.indexOf("set") || !_isFunction(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](_) : t[e]() : h,
                           d = _isFunction(h) ? _ ? _setterFuncWithParam : _setterFunc : _setterPlain;
                       if (_isString(i) && (~i.indexOf("random(") && (i = _replaceRandom(i)), "=" === i.charAt(1) && ((l = _parseRelative(c, i) + (getUnit(c) || 0)) || 0 === l) && (i = l)), !u || c !== i || tb) return isNaN(c * i) || "" === i ? (h || e in t || _missingPlugin(e, i), _addComplexStringPropTween.call(this, t, e, c, i, d, o || A.stringFilter, _)) : (l = new tO(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof h ? _renderBoolean : _renderPlain, 0, d), _ && (l.fp = _), a && l.modifier(a, this, t), this._pt = l)
                   },
                   _processVars = function(t, e, r, i, n) {
                       if (_isFunction(t) && (t = _parseFuncOrString(t, n, e, r, i)), !_isObject(t) || t.style && t.nodeType || U(t) || L(t)) return _isString(t) ? _parseFuncOrString(t, n, e, r, i) : t;
                       var s, a = {};
                       for (s in t) a[s] = _parseFuncOrString(t[s], n, e, r, i);
                       return a
                   },
                   _checkPlugin = function(t, e, r, i, n, s) {
                       var a, o, _, u;
                       if (tr[t] && !1 !== (a = new tr[t]).init(n, a.rawVars ? e[t] : _processVars(e[t], i, n, s, r), r, i, s) && (r._pt = o = new tO(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== E))
                           for (_ = r._ptLookup[r._targets.indexOf(n)], u = a._props.length; u--;) _[a._props[u]] = o;
                       return a
                   },
                   _initTween = function _initTween(t, e, r) {
                       var i, n, s, a, o, _, u, l, h, c, d, p, m, g = t.vars,
                           v = g.ease,
                           y = g.startAt,
                           P = g.immediateRender,
                           b = g.lazy,
                           S = g.onUpdate,
                           C = g.onUpdateParams,
                           k = g.callbackScope,
                           O = g.runBackwards,
                           E = g.yoyoEase,
                           M = g.keyframes,
                           A = g.autoRevert,
                           D = t._dur,
                           R = t._startAt,
                           N = t._targets,
                           B = t.parent,
                           z = B && "nested" === B.data ? B.vars.targets : N,
                           I = "auto" === t._overwrite && !T,
                           L = t.timeline;
                       if (!L || M && v || (v = "none"), t._ease = _parseEase(v, F.ease), t._yEase = E ? _invertEase(_parseEase(!0 === E ? v : E, F.ease)) : 0, E && t._yoyo && !t._repeat && (E = t._yEase, t._yEase = t._ease, t._ease = E), t._from = !L && !!g.runBackwards, !L || M && !g.stagger) {
                           if (p = (l = N[0] ? _getCache(N[0]).harness : 0) && g[l.prop], i = _copyExcluding(g, J), R && (R._zTime < 0 && R.progress(1), e < 0 && O && P && !A ? R.render(-1, !0) : R.revert(O && D ? K : Z), R._lazy = 0), y) {
                               if (_removeFromParent(t._startAt = tk.set(N, _setDefaults({
                                       data: "isStart",
                                       overwrite: !1,
                                       parent: B,
                                       immediateRender: !0,
                                       lazy: !R && _isNotFalse(b),
                                       startAt: null,
                                       delay: 0,
                                       onUpdate: S,
                                       onUpdateParams: C,
                                       callbackScope: k,
                                       stagger: 0
                                   }, y))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (w || !P && !A) && t._startAt.revert(K), P && D && e <= 0 && r <= 0) {
                                   e && (t._zTime = e);
                                   return
                               }
                           } else if (O && D && !R) {
                               if (e && (P = !1), s = _setDefaults({
                                       overwrite: !1,
                                       data: "isFromStart",
                                       lazy: P && !R && _isNotFalse(b),
                                       immediateRender: P,
                                       stagger: 0,
                                       parent: B
                                   }, i), p && (s[l.prop] = p), _removeFromParent(t._startAt = tk.set(N, s)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (w ? t._startAt.revert(K) : t._startAt.render(-1, !0)), t._zTime = e, P) {
                                   if (!e) return
                               } else _initTween(t._startAt, 1e-8, 1e-8)
                           }
                           for (n = 0, t._pt = t._ptCache = 0, b = D && _isNotFalse(b) || b && !D; n < N.length; n++) {
                               if (u = (o = N[n])._gsap || _harness(N)[n]._gsap, t._ptLookup[n] = c = {}, te[u.id] && tt.length && _lazyRender(), d = z === N ? n : z.indexOf(o), l && !1 !== (h = new l).init(o, p || i, t, d, z) && (t._pt = a = new tO(t._pt, o, h.name, 0, 1, h.render, h, 0, h.priority), h._props.forEach(function(t) {
                                       c[t] = a
                                   }), h.priority && (_ = 1)), !l || p)
                                   for (s in i) tr[s] && (h = _checkPlugin(s, i, t, d, o, z)) ? h.priority && (_ = 1) : c[s] = a = _addPropTween.call(t, o, s, "get", i[s], d, z, 0, g.stringFilter);
                               t._op && t._op[n] && t.kill(o, t._op[n]), I && t._pt && (tx = t, x.killTweensOf(o, c, t.globalTime(e)), m = !t.parent, tx = 0), t._pt && b && (te[u.id] = 1)
                           }
                           _ && _sortPropTweensByPriority(t), t._onInit && t._onInit(t)
                       }
                       t._onUpdate = S, t._initted = (!t._op || t._pt) && !m, M && e <= 0 && L.render(1e8, !0, !0)
                   },
                   _updatePropTweens = function(t, e, r, i, n, s, a) {
                       var o, _, u, l, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                       if (!h)
                           for (h = t._ptCache[e] = [], u = t._ptLookup, l = t._targets.length; l--;) {
                               if ((o = u[l][e]) && o.d && o.d._pt)
                                   for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                               if (!o) return tb = 1, t.vars[e] = "+=0", _initTween(t, a), tb = 0, 1;
                               h.push(o)
                           }
                       for (l = h.length; l--;)(o = (_ = h[l])._pt || _).s = (i || 0 === i) && !n ? i : o.s + (i || 0) + s * o.c, o.c = r - o.s, _.e && (_.e = _round(r) + getUnit(_.e)), _.b && (_.b = o.s + getUnit(_.b))
                   },
                   _addAliasesToVars = function(t, e) {
                       var r, i, n, s, a = t[0] ? _getCache(t[0]).harness : 0,
                           o = a && a.aliases;
                       if (!o) return e;
                       for (i in r = _merge({}, e), o)
                           if (i in r)
                               for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
                       return r
                   },
                   _parseKeyframe = function(t, e, r, i) {
                       var n, s, a = e.ease || i || "power1.inOut";
                       if (U(e)) s = r[t] || (r[t] = []), e.forEach(function(t, r) {
                           return s.push({
                               t: r / (e.length - 1) * 100,
                               v: t,
                               e: a
                           })
                       });
                       else
                           for (n in e) s = r[n] || (r[n] = []), "ease" === n || s.push({
                               t: parseFloat(t),
                               v: e[n],
                               e: a
                           })
                   },
                   _parseFuncOrString = function(t, e, r, i, n) {
                       return _isFunction(t) ? t.call(e, r, i, n) : _isString(t) && ~t.indexOf("random(") ? _replaceRandom(t) : t
                   },
                   tS = ta + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
                   tC = {};
               _forEachName(tS + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
                   return tC[t] = 1
               });
               var tk = function(t) {
                   function Tween(e, r, i, n) {
                       "number" == typeof r && (i.duration = r, r = i, i = null);
                       var s, a, o, _, u, l, h, c, d, p = (s = t.call(this, n ? r : _inheritDefaults(r)) || this).vars,
                           m = p.duration,
                           g = p.delay,
                           v = p.immediateRender,
                           y = p.stagger,
                           w = p.overwrite,
                           P = p.keyframes,
                           b = p.defaults,
                           S = p.scrollTrigger,
                           C = p.yoyoEase,
                           k = r.parent || x,
                           O = (U(e) || L(e) ? _isNumber(e[0]) : "length" in r) ? [e] : toArray(e);
                       if (s._targets = O.length ? _harness(O) : _warn("GSAP target " + e + " not found. https://greensock.com", !A.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = w, P || y || _isFuncOrString(m) || _isFuncOrString(g)) {
                           if (r = s.vars, (a = s.timeline = new tv({
                                   data: "nested",
                                   defaults: b || {},
                                   targets: k && "nested" === k.data ? k.vars.targets : O
                               })).kill(), a.parent = a._dp = _assertThisInitialized(s), a._start = 0, y || _isFuncOrString(m) || _isFuncOrString(g)) {
                               if (u = O.length, c = y && distribute(y), _isObject(y))
                                   for (l in y) ~tS.indexOf(l) && (d || (d = {}), d[l] = y[l]);
                               for (o = 0; o < u; o++)(_ = _copyExcluding(r, tC)).stagger = 0, C && (_.yoyoEase = C), d && _merge(_, d), h = O[o], _.duration = +_parseFuncOrString(m, _assertThisInitialized(s), o, h, O), _.delay = (+_parseFuncOrString(g, _assertThisInitialized(s), o, h, O) || 0) - s._delay, !y && 1 === u && _.delay && (s._delay = g = _.delay, s._start += g, _.delay = 0), a.to(h, _, c ? c(o, h, O) : 0), a._ease = td.none;
                               a.duration() ? m = g = 0 : s.timeline = 0
                           } else if (P) {
                               _inheritDefaults(_setDefaults(a.vars.defaults, {
                                   ease: "none"
                               })), a._ease = _parseEase(P.ease || r.ease || "none");
                               var E, M, F, D = 0;
                               if (U(P)) P.forEach(function(t) {
                                   return a.to(O, t, ">")
                               }), a.duration();
                               else {
                                   for (l in _ = {}, P) "ease" === l || "easeEach" === l || _parseKeyframe(l, P[l], _, P.easeEach);
                                   for (l in _)
                                       for (o = 0, E = _[l].sort(function(t, e) {
                                               return t.t - e.t
                                           }), D = 0; o < E.length; o++)(F = {
                                           ease: (M = E[o]).e,
                                           duration: (M.t - (o ? E[o - 1].t : 0)) / 100 * m
                                       })[l] = M.v, a.to(O, F, D), D += F.duration;
                                   a.duration() < m && a.to({}, {
                                       duration: m - a.duration()
                                   })
                               }
                           }
                           m || s.duration(m = a.duration())
                       } else s.timeline = 0;
                       return !0 !== w || T || (tx = _assertThisInitialized(s), x.killTweensOf(O), tx = 0), _addToTimeline(k, _assertThisInitialized(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), (v || !m && !P && s._start === _roundPrecise(k._time) && _isNotFalse(v) && function _hasNoPausedAncestors(t) {
                           return !t || t._ts && _hasNoPausedAncestors(t.parent)
                       }(_assertThisInitialized(s)) && "nested" !== k.data) && (s._tTime = -.00000001, s.render(Math.max(0, -g) || 0)), S && _scrollTrigger(_assertThisInitialized(s), S), s
                   }
                   _inheritsLoose(Tween, t);
                   var e = Tween.prototype;
                   return e.render = function(t, e, r) {
                       var i, n, s, a, o, _, u, l, h, c = this._time,
                           d = this._tDur,
                           p = this._dur,
                           m = t < 0,
                           g = t > d - 1e-8 && !m ? d : t < 1e-8 ? 0 : t;
                       if (p) {
                           if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
                               if (i = g, l = this.timeline, this._repeat) {
                                   if (a = p + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * a + t, e, r);
                                   if (i = _roundPrecise(g % a), g === d ? (s = this._repeat, i = p) : ((s = ~~(g / a)) && s === g / a && (i = p, s--), i > p && (i = p)), (_ = this._yoyo && 1 & s) && (h = this._yEase, i = p - i), o = _animationCycle(this._tTime, a), i === c && !r && this._initted) return this._tTime = g, this;
                                   s === o || (l && this._yEase && _propagateYoyoEase(l, _), !this.vars.repeatRefresh || _ || this._lock || (this._lock = r = 1, this.render(_roundPrecise(a * s), !0).invalidate()._lock = 0))
                               }
                               if (!this._initted) {
                                   if (_attemptInitTween(this, m ? t : i, r, e, g)) return this._tTime = 0, this;
                                   if (c !== this._time) return this;
                                   if (p !== this._dur) return this.render(t, e, r)
                               }
                               if (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (h || this._ease)(i / p), this._from && (this.ratio = u = 1 - u), i && !c && !e && !s && (_callback(this, "onStart"), this._tTime !== g)) return this;
                               for (n = this._pt; n;) n.r(u, n.d), n = n._next;
                               l && l.render(t < 0 ? t : !i && _ ? -.00000001 : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && _rewindStartAt(this, t, e, r), _callback(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && _callback(this, "onRepeat"), (g === this._tDur || !g) && this._tTime === g && (m && !this._onUpdate && _rewindStartAt(this, t, !0, !0), (t || !p) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && _removeFromParent(this, 1), !e && !(m && !c) && (g || c || _) && (_callback(this, g === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < d && this.timeScale() > 0) && this._prom()))
                           }
                       } else _renderZeroDurationTween(this, t, e, r);
                       return this
                   }, e.targets = function() {
                       return this._targets
                   }, e.invalidate = function(e) {
                       return e && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
                   }, e.resetTo = function(t, e, r, i) {
                       M || tf.wake(), this._ts || this.play();
                       var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                       return (this._initted || _initTween(this, n), _updatePropTweens(this, t, e, r, i, this._ease(n / this._dur), n)) ? this.resetTo(t, e, r, i) : (_alignPlayhead(this, 0), this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                   }, e.kill = function(t, e) {
                       if (void 0 === e && (e = "all"), !t && (!e || "all" === e)) return this._lazy = this._pt = 0, this.parent ? _interrupt(this) : this;
                       if (this.timeline) {
                           var r = this.timeline.totalDuration();
                           return this.timeline.killTweensOf(t, e, tx && !0 !== tx.vars.overwrite)._first || _interrupt(this), this.parent && r !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / r, 0, 1), this
                       }
                       var i, n, s, a, o, _, u, l = this._targets,
                           h = t ? toArray(t) : l,
                           c = this._ptLookup,
                           d = this._pt;
                       if ((!e || "all" === e) && _arraysMatch(l, h)) return "all" === e && (this._pt = 0), _interrupt(this);
                       for (i = this._op = this._op || [], "all" !== e && (_isString(e) && (o = {}, _forEachName(e, function(t) {
                               return o[t] = 1
                           }), e = o), e = _addAliasesToVars(l, e)), u = l.length; u--;)
                           if (~h.indexOf(l[u]))
                               for (o in n = c[u], "all" === e ? (i[u] = e, a = n, s = {}) : (s = i[u] = i[u] || {}, a = e), a)(_ = n && n[o]) && ("kill" in _.d && !0 !== _.d.kill(o) || _removeLinkedListItem(this, _, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
                       return this._initted && !this._pt && d && _interrupt(this), this
                   }, Tween.to = function(t, e) {
                       return new Tween(t, e, arguments[2])
                   }, Tween.from = function(t, e) {
                       return _createTweenType(1, arguments)
                   }, Tween.delayedCall = function(t, e, r, i) {
                       return new Tween(e, 0, {
                           immediateRender: !1,
                           lazy: !1,
                           overwrite: !1,
                           delay: t,
                           onComplete: e,
                           onReverseComplete: e,
                           onCompleteParams: r,
                           onReverseCompleteParams: r,
                           callbackScope: i
                       })
                   }, Tween.fromTo = function(t, e, r) {
                       return _createTweenType(2, arguments)
                   }, Tween.set = function(t, e) {
                       return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
                   }, Tween.killTweensOf = function(t, e, r) {
                       return x.killTweensOf(t, e, r)
                   }, Tween
               }(tg);
               _setDefaults(tk.prototype, {
                   _targets: [],
                   _lazy: 0,
                   _startAt: 0,
                   _op: 0,
                   _onInit: 0
               }), _forEachName("staggerTo,staggerFrom,staggerFromTo", function(t) {
                   tk[t] = function() {
                       var e = new tv,
                           r = t_.call(arguments, 0);
                       return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
                   }
               });
               var _setterPlain = function(t, e, r) {
                       return t[e] = r
                   },
                   _setterFunc = function(t, e, r) {
                       return t[e](r)
                   },
                   _setterFuncWithParam = function(t, e, r, i) {
                       return t[e](i.fp, r)
                   },
                   _setterAttribute = function(t, e, r) {
                       return t.setAttribute(e, r)
                   },
                   _getSetter = function(t, e) {
                       return _isFunction(t[e]) ? _setterFunc : _isUndefined(t[e]) && t.setAttribute ? _setterAttribute : _setterPlain
                   },
                   _renderPlain = function(t, e) {
                       return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
                   },
                   _renderBoolean = function(t, e) {
                       return e.set(e.t, e.p, !!(e.s + e.c * t), e)
                   },
                   _renderComplexString = function(t, e) {
                       var r = e._pt,
                           i = "";
                       if (!t && e.b) i = e.b;
                       else if (1 === t && e.e) i = e.e;
                       else {
                           for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
                           i += e.c
                       }
                       e.set(e.t, e.p, i, e)
                   },
                   _renderPropTweens = function(t, e) {
                       for (var r = e._pt; r;) r.r(t, r.d), r = r._next
                   },
                   _addPluginModifier = function(t, e, r, i) {
                       for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
                   },
                   _killPropTweensOf = function(t) {
                       for (var e, r, i = this._pt; i;) r = i._next, (i.p !== t || i.op) && i.op !== t ? i.dep || (e = 1) : _removeLinkedListItem(this, i, "_pt"), i = r;
                       return !e
                   },
                   _setterWithModifier = function(t, e, r, i) {
                       i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
                   },
                   _sortPropTweensByPriority = function(t) {
                       for (var e, r, i, n, s = t._pt; s;) {
                           for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
                           (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
                       }
                       t._pt = i
                   },
                   tO = function() {
                       function PropTween(t, e, r, i, n, s, a, o, _) {
                           this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || _renderPlain, this.d = a || this, this.set = o || _setterPlain, this.pr = _ || 0, this._next = t, t && (t._prev = this)
                       }
                       return PropTween.prototype.modifier = function(t, e, r) {
                           this.mSet = this.mSet || this.set, this.set = _setterWithModifier, this.m = t, this.mt = r, this.tween = e
                       }, PropTween
                   }();
               _forEachName(ta + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
                   return J[t] = 1
               }), H.TweenMax = H.TweenLite = tk, H.TimelineLite = H.TimelineMax = tv, x = new tv({
                   sortChildren: !1,
                   defaults: F,
                   autoRemoveChildren: !0,
                   id: "root",
                   smoothChildTiming: !0
               }), A.stringFilter = _colorStringFilter;
               var tE = [],
                   tM = {},
                   tA = [],
                   tF = 0,
                   tD = 0,
                   _dispatch = function(t) {
                       return (tM[t] || tA).map(function(t) {
                           return t()
                       })
                   },
                   _onMediaChange = function() {
                       var t = Date.now(),
                           e = [];
                       t - tF > 2 && (_dispatch("matchMediaInit"), tE.forEach(function(t) {
                           var r, i, n, s, a = t.queries,
                               o = t.conditions;
                           for (i in a)(r = b.matchMedia(a[i]).matches) && (n = 1), r !== o[i] && (o[i] = r, s = 1);
                           s && (t.revert(), n && e.push(t))
                       }), _dispatch("matchMediaRevert"), e.forEach(function(t) {
                           return t.onMatch(t)
                       }), tF = t, _dispatch("matchMedia"))
                   },
                   tR = function() {
                       function Context(t, e) {
                           this.selector = e && selector(e), this.data = [], this._r = [], this.isReverted = !1, this.id = tD++, t && this.add(t)
                       }
                       var t = Context.prototype;
                       return t.add = function(t, e, r) {
                           _isFunction(t) && (r = e, e = t, t = _isFunction);
                           var i = this,
                               f = function() {
                                   var t, n = P,
                                       s = i.selector;
                                   return n && n !== i && n.data.push(i), r && (i.selector = selector(r)), P = i, t = e.apply(i, arguments), _isFunction(t) && i._r.push(t), P = n, i.selector = s, i.isReverted = !1, t
                               };
                           return i.last = f, t === _isFunction ? f(i) : t ? i[t] = f : f
                       }, t.ignore = function(t) {
                           var e = P;
                           P = null, t(this), P = e
                       }, t.getTweens = function() {
                           var t = [];
                           return this.data.forEach(function(e) {
                               return e instanceof Context ? t.push.apply(t, e.getTweens()) : e instanceof tk && !(e.parent && "nested" === e.parent.data) && t.push(e)
                           }), t
                       }, t.clear = function() {
                           this._r.length = this.data.length = 0
                       }, t.kill = function(t, e) {
                           var r = this;
                           if (t) {
                               var i = this.getTweens();
                               this.data.forEach(function(t) {
                                   "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                                       return i.splice(i.indexOf(t), 1)
                                   }))
                               }), i.map(function(t) {
                                   return {
                                       g: t.globalTime(0),
                                       t: t
                                   }
                               }).sort(function(t, e) {
                                   return e.g - t.g || -1 / 0
                               }).forEach(function(e) {
                                   return e.t.revert(t)
                               }), this.data.forEach(function(e) {
                                   return !(e instanceof tk) && e.revert && e.revert(t)
                               }), this._r.forEach(function(e) {
                                   return e(t, r)
                               }), this.isReverted = !0
                           } else this.data.forEach(function(t) {
                               return t.kill && t.kill()
                           });
                           if (this.clear(), e)
                               for (var n = tE.length; n--;) tE[n].id === this.id && tE.splice(n, 1)
                       }, t.revert = function(t) {
                           this.kill(t || {})
                       }, Context
                   }(),
                   tN = function() {
                       function MatchMedia(t) {
                           this.contexts = [], this.scope = t
                       }
                       var t = MatchMedia.prototype;
                       return t.add = function(t, e, r) {
                           _isObject(t) || (t = {
                               matches: t
                           });
                           var i, n, s, a = new tR(0, r || this.scope),
                               o = a.conditions = {};
                           for (n in P && !a.selector && (a.selector = P.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === n ? s = 1 : (i = b.matchMedia(t[n])) && (0 > tE.indexOf(a) && tE.push(a), (o[n] = i.matches) && (s = 1), i.addListener ? i.addListener(_onMediaChange) : i.addEventListener("change", _onMediaChange));
                           return s && e(a), this
                       }, t.revert = function(t) {
                           this.kill(t || {})
                       }, t.kill = function(t) {
                           this.contexts.forEach(function(e) {
                               return e.kill(t, !0)
                           })
                       }, MatchMedia
                   }(),
                   tB = {
                       registerPlugin: function() {
                           for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                           e.forEach(function(t) {
                               return _createPlugin(t)
                           })
                       },
                       timeline: function(t) {
                           return new tv(t)
                       },
                       getTweensOf: function(t, e) {
                           return x.getTweensOf(t, e)
                       },
                       getProperty: function(t, e, r, i) {
                           _isString(t) && (t = toArray(t)[0]);
                           var n = _getCache(t || {}).get,
                               s = r ? _passThrough : _numericIfPossible;
                           return "native" === r && (r = ""), t ? e ? s((tr[e] && tr[e].get || n)(t, e, r, i)) : function(e, r, i) {
                               return s((tr[e] && tr[e].get || n)(t, e, r, i))
                           } : t
                       },
                       quickSetter: function(t, e, r) {
                           if ((t = toArray(t)).length > 1) {
                               var i = t.map(function(t) {
                                       return tz.quickSetter(t, e, r)
                                   }),
                                   n = i.length;
                               return function(t) {
                                   for (var e = n; e--;) i[e](t)
                               }
                           }
                           t = t[0] || {};
                           var s = tr[e],
                               a = _getCache(t),
                               o = a.harness && (a.harness.aliases || {})[e] || e,
                               _ = s ? function(e) {
                                   var i = new s;
                                   E._pt = 0, i.init(t, r ? e + r : e, E, 0, [t]), i.render(1, i), E._pt && _renderPropTweens(1, E)
                               } : a.set(t, o);
                           return s ? _ : function(e) {
                               return _(t, o, r ? e + r : e, a, 1)
                           }
                       },
                       quickTo: function(t, e, r) {
                           var i, n = tz.to(t, _merge(((i = {})[e] = "+=0.1", i.paused = !0, i), r || {})),
                               func = function(t, r, i) {
                                   return n.resetTo(e, t, r, i)
                               };
                           return func.tween = n, func
                       },
                       isTweening: function(t) {
                           return x.getTweensOf(t, !0).length > 0
                       },
                       defaults: function(t) {
                           return t && t.ease && (t.ease = _parseEase(t.ease, F.ease)), _mergeDeep(F, t || {})
                       },
                       config: function(t) {
                           return _mergeDeep(A, t || {})
                       },
                       registerEffect: function(t) {
                           var e = t.name,
                               r = t.effect,
                               i = t.plugins,
                               n = t.defaults,
                               s = t.extendTimeline;
                           (i || "").split(",").forEach(function(t) {
                               return t && !tr[t] && !H[t] && _warn(e + " effect requires " + t + " plugin.")
                           }), ti[e] = function(t, e, i) {
                               return r(toArray(t), _setDefaults(e || {}, n), i)
                           }, s && (tv.prototype[e] = function(t, r, i) {
                               return this.add(ti[e](t, _isObject(r) ? r : (i = r) && {}, this), i)
                           })
                       },
                       registerEase: function(t, e) {
                           td[t] = _parseEase(e)
                       },
                       parseEase: function(t, e) {
                           return arguments.length ? _parseEase(t, e) : td
                       },
                       getById: function(t) {
                           return x.getById(t)
                       },
                       exportRoot: function(t, e) {
                           void 0 === t && (t = {});
                           var r, i, n = new tv(t);
                           for (n.smoothChildTiming = _isNotFalse(t.smoothChildTiming), x.remove(n), n._dp = 0, n._time = n._tTime = x._time, r = x._first; r;) i = r._next, (e || !(!r._dur && r instanceof tk && r.vars.onComplete === r._targets[0])) && _addToTimeline(n, r, r._start - r._delay), r = i;
                           return _addToTimeline(x, n, 0), n
                       },
                       context: function(t, e) {
                           return t ? new tR(t, e) : P
                       },
                       matchMedia: function(t) {
                           return new tN(t)
                       },
                       matchMediaRefresh: function() {
                           return tE.forEach(function(t) {
                               var e, r, i = t.conditions;
                               for (r in i) i[r] && (i[r] = !1, e = 1);
                               e && t.revert()
                           }) || _onMediaChange()
                       },
                       addEventListener: function(t, e) {
                           var r = tM[t] || (tM[t] = []);
                           ~r.indexOf(e) || r.push(e)
                       },
                       removeEventListener: function(t, e) {
                           var r = tM[t],
                               i = r && r.indexOf(e);
                           i >= 0 && r.splice(i, 1)
                       },
                       utils: {
                           wrap: function wrap(t, e, r) {
                               var i = e - t;
                               return U(t) ? _wrapArray(t, wrap(0, t.length), e) : _conditionalReturn(r, function(e) {
                                   return (i + (e - t) % i) % i + t
                               })
                           },
                           wrapYoyo: function wrapYoyo(t, e, r) {
                               var i = e - t,
                                   n = 2 * i;
                               return U(t) ? _wrapArray(t, wrapYoyo(0, t.length - 1), e) : _conditionalReturn(r, function(e) {
                                   return e = (n + (e - t) % n) % n || 0, t + (e > i ? n - e : e)
                               })
                           },
                           distribute: distribute,
                           random: random,
                           snap: snap,
                           normalize: function(t, e, r) {
                               return mapRange(t, e, 0, 1, r)
                           },
                           getUnit: getUnit,
                           clamp: function(t, e, r) {
                               return _conditionalReturn(r, function(r) {
                                   return _clamp(t, e, r)
                               })
                           },
                           splitColor: splitColor,
                           toArray: toArray,
                           selector: selector,
                           mapRange: mapRange,
                           pipe: function() {
                               for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                               return function(t) {
                                   return e.reduce(function(t, e) {
                                       return e(t)
                                   }, t)
                               }
                           },
                           unitize: function(t, e) {
                               return function(r) {
                                   return t(parseFloat(r)) + (e || getUnit(r))
                               }
                           },
                           interpolate: function interpolate(t, e, r, i) {
                               var n = isNaN(t + e) ? 0 : function(r) {
                                   return (1 - r) * t + r * e
                               };
                               if (!n) {
                                   var s, a, o, _, u, l = _isString(t),
                                       h = {};
                                   if (!0 === r && (i = 1) && (r = null), l) t = {
                                       p: t
                                   }, e = {
                                       p: e
                                   };
                                   else if (U(t) && !U(e)) {
                                       for (a = 1, o = [], u = (_ = t.length) - 2; a < _; a++) o.push(interpolate(t[a - 1], t[a]));
                                       _--, n = function(t) {
                                           var e = Math.min(u, ~~(t *= _));
                                           return o[e](t - e)
                                       }, r = e
                                   } else i || (t = _merge(U(t) ? [] : {}, t));
                                   if (!o) {
                                       for (s in e) _addPropTween.call(h, t, s, "get", e[s]);
                                       n = function(e) {
                                           return _renderPropTweens(e, h) || (l ? t.p : t)
                                       }
                                   }
                               }
                               return _conditionalReturn(r, n)
                           },
                           shuffle: shuffle
                       },
                       install: _install,
                       effects: ti,
                       ticker: tf,
                       updateRoot: tv.updateRoot,
                       plugins: tr,
                       globalTimeline: x,
                       core: {
                           PropTween: tO,
                           globals: _addGlobal,
                           Tween: tk,
                           Timeline: tv,
                           Animation: tg,
                           getCache: _getCache,
                           _removeLinkedListItem: _removeLinkedListItem,
                           reverting: function() {
                               return w
                           },
                           context: function(t) {
                               return t && P && (P.data.push(t), t._ctx = P), P
                           },
                           suppressOverwrites: function(t) {
                               return T = t
                           }
                       }
                   };
               _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
                   return tB[t] = tk[t]
               }), tf.add(tv.updateRoot), E = tB.to({}, {
                   duration: 0
               });
               var _getPluginPropTween = function(t, e) {
                       for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
                       return r
                   },
                   _addModifiers = function(t, e) {
                       var r, i, n, s = t._targets;
                       for (r in e)
                           for (i = s.length; i--;)(n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = _getPluginPropTween(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
                   },
                   _buildModifierPlugin = function(t, e) {
                       return {
                           name: t,
                           rawVars: 1,
                           init: function(t, r, i) {
                               i._onInit = function(t) {
                                   var i, n;
                                   if (_isString(r) && (i = {}, _forEachName(r, function(t) {
                                           return i[t] = 1
                                       }), r = i), e) {
                                       for (n in i = {}, r) i[n] = e(r[n]);
                                       r = i
                                   }
                                   _addModifiers(t, r)
                               }
                           }
                       }
                   },
                   tz = tB.registerPlugin({
                       name: "attr",
                       init: function(t, e, r, i, n) {
                           var s, a, o;
                           for (s in this.tween = r, e) o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s)).op = s, a.b = o, this._props.push(s)
                       },
                       render: function(t, e) {
                           for (var r = e._pt; r;) w ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
                       }
                   }, {
                       name: "endArray",
                       init: function(t, e) {
                           for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
                       }
                   }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || tB;
               tk.version = tv.version = tz.version = "3.12.2", k = 1, _windowExists() && _wake();
               var tI, tL, tU, tV, tY, tj, tG, tX = td.Power0,
                   tW = td.Power1,
                   tq = td.Power2,
                   tH = td.Power3,
                   tQ = td.Power4,
                   tZ = td.Linear,
                   tK = td.Quad,
                   t$ = td.Cubic,
                   tJ = td.Quart,
                   t0 = td.Quint,
                   t1 = td.Strong,
                   t2 = td.Elastic,
                   t5 = td.Back,
                   t3 = td.SteppedEase,
                   t8 = td.Bounce,
                   t6 = td.Sine,
                   t4 = td.Expo,
                   t9 = td.Circ,
                   t7 = {},
                   et = 180 / Math.PI,
                   ee = Math.PI / 180,
                   er = Math.atan2,
                   ei = /([A-Z])/g,
                   en = /(left|right|width|margin|padding|x)/i,
                   es = /[\s,\(]\S/,
                   ea = {
                       autoAlpha: "opacity,visibility",
                       scale: "scaleX,scaleY",
                       alpha: "opacity"
                   },
                   _renderCSSProp = function(t, e) {
                       return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
                   },
                   _renderPropWithEnd = function(t, e) {
                       return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
                   },
                   _renderCSSPropWithBeginning = function(t, e) {
                       return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
                   },
                   _renderRoundedCSSProp = function(t, e) {
                       var r = e.s + e.c * t;
                       e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
                   },
                   _renderNonTweeningValue = function(t, e) {
                       return e.set(e.t, e.p, t ? e.e : e.b, e)
                   },
                   _renderNonTweeningValueOnlyAtEnd = function(t, e) {
                       return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
                   },
                   _setterCSSStyle = function(t, e, r) {
                       return t.style[e] = r
                   },
                   _setterCSSProp = function(t, e, r) {
                       return t.style.setProperty(e, r)
                   },
                   _setterTransform = function(t, e, r) {
                       return t._gsap[e] = r
                   },
                   _setterScale = function(t, e, r) {
                       return t._gsap.scaleX = t._gsap.scaleY = r
                   },
                   _setterScaleWithRender = function(t, e, r, i, n) {
                       var s = t._gsap;
                       s.scaleX = s.scaleY = r, s.renderTransform(n, s)
                   },
                   _setterTransformWithRender = function(t, e, r, i, n) {
                       var s = t._gsap;
                       s[e] = r, s.renderTransform(n, s)
                   },
                   eo = "transform",
                   e_ = eo + "Origin",
                   _saveStyle = function _saveStyle(t, e) {
                       var r = this,
                           i = this.target,
                           n = i.style;
                       if (t in t7 && n) {
                           if (this.tfm = this.tfm || {}, "transform" === t) return ea.transform.split(",").forEach(function(t) {
                               return _saveStyle.call(r, t, e)
                           });
                           if (~(t = ea[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                                   return r.tfm[t] = _get(i, t)
                               }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : _get(i, t), this.props.indexOf(eo) >= 0) return;
                           i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(e_, e, "")), t = eo
                       }(n || e) && this.props.push(t, e, n[t])
                   },
                   _removeIndependentTransforms = function(t) {
                       t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
                   },
                   _revertStyle = function() {
                       var t, e, r = this.props,
                           i = this.target,
                           n = i.style,
                           s = i._gsap;
                       for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(ei, "-$1").toLowerCase());
                       if (this.tfm) {
                           for (e in this.tfm) s[e] = this.tfm[e];
                           s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = tj()) && t.isStart || n[eo] || (_removeIndependentTransforms(n), s.uncache = 1)
                       }
                   },
                   _getStyleSaver = function(t, e) {
                       var r = {
                           target: t,
                           props: [],
                           revert: _revertStyle,
                           save: _saveStyle
                       };
                       return t._gsap || tz.core.getCache(t), e && e.split(",").forEach(function(t) {
                           return r.save(t)
                       }), r
                   },
                   _createElement = function(t, e) {
                       var r = tI.createElementNS ? tI.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : tI.createElement(t);
                       return r.style ? r : tI.createElement(t)
                   },
                   _getComputedProperty = function _getComputedProperty(t, e, r) {
                       var i = getComputedStyle(t);
                       return i[e] || i.getPropertyValue(e.replace(ei, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && _getComputedProperty(t, _checkPropPrefix(e) || e, 1) || ""
                   },
                   eu = "O,Moz,ms,Ms,Webkit".split(","),
                   _checkPropPrefix = function(t, e, r) {
                       var i = (e || tV).style,
                           n = 5;
                       if (t in i && !r) return t;
                       for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(eu[n] + t in i););
                       return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? eu[n] : "") + t
                   },
                   _initCore = function() {
                       "undefined" != typeof window && window.document && (tL = (tI = window.document).documentElement, tV = _createElement("div") || {
                           style: {}
                       }, _createElement("div"), e_ = (eo = _checkPropPrefix(eo)) + "Origin", tV.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", tG = !!_checkPropPrefix("perspective"), tj = tz.core.reverting, tU = 1)
                   },
                   _getBBoxHack = function _getBBoxHack(t) {
                       var e, r = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                           i = this.parentNode,
                           n = this.nextSibling,
                           s = this.style.cssText;
                       if (tL.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
                           e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = _getBBoxHack
                       } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
                       return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), tL.removeChild(r), this.style.cssText = s, e
                   },
                   _getAttributeFallbacks = function(t, e) {
                       for (var r = e.length; r--;)
                           if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
                   },
                   _getBBox = function(t) {
                       var e;
                       try {
                           e = t.getBBox()
                       } catch (r) {
                           e = _getBBoxHack.call(t, !0)
                       }
                       return e && (e.width || e.height) || t.getBBox === _getBBoxHack || (e = _getBBoxHack.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                           x: +_getAttributeFallbacks(t, ["x", "cx", "x1"]) || 0,
                           y: +_getAttributeFallbacks(t, ["y", "cy", "y1"]) || 0,
                           width: 0,
                           height: 0
                       }
                   },
                   _isSVG = function(t) {
                       return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && _getBBox(t))
                   },
                   _removeProperty = function(t, e) {
                       if (e) {
                           var r = t.style;
                           e in t7 && e !== e_ && (e = eo), r.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), r.removeProperty(e.replace(ei, "-$1").toLowerCase())) : r.removeAttribute(e)
                       }
                   },
                   _addNonTweeningPT = function(t, e, r, i, n, s) {
                       var a = new tO(t._pt, e, r, 0, 1, s ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
                       return t._pt = a, a.b = i, a.e = n, t._props.push(r), a
                   },
                   el = {
                       deg: 1,
                       rad: 1,
                       turn: 1
                   },
                   eh = {
                       grid: 1,
                       flex: 1
                   },
                   _convertToUnit = function _convertToUnit(t, e, r, i) {
                       var n, s, a, o, _ = parseFloat(r) || 0,
                           u = (r + "").trim().substr((_ + "").length) || "px",
                           l = tV.style,
                           h = en.test(e),
                           c = "svg" === t.tagName.toLowerCase(),
                           d = (c ? "client" : "offset") + (h ? "Width" : "Height"),
                           p = "px" === i,
                           m = "%" === i;
                       return i === u || !_ || el[i] || el[u] ? _ : ("px" === u || p || (_ = _convertToUnit(t, e, r, "px")), o = t.getCTM && _isSVG(t), (m || "%" === u) && (t7[e] || ~e.indexOf("adius"))) ? (n = o ? t.getBBox()[h ? "width" : "height"] : t[d], _round(m ? _ / n * 100 : _ / 100 * n)) : (l[h ? "width" : "height"] = 100 + (p ? u : i), s = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (s = (t.ownerSVGElement || {}).parentNode), s && s !== tI && s.appendChild || (s = tI.body), (a = s._gsap) && m && a.width && h && a.time === tf.time && !a.uncache) ? _round(_ / a.width * 100) : ((m || "%" === u) && !eh[_getComputedProperty(s, "display")] && (l.position = _getComputedProperty(t, "position")), s === t && (l.position = "static"), s.appendChild(tV), n = tV[d], s.removeChild(tV), l.position = "absolute", h && m && ((a = _getCache(s)).time = tf.time, a.width = s[d]), _round(p ? n * _ / 100 : n && _ ? 100 / n * _ : 0))
                   },
                   _get = function(t, e, r, i) {
                       var n;
                       return tU || _initCore(), e in ea && "transform" !== e && ~(e = ea[e]).indexOf(",") && (e = e.split(",")[0]), t7[e] && "transform" !== e ? (n = _parseTransform(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : _firstTwoOnly(_getComputedProperty(t, e_)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = ef[e] && ef[e](t, e, r) || _getComputedProperty(t, e) || _getProperty(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? _convertToUnit(t, e, n, r) + r : n
                   },
                   _tweenComplexCSSString = function(t, e, r, i) {
                       if (!r || "none" === r) {
                           var n = _checkPropPrefix(e, t, 1),
                               s = n && _getComputedProperty(t, n, 1);
                           s && s !== r ? (e = n, r = s) : "borderColor" === e && (r = _getComputedProperty(t, "borderTopColor"))
                       }
                       var a, o, _, u, l, h, c, d, p, m, g, v = new tO(this._pt, t.style, e, 0, 1, _renderComplexString),
                           y = 0,
                           T = 0;
                       if (v.b = r, v.e = i, r += "", "auto" == (i += "") && (t.style[e] = i, i = _getComputedProperty(t, e) || i, t.style[e] = r), _colorStringFilter(a = [r, i]), r = a[0], i = a[1], _ = r.match(j) || [], (i.match(j) || []).length) {
                           for (; o = j.exec(i);) c = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (l = 1), c !== (h = _[T++] || "") && (u = parseFloat(h) || 0, g = h.substr((u + "").length), "=" === c.charAt(1) && (c = _parseRelative(u, c) + g), d = parseFloat(c), m = c.substr((d + "").length), y = j.lastIndex - m.length, m || (m = m || A.units[e] || g, y !== i.length || (i += m, v.e += m)), g !== m && (u = _convertToUnit(t, e, h, m) || 0), v._pt = {
                               _next: v._pt,
                               p: p || 1 === T ? p : ",",
                               s: u,
                               c: d - u,
                               m: l && l < 4 || "zIndex" === e ? Math.round : 0
                           });
                           v.c = y < i.length ? i.substring(y, i.length) : ""
                       } else v.r = "display" === e && "none" === i ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
                       return X.test(i) && (v.e = 0), this._pt = v, v
                   },
                   ec = {
                       top: "0%",
                       bottom: "100%",
                       left: "0%",
                       right: "100%",
                       center: "50%"
                   },
                   _convertKeywordsToPercentages = function(t) {
                       var e = t.split(" "),
                           r = e[0],
                           i = e[1] || "50%";
                       return ("top" === r || "bottom" === r || "left" === i || "right" === i) && (t = r, r = i, i = t), e[0] = ec[r] || r, e[1] = ec[i] || i, e.join(" ")
                   },
                   _renderClearProps = function(t, e) {
                       if (e.tween && e.tween._time === e.tween._dur) {
                           var r, i, n, s = e.t,
                               a = s.style,
                               o = e.u,
                               _ = s._gsap;
                           if ("all" === o || !0 === o) a.cssText = "", i = 1;
                           else
                               for (n = (o = o.split(",")).length; --n > -1;) t7[r = o[n]] && (i = 1, r = "transformOrigin" === r ? e_ : eo), _removeProperty(s, r);
                           i && (_removeProperty(s, eo), _ && (_.svg && s.removeAttribute("transform"), _parseTransform(s, 1), _.uncache = 1, _removeIndependentTransforms(a)))
                       }
                   },
                   ef = {
                       clearProps: function(t, e, r, i, n) {
                           if ("isFromStart" !== n.data) {
                               var s = t._pt = new tO(t._pt, e, r, 0, 0, _renderClearProps);
                               return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1
                           }
                       }
                   },
                   ed = [1, 0, 0, 1, 0, 0],
                   ep = {},
                   _isNullTransform = function(t) {
                       return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
                   },
                   _getComputedTransformMatrixAsArray = function(t) {
                       var e = _getComputedProperty(t, eo);
                       return _isNullTransform(e) ? ed : e.substr(7).match(Y).map(_round)
                   },
                   _getMatrix = function(t, e) {
                       var r, i, n, s, a = t._gsap || _getCache(t),
                           o = t.style,
                           _ = _getComputedTransformMatrixAsArray(t);
                       return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (_ = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? ed : _ : (_ !== ed || t.offsetParent || t === tL || a.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (s = 1, i = t.nextElementSibling, tL.appendChild(t)), _ = _getComputedTransformMatrixAsArray(t), n ? o.display = n : _removeProperty(t, "display"), s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : tL.removeChild(t))), e && _.length > 6 ? [_[0], _[1], _[4], _[5], _[12], _[13]] : _)
                   },
                   _applySVGOrigin = function(t, e, r, i, n, s) {
                       var a, o, _, u, l = t._gsap,
                           h = n || _getMatrix(t, !0),
                           c = l.xOrigin || 0,
                           d = l.yOrigin || 0,
                           p = l.xOffset || 0,
                           m = l.yOffset || 0,
                           g = h[0],
                           v = h[1],
                           y = h[2],
                           T = h[3],
                           w = h[4],
                           P = h[5],
                           x = e.split(" "),
                           b = parseFloat(x[0]) || 0,
                           S = parseFloat(x[1]) || 0;
                       r ? h !== ed && (o = g * T - v * y) && (_ = b * (T / o) + S * (-y / o) + (y * P - T * w) / o, u = b * (-v / o) + S * (g / o) - (g * P - v * w) / o, b = _, S = u) : (b = (a = _getBBox(t)).x + (~x[0].indexOf("%") ? b / 100 * a.width : b), S = a.y + (~(x[1] || x[0]).indexOf("%") ? S / 100 * a.height : S)), i || !1 !== i && l.smooth ? (w = b - c, P = S - d, l.xOffset = p + (w * g + P * y) - w, l.yOffset = m + (w * v + P * T) - P) : l.xOffset = l.yOffset = 0, l.xOrigin = b, l.yOrigin = S, l.smooth = !!i, l.origin = e, l.originIsAbsolute = !!r, t.style[e_] = "0px 0px", s && (_addNonTweeningPT(s, l, "xOrigin", c, b), _addNonTweeningPT(s, l, "yOrigin", d, S), _addNonTweeningPT(s, l, "xOffset", p, l.xOffset), _addNonTweeningPT(s, l, "yOffset", m, l.yOffset)), t.setAttribute("data-svg-origin", b + " " + S)
                   },
                   _parseTransform = function(t, e) {
                       var r = t._gsap || new GSCache(t);
                       if ("x" in r && !e && !r.uncache) return r;
                       var i, n, s, a, o, _, u, l, h, c, d, p, m, g, v, y, T, w, P, x, b, S, C, k, O, E, M, F, D, R, N, B, z = t.style,
                           I = r.scaleX < 0,
                           L = getComputedStyle(t),
                           U = _getComputedProperty(t, e_) || "0";
                       return i = n = s = _ = u = l = h = c = d = 0, a = o = 1, r.svg = !!(t.getCTM && _isSVG(t)), L.translate && (("none" !== L.translate || "none" !== L.scale || "none" !== L.rotate) && (z[eo] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[eo] ? L[eo] : "")), z.scale = z.rotate = z.translate = "none"), g = _getMatrix(t, r.svg), r.svg && (r.uncache ? (O = t.getBBox(), U = r.xOrigin - O.x + "px " + (r.yOrigin - O.y) + "px", k = "") : k = !e && t.getAttribute("data-svg-origin"), _applySVGOrigin(t, k || U, !!k || r.originIsAbsolute, !1 !== r.smooth, g)), p = r.xOrigin || 0, m = r.yOrigin || 0, g !== ed && (w = g[0], P = g[1], x = g[2], b = g[3], i = S = g[4], n = C = g[5], 6 === g.length ? (a = Math.sqrt(w * w + P * P), o = Math.sqrt(b * b + x * x), _ = w || P ? er(P, w) * et : 0, (h = x || b ? er(x, b) * et + _ : 0) && (o *= Math.abs(Math.cos(h * ee))), r.svg && (i -= p - (p * w + m * x), n -= m - (p * P + m * b))) : (B = g[6], R = g[7], M = g[8], F = g[9], D = g[10], N = g[11], i = g[12], n = g[13], s = g[14], u = (v = er(B, D)) * et, v && (k = S * (y = Math.cos(-v)) + M * (T = Math.sin(-v)), O = C * y + F * T, E = B * y + D * T, M = -(S * T) + M * y, F = -(C * T) + F * y, D = -(B * T) + D * y, N = -(R * T) + N * y, S = k, C = O, B = E), l = (v = er(-x, D)) * et, v && (k = w * (y = Math.cos(-v)) - M * (T = Math.sin(-v)), O = P * y - F * T, E = x * y - D * T, N = b * T + N * y, w = k, P = O, x = E), _ = (v = er(P, w)) * et, v && (k = w * (y = Math.cos(v)) + P * (T = Math.sin(v)), O = S * y + C * T, P = P * y - w * T, C = C * y - S * T, w = k, S = O), u && Math.abs(u) + Math.abs(_) > 359.9 && (u = _ = 0, l = 180 - l), a = _round(Math.sqrt(w * w + P * P + x * x)), o = _round(Math.sqrt(C * C + B * B)), h = Math.abs(v = er(S, C)) > 2e-4 ? v * et : 0, d = N ? 1 / (N < 0 ? -N : N) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(t, eo)), k && t.setAttribute("transform", k))), Math.abs(h) > 90 && 270 > Math.abs(h) && (I ? (a *= -1, h += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (o *= -1, h += h <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = s + "px", r.scaleX = _round(a), r.scaleY = _round(o), r.rotation = _round(_) + "deg", r.rotationX = _round(u) + "deg", r.rotationY = _round(l) + "deg", r.skewX = h + "deg", r.skewY = c + "deg", r.transformPerspective = d + "px", (r.zOrigin = parseFloat(U.split(" ")[2]) || 0) && (z[e_] = _firstTwoOnly(U)), r.xOffset = r.yOffset = 0, r.force3D = A.force3D, r.renderTransform = r.svg ? _renderSVGTransforms : tG ? _renderCSSTransforms : _renderNon3DTransforms, r.uncache = 0, r
                   },
                   _firstTwoOnly = function(t) {
                       return (t = t.split(" "))[0] + " " + t[1]
                   },
                   _addPxTranslate = function(t, e, r) {
                       var i = getUnit(e);
                       return _round(parseFloat(e) + parseFloat(_convertToUnit(t, "x", r + "px", i))) + i
                   },
                   _renderNon3DTransforms = function(t, e) {
                       e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, _renderCSSTransforms(t, e)
                   },
                   em = "0deg",
                   _renderCSSTransforms = function(t, e) {
                       var r = e || this,
                           i = r.xPercent,
                           n = r.yPercent,
                           s = r.x,
                           a = r.y,
                           o = r.z,
                           _ = r.rotation,
                           u = r.rotationY,
                           l = r.rotationX,
                           h = r.skewX,
                           c = r.skewY,
                           d = r.scaleX,
                           p = r.scaleY,
                           m = r.transformPerspective,
                           g = r.force3D,
                           v = r.target,
                           y = r.zOrigin,
                           T = "",
                           w = "auto" === g && t && 1 !== t || !0 === g;
                       if (y && (l !== em || u !== em)) {
                           var P, x = parseFloat(u) * ee,
                               b = Math.sin(x),
                               S = Math.cos(x);
                           s = _addPxTranslate(v, s, -(b * (P = Math.cos(x = parseFloat(l) * ee)) * y)), a = _addPxTranslate(v, a, -(-Math.sin(x) * y)), o = _addPxTranslate(v, o, -(S * P * y) + y)
                       }
                       "0px" !== m && (T += "perspective(" + m + ") "), (i || n) && (T += "translate(" + i + "%, " + n + "%) "), (w || "0px" !== s || "0px" !== a || "0px" !== o) && (T += "0px" !== o || w ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "), _ !== em && (T += "rotate(" + _ + ") "), u !== em && (T += "rotateY(" + u + ") "), l !== em && (T += "rotateX(" + l + ") "), (h !== em || c !== em) && (T += "skew(" + h + ", " + c + ") "), (1 !== d || 1 !== p) && (T += "scale(" + d + ", " + p + ") "), v.style[eo] = T || "translate(0, 0)"
                   },
                   _renderSVGTransforms = function(t, e) {
                       var r, i, n, s, a, o = e || this,
                           _ = o.xPercent,
                           u = o.yPercent,
                           l = o.x,
                           h = o.y,
                           c = o.rotation,
                           d = o.skewX,
                           p = o.skewY,
                           m = o.scaleX,
                           g = o.scaleY,
                           v = o.target,
                           y = o.xOrigin,
                           T = o.yOrigin,
                           w = o.xOffset,
                           P = o.yOffset,
                           x = o.forceCSS,
                           b = parseFloat(l),
                           S = parseFloat(h);
                       c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= ee, d *= ee, r = Math.cos(c) * m, i = Math.sin(c) * m, n = -(Math.sin(c - d) * g), s = Math.cos(c - d) * g, d && (p *= ee, n *= a = Math.sqrt(1 + (a = Math.tan(d - p)) * a), s *= a, p && (r *= a = Math.sqrt(1 + (a = Math.tan(p)) * a), i *= a)), r = _round(r), i = _round(i), n = _round(n), s = _round(s)) : (r = m, s = g, i = n = 0), (b && !~(l + "").indexOf("px") || S && !~(h + "").indexOf("px")) && (b = _convertToUnit(v, "x", l, "px"), S = _convertToUnit(v, "y", h, "px")), (y || T || w || P) && (b = _round(b + y - (y * r + T * n) + w), S = _round(S + T - (y * i + T * s) + P)), (_ || u) && (b = _round(b + _ / 100 * (a = v.getBBox()).width), S = _round(S + u / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + b + "," + S + ")", v.setAttribute("transform", a), x && (v.style[eo] = a)
                   },
                   _addRotationalPropTween = function(t, e, r, i, n) {
                       var s, a, o = _isString(n),
                           _ = parseFloat(n) * (o && ~n.indexOf("rad") ? et : 1) - i,
                           u = i + _ + "deg";
                       return o && ("short" === (s = n.split("_")[1]) && (_ %= 360) != _ % 180 && (_ += _ < 0 ? 360 : -360), "cw" === s && _ < 0 ? _ = (_ + 36e9) % 360 - 360 * ~~(_ / 360) : "ccw" === s && _ > 0 && (_ = (_ - 36e9) % 360 - 360 * ~~(_ / 360))), t._pt = a = new tO(t._pt, e, r, i, _, _renderPropWithEnd), a.e = u, a.u = "deg", t._props.push(r), a
                   },
                   _assign = function(t, e) {
                       for (var r in e) t[r] = e[r];
                       return t
                   },
                   _addRawTransformPTs = function(t, e, r) {
                       var i, n, s, a, o, _, u, l = _assign({}, r._gsap),
                           h = r.style;
                       for (n in l.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), h[eo] = e, i = _parseTransform(r, 1), _removeProperty(r, eo), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[eo], h[eo] = e, i = _parseTransform(r, 1), h[eo] = s), t7)(s = l[n]) !== (a = i[n]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) && (o = getUnit(s) !== (u = getUnit(a)) ? _convertToUnit(r, n, s, u) : parseFloat(s), _ = parseFloat(a), t._pt = new tO(t._pt, i, n, o, _ - o, _renderCSSProp), t._pt.u = u || 0, t._props.push(n));
                       _assign(i, l)
                   };
               _forEachName("padding,margin,Width,Radius", function(t, e) {
                   var r = "Right",
                       i = "Bottom",
                       n = "Left",
                       s = (e < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]).map(function(r) {
                           return e < 2 ? t + r : "border" + r + t
                       });
                   ef[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
                       var a, o;
                       if (arguments.length < 4) return 5 === (o = (a = s.map(function(e) {
                           return _get(t, e, r)
                       })).join(" ")).split(a[0]).length ? a[0] : o;
                       a = (i + "").split(" "), o = {}, s.forEach(function(t, e) {
                           return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
                       }), t.init(e, o, n)
                   }
               });
               var eg = {
                   name: "css",
                   register: _initCore,
                   targetTest: function(t) {
                       return t.style && t.nodeType
                   },
                   init: function(t, e, r, i, n) {
                       var s, a, o, _, u, l, h, c, d, p, m, g, v, y, T, w, P = this._props,
                           x = t.style,
                           b = r.vars.startAt;
                       for (h in tU || _initCore(), this.styles = this.styles || _getStyleSaver(t), w = this.styles.props, this.tween = r, e)
                           if ("autoRound" !== h && (a = e[h], !(tr[h] && _checkPlugin(h, e, r, i, t, n)))) {
                               if (u = typeof a, l = ef[h], "function" === u && (u = typeof(a = a.call(r, i, t, n))), "string" === u && ~a.indexOf("random(") && (a = _replaceRandom(a)), l) l(this, t, h, a, r) && (T = 1);
                               else if ("--" === h.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(h) + "").trim(), a += "", th.lastIndex = 0, th.test(s) || (c = getUnit(s), d = getUnit(a)), d ? c !== d && (s = _convertToUnit(t, h, s, d) + d) : c && (a += c), this.add(x, "setProperty", s, a, i, n, 0, 0, h), P.push(h), w.push(h, 0, x[h]);
                               else if ("undefined" !== u) {
                                   if (b && h in b ? (_isString(s = "function" == typeof b[h] ? b[h].call(r, i, t, n) : b[h]) && ~s.indexOf("random(") && (s = _replaceRandom(s)), getUnit(s + "") || (s += A.units[h] || getUnit(_get(t, h)) || ""), "=" === (s + "").charAt(1) && (s = _get(t, h))) : s = _get(t, h), _ = parseFloat(s), (p = "string" === u && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), h in ea && ("autoAlpha" === h && (1 === _ && "hidden" === _get(t, "visibility") && o && (_ = 0), w.push("visibility", 0, x.visibility), _addNonTweeningPT(this, x, "visibility", _ ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== h && "transform" !== h && ~(h = ea[h]).indexOf(",") && (h = h.split(",")[0])), m = h in t7) {
                                       if (this.styles.save(h), g || ((v = t._gsap).renderTransform && !e.parseTransform || _parseTransform(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new tO(this._pt, x, eo, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === h) this._pt = new tO(this._pt, v, "scaleY", v.scaleY, (p ? _parseRelative(v.scaleY, p + o) : o) - v.scaleY || 0, _renderCSSProp), this._pt.u = 0, P.push("scaleY", h), h += "X";
                                       else if ("transformOrigin" === h) {
                                           w.push(e_, 0, x[e_]), a = _convertKeywordsToPercentages(a), v.svg ? _applySVGOrigin(t, a, 0, y, 0, this) : ((d = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && _addNonTweeningPT(this, v, "zOrigin", v.zOrigin, d), _addNonTweeningPT(this, x, h, _firstTwoOnly(s), _firstTwoOnly(a)));
                                           continue
                                       } else if ("svgOrigin" === h) {
                                           _applySVGOrigin(t, a, 1, y, 0, this);
                                           continue
                                       } else if (h in ep) {
                                           _addRotationalPropTween(this, v, h, _, p ? _parseRelative(_, p + a) : a);
                                           continue
                                       } else if ("smoothOrigin" === h) {
                                           _addNonTweeningPT(this, v, "smooth", v.smooth, a);
                                           continue
                                       } else if ("force3D" === h) {
                                           v[h] = a;
                                           continue
                                       } else if ("transform" === h) {
                                           _addRawTransformPTs(this, a, t);
                                           continue
                                       }
                                   } else h in x || (h = _checkPropPrefix(h) || h);
                                   if (m || (o || 0 === o) && (_ || 0 === _) && !es.test(a) && h in x) c = (s + "").substr((_ + "").length), o || (o = 0), d = getUnit(a) || (h in A.units ? A.units[h] : c), c !== d && (_ = _convertToUnit(t, h, s, d)), this._pt = new tO(this._pt, m ? v : x, h, _, (p ? _parseRelative(_, p + o) : o) - _, m || "px" !== d && "zIndex" !== h || !1 === e.autoRound ? _renderCSSProp : _renderRoundedCSSProp), this._pt.u = d || 0, c !== d && "%" !== d && (this._pt.b = s, this._pt.r = _renderCSSPropWithBeginning);
                                   else if (h in x) _tweenComplexCSSString.call(this, t, h, s, p ? p + a : a);
                                   else if (h in t) this.add(t, h, s || t[h], p ? p + a : a, i, n);
                                   else if ("parseTransform" !== h) {
                                       _missingPlugin(h, a);
                                       continue
                                   }
                                   m || (h in x ? w.push(h, 0, x[h]) : w.push(h, 1, s || t[h])), P.push(h)
                               }
                           } T && _sortPropTweensByPriority(this)
                   },
                   render: function(t, e) {
                       if (e.tween._time || !tj())
                           for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
                       else e.styles.revert()
                   },
                   get: _get,
                   aliases: ea,
                   getSetter: function(t, e, r) {
                       var i = ea[e];
                       return i && 0 > i.indexOf(",") && (e = i), e in t7 && e !== e_ && (t._gsap.x || _get(t, "x")) ? r && tY === r ? "scale" === e ? _setterScale : _setterTransform : (tY = r || {}, "scale" === e ? _setterScaleWithRender : _setterTransformWithRender) : t.style && !_isUndefined(t.style[e]) ? _setterCSSStyle : ~e.indexOf("-") ? _setterCSSProp : _getSetter(t, e)
                   },
                   core: {
                       _removeProperty: _removeProperty,
                       _getMatrix: _getMatrix
                   }
               };
               tz.utils.checkPrefix = _checkPropPrefix, tz.core.getStyleSaver = _getStyleSaver, i = _forEachName((e = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (r = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
                   t7[t] = 1
               }), _forEachName(r, function(t) {
                   A.units[t] = "deg", ep[t] = 1
               }), ea[i[13]] = e + "," + r, _forEachName("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
                   var e = t.split(":");
                   ea[e[1]] = i[e[0]]
               }), _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
                   A.units[t] = "px"
               }), tz.registerPlugin(eg);
               var ev = tz.registerPlugin(eg) || tz,
                   ey = ev.core.Tween;
               t.Back = t5, t.Bounce = t8, t.CSSPlugin = eg, t.Circ = t9, t.Cubic = t$, t.Elastic = t2, t.Expo = t4, t.Linear = tZ, t.Power0 = tX, t.Power1 = tW, t.Power2 = tq, t.Power3 = tH, t.Power4 = tQ, t.Quad = tK, t.Quart = tJ, t.Quint = t0, t.Sine = t6, t.SteppedEase = t3, t.Strong = t1, t.TimelineLite = tv, t.TimelineMax = tv, t.TweenLite = tk, t.TweenMax = ey, t.default = ev, t.gsap = ev, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
                   value: !0
               }) : delete window.default
           }(e)
       }
   }
]);