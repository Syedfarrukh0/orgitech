"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3494], {
        6732: function(e, t, r) {
            r.d(t, {
                C: function() {
                    return Cursor
                }
            });
            var o = r(5893),
                n = r(7294),
                s = r(990),
                c = r(5317);
            let l = {};

            function useInstance() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (0, n.useRef)(l);
                return t.current === l && (t.current = "function" == typeof e ? e() : e), t.current
            }
            let Cursor = e => {
                var t;
                let {
                    isGelly: r = !1,
                    animationDuration: l = .5,
                    animationEase: a = c.Au.easeOut,
                    gellyAnimationAmount: i = 50,
                    stickAnimationAmount: u = .09,
                    stickAnimationDuration: d = .7,
                    stickAnimationEase: m = c.Yp.easeOut,
                    magneticAnimationAmount: h = .2,
                    magneticAnimationDuration: p = .7,
                    magneticAnimationEase: f = c.EA.easeOut,
                    colorAnimationEase: g = c.Yp.easeOut,
                    colorAnimationDuration: y = .5,
                    backgroundImageAnimationEase: v,
                    backgroundImageAnimationDuration: E = 0,
                    sizeAnimationEase: x = c.Au.easeOut,
                    sizeAnimationDuration: L = .8,
                    textAnimationEase: S = c.Au.easeOut,
                    textAnimationDuration: T = 1,
                    cursorSize: w = 10,
                    cursorBackgrounColor: b = "#000",
                    exclusionBackgroundColor: k = "#fff",
                    cursorInnerColor: P = "#fff"
                } = e, M = (0, n.useRef)(null), q = (0, n.useRef)(null), H = useInstance(() => ({
                    x: -100,
                    y: 0
                })), C = useInstance(() => ({
                    x: 0,
                    y: 0
                })), A = useInstance();
                (0, n.useLayoutEffect)(() => {
                    A.x = s.p8.quickSetter(M.current, "x", "px"), A.y = s.p8.quickSetter(M.current, "y", "px"), r && (A.r = s.p8.quickSetter(M.current, "rotate", "deg"), A.sx = s.p8.quickSetter(M.current, "scaleX"), A.sy = s.p8.quickSetter(M.current, "scaleY"), A.width = s.p8.quickSetter(M.current, "width", "px"), A.rt = s.p8.quickSetter(q.current, "rotate", "deg"))
                });
                let I = (0, n.useCallback)(() => {
                    let e = function(e, t) {
                            if (e && t) return 180 * Math.atan2(t, e) / Math.PI
                        }(C.x, C.y),
                        t = function(e, t) {
                            if (e && t) return Math.min(Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) / 735, .35)
                        }(C.x, C.y);
                    if (A.x(H.x), A.y(H.y), r && t && e && M.current) {
                        var o;
                        A.width((null === (o = M.current) || void 0 === o ? void 0 : o.style.height) + t * i), A.r(e), A.sx(1 + t), A.sy(1 - t), A.rt(-e)
                    }
                }, [i, r, H.x, H.y, A, C.x, C.y]);
                return (0, n.useLayoutEffect)(() => {
                    let e = document.querySelectorAll("[data-cursor-size]"),
                        t = document.querySelectorAll("[data-cursor-text]"),
                        r = document.querySelectorAll("[data-cursor-color]"),
                        o = document.querySelectorAll("[data-cursor-background-image]"),
                        n = document.querySelectorAll("[data-cursor-magnetic]"),
                        c = document.querySelectorAll("[data-cursor-stick]"),
                        i = document.querySelectorAll("[data-cursor-exclusion]"),
                        P = !1,
                        A = !1,
                        setFromEvent = e => {
                            let t, r;
                            let o = e.target,
                                n = e.clientX,
                                c = e.clientY,
                                i = l,
                                h = a;
                            P && (r = null == (t = o.querySelector(o.dataset.cursorStick)) ? void 0 : t.getBoundingClientRect(), t && r && (c = r.top + t.clientHeight / 2 - (r.top + t.clientHeight / 2 - e.clientY) * u, n = r.left + t.clientWidth / 2 - (r.left + t.clientWidth / 2 - e.clientX) * u, i = d, h = m)), s.p8.set(H, {});
                            let p = s.p8.quickTo(H, "x", {
                                    duration: i,
                                    ease: h,
                                    onUpdate: () => {
                                        H.x && (C.x = n - H.x)
                                    }
                                }),
                                f = s.p8.quickTo(H, "y", {
                                    duration: i,
                                    ease: h,
                                    onUpdate: () => {
                                        H.y && (C.y = c - H.y)
                                    }
                                });
                            p(n), f(c), I()
                        };
                    return window.addEventListener("mousemove", e => {
                        setFromEvent(e)
                    }), document.body.addEventListener("mouseenter", e => {
                        e.target instanceof HTMLElement && M.current && s.p8.to("#".concat(M.current.id), {
                            opacity: 1,
                            duration: l,
                            ease: a
                        })
                    }), document.body.addEventListener("mouseleave", e => {
                        e.target instanceof HTMLElement && M.current && s.p8.to("#".concat(M.current.id), {
                            opacity: 0,
                            duration: l,
                            ease: a
                        })
                    }), e.forEach(e => {
                        e.addEventListener("mouseenter", e => {
                            e.target instanceof HTMLElement && M.current && s.p8.to("#".concat(M.current.id), {
                                width: "".concat(e.target.dataset.cursorSize),
                                height: "".concat(e.target.dataset.cursorSize),
                                duration: L,
                                ease: x
                            })
                        })
                    }), e.forEach(e => {
                        e.addEventListener("mouseleave", e => {
                            e.target instanceof HTMLElement && M.current && s.p8.to("#".concat(M.current.id), {
                                width: "".concat(w),
                                height: "".concat(w),
                                duration: L,
                                ease: x
                            })
                        })
                    }), t.forEach(e => {
                        e.addEventListener("mouseenter", e => {
                            e.target instanceof HTMLElement && q.current && (q.current.textContent = "".concat(e.target.dataset.cursorText), s.p8.to("#".concat(q.current.id), {
                                scale: 1,
                                opacity: 1,
                                duration: T,
                                ease: S
                            }))
                        })
                    }), t.forEach(e => {
                        e.addEventListener("mouseleave", e => {
                            e.target instanceof HTMLElement && q.current && (q.current.textContent = "", s.p8.to("#".concat(q.current.id), {
                                scale: 0,
                                opacity: 0,
                                duration: T,
                                ease: S
                            }))
                        })
                    }), r.forEach(e => {
                        e.addEventListener("mouseenter", e => {
                            e.target instanceof HTMLElement && M.current && s.p8.to("#".concat(M.current.id), {
                                backgroundColor: "".concat(e.target.dataset.cursorColor),
                                duration: y,
                                ease: g
                            })
                        })
                    }), r.forEach(e => {
                        e.addEventListener("mouseleave", e => {
                            e.target instanceof HTMLElement && M.current && s.p8.to("#".concat(M.current.id), {
                                backgroundColor: "".concat(b),
                                duration: y,
                                ease: g
                            })
                        })
                    }), i.forEach(e => {
                        e.addEventListener("mouseenter", e => {
                            e.target instanceof HTMLElement && M.current && (M.current.style.mixBlendMode = "exclusion", M.current.style.background = "".concat(k))
                        })
                    }), i.forEach(e => {
                        e.addEventListener("mouseleave", e => {
                            e.target instanceof HTMLElement && M.current && (M.current.style.mixBlendMode = "", M.current.style.background = "".concat(b))
                        })
                    }), o.forEach(e => {
                        e.addEventListener("mouseenter", e => {
                            e.target instanceof HTMLElement && q.current && (M.current && ("exclusion" === M.current.style.mixBlendMode && (A = !0), M.current.style.mixBlendMode = "exclusion", M.current.style.backgroundColor = "transform"), s.p8.to("#".concat(q.current.id), {
                                scale: 1,
                                opacity: 1,
                                background: 'url("'.concat(e.target.dataset.cursorBackgroundImage, '")'),
                                filter: "invert(1)",
                                duration: E,
                                ease: v
                            }))
                        })
                    }), o.forEach(e => {
                        e.addEventListener("mouseleave", e => {
                            e.target instanceof HTMLElement && q.current && (M.current && (A ? M.current.style.backgroundColor = "".concat(k) : (M.current.style.mixBlendMode = "", M.current.style.backgroundColor = "".concat(b))), s.p8.to("#".concat(q.current.id), {
                                scale: 0,
                                opacity: 0,
                                background: "",
                                filter: "none",
                                duration: E
                            }))
                        })
                    }), n.forEach(e => {
                        e.addEventListener("mousemove", e => {
                            let t = e.target;
                            s.p8.to(t, {
                                x: (e.clientX - (t.offsetLeft - window.pageXOffset) - t.clientWidth / 2) * h,
                                y: (e.clientY - (t.offsetTop - window.pageYOffset) - t.clientHeight / 2) * h,
                                duration: p,
                                ease: f
                            })
                        })
                    }), n.forEach(e => {
                        e.addEventListener("mouseleave", e => {
                            let t = e.target;
                            s.p8.to(t, {
                                x: 0,
                                y: 0,
                                duration: p,
                                ease: f
                            })
                        })
                    }), c.forEach(e => {
                        e.addEventListener("mouseenter", () => P = !0)
                    }), c.forEach(e => {
                        e.addEventListener("mouseleave", () => P = !1)
                    }), () => {
                        window.removeEventListener("mousemove", setFromEvent), document.body.removeEventListener("mouseenter", () => {}), document.body.removeEventListener("mouseleave", () => {}), e.forEach(e => {
                            e.removeEventListener("mouseenter", () => {}), e.removeEventListener("mouseleave", () => {})
                        }), t.forEach(e => {
                            e.removeEventListener("mouseenter", () => {}), e.removeEventListener("mouseleave", () => {})
                        }), r.forEach(e => {
                            e.removeEventListener("mouseenter", () => {}), e.removeEventListener("mouseleave", () => {})
                        }), i.forEach(e => {
                            e.removeEventListener("mouseenter", () => {}), e.removeEventListener("mouseleave", () => {})
                        }), o.forEach(e => {
                            e.removeEventListener("mouseenter", () => {}), e.removeEventListener("mouseleave", () => {})
                        }), n.forEach(e => {
                            e.removeEventListener("mousemove", () => {}), e.removeEventListener("mouseleave", () => {})
                        }), c.forEach(e => {
                            e.removeEventListener("mouseenter", () => {}), e.removeEventListener("mouseleave", () => {})
                        })
                    }
                }), (0, n.useLayoutEffect)(() => (!t && I && s.p8.ticker.add(I), () => {
                    s.p8.ticker.remove(I)
                }), [I, t]), (0, o.jsx)("div", {
                    ref: M,
                    id: "c-cursor",
                    className: "c-cursor",
                    style: {
                        width: w,
                        height: w,
                        background: b
                    },
                    children: (0, o.jsx)("div", {
                        style: {
                            color: P
                        },
                        ref: q,
                        id: "c-cursorInner",
                        className: "c-cursor__inner"
                    })
                })
            }
        },
        6053: function(e, t, r) {
            var o = r(7294),
                n = r(1163),
                s = r(2946),
                c = r(6546),
                l = r(990);
            l.ZP.registerPlugin(c.ScrollTrigger);
            let ScrollTriggerPlugin = class ScrollTriggerPlugin extends s.Z.ScrollbarPlugin {
                setProxy() {
                    let e = this.scrollbar;
                    c.ScrollTrigger.scrollerProxy(document.body, {
                        scrollTop(t) {
                            return arguments.length && (e.scrollTop = t), e.scrollTop
                        },
                        getBoundingClientRect: () => ({
                            top: 0,
                            left: 0,
                            width: window.innerWidth,
                            height: window.innerHeight
                        }),
                        pinType: "transform"
                    }), e.addListener(c.ScrollTrigger.update)
                }
                constructor(e, t) {
                    super(e, t), this.setProxy()
                }
            };
            ScrollTriggerPlugin.pluginName = "ScrollTriggerPlugin", ScrollTriggerPlugin.pluginName = "ScrollTriggerPlugin";
            let JellyMotion = class JellyMotion {
                getScrollPos() {
                    return this.options.scrollPos()
                }
                pause() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    this.paused = e
                }
                init() {
                    this.observer = new IntersectionObserver(e => {
                        e[0].isIntersecting ? this.startLoop() : this.stopLoop()
                    }), this.observer.observe(this.el)
                }
                startLoop() {
                    this.y = this.getScrollPos(), this.loop()
                }
                stopLoop() {
                    cancelAnimationFrame(this.frame), this.paused || l.ZP.set(this.el, {
                        skewY: 0
                    })
                }
                loop() {
                    let e = this.getScrollPos(),
                        t = e - this.y,
                        r = Math.min(Math.max(this.options.min, t * this.options.intensity), this.options.max);
                    this.paused ? this.animationPaused || (l.ZP.to(this.el, {
                        skewY: 0,
                        force3D: !0,
                        duration: this.options.speed
                    }), this.animationPaused = !0) : (l.ZP.set(this.el, {
                        skewY: r,
                        force3D: !0
                    }), this.animationPaused = !1), this.y = e, this.frame = requestAnimationFrame(this.loop.bind(this))
                }
                destroy() {
                    this.observer.disconnect(), this.pause(!1), this.stopLoop()
                }
                constructor(e, t) {
                    this.el = e, this.paused = !1, this.options = Object.assign({}, {
                        intensity: .3,
                        speed: 1,
                        min: -5,
                        max: 5,
                        scrollPos: () => window.pageYOffset
                    }, t), this.init()
                }
            };
            s.Z.use(ScrollTriggerPlugin), t.Z = e => {
                let {
                    onScroll: t
                } = e, r = (0, n.useRouter)(), l = (0, o.useRef)(null), a = (0, o.useRef)(null);
                let SmoothTouchScrollPlugin = class SmoothTouchScrollPlugin extends s.c {
                    transformDelta(e, t) {
                        return "touchmove" === t.type && (this.scrollbar.options.damping = .5), e
                    }
                };
                SmoothTouchScrollPlugin.pluginName = "smoothTouchScroll";
                let SmoothTouchendScrollPlugin = class SmoothTouchendScrollPlugin extends s.c {
                    transformDelta(e, t) {
                        return "touchend" === t.type && (this.scrollbar.options.damping = .1), e
                    }
                };
                SmoothTouchendScrollPlugin.pluginName = "smoothTouchendScroll";
                let AnchorPlugin = class AnchorPlugin extends s.c {
                    onInit() {
                        this.jumpToHash(window.location.hash), window.addEventListener("hashchange", this.onHashChange), this.scrollbar.contentEl.addEventListener("click", this.onClick)
                    }
                    onDestory() {
                        window.removeEventListener("hashchange", this.onHashChange), this.scrollbar.contentEl.removeEventListener("click", this.onClick)
                    }
                    constructor(...e) {
                        super(...e), this.onHashChange = () => {
                            this.jumpToHash(window.location.hash)
                        }, this.onClick = e => {
                            let {
                                target: t
                            } = e;
                            if ("A" !== t.tagName) return;
                            let r = t.getAttribute("href");
                            r && "#" === r.charAt(0) && this.jumpToHash(r)
                        }, this.jumpToHash = e => {
                            console.log("hash:", e);
                            let {
                                scrollbar: t
                            } = this;
                            e && (console.log("scrollTop:", t.containerEl.scrollTop), t.containerEl.scrollTop = 0, t.scrollIntoView(document.querySelector(e)))
                        }
                    }
                };
                AnchorPlugin.pluginName = "anchor", (0, o.useEffect)(() => {
                    let e = document.body;
                    s.Z.use(SmoothTouchendScrollPlugin, SmoothTouchScrollPlugin, AnchorPlugin);
                    let r = s.Z.init(e, {
                        damping: .04,
                        thumbMinSize: 5,
                        renderByPixels: !0,
                        delegateTo: document,
                        alwaysShowTracks: !1,
                        continuousScrolling: !0
                    });
                    a.current = r;
                    let o = document.getElementById("c-cursor");
                    r.addListener(c.ScrollTrigger.update), c.ScrollTrigger.defaults({
                        scroller: document.body
                    }), (e => {
                        let t = [],
                            r = document.querySelectorAll("[data-jelly]");
                        for (let o = 0; o < r.length; o++) {
                            let n = r[o],
                                s = Object.assign({}, e, n.dataset.jelly ? JSON.parse(n.dataset.jelly) : {}),
                                c = new JellyMotion(n, s);
                            t.push(c)
                        }
                    })({
                        scrollPos: () => r.offset.y
                    }), r.addListener(e => {
                        let {
                            offset: t
                        } = e;
                        l.current = t.y + "px", o.style.top = t.y + "px", o.style.left = t.x + "px"
                    });
                    let n = document.getElementById("header-fixed");
                    n && r.addListener(function(e) {
                        var t = e.offset;
                        n.style.top = t.y + "px", n.style.left = t.x + "px"
                    });
                    let i = document.getElementById("navbar");
                    i && r.addListener(function(e) {
                        var t = e.offset;
                        i.style.top = t.y + "px", i.style.left = t.x + "px"
                    });
                    let u = document.querySelector(".nav");
                    u && r.addListener(function(e) {
                        var t = e.offset;
                        u.style.top = t.y + "px", u.style.left = t.x + "px"
                    });
                    let d = document.querySelector(".PopUpmodal"),
                        m = document.querySelector("#popUpButton");
                    d && r.addListener(function(e) {
                        var t = e.offset;
                        d.style.top = t.y + "px", d.style.right = t.x + "px"
                    }), m && r.addListener(function(e) {
                        var t = e.offset;
                        m.style.top = t.y + "px", m.style.left = t.x + "px"
                    });
                    let h = document.querySelector(".progress-bar-container");
                    h && r.addListener(function(e) {
                        var t = e.offset;
                        h.style.top = t.y + "px", h.style.left = t.x + "px"
                    });
                    let p = document.getElementById("loader");
                    p && r.addListener(function(e) {
                        var t = e.offset;
                        p.style.top = t.y + "px", p.style.left = t.x + "px"
                    });
                    let f = document.getElementById("glossary-modal");
                    f && r.addListener(function(e) {
                        var t = e.offset;
                        f.style.top = t.y + "px", f.style.left = t.x + "px"
                    });
                    let g = document.getElementById("main-logo");
                    g && r.addListener(function(e) {
                        var t = e.offset;
                        g.style.top = t.y + "px", g.style.left = t.x + "px"
                    });
                    let y = document.getElementById("modal-video-wrapper");
                    y && r.addListener(function(e) {
                        var t = e.offset;
                        y.style.top = t.y + "px", y.style.left = t.x + "px"
                    }), t && r.addListener(t);
                    let v = document.getElementById("award-fixed");
                    return v && r.addListener(function(e) {
                        var t = e.offset;
                        v.style.top = t.y + "px", v.style.right = t.x + "px"
                    }), () => {
                        t && r.removeListener(t)
                    }
                }, [t, r]), (0, o.useEffect)(() => {
                    a.current && a.current.scrollTo(0, 0)
                }, [r, a])
            }
        }
    }
]);