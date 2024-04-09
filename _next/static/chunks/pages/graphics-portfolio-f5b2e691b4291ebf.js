(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [531], {
      3449: function(e, t, s) {
          (window.__NEXT_P = window.__NEXT_P || []).push(["/our-portfolio", function() {
              return s(539)
          }])
      },
      4791: function(e, t, s) {
          "use strict";
          s.d(t, {
              Z: function() {
                  return Modal
              }
          });
          var i = s(5893),
              r = s(7294),
              a = s(5675),
              n = s.n(a);
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
              let [e, t] = (0, r.useState)(!1), [s, a] = (0, r.useState)(!1), [o, l] = (0, r.useState)(null);
              (0, r.useEffect)(() => {
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
              return (0, r.useEffect)(() => {
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
                              a(!0)
                          },
                          onMouseLeave: () => {
                              a(!1)
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
      5793: function(e, t, s) {
          "use strict";
          s.d(t, {
              Z: function() {
                  return Index
              }
          });
          var i = s(5893),
              r = s(1059),
              a = s.n(r),
              n = s(5675),
              o = s.n(n),
              l = s(5063),
              c = s.n(l),
              d = s(7294),
              h = s(990),
              m = s(6546),
              p = s.n(m);

          function Index(e) {
              let {
                  projects: t,
                  reversed: s
              } = e;
              (0, d.useEffect)(() => {
                  let e = h.p8.timeline({
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
              let r = (0, d.useRef)(null),
                  n = (0, d.useRef)(null),
                  l = null,
                  m = s ? 100 : 0,
                  p = s ? 100 : 0,
                  manageMouseMove = e => {
                      let {
                          clientX: t
                      } = e;
                      m = t / window.innerWidth * 100, l || (l = window.requestAnimationFrame(animate))
                  },
                  animate = () => {
                      let e = m - p;
                      p += .15 * e;
                      let t = 66.33 - .33 * p,
                          s = 33.33 + .33 * p;
                      r.current.style.width = "".concat(t, "%"), n.current.style.width = "".concat(s, "%"), Math.round(m) == Math.round(p) ? (window.cancelAnimationFrame(l), l = null) : window.requestAnimationFrame(animate)
                  };
              return (0, i.jsxs)("div", {
                  onMouseMove: e => {
                      manageMouseMove(e)
                  },
                  className: a().double,
                  id: "doubleContainer",
                  children: [(0, i.jsx)("div", {
                      ref: r,
                      className: a().imageContainer,
                      id: "doubleImage",
                      children: (0, i.jsxs)(c(), {
                          href: "/".concat(t[0].link),
                          children: [(0, i.jsx)("div", {
                              className: a().stretchyWrapper,
                              children: (0, i.jsx)(o(), {
                                  "data-cursor-size": "90px",
                                  "data-cursor-text": "View Details",
                                  "data-cursor-color": "#5d5ad6",
                                  src: "/assets/homeProject/".concat(t[0].src),
                                  fill: !0,
                                  sizes: "(max-width: 1200px) 100vw, 50vw",
                                  priority: !1,
                                  alt: "project image"
                              })
                          }), (0, i.jsxs)("div", {
                              className: a().body,
                              id: "double-image-anim",
                              children: [(0, i.jsx)("p", {
                                  className: a().pname,
                                  children: t[0].name
                              }), (0, i.jsx)("p", {
                                  className: a().description,
                                  children: t[0].description
                              }), (0, i.jsx)("p", {
                                  children: t[0].year
                              })]
                          })]
                      })
                  }), (0, i.jsx)("div", {
                      ref: n,
                      className: a().imageContainer,
                      id: "doubleImage",
                      children: (0, i.jsxs)(c(), {
                          href: "/".concat(t[1].link),
                          children: [(0, i.jsx)("div", {
                              className: a().stretchyWrapper,
                              children: (0, i.jsx)(o(), {
                                  "data-cursor-size": "90px",
                                  "data-cursor-text": "View Details",
                                  "data-cursor-color": "#5d5ad6",
                                  src: "/assets/homeProject/".concat(t[1].src),
                                  fill: !0,
                                  sizes: "(max-width: 1200px) 100vw, 50vw",
                                  priority: !1,
                                  alt: "project image",
                                  id: "double-image-anim"
                              })
                          }), (0, i.jsxs)("div", {
                              className: a().body,
                              id: "double-image-anim",
                              children: [(0, i.jsx)("p", {
                                  className: a().pname,
                                  children: t[1].name
                              }), (0, i.jsx)("p", {
                                  className: a().description,
                                  children: t[1].description
                              }), (0, i.jsx)("p", {
                                  children: t[1].year
                              })]
                          })]
                      })
                  })]
              })
          }
          h.p8.registerPlugin(p()), h.p8.config({
              nullTargetWarn: !1
          })
      },
      3798: function(e, t, s) {
          "use strict";
          s.d(t, {
              q: function() {
                  return i
              }
          });
          let i = [{
              name: "Valley",
              client: "",
              description: "Icon-Based , Text-Based, Logo Artwork",
              src: "",
              year: 2024,
              link: "",
              srcSLider: ""
          }, {
              name: "Mocare",
              client: "",
              description: "Brand Guide Design",
              src: "",
              year: 2024,
              link: "",
              srcSLider: ""
          }, {
              name: "CBD Oil",
              client: "",
              description: "Products Packaging Design, Branding",
              src: "3.webp",
              year: 2022,
              link: "",
              srcSLider: ""
          }, {
              name: "Logo Designing",
              client: "",
              description: "Multiple Kinds of Logos Artwork",
              src: "4.webp",
              year: "2020 to 2024",
              link: "",
              srcSLider: ""
          }, {
              name: "Cartoonist & Illustrated T-Shirts",
              client: "",
              description: "Apparel Designs, Clothing Brands",
              src: "5.webp",
              year: 2024,
              link: "",
              srcSLider: ""
          }, {
              name: "Reto & Vintage",
              client: "",
              description: "Apparel Designs, Clothing Brands",
              src: "6.webp",
              year: 2022,
              link: "",
              srcSLider: ""
          }, {
              name: "Gamming Mascot Logos",
              client: "DMTCA",
              description: "Caricature, Mascot Logo",
              src: "7-2.webp",
              year: 2023,
              link: "",
              srcSLider: ""
          }, {
              name: "Mascot Logo",
              client: "",
              description: "Illustrated, Abstract, Mascot Logos",
              src: "9.webp",
              year: 2022,
              link: "",
              srcSLider: ""
          }, {
              name: "Album Cover Art",
              client: "",
              description: "Music Album, Songs, Tapmix",
              src: "10.webp",
              year: "2020 to 2024",
              link: "",
              srcSLider: ""
          }, {
              name: "Book Cover Design",
              client: "",
              description: "Fictional, Non-Fictional, Horror",
              src: "8.webp",
              year: "2020 to 2024",
              link: "",
              srcSLider: "patra.webp"
          }]
      },
      3047: function(e, t, s) {
          "use strict";
          var i = s(5893),
              r = s(7294),
              a = s(990);
          t.Z = e => {
              let {
                  text: t
              } = e;
              return (0, r.useEffect)(() => {
                  let e = document.querySelectorAll(".mainLoaderBar"),
                      t = a.ZP.timeline(),
                      s = a.ZP.context(() => {
                          t.from(".loader-wrap-heading p", {
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
                  return () => s.revert()
              }, []), (0, i.jsxs)("div", {
                  className: "loader-wrap",
                  id: "loader",
                  children: [(0, i.jsxs)("div", {
                      className: "mainLoaderBg",
                      children: [(0, i.jsx)("span", {
                          className: "mainLoaderBar",
                          id: "loaderbars"
                      }), (0, i.jsx)("span", {
                          className: "mainLoaderBar",
                          id: "loaderbars"
                      }), (0, i.jsx)("span", {
                          className: "mainLoaderBar",
                          id: "loaderbars"
                      }), (0, i.jsx)("span", {
                          className: "mainLoaderBar",
                          id: "loaderbars"
                      }), (0, i.jsx)("span", {
                          className: "mainLoaderBar",
                          id: "loaderbars"
                      })]
                  }), (0, i.jsx)("div", {
                      className: "loader-wrap-heading",
                      children: (0, i.jsx)("span", {
                          children: (0, i.jsx)("p", {
                              children: t
                          })
                      })
                  })]
              })
          }
      },
      539: function(e, t, s) {
          "use strict";
          s.r(t), s.d(t, {
              default: function() {
                  return studio
              }
          });
          var i = s(5893),
              r = s(7294),
              a = s(6732);
          s(5538);
          var n = s(8868);

          function useIsMounted() {
              let e = (0, r.useRef)(!1);
              return (0, n.L)(() => (e.current = !0, () => {
                  e.current = !1
              }), []), e
          }
          var o = s(2074),
              l = s(240),
              c = s(6681);
          let PopChildMeasure = class PopChildMeasure extends r.Component {
              getSnapshotBeforeUpdate(e) {
                  let t = this.props.childRef.current;
                  if (t && e.isPresent && !this.props.isPresent) {
                      let e = this.props.sizeRef.current;
                      e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                  }
                  return null
              }
              componentDidUpdate() {}
              render() {
                  return this.props.children
              }
          };

          function PopChild({
              children: e,
              isPresent: t
          }) {
              let s = (0, r.useId)(),
                  i = (0, r.useRef)(null),
                  a = (0, r.useRef)({
                      width: 0,
                      height: 0,
                      top: 0,
                      left: 0
                  });
              return (0, r.useInsertionEffect)(() => {
                  let {
                      width: e,
                      height: r,
                      top: n,
                      left: o
                  } = a.current;
                  if (t || !i.current || !e || !r) return;
                  i.current.dataset.motionPopId = s;
                  let l = document.createElement("style");
                  return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
        [data-motion-pop-id="${s}"] {
          position: absolute !important;
          width: ${e}px !important;
          height: ${r}px !important;
          top: ${n}px !important;
          left: ${o}px !important;
        }
      `), () => {
                      document.head.removeChild(l)
                  }
              }, [t]), r.createElement(PopChildMeasure, {
                  isPresent: t,
                  childRef: i,
                  sizeRef: a
              }, r.cloneElement(e, {
                  ref: i
              }))
          }
          let PresenceChild = ({
              children: e,
              initial: t,
              isPresent: s,
              onExitComplete: i,
              custom: a,
              presenceAffectsLayout: n,
              mode: o
          }) => {
              let d = (0, c.h)(newChildrenMap),
                  h = (0, r.useId)(),
                  m = (0, r.useMemo)(() => ({
                      id: h,
                      initial: t,
                      isPresent: s,
                      custom: a,
                      onExitComplete: e => {
                          for (let t of (d.set(e, !0), d.values()))
                              if (!t) return;
                          i && i()
                      },
                      register: e => (d.set(e, !1), () => d.delete(e))
                  }), n ? void 0 : [s]);
              return (0, r.useMemo)(() => {
                  d.forEach((e, t) => d.set(t, !1))
              }, [s]), r.useEffect(() => {
                  s || d.size || !i || i()
              }, [s]), "popLayout" === o && (e = r.createElement(PopChild, {
                  isPresent: s
              }, e)), r.createElement(l.O.Provider, {
                  value: m
              }, e)
          };

          function newChildrenMap() {
              return new Map
          }
          var d = s(5364),
              h = s(5487);
          let getChildKey = e => e.key || "",
              AnimatePresence = ({
                  children: e,
                  custom: t,
                  initial: s = !0,
                  onExitComplete: i,
                  exitBeforeEnter: a,
                  presenceAffectsLayout: l = !0,
                  mode: c = "sync"
              }) => {
                  var m;
                  (0, h.k)(!a, "Replace exitBeforeEnter with mode='wait'");
                  let p = (0, r.useContext)(d.p).forceRender || function() {
                          let e = useIsMounted(),
                              [t, s] = (0, r.useState)(0),
                              i = (0, r.useCallback)(() => {
                                  e.current && s(t + 1)
                              }, [t]),
                              a = (0, r.useCallback)(() => o.Wi.postRender(i), [i]);
                          return [a, t]
                      }()[0],
                      u = useIsMounted(),
                      x = function(e) {
                          let t = [];
                          return r.Children.forEach(e, e => {
                              (0, r.isValidElement)(e) && t.push(e)
                          }), t
                      }(e),
                      j = x,
                      g = (0, r.useRef)(new Map).current,
                      f = (0, r.useRef)(j),
                      w = (0, r.useRef)(new Map).current,
                      v = (0, r.useRef)(!0);
                  if ((0, n.L)(() => {
                          v.current = !1,
                              function(e, t) {
                                  e.forEach(e => {
                                      let s = getChildKey(e);
                                      t.set(s, e)
                                  })
                              }(x, w), f.current = j
                      }), m = () => {
                          v.current = !0, w.clear(), g.clear()
                      }, (0, r.useEffect)(() => () => m(), []), v.current) return r.createElement(r.Fragment, null, j.map(e => r.createElement(PresenceChild, {
                      key: getChildKey(e),
                      isPresent: !0,
                      initial: !!s && void 0,
                      presenceAffectsLayout: l,
                      mode: c
                  }, e)));
                  j = [...j];
                  let y = f.current.map(getChildKey),
                      k = x.map(getChildKey),
                      b = y.length;
                  for (let e = 0; e < b; e++) {
                      let t = y[e]; - 1 !== k.indexOf(t) || g.has(t) || g.set(t, void 0)
                  }
                  return "wait" === c && g.size && (j = []), g.forEach((e, s) => {
                      if (-1 !== k.indexOf(s)) return;
                      let a = w.get(s);
                      if (!a) return;
                      let n = y.indexOf(s),
                          o = e;
                      o || (o = r.createElement(PresenceChild, {
                          key: getChildKey(a),
                          isPresent: !1,
                          onExitComplete: () => {
                              w.delete(s), g.delete(s);
                              let e = f.current.findIndex(e => e.key === s);
                              if (f.current.splice(e, 1), !g.size) {
                                  if (f.current = x, !1 === u.current) return;
                                  p(), i && i()
                              }
                          },
                          custom: t,
                          presenceAffectsLayout: l,
                          mode: c
                      }, a), g.set(s, o)), j.splice(n, 0, o)
                  }), j = j.map(e => {
                      let t = e.key;
                      return g.has(t) ? e : r.createElement(PresenceChild, {
                          key: getChildKey(e),
                          isPresent: !0,
                          presenceAffectsLayout: l,
                          mode: c
                      }, e)
                  }), r.createElement(r.Fragment, null, g.size ? j : j.map(e => (0, r.cloneElement)(e)))
              };
          var m = s(1132),
              p = s(2962);
          let u = {
                  animate: {
                      transition: {
                          delayChildren: .4,
                          staggerChildren: .1
                      }
                  }
              },
              x = {
                  initial: {
                      y: 400
                  },
                  animate: {
                      y: 0,
                      transition: {
                          ease: [.6, .01, -.05, .95],
                          duration: 1
                      }
                  }
              },
              AnimatedLetters = e => {
                  let {
                      title: t,
                      disabled: s
                  } = e;
                  return (0, i.jsx)(m.E.span, {
                      className: "row-title",
                      variants: s ? null : u,
                      initial: "initial",
                      animate: "animate",
                      children: [...t].map(e => (0, i.jsx)(m.E.span, {
                          className: "row-letter",
                          variants: s ? null : x,
                          children: e
                      }))
                  })
              },
              BannerRowTop = e => {
                  let {
                      title: t
                  } = e;
                  return (0, i.jsxs)("div", {
                      className: "banner-row",
                      id: "create",
                      children: [(0, i.jsx)("h1", {
                          className: "row-col",
                          children: (0, i.jsx)(AnimatedLetters, {
                              title: t
                          })
                      }), (0, i.jsx)(m.E.h2, {
                          initial: {
                              opacity: 0,
                              y: 80
                          },
                          animate: {
                              opacity: 1,
                              y: 0
                          },
                          transition: {
                              ease: "easeInOut",
                              duration: 1,
                              delay: .4
                          },
                          className: "row-col",
                          children: (0, i.jsxs)("span", {
                              className: "row-message",
                              children: ["We specialize in crafting ", (0, i.jsx)("strong", {
                                  children: "one-of-a-kind, unforgettable experiences"
                              }), " that captivate and engage your customers, leaving them craving for more."]
                          })
                      })]
                  })
              },
              BannerRowBottom = e => {
                  let {
                      title: t
                  } = e;
                  return (0, i.jsx)("div", {
                      className: "banner-row center",
                      children: (0, i.jsx)(AnimatedLetters, {
                          title: t
                      })
                  })
              },
              BannerRowCenter = e => {
                  let {
                      title: t,
                      playMarquee: s
                  } = e;
                  return (0, i.jsx)("div", {
                      className: "banner-row minus-small marquee stroke  ".concat(s && "animate"),
                      children: (0, i.jsxs)(m.E.div, {
                          initial: {
                              y: 310
                          },
                          animate: {
                              y: 0
                          },
                          transition: {
                              ease: [.6, .01, -.05, .9],
                              duration: 1
                          },
                          className: "marquee__inner",
                          children: [(0, i.jsx)(AnimatedLetters, {
                              title: t,
                              disabled: !0
                          }), (0, i.jsx)(AnimatedLetters, {
                              title: t
                          }), (0, i.jsx)(AnimatedLetters, {
                              title: t,
                              disabled: !0
                          }), (0, i.jsx)(AnimatedLetters, {
                              title: t,
                              disabled: !0
                          })]
                      })
                  })
              };
          var studio_Banner = () => {
                  let [e, t] = (0, r.useState)(!1);
                  return (0, r.useEffect)(() => {
                      setTimeout(() => {
                          t(!0)
                      }, 2e3)
                  }, []), (0, i.jsxs)(m.E.div, {
                      className: "banner",
                      variants: u,
                      children: [(0, i.jsx)(BannerRowTop, {
                          title: "We Create"
                      }), (0, i.jsx)(BannerRowCenter, {
                          title: "tenacious audacious marvelous",
                          playMarquee: e
                      }), (0, i.jsx)(BannerRowBottom, {
                          title: "Experiences"
                      })]
                  })
              },
              studio_Image = e => {
                  let {
                      src: t,
                      fallback: s,
                      type: r = "image/webp",
                      alt: a
                  } = e;
                  return (0, i.jsxs)("picture", {
                      children: [(0, i.jsx)("source", {
                          srcSet: t,
                          type: r
                      }), (0, i.jsx)("img", {
                          src: s,
                          alt: a
                      })]
                  })
              };
          let j = {
                  show: {
                      transition: {
                          staggerChildren: .5
                      }
                  }
              },
              g = {
                  hidden: {
                      opacity: 0,
                      y: 200
                  },
                  show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                          ease: "easeInOut",
                          duration: 1
                      }
                  },
                  exit: {
                      opacity: 0,
                      y: -200,
                      transition: {
                          ease: "easeInOut",
                          duration: 1
                      }
                  }
              },
              f = {
                  hidden: {
                      opacity: 0,
                      y: 200
                  },
                  show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                          ease: "easeInOut",
                          duration: 1
                      }
                  }
              },
              ImageBlock = e => {
                  let {
                      posX: t,
                      posY: s,
                      variants: r,
                      id: a
                  } = e;
                  return (0, i.jsx)(m.E.div, {
                      variants: r,
                      className: "image-block ".concat(a),
                      style: {
                          top: "".concat(s, "vh"),
                          left: "".concat(t, "vw ")
                      },
                      children: (0, i.jsx)(studio_Image, {
                          src: "/assets/images/".concat(a, ".webp"),
                          fallback: "/assets/images/".concat(a, ".jpg"),
                          alt: a
                      })
                  })
              };
          var studio_Loader = e => {
                  let {
                      setLoading: t
                  } = e;
                  return (0, i.jsx)(m.E.div, {
                      className: "loader",
                      children: (0, i.jsxs)(m.E.div, {
                          variants: j,
                          onAnimationComplete: () => t(!1),
                          initial: "hidden",
                          animate: "show",
                          exit: "exit",
                          className: "loader-inner",
                          children: [(0, i.jsx)(ImageBlock, {
                              variants: g,
                              id: "image-1"
                          }), (0, i.jsx)(m.E.div, {
                              variants: f,
                              className: "transition-image",
                              children: (0, i.jsx)(m.E.img, {
                                  layoutId: "main-image-1",
                                  src: "/assets/reels/poster.webp",
                                  alt: "work loading image"
                              })
                          }), (0, i.jsx)(ImageBlock, {
                              variants: g,
                              id: "image-3"
                          }), (0, i.jsx)(ImageBlock, {
                              variants: g,
                              id: "image-4"
                          }), (0, i.jsx)(ImageBlock, {
                              variants: g,
                              id: "image-5"
                          })]
                      })
                  })
              },
              w = s(990),
              v = s(6546),
              y = s.n(v);
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
                  let e = new w.ZP.timeline({
                      paused: !0
                  });
                  for (let t = 0; t < this.items.length; t++) {
                      let s = this.items[t],
                          i = new w.ZP.timeline({
                              repeat: this.options.repeats
                          }),
                          r = this.options.offset();
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
                      }, "-=" + this.options.fadeOutDuration), e.add(i, r)
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
                      yEnd: (e, t) => -t.offsetHeight,
                      yStart: "350",
                      yEnd: "-500",
                      ease: "none",
                      duration: () => w.ZP.utils.random(5, 10),
                      offset: () => w.ZP.utils.random(0, 20)
                  }, e), this.timeScale = this.options.timeScale, this.init()
              }
          };

          function partText() {
              return (0, r.useEffect)(() => {
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
                              className: "cb-particles-item size-emo -text -v1 -s4",
                              children: "\uD83D\uDD25"
                          }), (0, i.jsx)("span", {
                              className: "cb-particles-item size-emo -dot -text -v3 -s4 -c3 -p1"
                          }), (0, i.jsx)("span", {
                              className: "cb-particles-item size-emo -text -v2 -s4",
                              children: "✊"
                          }), (0, i.jsx)("span", {
                              className: "cb-particles-item size-emo -text -v5 -s4 -dot -c3 -p2"
                          }), (0, i.jsx)("span", {
                              className: "cb-particles-item size-emo -text -v4 -s4",
                              children: "\uD83D\uDE0E"
                          }), (0, i.jsx)("span", {
                              className: "cb-particles-item size-emo -text -v7 -s4 -dot -c3 -p3"
                          }), (0, i.jsx)("span", {
                              className: "cb-particles-item size-emo -text -v8 -s4",
                              children: "\uD83D\uDCBB"
                          }), (0, i.jsx)("span", {
                              className: "cb-particles-item size-emo -text -v9 -s4 -dot -c3 -p1"
                          }), (0, i.jsx)("span", {
                              className: "cb-particles-item size-emo -text -v6 -s4",
                              children: "\uD83C\uDF89"
                          }), (0, i.jsx)("span", {
                              className: "cb-particles-item size-emo -text -v10 -s4 -dot -c3 -p3"
                          })]
                      })
                  })
              })
          }

          function Aerosol() {
              return (0, r.useEffect)(() => {
                  document.body.addEventListener("mousemove", e => {
                      let t = e.clientX,
                          s = e.clientY;
                      w.ZP.set(".c-cursor", {
                          x: t,
                          y: s
                      }), w.ZP.to(".shape", {
                          x: t,
                          y: s,
                          stagger: -.1
                      })
                  })
              }, []), (0, r.useEffect)(() => {
                  let e = w.ZP.timeline({
                          scrollTrigger: {
                              trigger: ".aero-hover",
                              start: "top center"
                          }
                      }),
                      t = document.querySelectorAll(".aero-demo p");
                  e.fromTo(t, {
                      opacity: 0,
                      yPercent: 320,
                      skewY: 40
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
                          className: "text-container studio-aero aero-demo",
                          children: [(0, i.jsxs)("p", {
                              className: "aero-desk-1",
                              children: ["we make it simple, ", (0, i.jsx)("br", {}), "but significant"]
                          }), (0, i.jsxs)("p", {
                              className: "aero-mob-1",
                              children: ["we make it", (0, i.jsx)("br", {}), " simple but", (0, i.jsx)("br", {}), "significant"]
                          }), (0, i.jsx)(partText, {})]
                      }), (0, i.jsxs)("div", {
                          className: "aerosol-main",
                          children: [(0, i.jsx)("div", {
                              className: "c-cursor"
                          }), (0, i.jsxs)("div", {
                              className: "shapes",
                              children: [(0, i.jsx)("div", {
                                  className: "shape shape-1 shape-studio-1"
                              }), (0, i.jsx)("div", {
                                  className: "shape shape-2 shape-studio-2"
                              }), (0, i.jsx)("div", {
                                  className: "shape shape-3 shape-studio-3"
                              })]
                          })]
                      })]
                  })
              })
          }
          w.ZP.registerPlugin(y());
          var k = s(9108),
              b = s.n(k),
              _ = s(3798),
              N = s(5793),
              P = s(9521),
              M = s(5829);

          function WorkProject() {
              return (0, r.useEffect)(() => {
                  let e = document.querySelectorAll("#c-works");
                  e.forEach(function(e, t) {
                      let s = new M.Z(e.querySelector("#proj-para-anim")),
                          i = s.words;
                      P.gsap.from(i, {
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
              }, []), (0, r.useEffect)(() => {
                  let e = document.querySelectorAll("#line-anim"),
                      t = P.gsap.timeline({
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
                  className: b().projectSectionMain,
                  id: "c-works",
                  children: [(0, i.jsxs)("div", {
                      className: b().projectHeading,
                      children: [(0, i.jsxs)("div", {
                          className: "".concat(b().projectFirstBox, " ").concat(b().lineAnim),
                          children: [(0, i.jsx)("div", {
                              className: "".concat(b().headContainer),
                              children: (0, i.jsx)("p", {
                                  className: "".concat(b().select),
                                  id: "line-anim",
                                  children: "Our Work"
                              })
                          }), (0, i.jsx)("p", {
                              className: b().paraProject,
                              id: "proj-para-anim",
                              children: (0, i.jsx)("span", {
                                  children: "Our showcase of a spectrum of Innovative Collaborations, Redefined Digital Experiences, and Brand Transformations."
                              })
                          })]
                      }), (0, i.jsx)("div", {
                          className: "".concat(b().headContainer),
                          children: (0, i.jsx)("p", {
                              className: "color-primary",
                              id: "line-anim",
                              children: "Showcase"
                          })
                      })]
                  }), (0, i.jsxs)("div", {
                      className: b().gallery,
                      children: [(0, i.jsx)(N.Z, {
                          projects: [_.q[0], _.q[1]]
                      }), (0, i.jsx)(N.Z, {
                          projects: [_.q[2], _.q[3]],
                          reversed: !0
                      }), (0, i.jsx)(N.Z, {
                          projects: [_.q[4], _.q[5]]
                      }), (0, i.jsx)(N.Z, {
                          projects: [_.q[6], _.q[7]],
                          reversed: !0
                      }), (0, i.jsx)(N.Z, {
                          projects: [_.q[8], _.q[9]]
                      })]
                  })]
              })
          }
          P.gsap.registerPlugin(v.ScrollTrigger);
          var E = s(5675),
              C = s.n(E),
              S = s(5124);

          function SliderMarquee() {
              return (0, r.useEffect)(() => {
                  let e = document.querySelectorAll(".cb-marquee");
                  e.forEach(e => {
                      let t = e.querySelectorAll(".cb-marquee-carousel");
                      t.forEach(e => {
                          let t = e.querySelector(".cb-marquee-items"),
                              s = e.querySelectorAll(".cb-marquee-item");
                          e.classList.add("swiper-container"), t.classList.add("swiper-wrapper"), s.forEach(e => e.classList.add("swiper-slide")), new S.Z(e, {
                              slidesPerView: "auto",
                              loop: !0,
                              freeMode: !1,
                              freeModeMomentumBounce: !1,
                              freeModeMomentumVelocityRatio: !1
                          })
                      });
                      let s = new w.ZP.timeline;
                      s.set(t, {
                          willChange: "transform"
                      }), s.fromTo(t[0], {
                          y: -1e3
                      }, {
                          y: 0,
                          ease: "none"
                      }, 0), s.fromTo(t[1], {
                          y: 500
                      }, {
                          y: 0,
                          ease: "none"
                      }, 0), s.set(t, {
                          willChange: "auto"
                      }), y().create({
                          trigger: e,
                          animation: s,
                          start: "top bottom",
                          end: "bottom top",
                          scrub: 1
                      })
                  })
              }), (0, r.useEffect)(() => {
                  let e = w.ZP.context(() => {
                      let e = document.getElementById("container"),
                          t = document.getElementById("scroll-container"),
                          s = 2e3 - e.offsetWidth,
                          i = w.ZP.timeline({
                              scrollTrigger: {
                                  trigger: t,
                                  scrub: !0,
                                  start: "-1000 top",
                                  end: "+=2000",
                                  pin: !1,
                                  toggleActions: "restart pause reverse pause"
                              }
                          });
                      w.ZP.utils.toArray(".module").forEach((e, t) => {
                          i.fromTo(e, {
                              x: 0
                          }, {
                              x: "-=".concat(s),
                              autoAlpha: 1,
                              duration: .1
                          }, "-=0.1")
                      }), w.ZP.utils.toArray(".module-2").forEach((e, t) => {
                          i.fromTo(e, {
                              x: 0
                          }, {
                              x: "+=".concat(s),
                              autoAlpha: 1,
                              duration: .1
                          }, "-=0.1")
                      })
                  });
                  return () => e.revert()
              }), (0, r.useEffect)(() => {
                  w.ZP.utils.toArray(".parallax-slider").forEach(function(e) {
                      let t = e.querySelector("img");
                      w.ZP.to(t, {
                          x: () => t.offsetHeight - e.offsetHeight,
                          ease: "none",
                          startAt: {
                              x: "-10%"
                          },
                          scrollTrigger: {
                              trigger: e,
                              scrub: !0,
                              pin: !1,
                              markers: !1,
                              invalidateOnRefresh: !0
                          },
                          x: "10%"
                      })
                  })
              }), (0, i.jsx)("div", {
                  children: (0, i.jsxs)("div", {
                      id: "scroll-container",
                      children: [(0, i.jsxs)("div", {
                          id: "container",
                          className: "cf-10",
                          children: [(0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-02.webp",
                                  alt: "image 1",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-03.webp",
                                  alt: "image 2",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-03.webp",
                                  alt: "image 3",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-03.webp",
                                  alt: "image 4",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-02.webp",
                                  alt: "image 5",
                                  width: 1e3,
                                  height: 1e3
                              })
                          })]
                      }), (0, i.jsxs)("div", {
                          id: "container",
                          className: "cr-10",
                          children: [(0, i.jsx)("div", {
                              className: "module-2 parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-04.webp",
                                  alt: "image 1",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module-2 parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-05.webp",
                                  alt: "image 2",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module-2 parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-06.webp",
                                  alt: "image 3",
                                  width: 1e3,
                                  height: 1e3
                              })
                          })]
                      }), (0, i.jsxs)("div", {
                          id: "container",
                          className: "minus-10",
                          children: [(0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-01.webp",
                                  alt: "image 1",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-07.webp",
                                  alt: "image 2",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-08.webp",
                                  alt: "image 3",
                                  width: 800,
                                  height: 550
                              })
                          }), (0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-09.webp",
                                  alt: "image 4",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-07.webp",
                                  alt: "image 5",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-08.webp",
                                  alt: "image 6",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-09.webp",
                                  alt: "image 6",
                                  width: 1e3,
                                  height: 1e3
                              })
                          })]
                      }), (0, i.jsxs)("div", {
                          id: "container",
                          className: "cl-10",
                          children: [(0, i.jsx)("div", {
                              className: "module-2 parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-01.webp",
                                  alt: "image 1",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module-2 parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-06.webp",
                                  alt: "image 2",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module-2 parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-02.webp",
                                  alt: "image 3",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module-2 parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-07.webp",
                                  alt: "image 4",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module-2 parallax-slider",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-06.webp",
                                  alt: "image 5",
                                  width: 1e3,
                                  height: 1e3
                              })
                          }), (0, i.jsx)("div", {
                              className: "module-2",
                              children: (0, i.jsx)(C(), {
                                  src: "/assets/slider/card-01.webp",
                                  alt: "image 6",
                                  width: 1e3,
                                  height: 1e3
                              })
                          })]
                      })]
                  })
              })
          }
          w.ZP.registerPlugin(y());
          var D = s(33),
              W = s(4285),
              L = s(6053),
              T = s(793),
              B = s(197),
              I = s.n(B),
              A = s(5063),
              O = s.n(A);
          w.ZP.registerPlugin("ScrollTrigger");
          var q, H, Z, R, U, Es = function() {
                  return !0
              },
              Ts = function() {
                  return q || Es() && (q = window.gsap) && q.registerPlugin && q
              },
              z = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
              F = {
                  rect: ["width", "height"],
                  circle: ["r", "r"],
                  ellipse: ["rx", "ry"],
                  line: ["x2", "y2"]
              },
              As = function(e) {
                  return Math.round(1e4 * e) / 1e4
              },
              ks = function(e) {
                  return parseFloat(e || 0)
              },
              Os = function(e, t) {
                  return ks(e.getAttribute(t))
              },
              G = Math.sqrt,
              Bs = function(e, t, s, i, r, a) {
                  return G(Math.pow((ks(s) - ks(e)) * r, 2) + Math.pow((ks(i) - ks(t)) * a, 2))
              },
              Ls = function(e) {
                  return console.warn(e)
              },
              Ps = function(e) {
                  return "non-scaling-stroke" === e.getAttribute("vector-effect")
              },
              Rs = function(e) {
                  if (!(e = H(e)[0])) return 0;
                  var t, s, i, r, a, n, o, l = e.tagName.toLowerCase(),
                      c = e.style,
                      d = 1,
                      h = 1;
                  Ps(e) && (d = G((h = e.getScreenCTM()).a * h.a + h.b * h.b), h = G(h.d * h.d + h.c * h.c));
                  try {
                      s = e.getBBox()
                  } catch (e) {
                      Ls("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
                  }
                  var m = s || {
                          x: 0,
                          y: 0,
                          width: 0,
                          height: 0
                      },
                      p = m.x,
                      u = m.y,
                      x = m.width,
                      j = m.height;
                  if (s && (x || j) || !F[l] || (x = Os(e, F[l][0]), j = Os(e, F[l][1]), "rect" !== l && "line" !== l && (x *= 2, j *= 2), "line" === l && (p = Os(e, "x1"), u = Os(e, "y1"), x = Math.abs(x - p), j = Math.abs(j - u))), "path" === l) r = c.strokeDasharray, c.strokeDasharray = "none", t = e.getTotalLength() || 0, d !== h && Ls("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (d + h) / 2, c.strokeDasharray = r;
                  else if ("rect" === l) t = 2 * x * d + 2 * j * h;
                  else if ("line" === l) t = Bs(p, u, p + x, u + j, d, h);
                  else if ("polyline" === l || "polygon" === l)
                      for (i = e.getAttribute("points").match(z) || [], "polygon" === l && i.push(i[0], i[1]), t = 0, a = 2; a < i.length; a += 2) t += Bs(i[a - 2], i[a - 1], i[a], i[a + 1], d, h) || 0;
                  else "circle" !== l && "ellipse" !== l || (t = Math.PI * (3 * ((n = x / 2 * d) + (o = j / 2 * h)) - G((3 * n + o) * (n + 3 * o))));
                  return t || 0
              },
              js = function(e, t) {
                  if (!(e = H(e)[0])) return [0, 0];
                  t || (t = Rs(e) + 1);
                  var s = Z.getComputedStyle(e),
                      i = s.strokeDasharray || "",
                      r = ks(s.strokeDashoffset),
                      a = i.indexOf(",");
                  return a < 0 && (a = i.indexOf(" ")), (i = a < 0 ? t : ks(i.substr(0, a)) || 1e-5) > t && (i = t), [Math.max(0, -r), Math.max(0, i - r)]
              },
              qs = function() {
                  Es() && (document, Z = window, U = q = Ts(), H = q.utils.toArray, R = -1 !== ((Z.navigator || {}).userAgent || "").indexOf("Edge"))
              },
              V = {
                  version: "3.4.0",
                  name: "drawSVG",
                  register: function(e) {
                      q = e, qs()
                  },
                  init: function(e, t, s, i, r) {
                      if (!e.getBBox) return !1;
                      U || qs();
                      var a, n, o, l, c, d, h, m, p, u = Rs(e) + 1;
                      return this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", a = t, n = (d = js(e, u))[0], (c = a.indexOf(" ")) < 0 ? (o = void 0 !== n ? n + "" : a, l = a) : (o = a.substr(0, c), l = a.substr(c + 1)), h = (o = ~o.indexOf("%") ? ks(o) / 100 * u : ks(o)) > (l = ~l.indexOf("%") ? ks(l) / 100 * u : ks(l)) ? [l, o] : [o, l], this._length = As(u + 10), 0 === d[0] && 0 === h[0] ? (m = Math.max(1e-5, h[1] - u), this._dash = As(u + m), this._offset = As(u - d[1] + m), this._offsetPT = this.add(this, "_offset", this._offset, As(u - h[1] + m))) : (this._dash = As(d[1] - d[0]) || 1e-6, this._offset = As(-d[0]), this._dashPT = this.add(this, "_dash", this._dash, As(h[1] - h[0]) || 1e-5), this._offsetPT = this.add(this, "_offset", this._offset, As(-h[0]))), R && (p = Z.getComputedStyle(e)).strokeLinecap !== p.strokeLinejoin && (h = ks(p.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", h, h + .01)), this._live = Ps(e) || ~(t + "").indexOf("live"), this._props.push("drawSVG"), 1
                  },
                  render: function(e, t) {
                      var s, i, r, a, n = t._pt,
                          o = t._style;
                      if (n) {
                          for (t._live && (s = Rs(t._target) + 11) !== t._length && (i = s / t._length, t._length = s, t._offsetPT.s *= i, t._offsetPT.c *= i, t._dashPT ? (t._dashPT.s *= i, t._dashPT.c *= i) : t._dash *= i); n;) n.r(e, n.d), n = n._next;
                          r = t._dash, a = t._offset, s = t._length, o.strokeDashoffset = t._offset, 1 !== e && e ? o.strokeDasharray = r + "px," + s + "px" : (r - a < .001 && s - r <= 10 && (o.strokeDashoffset = a + 1), o.strokeDasharray = a < .001 && s - r <= 10 ? "none" : a === r ? "0px, 999999px" : r + "px," + s + "px")
                      }
                  },
                  getLength: Rs,
                  getPosition: js
              };
          Ts() && q.registerPlugin(V), w.ZP.registerPlugin(y(), V);
          let handleHover = e => {
                  w.ZP.to(e.target, {
                      duration: .5,
                      scale: 1.1,
                      ease: "power1.inOut"
                  })
              },
              handleHoverExit = e => {
                  w.ZP.to(e.target, {
                      duration: .5,
                      scale: 1,
                      ease: "power1.inOut"
                  })
              };

          function ProjectsHome() {
              return (0, r.useEffect)(() => {
                  let e = w.ZP.timeline();
                  document.querySelectorAll("#image-container").forEach(function(t) {
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
              }), (0, r.useEffect)(() => {
                  let e = w.ZP.context(() => {
                      w.ZP.utils.toArray("#image-container").forEach(function(e) {
                          let t = e.querySelector("img");
                          w.ZP.to(t, {
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
              }), (0, r.useEffect)(() => {
                  let e = document.querySelectorAll("#c-works");
                  e.forEach(function(e, t) {
                      let s = new M.Z(e.querySelector("#proj-work-anim")),
                          i = s.words;
                      w.ZP.from(i, {
                          scrollTrigger: {
                              trigger: e,
                              start: "top 85%",
                              end: "bottom top",
                              markers: !1
                          },
                          duration: 1,
                          opacity: 0,
                          yPercent: 100,
                          ease: "Power3.out",
                          stagger: .05
                      })
                  })
              }, []), globalThis.innerWidth < 1024 && (0, r.useEffect)(() => {
                  let e = w.ZP.timeline({
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
              }, []), (0, r.useEffect)(() => {
                  let e = w.ZP.timeline({
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
                      className: I().projectSectionMain,
                      id: "m-works",
                      children: [(0, i.jsxs)("div", {
                          className: I().projectHeading,
                          children: [(0, i.jsxs)("div", {
                              className: "".concat(I().projectFirstBox, " ").concat(I().lineAnim),
                              id: "line-anim",
                              children: [(0, i.jsx)("h3", {
                                  className: "".concat(I().select),
                                  children: (0, i.jsx)("span", {
                                      className: I().span,
                                      id: "span",
                                      children: "Our Work"
                                  })
                              }), (0, i.jsx)("p", {
                                  className: I().paraProject,
                                  id: "proj-para-anim",
                                  children: (0, i.jsx)("span", {
                                      children: "Our showcase of a spectrum of Innovative Collaborations, Redefined Digital Experiences, and Brand Transformations."
                                  })
                              })]
                          }), (0, i.jsx)("div", {
                              className: "".concat(I().projectHomeHeading, " ").concat(I().lineAnim),
                              id: "line-anim",
                              children: (0, i.jsx)("h3", {
                                  className: I().project,
                                  id: "darkMode-project",
                                  children: (0, i.jsx)("span", {
                                      className: I().span,
                                      id: "span",
                                      children: "Showcase"
                                  })
                              })
                          })]
                      }), (0, i.jsxs)("div", {
                          className: I().projectHover,
                          id: "project-work",
                          children: [(0, i.jsxs)("div", {
                              className: I().projectSubSection,
                              children: [(0, i.jsx)("div", {
                                  className: I().glide,
                                  children: (0, i.jsxs)("div", {
                                      className: "".concat(I().glideContent, " ").concat(I().mt20),
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/kedarkala-portfolio-website-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/kedarkala2.webp",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2022"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "Branding, Web Design"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "Kedarkala"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                                  className: I().glide,
                                  children: (0, i.jsxs)("div", {
                                      className: "".concat(I().glideContent, " ").concat(I().mt20, " ").concat(I().mt0, " ").concat(I().forthMt),
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/patra-saas-insurtech-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/patra1.webp",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2022"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "Web Design, Branding, Development"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "Patra"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                              className: I().projectSubSection,
                              children: [(0, i.jsx)("div", {
                                  className: I().glide,
                                  children: (0, i.jsxs)("div", {
                                      className: "".concat(I().glideContent, " ").concat(I().mt20, " ").concat(I().mt0),
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/wragby-solutions-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/wragby.webp",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2022"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "UI/ UX Design, Development"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "Wragby"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                                  className: "".concat(I().glide, " ").concat(I().mb_0),
                                  children: (0, i.jsxs)("div", {
                                      className: I().glideContent,
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/gcm-phygital-shopping-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/gcm.webp",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2022"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "Web Design, Development"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "Gardencity Mall"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                              className: I().projectSubSection,
                              children: [(0, i.jsx)("div", {
                                  className: I().glide,
                                  children: (0, i.jsxs)("div", {
                                      className: "".concat(I().glideContent, " ").concat(I().mt20, " ").concat(I().mt0),
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/pdtl-ecommerce-automation-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/pdtl.webp",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2022"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "Web Design, Branding, Development"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "PDTL"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                                  className: I().glide,
                                  children: (0, i.jsxs)("div", {
                                      className: I().glideContent,
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/dharan-ecommerce-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/dharan.webp",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2020"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "E-Commerce, Web Design, Development"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "Dharan"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                              className: I().projectSubSection,
                              children: [(0, i.jsx)("div", {
                                  className: I().glide,
                                  children: (0, i.jsxs)("div", {
                                      className: "".concat(I().glideContent, " ").concat(I().mt20, " ").concat(I().mt0, " ").concat(I().forthMt),
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/certvault-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/cert.png",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2022"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "Web Design, Branding, Development"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "Certvault"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                                  className: I().glide,
                                  children: (0, i.jsxs)("div", {
                                      className: I().glideContent,
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/quickx-crypto-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/quick.png",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2020"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "E-Commerce, Web Design, Development"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "QuickX"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                              className: I().projectSubSection,
                              children: [(0, i.jsx)("div", {
                                  className: "".concat(I().glide, " ").concat(I().mb_0),
                                  children: (0, i.jsxs)("div", {
                                      className: "".concat(I().glideContent),
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/patronum-saas-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/patronum.webp",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2019"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "Branding, Web Design, Marketing"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "Patronum"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                                  className: I().glide,
                                  children: (0, i.jsxs)("div", {
                                      className: I().glideContent,
                                      id: "image-container",
                                      children: [(0, i.jsx)("a", {
                                          href: "/dmtca-digital-branding-case-study",
                                          children: (0, i.jsx)(C(), {
                                              src: "/assets/projects/new-project/dmtca.png",
                                              width: 1e3,
                                              height: 1e3,
                                              alt: "Image",
                                              onMouseEnter: e => handleHover(e),
                                              onMouseOut: e => handleHoverExit(e)
                                          })
                                      }), (0, i.jsx)("div", {
                                          className: I().textContent,
                                          children: (0, i.jsxs)("div", {
                                              className: I().c_project_info,
                                              children: [(0, i.jsx)("p", {
                                                  children: "2020"
                                              }), " ", (0, i.jsx)("p", {
                                                  children: "E-Commerce, Web Design, Development"
                                              }), (0, i.jsxs)("div", {
                                                  className: I().projectCta,
                                                  children: [(0, i.jsx)("h4", {
                                                      children: "DMTCA"
                                                  }), (0, i.jsx)("div", {
                                                      className: "".concat(I().c_prj_btn, " ").concat(I().js_tab_arrow),
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
                      })]
                  })
              })
          }
          var X = s(7237),
              K = s.n(X);

          function NextBox() {
              return (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)("div", {
                      className: K().nextContainer,
                      children: (0, i.jsxs)("div", {
                          className: K().nextSubContainer,
                          children: [(0, i.jsx)("div", {
                              className: K().subHeading,
                              children: (0, i.jsx)("p", {
                                  children: "next up"
                              })
                          }), (0, i.jsx)("div", {
                              className: K().mainHeading,
                              "data-cursor-background-image": "/assets/gif/10.gif",
                              "data-cursor-color": "#000",
                              "data-cursor-size": "400px",
                              children: (0, i.jsx)(O(), {
                                  href: "/who-we-are",
                                  children: (0, i.jsx)("h5", {
                                      children: "About us"
                                  })
                              })
                          })]
                      })
                  })
              })
          }
          var Y = s(4791),
              Q = s(3047),
              $ = s(9008),
              J = s.n($);

          function studio() {
              let [e, t] = (0, r.useState)(!0);
              return (0, r.useEffect)(() => {
                  e ? document.querySelector("body").classList.add("loading") : document.querySelector("body").classList.remove("loading")
              }, [e], 3e3), (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(p.PB, {
                      title: "Orgitech's Portfolio: Showcasing Digital Mastery",
                      description: "Explore Orgitech's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
                      openGraph: {
                          url: "https://weareenigma.com/our-portfolio",
                          title: "Orgitech's Portfolio: Showcasing Digital Mastery",
                          description: "Explore Orgitech's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
                          images: [{
                              url: "https://weareenigma.com/assets/featured-images/work.png",
                              width: 1200,
                              height: 630,
                              alt: "Our Portfolio Feature Image",
                              type: "image/png"
                          }],
                          siteName: "Enigma Digital"
                      },
                      additionalMetaTags: [{
                          name: "twitter:title",
                          content: "Orgitech's Portfolio: Showcasing Digital Mastery"
                      }, {
                          name: "twitter:description",
                          content: "Explore Orgitech's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results."
                      }, {
                          name: "twitter:image",
                          content: "https://weareenigma.com/assets/featured-images/work.png"
                      }]
                  }), (0, i.jsxs)(J(), {
                      children: [(0, i.jsx)("link", {
                          rel: "canonical",
                          href: "https://weareenigma.com/our-portfolio"
                      }), (0, i.jsx)("link", {
                          rel: "alternate",
                          href: "https://weareenigma.com/our-portfolio",
                          hreflang: "x-default"
                      }), (0, i.jsx)("script", {
                          type: "application/ld+json",
                          dangerouslySetInnerHTML: {
                              __html: JSON.stringify({
                                  "@context": "https://schema.org",
                                  "@type": "WebPage",
                                  mainEntityOfPage: {
                                      "@type": "WebPage",
                                      "@id": "https://weareenigma.com/our-portfolio"
                                  },
                                  name: "Works",
                                  description: "Explore Orgitech's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
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
                  }), (0, i.jsx)(a.C, {
                      isGelly: !0
                  }), (0, i.jsx)(L.Z, {}), (0, i.jsx)(Q.Z, {
                      text: "Our Meticulously Crafted Projects"
                  }), (0, i.jsxs)("div", {
                      className: "studio",
                      children: [(0, i.jsx)(W.Z, {}), (0, i.jsx)(Y.Z, {}), (0, i.jsx)(AnimatePresence, {
                          children: e ? (0, i.jsx)(m.E.div, {
                              children: (0, i.jsx)(studio_Loader, {
                                  setLoading: t
                              })
                          }, "loader") : (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)("div", {
                                  "data-cursor-size": "10px",
                                  "data-cursor-text": "",
                                  children: (0, i.jsx)(studio_Banner, {})
                              }), !e && (0, i.jsx)("div", {
                                  className: "transition-image final",
                                  children: (0, i.jsx)(m.E.video, {
                                      transition: {
                                          ease: [.6, .01, -.05, .9],
                                          duration: 1
                                      },
                                      src: "/assets/reels/showreel.mp4",
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      autoPlay: !0,
                                      layoutId: "main-image-1",
                                      "data-cursor-text": "Play/Pause",
                                      "data-cursor-size": "120px",
                                      "data-cursor-color": "#000",
                                      className: "studio-img-hero"
                                  })
                              }), (0, i.jsx)("section", {
                                  className: "p-150",
                                  "data-cursor-color": "#000",
                                  "data-cursor-size": "0px",
                                  children: (0, i.jsx)(Aerosol, {})
                              }), (0, i.jsx)("section", {
                                  className: "desktop-projects m-150",
                                  children: (0, i.jsx)(WorkProject, {})
                              }), (0, i.jsx)("section", {
                                  className: "mobile-projects",
                                  children: (0, i.jsx)(ProjectsHome, {})
                              }), (0, i.jsx)("div", {
                                  className: "pt-150",
                                  children: (0, i.jsx)(SliderMarquee, {})
                              }), (0, i.jsx)("div", {
                                  className: "m-150",
                                  children: (0, i.jsx)(NextBox, {})
                              }), (0, i.jsx)("div", {
                                  className: "desktop-footer",
                                  children: (0, i.jsx)(D.Z, {})
                              }), (0, i.jsx)("div", {
                                  className: "mobile-footer",
                                  children: (0, i.jsx)(T.Z, {})
                              })]
                          })
                      })]
                  })]
              })
          }
      },
      9108: function(e) {
          e.exports = {
              projectSectionMain: "styles_projectSectionMain__0U2bM",
              mt20: "styles_mt20__naeA9",
              projectHeading: "styles_projectHeading__8qRKo",
              projectFirstBox: "styles_projectFirstBox__r3qXe",
              headContainer: "styles_headContainer__1n8C7",
              paraProject: "styles_paraProject__CvOhE"
          }
      },
      1059: function(e) {
          e.exports = {
              double: "Double_double__H0_hO",
              imageContainer: "Double_imageContainer__wdbmX",
              stretchyWrapper: "Double_stretchyWrapper__12RJ8",
              body: "Double_body__Wr7r_",
              pname: "Double_pname__Zw6zV",
              description: "Double_description__lxQo_"
          }
      },
      7237: function(e) {
          e.exports = {
              nextContainer: "next_nextContainer__89t8T",
              subHeading: "next_subHeading__FRofA",
              mainHeading: "next_mainHeading__i1utm",
              nextUpContainer: "next_nextUpContainer__GI5eb"
          }
      },
      197: function(e) {
          e.exports = {
              projectSectionMain: "workProject_projectSectionMain__IDlXV",
              mt20: "workProject_mt20__OxEZv",
              font: "workProject_font__UXlUq",
              projectHeading: "workProject_projectHeading__CZv62",
              projectFirstBox: "workProject_projectFirstBox__W32pA",
              paraProject: "workProject_paraProject__H7Gya",
              select: "workProject_select__gOnw5",
              projectHomeHeading: "workProject_projectHomeHeading__xMUjV",
              project: "workProject_project__dvQDF",
              lineAnim: "workProject_lineAnim__atbi0",
              span: "workProject_span__V3VnJ",
              projectSubSection: "workProject_projectSubSection__xyM78",
              glide: "workProject_glide__bePNi",
              glideContent: "workProject_glideContent__s5hFu",
              projectHover: "workProject_projectHover__k73ha",
              textContent: "workProject_textContent__DyaGF",
              c_project_info: "workProject_c_project_info__oR7jI",
              projectCta: "workProject_projectCta__Izt_x",
              c_prj_btn: "workProject_c_prj_btn__oYfdb",
              mb_0: "workProject_mb_0__KYSed",
              mt0: "workProject_mt0__h4Lx6",
              mobileSpacing: "workProject_mobileSpacing__wGIR6"
          }
      }
  },
  function(e) {
      e.O(0, [8802, 3433, 990, 3386, 1664, 506, 1132, 5829, 5244, 3494, 5268, 9774, 2888, 179], function() {
          return e(e.s = 3449)
      }), _N_E = e.O()
  }
]);