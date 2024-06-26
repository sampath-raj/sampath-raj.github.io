"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [653],
  {
    1653: function (t, e, n) {
      n.d(e, {
        E: function () {
          return na;
        },
      });
      var r = n(1439),
        i = n(7294),
        o = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        a = {
          measureLayout: o(["layout", "layoutId", "drag"]),
          animation: o([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: o(["exit"]),
          drag: o(["drag", "dragControls"]),
          focus: o(["whileFocus"]),
          hover: o(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: o(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: o(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: o(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var s = (0, i.createContext)({ strict: !1 }),
        u = Object.keys(a),
        l = u.length;
      var c = (0, i.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
        }),
        d = (0, i.createContext)({});
      var p = n(240),
        v = "undefined" !== typeof window,
        f = v ? i.useLayoutEffect : i.useEffect;
      function h(t, e, n, r) {
        var o = (0, i.useContext)(s),
          a = (0, i.useContext)(d).visualElement,
          u = (0, i.useContext)(p.O),
          l = (0, i.useRef)(void 0);
        r || (r = o.renderer),
          !l.current &&
            r &&
            (l.current = r(t, {
              visualState: e,
              parent: a,
              props: n,
              presenceId: null === u || void 0 === u ? void 0 : u.id,
              blockInitialAnimation:
                !1 === (null === u || void 0 === u ? void 0 : u.initial),
            }));
        var c = l.current;
        return (
          f(function () {
            null === c || void 0 === c || c.syncRender();
          }),
          (0, i.useEffect)(function () {
            var t;
            null ===
              (t = null === c || void 0 === c ? void 0 : c.animationState) ||
              void 0 === t ||
              t.animateChanges();
          }),
          f(function () {
            return function () {
              return null === c || void 0 === c ? void 0 : c.notifyUnmount();
            };
          }, []),
          c
        );
      }
      function m(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function y(t) {
        return Array.isArray(t);
      }
      function g(t) {
        return "string" === typeof t || y(t);
      }
      function x(t, e, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          "string" === typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          e
        );
      }
      function b(t, e, n) {
        var r = t.getProps();
        return x(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function P(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          g(t.initial) ||
          g(t.animate) ||
          g(t.whileHover) ||
          g(t.whileDrag) ||
          g(t.whileTap) ||
          g(t.whileFocus) ||
          g(t.exit)
        );
      }
      function E(t) {
        return Boolean(P(t) || t.variants);
      }
      function T(t) {
        var e = (function (t, e) {
            if (P(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || g(n) ? n : void 0,
                animate: g(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, i.useContext)(d)),
          n = e.initial,
          r = e.animate;
        return (0, i.useMemo)(
          function () {
            return { initial: n, animate: r };
          },
          [w(n), w(r)]
        );
      }
      function w(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var S = n(6681),
        A = n(4735);
      const V = (t, e, n) => -n * t + n * e + t;
      function C(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      function R(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function M(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var L = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                R(this.subscriptions, t),
                function () {
                  return M(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        D = (function () {
          function t(t) {
            var e,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new L()),
              (this.velocityUpdateSubscribers = new L()),
              (this.renderSubscribers = new L()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var r = (0, A.$B)(),
                  i = r.delta,
                  o = r.timestamp;
                n.lastUpdated !== o &&
                  ((n.timeDelta = i),
                  (n.lastUpdated = o),
                  A.ZP.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return A.ZP.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? C(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function k(t) {
        return new D(t);
      }
      var O = function (t) {
        return Boolean(null !== t && "object" === typeof t && t.getVelocity);
      };
      function j(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      Object.create;
      Object.create;
      const F = (t, e, n) => Math.min(Math.max(n, t), e),
        B = 0.001;
      function U({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1,
      }) {
        let i,
          o,
          a = 1 - e;
        (a = F(0.05, 1, a)),
          (t = F(0.01, 10, t / 1e3)),
          a < 1
            ? ((i = (e) => {
                const r = e * a,
                  i = r * t,
                  o = r - n,
                  s = I(e, a),
                  u = Math.exp(-i);
                return B - (o / s) * u;
              }),
              (o = (e) => {
                const r = e * a * t,
                  o = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  l = I(Math.pow(e, 2), a);
                return ((-i(e) + B > 0 ? -1 : 1) * ((o - s) * u)) / l;
              }))
            : ((i = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (o = (e) => Math.exp(-e * t) * (t * t * (n - e))));
        const s = (function (t, e, n) {
          let r = n;
          for (let i = 1; i < 12; i++) r -= t(r) / e(r);
          return r;
        })(i, o, 5 / t);
        if (((t *= 1e3), isNaN(s)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          const e = Math.pow(s, 2) * r;
          return {
            stiffness: e,
            damping: 2 * a * Math.sqrt(r * e),
            duration: t,
          };
        }
      }
      function I(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      const N = ["duration", "bounce"],
        z = ["stiffness", "damping", "mass"];
      function H(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function Y(t) {
        var { from: e = 0, to: n = 1, restSpeed: r = 2, restDelta: i } = t,
          o = j(t, ["from", "to", "restSpeed", "restDelta"]);
        const a = { done: !1, value: e };
        let {
            stiffness: s,
            damping: u,
            mass: l,
            velocity: c,
            duration: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!H(t, z) && H(t, N)) {
              const n = U(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })),
                (e.isResolvedFromDuration = !0);
            }
            return e;
          })(o),
          v = W,
          f = W;
        function h() {
          const t = c ? -c / 1e3 : 0,
            r = n - e,
            o = u / (2 * Math.sqrt(s * l)),
            a = Math.sqrt(s / l) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, 0.4)), o < 1)
          ) {
            const e = I(a, o);
            (v = (i) => {
              const s = Math.exp(-o * a * i);
              return (
                n -
                s *
                  (((t + o * a * r) / e) * Math.sin(e * i) +
                    r * Math.cos(e * i))
              );
            }),
              (f = (n) => {
                const i = Math.exp(-o * a * n);
                return (
                  o *
                    a *
                    i *
                    ((Math.sin(e * n) * (t + o * a * r)) / e +
                      r * Math.cos(e * n)) -
                  i *
                    (Math.cos(e * n) * (t + o * a * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === o)
            v = (e) => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(o * o - 1);
            v = (i) => {
              const s = Math.exp(-o * a * i),
                u = Math.min(e * i, 300);
              return (
                n -
                (s * ((t + o * a * r) * Math.sinh(u) + e * r * Math.cosh(u))) /
                  e
              );
            };
          }
        }
        return (
          h(),
          {
            next: (t) => {
              const e = v(t);
              if (p) a.done = t >= d;
              else {
                const o = 1e3 * f(t),
                  s = Math.abs(o) <= r,
                  u = Math.abs(n - e) <= i;
                a.done = s && u;
              }
              return (a.value = a.done ? n : e), a;
            },
            flipTarget: () => {
              (c = -c), ([e, n] = [n, e]), h();
            },
          }
        );
      }
      Y.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e;
      const W = (t) => 0,
        X = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        Z = (t, e) => (n) => Math.max(Math.min(n, e), t),
        G = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        q = /(-)?([\d]*\.?[\d])+/g,
        $ =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        _ =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function K(t) {
        return "string" === typeof t;
      }
      const J = {
          test: (t) => "number" === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        Q = Object.assign(Object.assign({}, J), { transform: Z(0, 1) }),
        tt = Object.assign(Object.assign({}, J), { default: 1 }),
        et = (t, e) => (n) =>
          Boolean(
            (K(n) && _.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        nt = (t, e, n) => (r) => {
          if (!K(r)) return r;
          const [i, o, a, s] = r.match(q);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        rt = Z(0, 255),
        it = Object.assign(Object.assign({}, J), {
          transform: (t) => Math.round(rt(t)),
        }),
        ot = {
          test: et("rgb", "red"),
          parse: nt("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            it.transform(t) +
            ", " +
            it.transform(e) +
            ", " +
            it.transform(n) +
            ", " +
            G(Q.transform(r)) +
            ")",
        };
      const at = {
          test: et("#"),
          parse: function (t) {
            let e = "",
              n = "",
              r = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (i = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (i = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: ot.transform,
        },
        st = (t) => ({
          test: (e) => K(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        ut = st("deg"),
        lt = st("%"),
        ct = st("px"),
        dt = st("vh"),
        pt = st("vw"),
        vt = Object.assign(Object.assign({}, lt), {
          parse: (t) => lt.parse(t) / 100,
          transform: (t) => lt.transform(100 * t),
        }),
        ft = {
          test: et("hsl", "hue"),
          parse: nt("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            lt.transform(G(e)) +
            ", " +
            lt.transform(G(n)) +
            ", " +
            G(Q.transform(r)) +
            ")",
        };
      function ht(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function mt({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let i = 0,
          o = 0,
          a = 0;
        if ((e /= 100)) {
          const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r;
          (i = ht(s, r, t + 1 / 3)),
            (o = ht(s, r, t)),
            (a = ht(s, r, t - 1 / 3));
        } else i = o = a = n;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * a),
          alpha: r,
        };
      }
      const yt = (t, e, n) => {
          const r = t * t,
            i = e * e;
          return Math.sqrt(Math.max(0, n * (i - r) + r));
        },
        gt = [at, ot, ft],
        xt = (t) => gt.find((e) => e.test(t)),
        bt = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        Pt = (t, e) => {
          let n = xt(t),
            r = xt(e);
          bt(t), bt(e);
          let i = n.parse(t),
            o = r.parse(e);
          n === ft && ((i = mt(i)), (n = ot)),
            r === ft && ((o = mt(o)), (r = ot));
          const a = Object.assign({}, i);
          return (t) => {
            for (const e in a) "alpha" !== e && (a[e] = yt(i[e], o[e], t));
            return (a.alpha = V(i.alpha, o.alpha, t)), n.transform(a);
          };
        },
        Et = {
          test: (t) => ot.test(t) || at.test(t) || ft.test(t),
          parse: (t) =>
            ot.test(t) ? ot.parse(t) : ft.test(t) ? ft.parse(t) : at.parse(t),
          transform: (t) =>
            K(t)
              ? t
              : t.hasOwnProperty("red")
              ? ot.transform(t)
              : ft.transform(t),
        },
        Tt = "${c}",
        wt = "${n}";
      function St(t) {
        "number" === typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const r = t.match($);
        r &&
          ((n = r.length), (t = t.replace($, Tt)), e.push(...r.map(Et.parse)));
        const i = t.match(q);
        return (
          i && ((t = t.replace(q, wt)), e.push(...i.map(J.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function At(t) {
        return St(t).values;
      }
      function Vt(t) {
        const { values: e, numColors: n, tokenised: r } = St(t),
          i = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < i; r++)
            e = e.replace(
              r < n ? Tt : wt,
              r < n ? Et.transform(t[r]) : G(t[r])
            );
          return e;
        };
      }
      const Ct = (t) => ("number" === typeof t ? 0 : t);
      const Rt = {
          test: function (t) {
            var e, n, r, i;
            return (
              isNaN(t) &&
              K(t) &&
              (null !==
                (n =
                  null === (e = t.match(q)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = t.match($)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: At,
          createTransformer: Vt,
          getAnimatableNone: function (t) {
            const e = At(t);
            return Vt(t)(e.map(Ct));
          },
        },
        Mt = (t) => "number" === typeof t,
        Lt = (t, e) => (n) => e(t(n)),
        Dt = (...t) => t.reduce(Lt);
      function kt(t, e) {
        return Mt(t) ? (n) => V(t, e, n) : Et.test(t) ? Pt(t, e) : Bt(t, e);
      }
      const Ot = (t, e) => {
          const n = [...t],
            r = n.length,
            i = t.map((t, n) => kt(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        jt = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = kt(t[i], e[i]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        };
      function Ft(t) {
        const e = Rt.parse(t),
          n = e.length;
        let r = 0,
          i = 0,
          o = 0;
        for (let a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? o++ : i++;
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o };
      }
      const Bt = (t, e) => {
          const n = Rt.createTransformer(e),
            r = Ft(t),
            i = Ft(e);
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? Dt(Ot(r.parsed, i.parsed), n)
            : (n) => `${n > 0 ? e : t}`;
        },
        Ut = (t, e) => (n) => V(t, e, n);
      function It(t, e, n) {
        const r = [],
          i =
            n ||
            ("number" === typeof (o = t[0])
              ? Ut
              : "string" === typeof o
              ? Et.test(o)
                ? Pt
                : Bt
              : Array.isArray(o)
              ? Ot
              : "object" === typeof o
              ? jt
              : void 0);
        var o;
        const a = t.length - 1;
        for (let s = 0; s < a; s++) {
          let n = i(t[s], t[s + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[s] : e;
            n = Dt(t, n);
          }
          r.push(n);
        }
        return r;
      }
      function Nt(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
        const o = t.length;
        e.length,
          !r || !Array.isArray(r) || r.length,
          t[0] > t[o - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        const a = It(e, r, i),
          s =
            2 === o
              ? (function ([t, e], [n]) {
                  return (r) => n(X(t, e, r));
                })(t, a)
              : (function (t, e) {
                  const n = t.length,
                    r = n - 1;
                  return (i) => {
                    let o = 0,
                      a = !1;
                    if (
                      (i <= t[0]
                        ? (a = !0)
                        : i >= t[r] && ((o = r - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > i || e === r); e++);
                      o = e - 1;
                    }
                    const s = X(t[o], t[o + 1], i);
                    return e[o](s);
                  };
                })(t, a);
        return n ? (e) => s(F(t[0], t[o - 1], e)) : s;
      }
      const zt = (t) => (e) => 1 - t(1 - e),
        Ht = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Yt = (t) => (e) => e * e * ((t + 1) * e - t),
        Wt = (t) => t,
        Xt = ((Zt = 2), (t) => Math.pow(t, Zt));
      var Zt;
      const Gt = zt(Xt),
        qt = Ht(Xt),
        $t = (t) => 1 - Math.sin(Math.acos(t)),
        _t = zt($t),
        Kt = Ht(_t),
        Jt = Yt(1.525),
        Qt = zt(Jt),
        te = Ht(Jt),
        ee = ((t) => {
          const e = Yt(t);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(1.525),
        ne = (t) => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        re = zt(ne);
      function ie(t, e) {
        return t.map(() => e || qt).splice(0, t.length - 1);
      }
      function oe({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: i = 300,
      }) {
        const o = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (function (t, e) {
            return t.map((t) => t * e);
          })(
            r && r.length === a.length
              ? r
              : (function (t) {
                  const e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(a),
            i
          );
        function u() {
          return Nt(s, a, { ease: Array.isArray(n) ? n : ie(a, n) });
        }
        let l = u();
        return {
          next: (t) => ((o.value = l(t)), (o.done = t >= i), o),
          flipTarget: () => {
            a.reverse(), (l = u());
          },
        };
      }
      const ae = {
        keyframes: oe,
        spring: Y,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: i = 0.5,
          modifyTarget: o,
        }) {
          const a = { done: !1, value: e };
          let s = n * t;
          const u = e + s,
            l = void 0 === o ? u : o(u);
          return (
            l !== u && (s = l - e),
            {
              next: (t) => {
                const e = -s * Math.exp(-t / r);
                return (
                  (a.done = !(e > i || e < -i)),
                  (a.value = a.done ? l : l + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      function se(t, e, n = 0) {
        return t - e - n;
      }
      const ue = (t) => {
        const e = ({ delta: e }) => t(e);
        return { start: () => A.ZP.update(e, !0), stop: () => A.qY.update(e) };
      };
      function le(t) {
        var e,
          n,
          {
            from: r,
            autoplay: i = !0,
            driver: o = ue,
            elapsed: a = 0,
            repeat: s = 0,
            repeatType: u = "loop",
            repeatDelay: l = 0,
            onPlay: c,
            onStop: d,
            onComplete: p,
            onRepeat: v,
            onUpdate: f,
          } = t,
          h = j(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let m,
          y,
          g,
          { to: x } = h,
          b = 0,
          P = h.duration,
          E = !1,
          T = !0;
        const w = (function (t) {
          if (Array.isArray(t.to)) return oe;
          if (ae[t.type]) return ae[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
            ? oe
            : e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            ? Y
            : oe;
        })(h);
        (null === (n = (e = w).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, r, x)) &&
          ((g = Nt([0, 100], [r, x], { clamp: !1 })), (r = 0), (x = 100));
        const S = w(Object.assign(Object.assign({}, h), { from: r, to: x }));
        function A() {
          b++,
            "reverse" === u
              ? ((T = b % 2 === 0),
                (a = (function (t, e, n = 0, r = !0) {
                  return r ? se(e + -t, e, n) : e - (t - e) + n;
                })(a, P, l, T)))
              : ((a = se(a, P, l)), "mirror" === u && S.flipTarget()),
            (E = !1),
            v && v();
        }
        function V(t) {
          if ((T || (t = -t), (a += t), !E)) {
            const t = S.next(Math.max(0, a));
            (y = t.value), g && (y = g(y)), (E = T ? t.done : a <= 0);
          }
          null === f || void 0 === f || f(y),
            E &&
              (0 === b && ((null !== P && void 0 !== P) || (P = a)),
              b < s
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(a, P, l, T) && A()
                : (m.stop(), p && p()));
        }
        return (
          i && (null === c || void 0 === c || c(), (m = o(V)), m.start()),
          {
            stop: () => {
              null === d || void 0 === d || d(), m.stop();
            },
          }
        );
      }
      var ce = function (t) {
        return 1e3 * t;
      };
      const de = (t, e) => 1 - 3 * e + 3 * t,
        pe = (t, e) => 3 * e - 6 * t,
        ve = (t) => 3 * t,
        fe = (t, e, n) => ((de(e, n) * t + pe(e, n)) * t + ve(e)) * t,
        he = (t, e, n) => 3 * de(e, n) * t * t + 2 * pe(e, n) * t + ve(e);
      const me = 0.1;
      function ye(t, e, n, r) {
        if (t === e && n === r) return Wt;
        const i = new Float32Array(11);
        for (let a = 0; a < 11; ++a) i[a] = fe(a * me, t, n);
        function o(e) {
          let r = 0,
            o = 1;
          for (; 10 !== o && i[o] <= e; ++o) r += me;
          --o;
          const a = r + ((e - i[o]) / (i[o + 1] - i[o])) * me,
            s = he(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (let i = 0; i < 8; ++i) {
                  const i = he(e, n, r);
                  if (0 === i) return e;
                  e -= (fe(e, n, r) - t) / i;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, i) {
                let o,
                  a,
                  s = 0;
                do {
                  (a = e + (n - e) / 2),
                    (o = fe(a, r, i) - t),
                    o > 0 ? (n = a) : (e = a);
                } while (Math.abs(o) > 1e-7 && ++s < 10);
                return a;
              })(e, r, r + me, t, n);
        }
        return (t) => (0 === t || 1 === t ? t : fe(o(t), e, r));
      }
      var ge = {
          linear: Wt,
          easeIn: Xt,
          easeInOut: qt,
          easeOut: Gt,
          circIn: $t,
          circInOut: Kt,
          circOut: _t,
          backIn: Jt,
          backInOut: te,
          backOut: Qt,
          anticipate: ee,
          bounceIn: re,
          bounceInOut: (t) =>
            t < 0.5 ? 0.5 * (1 - ne(1 - 2 * t)) : 0.5 * ne(2 * t - 1) + 0.5,
          bounceOut: ne,
        },
        xe = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = (0, r.CR)(t, 4);
            return ye(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t
            ? ("Invalid easing type '".concat(t, "'"), ge[t])
            : t;
        },
        be = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !Rt.test(e) || e.startsWith("url(")))
          );
        },
        Pe = function (t) {
          return Array.isArray(t);
        },
        Ee = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Te = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        we = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Se = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        Ae = {
          x: Ee,
          y: Ee,
          z: Ee,
          rotate: Ee,
          rotateX: Ee,
          rotateY: Ee,
          rotateZ: Ee,
          scaleX: Te,
          scaleY: Te,
          scale: Te,
          opacity: we,
          backgroundColor: we,
          color: we,
          default: Te,
        };
      const Ve = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Ce(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(q) || [];
        if (!r) return t;
        const i = n.replace(r, "");
        let o = Ve.has(e) ? 1 : 0;
        return r !== n && (o *= 100), e + "(" + o + i + ")";
      }
      const Re = /([a-z-]*)\(.*?\)/g,
        Me = Object.assign(Object.assign({}, Rt), {
          getAnimatableNone: (t) => {
            const e = t.match(Re);
            return e ? e.map(Ce).join(" ") : t;
          },
        });
      var Le = (0, r.pi)((0, r.pi)({}, J), { transform: Math.round }),
        De = {
          borderWidth: ct,
          borderTopWidth: ct,
          borderRightWidth: ct,
          borderBottomWidth: ct,
          borderLeftWidth: ct,
          borderRadius: ct,
          radius: ct,
          borderTopLeftRadius: ct,
          borderTopRightRadius: ct,
          borderBottomRightRadius: ct,
          borderBottomLeftRadius: ct,
          width: ct,
          maxWidth: ct,
          height: ct,
          maxHeight: ct,
          size: ct,
          top: ct,
          right: ct,
          bottom: ct,
          left: ct,
          padding: ct,
          paddingTop: ct,
          paddingRight: ct,
          paddingBottom: ct,
          paddingLeft: ct,
          margin: ct,
          marginTop: ct,
          marginRight: ct,
          marginBottom: ct,
          marginLeft: ct,
          rotate: ut,
          rotateX: ut,
          rotateY: ut,
          rotateZ: ut,
          scale: tt,
          scaleX: tt,
          scaleY: tt,
          scaleZ: tt,
          skew: ut,
          skewX: ut,
          skewY: ut,
          distance: ct,
          translateX: ct,
          translateY: ct,
          translateZ: ct,
          x: ct,
          y: ct,
          z: ct,
          perspective: ct,
          transformPerspective: ct,
          opacity: Q,
          originX: vt,
          originY: vt,
          originZ: ct,
          zIndex: Le,
          fillOpacity: Q,
          strokeOpacity: Q,
          numOctaves: Le,
        },
        ke = (0, r.pi)((0, r.pi)({}, De), {
          color: Et,
          backgroundColor: Et,
          outlineColor: Et,
          fill: Et,
          stroke: Et,
          borderColor: Et,
          borderTopColor: Et,
          borderRightColor: Et,
          borderBottomColor: Et,
          borderLeftColor: Et,
          filter: Me,
          WebkitFilter: Me,
        }),
        Oe = function (t) {
          return ke[t];
        };
      function je(t, e) {
        var n,
          r = Oe(t);
        return (
          r !== Me && (r = Rt),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      var Fe = !1,
        Be = function (t) {
          return Pe(t) ? t[t.length - 1] || 0 : t;
        };
      function Ue(t) {
        var e = t.ease,
          n = t.times,
          i = t.yoyo,
          o = t.flip,
          a = t.loop,
          s = (0, r._T)(t, ["ease", "times", "yoyo", "flip", "loop"]),
          u = (0, r.pi)({}, s);
        return (
          n && (u.offset = n),
          s.duration && (u.duration = ce(s.duration)),
          s.repeatDelay && (u.repeatDelay = ce(s.repeatDelay)),
          e &&
            (u.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map(xe)
              : xe(e)),
          "tween" === s.type && (u.type = "keyframes"),
          (i || a || o) &&
            (!0,
            i
              ? (u.repeatType = "reverse")
              : a
              ? (u.repeatType = "loop")
              : o && (u.repeatType = "mirror"),
            (u.repeat = a || i || o || s.repeat)),
          "spring" !== s.type && (u.type = "keyframes"),
          u
        );
      }
      function Ie(t, e, n) {
        var i;
        return (
          Array.isArray(e.to) &&
            ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, r.ev)([], (0, r.CR)(t.to), !1)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = (0, r._T)(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = (0, r.pi)(
              (0, r.pi)({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = Pe(e) ? Se : Ae[t] || Ae.default),
                  (0, r.pi)({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          (0, r.pi)((0, r.pi)({}, e), Ue(t))
        );
      }
      function Ne(t, e, n, i, o) {
        var a,
          s = Ye(i, t),
          u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
          l = be(t, n);
        "none" === u && l && "string" === typeof n
          ? (u = je(t, n))
          : ze(u) && "string" === typeof n
          ? (u = He(n))
          : !Array.isArray(n) && ze(n) && "string" === typeof u && (n = He(u));
        var c = be(t, u);
        return (
          "You are trying to animate "
            .concat(t, ' from "')
            .concat(u, '" to "')
            .concat(n, '". ')
            .concat(
              u,
              " is not an animatable value - to enable this animation set "
            )
            .concat(u, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          c && l && !1 !== s.type
            ? function () {
                var i = {
                  from: u,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: o,
                  onUpdate: function (t) {
                    return e.set(t);
                  },
                };
                return "inertia" === s.type || "decay" === s.type
                  ? (function ({
                      from: t = 0,
                      velocity: e = 0,
                      min: n,
                      max: r,
                      power: i = 0.8,
                      timeConstant: o = 750,
                      bounceStiffness: a = 500,
                      bounceDamping: s = 10,
                      restDelta: u = 1,
                      modifyTarget: l,
                      driver: c,
                      onUpdate: d,
                      onComplete: p,
                      onStop: v,
                    }) {
                      let f;
                      function h(t) {
                        return (
                          (void 0 !== n && t < n) || (void 0 !== r && t > r)
                        );
                      }
                      function m(t) {
                        return void 0 === n
                          ? r
                          : void 0 === r || Math.abs(n - t) < Math.abs(r - t)
                          ? n
                          : r;
                      }
                      function y(t) {
                        null === f || void 0 === f || f.stop(),
                          (f = le(
                            Object.assign(Object.assign({}, t), {
                              driver: c,
                              onUpdate: (e) => {
                                var n;
                                null === d || void 0 === d || d(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: p,
                              onStop: v,
                            })
                          ));
                      }
                      function g(t) {
                        y(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: a,
                              damping: s,
                              restDelta: u,
                            },
                            t
                          )
                        );
                      }
                      if (h(t)) g({ from: t, velocity: e, to: m(t) });
                      else {
                        let r = i * e + t;
                        "undefined" !== typeof l && (r = l(r));
                        const a = m(r),
                          s = a === n ? -1 : 1;
                        let c, d;
                        const p = (t) => {
                          (c = d),
                            (d = t),
                            (e = C(t - c, (0, A.$B)().delta)),
                            ((1 === s && t > a) || (-1 === s && t < a)) &&
                              g({ from: t, to: a, velocity: e });
                        };
                        y({
                          type: "decay",
                          from: t,
                          velocity: e,
                          timeConstant: o,
                          power: i,
                          restDelta: u,
                          modifyTarget: l,
                          onUpdate: h(r) ? p : void 0,
                        });
                      }
                      return {
                        stop: () =>
                          null === f || void 0 === f ? void 0 : f.stop(),
                      };
                    })((0, r.pi)((0, r.pi)({}, i), s))
                  : le(
                      (0, r.pi)((0, r.pi)({}, Ie(s, i, t)), {
                        onUpdate: function (t) {
                          var e;
                          i.onUpdate(t),
                            null === (e = s.onUpdate) ||
                              void 0 === e ||
                              e.call(s, t);
                        },
                        onComplete: function () {
                          var t;
                          i.onComplete(),
                            null === (t = s.onComplete) ||
                              void 0 === t ||
                              t.call(s);
                        },
                      })
                    );
              }
            : function () {
                var t,
                  r,
                  i = Be(n);
                return (
                  e.set(i),
                  o(),
                  null ===
                    (t = null === s || void 0 === s ? void 0 : s.onUpdate) ||
                    void 0 === t ||
                    t.call(s, i),
                  null ===
                    (r = null === s || void 0 === s ? void 0 : s.onComplete) ||
                    void 0 === r ||
                    r.call(s),
                  { stop: function () {} }
                );
              }
        );
      }
      function ze(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function He(t) {
        return "number" === typeof t ? 0 : je("", t);
      }
      function Ye(t, e) {
        return t[e] || t.default || t;
      }
      function We(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          Fe && (r = { type: !1 }),
          e.start(function (i) {
            var o,
              a,
              s = Ne(t, e, n, r, i),
              u = (function (t, e) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (Ye(t, e) || {}).delay) && void 0 !== n
                      ? n
                      : t.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, t),
              l = function () {
                return (a = s());
              };
            return (
              u ? (o = setTimeout(l, ce(u))) : l(),
              function () {
                clearTimeout(o), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      var Xe = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Ze = Xe.length;
      function Ge(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var qe = _e(0, 0.5, _t),
        $e = _e(0.5, 0.95, Wt);
      function _e(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(X(t, e, r));
        };
      }
      function Ke(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function Je(t, e) {
        Ke(t.x, e.x), Ke(t.y, e.y);
      }
      function Qe(t) {
        return void 0 === t || 1 === t;
      }
      function tn(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !Qe(e) || !Qe(n) || !Qe(r);
      }
      function en(t) {
        return (
          tn(t) ||
          nn(t.x) ||
          nn(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function nn(t) {
        return t && "0%" !== t;
      }
      function rn(t, e, n) {
        return n + e * (t - n);
      }
      function on(t, e, n, r, i) {
        return void 0 !== i && (t = rn(t, i, r)), rn(t, n, r) + e;
      }
      function an(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = on(t.min, e, n, r, i)),
          (t.max = on(t.max, e, n, r, i));
      }
      function sn(t, e) {
        var n = e.x,
          r = e.y;
        an(t.x, n.translate, n.scale, n.originPoint),
          an(t.y, r.translate, r.scale, r.originPoint);
      }
      function un(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function ln(t, e, n) {
        var i = (0, r.CR)(n, 3),
          o = i[0],
          a = i[1],
          s = i[2],
          u = void 0 !== e[s] ? e[s] : 0.5,
          l = V(t.min, t.max, u);
        an(t, e[o], e[a], l, e.scale);
      }
      var cn = ["x", "scaleX", "originX"],
        dn = ["y", "scaleY", "originY"];
      function pn(t, e) {
        ln(t.x, e, cn), ln(t.y, e, dn);
      }
      const vn = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        fn = (t) => vn(t) && t.hasOwnProperty("z"),
        hn = (t, e) => Math.abs(t - e);
      function mn(t, e) {
        if (Mt(t) && Mt(e)) return hn(t, e);
        if (vn(t) && vn(e)) {
          const n = hn(t.x, e.x),
            r = hn(t.y, e.y),
            i = fn(t) && fn(e) ? hn(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      function yn(t) {
        return t.max - t.min;
      }
      function gn(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), mn(t, e) < n
        );
      }
      function xn(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = V(e.min, e.max, t.origin)),
          (t.scale = yn(n) / yn(e)),
          (gn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = V(n.min, n.max, t.origin) - t.originPoint),
          (gn(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function bn(t, e, n, r) {
        xn(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          xn(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function Pn(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + yn(e));
      }
      function En(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + yn(e));
      }
      function Tn(t, e, n) {
        En(t.x, e.x, n.x), En(t.y, e.y, n.y);
      }
      function wn(t, e, n, r, i) {
        return (
          (t = rn((t -= e), 1 / n, r)), void 0 !== i && (t = rn(t, 1 / i, r)), t
        );
      }
      function Sn(t, e, n, i, o) {
        var a = (0, r.CR)(n, 3),
          s = a[0],
          u = a[1],
          l = a[2];
        !(function (t, e, n, r, i, o, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = t),
            void 0 === a && (a = t),
            lt.test(e) &&
              ((e = parseFloat(e)), (e = V(a.min, a.max, e / 100) - a.min)),
            "number" === typeof e)
          ) {
            var s = V(o.min, o.max, r);
            t === o && (s -= e),
              (t.min = wn(t.min, e, n, s, i)),
              (t.max = wn(t.max, e, n, s, i));
          }
        })(t, e[s], e[u], e[l], e.scale, i, o);
      }
      var An = ["x", "scaleX", "originX"],
        Vn = ["y", "scaleY", "originY"];
      function Cn(t, e, n, r) {
        Sn(
          t.x,
          e,
          An,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          Sn(
            t.y,
            e,
            Vn,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function Rn(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function Mn(t) {
        return Rn(t.x) && Rn(t.y);
      }
      function Ln(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var Dn = (function () {
          function t() {
            this.members = [];
          }
          return (
            (t.prototype.add = function (t) {
              R(this.members, t), t.scheduleRender();
            }),
            (t.prototype.remove = function (t) {
              if (
                (M(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead)
              ) {
                var e = this.members[this.members.length - 1];
                e && this.promote(e);
              }
            }),
            (t.prototype.relegate = function (t) {
              var e,
                n = this.members.findIndex(function (e) {
                  return t === e;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var i = this.members[r];
                if (!1 !== i.isPresent) {
                  e = i;
                  break;
                }
              }
              return !!e && (this.promote(e), !0);
            }),
            (t.prototype.promote = function (t, e) {
              var n,
                r = this.lead;
              t !== r &&
                ((this.prevLead = r),
                (this.lead = t),
                t.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = r),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (t.snapshot.isShared = !0)),
                  (null === (n = t.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && r.hide()));
            }),
            (t.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (t) {
                var e, n, r, i, o;
                null === (n = (e = t.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e),
                  null ===
                    (o =
                      null === (r = t.resumingFrom) || void 0 === r
                        ? void 0
                        : (i = r.options).onExitComplete) ||
                    void 0 === o ||
                    o.call(i);
              });
            }),
            (t.prototype.scheduleRender = function () {
              this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1);
              });
            }),
            (t.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            t
          );
        })(),
        kn = {};
      function On(t, e, n) {
        var r = t.x.translate / e.x,
          i = t.y.translate / e.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (n) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (o += "rotate(".concat(a, "deg) ")),
            s && (o += "rotateX(".concat(s, "deg) ")),
            u && (o += "rotateY(".concat(u, "deg) "));
        }
        return "translate3d(0px, 0px, 0) scale(1, 1)" ===
          (o += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")"))
          ? "none"
          : o;
      }
      function jn(t) {
        return [t("x"), t("y")];
      }
      var Fn = ["", "X", "Y", "Z"],
        Bn = ["transformPerspective", "x", "y", "z"];
      function Un(t, e) {
        return Bn.indexOf(t) - Bn.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return Fn.forEach(function (e) {
          return Bn.push(t + e);
        });
      });
      var In = new Set(Bn);
      function Nn(t) {
        return In.has(t);
      }
      var zn = new Set(["originX", "originY", "originZ"]);
      function Hn(t) {
        return zn.has(t);
      }
      var Yn = function (t, e) {
          return t.depth - e.depth;
        },
        Wn = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              R(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              M(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(Yn),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      function Xn(t) {
        var e,
          n = O(t) ? t.get() : t;
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        );
      }
      var Zn = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function Gn(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          i = t.measureScroll,
          o = t.resetTransform;
        return (function () {
          function t(t, e, i) {
            var o = this;
            void 0 === e && (e = {}),
              void 0 === i && (i = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                o.nodes.forEach(tr), o.nodes.forEach(er);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = i ? i.root || i : this),
              (this.path = i
                ? (0, r.ev)((0, r.ev)([], (0, r.CR)(i.path), !1), [i], !1)
                : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var a = 0; a < this.path.length; a++)
              this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Wn());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) || this.eventHandlers.set(t, new L()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var i = this.eventHandlers.get(t);
              null === i ||
                void 0 === i ||
                i.notify.apply(i, (0, r.ev)([], (0, r.CR)(e), !1));
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, n) {
              var i,
                o = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout,
                  l = a.visualElement;
                if (
                  (l && !l.getInstance() && l.mount(t),
                  this.root.nodes.add(this),
                  null === (i = this.parent) ||
                    void 0 === i ||
                    i.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (u || s) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var c,
                    d = function () {
                      return (o.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (o.root.updateBlockedByResize = !0),
                      clearTimeout(c),
                      (c = setTimeout(d, 250)),
                      Zn.hasAnimatedSinceResize &&
                        ((Zn.hasAnimatedSinceResize = !1), o.nodes.forEach(Qn));
                  });
                }
                s && this.root.registerSharedNode(s, this),
                  !1 !== this.options.animate &&
                    l &&
                    (s || u) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        i,
                        a,
                        s,
                        u = t.delta,
                        c = t.hasLayoutChanged,
                        d = t.hasRelativeTargetChanged,
                        p = t.layout;
                      if (o.isTreeAnimationBlocked())
                        return (
                          (o.target = void 0), void (o.relativeTarget = void 0)
                        );
                      var v =
                          null !==
                            (n =
                              null !== (e = o.options.transition) &&
                              void 0 !== e
                                ? e
                                : l.getDefaultTransition()) && void 0 !== n
                            ? n
                            : sr,
                        f = l.getProps().onLayoutAnimationComplete,
                        h = !o.targetLayout || !Ln(o.targetLayout, p) || d,
                        m = !c && d;
                      (null === (i = o.resumeFrom) || void 0 === i
                        ? void 0
                        : i.instance) ||
                      m ||
                      (c && (h || !o.currentAnimation))
                        ? (o.resumeFrom &&
                            ((o.resumingFrom = o.resumeFrom),
                            (o.resumingFrom.resumingFrom = void 0)),
                          o.setAnimationOrigin(u, m),
                          o.startAnimation(
                            (0, r.pi)((0, r.pi)({}, Ye(v, "layout")), {
                              onComplete: f,
                            })
                          ))
                        : o.isLead() &&
                          (null === (s = (a = o.options).onExitComplete) ||
                            void 0 === s ||
                            s.call(a)),
                        (o.targetLayout = p);
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                A.qY.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(nr));
            }),
            (t.prototype.willUpdate = function (t) {
              var e, n, r;
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var i = 0; i < this.path.length; i++) {
                  var o = this.path[i];
                  (o.shouldResetTransform = !0), o.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var l =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === l || void 0 === l
                      ? void 0
                      : l(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(Kn)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(ur),
                  this.potentialNodes.clear()),
                this.nodes.forEach(Jn),
                this.nodes.forEach(qn),
                this.nodes.forEach($n),
                this.clearAllSnapshots(),
                A.iW.update(),
                A.iW.preRender(),
                A.iW.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(_n), this.sharedNodes.forEach(rr);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              A.ZP.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              A.ZP.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                cr(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (t.prototype.updateLayout = function () {
              var t;
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll();
                  }
                var n = this.measure();
                cr(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    );
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = i(this.instance));
            }),
            (t.prototype.resetTransform = function () {
              var t;
              if (o) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !Mn(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  i =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  a = i !== this.prevTransformTemplateValue;
                e &&
                  (n || en(this.latestValues) || a) &&
                  (o(this.instance, i),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (un(e.x, n.x), un(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Je(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options;
                r !== this.root &&
                  i &&
                  o.layoutScroll &&
                  (un(e.x, i.x), un(e.y, i.y));
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Je(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !e &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  pn(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  en(i.latestValues) && pn(n, i.latestValues);
              }
              return en(this.latestValues) && pn(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Je(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && en(i.latestValues)) {
                  tn(i.latestValues) && i.updateSnapshot();
                  var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Je(o, i.measure()),
                    Cn(
                      n,
                      i.latestValues,
                      null === (e = i.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      o
                    );
                }
              }
              return en(this.latestValues) && Cn(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = (0, r.pi)(
                (0, r.pi)((0, r.pi)({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              );
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                i = this.options,
                o = i.layout,
                a = i.layoutId;
              this.layout &&
                (o || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    Tn(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    Je(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target)
                    ? ((e = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      Pn(e.x, n.x, r.x),
                      Pn(e.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : Je(this.target, this.layout.actual),
                      sn(this.target, this.targetDelta))
                    : Je(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      Tn(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      Je(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !en(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                Je(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    var i, o;
                    void 0 === r && (r = !1);
                    var a = n.length;
                    if (a) {
                      var s, u;
                      e.x = e.y = 1;
                      for (var l = 0; l < a; l++)
                        (u = (s = n[l]).projectionDelta),
                          "contents" !==
                            (null ===
                              (o =
                                null === (i = s.instance) || void 0 === i
                                  ? void 0
                                  : i.style) || void 0 === o
                              ? void 0
                              : o.display) &&
                            (r &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              pn(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            u &&
                              ((e.x *= u.x.scale),
                              (e.y *= u.y.scale),
                              sn(t, u)),
                            r && en(s.latestValues) && pn(t, s.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== i
                  );
                var o = i.target;
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  bn(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = On(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === u &&
                      this.treeScale.x === a &&
                      this.treeScale.y === s) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                i = this;
              void 0 === e && (e = !1);
              var o = this.snapshot,
                a =
                  (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                s = (0, r.pi)({}, this.latestValues),
                u = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                c = null === o || void 0 === o ? void 0 : o.isShared,
                d =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                p = Boolean(
                  c &&
                    !d &&
                    !0 === this.options.crossfade &&
                    !this.path.some(ar)
                );
              (this.mixTargetDelta = function (e) {
                var n,
                  r,
                  o,
                  v,
                  f,
                  h = e / 1e3;
                ir(u.x, t.x, h),
                  ir(u.y, t.y, h),
                  i.setTargetDelta(u),
                  i.relativeTarget &&
                    i.relativeTargetOrigin &&
                    i.layout &&
                    (null === (n = i.relativeParent) || void 0 === n
                      ? void 0
                      : n.layout) &&
                    (Tn(l, i.layout.actual, i.relativeParent.layout.actual),
                    (r = i.relativeTarget),
                    (o = i.relativeTargetOrigin),
                    (v = l),
                    (f = h),
                    or(r.x, o.x, v.x, f),
                    or(r.y, o.y, v.y, f)),
                  c &&
                    ((i.animationValues = s),
                    (function (t, e, n, r, i, o) {
                      var a, s, u, l;
                      i
                        ? ((t.opacity = V(
                            0,
                            null !== (a = n.opacity) && void 0 !== a ? a : 1,
                            qe(r)
                          )),
                          (t.opacityExit = V(
                            null !== (s = e.opacity) && void 0 !== s ? s : 1,
                            0,
                            $e(r)
                          )))
                        : o &&
                          (t.opacity = V(
                            null !== (u = e.opacity) && void 0 !== u ? u : 1,
                            null !== (l = n.opacity) && void 0 !== l ? l : 1,
                            r
                          ));
                      for (var c = 0; c < Ze; c++) {
                        var d = "border".concat(Xe[c], "Radius"),
                          p = Ge(e, d),
                          v = Ge(n, d);
                        if (
                          (void 0 !== p || void 0 !== v) &&
                          (p || (p = 0),
                          v || (v = 0),
                          "number" === typeof p && "number" === typeof v)
                        ) {
                          var f = Math.max(V(p, v, r), 0);
                          t[d] = f;
                        }
                      }
                      (e.rotate || n.rotate) &&
                        (t.rotate = V(e.rotate || 0, n.rotate || 0, r));
                    })(s, a, i.latestValues, h, p, d)),
                  i.root.scheduleUpdateProjection(),
                  i.scheduleRender();
              }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                i = this;
              null === (e = this.currentAnimation) || void 0 === e || e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (A.qY.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = A.ZP.update(function () {
                  (Zn.hasAnimatedSinceResize = !0),
                    (i.currentAnimation = (function (t, e, n) {
                      void 0 === n && (n = {});
                      var r = O(t) ? t : k(t);
                      return (
                        We("", r, e, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      (0, r.pi)((0, r.pi)({}, t), {
                        onUpdate: function (e) {
                          var n;
                          i.mixTargetDelta(e),
                            null === (n = t.onUpdate) ||
                              void 0 === n ||
                              n.call(t, e);
                        },
                        onComplete: function () {
                          var e;
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            i.completeAnimation();
                        },
                      })
                    )),
                    i.resumingFrom &&
                      (i.resumingFrom.currentAnimation = i.currentAnimation),
                    (i.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                i = t.latestValues;
              e &&
                n &&
                r &&
                (Je(e, n),
                pn(e, i),
                bn(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                ));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, i;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new Dn()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, e),
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                i = e.preserveFollowOpacity,
                o = this.getStack();
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < Fn.length; r++) {
                  var i = "rotate" + Fn[r];
                  t.getStaticValue(i) &&
                    ((e = !0),
                    (n[i] = t.getStaticValue(i)),
                    t.setStaticValue(i, 0));
                }
                if (e) {
                  for (var i in (null === t || void 0 === t || t.syncRender(),
                  n))
                    t.setStaticValue(i, n[i]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              var e, n, r, i, o, a;
              void 0 === t && (t = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = Xn(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                );
              var l = this.getLead();
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = Xn(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !en(this.latestValues) &&
                    ((c.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var d = l.animationValues || l.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = On(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                u && (s.transform = u(d, s.transform));
              var p = this.projectionDelta,
                v = p.x,
                f = p.y;
              for (var h in ((s.transformOrigin = ""
                .concat(100 * v.origin, "% ")
                .concat(100 * f.origin, "% 0")),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !==
                          (i =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (o = d.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              kn))
                if (void 0 !== d[h]) {
                  var m = kn[h],
                    y = m.correct,
                    g = m.applyTo,
                    x = y(d[h], l);
                  if (g) for (var b = g.length, P = 0; P < b; P++) s[g[P]] = x;
                  else s[h] = x;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    l === this ? Xn(t.pointerEvents) || "" : "none"),
                s
              );
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(Kn),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function qn(t) {
        t.updateLayout();
      }
      function $n(t) {
        var e,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType
            ? jn(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = yn(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              jn(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = yn(s[t]);
                e.max = e.min + n;
              });
          var l = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          bn(l, s, o.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          o.isShared
            ? bn(c, t.applyTransform(u, !0), o.measured)
            : bn(c, s, o.layout);
          var d = !Mn(l),
            p = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var v = t.relativeParent,
              f = v.snapshot,
              h = v.layout;
            if (f && h) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Tn(m, o.layout, f.layout);
              var y = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Tn(y, s, h.actual), Ln(m, y) || (p = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: o,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: p,
          });
        } else
          t.isLead() &&
            (null === (i = (r = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        t.options.transition = void 0;
      }
      function _n(t) {
        t.clearSnapshot();
      }
      function Kn(t) {
        t.clearMeasurements();
      }
      function Jn(t) {
        t.resetTransform();
      }
      function Qn(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function tr(t) {
        t.resolveTargetDelta();
      }
      function er(t) {
        t.calcProjection();
      }
      function nr(t) {
        t.resetRotation();
      }
      function rr(t) {
        t.removeLeadSnapshot();
      }
      function ir(t, e, n) {
        (t.translate = V(e.translate, 0, n)),
          (t.scale = V(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function or(t, e, n, r) {
        (t.min = V(e.min, n.min, r)), (t.max = V(e.max, n.max, r));
      }
      function ar(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var sr = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function ur(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break;
          }
        var i = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        i && t.mount(i, !0);
      }
      function lr(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function cr(t) {
        lr(t.x), lr(t.y);
      }
      var dr = 1;
      var pr = n(5364),
        vr = (0, i.createContext)({});
      var fr = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          (0, r.ZT)(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n);
          }),
          (e.prototype.render = function () {
            return this.props.children;
          }),
          e
        );
      })(i.Component);
      function hr(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          o = t.projectionNodeConstructor,
          p = t.useRender,
          f = t.useVisualState,
          y = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t)
                null !== t[e] &&
                  ("projectionNodeConstructor" === e
                    ? (a.projectionNodeConstructor = t[e])
                    : (a[e].Component = t[e]));
            })(e),
          (0, i.forwardRef)(function (t, e) {
            var g = (function (t) {
              var e,
                n = t.layoutId,
                r =
                  null === (e = (0, i.useContext)(pr.p)) || void 0 === e
                    ? void 0
                    : e.id;
              return r && void 0 !== n ? r + "-" + n : n;
            })(t);
            t = (0, r.pi)((0, r.pi)({}, t), { layoutId: g });
            var x = (0, i.useContext)(c),
              b = null,
              P = T(t),
              E = x.isStatic
                ? void 0
                : (0, S.h)(function () {
                    if (Zn.hasEverUpdated) return dr++;
                  }),
              w = f(t, x.isStatic);
            return (
              !x.isStatic &&
                v &&
                ((P.visualElement = h(y, w, (0, r.pi)((0, r.pi)({}, x), t), n)),
                (function (t, e, n, r) {
                  var o,
                    a = e.layoutId,
                    s = e.layout,
                    u = e.drag,
                    l = e.dragConstraints,
                    c = e.layoutScroll,
                    d = (0, i.useContext)(vr);
                  r &&
                    n &&
                    !(null === n || void 0 === n ? void 0 : n.projection) &&
                    ((n.projection = new r(
                      t,
                      n.getLatestValues(),
                      null === (o = n.parent) || void 0 === o
                        ? void 0
                        : o.projection
                    )),
                    n.projection.setOptions({
                      layoutId: a,
                      layout: s,
                      alwaysMeasureLayout: Boolean(u) || (l && m(l)),
                      visualElement: n,
                      scheduleRender: function () {
                        return n.scheduleRender();
                      },
                      animationType: "string" === typeof s ? s : "both",
                      initialPromotionConfig: d,
                      layoutScroll: c,
                    }));
                })(E, t, P.visualElement, o || a.projectionNodeConstructor),
                (b = (function (t, e, n) {
                  var o = [];
                  if (((0, i.useContext)(s), !e)) return null;
                  for (var c = 0; c < l; c++) {
                    var d = u[c],
                      p = a[d],
                      v = p.isEnabled,
                      f = p.Component;
                    v(t) &&
                      f &&
                      o.push(
                        i.createElement(
                          f,
                          (0, r.pi)({ key: d }, t, { visualElement: e })
                        )
                      );
                  }
                  return o;
                })(t, P.visualElement))),
              i.createElement(
                fr,
                {
                  visualElement: P.visualElement,
                  props: (0, r.pi)((0, r.pi)({}, x), t),
                },
                b,
                i.createElement(
                  d.Provider,
                  { value: P },
                  p(
                    y,
                    t,
                    E,
                    (function (t, e, n) {
                      return (0, i.useCallback)(
                        function (r) {
                          var i;
                          r &&
                            (null === (i = t.mount) ||
                              void 0 === i ||
                              i.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : m(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(w, P.visualElement, e),
                    w,
                    x.isStatic,
                    P.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function mr(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), hr(t(e, n));
        }
        if ("undefined" === typeof Proxy) return e;
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var yr = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function gr(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(yr.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      function xr(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          Nn(t) ||
          Hn(t) ||
          ((n || void 0 !== r) && (!!kn[t] || "opacity" === t))
        );
      }
      var br = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function Pr(t) {
        return t.startsWith("--");
      }
      var Er = function (t, e) {
        return e && "number" === typeof t ? e.transform(t) : t;
      };
      function Tr(t, e, n, r) {
        var i,
          o = t.style,
          a = t.vars,
          s = t.transform,
          u = t.transformKeys,
          l = t.transformOrigin;
        u.length = 0;
        var c = !1,
          d = !1,
          p = !0;
        for (var v in e) {
          var f = e[v];
          if (Pr(v)) a[v] = f;
          else {
            var h = De[v],
              m = Er(f, h);
            if (Nn(v)) {
              if (((c = !0), (s[v] = m), u.push(v), !p)) continue;
              f !== (null !== (i = h.default) && void 0 !== i ? i : 0) &&
                (p = !1);
            } else Hn(v) ? ((l[v] = m), (d = !0)) : (o[v] = m);
          }
        }
        c
          ? (o.transform = (function (t, e, n, r) {
              var i = t.transform,
                o = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = void 0 === a || a,
                u = e.allowTransformNone,
                l = void 0 === u || u,
                c = "";
              o.sort(Un);
              for (var d = !1, p = o.length, v = 0; v < p; v++) {
                var f = o[v];
                (c += "".concat(br[f] || f, "(").concat(i[f], ") ")),
                  "z" === f && (d = !0);
              }
              return (
                !d && s ? (c += "translateZ(0)") : (c = c.trim()),
                r ? (c = r(i, n ? "" : c)) : l && n && (c = "none"),
                c
              );
            })(t, n, p, r))
          : r && (o.transform = r({}, "")),
          d &&
            (o.transformOrigin = (function (t) {
              var e = t.originX,
                n = void 0 === e ? "50%" : e,
                r = t.originY,
                i = void 0 === r ? "50%" : r,
                o = t.originZ,
                a = void 0 === o ? 0 : o;
              return "".concat(n, " ").concat(i, " ").concat(a);
            })(l));
      }
      var wr = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Sr(t, e, n) {
        for (var r in e) O(e[r]) || xr(r, n) || (t[r] = e[r]);
      }
      function Ar(t, e, n) {
        var o = {};
        return (
          Sr(o, t.style || {}, t),
          Object.assign(
            o,
            (function (t, e, n) {
              var o = t.transformTemplate;
              return (0, i.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  Tr(t, e, { enableHardwareAcceleration: !n }, o);
                  var i = t.vars,
                    a = t.style;
                  return (0, r.pi)((0, r.pi)({}, i), a);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (o = t.transformValues(o)),
          o
        );
      }
      function Vr(t, e, n) {
        var r = {},
          i = Ar(t, e, n);
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (r.style = i),
          r
        );
      }
      var Cr = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function Rr(t) {
        return Cr.has(t);
      }
      var Mr = function (t) {
        return !Rr(t);
      };
      try {
        var Lr = require("@emotion/is-prop-valid").default;
        Mr = function (t) {
          return t.startsWith("on") ? !Rr(t) : Lr(t);
        };
      } catch (ra) {}
      function Dr(t, e, n) {
        return "string" === typeof t ? t : ct.transform(e + n * t);
      }
      var kr = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Or = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function jr(t, e, n, i) {
        var o = e.attrX,
          a = e.attrY,
          s = e.originX,
          u = e.originY,
          l = e.pathLength,
          c = e.pathSpacing,
          d = void 0 === c ? 1 : c,
          p = e.pathOffset,
          v = void 0 === p ? 0 : p;
        Tr(
          t,
          (0, r._T)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          i
        ),
          (t.attrs = t.style),
          (t.style = {});
        var f = t.attrs,
          h = t.style,
          m = t.dimensions;
        f.transform && (m && (h.transform = f.transform), delete f.transform),
          m &&
            (void 0 !== s || void 0 !== u || h.transform) &&
            (h.transformOrigin = (function (t, e, n) {
              var r = Dr(e, t.x, t.width),
                i = Dr(n, t.y, t.height);
              return "".concat(r, " ").concat(i);
            })(m, void 0 !== s ? s : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== o && (f.x = o),
          void 0 !== a && (f.y = a),
          void 0 !== l &&
            (function (t, e, n, r, i) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                (t.pathLength = 1);
              var o = i ? kr : Or;
              t[o.offset] = ct.transform(-r);
              var a = ct.transform(e),
                s = ct.transform(n);
              t[o.array] = "".concat(a, " ").concat(s);
            })(f, l, d, v, !1);
      }
      var Fr = function () {
        return (0, r.pi)(
          (0, r.pi)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Br(t, e) {
        var n = (0, i.useMemo)(
          function () {
            var n = Fr();
            return (
              jr(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              (0, r.pi)((0, r.pi)({}, n.attrs), {
                style: (0, r.pi)({}, n.style),
              })
            );
          },
          [e]
        );
        if (t.style) {
          var o = {};
          Sr(o, t.style, t), (n.style = (0, r.pi)((0, r.pi)({}, o), n.style));
        }
        return n;
      }
      function Ur(t) {
        void 0 === t && (t = !1);
        return function (e, n, o, a, s, u) {
          var l = s.latestValues,
            c = (gr(e) ? Br : Vr)(n, l, u),
            d = (function (t, e, n) {
              var r = {};
              for (var i in t)
                (Mr(i) ||
                  (!0 === n && Rr(i)) ||
                  (!e && !Rr(i)) ||
                  (t.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = t[i]);
              return r;
            })(n, "string" === typeof e, t),
            p = (0, r.pi)((0, r.pi)((0, r.pi)({}, d), c), { ref: a });
          return o && (p["data-projection-id"] = o), (0, i.createElement)(e, p);
        };
      }
      var Ir = /([a-z])([A-Z])/g,
        Nr = function (t) {
          return t.replace(Ir, "$1-$2").toLowerCase();
        };
      function zr(t, e, n, r) {
        var i = e.style,
          o = e.vars;
        for (var a in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(a, o[a]);
      }
      var Hr = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function Yr(t, e) {
        for (var n in (zr(t, e), e.attrs))
          t.setAttribute(Hr.has(n) ? n : Nr(n), e.attrs[n]);
      }
      function Wr(t) {
        var e = t.style,
          n = {};
        for (var r in e) (O(e[r]) || xr(r, t)) && (n[r] = e[r]);
        return n;
      }
      function Xr(t) {
        var e = Wr(t);
        for (var n in t) {
          if (O(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function Zr(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      function Gr(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          a = t.onMount,
          s = { latestValues: $r(e, n, r, i), renderState: o() };
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s);
            }),
          s
        );
      }
      var qr = function (t) {
        return function (e, n) {
          var r = (0, i.useContext)(d),
            o = (0, i.useContext)(p.O);
          return n
            ? Gr(t, e, r, o)
            : (0, S.h)(function () {
                return Gr(t, e, r, o);
              });
        };
      };
      function $r(t, e, n, i) {
        var o = {},
          a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          s = i(t);
        for (var u in s) o[u] = Xn(s[u]);
        var l = t.initial,
          c = t.animate,
          d = P(t),
          p = E(t);
        e &&
          p &&
          !d &&
          !1 !== t.inherit &&
          ((null !== l && void 0 !== l) || (l = e.initial),
          (null !== c && void 0 !== c) || (c = e.animate));
        var v = a || !1 === l,
          f = v ? c : l;
        f &&
          "boolean" !== typeof f &&
          !Zr(f) &&
          (Array.isArray(f) ? f : [f]).forEach(function (e) {
            var n = x(t, e);
            if (n) {
              var i = n.transitionEnd;
              n.transition;
              var a = (0, r._T)(n, ["transitionEnd", "transition"]);
              for (var s in a) {
                var u = a[s];
                if (Array.isArray(u)) u = u[v ? u.length - 1 : 0];
                null !== u && (o[s] = u);
              }
              for (var s in i) o[s] = i[s];
            }
          });
        return o;
      }
      var _r,
        Kr = {
          useVisualState: qr({
            scrapeMotionValuesFromProps: Xr,
            createRenderState: Fr,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (o) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              jr(r, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                Yr(e, r);
            },
          }),
        },
        Jr = {
          useVisualState: qr({
            scrapeMotionValuesFromProps: Wr,
            createRenderState: wr,
          }),
        };
      function Qr(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r);
          }
        );
      }
      function ti(t, e, n, r) {
        (0, i.useEffect)(
          function () {
            var i = t.current;
            if (n && i) return Qr(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function ei(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function ni(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(_r || (_r = {}));
      var ri = { pageX: 0, pageY: 0 };
      function ii(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || ri;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function oi(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function ai(t, e) {
        return (
          void 0 === e && (e = "page"), { point: ni(t) ? ii(t, e) : oi(t, e) }
        );
      }
      var si = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, ai(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        ui = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        li = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function ci(t) {
        return v && null === window.onpointerdown
          ? t
          : v && null === window.ontouchstart
          ? li[t]
          : v && null === window.onmousedown
          ? ui[t]
          : t;
      }
      function di(t, e, n, r) {
        return Qr(t, ci(e), si(n, "pointerdown" === e), r);
      }
      function pi(t, e, n, r) {
        return ti(t, ci(e), n && si(n, "pointerdown" === e), r);
      }
      function vi(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var fi = vi("dragHorizontal"),
        hi = vi("dragVertical");
      function mi(t) {
        var e = !1;
        if ("y" === t) e = hi();
        else if ("x" === t) e = fi();
        else {
          var n = fi(),
            r = hi();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function yi() {
        var t = mi(!0);
        return !t || (t(), !1);
      }
      function gi(t, e, n) {
        return function (r, i) {
          var o;
          ei(r) &&
            !yi() &&
            (null === (o = t.animationState) ||
              void 0 === o ||
              o.setActive(_r.Hover, e),
            null === n || void 0 === n || n(r, i));
        };
      }
      var xi = function (t, e) {
          return !!e && (t === e || xi(t, e.parentElement));
        },
        bi = n(5411);
      var Pi = new WeakMap(),
        Ei = new WeakMap(),
        Ti = function (t) {
          var e;
          null === (e = Pi.get(t.target)) || void 0 === e || e(t);
        },
        wi = function (t) {
          t.forEach(Ti);
        };
      function Si(t, e, n) {
        var i = (function (t) {
          var e = t.root,
            n = (0, r._T)(t, ["root"]),
            i = e || document;
          Ei.has(i) || Ei.set(i, {});
          var o = Ei.get(i),
            a = JSON.stringify(n);
          return (
            o[a] ||
              (o[a] = new IntersectionObserver(wi, (0, r.pi)({ root: e }, n))),
            o[a]
          );
        })(e);
        return (
          Pi.set(t, n),
          i.observe(t),
          function () {
            Pi.delete(t), i.unobserve(t);
          }
        );
      }
      var Ai = { some: 0, all: 1 };
      function Vi(t, e, n, r) {
        var o = r.root,
          a = r.margin,
          s = r.amount,
          u = void 0 === s ? "some" : s,
          l = r.once;
        (0, i.useEffect)(
          function () {
            if (t) {
              var r = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: a,
                threshold: "number" === typeof u ? u : Ai[u],
              };
              return Si(n.getInstance(), r, function (t) {
                var r,
                  i = t.isIntersecting;
                if (
                  e.isInView !== i &&
                  ((e.isInView = i), !l || i || !e.hasEnteredView)
                ) {
                  i && (e.hasEnteredView = !0),
                    null === (r = n.animationState) ||
                      void 0 === r ||
                      r.setActive(_r.InView, i);
                  var o = n.getProps(),
                    a = i ? o.onViewportEnter : o.onViewportLeave;
                  null === a || void 0 === a || a(t);
                }
              });
            }
          },
          [t, o, a, u]
        );
      }
      function Ci(t, e, n) {
        (0, i.useEffect)(
          function () {
            t &&
              requestAnimationFrame(function () {
                var t;
                e.hasEnteredView = !0;
                var r = n.getProps().onViewportEnter;
                null === r || void 0 === r || r(null),
                  null === (t = n.animationState) ||
                    void 0 === t ||
                    t.setActive(_r.InView, !0);
              });
          },
          [t]
        );
      }
      var Ri = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        Mi = {
          inView: Ri(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              o = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, i.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(n || r || o);
            s.once && u.current.hasEnteredView && (l = !1),
              ("undefined" === typeof IntersectionObserver ? Ci : Vi)(
                l,
                u.current,
                e,
                s
              );
          }),
          tap: Ri(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(!1),
              l = (0, i.useRef)(null);
            function c() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null);
            }
            function d() {
              var t;
              return (
                c(),
                (u.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(_r.Tap, !1),
                !yi()
              );
            }
            function p(t, n) {
              d() &&
                (xi(a.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n));
            }
            function v(t, e) {
              d() && (null === r || void 0 === r || r(t, e));
            }
            pi(
              a,
              "pointerdown",
              s
                ? function (t, e) {
                    var r;
                    c(),
                      u.current ||
                        ((u.current = !0),
                        (l.current = Dt(
                          di(window, "pointerup", p),
                          di(window, "pointercancel", v)
                        )),
                        null === (r = a.animationState) ||
                          void 0 === r ||
                          r.setActive(_r.Tap, !0),
                        null === n || void 0 === n || n(t, e));
                  }
                : void 0
            ),
              (0, bi.z)(c);
          }),
          focus: Ri(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            ti(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(_r.Focus, !0);
                  }
                : void 0
            ),
              ti(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(_r.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Ri(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement;
            pi(i, "pointerenter", e || r ? gi(i, !0, e) : void 0),
              pi(i, "pointerleave", n || r ? gi(i, !1, n) : void 0);
          }),
        };
      function Li() {
        var t = (0, i.useContext)(p.O);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          o = Oi();
        (0, i.useEffect)(function () {
          return r(o);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(o);
              },
            ]
          : [!0];
      }
      var Di = 0,
        ki = function () {
          return Di++;
        },
        Oi = function () {
          return (0, S.h)(ki);
        };
      function ji(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var Fi = function (t) {
          return /^0[^.\s]+$/.test(t);
        },
        Bi = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        Ui = [
          J,
          ct,
          lt,
          ut,
          pt,
          dt,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        Ii = function (t) {
          return Ui.find(Bi(t));
        },
        Ni = (0, r.ev)((0, r.ev)([], (0, r.CR)(Ui), !1), [Et, Rt], !1),
        zi = function (t) {
          return Ni.find(Bi(t));
        };
      function Hi(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, k(n));
      }
      function Yi(t, e) {
        var n = b(t, e),
          i = n ? t.makeTargetAnimatable(n, !1) : {},
          o = i.transitionEnd,
          a = void 0 === o ? {} : o;
        i.transition;
        var s = (0, r._T)(i, ["transitionEnd", "transition"]);
        for (var u in (s = (0, r.pi)((0, r.pi)({}, s), a))) {
          Hi(t, u, Be(s[u]));
        }
      }
      function Wi(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function Xi(t, e, n) {
        var i;
        void 0 === n && (n = {});
        var o = b(t, e, n.custom),
          a = (o || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (s = n.transitionOverride);
        var u = o
            ? function () {
                return Zi(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          l = (
            null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size
          )
            ? function (i) {
                void 0 === i && (i = 0);
                var o = s.delayChildren,
                  a = void 0 === o ? 0 : o,
                  u = s.staggerChildren,
                  l = s.staggerDirection;
                return (function (t, e, n, i, o, a) {
                  void 0 === n && (n = 0);
                  void 0 === i && (i = 0);
                  void 0 === o && (o = 1);
                  var s = [],
                    u = (t.variantChildren.size - 1) * i,
                    l =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * i;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), u - t * i;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(Gi)
                      .forEach(function (t, i) {
                        s.push(
                          Xi(
                            t,
                            e,
                            (0, r.pi)((0, r.pi)({}, a), { delay: n + l(i) })
                          ).then(function () {
                            return t.notifyAnimationComplete(e);
                          })
                        );
                      }),
                    Promise.all(s)
                  );
                })(t, e, a + i, u, l, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = s.when;
        if (c) {
          var d = (0, r.CR)("beforeChildren" === c ? [u, l] : [l, u], 2),
            p = d[0],
            v = d[1];
          return p().then(v);
        }
        return Promise.all([u(), l(n.delay)]);
      }
      function Zi(t, e, n) {
        var i,
          o = void 0 === n ? {} : n,
          a = o.delay,
          s = void 0 === a ? 0 : a,
          u = o.transitionOverride,
          l = o.type,
          c = t.makeTargetAnimatable(e),
          d = c.transition,
          p = void 0 === d ? t.getDefaultTransition() : d,
          v = c.transitionEnd,
          f = (0, r._T)(c, ["transition", "transitionEnd"]);
        u && (p = u);
        var h = [],
          m =
            l &&
            (null === (i = t.animationState) || void 0 === i
              ? void 0
              : i.getState()[l]);
        for (var y in f) {
          var g = t.getValue(y),
            x = f[y];
          if (!(!g || void 0 === x || (m && qi(m, y)))) {
            var b = We(y, g, x, (0, r.pi)({ delay: s }, p));
            h.push(b);
          }
        }
        return Promise.all(h).then(function () {
          v && Yi(t, v);
        });
      }
      function Gi(t, e) {
        return t.sortNodePosition(e);
      }
      function qi(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          i = n.hasOwnProperty(e) && !0 !== r[e];
        return (r[e] = !1), i;
      }
      var $i = [
          _r.Animate,
          _r.InView,
          _r.Focus,
          _r.Hover,
          _r.Tap,
          _r.Drag,
          _r.Exit,
        ],
        _i = (0, r.ev)([], (0, r.CR)($i), !1).reverse(),
        Ki = $i.length;
      function Ji(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(e),
                  Array.isArray(e))
                ) {
                  var i = e.map(function (e) {
                    return Xi(t, e, n);
                  });
                  r = Promise.all(i);
                } else if ("string" === typeof e) r = Xi(t, e, n);
                else {
                  var o = "function" === typeof e ? b(t, e, n.custom) : e;
                  r = Zi(t, o, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function Qi(t) {
        var e = Ji(t),
          n = (function () {
            var t;
            return (
              ((t = {})[_r.Animate] = to(!0)),
              (t[_r.InView] = to()),
              (t[_r.Hover] = to()),
              (t[_r.Tap] = to()),
              (t[_r.Drag] = to()),
              (t[_r.Focus] = to()),
              (t[_r.Exit] = to()),
              t
            );
          })(),
          i = {},
          o = !0,
          a = function (e, n) {
            var i = b(t, n);
            if (i) {
              i.transition;
              var o = i.transitionEnd,
                a = (0, r._T)(i, ["transition", "transitionEnd"]);
              e = (0, r.pi)((0, r.pi)((0, r.pi)({}, e), a), o);
            }
            return e;
          };
        function s(s, u) {
          for (
            var l,
              c = t.getProps(),
              d = t.getVariantContext(!0) || {},
              p = [],
              v = new Set(),
              f = {},
              h = 1 / 0,
              m = function (e) {
                var i = _i[e],
                  m = n[i],
                  x = null !== (l = c[i]) && void 0 !== l ? l : d[i],
                  b = g(x),
                  P = i === u ? m.isActive : null;
                !1 === P && (h = e);
                var E = x === d[i] && x !== c[i] && b;
                if (
                  (E && o && t.manuallyAnimateOnMount && (E = !1),
                  (m.protectedKeys = (0, r.pi)({}, f)),
                  (!m.isActive && null === P) ||
                    (!x && !m.prevProp) ||
                    Zr(x) ||
                    "boolean" === typeof x)
                )
                  return "continue";
                var T = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (y(e)) return !ji(e, t);
                    return !1;
                  })(m.prevProp, x),
                  w = T || (i === u && m.isActive && !E && b) || (e > h && b),
                  S = Array.isArray(x) ? x : [x],
                  A = S.reduce(a, {});
                !1 === P && (A = {});
                var V = m.prevResolvedValues,
                  C = void 0 === V ? {} : V,
                  R = (0, r.pi)((0, r.pi)({}, C), A),
                  M = function (t) {
                    (w = !0), v.delete(t), (m.needsAnimating[t] = !0);
                  };
                for (var L in R) {
                  var D = A[L],
                    k = C[L];
                  f.hasOwnProperty(L) ||
                    (D !== k
                      ? Pe(D) && Pe(k)
                        ? !ji(D, k) || T
                          ? M(L)
                          : (m.protectedKeys[L] = !0)
                        : void 0 !== D
                        ? M(L)
                        : v.add(L)
                      : void 0 !== D && v.has(L)
                      ? M(L)
                      : (m.protectedKeys[L] = !0));
                }
                (m.prevProp = x),
                  (m.prevResolvedValues = A),
                  m.isActive && (f = (0, r.pi)((0, r.pi)({}, f), A)),
                  o && t.blockInitialAnimation && (w = !1),
                  w &&
                    !E &&
                    p.push.apply(
                      p,
                      (0, r.ev)(
                        [],
                        (0, r.CR)(
                          S.map(function (t) {
                            return {
                              animation: t,
                              options: (0, r.pi)({ type: i }, s),
                            };
                          })
                        ),
                        !1
                      )
                    );
              },
              x = 0;
            x < Ki;
            x++
          )
            m(x);
          if (((i = (0, r.pi)({}, f)), v.size)) {
            var b = {};
            v.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (b[e] = n);
            }),
              p.push({ animation: b });
          }
          var P = Boolean(p.length);
          return (
            o && !1 === c.initial && !t.manuallyAnimateOnMount && (P = !1),
            (o = !1),
            P ? e(p) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== i[t];
          },
          animateChanges: s,
          setActive: function (e, r, i) {
            var o;
            return n[e].isActive === r
              ? Promise.resolve()
              : (null === (o = t.variantChildren) ||
                  void 0 === o ||
                  o.forEach(function (t) {
                    var n;
                    return null === (n = t.animationState) || void 0 === n
                      ? void 0
                      : n.setActive(e, r);
                  }),
                (n[e].isActive = r),
                s(i, e));
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function to(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var eo = {
          animation: Ri(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = Qi(e)),
              Zr(n) &&
                (0, i.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: Ri(function (t) {
            var e = t.custom,
              n = t.visualElement,
              o = (0, r.CR)(Li(), 2),
              a = o[0],
              s = o[1],
              u = (0, i.useContext)(p.O);
            (0, i.useEffect)(
              function () {
                var t, r;
                n.isPresent = a;
                var i =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(_r.Exit, !a, {
                        custom:
                          null !==
                            (r =
                              null === u || void 0 === u ? void 0 : u.custom) &&
                          void 0 !== r
                            ? r
                            : e,
                      });
                !a && (null === i || void 0 === i || i.then(s));
              },
              [a]
            );
          }),
        },
        no = (function () {
          function t(t, e, n) {
            var i = this,
              o = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (i.lastMoveEvent && i.lastMoveEventInfo) {
                  var t = oo(i.lastMoveEventInfo, i.history),
                    e = null !== i.startEvent,
                    n = mn(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var o = t.point,
                      a = (0, A.$B)().timestamp;
                    i.history.push(
                      (0, r.pi)((0, r.pi)({}, o), { timestamp: a })
                    );
                    var s = i.handlers,
                      u = s.onStart,
                      l = s.onMove;
                    e ||
                      (u && u(i.lastMoveEvent, t),
                      (i.startEvent = i.lastMoveEvent)),
                      l && l(i.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, e) {
                (i.lastMoveEvent = t),
                  (i.lastMoveEventInfo = ro(e, i.transformPagePoint)),
                  ei(t) && 0 === t.buttons
                    ? i.handlePointerUp(t, e)
                    : A.ZP.update(i.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, e) {
                i.end();
                var n = i.handlers,
                  r = n.onEnd,
                  o = n.onSessionEnd,
                  a = oo(ro(e, i.transformPagePoint), i.history);
                i.startEvent && r && r(t, a), o && o(t, a);
              }),
              !(ni(t) && t.touches.length > 1))
            ) {
              (this.handlers = e), (this.transformPagePoint = o);
              var a = ro(ai(t), this.transformPagePoint),
                s = a.point,
                u = (0, A.$B)().timestamp;
              this.history = [(0, r.pi)((0, r.pi)({}, s), { timestamp: u })];
              var l = e.onSessionStart;
              l && l(t, oo(a, this.history)),
                (this.removeListeners = Dt(
                  di(window, "pointermove", this.handlePointerMove),
                  di(window, "pointerup", this.handlePointerUp),
                  di(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                A.qY.update(this.updatePoint);
            }),
            t
          );
        })();
      function ro(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function io(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function oo(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: io(n, so(e)),
          offset: io(n, ao(e)),
          velocity: uo(e, 0.1),
        };
      }
      function ao(t) {
        return t[0];
      }
      function so(t) {
        return t[t.length - 1];
      }
      function uo(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, i = so(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > ce(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function lo(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function co(t, e) {
        var n,
          i = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((i = (n = (0, r.CR)([o, i], 2))[0]), (o = n[1])),
          { min: i, max: o }
        );
      }
      var po = 0.35;
      function vo(t, e, n) {
        return { min: fo(t, e), max: fo(t, n) };
      }
      function fo(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      function ho(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function mo(t, e) {
        return ho(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var yo = new WeakMap(),
        go = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                i = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new no(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(),
                        i && n.snapToCursor(ai(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var r,
                        i = n.getProps(),
                        o = i.drag,
                        a = i.dragPropagation,
                        s = i.onDragStart;
                      (!o ||
                        a ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = mi(o)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        jn(function (t) {
                          var e,
                            r,
                            i = n.getAxisMotionValue(t).get() || 0;
                          if (lt.test(i)) {
                            var o =
                              null ===
                                (r =
                                  null === (e = n.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t];
                            if (o) i = yn(o) * (parseFloat(i) / 100);
                          }
                          n.originPoint[t] = i;
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(_r.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        o = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        s = r.onDrag;
                      if (i || n.openGlobalLock) {
                        var u = e.offset;
                        if (o && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (t, e) {
                              void 0 === e && (e = 10);
                              var n = null;
                              Math.abs(t.y) > e
                                ? (n = "y")
                                : Math.abs(t.x) > e && (n = "x");
                              return n;
                            })(u)),
                            void (
                              null !== n.currentDirection &&
                              (null === a ||
                                void 0 === a ||
                                a(n.currentDirection))
                            )
                          );
                        n.updateAxis("x", e.point, u),
                          n.updateAxis("y", e.point, u),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null === i || void 0 === i || i(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(_r.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag;
              if (n && xo(t, r, this.currentDirection)) {
                var i = this.getAxisMotionValue(t),
                  o = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  (o = (function (t, e, n) {
                    var r = e.min,
                      i = e.max;
                    return (
                      void 0 !== r && t < r
                        ? (t = n ? V(r, t, n.min) : Math.max(t, r))
                        : void 0 !== i &&
                          t > i &&
                          (t = n ? V(i, t, n.max) : Math.min(t, i)),
                      t
                    );
                  })(o, this.constraints[t], this.elastic[t])),
                  i.set(o);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t = this,
                e = this.getProps(),
                n = e.dragConstraints,
                r = e.dragElastic,
                i = (this.visualElement.projection || {}).layout,
                o = this.constraints;
              n && m(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !i) &&
                    (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        i = e.bottom,
                        o = e.right;
                      return { x: lo(t.x, r, o), y: lo(t.y, n, i) };
                    })(i.actual, n)),
                (this.elastic = (function (t) {
                  return (
                    void 0 === t && (t = po),
                    !1 === t ? (t = 0) : !0 === t && (t = po),
                    { x: vo(t, "left", "right"), y: vo(t, "top", "bottom") }
                  );
                })(r)),
                o !== this.constraints &&
                  i &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  jn(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        );
                      })(i.actual[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !m(e)) return !1;
              var r = e.current,
                i = this.visualElement.projection;
              if (!i || !i.layout) return !1;
              var o = (function (t, e, n) {
                  var r = mo(t, n),
                    i = e.scroll;
                  return i && (un(r.x, i.x), un(r.y, i.y)), r;
                })(r, i.root, this.visualElement.getTransformPagePoint()),
                a = (function (t, e) {
                  return { x: co(t.x, e.x), y: co(t.y, e.y) };
                })(i.layout.actual, o);
              if (n) {
                var s = n(
                  (function (t) {
                    var e = t.x,
                      n = t.y;
                    return {
                      top: n.min,
                      right: e.max,
                      bottom: n.max,
                      left: e.min,
                    };
                  })(a)
                );
                (this.hasMutatedConstraints = !!s), s && (a = ho(s));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                i = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = n.dragSnapToOrigin,
                l = n.onDragTransitionEnd,
                c = this.constraints || {},
                d = jn(function (n) {
                  var l;
                  if (xo(n, i, e.currentDirection)) {
                    var d =
                      null !==
                        (l = null === c || void 0 === c ? void 0 : c[n]) &&
                      void 0 !== l
                        ? l
                        : {};
                    u && (d = { min: 0, max: 0 });
                    var p = a ? 200 : 1e6,
                      v = a ? 40 : 1e7,
                      f = (0, r.pi)(
                        (0, r.pi)(
                          {
                            type: "inertia",
                            velocity: o ? t[n] : 0,
                            bounceStiffness: p,
                            bounceDamping: v,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          s
                        ),
                        d
                      );
                    return e.startAxisValueAnimation(n, f);
                  }
                });
              return Promise.all(d).then(l);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return We(t, this.getAxisMotionValue(t), 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              jn(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase(),
                i = this.visualElement.getProps()[r];
              return (
                i ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              jn(function (n) {
                if (xo(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    i = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      a = o.min,
                      s = o.max;
                    i.set(t[n] - V(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                o = this.visualElement.projection;
              if (m(i) && o && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                jn(function (t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var r = n.get();
                    a[t] = (function (t, e) {
                      var n = 0.5,
                        r = yn(t),
                        i = yn(e);
                      return (
                        i > r
                          ? (n = X(e.min, e.max - r, t.min))
                          : r > i && (n = X(t.min, t.max - i, e.min)),
                        F(0, 1, n)
                      );
                    })({ min: r, max: r }, e.constraints[t]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = o.root) || void 0 === t || t.updateScroll(),
                  o.updateLayout(),
                  this.resolveConstraints(),
                  jn(function (t) {
                    if (xo(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        i = e.constraints[t],
                        o = i.min,
                        s = i.max;
                      n.set(V(o, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              yo.set(this.visualElement, this);
              var n = di(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && e.start(t);
                  }
                ),
                r = function () {
                  m(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                i = this.visualElement.projection,
                o = i.addEventListener("measure", r);
              i &&
                !i.layout &&
                (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r();
              var a = Qr(window, "resize", function () {
                e.scalePositionWithinConstraints();
              });
              return (
                i.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (jn(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), n(), o();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = void 0 !== e && e,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                l = void 0 !== u && u,
                c = t.dragElastic,
                d = void 0 === c ? po : c,
                p = t.dragMomentum,
                v = void 0 === p || p;
              return (0, r.pi)((0, r.pi)({}, t), {
                drag: n,
                dragDirectionLock: o,
                dragPropagation: s,
                dragConstraints: l,
                dragElastic: d,
                dragMomentum: v,
              });
            }),
            t
          );
        })();
      function xo(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var bo = {
          pan: Ri(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(null),
              l = (0, i.useContext)(c).transformPagePoint,
              d = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (u.current = null), r && r(t, e);
                },
              };
            (0, i.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(d);
            }),
              pi(
                a,
                "pointerdown",
                s &&
                  function (t) {
                    u.current = new no(t, d, { transformPagePoint: l });
                  }
              ),
              (0, bi.z)(function () {
                return u.current && u.current.end();
              });
          }),
          drag: Ri(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = (0, S.h)(function () {
                return new go(n);
              });
            (0, i.useEffect)(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              (0, i.useEffect)(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          }),
        },
        Po = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var Eo = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            i = t.build,
            o = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            s = t.measureViewportBox,
            u = t.render,
            l = t.readValueFromInstance,
            c = t.removeValueFromRenderState,
            d = t.sortNodePosition,
            p = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var v = t.parent,
              f = t.props,
              h = t.presenceId,
              m = t.blockInitialAnimation,
              y = t.visualState;
            void 0 === e && (e = {});
            var x,
              b,
              T = !1,
              w = y.latestValues,
              S = y.renderState,
              V = (function () {
                var t = Po.map(function () {
                    return new L();
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear();
                      });
                    },
                    updatePropListeners: function (t) {
                      Po.forEach(function (r) {
                        var i,
                          o = "on" + r,
                          a = t[o];
                        null === (i = e[r]) || void 0 === i || i.call(e),
                          a && (e[r] = n[o](a));
                      });
                    },
                  };
                return (
                  t.forEach(function (t, e) {
                    (n["on" + Po[e]] = function (e) {
                      return t.add(e);
                    }),
                      (n["notify" + Po[e]] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n];
                        t.notify.apply(t, (0, r.ev)([], (0, r.CR)(e), !1));
                      });
                  }),
                  n
                );
              })(),
              C = new Map(),
              R = new Map(),
              M = {},
              D = (0, r.pi)({}, w);
            function j() {
              x && T && (F(), u(x, S, f.style, Y.projection));
            }
            function F() {
              i(Y, S, w, e, f);
            }
            function B() {
              V.notifyUpdate(w);
            }
            var U = p(f);
            for (var I in U) {
              var N = U[I];
              void 0 !== w[I] && O(N) && N.set(w[I], !1);
            }
            var z = P(f),
              H = E(f),
              Y = (0, r.pi)(
                (0, r.pi)(
                  {
                    treeType: n,
                    current: null,
                    depth: v ? v.depth + 1 : 0,
                    parent: v,
                    children: new Set(),
                    presenceId: h,
                    variantChildren: H ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === v || void 0 === v ? void 0 : v.isMounted()
                    ),
                    blockInitialAnimation: m,
                    isMounted: function () {
                      return Boolean(x);
                    },
                    mount: function (t) {
                      (T = !0),
                        (x = Y.current = t),
                        Y.projection && Y.projection.mount(t),
                        H &&
                          v &&
                          !z &&
                          (b =
                            null === v || void 0 === v
                              ? void 0
                              : v.addVariantChild(Y)),
                        null === v || void 0 === v || v.children.add(Y),
                        Y.setProps(f);
                    },
                    unmount: function () {
                      var t;
                      null === (t = Y.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        A.qY.update(B),
                        A.qY.render(j),
                        R.forEach(function (t) {
                          return t();
                        }),
                        null === b || void 0 === b || b(),
                        null === v || void 0 === v || v.children.delete(Y),
                        V.clearAllListeners(),
                        (x = void 0),
                        (T = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = Y.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return d && n === t.treeType
                        ? d(Y.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return H
                        ? Y
                        : null === v || void 0 === v
                        ? void 0
                        : v.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return f.layoutId;
                    },
                    getInstance: function () {
                      return x;
                    },
                    getStaticValue: function (t) {
                      return w[t];
                    },
                    setStaticValue: function (t, e) {
                      return (w[t] = e);
                    },
                    getLatestValues: function () {
                      return w;
                    },
                    setVisibility: function (t) {
                      Y.isVisible !== t &&
                        ((Y.isVisible = t), Y.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), a(Y, t, f, e);
                    },
                    measureViewportBox: function () {
                      return s(x, f);
                    },
                    addValue: function (t, e) {
                      Y.hasValue(t) && Y.removeValue(t),
                        C.set(t, e),
                        (w[t] = e.get()),
                        (function (t, e) {
                          var n = e.onChange(function (e) {
                              (w[t] = e), f.onUpdate && A.ZP.update(B, !1, !0);
                            }),
                            r = e.onRenderRequest(Y.scheduleRender);
                          R.set(t, function () {
                            n(), r();
                          });
                        })(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      C.delete(t),
                        null === (e = R.get(t)) || void 0 === e || e(),
                        R.delete(t),
                        delete w[t],
                        c(t, S);
                    },
                    hasValue: function (t) {
                      return C.has(t);
                    },
                    getValue: function (t, e) {
                      var n = C.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = k(e)), Y.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return C.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = w[t]) && void 0 !== n
                        ? n
                        : l(x, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      D[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(f, t);
                        if (void 0 !== e && !O(e)) return e;
                      }
                      return D[t];
                    },
                  },
                  V
                ),
                {
                  build: function () {
                    return F(), S;
                  },
                  scheduleRender: function () {
                    A.ZP.render(j, !1, !0);
                  },
                  syncRender: j,
                  setProps: function (t) {
                    (f = t),
                      V.updatePropListeners(t),
                      (M = (function (t, e, n) {
                        var r;
                        for (var i in e) {
                          var o = e[i],
                            a = n[i];
                          if (O(o)) t.addValue(i, o);
                          else if (O(a)) t.addValue(i, k(o));
                          else if (a !== o)
                            if (t.hasValue(i)) {
                              var s = t.getValue(i);
                              !s.hasAnimated && s.set(o);
                            } else
                              t.addValue(
                                i,
                                k(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              );
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                        return e;
                      })(Y, p(f), M));
                  },
                  getProps: function () {
                    return f;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = f.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return f.transition;
                  },
                  getTransformPagePoint: function () {
                    return f.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null === v || void 0 === v
                        ? void 0
                        : v.getVariantContext();
                    if (!z) {
                      var e =
                        (null === v || void 0 === v
                          ? void 0
                          : v.getVariantContext()) || {};
                      return void 0 !== f.initial && (e.initial = f.initial), e;
                    }
                    for (var n = {}, r = 0; r < wo; r++) {
                      var i = To[r],
                        o = f[i];
                      (g(o) || !1 === o) && (n[i] = o);
                    }
                    return n;
                  },
                }
              );
            return Y;
          };
        },
        To = (0, r.ev)(["initial"], (0, r.CR)($i), !1),
        wo = To.length;
      function So(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Ao = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Vo(t, e, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          );
        var i = (0, r.CR)(
            (function (t) {
              var e = Ao.exec(t);
              if (!e) return [,];
              var n = (0, r.CR)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = i[0],
          a = i[1];
        if (o) {
          var s = window.getComputedStyle(e).getPropertyValue(o);
          return s ? s.trim() : So(a) ? Vo(a, e, n + 1) : a;
        }
      }
      var Co,
        Ro = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Mo = function (t) {
          return Ro.has(t);
        },
        Lo = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        Do = function (t) {
          return t === J || t === ct;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Co || (Co = {}));
      var ko = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        Oo = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return ko(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? ko(a[1], t) : 0;
          };
        },
        jo = new Set(["x", "y", "z"]),
        Fo = Bn.filter(function (t) {
          return !jo.has(t);
        });
      var Bo = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              i = void 0 === r ? "0" : r,
              o = e.paddingRight,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              i = void 0 === r ? "0" : r,
              o = e.paddingBottom,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: Oo(4, 13),
          y: Oo(5, 14),
        },
        Uo = function (t, e, n, i) {
          void 0 === n && (n = {}),
            void 0 === i && (i = {}),
            (e = (0, r.pi)({}, e)),
            (i = (0, r.pi)({}, i));
          var o = Object.keys(e).filter(Mo),
            a = [],
            s = !1,
            u = [];
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r);
              if (t.hasValue(r)) {
                var l,
                  c = n[r],
                  d = Ii(c),
                  p = e[r];
                if (Pe(p)) {
                  var v = p.length,
                    f = null === p[0] ? 1 : 0;
                  (c = p[f]), (d = Ii(c));
                  for (var h = f; h < v; h++)
                    l ? Ii(p[h]) : (l = Ii(p[h])) === d || (Do(d) && Do(l));
                } else l = Ii(p);
                if (d !== l)
                  if (Do(d) && Do(l)) {
                    var m = o.get();
                    "string" === typeof m && o.set(parseFloat(m)),
                      "string" === typeof p
                        ? (e[r] = parseFloat(p))
                        : Array.isArray(p) &&
                          l === ct &&
                          (e[r] = p.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === l || void 0 === l ? void 0 : l.transform) &&
                    (0 === c || 0 === p)
                      ? 0 === c
                        ? o.set(l.transform(c))
                        : (e[r] = d.transform(p))
                      : (s ||
                          ((a = (function (t) {
                            var e = [];
                            return (
                              Fo.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (s = !0)),
                        u.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                        Lo(o, p));
              }
            }),
            u.length)
          ) {
            var l = (function (t, e, n) {
              var r = e.measureViewportBox(),
                i = e.getInstance(),
                o = getComputedStyle(i),
                a = o.display,
                s = {};
              "none" === a && e.setStaticValue("display", t.display || "block"),
                n.forEach(function (t) {
                  s[t] = Bo[t](r, o);
                }),
                e.syncRender();
              var u = e.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = e.getValue(n);
                  Lo(r, s[n]), (t[n] = Bo[n](u, o));
                }),
                t
              );
            })(e, t, u);
            return (
              a.length &&
                a.forEach(function (e) {
                  var n = (0, r.CR)(e, 2),
                    i = n[0],
                    o = n[1];
                  t.getValue(i).set(o);
                }),
              t.syncRender(),
              { target: l, transitionEnd: i }
            );
          }
          return { target: e, transitionEnd: i };
        };
      function Io(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(Mo);
        })(e)
          ? Uo(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var No = function (t, e, n, i) {
        var o = (function (t, e, n) {
          var i,
            o = (0, r._T)(e, []),
            a = t.getInstance();
          if (!(a instanceof Element)) return { target: o, transitionEnd: n };
          for (var s in (n && (n = (0, r.pi)({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (So(e)) {
              var n = Vo(e, a);
              n && t.set(n);
            }
          }),
          o)) {
            var u = o[s];
            if (So(u)) {
              var l = Vo(u, a);
              l &&
                ((o[s] = l),
                n && ((null !== (i = n[s]) && void 0 !== i) || (n[s] = u)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, i);
        return Io(t, (e = o.target), n, (i = o.transitionEnd));
      };
      var zo = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (Nn(e)) {
              var n = Oe(e);
              return (n && n.default) || 0;
            }
            var r,
              i = ((r = t), window.getComputedStyle(r));
            return (Pr(e) ? i.getPropertyValue(e) : i[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return mo(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, i) {
            var o = n.transformValues;
            void 0 === i && (i = !0);
            var a = e.transition,
              s = e.transitionEnd,
              u = (0, r._T)(e, ["transition", "transitionEnd"]),
              l = (function (t, e, n) {
                var r,
                  i,
                  o = {};
                for (var a in t)
                  o[a] =
                    null !== (r = Wi(a, e)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(a)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(u, a || {}, t);
            if ((o && (s && (s = o(s)), u && (u = o(u)), l && (l = o(l))), i)) {
              !(function (t, e, n) {
                var r,
                  i,
                  o,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  u = s.length;
                if (u)
                  for (var l = 0; l < u; l++) {
                    var c = s[l],
                      d = e[c],
                      p = null;
                    Array.isArray(d) && (p = d[0]),
                      null === p &&
                        (p =
                          null !==
                            (i =
                              null !== (r = n[c]) && void 0 !== r
                                ? r
                                : t.readValue(c)) && void 0 !== i
                            ? i
                            : e[c]),
                      void 0 !== p &&
                        null !== p &&
                        ("string" === typeof p &&
                        (/^\-?\d*\.?\d+$/.test(p) || Fi(p))
                          ? (p = parseFloat(p))
                          : !zi(p) && Rt.test(d) && (p = je(c, d)),
                        t.addValue(c, k(p)),
                        (null !== (o = (a = n)[c]) && void 0 !== o) ||
                          (a[c] = p),
                        t.setBaseTarget(c, p));
                  }
              })(t, u, l);
              var c = No(t, u, l, s);
              (s = c.transitionEnd), (u = c.target);
            }
            return (0, r.pi)({ transition: a, transitionEnd: s }, u);
          },
          scrapeMotionValuesFromProps: Wr,
          build: function (t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              Tr(e, n, r, i.transformTemplate);
          },
          render: zr,
        },
        Ho = Eo(zo),
        Yo = Eo(
          (0, r.pi)((0, r.pi)({}, zo), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return Nn(e)
                ? (null === (n = Oe(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = Hr.has(e) ? e : Nr(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: Xr,
            build: function (t, e, n, r, i) {
              jr(e, n, r, i.transformTemplate);
            },
            render: Yr,
          })
        ),
        Wo = function (t, e) {
          return gr(t)
            ? Yo(e, { enableHardwareAcceleration: !1 })
            : Ho(e, { enableHardwareAcceleration: !0 });
        };
      function Xo(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var Zo = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" === typeof t) {
              if (!ct.test(t)) return t;
              t = parseFloat(t);
            }
            var n = Xo(t, e.target.x),
              r = Xo(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Go = "_$css",
        qo = {
          correct: function (t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              i = t,
              o = t.includes("var("),
              a = [];
            o &&
              (t = t.replace(Ao, function (t) {
                return a.push(t), Go;
              }));
            var s = Rt.parse(t);
            if (s.length > 5) return i;
            var u = Rt.createTransformer(t),
              l = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              d = r.y.scale * n.y;
            (s[0 + l] /= c), (s[1 + l] /= d);
            var p = V(c, d, 0.5);
            "number" === typeof s[2 + l] && (s[2 + l] /= p),
              "number" === typeof s[3 + l] && (s[3 + l] /= p);
            var v = u(s);
            if (o) {
              var f = 0;
              v = v.replace(Go, function () {
                var t = a[f];
                return f++, t;
              });
            }
            return v;
          },
        },
        $o = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, r.ZT)(e, t),
            (e.prototype.componentDidMount = function () {
              var t,
                e = this,
                n = this.props,
                i = n.visualElement,
                o = n.layoutGroup,
                a = n.switchLayoutGroup,
                s = n.layoutId,
                u = i.projection;
              (t = _o),
                Object.assign(kn, t),
                u &&
                  ((null === o || void 0 === o ? void 0 : o.group) &&
                    o.group.add(u),
                  (null === a || void 0 === a ? void 0 : a.register) &&
                    s &&
                    a.register(u),
                  u.root.didUpdate(),
                  u.addEventListener("animationComplete", function () {
                    e.safeToRemove();
                  }),
                  u.setOptions(
                    (0, r.pi)((0, r.pi)({}, u.options), {
                      onExitComplete: function () {
                        return e.safeToRemove();
                      },
                    })
                  )),
                (Zn.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                o = n.drag,
                a = n.isPresent,
                s = i.projection;
              return s
                ? ((s.isPresent = a),
                  o || t.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        A.ZP.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                i = e.projection;
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(i),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(i));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null === t || void 0 === t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(i.Component);
      var _o = {
          borderRadius: (0, r.pi)((0, r.pi)({}, Zo), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: Zo,
          borderTopRightRadius: Zo,
          borderBottomLeftRadius: Zo,
          borderBottomRightRadius: Zo,
          boxShadow: qo,
        },
        Ko = {
          measureLayout: function (t) {
            var e = (0, r.CR)(Li(), 2),
              n = e[0],
              o = e[1],
              a = (0, i.useContext)(pr.p);
            return i.createElement(
              $o,
              (0, r.pi)({}, t, {
                layoutGroup: a,
                switchLayoutGroup: (0, i.useContext)(vr),
                isPresent: n,
                safeToRemove: o,
              })
            );
          },
        },
        Jo = Gn({
          attachResizeListener: function (t, e) {
            return (
              t.addEventListener("resize", e, { passive: !0 }),
              function () {
                return t.removeEventListener("resize", e);
              }
            );
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
        }),
        Qo = { current: void 0 },
        ta = Gn({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!Qo.current) {
              var t = new Jo(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (Qo.current = t);
            }
            return Qo.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : "none";
          },
        }),
        ea = (0, r.pi)((0, r.pi)((0, r.pi)((0, r.pi)({}, eo), Mi), bo), Ko),
        na = mr(function (t, e) {
          return (function (t, e, n, i, o) {
            var a = e.forwardMotionProps,
              s = void 0 !== a && a,
              u = gr(t) ? Kr : Jr;
            return (0,
            r.pi)((0, r.pi)({}, u), { preloadedFeatures: n, useRender: Ur(s), createVisualElement: i, projectionNodeConstructor: o, Component: t });
          })(t, e, ea, Wo, ta);
        });
    },
  },
]);
