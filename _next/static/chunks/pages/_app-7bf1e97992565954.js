(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        2962: function (e, t, r) {
            "use strict";
            r.d(t, {
                PB: function () {
                    return NextSeo
                },
                lX: function () {
                    return DefaultSeo
                }
            });
            var n = r(7294),
                o = r(9008),
                a = r.n(o);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _objectWithoutPropertiesLoose(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }
            var i = ["keyOverride"],
                l = ["crossOrigin"],
                s = {
                    templateTitle: "",
                    noindex: !1,
                    nofollow: !1,
                    norobots: !1,
                    defaultOpenGraphImageWidth: 0,
                    defaultOpenGraphImageHeight: 0,
                    defaultOpenGraphVideoWidth: 0,
                    defaultOpenGraphVideoHeight: 0
                },

                buildOpenGraphMediaTags = function (e, t, r) {
                    void 0 === t && (t = []);
                    var o = void 0 === r ? {} : r,
                        a = o.defaultWidth,
                        i = o.defaultHeight;
                    return t.reduce(function (t, r, o) {
                        return t.push(n.createElement("meta", {
                            key: "og:" + e + ":0" + o,
                            property: "og:" + e,
                            content: r.url
                        })), r.alt && t.push(n.createElement("meta", {
                            key: "og:" + e + ":alt0" + o,
                            property: "og:" + e + ":alt",
                            content: r.alt
                        })), r.secureUrl && t.push(n.createElement("meta", {
                            key: "og:" + e + ":secure_url0" + o,
                            property: "og:" + e + ":secure_url",
                            content: r.secureUrl.toString()
                        })), r.type && t.push(n.createElement("meta", {
                            key: "og:" + e + ":type0" + o,
                            property: "og:" + e + ":type",
                            content: r.type.toString()
                        })), r.width ? t.push(n.createElement("meta", {
                            key: "og:" + e + ":width0" + o,
                            property: "og:" + e + ":width",
                            content: r.width.toString()
                        })) : a && t.push(n.createElement("meta", {
                            key: "og:" + e + ":width0" + o,
                            property: "og:" + e + ":width",
                            content: a.toString()
                        })), r.height ? t.push(n.createElement("meta", {
                            key: "og:" + e + ":height" + o,
                            property: "og:" + e + ":height",
                            content: r.height.toString()
                        })) : i && t.push(n.createElement("meta", {
                            key: "og:" + e + ":height" + o,
                            property: "og:" + e + ":height",
                            content: i.toString()
                        })), t
                    }, [])
                },

                buildTags = function (e) {
                    var t, r, o, a, u, p = [];
                    e.titleTemplate && (s.templateTitle = e.titleTemplate);
                    var c = "";
                    e.title ? (c = e.title, s.templateTitle && (c = s.templateTitle.replace(/%s/g, function () {
                        return c
                    }))) : e.defaultTitle && (c = e.defaultTitle), c && p.push(n.createElement("title", {
                        key: "title"
                    },

                        c));
                    var d = void 0 === e.noindex ? s.noindex || e.dangerouslySetAllPagesToNoIndex : e.noindex,
                        h = void 0 === e.nofollow ? s.nofollow || e.dangerouslySetAllPagesToNoFollow : e.nofollow,
                        f = e.norobots || s.norobots,
                        m = "";
                    if (e.robotsProps) {
                        var g = e.robotsProps,
                            y = g.nosnippet,
                            v = g.maxSnippet,
                            b = g.maxImagePreview,
                            w = g.maxVideoPreview,
                            E = g.noarchive,
                            k = g.noimageindex,
                            S = g.notranslate,
                            _ = g.unavailableAfter;
                        m = (y ? ",nosnippet" : "") + (v ? ",max-snippet:" + v : "") + (b ? ",max-image-preview:" + b : "") + (E ? ",noarchive" : "") + (_ ? ",unavailable_after:" + _ : "") + (k ? ",noimageindex" : "") + (w ? ",max-video-preview:" + w : "") + (S ? ",notranslate" : "")
                    }
                    if (e.norobots && (s.norobots = !0), d || h ? (e.dangerouslySetAllPagesToNoIndex && (s.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (s.nofollow = !0), p.push(n.createElement("meta", {
                        key: "",
                        name: "",
                        content: (d ? "noindex" : "index") + "," + (h ? "nofollow" : "follow") + m
                    }))) : (!f || m) && p.push(n.createElement("meta", {
                        key: "",
                        name: "",
                        content: "" + m
                    })),

                        e.description && p.push(n.createElement("meta", {
                            // key: "description",
                            // name: "description",
                            key: "",
                            name: "",
                            content: e.description
                        })),

                        e.themeColor && p.push(n.createElement("meta", {
                            key: "theme-color",
                            name: "theme-color",
                            content: e.themeColor
                        })),

                        e.mobileAlternate && p.push(n.createElement("link", {
                            rel: "alternate",
                            key: "mobileAlternate",
                            media: e.mobileAlternate.media,
                            href: e.mobileAlternate.href
                        })),

                        e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function (e) {
                            p.push(n.createElement("link", {
                                rel: "alternate",
                                key: "languageAlternate-" + e.hrefLang,
                                hrefLang: e.hrefLang,
                                href: e.href
                            }))
                        }),

                        e.twitter && (e.twitter.cardType && p.push(n.createElement("meta", {
                            key: "",
                            name: "",
                            content: e.twitter.cardType
                        })),

                            e.twitter.site && p.push(n.createElement("meta", {
                                key: "",
                                name: "",
                                content: e.twitter.site
                            })),

                            e.twitter.handle && p.push(n.createElement("meta", {
                                key: "",
                                name: "",
                                content: e.twitter.handle
                            }))),

                        e.facebook && e.facebook.appId && p.push(n.createElement("meta", {
                            key: "",
                            property: "",
                            content: e.facebook.appId
                        })),

                        (null != (t = e.openGraph) && t.title || c) && p.push(n.createElement("meta", {
                            key: "",
                            property: "",
                            content: (null == (a = e.openGraph) ? void 0 : a.title) || c
                        })),

                        (null != (r = e.openGraph) && r.description || e.description) && p.push(n.createElement("meta", {
                            key: "",
                            property: "",
                            content: (null == (u = e.openGraph) ? void 0 : u.description) || e.description
                        })),

                        e.openGraph) {
                        if ((e.openGraph.url || e.canonical) && p.push(n.createElement("meta", {
                            key: "",
                            property: "",
                            content: e.openGraph.url || e.canonical
                        })), e.openGraph.type) {
                            var G = e.openGraph.type.toLowerCase();
                            p.push(n.createElement("meta", {
                                key: "",
                                property: "",
                                content: G
                            })), "profile" === G && e.openGraph.profile ? (e.openGraph.profile.firstName && p.push(n.createElement("meta", {
                                key: "",
                                property: "",
                                content: e.openGraph.profile.firstName
                            })), e.openGraph.profile.lastName && p.push(n.createElement("meta", {
                                key: "",
                                property: "",
                                content: e.openGraph.profile.lastName
                            })), e.openGraph.profile.username && p.push(n.createElement("meta", {
                                key: "",
                                property: "",
                                content: e.openGraph.profile.username
                            })), e.openGraph.profile.gender && p.push(n.createElement("meta", {
                                key: "",
                                property: "",
                                content: e.openGraph.profile.gender
                            }))) : "book" === G && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function (e, t) {
                                p.push(n.createElement("meta", {
                                    key: "" + t,
                                    property: "",
                                    content: e
                                }))
                            }), e.openGraph.book.isbn && p.push(n.createElement("meta", {
                                key: "book:isbn",
                                property: "book:isbn",
                                content: e.openGraph.book.isbn
                            })), e.openGraph.book.releaseDate && p.push(n.createElement("meta", {
                                key: "book:release_date",
                                property: "book:release_date",
                                content: e.openGraph.book.releaseDate
                            })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function (e, t) {
                                p.push(n.createElement("meta", {
                                    key: "book:tag:0" + t,
                                    property: "book:tag",
                                    content: e
                                }))
                            })) : "article" === G && e.openGraph.article ? (e.openGraph.article.publishedTime && p.push(n.createElement("meta", {
                                key: "article:published_time",
                                property: "article:published_time",
                                content: e.openGraph.article.publishedTime
                            })), e.openGraph.article.modifiedTime && p.push(n.createElement("meta", {
                                key: "article:modified_time",
                                property: "article:modified_time",
                                content: e.openGraph.article.modifiedTime
                            })), e.openGraph.article.expirationTime && p.push(n.createElement("meta", {
                                key: "article:expiration_time",
                                property: "article:expiration_time",
                                content: e.openGraph.article.expirationTime
                            })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function (e, t) {
                                p.push(n.createElement("meta", {
                                    key: "article:author:0" + t,
                                    property: "article:author",
                                    content: e
                                }))
                            }), e.openGraph.article.section && p.push(n.createElement("meta", {
                                key: "article:section",
                                property: "article:section",
                                content: e.openGraph.article.section
                            })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function (e, t) {
                                p.push(n.createElement("meta", {
                                    key: "article:tag:0" + t,
                                    property: "article:tag",
                                    content: e
                                }))
                            })) : ("video.movie" === G || "video.episode" === G || "video.tv_show" === G || "video.other" === G) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function (e, t) {
                                e.profile && p.push(n.createElement("meta", {
                                    key: "video:actor:0" + t,
                                    property: "video:actor",
                                    content: e.profile
                                })), e.role && p.push(n.createElement("meta", {
                                    key: "video:actor:role:0" + t,
                                    property: "video:actor:role",
                                    content: e.role
                                }))
                            }), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function (e, t) {
                                p.push(n.createElement("meta", {
                                    key: "video:director:0" + t,
                                    property: "video:director",
                                    content: e
                                }))
                            }), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function (e, t) {
                                p.push(n.createElement("meta", {
                                    key: "video:writer:0" + t,
                                    property: "video:writer",
                                    content: e
                                }))
                            }), e.openGraph.video.duration && p.push(n.createElement("meta", {
                                key: "video:duration",
                                property: "video:duration",
                                content: e.openGraph.video.duration.toString()
                            })), e.openGraph.video.releaseDate && p.push(n.createElement("meta", {
                                key: "video:release_date",
                                property: "video:release_date",
                                content: e.openGraph.video.releaseDate
                            })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function (e, t) {
                                p.push(n.createElement("meta", {
                                    key: "video:tag:0" + t,
                                    property: "video:tag",
                                    content: e
                                }))
                            }), e.openGraph.video.series && p.push(n.createElement("meta", {
                                key: "video:series",
                                property: "video:series",
                                content: e.openGraph.video.series
                            })))
                        }
                        e.defaultOpenGraphImageWidth && (s.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (s.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && p.push.apply(p, buildOpenGraphMediaTags("image", e.openGraph.images, {
                            defaultWidth: s.defaultOpenGraphImageWidth,
                            defaultHeight: s.defaultOpenGraphImageHeight
                        })), e.defaultOpenGraphVideoWidth && (s.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (s.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && p.push.apply(p, buildOpenGraphMediaTags("video", e.openGraph.videos, {
                            defaultWidth: s.defaultOpenGraphVideoWidth,
                            defaultHeight: s.defaultOpenGraphVideoHeight
                        })), e.openGraph.audio && p.push.apply(p, buildOpenGraphMediaTags("audio", e.openGraph.audio)), e.openGraph.locale && p.push(n.createElement("meta", {
                            key: "",
                            property: "",
                            content: e.openGraph.locale
                        })), (e.openGraph.siteName || e.openGraph.site_name) && p.push(n.createElement("meta", {
                            key: "og:site_name",
                            property: "og:site_name",
                            content: e.openGraph.siteName || e.openGraph.site_name
                        }))
                    }
                    return e.canonical && p.push(n.createElement("link", {
                        rel: "",
                        href: e.canonical,
                        key: ""
                    })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function (e) {
                        var t, r, o = e.keyOverride,
                            a = _objectWithoutPropertiesLoose(e, i);
                        p.push(n.createElement("meta", _extends({
                            key: "meta:" + (null != (t = null != (r = null != o ? o : a.name) ? r : a.property) ? t : a.httpEquiv)
                        }, a)))
                    }), null != (o = e.additionalLinkTags) && o.length && e.additionalLinkTags.forEach(function (e) {
                        var t, r = e.crossOrigin,
                            o = _objectWithoutPropertiesLoose(e, l);
                        p.push(n.createElement("link", _extends({
                            key: "link" + (null != (t = o.keyOverride) ? t : o.href) + o.rel
                        }, o, {
                            crossOrigin: "anonymous" === r || "use-credentials" === r || "" === r ? r : void 0
                        })))
                    }), p
                },
                WithHead = function (e) {
                    return n.createElement(a(), null, buildTags(e))
                },
                DefaultSeo = function (e) {
                    var t = e.title,
                        r = e.titleTemplate,
                        o = e.defaultTitle,
                        a = e.themeColor,
                        i = e.dangerouslySetAllPagesToNoIndex,
                        l = e.dangerouslySetAllPagesToNoFollow,
                        s = e.description,
                        u = e.canonical,
                        p = e.facebook,
                        c = e.openGraph,
                        d = e.additionalMetaTags,
                        h = e.twitter,
                        f = e.defaultOpenGraphImageWidth,
                        m = e.defaultOpenGraphImageHeight,
                        g = e.defaultOpenGraphVideoWidth,
                        y = e.defaultOpenGraphVideoHeight,
                        v = e.mobileAlternate,
                        b = e.languageAlternates,
                        w = e.additionalLinkTags,
                        E = e.robotsProps,
                        k = e.norobots;
                    return n.createElement(WithHead, {
                        title: t,
                        titleTemplate: r,
                        defaultTitle: o,
                        themeColor: a,
                        dangerouslySetAllPagesToNoIndex: void 0 !== i && i,
                        dangerouslySetAllPagesToNoFollow: void 0 !== l && l,
                        description: s,
                        canonical: u,
                        facebook: p,
                        openGraph: c,
                        additionalMetaTags: d,
                        twitter: h,
                        defaultOpenGraphImageWidth: f,
                        defaultOpenGraphImageHeight: m,
                        defaultOpenGraphVideoWidth: g,
                        defaultOpenGraphVideoHeight: y,
                        mobileAlternate: v,
                        languageAlternates: b,
                        additionalLinkTags: w,
                        robotsProps: E,
                        norobots: k
                    })
                },
                NextSeo = function (e) {
                    var t = e.title,
                        r = e.themeColor,
                        o = e.noindex,
                        a = e.nofollow,
                        i = e.robotsProps,
                        l = e.description,
                        s = e.canonical,
                        u = e.openGraph,
                        p = e.facebook,
                        c = e.twitter,
                        d = e.additionalMetaTags,
                        h = e.titleTemplate,
                        f = e.defaultTitle,
                        m = e.mobileAlternate,
                        g = e.languageAlternates,
                        y = e.additionalLinkTags;
                    return n.createElement(n.Fragment, null, n.createElement(WithHead, {
                        title: t,
                        themeColor: r,
                        noindex: o,
                        nofollow: a,
                        robotsProps: i,
                        description: l,
                        canonical: s,
                        facebook: p,
                        openGraph: u,
                        additionalMetaTags: d,
                        twitter: c,
                        titleTemplate: h,
                        defaultTitle: f,
                        mobileAlternate: m,
                        languageAlternates: g,
                        additionalLinkTags: y
                    }))
                };
            RegExp("[" + Object.keys(Object.freeze({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;"
            })).join("") + "]", "g")
        },
        1118: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return r(6747)
            }])
        },
        2422: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "createAsyncLocalStorage", {
                enumerable: !0,
                get: function () {
                    return createAsyncLocalStorage
                }
            });
            let r = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
            let FakeAsyncLocalStorage = class FakeAsyncLocalStorage {
                disable() {
                    throw r
                }
                getStore() { }
                run() {
                    throw r
                }
                exit() {
                    throw r
                }
                enterWith() {
                    throw r
                }
            };
            let n = globalThis.AsyncLocalStorage;

            function createAsyncLocalStorage() {
                return n ? new n : new FakeAsyncLocalStorage
            } ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8427: function (e, t, r) {
            "use strict";

            function clientHookInServerComponentError(e) { }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "clientHookInServerComponentError", {
                enumerable: !0,
                get: function () {
                    return clientHookInServerComponentError
                }
            }), r(8754), r(7294), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        636: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    ReadonlyURLSearchParams: function () {
                        return ReadonlyURLSearchParams
                    },
                    useSearchParams: function () {
                        return useSearchParams
                    },
                    usePathname: function () {
                        return usePathname
                    },
                    ServerInsertedHTMLContext: function () {
                        return s.ServerInsertedHTMLContext
                    },
                    useServerInsertedHTML: function () {
                        return s.useServerInsertedHTML
                    },
                    useRouter: function () {
                        return useRouter
                    },
                    useParams: function () {
                        return useParams
                    },
                    useSelectedLayoutSegments: function () {
                        return useSelectedLayoutSegments
                    },
                    useSelectedLayoutSegment: function () {
                        return useSelectedLayoutSegment
                    },
                    redirect: function () {
                        return u.redirect
                    },
                    permanentRedirect: function () {
                        return u.permanentRedirect
                    },
                    RedirectType: function () {
                        return u.RedirectType
                    },
                    notFound: function () {
                        return p.notFound
                    }
                });
            let n = r(7294),
                o = r(9031),
                a = r(1593),
                i = r(8427),
                l = r(6160),
                s = r(252),
                u = r(7866),
                p = r(9363),
                c = Symbol("internal for urlsearchparams readonly");

            function readonlyURLSearchParamsError() {
                return Error("ReadonlyURLSearchParams cannot be modified")
            }
            let ReadonlyURLSearchParams = class ReadonlyURLSearchParams {
                [Symbol.iterator]() {
                    return this[c][Symbol.iterator]()
                }
                append() {
                    throw readonlyURLSearchParamsError()
                }
                delete() {
                    throw readonlyURLSearchParamsError()
                }
                set() {
                    throw readonlyURLSearchParamsError()
                }
                sort() {
                    throw readonlyURLSearchParamsError()
                }
                constructor(e) {
                    this[c] = e, this.entries = e.entries.bind(e), this.forEach = e.forEach.bind(e), this.get = e.get.bind(e), this.getAll = e.getAll.bind(e), this.has = e.has.bind(e), this.keys = e.keys.bind(e), this.values = e.values.bind(e), this.toString = e.toString.bind(e), this.size = e.size
                }
            };

            function useSearchParams() {
                (0, i.clientHookInServerComponentError)("useSearchParams");
                let e = (0, n.useContext)(a.SearchParamsContext),
                    t = (0, n.useMemo)(() => e ? new ReadonlyURLSearchParams(e) : null, [e]);
                return t
            }

            function usePathname() {
                return (0, i.clientHookInServerComponentError)("usePathname"), (0, n.useContext)(a.PathnameContext)
            }

            function useRouter() {
                (0, i.clientHookInServerComponentError)("useRouter");
                let e = (0, n.useContext)(o.AppRouterContext);
                if (null === e) throw Error("invariant expected app router to be mounted");
                return e
            }

            function useParams() {
                (0, i.clientHookInServerComponentError)("useParams");
                let e = (0, n.useContext)(o.GlobalLayoutRouterContext),
                    t = (0, n.useContext)(a.PathParamsContext);
                return (0, n.useMemo)(() => (null == e ? void 0 : e.tree) ? function getSelectedParams(e, t) {
                    void 0 === t && (t = {});
                    let r = e[1];
                    for (let e of Object.values(r)) {
                        let r = e[0],
                            n = Array.isArray(r),
                            o = n ? r[1] : r;
                        if (!o || o.startsWith("__PAGE__")) continue;
                        let a = n && ("c" === r[2] || "oc" === r[2]);
                        a ? t[r[0]] = r[1].split("/") : n && (t[r[0]] = r[1]), t = getSelectedParams(e, t)
                    }
                    return t
                }(e.tree) : t, [null == e ? void 0 : e.tree, t])
            }

            function useSelectedLayoutSegments(e) {
                void 0 === e && (e = "children"), (0, i.clientHookInServerComponentError)("useSelectedLayoutSegments");
                let {
                    tree: t
                } = (0, n.useContext)(o.LayoutRouterContext);
                return function getSelectedLayoutSegmentPath(e, t, r, n) {
                    let o;
                    if (void 0 === r && (r = !0), void 0 === n && (n = []), r) o = e[1][t];
                    else {
                        var a;
                        let t = e[1];
                        o = null != (a = t.children) ? a : Object.values(t)[0]
                    }
                    if (!o) return n;
                    let i = o[0],
                        s = (0, l.getSegmentValue)(i);
                    return !s || s.startsWith("__PAGE__") ? n : (n.push(s), getSelectedLayoutSegmentPath(o, t, !1, n))
                }(t, e)
            }

            function useSelectedLayoutSegment(e) {
                void 0 === e && (e = "children"), (0, i.clientHookInServerComponentError)("useSelectedLayoutSegment");
                let t = useSelectedLayoutSegments(e);
                return 0 === t.length ? null : t[0]
            } ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9363: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    notFound: function () {
                        return notFound
                    },
                    isNotFoundError: function () {
                        return isNotFoundError
                    }
                });
            let r = "NEXT_NOT_FOUND";

            function notFound() {
                let e = Error(r);
                throw e.digest = r, e
            }

            function isNotFoundError(e) {
                return (null == e ? void 0 : e.digest) === r
            } ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7866: function (e, t, r) {
            "use strict";
            var n, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    RedirectType: function () {
                        return n
                    },
                    getRedirectError: function () {
                        return getRedirectError
                    },
                    redirect: function () {
                        return redirect
                    },
                    permanentRedirect: function () {
                        return permanentRedirect
                    },
                    isRedirectError: function () {
                        return isRedirectError
                    },
                    getURLFromRedirectError: function () {
                        return getURLFromRedirectError
                    },
                    getRedirectTypeFromError: function () {
                        return getRedirectTypeFromError
                    }
                });
            let a = r(3743),
                i = "NEXT_REDIRECT";

            function getRedirectError(e, t, r) {
                void 0 === r && (r = !1);
                let n = Error(i);
                n.digest = i + ";" + t + ";" + e + ";" + r;
                let o = a.requestAsyncStorage.getStore();
                return o && (n.mutableCookies = o.mutableCookies), n
            }

            function redirect(e, t) {
                throw void 0 === t && (t = "replace"), getRedirectError(e, t, !1)
            }

            function permanentRedirect(e, t) {
                throw void 0 === t && (t = "replace"), getRedirectError(e, t, !0)
            }

            function isRedirectError(e) {
                if ("string" != typeof (null == e ? void 0 : e.digest)) return !1;
                let [t, r, n, o] = e.digest.split(";", 4);
                return t === i && ("replace" === r || "push" === r) && "string" == typeof n && ("true" === o || "false" === o)
            }

            function getURLFromRedirectError(e) {
                return isRedirectError(e) ? e.digest.split(";", 3)[2] : null
            }

            function getRedirectTypeFromError(e) {
                if (!isRedirectError(e)) throw Error("Not a redirect error");
                return e.digest.split(";", 3)[1]
            } (o = n || (n = {})).push = "push", o.replace = "replace", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3743: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "requestAsyncStorage", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let n = r(2422),
                o = (0, n.createAsyncLocalStorage)();
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6160: function (e, t) {
            "use strict";

            function getSegmentValue(e) {
                return Array.isArray(e) ? e[1] : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getSegmentValue", {
                enumerable: !0,
                get: function () {
                    return getSegmentValue
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        252: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    ServerInsertedHTMLContext: function () {
                        return a
                    },
                    useServerInsertedHTML: function () {
                        return useServerInsertedHTML
                    }
                });
            let n = r(1757),
                o = n._(r(7294)),
                a = o.default.createContext(null);

            function useServerInsertedHTML(e) {
                let t = (0, o.useContext)(a);
                t && t(e)
            }
        },
        6747: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function () {
                    return App
                }
            });
            var n = r(5893);
            r(2352);
            var o = r(7294),
                initQueue = () => {
                    window.va || (window.va = function (...e) {
                        (window.vaq = window.vaq || []).push(e)
                    })
                };

            function isBrowser() {
                return "undefined" != typeof window
            }

            function detectEnvironment() {
                return "production"
            }

            function isDevelopment() {
                return "development" === function () {
                    let e = isBrowser() ? window.vam : detectEnvironment();
                    return e || "production"
                }()
            }

            function Analytics({
                beforeSend: e,
                debug: t = !0,
                mode: r = "auto"
            }) {
                return (0, o.useEffect)(() => {
                    ! function (e = {
                        debug: !0
                    }) {
                        var t;
                        if (!isBrowser()) return;
                        (function (e = "auto") {
                            if ("auto" === e) {
                                window.vam = detectEnvironment();
                                return
                            }
                            window.vam = e
                        })(e.mode), initQueue(), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                        let r = isDevelopment() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js";
                        if (document.head.querySelector(`script[src*="${r}"]`)) return;
                        let n = document.createElement("script");
                        n.src = r, n.defer = !0, n.setAttribute("data-sdkn", "@vercel/analytics"), n.setAttribute("data-sdkv", "1.1.1"), n.onerror = () => {
                            let e = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                            console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${e}`)
                        }, isDevelopment() && !1 === e.debug && n.setAttribute("data-debug", "false"), document.head.appendChild(n)
                    }({
                        beforeSend: e,
                        debug: t,
                        mode: r
                    })
                }, [e, t, r]), null
            }
            var a = r(4298),
                i = r.n(a),
                l = r(2962),
                s = r(9008),
                u = r.n(s),
                p = r(9332),
                next_initQueue = () => {
                    window.si || (window.si = function (...e) {
                        (window.siq = window.siq || []).push(e)
                    })
                };

            function next_isDevelopment() {
                return false
            }
            var c = "https://va.vercel-scripts.com/v1/speed-insights",
                d = `${c}/script.js`,
                h = `${c}/script.debug.js`;

            function SpeedInsights(e) {
                let t = (0, o.useRef)(null);
                return (0, o.useEffect)(() => {
                    if (t.current) e.route && t.current(e.route);
                    else {
                        let r = function (e) {
                            var t;
                            if (!("undefined" != typeof window) || null === e.route) return null;
                            next_initQueue();
                            let r = !!e.dsn,
                                n = e.scriptSrc || (r ? d : "/_vercel/speed-insights/script.js");
                            if (document.head.querySelector(`script[src*="${n}"]`)) return null;
                            e.beforeSend && (null == (t = window.si) || t.call(window, "beforeSend", e.beforeSend));
                            let o = document.createElement("script");
                            return o.src = n, o.defer = !0, o.dataset.sdkn = "@vercel/speed-insights" + (e.framework ? `/${e.framework}` : ""), o.dataset.sdkv = "1.0.0", e.sampleRate && (o.dataset.sampleRate = e.sampleRate.toString()), e.route && (o.dataset.route = e.route), e.endpoint && (o.dataset.endpoint = e.endpoint), e.dsn && (o.dataset.dsn = e.dsn), o.onerror = () => {
                                console.log(`[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`)
                            }, document.head.appendChild(o), {
                                setRoute: e => {
                                    o.dataset.route = e ?? void 0
                                }
                            }
                        }({
                            framework: e.framework || "react",
                            ...e
                        });
                        r && (t.current = r.setRoute)
                    }
                }, [e.route]), null
            }
            var useRoute = () => {
                let e = (0, p.useParams)(),
                    t = (0, p.useSearchParams)(),
                    r = (0, p.usePathname)(),
                    n = (0, o.useMemo)(() => e ? 0 !== Object.keys(e).length ? e : {
                        ...Object.fromEntries(t.entries())
                    } : null, [e, t]);
                return function (e, t) {
                    if (!e || !t) return e;
                    let r = e;
                    try {
                        for (let [e, n] of Object.entries(t)) {
                            let t = Array.isArray(n),
                                o = t ? n.join("/") : n,
                                a = t ? `...${e}` : e,
                                i = RegExp(`/${o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
                            i.test(r) && (r = r.replace(i, `/[${a}]`))
                        }
                        return r
                    } catch (t) {
                        return e
                    }
                }(r, n)
            };

            function SpeedInsightsComponent(e) {
                let t = useRoute();
                return o.createElement(SpeedInsights, {
                    route: t,
                    ...e,
                    framework: "next"
                })
            }

            function SpeedInsights2(e) {
                return o.createElement(o.Suspense, {
                    fallback: null
                }, o.createElement(SpeedInsightsComponent, {
                    ...e
                }))
            }

            function App(e) {
                let {
                    Component: t,
                    pageProps: r
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(l.lX, {
                        additionalMetaTags: [{
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0, maximum-scale=5.0"
                        }],
                        additionalLinkTags: [{
                            rel: "icon",
                            // href: "/fav-icon.png"
                            href: "/assets/header-logo/orgitech_logo.png"
                        }, {
                            rel: "preload",
                            href: "/assets/fonts/clash-display/ClashDisplay-Regular.woff2",
                            as: "font",
                            type: "font/woff2",
                            crossOrigin: "anonymous"
                        }],
                        openGraph: {
                            type: "website",
                            locale: "en_US"
                        },
                        twitter: {
                            site: "",
                            cardType: ""
                        }
                    }), (0, n.jsxs)(u(), {
                        children: [(0, n.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, n.jsx)("script", {
                            // type: "application/ld+json",
                            type: "",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify({
                                    "@context": "",
                                    "@type": "",
                                    name: "",
                                    url: "",
                                    logo: "",
                                    sameAs: [""]
                                })
                            }
                        }), (0, n.jsx)("script", {
                            // type: "application/ld+json",
                            type: "",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify({
                                    "@context": "",
                                    "@type": "ItemList",
                                    itemListElement: [{
                                        "@type": "SiteNavigationElement",
                                        position: 1,
                                        name: "About",
                                        description: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
                                        url: ""
                                    }, {
                                        "@type": "SiteNavigationElement",
                                        position: 2,
                                        name: "Services",
                                        description: "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
                                        url: ""
                                    }, {
                                        "@type": "SiteNavigationElement",
                                        position: 3,
                                        name: "Works",
                                        description: "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
                                        url: ""
                                    }, {
                                        "@type": "SiteNavigationElement",
                                        position: 4,
                                        name: "Insights",
                                        description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
                                        url: ""
                                    }, {
                                        "@type": "SiteNavigationElement",
                                        position: 5,
                                        name: "Careers",
                                        description: "Experience top-tier UI/UX design, front-end development, and organic marketing jobs with Enigma Digital. Find The Right Jobs",
                                        url: ""
                                    }, {
                                        "@type": "SiteNavigationElement",
                                        position: 6,
                                        name: "Contact",
                                        description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
                                        url: ""
                                    }]
                                })
                            }
                        })]
                    }), (0, n.jsx)(t, {
                        ...r
                    }), (0, n.jsx)(SpeedInsights2, {}), (0, n.jsx)(Analytics, {}), (0, n.jsx)(i(), {
                        strategy: "worker",
                        id: "ms-clarity",
                        // children: '\n            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "josmn10ai7");\n          '
                        children: ''
                    }), (0, n.jsx)(i(), {
                        async: !0,
                        strategy: "worker",
                        // src: "https://www.googletagmanager.com/gtag/js?id=G-PKJE9LVB35"
                        src: ""
                    }), (0, n.jsxs)(i(), {
                        strategy: "worker",
                        id: "",
                        // id: "google-analytics",
                        children: ["", ""]
                    })]
                })
            }
        },
        2352: function () { },
        9008: function (e, t, r) {
            e.exports = r(9201)
        },
        9332: function (e, t, r) {
            e.exports = r(636)
        },
        4298: function (e, t, r) {
            e.exports = r(5354)
        }
    },
    function (e) {
        var __webpack_exec__ = function (t) {
            return e(e.s = t)
        };
        e.O(0, [9774, 179], function () {
            return __webpack_exec__(1118), __webpack_exec__(9974)
        }), _N_E = e.O()
    }
]);