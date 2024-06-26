(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5244], {
        1342: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var i in t) Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: t[i]
                    })
                }(t, {
                    noSSR: function() {
                        return noSSR
                    },
                    default: function() {
                        return dynamic
                    }
                });
            let s = i(8754),
                r = (i(7294), s._(i(4304)));

            function convertModule(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function noSSR(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function dynamic(e, t) {
                let i = r.default,
                    s = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: i,
                                pastDelay: s
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? s.loader = () => e : "function" == typeof e ? s.loader = e : "object" == typeof e && (s = {
                    ...s,
                    ...e
                }), s = {
                    ...s,
                    ...t
                };
                let l = s.loader;
                return (s.loadableGenerated && (s = {
                    ...s,
                    ...s.loadableGenerated
                }, delete s.loadableGenerated), "boolean" != typeof s.ssr || s.ssr) ? i({
                    ...s,
                    loader: () => null != l ? l().then(convertModule) : Promise.resolve(convertModule(() => null))
                }) : (delete s.webpack, delete s.modules, noSSR(i, s))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        43: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let s = i(8754),
                r = s._(i(7294)),
                l = r.default.createContext(null)
        },
        4304: function(e, t, i) {
            "use strict";
            /**
            @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
             MIT License
             Permission is hereby granted, free of charge, to any person obtaining
            a copy of this software and associated documentation files (the
            "Software"), to deal in the Software without restriction, including
            without limitation the rights to use, copy, modify, merge, publish,
            distribute, sublicense, and/or sell copies of the Software, and to
            permit persons to whom the Software is furnished to do so, subject to
            the following conditions:
             The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
            LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
            OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
            */
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let s = i(8754),
                r = s._(i(7294)),
                l = i(43),
                n = [],
                a = [],
                o = !1;

            function load(e) {
                let t = e(),
                    i = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return i.promise = t.then(e => (i.loading = !1, i.loaded = e, e)).catch(e => {
                    throw i.loading = !1, i.error = e, e
                }), i
            }
            let LoadableSubscription = class LoadableSubscription {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = {
                        ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            };

            function Loadable(e) {
                return function(e, t) {
                    let i = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        s = null;

                    function init() {
                        if (!s) {
                            let t = new LoadableSubscription(e, i);
                            s = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return s.promise()
                    }
                    if (!o) {
                        let e = i.webpack ? i.webpack() : i.modules;
                        e && a.push(t => {
                            for (let i of e)
                                if (t.includes(i)) return init()
                        })
                    }

                    function LoadableComponent(e, t) {
                        ! function() {
                            init();
                            let e = r.default.useContext(l.LoadableContext);
                            e && Array.isArray(i.modules) && i.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let n = r.default.useSyncExternalStore(s.subscribe, s.getCurrentValue, s.getCurrentValue);
                        return r.default.useImperativeHandle(t, () => ({
                            retry: s.retry
                        }), []), r.default.useMemo(() => {
                            var t;
                            return n.loading || n.error ? r.default.createElement(i.loading, {
                                isLoading: n.loading,
                                pastDelay: n.pastDelay,
                                timedOut: n.timedOut,
                                error: n.error,
                                retry: s.retry
                            }) : n.loaded ? r.default.createElement((t = n.loaded) && t.default ? t.default : t, e) : null
                        }, [e, n])
                    }
                    return LoadableComponent.preload = () => init(), LoadableComponent.displayName = "LoadableComponent", r.default.forwardRef(LoadableComponent)
                }(load, e)
            }

            function flushInitializers(e, t) {
                let i = [];
                for (; e.length;) {
                    let s = e.pop();
                    i.push(s(t))
                }
                return Promise.all(i).then(() => {
                    if (e.length) return flushInitializers(e, t)
                })
            }
            Loadable.preloadAll = () => new Promise((e, t) => {
                flushInitializers(n).then(e, t)
            }), Loadable.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let res = () => (o = !0, t());
                flushInitializers(a, e).then(res, res)
            })), window.__NEXT_PRELOADREADY = Loadable.preloadReady;
            let d = Loadable
        },
        5538: function() {},
        5152: function(e, t, i) {
            e.exports = i(1342)
        },
        5124: function(e, t, i) {
            "use strict";
            let s, r, l;

            function isObject(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function extend(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : isObject(t[i]) && isObject(e[i]) && Object.keys(t[i]).length > 0 && extend(e[i], t[i])
                })
            }
            i.d(t, {
                Z: function() {
                    return Swiper
                }
            });
            let n = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function ssr_window_esm_getDocument() {
                let e = "undefined" != typeof document ? document : {};
                return extend(e, n), e
            }
            let a = {
                document: n,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function ssr_window_esm_getWindow() {
                let e = "undefined" != typeof window ? window : {};
                return extend(e, a), e
            }

            function nextTick(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function now() {
                return Date.now()
            }

            function utils_isObject(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function utils_extend() {
                let e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let i = 1; i < arguments.length; i += 1) {
                    let s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    if (null != s && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(s instanceof HTMLElement) : !s || 1 !== s.nodeType && 11 !== s.nodeType)) {
                        let i = Object.keys(Object(s)).filter(e => 0 > t.indexOf(e));
                        for (let t = 0, r = i.length; t < r; t += 1) {
                            let r = i[t],
                                l = Object.getOwnPropertyDescriptor(s, r);
                            void 0 !== l && l.enumerable && (utils_isObject(e[r]) && utils_isObject(s[r]) ? s[r].__swiper__ ? e[r] = s[r] : utils_extend(e[r], s[r]) : !utils_isObject(e[r]) && utils_isObject(s[r]) ? (e[r] = {}, s[r].__swiper__ ? e[r] = s[r] : utils_extend(e[r], s[r])) : e[r] = s[r])
                        }
                    }
                }
                return e
            }

            function setCSSProperty(e, t, i) {
                e.style.setProperty(t, i)
            }

            function animateCSSModeScroll(e) {
                let t, {
                        swiper: i,
                        targetPosition: s,
                        side: r
                    } = e,
                    l = ssr_window_esm_getWindow(),
                    n = -i.translate,
                    a = null,
                    o = i.params.speed;
                i.wrapperEl.style.scrollSnapType = "none", l.cancelAnimationFrame(i.cssModeFrameID);
                let d = s > n ? "next" : "prev",
                    isOutOfBound = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
                    animate = () => {
                        t = new Date().getTime(), null === a && (a = t);
                        let e = Math.max(Math.min((t - a) / o, 1), 0),
                            d = n + (.5 - Math.cos(e * Math.PI) / 2) * (s - n);
                        if (isOutOfBound(d, s) && (d = s), i.wrapperEl.scrollTo({
                                [r]: d
                            }), isOutOfBound(d, s)) {
                            i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
                                    [r]: d
                                })
                            }), l.cancelAnimationFrame(i.cssModeFrameID);
                            return
                        }
                        i.cssModeFrameID = l.requestAnimationFrame(animate)
                    };
                animate()
            }

            function elementChildren(e, t) {
                return void 0 === t && (t = ""), [...e.children].filter(e => e.matches(t))
            }

            function elementStyle(e, t) {
                let i = ssr_window_esm_getWindow();
                return i.getComputedStyle(e, null).getPropertyValue(t)
            }

            function elementIndex(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function elementOuterSize(e, t, i) {
                let s = ssr_window_esm_getWindow();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function getSupport() {
                return s || (s = function() {
                    let e = ssr_window_esm_getWindow(),
                        t = ssr_window_esm_getDocument();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), s
            }
            let processLazyPreloader = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (i) {
                        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                        })), t && t.remove()
                    }
                },
                unlazy = (e, t) => {
                    if (!e.slides[t]) return;
                    let i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                preload = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        r = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let i = [r - t];
                        i.push(...Array.from({
                            length: t
                        }).map((e, t) => r + s + t)), e.slides.forEach((t, s) => {
                            i.includes(t.column) && unlazy(e, s)
                        });
                        return
                    }
                    let l = r + s - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let s = r - t; s <= l + t; s += 1) {
                            let t = (s % i + i) % i;
                            (t < r || t > l) && unlazy(e, t)
                        } else
                            for (let s = Math.max(r - t, 0); s <= Math.min(l + t, i - 1); s += 1) s !== r && (s > l || s < r) && unlazy(e, s)
                };

            function transitionEmit(e) {
                let {
                    swiper: t,
                    runCallbacks: i,
                    direction: s,
                    step: r
                } = e, {
                    activeIndex: l,
                    previousIndex: n
                } = t, a = s;
                if (a || (a = l > n ? "next" : l < n ? "prev" : "reset"), t.emit(`transition${r}`), i && l !== n) {
                    if ("reset" === a) {
                        t.emit(`slideResetTransition${r}`);
                        return
                    }
                    t.emit(`slideChangeTransition${r}`), "next" === a ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
                }
            }

            function onTouchStart(e) {
                let t = ssr_window_esm_getDocument(),
                    i = ssr_window_esm_getWindow(),
                    s = this.touchEventsData;
                s.evCache.push(e);
                let {
                    params: r,
                    touches: l,
                    enabled: n
                } = this;
                if (!n || !r.simulateTouch && "mouse" === e.pointerType || this.animating && r.preventInteractionOnTransition) return;
                !this.animating && r.cssMode && r.loop && this.loopFix();
                let a = e;
                a.originalEvent && (a = a.originalEvent);
                let o = a.target;
                if ("wrapper" === r.touchEventsTarget && !this.wrapperEl.contains(o) || "which" in a && 3 === a.which || "button" in a && a.button > 0 || s.isTouched && s.isMoved) return;
                let d = !!r.noSwipingClass && "" !== r.noSwipingClass,
                    u = e.composedPath ? e.composedPath() : e.path;
                d && a.target && a.target.shadowRoot && u && (o = u[0]);
                let c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    h = !!(a.target && a.target.shadowRoot);
                if (r.noSwiping && (h ? function(e, t) {
                        return void 0 === t && (t = this),
                            function __closestFrom(t) {
                                if (!t || t === ssr_window_esm_getDocument() || t === ssr_window_esm_getWindow()) return null;
                                t.assignedSlot && (t = t.assignedSlot);
                                let i = t.closest(e);
                                return i || t.getRootNode ? i || __closestFrom(t.getRootNode().host) : null
                            }(t)
                    }(c, o) : o.closest(c))) {
                    this.allowClick = !0;
                    return
                }
                if (r.swipeHandler && !o.closest(r.swipeHandler)) return;
                l.currentX = a.pageX, l.currentY = a.pageY;
                let p = l.currentX,
                    m = l.currentY,
                    f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (f && (p <= v || p >= i.innerWidth - v)) {
                    if ("prevent" !== f) return;
                    e.preventDefault()
                }
                Object.assign(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = p, l.startY = m, s.touchStartTime = now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
                let g = !0;
                o.matches(s.focusableElements) && (g = !1, "SELECT" === o.nodeName && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== o && t.activeElement.blur();
                let w = g && this.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || w) && !o.isContentEditable && a.preventDefault(), r.freeMode && r.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", a)
            }

            function onTouchMove(e) {
                let t;
                let i = ssr_window_esm_getDocument(),
                    s = this.touchEventsData,
                    {
                        params: r,
                        touches: l,
                        rtlTranslate: n,
                        enabled: a
                    } = this;
                if (!a || !r.simulateTouch && "mouse" === e.pointerType) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), !s.isTouched) {
                    s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", o);
                    return
                }
                let d = s.evCache.findIndex(e => e.pointerId === o.pointerId);
                d >= 0 && (s.evCache[d] = o);
                let u = s.evCache.length > 1 ? s.evCache[0] : o,
                    c = u.pageX,
                    h = u.pageY;
                if (o.preventedByNestedSwiper) {
                    l.startX = c, l.startY = h;
                    return
                }
                if (!this.allowTouchMove) {
                    o.target.matches(s.focusableElements) || (this.allowClick = !1), s.isTouched && (Object.assign(l, {
                        startX: c,
                        startY: h,
                        prevX: this.touches.currentX,
                        prevY: this.touches.currentY,
                        currentX: c,
                        currentY: h
                    }), s.touchStartTime = now());
                    return
                }
                if (r.touchReleaseOnEdges && !r.loop) {
                    if (this.isVertical()) {
                        if (h < l.startY && this.translate <= this.maxTranslate() || h > l.startY && this.translate >= this.minTranslate()) {
                            s.isTouched = !1, s.isMoved = !1;
                            return
                        }
                    } else if (c < l.startX && this.translate <= this.maxTranslate() || c > l.startX && this.translate >= this.minTranslate()) return
                }
                if (i.activeElement && o.target === i.activeElement && o.target.matches(s.focusableElements)) {
                    s.isMoved = !0, this.allowClick = !1;
                    return
                }
                if (s.allowTouchCallbacks && this.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
                l.currentX = c, l.currentY = h;
                let p = l.currentX - l.startX,
                    m = l.currentY - l.startY;
                if (this.params.threshold && Math.sqrt(p ** 2 + m ** 2) < this.params.threshold) return;
                if (void 0 === s.isScrolling) {
                    let e;
                    this.isHorizontal() && l.currentY === l.startY || this.isVertical() && l.currentX === l.startX ? s.isScrolling = !1 : p * p + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(p)) / Math.PI, s.isScrolling = this.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
                }
                if (s.isScrolling && this.emit("touchMoveOpposite", o), void 0 === s.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (s.startMoving = !0), s.isScrolling || this.zoom && this.params.zoom && this.params.zoom.enabled && s.evCache.length > 1) {
                    s.isTouched = !1;
                    return
                }
                if (!s.startMoving) return;
                this.allowClick = !1, !r.cssMode && o.cancelable && o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation();
                let f = this.isHorizontal() ? p : m,
                    v = this.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
                r.oneWayMovement && (f = Math.abs(f) * (n ? 1 : -1), v = Math.abs(v) * (n ? 1 : -1)), l.diff = f, f *= r.touchRatio, n && (f = -f, v = -v);
                let g = this.touchesDirection;
                this.swipeDirection = f > 0 ? "prev" : "next", this.touchesDirection = v > 0 ? "prev" : "next";
                let w = this.params.loop && !r.cssMode,
                    S = "next" === this.swipeDirection && this.allowSlideNext || "prev" === this.swipeDirection && this.allowSlidePrev;
                if (!s.isMoved) {
                    if (w && S && this.loopFix({
                            direction: this.swipeDirection
                        }), s.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    s.allowMomentumBounce = !1, r.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", o)
                }
                s.isMoved && g !== this.touchesDirection && w && S && Math.abs(f) >= 1 && (this.loopFix({
                    direction: this.swipeDirection,
                    setTranslate: !0
                }), t = !0), this.emit("sliderMove", o), s.isMoved = !0, s.currentTranslate = f + s.startTranslate;
                let b = !0,
                    T = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (T = 0), f > 0 ? (w && S && !t && s.currentTranslate > (r.centeredSlides ? this.minTranslate() - this.size / 2 : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), s.currentTranslate > this.minTranslate() && (b = !1, r.resistance && (s.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + s.startTranslate + f) ** T))) : f < 0 && (w && S && !t && s.currentTranslate < (r.centeredSlides ? this.maxTranslate() + this.size / 2 : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === r.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
                    }), s.currentTranslate < this.maxTranslate() && (b = !1, r.resistance && (s.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - s.startTranslate - f) ** T))), b && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), this.allowSlidePrev || this.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
                    if (Math.abs(f) > r.threshold || s.allowThresholdMove) {
                        if (!s.allowThresholdMove) {
                            s.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, s.currentTranslate = s.startTranslate, l.diff = this.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                            return
                        }
                    } else {
                        s.currentTranslate = s.startTranslate;
                        return
                    }
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && this.freeMode || r.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(s.currentTranslate), this.setTranslate(s.currentTranslate))
            }

            function onTouchEnd(e) {
                let t;
                let i = this,
                    s = i.touchEventsData,
                    r = s.evCache.findIndex(t => t.pointerId === e.pointerId);
                if (r >= 0 && s.evCache.splice(r, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
                    let t = ["pointercancel", "contextmenu"].includes(e.type) && (i.browser.isSafari || i.browser.isWebView);
                    if (!t) return
                }
                let {
                    params: l,
                    touches: n,
                    rtlTranslate: a,
                    slidesGrid: o,
                    enabled: d
                } = i;
                if (!d || !l.simulateTouch && "mouse" === e.pointerType) return;
                let u = e;
                if (u.originalEvent && (u = u.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", u), s.allowTouchCallbacks = !1, !s.isTouched) {
                    s.isMoved && l.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
                    return
                }
                l.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                let c = now(),
                    h = c - s.touchStartTime;
                if (i.allowClick) {
                    let e = u.path || u.composedPath && u.composedPath();
                    i.updateClickedSlide(e && e[0] || u.target, e), i.emit("tap click", u), h < 300 && c - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", u)
                }
                if (s.lastClickTime = now(), nextTick(() => {
                        i.destroyed || (i.allowClick = !0)
                    }), !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) {
                    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
                    return
                }
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, t = l.followFinger ? a ? i.translate : -i.translate : -s.currentTranslate, l.cssMode) return;
                if (l.freeMode && l.freeMode.enabled) {
                    i.freeMode.onTouchEnd({
                        currentPos: t
                    });
                    return
                }
                let p = 0,
                    m = i.slidesSizesGrid[0];
                for (let e = 0; e < o.length; e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
                    let i = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                    void 0 !== o[e + i] ? t >= o[e] && t < o[e + i] && (p = e, m = o[e + i] - o[e]) : t >= o[e] && (p = e, m = o[o.length - 1] - o[o.length - 2])
                }
                let f = null,
                    v = null;
                l.rewind && (i.isBeginning ? v = l.virtual && l.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (f = 0));
                let g = (t - o[p]) / m,
                    w = p < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                if (h > l.longSwipesMs) {
                    if (!l.longSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    "next" === i.swipeDirection && (g >= l.longSwipesRatio ? i.slideTo(l.rewind && i.isEnd ? f : p + w) : i.slideTo(p)), "prev" === i.swipeDirection && (g > 1 - l.longSwipesRatio ? i.slideTo(p + w) : null !== v && g < 0 && Math.abs(g) > l.longSwipesRatio ? i.slideTo(v) : i.slideTo(p))
                } else {
                    if (!l.shortSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    let e = i.navigation && (u.target === i.navigation.nextEl || u.target === i.navigation.prevEl);
                    e ? u.target === i.navigation.nextEl ? i.slideTo(p + w) : i.slideTo(p) : ("next" === i.swipeDirection && i.slideTo(null !== f ? f : p + w), "prev" === i.swipeDirection && i.slideTo(null !== v ? v : p))
                }
            }

            function onResize() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: l
                } = e, n = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let a = n && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || a ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
            }

            function onClick(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function onScroll() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: i
                } = this;
                if (!i) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let s = this.maxTranslate() - this.minTranslate();
                (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function onLoad(e) {
                processLazyPreloader(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }
            let o = !1;

            function dummyEventListener() {}
            let events = (e, t) => {
                    let i = ssr_window_esm_getDocument(),
                        {
                            params: s,
                            el: r,
                            wrapperEl: l,
                            device: n
                        } = e,
                        a = !!s.nested,
                        o = "on" === t ? "addEventListener" : "removeEventListener";
                    r[o]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[o]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: a
                    }), i[o]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (s.preventClicks || s.preventClicksPropagation) && r[o]("click", e.onClick, !0), s.cssMode && l[o]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[t]("observerUpdate", onResize, !0), r[o]("load", e.onLoad, {
                        capture: !0
                    })
                },
                isGridEnabled = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var d = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopedSlides: null,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let u = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function onceHandler() {
                                s.off(e, onceHandler), onceHandler.__emitterProxy && delete onceHandler.__emitterProxy;
                                for (var i = arguments.length, r = Array(i), l = 0; l < i; l++) r[l] = arguments[l];
                                t.apply(s, r)
                            }
                            return onceHandler.__emitterProxy = t, s.on(e, onceHandler, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit() {
                            let e, t, i;
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
                            for (var r = arguments.length, l = Array(r), n = 0; n < r; n++) l[n] = arguments[n];
                            "string" == typeof l[0] || Array.isArray(l[0]) ? (e = l[0], t = l.slice(1, l.length), i = s) : (e = l[0].events, t = l[0].data, i = l[0].context || s), t.unshift(i);
                            let a = Array.isArray(e) ? e : e.split(" ");
                            return a.forEach(e => {
                                s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(s => {
                                    s.apply(i, [e, ...t])
                                }), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e => {
                                    e.apply(i, t)
                                })
                            }), s
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(elementStyle(i, "padding-left") || 0, 10) - parseInt(elementStyle(i, "padding-right") || 0, 10), t = t - parseInt(elementStyle(i, "padding-top") || 0, 10) - parseInt(elementStyle(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function getDirectionLabel(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function getDirectionPropertyValue(e, t) {
                                return parseFloat(e.getPropertyValue(getDirectionLabel(t)) || 0)
                            }
                            let i = t.params,
                                {
                                    wrapperEl: s,
                                    slidesEl: r,
                                    size: l,
                                    rtlTranslate: n,
                                    wrongRTL: a
                                } = t,
                                o = t.virtual && i.virtual.enabled,
                                d = o ? t.virtual.slides.length : t.slides.length,
                                u = elementChildren(r, `.${t.params.slideClass}, swiper-slide`),
                                c = o ? t.virtual.slides.length : u.length,
                                h = [],
                                p = [],
                                m = [],
                                f = i.slidesOffsetBefore;
                            "function" == typeof f && (f = i.slidesOffsetBefore.call(t));
                            let v = i.slidesOffsetAfter;
                            "function" == typeof v && (v = i.slidesOffsetAfter.call(t));
                            let g = t.snapGrid.length,
                                w = t.slidesGrid.length,
                                S = i.spaceBetween,
                                b = -f,
                                T = 0,
                                y = 0;
                            if (void 0 === l) return;
                            "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * l : "string" == typeof S && (S = parseFloat(S)), t.virtualSize = -S, u.forEach(e => {
                                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), i.centeredSlides && i.cssMode && (setCSSProperty(s, "--swiper-centered-offset-before", ""), setCSSProperty(s, "--swiper-centered-offset-after", ""));
                            let x = i.grid && i.grid.rows > 1 && t.grid;
                            x && t.grid.initSlides(c);
                            let E = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
                            for (let s = 0; s < c; s += 1) {
                                let r;
                                if (e = 0, u[s] && (r = u[s]), x && t.grid.updateSlide(s, r, c, getDirectionLabel), !u[s] || "none" !== elementStyle(r, "display")) {
                                    if ("auto" === i.slidesPerView) {
                                        E && (u[s].style[getDirectionLabel("width")] = "");
                                        let l = getComputedStyle(r),
                                            n = r.style.transform,
                                            a = r.style.webkitTransform;
                                        if (n && (r.style.transform = "none"), a && (r.style.webkitTransform = "none"), i.roundLengths) e = t.isHorizontal() ? elementOuterSize(r, "width", !0) : elementOuterSize(r, "height", !0);
                                        else {
                                            let t = getDirectionPropertyValue(l, "width"),
                                                i = getDirectionPropertyValue(l, "padding-left"),
                                                s = getDirectionPropertyValue(l, "padding-right"),
                                                n = getDirectionPropertyValue(l, "margin-left"),
                                                a = getDirectionPropertyValue(l, "margin-right"),
                                                o = l.getPropertyValue("box-sizing");
                                            if (o && "border-box" === o) e = t + n + a;
                                            else {
                                                let {
                                                    clientWidth: l,
                                                    offsetWidth: o
                                                } = r;
                                                e = t + i + s + n + a + (o - l)
                                            }
                                        }
                                        n && (r.style.transform = n), a && (r.style.webkitTransform = a), i.roundLengths && (e = Math.floor(e))
                                    } else e = (l - (i.slidesPerView - 1) * S) / i.slidesPerView, i.roundLengths && (e = Math.floor(e)), u[s] && (u[s].style[getDirectionLabel("width")] = `${e}px`);
                                    u[s] && (u[s].swiperSlideSize = e), m.push(e), i.centeredSlides ? (b = b + e / 2 + T / 2 + S, 0 === T && 0 !== s && (b = b - l / 2 - S), 0 === s && (b = b - l / 2 - S), .001 > Math.abs(b) && (b = 0), i.roundLengths && (b = Math.floor(b)), y % i.slidesPerGroup == 0 && h.push(b), p.push(b)) : (i.roundLengths && (b = Math.floor(b)), (y - Math.min(t.params.slidesPerGroupSkip, y)) % t.params.slidesPerGroup == 0 && h.push(b), p.push(b), b = b + e + S), t.virtualSize += e + S, T = e, y += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, l) + v, n && a && ("slide" === i.effect || "coverflow" === i.effect) && (s.style.width = `${t.virtualSize+S}px`), i.setWrapperSize && (s.style[getDirectionLabel("width")] = `${t.virtualSize+S}px`), x && t.grid.updateWrapperSize(e, h, getDirectionLabel), !i.centeredSlides) {
                                let e = [];
                                for (let s = 0; s < h.length; s += 1) {
                                    let r = h[s];
                                    i.roundLengths && (r = Math.floor(r)), h[s] <= t.virtualSize - l && e.push(r)
                                }
                                h = e, Math.floor(t.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - l)
                            }
                            if (o && i.loop) {
                                let e = m[0] + S;
                                if (i.slidesPerGroup > 1) {
                                    let s = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
                                        r = e * i.slidesPerGroup;
                                    for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + r)
                                }
                                for (let s = 0; s < t.virtual.slidesBefore + t.virtual.slidesAfter; s += 1) 1 === i.slidesPerGroup && h.push(h[h.length - 1] + e), p.push(p[p.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === h.length && (h = [0]), 0 !== S) {
                                let e = t.isHorizontal() && n ? "marginLeft" : getDirectionLabel("marginRight");
                                u.filter((e, t) => !i.cssMode || !!i.loop || t !== u.length - 1).forEach(t => {
                                    t.style[e] = `${S}px`
                                })
                            }
                            if (i.centeredSlides && i.centeredSlidesBounds) {
                                let e = 0;
                                m.forEach(t => {
                                    e += t + (S || 0)
                                }), e -= S;
                                let t = e - l;
                                h = h.map(e => e <= 0 ? -f : e > t ? t + v : e)
                            }
                            if (i.centerInsufficientSlides) {
                                let e = 0;
                                if (m.forEach(t => {
                                        e += t + (S || 0)
                                    }), (e -= S) < l) {
                                    let t = (l - e) / 2;
                                    h.forEach((e, i) => {
                                        h[i] = e - t
                                    }), p.forEach((e, i) => {
                                        p[i] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: u,
                                    snapGrid: h,
                                    slidesGrid: p,
                                    slidesSizesGrid: m
                                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                                setCSSProperty(s, "--swiper-centered-offset-before", `${-h[0]}px`), setCSSProperty(s, "--swiper-centered-offset-after", `${t.size/2-m[m.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (c !== d && t.emit("slidesLengthChange"), h.length !== g && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), p.length !== w && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), !o && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                                let e = `${i.containerModifierClass}backface-hidden`,
                                    s = t.el.classList.contains(e);
                                c <= i.maxBackfaceHiddenSlides ? s || t.el.classList.add(e) : s && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                l = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let getSlideByIndex = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(getSlideByIndex(e))
                                    }
                            } else s.push(getSlideByIndex(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    l = e > l ? e : l
                                }(l || 0 === l) && (i.wrapperEl.style.height = `${l}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this.params,
                                {
                                    slides: i,
                                    rtlTranslate: s,
                                    snapGrid: r
                                } = this;
                            if (0 === i.length) return;
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            let l = -e;
                            s && (l = e), i.forEach(e => {
                                e.classList.remove(t.slideVisibleClass)
                            }), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let n = t.spaceBetween;
                            "string" == typeof n && n.indexOf("%") >= 0 ? n = parseFloat(n.replace("%", "")) / 100 * this.size : "string" == typeof n && (n = parseFloat(n));
                            for (let e = 0; e < i.length; e += 1) {
                                let a = i[e],
                                    o = a.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                                let d = (l + (t.centeredSlides ? this.minTranslate() : 0) - o) / (a.swiperSlideSize + n),
                                    u = (l - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (a.swiperSlideSize + n),
                                    c = -(l - o),
                                    h = c + this.slidesSizesGrid[e],
                                    p = c >= 0 && c < this.size - 1 || h > 1 && h <= this.size || c <= 0 && h >= this.size;
                                p && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(e), i[e].classList.add(t.slideVisibleClass)), a.progress = s ? -d : d, a.originalProgress = s ? -u : u
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: r,
                                    isEnd: l,
                                    progressLoop: n
                                } = this,
                                a = r,
                                o = l;
                            if (0 === i) s = 0, r = !0, l = !0;
                            else {
                                s = (e - this.minTranslate()) / i;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    n = 1 > Math.abs(e - this.maxTranslate());
                                r = t || s <= 0, l = n || s >= 1, t && (s = 0), n && (s = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    i = this.getSlideIndexByData(this.slides.length - 1),
                                    s = this.slidesGrid[t],
                                    r = this.slidesGrid[i],
                                    l = this.slidesGrid[this.slidesGrid.length - 1],
                                    a = Math.abs(e);
                                (n = a >= s ? (a - s) / l : (a + l - r) / l) > 1 && (n -= 1)
                            }
                            Object.assign(this, {
                                progress: s,
                                progressLoop: n,
                                isBeginning: r,
                                isEnd: l
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !a && this.emit("reachBeginning toEdge"), l && !o && this.emit("reachEnd toEdge"), (a && !r || o && !l) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e;
                            let {
                                slides: t,
                                params: i,
                                slidesEl: s,
                                activeIndex: r
                            } = this, l = this.virtual && i.virtual.enabled, getFilteredSlide = e => elementChildren(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                            if (t.forEach(e => {
                                    e.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
                                }), l) {
                                if (i.loop) {
                                    let t = r - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = getFilteredSlide(`[data-swiper-slide-index="${t}"]`)
                                } else e = getFilteredSlide(`[data-swiper-slide-index="${r}"]`)
                            } else e = t[r];
                            if (e) {
                                e.classList.add(i.slideActiveClass);
                                let s = function(e, t) {
                                    let i = [];
                                    for (; e.nextElementSibling;) {
                                        let s = e.nextElementSibling;
                                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                                    }
                                    return i
                                }(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop && !s && (s = t[0]), s && s.classList.add(i.slideNextClass);
                                let r = function(e, t) {
                                    let i = [];
                                    for (; e.previousElementSibling;) {
                                        let s = e.previousElementSibling;
                                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                                    }
                                    return i
                                }(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop, r && r.classList.add(i.slidePrevClass)
                            }
                            this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let s = this,
                                r = s.rtlTranslate ? s.translate : -s.translate,
                                {
                                    snapGrid: l,
                                    params: n,
                                    activeIndex: a,
                                    realIndex: o,
                                    snapIndex: d
                                } = s,
                                u = e,
                                getVirtualRealIndex = e => {
                                    let t = e - s.virtual.slidesBefore;
                                    return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                                };
                            if (void 0 === u && (u = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: s
                                    } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(s)), l.indexOf(r) >= 0) t = l.indexOf(r);
                            else {
                                let e = Math.min(n.slidesPerGroupSkip, u);
                                t = e + Math.floor((u - e) / n.slidesPerGroup)
                            }
                            if (t >= l.length && (t = l.length - 1), u === a) {
                                t !== d && (s.snapIndex = t, s.emit("snapIndexChange")), s.params.loop && s.virtual && s.params.virtual.enabled && (s.realIndex = getVirtualRealIndex(u));
                                return
                            }
                            i = s.virtual && n.virtual.enabled && n.loop ? getVirtualRealIndex(u) : s.slides[u] ? parseInt(s.slides[u].getAttribute("data-swiper-slide-index") || u, 10) : u, Object.assign(s, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: i,
                                previousIndex: a,
                                activeIndex: u
                            }), s.initialized && preload(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && (o !== i && s.emit("realIndexChange"), s.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let i;
                            let s = this.params,
                                r = e.closest(`.${s.slideClass}, swiper-slide`);
                            !r && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e)
                            });
                            let l = !1;
                            if (r) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === r) {
                                        l = !0, i = e;
                                        break
                                    }
                            }
                            if (r && l) this.clickedSlide = r, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let l = function(e, t) {
                                let i, s, r;
                                void 0 === t && (t = "x");
                                let l = ssr_window_esm_getWindow(),
                                    n = function(e) {
                                        let t;
                                        let i = ssr_window_esm_getWindow();
                                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                                    }(e);
                                return l.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new l.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = l.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = l.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                            }(r, e);
                            return l += this.cssOverflowAdjustment(), i && (l = -l), l || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: i,
                                params: s,
                                wrapperEl: r,
                                progress: l
                            } = this, n = 0, a = 0;
                            this.isHorizontal() ? n = i ? -e : e : a = e, s.roundLengths && (n = Math.floor(n), a = Math.floor(a)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? n : a, s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -n : -a : s.virtualTranslate || (this.isHorizontal() ? n -= this.cssOverflowAdjustment() : a -= this.cssOverflowAdjustment(), r.style.transform = `translate3d(${n}px, ${a}px, 0px)`);
                            let o = this.maxTranslate() - this.minTranslate();
                            (0 === o ? 0 : (e - this.minTranslate()) / o) !== l && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, i, s, r) {
                            let l;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                            let n = this,
                                {
                                    params: a,
                                    wrapperEl: o
                                } = n;
                            if (n.animating && a.preventInteractionOnTransition) return !1;
                            let d = n.minTranslate(),
                                u = n.maxTranslate();
                            if (l = s && e > d ? d : s && e < u ? u : e, n.updateProgress(l), a.cssMode) {
                                let e = n.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -l;
                                else {
                                    if (!n.support.smoothScroll) return animateCSSModeScroll({
                                        swiper: n,
                                        targetPosition: -l,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [e ? "left" : "top"]: -l,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (n.setTransition(0), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                                n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
                            }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), transitionEmit({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            this.animating = !1, i.cssMode || (this.setTransition(0), transitionEmit({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, i, s, r) {
                            let l;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let n = this,
                                a = e;
                            a < 0 && (a = 0);
                            let {
                                params: o,
                                snapGrid: d,
                                slidesGrid: u,
                                previousIndex: c,
                                activeIndex: h,
                                rtlTranslate: p,
                                wrapperEl: m,
                                enabled: f
                            } = n;
                            if (n.animating && o.preventInteractionOnTransition || !f && !s && !r) return !1;
                            let v = Math.min(n.params.slidesPerGroupSkip, a),
                                g = v + Math.floor((a - v) / n.params.slidesPerGroup);
                            g >= d.length && (g = d.length - 1);
                            let w = -d[g];
                            if (o.normalizeSlideIndex)
                                for (let e = 0; e < u.length; e += 1) {
                                    let t = -Math.floor(100 * w),
                                        i = Math.floor(100 * u[e]),
                                        s = Math.floor(100 * u[e + 1]);
                                    void 0 !== u[e + 1] ? t >= i && t < s - (s - i) / 2 ? a = e : t >= i && t < s && (a = e + 1) : t >= i && (a = e)
                                }
                            if (n.initialized && a !== h && (!n.allowSlideNext && (p ? w > n.translate && w > n.minTranslate() : w < n.translate && w < n.minTranslate()) || !n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (h || 0) !== a)) return !1;
                            if (a !== (c || 0) && i && n.emit("beforeSlideChangeStart"), n.updateProgress(w), l = a > h ? "next" : a < h ? "prev" : "reset", p && -w === n.translate || !p && w === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== l && (n.transitionStart(i, l), n.transitionEnd(i, l)), !1;
                            if (o.cssMode) {
                                let e = n.isHorizontal(),
                                    i = p ? w : -w;
                                if (0 === t) {
                                    let t = n.virtual && n.params.virtual.enabled;
                                    t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        m[e ? "scrollLeft" : "scrollTop"] = i
                                    })) : m[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                        n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                                    })
                                } else {
                                    if (!n.support.smoothScroll) return animateCSSModeScroll({
                                        swiper: n,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, l), 0 === t ? n.transitionEnd(i, l) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                                n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, l))
                            }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, i, s) {
                            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e) {
                                let t = parseInt(e, 10);
                                e = t
                            }
                            let r = e;
                            return this.params.loop && (this.virtual && this.params.virtual.enabled ? r += this.virtual.slidesBefore : r = this.getSlideIndexByData(r)), this.slideTo(r, t, i, s)
                        },
                        slideNext: function(e, t, i) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            let s = this,
                                {
                                    enabled: r,
                                    params: l,
                                    animating: n
                                } = s;
                            if (!r) return s;
                            let a = l.slidesPerGroup;
                            "auto" === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < l.slidesPerGroupSkip ? 1 : a,
                                d = s.virtual && l.virtual.enabled;
                            if (l.loop) {
                                if (n && !d && l.loopPreventsSliding) return !1;
                                if (s.loopFix({
                                        direction: "next"
                                    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && l.cssMode) return requestAnimationFrame(() => {
                                    s.slideTo(s.activeIndex + o, e, t, i)
                                }), !0
                            }
                            return l.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e, t, i) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            let s = this,
                                {
                                    params: r,
                                    snapGrid: l,
                                    slidesGrid: n,
                                    rtlTranslate: a,
                                    enabled: o,
                                    animating: d
                                } = s;
                            if (!o) return s;
                            let u = s.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (d && !u && r.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "prev"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }
                            let c = a ? s.translate : -s.translate;

                            function normalize(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let h = normalize(c),
                                p = l.map(e => normalize(e)),
                                m = l[p.indexOf(h) - 1];
                            if (void 0 === m && r.cssMode) {
                                let e;
                                l.forEach((t, i) => {
                                    h >= t && (e = i)
                                }), void 0 !== e && (m = l[e > 0 ? e - 1 : e])
                            }
                            let f = 0;
                            if (void 0 !== m && ((f = n.indexOf(m)) < 0 && (f = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (f = Math.max(f = f - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(r, e, t, i)
                            }
                            return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame(() => {
                                s.slideTo(f, e, t, i)
                            }), !0) : s.slideTo(f, e, t, i)
                        },
                        slideReset: function(e, t, i) {
                            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e, t, i, s) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                            let r = this.activeIndex,
                                l = Math.min(this.params.slidesPerGroupSkip, r),
                                n = l + Math.floor((r - l) / this.params.slidesPerGroup),
                                a = this.rtlTranslate ? this.translate : -this.translate;
                            if (a >= this.snapGrid[n]) {
                                let e = this.snapGrid[n],
                                    t = this.snapGrid[n + 1];
                                a - e > (t - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[n - 1],
                                    t = this.snapGrid[n];
                                a - e <= (t - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t,
                                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                                l = t.clickedIndex,
                                n = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? l < t.loopedSlides - r / 2 || l > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), l = t.getSlideIndex(elementChildren(s, `${n}[data-swiper-slide-index="${e}"]`)[0]), nextTick(() => {
                                    t.slideTo(l)
                                })) : t.slideTo(l) : l > t.slides.length - r ? (t.loopFix(), l = t.getSlideIndex(elementChildren(s, `${n}[data-swiper-slide-index="${e}"]`)[0]), nextTick(() => {
                                    t.slideTo(l)
                                })) : t.slideTo(l)
                            } else t.slideTo(l)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let {
                                params: t,
                                slidesEl: i
                            } = this;
                            if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                            let s = elementChildren(i, `.${t.slideClass}, swiper-slide`);
                            s.forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), this.loopFix({
                                slideRealIndex: e,
                                direction: t.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: i = !0,
                                direction: s,
                                setTranslate: r,
                                activeSlideIndex: l,
                                byController: n,
                                byMousewheel: a
                            } = void 0 === e ? {} : e, o = this;
                            if (!o.params.loop) return;
                            o.emit("beforeLoopFix");
                            let {
                                slides: d,
                                allowSlidePrev: u,
                                allowSlideNext: c,
                                slidesEl: h,
                                params: p
                            } = o;
                            if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && p.virtual.enabled) {
                                i && (p.centeredSlides || 0 !== o.snapIndex ? p.centeredSlides && o.snapIndex < p.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = u, o.allowSlideNext = c, o.emit("loopFix");
                                return
                            }
                            let m = "auto" === p.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10)),
                                f = p.loopedSlides || m;
                            f % p.slidesPerGroup != 0 && (f += p.slidesPerGroup - f % p.slidesPerGroup), o.loopedSlides = f;
                            let v = [],
                                g = [],
                                w = o.activeIndex;
                            void 0 === l ? l = o.getSlideIndex(o.slides.filter(e => e.classList.contains(p.slideActiveClass))[0]) : w = l;
                            let S = "next" === s || !s,
                                b = "prev" === s || !s,
                                T = 0,
                                y = 0;
                            if (l < f) {
                                T = Math.max(f - l, p.slidesPerGroup);
                                for (let e = 0; e < f - l; e += 1) {
                                    let t = e - Math.floor(e / d.length) * d.length;
                                    v.push(d.length - t - 1)
                                }
                            } else if (l > o.slides.length - 2 * f) {
                                y = Math.max(l - (o.slides.length - 2 * f), p.slidesPerGroup);
                                for (let e = 0; e < y; e += 1) {
                                    let t = e - Math.floor(e / d.length) * d.length;
                                    g.push(t)
                                }
                            }
                            if (b && v.forEach(e => {
                                    o.slides[e].swiperLoopMoveDOM = !0, h.prepend(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
                                }), S && g.forEach(e => {
                                    o.slides[e].swiperLoopMoveDOM = !0, h.append(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
                                }), o.recalcSlides(), "auto" === p.slidesPerView && o.updateSlides(), p.watchSlidesProgress && o.updateSlidesOffset(), i) {
                                if (v.length > 0 && b) {
                                    if (void 0 === t) {
                                        let e = o.slidesGrid[w],
                                            t = o.slidesGrid[w + T],
                                            i = t - e;
                                        a ? o.setTranslate(o.translate - i) : (o.slideTo(w + T, 0, !1, !0), r && (o.touches[o.isHorizontal() ? "startX" : "startY"] += i, o.touchEventsData.currentTranslate = o.translate))
                                    } else r && (o.slideToLoop(t, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate)
                                } else if (g.length > 0 && S) {
                                    if (void 0 === t) {
                                        let e = o.slidesGrid[w],
                                            t = o.slidesGrid[w - y],
                                            i = t - e;
                                        a ? o.setTranslate(o.translate - i) : (o.slideTo(w - y, 0, !1, !0), r && (o.touches[o.isHorizontal() ? "startX" : "startY"] += i, o.touchEventsData.currentTranslate = o.translate))
                                    } else o.slideToLoop(t, 0, !1, !0)
                                }
                            }
                            if (o.allowSlidePrev = u, o.allowSlideNext = c, o.controller && o.controller.control && !n) {
                                let e = {
                                    slideRealIndex: t,
                                    direction: s,
                                    setTranslate: r,
                                    activeSlideIndex: l,
                                    byController: !0
                                };
                                Array.isArray(o.controller.control) ? o.controller.control.forEach(t => {
                                    !t.destroyed && t.params.loop && t.loopFix({
                                        ...e,
                                        slideTo: t.params.slidesPerView === p.slidesPerView && i
                                    })
                                }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
                                    ...e,
                                    slideTo: o.controller.control.params.slidesPerView === p.slidesPerView && i
                                })
                            }
                            o.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let i = [];
                            this.slides.forEach(e => {
                                let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                i[t] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), i.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = ssr_window_esm_getDocument(),
                                {
                                    params: t
                                } = this;
                            this.onTouchStart = onTouchStart.bind(this), this.onTouchMove = onTouchMove.bind(this), this.onTouchEnd = onTouchEnd.bind(this), t.cssMode && (this.onScroll = onScroll.bind(this)), this.onClick = onClick.bind(this), this.onLoad = onLoad.bind(this), o || (e.addEventListener("touchstart", dummyEventListener), o = !0), events(this, "on")
                        },
                        detachEvents: function() {
                            events(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: s,
                                    el: r
                                } = e,
                                l = s.breakpoints;
                            if (!l || l && 0 === Object.keys(l).length) return;
                            let n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                            if (!n || e.currentBreakpoint === n) return;
                            let a = n in l ? l[n] : void 0,
                                o = a || e.originalParams,
                                d = isGridEnabled(e, s),
                                u = isGridEnabled(e, o),
                                c = s.enabled;
                            d && !u ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && u && (r.classList.add(`${s.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === o[t]) return;
                                let i = s[t] && s[t].enabled,
                                    r = o[t] && o[t].enabled;
                                i && !r && e[t].disable(), !i && r && e[t].enable()
                            });
                            let h = o.direction && o.direction !== s.direction,
                                p = s.loop && (o.slidesPerView !== s.slidesPerView || h),
                                m = s.loop;
                            h && i && e.changeDirection(), utils_extend(e.params, o);
                            let f = e.params.enabled,
                                v = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), c && !f ? e.disable() : !c && f && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", o), i && (p ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !m && v ? (e.loopCreate(t), e.updateSlides()) : m && !v && e.loopDestroy()), e.emit("breakpoint", o)
                        },
                        getBreakpoint: function(e, t, i) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                            let s = !1,
                                r = ssr_window_esm_getWindow(),
                                l = "window" === t ? r.innerHeight : i.clientHeight,
                                n = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: l * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < n.length; e += 1) {
                                let {
                                    point: l,
                                    value: a
                                } = n[e];
                                "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (s = l) : a <= i.clientWidth && (s = l)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: i
                            } = t;
                            if (i) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: s,
                                device: r
                            } = this, l = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...l), s.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                c = {};
            let Swiper = class Swiper {
                constructor() {
                    let e, t;
                    for (var i, s = arguments.length, n = Array(s), a = 0; a < s; a++) n[a] = arguments[a];
                    1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = utils_extend({}, t), e && !t.el && (t.el = e);
                    let o = ssr_window_esm_getDocument();
                    if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
                        let e = [];
                        return o.querySelectorAll(t.el).forEach(i => {
                            let s = utils_extend({}, t, {
                                el: i
                            });
                            e.push(new Swiper(s))
                        }), e
                    }
                    let u = this;
                    u.__swiper__ = !0, u.support = getSupport(), u.device = (i = {
                        userAgent: t.userAgent
                    }, r || (r = function(e) {
                        let {
                            userAgent: t
                        } = void 0 === e ? {} : e, i = getSupport(), s = ssr_window_esm_getWindow(), r = s.navigator.platform, l = t || s.navigator.userAgent, n = {
                            ios: !1,
                            android: !1
                        }, a = s.screen.width, o = s.screen.height, d = l.match(/(Android);?[\s\/]+([\d.]+)?/), u = l.match(/(iPad).*OS\s([\d_]+)/), c = l.match(/(iPod)(.*OS\s([\d_]+))?/), h = !u && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = "MacIntel" === r;
                        return !u && p && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${o}`) >= 0 && ((u = l.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), p = !1), d && "Win32" !== r && (n.os = "android", n.android = !0), (u || h || c) && (n.os = "ios", n.ios = !0), n
                    }(i)), r), u.browser = (l || (l = function() {
                        let e = ssr_window_esm_getWindow(),
                            t = !1;

                        function isSafari() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (isSafari()) {
                            let i = String(e.navigator.userAgent);
                            if (i.includes("Version/")) {
                                let [e, s] = i.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                t = e < 16 || 16 === e && s < 2
                            }
                        }
                        return {
                            isSafari: t || isSafari(),
                            needPerspectiveFix: t,
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), l), u.eventsListeners = {}, u.eventsAnyListeners = [], u.modules = [...u.__modules__], t.modules && Array.isArray(t.modules) && u.modules.push(...t.modules);
                    let h = {};
                    u.modules.forEach(e => {
                        var i;
                        e({
                            params: t,
                            swiper: u,
                            extendParams: (i = t, function(e) {
                                void 0 === e && (e = {});
                                let t = Object.keys(e)[0],
                                    s = e[t];
                                if ("object" != typeof s || null === s || (!0 === i[t] && (i[t] = {
                                        enabled: !0
                                    }), "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0), ["pagination", "scrollbar"].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0), !(t in i && "enabled" in s))) {
                                    utils_extend(h, e);
                                    return
                                }
                                "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                                    enabled: !1
                                }), utils_extend(h, e)
                            }),
                            on: u.on.bind(u),
                            once: u.once.bind(u),
                            off: u.off.bind(u),
                            emit: u.emit.bind(u)
                        })
                    });
                    let p = utils_extend({}, d, h);
                    return u.params = utils_extend({}, p, c, t), u.originalParams = utils_extend({}, u.params), u.passedParams = utils_extend({}, t), u.params && u.params.on && Object.keys(u.params.on).forEach(e => {
                        u.on(e, u.params.on[e])
                    }), u.params && u.params.onAny && u.onAny(u.params.onAny), Object.assign(u, {
                        enabled: u.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === u.params.direction,
                        isVertical: () => "vertical" === u.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: u.params.allowSlideNext,
                        allowSlidePrev: u.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: u.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: u.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), u.emit("_swiper"), u.params.init && u.init(), u
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: i
                    } = this, s = elementChildren(t, `.${i.slideClass}, swiper-slide`), r = elementIndex(s[0]);
                    return elementIndex(e) - r
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = elementChildren(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: l,
                        size: n,
                        activeIndex: a
                    } = this, o = 1;
                    if ("number" == typeof i.slidesPerView) return i.slidesPerView;
                    if (i.centeredSlides) {
                        let e, t = s[a] ? s[a].swiperSlideSize : 0;
                        for (let i = a + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > n && (e = !0));
                        for (let i = a - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > n && (e = !0))
                    } else if ("current" === e)
                        for (let e = a + 1; e < s.length; e += 1) {
                            let i = t ? r[e] + l[e] - r[a] < n : r[e] - r[a] < n;
                            i && (o += 1)
                        } else
                            for (let e = a - 1; e >= 0; e -= 1) {
                                let t = r[a] - r[e] < n;
                                t && (o += 1)
                            }
                    return o
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: i,
                        params: s
                    } = t;

                    function setTranslate() {
                        let e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (s.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && processLazyPreloader(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) setTranslate(), s.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                            let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(i.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || setTranslate()
                    }
                    s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.parentNode && i.parentNode.host && "SWIPER-CONTAINER" === i.parentNode.host.nodeName && (t.isElement = !0);
                    let getWrapperSelector = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        s = (() => {
                            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                                let e = i.shadowRoot.querySelector(getWrapperSelector());
                                return e
                            }
                            return elementChildren(i, getWrapperSelector())[0]
                        })();
                    return !s && t.params.createElements && (s = function(e, t) {
                        void 0 === t && (t = []);
                        let i = document.createElement("div");
                        return i.classList.add(...Array.isArray(t) ? t : [t]), i
                    }(0, t.params.wrapperClass), i.append(s), elementChildren(i, `.${t.params.slideClass}`).forEach(e => {
                        s.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: s,
                        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : s,
                        hostEl: t.isElement ? i.parentNode.host : i,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === elementStyle(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === elementStyle(i, "direction")),
                        wrongRTL: "-webkit-box" === elementStyle(s, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    if (!1 === i) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    let s = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach(e => {
                        e.complete ? processLazyPreloader(t, e) : e.addEventListener("load", e => {
                            processLazyPreloader(t, e.target)
                        })
                    }), preload(t), t.initialized = !0, preload(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let i = this,
                        {
                            params: s,
                            el: r,
                            wrapperEl: l,
                            slides: n
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttribute("style"), l.removeAttribute("style"), n && n.length && n.forEach(e => {
                        e.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el.swiper = null, function(e) {
                        Object.keys(e).forEach(t => {
                            try {
                                e[t] = null
                            } catch (e) {}
                            try {
                                delete e[t]
                            } catch (e) {}
                        })
                    }(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    utils_extend(c, e)
                }
                static get extendedDefaults() {
                    return c
                }
                static get defaults() {
                    return d
                }
                static installModule(e) {
                    Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
                    let t = Swiper.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => Swiper.installModule(e)) : Swiper.installModule(e), Swiper
                }
            };
            Object.keys(u).forEach(e => {
                Object.keys(u[e]).forEach(t => {
                    Swiper.prototype[t] = u[e][t]
                })
            }), Swiper.use([function(e) {
                let {
                    swiper: t,
                    on: i,
                    emit: s
                } = e, r = ssr_window_esm_getWindow(), l = null, n = null, resizeHandler = () => {
                    t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
                }, createObserver = () => {
                    t && !t.destroyed && t.initialized && (l = new ResizeObserver(e => {
                        n = r.requestAnimationFrame(() => {
                            let {
                                width: i,
                                height: s
                            } = t, r = i, l = s;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: i,
                                    contentRect: s,
                                    target: n
                                } = e;
                                n && n !== t.el || (r = s ? s.width : (i[0] || i).inlineSize, l = s ? s.height : (i[0] || i).blockSize)
                            }), (r !== i || l !== s) && resizeHandler()
                        })
                    })).observe(t.el)
                }, removeObserver = () => {
                    n && r.cancelAnimationFrame(n), l && l.unobserve && t.el && (l.unobserve(t.el), l = null)
                }, orientationChangeHandler = () => {
                    t && !t.destroyed && t.initialized && s("orientationchange")
                };
                i("init", () => {
                    if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                        createObserver();
                        return
                    }
                    r.addEventListener("resize", resizeHandler), r.addEventListener("orientationchange", orientationChangeHandler)
                }), i("destroy", () => {
                    removeObserver(), r.removeEventListener("resize", resizeHandler), r.removeEventListener("orientationchange", orientationChangeHandler)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s,
                    emit: r
                } = e, l = [], n = ssr_window_esm_getWindow(), attach = function(e, i) {
                    void 0 === i && (i = {});
                    let s = n.MutationObserver || n.WebkitMutationObserver,
                        a = new s(e => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) {
                                r("observerUpdate", e[0]);
                                return
                            }
                            let observerUpdate = function() {
                                r("observerUpdate", e[0])
                            };
                            n.requestAnimationFrame ? n.requestAnimationFrame(observerUpdate) : n.setTimeout(observerUpdate, 0)
                        });
                    a.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: void 0 === i.childList || i.childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), l.push(a)
                };
                i({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = function(e, t) {
                                let i = [],
                                    s = e.parentElement;
                                for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                                return i
                            }(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) attach(e[t])
                        }
                        attach(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), attach(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), s("destroy", () => {
                    l.forEach(e => {
                        e.disconnect()
                    }), l.splice(0, l.length)
                })
            }])
        }
    }
]);