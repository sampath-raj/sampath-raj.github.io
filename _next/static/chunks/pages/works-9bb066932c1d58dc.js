(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [547],
  {
    6478: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/works",
        function () {
          return n(111);
        },
      ]);
    },
    111: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var s = n(5893),
        i = n(7294),
        o = n(1163),
        a = n(2962),
        r = n(1664),
        u = n(1653),
        l = (n(9755), n(990)),
        c = n(5317),
        d = n(2238);
      function m(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      function f(e, t, n) {
        return t && h(e.prototype, t), n && h(e, n), e;
      }
      function v(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      var y = new d.UAParser().getDevice().type;
      function x() {
        var e = (0, o.useRouter)();
        (0, i.useLayoutEffect)(
          function () {
            var t = function (e) {
                if ("mobile" !== y && "tablet" !== y) {
                  !(function () {
                    console.log("Hover Anim - 01 / Handle Start");
                    document.body, document.documentElement;
                    var e,
                      t = function (e, t, n) {
                        return (1 - n) * e + n * t;
                      },
                      n = function () {
                        return (e = {
                          width: window.innerWidth,
                          height: window.innerHeight,
                        });
                      };
                    n(), window.addEventListener("resize", n);
                    var s = document.querySelector("feDisplacementMap");
                    new ((function () {
                      function n() {
                        var t = this;
                        m(this, n),
                          (this.DOM = {
                            svg: document.querySelector("svg.distort"),
                            menu: document.querySelector("nav.menu_list"),
                          }),
                          (this.DOM.imgs = v(
                            this.DOM.svg.querySelectorAll("g > image")
                          )),
                          (this.DOM.menuLinks = v(
                            this.DOM.menu.querySelectorAll(".menu__link")
                          )),
                          (this.mousePos = { x: e.width / 2, y: e.height / 2 }),
                          (this.lastMousePos = {
                            translation: { x: e.width / 2, y: e.height / 2 },
                            displacement: { x: 0, y: 0 },
                          }),
                          (this.dmScale = 0),
                          (this.current = -1),
                          this.initEvents(),
                          requestAnimationFrame(function () {
                            return t.render();
                          });
                      }
                      return (
                        f(n, [
                          {
                            key: "initEvents",
                            value: function () {
                              var e = this;
                              window.addEventListener(
                                "mousemove",
                                function (t) {
                                  return (e.mousePos = (function (e) {
                                    var t = 0,
                                      n = 0;
                                    return (
                                      e || (e = window.event),
                                      e.pageX || e.pageY
                                        ? ((t = e.pageX), (n = e.pageY))
                                        : (e.clientX || e.clientY) &&
                                          ((t =
                                            e.clientX +
                                            document.body.scrollLeft +
                                            document.documentElement
                                              .scrollLeft),
                                          (n =
                                            e.clientY +
                                            document.body.scrollTop +
                                            document.documentElement
                                              .scrollTop)),
                                      { x: t, y: n }
                                    );
                                  })(t));
                                }
                              ),
                                this.DOM.menuLinks.forEach(function (t, n) {
                                  var s = e;
                                  t.addEventListener("mouseenter", function () {
                                    -1 !== s.current &&
                                      l.Q3.set(s.DOM.imgs[s.current], {
                                        opacity: 0,
                                      }),
                                      (s.current = n),
                                      s.fade
                                        ? (l.Q3.to(s.DOM.imgs[s.current], 0.5, {
                                            ease: c.lD.easeOut,
                                            opacity: 1,
                                          }),
                                          (s.fade = !1))
                                        : l.Q3.set(s.DOM.imgs[s.current], {
                                            opacity: 1,
                                          });
                                  });
                                });
                              this.DOM.menu.addEventListener(
                                "mouseenter",
                                function () {
                                  return (e.fade = !0);
                                }
                              ),
                                this.DOM.menu.addEventListener(
                                  "mouseleave",
                                  function () {
                                    return l.Q3.to(e.DOM.imgs[e.current], 0.2, {
                                      ease: c.lD.easeOut,
                                      opacity: 0,
                                    });
                                  }
                                );
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var n = this;
                              (this.lastMousePos.translation.x = t(
                                this.lastMousePos.translation.x,
                                this.mousePos.x,
                                0.2
                              )),
                                (this.lastMousePos.translation.y = t(
                                  this.lastMousePos.translation.y,
                                  this.mousePos.y,
                                  0.2
                                )),
                                (this.DOM.svg.style.transform = "translateX("
                                  .concat(
                                    this.lastMousePos.translation.x -
                                      e.width / 2,
                                    "px) translateY("
                                  )
                                  .concat(
                                    this.lastMousePos.translation.y -
                                      e.height / 2,
                                    "px)"
                                  )),
                                (this.lastMousePos.displacement.x = t(
                                  this.lastMousePos.displacement.x,
                                  this.mousePos.x,
                                  0.1
                                )),
                                (this.lastMousePos.displacement.y = t(
                                  this.lastMousePos.displacement.y,
                                  this.mousePos.y,
                                  0.1
                                ));
                              var i = (function (e, t, n, s) {
                                var i = e - t,
                                  o = n - s;
                                return Math.hypot(i, o);
                              })(
                                this.lastMousePos.displacement.x,
                                this.mousePos.x,
                                this.lastMousePos.displacement.y,
                                this.mousePos.y
                              );
                              (this.dmScale = Math.min(
                                (function (e, t, n, s, i) {
                                  var o = (e - t) / (n - s);
                                  return o * i + (t - o * s);
                                })(50, 0, 140, 0, i),
                                50
                              )),
                                (s.scale.baseVal = this.dmScale),
                                requestAnimationFrame(function () {
                                  return n.render();
                                });
                            },
                          },
                        ]),
                        n
                      );
                    })())();
                  })();
                }
              },
              n = function (e) {
                if ("mobile" !== y && "tablet" !== y) {
                  !(function () {
                    console.log("Hover Anim - 02 / Handle Stop");
                    document.body, document.documentElement;
                    var e,
                      t = function (e, t, n) {
                        return (1 - n) * e + n * t;
                      },
                      n = function () {
                        return (e = {
                          width: window.innerWidth,
                          height: window.innerHeight,
                        });
                      };
                    n(), window.addEventListener("resize", n);
                    var s = document.querySelector("feDisplacementMap");
                    new ((function () {
                      function n() {
                        var t = this;
                        m(this, n),
                          (this.DOM = {
                            svg: document.querySelector("svg.distort"),
                            menu: document.querySelector("nav.menu_list"),
                          }),
                          (this.DOM.imgs = v(
                            this.DOM.svg.querySelectorAll("g > image")
                          )),
                          (this.DOM.menuLinks = v(
                            this.DOM.menu.querySelectorAll(".menu__link")
                          )),
                          (this.mousePos = { x: e.width / 2, y: e.height / 2 }),
                          (this.lastMousePos = {
                            translation: { x: e.width / 2, y: e.height / 2 },
                            displacement: { x: 0, y: 0 },
                          }),
                          (this.dmScale = 0),
                          (this.current = -1),
                          this.initEvents(),
                          requestAnimationFrame(function () {
                            return t.render();
                          });
                      }
                      return (
                        f(n, [
                          {
                            key: "initEvents",
                            value: function () {
                              var e = this;
                              window.addEventListener(
                                "mousemove",
                                function (t) {
                                  return (e.mousePos = (function (e) {
                                    var t = 0,
                                      n = 0;
                                    return (
                                      e || (e = window.event),
                                      e.pageX || e.pageY
                                        ? ((t = e.pageX), (n = e.pageY))
                                        : (e.clientX || e.clientY) &&
                                          ((t =
                                            e.clientX +
                                            document.body.scrollLeft +
                                            document.documentElement
                                              .scrollLeft),
                                          (n =
                                            e.clientY +
                                            document.body.scrollTop +
                                            document.documentElement
                                              .scrollTop)),
                                      { x: t, y: n }
                                    );
                                  })(t));
                                }
                              ),
                                this.DOM.menuLinks.forEach(function (t, n) {
                                  var s = e;
                                  t.addEventListener("mouseenter", function () {
                                    -1 !== s.current &&
                                      l.Q3.set(s.DOM.imgs[s.current], {
                                        opacity: 0,
                                      }),
                                      (s.current = n),
                                      s.fade
                                        ? (l.Q3.to(s.DOM.imgs[s.current], 0.5, {
                                            ease: c.lD.easeOut,
                                            opacity: 1,
                                          }),
                                          (s.fade = !1))
                                        : l.Q3.set(s.DOM.imgs[s.current], {
                                            opacity: 1,
                                          });
                                  });
                                });
                              this.DOM.menu.addEventListener(
                                "mouseenter",
                                function () {
                                  return (e.fade = !0);
                                }
                              ),
                                this.DOM.menu.addEventListener(
                                  "mouseleave",
                                  function () {
                                    return l.Q3.to(e.DOM.imgs[e.current], 0.2, {
                                      ease: c.lD.easeOut,
                                      opacity: 0,
                                    });
                                  }
                                );
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var n = this;
                              (this.lastMousePos.translation.x = t(
                                this.lastMousePos.translation.x,
                                this.mousePos.x,
                                0.2
                              )),
                                (this.lastMousePos.translation.y = t(
                                  this.lastMousePos.translation.y,
                                  this.mousePos.y,
                                  0.2
                                )),
                                (this.DOM.svg.style.transform = "translateX("
                                  .concat(
                                    this.lastMousePos.translation.x -
                                      e.width / 2,
                                    "px) translateY("
                                  )
                                  .concat(
                                    this.lastMousePos.translation.y -
                                      e.height / 2,
                                    "px)"
                                  )),
                                (this.lastMousePos.displacement.x = t(
                                  this.lastMousePos.displacement.x,
                                  this.mousePos.x,
                                  0.1
                                )),
                                (this.lastMousePos.displacement.y = t(
                                  this.lastMousePos.displacement.y,
                                  this.mousePos.y,
                                  0.1
                                ));
                              var i = (function (e, t, n, s) {
                                var i = e - t,
                                  o = n - s;
                                return Math.hypot(i, o);
                              })(
                                this.lastMousePos.displacement.x,
                                this.mousePos.x,
                                this.lastMousePos.displacement.y,
                                this.mousePos.y
                              );
                              (this.dmScale = Math.min(
                                (function (e, t, n, s, i) {
                                  var o = (e - t) / (n - s);
                                  return o * i + (t - o * s);
                                })(50, 0, 140, 0, i),
                                50
                              )),
                                (s.scale.baseVal = this.dmScale),
                                requestAnimationFrame(function () {
                                  return n.render();
                                });
                            },
                          },
                        ]),
                        n
                      );
                    })())();
                  })();
                }
              };
            return (
              e.events.on("routeChangeStart", t),
              e.events.on("routeChangeComplete", n),
              e.events.on("routeChangeError", n),
              function () {
                e.events.off("routeChangeStart", t),
                  e.events.off("routeChangeComplete", n),
                  e.events.off("routeChangeError", n);
              }
            );
          },
          [e]
        ),
          (0, i.useEffect)(function () {
            "mobile" !== y &&
              "tablet" !== y &&
              window.addEventListener("load", function () {
                console.log("Hover Anim / First Load Only");
                document.body, document.documentElement;
                var e,
                  t = function (e, t, n) {
                    return (1 - n) * e + n * t;
                  },
                  n = function () {
                    return (e = {
                      width: window.innerWidth,
                      height: window.innerHeight,
                    });
                  };
                n(), window.addEventListener("resize", n);
                var s = document.querySelector("feDisplacementMap");
                new ((function () {
                  function n() {
                    var t = this;
                    m(this, n),
                      (this.DOM = {
                        svg: document.querySelector("svg.distort"),
                        menu: document.querySelector("nav.menu_list"),
                      }),
                      (this.DOM.imgs = v(
                        this.DOM.svg.querySelectorAll("g > image")
                      )),
                      (this.DOM.menuLinks = v(
                        this.DOM.menu.querySelectorAll(".menu__link")
                      )),
                      (this.mousePos = { x: e.width / 2, y: e.height / 2 }),
                      (this.lastMousePos = {
                        translation: { x: e.width / 2, y: e.height / 2 },
                        displacement: { x: 0, y: 0 },
                      }),
                      (this.dmScale = 0),
                      (this.current = -1),
                      this.initEvents(),
                      requestAnimationFrame(function () {
                        return t.render();
                      });
                  }
                  return (
                    f(n, [
                      {
                        key: "initEvents",
                        value: function () {
                          var e = this;
                          window.addEventListener("mousemove", function (t) {
                            return (e.mousePos = (function (e) {
                              var t = 0,
                                n = 0;
                              return (
                                e || (e = window.event),
                                e.pageX || e.pageY
                                  ? ((t = e.pageX), (n = e.pageY))
                                  : (e.clientX || e.clientY) &&
                                    ((t =
                                      e.clientX +
                                      document.body.scrollLeft +
                                      document.documentElement.scrollLeft),
                                    (n =
                                      e.clientY +
                                      document.body.scrollTop +
                                      document.documentElement.scrollTop)),
                                { x: t, y: n }
                              );
                            })(t));
                          }),
                            this.DOM.menuLinks.forEach(function (t, n) {
                              var s = e;
                              t.addEventListener("mouseenter", function () {
                                -1 !== s.current &&
                                  l.Q3.set(s.DOM.imgs[s.current], {
                                    opacity: 0,
                                  }),
                                  (s.current = n),
                                  s.fade
                                    ? (l.Q3.to(s.DOM.imgs[s.current], 0.5, {
                                        ease: c.lD.easeOut,
                                        opacity: 1,
                                      }),
                                      (s.fade = !1))
                                    : l.Q3.set(s.DOM.imgs[s.current], {
                                        opacity: 1,
                                      });
                              });
                            });
                          this.DOM.menu.addEventListener(
                            "mouseenter",
                            function () {
                              return (e.fade = !0);
                            }
                          ),
                            this.DOM.menu.addEventListener(
                              "mouseleave",
                              function () {
                                return l.Q3.to(e.DOM.imgs[e.current], 0.2, {
                                  ease: c.lD.easeOut,
                                  opacity: 0,
                                });
                              }
                            );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var n = this;
                          (this.lastMousePos.translation.x = t(
                            this.lastMousePos.translation.x,
                            this.mousePos.x,
                            0.2
                          )),
                            (this.lastMousePos.translation.y = t(
                              this.lastMousePos.translation.y,
                              this.mousePos.y,
                              0.2
                            )),
                            (this.DOM.svg.style.transform = "translateX("
                              .concat(
                                this.lastMousePos.translation.x - e.width / 2,
                                "px) translateY("
                              )
                              .concat(
                                this.lastMousePos.translation.y - e.height / 2,
                                "px)"
                              )),
                            (this.lastMousePos.displacement.x = t(
                              this.lastMousePos.displacement.x,
                              this.mousePos.x,
                              0.1
                            )),
                            (this.lastMousePos.displacement.y = t(
                              this.lastMousePos.displacement.y,
                              this.mousePos.y,
                              0.1
                            ));
                          var i = (function (e, t, n, s) {
                            var i = e - t,
                              o = n - s;
                            return Math.hypot(i, o);
                          })(
                            this.lastMousePos.displacement.x,
                            this.mousePos.x,
                            this.lastMousePos.displacement.y,
                            this.mousePos.y
                          );
                          (this.dmScale = Math.min(
                            (function (e, t, n, s, i) {
                              var o = (e - t) / (n - s);
                              return o * i + (t - o * s);
                            })(50, 0, 140, 0, i),
                            50
                          )),
                            (s.scale.baseVal = this.dmScale),
                            requestAnimationFrame(function () {
                              return n.render();
                            });
                        },
                      },
                    ]),
                    n
                  );
                })())();
              });
          }, []);
        var t = {
          visible: { y: 0, transition: { duration: 0.7, ease: "easeOut" } },
          hidden: { y: 100 },
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(a.PB, { title: "WORKS", noindex: !1, nofollow: !1 }),
            (0, s.jsxs)("div", {
              className: "page_animation_block flex align-middle",
              children: [
                (0, s.jsx)(u.E.div, {
                  className: "page_animation_01",
                  initial: "initial",
                  animate: "enter",
                  exit: "exit",
                  variants: {
                    initial: {
                      x: "100%",
                      transition: {
                        duration: 1.4,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                    enter: {
                      x: "-100%",
                      transition: {
                        duration: 1.4,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                    exit: {
                      x: "100%",
                      transition: {
                        duration: 1.4,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                  },
                }),
                (0, s.jsx)(u.E.div, {
                  className: "page_animation_02",
                  initial: "initial",
                  animate: "enter",
                  exit: "exit",
                  variants: {
                    initial: {
                      x: "100%",
                      transition: {
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                    enter: {
                      x: "-100%",
                      transition: {
                        delay: 0.1,
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                    exit: {
                      x: "100%",
                      transition: {
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                  },
                }),
              ],
            }),
            (0, s.jsx)(u.E.div, {
              className: "wrapper",
              initial: { opacity: 0, filter: "blur(8px)" },
              animate: { opacity: 1, filter: "blur(0px)" },
              transition: { delay: 1, duration: 0.6, ease: "easeIn" },
              children: (0, s.jsx)("section", {
                id: "works",
                children: (0, s.jsx)("section", {
                  id: "works_list",
                  children: (0, s.jsxs)("div", {
                    className: "hover_anim",
                    children: [
                      (0, s.jsxs)("svg", {
                        className: "distort",
                        width: "500",
                        height: "809",
                        viewBox: "-98 48 500 809",
                        children: [
                          (0, s.jsxs)("filter", {
                            id: "distortionFilter",
                            children: [
                              (0, s.jsx)("feTurbulence", {
                                type: "turbulence",
                                baseFrequency: "0.07 0.01",
                                numOctaves: "5",
                                seed: "2",
                                stitchTiles: "stitch",
                                x: "0%",
                                y: "0%",
                                width: "100%",
                                height: "100%",
                                result: "noise",
                              }),
                              (0, s.jsx)("feDisplacementMap", {
                                in: "SourceGraphic",
                                in2: "noise",
                                scale: "0",
                                xChannelSelector: "R",
                                yChannelSelector: "B",
                                x: "0%",
                                y: "0%",
                                width: "100%",
                                height: "100%",
                                filterUnits: "userSpaceOnUse",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("g", {
                            filter: "url(#distortionFilter)",
                            transform: "rotate(10)",
                            children: [
                              (0, s.jsx)("image", {
                                className: "distort__img",
                                x: "50",
                                y: "50",
                                xlinkHref: "/works/noir-homme/visual.jpg",
                                width: "608",
                                height: "983",
                              }),
                              (0, s.jsx)("image", {
                                className: "distort__img",
                                x: "50",
                                y: "50",
                                xlinkHref: "/works/cheese-magazine/visual.jpg",
                              }),
                              (0, s.jsx)("image", {
                                className: "distort__img",
                                x: "50",
                                y: "50",
                                xlinkHref: "/works/konron/visual.jpg",
                              }),
                              (0, s.jsx)("image", {
                                className: "distort__img",
                                x: "50",
                                y: "50",
                                xlinkHref: "/works/bloody-mary/visual.jpg",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)(u.E.nav, {
                        className: "menu_list mix-blend-difference",
                        initial: "hidden",
                        animate: "visible",
                        variants: {
                          visible: {
                            opacity: 1,
                            transition: {
                              delay: 1,
                              when: "beforeChildren",
                              staggerChildren: 0.18,
                            },
                          },
                          hidden: { opacity: 0 },
                        },
                        children: [
                          (0, s.jsx)("div", {
                            className: "menu_block",
                            children: (0, s.jsx)(u.E.div, {
                              variants: t,
                              children: (0, s.jsx)(r.default, {
                                href: "/works/noir-homme",
                                children: (0, s.jsx)("a", {
                                  className: "main_en menu__link",
                                  children: "NOIR HOMME",
                                }),
                              }),
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "menu_block",
                            children: (0, s.jsx)(u.E.div, {
                              variants: t,
                              children: (0, s.jsx)(r.default, {
                                href: "/works/cheese-magazine",
                                children: (0, s.jsx)("a", {
                                  className: "main_en menu__link",
                                  children: "CHEESE MAGAZINE",
                                }),
                              }),
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "menu_block",
                            children: (0, s.jsx)(u.E.div, {
                              variants: t,
                              children: (0, s.jsx)(r.default, {
                                href: "/works/konron",
                                children: (0, s.jsx)("a", {
                                  className: "main_en menu__link",
                                  children: "KONRON",
                                }),
                              }),
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "menu_block",
                            children: (0, s.jsx)(u.E.div, {
                              variants: t,
                              children: (0, s.jsx)(r.default, {
                                href: "/works/bloody-mary",
                                children: (0, s.jsx)("a", {
                                  className: "main_en menu__link",
                                  children: "Bloody Mary",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [653, 774, 888, 179], function () {
      return (t = 6478), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
