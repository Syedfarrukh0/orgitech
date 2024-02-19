(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2188], {
        2196: function (e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/who-we-are", function () {
                return t(4286)
            }])
        },
        4286: function (e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function () {
                    return about
                }
            });
            var a = t(5893),
                i = t(7294),
                r = t(990),
                o = t(6732);
            t(5538);
            var n = t(6053),
                l = t(2962),
                c = t(5829),
                d = t(4285),
                h = t(6546),
                u = t.n(h);
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
                        timeScale: 2,
                        initialSeek: 3e3,
                        fadeOutDuration: 1,
                        fadeOutEase: "power4.out",
                        yStart: () => this.container.offsetHeight,
                        yEnd: (e, s) => -s.offsetHeight,
                        yStart: "350",
                        yEnd: "-500",
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
                                className: "cb-particles-item size-emo -text -v1 -s4",
                                children: "\uD83D\uDD25"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item size-emo -dot -text -v3 -s4 -c3 -p1"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item size-emo -text -v2 -s4",
                                children: "✊"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item size-emo -text -v5 -s4 -dot -c3 -p2"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item size-emo -text -v4 -s4",
                                children: "\uD83D\uDE0E"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item size-emo -text -v7 -s4 -dot -c3 -p3"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item size-emo -text -v8 -s4",
                                children: "\uD83D\uDCBB"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item size-emo -text -v9 -s4 -dot -c3 -p1"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item size-emo -text -v6 -s4",
                                children: "\uD83C\uDF89"
                            }), (0, a.jsx)("span", {
                                className: "cb-particles-item size-emo -text -v10 -s4 -dot -c3 -p3"
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
                            start: "top 85%"
                        }
                    }),
                        s = document.querySelectorAll(".aero-demo p");
                    e.fromTo(s, {
                        opacity: 0,
                        yPercent: 520,
                        skewY: 30
                    }, {
                        opacity: 1,
                        yPercent: 0,
                        skewY: 0,
                        duration: 4,
                        ease: "expo.out"
                    }, 0)
                }, []), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "aero-hover",
                        children: [(0, a.jsxs)("div", {
                            className: "text-container aero-demo",
                            children: [(0, a.jsx)("p", {
                                className: "about-text-aero",
                                children: "Enigma is a collective of Creators, Discoverers, Dreamers & Doers!"
                            }), (0, a.jsx)(partText, {})]
                        }), (0, a.jsxs)("div", {
                            className: "aerosol-main",
                            children: [(0, a.jsx)("div", {
                                className: "c-cursor"
                            }), (0, a.jsxs)("div", {
                                className: "shapes",
                                children: [(0, a.jsx)("div", {
                                    className: "shape shape-1 about-1"
                                }), (0, a.jsx)("div", {
                                    className: "shape shape-2 about-2"
                                }), (0, a.jsx)("div", {
                                    className: "shape shape-3 about-3"
                                })]
                            })]
                        })]
                    })
                })
            }
            r.ZP.registerPlugin(u());
            var p = t(33),
                m = t(793),
                x = t(5699),
                g = t(5675),
                b = t.n(g),
                j = t(1268),
                f = t.n(j),
                About_VideoPlayer = () => {
                    let [e, s] = (0, i.useState)(!1), t = (0, i.useRef)(null), r = {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        opacity: 1,
                        transition: "all 0.3s ease-in",
                        zIndex: "99"
                    };
                    return e && (r.opacity = 0), (0, a.jsxs)("div", {
                        style: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        onClick: () => {
                            let a = t.current;
                            e ? (a.pause(), s(!1)) : (a.play(), s(!0))
                        },
                        "data-cursor-text": "Play/Pause",
                        "data-cursor-size": "120px",
                        "data-cursor-color": "#000",
                        children: [(0, a.jsx)("video", {
                            ref: t,
                            poster: "/assets/about/videoOverlay.webp",
                            src: "/assets/reels/showreel.mp4"
                        }), (0, a.jsx)("div", {
                            className: "play-pause-button",
                            style: r,
                            id: "darkMode-reel-img",
                            children: e ? (0, a.jsx)("div", {
                                className: f().svgBackground,
                                children: (0, a.jsx)(b(), {
                                    width: 350,
                                    height: 350,
                                    src: "/assets/icons/pause.png",
                                    alt: "showreel pause"
                                })
                            }) : (0, a.jsx)("div", {
                                className: f().svgBackground,
                                children: (0, a.jsx)(b(), {
                                    width: 350,
                                    height: 350,
                                    src: "/assets/icons/play.png",
                                    alt: "showreel play"
                                })
                            })
                        })]
                    })
                },
                w = t(5063),
                v = t.n(w),
                y = t(7237),
                N = t.n(y);

            function NextBox() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: N().nextContainer,
                        children: (0, a.jsxs)("div", {
                            className: N().nextSubContainer,
                            children: [(0, a.jsx)("div", {
                                className: N().subHeading,
                                children: (0, a.jsx)("p", {
                                    children: "next up"
                                })
                            }), (0, a.jsx)("div", {
                                className: N().mainHeading,
                                "data-cursor-background-image": "/assets/gif/2.gif",
                                "data-cursor-color": "#000",
                                "data-cursor-size": "400px",
                                children: (0, a.jsx)(v(), {
                                    href: "/services",
                                    children: (0, a.jsx)("h5", {
                                        children: "Services"
                                    })
                                })
                            })]
                        })
                    })
                })
            }
            var k = t(8777);
            t(2600);
            var S = t(9121),
                _ = t.n(S);

            function carousel() {
                let [e, s] = (0, i.useState)(null), handleSlideClick = t => {
                    t === e ? s(null) : s(t)
                };
                return (0, i.useEffect)(() => {
                    let e = document.querySelectorAll(".hide-div-caro");
                    e.forEach(function (e, s) {
                        let t = new c.Z(e.querySelectorAll(".hide-div-caro p")),
                            a = t.words;
                        r.ZP.from(a, {
                            scrollTrigger: {
                                trigger: e,
                                start: "-380 top",
                                end: "bottom top",
                                markers: !1
                            },
                            duration: .8,
                            opacity: 0,
                            yPercent: 100,
                            ease: "Power3.out",
                            stagger: .02
                        })
                    })
                }), (0, i.useEffect)(() => {
                    let e = r.ZP.timeline();
                    return e.fromTo(".gsap-caro", {
                        rotate: "135deg",
                        opacity: 0
                    }, {
                        duration: 1,
                        translateY: 0,
                        opacity: 1
                    }), () => e.kill()
                }), (0, i.useEffect)(() => {
                    let e = r.ZP.timeline({
                        scrollTrigger: {
                            trigger: "#caro-slider-logo",
                            start: "-400 top"
                        }
                    }),
                        s = document.querySelectorAll("#slider-anim");
                    e.fromTo(s, {
                        opacity: 0,
                        x: 250
                    }, {
                        x: 0,
                        duration: 1,
                        opacity: 1
                    })
                }, []), (0, a.jsxs)(k.sj, {
                    naturalSlideWidth: 50,
                    naturalSlideHeight: 125,
                    totalSlides: 3,
                    id: "caro-slider-logo",
                    children: [(0, a.jsx)(k.jp, {
                        children: (0, a.jsx)("span", {
                            className: "back-button-svg",
                            children: (0, a.jsxs)("svg", {
                                id: "arrow",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 9.56 9.56",
                                children: [(0, a.jsx)("line", {
                                    id: "line1",
                                    x1: "0.27",
                                    y1: "9.29",
                                    x2: "9.18",
                                    y2: "0.38",
                                    fill: "#4e4e4e",
                                    stroke: "#4e4e4e",
                                    strokeMiterlimit: 10,
                                    strokeWidth: "0.75"
                                }), (0, a.jsx)("line", {
                                    id: "line2",
                                    x1: "0.27",
                                    y1: "9.29",
                                    x2: "9.18",
                                    y2: "0.38",
                                    fill: "#4e4e4e",
                                    stroke: "#4e4e4e",
                                    strokeMiterlimit: 10,
                                    strokeWidth: "0.75"
                                }), (0, a.jsx)("polyline", {
                                    id: "arrow-head-1",
                                    points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                    fill: "none",
                                    stroke: "#4e4e4e",
                                    strokeLinecap: "round",
                                    strokeMiterlimit: 10,
                                    strokeWidth: "0.75"
                                }), (0, a.jsx)("polyline", {
                                    id: "arrow-head-2",
                                    points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                    fill: "none",
                                    stroke: "#4e4e4e",
                                    strokeLinecap: "round",
                                    strokeMiterlimit: 10,
                                    strokeWidth: "0.75"
                                })]
                            })
                        })
                    }), (0, a.jsx)(k.P1, {
                        children: (0, a.jsx)("span", {
                            className: "forward-button-svg",
                            children: (0, a.jsxs)("svg", {
                                id: "arrow",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 9.56 9.56",
                                children: [(0, a.jsx)("line", {
                                    id: "line1",
                                    x1: "0.27",
                                    y1: "9.29",
                                    x2: "9.18",
                                    y2: "0.38",
                                    fill: "#4e4e4e",
                                    stroke: "#4e4e4e",
                                    strokeMiterlimit: 10,
                                    strokeWidth: "0.75"
                                }), (0, a.jsx)("line", {
                                    id: "line2",
                                    x1: "0.27",
                                    y1: "9.29",
                                    x2: "9.18",
                                    y2: "0.38",
                                    fill: "#4e4e4e",
                                    stroke: "#4e4e4e",
                                    strokeMiterlimit: 10,
                                    strokeWidth: "0.75"
                                }), (0, a.jsx)("polyline", {
                                    id: "arrow-head-1",
                                    points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                    fill: "none",
                                    stroke: "#4e4e4e",
                                    strokeLinecap: "round",
                                    strokeMiterlimit: 10,
                                    strokeWidth: "0.75"
                                }), (0, a.jsx)("polyline", {
                                    id: "arrow-head-2",
                                    points: "5.01 0.38 9.18 0.38 9.18 4.55",
                                    fill: "none",
                                    stroke: "#4e4e4e",
                                    strokeLinecap: "round",
                                    strokeMiterlimit: 10,
                                    strokeWidth: "0.75"
                                })]
                            })
                        })
                    }), (0, a.jsxs)(k.iR, {
                        id: "slider-anim",
                        children: [(0, a.jsx)(k.Mi, {
                            index: 0,
                            className: _().slide__caro,
                            onClick: () => handleSlideClick(0),
                            "data-cursor-text": "Drag",
                            "data-cursor-color": "#000",
                            "data-cursor-size": "100px",
                            children: 0 !== e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "image-box-slider",
                                    children: (0, a.jsx)(b(), {
                                        height: 300,
                                        width: 300,
                                        src: "/assets/about/black/jelly.webp",
                                        alt: "client logo"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-box",
                                    children: [(0, a.jsx)("h4", {
                                        children: "JellyFish"
                                    }), (0, a.jsx)("div", {
                                        className: "caro-img-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "hide-div-caro",
                                children: [(0, a.jsx)("p", {
                                    children: (0, a.jsx)("span", {
                                        children: "Jellyfish, a fast-growing IT services provider, sought to elevate their online presence and improve their customer experience. Recognizing Enigma Digital's expertise in UX design, they partnered with the agency to enhance their website's user interface and overall design."
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-link-content",
                                    children: [(0, a.jsx)("div", {
                                        "data-cursor-exclusion": !0,
                                        "data-cursor-size": "80px",
                                        children: (0, a.jsx)("a", {
                                            className: "en-link-under",
                                            rel: "nofollow noopener noreferrer",
                                            target: "blank",
                                            href: "https://www.jellyfishtele.com/",
                                            children: (0, a.jsx)("span", {
                                                children: "Read More"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "bottom-caro-box hide-caro-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus gsap-caro",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(k.Mi, {
                            index: 1,
                            className: _().slide__caro,
                            onClick: () => handleSlideClick(1),
                            "data-cursor-text": "Drag",
                            "data-cursor-color": "#000",
                            "data-cursor-size": "100px",
                            children: 1 !== e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "image-box-slider",
                                    children: (0, a.jsx)(b(), {
                                        height: 300,
                                        width: 300,
                                        src: "/assets/about/black/kk.webp",
                                        alt: "client logo"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-box",
                                    children: [(0, a.jsx)("h4", {
                                        children: "Kedarkala"
                                    }), (0, a.jsx)("div", {
                                        className: "caro-img-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "hide-div-caro",
                                children: [(0, a.jsx)("p", {
                                    children: (0, a.jsx)("span", {
                                        children: "Kedarkala, a unique artisanal interior design studio, aimed to establish a strong brand identity and offer an exceptional online experience to its customers. They turned to Enigma Digital for their expertise in branding, UI/UX design, and website development."
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-link-content",
                                    children: [(0, a.jsx)("div", {
                                        "data-cursor-exclusion": !0,
                                        "data-cursor-size": "80px",
                                        children: (0, a.jsx)("a", {
                                            className: "en-link-under",
                                            href: "/kedarkala-portfolio-website-case-study",
                                            children: (0, a.jsx)("span", {
                                                children: "Read More"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "bottom-caro-box hide-caro-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus gsap-caro",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(k.Mi, {
                            index: 2,
                            className: _().slide__caro,
                            onClick: () => handleSlideClick(2),
                            "data-cursor-text": "Drag",
                            "data-cursor-color": "#000",
                            "data-cursor-size": "100px",
                            children: 2 !== e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "image-box-slider",
                                    children: (0, a.jsx)(b(), {
                                        height: 300,
                                        width: 300,
                                        src: "/assets/about/black/dmtca.webp",
                                        alt: "client logo"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-box",
                                    children: [(0, a.jsx)("h4", {
                                        children: "DMTCA"
                                    }), (0, a.jsx)("div", {
                                        className: "caro-img-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "hide-div-caro",
                                children: [(0, a.jsx)("p", {
                                    children: (0, a.jsx)("span", {
                                        children: "DMTCA, a forward-thinking digital agency, engaged Enigma Digital to develop a strong brand identity and cohesive website design. The agency's branding and design expertise helped DMTCA establish a memorable presence that effectively communicated their innovative approach and commitment to delivering top-tier digital solutions."
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-link-content",
                                    children: [(0, a.jsx)("div", {
                                        "data-cursor-exclusion": !0,
                                        "data-cursor-size": "80px",
                                        children: (0, a.jsx)("a", {
                                            className: "en-link-under",
                                            href: "/dmtca-digital-branding-case-study",
                                            children: (0, a.jsx)("span", {
                                                children: "Read More"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "bottom-caro-box hide-caro-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus gsap-caro",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(k.Mi, {
                            index: 3,
                            className: _().slide__caro,
                            onClick: () => handleSlideClick(3),
                            "data-cursor-text": "Drag",
                            "data-cursor-color": "#000",
                            "data-cursor-size": "100px",
                            children: 3 !== e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "image-box-slider",
                                    children: (0, a.jsx)(b(), {
                                        height: 300,
                                        width: 300,
                                        src: "/assets/about/black/riva.webp",
                                        alt: "client logo"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-box",
                                    children: [(0, a.jsx)("h4", {
                                        children: "Riva"
                                    }), (0, a.jsx)("div", {
                                        className: "caro-img-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "hide-div-caro",
                                children: [(0, a.jsx)("p", {
                                    children: (0, a.jsx)("span", {
                                        children: "RivaBuild, a renowned real estate developer, enlisted Enigma Digital to create an immersive digital experience that showcased their properties and services. The agency designed a stunning website, user-friendly app, engaging collaterals, and captivating videos that highlighted RivaBuild's dedication to quality, innovation, and customer satisfaction."
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-link-content",
                                    children: [(0, a.jsx)("div", {
                                        "data-cursor-exclusion": !0,
                                        "data-cursor-size": "80px",
                                        children: (0, a.jsx)("a", {
                                            className: "en-link-under",
                                            rel: "nofollow noopener noreferrer",
                                            target: "blank",
                                            href: "https://www.rivabuild.com/",
                                            children: (0, a.jsx)("span", {
                                                children: "Read More"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "bottom-caro-box hide-caro-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus gsap-caro",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(k.Mi, {
                            index: 4,
                            className: _().slide__caro,
                            onClick: () => handleSlideClick(4),
                            "data-cursor-text": "Drag",
                            "data-cursor-color": "#000",
                            "data-cursor-size": "100px",
                            children: 4 !== e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "image-box-slider",
                                    children: (0, a.jsx)(b(), {
                                        height: 300,
                                        width: 300,
                                        src: "/assets/about/black/quickx.webp",
                                        alt: "client logo"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-box",
                                    children: [(0, a.jsx)("h4", {
                                        children: "Quick-X"
                                    }), (0, a.jsx)("div", {
                                        className: "caro-img-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "hide-div-caro",
                                children: [(0, a.jsx)("p", {
                                    children: (0, a.jsx)("span", {
                                        children: "Quickx, a cutting-edge cryptocurrency platform, partnered with Enigma Digital to create a seamless and secure web and mobile app experience. The agency's expertise in app design allowed them to deliver intuitive and user-friendly interfaces that facilitated smooth cryptocurrency transactions while reinforcing Quickx's reputation as a reliable and innovative fintech solution."
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-link-content",
                                    children: [(0, a.jsx)("div", {
                                        "data-cursor-exclusion": !0,
                                        "data-cursor-size": "80px",
                                        children: (0, a.jsx)("a", {
                                            className: "en-link-under",
                                            href: "/quickx-crypto-case-study",
                                            children: (0, a.jsx)("span", {
                                                children: "Read More"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "bottom-caro-box hide-caro-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus gsap-caro",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(k.Mi, {
                            index: 5,
                            className: _().slide__caro,
                            onClick: () => handleSlideClick(5),
                            "data-cursor-text": "Drag",
                            "data-cursor-color": "#000",
                            "data-cursor-size": "100px",
                            children: 5 !== e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "image-box-slider",
                                    children: (0, a.jsx)(b(), {
                                        height: 300,
                                        width: 300,
                                        src: "/assets/about/black/bespin.webp",
                                        alt: "client logo"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-box",
                                    children: [(0, a.jsx)("h4", {
                                        children: "Bespin Labs"
                                    }), (0, a.jsx)("div", {
                                        className: "caro-img-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "hide-div-caro",
                                children: [(0, a.jsx)("p", {
                                    children: (0, a.jsx)("span", {
                                        children: "Bespin Labs, a leading IT company, partnered with Enigma Digital to enhance its online presence and marketing materials. The agency's expertise in website design and collaterals production enabled Bespin Labs to communicate their technical expertise and industry leadership effectively, attracting new clients and establishing a strong brand identity."
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-link-content",
                                    children: [(0, a.jsx)("div", {
                                        "data-cursor-exclusion": !0,
                                        "data-cursor-size": "80px",
                                        children: (0, a.jsx)("a", {
                                            className: "en-link-under",
                                            rel: "nofollow noopener noreferrer",
                                            target: "blank",
                                            href: "https://www.bespinlabs.com/",
                                            children: (0, a.jsx)("span", {
                                                children: "Read More"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "bottom-caro-box hide-caro-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus gsap-caro",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(k.Mi, {
                            index: 6,
                            className: _().slide__caro,
                            onClick: () => handleSlideClick(6),
                            "data-cursor-text": "Drag",
                            "data-cursor-color": "#000",
                            "data-cursor-size": "100px",
                            children: 6 !== e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "image-box-slider",
                                    children: (0, a.jsx)(b(), {
                                        height: 300,
                                        width: 300,
                                        src: "/assets/about/black/patronum.webp",
                                        alt: "client logo"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-box",
                                    children: [(0, a.jsx)("h4", {
                                        children: "Patronum"
                                    }), (0, a.jsx)("div", {
                                        className: "caro-img-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "hide-div-caro",
                                children: [(0, a.jsx)("p", {
                                    children: (0, a.jsx)("span", {
                                        children: "Patronum, an innovative SaaS company offering Google Workspace management solutions, sought to increase brand awareness and drive customer acquisition. Enigma Digital's full-service approach, encompassing branding, web design, and organic marketing, made them the ideal partner for Patronum."
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-link-content",
                                    children: [(0, a.jsx)("div", {
                                        "data-cursor-exclusion": !0,
                                        "data-cursor-size": "80px",
                                        children: (0, a.jsx)("a", {
                                            className: "en-link-under",
                                            href: "/patronum-saas-case-study",
                                            children: (0, a.jsx)("span", {
                                                children: "Read More"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "bottom-caro-box hide-caro-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus gsap-caro",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(k.Mi, {
                            index: 7,
                            className: _().slide__caro,
                            onClick: () => handleSlideClick(7),
                            "data-cursor-text": "Drag",
                            "data-cursor-color": "#000",
                            "data-cursor-size": "100px",
                            children: 7 !== e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "image-box-slider",
                                    children: (0, a.jsx)(b(), {
                                        height: 300,
                                        width: 300,
                                        src: "/assets/about/black/patra.webp",
                                        alt: "client logo"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-box",
                                    children: [(0, a.jsx)("h4", {
                                        children: "Patra"
                                    }), (0, a.jsx)("div", {
                                        className: "caro-img-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "hide-div-caro",
                                children: [(0, a.jsx)("p", {
                                    children: (0, a.jsx)("span", {
                                        children: "Patra, an insure-tech company, collaborated with Enigma Digital to develop a user-centric app and implement effective marketing strategies. The agency's UI/UX design expertise and data-driven marketing approach helped Patra create a highly engaging web experience and reach their target audience, resulting in increased user adoption and brand awareness."
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "bottom-caro-link-content",
                                    children: [(0, a.jsx)("div", {
                                        "data-cursor-exclusion": !0,
                                        "data-cursor-size": "80px",
                                        children: (0, a.jsx)("a", {
                                            className: "en-link-under",
                                            href: "/patra-saas-insurtech-case-study",
                                            children: (0, a.jsx)("span", {
                                                children: "Read More"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "bottom-caro-box hide-caro-box",
                                        children: (0, a.jsx)(b(), {
                                            height: 50,
                                            width: 50,
                                            src: "/assets/about/black/plus.webp",
                                            className: "caro-plus gsap-caro",
                                            alt: "plus icon"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
            var D = t(2708),
                LazyVideoGif = e => {
                    let {
                        srcWebm: s,
                        srcMp4: t,
                        title: r,
                        poster: o
                    } = e, [n, l] = (0, D.YD)(), [c, d] = (0, i.useState)(!1);
                    return l && !c && d(!0), (0, a.jsx)("div", {
                        className: "lazy-video",
                        ref: n,
                        children: (l || c) && (0, a.jsxs)("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            id: r,
                            title: r,
                            poster: o,
                            alt: "About Us Video",
                            children: [(0, a.jsx)("source", {
                                src: s,
                                type: "video/webm"
                            }), (0, a.jsx)("source", {
                                src: t,
                                type: "video/mp4"
                            }), "Your browser does not support the video tag."]
                        })
                    })
                };

            function NewGifSection() {
                return (0, i.useEffect)(() => {
                    let e = r.ZP.context(() => {
                        let e = document.querySelector("#gif");
                        r.ZP.to("[data-speed]", {
                            y: (s, t) => -1 * parseFloat(t.getAttribute("data-speed")) * (e.offsetHeight / 3),
                            ease: "none",
                            scrollTrigger: {
                                trigger: e,
                                invalidateOnRefresh: !0,
                                scrub: 0,
                                markers: !1,
                                start: "-400 center"
                            }
                        })
                    });
                    return () => e.revert()
                }), (0, i.useEffect)(() => {
                    let e = r.ZP.timeline({
                        scrollTrigger: {
                            trigger: ".gifSectionAbout",
                            start: "top 90%"
                        }
                    }),
                        s = document.querySelectorAll(".newsCard");
                    e.fromTo(s, {
                        y: 300,
                        opacity: 0
                    }, {
                        duration: 1,
                        opacity: 1,
                        y: 0,
                        stagger: .2
                    })
                }), (0, i.useEffect)(() => {
                    let e = r.ZP.context(() => {
                        let e = r.ZP.timeline();
                        e.to(".gifsubtext p", {
                            backgroundPositionX: "0%",
                            stagger: 1,
                            scrollTrigger: {
                                trigger: ".gifsubtext p",
                                scrub: 1,
                                start: "top 90%",
                                end: "bottom 30%",
                                duration: 10
                            }
                        })
                    });
                    return () => e.revert()
                }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "gifSectionAbout",
                        id: "gif",
                        children: [(0, a.jsxs)("div", {
                            className: "gifAboutSub",
                            children: [(0, a.jsxs)("div", {
                                className: "newsCard news-Slide-up",
                                "data-speed": "4",
                                children: [(0, a.jsx)(LazyVideoGif, {
                                    srcWebm: "/assets/about/gif-section/culture.webm",
                                    srcMp4: "/assets/about/gif-section/culture.mp4",
                                    title: "About-Culture-Video",
                                    poster: "/assets/about/gif-section/culture.webp",
                                    className: "gif-img"
                                }), (0, a.jsx)("h3", {
                                    className: "about-gif-text",
                                    children: "culture"
                                }), (0, a.jsx)("img", {
                                    src: "/assets/about/gif-section/arr.png",
                                    alt: "gif arrow img",
                                    className: "about-gif-arrow"
                                }), (0, a.jsx)("p", {
                                    className: "about-gif-num",
                                    children: "01"
                                }), (0, a.jsx)("div", {
                                    className: "newsCaption",
                                    children: (0, a.jsx)("p", {
                                        className: "newsCaption-content",
                                        children: "We don’t work for clients. We work for our brand partners. And as partners, we make sure to craft disruptive digital solutions using purposeful strategy, beautiful designs & user-centric technology that makes you a part of the very best on the web."
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "newsCard news-Slide-up",
                                "data-speed": "5",
                                children: [(0, a.jsx)(LazyVideoGif, {
                                    srcWebm: "/assets/about/gif-section/attitude.webm",
                                    srcMp4: "/assets/about/gif-section/attitude.mp4",
                                    title: "About-Attitude-Video",
                                    poster: "/assets/about/gif-section/attitude.webp",
                                    className: "gif-img"
                                }), (0, a.jsx)("h3", {
                                    className: "about-gif-text",
                                    children: "attitude"
                                }), (0, a.jsx)("img", {
                                    src: "/assets/about/gif-section/arr.png",
                                    alt: "gif arrow img",
                                    className: "about-gif-arrow"
                                }), (0, a.jsx)("p", {
                                    className: "about-gif-num",
                                    children: "02"
                                }), (0, a.jsx)("div", {
                                    className: "newsCaption",
                                    children: (0, a.jsx)("p", {
                                        className: "newsCaption-content",
                                        children: "You might have intricate requirements but we’ve got ambition, imagination, skills and the tools to match them. That’s 4-to-1 to us. It just can’t go wrong. Can it?"
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "gifAboutSub",
                            children: (0, a.jsxs)("div", {
                                className: "newsCard news-Slide-up",
                                "data-speed": "3.5",
                                children: [(0, a.jsx)(LazyVideoGif, {
                                    srcWebm: "/assets/about/gif-section/ethos.webm",
                                    srcMp4: "/assets/about/gif-section/ethos.mp4",
                                    title: "About-Ethos-Video",
                                    poster: "/assets/about/gif-section/ethos.webp",
                                    className: "gif-img"
                                }), (0, a.jsx)("h3", {
                                    className: "about-gif-text",
                                    children: "ethos"
                                }), (0, a.jsx)("img", {
                                    src: "/assets/about/gif-section/arr.png",
                                    alt: "gif arrow img",
                                    className: "about-gif-arrow"
                                }), (0, a.jsx)("p", {
                                    className: "about-gif-num",
                                    children: "03"
                                }), (0, a.jsx)("div", {
                                    className: "newsCaption",
                                    children: (0, a.jsx)("p", {
                                        className: "newsCaption-content",
                                        children: "While we are definitely smarter than we look (it's not difficult), we pride ourselves on being humble and down-to-earth creatures. Our ethos are simple – Keep learning, Keep Growing & even when you think you’ve created the best there is, there is always room for improvement."
                                    })
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            className: "gifAboutSub",
                            children: [(0, a.jsxs)("div", {
                                className: "newsCard news-Slide-up MR-20",
                                "data-speed": "2.5",
                                children: [(0, a.jsx)(LazyVideoGif, {
                                    srcWebm: "/assets/about/gif-section/experience.webm",
                                    srcMp4: "/assets/about/gif-section/experience.mp4",
                                    title: "About-Experience-Video",
                                    poster: "/assets/about/gif-section/experience.webp",
                                    className: "gif-img"
                                }), (0, a.jsx)("h3", {
                                    className: "about-gif-text",
                                    children: "experience"
                                }), (0, a.jsx)("img", {
                                    src: "/assets/about/gif-section/arr.png",
                                    alt: "gif arrow img",
                                    className: "about-gif-arrow"
                                }), (0, a.jsx)("p", {
                                    className: "about-gif-num",
                                    children: "04"
                                }), (0, a.jsx)("div", {
                                    className: "newsCaption",
                                    children: (0, a.jsx)("p", {
                                        className: "newsCaption-content",
                                        children: "An agency is only as strong as its people. Our team members come with a solid experience of working with well-known agencies, for Fortune 500 brands, running their own businesses, designing game changing products and even competing at professional level in sports."
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "newsCard news-Slide-up",
                                "data-speed": "3.2",
                                children: [(0, a.jsx)(LazyVideoGif, {
                                    srcWebm: "/assets/about/gif-section/magic.webm",
                                    srcMp4: "/assets/about/gif-section/magic.mp4",
                                    title: "About-Magic-Video",
                                    poster: "/assets/about/gif-section/magic.webp",
                                    className: "gif-img"
                                }), (0, a.jsx)("h3", {
                                    className: "about-gif-text",
                                    children: "magic"
                                }), (0, a.jsx)("img", {
                                    src: "/assets/about/gif-section/arr.png",
                                    alt: "gif arrow img",
                                    className: "about-gif-arrow"
                                }), (0, a.jsx)("p", {
                                    className: "about-gif-num",
                                    children: "05"
                                }), (0, a.jsx)("div", {
                                    className: "newsCaption",
                                    children: (0, a.jsx)("p", {
                                        className: "newsCaption-content",
                                        children: "Yes! You read that one just about right. We make magic... We just don’t do campaigns. We focus on user driven outcomes and endeavour to create meaningful connections between brands and its users. Somewhere between devising a strategy."
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "gifBottomText",
                            children: (0, a.jsxs)("div", {
                                className: "gifsubtext",
                                children: [(0, a.jsx)("p", {
                                    children: "We don't adapt to change, we anticipate it!"
                                }), (0, a.jsx)("span", {
                                    className: "span1",
                                    children: "\uD83D\uDCA1"
                                }), (0, a.jsx)("p", {
                                    children: "Our digital solutions have transformed brands"
                                }), (0, a.jsx)("p", {
                                    children: "and empowered businesses globally."
                                }), (0, a.jsx)("span", {
                                    className: "span3",
                                    children: "\uD83C\uDF0E\uD83D\uDE80"
                                })]
                            })
                        })]
                    })
                })
            }
            r.ZP.registerPlugin(u());
            var C = t(4791),
                P = t(3047),
                E = t(9008),
                I = t.n(E);

            function about() {
                return (0, i.useEffect)(() => {
                    let e = r.ZP.context(() => {
                        let e = r.ZP.timeline();
                        return e.fromTo("#e", {
                            opacity: 0
                        }, {
                            delay: 4,
                            duration: 1.3,
                            opacity: 1
                        }), () => e.kill()
                    });
                    return () => e.revert()
                }, []), (0, i.useEffect)(() => {
                    let e = r.ZP.context(() => {
                        let e = r.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".hero-section-about",
                                start: "top top",
                                end: "bottom center",
                                markers: !1,
                                pin: !0,
                                scrub: 2
                            }
                        });
                        e.to("#e", 2, {
                            transform: "scale(1)",
                            duration: 5,
                            ease: "power1.inOut"
                        }, ""), e.to("#n", 2, {
                            transform: "scale(1)",
                            duration: 5,
                            ease: "power1.inOut",
                            stagger: .3
                        }, "-=2"), e.to(" #i", 2, {
                            transform: "scale(1)",
                            duration: 5,
                            ease: "power1.inOut",
                            stagger: .3
                        }, "-=1.2"), e.to("#g", 2, {
                            transform: "scale(1)",
                            duration: 5,
                            ease: "power1.inOut",
                            stagger: .3
                        }, "-=1.4"), e.to("#m", 2, {
                            transform: "scale(1)",
                            duration: 5,
                            ease: "power1.inOut",
                            stagger: .3
                        }, "-=1.8"), e.to("#a", 2, {
                            transform: "scale(1)",
                            duration: 5,
                            ease: "power1.inOut",
                            stagger: .3
                        }, "-=1.6"), e.from(".small_heading", {
                            opacity: 0,
                            y: 50,
                            duration: 1,
                            ease: "power1.In"
                        }, "3.3")
                    });
                    return () => e.revert()
                }, []), (0, i.useEffect)(() => {
                    let e = document.querySelectorAll(".first-about-content-section");
                    e.forEach(function (e, s) {
                        let t = new c.Z(e.querySelectorAll(".why-us-anim")),
                            a = t.words;
                        r.ZP.from(a, {
                            scrollTrigger: {
                                trigger: e,
                                start: "top 85%",
                                markers: !1
                            },
                            duration: .8,
                            opacity: 0,
                            yPercent: 100,
                            ease: "Power3.out",
                            stagger: .02
                        })
                    })
                }, []), (0, i.useEffect)(() => {
                    let e = document.querySelectorAll("#client-loveus");
                    e.forEach(function (e, s) {
                        let t = new c.Z(e.querySelectorAll(".client-anim-heading")),
                            a = t.words;
                        r.ZP.from(a, {
                            scrollTrigger: {
                                trigger: e,
                                start: "top 85%",
                                markers: !1
                            },
                            duration: .8,
                            opacity: 0,
                            yPercent: 100,
                            ease: "Power3.out",
                            stagger: .02
                        })
                    })
                }, []), (0, i.useEffect)(() => {
                    let e = document.querySelector(".header-logo"),
                        s = r.ZP.context(() => {
                            r.ZP.to(e, {
                                opacity: 0,
                                delay: 7
                            });
                            let s = r.ZP.timeline({
                                scrollTrigger: {
                                    trigger: ".about-header",
                                    start: "top -500",
                                    scrub: 1
                                }
                            });
                            s.to(e, {
                                opacity: 1,
                                duration: 10
                            })
                        });
                    return () => s.revert()
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.PB, {
                        title: "About Enigma - UI/UX Design & Digital Marketing Agency India",
                        description: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
                        openGraph: {
                            url: "https://weareenigma.com/who-we-are",
                            title: "About Enigma - UI/UX Design & Digital Marketing Agency India",
                            description: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
                            images: [{
                                url: "https://weareenigma.com/assets/featured-images/about.png",
                                width: 1200,
                                height: 630,
                                alt: "About Us Feature Image",
                                type: "image/png"
                            }],
                            siteName: "Enigma Digital"
                        },
                        additionalMetaTags: [{
                            name: "twitter:title",
                            content: "About Enigma - UI/UX Design & Digital Marketing Agency India"
                        }, {
                            name: "twitter:description",
                            content: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency."
                        }, {
                            name: "twitter:image",
                            content: "https://weareenigma.com/assets/featured-images/about.png"
                        }]
                    }), (0, a.jsxs)(I(), {
                        children: [(0, a.jsx)("link", {
                            rel: "canonical",
                            href: "https://weareenigma.com/who-we-are"
                        }), (0, a.jsx)("link", {
                            rel: "alternate",
                            href: "https://weareenigma.com/who-we-are",
                            hreflang: "x-default"
                        }), (0, a.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "WebPage",
                                    mainEntityOfPage: {
                                        "@type": "WebPage",
                                        "@id": "https://weareenigma.com/who-we-are"
                                    },
                                    name: "About",
                                    description: "Enigma is a team of creators, discoverers, 	dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
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
                    }), (0, a.jsx)(n.Z, {}), (0, a.jsx)(o.C, {
                        isGelly: !0
                    }), (0, a.jsx)(P.Z, {
                        text: "Who We Are"
                    }), (0, a.jsx)("div", {
                        className: "about-header",
                        children: (0, a.jsx)(d.Z, {})
                    }),

                    (0, a.jsx)(C.Z, {}), (0, a.jsxs)("main", {
                        
                        children: [(0, a.jsx)("section", 
                        {
                            className: "hero-about",
                            "data-cursor-size": "120px",
                            "data-cursor-text": "Scroll Down",

                            children: (0, a.jsxs)("div", {
                                className: "hero-section-about",
                                children: [(0, a.jsxs)("div", {
                                    className: "container_hero",
                                    children: [(0, a.jsx)("div", {
                                        id: "noise"
                                    }), (0, a.jsxs)("div", {
                                        className: "container_hero_content",
                                        children: [(0, a.jsxs)("svg", {
                                            id: "enigma-svg",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                            version: "1.1",
                                            x: "0px",
                                            y: "0px",
                                            viewBox: "0 0 1020 300",
                                            style: {
                                                enableBackground: "new 0 0 1020 300"
                                            },
                                            xmlSpace: "preserve",
                                            children: [(0, a.jsx)("style", {
                                                type: "text/css",
                                                dangerouslySetInnerHTML: {
                                                    __html: "\n                                    .sh {\n                                        filter: drop-shadow(rgb(0, 0, 0))\n                                    }\n\n                                    .st01 {\n                                        fill: url(#SVGID_1_)\n                                    }\n\n                                    .st11 {\n                                        fill: url(#SVGID_2_)\n                                    }\n\n                                    .st21 {\n                                        fill: url(#SVGID_3_)\n                                    }\n\n                                    .st31 {\n                                        fill: url(#SVGID_4_)\n                                    }\n\n                                    .st41 {\n                                        fill: url(#SVGID_5_)\n                                    }\n\n                                    .st51 {\n                                        fill: url(#SVGID_6_)\n                                    }\n\n                                    .st61 {\n                                        fill: url(#SVGID_7_)\n                                    }\n\n                                    .st71 {\n                                        fill: url(#SVGID_8_)\n                                    }\n\n                                    .st81 {\n                                        fill: url(#SVGID_9_)\n                                    }\n\n                                    .st91 {\n                                        fill: url(#SVGID_10_)\n                                    }\n                                "
                                                }
                                            }), (0, a.jsxs)("g", {
                                                children: [(0, a.jsxs)("linearGradient", {
                                                    id: "SVGID_2_",
                                                    gradientUnits: "userSpaceOnUse",
                                                    x1: "74.1925",
                                                    y1: "-3.0795",
                                                    x2: "74.1925",
                                                    y2: "208.1779",
                                                    children: [(0, a.jsx)("stop", {
                                                        offset: 0,
                                                        style: {
                                                            stopColor: "#000"
                                                        }
                                                    }), (0, a.jsx)("stop", {
                                                        offset: 1,
                                                        style: {
                                                            stopColor: "#363636 "
                                                        }
                                                    })]
                                                }), (0, a.jsx)("path", {
                                                    className: "st11 sh",
                                                    id: "e",
                                                    d: "M10,60.8v178.5h126.4l0-65.1H110v50.6H23.2l13.2-3.4v-59.6l-13.2-3.4l113.2,0V60.8H10z M110,143.7l-86.8,0    l13.2-3.4V78.7l-13.2-3.4H110L110,143.7z"
                                                }), (0, a.jsxs)("linearGradient", {
                                                    id: "SVGID_1_",
                                                    gradientUnits: "userSpaceOnUse",
                                                    x1: "244.0582",
                                                    y1: "-3.0795",
                                                    x2: "244.0582",
                                                    y2: "208.1779",
                                                    children: [(0, a.jsx)("stop", {
                                                        offset: 0,
                                                        style: {
                                                            stopColor: "#000"
                                                        }
                                                    }), (0, a.jsx)("stop", {
                                                        offset: 1,
                                                        style: {
                                                            stopColor: "#363636"
                                                        }
                                                    })]
                                                }), (0, a.jsx)("polygon", {
                                                    className: "st01 sh",
                                                    id: "n",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    points: "180.6,60.7 180.6,239.2 246.4,239.2 246.4,224.7 193.8,224.6 207,221.3 207,78.8 193.6,75.3     293.8,75.3 280.6,78.7 280.6,239.2 307,239.2 307,60.7   "
                                                }), (0, a.jsxs)("g", {
                                                    id: "i",
                                                    children: [(0, a.jsxs)("linearGradient", {
                                                        id: "SVGID_3_",
                                                        gradientUnits: "userSpaceOnUse",
                                                        x1: "389.345",
                                                        y1: "-3.0795",
                                                        x2: "389.345",
                                                        y2: "208.1779",
                                                        children: [(0, a.jsx)("stop", {
                                                            offset: 0,
                                                            style: {
                                                                stopColor: "#000"
                                                            }
                                                        }), (0, a.jsx)("stop", {
                                                            offset: 1,
                                                            style: {
                                                                stopColor: "#363636"
                                                            }
                                                        })]
                                                    }), (0, a.jsx)("rect", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        x: "376.1",
                                                        y: "16.8",
                                                        className: "st2",
                                                        width: "26.4",
                                                        height: "26.4"
                                                    }), (0, a.jsxs)("linearGradient", {
                                                        id: "SVGID_4_",
                                                        gradientUnits: "userSpaceOnUse",
                                                        x1: "372.2424",
                                                        y1: "-3.0795",
                                                        x2: "372.2424",
                                                        y2: "208.1779",
                                                        children: [(0, a.jsx)("stop", {
                                                            offset: 0,
                                                            style: {
                                                                stopColor: "#000"
                                                            }
                                                        }), (0, a.jsx)("stop", {
                                                            offset: 1,
                                                            style: {
                                                                stopColor: "#363636"
                                                            }
                                                        })]
                                                    }), (0, a.jsx)("polygon", {
                                                        className: "st31 sh",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        points: "339.5,60.7 339.4,75.3 389.5,75.3 376.3,78.7 376.3,221.3 389.5,224.6 339.5,224.6 339.4,239.2    402.7,239.2 402.7,60.7  "
                                                    })]
                                                }), (0, a.jsxs)("g", {
                                                    id: "g",
                                                    children: [(0, a.jsxs)("linearGradient", {
                                                        id: "SVGID_9_",
                                                        gradientUnits: "userSpaceOnUse",
                                                        x1: "510.7233",
                                                        y1: "-3.0795",
                                                        x2: "510.7233",
                                                        y2: "208.1779",
                                                        children: [(0, a.jsx)("stop", {
                                                            offset: 0,
                                                            style: {
                                                                stopColor: "#000"
                                                            }
                                                        }), (0, a.jsx)("stop", {
                                                            offset: 1,
                                                            style: {
                                                                stopColor: "#363636"
                                                            }
                                                        })]
                                                    }), (0, a.jsx)("rect", {
                                                        className: "st81 sh",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        x: "497.2",
                                                        y: "136.7",
                                                        width: "26.4",
                                                        height: "26.4"
                                                    }), (0, a.jsxs)("linearGradient", {
                                                        id: "SVGID_10_",
                                                        gradientUnits: "userSpaceOnUse",
                                                        x1: "509.993",
                                                        y1: "-3.0795",
                                                        x2: "509.993",
                                                        y2: "208.1779",
                                                        children: [(0, a.jsx)("stop", {
                                                            offset: 0,
                                                            style: {
                                                                stopColor: "#000"
                                                            }
                                                        }), (0, a.jsx)("stop", {
                                                            offset: 1,
                                                            style: {
                                                                stopColor: "#363636"
                                                            }
                                                        })]
                                                    }), (0, a.jsx)("path", {
                                                        className: "st91 sh",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        d: "M446.8,239.2l112.9,0l-12.8,3.3l0,22.7l13.2,3.4H460l13.4-3.4V254h-26.6l0,29.2h126.4V60.7l-112.8,0l12.8-3.3   V34.7l-12.8-3.3H560l-13.2,3.4v11.3h26.4V16.8H446.9L446.8,239.2z M460,75.3h100l-13.2,3.4l0,142.6l13.1,3.4l-99.9-0.1l13.2-3.4   V78.7L460,75.3z"
                                                    })]
                                                }), (0, a.jsxs)("g", {
                                                    id: "m",
                                                    children: [(0, a.jsxs)("linearGradient", {
                                                        id: "SVGID_6_",
                                                        gradientUnits: "userSpaceOnUse",
                                                        x1: "775.9418",
                                                        y1: "-3.0795",
                                                        x2: "775.9418",
                                                        y2: "208.1779",
                                                        children: [(0, a.jsx)("stop", {
                                                            offset: 0,
                                                            style: {
                                                                stopColor: "#000"
                                                            }
                                                        }), (0, a.jsx)("stop", {
                                                            offset: 1,
                                                            style: {
                                                                stopColor: "#363636"
                                                            }
                                                        })]
                                                    }), (0, a.jsx)("polygon", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "st51 sh",
                                                        points: "773.6,75.3 826.2,75.3 813,78.7 813,221.2 826.4,224.7 726.2,224.7 739.4,221.3 739.4,60.8 713,60.8    713,239.2 839.4,239.2 839.4,60.8 773.6,60.8  "
                                                    }), (0, a.jsxs)("linearGradient", {
                                                        id: "SVGID_7_",
                                                        gradientUnits: "userSpaceOnUse",
                                                        x1: "630.6549",
                                                        y1: "-3.0795",
                                                        x2: "630.6549",
                                                        y2: "208.1779",
                                                        children: [(0, a.jsx)("stop", {
                                                            offset: 0,
                                                            style: {
                                                                stopColor: "#000"
                                                            }
                                                        }), (0, a.jsx)("stop", {
                                                            offset: 1,
                                                            style: {
                                                                stopColor: "#363636"
                                                            }
                                                        })]
                                                    }), (0, a.jsx)("rect", {
                                                        className: "st61 sh",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        x: "617.5",
                                                        y: "256.7",
                                                        width: "26.4",
                                                        height: "26.4"
                                                    }), (0, a.jsxs)("linearGradient", {
                                                        id: "SVGID_8_",
                                                        gradientUnits: "userSpaceOnUse",
                                                        x1: "647.7574",
                                                        y1: "-3.0795",
                                                        x2: "647.7574",
                                                        y2: "208.1779",
                                                        children: [(0, a.jsx)("stop", {
                                                            offset: 0,
                                                            style: {
                                                                stopColor: "#000"
                                                            }
                                                        }), (0, a.jsx)("stop", {
                                                            offset: 1,
                                                            style: {
                                                                stopColor: "#363636"
                                                            }
                                                        })]
                                                    }), (0, a.jsx)("polygon", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "st71 sh",
                                                        points: "680.6,60.8 617.3,60.8 617.3,239.2 680.5,239.2 680.6,224.7 630.5,224.7 643.7,221.3 643.7,78.7    630.5,75.3 680.5,75.3  "
                                                    })]
                                                }), (0, a.jsxs)("linearGradient", {
                                                    id: "SVGID_5_",
                                                    gradientUnits: "userSpaceOnUse",
                                                    x1: "945.8075",
                                                    y1: "-3.0795",
                                                    x2: "945.8075",
                                                    y2: "208.1779",
                                                    children: [(0, a.jsx)("stop", {
                                                        offset: 0,
                                                        style: {
                                                            stopColor: "#000"
                                                        }
                                                    }), (0, a.jsx)("stop", {
                                                        offset: 1,
                                                        style: {
                                                            stopColor: "#363636"
                                                        }
                                                    })]
                                                }), (0, a.jsx)("path", {
                                                    className: "st41 sh",
                                                    id: "a",
                                                    d: "M883.6,60.8l0,65.1H910V75.3h86.8l-13.2,3.4v59.6l13.2,3.4l-113.2,0v97.5H1010V60.8H883.6z M996.8,224.6H910   l0-68.3l86.8,0l-13.2,3.4v61.6L996.8,224.6z"
                                                })]
                                            })]
                                        }), (0, a.jsx)("h1", {
                                            className: "small_heading",
                                            children: "Digital Experience Design Agency For Ambitious Brands"
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "about-hero-scroll",
                                    children: (0, a.jsx)("img", {
                                        src: "/assets/hero-footer/scroll.svg",
                                        alt: "scroll below icon",
                                        title: "Scroll Down"
                                    })
                                })]
                            })

                        }), 
                        
                        (0, a.jsx)("section", {
                            "data-cursor-color": "#000",
                            "data-cursor-size": "0px",
                            className: "aero-about p-200",
                            children: (0, a.jsx)(Aerosol, {})
                        }), (0, a.jsx)("section", {
                            className: "reel-section-about",
                            children: (0, a.jsx)("div", {
                                className: "reel-section-box",
                                children: (0, a.jsx)(About_VideoPlayer, {})
                            })
                        }), (0, a.jsx)("section", {
                            className: "first-about-content-section m-150",
                            children: (0, a.jsxs)("div", {
                                className: "first-sub-section",
                                children: [(0, a.jsx)("div", {
                                    className: "left-box-heading",
                                    children: (0, a.jsxs)("h2", {
                                        className: "why-us-anim",
                                        children: [(0, a.jsx)("span", {
                                            className: "stroke",
                                            children: "why"
                                        }), " us."]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "right-box-content",
                                    children: [(0, a.jsx)("p", {
                                        "data-jelly": !0,
                                        className: "why-us-anim",
                                        children: (0, a.jsxs)("span", {
                                            children: ["We have been asked this question like a zillion times – How are you different from the other agencies out there. Well, the truth is that we were “Born Different”.", " "]
                                        })
                                    }), (0, a.jsx)("br", {}), (0, a.jsx)("p", {
                                        className: "mt-about why-us-anim",
                                        "data-jelly": !0,
                                        children: (0, a.jsxs)("span", {
                                            children: ["We see the bigger picture, we are ambitious, we set the bar high in all facets of our work, we love what we do and most importantly, we were not made for the overpopulated plains of mediocrity. Swayed already?", " ", (0, a.jsx)("span", {
                                                className: "emoji-dark",
                                                children: "\uD83D\uDE0F"
                                            }), " But we’ve got a few more reasons for why you’d want to work with us:"]
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("section", {
                            className: "pin-about",
                            children: (0, a.jsx)(NewGifSection, {})
                        }), (0, a.jsx)(x.Z, {}), (0, a.jsx)("section", {
                            className: "client-about-content-section m-150",
                            id: "client-loveus",
                            children: (0, a.jsxs)("div", {
                                className: "first-sub-section",
                                children: [(0, a.jsx)("div", {
                                    className: "left-box-heading",
                                    children: (0, a.jsxs)("h2", {
                                        className: "client-anim-heading",
                                        children: [(0, a.jsx)("span", {
                                            className: "stroke",
                                            children: "clients"
                                        }), " love us."]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "right-box-content",
                                    children: (0, a.jsx)("p", {
                                        "data-jelly": !0,
                                        className: "client-anim-heading",
                                        children: (0, a.jsx)("span", {
                                            children: "It’s not just the eminence & superior quality of our work. It’s our attitude, our approach, our meticulous attention to detail, our ability to understand their business & their goals, and most of all, it’s the way we treat our clients –They walk in as clients and stay as friends! That’s why we say, we don’t work for clients, we work with our friends."
                                        })
                                    })
                                })]
                            })
                        }), (0, a.jsx)("section", {
                            className: "p-200",
                            children: (0, a.jsx)(carousel, {})
                        }), (0, a.jsx)("div", {
                            className: "m-150",
                            children: (0, a.jsx)(NextBox, {})
                        }), (0, a.jsx)("div", {
                            className: "desktop-footer",
                            children: (0, a.jsx)(p.Z, {})
                        }), (0, a.jsx)("div", {
                            className: "mobile-footer",
                            children: (0, a.jsx)(m.Z, {})
                        })]
                    })]
                })
            }
            r.ZP.config({
                nullTargetWarn: !1
            })
        },
        9121: function (e) {
            e.exports = {
                slide__caro: "Carousel_slide__caro__ckaQX"
            }
        },
        1268: function (e) {
            e.exports = {
                svgBackground: "VideoPlayer_svgBackground__AQs3L",
                cursorIconStyle: "VideoPlayer_cursorIconStyle__08AJ_"
            }
        }
    },
    function (e) {
        e.O(0, [8802, 990, 3386, 1664, 506, 1132, 5829, 5244, 3667, 3494, 5268, 3838, 9774, 2888, 179], function () {
            return e(e.s = 2196)
        }), _N_E = e.O()
    }
]);