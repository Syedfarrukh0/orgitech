(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        5557: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return s(8904)
            }])
        },
        1342: function (e, t, s) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var s in t) Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: t[s]
                    })
                }(t, {
                    noSSR: function () {
                        return noSSR
                    },
                    default: function () {
                        return dynamic
                    }
                });
            let i = s(8754),
                a = (s(7294), i._(s(4304)));

            function convertModule(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function noSSR(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function dynamic(e, t) {
                let s = a.default,
                    i = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: s,
                                pastDelay: i
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? i.loader = () => e : "function" == typeof e ? i.loader = e : "object" == typeof e && (i = {
                    ...i,
                    ...e
                }), i = {
                    ...i,
                    ...t
                };
                let r = i.loader;
                return (i.loadableGenerated && (i = {
                    ...i,
                    ...i.loadableGenerated
                }, delete i.loadableGenerated), "boolean" != typeof i.ssr || i.ssr) ? s({
                    ...i,
                    loader: () => null != r ? r().then(convertModule) : Promise.resolve(convertModule(() => null))
                }) : (delete i.webpack, delete i.modules, noSSR(s, i))
            } ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        43: function (e, t, s) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function () {
                    return r
                }
            });
            let i = s(8754),
                a = i._(s(7294)),
                r = a.default.createContext(null)
        },
        4304: function (e, t, s) {
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
                get: function () {
                    return c
                }
            });
            let i = s(8754),
                a = i._(s(7294)),
                r = s(43),
                n = [],
                o = [],
                l = !1;

            function load(e) {
                let t = e(),
                    s = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return s.promise = t.then(e => (s.loading = !1, s.loaded = e, e)).catch(e => {
                    throw s.loading = !1, s.error = e, e
                }), s
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
                return function (e, t) {
                    let s = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null
                    }, t),
                        i = null;

                    function init() {
                        if (!i) {
                            let t = new LoadableSubscription(e, s);
                            i = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return i.promise()
                    }
                    if (!l) {
                        let e = s.webpack ? s.webpack() : s.modules;
                        e && o.push(t => {
                            for (let s of e)
                                if (t.includes(s)) return init()
                        })
                    }

                    function LoadableComponent(e, t) {
                        ! function () {
                            init();
                            let e = a.default.useContext(r.LoadableContext);
                            e && Array.isArray(s.modules) && s.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let n = a.default.useSyncExternalStore(i.subscribe, i.getCurrentValue, i.getCurrentValue);
                        return a.default.useImperativeHandle(t, () => ({
                            retry: i.retry
                        }), []), a.default.useMemo(() => {
                            var t;
                            return n.loading || n.error ? a.default.createElement(s.loading, {
                                isLoading: n.loading,
                                pastDelay: n.pastDelay,
                                timedOut: n.timedOut,
                                error: n.error,
                                retry: i.retry
                            }) : n.loaded ? a.default.createElement((t = n.loaded) && t.default ? t.default : t, e) : null
                        }, [e, n])
                    }
                    return LoadableComponent.preload = () => init(), LoadableComponent.displayName = "LoadableComponent", a.default.forwardRef(LoadableComponent)
                }(load, e)
            }

            function flushInitializers(e, t) {
                let s = [];
                for (; e.length;) {
                    let i = e.pop();
                    s.push(i(t))
                }
                return Promise.all(s).then(() => {
                    if (e.length) return flushInitializers(e, t)
                })
            }
            Loadable.preloadAll = () => new Promise((e, t) => {
                flushInitializers(n).then(e, t)
            }), Loadable.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let res = () => (l = !0, t());
                flushInitializers(o, e).then(res, res)
            })), window.__NEXT_PRELOADREADY = Loadable.preloadReady;
            let c = Loadable
        },
        4791: function (e, t, s) {
            "use strict";
            s.d(t, {
                Z: function () {
                    return Modal
                }
            });
            var i = s(5893),
                a = s(7294),
                r = s(5675),
                n = s.n(r);
            s(6732), s(5538);
            var o = s(5152),
                l = s.n(o),
                c = s(990);
            let d = l()(() => Promise.all([s.e(4730), s.e(7081)]).then(s.bind(s, 5376)), {
                loadableGenerated: {
                    webpack: () => [5376]
                },
                loading: () => (0, i.jsx)("p", {
                    children: "Loading..."
                }),
                ssr: !1
            });

            function Modal() {
                let [e, t] = (0, a.useState)(!1), [s, r] = (0, a.useState)(!1), [o, l] = (0, a.useState)(null);
                (0, a.useEffect)(() => {
                    if (e && !o) {
                        let loadComponent = async () => {
                            let e = await d;
                            l(e)
                        };
                        loadComponent()
                    }
                }, [e, o]);
                let closeModal = () => {
                    t(!1)
                };
                return (0, a.useEffect)(() => {
                    let e = c.ZP.timeline({
                        scrollTrigger: {
                            trigger: ".popUpButton-div",
                            start: "top top",
                            end: "bottom top-=20%",
                            scrub: !0,
                            ease: "power1.out"
                        }
                    });
                    e.fromTo("#popUpButton", {
                        opacity: 0,
                        y: -100
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 2
                    })
                }), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: "popUpButton-div",
                        children: (0, i.jsxs)("button", {
                            "aria-label": "open popup form",
                            id: "popUpButton",
                            onClick: () => {
                                t(!0)
                            },
                            onMouseEnter: () => {
                                r(!0)
                            },
                            onMouseLeave: () => {
                                r(!1)
                            },
                            children: [(0, i.jsx)(n(), {
                                "data-cursor-size": "80px",
                                "data-cursor-exclusion": !0,
                                width: 100,
                                height: 100,
                                className: "popUpRotate",
                                alt: "PopUp Form HireUs Image",
                                title: "PopUp Form HireUs Image",
                                src: "/assets/icons/hire-us.svg",
                                priority: !1
                            }), (0, i.jsx)(n(), {
                                height: 50,
                                width: 50,
                                title: "PopUp Form Pen Image",
                                alt: "PopUp Form Pen Image",
                                className: "popUpImg",
                                src: s ? "/assets/icons/form-pen.gif" : "/assets/icons/form-pen.png",
                                priority: !1
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        id: "PopUpMyModal",
                        className: "PopUpmodal ".concat(e ? "form-visible" : ""),
                        children: (0, i.jsx)("div", {
                            className: "PopUpContainer",
                            onClick: e => {
                                e.target === e.currentTarget && closeModal()
                            },
                            children: (0, i.jsxs)("div", {
                                className: "PopUpmodal-content",
                                children: [(0, i.jsx)("div", {
                                    "data-cursor-size": "60px",
                                    "data-cursor-exclusion": !0,
                                    children: (0, i.jsx)("button", {
                                        "aria-label": "close popup form",
                                        onClick: closeModal,
                                        className: "PopUpClose",
                                        children: (0, i.jsx)(n(), {
                                            height: 50,
                                            width: 50,
                                            priority: !1,
                                            title: "Close Form",
                                            alt: "close form",
                                            src: "/assets/icons/form-close.svg"
                                        })
                                    })
                                }), o && (0, i.jsx)(o, {})]
                            })
                        })
                    })]
                })
            }
        },
        5793: function (e, t, s) {
            "use strict";
            s.d(t, {
                Z: function () {
                    return Index
                }
            });
            var i = s(5893),
                a = s(1059),
                r = s.n(a),
                n = s(5675),
                o = s.n(n),
                l = s(5063),
                c = s.n(l),
                d = s(7294),
                p = s(990),
                h = s(6546),
                m = s.n(h);

            function Index(e) {
                let {
                    projects: t,
                    reversed: s
                } = e;
                (0, d.useEffect)(() => {
                    let e = p.p8.timeline({
                        scrollTrigger: {
                            trigger: "#doubleContainer",
                            start: "top 80%"
                        }
                    }),
                        t = document.querySelectorAll("#doubleImage");
                    e.fromTo(t, {
                        opacity: 0,
                        yPercent: 100
                    }, {
                        opacity: 1,
                        yPercent: 0,
                        duration: 3,
                        ease: "expo.out",
                        stagger: .3
                    }, 0)
                });
                let a = (0, d.useRef)(null),
                    n = (0, d.useRef)(null),
                    l = null,
                    h = s ? 100 : 0,
                    m = s ? 100 : 0,
                    manageMouseMove = e => {
                        let {
                            clientX: t
                        } = e;
                        h = t / window.innerWidth * 100, l || (l = window.requestAnimationFrame(animate))
                    },
                    animate = () => {
                        let e = h - m;
                        m += .15 * e;
                        let t = 66.33 - .33 * m,
                            s = 33.33 + .33 * m;
                        a.current.style.width = "".concat(t, "%"), n.current.style.width = "".concat(s, "%"), Math.round(h) == Math.round(m) ? (window.cancelAnimationFrame(l), l = null) : window.requestAnimationFrame(animate)
                    };
                return (0, i.jsxs)("div", {
                    onMouseMove: e => {
                        manageMouseMove(e)
                    },
                    className: r().double,
                    id: "doubleContainer",
                    children: [(0, i.jsx)("div", {
                        ref: a,
                        className: r().imageContainer,
                        id: "doubleImage",
                        children: (0, i.jsxs)(c(), {
                            href: "/".concat(t[0].link),
                            children: [(0, i.jsx)("div", {
                                className: r().stretchyWrapper,
                                children: (0, i.jsx)(o(), {
                                    "data-cursor-size": "90px",
                                    "data-cursor-text": "View Details",
                                    "data-cursor-color": "#3C8E8D",
                                    src: "/assets/homeProject/".concat(t[0].src),
                                    fill: !0,
                                    sizes: "(max-width: 1200px) 100vw, 50vw",
                                    priority: !1,
                                    alt: "project image"
                                })
                            }), (0, i.jsxs)("div", {
                                className: r().body,
                                id: "double-image-anim",
                                children: [(0, i.jsx)("p", {
                                    className: r().pname,
                                    children: t[0].name
                                }), (0, i.jsx)("p", {
                                    className: r().description,
                                    children: t[0].description
                                }), (0, i.jsx)("p", {
                                    children: t[0].year
                                })]
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        ref: n,
                        className: r().imageContainer,
                        id: "doubleImage",
                        children: (0, i.jsxs)(c(), {
                            href: "/".concat(t[1].link),
                            children: [(0, i.jsx)("div", {
                                className: r().stretchyWrapper,
                                children: (0, i.jsx)(o(), {
                                    "data-cursor-size": "90px",
                                    "data-cursor-text": "View Details",
                                    "data-cursor-color": "#3C8E8D",
                                    src: "/assets/homeProject/".concat(t[1].src),
                                    fill: !0,
                                    sizes: "(max-width: 1200px) 100vw, 50vw",
                                    priority: !1,
                                    alt: "project image",
                                    id: "double-image-anim"
                                })
                            }), (0, i.jsxs)("div", {
                                className: r().body,
                                id: "double-image-anim",
                                children: [(0, i.jsx)("p", {
                                    className: r().pname,
                                    children: t[1].name
                                }), (0, i.jsx)("p", {
                                    className: r().description,
                                    children: t[1].description
                                }), (0, i.jsx)("p", {
                                    children: t[1].year
                                })]
                            })]
                        })
                    })]
                })
            }
            p.p8.registerPlugin(m()), p.p8.config({
                nullTargetWarn: !1
            })
        },
        // /////////////////////////////
        // selected projects section
        // /////////////////////////////
        3798: function (e, t, s) {
            "use strict";
            s.d(t, {
                q: function () {
                    return i
                }
            });
            let i = [{
                name: "Website Portfolio",
                client: "",
                description: "Crafting Digital Visions, One Pixel at a Time",
                src: "",
                year:"",
                link: "website-portfolio.html",
                srcSLider: ""
            }, {
                name: "Graphics Portfolio",
                client: "",
                description: "Elevating Ideas through Creative Canvas",
                src: "",
                year: "",
                link: "graphics-portfolio.html",
                srcSLider: ""
            }, {
                name: "Video Editing",
                client: "",
                description: "Transforming Moments into Cinematic Stories",
                src: "",
                year: "",
                link: "",
                srcSLider: ""
            }, {
                name: "Illustration Portfolio",
                client: "",
                description: "Bringing Imagination to Life, Stroke by Stroke",
                src: "",
                year: "",
                link: "illustration-portfolio.html",
                srcSLider: ""
            }, {
                name: "Animation Portfolio",
                client: "",
                description: "Bringing Imagination to Life, Stroke by Stroke",
                src: "",
                year: "",
                link: "",
                srcSLider: ""
            }, {
                name: "UI/UX Design Portfolio",
                client: "",
                description: "UX Planning, UI Design",
                src: "",
                year: "",
                link: "",
                srcSLider: ""
            }, {
                name: "",
                client: "",
                description: "",
                src: "",
                year: "",
                link: "",
                srcSLider: ""
            }, {
                name: "",
                client: "",
                description: "",
                src: "",
                year: "",
                link: "",
                srcSLider: ""
            }, {
                name: "",
                client: "",
                description: "",
                src: "",
                year: "",
                link: "",
                srcSLider: ""
            }, {
                name: "",
                client: "",
                description: "",
                src: "",
                year: "",
                link: "",
                srcSLider: ""
            }]
        },

        8904: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function () {
                    return R
                },
                default: function () {
                    return Home
                }
            });
            var i = s(5893),
                a = s(6732);
            s(5538);
            var r = s(6053),
                n = s(2962),
                o = s(4285),
                l = s(7294),
                c = s(990),
                d = s(6546),
                p = s.n(d);
            let Particles = class Particles {
                init() {
                    this.container = "string" == typeof this.options.container ? document.querySelector(this.options.container) : this.options.container, this.items = this.container.querySelectorAll(this.options.itemsSelector), this.tl = this.createTimeline(), this.options.observable ? this.observe() : this.start(), -1 === this.options.repeats && this.tl.seek(this.options.initialSeek), this.bind()
                }
                bind() {
                    window.addEventListener("resize", this.refresh.bind(this))
                }
                unbind() {
                    window.removeEventListener("resize", this.refresh.bind(this))
                }
                refresh() {
                    this.tl.invalidate()
                }
                start() {
                    this.tl.play().timeScale(this.timeScale)
                }
                stop() {
                    this.tl.pause()
                }
                observe(e) {
                    e && (this.options.observableTarget = e), this.observer && this.unobserve(), this.observer = new IntersectionObserver(e => {
                        e[0].isIntersecting ? (this.options.observableRefresh && this.refresh(), this.start()) : this.stop()
                    }), this.observer.observe(this.options.observableTarget || this.container)
                }
                unobserve() {
                    this.observer && this.unobserve(), this.observer = null
                }
                setTimeScale() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.timeScale = e, this.tl.timeScale(e)
                }
                isReversed() {
                    return this.timeScale < 0
                }
                setReversed(e) {
                    return e !== this.isReversed() && this.setTimeScale(-1 * this.timeScale), this.isReversed()
                }
                getTimeline() {
                    return this.tl
                }
                createTimeline() {
                    let e = new c.ZP.timeline({
                        paused: !0
                    });
                    for (let t = 0; t < this.items.length; t++) {
                        let s = this.items[t],
                            i = new c.ZP.timeline({
                                repeat: this.options.repeats
                            }),
                            a = this.options.offset();
                        i.set(s, {
                            willChange: "transform"
                        }), this.options.fadeInDuration && i.fromTo(s, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: this.options.fadeInEase,
                            duration: this.options.fadeInDuration,
                            lazy: !1
                        }, 0), i.fromTo(s, {
                            y: this.options.yStart,
                            x: this.options.xStart
                        }, {
                            y: this.options.yEnd,
                            x: this.options.xEnd,
                            ease: this.options.ease,
                            duration: this.options.duration
                        }, 0), this.options.fadeOutDuration && i.to(s, {
                            opacity: 0,
                            ease: this.options.fadeOutEase,
                            duration: this.options.fadeOutDuration,
                            lazy: !1
                        }, "-=" + this.options.fadeOutDuration), e.add(i, a)
                    }
                    return e
                }
                removeTimeline() {
                    this.tl && this.tl.kill()
                }
                destroy() {
                    this.stop(), this.removeTimeline(), this.unbind(), this.unobserve()
                }
                constructor(e) {
                    this.options = Object.assign({}, {
                        container: null,
                        itemsSelector: "[data-particle-item]",
                        observable: !0,
                        observableTarget: null,
                        observableRefresh: !0,
                        repeats: -1,
                        timeScale: 1.5,
                        initialSeek: 3e3,
                        fadeOutDuration: 1,
                        fadeOutEase: "power4.out",
                        yStart: () => this.container.offsetHeight,
                        yEnd: (e, t) => -t.offsetHeight,
                        yStart: "350",
                        yEnd: "-500",
                        ease: "none",
                        duration: () => c.ZP.utils.random(5, 10),
                        offset: () => c.ZP.utils.random(0, 20)
                    }, e), this.timeScale = this.options.timeScale, this.init()
                }
            };

            function partText() {
                return (0, l.useEffect)(() => {
                    let e = document.querySelector(".cb-particles");
                    new Particles({
                        container: e,
                        itemsSelector: ".cb-particles-item"
                    })
                }, []), (0, i.jsx)("div", {
                    className: "cb-tabs-content",
                    children: (0, i.jsx)("section", {
                        className: "cb-demo",
                        children: (0, i.jsxs)("div", {
                            className: "cb-particles",
                            children: [(0, i.jsx)("span", {
                                className: "cb-particles-item -text -v1 -s4",
                                children: "Hello"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v2 -s4",
                                children: "Namaste"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v3 -s4",
                                children: "Hola"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v4 -s4",
                                children: "Bonjour"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v5 -s4",
                                children: "Nǐn hǎo"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v6 -s4",
                                children: "Ol\xe1"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v7 -s4",
                                children: "Shalom"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v8 -s4",
                                children: "Ciao"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v9 -s4",
                                children: "Aloha"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v10 -s4",
                                children: "Hei"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v11 -s4",
                                children: "Hall\xe1"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v12 -s4",
                                children: "Salve"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v13 -s4",
                                children: "Xin Ch\xe0o"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v14 -s4",
                                children: "Salaam"
                            }), (0, i.jsx)("span", {
                                className: "cb-particles-item -text -v15 -s4",
                                children: "Zdraveĭte"
                            })]
                        })
                    })
                })
            }

            function Aerosol() {
                return (0, l.useEffect)(() => {
                    document.body.addEventListener("mousemove", e => {
                        let t = e.clientX,
                            s = e.clientY;
                        c.ZP.set(".c-cursor", {
                            x: t,
                            y: s
                        }), c.ZP.to(".shape", {
                            x: t,
                            y: s,
                            stagger: -.1
                        })
                    })
                }, []), (0, l.useEffect)(() => {
                    let e = c.ZP.timeline({
                        scrollTrigger: {
                            trigger: ".aero-hover",
                            start: "-200 top"
                        }
                    }),
                        t = document.querySelectorAll(".aero-demo p");
                    e.fromTo(t, {
                        opacity: 0,
                        yPercent: 320,
                        skewY: 30
                    }, {
                        opacity: 1,
                        yPercent: 0,
                        skewY: 0,
                        duration: 3,
                        ease: "expo.out"
                    }, 0)
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "aero-hover",
                        children: [(0, i.jsxs)("div", {
                            className: "text-container aero-demo",
                            children: [(0, i.jsxs)("p", {
                                className: "aero-desk-1",
                                children: ["good things happen", (0, i.jsx)("br", {}), "when you say hello"]
                            }), (0, i.jsxs)("p", {
                                className: "aero-mob-1",
                                children: ["good things", (0, i.jsx)("br", {}), " happen when", (0, i.jsx)("br", {}), "you say hello"]
                            }), (0, i.jsx)(partText, {})]
                        }), (0, i.jsxs)("div", {
                            className: "aerosol-main",
                            children: [(0, i.jsx)("div", {
                                className: "c-cursor"
                            }), (0, i.jsxs)("div", {
                                className: "shapes",
                                children: [(0, i.jsx)("div", {
                                    className: "shape shape-1"
                                }), (0, i.jsx)("div", {
                                    className: "shape shape-2"
                                }), (0, i.jsx)("div", {
                                    className: "shape shape-3"
                                })]
                            })]
                        })]
                    })
                })
            }
            c.ZP.registerPlugin(p());
            var h = s(5675),
                m = s.n(h),
                Home_HeroDesktop = () => ((0, l.useEffect)(() => {
                    let e = c.ZP.timeline();
                    return e.fromTo("#anim", {
                        rotationX: -80,
                        opacity: 0,
                        translateY: 300,
                        transformPerspective: "1000",
                        transformOrigin: "top center"
                    }, {
                        delay: 6,
                        duration: 1.3,
                        rotationX: 0,
                        opacity: 1,
                        translateY: 0,
                        stagger: .2
                    }).fromTo(".home-page-header", {
                        y: -50,
                        opacity: 0
                    }, {
                        delay: -1,
                        duration: 1.3,
                        opacity: 1,
                        y: 0,
                        stagger: .1
                    }), e.to(".reel-anim", {
                        scale: 1,
                        opacity: 1,
                        delay: -1.8,
                        duration: 1.3
                    }), () => e.kill()
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: "hero-main desktop",
                        children: (0, i.jsxs)("div", {
                            className: "hero-section",
                            children: [(0, i.jsxs)("div", {
                                className: "first-section",
                                children: [(0, i.jsx)("div", {
                                    className: "digital",
                                    "data-cursor-magnetic": !0,
                                    "data-cursor-background-image": "/assets/gif/1.gif",
                                    "data-cursor-size": "300px",
                                    "data-cursor-color": "#000",
                                    id: "anim",
                                    children: (0, i.jsx)("span", {
                                        className: "line hacker",
                                        children: "digital"
                                    })
                                }), (0, i.jsxs)("p", {
                                    className: "para-hero",
                                    id: "anim",
                                    children: ["Harnessing the power of", (0, i.jsx)("span", {
                                        className: "bold-600",
                                        children: " Emotion, Design, Technology & Neuromarketing, "
                                    }), "we create Digital Brand Experiences that propel your success in the Orgitech realm of bits & bytes."]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "second-section",
                                children: [(0, i.jsx)("div", {
                                    className: "experience",
                                    "data-cursor-magnetic": !0,
                                    "data-cursor-background-image": "/assets/gif/2.webp",
                                    "data-cursor-size": "300px",
                                    "data-cursor-color": "#000",
                                    id: "anim",
                                    children: "experience"
                                }), (0, i.jsx)("div", {
                                    className: "reel-hero",
                                    children: (0, i.jsx)("div", {
                                        className: "reel-anim",
                                        children: (0, i.jsxs)("video", {
                                            poster: "/assets/reels/reel-poster.webp",
                                            muted: !0,
                                            autoPlay: !0,
                                            loop: !0,
                                            preload: "auto",
                                            className: "hero-video",
                                            children: [(0, i.jsx)("source", {
                                                src: "/assets/reels/hero.webm",
                                                type: "video/webm"
                                            }), (0, i.jsx)("source", {
                                                src: "/assets/reels/hero.mp4",
                                                type: "video/mp4"
                                            })]
                                        })
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "third-section",
                                children: [(0, i.jsx)("div", {
                                    className: "design",
                                    "data-cursor-magnetic": !0,
                                    "data-cursor-background-image": "/assets/gif/4.gif",
                                    "data-cursor-size": "300px",
                                    "data-cursor-color": "#000",
                                    id: "anim",
                                    children: "design"
                                }), (0, i.jsx)("div", {
                                    className: "agency",
                                    "data-cursor-magnetic": !0,
                                    "data-cursor-background-image": "/assets/gif/3.gif",
                                    "data-cursor-size": "300px",
                                    "data-cursor-color": "#000",
                                    id: "anim",
                                    children: "agency"
                                })]
                            })]
                        })
                    }), (0, i.jsxs)("div", {
                        className: "hero-footer",
                        children: [(0, i.jsx)("div", {
                            className: "scroll-img home-page-header",
                            children: (0, i.jsx)(m(), {
                                src: "/assets/hero-footer/scroll.svg",
                                width: 200,
                                height: 200,
                                alt: "Scroll Image",
                                title: "Scroll Down Image",
                                className: "svg-dark-mode"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "content-section home-page-header",
                            children: [(0, i.jsx)("div", {
                                className: "f-sub-content",
                                children: (0, i.jsxs)("div", {
                                    className: "f-content-text",
                                    children: [(0, i.jsx)("p", {
                                        className: "f-disabled",
                                        children: "timezone"
                                    }), (0, i.jsx)("div", {
                                        className: "f-heading",
                                        children: "PST"
                                    })]
                                })
                            }), (0, i.jsxs)("div", {
                                className: "f-right",
                                children: [(0, i.jsx)("p", {
                                    className: "f-disabled",
                                    children: "location"
                                }), (0, i.jsx)("div", {
                                    className: "f-heading",
                                    children: "California - US"
                                })]
                            })]
                        })]
                    })]
                })),
                u = s(33);

            function Category() {
                let e = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let t = c.ZP.context(() => {
                        let t = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top 80%",
                                markers: !1
                            }
                        });
                        t.fromTo(".accordion-list > li", {
                            opacity: 0,
                            y: 300
                        }, {
                            duration: 1.3,
                            opacity: 1,
                            y: 0,
                            stagger: .2
                        })
                    }, e);
                    return () => t.revert()
                }, []), (0, l.useEffect)(() => {
                    let t = c.ZP.context(() => {
                        let t = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top 75%"
                            }
                        });
                        t.fromTo(".accordion-list-item .line-animation", {
                            opacity: 0,
                            width: "0"
                        }, {
                            delay: .1,
                            width: "100%",
                            opacity: 1,
                            duration: 1,
                            stagger: .5
                        })
                    }, e);
                    return () => t.revert()
                }, []), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        ref: e,
                        className: "category-section-new",
                        children: (0, i.jsx)("section", {
                            id: "services",
                            children: (0, i.jsx)("div", {
                                className: "container",
                                children: (0, i.jsx)("div",

                                    {
                                        className: "accordion-container flex-column-center",
                                        children: (0, i.jsxs)("ul", {
                                            className: "accordion-list accordion",

                                            children: [(0, i.jsxs)("li", {
                                                className: "accordion-list-item",
                                                children: [(0, i.jsx)("div", {
                                                    className: "accordion-title accordion-item cat-1",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "accordion-item-content",
                                                        children: [(0, i.jsx)("span", {
                                                            children: "01"
                                                        }), (0, i.jsx)("h2", {
                                                            className: "text-stroke-fil-ctr",
                                                            "data-fill": "Strategy",
                                                            children: "Strategy"
                                                        }), (0, i.jsxs)("button", {
                                                            "aria-label": "No Work",
                                                            className: "plus-rotate",
                                                            children: [(0, i.jsx)("span", {
                                                                className: "minus-span"
                                                            }), (0, i.jsx)("img", {
                                                                loading: "lazy",
                                                                className: "plus-img",
                                                                src: "/assets/icons/plus.png",
                                                                width: 40,
                                                                height: 40,
                                                                alt: "Plus Icon"
                                                            }), (0, i.jsx)("span", {
                                                                className: "bottom-span"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "cont",
                                                            children: [(0, i.jsx)("p", {
                                                                children: "Strategic planning based on insight is the starting point of everything we do. Combining strategic thinking, wide marketing experience, insights, best practices, and sound judgment, we craft effective strategies that turn insights into measurable results."
                                                            }), (0, i.jsx)("p", {
                                                                children: "Driving growth and success for your brand needs a brilliant plan (roadmap) that is rooted in deep insights and aimed at delivering tangible results. Our strategy consulting services includes: Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Digital Marketing and Website Performance Audit."
                                                            })]
                                                        }), (0, i.jsx)("div", {
                                                            className: "category-button",
                                                            children: (0, i.jsxs)("a", {
                                                                href: "/",
                                                                "data-cursor-size": "80px",
                                                                "data-cursor-exclusion": !0,
                                                                children: [(0, i.jsx)("span", {
                                                                    className: "cat-btn-text",
                                                                    children: "Transform Your Business"
                                                                }), (0, i.jsx)("span", {
                                                                    className: "cat-btn-arrow",
                                                                    children: (0, i.jsx)("img", {
                                                                        loading: "lazy",
                                                                        width: 15,
                                                                        height: 15,
                                                                        src: "/assets/icons/arrow.png",
                                                                        alt: "Icon"
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "line-animation category-line cat-one-1"
                                                })]
                                            }),

                                            (0, i.jsxs)("li", {
                                                className: "accordion-list-item",
                                                children: [(0, i.jsx)("div", {
                                                    className: "accordion-title accordion-item cat-2",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "accordion-item-content",
                                                        children: [(0, i.jsx)("span", {
                                                            children: "02"
                                                        }), (0, i.jsx)("h2", {
                                                            className: "text-stroke-fil-ctr",
                                                            "data-fill": "UI/UX Design",
                                                            children: "UI/UX Design"
                                                        }), (0, i.jsxs)("button", {
                                                            "aria-label": "No Work",
                                                            className: "plus-rotate",
                                                            children: [(0, i.jsx)("span", {
                                                                className: "minus-span"
                                                            }), (0, i.jsx)("img", {
                                                                className: "plus-img",
                                                                src: "/assets/icons/plus.png",
                                                                loading: "lazy",
                                                                width: 40,
                                                                height: 40,
                                                                alt: "Plus Icon"
                                                            }), (0, i.jsx)("span", {
                                                                className: "bottom-span"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "cont",
                                                            children: [(0, i.jsx)("p", {
                                                                children: "We unravel complex design challenges through meticulous user research, expert analysis, prototyping, and collaborative design with users and stakeholders. Harnessing the power of cutting-edge tools and our proprietary approach we craft delightful and intuitive experiences that seamlessly connect the physical and digital worlds."
                                                            }), (0, i.jsxs)("p", {
                                                                children: [(0, i.jsx)("strong", {}), " Our design services are a symphony of creativity and functionality, creating digital experiences that captivate and engage. Services we offer include: User Interface Design, User Experience Design, Responsive Web Design, Mobile App Design, Digital Interface Design, Design Systems Creation, Experience Mapping, User Flow Mapping, Wireframing & Prototyping, Illustrations & Animations, Visual Designs."]
                                                            })]
                                                        }), (0, i.jsx)("div", {
                                                            className: "category-button",
                                                            children: (0, i.jsxs)("a", {
                                                                href: "/",
                                                                "data-cursor-size": "80px",
                                                                "data-cursor-exclusion": !0,
                                                                children: [(0, i.jsx)("span", {
                                                                    className: "cat-btn-text",
                                                                    children: "Upgrade Your Experience"
                                                                }), (0, i.jsx)("span", {
                                                                    className: "cat-btn-arrow",
                                                                    children: (0, i.jsx)("img", {
                                                                        width: 15,
                                                                        height: 15,
                                                                        src: "/assets/icons/arrow.png",
                                                                        loading: "lazy",
                                                                        alt: "Icon"
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "line-animation category-line cat-one-2"
                                                })]
                                            }),

                                            (0, i.jsxs)("li", {
                                                className: "accordion-list-item",
                                                children: [(0, i.jsx)("div", {
                                                    className: "accordion-title accordion-item cat-3",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "accordion-item-content",
                                                        children: [(0, i.jsx)("span", {
                                                            children: "03"
                                                        }), (0, i.jsx)("h2", {
                                                            className: "text-stroke-fil-ctr",
                                                            "data-fill": "Technology",
                                                            children: "Technology"
                                                        }), (0, i.jsxs)("button", {
                                                            "aria-label": "No Work",
                                                            className: "plus-rotate",
                                                            children: [(0, i.jsx)("span", {
                                                                className: "minus-span"
                                                            }), (0, i.jsx)("img", {
                                                                className: "plus-img",
                                                                src: "/assets/icons/plus.png",
                                                                loading: "lazy",
                                                                width: 40,
                                                                height: 40,
                                                                alt: "Plus Icon"
                                                            }), (0, i.jsx)("span", {
                                                                className: "bottom-span"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "cont",
                                                            children: [(0, i.jsx)("p", {
                                                                children: "A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape."
                                                            }), (0, i.jsx)("p", {
                                                                children: "We craft digital solutions that are not just functional, but also intuitive and engaging. Our front-end development services include: HTML, CSS, JavaScript, Vue, React, Angular, GSAP, and WordPress. For mobile application development, we utilize technologies like Ionic and Flutter. On the server-side, we leverage PHP, NodeJS and Python to create robust back-ends."
                                                            })]
                                                        }), (0, i.jsx)("div", {
                                                            className: "category-button",
                                                            children: (0, i.jsxs)("a", {
                                                                href: "/",
                                                                "data-cursor-size": "80px",
                                                                "data-cursor-exclusion": !0,
                                                                children: [(0, i.jsx)("span", {
                                                                    className: "cat-btn-text",
                                                                    children: "Let’s Build Your Idea"
                                                                }), (0, i.jsx)("span", {
                                                                    className: "cat-btn-arrow",
                                                                    children: (0, i.jsx)("img", {
                                                                        width: 15,
                                                                        height: 15,
                                                                        src: "/assets/icons/arrow.png",
                                                                        loading: "lazy",
                                                                        alt: "Icon"
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "line-animation category-line cat-line-3"
                                                })]
                                            }),

                                            (0, i.jsxs)("li", {
                                                className: "accordion-list-item",
                                                children: [(0, i.jsx)("div", {
                                                    className: "accordion-title accordion-item cat-4",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "accordion-item-content",
                                                        children: [(0, i.jsx)("span", {
                                                            children: "04"
                                                        }), (0, i.jsx)("h2", {
                                                            className: "text-stroke-fil-ctr",
                                                            "data-fill": "Marketing",
                                                            children: "Marketing"
                                                        }), (0, i.jsxs)("button", {
                                                            "aria-label": "No Work",
                                                            className: "plus-rotate",
                                                            children: [(0, i.jsx)("span", {
                                                                className: "minus-span"
                                                            }), (0, i.jsx)("img", {
                                                                className: "plus-img",
                                                                src: "/assets/icons/plus.png",
                                                                width: 40,
                                                                height: 40,
                                                                loading: "lazy",
                                                                alt: "Plus Icon"
                                                            }), (0, i.jsx)("span", {
                                                                className: "bottom-span"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "cont",
                                                            children: [(0, i.jsx)("p", {
                                                                children: "Our marketing strategies are not just designed to create a lasting impact, but to drive engagement, foster brand loyalty, and navigate the ever-evolving digital landscape with finesse and agility."
                                                            }), (0, i.jsx)("p", {
                                                                children: "For us, 'DIGITAL' isn't just a buzzword—it's the path to the future! This belief has shaped our service offerings to evolve for our clients' requirements & subsequently their success. We offer: Social Media Management, Content Creation & Curation, Search Engine Optimisation, Influencer Management, Online Reputation Management, Marketing Automation, Email Marketing, Conversion Rate Optimisation and Website & SEO Analysis."
                                                            })]
                                                        }), (0, i.jsx)("div", {
                                                            className: "category-button",
                                                            children: (0, i.jsxs)("a", {
                                                                href: "/",
                                                                "data-cursor-size": "80px",
                                                                "data-cursor-exclusion": !0,
                                                                children: [(0, i.jsx)("span", {
                                                                    className: "cat-btn-text",
                                                                    children: "Ready? Let’s Get Moving"
                                                                }), (0, i.jsx)("span", {
                                                                    className: "cat-btn-arrow",
                                                                    children: (0, i.jsx)("img", {
                                                                        width: 15,
                                                                        height: 15,
                                                                        src: "/assets/icons/arrow.png",
                                                                        loading: "lazy",
                                                                        alt: "Icon"
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "line-animation category-line cat-line-4"
                                                })]
                                            })]
                                        })
                                    })
                            })
                        })
                    })
                })
            }
            c.ZP.registerPlugin(p());
            var g = s(5063),
                x = s.n(g),
                j = s(2708),
                ConceptLazyVideo = e => {
                    let {
                        srcWebm: t,
                        srcMp4: s,
                        title: a,
                        poster: r
                    } = e, [n, o] = (0, j.YD)(), [c, d] = (0, l.useState)(!1);
                    return o && !c && d(!0), (0, i.jsx)("div", {
                        className: "lazy-video",
                        ref: n,
                        children: (o || c) && (0, i.jsxs)("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            id: a,
                            title: a,
                            poster: r,
                            alt: "Orgitech bg video",
                            children: [(0, i.jsx)("source", {
                                src: t,
                                type: "video/webm"
                            }), (0, i.jsx)("source", {
                                src: s,
                                type: "video/mp4"
                            }), "Your browser does not support the video tag."]
                        })
                    })
                };

            function ConceptScrollNew() {
                return (0, l.useEffect)(() => {
                    let e = c.ZP.context(() => {
                        let e = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".hero-concept-scroll",
                                start: "-700 top",
                                markers: !1,
                                scrub: 1
                            }
                        });
                        e.to(".container_word_change_t", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }), e.to(".container_word_change_t", {
                            display: "block",
                            ease: "power1.inOut"
                        }), e.to(".we", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }), e.to(".make", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }), e.to(".digital", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }), e.to(".brand", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }), e.to(".container_word_change_t", {
                            scale: 2.5,
                            duration: 3,
                            ease: "power2.out"
                        })
                    });
                    return () => e.revert()
                }), (0, l.useEffect)(() => {
                    let e = c.ZP.context(() => {
                        let e = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".hero-concept-scroll",
                                start: "top top",
                                end: "3500 center",
                                markers: !1,
                                pin: !0,
                                scrub: 1
                            }
                        });
                        e.to(".container_word_change_t", {
                            duration: 3,
                            ease: "power1.inOut"
                        }), e.set(".container_lapi", {
                            display: "block",
                            background: "#000"
                        }), e.to(".transition_to_lapi", {
                            opacity: 1,
                            duration: 5,
                            ease: "power2.out"
                        }), e.to(".container_word_change_t", {
                            display: "none"
                        }, 25), e.set(".container_lapi_content_together", {}, 30), e.fromTo(".enigma_bg_container", {
                            opacity: 0,
                            scale: 2.5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }), e.to(".enigma_bg", {
                            duration: 8,
                            ease: "power1.inOut"
                        }, 37), e.fromTo(".lapi_div", {
                            y: 500,
                            scale: 2,
                            opacity: 0
                        }, {
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 42), e.to(".enigma_bg", {
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 44), e.to(".enigma_bg_container", {
                            opacity: 0,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 48), e.to(".container_lapi_content_together", {
                            duration: 8,
                            ease: "power1.inOut"
                        }, 43), e.set(".macbook_frame", {
                            opacity: 1,
                            duration: 15,
                            ease: "power1.inOut"
                        }, 45), e.to(".lapi_div", {
                            scale: 3,
                            opacity: 1,
                            duration: 5.5,
                            ease: "power1.inOut"
                        }, 55), e.to(".macbook_frame", {
                            opacity: 0,
                            scale: 1,
                            duration: 5.5,
                            ease: "power1.inOut"
                        }, 55), e.set(".o-page-tail_inner", {
                            display: "block",
                            width: "100vw",
                            height: "100vh",
                            opacity: 0
                        }, 53), e.to(".container_lapi_content_together", {
                            display: "none"
                        }, 57), e.to(".enigma_bg", {
                            opacity: 0
                        }, 60), e.to(".o-page-tail_inner", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 59), e.fromTo(".c-hm-us_top", {
                            gridTemplateColumns: "50% 0% 50%"
                        }, {
                            gridTemplateColumns: "20% 60% 20%",
                            opacity: 1,
                            duration: 15,
                            ease: "power1.inOut"
                        }, 75), e.fromTo(".c-hm-us_title, .t-lead ", {
                            y: 50,
                            scale: .9
                        }, {
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 80)
                    });
                    return () => e.revert()
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "hero-concept-scroll",
                        children: [(0, i.jsx)("div", {
                            className: "container_word_change_t m-hide",
                            children: (0, i.jsxs)("div", {
                                className: "container_word_change_t_content",
                                children: [(0, i.jsx)("p", {
                                    className: "we",
                                    children: "From"
                                }), " ", (0, i.jsx)("p", {
                                    className: "make",
                                    children: "Concept"
                                }), " ", (0, i.jsx)("p", {
                                    className: "digital",
                                    children: "To"
                                }), " ", (0, i.jsx)("p", {
                                    className: "brand",
                                    children: "Conversion"
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "transition_to_lapi m-hide"
                        }), (0, i.jsx)("div", {
                            className: "container_lapi m-hide",
                            children: (0, i.jsxs)("div", {
                                className: "container_lapi_content",
                                children: [(0, i.jsx)("div", {
                                    className: "container_lapi_content_together",
                                    children: (0, i.jsx)("div", {
                                        className: "container_lapi_content_inner",
                                        children: (0, i.jsxs)("div", {
                                            className: "lapi_div",
                                            children: [(0, i.jsx)("div", {
                                                className: "macbook_pro"
                                            }), (0, i.jsxs)("div", {
                                                className: "macbook_frame",
                                                children: [(0, i.jsx)("div", {
                                                    className: "macbook_frame_content_upper"
                                                }), (0, i.jsx)(ConceptLazyVideo, {
                                                    poster: "/assets/newProject/mac-poster.jpg",
                                                    srcWebm: "/assets/newProject/a.webm",
                                                    srcMp4: "/assets/newProject/a.webm",
                                                    title: "Mac-Orgitech-Video"
                                                }), (0, i.jsx)("div", {
                                                    className: "macbook_frame_background"
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "enigma_bg_container_2"
                                }), (0, i.jsx)("div", {
                                    className: "enigma_bg_container",
                                    children: (0, i.jsx)("p", {
                                        className: "enigma_bg",
                                        children: ""
                                    })
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "o-page-tail_inner m-hide",
                            children: (0, i.jsx)("div", {
                                className: "c-hm-us",
                                children: (0, i.jsx)("div", {
                                    className: "o-container",
                                    children: (0, i.jsxs)("div", {
                                        className: "c-hm-us_top",
                                        children: [(0, i.jsx)("div", {
                                            className: "o-media o-media1 hm-us",
                                            children: (0, i.jsx)("div", {
                                                className: "o-media_obj w-background-video w-background-video-atom left-b",
                                                children: (0, i.jsx)("video", {
                                                    poster: "/assets/reels/reel-split-left.webp",
                                                    className: "vid lazyload",
                                                    src: "/assets/reels/left.webm",
                                                    autoPlay: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    loop: !0,
                                                    id: "beach-waves",
                                                    type: "video/webm"
                                                })
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "c-hm-us_s2",
                                            children: [(0, i.jsxs)("p", {
                                                className: "t-lead",
                                                children: ["Empowered by Neuromarketing Principles,", (0, i.jsx)("br", {}), "our services open endless opportunities", (0, i.jsx)("br", {}), "For each brand we partner with.", (0, i.jsx)("br", {}), "Let's amplify your potential!", (0, i.jsx)("span", {
                                                    className: "emoji-dark",
                                                    children: " \uD83D\uDE80"
                                                })]
                                            }), (0, i.jsxs)(x(), {
                                                className: "en-cta-hero",
                                                href: "/",
                                                "data-cursor-size": "100px",
                                                "data-cursor-exclusion": !0,
                                                children: [(0, i.jsxs)("span", {
                                                    className: "en-cta-hero-text",
                                                    children: ["Say, Hello!", " "]
                                                }), (0, i.jsx)("span", {
                                                    className: "wave emoji-dark",
                                                    children: "\uD83D\uDC4B"
                                                })]
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "o-media o-media2 hm-us",
                                            children: (0, i.jsx)("div", {
                                                className: "o-media_obj w-background-video w-background-video-atom right-b",
                                                children: (0, i.jsx)("video", {
                                                    poster: "/assets/reels/reel-split-right.webp",
                                                    className: "vid lazyload",
                                                    src: "/assets/reels/right.webm",
                                                    autoPlay: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    loop: !0,
                                                    type: "video/webm",
                                                    id: "beach-waves"
                                                })
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            c.ZP.registerPlugin(p());
            var f = s(793),
                MobileHeroLazyVideo = e => {
                    let {
                        srcWebm: t,
                        srcMp4: s,
                        title: a,
                        poster: r
                    } = e, [n, o] = (0, j.YD)(), [c, d] = (0, l.useState)(!1);
                    return o && !c && d(!0), (0, i.jsx)("div", {
                        className: "lazy-video",
                        ref: n,
                        children: (o || c) && (0, i.jsxs)("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            id: a,
                            title: a,
                            poster: r,
                            alt: "Orgitech Reel Video",
                            children: [(0, i.jsx)("source", {
                                src: t,
                                type: "video/webm"
                            }), (0, i.jsx)("source", {
                                src: s,
                                type: "video/mp4"
                            }), "Your browser does not support the video tag."]
                        })
                    })
                };

            function HeroMobile() {
                return (0, l.useEffect)(() => {
                    let e = c.ZP.timeline();
                    e.fromTo("#video", {
                        opacity: 0,
                        scale: .5
                    }, {
                        scale: 1,
                        delay: 6,
                        duration: 1,
                        opacity: 1
                    }).fromTo("#anim2", {
                        rotationX: -80,
                        opacity: 0,
                        translateY: 100,
                        transformPerspective: "1000",
                        transformOrigin: "top center"
                    }, {
                        delay: -.6,
                        duration: 1,
                        rotationX: 0,
                        opacity: 1,
                        translateY: 0,
                        stagger: .2
                    }).fromTo("#para p", {
                        opacity: 0,
                        translateY: 100
                    }, {
                        delay: -.6,
                        duration: 1,
                        opacity: 1,
                        translateY: 0
                    })
                }, []), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "hero-main-mob hero-mobile hero-ipad",
                        children: (0, i.jsxs)("div", {
                            className: "hero-main-content-section",
                            children: [(0, i.jsx)("div", {
                                className: "video-box",
                                id: "video",
                                children: (0, i.jsx)(MobileHeroLazyVideo, {
                                    poster: "/assets/reels/reel-poster.webp",
                                    srcWebm: "/assets/reels/hero.webm",
                                    srcMp4: "/assets/reels/hero.mp4",
                                    title: "official-reel-video"
                                })
                            }), (0, i.jsxs)("div", {
                                className: "content-hero-box-mobile",
                                children: [(0, i.jsx)("div", {
                                    className: "second-text line-height",
                                    children: (0, i.jsxs)("h1", {
                                        className: "second-text line-height",
                                        children: [(0, i.jsx)("span", {
                                            id: "anim2",
                                            children: "Digital "
                                        }), (0, i.jsx)("span", {
                                            className: "color-primary",
                                            id: "anim2",
                                            children: "Experience "
                                        }), (0, i.jsx)("span", {
                                            id: "anim2",
                                            children: "Design "
                                        }), (0, i.jsx)("span", {
                                            id: "anim2",
                                            className: "mob-agency",
                                            children: "Agency"
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "mobile-hero-para",
                                    id: "para",
                                    children: (0, i.jsxs)("p", {
                                        children: ["Leveraging the power of", (0, i.jsx)("strong", {
                                            children: " Emotion, Consumer Psychology, and Technology, "
                                        }), "we create Digital Brand Experiences that propel your success in the Orgitech realm of bits & bytes."]
                                    })
                                })]
                            })]
                        })
                    })
                })
            }

            function HomeVideoSection() {
                return (0, l.useEffect)(() => {
                    let e = c.ZP.context(() => {
                        c.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".video-content-box",
                                start: "top 85%",
                                markers: !1
                            }
                        }).from(".para-anim-mobile", {
                            opacity: 0,
                            y: 150,
                            duration: 1,
                            ease: "power1.inOut",
                            stagger: .7
                        })
                    });
                    return () => e.revert()
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "video-section-mobile",
                        children: [(0, i.jsxs)("div", {
                            className: "video-content-box",
                            children: [(0, i.jsxs)("p", {
                                className: "para-anim-mobile",
                                children: ["Empowered by Neuromarketing Principles, our services open endless opportunities For each brand we partner with. Let's amplify your potential!", (0, i.jsx)("span", {
                                    className: "emoji-dark",
                                    children: "\uD83D\uDE80"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "cb-outro-header",
                                children: (0, i.jsxs)(x(), {
                                    href: "/get-in-touch",
                                    className: "para-anim-mobile",
                                    children: ["Say, Hello! ", (0, i.jsx)("span", {
                                        className: "emoji-dark",
                                        children: "\uD83D\uDC4B"
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "video-box",
                            children: (0, i.jsx)(MobileHeroLazyVideo, {
                                poster: "/assets/reels/reel-full.webp",
                                srcWebm: "/assets/reels/hero.webm",
                                srcMp4: "/assets/reels/hero.mp4",
                                title: "official-reel-video"
                            })
                        })]
                    })
                })
            }

            function ConceptScrollMobile() {
                return (0, l.useEffect)(() => {
                    let e = c.ZP.context(() => {
                        let e = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".mobile-concept",
                                start: "top top",
                                end: "2000 center",
                                markers: !1,
                                pin: !0,
                                scrub: !0
                            }
                        });
                        e.from(".en-cicle ", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 3), e.to(".mobli-cont", {
                            opacity: 1,
                            duration: 5,
                            ease: "power1.inOut"
                        }, 5), e.to(".mobli-cont", {
                            display: "block",
                            ease: "power1.inOut"
                        }, 5), e.from(".en-cicle ", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 9), e.to(".en-bg ", {
                            duration: 2,
                            ease: "power1.inOut",
                            scale: .7,
                            opacity: 1
                        }, 10), e.to(".en-bg ", {
                            duration: 2,
                            ease: "power1.inOut",
                            scale: 1.2
                        }, 12), e.to(".mobli-cont_content", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 15), e.to(".mobli-cont_content", {
                            display: "block",
                            ease: "power1.inOut"
                        }, 18), e.to(".from", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 21), e.to(".concept", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 25), e.to(".to", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 28), e.to(".conversion", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 31), e.to(".mobli-cont_content", {
                            scale: 2.5,
                            duration: 3,
                            ease: "power2.out",
                            opacity: 0
                        }, 34), e.to(".mobli-cont_content p", {
                            opacity: 1,
                            duration: 5,
                            ease: "power1.inOut",
                            stagger: .5,
                            delay: 2
                        }, 37), e.to(".mobli-cont_content p", {
                            opacity: 0,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 40), e.to(".lapi-content p ", {
                            opacity: 1,
                            duration: 5,
                            ease: "power1.inOut",
                            stagger: .3,
                            y: -50
                        }, 43)
                    });
                    return () => e.revert()
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "mobile-concept",
                        children: (0, i.jsxs)("div", {
                            className: "mobli-cont mobl",
                            children: [(0, i.jsx)("div", {
                                className: "en-bg"
                            }), (0, i.jsx)("div", {
                                className: "en-cicle"
                            }), (0, i.jsxs)("div", {
                                className: "mobli-cont_content",
                                children: [(0, i.jsx)("p", {
                                    className: "from",
                                    children: "From "
                                }), " ", (0, i.jsx)("p", {
                                    className: "concept",
                                    children: "Concept "
                                }), " ", (0, i.jsx)("p", {
                                    className: "to",
                                    children: "To "
                                }), " ", (0, i.jsx)("p", {
                                    className: "conversion",
                                    children: "Conversion"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "lapi-content",
                                children: (0, i.jsx)("p", {
                                    className: "word",
                                    children: ""
                                })
                            })]
                        })
                    })
                })
            }
            c.ZP.registerPlugin(p()), c.ZP.registerPlugin(p());
            let TopAeroParticles_Particles = class TopAeroParticles_Particles {
                init() {
                    this.container = "string" == typeof this.options.container ? document.querySelector(this.options.container) : this.options.container, this.items = this.container.querySelectorAll(this.options.itemsSelector), this.tl = this.createTimeline(), this.options.observable ? this.observe() : this.start(), -1 === this.options.repeats && this.tl.seek(this.options.initialSeek), this.bind()
                }
                bind() {
                    window.addEventListener("resize", this.refresh.bind(this))
                }
                unbind() {
                    window.removeEventListener("resize", this.refresh.bind(this))
                }
                refresh() {
                    this.tl.invalidate()
                }
                start() {
                    this.tl.play().timeScale(this.timeScale)
                }
                stop() {
                    this.tl.pause()
                }
                observe(e) {
                    e && (this.options.observableTarget = e), this.observer && this.unobserve(), this.observer = new IntersectionObserver(e => {
                        e[0].isIntersecting ? (this.options.observableRefresh && this.refresh(), this.start()) : this.stop()
                    }), this.observer.observe(this.options.observableTarget || this.container)
                }
                unobserve() {
                    this.observer && this.unobserve(), this.observer = null
                }
                setTimeScale() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.timeScale = e, this.tl.timeScale(e)
                }
                isReversed() {
                    return this.timeScale < 0
                }
                setReversed(e) {
                    return e !== this.isReversed() && this.setTimeScale(-1 * this.timeScale), this.isReversed()
                }
                getTimeline() {
                    return this.tl
                }
                createTimeline() {
                    let e = new c.ZP.timeline({
                        paused: !0
                    });
                    for (let t = 0; t < this.items.length; t++) {
                        let s = this.items[t],
                            i = new c.ZP.timeline({
                                repeat: this.options.repeats
                            }),
                            a = this.options.offset();
                        i.set(s, {
                            willChange: "transform"
                        }), this.options.fadeInDuration && i.fromTo(s, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: this.options.fadeInEase,
                            duration: this.options.fadeInDuration,
                            lazy: !1
                        }, 0), i.fromTo(s, {
                            y: this.options.yStart,
                            x: this.options.xStart
                        }, {
                            y: this.options.yEnd,
                            x: this.options.xEnd,
                            ease: this.options.ease,
                            duration: this.options.duration
                        }, 0), this.options.fadeOutDuration && i.to(s, {
                            opacity: 0,
                            ease: this.options.fadeOutEase,
                            duration: this.options.fadeOutDuration,
                            lazy: !1
                        }, "-=" + this.options.fadeOutDuration), e.add(i, a)
                    }
                    return e
                }
                removeTimeline() {
                    this.tl && this.tl.kill()
                }
                destroy() {
                    this.stop(), this.removeTimeline(), this.unbind(), this.unobserve()
                }
                constructor(e) {
                    this.options = Object.assign({}, {
                        container: null,
                        itemsSelector: "[data-particle-en]",
                        observable: !0,
                        observableTarget: null,
                        observableRefresh: !0,
                        repeats: -1,
                        timeScale: 1.5,
                        initialSeek: 3e3,
                        fadeOutDuration: 1,
                        fadeOutEase: "power4.out",
                        yStart: () => this.container.offsetHeight,
                        yEnd: (e, t) => -t.offsetHeight,
                        yStart: "350",
                        yEnd: "-500",
                        ease: "none",
                        duration: () => c.ZP.utils.random(5, 10),
                        offset: () => c.ZP.utils.random(0, 20)
                    }, e), this.timeScale = this.options.timeScale, this.init()
                }
            };

            function TopAeroParticles_partText() {
                return (0, l.useEffect)(() => {
                    let e = document.querySelector(".cb-particle");
                    new TopAeroParticles_Particles({
                        container: e,
                        itemsSelector: ".cb-particle-item"
                    })
                }, []), (0, i.jsx)("div", {
                    className: "cb-tabs-content",
                    children: (0, i.jsx)("section", {
                        className: "cb-demo",
                        children: (0, i.jsxs)("div", {
                            className: "cb-particle",
                            children: [(0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v1 -s4",
                                children: "\uD83D\uDCB5"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -dot -text -v3 -s4 -c3 -p1",
                                children: "\uD83C\uDFAF"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v2 -s4",
                                children: "\uD83D\uDCB8"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v5 -s4 -dot -c3 -p2",
                                children: "\uD83E\uDDF2"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v4 -s4",
                                children: "\uD83E\uDEF0\uD83C\uDFFB"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v7 -s4 -dot -c3 -p3",
                                children: "\uD83D\uDDA5"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v8 -s4",
                                children: "\uD83D\uDCB0"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v9 -s4 -dot -c3 -p1",
                                children: "\uD83D\uDCCD"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v6 -s4",
                                children: "\uD83E\uDDD1‍\uD83D\uDCBB"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v10 -s4 -dot -c3 -p3",
                                children: "\uD83C\uDFE6"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v6 -s4",
                                children: "\uD83D\uDCB2"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v7 -s4 -dot -c3 -p3",
                                children: "\uD83D\uDD8D"
                            }), (0, i.jsx)("span", {
                                className: "cb-particle-item size-emo -text -v8 -s4",
                                children: "\uD83E\uDD11"
                            })]
                        })
                    })
                })
            }

            function TopAero_Aerosol() {
                return (0, l.useEffect)(() => {
                    document.body.addEventListener("mousemove", e => {
                        let t = e.clientX,
                            s = e.clientY;
                        c.ZP.set(".c-cursor", {
                            x: t,
                            y: s
                        }), c.ZP.to(".shape-10", {
                            x: t,
                            y: s,
                            stagger: -.1
                        })
                    })
                }, []), (0, l.useEffect)(() => {
                    let e = c.ZP.timeline({
                        scrollTrigger: {
                            trigger: ".top-aero-hover",
                            start: "-200 top"
                        }
                    }),
                        t = document.querySelectorAll(".top-aero-demo p");
                    e.fromTo(t, {
                        opacity: 0,
                        yPercent: 320,
                        skewY: 30
                    }, {
                        opacity: 1,
                        yPercent: 0,
                        skewY: 0,
                        duration: 3,
                        ease: "expo.out"
                    }, 0)
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "top-aero-hover",
                        children: [(0, i.jsxs)("div", {
                            className: "text-container top-aero-demo",
                            children: [(0, i.jsxs)("p", {
                                className: "aero-desk-1",
                                children: ["we make cool things", (0, i.jsx)("br", {}), "that do great business"]
                            }), (0, i.jsxs)("p", {
                                className: "aero-mob-1",
                                children: ["we make cool ", (0, i.jsx)("br", {}), "things that do", (0, i.jsx)("br", {}), " great business"]
                            }), (0, i.jsx)(TopAeroParticles_partText, {})]
                        }), (0, i.jsx)("div", {
                            className: "aerosol-main",
                            children: (0, i.jsxs)("div", {
                                className: "shapes",
                                children: [(0, i.jsx)("div", {
                                    className: "shape-10 shape-1"
                                }), (0, i.jsx)("div", {
                                    className: "shape-10 shape-2"
                                }), (0, i.jsx)("div", {
                                    className: "shape-10 shape-3"
                                })]
                            })
                        })]
                    })
                })
            }
            c.ZP.registerPlugin(p());
            var v = s(2818),
                y = s.n(v),
                b = s(1132);
            let w = ["Hello \uD83D\uDE4F", "Bonjour", "Hola", "Salve", "Ol\xe1", "Ni Hao", "Ciao", "Salam", "Shalom!"];

            function Index() {
                let [e, t] = (0, l.useState)(0), [s, a] = (0, l.useState)(!0), [r, n] = (0, l.useState)([]);
                return (0, l.useEffect)(() => {
                    n(function (e) {
                        for (let t = e.length - 1; t > 0; t--) {
                            let s = Math.floor(Math.random() * (t + 1));
                            [e[t], e[s]] = [e[s], e[t]]
                        }
                        return e
                    }([...w])), a(!0), t(0)
                }, []), (0, l.useEffect)(() => {
                    if (e === r.length - 1) {
                        a(!1);
                        return
                    }
                    let s = 0 === e ? 1e3 : 500,
                        i = setTimeout(() => {
                            t(e + 1)
                        }, s);
                    return () => clearTimeout(i)
                }, [e, r]), (0, l.useEffect)(() => {
                    let e = c.p8.context(() => {
                        let e = document.querySelectorAll("#loaderbars"),
                            t = c.p8.timeline();
                        t.to(e, {
                            height: 0,
                            duration: .6,
                            delay: 5.3,
                            ease: "power2.easeIn",
                            stagger: .1
                        }).to("#loader", {
                            y: "-1500",
                            opacity: 0,
                            ease: "power2.inOut"
                        })
                    });
                    return () => e.revert()
                }, []), (0, i.jsx)("div", {
                    className: y().preloader,
                    id: "loader",
                    children: (0, i.jsxs)(i.Fragment, {
                        children: [s ? (0, i.jsx)(b.E.p, {
                            className: "preloaderWords",
                            variants: {
                                initial: {
                                    opacity: 0
                                },
                                enter: {
                                    opacity: 1,
                                    transition: {
                                        duration: .2,
                                        delay: .2
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: .2
                                    }
                                }
                            },
                            initial: "initial",
                            animate: "enter",
                            children: r[e]
                        }, e) : null, (0, i.jsxs)("div", {
                            className: y().mainLoaderBg,
                            children: [(0, i.jsx)("span", {
                                className: y().mainLoaderBar,
                                id: "loaderbars"
                            }), (0, i.jsx)("span", {
                                className: y().mainLoaderBar,
                                id: "loaderbars"
                            }), (0, i.jsx)("span", {
                                className: y().mainLoaderBar,
                                id: "loaderbars"
                            }), (0, i.jsx)("span", {
                                className: y().mainLoaderBar,
                                id: "loaderbars"
                            }), (0, i.jsx)("span", {
                                className: y().mainLoaderBar,
                                id: "loaderbars"
                            })]
                        })]
                    })
                })
            }
            var _ = s(9108),
                N = s.n(_),
                k = s(3798),
                P = s(5793),
                D = s(5829),
                components_MagneticButton = e => {
                    let {
                        children: t,
                        className: s,
                        speed: a = 1,
                        tollerance: r = .8,
                        scale: n = 1.2,
                        debug: o = !1,
                        borderRadius: d = 0,
                        ...p
                    } = e, h = (0, l.useRef)(), m = (0, l.useRef)(), u = (0, l.useRef)(), g = (0, l.useRef)(), x = (0, l.useRef)(), j = (0, l.useRef)({
                        x: 0,
                        y: 0
                    }), handleMouseEnter = () => {
                        c.ZP.killTweensOf(m.current), c.ZP.set(u.current, {
                            scale: n,
                            borderRadius: d,
                            background: o ? "rgba(0, 125, 255, .4)" : "transparent"
                        }), g.current = h.current.getBoundingClientRect(), x.current = m.current.getBoundingClientRect(), j.current.x = (g.current.width * n - g.current.width) / 2, j.current.y = (g.current.height * n - g.current.height) / 2
                    }, handleMouseLeave = () => {
                        c.ZP.killTweensOf(m.current), c.ZP.to(m.current, {
                            x: 0,
                            y: 0,
                            ease: "elastic.out(1.1, .4)",
                            duration: 1.2
                        }), c.ZP.set(u.current, {
                            scale: 1
                        })
                    }, handleMouseMove = e => {
                        let t = e.clientX || e.touches[0].clientX,
                            s = e.clientY || e.touches[0].clientY,
                            i = (g.current.width - x.current.width) / 2 * r,
                            o = (g.current.height - x.current.height) / 2 * r,
                            l = c.ZP.utils.mapRange(0, g.current.width * n, -i, i, t - g.current.x + j.current.x),
                            d = c.ZP.utils.mapRange(0, g.current.height * n, -o, o, s - g.current.y + j.current.y);
                        c.ZP.killTweensOf(m.current), c.ZP.to(m.current, {
                            x: l,
                            y: d,
                            ease: "power3.out",
                            duration: a
                        })
                    };
                    return (0, i.jsxs)("button", {
                        ref: h,
                        className: "magnetic-button ".concat(s),
                        onMouseEnter: handleMouseEnter,
                        onMouseMove: handleMouseMove,
                        onTouchMove: handleMouseMove,
                        onTouchStart: handleMouseEnter,
                        onMouseLeave: handleMouseLeave,
                        onTouchEnd: handleMouseLeave,
                        ...p,
                        children: [(0, i.jsx)("span", {
                            ref: m,
                            className: "magnetic-button--item",
                            children: t
                        }), (0, i.jsx)("span", {
                            ref: u,
                            className: "magnetic-button--hover"
                        })]
                    })
                };

            function Button() {
                return (0, l.useEffect)(() => {
                    let e = document.querySelector(".primary-button"),
                        t = document.querySelector(".primary-button .round");
                    e.addEventListener("mouseenter", function (e) {
                        this.classList += " animate";
                        let s = e.offsetX,
                            i = e.offsetY;
                        i < 24 ? t.style.top = "0px" : i > 30 && (t.style.top = "48px"), t.style.left = s + "px", t.style.width = "1px", t.style.height = "1px"
                    }), e.addEventListener("mouseleave", function () {
                        this.classList.remove("animate");
                        let e = event.offsetX,
                            s = event.offsetY;
                        s < 24 ? t.style.top = "0px" : s > 30 && (t.style.top = "48px"), t.style.left = e + "px"
                    })
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        id: "button-container",
                        children: (0, i.jsx)(x(), {
                            href: "/",
                            children: (0, i.jsxs)(components_MagneticButton, {
                                className: "primary-button",
                                "data-cursor-text": "click",
                                "data-cursor-color": "#3C8E8D",
                                "data-cursor-size": "100px",
                                children: [(0, i.jsx)("span", {
                                    className: "round"
                                }), "View All Projects"]
                            })
                        })
                    })
                })
            }

            function HomeProject() {
                return (0, l.useEffect)(() => {
                    let e = document.querySelectorAll("#c-works");
                    e.forEach(function (e, t) {
                        let s = new D.Z(e.querySelector("#proj-para-anim")),
                            i = s.words;
                        c.ZP.from(i, {
                            scrollTrigger: {
                                trigger: e,
                                start: "top 80%",
                                markers: !1
                            },
                            duration: 1,
                            opacity: 0,
                            yPercent: 100,
                            ease: "Power3.out",
                            stagger: .05
                        })
                    })
                }, []), (0, l.useEffect)(() => {
                    let e = document.querySelectorAll("#line-anim"),
                        t = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: "#c-works",
                                start: "top 80%"
                            }
                        });
                    return t.fromTo(e, 1.2, {
                        y: "200px",
                        ease: "Power3.inOut",
                        skewY: -20
                    }, {
                        y: 0,
                        skewY: 0,
                        stagger: .5,
                        duration: 1
                    }, "-0.6"), () => t.kill()
                }, []), (0, i.jsxs)("div", {
                    className: N().projectSectionMain,
                    id: "c-works",
                    children: [(0, i.jsxs)("div", {
                        className: N().projectHeading,
                        children: [(0, i.jsxs)("div", {
                            className: "".concat(N().projectFirstBox, " ").concat(N().lineAnim),
                            children: [(0, i.jsx)("div", {
                                className: "".concat(N().headContainer),
                                children: (0, i.jsx)("p", {
                                    className: "".concat(N().select),
                                    id: "line-anim",
                                    children: "Selected"
                                })
                            }), (0, i.jsx)("p", {
                                className: N().paraProject,
                                id: "proj-para-anim",
                                children: (0, i.jsx)("span", {
                                    children: "Our showcase of a spectrum of Innovative Collaborations, Redefined Digital Experiences, and Brand Transformations."
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "".concat(N().headContainer),
                            children: (0, i.jsx)("p", {
                                className: "color-primary",
                                id: "line-anim",
                                children: "Projects"
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: N().gallery,
                        id: "imgContainer",
                        children: [(0, i.jsx)(P.Z, {
                            projects: [k.q[0], k.q[1]],
                            id: "projectImg"
                        }), (0, i.jsx)(P.Z, {
                            projects: [k.q[2], k.q[3]],
                            reversed: !0,
                            id: "projectImg"
                        }), (0, i.jsx)(P.Z, {
                            projects: [k.q[4], k.q[5]],
                            id: "projectImg"
                        })]
                    }), (0, i.jsx)(Button, {})]
                })
            }
            c.ZP.registerPlugin(d.ScrollTrigger);
            var S, M, T, E, C, O = s(6499),
                L = s.n(O),
                Es = function () {
                    return !0
                },
                Ts = function () {
                    return S || Es() && (S = window.gsap) && S.registerPlugin && S
                },
                I = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
                A = {
                    rect: ["width", "height"],
                    circle: ["r", "r"],
                    ellipse: ["rx", "ry"],
                    line: ["x2", "y2"]
                },
                As = function (e) {
                    return Math.round(1e4 * e) / 1e4
                },
                ks = function (e) {
                    return parseFloat(e || 0)
                },
                Os = function (e, t) {
                    return ks(e.getAttribute(t))
                },
                H = Math.sqrt,
                Bs = function (e, t, s, i, a, r) {
                    return H(Math.pow((ks(s) - ks(e)) * a, 2) + Math.pow((ks(i) - ks(t)) * r, 2))
                },
                Ls = function (e) {
                    return console.warn(e)
                },
                Ps = function (e) {
                    return "non-scaling-stroke" === e.getAttribute("vector-effect")
                },
                Rs = function (e) {
                    if (!(e = M(e)[0])) return 0;
                    var t, s, i, a, r, n, o, l = e.tagName.toLowerCase(),
                        c = e.style,
                        d = 1,
                        p = 1;
                    Ps(e) && (d = H((p = e.getScreenCTM()).a * p.a + p.b * p.b), p = H(p.d * p.d + p.c * p.c));
                    try {
                        s = e.getBBox()
                    } catch (e) {
                        Ls("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
                    }
                    var h = s || {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    },
                        m = h.x,
                        u = h.y,
                        g = h.width,
                        x = h.height;
                    if (s && (g || x) || !A[l] || (g = Os(e, A[l][0]), x = Os(e, A[l][1]), "rect" !== l && "line" !== l && (g *= 2, x *= 2), "line" === l && (m = Os(e, "x1"), u = Os(e, "y1"), g = Math.abs(g - m), x = Math.abs(x - u))), "path" === l) a = c.strokeDasharray, c.strokeDasharray = "none", t = e.getTotalLength() || 0, d !== p && Ls("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (d + p) / 2, c.strokeDasharray = a;
                    else if ("rect" === l) t = 2 * g * d + 2 * x * p;
                    else if ("line" === l) t = Bs(m, u, m + g, u + x, d, p);
                    else if ("polyline" === l || "polygon" === l)
                        for (i = e.getAttribute("points").match(I) || [], "polygon" === l && i.push(i[0], i[1]), t = 0, r = 2; r < i.length; r += 2) t += Bs(i[r - 2], i[r - 1], i[r], i[r + 1], d, p) || 0;
                    else "circle" !== l && "ellipse" !== l || (t = Math.PI * (3 * ((n = g / 2 * d) + (o = x / 2 * p)) - H((3 * n + o) * (n + 3 * o))));
                    return t || 0
                },
                js = function (e, t) {
                    if (!(e = M(e)[0])) return [0, 0];
                    t || (t = Rs(e) + 1);
                    var s = T.getComputedStyle(e),
                        i = s.strokeDasharray || "",
                        a = ks(s.strokeDashoffset),
                        r = i.indexOf(",");
                    return r < 0 && (r = i.indexOf(" ")), (i = r < 0 ? t : ks(i.substr(0, r)) || 1e-5) > t && (i = t), [Math.max(0, -a), Math.max(0, i - a)]
                },
                qs = function () {
                    Es() && (document, T = window, C = S = Ts(), M = S.utils.toArray, E = -1 !== ((T.navigator || {}).userAgent || "").indexOf("Edge"))
                },
                B = {
                    version: "3.4.0",
                    name: "drawSVG",
                    register: function (e) {
                        S = e, qs()
                    },
                    init: function (e, t, s, i, a) {
                        if (!e.getBBox) return !1;
                        C || qs();
                        var r, n, o, l, c, d, p, h, m, u = Rs(e) + 1;
                        return this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", r = t, n = (d = js(e, u))[0], (c = r.indexOf(" ")) < 0 ? (o = void 0 !== n ? n + "" : r, l = r) : (o = r.substr(0, c), l = r.substr(c + 1)), p = (o = ~o.indexOf("%") ? ks(o) / 100 * u : ks(o)) > (l = ~l.indexOf("%") ? ks(l) / 100 * u : ks(l)) ? [l, o] : [o, l], this._length = As(u + 10), 0 === d[0] && 0 === p[0] ? (h = Math.max(1e-5, p[1] - u), this._dash = As(u + h), this._offset = As(u - d[1] + h), this._offsetPT = this.add(this, "_offset", this._offset, As(u - p[1] + h))) : (this._dash = As(d[1] - d[0]) || 1e-6, this._offset = As(-d[0]), this._dashPT = this.add(this, "_dash", this._dash, As(p[1] - p[0]) || 1e-5), this._offsetPT = this.add(this, "_offset", this._offset, As(-p[0]))), E && (m = T.getComputedStyle(e)).strokeLinecap !== m.strokeLinejoin && (p = ks(m.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", p, p + .01)), this._live = Ps(e) || ~(t + "").indexOf("live"), this._props.push("drawSVG"), 1
                    },
                    render: function (e, t) {
                        var s, i, a, r, n = t._pt,
                            o = t._style;
                        if (n) {
                            for (t._live && (s = Rs(t._target) + 11) !== t._length && (i = s / t._length, t._length = s, t._offsetPT.s *= i, t._offsetPT.c *= i, t._dashPT ? (t._dashPT.s *= i, t._dashPT.c *= i) : t._dash *= i); n;) n.r(e, n.d), n = n._next;
                            a = t._dash, r = t._offset, s = t._length, o.strokeDashoffset = t._offset, 1 !== e && e ? o.strokeDasharray = a + "px," + s + "px" : (a - r < .001 && s - a <= 10 && (o.strokeDashoffset = r + 1), o.strokeDasharray = r < .001 && s - a <= 10 ? "none" : r === a ? "0px, 999999px" : a + "px," + s + "px")
                        }
                    },
                    getLength: Rs,
                    getPosition: js
                };
            Ts() && S.registerPlugin(B), c.ZP.registerPlugin(p(), B);
            let handleHover = e => {
                c.ZP.to(e.target, {
                    duration: .5,
                    scale: 1.1,
                    ease: "power1.inOut"
                })
            },
                handleHoverExit = e => {
                    c.ZP.to(e.target, {
                        duration: .5,
                        scale: 1,
                        ease: "power1.inOut"
                    })
                };

            function ProjectsHome() {
                return (0, l.useEffect)(() => {
                    let e = c.ZP.timeline();
                    document.querySelectorAll("#image-container").forEach(function (t) {
                        t.addEventListener("mouseenter", () => {
                            e.set(t.querySelector("#line1"), {
                                drawSVG: "100%"
                            }).set(t.querySelector("#line2"), {
                                drawSVG: 0
                            }).set(t.querySelector("#arrow-head-1"), {
                                drawSVG: "100%"
                            }).set(t.querySelector("#arrow-head-2"), {
                                drawSVG: 0
                            }).to(t.querySelector("#line1"), {
                                drawSVG: "100% 100%",
                                duration: .2
                            }).to(t.querySelector("#arrow-head-1"), {
                                drawSVG: "100% 100%",
                                duration: .2
                            }).to(t.querySelector("#arrow-head-2"), {
                                drawSVG: "100%",
                                duration: .4
                            }).to(t.querySelector("#line2"), {
                                drawSVG: "100%",
                                duration: .2
                            })
                        })
                    })
                }), (0, l.useEffect)(() => {
                    let e = c.ZP.context(() => {
                        c.ZP.utils.toArray("#image-container").forEach(function (e) {
                            let t = e.querySelector("img");
                            c.ZP.to(t, {
                                y: () => t.offsetHeight - e.offsetHeight,
                                ease: "none",
                                startAt: {
                                    y: "-20%"
                                },
                                scrollTrigger: {
                                    trigger: e,
                                    scrub: !0,
                                    pin: !1,
                                    markers: !1,
                                    invalidateOnRefresh: !0
                                },
                                y: "20%",
                                ease: "none"
                            })
                        })
                    });
                    return () => e.revert()
                }), globalThis.innerWidth < 1024 && (0, l.useEffect)(() => {
                    let e = c.ZP.timeline({
                        scrollTrigger: {
                            trigger: "#m-works",
                            start: "top 90%"
                        }
                    });
                    return e.fromTo("#line-anim #span", 1.2, {
                        y: 600,
                        ease: "Power3.inOut",
                        skewY: -20
                    }, {
                        y: 0,
                        skewY: 0,
                        stagger: .2
                    }, "-0.6"), () => e.kill()
                }, []), (0, l.useEffect)(() => {
                    let e = c.ZP.timeline({
                        scrollTrigger: {
                            trigger: "#m-works",
                            start: "top 85%"
                        }
                    });
                    return e.fromTo("#project-home", .8, {
                        opacity: 0
                    }, {
                        delay: .5,
                        duration: 1,
                        opacity: 1
                    }), () => e.kill()
                }, []), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: L().projectSectionMain,
                        id: "m-works",
                        children: [(0, i.jsxs)("div", {
                            className: L().projectHeading,
                            children: [(0, i.jsxs)("div", {
                                className: "".concat(L().projectFirstBox, " ").concat(L().lineAnim),
                                id: "line-anim",
                                children: [(0, i.jsx)("h3", {
                                    className: "".concat(L().select),
                                    children: (0, i.jsx)("span", {
                                        className: L().span,
                                        id: "span",
                                        children: "Selected"
                                    })
                                }), (0, i.jsx)("p", {
                                    className: L().paraProject,
                                    id: "proj-para-anim",
                                    children: (0, i.jsx)("span", {
                                        children: "Our showcase of a spectrum of Innovative Collaborations, Redefined Digital Experiences, and Brand Transformations."
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: "".concat(L().projectHomeHeading, " ").concat(L().lineAnim),
                                id: "line-anim",
                                children: (0, i.jsx)("h3", {
                                    className: L().project,
                                    id: "darkMode-project",
                                    children: (0, i.jsx)("span", {
                                        className: L().span,
                                        id: "span",
                                        children: "Projects"
                                    })
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: L().projectHover,
                            id: "project-home",
                            children: [(0, i.jsxs)("div", {
                                className: L().projectSubSection,
                                children: [(0, i.jsx)("div", {
                                    className: L().glide,
                                    children: (0, i.jsxs)("div", {
                                        className: "".concat(L().glideContent, " ").concat(L().mt20),
                                        id: "image-container",
                                        children: [(0, i.jsx)("a", {
                                            href: "/",
                                            children: (0, i.jsx)(m(), {
                                                src: "/assets/projects/new-project/kedarkala2.webp",
                                                width: 1e3,
                                                height: 1e3,
                                                alt: "Image",
                                                onMouseEnter: e => handleHover(e),
                                                onMouseOut: e => handleHoverExit(e)
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: L().textContent,
                                            children: (0, i.jsxs)("div", {
                                                className: L().c_project_info,
                                                children: [(0, i.jsx)("p", {
                                                    children: "2022"
                                                }), " ", (0, i.jsx)("p", {
                                                    children: "Branding, Web Design"
                                                }), (0, i.jsxs)("div", {
                                                    className: L().projectCta,
                                                    children: [(0, i.jsx)("h4", {
                                                        children: "Kedarkala"
                                                    }), (0, i.jsx)("div", {
                                                        className: "".concat(L().c_prj_btn, " ").concat(L().js_tab_arrow),
                                                        children: (0, i.jsxs)("svg", {
                                                            id: "arrow",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 9.56 9.56",
                                                            children: [(0, i.jsx)("line", {
                                                                id: "line1",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("line", {
                                                                id: "line2",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-1",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-2",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "".concat(L().glide, " ").concat(L().mb_0),
                                    children: (0, i.jsxs)("div", {
                                        className: "".concat(L().glideContent),
                                        id: "image-container",
                                        children: [(0, i.jsx)("a", {
                                            href: "/",
                                            children: (0, i.jsx)(m(), {
                                                src: "/assets/projects/new-project/patronum.webp",
                                                width: 1e3,
                                                height: 1e3,
                                                alt: "Image",
                                                onMouseEnter: e => handleHover(e),
                                                onMouseOut: e => handleHoverExit(e)
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: L().textContent,
                                            children: (0, i.jsxs)("div", {
                                                className: L().c_project_info,
                                                children: [(0, i.jsx)("p", {
                                                    children: "2019"
                                                }), " ", (0, i.jsx)("p", {
                                                    children: "Branding, Web Design, Marketing"
                                                }), (0, i.jsxs)("div", {
                                                    className: L().projectCta,
                                                    children: [(0, i.jsx)("h4", {
                                                        children: "Patronum"
                                                    }), (0, i.jsx)("div", {
                                                        className: "".concat(L().c_prj_btn, " ").concat(L().js_tab_arrow),
                                                        children: (0, i.jsxs)("svg", {
                                                            id: "arrow",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 9.56 9.56",
                                                            children: [(0, i.jsx)("line", {
                                                                id: "line1",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("line", {
                                                                id: "line2",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-1",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-2",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: L().projectSubSection,
                                children: [(0, i.jsx)("div", {
                                    className: L().glide,
                                    children: (0, i.jsxs)("div", {
                                        className: "".concat(L().glideContent, " ").concat(L().mt20, " ").concat(L().mt0),
                                        id: "image-container",
                                        children: [(0, i.jsx)("a", {
                                            href: "/wragby-solutions-case-study",
                                            children: (0, i.jsx)(m(), {
                                                src: "/assets/projects/new-project/wragby.webp",
                                                width: 1e3,
                                                height: 1e3,
                                                alt: "Image",
                                                onMouseEnter: e => handleHover(e),
                                                onMouseOut: e => handleHoverExit(e)
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: L().textContent,
                                            children: (0, i.jsxs)("div", {
                                                className: L().c_project_info,
                                                children: [(0, i.jsx)("p", {
                                                    children: "2022"
                                                }), " ", (0, i.jsx)("p", {
                                                    children: "UI/ UX Design, Development"
                                                }), (0, i.jsxs)("div", {
                                                    className: L().projectCta,
                                                    children: [(0, i.jsx)("h4", {
                                                        children: "Wragby"
                                                    }), (0, i.jsx)("div", {
                                                        className: "".concat(L().c_prj_btn, " ").concat(L().js_tab_arrow),
                                                        children: (0, i.jsxs)("svg", {
                                                            id: "arrow",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 9.56 9.56",
                                                            children: [(0, i.jsx)("line", {
                                                                id: "line1",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("line", {
                                                                id: "line2",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-1",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-2",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "".concat(L().glide, " ").concat(L().mb_0),
                                    children: (0, i.jsxs)("div", {
                                        className: L().glideContent,
                                        id: "image-container",
                                        children: [(0, i.jsx)("a", {
                                            href: "/",
                                            children: (0, i.jsx)(m(), {
                                                src: "/assets/projects/new-project/gcm.webp",
                                                width: 1e3,
                                                height: 1e3,
                                                alt: "Image",
                                                onMouseEnter: e => handleHover(e),
                                                onMouseOut: e => handleHoverExit(e)
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: L().textContent,
                                            children: (0, i.jsxs)("div", {
                                                className: L().c_project_info,
                                                children: [(0, i.jsx)("p", {
                                                    children: "2022"
                                                }), " ", (0, i.jsx)("p", {
                                                    children: "Web Design, Development"
                                                }), (0, i.jsxs)("div", {
                                                    className: L().projectCta,
                                                    children: [(0, i.jsx)("h4", {
                                                        children: "GCM"
                                                    }), (0, i.jsx)("div", {
                                                        className: "".concat(L().c_prj_btn, " ").concat(L().js_tab_arrow),
                                                        children: (0, i.jsxs)("svg", {
                                                            id: "arrow",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 9.56 9.56",
                                                            children: [(0, i.jsx)("line", {
                                                                id: "line1",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("line", {
                                                                id: "line2",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-1",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-2",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: L().projectSubSection,
                                children: [(0, i.jsx)("div", {
                                    className: L().glide,
                                    children: (0, i.jsxs)("div", {
                                        className: "".concat(L().glideContent, " ").concat(L().mt20, " ").concat(L().mt0),
                                        id: "image-container",
                                        children: [(0, i.jsx)("a", {
                                            href: "/pdtl-ecommerce-automation-case-study",
                                            children: (0, i.jsx)(m(), {
                                                src: "/assets/projects/new-project/pdtl.webp",
                                                width: 1e3,
                                                height: 1e3,
                                                alt: "Image",
                                                onMouseEnter: e => handleHover(e),
                                                onMouseOut: e => handleHoverExit(e)
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: L().textContent,
                                            children: (0, i.jsxs)("div", {
                                                className: L().c_project_info,
                                                children: [(0, i.jsx)("p", {
                                                    children: "2022"
                                                }), " ", (0, i.jsx)("p", {
                                                    children: "Web Design, Branding, Development"
                                                }), (0, i.jsxs)("div", {
                                                    className: L().projectCta,
                                                    children: [(0, i.jsx)("h4", {
                                                        children: "PDTL"
                                                    }), (0, i.jsx)("div", {
                                                        className: "".concat(L().c_prj_btn, " ").concat(L().js_tab_arrow),
                                                        children: (0, i.jsxs)("svg", {
                                                            id: "arrow",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 9.56 9.56",
                                                            children: [(0, i.jsx)("line", {
                                                                id: "line1",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("line", {
                                                                id: "line2",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-1",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-2",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: L().glide,
                                    children: (0, i.jsxs)("div", {
                                        className: L().glideContent,
                                        id: "image-container",
                                        children: [(0, i.jsx)("a", {
                                            href: "/",
                                            children: (0, i.jsx)(m(), {
                                                src: "/assets/projects/new-project/dharan.webp",
                                                width: 1e3,
                                                height: 1e3,
                                                alt: "Image",
                                                onMouseEnter: e => handleHover(e),
                                                onMouseOut: e => handleHoverExit(e)
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: L().textContent,
                                            children: (0, i.jsxs)("div", {
                                                className: L().c_project_info,
                                                children: [(0, i.jsx)("p", {
                                                    children: "2020"
                                                }), " ", (0, i.jsx)("p", {
                                                    children: "E-Commerce, Web Design, Development"
                                                }), (0, i.jsxs)("div", {
                                                    className: L().projectCta,
                                                    children: [(0, i.jsx)("h4", {
                                                        children: "Dharan"
                                                    }), (0, i.jsx)("div", {
                                                        className: "".concat(L().c_prj_btn, " ").concat(L().js_tab_arrow),
                                                        children: (0, i.jsxs)("svg", {
                                                            id: "arrow",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 9.56 9.56",
                                                            children: [(0, i.jsx)("line", {
                                                                id: "line1",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("line", {
                                                                id: "line2",
                                                                x1: "0.27",
                                                                y1: "9.29",
                                                                x2: "9.18",
                                                                y2: "0.38",
                                                                fill: "#4e4e4e",
                                                                stroke: "#4e4e4e",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-1",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            }), (0, i.jsx)("polyline", {
                                                                id: "arrow-head-2",
                                                                points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                                                fill: "none",
                                                                stroke: "#4e4e4e",
                                                                strokeLinecap: "round",
                                                                strokeMiterlimit: 10,
                                                                strokeWidth: "0.75"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }), (0, i.jsx)(Button, {})]
                    })
                })
            }
            var z = s(4791);
            c.ZP.registerPlugin(p());
            let HomeBlogs_handleHover = e => {
                c.ZP.to(e.target, {
                    duration: .5,
                    scale: 1.1,
                    ease: "power1.inOut"
                })
            },
                HomeBlogs_handleHoverExit = e => {
                    c.ZP.to(e.target, {
                        duration: .5,
                        scale: 1,
                        ease: "power1.inOut"
                    })
                };
            var Home_HomeBlogs = e => {
                let {
                    recentPosts: t
                } = e, s = (0, l.useRef)();
                return (0, l.useEffect)(() => {
                    let e = document.querySelectorAll(".related-box-img"),
                        t = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: s.current,
                                start: "top 85%"
                            }
                        });
                    return t.fromTo(".homeBlogsHeading", {
                        y: 200,
                        opacity: 0
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power2.out"
                    }).fromTo(".homeBlogs>a", {
                        y: 100,
                        opacity: 0
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        delay: -1,
                        ease: "power1.out"
                    }).fromTo(e, {
                        y: 100,
                        opacity: 0
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        delay: -1,
                        ease: "power1.out"
                    }), () => t.kill()
                }, []), (0, i.jsxs)("div", {
                    ref: s,
                    className: "related-articles",
                    children: [(0, i.jsxs)("div", {
                        className: "homeBlogs",
                        children: [(0, i.jsxs)("h3", {
                            className: "homeBlogsHeading",
                            children: ["Our Creative ", (0, i.jsx)("br", {}), " ", (0, i.jsx)("span", {
                                className: "color-primary",
                                children: "Musings"
                            })]
                        }), (0, i.jsx)(x(), {
                            href: "/",
                            "data-cursor-size": "80px",
                            "data-cursor-exclusion": !0,
                            children: (0, i.jsx)("span", {
                                children: "All Articles"
                            })
                        })]
                    }), (0, i.jsx)("div", {
                        className: "related-box-img homeBlog",
                        children: t.map((e, t) => (0, i.jsxs)("div", {
                            className: "homeBlog-pading",
                            children: [(0, i.jsx)("div", {
                                className: "img-box-related homeBlog",
                                children: (0, i.jsxs)(x(), {
                                    href: e.slug,
                                    children: [(0, i.jsx)("img", {
                                        loading: "lazy",
                                        src: e.featuredImage.node.sourceUrl,
                                        alt: e.title,
                                        title: e.title,
                                        "data-cursor-text": "Read Now",
                                        "data-cursor-color": "#000",
                                        "data-cursor-size": "100px",
                                        onMouseEnter: e => HomeBlogs_handleHover(e),
                                        onMouseOut: e => HomeBlogs_handleHoverExit(e)
                                    }), (0, i.jsx)("h5", {
                                        className: "blog-list-tag",
                                        children: e.categories.nodes[0].name
                                    })]
                                })
                            }), (0, i.jsx)("h4", {
                                children: e.title
                            })]
                        }, t))
                    })]
                })
                
            },
                Z = s(9008),
                W = s.n(Z);

            function Awards() {
                // return (0, i.jsx)(i.Fragment, {
                //     children: (0, i.jsx)("div", {
                //         id: "award-fixed",
                //         style: {
                //             position: "fixed",
                //             zIndex: 999,
                //             top: 0,
                //             right: 0,
                //             height: "100vh"
                //         },
                //         children: (0, i.jsx)("div", {
                //             id: "awwwards",
                //             style: {
                //                 position: "absolute",
                //                 transform: "translateY(-50%)",
                //                 top: "50%",
                //                 right: 0
                //             },
                //             children: (0, i.jsx)("a", {
                //                 href: "https://www.awwwards.com/sites/Orgitech-digital",
                //                 target: "_blank",
                //                 children: (0, i.jsxs)("svg", {
                //                     style: {
                //                         width: "53.08px"
                //                     },
                //                     width: "53.08",
                //                     height: "171.358",
                //                     className: "dark:invert",
                //                     children: [(0, i.jsx)("path", {
                //                         className: "js-color-bg",
                //                         fill: "#9BD4D7",
                //                         d: "M0 0h53.08v171.358H0z"
                //                     }), (0, i.jsx)("g", {
                //                         className: "js-color-text",
                //                         fill: "white",
                //                         children: (0, i.jsx)("path", {
                //                             d: "M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495"
                //                         })
                //                     })]
                //                 })
                //             })
                //         })
                //     })
                // })
            }
            var R = !0;

            function Home(e) {
                let {
                    recentPosts: t
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(n.PB, {
                        title: "Orgitech | Digital Product Design, UI/UX Design Agency",
                        description: "Orgitech is california Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and New Strategies to Create Digital Products that People Love to Use.",
                        openGraph: {
                            url: "",
                            title: "Orgitech | Digital Product Design, UI/UX Design Agency",
                            description: "Orgitech is california Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and New Strategies to Create Digital Products that People Love to Use.",
                            images: [{
                                url: "/assets/header-logo/orgitech_logo.png",
                                width: 1200,
                                height: 630,
                                alt: "HomePage Feature Image",
                                type: "/assets/header-logo/orgitech_logo.png"
                            }],
                            siteName: "Orgitech"
                        },
                        additionalMetaTags: [{
                            name: "",
                            content: ""
                        }, {
                            name: "",
                            content: ""
                        }, {
                            name: "",
                            content: ""
                        }]
                    }), (0, i.jsxs)(W(), {
                        children: [(0, i.jsx)("link", {
                            rel: "canonical",
                            href: ""
                        }), (0, i.jsx)("link", {
                            rel: "alternate",
                            href: "",
                            hreflang: "x-default"
                        }), (0, i.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify({
                                    "@context": "",
                                    "@type": "WebPage",
                                    mainEntityOfPage: {
                                        "@type": "WebPage",
                                        "@id": ""
                                    },
                                    name: "",
                                    description: "",
                                    datePublished: "",
                                    dateModified: "",
                                    publisher: {
                                        "@type": "Organization",
                                        name: "",
                                        logo: {
                                            "@type": "ImageObject",
                                            url: "/assets/header-logo/orgitech_logo.png"
                                        }
                                    }
                                })
                            }
                        }), (0, i.jsx)("script", {
                            // type: "application/ld+json",
                            type: "",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify([{
                                    "@context": "",
                                    "@type": "ProfessionalService",
                                    name: "Orgitech",
                                    url: "",
                                    image: "",
                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress: "7911 Arlington Ave, Riverside CA 92503",
                                        addressLocality: "california",
                                        addressRegion: "UP",
                                        postalCode: "92503",
                                        addressCountry: "IN"
                                    },
                                    aggregateRating: {
                                        "@type": "AggregateRating",
                                        ratingValue: "5",
                                        reviewCount: "14"
                                    },
                                    geo: {
                                        // "@type": "GeoCoordinates",
                                        "@type": "",
                                        // latitude: "28.627458269319703",
                                        latitude: "",
                                        // longitude: " 77.37259286237833"
                                        longitude: ""
                                    },
                                    telephone: "+(951) 900 3213",
                                    priceRange: "$$",
                                    openingHoursSpecification: [{
                                        "@type": "OpeningHoursSpecification",
                                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                        opens: "10:00",
                                        closes: "20:00"
                                    }]
                                }])
                            }
                        })]
                    }), (0, i.jsx)(Index, {}), (0, i.jsx)(r.Z, {}), (0, i.jsx)(a.C, {
                        isGelly: !0
                    }), (0, i.jsxs)("main", {
                        children: [(0, i.jsx)(o.Z, {}), (0, i.jsx)(Awards, {}), (0, i.jsxs)("section", {
                            className: "main-section",
                            "data-cursor-size": "10",
                            "data-cursor-text": "",
                            children: [(0, i.jsx)(HeroMobile, {}), (0, i.jsx)(Home_HeroDesktop, {})]
                        }), (0, i.jsx)(z.Z, {}), (0, i.jsx)("section", {
                            children: (0, i.jsx)(ConceptScrollNew, {})
                        }), (0, i.jsx)("section", {
                            children: (0, i.jsx)(ConceptScrollMobile, {})
                        }), (0, i.jsx)(HomeVideoSection, {}), (0, i.jsx)("section", {
                            "data-cursor-color": "#000",
                            "data-cursor-size": "0px",
                            className: "topHeightAero m-150",
                            children: (0, i.jsx)(TopAero_Aerosol, {})
                        }), (0, i.jsx)("section", {
                            className: "category pb-150",
                            children: (0, i.jsx)(Category, {})
                        }), (0, i.jsx)("section", {
                            className: "desktop-projects m-150",
                            children: (0, i.jsx)(HomeProject, {})
                        }), (0, i.jsx)("section", {
                            className: "mobile-projects m-150",
                            children: (0, i.jsx)(ProjectsHome, {})
                        }), (0, i.jsx)("section", {
                            "data-cursor-color": "#000",
                            "data-cursor-size": "0px",
                            className: "homeAeroBottom",
                            children: (0, i.jsx)(Aerosol, {})
                        }), (0, i.jsx)(Home_HomeBlogs, {
                            recentPosts: t
                        }), (0, i.jsx)("section", {
                            className: "desktop-footer mt-150",
                            children: (0, i.jsx)(u.Z, {})
                        }), (0, i.jsx)("section", {
                            className: "mobile-footer",
                            children: (0, i.jsx)(f.Z, {})
                        })]
                    })]
                })
            }
        },
        5538: function () { },
        2818: function (e) {
            e.exports = {
                preloader: "style_preloader__DiRpd",
                mainLoaderBg: "style_mainLoaderBg___LA38",
                mainLoaderBar: "style_mainLoaderBar__YB0RB"
            }
        },
        9108: function (e) {
            e.exports = {
                projectSectionMain: "styles_projectSectionMain__0U2bM",
                mt20: "styles_mt20__naeA9",
                projectHeading: "styles_projectHeading__8qRKo",
                projectFirstBox: "styles_projectFirstBox__r3qXe",
                headContainer: "styles_headContainer__1n8C7",
                paraProject: "styles_paraProject__CvOhE"
            }
        },
        1059: function (e) {
            e.exports = {
                double: "Double_double__H0_hO",
                imageContainer: "Double_imageContainer__wdbmX",
                stretchyWrapper: "Double_stretchyWrapper__12RJ8",
                body: "Double_body__Wr7r_",
                pname: "Double_pname__Zw6zV",
                description: "Double_description__lxQo_"
            }
        },
        6499: function (e) {
            e.exports = {
                projectSectionMain: "project_projectSectionMain__YV5HF",
                font: "project_font__Skv89",
                projectHeading: "project_projectHeading__8b84h",
                projectFirstBox: "project_projectFirstBox__nLQq4",
                paraProject: "project_paraProject__Zu17p",
                select: "project_select__909ux",
                projectHomeHeading: "project_projectHomeHeading__tzjuz",
                project: "project_project__kaTQl",
                lineAnim: "project_lineAnim__U9sO6",
                span: "project_span__AjREp",
                projectSubSection: "project_projectSubSection__PoFv1",
                glide: "project_glide__nZub6",
                glideContent: "project_glideContent__RHrpA",
                projectHover: "project_projectHover__lXq1T",
                textContent: "project_textContent__dk7FJ",
                c_project_info: "project_c_project_info__wfX8m",
                projectCta: "project_projectCta__4irpV",
                c_prj_btn: "project_c_prj_btn__XFZUO",
                mobileSpacing: "project_mobileSpacing__RxFiR",
                mt20: "project_mt20__NTiig"
            }
        },
        5152: function (e, t, s) {
            e.exports = s(1342)
        },
        2708: function (e, t, s) {
            "use strict";
            s.d(t, {
                YD: function () {
                    return useInView
                }
            });
            var i = s(7294),
                a = Object.defineProperty,
                r = new Map,
                n = new WeakMap,
                o = 0,
                l = void 0;

            function useInView({
                threshold: e,
                delay: t,
                trackVisibility: s,
                rootMargin: a,
                root: c,
                triggerOnce: d,
                skip: p,
                initialInView: h,
                fallbackInView: m,
                onChange: u
            } = {}) {
                var g;
                let [x, j] = i.useState(null), f = i.useRef(), [v, y] = i.useState({
                    inView: !!h,
                    entry: void 0
                });
                f.current = u, i.useEffect(() => {
                    let i;
                    if (!p && x) return i = function (e, t, s = {}, i = l) {
                        if (void 0 === window.IntersectionObserver && void 0 !== i) {
                            let a = e.getBoundingClientRect();
                            return t(i, {
                                isIntersecting: i,
                                target: e,
                                intersectionRatio: "number" == typeof s.threshold ? s.threshold : 0,
                                time: 0,
                                boundingClientRect: a,
                                intersectionRect: a,
                                rootBounds: a
                            }), () => { }
                        }
                        let {
                            id: a,
                            observer: c,
                            elements: d
                        } = function (e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                var s;
                                return `${t}_${"root" === t ? (s = e.root) ? (n.has(s) || (o += 1, n.set(s, o.toString())), n.get(s)) : "0" : e[t]}`
                            }).toString(),
                                s = r.get(t);
                            if (!s) {
                                let i;
                                let a = new Map,
                                    n = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var s;
                                            let r = t.isIntersecting && i.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = r), null == (s = a.get(t.target)) || s.forEach(e => {
                                                e(r, t)
                                            })
                                        })
                                    }, e);
                                i = n.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), s = {
                                    id: t,
                                    observer: n,
                                    elements: a
                                }, r.set(t, s)
                            }
                            return s
                        }(s), p = d.get(e) || [];
                        return d.has(e) || d.set(e, p), p.push(t), c.observe(e),
                            function () {
                                p.splice(p.indexOf(t), 1), 0 === p.length && (d.delete(e), c.unobserve(e)), 0 === d.size && (c.disconnect(), r.delete(a))
                            }
                    }(x, (e, t) => {
                        y({
                            inView: e,
                            entry: t
                        }), f.current && f.current(e, t), t.isIntersecting && d && i && (i(), i = void 0)
                    }, {
                        root: c,
                        rootMargin: a,
                        threshold: e,
                        trackVisibility: s,
                        delay: t
                    }, m), () => {
                        i && i()
                    }
                }, [Array.isArray(e) ? e.toString() : e, x, c, a, d, p, s, m, t]);
                let b = null == (g = v.entry) ? void 0 : g.target,
                    w = i.useRef();
                x || !b || d || p || w.current === b || (w.current = b, y({
                    inView: !!h,
                    entry: void 0
                }));
                let _ = [j, v.inView, v.entry];
                return _.ref = _[0], _.inView = _[1], _.entry = _[2], _
            }
            i.Component
        }
    },
    function (e) {
        e.O(0, [8802, 990, 3386, 1664, 506, 1132, 5829, 3494, 5268, 9774, 2888, 179], function () {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);