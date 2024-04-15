"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1132], {
        5364: function(t, e, i) {
            i.d(e, {
                p: function() {
                    return r
                }
            });
            var n = i(7294);
            let r = (0, n.createContext)({})
        },
        240: function(t, e, i) {
            i.d(e, {
                O: function() {
                    return r
                }
            });
            var n = i(7294);
            let r = (0, n.createContext)(null)
        },
        7156: function(t, e, i) {
            i.d(e, {
                _: function() {
                    return cubicBezier
                }
            });
            var n = i(1662);
            let calcBezier = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function cubicBezier(t, e, i, r) {
                if (t === e && i === r) return n.Z;
                let getTForX = e => (function(t, e, i, n, r) {
                    let s, a;
                    let o = 0;
                    do(s = calcBezier(a = e + (i - e) / 2, n, r) - t) > 0 ? i = a : e = a; while (Math.abs(s) > 1e-7 && ++o < 12);
                    return a
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : calcBezier(getTForX(t), e, r)
            }
        },
        6260: function(t, e, i) {
            i.d(e, {
                Vv: function() {
                    return s
                },
                YQ: function() {
                    return r
                },
                mZ: function() {
                    return a
                }
            });
            var n = i(7156);
            let r = (0, n._)(.42, 0, 1, 1),
                s = (0, n._)(0, 0, .58, 1),
                a = (0, n._)(.42, 0, .58, 1)
        },
        2074: function(t, e, i) {
            i.d(e, {
                Pn: function() {
                    return a
                },
                Wi: function() {
                    return s
                },
                frameData: function() {
                    return o
                },
                S6: function() {
                    return l
                }
            });
            var n = i(1662);
            let Queue = class Queue {
                constructor() {
                    this.order = [], this.scheduled = new Set
                }
                add(t) {
                    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
                }
                remove(t) {
                    let e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
                }
                clear() {
                    this.order.length = 0, this.scheduled.clear()
                }
            };
            let r = ["prepare", "read", "update", "preRender", "render", "postRender"],
                {
                    schedule: s,
                    cancel: a,
                    state: o,
                    steps: l
                } = function(t, e) {
                    let i = !1,
                        n = !0,
                        s = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        },
                        a = r.reduce((t, e) => (t[e] = function(t) {
                            let e = new Queue,
                                i = new Queue,
                                n = 0,
                                r = !1,
                                s = !1,
                                a = new WeakSet,
                                o = {
                                    schedule: (t, s = !1, o = !1) => {
                                        let l = o && r,
                                            u = l ? e : i;
                                        return s && a.add(t), u.add(t) && l && r && (n = e.order.length), t
                                    },
                                    cancel: t => {
                                        i.remove(t), a.delete(t)
                                    },
                                    process: l => {
                                        if (r) {
                                            s = !0;
                                            return
                                        }
                                        if (r = !0, [e, i] = [i, e], i.clear(), n = e.order.length)
                                            for (let i = 0; i < n; i++) {
                                                let n = e.order[i];
                                                n(l), a.has(n) && (o.schedule(n), t())
                                            }
                                        r = !1, s && (s = !1, o.process(l))
                                    }
                                };
                            return o
                        }(() => i = !0), t), {}),
                        processStep = t => a[t].process(s),
                        processBatch = () => {
                            let a = performance.now();
                            i = !1, s.delta = n ? 1e3 / 60 : Math.max(Math.min(a - s.timestamp, 40), 1), s.timestamp = a, s.isProcessing = !0, r.forEach(processStep), s.isProcessing = !1, i && e && (n = !1, t(processBatch))
                        },
                        wake = () => {
                            i = !0, n = !0, s.isProcessing || t(processBatch)
                        },
                        o = r.reduce((t, e) => {
                            let n = a[e];
                            return t[e] = (t, e = !1, r = !1) => (i || wake(), n.schedule(t, e, r)), t
                        }, {});
                    return {
                        schedule: o,
                        cancel: t => r.forEach(e => a[e].cancel(t)),
                        state: s,
                        steps: a
                    }
                }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
        },
        1132: function(t, e, i) {
            let n;
            i.d(e, {
                E: function() {
                    return ec
                }
            });
            var r, s, a = i(7294);
            let o = (0, a.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                l = (0, a.createContext)({});
            var u = i(240),
                h = i(8868);
            let c = (0, a.createContext)({
                strict: !1
            });

            function isRefObject(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function isVariantLabel(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function isAnimationControls(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let d = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                m = ["initial", ...d];

            function isControllingVariants(t) {
                return isAnimationControls(t.animate) || m.some(e => isVariantLabel(t[e]))
            }

            function isVariantNode(t) {
                return !!(isControllingVariants(t) || t.variants)
            }

            function variantLabelsAsDependency(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let p = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                f = {};
            for (let t in p) f[t] = {
                isEnabled: e => p[t].some(t => !!e[t])
            };
            var g = i(1741),
                y = i(5364);
            let v = (0, a.createContext)({}),
                x = Symbol.for("motionComponentSymbol"),
                P = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function isSVGComponent(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (P.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let V = {},
                T = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                A = new Set(T);

            function isForcedMotionValue(t, {
                layout: e,
                layoutId: i
            }) {
                return A.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!V[t] || "opacity" === t)
            }
            let isMotionValue = t => !!(t && t.getVelocity),
                b = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                S = T.length,
                checkStringStartsWith = t => e => "string" == typeof e && e.startsWith(t),
                D = checkStringStartsWith("--"),
                C = checkStringStartsWith("var(--"),
                getValueAsType = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                clamp = (t, e, i) => Math.min(Math.max(i, t), e),
                M = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                E = {
                    ...M,
                    transform: t => clamp(0, 1, t)
                },
                w = {
                    ...M,
                    default: 1
                },
                sanitize = t => Math.round(1e5 * t) / 1e5,
                k = /(-)?([\d]*\.?[\d])+/g,
                B = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                L = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function isString(t) {
                return "string" == typeof t
            }
            let createUnitType = t => ({
                    test: e => isString(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                R = createUnitType("deg"),
                F = createUnitType("%"),
                j = createUnitType("px"),
                O = createUnitType("vh"),
                I = createUnitType("vw"),
                N = {
                    ...F,
                    parse: t => F.parse(t) / 100,
                    transform: t => F.transform(100 * t)
                },
                U = {
                    ...M,
                    transform: Math.round
                },
                W = {
                    borderWidth: j,
                    borderTopWidth: j,
                    borderRightWidth: j,
                    borderBottomWidth: j,
                    borderLeftWidth: j,
                    borderRadius: j,
                    radius: j,
                    borderTopLeftRadius: j,
                    borderTopRightRadius: j,
                    borderBottomRightRadius: j,
                    borderBottomLeftRadius: j,
                    width: j,
                    maxWidth: j,
                    height: j,
                    maxHeight: j,
                    size: j,
                    top: j,
                    right: j,
                    bottom: j,
                    left: j,
                    padding: j,
                    paddingTop: j,
                    paddingRight: j,
                    paddingBottom: j,
                    paddingLeft: j,
                    margin: j,
                    marginTop: j,
                    marginRight: j,
                    marginBottom: j,
                    marginLeft: j,
                    rotate: R,
                    rotateX: R,
                    rotateY: R,
                    rotateZ: R,
                    scale: w,
                    scaleX: w,
                    scaleY: w,
                    scaleZ: w,
                    skew: R,
                    skewX: R,
                    skewY: R,
                    distance: j,
                    translateX: j,
                    translateY: j,
                    translateZ: j,
                    x: j,
                    y: j,
                    z: j,
                    perspective: j,
                    transformPerspective: j,
                    opacity: E,
                    originX: N,
                    originY: N,
                    originZ: j,
                    zIndex: U,
                    fillOpacity: E,
                    strokeOpacity: E,
                    numOctaves: U
                };

            function buildHTMLStyles(t, e, i, n) {
                let {
                    style: r,
                    vars: s,
                    transform: a,
                    transformOrigin: o
                } = t, l = !1, u = !1, h = !0;
                for (let t in e) {
                    let i = e[t];
                    if (D(t)) {
                        s[t] = i;
                        continue
                    }
                    let n = W[t],
                        c = getValueAsType(i, n);
                    if (A.has(t)) {
                        if (l = !0, a[t] = c, !h) continue;
                        i !== (n.default || 0) && (h = !1)
                    } else t.startsWith("origin") ? (u = !0, o[t] = c) : r[t] = c
                }
                if (!e.transform && (l || n ? r.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: i = !0
                    }, n, r) {
                        let s = "";
                        for (let e = 0; e < S; e++) {
                            let i = T[e];
                            if (void 0 !== t[i]) {
                                let e = b[i] || i;
                                s += `${e}(${t[i]}) `
                            }
                        }
                        return e && !t.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(t, n ? "" : s) : i && n && (s = "none"), s
                    }(t.transform, i, h, n) : r.transform && (r.transform = "none")), u) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = o;
                    r.transformOrigin = `${t} ${e} ${i}`
                }
            }
            let createHtmlRenderState = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function copyRawValuesOnly(t, e, i) {
                for (let n in e) isMotionValue(e[n]) || isForcedMotionValue(n, i) || (t[n] = e[n])
            }

            function useHTMLProps(t, e, i) {
                let n = {},
                    r = function(t, e, i) {
                        let n = t.style || {},
                            r = {};
                        return copyRawValuesOnly(r, n, t), Object.assign(r, function({
                            transformTemplate: t
                        }, e, i) {
                            return (0, a.useMemo)(() => {
                                let n = createHtmlRenderState();
                                return buildHTMLStyles(n, e, {
                                    enableHardwareAcceleration: !i
                                }, t), Object.assign({}, n.vars, n.style)
                            }, [e])
                        }(t, e, i)), t.transformValues ? t.transformValues(r) : r
                    }(t, e, i);
                return t.drag && !1 !== t.dragListener && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = r, n
            }
            let H = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function isValidMotionProp(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || H.has(t)
            }
            let shouldForward = t => !isValidMotionProp(t);
            try {
                (r = require("@emotion/is-prop-valid").default) && (shouldForward = t => t.startsWith("on") ? !isValidMotionProp(t) : r(t))
            } catch (t) {}

            function calcOrigin(t, e, i) {
                return "string" == typeof t ? t : j.transform(e + i * t)
            }
            let z = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                G = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function buildSVGAttrs(t, {
                attrX: e,
                attrY: i,
                attrScale: n,
                originX: r,
                originY: s,
                pathLength: a,
                pathSpacing: o = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (buildHTMLStyles(t, u, h, d), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: m,
                    style: p,
                    dimensions: f
                } = t;
                m.transform && (f && (p.transform = m.transform), delete m.transform), f && (void 0 !== r || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                    let n = calcOrigin(e, t.x, t.width),
                        r = calcOrigin(i, t.y, t.height);
                    return `${n} ${r}`
                }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (m.x = e), void 0 !== i && (m.y = i), void 0 !== n && (m.scale = n), void 0 !== a && function(t, e, i = 1, n = 0, r = !0) {
                    t.pathLength = 1;
                    let s = r ? z : G;
                    t[s.offset] = j.transform(-n);
                    let a = j.transform(e),
                        o = j.transform(i);
                    t[s.array] = `${a} ${o}`
                }(m, a, o, l, !1)
            }
            let createSvgRenderState = () => ({
                    ...createHtmlRenderState(),
                    attrs: {}
                }),
                isSVGTag = t => "string" == typeof t && "svg" === t.toLowerCase();

            function useSVGProps(t, e, i, n) {
                let r = (0, a.useMemo)(() => {
                    let i = createSvgRenderState();
                    return buildSVGAttrs(i, e, {
                        enableHardwareAcceleration: !1
                    }, isSVGTag(n), t.transformTemplate), {
                        ...i.attrs,
                        style: {
                            ...i.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let e = {};
                    copyRawValuesOnly(e, t.style, t), r.style = {
                        ...e,
                        ...r.style
                    }
                }
                return r
            }
            let camelToDash = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function renderHTML(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
            let $ = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function renderSVG(t, e, i, n) {
                for (let i in renderHTML(t, e, void 0, n), e.attrs) t.setAttribute($.has(i) ? i : camelToDash(i), e.attrs[i])
            }

            function scrapeMotionValuesFromProps(t, e) {
                let {
                    style: i
                } = t, n = {};
                for (let r in i)(isMotionValue(i[r]) || e.style && isMotionValue(e.style[r]) || isForcedMotionValue(r, t)) && (n[r] = i[r]);
                return n
            }

            function scrape_motion_values_scrapeMotionValuesFromProps(t, e) {
                let i = scrapeMotionValuesFromProps(t, e);
                for (let n in t)
                    if (isMotionValue(t[n]) || isMotionValue(e[n])) {
                        let e = -1 !== T.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
                        i[e] = t[n]
                    } return i
            }

            function resolveVariantFromProps(t, e, i, n = {}, r = {}) {
                return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), e
            }
            var Z = i(6681);
            let isKeyframesTarget = t => Array.isArray(t),
                isCustomValue = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                resolveFinalValueInKeyframes = t => isKeyframesTarget(t) ? t[t.length - 1] || 0 : t;

            function resolveMotionValue(t) {
                let e = isMotionValue(t) ? t.get() : t;
                return isCustomValue(e) ? e.toValue() : e
            }
            let makeUseVisualState = t => (e, i) => {
                let n = (0, a.useContext)(l),
                    r = (0, a.useContext)(u.O),
                    make = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onMount: i
                    }, n, r, s) {
                        let a = {
                            latestValues: function(t, e, i, n) {
                                let r = {},
                                    s = n(t, {});
                                for (let t in s) r[t] = resolveMotionValue(s[t]);
                                let {
                                    initial: a,
                                    animate: o
                                } = t, l = isControllingVariants(t), u = isVariantNode(t);
                                e && u && !l && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === o && (o = e.animate));
                                let h = !!i && !1 === i.initial;
                                h = h || !1 === a;
                                let c = h ? o : a;
                                if (c && "boolean" != typeof c && !isAnimationControls(c)) {
                                    let e = Array.isArray(c) ? c : [c];
                                    e.forEach(e => {
                                        let i = resolveVariantFromProps(t, e);
                                        if (!i) return;
                                        let {
                                            transitionEnd: n,
                                            transition: s,
                                            ...a
                                        } = i;
                                        for (let t in a) {
                                            let e = a[t];
                                            if (Array.isArray(e)) {
                                                let t = h ? e.length - 1 : 0;
                                                e = e[t]
                                            }
                                            null !== e && (r[t] = e)
                                        }
                                        for (let t in n) r[t] = n[t]
                                    })
                                }
                                return r
                            }(n, r, s, t),
                            renderState: e()
                        };
                        return i && (a.mount = t => i(n, t, a)), a
                    })(t, e, n, r);
                return i ? make() : (0, Z.h)(make)
            };
            var _ = i(2074);
            let q = {
                    useVisualState: makeUseVisualState({
                        scrapeMotionValuesFromProps: scrape_motion_values_scrapeMotionValuesFromProps,
                        createRenderState: createSvgRenderState,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            _.Wi.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), _.Wi.render(() => {
                                buildSVGAttrs(i, n, {
                                    enableHardwareAcceleration: !1
                                }, isSVGTag(e.tagName), t.transformTemplate), renderSVG(e, i)
                            })
                        }
                    })
                },
                Y = {
                    useVisualState: makeUseVisualState({
                        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
                        createRenderState: createHtmlRenderState
                    })
                };

            function addDomEvent(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }
            let isPrimaryPointer = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function extractEventInfo(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let addPointerInfo = t => e => isPrimaryPointer(e) && t(e, extractEventInfo(e));

            function addPointerEvent(t, e, i, n) {
                return addDomEvent(t, e, addPointerInfo(i), n)
            }
            let combineFunctions = (t, e) => i => e(t(i)),
                pipe = (...t) => t.reduce(combineFunctions);

            function createLock(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let K = createLock("dragHorizontal"),
                X = createLock("dragVertical");

            function getGlobalLock(t) {
                let e = !1;
                if ("y" === t) e = X();
                else if ("x" === t) e = K();
                else {
                    let t = K(),
                        i = X();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function isDragActive() {
                let t = getGlobalLock(!0);
                return !t || (t(), !1)
            }
            let Feature = class Feature {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            };

            function addHoverEvent(t, e) {
                let i = "pointer" + (e ? "enter" : "leave"),
                    n = "onHover" + (e ? "Start" : "End");
                return addPointerEvent(t.current, i, (i, r) => {
                    if ("touch" === i.type || isDragActive()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[n] && _.Wi.update(() => s[n](i, r))
                }, {
                    passive: !t.getProps()[n]
                })
            }
            let isNodeOrChild = (t, e) => !!e && (t === e || isNodeOrChild(t, e.parentElement));
            var Q = i(1662);

            function fireSyntheticPointerEvent(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, extractEventInfo(i))
            }
            let J = new WeakMap,
                tt = new WeakMap,
                fireObserverCallback = t => {
                    let e = J.get(t.target);
                    e && e(t)
                },
                fireAllObserverCallbacks = t => {
                    t.forEach(fireObserverCallback)
                },
                te = {
                    some: 0,
                    all: 1
                };

            function shallowCompare(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function resolveVariant(t, e, i) {
                let n = t.getProps();
                return resolveVariantFromProps(n, e, void 0 !== i ? i : n.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.getVelocity()), e
                }(t))
            }
            let ti = "data-" + camelToDash("framerAppearId");
            var tn = i(5487);
            let secondsToMilliseconds = t => 1e3 * t,
                millisecondsToSeconds = t => t / 1e3,
                tr = {
                    current: !1
                },
                isBezierDefinition = t => Array.isArray(t) && "number" == typeof t[0],
                cubicBezierAsString = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                ts = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: cubicBezierAsString([0, .65, .55, 1]),
                    circOut: cubicBezierAsString([.55, 0, 1, .45]),
                    backIn: cubicBezierAsString([.31, .01, .66, -.59]),
                    backOut: cubicBezierAsString([.33, 1.53, .69, .99])
                };
            var ta = i(6260);
            let isEasingArray = t => Array.isArray(t) && "number" != typeof t[0];
            var to = i(7156);
            let mirrorEasing = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                reverseEasing = t => e => 1 - t(1 - e),
                circIn = t => 1 - Math.sin(Math.acos(t)),
                tl = reverseEasing(circIn),
                tu = mirrorEasing(tl),
                th = (0, to._)(.33, 1.53, .69, .99),
                tc = reverseEasing(th),
                td = mirrorEasing(tc),
                tm = {
                    linear: Q.Z,
                    easeIn: ta.YQ,
                    easeInOut: ta.mZ,
                    easeOut: ta.Vv,
                    circIn: circIn,
                    circInOut: tu,
                    circOut: tl,
                    backIn: tc,
                    backInOut: td,
                    backOut: th,
                    anticipate: t => (t *= 2) < 1 ? .5 * tc(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                easingDefinitionToFunction = t => {
                    if (Array.isArray(t)) {
                        (0, tn.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return (0, to._)(e, i, n, r)
                    }
                    return "string" == typeof t ? ((0, tn.k)(void 0 !== tm[t], `Invalid easing type '${t}'`), tm[t]) : t
                },
                isColorString = (t, e) => i => !!(isString(i) && L.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
                splitColor = (t, e, i) => n => {
                    if (!isString(n)) return n;
                    let [r, s, a, o] = n.match(k);
                    return {
                        [t]: parseFloat(r),
                        [e]: parseFloat(s),
                        [i]: parseFloat(a),
                        alpha: void 0 !== o ? parseFloat(o) : 1
                    }
                },
                clampRgbUnit = t => clamp(0, 255, t),
                tp = {
                    ...M,
                    transform: t => Math.round(clampRgbUnit(t))
                },
                tf = {
                    test: isColorString("rgb", "red"),
                    parse: splitColor("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: n = 1
                    }) => "rgba(" + tp.transform(t) + ", " + tp.transform(e) + ", " + tp.transform(i) + ", " + sanitize(E.transform(n)) + ")"
                },
                tg = {
                    test: isColorString("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            n = "",
                            r = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(n, 16),
                            alpha: r ? parseInt(r, 16) / 255 : 1
                        }
                    },
                    transform: tf.transform
                },
                ty = {
                    test: isColorString("hsl", "hue"),
                    parse: splitColor("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: i,
                        alpha: n = 1
                    }) => "hsla(" + Math.round(t) + ", " + F.transform(sanitize(e)) + ", " + F.transform(sanitize(i)) + ", " + sanitize(E.transform(n)) + ")"
                },
                tv = {
                    test: t => tf.test(t) || tg.test(t) || ty.test(t),
                    parse: t => tf.test(t) ? tf.parse(t) : ty.test(t) ? ty.parse(t) : tg.parse(t),
                    transform: t => isString(t) ? t : t.hasOwnProperty("red") ? tf.transform(t) : ty.transform(t)
                },
                mix = (t, e, i) => -i * t + i * e + t;

            function hueToRgb(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            let mixLinearColor = (t, e, i) => {
                    let n = t * t;
                    return Math.sqrt(Math.max(0, i * (e * e - n) + n))
                },
                tx = [tg, tf, ty],
                getColorType = t => tx.find(e => e.test(t));

            function asRGBA(t) {
                let e = getColorType(t);
                (0, tn.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let i = e.parse(t);
                return e === ty && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: n
                }) {
                    t /= 360, i /= 100;
                    let r = 0,
                        s = 0,
                        a = 0;
                    if (e /= 100) {
                        let n = i < .5 ? i * (1 + e) : i + e - i * e,
                            o = 2 * i - n;
                        r = hueToRgb(o, n, t + 1 / 3), s = hueToRgb(o, n, t), a = hueToRgb(o, n, t - 1 / 3)
                    } else r = s = a = i;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * a),
                        alpha: n
                    }
                }(i)), i
            }
            let mixColor = (t, e) => {
                    let i = asRGBA(t),
                        n = asRGBA(e),
                        r = {
                            ...i
                        };
                    return t => (r.red = mixLinearColor(i.red, n.red, t), r.green = mixLinearColor(i.green, n.green, t), r.blue = mixLinearColor(i.blue, n.blue, t), r.alpha = mix(i.alpha, n.alpha, t), tf.transform(r))
                },
                tP = {
                    regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
                    countKey: "Vars",
                    token: "${v}",
                    parse: Q.Z
                },
                tV = {
                    regex: B,
                    countKey: "Colors",
                    token: "${c}",
                    parse: tv.parse
                },
                tT = {
                    regex: k,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: M.parse
                };

            function tokenise(t, {
                regex: e,
                countKey: i,
                token: n,
                parse: r
            }) {
                let s = t.tokenised.match(e);
                s && (t["num" + i] = s.length, t.tokenised = t.tokenised.replace(e, n), t.values.push(...s.map(r)))
            }

            function analyseComplexValue(t) {
                let e = t.toString(),
                    i = {
                        value: e,
                        tokenised: e,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return i.value.includes("var(--") && tokenise(i, tP), tokenise(i, tV), tokenise(i, tT), i
            }

            function parseComplexValue(t) {
                return analyseComplexValue(t).values
            }

            function createTransformer(t) {
                let {
                    values: e,
                    numColors: i,
                    numVars: n,
                    tokenised: r
                } = analyseComplexValue(t), s = e.length;
                return t => {
                    let e = r;
                    for (let r = 0; r < s; r++) e = r < n ? e.replace(tP.token, t[r]) : r < n + i ? e.replace(tV.token, tv.transform(t[r])) : e.replace(tT.token, sanitize(t[r]));
                    return e
                }
            }
            let convertNumbersToZero = t => "number" == typeof t ? 0 : t,
                tA = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && isString(t) && ((null === (e = t.match(k)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(B)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: parseComplexValue,
                    createTransformer,
                    getAnimatableNone: function(t) {
                        let e = parseComplexValue(t),
                            i = createTransformer(t);
                        return i(e.map(convertNumbersToZero))
                    }
                },
                mixImmediate = (t, e) => i => `${i>0?e:t}`;

            function getMixer(t, e) {
                return "number" == typeof t ? i => mix(t, e, i) : tv.test(t) ? mixColor(t, e) : t.startsWith("var(") ? mixImmediate(t, e) : mixComplex(t, e)
            }
            let mixArray = (t, e) => {
                    let i = [...t],
                        n = i.length,
                        r = t.map((t, i) => getMixer(t, e[i]));
                    return t => {
                        for (let e = 0; e < n; e++) i[e] = r[e](t);
                        return i
                    }
                },
                mixObject = (t, e) => {
                    let i = {
                            ...t,
                            ...e
                        },
                        n = {};
                    for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = getMixer(t[r], e[r]));
                    return t => {
                        for (let e in n) i[e] = n[e](t);
                        return i
                    }
                },
                mixComplex = (t, e) => {
                    let i = tA.createTransformer(e),
                        n = analyseComplexValue(t),
                        r = analyseComplexValue(e),
                        s = n.numVars === r.numVars && n.numColors === r.numColors && n.numNumbers >= r.numNumbers;
                    return s ? pipe(mixArray(n.values, r.values), i) : ((0, tn.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), mixImmediate(t, e))
                },
                progress = (t, e, i) => {
                    let n = e - t;
                    return 0 === n ? 1 : (i - t) / n
                },
                mixNumber = (t, e) => i => mix(t, e, i);

            function interpolate(t, e, {
                clamp: i = !0,
                ease: n,
                mixer: r
            } = {}) {
                let s = t.length;
                if ((0, tn.k)(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let a = function(t, e, i) {
                        let n = [],
                            r = i || function(t) {
                                if ("number" == typeof t);
                                else if ("string" == typeof t) return tv.test(t) ? mixColor : mixComplex;
                                else if (Array.isArray(t)) return mixArray;
                                else if ("object" == typeof t) return mixObject;
                                return mixNumber
                            }(t[0]),
                            s = t.length - 1;
                        for (let i = 0; i < s; i++) {
                            let s = r(t[i], t[i + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[i] || Q.Z : e;
                                s = pipe(t, s)
                            }
                            n.push(s)
                        }
                        return n
                    }(e, n, r),
                    o = a.length,
                    interpolator = e => {
                        let i = 0;
                        if (o > 1)
                            for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                        let n = progress(t[i], t[i + 1], e);
                        return a[i](n)
                    };
                return i ? e => interpolator(clamp(t[0], t[s - 1], e)) : interpolator
            }

            function keyframes({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                let r = isEasingArray(n) ? n.map(easingDefinitionToFunction) : easingDefinitionToFunction(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    a = (i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let r = progress(0, e, n);
                                t.push(mix(i, 1, r))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t),
                    o = interpolate(a, e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || ta.mZ).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = o(e), s.done = e >= t, s)
                }
            }

            function calcGeneratorVelocity(t, e, i) {
                var n, r;
                let s = Math.max(e - 5, 0);
                return n = i - t(s), (r = e - s) ? n * (1e3 / r) : 0
            }

            function calcAngularFreq(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let tb = ["duration", "bounce"],
                tS = ["stiffness", "damping", "mass"];

            function isSpringType(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function spring({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...n
            }) {
                let r;
                let s = t[0],
                    a = t[t.length - 1],
                    o = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: h,
                        velocity: c,
                        duration: d,
                        isResolvedFromDuration: m
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!isSpringType(t, tS) && isSpringType(t, tb)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: n = 1
                            }) {
                                let r, s;
                                (0, tn.K)(t <= secondsToMilliseconds(10), "Spring duration must be 10 seconds or less");
                                let a = 1 - e;
                                a = clamp(.05, 1, a), t = clamp(.01, 10, millisecondsToSeconds(t)), a < 1 ? (r = e => {
                                    let n = e * a,
                                        r = n * t,
                                        s = calcAngularFreq(e, a);
                                    return .001 - (n - i) / s * Math.exp(-r)
                                }, s = e => {
                                    let n = e * a,
                                        s = n * t,
                                        o = Math.pow(a, 2) * Math.pow(e, 2) * t,
                                        l = calcAngularFreq(Math.pow(e, 2), a),
                                        u = -r(e) + .001 > 0 ? -1 : 1;
                                    return u * ((s * i + i - o) * Math.exp(-s)) / l
                                }) : (r = e => {
                                    let n = Math.exp(-e * t),
                                        r = (e - i) * t + 1;
                                    return -.001 + n * r
                                }, s = e => {
                                    let n = Math.exp(-e * t),
                                        r = (i - e) * (t * t);
                                    return n * r
                                });
                                let o = 5 / t,
                                    l = function(t, e, i) {
                                        let n = i;
                                        for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                        return n
                                    }(r, s, o);
                                if (t = secondsToMilliseconds(t), isNaN(l)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                };
                                {
                                    let e = Math.pow(l, 2) * n;
                                    return {
                                        stiffness: e,
                                        damping: 2 * a * Math.sqrt(n * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = {
                                ...e,
                                ...i,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }(n),
                    p = c ? -millisecondsToSeconds(c) : 0,
                    f = u / (2 * Math.sqrt(l * h)),
                    g = a - s,
                    y = millisecondsToSeconds(Math.sqrt(l / h)),
                    v = 5 > Math.abs(g);
                if (i || (i = v ? .01 : 2), e || (e = v ? .005 : .5), f < 1) {
                    let t = calcAngularFreq(y, f);
                    r = e => {
                        let i = Math.exp(-f * y * e);
                        return a - i * ((p + f * y * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
                    }
                } else if (1 === f) r = t => a - Math.exp(-y * t) * (g + (p + y * g) * t);
                else {
                    let t = y * Math.sqrt(f * f - 1);
                    r = e => {
                        let i = Math.exp(-f * y * e),
                            n = Math.min(t * e, 300);
                        return a - i * ((p + f * y * g) * Math.sinh(n) + t * g * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: m && d || null,
                    next: t => {
                        let n = r(t);
                        if (m) o.done = t >= d;
                        else {
                            let s = p;
                            0 !== t && (s = f < 1 ? calcGeneratorVelocity(r, t, n) : 0);
                            let l = Math.abs(s) <= i,
                                u = Math.abs(a - n) <= e;
                            o.done = l && u
                        }
                        return o.value = o.done ? a : n, o
                    }
                }
            }

            function inertia({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: a,
                min: o,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let m = t[0],
                    p = {
                        done: !1,
                        value: m
                    },
                    isOutOfBounds = t => void 0 !== o && t < o || void 0 !== l && t > l,
                    nearestBoundary = t => void 0 === o ? l : void 0 === l ? o : Math.abs(o - t) < Math.abs(l - t) ? o : l,
                    f = i * e,
                    g = m + f,
                    y = void 0 === a ? g : a(g);
                y !== g && (f = y - m);
                let calcDelta = t => -f * Math.exp(-t / n),
                    calcLatest = t => y + calcDelta(t),
                    applyFriction = t => {
                        let e = calcDelta(t),
                            i = calcLatest(t);
                        p.done = Math.abs(e) <= u, p.value = p.done ? y : i
                    },
                    checkCatchBoundary = t => {
                        isOutOfBounds(p.value) && (c = t, d = spring({
                            keyframes: [p.value, nearestBoundary(p.value)],
                            velocity: calcGeneratorVelocity(calcLatest, t, p.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return checkCatchBoundary(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, applyFriction(t), checkCatchBoundary(t)), void 0 !== c && t > c) ? d.next(t - c) : (e || applyFriction(t), p)
                    }
                }
            }
            let frameloopDriver = t => {
                let passTimestamp = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: () => _.Wi.update(passTimestamp, !0),
                    stop: () => (0, _.Pn)(passTimestamp),
                    now: () => _.frameData.isProcessing ? _.frameData.timestamp : performance.now()
                }
            };

            function calcGeneratorDuration(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let tD = {
                decay: inertia,
                inertia: inertia,
                tween: keyframes,
                keyframes: keyframes,
                spring: spring
            };

            function animateValue({
                autoplay: t = !0,
                delay: e = 0,
                driver: i = frameloopDriver,
                keyframes: n,
                type: r = "keyframes",
                repeat: s = 0,
                repeatDelay: a = 0,
                repeatType: o = "loop",
                onPlay: l,
                onStop: u,
                onComplete: h,
                onUpdate: c,
                ...d
            }) {
                let m, p, f, g, y, v = 1,
                    x = !1,
                    updateFinishedPromise = () => {
                        p = new Promise(t => {
                            m = t
                        })
                    };
                updateFinishedPromise();
                let P = tD[r] || keyframes;
                P !== keyframes && "number" != typeof n[0] && (g = interpolate([0, 100], n, {
                    clamp: !1
                }), n = [0, 100]);
                let V = P({
                    ...d,
                    keyframes: n
                });
                "mirror" === o && (y = P({
                    ...d,
                    keyframes: [...n].reverse(),
                    velocity: -(d.velocity || 0)
                }));
                let T = "idle",
                    A = null,
                    b = null,
                    S = null;
                null === V.calculatedDuration && s && (V.calculatedDuration = calcGeneratorDuration(V));
                let {
                    calculatedDuration: D
                } = V, C = 1 / 0, M = 1 / 0;
                null !== D && (M = (C = D + a) * (s + 1) - a);
                let E = 0,
                    tick = t => {
                        if (null === b) return;
                        v > 0 && (b = Math.min(b, t)), v < 0 && (b = Math.min(t - M / v, b)), E = null !== A ? A : Math.round(t - b) * v;
                        let i = E - e * (v >= 0 ? 1 : -1),
                            r = v >= 0 ? i < 0 : i > M;
                        E = Math.max(i, 0), "finished" === T && null === A && (E = M);
                        let l = E,
                            u = V;
                        if (s) {
                            let t = E / C,
                                e = Math.floor(t),
                                i = t % 1;
                            !i && t >= 1 && (i = 1), 1 === i && e--, e = Math.min(e, s + 1);
                            let n = !!(e % 2);
                            n && ("reverse" === o ? (i = 1 - i, a && (i -= a / C)) : "mirror" === o && (u = y));
                            let r = clamp(0, 1, i);
                            E > M && (r = "reverse" === o && n ? 1 : 0), l = r * C
                        }
                        let h = r ? {
                            done: !1,
                            value: n[0]
                        } : u.next(l);
                        g && (h.value = g(h.value));
                        let {
                            done: d
                        } = h;
                        r || null === D || (d = v >= 0 ? E >= M : E <= 0);
                        let m = null === A && ("finished" === T || "running" === T && d);
                        return c && c(h.value), m && finish(), h
                    },
                    stopAnimationDriver = () => {
                        f && f.stop(), f = void 0
                    },
                    cancel = () => {
                        T = "idle", stopAnimationDriver(), m(), updateFinishedPromise(), b = S = null
                    },
                    finish = () => {
                        T = "finished", h && h(), stopAnimationDriver(), m()
                    },
                    play = () => {
                        if (x) return;
                        f || (f = i(tick));
                        let t = f.now();
                        l && l(), null !== A ? b = t - A : b && "finished" !== T || (b = t), "finished" === T && updateFinishedPromise(), S = b, A = null, T = "running", f.start()
                    };
                t && play();
                let w = {
                    then: (t, e) => p.then(t, e),
                    get time() {
                        return millisecondsToSeconds(E)
                    },
                    set time(newTime) {
                        E = newTime = secondsToMilliseconds(newTime), null === A && f && 0 !== v ? b = f.now() - newTime / v : A = newTime
                    },
                    get duration() {
                        let t = null === V.calculatedDuration ? calcGeneratorDuration(V) : V.calculatedDuration;
                        return millisecondsToSeconds(t)
                    },
                    get speed() {
                        return v
                    },
                    set speed(newSpeed) {
                        if (newSpeed === v || !f) return;
                        v = newSpeed, w.time = millisecondsToSeconds(E)
                    },
                    get state() {
                        return T
                    },
                    play,
                    pause: () => {
                        T = "paused", A = E
                    },
                    stop: () => {
                        x = !0, "idle" !== T && (T = "idle", u && u(), cancel())
                    },
                    cancel: () => {
                        null !== S && tick(S), cancel()
                    },
                    complete: () => {
                        T = "finished"
                    },
                    sample: t => (b = 0, tick(t))
                };
                return w
            }
            let tC = (s = () => Object.hasOwnProperty.call(Element.prototype, "animate"), () => (void 0 === n && (n = s()), n)),
                tM = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                requiresPregeneratedKeyframes = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function isWaapiSupportedEasing(t) {
                    return !!(!t || "string" == typeof t && ts[t] || isBezierDefinition(t) || Array.isArray(t) && t.every(isWaapiSupportedEasing))
                }(e.ease),
                tE = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                criticallyDampedSpring = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                tw = {
                    type: "keyframes",
                    duration: .8
                },
                tk = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                getDefaultTransition = (t, {
                    keyframes: e
                }) => e.length > 2 ? tw : A.has(t) ? t.startsWith("scale") ? criticallyDampedSpring(e[1]) : tE : tk,
                isAnimatable = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (tA.test(e) || "0" === e) && !e.startsWith("url(")),
                tB = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function applyDefaultFilter(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(k) || [];
                if (!n) return t;
                let r = i.replace(n, ""),
                    s = tB.has(e) ? 1 : 0;
                return n !== i && (s *= 100), e + "(" + s + r + ")"
            }
            let tL = /([a-z-]*)\(.*?\)/g,
                tR = {
                    ...tA,
                    getAnimatableNone: t => {
                        let e = t.match(tL);
                        return e ? e.map(applyDefaultFilter).join(" ") : t
                    }
                },
                tF = {
                    ...W,
                    color: tv,
                    backgroundColor: tv,
                    outlineColor: tv,
                    fill: tv,
                    stroke: tv,
                    borderColor: tv,
                    borderTopColor: tv,
                    borderRightColor: tv,
                    borderBottomColor: tv,
                    borderLeftColor: tv,
                    filter: tR,
                    WebkitFilter: tR
                },
                getDefaultValueType = t => tF[t];

            function animatable_none_getAnimatableNone(t, e) {
                let i = getDefaultValueType(t);
                return i !== tR && (i = tA), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let isZeroValueString = t => /^0[^.\s]+$/.test(t);

            function getValueTransition(t, e) {
                return t[e] || t.default || t
            }
            let animateMotionValue = (t, e, i, n = {}) => r => {
                let s = getValueTransition(n, t) || {},
                    a = s.delay || n.delay || 0,
                    {
                        elapsed: o = 0
                    } = n;
                o -= secondsToMilliseconds(a);
                let l = function(t, e, i, n) {
                        let r, s;
                        let a = isAnimatable(e, i);
                        r = Array.isArray(i) ? [...i] : [null, i];
                        let o = void 0 !== n.from ? n.from : t.get(),
                            l = [];
                        for (let t = 0; t < r.length; t++) {
                            var u;
                            null === r[t] && (r[t] = 0 === t ? o : r[t - 1]), ("number" == typeof(u = r[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || isZeroValueString(u) : void 0) && l.push(t), "string" == typeof r[t] && "none" !== r[t] && "0" !== r[t] && (s = r[t])
                        }
                        if (a && l.length && s)
                            for (let t = 0; t < l.length; t++) {
                                let i = l[t];
                                r[i] = animatable_none_getAnimatableNone(e, s)
                            }
                        return r
                    }(e, t, i, s),
                    u = l[0],
                    h = l[l.length - 1],
                    c = isAnimatable(t, u),
                    d = isAnimatable(t, h);
                (0, tn.K)(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
                let m = {
                    keyframes: l,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...s,
                    delay: -o,
                    onUpdate: t => {
                        e.set(t), s.onUpdate && s.onUpdate(t)
                    },
                    onComplete: () => {
                        r(), s.onComplete && s.onComplete()
                    }
                };
                if (! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: n,
                        staggerDirection: r,
                        repeat: s,
                        repeatType: a,
                        repeatDelay: o,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(s) && (m = {
                        ...m,
                        ...getDefaultTransition(t, m)
                    }), m.duration && (m.duration = secondsToMilliseconds(m.duration)), m.repeatDelay && (m.repeatDelay = secondsToMilliseconds(m.repeatDelay)), !c || !d || tr.current || !1 === s.type) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: i,
                    onComplete: n
                }) {
                    let setValue = () => (i && i(t[t.length - 1]), n && n(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: Q.Z,
                        pause: Q.Z,
                        stop: Q.Z,
                        then: t => (t(), Promise.resolve()),
                        cancel: Q.Z,
                        complete: Q.Z
                    });
                    return e ? animateValue({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: setValue
                    }) : setValue()
                }(tr.current ? {
                    ...m,
                    delay: 0
                } : m);
                if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let i = function(t, e, {
                        onUpdate: i,
                        onComplete: n,
                        ...r
                    }) {
                        let s, a;
                        let o = tC() && tM.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type;
                        if (!o) return !1;
                        let l = !1,
                            updateFinishedPromise = () => {
                                a = new Promise(t => {
                                    s = t
                                })
                            };
                        updateFinishedPromise();
                        let {
                            keyframes: u,
                            duration: h = 300,
                            ease: c,
                            times: d
                        } = r;
                        if (requiresPregeneratedKeyframes(e, r)) {
                            let t = animateValue({
                                    ...r,
                                    repeat: 0,
                                    delay: 0
                                }),
                                e = {
                                    done: !1,
                                    value: u[0]
                                },
                                i = [],
                                n = 0;
                            for (; !e.done && n < 2e4;) e = t.sample(n), i.push(e.value), n += 10;
                            d = void 0, u = i, h = n - 10, c = "linear"
                        }
                        let m = function(t, e, i, {
                            delay: n = 0,
                            duration: r,
                            repeat: s = 0,
                            repeatType: a = "loop",
                            ease: o,
                            times: l
                        } = {}) {
                            let u = {
                                [e]: i
                            };
                            l && (u.offset = l);
                            let h = function mapEasingToNativeEasing(t) {
                                if (t) return isBezierDefinition(t) ? cubicBezierAsString(t) : Array.isArray(t) ? t.map(mapEasingToNativeEasing) : ts[t]
                            }(o);
                            return Array.isArray(h) && (u.easing = h), t.animate(u, {
                                delay: n,
                                duration: r,
                                easing: Array.isArray(h) ? "linear" : h,
                                fill: "both",
                                iterations: s + 1,
                                direction: "reverse" === a ? "alternate" : "normal"
                            })
                        }(t.owner.current, e, u, {
                            ...r,
                            duration: h,
                            ease: c,
                            times: d
                        });
                        r.syncStart && (m.startTime = _.frameData.isProcessing ? _.frameData.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
                        let cancelAnimation = () => m.cancel(),
                            safeCancel = () => {
                                _.Wi.update(cancelAnimation), s(), updateFinishedPromise()
                            };
                        return m.onfinish = () => {
                            t.set(function(t, {
                                repeat: e,
                                repeatType: i = "loop"
                            }) {
                                let n = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                                return t[n]
                            }(u, r)), n && n(), safeCancel()
                        }, {
                            then: (t, e) => a.then(t, e),
                            attachTimeline: t => (m.timeline = t, m.onfinish = null, Q.Z),
                            get time() {
                                return millisecondsToSeconds(m.currentTime || 0)
                            },
                            set time(newTime) {
                                m.currentTime = secondsToMilliseconds(newTime)
                            },
                            get speed() {
                                return m.playbackRate
                            },
                            set speed(newSpeed) {
                                m.playbackRate = newSpeed
                            },
                            get duration() {
                                return millisecondsToSeconds(h)
                            },
                            play: () => {
                                l || (m.play(), (0, _.Pn)(cancelAnimation))
                            },
                            pause: () => m.pause(),
                            stop: () => {
                                if (l = !0, "idle" === m.playState) return;
                                let {
                                    currentTime: e
                                } = m;
                                if (e) {
                                    let i = animateValue({
                                        ...r,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                                }
                                safeCancel()
                            },
                            complete: () => m.finish(),
                            cancel: safeCancel
                        }
                    }(e, t, m);
                    if (i) return i
                }
                return animateValue(m)
            };

            function isWillChangeMotionValue(t) {
                return !!(isMotionValue(t) && t.add)
            }
            let isNumericalString = t => /^\-?\d*\.?\d+$/.test(t);

            function addUniqueItem(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function removeItem(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            let SubscriptionManager = class SubscriptionManager {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return addUniqueItem(this.subscriptions, t), () => removeItem(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let n = this.subscriptions[r];
                                n && n(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            };
            let isFloat = t => !isNaN(parseFloat(t)),
                tj = {
                    current: void 0
                };
            let MotionValue = class MotionValue {
                constructor(t, e = {}) {
                    this.version = "10.16.4", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: i,
                            timestamp: n
                        } = _.frameData;
                        this.lastUpdated !== n && (this.timeDelta = i, this.lastUpdated = n, _.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => _.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = isFloat(this.current), this.owner = e.owner
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new SubscriptionManager);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), _.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = t, this.timeDelta = i
                }
                jump(t) {
                    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return tj.current && tj.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t, e;
                    return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev), (e = this.timeDelta) ? t * (1e3 / e) : 0) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            };

            function motionValue(t, e) {
                return new MotionValue(t, e)
            }
            let testValueType = t => e => e.test(t),
                tO = [M, j, F, R, I, O, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                findDimensionValueType = t => tO.find(testValueType(t)),
                tI = [...tO, tv, tA],
                findValueType = t => tI.find(testValueType(t));

            function animateTarget(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: r
            } = {}) {
                let {
                    transition: s = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...o
                } = t.makeTargetAnimatable(e), l = t.getValue("willChange");
                n && (s = n);
                let u = [],
                    h = r && t.animationState && t.animationState.getState()[r];
                for (let e in o) {
                    let n = t.getValue(e),
                        r = o[e];
                    if (!n || void 0 === r || h && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(h, e)) continue;
                    let a = {
                        delay: i,
                        elapsed: 0,
                        ...s
                    };
                    if (window.HandoffAppearAnimations && !n.hasAnimated) {
                        let i = t.getProps()[ti];
                        i && (a.elapsed = window.HandoffAppearAnimations(i, e, n, _.Wi), a.syncStart = !0)
                    }
                    n.start(animateMotionValue(e, n, r, t.shouldReduceMotion && A.has(e) ? {
                        type: !1
                    } : a));
                    let c = n.animation;
                    isWillChangeMotionValue(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c)
                }
                return a && Promise.all(u).then(() => {
                    a && function(t, e) {
                        let i = resolveVariant(t, e),
                            {
                                transitionEnd: n = {},
                                transition: r = {},
                                ...s
                            } = i ? t.makeTargetAnimatable(i, !1) : {};
                        for (let e in s = {
                                ...s,
                                ...n
                            }) {
                            let i = resolveFinalValueInKeyframes(s[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, motionValue(i))
                        }
                    }(t, a)
                }), u
            }

            function animateVariant(t, e, i = {}) {
                let n = resolveVariant(t, e, i.custom),
                    {
                        transition: r = t.getDefaultTransition() || {}
                    } = n || {};
                i.transitionOverride && (r = i.transitionOverride);
                let s = n ? () => Promise.all(animateTarget(t, n, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: s = 0,
                            staggerChildren: a,
                            staggerDirection: o
                        } = r;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let a = [],
                                o = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => o - t * n;
                            return Array.from(t.variantChildren).sort(sortByTreeOrder).forEach((t, n) => {
                                t.notify("AnimationStart", e), a.push(animateVariant(t, e, {
                                    ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(a)
                        }(t, e, s + n, a, o, i)
                    } : () => Promise.resolve(),
                    {
                        when: o
                    } = r;
                if (!o) return Promise.all([s(), a(i.delay)]);
                {
                    let [t, e] = "beforeChildren" === o ? [s, a] : [a, s];
                    return t().then(() => e())
                }
            }

            function sortByTreeOrder(t, e) {
                return t.sortNodePosition(e)
            }
            let tN = [...d].reverse(),
                tU = d.length;

            function createTypeState(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let tW = 0,
                distance = (t, e) => Math.abs(t - e);
            let PanSession = class PanSession {
                constructor(t, e, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = getPanInfo(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    let i = distance(t.x, e.x),
                                        n = distance(t.y, e.y);
                                    return Math.sqrt(i ** 2 + n ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: n
                            } = t, {
                                timestamp: r
                            } = _.frameData;
                            this.history.push({
                                ...n,
                                timestamp: r
                            });
                            let {
                                onStart: s,
                                onMove: a
                            } = this.handlers;
                            e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = transformPoint(e, this.transformPagePoint), _.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: i,
                                onSessionEnd: n
                            } = this.handlers, r = getPanInfo("pointercancel" === t.type ? this.lastMoveEventInfo : transformPoint(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, r), n && n(t, r)
                        }, !isPrimaryPointer(t)) return;
                    this.handlers = e, this.transformPagePoint = i;
                    let n = extractEventInfo(t),
                        r = transformPoint(n, this.transformPagePoint),
                        {
                            point: s
                        } = r,
                        {
                            timestamp: a
                        } = _.frameData;
                    this.history = [{
                        ...s,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: o
                    } = e;
                    o && o(t, getPanInfo(r, this.history)), this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, _.Pn)(this.updatePoint)
                }
            };

            function transformPoint(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function subtractPoint(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function getPanInfo({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: subtractPoint(t, lastDevicePoint(e)),
                    offset: subtractPoint(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = lastDevicePoint(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > secondsToMilliseconds(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = millisecondsToSeconds(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(e, 0)
                }
            }

            function lastDevicePoint(t) {
                return t[t.length - 1]
            }

            function calcLength(t) {
                return t.max - t.min
            }

            function isNear(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function calcAxisDelta(t, e, i, n = .5) {
                t.origin = n, t.originPoint = mix(e.min, e.max, t.origin), t.scale = calcLength(i) / calcLength(e), (isNear(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = mix(i.min, i.max, t.origin) - t.originPoint, (isNear(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function calcBoxDelta(t, e, i, n) {
                calcAxisDelta(t.x, e.x, i.x, n ? n.originX : void 0), calcAxisDelta(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function calcRelativeAxis(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + calcLength(e)
            }

            function calcRelativeAxisPosition(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + calcLength(e)
            }

            function calcRelativePosition(t, e, i) {
                calcRelativeAxisPosition(t.x, e.x, i.x), calcRelativeAxisPosition(t.y, e.y, i.y)
            }

            function calcRelativeAxisConstraints(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function calcViewportAxisConstraints(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function resolveAxisElastic(t, e, i) {
                return {
                    min: resolvePointElastic(t, e),
                    max: resolvePointElastic(t, i)
                }
            }

            function resolvePointElastic(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let createAxisDelta = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                createDelta = () => ({
                    x: createAxisDelta(),
                    y: createAxisDelta()
                }),
                createAxis = () => ({
                    min: 0,
                    max: 0
                }),
                createBox = () => ({
                    x: createAxis(),
                    y: createAxis()
                });

            function eachAxis(t) {
                return [t("x"), t("y")]
            }

            function convertBoundingBoxToBox({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function isIdentityScale(t) {
                return void 0 === t || 1 === t
            }

            function hasScale({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !isIdentityScale(t) || !isIdentityScale(e) || !isIdentityScale(i)
            }

            function hasTransform(t) {
                return hasScale(t) || has2DTranslate(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function has2DTranslate(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function applyPointDelta(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function applyAxisDelta(t, e = 0, i = 1, n, r) {
                t.min = applyPointDelta(t.min, e, i, n, r), t.max = applyPointDelta(t.max, e, i, n, r)
            }

            function applyBoxDelta(t, {
                x: e,
                y: i
            }) {
                applyAxisDelta(t.x, e.translate, e.scale, e.originPoint), applyAxisDelta(t.y, i.translate, i.scale, i.originPoint)
            }

            function snapToDefault(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function translateAxis(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function transformAxis(t, e, [i, n, r]) {
                let s = void 0 !== e[r] ? e[r] : .5,
                    a = mix(t.min, t.max, s);
                applyAxisDelta(t, e[i], e[n], a, e.scale)
            }
            let tH = ["x", "scaleX", "originX"],
                tz = ["y", "scaleY", "originY"];

            function transformBox(t, e) {
                transformAxis(t.x, e, tH), transformAxis(t.y, e, tz)
            }

            function measureViewportBox(t, e) {
                return convertBoundingBoxToBox(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let tG = new WeakMap;
            let VisualElementDragControls = class VisualElementDragControls {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = createBox(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    i && !1 === i.isPresent || (this.panSession = new PanSession(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), e && this.snapToCursor(extractEventInfo(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = getGlobalLock(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (F.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = calcLength(n);
                                            e = t * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && _.Wi.update(() => r(t, e), !1, !0);
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: a
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(a), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    }))
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && _.Wi.update(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !shouldDrag(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? mix(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? mix(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, n = this.constraints;
                    t && isRefObject(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: calcRelativeAxisConstraints(t.x, i, r),
                            y: calcRelativeAxisConstraints(t.y, e, n)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: resolveAxisElastic(t, "left", "right"),
                            y: resolveAxisElastic(t, "top", "bottom")
                        }
                    }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && eachAxis(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !isRefObject(e)) return !1;
                    let n = e.current;
                    (0, tn.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = measureViewportBox(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (translateAxis(n.x, r.offset.x), translateAxis(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: calcViewportAxisConstraints((t = r.layout.layoutBox).x, s.x),
                            y: calcViewportAxisConstraints(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(a));
                        this.hasMutatedConstraints = !!t, t && (a = convertBoundingBoxToBox(t))
                    }
                    return a
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: a
                    } = this.getProps(), o = this.constraints || {}, l = eachAxis(a => {
                        if (!shouldDrag(a, e, this.currentDirection)) return;
                        let l = o && o[a] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[a] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(a, u)
                    });
                    return Promise.all(l).then(a)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start(animateMotionValue(t, i, 0, e))
                }
                stopAnimation() {
                    eachAxis(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps(),
                        n = i[e];
                    return n || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    eachAxis(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!shouldDrag(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - mix(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!isRefObject(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    eachAxis(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = calcLength(t),
                                    r = calcLength(e);
                                return r > n ? i = progress(e.min, e.max - n, t.min) : n > r && (i = progress(t.min, t.max - r, e.min)), clamp(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), eachAxis(e => {
                        if (!shouldDrag(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set(mix(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    tG.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = addPointerEvent(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        measureDragConstraints = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            isRefObject(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", measureDragConstraints);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), measureDragConstraints();
                    let r = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (eachAxis(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), e(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: a = !0
                        } = t;
                    return {
                        ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: a
                    }
                }
            };

            function shouldDrag(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            let asyncHandler = t => (e, i) => {
                    t && _.Wi.update(() => t(e, i))
                },
                t$ = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function pixelsToPercent(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let tZ = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!j.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = pixelsToPercent(t, e.target.x),
                        n = pixelsToPercent(t, e.target.y);
                    return `${i}% ${n}%`
                }
            };
            let MeasureLayoutWithContext = class MeasureLayoutWithContext extends a.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(V, t_), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({
                        ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), t$.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || _.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            };

            function MeasureLayout(t) {
                let [e, i] = function() {
                    let t = (0, a.useContext)(u.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: n
                    } = t, r = (0, a.useId)();
                    return (0, a.useEffect)(() => n(r), []), !e && i ? [!1, () => i && i(r)] : [!0]
                }(), n = (0, a.useContext)(y.p);
                return a.createElement(MeasureLayoutWithContext, {
                    ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, a.useContext)(v),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let t_ = {
                    borderRadius: {
                        ...tZ,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: tZ,
                    borderTopRightRadius: tZ,
                    borderBottomLeftRadius: tZ,
                    borderBottomRightRadius: tZ,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let n = tA.parse(t);
                            if (n.length > 5) return t;
                            let r = tA.createTransformer(t),
                                s = "number" != typeof n[0] ? 1 : 0,
                                a = i.x.scale * e.x,
                                o = i.y.scale * e.y;
                            n[0 + s] /= a, n[1 + s] /= o;
                            let l = mix(a, o, .5);
                            return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                        }
                    }
                },
                tq = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                tY = tq.length,
                asNumber = t => "string" == typeof t ? parseFloat(t) : t,
                isPx = t => "number" == typeof t || j.test(t);

            function getRadius(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let tK = compress(0, .5, tl),
                tX = compress(.5, .95, Q.Z);

            function compress(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i(progress(t, e, n))
            }

            function copyAxisInto(t, e) {
                t.min = e.min, t.max = e.max
            }

            function copyBoxInto(t, e) {
                copyAxisInto(t.x, e.x), copyAxisInto(t.y, e.y)
            }

            function removePointDelta(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function removeAxisTransforms(t, e, [i, n, r], s, a) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, a = t) {
                    if (F.test(e)) {
                        e = parseFloat(e);
                        let t = mix(a.min, a.max, e / 100);
                        e = t - a.min
                    }
                    if ("number" != typeof e) return;
                    let o = mix(s.min, s.max, n);
                    t === s && (o -= e), t.min = removePointDelta(t.min, e, i, o, r), t.max = removePointDelta(t.max, e, i, o, r)
                }(t, e[i], e[n], e[r], e.scale, s, a)
            }
            let tQ = ["x", "scaleX", "originX"],
                tJ = ["y", "scaleY", "originY"];

            function removeBoxTransforms(t, e, i, n) {
                removeAxisTransforms(t.x, e, tQ, i ? i.x : void 0, n ? n.x : void 0), removeAxisTransforms(t.y, e, tJ, i ? i.y : void 0, n ? n.y : void 0)
            }

            function isAxisDeltaZero(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function isDeltaZero(t) {
                return isAxisDeltaZero(t.x) && isAxisDeltaZero(t.y)
            }

            function boxEqualsRounded(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function aspectRatio(t) {
                return calcLength(t.x) / calcLength(t.y)
            }
            let NodeStack = class NodeStack {
                constructor() {
                    this.members = []
                }
                add(t) {
                    addUniqueItem(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (removeItem(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            };

            function buildProjectionTransform(t, e, i) {
                let n = "",
                    r = t.x.translate / e.x,
                    s = t.y.translate / e.y;
                if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: r
                    } = i;
                    t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), r && (n += `rotateY(${r}deg) `)
                }
                let a = t.x.scale * e.x,
                    o = t.y.scale * e.y;
                return (1 !== a || 1 !== o) && (n += `scale(${a}, ${o})`), n || "none"
            }
            let compareByDepth = (t, e) => t.depth - e.depth;
            let FlatTree = class FlatTree {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    addUniqueItem(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    removeItem(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(compareByDepth), this.isDirty = !1, this.children.forEach(t)
                }
            };
            let t0 = ["", "X", "Y", "Z"],
                t1 = 0,
                t5 = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function createProjectionNode({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = t1++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            t5.totalNodes = t5.resolvedTargetDeltas = t5.recalculatedProjection = 0, this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), window.MotionDebug && window.MotionDebug.record(t5)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new FlatTree)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new SubscriptionManager), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let resizeUnblockUpdate = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = performance.now(),
                                        checkElapsed = ({
                                            timestamp: n
                                        }) => {
                                            let r = n - i;
                                            r >= e && ((0, _.Pn)(checkElapsed), t(r - e))
                                        };
                                    return _.Wi.read(checkElapsed, !0), () => (0, _.Pn)(checkElapsed)
                                }(resizeUnblockUpdate, 250), t$.hasAnimatedSinceResize && (t$.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || t2,
                                {
                                    onLayoutAnimationStart: a,
                                    onLayoutAnimationComplete: o
                                } = s.getProps(),
                                l = !this.targetLayout || !boxEqualsRounded(this.targetLayout, n) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = {
                                    ...getValueTransition(r, "layout"),
                                    onPlay: a,
                                    onComplete: o
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, _.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(resetRotation), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        this.updateScheduled = !1;
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(clearMeasurements);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(clearIsLayoutDirty), this.isUpdating = !1, this.nodes.forEach(resetTransformStyle), this.nodes.forEach(updateLayout), this.nodes.forEach(notifyLayoutUpdate), this.clearAllSnapshots();
                        let e = performance.now();
                        _.frameData.delta = clamp(0, 1e3 / 60, e - _.frameData.timestamp), _.frameData.timestamp = e, _.frameData.isProcessing = !0, _.S6.update.process(_.frameData), _.S6.preRender.process(_.frameData), _.S6.render.process(_.frameData), _.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(clearSnapshot), this.sharedNodes.forEach(removeLeadSnapshots)
                    }
                    scheduleUpdateProjection() {
                        _.Wi.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        _.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll()
                            }
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = createBox(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: n(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !isDeltaZero(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || hasTransform(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), roundAxis((e = n).x), roundAxis(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return createBox();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (translateAxis(e.x, i.offset.x), translateAxis(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = createBox();
                        copyBoxInto(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let n = this.path[i],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            if (n !== this.root && r && s.layoutScroll) {
                                if (r.isRoot) {
                                    copyBoxInto(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && (translateAxis(e.x, -i.offset.x), translateAxis(e.y, -i.offset.y))
                                }
                                translateAxis(e.x, r.offset.x), translateAxis(e.y, r.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = createBox();
                        copyBoxInto(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && transformBox(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), hasTransform(n.latestValues) && transformBox(i, n.latestValues)
                        }
                        return hasTransform(this.latestValues) && transformBox(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = createBox();
                        copyBoxInto(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !hasTransform(i.latestValues)) continue;
                            hasScale(i.latestValues) && i.updateSnapshot();
                            let n = createBox(),
                                r = i.measurePageBox();
                            copyBoxInto(n, r), removeBoxTransforms(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return hasTransform(this.latestValues) && removeBoxTransforms(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = {
                            ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let a = !!this.resumingFrom || this !== s,
                            o = !(t || a && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (o) return;
                        let {
                            layout: l,
                            layoutId: u
                        } = this.options;
                        if (this.layout && (l || u)) {
                            if (this.resolvedRelativeTargetAt = _.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, calcRelativeAxis(i.x, n.x, r.x), calcRelativeAxis(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, this.target, t.target), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                t5.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === _.frameData.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
                        let a = this.treeScale.x,
                            o = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            let r, s;
                            let a = i.length;
                            if (a) {
                                e.x = e.y = 1;
                                for (let o = 0; o < a; o++) {
                                    s = (r = i[o]).projectionDelta;
                                    let a = r.instance;
                                    (!a || !a.style || "contents" !== a.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && transformBox(t, {
                                        x: -r.scroll.offset.x,
                                        y: -r.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, applyBoxDelta(t, s)), n && hasTransform(r.latestValues) && transformBox(t, r.latestValues))
                                }
                                e.x = snapToDefault(e.x), e.y = snapToDefault(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = createDelta(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = createDelta(), this.projectionDeltaWithTransform = createDelta());
                        let u = this.projectionTransform;
                        calcBoxDelta(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== a || this.treeScale.y !== o) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), t5.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = {
                                ...this.latestValues
                            },
                            a = createDelta();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let o = createBox(),
                            l = n ? n.source : void 0,
                            u = this.layout ? this.layout.source : void 0,
                            h = l !== u,
                            c = this.getStack(),
                            d = !c || c.members.length <= 1,
                            m = !!(h && !d && !0 === this.options.crossfade && !this.path.some(hasOpacityCrossfade));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (mixAxisDelta(a.x, t.x, n), mixAxisDelta(a.y, t.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var l, u, c, p;
                                calcRelativePosition(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), c = this.relativeTarget, p = this.relativeTargetOrigin, mixAxis(c.x, p.x, o.x, n), mixAxis(c.y, p.y, o.y, n), i && (l = this.relativeTarget, u = i, l.x.min === u.x.min && l.x.max === u.x.max && l.y.min === u.y.min && l.y.max === u.y.max) && (this.isProjectionDirty = !1), i || (i = createBox()), copyBoxInto(i, this.relativeTarget)
                            }
                            h && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = mix(0, void 0 !== i.opacity ? i.opacity : 1, tK(n)), t.opacityExit = mix(void 0 !== e.opacity ? e.opacity : 1, 0, tX(n))) : s && (t.opacity = mix(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < tY; r++) {
                                    let s = `border${tq[r]}Radius`,
                                        a = getRadius(e, s),
                                        o = getRadius(i, s);
                                    if (void 0 === a && void 0 === o) continue;
                                    a || (a = 0), o || (o = 0);
                                    let l = 0 === a || 0 === o || isPx(a) === isPx(o);
                                    l ? (t[s] = Math.max(mix(asNumber(a), asNumber(o), n), 0), (F.test(o) || F.test(a)) && (t[s] += "%")) : t[s] = o
                                }(e.rotate || i.rotate) && (t.rotate = mix(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, m, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, _.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _.Wi.update(() => {
                            t$.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let n = isMotionValue(t) ? t : motionValue(t);
                                return n.start(animateMotionValue("", n, 1e3, i)), n.animation
                            }(0, 0, {
                                ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || createBox();
                                let e = calcLength(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = calcLength(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            copyBoxInto(e, i), transformBox(e, r), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new NodeStack);
                        let i = this.sharedNodes.get(t);
                        i.add(e);
                        let n = e.options.initialPromotionConfig;
                        e.promote({
                            transition: n ? n.transition : void 0,
                            preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let n = {};
                        for (let e = 0; e < t0.length; e++) {
                            let r = "rotate" + t0[e];
                            i[r] && (n[r] = i[r], t.setStaticValue(r, 0))
                        }
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, i;
                        let n = {};
                        if (!this.instance || this.isSVG) return n;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        n.visibility = "";
                        let r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = resolveMotionValue(t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = resolveMotionValue(t.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let a = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, a), r && (n.transform = r(a, n.transform));
                        let {
                            x: o,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*o.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = a.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : n.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, V) {
                            if (void 0 === a[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = V[t], r = "none" === n.transform ? a[t] : e(a[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = r
                            } else n[t] = r
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? resolveMotionValue(t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(clearMeasurements), this.root.sharedNodes.clear()
                    }
                }
            }

            function updateLayout(t) {
                t.updateLayout()
            }

            function notifyLayoutUpdate(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === r ? eachAxis(t => {
                        let n = s ? i.measuredBox[t] : i.layoutBox[t],
                            r = calcLength(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : shouldAnimatePositionOnly(r, i.layoutBox, e) && eachAxis(n => {
                        let r = s ? i.measuredBox[n] : i.layoutBox[n],
                            a = calcLength(e[n]);
                        r.max = r.min + a, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + a)
                    });
                    let a = createDelta();
                    calcBoxDelta(a, e, i.layoutBox);
                    let o = createDelta();
                    s ? calcBoxDelta(o, t.applyTransform(n, !0), i.measuredBox) : calcBoxDelta(o, e, i.layoutBox);
                    let l = !isDeltaZero(a),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let a = createBox();
                                calcRelativePosition(a, i.layoutBox, r.layoutBox);
                                let o = createBox();
                                calcRelativePosition(o, e, s.layoutBox), boxEqualsRounded(a, o) || (u = !0), n.options.layoutRoot && (t.relativeTarget = o, t.relativeTargetOrigin = a, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: o,
                        layoutDelta: a,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function propagateDirtyNodes(t) {
                t5.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function cleanDirtyNodes(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function clearSnapshot(t) {
                t.clearSnapshot()
            }

            function clearMeasurements(t) {
                t.clearMeasurements()
            }

            function clearIsLayoutDirty(t) {
                t.isLayoutDirty = !1
            }

            function resetTransformStyle(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function finishAnimation(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function resolveTargetDelta(t) {
                t.resolveTargetDelta()
            }

            function calcProjection(t) {
                t.calcProjection()
            }

            function resetRotation(t) {
                t.resetRotation()
            }

            function removeLeadSnapshots(t) {
                t.removeLeadSnapshot()
            }

            function mixAxisDelta(t, e, i) {
                t.translate = mix(e.translate, 0, i), t.scale = mix(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function mixAxis(t, e, i, n) {
                t.min = mix(e.min, i.min, n), t.max = mix(e.max, i.max, n)
            }

            function hasOpacityCrossfade(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let t2 = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                userAgentContains = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                t3 = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : Q.Z;

            function roundAxis(t) {
                t.min = t3(t.min), t.max = t3(t.max)
            }

            function shouldAnimatePositionOnly(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !isNear(aspectRatio(e), aspectRatio(i), .2)
            }
            let t6 = createProjectionNode({
                    attachResizeListener: (t, e) => addDomEvent(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                t4 = {
                    current: void 0
                },
                t9 = createProjectionNode({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!t4.current) {
                            let t = new t6({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), t4.current = t
                        }
                        return t4.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                }),
                t7 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function getVariableValue(t, e, i = 1) {
                (0, tn.k)(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [n, r] = function(t) {
                    let e = t7.exec(t);
                    if (!e) return [, ];
                    let [, i, n] = e;
                    return [i, n]
                }(t);
                if (!n) return;
                let s = window.getComputedStyle(e).getPropertyValue(n);
                if (s) {
                    let t = s.trim();
                    return isNumericalString(t) ? parseFloat(t) : t
                }
                return C(r) ? getVariableValue(r, e, i + 1) : r
            }
            let t8 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                isPositionalKey = t => t8.has(t),
                hasPositionalKey = t => Object.keys(t).some(isPositionalKey),
                isNumOrPxType = t => t === M || t === j,
                getPosFromMatrix = (t, e) => parseFloat(t.split(", ")[e]),
                getTranslateFromMatrix = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let r = n.match(/^matrix3d\((.+)\)$/);
                    if (r) return getPosFromMatrix(r[1], e);
                    {
                        let e = n.match(/^matrix\((.+)\)$/);
                        return e ? getPosFromMatrix(e[1], t) : 0
                    }
                },
                et = new Set(["x", "y", "z"]),
                ee = T.filter(t => !et.has(t)),
                ei = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: getTranslateFromMatrix(4, 13),
                    y: getTranslateFromMatrix(5, 14)
                };
            ei.translateX = ei.x, ei.translateY = ei.y;
            let convertChangedValueTypes = (t, e, i) => {
                    let n = e.measureViewportBox(),
                        r = e.current,
                        s = getComputedStyle(r),
                        {
                            display: a
                        } = s,
                        o = {};
                    "none" === a && e.setStaticValue("display", t.display || "block"), i.forEach(t => {
                        o[t] = ei[t](n, s)
                    }), e.render();
                    let l = e.measureViewportBox();
                    return i.forEach(i => {
                        let n = e.getValue(i);
                        n && n.jump(o[i]), t[i] = ei[i](l, s)
                    }), t
                },
                checkAndConvertChangedValueTypes = (t, e, i = {}, n = {}) => {
                    e = {
                        ...e
                    }, n = {
                        ...n
                    };
                    let r = Object.keys(e).filter(isPositionalKey),
                        s = [],
                        a = !1,
                        o = [];
                    if (r.forEach(r => {
                            let l;
                            let u = t.getValue(r);
                            if (!t.hasValue(r)) return;
                            let h = i[r],
                                c = findDimensionValueType(h),
                                d = e[r];
                            if (isKeyframesTarget(d)) {
                                let t = d.length,
                                    e = null === d[0] ? 1 : 0;
                                c = findDimensionValueType(h = d[e]);
                                for (let i = e; i < t && null !== d[i]; i++) l ? (0, tn.k)(findDimensionValueType(d[i]) === l, "All keyframes must be of the same type") : (l = findDimensionValueType(d[i]), (0, tn.k)(l === c || isNumOrPxType(c) && isNumOrPxType(l), "Keyframes must be of the same dimension as the current value"))
                            } else l = findDimensionValueType(d);
                            if (c !== l) {
                                if (isNumOrPxType(c) && isNumOrPxType(l)) {
                                    let t = u.get();
                                    "string" == typeof t && u.set(parseFloat(t)), "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === j && (e[r] = d.map(parseFloat))
                                } else(null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[r] = c.transform(d) : (a || (s = function(t) {
                                    let e = [];
                                    return ee.forEach(i => {
                                        let n = t.getValue(i);
                                        void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), a = !0), o.push(r), n[r] = void 0 !== n[r] ? n[r] : e[r], u.jump(d))
                            }
                        }), !o.length) return {
                        target: e,
                        transitionEnd: n
                    };
                    {
                        let i = o.indexOf("height") >= 0 ? window.pageYOffset : null,
                            r = convertChangedValueTypes(e, t, o);
                        return s.length && s.forEach(([e, i]) => {
                            t.getValue(e).set(i)
                        }), t.render(), g.j && null !== i && window.scrollTo({
                            top: i
                        }), {
                            target: r,
                            transitionEnd: n
                        }
                    }
                },
                parseDomVariant = (t, e, i, n) => {
                    var r, s;
                    let a = function(t, {
                        ...e
                    }, i) {
                        let n = t.current;
                        if (!(n instanceof Element)) return {
                            target: e,
                            transitionEnd: i
                        };
                        for (let r in i && (i = {
                                ...i
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!C(e)) return;
                                let i = getVariableValue(e, n);
                                i && t.set(i)
                            }), e) {
                            let t = e[r];
                            if (!C(t)) continue;
                            let s = getVariableValue(t, n);
                            s && (e[r] = s, i || (i = {}), void 0 === i[r] && (i[r] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: i
                        }
                    }(t, e, n);
                    return e = a.target, n = a.transitionEnd, r = e, s = n, hasPositionalKey(r) ? checkAndConvertChangedValueTypes(t, r, i, s) : {
                        target: r,
                        transitionEnd: s
                    }
                },
                en = {
                    current: null
                },
                er = {
                    current: !1
                },
                es = new WeakMap,
                ea = Object.keys(f),
                eo = ea.length,
                el = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                eu = m.length;
            let VisualElement = class VisualElement {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    visualState: r
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => _.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: a,
                        renderState: o
                    } = r;
                    this.latestValues = a, this.baseTarget = {
                        ...a
                    }, this.initialValues = e.initial ? {
                        ...a
                    } : {}, this.renderState = o, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.isControllingVariants = isControllingVariants(e), this.isVariantNode = isVariantNode(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (let t in u) {
                        let e = u[t];
                        void 0 !== a[t] && isMotionValue(e) && (e.set(a[t], !1), isWillChangeMotionValue(l) && l.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, es.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), er.current || function() {
                        if (er.current = !0, g.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    setReducedMotionPreferences = () => en.current = t.matches;
                                t.addListener(setReducedMotionPreferences), setReducedMotionPreferences()
                            } else en.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || en.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in es.delete(this.current), this.projection && this.projection.unmount(), (0, _.Pn)(this.notifyUpdate), (0, _.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i = A.has(t),
                        n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && _.Wi.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        r = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        n(), r()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, i, n, r) {
                    let s, a;
                    for (let t = 0; t < eo; t++) {
                        let i = ea[t],
                            {
                                isEnabled: n,
                                Feature: r,
                                ProjectionNode: o,
                                MeasureLayout: l
                            } = f[i];
                        o && (s = o), n(e) && (!this.features[i] && r && (this.features[i] = new r(this)), l && (a = l))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: t,
                            layout: i,
                            drag: n,
                            dragConstraints: a,
                            layoutScroll: o,
                            layoutRoot: l
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: i,
                            alwaysMeasureLayout: !!n || a && isRefObject(a),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof i ? i : "both",
                            initialPromotionConfig: r,
                            layoutScroll: o,
                            layoutRoot: l
                        })
                    }
                    return a
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < el.length; e++) {
                        let i = el[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        let {
                            willChange: n
                        } = e;
                        for (let r in e) {
                            let s = e[r],
                                a = i[r];
                            if (isMotionValue(s)) t.addValue(r, s), isWillChangeMotionValue(n) && n.add(r);
                            else if (isMotionValue(a)) t.addValue(r, motionValue(s, {
                                owner: t
                            })), isWillChangeMotionValue(n) && n.remove(r);
                            else if (a !== s) {
                                if (t.hasValue(r)) {
                                    let e = t.getValue(r);
                                    e.hasAnimated || e.set(s)
                                } else {
                                    let e = t.getStaticValue(r);
                                    t.addValue(r, motionValue(void 0 !== e ? e : s, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < eu; t++) {
                        let i = m[t],
                            n = this.props[i];
                        (isVariantLabel(n) || !1 === n) && (e[i] = n)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = motionValue(e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: i
                    } = this.props, n = "string" == typeof i || "object" == typeof i ? null === (e = resolveVariantFromProps(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (i && void 0 !== n) return n;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || isMotionValue(r) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new SubscriptionManager), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            };
            let DOMVisualElement = class DOMVisualElement extends VisualElement {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...i
                }, {
                    transformValues: n
                }, r) {
                    let s = function(t, e, i) {
                        let n = {};
                        for (let r in t) {
                            let t = function(t, e) {
                                if (!e) return;
                                let i = e[t] || e.default || e;
                                return i.from
                            }(r, e);
                            if (void 0 !== t) n[r] = t;
                            else {
                                let t = i.getValue(r);
                                t && (n[r] = t.get())
                            }
                        }
                        return n
                    }(i, t || {}, this);
                    if (n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r) {
                        ! function(t, e, i) {
                            var n, r;
                            let s = Object.keys(e).filter(e => !t.hasValue(e)),
                                a = s.length;
                            if (a)
                                for (let o = 0; o < a; o++) {
                                    let a = s[o],
                                        l = e[a],
                                        u = null;
                                    Array.isArray(l) && (u = l[0]), null === u && (u = null !== (r = null !== (n = i[a]) && void 0 !== n ? n : t.readValue(a)) && void 0 !== r ? r : e[a]), null != u && ("string" == typeof u && (isNumericalString(u) || isZeroValueString(u)) ? u = parseFloat(u) : !findValueType(u) && tA.test(l) && (u = animatable_none_getAnimatableNone(a, l)), t.addValue(a, motionValue(u, {
                                        owner: t
                                    })), void 0 === i[a] && (i[a] = u), null !== u && t.setBaseTarget(a, u))
                                }
                        }(this, i, s);
                        let t = parseDomVariant(this, i, s, e);
                        e = t.transitionEnd, i = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...i
                    }
                }
            };
            let HTMLVisualElement = class HTMLVisualElement extends DOMVisualElement {
                readValueFromInstance(t, e) {
                    if (A.has(e)) {
                        let t = getDefaultValueType(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            n = (D(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return measureViewportBox(t, e)
                }
                build(t, e, i, n) {
                    buildHTMLStyles(t, e, i, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return scrapeMotionValuesFromProps(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    isMotionValue(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, i, n) {
                    renderHTML(t, e, i, n)
                }
            };
            let SVGVisualElement = class SVGVisualElement extends DOMVisualElement {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (A.has(e)) {
                        let t = getDefaultValueType(e);
                        return t && t.default || 0
                    }
                    return e = $.has(e) ? e : camelToDash(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return createBox()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return scrape_motion_values_scrapeMotionValuesFromProps(t, e)
                }
                build(t, e, i, n) {
                    buildSVGAttrs(t, e, i, this.isSVGTag, n.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    renderSVG(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = isSVGTag(t.tagName), super.mount(t)
                }
            };
            let create_visual_element_createDomVisualElement = (t, e) => isSVGComponent(t) ? new SVGVisualElement(e, {
                    enableHardwareAcceleration: !1
                }) : new HTMLVisualElement(e, {
                    enableHardwareAcceleration: !0
                }),
                eh = {
                    animation: {
                        Feature: class extends Feature {
                            constructor(t) {
                                super(t), t.animationState || (t.animationState = function(t) {
                                    let animate = e => Promise.all(e.map(({
                                            animation: e,
                                            options: i
                                        }) => (function(t, e, i = {}) {
                                            let n;
                                            if (t.notify("AnimationStart", e), Array.isArray(e)) {
                                                let r = e.map(e => animateVariant(t, e, i));
                                                n = Promise.all(r)
                                            } else if ("string" == typeof e) n = animateVariant(t, e, i);
                                            else {
                                                let r = "function" == typeof e ? resolveVariant(t, e, i.custom) : e;
                                                n = Promise.all(animateTarget(t, r, i))
                                            }
                                            return n.then(() => t.notify("AnimationComplete", e))
                                        })(t, e, i))),
                                        e = {
                                            animate: createTypeState(!0),
                                            whileInView: createTypeState(),
                                            whileHover: createTypeState(),
                                            whileTap: createTypeState(),
                                            whileDrag: createTypeState(),
                                            whileFocus: createTypeState(),
                                            exit: createTypeState()
                                        },
                                        i = !0,
                                        buildResolvedTypeValues = (e, i) => {
                                            let n = resolveVariant(t, i);
                                            if (n) {
                                                let {
                                                    transition: t,
                                                    transitionEnd: i,
                                                    ...r
                                                } = n;
                                                e = {
                                                    ...e,
                                                    ...r,
                                                    ...i
                                                }
                                            }
                                            return e
                                        };

                                    function animateChanges(n, r) {
                                        let s = t.getProps(),
                                            a = t.getVariantContext(!0) || {},
                                            o = [],
                                            l = new Set,
                                            u = {},
                                            h = 1 / 0;
                                        for (let d = 0; d < tU; d++) {
                                            var c;
                                            let m = tN[d],
                                                p = e[m],
                                                f = void 0 !== s[m] ? s[m] : a[m],
                                                g = isVariantLabel(f),
                                                y = m === r ? p.isActive : null;
                                            !1 === y && (h = d);
                                            let v = f === a[m] && f !== s[m] && g;
                                            if (v && i && t.manuallyAnimateOnMount && (v = !1), p.protectedKeys = {
                                                    ...u
                                                }, !p.isActive && null === y || !f && !p.prevProp || isAnimationControls(f) || "boolean" == typeof f) continue;
                                            let x = (c = p.prevProp, "string" == typeof f ? f !== c : !!Array.isArray(f) && !shallowCompare(f, c)),
                                                P = x || m === r && p.isActive && !v && g || d > h && g,
                                                V = Array.isArray(f) ? f : [f],
                                                T = V.reduce(buildResolvedTypeValues, {});
                                            !1 === y && (T = {});
                                            let {
                                                prevResolvedValues: A = {}
                                            } = p, b = {
                                                ...A,
                                                ...T
                                            }, markToAnimate = t => {
                                                P = !0, l.delete(t), p.needsAnimating[t] = !0
                                            };
                                            for (let t in b) {
                                                let e = T[t],
                                                    i = A[t];
                                                u.hasOwnProperty(t) || (e !== i ? isKeyframesTarget(e) && isKeyframesTarget(i) ? !shallowCompare(e, i) || x ? markToAnimate(t) : p.protectedKeys[t] = !0 : void 0 !== e ? markToAnimate(t) : l.add(t) : void 0 !== e && l.has(t) ? markToAnimate(t) : p.protectedKeys[t] = !0)
                                            }
                                            p.prevProp = f, p.prevResolvedValues = T, p.isActive && (u = {
                                                ...u,
                                                ...T
                                            }), i && t.blockInitialAnimation && (P = !1), P && !v && o.push(...V.map(t => ({
                                                animation: t,
                                                options: {
                                                    type: m,
                                                    ...n
                                                }
                                            })))
                                        }
                                        if (l.size) {
                                            let e = {};
                                            l.forEach(i => {
                                                let n = t.getBaseTarget(i);
                                                void 0 !== n && (e[i] = n)
                                            }), o.push({
                                                animation: e
                                            })
                                        }
                                        let d = !!o.length;
                                        return i && !1 === s.initial && !t.manuallyAnimateOnMount && (d = !1), i = !1, d ? animate(o) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges,
                                        setActive: function(i, n, r) {
                                            var s;
                                            if (e[i].isActive === n) return Promise.resolve();
                                            null === (s = t.variantChildren) || void 0 === s || s.forEach(t => {
                                                var e;
                                                return null === (e = t.animationState) || void 0 === e ? void 0 : e.setActive(i, n)
                                            }), e[i].isActive = n;
                                            let a = animateChanges(r, i);
                                            for (let t in e) e[t].protectedKeys = {};
                                            return a
                                        },
                                        setAnimateFunction: function(e) {
                                            animate = e(t)
                                        },
                                        getState: () => e
                                    }
                                }(t))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: t
                                } = this.node.getProps();
                                this.unmount(), isAnimationControls(t) && (this.unmount = t.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: t
                                } = this.node.getProps(), {
                                    animate: e
                                } = this.node.prevProps || {};
                                t !== e && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.id = tW++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let {
                                    isPresent: t,
                                    onExitComplete: e,
                                    custom: i
                                } = this.node.presenceContext, {
                                    isPresent: n
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || t === n) return;
                                let r = this.node.animationState.setActive("exit", !t, {
                                    custom: null != i ? i : this.node.getProps().custom
                                });
                                e && !t && r.then(() => e(this.id))
                            }
                            mount() {
                                let {
                                    register: t
                                } = this.node.presenceContext || {};
                                t && (this.unmount = t(this.id))
                            }
                            unmount() {}
                        }
                    },
                    inView: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: t = {}
                                } = this.node.getProps(), {
                                    root: e,
                                    margin: i,
                                    amount: n = "some",
                                    once: r
                                } = t, s = {
                                    root: e ? e.current : void 0,
                                    rootMargin: i,
                                    threshold: "number" == typeof n ? n : te[n]
                                };
                                return function(t, e, i) {
                                    let n = function({
                                        root: t,
                                        ...e
                                    }) {
                                        let i = t || document;
                                        tt.has(i) || tt.set(i, {});
                                        let n = tt.get(i),
                                            r = JSON.stringify(e);
                                        return n[r] || (n[r] = new IntersectionObserver(fireAllObserverCallbacks, {
                                            root: t,
                                            ...e
                                        })), n[r]
                                    }(e);
                                    return J.set(t, i), n.observe(t), () => {
                                        J.delete(t), n.unobserve(t)
                                    }
                                }(this.node.current, s, t => {
                                    let {
                                        isIntersecting: e
                                    } = t;
                                    if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                                    e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                    let {
                                        onViewportEnter: i,
                                        onViewportLeave: n
                                    } = this.node.getProps(), s = e ? i : n;
                                    s && s(t)
                                })
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let {
                                    props: t,
                                    prevProps: e
                                } = this.node, i = ["amount", "margin", "root"].some(function({
                                    viewport: t = {}
                                }, {
                                    viewport: e = {}
                                } = {}) {
                                    return i => t[i] !== e[i]
                                }(t, e));
                                i && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.removeStartListeners = Q.Z, this.removeEndListeners = Q.Z, this.removeAccessibleListeners = Q.Z, this.startPointerPress = (t, e) => {
                                    if (this.removeEndListeners(), this.isPressing) return;
                                    let i = this.node.getProps(),
                                        n = addPointerEvent(window, "pointerup", (t, e) => {
                                            if (!this.checkPressEnd()) return;
                                            let {
                                                onTap: i,
                                                onTapCancel: n
                                            } = this.node.getProps();
                                            _.Wi.update(() => {
                                                isNodeOrChild(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                            })
                                        }, {
                                            passive: !(i.onTap || i.onPointerUp)
                                        }),
                                        r = addPointerEvent(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                            passive: !(i.onTapCancel || i.onPointerCancel)
                                        });
                                    this.removeEndListeners = pipe(n, r), this.startPress(t, e)
                                }, this.startAccessiblePress = () => {
                                    let t = addDomEvent(this.node.current, "keydown", t => {
                                            "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = addDomEvent(this.node.current, "keyup", t => {
                                                "Enter" === t.key && this.checkPressEnd() && fireSyntheticPointerEvent("up", (t, e) => {
                                                    let {
                                                        onTap: i
                                                    } = this.node.getProps();
                                                    i && _.Wi.update(() => i(t, e))
                                                })
                                            }), fireSyntheticPointerEvent("down", (t, e) => {
                                                this.startPress(t, e)
                                            }))
                                        }),
                                        e = addDomEvent(this.node.current, "blur", () => {
                                            this.isPressing && fireSyntheticPointerEvent("cancel", (t, e) => this.cancelPress(t, e))
                                        });
                                    this.removeAccessibleListeners = pipe(t, e)
                                }
                            }
                            startPress(t, e) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: i,
                                    whileTap: n
                                } = this.node.getProps();
                                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && _.Wi.update(() => i(t, e))
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), this.isPressing = !1;
                                let t = this.node.getProps();
                                return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !isDragActive()
                            }
                            cancelPress(t, e) {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTapCancel: i
                                } = this.node.getProps();
                                i && _.Wi.update(() => i(t, e))
                            }
                            mount() {
                                let t = this.node.getProps(),
                                    e = addPointerEvent(this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(t.onTapStart || t.onPointerStart)
                                    }),
                                    i = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = pipe(e, i)
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.isActive = !1
                            }
                            onFocus() {
                                let t = !1;
                                try {
                                    t = this.node.current.matches(":focus-visible")
                                } catch (e) {
                                    t = !0
                                }
                                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                            }
                            mount() {
                                this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends Feature {
                            mount() {
                                this.unmount = pipe(addHoverEvent(this.node, !0), addHoverEvent(this.node, !1))
                            }
                            unmount() {}
                        }
                    },
                    pan: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = Q.Z
                            }
                            onPointerDown(t) {
                                this.session = new PanSession(t, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: t,
                                    onPanStart: e,
                                    onPan: i,
                                    onPanEnd: n
                                } = this.node.getProps();
                                return {
                                    onSessionStart: asyncHandler(t),
                                    onStart: asyncHandler(e),
                                    onMove: i,
                                    onEnd: (t, e) => {
                                        delete this.session, n && _.Wi.update(() => n(t, e))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", t => this.onPointerDown(t))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends Feature {
                            constructor(t) {
                                super(t), this.removeGroupControls = Q.Z, this.removeListeners = Q.Z, this.controls = new VisualElementDragControls(t)
                            }
                            mount() {
                                let {
                                    dragControls: t
                                } = this.node.getProps();
                                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Q.Z
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: t9,
                        MeasureLayout: MeasureLayout
                    },
                    layout: {
                        ProjectionNode: t9,
                        MeasureLayout: MeasureLayout
                    }
                },
                ec = function(t) {
                    function custom(e, i = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: i,
                            useVisualState: n,
                            Component: r
                        }) {
                            t && function(t) {
                                for (let e in t) f[e] = {
                                    ...f[e],
                                    ...t[e]
                                }
                            }(t);
                            let s = (0, a.forwardRef)(function(s, d) {
                                var m;
                                let p;
                                let f = {
                                        ...(0, a.useContext)(o),
                                        ...s,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, a.useContext)(y.p).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(s)
                                    },
                                    {
                                        isStatic: x
                                    } = f,
                                    P = function(t) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = function(t, e) {
                                            if (isControllingVariants(t)) {
                                                let {
                                                    initial: e,
                                                    animate: i
                                                } = t;
                                                return {
                                                    initial: !1 === e || isVariantLabel(e) ? e : void 0,
                                                    animate: isVariantLabel(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, a.useContext)(l));
                                        return (0, a.useMemo)(() => ({
                                            initial: e,
                                            animate: i
                                        }), [variantLabelsAsDependency(e), variantLabelsAsDependency(i)])
                                    }(s),
                                    V = n(s, x);
                                if (!x && g.j) {
                                    P.visualElement = function(t, e, i, n) {
                                        let {
                                            visualElement: r
                                        } = (0, a.useContext)(l), s = (0, a.useContext)(c), d = (0, a.useContext)(u.O), m = (0, a.useContext)(o).reducedMotion, p = (0, a.useRef)();
                                        n = n || s.renderer, !p.current && n && (p.current = n(t, {
                                            visualState: e,
                                            parent: r,
                                            props: i,
                                            presenceContext: d,
                                            blockInitialAnimation: !!d && !1 === d.initial,
                                            reducedMotionConfig: m
                                        }));
                                        let f = p.current;
                                        (0, a.useInsertionEffect)(() => {
                                            f && f.update(i, d)
                                        });
                                        let g = (0, a.useRef)(!!window.HandoffAppearAnimations);
                                        return (0, h.L)(() => {
                                            f && (f.render(), g.current && f.animationState && f.animationState.animateChanges())
                                        }), (0, a.useEffect)(() => {
                                            f && (f.updateFeatures(), !g.current && f.animationState && f.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, g.current = !1)
                                        }), f
                                    }(r, V, f, e);
                                    let i = (0, a.useContext)(v),
                                        n = (0, a.useContext)(c).strict;
                                    P.visualElement && (p = P.visualElement.loadFeatures(f, n, t, i))
                                }
                                return a.createElement(l.Provider, {
                                    value: P
                                }, p && P.visualElement ? a.createElement(p, {
                                    visualElement: P.visualElement,
                                    ...f
                                }) : null, i(r, s, (m = P.visualElement, (0, a.useCallback)(t => {
                                    t && V.mount && V.mount(t), m && (t ? m.mount(t) : m.unmount()), d && ("function" == typeof d ? d(t) : isRefObject(d) && (d.current = t))
                                }, [m])), V, x, P.visualElement))
                            });
                            return s[x] = r, s
                        }(t(e, i))
                    }
                    if ("undefined" == typeof Proxy) return custom;
                    let e = new Map;
                    return new Proxy(custom, {
                        get: (t, i) => (e.has(i) || e.set(i, custom(i)), e.get(i))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, i, n) {
                    let r = isSVGComponent(t) ? q : Y;
                    return {
                        ...r,
                        preloadedFeatures: i,
                        useRender: function(t = !1) {
                            return (e, i, n, {
                                latestValues: r
                            }, s) => {
                                let o = isSVGComponent(e) ? useSVGProps : useHTMLProps,
                                    l = o(i, r, s, e),
                                    u = function(t, e, i) {
                                        let n = {};
                                        for (let r in t)("values" !== r || "object" != typeof t.values) && (shouldForward(r) || !0 === i && isValidMotionProp(r) || !e && !isValidMotionProp(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                        return n
                                    }(i, "string" == typeof e, t),
                                    h = {
                                        ...u,
                                        ...l,
                                        ref: n
                                    },
                                    {
                                        children: c
                                    } = i,
                                    d = (0, a.useMemo)(() => isMotionValue(c) ? c.get() : c, [c]);
                                return (0, a.createElement)(e, {
                                    ...h,
                                    children: d
                                })
                            }
                        }(e),
                        createVisualElement: n,
                        Component: t
                    }
                })(t, e, eh, create_visual_element_createDomVisualElement))
        },
        5487: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return r
                },
                k: function() {
                    return s
                }
            });
            var n = i(1662);
            let r = n.Z,
                s = n.Z
        },
        1741: function(t, e, i) {
            i.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof document
        },
        1662: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return noop
                }
            });
            let noop = t => t
        },
        6681: function(t, e, i) {
            i.d(e, {
                h: function() {
                    return useConstant
                }
            });
            var n = i(7294);

            function useConstant(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        8868: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return s
                }
            });
            var n = i(7294),
                r = i(1741);
            let s = r.j ? n.useLayoutEffect : n.useEffect
        }
    }
]);