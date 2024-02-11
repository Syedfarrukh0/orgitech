(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6141], {
        9260: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/get-in-touch", function() {
                return t(5049)
            }])
        },
        8568: function(e, s, t) {
            "use strict";
            var a = t(5893),
                i = t(7294),
                r = t(990);
            s.Z = e => {
                let {
                    serviceMarquee: s
                } = e;

                function horizontalLoop(e, s) {
                    e = r.ZP.utils.toArray(e), s = s || {};
                    let t = r.ZP.timeline({
                            repeat: s.repeat,
                            paused: s.paused,
                            defaults: {
                                ease: "none"
                            },
                            onReverseComplete: () => t.totalTime(t.rawTime() + 100 * t.duration())
                        }),
                        a = e.length,
                        i = e[0].offsetLeft,
                        n = [],
                        o = [],
                        c = [],
                        l = 0,
                        d = 100 * (s.speed || 1),
                        m = !1 === s.snap ? e => e : r.ZP.utils.snap(s.snap || 1),
                        h, g, p, u, x, v;
                    for (r.ZP.set(e, {
                            xPercent: (e, s) => {
                                let t = o[e] = parseFloat(r.ZP.getProperty(s, "width", "px"));
                                return c[e] = m(parseFloat(r.ZP.getProperty(s, "x", "px")) / t * 100 + r.ZP.getProperty(s, "xPercent")), c[e]
                            }
                        }), r.ZP.set(e, {
                            x: 0
                        }), h = e[a - 1].offsetLeft + c[a - 1] / 100 * o[a - 1] - i + e[a - 1].offsetWidth * r.ZP.getProperty(e[a - 1], "scaleX") + (parseFloat(s.paddingRight) || 0), v = 0; v < a; v++) x = e[v], g = c[v] / 100 * o[v], u = (p = x.offsetLeft + g - i) + o[v] * r.ZP.getProperty(x, "scaleX"), t.to(x, {
                        xPercent: m((g - u) / o[v] * 100),
                        duration: u / d
                    }, 0).fromTo(x, {
                        xPercent: m((g - u + h) / o[v] * 100)
                    }, {
                        xPercent: c[v],
                        duration: (g - u + h - g) / d,
                        immediateRender: !1
                    }, u / d).add("label" + v, p / d), n[v] = p / d;

                    function toIndex(e, s) {
                        s = s || {}, Math.abs(e - l) > a / 2 && (e += e > l ? -a : a);
                        let i = r.ZP.utils.wrap(0, a, e),
                            o = n[i];
                        return o > t.time() != e > l && (s.modifiers = {
                            time: r.ZP.utils.wrap(0, t.duration())
                        }, o += t.duration() * (e > l ? 1 : -1)), l = i, s.overwrite = !0, t.tweenTo(o, s)
                    }
                    return t.next = e => toIndex(l + 1, e), t.previous = e => toIndex(l - 1, e), t.current = () => l, t.toIndex = (e, s) => toIndex(e, s), t.times = n, s.reversed && (t.vars.onReverseComplete(), t.reverse()), t
                }
                return (0, i.useEffect)(() => {
                    r.ZP.utils.toArray(".services-catalog-row").forEach((e, s) => {
                        let t = e.querySelectorAll(".services-catalog-row-item");
                        horizontalLoop(t, {
                            repeat: -1,
                            speed: .7 + .1 * s,
                            reversed: !0,
                            paddingRight: parseFloat(r.ZP.getProperty(t[0], "marginRight", "px"))
                        })
                    }), r.ZP.utils.toArray(".services-catalog-row").forEach((e, s) => {
                        let t = e.querySelectorAll(".services-catalog-row-item");
                        horizontalLoop(t, {
                            repeat: -1,
                            speed: .7 + .1 * s,
                            reversed: !0,
                            paddingRight: parseFloat(r.ZP.getProperty(t[0], "marginRight", "px"))
                        })
                    })
                }, []), (0, i.useEffect)(() => {
                    let e = r.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".services-catalog",
                                start: "-750 top"
                            }
                        }),
                        s = document.querySelectorAll(".service-catalog-anim");
                    e.fromTo(s, {
                        opacity: 0,
                        y: 300
                    }, {
                        y: 0,
                        duration: 1,
                        opacity: 1
                    })
                }), (0, a.jsxs)("div", {
                    className: "services-catalog service-catalog-anim",
                    children: [(0, a.jsxs)("div", {
                        className: "services-catalog-title",
                        children: ["full catalogue of our services. ", (0, a.jsx)("span", {
                            className: "emoji-dark",
                            children: "\uD83D\uDC68‍\uD83D\uDCBB"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "services-catalog-row margin-top-medium ",
                        children: [(0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Digital Advisory and Consulting"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Consumer Research"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Integrated Digital Marketing Plan (D.M.P.)"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Insights & Target Market Analysis"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "User Experience Development"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Customer Experience Strategy"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Digital Capabilities Development"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Persona Design & Customer Segmentation"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Competitive Analysis & Industry Insights"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Brand & Content Strategy"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Digital Marketing"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Website Performance Audit"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "services-catalog-row margin-top-xs",
                        style: {
                            marginTop: "2vw"
                        },
                        children: [(0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "User Interface Design"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "User Experience Design"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Responsive Web Design"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Mobile App Design"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Digital Interface Design"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Design Systems Creation"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Experience Mapping"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "User Flow Mapping"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Wireframing & Prototyping"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Illustrations & Animations"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Visual Designs & UI Kits."
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "services-catalog-row margin-top-xs",
                        style: {
                            marginTop: "3.5vw"
                        },
                        children: [(0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Front-End Development"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Native & Hybrid Mobile Application Development"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Progressive Web Applications"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Database Design & Management"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Cloud Infrastructure Services"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Testing & Automation"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "services-catalog-row margin-top-xs",
                        style: {
                            marginTop: "1.5vw"
                        },
                        children: [(0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Social Media Management"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Content Creation & Curation"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Search Engine Optimisation"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Influencer Management"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Auction Media Management"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "services-catalog-row margin-top-xs",
                        style: {
                            marginTop: "3.5vw"
                        },
                        children: [(0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Online Reputation Management"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Media Planning & Buying"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item",
                            children: "Marketing Automation"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Email Marketing"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Conversion Rate Optimisation"
                        }), (0, a.jsx)("div", {
                            className: "services-catalog-row-item half-opacity",
                            children: "Website & SEO Analysis"
                        })]
                    })]
                })
            }
        },
        3047: function(e, s, t) {
            "use strict";
            var a = t(5893),
                i = t(7294),
                r = t(990);
            s.Z = e => {
                let {
                    text: s
                } = e;
                return (0, i.useEffect)(() => {
                    let e = document.querySelectorAll(".mainLoaderBar"),
                        s = r.ZP.timeline(),
                        t = r.ZP.context(() => {
                            s.from(".loader-wrap-heading p", {
                                delay: .5,
                                y: 200,
                                skewY: 10,
                                duration: 1
                            }).to(".loader-wrap-heading p", {
                                delay: .5,
                                y: -200,
                                skewY: 10,
                                duration: 1
                            }).to(e, {
                                height: 0,
                                duration: .6,
                                delay: -.5,
                                ease: "power2.easeIn",
                                stagger: .1
                            }).to("#loader", {
                                y: "-1500",
                                opacity: 0,
                                ease: "power2.inOut"
                            })
                        });
                    return () => t.revert()
                }, []), (0, a.jsxs)("div", {
                    className: "loader-wrap",
                    id: "loader",
                    children: [(0, a.jsxs)("div", {
                        className: "mainLoaderBg",
                        children: [(0, a.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        }), (0, a.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        }), (0, a.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        }), (0, a.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        }), (0, a.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "loader-wrap-heading",
                        children: (0, a.jsx)("span", {
                            children: (0, a.jsx)("p", {
                                children: s
                            })
                        })
                    })]
                })
            }
        },
        5049: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return contact
                }
            });
            var a = t(5893),
                i = t(7294),
                r = t(990),
                n = t(6546),
                o = t.n(n);
            t(5538);
            var c = t(6732),
                l = t(6053),
                d = t(2962),
                m = t(1132),
                h = t(4285),
                g = t(33);
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
                    let e = new r.ZP.timeline({
                        paused: !0
                    });
                    for (let s = 0; s < this.items.length; s++) {
                        let t = this.items[s],
                            a = new r.ZP.timeline({
                                repeat: this.options.repeats
                            }),
                            i = this.options.offset();
                        a.set(t, {
                            willChange: "transform"
                        }), this.options.fadeInDuration && a.fromTo(t, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: this.options.fadeInEase,
                            duration: this.options.fadeInDuration,
                            lazy: !1
                        }, 0), a.fromTo(t, {
                            y: this.options.yStart,
                            x: this.options.xStart
                        }, {
                            y: this.options.yEnd,
                            x: this.options.xEnd,
                            ease: this.options.ease,
                            duration: this.options.duration
                        }, 0), this.options.fadeOutDuration && a.to(t, {
                            opacity: 0,
                            ease: this.options.fadeOutEase,
                            duration: this.options.fadeOutDuration,
                            lazy: !1
                        }, "-=" + this.options.fadeOutDuration), e.add(a, i)
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
                        timeScale: 1,
                        initialSeek: 3e3,
                        fadeOutDuration: 1,
                        fadeOutEase: "power4.out",
                        yStart: () => this.container.offsetHeight,
                        yEnd: (e, s) => -s.offsetHeight,
                        yStart: "250",
                        yEnd: "-550",
                        ease: "none",
                        duration: () => r.ZP.utils.random(5, 10),
                        offset: () => r.ZP.utils.random(0, 20)
                    }, e), this.timeScale = this.options.timeScale, this.init()
                }
            };

            function partText() {
                return (0, i.useEffect)(() => {
                    let e = document.querySelector(".cb-particles");
                    new Particles({
                        container: e,
                        itemsSelector: ".cb-particles-item"
                    })
                }, []), (0, a.jsx)("div", {
                    className: "cb-tabs-content",
                    children: (0, a.jsx)("section", {
                        className: "cb-demo",
                        children: (0, a.jsxs)("div", {
                            className: "cb-particles",
                            children: [(0, a.jsx)("span", {
                                className: "cb-particles-item -text -v1 -s4",
                                children: "Hello"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v2 -s4",
                                children: "Namaste"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v3 -s4",
                                children: "Hola"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v4 -s4",
                                children: "Bonjour"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v5 -s4",
                                children: "Nǐn hǎo"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v6 -s4",
                                children: "Ol\xe1"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v7 -s4",
                                children: "Shalom"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v8 -s4",
                                children: "Ciao"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v9 -s4",
                                children: "Aloha"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v10 -s4",
                                children: "Hei"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v11 -s4",
                                children: "Hall\xe1"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v12 -s4",
                                children: "Salve"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v13 -s4",
                                children: "Xin Ch\xe0o"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v14 -s4",
                                children: "Salaam"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item -text -v15 -s4",
                                children: "Zdraveĭte"
                            })]
                        })
                    })
                })
            }

            function Aerosol() {
                return (0, i.useEffect)(() => {
                    document.body.addEventListener("mousemove", e => {
                        let s = e.clientX,
                            t = e.clientY;
                        r.ZP.set(".c-cursor", {
                            x: s,
                            y: t
                        }), r.ZP.to(".shape", {
                            x: s,
                            y: t,
                            stagger: -.1
                        })
                    })
                }, []), (0, i.useEffect)(() => {
                    let e = r.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".aero-hover",
                                start: "-200 top"
                            }
                        }),
                        s = document.querySelectorAll(".aero-demo p");
                    e.fromTo(s, {
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
                }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "aero-hover",
                        children: [(0, a.jsxs)("div", {
                            className: "text-container aero-demo",
                            children: [(0, a.jsxs)("p", {
                                className: "aero-desk-1",
                                children: ["you're one call away", (0, a.jsx)("br", {}), "from being awesome"]
                            }), (0, a.jsxs)("p", {
                                className: "aero-mob-1",
                                children: ["you're one call", (0, a.jsx)("br", {}), " away from", (0, a.jsx)("br", {}), "being awesome"]
                            }), (0, a.jsx)(partText, {})]
                        }), (0, a.jsxs)("div", {
                            className: "aerosol-main",
                            children: [(0, a.jsx)("div", {
                                className: "c-cursor"
                            }), (0, a.jsxs)("div", {
                                className: "shapes",
                                children: [(0, a.jsx)("div", {
                                    className: "shape shape-1"
                                }), (0, a.jsx)("div", {
                                    className: "shape shape-2"
                                }), (0, a.jsx)("div", {
                                    className: "shape shape-3"
                                })]
                            })]
                        })]
                    })
                })
            }
            r.ZP.registerPlugin(o());
            var p = t(8568),
                u = t(793),
                x = t(1866),
                v = t(4e3),
                j = t(8049),
                f = t(6479),
                b = t(4966),
                N = t(7169),
                y = t(2209);
            let sendContactForm = async e => fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(e),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }).then(e => {
                if (!e.ok) throw Error("Failed to send message");
                return e.json()
            }), w = {
                isLoading: !1,
                error: "",
                values: {
                    name: "",
                    email: "",
                    number: "",
                    message: ""
                }
            };

            function Home() {
                let [e, s] = (0, i.useState)(w), [t, r] = (0, i.useState)({}), [n, o] = (0, i.useState)(!1), onBlur = e => {
                    let {
                        target: s
                    } = e;
                    return r(e => ({
                        ...e,
                        [s.name]: !0
                    }))
                }, {
                    values: c,
                    isLoading: l,
                    error: d
                } = e, handleChange = e => {
                    let {
                        target: t
                    } = e;
                    return s(e => ({
                        ...e,
                        values: {
                            ...e.values,
                            [t.name]: [t.value]
                        }
                    }))
                }, onSubmit = async () => {
                    s(e => ({
                        ...e,
                        isLoading: !0
                    }));
                    try {
                        await sendContactForm(c), r({}), s(w), o(!0)
                    } catch (e) {
                        s(s => ({
                            ...s,
                            isLoading: !1,
                            error: e.message
                        }))
                    }
                };
                return (0, i.useEffect)(() => {
                    n && setTimeout(() => {
                        o(!1)
                    }, 2e3)
                }, [n]), (0, a.jsxs)(x.W, {
                    style: {
                        paddingLeft: "3vw"
                    },
                    mt: 12,
                    children: [d && (0, a.jsx)(v.x, {
                        color: "red",
                        my: 4,
                        fontSize: "xl",
                        style: {
                            marginBottom: "2vw"
                        },
                        children: d
                    }), (0, a.jsxs)(j.NI, {
                        isRequired: !0,
                        isInvalid: t.name && !c.name,
                        mb: 5,
                        className: "form-box",
                        children: [(0, a.jsx)(f.I, {
                            type: "text",
                            name: "name",
                            errorBorderColor: "red",
                            value: c.name,
                            onChange: handleChange,
                            onBlur: onBlur,
                            placeholder: "Name*",
                            className: "form-control"
                        }), (0, a.jsx)(b.J1, {
                            children: "Name is Required"
                        })]
                    }), (0, a.jsxs)(j.NI, {
                        isRequired: !0,
                        mb: 5,
                        isInvalid: t.email && !c.email,
                        className: "form-box",
                        children: [(0, a.jsx)(f.I, {
                            type: "email",
                            name: "email",
                            value: c.email,
                            onChange: handleChange,
                            onBlur: onBlur,
                            placeholder: "Email*",
                            className: "form-control",
                            required: !0
                        }), (0, a.jsx)(b.J1, {
                            children: "Email is Required"
                        })]
                    }), (0, a.jsxs)(j.NI, {
                        isRequired: !0,
                        mb: 5,
                        isInvalid: t.number && !c.number,
                        className: "form-box",
                        children: [(0, a.jsx)(f.I, {
                            type: "text",
                            name: "number",
                            value: c.number,
                            onChange: handleChange,
                            onBlur: onBlur,
                            placeholder: "Phone Number*",
                            className: "form-control"
                        }), (0, a.jsx)(b.J1, {
                            children: "Phone Number is Required"
                        })]
                    }), (0, a.jsxs)(j.NI, {
                        isRequired: !0,
                        mb: 5,
                        isInvalid: t.message && !c.message,
                        className: "form-box",
                        children: [(0, a.jsx)(N.g, {
                            type: "text",
                            name: "message",
                            rows: 4,
                            value: c.message,
                            onChange: handleChange,
                            onBlur: onBlur,
                            placeholder: "Message*",
                            className: "form-control"
                        }), (0, a.jsx)(b.J1, {
                            children: "Required"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "submit-btn-box",
                        children: [(0, a.jsx)(y.z, {
                            variant: "outline",
                            colorScheme: "blue",
                            disabled: !c.name || !c.email || !c.subject || !c.message,
                            onClick: onSubmit,
                            isLoading: l,
                            className: "submit-button mr-1 contact-form-submit-btn",
                            "data-cursor-text": "Sent!",
                            "data-cursor-size": "80px",
                            "data-cursor-color": "#000",
                            children: "Submit"
                        }), n && (0, a.jsx)("div", {
                            className: "alert ".concat(n ? "" : "hide"),
                            children: (0, a.jsxs)("p", {
                                children: ["Message has been sent ", (0, a.jsx)("br", {}), " successfully."]
                            })
                        })]
                    })]
                })
            }
            var P = t(3047),
                E = t(9008),
                S = t.n(E);

            function contact() {
                return (0, i.useRef)(null), (0, i.useEffect)(() => {
                    let e = r.ZP.timeline();
                    return e.fromTo("#contact-anim", {
                        rotationX: -80,
                        opacity: 0,
                        translateY: 300,
                        transformPerspective: "1000",
                        transformOrigin: "top center"
                    }, {
                        delay: 3,
                        duration: 1.3,
                        rotationX: 0,
                        opacity: 1,
                        translateY: 0,
                        stagger: .2
                    }), () => e.kill()
                }, []), (0, i.useEffect)(() => {
                    let e = r.ZP.context(() => {
                        r.ZP.timeline({
                            scrollTrigger: ".add__section",
                            pin: !0,
                            start: "top center",
                            scrub: !0
                        }).to(".add__content", {
                            opacity: 1,
                            duration: 1,
                            stagger: .5
                        })
                    });
                    return () => e.revert()
                }, []), (0, i.useEffect)(() => {
                    let e = r.ZP.context(() => {
                        document.getElementById("main-contact-container");
                        let e = document.getElementById("left-section"),
                            s = document.getElementById("right-section");
                        o().create({
                            trigger: e,
                            start: "top 30%",
                            endTrigger: s,
                            end: "bottom 92%",
                            invalidateOnRefresh: !0,
                            pin: e,
                            markers: !1
                        })
                    });
                    return () => e.revert()
                }), globalThis.innerWidth > 1024 && (0, i.useEffect)(() => {
                    let e = r.ZP.context(() => {
                        r.ZP.to(".img", {
                            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            duration: 4,
                            ease: "none",
                            scrollTrigger: {
                                trigger: ".img-container",
                                start: "top 75%",
                                end: "center center",
                                scrub: .5
                            }
                        })
                    });
                    return () => e.revert()
                }), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.PB, {
                        title: "We Elevate Your Digital Presence | Contact Enigma",
                        description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
                        openGraph: {
                            url: "https://weareenigma.com/get-in-touch",
                            title: "We Elevate Your Digital Presence | Contact Enigma",
                            description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
                            images: [{
                                url: "https://weareenigma.com/assets/featured-images/contact.png",
                                width: 1200,
                                height: 630,
                                alt: "Contact Us Feature Image",
                                type: "image/png"
                            }],
                            siteName: "Enigma Digital"
                        },
                        additionalMetaTags: [{
                            name: "twitter:title",
                            content: "We Elevate Your Digital Presence | Contact Enigma"
                        }, {
                            name: "twitter:description",
                            content: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence."
                        }, {
                            name: "twitter:image",
                            content: "https://weareenigma.com/assets/featured-images/contact.png"
                        }]
                    }), (0, a.jsxs)(S(), {
                        children: [(0, a.jsx)("link", {
                            rel: "canonical",
                            href: "https://weareenigma.com/get-in-touch"
                        }), (0, a.jsx)("link", {
                            rel: "alternate",
                            href: "https://weareenigma.com/get-in-touch",
                            hreflang: "x-default"
                        }), (0, a.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "WebPage",
                                    mainEntityOfPage: {
                                        "@type": "WebPage",
                                        "@id": "https://weareenigma.com/get-in-touch"
                                    },
                                    name: "Contact",
                                    description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
                                    datePublished: "2023-01-01T12:00:00+05:30",
                                    dateModified: "2023-11-17T12:00:00+05:30",
                                    publisher: {
                                        "@type": "Organization",
                                        name: "Enigma Digital",
                                        logo: {
                                            "@type": "ImageObject",
                                            url: "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg"
                                        }
                                    }
                                })
                            }
                        })]
                    }), (0, a.jsx)(l.Z, {}), (0, a.jsx)(c.C, {
                        isGelly: !0
                    }), (0, a.jsx)(P.Z, {
                        text: "Hi, There! Let's Talk!?"
                    }), (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("main", {
                            children: [(0, a.jsx)(h.Z, {}), (0, a.jsx)("section", {
                                className: "contact-hero",
                                children: (0, a.jsxs)("div", {
                                    className: "contact-hero-content",
                                    "data-cursor-size": "10px",
                                    "data-cursor-text": "",
                                    children: [(0, a.jsxs)("div", {
                                        className: "first-box-contact",
                                        children: [(0, a.jsx)("div", {
                                            className: "lets",
                                            id: "contact-anim",
                                            "data-cursor-magnetic": !0,
                                            "data-cursor-background-image": "/assets/new-gif/16.webp",
                                            "data-cursor-size": "300px",
                                            "data-cursor-color": "#000",
                                            children: (0, a.jsx)("h1", {
                                                children: "Let's"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "work",
                                            id: "contact-anim",
                                            "data-cursor-magnetic": !0,
                                            "data-cursor-background-image": "/assets/gif/5.gif",
                                            "data-cursor-size": "300px",
                                            "data-cursor-color": "#000",
                                            children: (0, a.jsx)("h1", {
                                                children: "Work"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "contact-para",
                                            id: "contact-anim",
                                            children: ["Old ways won't open new doors. If you have an interesting idea, ", (0, a.jsx)("strong", {
                                                children: "Let's Build the Future Together!"
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "second-box-contact",
                                        children: [(0, a.jsx)("div", {
                                            className: "together",
                                            id: "contact-anim",
                                            "data-cursor-magnetic": !0,
                                            "data-cursor-background-image": "/assets/gif/17.webp",
                                            "data-cursor-size": "300px",
                                            "data-cursor-color": "#000",
                                            children: (0, a.jsx)("h1", {
                                                children: "Together"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "contact-para contact-mobile-para-hero",
                                            id: "contact-anim",
                                            "data-cursor-color": "#95bf32",
                                            "data-cursor-size": "100px",
                                            "data-cursor-exclusion": !0,
                                            children: ["Old ways won't  new doors. If you have an interesting idea, ", (0, a.jsx)("span", {
                                                className: "bold-600",
                                                children: "Let's Build the Future Together!"
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "img-container",
                                children: (0, a.jsx)(m.E.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 100
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 3.5
                                    },
                                    children: (0, a.jsx)("div", {
                                        className: "img",
                                        children: (0, a.jsx)("video", {
                                            loop: !0,
                                            autoPlay: !0,
                                            muted: !0,
                                            src: "/assets/contact/contact-bg-video.webm",
                                            poster: "/assets/contact/contact-video-poster.webp",
                                            title: "Contact-Video",
                                            type: "video/webm"
                                        })
                                    })
                                })
                            }), (0, a.jsx)("section", {
                                className: "m-150",
                                children: (0, a.jsx)(p.Z, {})
                            }), (0, a.jsxs)("div", {
                                className: "scnd__container",
                                id: "main-contact-container",
                                children: [(0, a.jsxs)("div", {
                                    className: "add__section",
                                    id: "left-section",
                                    children: [(0, a.jsxs)("div", {
                                        className: "add__content",
                                        children: [(0, a.jsx)("h2", {
                                            children: "Email"
                                        }), (0, a.jsx)("a", {
                                            href: "mailto:info@orgitech.com",
                                            children: (0, a.jsx)("span", {
                                                children: "info@orgitech.com"
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "add__content pt__20",
                                        children: [(0, a.jsx)("h2", {
                                            children: "office"
                                        }), (0, a.jsx)("a", {
                                            href: "#",
                                            className: "address",
                                            children: (0, a.jsxs)("span", {
                                                children: ["7911 Arlington Ave Apt 59", (0, a.jsx)("br", {}), " Riverside CA 92503",]
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "add__content pt__20",
                                        children: [(0, a.jsx)("h2", {
                                            children: "Phone"
                                        }), (0, a.jsx)("a", {
                                            href: "tel:+951 900 3213",
                                            className: "address",
                                            children: (0, a.jsx)("span", {
                                                children: "+951 900 3213"
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "form__section",
                                    id: "right-section",
                                    children: [(0, a.jsx)("div", {
                                        className: "contact__text",
                                        "data-cursor-exclusion": !0,
                                        "data-cursor-size": "80px",
                                        children: (0, a.jsx)("h3", {
                                            children: "tell Us About Your Project."
                                        })
                                    }), (0, a.jsx)(Home, {})]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "p-150",
                                "data-cursor-color": "#000",
                                "data-cursor-size": "0px",
                                children: (0, a.jsx)(Aerosol, {})
                            }), (0, a.jsx)("div", {
                                className: "footer-desktop",
                                children: (0, a.jsx)(g.Z, {})
                            }), (0, a.jsx)("div", {
                                className: "mobile-footer",
                                children: (0, a.jsx)(u.Z, {})
                            })]
                        })
                    })]
                })
            }
            r.ZP.registerPlugin(o())
        }
    },
    function(e) {
        e.O(0, [8802, 990, 3386, 1664, 506, 1132, 7085, 3494, 5268, 9774, 2888, 179], function() {
            return e(e.s = 9260)
        }), _N_E = e.O()
    }
]);