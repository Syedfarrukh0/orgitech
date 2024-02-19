(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9195], {
        3899: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
                return t(8642)
            }])
        },
        6357: function(e, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return Pagination_Pagination
                }
            });
            var s = t(5893),
                i = t(5063),
                n = t.n(i),
                r = JSON.parse('{"homepage":"https://weareenigma.com/"}');
            let {
                homepage: l = ""
            } = r;
            var Pagination_Pagination = e => {
                let {
                    pagesCount: a,
                    currentPage: t,
                    basePath: i
                } = e, r = "".concat(i, "/"), l = a > 1 && t > 1, o = a > 1 && t < a, c = function() {
                    let e = a,
                        s = 0;
                    if (a > 9) {
                        e = 9;
                        let i = Math.ceil(4.5),
                            n = t <= i,
                            r = t > a - i;
                        hasNextDots = !r, n || (hasPrevDots = !0, s = r ? a - 9 : t - i)
                    }
                    return [...Array(e)].map((e, a) => a + 1 + s)
                }();
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                        className: "blog-pagi-container",
                        children: (0, s.jsxs)("div", {
                            className: "pagi-section",
                            children: [(0, s.jsx)(n(), {
                                className: "pagi-num ".concat(l ? "" : "disabled"),
                                href: l ? "".concat(r).concat(t - 1) : "#",
                                children: (0, s.jsx)("img", {
                                    className: "w-3 h-3 rotate-180",
                                    src: "/assets/icons/next.png",
                                    alt: "previous button",
                                    title: "previous page"
                                })
                            }), (0, s.jsx)("ul", {
                                className: "pagi-number-container",
                                children: c.map(e => (0, s.jsx)("li", {
                                    className: "pagi-num ".concat(e === t ? "active" : ""),
                                    children: (0, s.jsx)(n(), {
                                        href: "".concat(r).concat(e),
                                        "aria-label": "Goto Page ".concat(e),
                                        children: (0, s.jsx)("span", {
                                            children: e
                                        })
                                    })
                                }, e))
                            }), (0, s.jsx)(n(), {
                                className: "pagi-num ".concat(o ? "" : "disabled"),
                                href: o ? "".concat(r).concat(t + 1) : "#",
                                children: (0, s.jsx)("img", {
                                    className: "w-3 h-3",
                                    src: "/assets/icons/next.png",
                                    alt: "next button",
                                    title: "next page"
                                })
                            })]
                        })
                    })
                })
            }
        },
        3047: function(e, a, t) {
            "use strict";
            var s = t(5893),
                i = t(7294),
                n = t(990);
            a.Z = e => {
                let {
                    text: a
                } = e;
                return (0, i.useEffect)(() => {
                    let e = document.querySelectorAll(".mainLoaderBar"),
                        a = n.ZP.timeline(),
                        t = n.ZP.context(() => {
                            a.from(".loader-wrap-heading p", {
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
                }, []), (0, s.jsxs)("div", {
                    className: "loader-wrap",
                    id: "loader",
                    children: [(0, s.jsxs)("div", {
                        className: "mainLoaderBg",
                        children: [(0, s.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        }), (0, s.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        }), (0, s.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        }), (0, s.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        }), (0, s.jsx)("span", {
                            className: "mainLoaderBar",
                            id: "loaderbars"
                        })]
                    }), (0, s.jsx)("div", {
                        className: "loader-wrap-heading",
                        children: (0, s.jsx)("span", {
                            children: (0, s.jsx)("p", {
                                children: a
                            })
                        })
                    })]
                })
            }
        },
        8642: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                __N_SSG: function() {
                    return B
                },
                default: function() {
                    return Blog
                }
            });
            var s = t(5893),
                i = t(7294),
                n = t(7587),
                r = t(6357),
                l = t(6732),
                o = t(6053),
                c = t(4285),
                d = t(33),
                g = t(793),
                u = t(3047),
                m = t(4791),
                h = t(9615),
                p = t(5675),
                x = t.n(p),
                j = t(5063),
                f = t.n(j),
                y = t(8260),
                WpBlogs_FeaturedPost = e => {
                    let {
                        post: a
                    } = e;
                    if (!a) return null;
                    let t = (0, y.Z)(new Date(a.date), "dd/MM/yyyy");
                    return (0, s.jsx)("div", {
                        className: "blog-featured-post",
                        children: (0, s.jsxs)("div", {
                            className: "blog-feat-post-container",
                            children: [(0, s.jsxs)("div", {
                                className: "blog-feat-img-contain",
                                id: "fadeUp",
                                children: [(0, s.jsx)(x(), {
                                    src: a.featuredImage.sourceUrl,
                                    width: 1e3,
                                    height: 1e3,
                                    alt: a.title,
                                    title: a.title,
                                    priority: !0
                                }), (0, s.jsx)("p", {
                                    className: "blog-list-tag",
                                    children: "Featured"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "featured-post-content",
                                children: [(0, s.jsx)("div", {
                                    className: "feat-post-content-date",
                                    id: "fadeUp",
                                    children: (0, s.jsxs)("p", {
                                        children: ["By ", a.author.name, " / ", t]
                                    })
                                }), (0, s.jsx)("h1", {
                                    className: "feat-post-title",
                                    "data-jelly": !0,
                                    id: "fadeUp",
                                    children: a.title
                                }), (0, s.jsx)("div", {
                                    id: "fadeUp",
                                    dangerouslySetInnerHTML: {
                                        __html: a.excerpt
                                    },
                                    className: "feat-post-discription"
                                }), (0, s.jsx)(f(), {
                                    id: "fadeUp",
                                    "data-cursor-size": "60px",
                                    "data-cursor-exclusion": !0,
                                    className: "en-link-under feat-post-link",
                                    href: "/".concat(a.slug),
                                    children: (0, s.jsxs)("span", {
                                        children: ["Read More ", (0, s.jsx)("img", {
                                            className: "w-7 h-7 dark:invert-0",
                                            alt: "arrow icon",
                                            title: "arrow icon",
                                            src: "/assets/icons/arrow-right.svg"
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                N = t(990),
                b = t(6546),
                v = t.n(b),
                w = t(2962),
                P = t(9008),
                _ = t.n(P);
            N.ZP.registerPlugin(v());
            var B = !0;

            function Blog(e) {
                let {
                    posts: a,
                    featuredPost: t,
                    pagination: p,
                    categories: x
                } = e, [j, f] = (0, i.useState)("all");
                return (0, i.useEffect)(() => {
                    let e = N.ZP.timeline();
                    return e.fromTo("#fadeUp", {
                        opacity: 0,
                        y: 100
                    }, {
                        opacity: 1,
                        y: 0,
                        stagger: .1,
                        duration: 1,
                        delay: 3.5
                    }), () => e.kill()
                }, []), (0, i.useEffect)(() => {
                    let e = document.querySelectorAll(".blog-anim");
                    return e.forEach(e => {
                        N.ZP.fromTo(e, {
                            opacity: 0,
                            y: 100
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            scrollTrigger: {
                                trigger: e,
                                start: "top 85%",
                                ease: "power2.easeOut"
                            }
                        })
                    }), () => {
                        N.ZP.timeline().clear()
                    }
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(w.PB, {
                        title: "The Enigma Blog | Discover, Learn & Be Future Ready",
                        description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
                        openGraph: {
                            url: "https://weareenigma.com/blog",
                            title: "The Enigma Blog | Discover, Learn & Be Future Ready",
                            description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
                            images: [{
                                url: "https://weareenigma.com/assets/featured-images/blog.png",
                                width: 1200,
                                height: 630,
                                alt: "Blogs Feature Image",
                                type: "image/png"
                            }],
                            siteName: "Enigma Digital"
                        },
                        additionalMetaTags: [{
                            name: "twitter:title",
                            content: "The Enigma Blog | Discover, Learn & Be Future Ready"
                        }, {
                            name: "twitter:description",
                            content: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends."
                        }, {
                            name: "twitter:image",
                            content: "https://weareenigma.com/assets/featured-images/blog.png"
                        }]
                    }), (0, s.jsxs)(_(), {
                        children: [(0, s.jsx)("link", {
                            rel: "canonical",
                            href: "https://weareenigma.com/blog"
                        }), (0, s.jsx)("link", {
                            rel: "alternate",
                            href: "https://weareenigma.com/blog",
                            hreflang: "x-default"
                        }), (0, s.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "WebPage",
                                    mainEntityOfPage: {
                                        "@type": "WebPage",
                                        "@id": "https://weareenigma.com/blog"
                                    },
                                    name: "Blog",
                                    description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
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
                    }), (0, s.jsx)(o.Z, {}), (0, s.jsx)(l.C, {
                        isGelly: !0
                    }), (0, s.jsx)(u.Z, {
                        text: "Our Thoughts & Resources"
                    }), (0, s.jsx)(m.Z, {}), (0, s.jsxs)("main", {
                        children: [(0, s.jsx)(c.Z, {}), t && (0, s.jsx)(WpBlogs_FeaturedPost, {
                            post: t
                        }), (0, s.jsxs)("section", {
                            className: "blogs-sub-section",
                            children: [(0, s.jsx)("div", {
                                className: "blogs-heading blog-anim",
                                "data-cursor-size": "10px",
                                "data-cursor-text": "",
                                children: (0, s.jsx)("h1", {
                                    id: "blog",
                                    children: (0, s.jsx)("span", {
                                        children: "All Articles"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "blog-anim",
                                children: (0, s.jsx)(h.Z, {
                                    categories: x,
                                    activeCategory: j,
                                    setActiveCategory: f
                                })
                            }), (0, s.jsx)("ul", {
                                className: "ul-items",
                                children: a.map(e => (0, s.jsx)("li", {
                                    className: "blog-anim",
                                    children: (0, s.jsx)(n.Z, {
                                        post: e
                                    })
                                }, e.slug))
                            }), (0, s.jsx)("div", {
                                className: "blog-anim",
                                children: p && (0, s.jsx)(r.Z, {
                                    addCanonical: !1,
                                    currentPage: null == p ? void 0 : p.currentPage,
                                    pagesCount: null == p ? void 0 : p.pagesCount,
                                    basePath: null == p ? void 0 : p.basePath
                                })
                            })]
                        }), (0, s.jsx)("section", {
                            className: "desktop-footer mt-150",
                            children: (0, s.jsx)(d.Z, {})
                        }), (0, s.jsx)("section", {
                            className: "mobile-footer",
                            children: (0, s.jsx)(g.Z, {})
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [8802, 990, 3386, 1664, 506, 1132, 3459, 8260, 3494, 5268, 7587, 1344, 9774, 2888, 179], function() {
            return e(e.s = 3899)
        }), _N_E = e.O()
    }
]);