(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5268], {
        33: function(e, a, s) {
            "use strict";
            var n = s(5893),
                t = s(7294),
                i = s(990),
                r = s(5675),
                c = s.n(r),
                l = s(5063),
                o = s.n(l);
            a.Z = function() {
                return (0, t.useEffect)(() => {
                    let e = document.querySelectorAll("#say"),
                        a = document.querySelectorAll(".contact-us-box"),
                        s = i.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".en-footer-section",
                                start: "top 85%"
                            }
                        });
                    return s.fromTo(e, {
                        rotationX: -120,
                        opacity: 0,
                        translateY: 300,
                        transformPerspective: "1000",
                        transformOrigin: "top center"
                    }, {
                        duration: .8,
                        rotationX: 0,
                        opacity: 1,
                        translateY: 0,
                        stagger: .4
                    }).fromTo(a, {
                        opacity: 0,
                        translateX: -200,
                        transformPerspective: "1000",
                        transformOrigin: "top center"
                    }, {
                        delay: -.5,
                        duration: .6,
                        opacity: 1,
                        translateX: 0,
                        stagger: .1
                    }), () => s.kill()
                }, []), (0, t.useEffect)(() => {
                    let e = i.ZP.timeline({
                            scrollTrigger: {
                                trigger: ".footer-section",
                                start: "top 90%"
                            }
                        }),
                        a = document.querySelectorAll(".footer-content .f__anim"),
                        s = document.querySelector(".f__anim-two");
                    return e.fromTo(a, {
                        y: 100,
                        opacity: 0
                    }, {
                        duration: 1,
                        opacity: 1,
                        y: 0,
                        stagger: .1
                    }).fromTo(s, {
                        y: 50,
                        opacity: 0
                    }, {
                        delay: -.8,
                        duration: .8,
                        opacity: 1,
                        y: 0
                    }), () => e.kill()
                }, []), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("footer", {
                        className: "footer-main",
                        children: [(0, n.jsxs)("div", {
                            className: "en-footer-section",
                            children: [(0, n.jsxs)("div", {
                                className: "en-f__content",
                                children: [(0, n.jsx)("p", {
                                    children: (0, n.jsx)("span", {
                                        className: "wt-400",
                                        id: "say",
                                        children: "Let's bring your"
                                    })
                                }), (0, n.jsx)("p", {
                                    children: (0, n.jsx)("span", {
                                        className: "wt-400 mr-11",
                                        id: "say",
                                        children: "ideas to life!"
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "right-en-box",
                                children: [(0, n.jsx)("div", {
                                    className: "image-box contact-us-box",
                                    children: (0, n.jsx)(c(), {
                                        src: "/assets/footer-main/Vector.png",
                                        className: "footer-dark-img",
                                        alt: "Footer Arrow Icon",
                                        title: "Footer Arrow Icon",
                                        width: 500,
                                        height: 500
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "contact-us-box",
                                    "data-cursor-text": "Say Hi !!",
                                    "data-cursor-color": "#5d5ad6",
                                    "data-cursor-size": "100px",
                                    children: (0, n.jsx)(o(), {
                                        href: "/get-in-touch",
                                        children: (0, n.jsx)("button", {
                                            children: "Contact Us"
                                        })
                                    })
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "footer-section",
                            children: (0, n.jsxs)("div", {
                                className: "footer-content",
                                children: [(0, n.jsxs)("div", {
                                    className: "left-section",
                                    children: [(0, n.jsxs)("div", {
                                        className: "mail f__anim",
                                        children: [(0, n.jsx)("h6", {
                                            children: "mail us"
                                        }), (0, n.jsx)("div", {
                                            className: "cb-outro-header",
                                            children: (0, n.jsx)("a", {
                                                href: "mailto:info@orgitech.com",
                                                "data-cursor-size": "80px",
                                                "data-cursor-exclusion": !0,
                                                className: "f__anim",
                                                children: "info@orgitech.com"
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "phone f__anim",
                                        children: [(0, n.jsx)("h6", {
                                            children: " even better call us"
                                        }), (0, n.jsxs)("div", {
                                            className: "num",
                                            children: [(0, n.jsx)("div", {
                                                className: "footer-nav-item f__anim",
                                                "data-cursor-exclusion": !0,
                                                "data-cursor-size": "80px",
                                                children: (0, n.jsx)("a", {
                                                    href: "tel:+951 900 3213",
                                                    children: (0, n.jsx)("span", {
                                                        "data-text": "+951 900 3213",
                                                        children: "+951 900 3213"
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "footer-nav-item f__anim",
                                                "data-cursor-exclusion": !0,
                                                "data-cursor-size": "80px",
                                                children: (0, n.jsx)("a", {
                                                    href: "tel:+951 900 3213",
                                                    children: (0, n.jsx)("span", {
                                                        "data-text": "+951 900 3213",
                                                        children: "+951 900 3213"
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "right-section",
                                    children: [(0, n.jsx)("h6", {
                                        className: "f__anim",
                                        children: "let's be friends"
                                    }), (0, n.jsxs)("div", {
                                        className: "socials",
                                        children: [(0, n.jsxs)("div", {
                                            className: "top-socials f__anim",
                                            children: [(0, n.jsx)("div", {
                                                className: "footer-nav-item",
                                                "data-cursor-exclusion": !0,
                                                "data-cursor-size": "80px",
                                                children: (0, n.jsx)("a", {
                                                    href: "https://www.facebook.com/orgitech?mibextid=tPfjzR",
                                                    target: "blank",
                                                    children: (0, n.jsx)("span", {
                                                        "data-text": "Facebook",
                                                        children: "Facebook"
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "footer-nav-item f__anim",
                                                "data-cursor-exclusion": !0,
                                                "data-cursor-size": "80px",
                                                children: (0, n.jsx)("a", {
                                                    href: "#",
                                                    target: "blank",
                                                    children: (0, n.jsx)("span", {
                                                        "data-text": "Instagram",
                                                        children: "Instagram"
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "footer-nav-item f__anim",
                                                "data-cursor-exclusion": !0,
                                                "data-cursor-size": "80px",
                                                children: (0, n.jsx)("a", {
                                                    target: "blank",
                                                    href: "#",
                                                    children: (0, n.jsx)("span", {
                                                        "data-text": "YouTube",
                                                        children: "YouTube"
                                                    })
                                                })
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "bottom-socials f__anim",
                                            children: [(0, n.jsx)("div", {
                                                className: "footer-nav-item",
                                                "data-cursor-exclusion": !0,
                                                "data-cursor-size": "80px",
                                                children: (0, n.jsx)("a", {
                                                    href: "https://www.linkedin.com/in/orgi-tech-a7778b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                                                    target: "blank",
                                                    children: (0, n.jsx)("span", {
                                                        "data-text": "LinkedIn",
                                                        children: "LinkedIn"
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "footer-nav-item",
                                                "data-cursor-exclusion": !0,
                                                "data-cursor-size": "80px",
                                                children: (0, n.jsx)("a", {
                                                    href: "#",
                                                    target: "blank",
                                                    children: (0, n.jsx)("span", {
                                                        "data-text": "Twitter",
                                                        children: "Twitter"
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "footer-nav-item",
                                                "data-cursor-exclusion": !0,
                                                "data-cursor-size": "80px",
                                                children: (0, n.jsx)("a", {
                                                    href: "#",
                                                    target: "blank",
                                                    children: (0, n.jsx)("span", {
                                                        "data-text": "Behance",
                                                        children: "Behance"
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: "end-footer-he",
                            children: (0, n.jsx)("div", {
                                className: "end-footer-content",
                                children: (0, n.jsx)("div", {
                                    className: "center f__anim-two",
                                    children: (0, n.jsx)("span", {
                                        children: "\xa9 2023 Enigma Digital Consulting, LLP. All Rights Reserved. All Wrongs Reversed."
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        4285: function(e, a, s) {
            "use strict";
            s.d(a, {
                Z: function() {
                    return Header
                }
            });
            var n = s(5893),
                t = s(7294),
                i = s(5675),
                r = s.n(i),
                c = s(990),
                l = s(5063),
                o = s.n(l),
                d = s(1163);
            let handleHover = e => {
                    c.ZP.to(e.target, {
                        duration: .3,
                        y: 5,
                        ease: "power1.inOut"
                    })
                },
                handleHoverExit = e => {
                    c.ZP.to(e.target, {
                        duration: .3,
                        y: 0,
                        ease: "power1.inOut"
                    })
                };
            var Header_Menu = e => {
                    let {
                        state: a
                    } = e, s = (0, d.useRouter)(), i = (0, t.useRef)(), r = (0, t.useRef)(), l = (0, t.useRef)(), m = (0, t.useRef)(), h = (0, t.useRef)(), u = (0, t.useRef)(), x = (0, t.useRef)(), j = (0, t.useRef)(), g = (0, t.useRef)(), p = (0, t.useRef)(), f = (0, t.useRef)(), v = (0, t.useRef)(), N = (0, t.useRef)(), b = (0, t.useRef)(), k = (0, t.useRef)(), y = (0, t.useRef)(), w = (0, t.useRef)(), _ = (0, t.useRef)();
                    return (0, t.useEffect)(() => {
                        let e = document.querySelectorAll(".menuLoaderBar");
                        !1 === a.clicked ? (c.ZP.to(r.current, {
                            opacity: 0,
                            duration: .2,
                            delay: 0
                        }), c.ZP.to(e, {
                            width: "0",
                            duration: .4,
                            stagger: .1,
                            delay: 0
                        }), c.ZP.to([i.current], {
                            duration: 0,
                            delay: 1.2,
                            css: {
                                display: "none"
                            }
                        })) : (!0 === a.clicked || !0 === a.clicked && null === a.initial) && (c.ZP.to([i.current], {
                            duration: 0,
                            css: {
                                display: "block"
                            }
                        }), c.ZP.to(e, {
                            width: "100%",
                            duration: .4,
                            stagger: .1
                        }), c.ZP.to(r.current, {
                            opacity: 1,
                            duration: .5,
                            delay: .6
                        }), c.ZP.to([l.current, m.current, h.current, u.current, x.current, _.current], {
                            duration: 0,
                            rotationX: 0,
                            opacity: 1,
                            translateY: 0,
                            transformPerspective: "1000",
                            transformOrigin: "top center"
                        }), c.ZP.from([l.current, m.current, h.current, u.current, x.current, _.current], {
                            delay: .5,
                            duration: .7,
                            opacity: 0,
                            translateY: 200,
                            rotationX: -80,
                            stagger: {
                                amount: .4
                            }
                        }), c.ZP.from([j.current, g.current, p.current, f.current, v.current, N.current, b.current, k.current, y.current, w.current], {
                            delay: .7,
                            duration: .7,
                            opacity: 0,
                            translateY: "200",
                            rotationX: "-100deg",
                            stagger: {
                                amount: .4
                            }
                        }))
                    }, [a]), (0, n.jsxs)("div", {
                        ref: i,
                        className: "nav",
                        id: "mb_nav",
                        children: [(0, n.jsxs)("div", {
                            className: "menuLoaderBars",
                            children: [(0, n.jsx)("span", {
                                className: "menuLoaderBar"
                            }), (0, n.jsx)("span", {
                                className: "menuLoaderBar"
                            }), (0, n.jsx)("span", {
                                className: "menuLoaderBar"
                            }), (0, n.jsx)("span", {
                                className: "menuLoaderBar"
                            }), (0, n.jsx)("span", {
                                className: "menuLoaderBar"
                            })]
                        }), (0, n.jsx)("div", {
                            ref: r,
                            className: "menu-layer",
                            "data-cursor-exclusion": !0,
                            children: (0, n.jsxs)("div", {
                                id: "menu-wrapper",
                                children: [(0, n.jsx)("div", {
                                    className: "menu-logo-conatainer",
                                    children: (0, n.jsx)("div", {
                                        "data-cursor-size": "60px",
                                        "data-cursor-opaque": !0,
                                        children: (0, n.jsx)(o(), {
                                            href: "/",
                                            children: (0, n.jsx)("img", {
                                                src: "/assets/header-logo/enigma-en-logo.svg",
                                                alt: "website logo",
                                                title: "Enigma Digital"
                                            })
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "wrapper",
                                    children: (0, n.jsx)("div", {
                                        className: "menu-links",
                                        children: (0, n.jsxs)("div", {
                                            className: "menu-content",
                                            children: [(0, n.jsx)("div", {
                                                className: "content-left",
                                                children: (0, n.jsx)("div", {
                                                    className: "content-left-body",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "content-left-body-row",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "content-left-body-row-column",
                                                            children: [(0, n.jsx)("div", {
                                                                className: "content-heading nav__link",
                                                                ref: l,
                                                                children: (0, n.jsxs)(o(), {
                                                                    href: "/who-we-are",
                                                                    className: "btn-music",
                                                                    children: [(0, n.jsx)("span", {
                                                                        className: "content-heading-serial",
                                                                        children: "01"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "content-heading-slideup text-stroke-fill-ltr",
                                                                        "data-fill": "About",
                                                                        onMouseEnter: e => handleHover(e),
                                                                        onMouseOut: e => handleHoverExit(e),
                                                                        children: (0, n.jsx)("span", {
                                                                            className: "/who-we-are" == s.pathname ? "activeMenu" : "",
                                                                            children: "About"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, n.jsx)("div", {
                                                                className: "content-heading nav__link",
                                                                ref: m,
                                                                children: (0, n.jsxs)(o(), {
                                                                    href: "/services",
                                                                    className: "btn-music",
                                                                    children: [(0, n.jsx)("span", {
                                                                        className: "content-heading-serial",
                                                                        children: "02"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "content-heading-slideup text-stroke-fill-ltr",
                                                                        "data-fill": "Expertise",
                                                                        onMouseEnter: e => handleHover(e),
                                                                        onMouseOut: e => handleHoverExit(e),
                                                                        children: (0, n.jsx)("span", {
                                                                            className: "/services" == s.pathname ? "activeMenu" : "",
                                                                            children: "Expertise"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, n.jsx)("div", {
                                                                className: "content-heading nav__link",
                                                                ref: h,
                                                                children: (0, n.jsxs)(o(), {
                                                                    href: "/our-portfolio",
                                                                    className: "btn-music",
                                                                    children: [(0, n.jsx)("span", {
                                                                        className: "content-heading-serial",
                                                                        children: "03"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "content-heading-slideup text-stroke-fill-ltr",
                                                                        "data-fill": "Works",
                                                                        onMouseEnter: e => handleHover(e),
                                                                        onMouseOut: e => handleHoverExit(e),
                                                                        children: (0, n.jsx)("span", {
                                                                            className: "/our-portfolio" == s.pathname ? "activeMenu" : "",
                                                                            children: "Works"
                                                                        })
                                                                    })]
                                                                })
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "content-left-body-row-column",
                                                            children: [(0, n.jsx)("div", {
                                                                className: "content-heading nav__link",
                                                                ref: u,
                                                                children: (0, n.jsxs)(o(), {
                                                                    href: "/blog",
                                                                    className: "btn-music",
                                                                    children: [(0, n.jsx)("span", {
                                                                        className: "content-heading-serial",
                                                                        children: "04"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "content-heading-slideup text-stroke-fill-ltr",
                                                                        "data-fill": "Insights",
                                                                        onMouseEnter: e => handleHover(e),
                                                                        onMouseOut: e => handleHoverExit(e),
                                                                        children: (0, n.jsx)("span", {
                                                                            className: "/blog" == s.pathname ? "activeMenu" : "",
                                                                            children: "Insights"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, n.jsx)("div", {
                                                                className: "content-heading nav__link",
                                                                ref: x,
                                                                children: (0, n.jsxs)(o(), {
                                                                    href: "/careers",
                                                                    className: "btn-music",
                                                                    children: [(0, n.jsx)("span", {
                                                                        className: "content-heading-serial",
                                                                        children: "05"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "content-heading-slideup text-stroke-fill-ltr",
                                                                        "data-fill": "Careers",
                                                                        onMouseEnter: e => handleHover(e),
                                                                        onMouseOut: e => handleHoverExit(e),
                                                                        children: (0, n.jsx)("span", {
                                                                            className: "/careers" == s.pathname ? "activeMenu" : "",
                                                                            children: "Careers"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, n.jsx)("div", {
                                                                className: "content-heading nav__link",
                                                                ref: _,
                                                                children: (0, n.jsxs)(o(), {
                                                                    href: "/get-in-touch",
                                                                    className: "btn-music",
                                                                    children: [(0, n.jsx)("span", {
                                                                        className: "content-heading-serial",
                                                                        children: "06"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "content-heading-slideup text-stroke-fill-ltr",
                                                                        "data-fill": "Contact",
                                                                        onMouseEnter: e => handleHover(e),
                                                                        onMouseOut: e => handleHoverExit(e),
                                                                        children: (0, n.jsx)("span", {
                                                                            className: "/get-in-touch" == s.pathname ? "activeMenu" : "",
                                                                            children: "Contact"
                                                                        })
                                                                    })]
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "content-right",
                                                children: (0, n.jsxs)("div", {
                                                    className: "content-right-body",
                                                    children: [(0, n.jsxs)("div", {
                                                        className: "content-right-body-top",
                                                        children: [(0, n.jsx)("div", {
                                                            className: "content-title  nav__link",
                                                            ref: j,
                                                            children: "let's be friends"
                                                        }), (0, n.jsxs)("div", {
                                                            className: "content-right-body-socials",
                                                            children: [(0, n.jsxs)("div", {
                                                                className: "content-right-body-socials-column",
                                                                children: [(0, n.jsx)("div", {
                                                                    className: "cb-menu-nav-item nav__link",
                                                                    ref: g,
                                                                    "data-cursor-opaque": !0,
                                                                    "data-cursor-size": "50px",
                                                                    children: (0, n.jsx)("a", {
                                                                        target: "blank",
                                                                        href: "https://www.facebook.com/orgitech?mibextid=tPfjzR",
                                                                        children: (0, n.jsx)("span", {
                                                                            "data-text": "Facebook",
                                                                            children: "Facebook"
                                                                        })
                                                                    })
                                                                }), (0, n.jsx)("div", {
                                                                    className: "cb-menu-nav-item nav__link",
                                                                    ref: p,
                                                                    "data-cursor-opaque": !0,
                                                                    "data-cursor-size": "50px",
                                                                    children: (0, n.jsx)("a", {
                                                                        target: "blank",
                                                                        href: "#",
                                                                        children: (0, n.jsx)("span", {
                                                                            "data-text": "Instagram",
                                                                            children: "Instagram"
                                                                        })
                                                                    })
                                                                }), (0, n.jsx)("div", {
                                                                    className: "cb-menu-nav-item nav__link",
                                                                    ref: f,
                                                                    "data-cursor-opaque": !0,
                                                                    "data-cursor-size": "50px",
                                                                    children: (0, n.jsx)("a", {
                                                                        target: "blank",
                                                                        href: "#",
                                                                        children: (0, n.jsx)("span", {
                                                                            "data-text": "YouTube",
                                                                            children: "YouTube"
                                                                        })
                                                                    })
                                                                })]
                                                            }), (0, n.jsxs)("div", {
                                                                className: "content-right-body-socials-column",
                                                                children: [(0, n.jsx)("div", {
                                                                    className: "cb-menu-nav-item nav__link",
                                                                    ref: v,
                                                                    "data-cursor-opaque": !0,
                                                                    "data-cursor-size": "50px",
                                                                    children: (0, n.jsx)("a", {
                                                                        target: "blank",
                                                                        href: "#",
                                                                        children: (0, n.jsx)("span", {
                                                                            "data-text": "Twitter",
                                                                            children: "Twitter"
                                                                        })
                                                                    })
                                                                }), (0, n.jsx)("div", {
                                                                    className: "cb-menu-nav-item nav__link",
                                                                    ref: N,
                                                                    "data-cursor-opaque": !0,
                                                                    "data-cursor-size": "50px",
                                                                    children: (0, n.jsx)("a", {
                                                                        target: "blank",
                                                                        href: "https://www.linkedin.com/in/orgi-tech-a7778b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                                                                        children: (0, n.jsx)("span", {
                                                                            "data-text": "LinkedIn",
                                                                            children: "LinkedIn"
                                                                        })
                                                                    })
                                                                }), (0, n.jsx)("div", {
                                                                    className: "cb-menu-nav-item nav__link",
                                                                    ref: b,
                                                                    "data-cursor-opaque": !0,
                                                                    "data-cursor-size": "50px",
                                                                    children: (0, n.jsx)("a", {
                                                                        target: "blank",
                                                                        href: "#",
                                                                        children: (0, n.jsx)("span", {
                                                                            "data-text": "Behance",
                                                                            children: "Behance"
                                                                        })
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    }), (0, n.jsxs)("div", {
                                                        className: "content-right-body-bottom",
                                                        children: [(0, n.jsx)("div", {
                                                            className: "content-right-body-title content-title nav__link",
                                                            ref: k,
                                                            children: "work with us"
                                                        }), (0, n.jsx)("div", {
                                                            className: "content-right-body-more",
                                                            children: (0, n.jsxs)("div", {
                                                                className: "content-right-body-more-column",
                                                                children: [(0, n.jsx)("div", {
                                                                    className: "content-link  mb-3",
                                                                    "data-cursor-size": "30px",
                                                                    "data-cursor-opaque": !0,
                                                                    children: (0, n.jsx)("div", {
                                                                        className: "cb-outro-header nav__link",
                                                                        ref: y,
                                                                        children: (0, n.jsx)("a", {
                                                                            href: "mailto:info@orgitech.com",
                                                                            "data-cursor-size": "70px",
                                                                            children: "info@orgitech.com"
                                                                        })
                                                                    })
                                                                }), (0, n.jsx)("div", {
                                                                    className: "num menu-num",
                                                                    children: (0, n.jsx)("div", {
                                                                        className: "cb-menu-nav-item nav__link",
                                                                        ref: w,
                                                                        "data-cursor-opaque": !0,
                                                                        "data-cursor-size": "50px",
                                                                        children: (0, n.jsx)("a", {
                                                                            href: "tel:+951 900 3213",
                                                                            children: (0, n.jsx)("span", {
                                                                                "data-text": "+951 900 3213",
                                                                                children: "+951 900 3213"
                                                                            })
                                                                        })
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                },
                Header_Hamburger = () => {
                    let e = (0, t.useRef)(),
                        a = (0, t.useRef)(null);
                    (0, t.useEffect)(() => {
                        c.ZP.from(e.current, {
                            duration: 1.5,
                            ease: "power3.inOut"
                        })
                    }, []);
                    let [s, i] = (0, t.useState)({
                        initial: !1,
                        clicked: null
                    }), [r, l] = (0, t.useState)(!1), btnDisable = () => {
                        l(!r), setTimeout(() => {
                            l(!1)
                        }, 1200)
                    }, o = (0, t.useRef)(), d = c.ZP.timeline();
                    return (0, n.jsxs)("header", {
                        className: "hamburger",
                        children: [(0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsx)("div", {
                                className: "wrapper",
                                children: (0, n.jsx)("div", {
                                    className: "inner-header",
                                    children: (0, n.jsx)("div", {
                                        className: "menu menu-fixed",
                                        ref: e,
                                        children: (0, n.jsx)("div", {
                                            className: "menu header-right-button cross menu--1",
                                            id: "header-fixed",
                                            children: (0, n.jsx)("button", {
                                                ref: a,
                                                id: "btn-music",
                                                "aria-label": "menu",
                                                children: (0, n.jsxs)("label", {
                                                    "data-cursor-exclusion": !0,
                                                    "data-cursor-size": "60px",
                                                    children: [(0, n.jsx)("input", {
                                                        type: "checkbox",
                                                        ref: o,
                                                        disabled: r,
                                                        onClick: () => {
                                                            btnDisable(), !1 === s.initial ? (i({
                                                                initial: null,
                                                                clicked: !0,
                                                                menuName: "CLOSE"
                                                            }), d.play()) : !0 === s.clicked ? (i({
                                                                clicked: !s.clicked,
                                                                menuName: "MENU"
                                                            }), d.reverse()) : !1 === s.clicked && (i({
                                                                clicked: !s.clicked,
                                                                menuName: "CLOSE"
                                                            }), d.play())
                                                        },
                                                        id: "menu"
                                                    }), (0, n.jsxs)("svg", {
                                                        viewBox: "0 0 100 100",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0, n.jsx)("circle", {
                                                            cx: "50",
                                                            cy: "50",
                                                            r: "30"
                                                        }), (0, n.jsx)("path", {
                                                            className: "line--1",
                                                            d: "M0 40h62c13 0 6 28-4 18L35 35"
                                                        }), (0, n.jsx)("path", {
                                                            className: "line--2",
                                                            d: "M0 50h70"
                                                        }), (0, n.jsx)("path", {
                                                            className: "line--3",
                                                            d: "M0 60h62c13 0 6-28-4-18L35 65"
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, n.jsx)(Header_Menu, {
                            state: s
                        })]
                    })
                },
                m = s(1132),
                h = s(6260),
                u = s(2608),
                x = s.n(u),
                Showreel = e => {
                    let {
                        show: a,
                        onClose: s,
                        children: i
                    } = e, r = (0, t.useRef)(null);
                    return ((0, t.useEffect)(() => {
                        if (a) {
                            let e = c.ZP.timeline();
                            return e.fromTo(r.current, {
                                opacity: 0,
                                translateY: -100
                            }, {
                                duration: 1,
                                translateY: 0,
                                opacity: 1
                            }), () => e.kill()
                        }
                    }, [a]), a) ? (0, n.jsx)("button", {
                        onClick: s,
                        className: "".concat(x().btnClose),
                        id: "showreel",
                        children: (0, n.jsx)("div", {
                            className: x().modalWrapper,
                            children: (0, n.jsx)("div", {
                                className: x().modal,
                                ref: r,
                                children: i
                            })
                        })
                    }) : null
                };

            function Header() {
                let [e, a] = (0, t.useState)(!1), [s, i] = (0, t.useState)("true" === localStorage.getItem("invertText")), [l, d] = (0, t.useState)(s ? "/assets/dark/moon.svg" : "/assets/dark/sun.svg");
                (0, t.useEffect)(() => {
                    localStorage.setItem("invertText", s), d(s ? "/assets/dark/moon.svg" : "/assets/dark/sun.svg");
                    let e = document.body;
                    s ? e.classList.add("dark") : e.classList.remove("dark")
                }, [s]);
                let u = (0, t.useRef)(null);
                return (0, t.useEffect)(() => {
                    let e = u.current,
                        a = c.ZP.timeline();
                    return a.fromTo(e, {
                        scale: 0,
                        rotate: "-280deg"
                    }, {
                        scale: 1,
                        rotate: "0deg",
                        duration: .7
                    }), () => {
                        a.kill()
                    }
                }, [s]), 
                // console.clear(), 
                (0, n.jsxs)("header", {
                    className: "header-section",
                    children: [(0, n.jsx)(m.E.div, {
                        className: "header-logo",
                        initial: {
                            opacity: 0,
                            y: -50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 6,
                            duration: .5,
                            transition: h.mZ
                        },
                        children: (0, n.jsx)(o(), {
                            href: "/",
                            children: (0, n.jsx)(r(), {
                                src: "/assets/header-logo/enigma-en-logo.svg",
                                width: 80,
                                height: 80,
                                alt: "Enigma Digital Logo",
                                title: "Enigma Digital",
                                className: "main-logo svg-dark-mode",
                                "data-cursor-size": "60px",
                                "data-cursor-exclusion": !0,
                                id: "main-logo",
                                priority: !0
                            })
                        })
                    }), (0, n.jsxs)("div", {
                        className: "right-section-header",
                        children: [(0, n.jsxs)("div", {
                            className: "showreel",
                            children: [(0, n.jsx)(m.E.div, {
                                initial: {
                                    opacity: 0,
                                    y: -50
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .5,
                                    delay: 6,
                                    transition: h.mZ
                                },
                                children: (0, n.jsx)("button", {
                                    className: "btn-primary",
                                    "aria-label": "showreel",
                                    onClick: () => {
                                        a(!0)
                                    },
                                    "data-cursor-magnetic": !0,
                                    "data-cursor-exclusion": !0,
                                    "data-cursor-size": "60px",
                                    children: "Showreel'23"
                                })
                            }), (0, n.jsx)("div", {
                                id: "modal-video-wrapper",
                                style: {
                                    position: "fixed",
                                    top: "0",
                                    left: "0",
                                    zIndex: "998"
                                },
                                "data-cursor-text": "Close",
                                "data-cursor-size": "100px",
                                "data-cursor-color": "#000",
                                children: (0, n.jsx)(Showreel, {
                                    show: e,
                                    onClose: () => {
                                        a(!1)
                                    },
                                    "data-cursor-text": "Close",
                                    "data-cursor-color": "#000",
                                    "data-cursor-size": "100px",
                                    children: (0, n.jsx)("video", {
                                        src: "/assets/reels/showreel.mp4",
                                        autoPlay: !0,
                                        loop: !0,
                                        preload: "auto"
                                    })
                                })
                            })]
                        }), (0, n.jsx)(m.E.div, {
                            initial: {
                                opacity: 0,
                                y: -50
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 6,
                                duration: .5,
                                transition: h.mZ
                            },
                            children: (0, n.jsx)("button", {
                                "aria-label": "darkmode",
                                onClick: () => i(!s),
                                className: "dark-mode-btn",
                                ref: u,
                                children: (0, n.jsx)(r(), {
                                    src: l,
                                    alt: "Dark Mode Icon",
                                    title: "dark mode icon",
                                    width: 25,
                                    height: 25,
                                    className: "gsap-dark-img",
                                    priority: !0
                                })
                            })
                        }), (0, n.jsx)(Header_Hamburger, {})]
                    })]
                })
            }
        },
        793: function(e, a, s) {
            "use strict";
            s.d(a, {
                Z: function() {
                    return FooterMobile
                }
            });
            var n = s(5893),
                t = s(7294),
                i = s(990),
                r = s(6546),
                c = s.n(r);

            function FooterMobile() {
                return (0, t.useEffect)(() => {
                    let e = document.querySelectorAll("#say-anim"),
                        a = document.querySelectorAll("#say-anim-links"),
                        s = i.ZP.context(() => {
                            let s = i.ZP.timeline({
                                scrollTrigger: {
                                    trigger: ".mobile-footer",
                                    start: "top 85%"
                                }
                            });
                            s.fromTo(e, {
                                rotationX: -120,
                                opacity: 0,
                                translateY: 300,
                                transformPerspective: "1000",
                                transformOrigin: "top center"
                            }, {
                                duration: 1,
                                rotationX: 0,
                                opacity: 1,
                                translateY: 0,
                                stagger: .2
                            }).from(a, {
                                opacity: 0,
                                y: 100,
                                duration: .8,
                                delay: -.8,
                                stagger: .1
                            })
                        });
                    return () => s.revert()
                }), (0, n.jsx)("div", {
                    children: (0, n.jsxs)("div", {
                        className: "contact mobile-footer",
                        children: [(0, n.jsxs)("div", {
                            className: "contact-content",
                            children: [(0, n.jsxs)("div", {
                                className: "contact-content-heading",
                                children: [(0, n.jsx)("span", {
                                    id: "say-anim",
                                    children: "Let's bring your"
                                }), (0, n.jsx)("span", {
                                    id: "say-anim",
                                    className: "contact-content-heading-sub",
                                    children: "ideas to life!"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "contact-content-mail",
                                children: [(0, n.jsx)("div", {
                                    className: "contact-content-mail-title",
                                    id: "say-anim-links",
                                    children: "mail us at"
                                }), (0, n.jsxs)("div", {
                                    className: "contact-content-mail-desc",
                                    id: "say-anim-links",
                                    children: [(0, n.jsx)("a", {
                                        href: "mailto:info@orgitech.com",
                                        children: "info@orgitech.com"
                                    }), (0, n.jsx)("div", {
                                        className: "contact-content-mail-desc-underline"
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "contact-content-call",
                                children: [(0, n.jsx)("div", {
                                    className: "contact-content-call-title",
                                    id: "say-anim-links",
                                    children: "even better call us"
                                }), (0, n.jsx)("div", {
                                    className: "contact-content-call-desc",
                                    id: "say-anim-links",
                                    children: (0, n.jsxs)("a", {
                                        href: "tel:+951 900 3213",
                                        style: {
                                            letterSpacing: "1.3px"
                                        },
                                        children: [(0, n.jsx)("span", {
                                            children: "+91"
                                        }), " 8178 026 136"]
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "contact-content-call-desc",
                                    id: "say-anim-links",
                                    children: (0, n.jsxs)("a", {
                                        href: "tel:+951 900 3213",
                                        children: [(0, n.jsx)("span", {
                                            children: "+91"
                                        }), " 7303 644 520"]
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "contact-content-socials",
                                children: [(0, n.jsxs)("div", {
                                    className: "contact-content-socials-row",
                                    children: [(0, n.jsx)("div", {
                                        className: "contact-content-socials-icon",
                                        id: "say-anim-links",
                                        children: (0, n.jsx)("a", {
                                            target: "blank",
                                            href: "https://www.facebook.com/orgitech?mibextid=tPfjzR",
                                            children: (0, n.jsx)("span", {
                                                children: "Facebook"
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "contact-content-socials-icon",
                                        id: "say-anim-links",
                                        children: (0, n.jsx)("a", {
                                            target: "blank",
                                            href: "#",
                                            children: (0, n.jsx)("span", {
                                                children: "Instagram"
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "contact-content-socials-icon",
                                        id: "say-anim-links",
                                        children: (0, n.jsx)("a", {
                                            target: "blank",
                                            href: "#",
                                            children: (0, n.jsx)("span", {
                                                "data-text": "YouTube",
                                                children: "YouTube"
                                            })
                                        })
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "contact-content-socials-row",
                                    children: [(0, n.jsx)("div", {
                                        className: "contact-content-socials-icon",
                                        id: "say-anim-links",
                                        children: (0, n.jsx)("a", {
                                            target: "blank",
                                            href: "https://www.linkedin.com/in/orgi-tech-a7778b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                                            children: (0, n.jsx)("span", {
                                                children: "LinkedIn"
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "contact-content-socials-icon",
                                        id: "say-anim-links",
                                        children: (0, n.jsx)("a", {
                                            target: "blank",
                                            href: "#",
                                            children: (0, n.jsx)("span", {
                                                children: "Twitter"
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "contact-content-socials-icon",
                                        id: "say-anim-links",
                                        children: (0, n.jsx)("a", {
                                            target: "blank",
                                            href: "#",
                                            children: (0, n.jsx)("span", {
                                                children: "Behance"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "footer",
                            children: (0, n.jsxs)("div", {
                                className: "footer-mobile",
                                children: [(0, n.jsx)("div", {
                                    className: "footer-hr"
                                }), (0, n.jsx)("div", {
                                    className: "footer-copyright",
                                    children: (0, n.jsx)("div", {
                                        className: "footer-copyright-label",
                                        id: "say-anim-links",
                                        children: "\xa9 2023 Orgitech Digital Consulting, LLP. All Rights Reserved. All Wrongs Reversed."
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
            i.ZP.registerPlugin(c())
        },
        2608: function(e) {
            e.exports = {
                modalWrapper: "modal_modalWrapper__E7zhu",
                modal: "modal_modal__gGnuY",
                fadeInDown: "modal_fadeInDown__yAdH9",
                all: "modal_all___SSn2",
                btnClose: "modal_btnClose__rQrei"
            }
        }
    }
]);