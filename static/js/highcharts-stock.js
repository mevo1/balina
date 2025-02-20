// @ts-nocheck
/**
 * Highcharts JS v12.0.2 (2024-12-04)
 * @module highcharts/highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (t._Highcharts = e(), module.exports = t._Highcharts)
    : "function" == typeof define && define.amd
      ? define("highcharts/highcharts", [], e)
      : "object" == typeof exports
        ? (t._Highcharts = e(), exports.highcharts = t._Highcharts)
        : (t.Highcharts && t.Highcharts.error(16, !0), t.Highcharts = e());
})("undefined" == typeof window ? this : window, () => (() => {
  "use strict";
  let t, e, i, s, o, r;
  var a, n, h, l, d, c, p, u, g, f, m, x, y, b, v, k, M, w, S, A, T, C, P, O = {};
  O.d = (t, e) => {
    for (var i in e) O.o(e, i) && !O.o(t, i) && Object.defineProperty(t, i, {
      enumerable: !0,
      get: e[i]
    })
  }, O.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  var E = {};
  O.d(E, {
    default: () => uW
  }),
    function (t) {
      t.SVG_NS = "http://www.w3.org/2000/svg", t.product = "Highcharts", t.version = "12.0.2", t.win = "undefined" != typeof window ? window : {}, t.doc = t.win.document, t.svg = t.doc && t.doc.createElementNS && !!t.doc.createElementNS(t.SVG_NS, "svg").createSVGRect, t.userAgent = t.win.navigator && t.win.navigator.userAgent || "", t.isChrome = t.win.chrome, t.isFirefox = -1 !== t.userAgent.indexOf("Firefox"), t.isMS = /(edge|msie|trident)/i.test(t.userAgent) && !t.win.opera, t.isSafari = !t.isChrome && -1 !== t.userAgent.indexOf("Safari"), t.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(t.userAgent), t.isWebKit = -1 !== t.userAgent.indexOf("AppleWebKit"), t.deg2rad = 2 * Math.PI / 360, t.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], t.noop = function () { }, t.supportsPassiveEvents = function () {
        let e = !1;
        if (!t.isMS) {
          let i = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0
            }
          });
          t.win.addEventListener && t.win.removeEventListener && (t.win.addEventListener("testPassive", t.noop, i), t.win.removeEventListener("testPassive", t.noop, i))
        }
        return e
      }(), t.charts = [], t.composed = [], t.dateFormats = {}, t.seriesTypes = {}, t.symbolSizes = {}, t.chartCount = 0
    }(a || (a = {}));
  let L = a,
    {
      charts: B,
      doc: D,
      win: I
    } = L;

  function z(t, e, i, s) {
    let o = e ? "Highcharts error" : "Highcharts warning";
    32 === t && (t = `${o}: Deprecated member`);
    let r = F(t),
      a = r ? `${o} #${t}: www.highcharts.com/errors/${t}/` : t.toString();
    if (void 0 !== s) {
      let t = "";
      r && (a += "?"), J(s, function (e, i) {
        t += `- ${i}: ${e}`, r && (a += encodeURI(i) + "=" + encodeURI(e))
      }), a += t
    }
    tt(L, "displayError", {
      chart: i,
      code: t,
      message: a,
      params: s
    }, function () {
      if (e) throw Error(a);
      I.console && -1 === z.messages.indexOf(a) && console.warn(a)
    }), z.messages.push(a)
  }

  function R(t, e) {
    return parseInt(t, e || 10)
  }

  function N(t) {
    return "string" == typeof t
  }

  function W(t) {
    let e = Object.prototype.toString.call(t);
    return "[object Array]" === e || "[object Array Iterator]" === e
  }

  function G(t, e) {
    return !!t && "object" == typeof t && (!e || !W(t))
  }

  function X(t) {
    return G(t) && "number" == typeof t.nodeType
  }

  function H(t) {
    let e = t && t.constructor;
    return !!(G(t, !0) && !X(t) && e && e.name && "Object" !== e.name)
  }

  function F(t) {
    return "number" == typeof t && !isNaN(t) && t < 1 / 0 && t > -1 / 0
  }

  function Y(t) {
    return null != t
  }

  function j(t, e, i) {
    let s;
    let o = N(e) && !Y(i),
      r = (e, i) => {
        Y(e) ? t.setAttribute(i, e) : o ? (s = t.getAttribute(i)) || "class" !== i || (s = t.getAttribute(i + "Name")) : t.removeAttribute(i)
      };
    return N(e) ? r(i, e) : J(e, r), s
  }

  function U(t) {
    return W(t) ? t : [t]
  }

  function V(t, e) {
    let i;
    for (i in t || (t = {}), e) t[i] = e[i];
    return t
  }

  function _() {
    let t = arguments,
      e = t.length;
    for (let i = 0; i < e; i++) {
      let e = t[i];
      if (null != e) return e
    }
  }

  function $(t, e) {
    V(t.style, e)
  }

  function Z(t) {
    return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
  }

  function q(t, e) {
    return t > 1e14 ? t : parseFloat(t.toPrecision(e || 14))
  } (z || (z = {})).messages = [], Math.easeInOutSine = function (t) {
    return -.5 * (Math.cos(Math.PI * t) - 1)
  };
  let K = Array.prototype.find ? function (t, e) {
    return t.find(e)
  } : function (t, e) {
    let i;
    let s = t.length;
    for (i = 0; i < s; i++)
      if (e(t[i], i)) return t[i]
  };

  function J(t, e, i) {
    for (let s in t) Object.hasOwnProperty.call(t, s) && e.call(i || t[s], t[s], s, t)
  }

  function Q(t, e, i) {
    function s(e, i) {
      let s = t.removeEventListener;
      s && s.call(t, e, i, !1)
    }

    function o(i) {
      let o, r;
      t.nodeName && (e ? (o = {})[e] = !0 : o = i, J(o, function (t, e) {
        if (i[e])
          for (r = i[e].length; r--;) s(e, i[e][r].fn)
      }))
    }
    let r = "function" == typeof t && t.prototype || t;
    if (Object.hasOwnProperty.call(r, "hcEvents")) {
      let t = r.hcEvents;
      if (e) {
        let r = t[e] || [];
        i ? (t[e] = r.filter(function (t) {
          return i !== t.fn
        }), s(e, i)) : (o(t), t[e] = [])
      } else o(t), delete r.hcEvents
    }
  }

  function tt(t, e, i, s) {
    if (i = i || {}, D.createEvent && (t.dispatchEvent || t.fireEvent && t !== L)) {
      let s = D.createEvent("Events");
      s.initEvent(e, !0, !0), i = V(s, i), t.dispatchEvent ? t.dispatchEvent(i) : t.fireEvent(e, i)
    } else if (t.hcEvents) {
      i.target || V(i, {
        preventDefault: function () {
          i.defaultPrevented = !0
        },
        target: t,
        type: e
      });
      let s = [],
        o = t,
        r = !1;
      for (; o.hcEvents;) Object.hasOwnProperty.call(o, "hcEvents") && o.hcEvents[e] && (s.length && (r = !0), s.unshift.apply(s, o.hcEvents[e])), o = Object.getPrototypeOf(o);
      r && s.sort((t, e) => t.order - e.order), s.forEach(e => {
        !1 === e.fn.call(t, i) && i.preventDefault()
      })
    }
    s && !i.defaultPrevented && s.call(t, i)
  }
  let te = function () {
    let e = Math.random().toString(36).substring(2, 9) + "-",
      i = 0;
    return function () {
      return "highcharts-" + (t ? "" : e) + i++
    }
  }();
  I.jQuery && (I.jQuery.fn.highcharts = function () {
    let t = [].slice.call(arguments);
    if (this[0]) return t[0] ? (new L[N(t[0]) ? t.shift() : "Chart"](this[0], t[0], t[1]), this) : B[j(this[0], "data-highcharts-chart")]
  });
  let ti = {
    addEvent: function (t, e, i, s = {}) {
      let o = "function" == typeof t && t.prototype || t;
      Object.hasOwnProperty.call(o, "hcEvents") || (o.hcEvents = {});
      let r = o.hcEvents;
      L.Point && t instanceof L.Point && t.series && t.series.chart && (t.series.chart.runTrackerClick = !0);
      let a = t.addEventListener;
      a && a.call(t, e, i, !!L.supportsPassiveEvents && {
        passive: void 0 === s.passive ? -1 !== e.indexOf("touch") : s.passive,
        capture: !1
      }), r[e] || (r[e] = []);
      let n = {
        fn: i,
        order: "number" == typeof s.order ? s.order : 1 / 0
      };
      return r[e].push(n), r[e].sort((t, e) => t.order - e.order),
        function () {
          Q(t, e, i)
        }
    },
    arrayMax: function (t) {
      let e = t.length,
        i = t[0];
      for (; e--;) t[e] > i && (i = t[e]);
      return i
    },
    arrayMin: function (t) {
      let e = t.length,
        i = t[0];
      for (; e--;) t[e] < i && (i = t[e]);
      return i
    },
    attr: j,
    clamp: function (t, e, i) {
      return t > e ? t < i ? t : i : e
    },
    clearTimeout: function (t) {
      Y(t) && clearTimeout(t)
    },
    correctFloat: q,
    createElement: function (t, e, i, s, o) {
      let r = D.createElement(t);
      return e && V(r, e), o && $(r, {
        padding: "0",
        border: "none",
        margin: "0"
      }), i && $(r, i), s && s.appendChild(r), r
    },
    crisp: function (t, e = 0, i) {
      let s = e % 2 / 2,
        o = i ? -1 : 1;
      return (Math.round(t * o - s) + s) * o
    },
    css: $,
    defined: Y,
    destroyObjectProperties: function (t, e, i) {
      J(t, function (s, o) {
        s !== e && s?.destroy && s.destroy(), (s?.destroy || !i) && delete t[o]
      })
    },
    diffObjects: function (t, e, i, s) {
      let o = {};
      return ! function t(e, o, r, a) {
        let n = i ? o : e;
        J(e, function (i, h) {
          if (!a && s && s.indexOf(h) > -1 && o[h]) {
            i = U(i), r[h] = [];
            for (let e = 0; e < Math.max(i.length, o[h].length); e++) o[h][e] && (void 0 === i[e] ? r[h][e] = o[h][e] : (r[h][e] = {}, t(i[e], o[h][e], r[h][e], a + 1)))
          } else G(i, !0) && !i.nodeType ? (r[h] = W(i) ? [] : {}, t(i, o[h] || {}, r[h], a + 1), 0 !== Object.keys(r[h]).length || "colorAxis" === h && 0 === a || delete r[h]) : (e[h] !== o[h] || h in e && !(h in o)) && "__proto__" !== h && "constructor" !== h && (r[h] = n[h])
        })
      }(t, e, o, 0), o
    },
    discardElement: function (t) {
      t && t.parentElement && t.parentElement.removeChild(t)
    },
    erase: function (t, e) {
      let i = t.length;
      for (; i--;)
        if (t[i] === e) {
          t.splice(i, 1);
          break
        }
    },
    error: z,
    extend: V,
    extendClass: function (t, e) {
      let i = function () { };
      return i.prototype = new t, V(i.prototype, e), i
    },
    find: K,
    fireEvent: tt,
    getAlignFactor: (t = "") => ({
      center: .5,
      right: 1,
      middle: .5,
      bottom: 1
    })[t] || 0,
    getClosestDistance: function (t, e) {
      let i, s, o, r;
      let a = !e;
      return t.forEach(t => {
        if (t.length > 1)
          for (r = s = t.length - 1; r > 0; r--)(o = t[r] - t[r - 1]) < 0 && !a ? (e?.(), e = void 0) : o && (void 0 === i || o < i) && (i = o)
      }), i
    },
    getMagnitude: Z,
    getNestedProperty: function (t, e) {
      let i = t.split(".");
      for (; i.length && Y(e);) {
        let t = i.shift();
        if (void 0 === t || "__proto__" === t) return;
        if ("this" === t) {
          let t;
          return G(e) && (t = e["@this"]), t ?? e
        }
        let s = e[t];
        if (!Y(s) || "function" == typeof s || "number" == typeof s.nodeType || s === I) return;
        e = s
      }
      return e
    },
    getStyle: function t(e, i, s) {
      let o;
      if ("width" === i) {
        let i = Math.min(e.offsetWidth, e.scrollWidth),
          s = e.getBoundingClientRect && e.getBoundingClientRect().width;
        return s < i && s >= i - 1 && (i = Math.floor(s)), Math.max(0, i - (t(e, "padding-left", !0) || 0) - (t(e, "padding-right", !0) || 0))
      }
      if ("height" === i) return Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - (t(e, "padding-top", !0) || 0) - (t(e, "padding-bottom", !0) || 0));
      let r = I.getComputedStyle(e, void 0);
      return r && (o = r.getPropertyValue(i), _(s, "opacity" !== i) && (o = R(o))), o
    },
    insertItem: function (t, e) {
      let i;
      let s = t.options.index,
        o = e.length;
      for (i = t.options.isInternal ? o : 0; i < o + 1; i++)
        if (!e[i] || F(s) && s < _(e[i].options.index, e[i]._i) || e[i].options.isInternal) {
          e.splice(i, 0, t);
          break
        } return i
    },
    isArray: W,
    isClass: H,
    isDOMElement: X,
    isFunction: function (t) {
      return "function" == typeof t
    },
    isNumber: F,
    isObject: G,
    isString: N,
    merge: function (t, ...e) {
      let i, s = [t, ...e],
        o = {},
        r = function (t, e) {
          return "object" != typeof t && (t = {}), J(e, function (i, s) {
            "__proto__" !== s && "constructor" !== s && (!G(i, !0) || H(i) || X(i) ? t[s] = e[s] : t[s] = r(t[s] || {}, i))
          }), t
        };
      !0 === t && (o = s[1], s = Array.prototype.slice.call(s, 2));
      let a = s.length;
      for (i = 0; i < a; i++) o = r(o, s[i]);
      return o
    },
    normalizeTickInterval: function (t, e, i, s, o) {
      let r, a = t;
      i = _(i, Z(t));
      let n = t / i;
      for (!e && (e = o ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === s && (1 === i ? e = e.filter(function (t) {
        return t % 1 == 0
      }) : i <= .1 && (e = [1 / i]))), r = 0; r < e.length && (a = e[r], (!o || !(a * i >= t)) && (o || !(n <= (e[r] + (e[r + 1] || e[r])) / 2))); r++);
      return q(a * i, -Math.round(Math.log(.001) / Math.LN10))
    },
    objectEach: J,
    offset: function (t) {
      let e = D.documentElement,
        i = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        };
      return {
        top: i.top + (I.pageYOffset || e.scrollTop) - (e.clientTop || 0),
        left: i.left + (I.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
        width: i.width,
        height: i.height
      }
    },
    pad: function (t, e, i) {
      return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || "0") + t
    },
    pick: _,
    pInt: R,
    pushUnique: function (t, e) {
      return 0 > t.indexOf(e) && !!t.push(e)
    },
    relativeLength: function (t, e, i) {
      return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
    },
    removeEvent: Q,
    replaceNested: function (t, ...e) {
      let i, s;
      do
        for (s of (i = t, e)) t = t.replace(s[0], s[1]); while (t !== i);
      return t
    },
    splat: U,
    stableSort: function (t, e) {
      let i, s;
      let o = t.length;
      for (s = 0; s < o; s++) t[s].safeI = s;
      for (t.sort(function (t, s) {
        return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i
      }), s = 0; s < o; s++) delete t[s].safeI
    },
    syncTimeout: function (t, e, i) {
      return e > 0 ? setTimeout(t, e, i) : (t.call(0, i), -1)
    },
    timeUnits: {
      millisecond: 1,
      second: 1e3,
      minute: 6e4,
      hour: 36e5,
      day: 864e5,
      week: 6048e5,
      month: 24192e5,
      year: 314496e5
    },
    ucfirst: function (t) {
      return N(t) ? t.substring(0, 1).toUpperCase() + t.substring(1) : String(t)
    },
    uniqueKey: te,
    useSerialIds: function (e) {
      return t = _(e, t)
    },
    wrap: function (t, e, i) {
      let s = t[e];
      t[e] = function () {
        let t = arguments,
          e = this;
        return i.apply(this, [function () {
          return s.apply(e, arguments.length ? arguments : t)
        }].concat([].slice.call(arguments)))
      }
    }
  },
    {
      win: ts
    } = L,
    {
      defined: to,
      error: tr,
      extend: ta,
      isNumber: tn,
      isObject: th,
      isString: tl,
      merge: td,
      objectEach: tc,
      pad: tp,
      splat: tu,
      timeUnits: tg,
      ucfirst: tf
    } = ti,
    tm = L.isSafari && ts.Intl && !ts.Intl.DateTimeFormat.prototype.formatRange,
    tx = t => void 0 === t.main,
    ty = t => ["D", "L", "M", "X", "J", "V", "S"].indexOf(t),
    tb = class {
      constructor(t) {
        this.options = {}, this.variableTimezone = !1, this.Date = ts.Date, this.update(t)
      }
      update(t = {}) {
        let e = t.timezone ?? "UTC";
        this.dTLCache = {}, this.options = t = td(!0, this.options, t);
        let {
          timezoneOffset: i,
          useUTC: s
        } = t;
        this.Date = t.Date || ts.Date || Date, to(s) && (e = s ? "UTC" : void 0), i && i % 60 == 0 && (e = "Etc/GMT" + (i > 0 ? "+" : "") + i / 60), this.variableTimezone = "UTC" !== e && e?.indexOf("Etc/GMT") !== 0, this.timezone = e, ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach(t => {
          let e = /months/i.test(t),
            i = /short/.test(t),
            s = {
              timeZone: "UTC"
            };
          s[e ? "month" : "weekday"] = i ? "short" : "long", this[t] = (e ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [3, 4, 5, 6, 7, 8, 9]).map(t => this.dateFormat(s, (e ? 31 : 1) * 24 * 36e5 * t))
        })
      }
      toParts(t) {
        let [e, i, s, o, r, a, n] = this.dateTimeFormat({
          weekday: "narrow",
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        }, t, "es").split(/(?:, |\/|:)/g);
        return [o, +s - 1, i, r, a, n, Math.floor(Number(t) || 0) % 1e3, ty(e)].map(Number)
      }
      dateTimeFormat(t, e, i = this.options.locale) {
        let s = JSON.stringify(t) + i;
        tl(t) && (t = this.str2dtf(t));
        let o = this.dTLCache[s];
        if (!o) {
          t.timeZone ?? (t.timeZone = this.timezone);
          try {
            o = new Intl.DateTimeFormat(i, t)
          } catch (e) {
            /Invalid time zone/i.test(e.message) ? (tr(34), t.timeZone = "UTC", o = new Intl.DateTimeFormat(i, t)) : tr(e.message, !1)
          }
        }
        return this.dTLCache[s] = o, o?.format(e) || ""
      }
      str2dtf(t, e = {}) {
        let i = {
          L: {
            fractionalSecondDigits: 3
          },
          S: {
            second: "2-digit"
          },
          M: {
            minute: "numeric"
          },
          H: {
            hour: "2-digit"
          },
          k: {
            hour: "numeric"
          },
          E: {
            weekday: "narrow"
          },
          a: {
            weekday: "short"
          },
          A: {
            weekday: "long"
          },
          d: {
            day: "2-digit"
          },
          e: {
            day: "numeric"
          },
          b: {
            month: "short"
          },
          B: {
            month: "long"
          },
          m: {
            month: "2-digit"
          },
          o: {
            month: "numeric"
          },
          y: {
            year: "2-digit"
          },
          Y: {
            year: "numeric"
          }
        };
        return Object.keys(i).forEach(s => {
          -1 !== t.indexOf(s) && ta(e, i[s])
        }), e
      }
      makeTime(t, e, i = 1, s = 0, o, r, a) {
        let n = this.Date.UTC(t, e, i, s, o || 0, r || 0, a || 0);
        if ("UTC" !== this.timezone) {
          let t = this.getTimezoneOffset(n);
          if (n += t, -1 !== [2, 3, 8, 9, 10, 11].indexOf(e) && (s < 5 || s > 20)) {
            let e = this.getTimezoneOffset(n);
            t !== e ? n += e - t : t - 36e5 !== this.getTimezoneOffset(n - 36e5) || tm || (n -= 36e5)
          }
        }
        return n
      }
      parse(t) {
        if (!tl(t)) return t ?? void 0;
        let e = (t = t.replace(/\//g, "-").replace(/(GMT|UTC)/, "")).indexOf("Z") > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(t),
          i = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(t);
        e || i || (t += "Z");
        let s = Date.parse(t);
        if (tn(s)) return s + (!e || i ? this.getTimezoneOffset(s) : 0)
      }
      getTimezoneOffset(t) {
        if ("UTC" !== this.timezone) {
          let [e, i, s, o, r = 0] = this.dateTimeFormat({
            timeZoneName: "shortOffset"
          }, t, "en").split(/(GMT|:)/).map(Number), a = -(36e5 * (s + r / 60));
          if (tn(a)) return a
        }
        return 0
      }
      dateFormat(t, e, i) {
        let s = L.defaultOptions?.lang;
        if (!to(e) || isNaN(e)) return s?.invalidDate || "";
        if (tl(t = t ?? "%Y-%m-%d %H:%M:%S")) {
          let i;
          let s = /%\[([a-zA-Z]+)\]/g;
          for (; i = s.exec(t);) t = t.replace(i[0], this.dateTimeFormat(i[1], e))
        }
        if (tl(t) && -1 !== t.indexOf("%")) {
          let i = this,
            [o, r, a, n, h, l, d, c] = this.toParts(e),
            p = s?.weekdays || this.weekdays,
            u = s?.shortWeekdays || this.shortWeekdays,
            g = s?.months || this.months,
            f = s?.shortMonths || this.shortMonths;
          tc(ta({
            a: u ? u[c] : p[c].substr(0, 3),
            A: p[c],
            d: tp(a),
            e: tp(a, 2, " "),
            w: c,
            b: f[r],
            B: g[r],
            m: tp(r + 1),
            o: r + 1,
            y: o.toString().substr(2, 2),
            Y: o,
            H: tp(n),
            k: n,
            I: tp(n % 12 || 12),
            l: n % 12 || 12,
            M: tp(h),
            p: n < 12 ? "AM" : "PM",
            P: n < 12 ? "am" : "pm",
            S: tp(l),
            L: tp(d, 3)
          }, L.dateFormats), function (s, o) {
            if (tl(t))
              for (; - 1 !== t.indexOf("%" + o);) t = t.replace("%" + o, "function" == typeof s ? s.call(i, e) : s)
          })
        } else if (th(t)) {
          let i = (this.getTimezoneOffset(e) || 0) / 36e5,
            s = this.options.timezone || "Etc/GMT" + (i >= 0 ? "+" : "") + i,
            {
              prefix: o = "",
              suffix: r = ""
            } = t;
          t = o + this.dateTimeFormat(ta({
            timeZone: s
          }, t), e) + r
        }
        return i ? tf(t) : t
      }
      resolveDTLFormat(t) {
        return th(t, !0) ? th(t, !0) && tx(t) ? {
          main: t
        } : t : {
          main: (t = tu(t))[0],
          from: t[1],
          to: t[2]
        }
      }
      getTimeTicks(t, e, i, s) {
        let o = this,
          r = [],
          a = {},
          {
            count: n = 1,
            unitRange: h
          } = t,
          [l, d, c, p, u, g] = o.toParts(e),
          f = (e || 0) % 1e3,
          m;
        if (s ?? (s = 1), to(e)) {
          if (f = h >= tg.second ? 0 : n * Math.floor(f / n), h >= tg.second && (g = h >= tg.minute ? 0 : n * Math.floor(g / n)), h >= tg.minute && (u = h >= tg.hour ? 0 : n * Math.floor(u / n)), h >= tg.hour && (p = h >= tg.day ? 0 : n * Math.floor(p / n)), h >= tg.day && (c = h >= tg.month ? 1 : Math.max(1, n * Math.floor(c / n))), h >= tg.month && (d = h >= tg.year ? 0 : n * Math.floor(d / n)), h >= tg.year && (l -= l % n), h === tg.week) {
            n && (e = o.makeTime(l, d, c, p, u, g, f));
            let t = ty(this.dateTimeFormat({
              timeZone: this.timezone,
              weekday: "narrow"
            }, e, "es"));
            c += -t + s + (t < s ? -7 : 0)
          }
          e = o.makeTime(l, d, c, p, u, g, f), o.variableTimezone && to(i) && (m = i - e > 4 * tg.month || o.getTimezoneOffset(e) !== o.getTimezoneOffset(i));
          let t = e,
            x = 1;
          for (; t < i;) r.push(t), h === tg.year ? t = o.makeTime(l + x * n, 0) : h === tg.month ? t = o.makeTime(l, d + x * n) : m && (h === tg.day || h === tg.week) ? t = o.makeTime(l, d, c + x * n * (h === tg.day ? 1 : 7)) : m && h === tg.hour && n > 1 ? t = o.makeTime(l, d, c, p + x * n) : t += h * n, x++;
          r.push(t), h <= tg.hour && r.length < 1e4 && r.forEach(t => {
            t % 18e5 == 0 && "000000000" === o.dateFormat("%H%M%S%L", t) && (a[t] = "day")
          })
        }
        return r.info = ta(t, {
          higherRanks: a,
          totalRange: h * n
        }), r
      }
      getDateFormat(t, e, i, s) {
        let o = this.dateFormat("%m-%d %H:%M:%S.%L", e),
          r = "01-01 00:00:00.000",
          a = {
            millisecond: 15,
            second: 12,
            minute: 9,
            hour: 6,
            day: 3
          },
          n = "millisecond",
          h = n;
        for (n in tg) {
          if (t === tg.week && +this.dateFormat("%w", e) === i && o.substr(6) === r.substr(6)) {
            n = "week";
            break
          }
          if (tg[n] > t) {
            n = h;
            break
          }
          if (a[n] && o.substr(a[n]) !== r.substr(a[n])) break;
          "week" !== n && (h = n)
        }
        return this.resolveDTLFormat(s[n]).main
      }
    },
    {
      isTouchDevice: tv
    } = L,
    {
      fireEvent: tk,
      merge: tM
    } = ti,
    tw = {
      colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"],
      symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
      lang: {
        locale: void 0,
        loading: "Loading...",
        months: void 0,
        shortMonths: void 0,
        weekdays: void 0,
        numericSymbols: ["k", "M", "G", "T", "P", "E"],
        resetZoom: "Reset zoom",
        resetZoomTitle: "Reset zoom level 1:1"
      },
      global: {
        buttonTheme: {
          fill: "#f7f7f7",
          padding: 8,
          r: 2,
          stroke: "#cccccc",
          "stroke-width": 1,
          style: {
            color: "#333333",
            cursor: "pointer",
            fontSize: "0.8em",
            fontWeight: "normal"
          },
          states: {
            hover: {
              fill: "#e6e6e6"
            },
            select: {
              fill: "#e6e9ff",
              style: {
                color: "#000000",
                fontWeight: "bold"
              }
            },
            disabled: {
              style: {
                color: "#cccccc"
              }
            }
          }
        }
      },
      time: {
        Date: void 0,
        timezone: "UTC",
        timezoneOffset: 0,
        useUTC: void 0
      },
      chart: {
        alignThresholds: !1,
        panning: {
          enabled: !1,
          type: "x"
        },
        styledMode: !1,
        borderRadius: 0,
        colorCount: 10,
        allowMutatingData: !0,
        ignoreHiddenSeries: !0,
        spacing: [10, 10, 15, 10],
        resetZoomButton: {
          theme: {},
          position: {}
        },
        reflow: !0,
        type: "line",
        zooming: {
          singleTouch: !1,
          resetButton: {
            theme: {
              zIndex: 6
            },
            position: {
              align: "right",
              x: -10,
              y: 10
            }
          }
        },
        width: null,
        height: null,
        borderColor: "#334eff",
        backgroundColor: "#ffffff",
        plotBorderColor: "#cccccc"
      },
      title: {
        style: {
          color: "#333333",
          fontWeight: "bold"
        },
        text: "Chart title",
        margin: 15,
        minScale: .67
      },
      subtitle: {
        style: {
          color: "#666666",
          fontSize: "0.8em"
        },
        text: ""
      },
      caption: {
        margin: 15,
        style: {
          color: "#666666",
          fontSize: "0.8em"
        },
        text: "",
        align: "left",
        verticalAlign: "bottom"
      },
      plotOptions: {},
      legend: {
        enabled: !0,
        align: "center",
        alignColumns: !0,
        className: "highcharts-no-tooltip",
        events: {},
        layout: "horizontal",
        itemMarginBottom: 2,
        itemMarginTop: 2,
        labelFormatter: function () {
          return this.name
        },
        borderColor: "#999999",
        borderRadius: 0,
        navigation: {
          style: {
            fontSize: "0.8em"
          },
          activeColor: "#0022ff",
          inactiveColor: "#cccccc"
        },
        itemStyle: {
          color: "#333333",
          cursor: "pointer",
          fontSize: "0.8em",
          textDecoration: "none",
          textOverflow: "ellipsis"
        },
        itemHoverStyle: {
          color: "#000000"
        },
        itemHiddenStyle: {
          color: "#666666",
          textDecoration: "line-through"
        },
        shadow: !1,
        itemCheckboxStyle: {
          position: "absolute",
          width: "13px",
          height: "13px"
        },
        squareSymbol: !0,
        symbolPadding: 5,
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        title: {
          style: {
            fontSize: "0.8em",
            fontWeight: "bold"
          }
        }
      },
      loading: {
        labelStyle: {
          fontWeight: "bold",
          position: "relative",
          top: "45%"
        },
        style: {
          position: "absolute",
          backgroundColor: "#ffffff",
          opacity: .5,
          textAlign: "center"
        }
      },
      tooltip: {
        enabled: false,
        animation: {
          duration: 300,
          easing: t => Math.sqrt(1 - Math.pow(t - 1, 2))
        },
        borderRadius: 3,
        dateTimeLabelFormats: {
          millisecond: "%[AebHMSL]",
          second: "%[AebHMS]",
          minute: "%[AebHM]",
          hour: "%[AebHM]",
          day: "%[AebY]",
          week: "Week from %[AebY]",
          month: "%[BY]",
          year: "%Y"
        },
        footerFormat: "",
        headerShape: "callout",
        hideDelay: 500,
        padding: 8,
        shape: "callout",
        shared: !1,
        snap: tv ? 25 : 10,
        headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>',
        pointFormat: '<span style="color:{point.color}">●</span>',
        backgroundColor: "#ffffff",
        borderWidth: void 0,
        shadow: !0,
        stickOnContact: !1,
        style: {
          color: "#333333",
          cursor: "default",
          fontSize: "0.8em"
        },
        useHTML: !1
      },
      credits: {
        enabled: false,
        position: {
          align: "right",
          x: -10,
          verticalAlign: "bottom",
          y: -5
        },
        style: {
          cursor: "pointer",
          color: "#999999",
          fontSize: "0.6em"
        },
        text: "Highcharts.com"
      }
    };
  tw.chart.styledMode = !0, tw.chart.styledMode = !1;
  let tS = new tb(tw.time),
    tA = {
      defaultOptions: tw,
      defaultTime: tS,
      getOptions: function () {
        return tw
      },
      setOptions: function (t) {
        return tk(L, "setOptions", {
          options: t
        }), tM(!0, tw, t), t.time && tS.update(tw.time), t.lang && "locale" in t.lang && tS.update({
          locale: t.lang.locale
        }), tw
      }
    },
    {
      isNumber: tT,
      merge: tC,
      pInt: tP,
      defined: tO
    } = ti;
  class tE {
    static parse(t) {
      return t ? new tE(t) : tE.None
    }
    constructor(t) {
      let e, i, s, o;
      this.rgba = [NaN, NaN, NaN, NaN], this.input = t;
      let r = L.Color;
      if (r && r !== tE) return new r(t);
      if ("object" == typeof t && void 0 !== t.stops) this.stops = t.stops.map(t => new tE(t[1]));
      else if ("string" == typeof t)
        for (this.input = t = tE.names[t.toLowerCase()] || t, s = tE.parsers.length; s-- && !i;)(e = (o = tE.parsers[s]).regex.exec(t)) && (i = o.parse(e));
      i && (this.rgba = i)
    }
    get(t) {
      let e = this.input,
        i = this.rgba;
      if ("object" == typeof e && void 0 !== this.stops) {
        let i = tC(e);
        return i.stops = [].slice.call(i.stops), this.stops.forEach((e, s) => {
          i.stops[s] = [i.stops[s][0], e.get(t)]
        }), i
      }
      return i && tT(i[0]) ? "rgb" !== t && (t || 1 !== i[3]) ? "a" === t ? `${i[3]}` : "rgba(" + i.join(",") + ")" : "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : e
    }
    brighten(t) {
      let e = this.rgba;
      if (this.stops) this.stops.forEach(function (e) {
        e.brighten(t)
      });
      else if (tT(t) && 0 !== t)
        for (let i = 0; i < 3; i++) e[i] += tP(255 * t), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
      return this
    }
    setOpacity(t) {
      return this.rgba[3] = t, this
    }
    tweenTo(t, e) {
      let i = this.rgba,
        s = t.rgba;
      if (!tT(i[0]) || !tT(s[0])) return t.input || "none";
      let o = 1 !== s[3] || 1 !== i[3];
      return (o ? "rgba(" : "rgb(") + Math.round(s[0] + (i[0] - s[0]) * (1 - e)) + "," + Math.round(s[1] + (i[1] - s[1]) * (1 - e)) + "," + Math.round(s[2] + (i[2] - s[2]) * (1 - e)) + (o ? "," + (s[3] + (i[3] - s[3]) * (1 - e)) : "") + ")"
    }
  }
  tE.names = {
    white: "#ffffff",
    black: "#000000"
  }, tE.parsers = [{
    regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/,
    parse: function (t) {
      return [tP(t[1]), tP(t[2]), tP(t[3]), parseFloat(t[4], 10)]
    }
  }, {
    regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
    parse: function (t) {
      return [tP(t[1]), tP(t[2]), tP(t[3]), 1]
    }
  }, {
    regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i,
    parse: function (t) {
      return [tP(t[1] + t[1], 16), tP(t[2] + t[2], 16), tP(t[3] + t[3], 16), tO(t[4]) ? tP(t[4] + t[4], 16) / 255 : 1]
    }
  }, {
    regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i,
    parse: function (t) {
      return [tP(t[1], 16), tP(t[2], 16), tP(t[3], 16), tO(t[4]) ? tP(t[4], 16) / 255 : 1]
    }
  }], tE.None = new tE("");
  let {
    parse: tL
  } = tE, {
    win: tB
  } = L, {
    isNumber: tD,
    objectEach: tI
  } = ti;
  class tz {
    constructor(t, e, i) {
      this.pos = NaN, this.options = e, this.elem = t, this.prop = i
    }
    dSetter() {
      let t = this.paths,
        e = t && t[0],
        i = t && t[1],
        s = this.now || 0,
        o = [];
      if (1 !== s && e && i) {
        if (e.length === i.length && s < 1)
          for (let t = 0; t < i.length; t++) {
            let r = e[t],
              a = i[t],
              n = [];
            for (let t = 0; t < a.length; t++) {
              let e = r[t],
                i = a[t];
              tD(e) && tD(i) && !("A" === a[0] && (4 === t || 5 === t)) ? n[t] = e + s * (i - e) : n[t] = i
            }
            o.push(n)
          } else o = i
      } else o = this.toD || [];
      this.elem.attr("d", o, void 0, !0)
    }
    update() {
      let t = this.elem,
        e = this.prop,
        i = this.now,
        s = this.options.step;
      this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this)
    }
    run(t, e, i) {
      let s = this,
        o = s.options,
        r = function (t) {
          return !r.stopped && s.step(t)
        },
        a = tB.requestAnimationFrame || function (t) {
          setTimeout(t, 13)
        },
        n = function () {
          for (let t = 0; t < tz.timers.length; t++) tz.timers[t]() || tz.timers.splice(t--, 1);
          tz.timers.length && a(n)
        };
      t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, r.elem = this.elem, r.prop = this.prop, r() && 1 === tz.timers.push(r) && a(n)) : (delete o.curAnim[this.prop], o.complete && 0 === Object.keys(o.curAnim).length && o.complete.call(this.elem))
    }
    step(t) {
      let e, i;
      let s = +new Date,
        o = this.options,
        r = this.elem,
        a = o.complete,
        n = o.duration,
        h = o.curAnim;
      return r.attr && !r.element ? e = !1 : t || s >= n + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), h[this.prop] = !0, i = !0, tI(h, function (t) {
        !0 !== t && (i = !1)
      }), i && a && a.call(r), e = !1) : (this.pos = o.easing((s - this.startTime) / n), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e
    }
    initPath(t, e, i) {
      let s = t.startX,
        o = t.endX,
        r = i.slice(),
        a = t.isArea,
        n = a ? 2 : 1,
        h = e && i.length > e.length && i.hasStackedCliffs,
        l, d, c, p, u = e && e.slice();
      if (!u || h) return [r, r];

      function g(t, e) {
        for (; t.length < d;) {
          let i = t[0],
            s = e[d - t.length];
          if (s && "M" === i[0] && ("C" === s[0] ? t[0] = ["C", i[1], i[2], i[1], i[2], i[1], i[2]] : t[0] = ["L", i[1], i[2]]), t.unshift(i), a) {
            let e = t.pop();
            t.push(t[t.length - 1], e)
          }
        }
      }

      function f(t) {
        for (; t.length < d;) {
          let e = t[Math.floor(t.length / n) - 1].slice();
          if ("C" === e[0] && (e[1] = e[5], e[2] = e[6]), a) {
            let i = t[Math.floor(t.length / n)].slice();
            t.splice(t.length / 2, 0, e, i)
          } else t.push(e)
        }
      }
      if (s && o && o.length) {
        for (c = 0; c < s.length; c++) {
          if (s[c] === o[0]) {
            l = c;
            break
          }
          if (s[0] === o[o.length - s.length + c]) {
            l = c, p = !0;
            break
          }
          if (s[s.length - 1] === o[o.length - s.length + c]) {
            l = s.length - c;
            break
          }
        }
        void 0 === l && (u = [])
      }
      return u.length && tD(l) && (d = r.length + l * n, p ? (g(u, r), f(r)) : (g(r, u), f(u))), [u, r]
    }
    fillSetter() {
      tz.prototype.strokeSetter.apply(this, arguments)
    }
    strokeSetter() {
      this.elem.attr(this.prop, tL(this.start).tweenTo(tL(this.end), this.pos), void 0, !0)
    }
  }
  tz.timers = [];
  let {
    defined: tR,
    getStyle: tN,
    isArray: tW,
    isNumber: tG,
    isObject: tX,
    merge: tH,
    objectEach: tF,
    pick: tY
  } = ti;

  function tj(t) {
    return tX(t) ? tH({
      duration: 500,
      defer: 0
    }, t) : {
      duration: t ? 500 : 0,
      defer: 0
    }
  }

  function tU(t, e) {
    let i = tz.timers.length;
    for (; i--;) tz.timers[i].elem !== t || e && e !== tz.timers[i].prop || (tz.timers[i].stopped = !0)
  }
  let tV = {
    animate: function (t, e, i) {
      let s, o = "",
        r, a, n;
      tX(i) || (n = arguments, i = {
        duration: n[2],
        easing: n[3],
        complete: n[4]
      }), tG(i.duration) || (i.duration = 400), i.easing = "function" == typeof i.easing ? i.easing : Math[i.easing] || Math.easeInOutSine, i.curAnim = tH(e), tF(e, function (n, h) {
        tU(t, h), a = new tz(t, i, h), r = void 0, "d" === h && tW(e.d) ? (a.paths = a.initPath(t, t.pathArray, e.d), a.toD = e.d, s = 0, r = 1) : t.attr ? s = t.attr(h) : (s = parseFloat(tN(t, h)) || 0, "opacity" !== h && (o = "px")), r || (r = n), "string" == typeof r && r.match("px") && (r = r.replace(/px/g, "")), a.run(s, r, o)
      })
    },
    animObject: tj,
    getDeferredAnimation: function (t, e, i) {
      let s = tj(e),
        o = i ? [i] : t.series,
        r = 0,
        a = 0;
      return o.forEach(t => {
        let i = tj(t.options.animation);
        r = tX(e) && tR(e.defer) ? s.defer : Math.max(r, i.duration + i.defer), a = Math.min(s.duration, i.duration)
      }), t.renderer.forExport && (r = 0), {
        defer: Math.max(0, r - a),
        duration: Math.min(r, a)
      }
    },
    setAnimation: function (t, e) {
      e.renderer.globalAnimation = tY(t, e.options.chart.animation, !0)
    },
    stop: tU
  },
    {
      SVG_NS: t_,
      win: t$
    } = L,
    {
      attr: tZ,
      createElement: tq,
      css: tK,
      error: tJ,
      isFunction: tQ,
      isString: t0,
      objectEach: t1,
      splat: t2
    } = ti,
    {
      trustedTypes: t3
    } = t$,
    t5 = t3 && tQ(t3.createPolicy) && t3.createPolicy("highcharts", {
      createHTML: t => t
    }),
    t6 = t5 ? t5.createHTML("") : "";
  class t9 {
    static filterUserAttributes(t) {
      return t1(t, (e, i) => {
        let s = !0; - 1 === t9.allowedAttributes.indexOf(i) && (s = !1), -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) && (s = t0(e) && t9.allowedReferences.some(t => 0 === e.indexOf(t))), s || (tJ(33, !1, void 0, {
          "Invalid attribute in config": `${i}`
        }), delete t[i]), t0(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"))
      }), t
    }
    static parseStyle(t) {
      return t.split(";").reduce((t, e) => {
        let i = e.split(":").map(t => t.trim()),
          s = i.shift();
        return s && i.length && (t[s.replace(/-([a-z])/g, t => t[1].toUpperCase())] = i.join(":")), t
      }, {})
    }
    static setElementHTML(t, e) {
      t.innerHTML = t9.emptyHTML, e && new t9(e).addToDOM(t)
    }
    constructor(t) {
      this.nodes = "string" == typeof t ? this.parseMarkup(t) : t
    }
    addToDOM(t) {
      return function t(e, i) {
        let s;
        return t2(e).forEach(function (e) {
          let o;
          let r = e.tagName,
            a = e.textContent ? L.doc.createTextNode(e.textContent) : void 0,
            n = t9.bypassHTMLFiltering;
          if (r) {
            if ("#text" === r) o = a;
            else if (-1 !== t9.allowedTags.indexOf(r) || n) {
              let s = "svg" === r ? t_ : i.namespaceURI || t_,
                h = L.doc.createElementNS(s, r),
                l = e.attributes || {};
              t1(e, function (t, e) {
                "tagName" !== e && "attributes" !== e && "children" !== e && "style" !== e && "textContent" !== e && (l[e] = t)
              }), tZ(h, n ? l : t9.filterUserAttributes(l)), e.style && tK(h, e.style), a && h.appendChild(a), t(e.children || [], h), o = h
            } else tJ(33, !1, void 0, {
              "Invalid tagName in config": r
            })
          }
          o && i.appendChild(o), s = o
        }), s
      }(this.nodes, t)
    }
    parseMarkup(t) {
      let e;
      let i = [];
      t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
      try {
        e = new DOMParser().parseFromString(t5 ? t5.createHTML(t) : t, "text/html")
      } catch (t) { }
      if (!e) {
        let i = tq("div");
        i.innerHTML = t, e = {
          body: i
        }
      }
      let s = (t, e) => {
        let i = t.nodeName.toLowerCase(),
          o = {
            tagName: i
          };
        "#text" === i && (o.textContent = t.textContent || "");
        let r = t.attributes;
        if (r) {
          let t = {};
          [].forEach.call(r, e => {
            "data-style" === e.name ? o.style = t9.parseStyle(e.value) : t[e.name] = e.value
          }), o.attributes = t
        }
        if (t.childNodes.length) {
          let e = [];
          [].forEach.call(t.childNodes, t => {
            s(t, e)
          }), e.length && (o.children = e)
        }
        e.push(o)
      };
      return [].forEach.call(e.body.childNodes, t => s(t, i)), i
    }
  }
  t9.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "in2", "markerHeight", "markerWidth", "offset", "opacity", "operator", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "radius", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], t9.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], t9.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feComposite", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMorphology", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], t9.emptyHTML = t6, t9.bypassHTMLFiltering = !1;
  let {
    defaultOptions: t4,
    defaultTime: t8
  } = tA, {
    doc: t7
  } = L, {
    extend: et,
    getNestedProperty: ee,
    isArray: ei,
    isNumber: es,
    isObject: eo,
    pick: er,
    ucfirst: ea
  } = ti, en = {
    add: (t, e) => t + e,
    divide: (t, e) => 0 !== e ? t / e : "",
    eq: (t, e) => t == e,
    each: function (t) {
      let e = arguments[arguments.length - 1];
      return !!ei(t) && t.map((i, s) => el(e.body, et(eo(i) ? i : {
        "@this": i
      }, {
        "@index": s,
        "@first": 0 === s,
        "@last": s === t.length - 1
      }))).join("")
    },
    ge: (t, e) => t >= e,
    gt: (t, e) => t > e,
    if: t => !!t,
    le: (t, e) => t <= e,
    lt: (t, e) => t < e,
    multiply: (t, e) => t * e,
    ne: (t, e) => t != e,
    subtract: (t, e) => t - e,
    ucfirst: ea,
    unless: t => !t
  }, eh = {};

  function el(t = "", e, i) {
    let s = /\{([\p{L}\d:\.,;\-\/<>\[\]%_@"'’= #\(\)]+)\}/gu,
      o = /\(([\p{L}\d:\.,;\-\/<>\[\]%_@"'= ]+)\)/gu,
      r = [],
      a = /f$/,
      n = /\.(\d)/,
      h = i?.options.lang || t4.lang,
      l = i && i.time || t8,
      d = i && i.numberFormatter || ed,
      c = (t = "") => {
        let i;
        return "true" === t || "false" !== t && ((i = Number(t)).toString() === t ? i : /^["'].+["']$/.test(t) ? t.slice(1, -1) : ee(t, e))
      },
      p, u, g = 0,
      f;
    for (; null !== (p = s.exec(t));) {
      let i = p,
        s = o.exec(p[1]);
      s && (p = s, f = !0), u && u.isBlock || (u = {
        ctx: e,
        expression: p[1],
        find: p[0],
        isBlock: "#" === p[1].charAt(0),
        start: p.index,
        startInner: p.index + p[0].length,
        length: p[0].length
      });
      let a = (u.isBlock ? i : p)[1].split(" ")[0].replace("#", "");
      en[a] && (u.isBlock && a === u.fn && g++, u.fn || (u.fn = a));
      let n = "else" === p[1];
      if (u.isBlock && u.fn && (p[1] === `/${u.fn}` || n)) {
        if (g) !n && g--;
        else {
          let e = u.startInner,
            i = t.substr(e, p.index - e);
          void 0 === u.body ? (u.body = i, u.startInner = p.index + p[0].length) : u.elseBody = i, u.find += i + p[0], n || (r.push(u), u = void 0)
        }
      } else u.isBlock || r.push(u);
      if (s && !u?.isBlock) break
    }
    return r.forEach(s => {
      let o, r;
      let {
        body: p,
        elseBody: u,
        expression: g,
        fn: m
      } = s;
      if (m) {
        let t = [s],
          a = [],
          n = g.length,
          h = 0,
          l;
        for (r = 0; r <= n; r++) {
          let t = g.charAt(r);
          l || '"' !== t && "'" !== t ? l === t && (l = "") : l = t, l || " " !== t && r !== n || (a.push(g.substr(h, r - h)), h = r + 1)
        }
        for (r = en[m].length; r--;) t.unshift(c(a[r + 1]));
        o = en[m].apply(e, t), s.isBlock && "boolean" == typeof o && (o = el(o ? p : u, e, i))
      } else {
        let t = g.split(":");
        if (o = c(t.shift() || ""), t.length && "number" == typeof o) {
          let e = t.join(":");
          if (a.test(e)) {
            let t = parseInt((e.match(n) || ["", "-1"])[1], 10);
            null !== o && (o = d(o, t, h.decimalPoint, e.indexOf(",") > -1 ? h.thousandsSep : ""))
          } else o = l.dateFormat(e, o), f && (o = `"${o}"`)
        }
      }
      t = t.replace(s.find, er(o, ""))
    }), f ? el(t, e, i) : t
  }

  function ed(t, e, i, s) {
    e = +e;
    let o, r, [a, n] = (t = +t || 0).toString().split("e").map(Number),
      h = this?.options?.lang || t4.lang,
      l = (t.toString().split(".")[1] || "").split("e")[0].length,
      d = e,
      c = {};
    i ?? (i = h.decimalPoint), s ?? (s = h.thousandsSep), -1 === e ? e = Math.min(l, 20) : es(e) ? e && n < 0 && ((r = e + n) >= 0 ? (a = +a.toExponential(r).split("e")[0], e = r) : (a = Math.floor(a), t = e < 20 ? +(a * Math.pow(10, n)).toFixed(e) : 0, n = 0)) : e = 2, n && (e ?? (e = 2), t = a), es(e) && e >= 0 && (c.minimumFractionDigits = e, c.maximumFractionDigits = e), "" === s && (c.useGrouping = !1);
    let p = s || i,
      u = p ? "en" : this?.locale || h.locale || t7.body.closest("[lang]")?.lang,
      g = JSON.stringify(c) + u;
    return o = (eh[g] ?? (eh[g] = new Intl.NumberFormat(u, c))).format(t), p && (o = o.replace(/\,/g, s ?? ",").replace(".", i ?? ".")), (e || 0 != +o) && (!(n < 0) || d) || (o = "0"), n && 0 != +o && (o += "e" + (n < 0 ? "" : "+") + n), o
  }
  let ec = {
    dateFormat: function (t, e, i) {
      return t8.dateFormat(t, e, i)
    },
    format: el,
    helpers: en,
    numberFormat: ed
  };
  ! function (t) {
    let e;
    t.rendererTypes = {}, t.getRendererType = function (i = e) {
      return t.rendererTypes[i] || t.rendererTypes[e]
    }, t.registerRendererType = function (i, s, o) {
      t.rendererTypes[i] = s, (!e || o) && (e = i, L.Renderer = s)
    }
  }(n || (n = {}));
  let ep = n,
    {
      clamp: eu,
      pick: eg,
      pushUnique: ef,
      stableSort: em
    } = ti;
  (h || (h = {})).distribute = function t(e, i, s) {
    let o = e,
      r = o.reducedLen || i,
      a = (t, e) => t.target - e.target,
      n = [],
      h = e.length,
      l = [],
      d = n.push,
      c, p, u, g = !0,
      f, m, x = 0,
      y;
    for (c = h; c--;) x += e[c].size;
    if (x > r) {
      for (em(e, (t, e) => (e.rank || 0) - (t.rank || 0)), u = (y = e[0].rank === e[e.length - 1].rank) ? h / 2 : -1, p = y ? u : h - 1; u && x > r;) f = e[c = Math.floor(p)], ef(l, c) && (x -= f.size), p += u, y && p >= e.length && (u /= 2, p = u);
      l.sort((t, e) => e - t).forEach(t => d.apply(n, e.splice(t, 1)))
    }
    for (em(e, a), e = e.map(t => ({
      size: t.size,
      targets: [t.target],
      align: eg(t.align, .5)
    })); g;) {
      for (c = e.length; c--;) f = e[c], m = (Math.min.apply(0, f.targets) + Math.max.apply(0, f.targets)) / 2, f.pos = eu(m - f.size * f.align, 0, i - f.size);
      for (c = e.length, g = !1; c--;) c > 0 && e[c - 1].pos + e[c - 1].size > e[c].pos && (e[c - 1].size += e[c].size, e[c - 1].targets = e[c - 1].targets.concat(e[c].targets), e[c - 1].align = .5, e[c - 1].pos + e[c - 1].size > i && (e[c - 1].pos = i - e[c - 1].size), e.splice(c, 1), g = !0)
    }
    return d.apply(o, n), c = 0, e.some(e => {
      let r = 0;
      return (e.targets || []).some(() => (o[c].pos = e.pos + r, void 0 !== s && Math.abs(o[c].pos - o[c].target) > s) ? (o.slice(0, c + 1).forEach(t => delete t.pos), o.reducedLen = (o.reducedLen || i) - .1 * i, o.reducedLen > .1 * i && t(o, i, s), !0) : (r += o[c].size, c++, !1))
    }), em(o, a), o
  };
  let ex = h,
    {
      animate: ey,
      animObject: eb,
      stop: ev
    } = tV,
    {
      deg2rad: ek,
      doc: eM,
      svg: ew,
      SVG_NS: eS,
      win: eA,
      isFirefox: eT
    } = L,
    {
      addEvent: eC,
      attr: eP,
      createElement: eO,
      crisp: eE,
      css: eL,
      defined: eB,
      erase: eD,
      extend: eI,
      fireEvent: ez,
      getAlignFactor: eR,
      isArray: eN,
      isFunction: eW,
      isNumber: eG,
      isObject: eX,
      isString: eH,
      merge: eF,
      objectEach: eY,
      pick: ej,
      pInt: eU,
      pushUnique: eV,
      replaceNested: e_,
      syncTimeout: e$,
      uniqueKey: eZ
    } = ti;
  class eq {
    _defaultGetter(t) {
      let e = ej(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0);
      return /^-?[\d\.]+$/.test(e) && (e = parseFloat(e)), e
    }
    _defaultSetter(t, e, i) {
      i.setAttribute(e, t)
    }
    add(t) {
      let e;
      let i = this.renderer,
        s = this.element;
      return t && (this.parentGroup = t), void 0 !== this.textStr && "text" === this.element.nodeName && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this
    }
    addClass(t, e) {
      let i = e ? "" : this.attr("class") || "";
      return (t = (t || "").split(/ /g).reduce(function (t, e) {
        return -1 === i.indexOf(e) && t.push(e), t
      }, i ? [i] : []).join(" ")) !== i && this.attr("class", t), this
    }
    afterSetters() {
      this.doTransform && (this.updateTransform(), this.doTransform = !1)
    }
    align(t, e, i, s = !0) {
      let o = {},
        r = this.renderer,
        a = r.alignedObjects,
        n = !!t;
      t ? (this.alignOptions = t, this.alignByTranslate = e, this.alignTo = i) : (t = this.alignOptions || {}, e = this.alignByTranslate, i = this.alignTo);
      let h = !i || eH(i) ? i || "renderer" : void 0;
      h && (n && eV(a, this), i = void 0);
      let l = ej(i, r[h], r),
        d = (l.x || 0) + (t.x || 0) + ((l.width || 0) - (t.width || 0)) * eR(t.align),
        c = (l.y || 0) + (t.y || 0) + ((l.height || 0) - (t.height || 0)) * eR(t.verticalAlign);
      return o[e ? "translateX" : "x"] = Math.round(d), o[e ? "translateY" : "y"] = Math.round(c), s && (this[this.placed ? "animate" : "attr"](o), this.placed = !0), this.alignAttr = o, this
    }
    alignSetter(t) {
      let e = {
        left: "start",
        center: "middle",
        right: "end"
      };
      e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]))
    }
    animate(t, e, i) {
      let s = eb(ej(e, this.renderer.globalAnimation, !0)),
        o = s.defer;
      return eM.hidden && (s.duration = 0), 0 !== s.duration ? (i && (s.complete = i), e$(() => {
        this.element && ey(this, t, s)
      }, o)) : (this.attr(t, void 0, i || s.complete), eY(t, function (t, e) {
        s.step && s.step.call(this, t, {
          prop: e,
          pos: 1,
          elem: this
        })
      }, this)), this
    }
    applyTextOutline(t) {
      let e = this.element; - 1 !== t.indexOf("contrast") && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
      let i = t.split(" "),
        s = i[i.length - 1],
        o = i[0];
      if (o && "none" !== o && L.svg) {
        this.fakeTS = !0, o = o.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
          return 2 * Number(e) + i
        }), this.removeTextOutline();
        let t = eM.createElementNS(eS, "tspan");
        eP(t, {
          class: "highcharts-text-outline",
          fill: s,
          stroke: s,
          "stroke-width": o,
          "stroke-linejoin": "round"
        });
        let i = e.querySelector("textPath") || e;
        [].forEach.call(i.childNodes, e => {
          let i = e.cloneNode(!0);
          i.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(t => i.removeAttribute(t)), t.appendChild(i)
        });
        let r = 0;
        [].forEach.call(i.querySelectorAll("text tspan"), t => {
          r += Number(t.getAttribute("dy"))
        });
        let a = eM.createElementNS(eS, "tspan");
        a.textContent = "​", eP(a, {
          x: Number(e.getAttribute("x")),
          dy: -r
        }), t.appendChild(a), i.insertBefore(t, i.firstChild)
      }
    }
    attr(t, e, i, s) {
      let {
        element: o
      } = this, r = eq.symbolCustomAttribs, a, n, h = this, l;
      return "string" == typeof t && void 0 !== e && (a = t, (t = {})[a] = e), "string" == typeof t ? h = (this[t + "Getter"] || this._defaultGetter).call(this, t, o) : (eY(t, function (e, i) {
        l = !1, s || ev(this, i), this.symbolName && -1 !== r.indexOf(i) && (n || (this.symbolAttr(t), n = !0), l = !0), this.rotation && ("x" === i || "y" === i) && (this.doTransform = !0), l || (this[i + "Setter"] || this._defaultSetter).call(this, e, i, o)
      }, this), this.afterSetters()), i && i.call(this), h
    }
    clip(t) {
      if (t && !t.clipPath) {
        let e = eZ() + "-",
          i = this.renderer.createElement("clipPath").attr({
            id: e
          }).add(this.renderer.defs);
        eI(t, {
          clipPath: i,
          id: e,
          count: 0
        }), t.add(i)
      }
      return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none")
    }
    crisp(t, e) {
      e = Math.round(e || t.strokeWidth || 0);
      let i = t.x || this.x || 0,
        s = t.y || this.y || 0,
        o = (t.width || this.width || 0) + i,
        r = (t.height || this.height || 0) + s,
        a = eE(i, e),
        n = eE(s, e);
      return eI(t, {
        x: a,
        y: n,
        width: eE(o, e) - a,
        height: eE(r, e) - n
      }), eB(t.strokeWidth) && (t.strokeWidth = e), t
    }
    complexColor(t, e, i) {
      let s = this.renderer,
        o, r, a, n, h, l, d, c, p, u, g = [],
        f;
      ez(this.renderer, "complexColor", {
        args: arguments
      }, function () {
        if (t.radialGradient ? r = "radialGradient" : t.linearGradient && (r = "linearGradient"), r) {
          if (a = t[r], h = s.gradients, l = t.stops, p = i.radialReference, eN(a) && (t[r] = a = {
            x1: a[0],
            y1: a[1],
            x2: a[2],
            y2: a[3],
            gradientUnits: "userSpaceOnUse"
          }), "radialGradient" === r && p && !eB(a.gradientUnits) && (n = a, a = eF(a, s.getRadialAttr(p, n), {
            gradientUnits: "userSpaceOnUse"
          })), eY(a, function (t, e) {
            "id" !== e && g.push(e, t)
          }), eY(l, function (t) {
            g.push(t)
          }), h[g = g.join(",")]) u = h[g].attr("id");
          else {
            a.id = u = eZ();
            let t = h[g] = s.createElement(r).attr(a).add(s.defs);
            t.radAttr = n, t.stops = [], l.forEach(function (e) {
              0 === e[1].indexOf("rgba") ? (d = (o = tE.parse(e[1])).get("rgb"), c = o.get("a")) : (d = e[1], c = 1);
              let i = s.createElement("stop").attr({
                offset: e[0],
                "stop-color": d,
                "stop-opacity": c
              }).add(t);
              t.stops.push(i)
            })
          }
          f = "url(" + s.url + "#" + u + ")", i.setAttribute(e, f), i.gradient = g, t.toString = function () {
            return f
          }
        }
      })
    }
    css(t) {
      let e = this.styles,
        i = {},
        s = this.element,
        o, r = !e;
      if (e && eY(t, function (t, s) {
        e && e[s] !== t && (i[s] = t, r = !0)
      }), r) {
        e && (t = eI(e, i)), null === t.width || "auto" === t.width ? delete this.textWidth : "text" === s.nodeName.toLowerCase() && t.width && (o = this.textWidth = eU(t.width)), eI(this.styles, t), o && !ew && this.renderer.forExport && delete t.width;
        let r = eT && t.fontSize || null;
        r && (eG(r) || /^\d+$/.test(r)) && (t.fontSize += "px");
        let a = eF(t);
        s.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "whiteSpace", "width"].forEach(t => a && delete a[t]), a.color && (a.fill = a.color)), eL(s, a)
      }
      return this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this
    }
    dashstyleSetter(t) {
      let e, i = this["stroke-width"];
      if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
        let s = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
        for (e = s.length; e--;) s[e] = "" + eU(s[e]) * ej(i, NaN);
        t = s.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
      }
    }
    destroy() {
      let t = this,
        e = t.element || {},
        i = t.renderer,
        s = e.ownerSVGElement,
        o = "SPAN" === e.nodeName && t.parentGroup || void 0,
        r, a;
      if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, ev(t), t.clipPath && s) {
        let e = t.clipPath;
        [].forEach.call(s.querySelectorAll("[clip-path],[CLIP-PATH]"), function (t) {
          t.getAttribute("clip-path").indexOf(e.element.id) > -1 && t.removeAttribute("clip-path")
        }), t.clipPath = e.destroy()
      }
      if (t.connector = t.connector?.destroy(), t.stops) {
        for (a = 0; a < t.stops.length; a++) t.stops[a].destroy();
        t.stops.length = 0, t.stops = void 0
      }
      for (t.safeRemoveChild(e); o && o.div && 0 === o.div.childNodes.length;) r = o.parentGroup, t.safeRemoveChild(o.div), delete o.div, o = r;
      t.alignOptions && eD(i.alignedObjects, t), eY(t, function (e, i) {
        t[i] && t[i].parentGroup === t && t[i].destroy && t[i].destroy(), delete t[i]
      })
    }
    dSetter(t, e, i) {
      eN(t) && ("string" == typeof t[0] && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((t, e, i) => e && e.join ? (i ? t + " " : "") + e.join(" ") : (e || "").toString(), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
    }
    fillSetter(t, e, i) {
      "string" == typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
    }
    hrefSetter(t, e, i) {
      i.setAttributeNS("http://www.w3.org/1999/xlink", e, t)
    }
    getBBox(t, e) {
      let i, s, o, r;
      let {
        alignValue: a,
        element: n,
        renderer: h,
        styles: l,
        textStr: d
      } = this, {
        cache: c,
        cacheKeys: p
      } = h, u = n.namespaceURI === this.SVG_NS, g = ej(e, this.rotation, 0), f = h.styledMode ? n && eq.prototype.getStyle.call(n, "font-size") : l.fontSize;
      if (eB(d) && (-1 === (r = d.toString()).indexOf("<") && (r = r.replace(/\d/g, "0")), r += ["", h.rootFontSize, f, g, this.textWidth, a, l.lineClamp, l.textOverflow, l.fontWeight].join(",")), r && !t && (i = c[r]), !i || i.polygon) {
        if (u || h.forExport) {
          try {
            o = this.fakeTS && function (t) {
              let e = n.querySelector(".highcharts-text-outline");
              e && eL(e, {
                display: t
              })
            }, eW(o) && o("none"), i = n.getBBox ? eI({}, n.getBBox()) : {
              width: n.offsetWidth,
              height: n.offsetHeight,
              x: 0,
              y: 0
            }, eW(o) && o("")
          } catch (t) { } (!i || i.width < 0) && (i = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          })
        } else i = this.htmlGetBBox();
        s = i.height, u && (i.height = s = ({
          "11px,17": 14,
          "13px,20": 16
        })[`${f || ""},${Math.round(s)}`] || s), g && (i = this.getRotatedBox(i, g));
        let t = {
          bBox: i
        };
        ez(this, "afterGetBBox", t), i = t.bBox
      }
      if (r && ("" === d || i.height > 0)) {
        for (; p.length > 250;) delete c[p.shift()];
        c[r] || p.push(r), c[r] = i
      }
      return i
    }
    getRotatedBox(t, e) {
      let {
        x: i,
        y: s,
        width: o,
        height: r
      } = t, {
        alignValue: a,
        translateY: n,
        rotationOriginX: h = 0,
        rotationOriginY: l = 0
      } = this, d = eR(a), c = Number(this.element.getAttribute("y") || 0) - (n ? 0 : s), p = e * ek, u = (e - 90) * ek, g = Math.cos(p), f = Math.sin(p), m = o * g, x = o * f, y = Math.cos(u), b = Math.sin(u), [
        [v, k],
        [M, w]
      ] = [h, l].map(t => [t - t * g, t * f]), S = i + d * (o - m) + v + w + c * y, A = S + m, T = A - r * y, C = T - m, P = s + c - d * x - k + M + c * b, O = P + x, E = O - r * b, L = E - x, B = Math.min(S, A, T, C), D = Math.min(P, O, E, L), I = Math.max(S, A, T, C) - B, z = Math.max(P, O, E, L) - D;
      return {
        x: B,
        y: D,
        width: I,
        height: z,
        polygon: [
          [S, P],
          [A, O],
          [T, E],
          [C, L]
        ]
      }
    }
    getStyle(t) {
      return eA.getComputedStyle(this.element || this, "").getPropertyValue(t)
    }
    hasClass(t) {
      return -1 !== ("" + this.attr("class")).split(" ").indexOf(t)
    }
    hide() {
      return this.attr({
        visibility: "hidden"
      })
    }
    htmlGetBBox() {
      return {
        height: 0,
        width: 0,
        x: 0,
        y: 0
      }
    }
    constructor(t, e) {
      this.onEvents = {}, this.opacity = 1, this.SVG_NS = eS, this.element = "span" === e || "body" === e ? eO(e) : eM.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, ez(this, "afterInit")
    }
    on(t, e) {
      let {
        onEvents: i
      } = this;
      return i[t] && i[t](), i[t] = eC(this.element, t, e), this
    }
    opacitySetter(t, e, i) {
      let s = Number(Number(t).toFixed(3));
      this.opacity = s, i.setAttribute(e, s)
    }
    reAlign() {
      this.alignOptions?.width && "left" !== this.alignOptions.align && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align())
    }
    removeClass(t) {
      return this.attr("class", ("" + this.attr("class")).replace(eH(t) ? RegExp(`(^| )${t}( |$)`) : t, " ").replace(/ +/g, " ").trim())
    }
    removeTextOutline() {
      let t = this.element.querySelector("tspan.highcharts-text-outline");
      t && this.safeRemoveChild(t)
    }
    safeRemoveChild(t) {
      let e = t.parentNode;
      e && e.removeChild(t)
    }
    setRadialReference(t) {
      let e = this.element.gradient && this.renderer.gradients[this.element.gradient];
      return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
    }
    shadow(t) {
      let {
        renderer: e
      } = this, i = eF(this.parentGroup?.rotation === 90 ? {
        offsetX: -1,
        offsetY: -1
      } : {}, eX(t) ? t : {}), s = e.shadowDefinition(i);
      return this.attr({
        filter: t ? `url(${e.url}#${s})` : "none"
      })
    }
    show(t = !0) {
      return this.attr({
        visibility: t ? "inherit" : "visible"
      })
    }
    "stroke-widthSetter"(t, e, i) {
      this[e] = t, i.setAttribute(e, t)
    }
    strokeWidth() {
      if (!this.renderer.styledMode) return this["stroke-width"] || 0;
      let t = this.getStyle("stroke-width"),
        e = 0,
        i;
      return /px$/.test(t) ? e = eU(t) : "" !== t && (eP(i = eM.createElementNS(eS, "rect"), {
        width: t,
        "stroke-width": 0
      }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)), e
    }
    symbolAttr(t) {
      let e = this;
      eq.symbolCustomAttribs.forEach(function (i) {
        e[i] = ej(t[i], e[i])
      }), e.attr({
        d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
      })
    }
    textSetter(t) {
      t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this), this.reAlign())
    }
    titleSetter(t) {
      let e = this.element,
        i = e.getElementsByTagName("title")[0] || eM.createElementNS(this.SVG_NS, "title");
      e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = e_(ej(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    }
    toFront() {
      let t = this.element;
      return t.parentNode.appendChild(t), this
    }
    translate(t, e) {
      return this.attr({
        translateX: t,
        translateY: e
      })
    }
    updateTransform(t = "transform") {
      let {
        element: e,
        matrix: i,
        rotation: s = 0,
        rotationOriginX: o,
        rotationOriginY: r,
        scaleX: a,
        scaleY: n,
        translateX: h = 0,
        translateY: l = 0
      } = this, d = ["translate(" + h + "," + l + ")"];
      eB(i) && d.push("matrix(" + i.join(",") + ")"), s && (d.push("rotate(" + s + " " + ej(o, e.getAttribute("x"), 0) + " " + ej(r, e.getAttribute("y") || 0) + ")"), this.text?.element.tagName === "SPAN" && this.text.attr({
        rotation: s,
        rotationOriginX: (o || 0) - this.padding,
        rotationOriginY: (r || 0) - this.padding
      })), (eB(a) || eB(n)) && d.push("scale(" + ej(a, 1) + " " + ej(n, 1) + ")"), d.length && !(this.text || this).textPath && e.setAttribute(t, d.join(" "))
    }
    visibilitySetter(t, e, i) {
      "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
    }
    xGetter(t) {
      return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
    }
    zIndexSetter(t, e) {
      let i = this.renderer,
        s = this.parentGroup,
        o = (s || i).element || i.box,
        r = this.element,
        a = o === i.box,
        n, h, l, d = !1,
        c, p = this.added,
        u;
      if (eB(t) ? (r.setAttribute("data-z-index", t), t = +t, this[e] === t && (p = !1)) : eB(this[e]) && r.removeAttribute("data-z-index"), this[e] = t, p) {
        for ((t = this.zIndex) && s && (s.handleZ = !0), u = (n = o.childNodes).length - 1; u >= 0 && !d; u--) c = !eB(l = (h = n[u]).getAttribute("data-z-index")), h !== r && (t < 0 && c && !a && !u ? (o.insertBefore(r, n[u]), d = !0) : (eU(l) <= t || c && (!eB(t) || t >= 0)) && (o.insertBefore(r, n[u + 1]), d = !0));
        d || (o.insertBefore(r, n[a ? 3 : 0]), d = !0)
      }
      return d
    }
  }
  eq.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], eq.prototype.strokeSetter = eq.prototype.fillSetter, eq.prototype.yGetter = eq.prototype.xGetter, eq.prototype.matrixSetter = eq.prototype.rotationOriginXSetter = eq.prototype.rotationOriginYSetter = eq.prototype.rotationSetter = eq.prototype.scaleXSetter = eq.prototype.scaleYSetter = eq.prototype.translateXSetter = eq.prototype.translateYSetter = eq.prototype.verticalAlignSetter = function (t, e) {
    this[e] = t, this.doTransform = !0
  };
  let eK = eq,
    {
      defined: eJ,
      extend: eQ,
      getAlignFactor: e0,
      isNumber: e1,
      merge: e2,
      pick: e3,
      removeEvent: e5
    } = ti;
  class e6 extends eK {
    constructor(t, e, i, s, o, r, a, n, h, l) {
      let d;
      super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = e, this.x = i, this.y = s, this.anchorX = r, this.anchorY = a, this.baseline = h, this.className = l, this.addClass("button" === l ? "highcharts-no-tooltip" : "highcharts-label"), l && this.addClass("highcharts-" + l), this.text = t.text(void 0, 0, 0, n).attr({
        zIndex: 1
      }), "string" == typeof o && ((d = /^url\((.*?)\)$/.test(o)) || this.renderer.symbols[o]) && (this.symbolKey = o), this.bBox = e6.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || d, this.deferredAttr = {}, this.alignFactor = 0
    }
    alignSetter(t) {
      let e = e0(t);
      e !== this.alignFactor && (this.alignFactor = e, this.bBox && e1(this.xSetting) && this.attr({
        x: this.xSetting
      }))
    }
    anchorXSetter(t, e) {
      this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting)
    }
    anchorYSetter(t, e) {
      this.anchorY = t, this.boxAttr(e, t - this.ySetting)
    }
    boxAttr(t, e) {
      this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e
    }
    css(t) {
      if (t) {
        let e = {};
        t = e2(t), e6.textProps.forEach(i => {
          void 0 !== t[i] && (e[i] = t[i], delete t[i])
        }), this.text.css(e), "fontSize" in e || "fontWeight" in e ? this.updateTextPadding() : ("width" in e || "textOverflow" in e) && this.updateBoxSize()
      }
      return eK.prototype.css.call(this, t)
    }
    destroy() {
      e5(this.element, "mouseenter"), e5(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), eK.prototype.destroy.call(this)
    }
    fillSetter(t, e) {
      t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t)
    }
    getBBox(t, e) {
      this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
      let {
        padding: i,
        height: s = 0,
        translateX: o = 0,
        translateY: r = 0,
        width: a = 0
      } = this, n = e3(this.paddingLeft, i), h = e ?? (this.rotation || 0), l = {
        width: a,
        height: s,
        x: o + this.bBox.x - n,
        y: r + this.bBox.y - i + this.baselineOffset
      };
      return h && (l = this.getRotatedBox(l, h)), l
    }
    getCrispAdjust() {
      return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
    }
    heightSetter(t) {
      this.heightSetting = t, this.doUpdate = !0
    }
    afterSetters() {
      super.afterSetters(), this.doUpdate && (this.updateBoxSize(), this.doUpdate = !1)
    }
    onAdd() {
      this.text.add(this), this.attr({
        text: e3(this.textStr, ""),
        x: this.x || 0,
        y: this.y || 0
      }), this.box && eJ(this.anchorX) && this.attr({
        anchorX: this.anchorX,
        anchorY: this.anchorY
      })
    }
    paddingSetter(t, e) {
      e1(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0
    }
    rSetter(t, e) {
      this.boxAttr(e, t)
    }
    strokeSetter(t, e) {
      this.stroke = t, this.boxAttr(e, t)
    }
    "stroke-widthSetter"(t, e) {
      t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t)
    }
    "text-alignSetter"(t) {
      this.textAlign = t
    }
    textSetter(t) {
      void 0 !== t && this.text.attr({
        text: t
      }), this.updateTextPadding(), this.reAlign()
    }
    updateBoxSize() {
      let t;
      let e = this.text,
        i = {},
        s = this.padding,
        o = this.bBox = (!e1(this.widthSetting) || !e1(this.heightSetting) || this.textAlign) && eJ(e.textStr) ? e.getBBox(void 0, 0) : e6.emptyBBox;
      this.width = this.getPaddedWidth(), this.height = (this.heightSetting || o.height || 0) + 2 * s;
      let r = this.renderer.fontMetrics(e);
      if (this.baselineOffset = s + Math.min((this.text.firstLineMetrics || r).b, o.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - r.h) / 2), this.needsBox && !e.textPath) {
        if (!this.box) {
          let t = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
          t.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), t.add(this)
        }
        t = this.getCrispAdjust(), i.x = t, i.y = (this.baseline ? -this.baselineOffset : 0) + t, i.width = Math.round(this.width), i.height = Math.round(this.height), this.box.attr(eQ(i, this.deferredAttr)), this.deferredAttr = {}
      }
    }
    updateTextPadding() {
      let t = this.text;
      if (!t.textPath) {
        this.updateBoxSize();
        let e = this.baseline ? 0 : this.baselineOffset,
          i = (this.paddingLeft ?? this.padding) + (eJ(this.widthSetting) && this.bBox ? e0(this.textAlign) * (this.widthSetting - this.bBox.width) : 0);
        (i !== t.x || e !== t.y) && (t.attr("x", i), t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)), void 0 !== e && t.attr("y", e)), t.x = i, t.y = e
      }
    }
    widthSetter(t) {
      this.widthSetting = e1(t) ? t : void 0, this.doUpdate = !0
    }
    getPaddedWidth() {
      let t = this.padding,
        e = e3(this.paddingLeft, t),
        i = e3(this.paddingRight, t);
      return (this.widthSetting || this.bBox.width || 0) + e + i
    }
    xSetter(t) {
      this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting)
    }
    ySetter(t) {
      this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting)
    }
  }
  e6.emptyBBox = {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }, e6.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineClamp", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"];
  let {
    defined: e9,
    isNumber: e4,
    pick: e8
  } = ti;

  function e7(t, e, i, s, o) {
    let r = [];
    if (o) {
      let a = o.start || 0,
        n = e8(o.r, i),
        h = e8(o.r, s || i),
        l = 2e-4 / (o.borderRadius ? 1 : Math.max(n, 1)),
        d = Math.abs((o.end || 0) - a - 2 * Math.PI) < l,
        c = (o.end || 0) - (d ? l : 0),
        p = o.innerR,
        u = e8(o.open, d),
        g = Math.cos(a),
        f = Math.sin(a),
        m = Math.cos(c),
        x = Math.sin(c),
        y = e8(o.longArc, c - a - Math.PI < l ? 0 : 1),
        b = ["A", n, h, 0, y, e8(o.clockwise, 1), t + n * m, e + h * x];
      b.params = {
        start: a,
        end: c,
        cx: t,
        cy: e
      }, r.push(["M", t + n * g, e + h * f], b), e9(p) && ((b = ["A", p, p, 0, y, e9(o.clockwise) ? 1 - o.clockwise : 0, t + p * g, e + p * f]).params = {
        start: c,
        end: a,
        cx: t,
        cy: e
      }, r.push(u ? ["M", t + p * m, e + p * x] : ["L", t + p * m, e + p * x], b)), u || r.push(["Z"])
    }
    return r
  }

  function it(t, e, i, s, o) {
    return o && o.r ? ie(t, e, i, s, o) : [
      ["M", t, e],
      ["L", t + i, e],
      ["L", t + i, e + s],
      ["L", t, e + s],
      ["Z"]
    ]
  }

  function ie(t, e, i, s, o) {
    let r = o?.r || 0;
    return [
      ["M", t + r, e],
      ["L", t + i - r, e],
      ["A", r, r, 0, 0, 1, t + i, e + r],
      ["L", t + i, e + s - r],
      ["A", r, r, 0, 0, 1, t + i - r, e + s],
      ["L", t + r, e + s],
      ["A", r, r, 0, 0, 1, t, e + s - r],
      ["L", t, e + r],
      ["A", r, r, 0, 0, 1, t + r, e],
      ["Z"]
    ]
  }
  let ii = {
    arc: e7,
    callout: function (t, e, i, s, o) {
      let r = Math.min(o && o.r || 0, i, s),
        a = r + 6,
        n = o && o.anchorX,
        h = o && o.anchorY || 0,
        l = ie(t, e, i, s, {
          r
        });
      if (!e4(n) || n < i && n > 0 && h < s && h > 0) return l;
      if (t + n > i - a) {
        if (h > e + a && h < e + s - a) l.splice(3, 1, ["L", t + i, h - 6], ["L", t + i + 6, h], ["L", t + i, h + 6], ["L", t + i, e + s - r]);
        else if (n < i) {
          let o = h < e + a,
            d = o ? e : e + s;
          l.splice(o ? 2 : 5, 0, ["L", n, h], ["L", t + i - r, d])
        } else l.splice(3, 1, ["L", t + i, s / 2], ["L", n, h], ["L", t + i, s / 2], ["L", t + i, e + s - r])
      } else if (t + n < a) {
        if (h > e + a && h < e + s - a) l.splice(7, 1, ["L", t, h + 6], ["L", t - 6, h], ["L", t, h - 6], ["L", t, e + r]);
        else if (n > 0) {
          let i = h < e + a,
            o = i ? e : e + s;
          l.splice(i ? 1 : 6, 0, ["L", n, h], ["L", t + r, o])
        } else l.splice(7, 1, ["L", t, s / 2], ["L", n, h], ["L", t, s / 2], ["L", t, e + r])
      } else h > s && n < i - a ? l.splice(5, 1, ["L", n + 6, e + s], ["L", n, e + s + 6], ["L", n - 6, e + s], ["L", t + r, e + s]) : h < 0 && n > a && l.splice(1, 1, ["L", n - 6, e], ["L", n, e - 6], ["L", n + 6, e], ["L", i - r, e]);
      return l
    },
    circle: function (t, e, i, s) {
      return e7(t + i / 2, e + s / 2, i / 2, s / 2, {
        start: .5 * Math.PI,
        end: 2.5 * Math.PI,
        open: !1
      })
    },
    diamond: function (t, e, i, s) {
      return [
        ["M", t + i / 2, e],
        ["L", t + i, e + s / 2],
        ["L", t + i / 2, e + s],
        ["L", t, e + s / 2],
        ["Z"]
      ]
    },
    rect: it,
    roundedRect: ie,
    square: it,
    triangle: function (t, e, i, s) {
      return [
        ["M", t + i / 2, e],
        ["L", t + i, e + s],
        ["L", t, e + s],
        ["Z"]
      ]
    },
    "triangle-down": function (t, e, i, s) {
      return [
        ["M", t, e],
        ["L", t + i, e],
        ["L", t + i / 2, e + s],
        ["Z"]
      ]
    }
  },
    {
      doc: is,
      SVG_NS: io,
      win: ir
    } = L,
    {
      attr: ia,
      extend: ih,
      fireEvent: il,
      isString: id,
      objectEach: ic,
      pick: ip
    } = ti,
    iu = (t, e) => t.substring(0, e) + "…",
    ig = class {
      constructor(t) {
        let e = t.styles;
        this.renderer = t.renderer, this.svgElement = t, this.width = t.textWidth, this.textLineHeight = e && e.lineHeight, this.textOutline = e && e.textOutline, this.ellipsis = !!(e && "ellipsis" === e.textOverflow), this.lineClamp = e?.lineClamp, this.noWrap = !!(e && "nowrap" === e.whiteSpace)
      }
      buildSVG() {
        let t = this.svgElement,
          e = t.element,
          i = t.renderer,
          s = ip(t.textStr, "").toString(),
          o = -1 !== s.indexOf("<"),
          r = e.childNodes,
          a = !t.added && i.box,
          n = [s, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, t.getStyle("font-size"), t.styles.lineClamp, this.width].join(",");
        if (n !== t.textCache) {
          t.textCache = n, delete t.actualWidth;
          for (let t = r.length; t--;) e.removeChild(r[t]);
          if (o || this.ellipsis || this.width || t.textPath || -1 !== s.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(s))) {
            if ("" !== s) {
              a && a.appendChild(e);
              let i = new t9(s);
              this.modifyTree(i.nodes), i.addToDOM(e), this.modifyDOM(), this.ellipsis && -1 !== (e.textContent || "").indexOf("…") && t.attr("title", this.unescapeEntities(t.textStr || "", ["&lt;", "&gt;"])), a && a.removeChild(e)
            }
          } else e.appendChild(is.createTextNode(this.unescapeEntities(s)));
          id(this.textOutline) && t.applyTextOutline && t.applyTextOutline(this.textOutline)
        }
      }
      modifyDOM() {
        let t;
        let e = this.svgElement,
          i = ia(e.element, "x");
        for (e.firstLineMetrics = void 0; t = e.element.firstChild;)
          if (/^[\s​]*$/.test(t.textContent || " ")) e.element.removeChild(t);
          else break;
        [].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), (t, s) => {
          t.nextSibling && t.previousSibling && (0 === s && 1 === t.previousSibling.nodeType && (e.firstLineMetrics = e.renderer.fontMetrics(t.previousSibling)), ia(t, {
            dy: this.getLineHeight(t.nextSibling),
            x: i
          }))
        });
        let s = this.width || 0;
        if (!s) return;
        let o = (t, o) => {
          let r = t.textContent || "",
            a = r.replace(/([^\^])-/g, "$1- ").split(" "),
            n = !this.noWrap && (a.length > 1 || e.element.childNodes.length > 1),
            h = this.getLineHeight(o),
            l = Math.max(0, s - .8 * h),
            d = 0,
            c = e.actualWidth;
          if (n) {
            let r = [],
              n = [];
            for (; o.firstChild && o.firstChild !== t;) n.push(o.firstChild), o.removeChild(o.firstChild);
            for (; a.length;)
              if (a.length && !this.noWrap && d > 0 && (r.push(t.textContent || ""), t.textContent = a.join(" ").replace(/- /g, "-")), this.truncate(t, void 0, a, 0 === d && c || 0, s, l, (t, e) => a.slice(0, e).join(" ").replace(/- /g, "-")), c = e.actualWidth, d++, this.lineClamp && d >= this.lineClamp) {
                a.length && (this.truncate(t, t.textContent || "", void 0, 0, s, l, iu), t.textContent = t.textContent?.replace("…", "") + "…");
                break
              } n.forEach(e => {
                o.insertBefore(e, t)
              }), r.forEach(e => {
                o.insertBefore(is.createTextNode(e), t);
                let s = is.createElementNS(io, "tspan");
                s.textContent = "​", ia(s, {
                  dy: h,
                  x: i
                }), o.insertBefore(s, t)
              })
          } else this.ellipsis && r && this.truncate(t, r, void 0, 0, s, l, iu)
        },
          r = t => {
            [].slice.call(t.childNodes).forEach(i => {
              i.nodeType === ir.Node.TEXT_NODE ? o(i, t) : (-1 !== i.className.baseVal.indexOf("highcharts-br") && (e.actualWidth = 0), r(i))
            })
          };
        r(e.element)
      }
      getLineHeight(t) {
        let e = t.nodeType === ir.Node.TEXT_NODE ? t.parentElement : t;
        return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e || this.svgElement.element).h
      }
      modifyTree(t) {
        let e = (i, s) => {
          let {
            attributes: o = {},
            children: r,
            style: a = {},
            tagName: n
          } = i, h = this.renderer.styledMode;
          if ("b" === n || "strong" === n ? h ? o.class = "highcharts-strong" : a.fontWeight = "bold" : ("i" === n || "em" === n) && (h ? o.class = "highcharts-emphasized" : a.fontStyle = "italic"), a && a.color && (a.fill = a.color), "br" === n) {
            o.class = "highcharts-br", i.textContent = "​";
            let e = t[s + 1];
            e && e.textContent && (e.textContent = e.textContent.replace(/^ +/gm, ""))
          } else "a" === n && r && r.some(t => "#text" === t.tagName) && (i.children = [{
            children: r,
            tagName: "tspan"
          }]);
          "#text" !== n && "a" !== n && (i.tagName = "tspan"), ih(i, {
            attributes: o,
            style: a
          }), r && r.filter(t => "#text" !== t.tagName).forEach(e)
        };
        t.forEach(e), il(this.svgElement, "afterModifyTree", {
          nodes: t
        })
      }
      truncate(t, e, i, s, o, r, a) {
        let n, h;
        let l = this.svgElement,
          {
            rotation: d
          } = l,
          c = [],
          p = i && !s ? 1 : 0,
          u = (e || i || "").length,
          g = u;
        i || (o = r);
        let f = function (e, o) {
          let r = o || e,
            a = t.parentNode;
          if (a && void 0 === c[r] && a.getSubStringLength) try {
            c[r] = s + a.getSubStringLength(0, i ? r + 1 : r)
          } catch (t) { }
          return c[r]
        };
        if (l.rotation = 0, s + (h = f(t.textContent.length)) > o) {
          for (; p <= u;) g = Math.ceil((p + u) / 2), i && (n = a(i, g)), h = f(g, n && n.length - 1), p === u ? p = u + 1 : h > o ? u = g - 1 : p = g;
          0 === u ? t.textContent = "" : e && u === e.length - 1 || (t.textContent = n || a(e || i, g)), this.ellipsis && h > o && this.truncate(t, t.textContent || "", void 0, 0, o, r, iu)
        }
        i && i.splice(0, g), l.actualWidth = h, l.rotation = d
      }
      unescapeEntities(t, e) {
        return ic(this.renderer.escapes, function (i, s) {
          e && -1 !== e.indexOf(i) || (t = t.toString().replace(RegExp(i, "g"), s))
        }), t
      }
    },
    {
      defaultOptions: im
    } = tA,
    {
      charts: ix,
      deg2rad: iy,
      doc: ib,
      isFirefox: iv,
      isMS: ik,
      isWebKit: iM,
      noop: iw,
      SVG_NS: iS,
      symbolSizes: iA,
      win: iT
    } = L,
    {
      addEvent: iC,
      attr: iP,
      createElement: iO,
      crisp: iE,
      css: iL,
      defined: iB,
      destroyObjectProperties: iD,
      extend: iI,
      isArray: iz,
      isNumber: iR,
      isObject: iN,
      isString: iW,
      merge: iG,
      pick: iX,
      pInt: iH,
      replaceNested: iF,
      uniqueKey: iY
    } = ti;
  class ij {
    constructor(t, e, i, s, o, r, a) {
      let n, h;
      let l = this.createElement("svg").attr({
        version: "1.1",
        class: "highcharts-root"
      }),
        d = l.element;
      a || l.css(this.getStyle(s || {})), t.appendChild(d), iP(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && iP(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = l, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(ib.createTextNode("Created with Highcharts 12.0.2")), this.defs = this.createElement("defs").add(), this.allowHTML = r, this.forExport = o, this.styledMode = a, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = l.getStyle("font-size"), this.setSize(e, i, !1), iv && t.getBoundingClientRect && ((n = function () {
        iL(t, {
          left: 0,
          top: 0
        }), h = t.getBoundingClientRect(), iL(t, {
          left: Math.ceil(h.left) - h.left + "px",
          top: Math.ceil(h.top) - h.top + "px"
        })
      })(), this.unSubPixelFix = iC(iT, "resize", n))
    }
    definition(t) {
      return new t9([t]).addToDOM(this.defs.element)
    }
    getReferenceURL() {
      if ((iv || iM) && ib.getElementsByTagName("base").length) {
        if (!iB(e)) {
          let t = iY(),
            i = new t9([{
              tagName: "svg",
              attributes: {
                width: 8,
                height: 8
              },
              children: [{
                tagName: "defs",
                children: [{
                  tagName: "clipPath",
                  attributes: {
                    id: t
                  },
                  children: [{
                    tagName: "rect",
                    attributes: {
                      width: 4,
                      height: 4
                    }
                  }]
                }]
              }, {
                tagName: "rect",
                attributes: {
                  id: "hitme",
                  width: 8,
                  height: 8,
                  "clip-path": `url(#${t})`,
                  fill: "rgba(0,0,0,0.001)"
                }
              }]
            }]).addToDOM(ib.body);
          iL(i, {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9e5
          });
          let s = ib.elementFromPoint(6, 6);
          e = "hitme" === (s && s.id), ib.body.removeChild(i)
        }
        if (e) return iF(iT.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\$1"], [/ /g, "%20"])
      }
      return ""
    }
    getStyle(t) {
      return this.style = iI({
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
        fontSize: "1rem"
      }, t), this.style
    }
    setStyle(t) {
      this.boxWrapper.css(this.getStyle(t))
    }
    isHidden() {
      return !this.boxWrapper.getBBox().width
    }
    destroy() {
      let t = this.defs;
      return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), iD(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null
    }
    createElement(t) {
      return new this.Element(this, t)
    }
    getRadialAttr(t, e) {
      return {
        cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
        cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
        r: (e.r || 0) * t[2]
      }
    }
    shadowDefinition(t) {
      let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map(e => `${e}-${t[e]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""),
        i = iG({
          color: "#000000",
          offsetX: 1,
          offsetY: 1,
          opacity: .15,
          width: 5
        }, t);
      return this.defs.element.querySelector(`#${e}`) || this.definition({
        tagName: "filter",
        attributes: {
          id: e,
          filterUnits: i.filterUnits
        },
        children: this.getShadowFilterContent(i)
      }), e
    }
    getShadowFilterContent(t) {
      return [{
        tagName: "feDropShadow",
        attributes: {
          dx: t.offsetX,
          dy: t.offsetY,
          "flood-color": t.color,
          "flood-opacity": Math.min(5 * t.opacity, 1),
          stdDeviation: t.width / 2
        }
      }]
    }
    buildText(t) {
      new ig(t).buildSVG()
    }
    getContrast(t) {
      let e = tE.parse(t).rgba.map(t => {
        let e = t / 255;
        return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
      }),
        i = .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
      return 1.05 / (i + .05) > (i + .05) / .05 ? "#FFFFFF" : "#000000"
    }
    button(t, e, i, s, o = {}, r, a, n, h, l) {
      let d = this.label(t, e, i, h, void 0, void 0, l, void 0, "button"),
        c = this.styledMode,
        p = arguments,
        u = 0;
      o = iG(im.global.buttonTheme, o), c && (delete o.fill, delete o.stroke, delete o["stroke-width"]);
      let g = o.states || {},
        f = o.style || {};
      delete o.states, delete o.style;
      let m = [t9.filterUserAttributes(o)],
        x = [f];
      return c || ["hover", "select", "disabled"].forEach((t, e) => {
        m.push(iG(m[0], t9.filterUserAttributes(p[e + 5] || g[t] || {}))), x.push(m[e + 1].style), delete m[e + 1].style
      }), iC(d.element, ik ? "mouseover" : "mouseenter", function () {
        3 !== u && d.setState(1)
      }), iC(d.element, ik ? "mouseout" : "mouseleave", function () {
        3 !== u && d.setState(u)
      }), d.setState = (t = 0) => {
        if (1 !== t && (d.state = u = t), d.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t]), !c) {
          d.attr(m[t]);
          let e = x[t];
          iN(e) && d.css(e)
        }
      }, d.attr(m[0]), !c && (d.css(iI({
        cursor: "default"
      }, f)), l && d.text.css({
        pointerEvents: "none"
      })), d.on("touchstart", t => t.stopPropagation()).on("click", function (t) {
        3 !== u && s.call(d, t)
      })
    }
    crispLine(t, e) {
      let [i, s] = t;
      return iB(i[1]) && i[1] === s[1] && (i[1] = s[1] = iE(i[1], e)), iB(i[2]) && i[2] === s[2] && (i[2] = s[2] = iE(i[2], e)), t
    }
    path(t) {
      let e = this.styledMode ? {} : {
        fill: "none"
      };
      return iz(t) ? e.d = t : iN(t) && iI(e, t), this.createElement("path").attr(e)
    }
    circle(t, e, i) {
      let s = iN(t) ? t : void 0 === t ? {} : {
        x: t,
        y: e,
        r: i
      },
        o = this.createElement("circle");
      return o.xSetter = o.ySetter = function (t, e, i) {
        i.setAttribute("c" + e, t)
      }, o.attr(s)
    }
    arc(t, e, i, s, o, r) {
      let a;
      iN(t) ? (e = (a = t).y, i = a.r, s = a.innerR, o = a.start, r = a.end, t = a.x) : a = {
        innerR: s,
        start: o,
        end: r
      };
      let n = this.symbol("arc", t, e, i, i, a);
      return n.r = i, n
    }
    rect(t, e, i, s, o, r) {
      let a = iN(t) ? t : void 0 === t ? {} : {
        x: t,
        y: e,
        r: o,
        width: Math.max(i || 0, 0),
        height: Math.max(s || 0, 0)
      },
        n = this.createElement("rect");
      return this.styledMode || (void 0 !== r && (a["stroke-width"] = r, iI(a, n.crisp(a))), a.fill = "none"), n.rSetter = function (t, e, i) {
        n.r = t, iP(i, {
          rx: t,
          ry: t
        })
      }, n.rGetter = function () {
        return n.r || 0
      }, n.attr(a)
    }
    roundedRect(t) {
      return this.symbol("roundedRect").attr(t)
    }
    setSize(t, e, i) {
      this.width = t, this.height = e, this.boxWrapper.animate({
        width: t,
        height: e
      }, {
        step: function () {
          this.attr({
            viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
          })
        },
        duration: iX(i, !0) ? void 0 : 0
      }), this.alignElements()
    }
    g(t) {
      let e = this.createElement("g");
      return t ? e.attr({
        class: "highcharts-" + t
      }) : e
    }
    image(t, e, i, s, o, r) {
      let a = {
        preserveAspectRatio: "none"
      };
      iR(e) && (a.x = e), iR(i) && (a.y = i), iR(s) && (a.width = s), iR(o) && (a.height = o);
      let n = this.createElement("image").attr(a),
        h = function (e) {
          n.attr({
            href: t
          }), r.call(n, e)
        };
      if (r) {
        n.attr({
          href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        });
        let e = new iT.Image;
        iC(e, "load", h), e.src = t, e.complete && h({})
      } else n.attr({
        href: t
      });
      return n
    }
    symbol(t, e, i, s, o, r) {
      let a, n, h, l;
      let d = this,
        c = /^url\((.*?)\)$/,
        p = c.test(t),
        u = !p && (this.symbols[t] ? t : "circle"),
        g = u && this.symbols[u];
      if (g) "number" == typeof e && (n = g.call(this.symbols, e || 0, i || 0, s || 0, o || 0, r)), a = this.path(n), d.styledMode || a.attr("fill", "none"), iI(a, {
        symbolName: u || void 0,
        x: e,
        y: i,
        width: s,
        height: o
      }), r && iI(a, r);
      else if (p) {
        h = t.match(c)[1];
        let s = a = this.image(h);
        s.imgwidth = iX(r && r.width, iA[h] && iA[h].width), s.imgheight = iX(r && r.height, iA[h] && iA[h].height), l = t => t.attr({
          width: t.width,
          height: t.height
        }), ["width", "height"].forEach(t => {
          s[`${t}Setter`] = function (t, e) {
            this[e] = t;
            let {
              alignByTranslate: i,
              element: s,
              width: o,
              height: a,
              imgwidth: n,
              imgheight: h
            } = this, l = "width" === e ? n : h, d = 1;
            r && "within" === r.backgroundSize && o && a && n && h ? (d = Math.min(o / n, a / h), iP(s, {
              width: Math.round(n * d),
              height: Math.round(h * d)
            })) : s && l && s.setAttribute(e, l), !i && n && h && this.translate(((o || 0) - n * d) / 2, ((a || 0) - h * d) / 2)
          }
        }), iB(e) && s.attr({
          x: e,
          y: i
        }), s.isImg = !0, s.symbolUrl = t, iB(s.imgwidth) && iB(s.imgheight) ? l(s) : (s.attr({
          width: 0,
          height: 0
        }), iO("img", {
          onload: function () {
            let t = ix[d.chartIndex];
            0 === this.width && (iL(this, {
              position: "absolute",
              top: "-999em"
            }), ib.body.appendChild(this)), iA[h] = {
              width: this.width,
              height: this.height
            }, s.imgwidth = this.width, s.imgheight = this.height, s.element && l(s), this.parentNode && this.parentNode.removeChild(this), d.imgCount--, d.imgCount || !t || t.hasLoaded || t.onload()
          },
          src: h
        }), this.imgCount++)
      }
      return a
    }
    clipRect(t, e, i, s) {
      return this.rect(t, e, i, s, 0)
    }
    text(t, e, i, s) {
      let o = {};
      if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
      o.x = Math.round(e || 0), i && (o.y = Math.round(i)), iB(t) && (o.text = t);
      let r = this.createElement("text").attr(o);
      return s && (!this.forExport || this.allowHTML) || (r.xSetter = function (t, e, i) {
        let s = i.getElementsByTagName("tspan"),
          o = i.getAttribute(e);
        for (let i = 0, r; i < s.length; i++)(r = s[i]).getAttribute(e) === o && r.setAttribute(e, t);
        i.setAttribute(e, t)
      }), r
    }
    fontMetrics(t) {
      let e = iH(eK.prototype.getStyle.call(t, "font-size") || 0),
        i = e < 24 ? e + 3 : Math.round(1.2 * e),
        s = Math.round(.8 * i);
      return {
        h: i,
        b: s,
        f: e
      }
    }
    rotCorr(t, e, i) {
      let s = t;
      return e && i && (s = Math.max(s * Math.cos(e * iy), 4)), {
        x: -t / 3 * Math.sin(e * iy),
        y: s
      }
    }
    pathToSegments(t) {
      let e = [],
        i = [],
        s = {
          A: 8,
          C: 7,
          H: 2,
          L: 3,
          M: 3,
          Q: 5,
          S: 5,
          T: 3,
          V: 2
        };
      for (let o = 0; o < t.length; o++) iW(i[0]) && iR(t[o]) && i.length === s[i[0].toUpperCase()] && t.splice(o, 0, i[0].replace("M", "L").replace("m", "l")), "string" == typeof t[o] && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[o]);
      return e.push(i.slice(0)), e
    }
    label(t, e, i, s, o, r, a, n, h) {
      return new e6(this, t, e, i, s, o, r, a, n, h)
    }
    alignElements() {
      this.alignedObjects.forEach(t => t.align())
    }
  }
  iI(ij.prototype, {
    Element: eK,
    SVG_NS: iS,
    escapes: {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    },
    symbols: ii,
    draw: iw
  }), ep.registerRendererType("svg", ij, !0);
  let {
    composed: iU
  } = L, {
    attr: iV,
    css: i_,
    createElement: i$,
    defined: iZ,
    extend: iq,
    getAlignFactor: iK,
    isNumber: iJ,
    pInt: iQ,
    pushUnique: i0
  } = ti;

  function i1(t, e, i) {
    let s = this.div?.style || i.style;
    eK.prototype[`${e}Setter`].call(this, t, e, i), s && (s[e] = t)
  }
  let i2 = (t, e) => {
    if (!t.div) {
      let i = iV(t.element, "class"),
        s = t.css,
        o = i$("div", i ? {
          className: i
        } : void 0, {
          position: "absolute",
          left: `${t.translateX || 0}px`,
          top: `${t.translateY || 0}px`,
          ...t.styles,
          display: t.display,
          opacity: t.opacity,
          visibility: t.visibility
        }, t.parentGroup?.div || e);
      t.classSetter = (t, e, i) => {
        i.setAttribute("class", t), o.className = t
      }, t.translateXSetter = t.translateYSetter = (e, i) => {
        t[i] = e, o.style["translateX" === i ? "left" : "top"] = `${e}px`, t.doTransform = !0
      }, t.opacitySetter = t.visibilitySetter = i1, t.css = e => (s.call(t, e), e.cursor && (o.style.cursor = e.cursor), e.pointerEvents && (o.style.pointerEvents = e.pointerEvents), t), t.on = function () {
        return eK.prototype.on.apply({
          element: o,
          onEvents: t.onEvents
        }, arguments), t
      }, t.div = o
    }
    return t.div
  };
  class i3 extends eK {
    static compose(t) {
      i0(iU, this.compose) && (t.prototype.html = function (t, e, i) {
        return new i3(this, "span").attr({
          text: t,
          x: Math.round(e),
          y: Math.round(i)
        })
      })
    }
    constructor(t, e) {
      super(t, e), this.css({
        position: "absolute",
        ...t.styledMode ? {} : {
          fontFamily: t.style.fontFamily,
          fontSize: t.style.fontSize
        }
      })
    }
    getSpanCorrection(t, e, i) {
      this.xCorr = -t * i, this.yCorr = -e
    }
    css(t) {
      let e;
      let {
        element: i
      } = this, s = "SPAN" === i.tagName && t && "width" in t, o = s && t.width;
      return s && (delete t.width, this.textWidth = iQ(o) || void 0, e = !0), t?.textOverflow === "ellipsis" && (t.overflow = "hidden"), t?.lineClamp && (t.display = "-webkit-box", t.WebkitLineClamp = t.lineClamp, t.WebkitBoxOrient = "vertical", t.overflow = "hidden"), iJ(Number(t?.fontSize)) && (t.fontSize = t.fontSize + "px"), iq(this.styles, t), i_(i, t), e && this.updateTransform(), this
    }
    htmlGetBBox() {
      let {
        element: t
      } = this;
      return {
        x: t.offsetLeft,
        y: t.offsetTop,
        width: t.offsetWidth,
        height: t.offsetHeight
      }
    }
    updateTransform() {
      if (!this.added) {
        this.alignOnAdd = !0;
        return
      }
      let {
        element: t,
        renderer: e,
        rotation: i,
        rotationOriginX: s,
        rotationOriginY: o,
        scaleX: r,
        scaleY: a,
        styles: n,
        textAlign: h = "left",
        textWidth: l,
        translateX: d = 0,
        translateY: c = 0,
        x: p = 0,
        y: u = 0
      } = this, {
        display: g = "block",
        whiteSpace: f
      } = n;
      if (i_(t, {
        marginLeft: `${d}px`,
        marginTop: `${c}px`
      }), "SPAN" === t.tagName) {
        let n = [i, h, t.innerHTML, l, this.textAlign].join(","),
          d = -(this.parentGroup?.padding * 1) || 0,
          c, m = !1;
        if (l !== this.oldTextWidth) {
          let e = this.textPxLength ? this.textPxLength : (i_(t, {
            width: "",
            whiteSpace: f || "nowrap"
          }), t.offsetWidth),
            s = l || 0;
          (s > this.oldTextWidth || e > s) && (/[ \-]/.test(t.textContent || t.innerText) || "ellipsis" === t.style.textOverflow) && (i_(t, {
            width: e > s || i || r ? l + "px" : "auto",
            display: g,
            whiteSpace: f || "normal"
          }), this.oldTextWidth = l, m = !0)
        }
        this.hasBoxWidthChanged = m, n !== this.cTT && (c = e.fontMetrics(t).b, iZ(i) && (i !== (this.oldRotation || 0) || h !== this.oldAlign) && this.setSpanRotation(i, d, d), this.getSpanCorrection(!iZ(i) && !this.textWidth && this.textPxLength || t.offsetWidth, c, iK(h)));
        let {
          xCorr: x = 0,
          yCorr: y = 0
        } = this, b = {
          left: `${p + x}px`,
          top: `${u + y}px`,
          textAlign: h,
          transformOrigin: `${(s ?? p) - x - p - d}px ${(o ?? u) - y - u - d}px`
        };
        (r || a) && (b.transform = `scale(${r ?? 1},${a ?? 1})`), i_(t, b), this.cTT = n, this.oldRotation = i, this.oldAlign = h
      }
    }
    setSpanRotation(t, e, i) {
      i_(this.element, {
        transform: `rotate(${t}deg)`,
        transformOrigin: `${e}% ${i}px`
      })
    }
    add(t) {
      let e;
      let i = this.renderer.box.parentNode,
        s = [];
      if (this.parentGroup = t, t && !(e = t.div)) {
        let o = t;
        for (; o;) s.push(o), o = o.parentGroup;
        for (let t of s.reverse()) e = i2(t, i)
      }
      return (e || i).appendChild(this.element), this.added = !0, this.alignOnAdd && this.updateTransform(), this
    }
    textSetter(t) {
      t !== this.textStr && (delete this.bBox, delete this.oldTextWidth, t9.setElementHTML(this.element, t ?? ""), this.textStr = t, this.doTransform = !0)
    }
    alignSetter(t) {
      this.alignValue = this.textAlign = t, this.doTransform = !0
    }
    xSetter(t, e) {
      this[e] = t, this.doTransform = !0
    }
  }
  let i5 = i3.prototype;
  i5.visibilitySetter = i5.opacitySetter = i1, i5.ySetter = i5.rotationSetter = i5.rotationOriginXSetter = i5.rotationOriginYSetter = i5.xSetter,
    function (t) {
      t.xAxis = {
        alignTicks: !0,
        allowDecimals: void 0,
        panningEnabled: !0,
        zIndex: 2,
        zoomEnabled: !0,
        dateTimeLabelFormats: {
          millisecond: {
            main: "%[HMSL]",
            range: !1
          },
          second: {
            main: "%[HMS]",
            range: !1
          },
          minute: {
            main: "%[HM]",
            range: !1
          },
          hour: {
            main: "%[HM]",
            range: !1
          },
          day: {
            main: "%[eb]"
          },
          week: {
            main: "%[eb]"
          },
          month: {
            main: "%[bY]"
          },
          year: {
            main: "%Y"
          }
        },
        endOnTick: !1,
        gridLineDashStyle: "Solid",
        gridZIndex: 1,
        labels: {
          autoRotationLimit: 80,
          distance: 15,
          enabled: !0,
          indentation: 10,
          overflow: "justify",
          reserveSpace: void 0,
          rotation: void 0,
          staggerLines: 0,
          step: 0,
          useHTML: !1,
          zIndex: 7,
          style: {
            color: "#333333",
            cursor: "default",
            fontSize: "0.8em",
            textOverflow: "ellipsis"
          }
        },
        maxPadding: .01,
        minorGridLineDashStyle: "Solid",
        minorTickLength: 2,
        minorTickPosition: "outside",
        minorTicksPerMajor: 5,
        minPadding: .01,
        offset: void 0,
        reversed: void 0,
        reversedStacks: !1,
        showEmpty: !0,
        showFirstLabel: !0,
        showLastLabel: !0,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          useHTML: !1,
          x: 0,
          y: 0,
          style: {
            color: "#666666",
            fontSize: "0.8em"
          }
        },
        visible: !0,
        minorGridLineColor: "#f2f2f2",
        minorGridLineWidth: 1,
        minorTickColor: "#999999",
        lineColor: "#333333",
        lineWidth: 1,
        gridLineColor: "#e6e6e6",
        gridLineWidth: void 0,
        tickColor: "#333333"
      }, t.yAxis = {
        reversedStacks: !0,
        endOnTick: !0,
        maxPadding: .05,
        minPadding: .05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: {
          x: void 0
        },
        startOnTick: !0,
        title: {
          text: "Values"
        },
        stackLabels: {
          animation: {},
          allowOverlap: !1,
          enabled: !1,
          crop: !0,
          overflow: "justify",
          formatter: function () {
            let {
              numberFormatter: t
            } = this.axis.chart;
            return t(this.total || 0, -1)
          },
          style: {
            color: "#000000",
            fontSize: "0.7em",
            fontWeight: "bold",
            textOutline: "1px contrast"
          }
        },
        gridLineWidth: 1,
        lineWidth: 0
      }
    }(l || (l = {}));
  let i6 = l,
    {
      addEvent: i9,
      isFunction: i4,
      objectEach: i8,
      removeEvent: i7
    } = ti;
  (d || (d = {})).registerEventOptions = function (t, e) {
    t.eventOptions = t.eventOptions || {}, i8(e.events, function (e, i) {
      t.eventOptions[i] !== e && (t.eventOptions[i] && (i7(t, i, t.eventOptions[i]), delete t.eventOptions[i]), i4(e) && (t.eventOptions[i] = e, i9(t, i, e, {
        order: 0
      })))
    })
  };
  let st = d,
    {
      deg2rad: se
    } = L,
    {
      clamp: si,
      correctFloat: ss,
      defined: so,
      destroyObjectProperties: sr,
      extend: sa,
      fireEvent: sn,
      getAlignFactor: sh,
      isNumber: sl,
      merge: sd,
      objectEach: sc,
      pick: sp
    } = ti,
    su = class {
      constructor(t, e, i, s, o) {
        this.isNew = !0, this.isNewLabel = !0, this.axis = t, this.pos = e, this.type = i || "", this.parameters = o || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, sn(this, "init"), i || s || this.addLabel()
      }
      addLabel() {
        let t = this,
          e = t.axis,
          i = e.options,
          s = e.chart,
          o = e.categories,
          r = e.logarithmic,
          a = e.names,
          n = t.pos,
          h = sp(t.options && t.options.labels, i.labels),
          l = e.tickPositions,
          d = n === l[0],
          c = n === l[l.length - 1],
          p = (!h.step || 1 === h.step) && 1 === e.tickInterval,
          u = l.info,
          g = t.label,
          f, m, x, y = this.parameters.category || (o ? sp(o[n], a[n], n) : n);
        r && sl(y) && (y = ss(r.lin2log(y))), e.dateTime && (u ? f = (m = s.time.resolveDTLFormat(i.dateTimeLabelFormats[!i.grid && u.higherRanks[n] || u.unitName])).main : sl(y) && (f = e.dateTime.getXDateFormat(y, i.dateTimeLabelFormats || {}))), t.isFirst = d, t.isLast = c;
        let b = {
          axis: e,
          chart: s,
          dateTimeLabelFormat: f,
          isFirst: d,
          isLast: c,
          pos: n,
          tick: t,
          tickPositionInfo: u,
          value: y
        };
        sn(this, "labelFormat", b);
        let v = t => h.formatter ? h.formatter.call(t, t) : h.format ? (t.text = e.defaultLabelFormatter.call(t), ec.format(h.format, t, s)) : e.defaultLabelFormatter.call(t),
          k = v.call(b, b),
          M = m && m.list;
        M ? t.shortenLabel = function () {
          for (x = 0; x < M.length; x++)
            if (sa(b, {
              dateTimeLabelFormat: M[x]
            }), g.attr({
              text: v.call(b, b)
            }), g.getBBox().width < e.getSlotWidth(t) - 2 * (h.padding || 0)) return;
          g.attr({
            text: ""
          })
        } : t.shortenLabel = void 0, p && e._addedPlotLB && t.moveLabel(k, h), so(g) || t.movedLabel ? g && g.textStr !== k && !p && (!g.textWidth || h.style.width || g.styles.width || g.css({
          width: null
        }), g.attr({
          text: k
        }), g.textPxLength = g.getBBox().width) : (t.label = g = t.createLabel(k, h), t.rotation = 0)
      }
      createLabel(t, e, i) {
        let s = this.axis,
          {
            renderer: o,
            styledMode: r
          } = s.chart,
          a = so(t) && e.enabled ? o.text(t, i?.x, i?.y, e.useHTML).add(s.labelGroup) : void 0;
        if (a) {
          let t = e.style.whiteSpace || "normal";
          r || a.css(sd(e.style, {
            whiteSpace: "nowrap"
          })), a.textPxLength = a.getBBox().width, r || a.css({
            whiteSpace: t
          })
        }
        return a
      }
      destroy() {
        sr(this, this.axis)
      }
      getPosition(t, e, i, s) {
        let o = this.axis,
          r = o.chart,
          a = s && r.oldChartHeight || r.chartHeight,
          n = {
            x: t ? ss(o.translate(e + i, void 0, void 0, s) + o.transB) : o.left + o.offset + (o.opposite ? (s && r.oldChartWidth || r.chartWidth) - o.right - o.left : 0),
            y: t ? a - o.bottom + o.offset - (o.opposite ? o.height : 0) : ss(a - o.translate(e + i, void 0, void 0, s) - o.transB)
          };
        return n.y = si(n.y, -1e9, 1e9), sn(this, "afterGetPosition", {
          pos: n
        }), n
      }
      getLabelPosition(t, e, i, s, o, r, a, n) {
        let h, l;
        let d = this.axis,
          c = d.transA,
          p = d.isLinked && d.linkedParent ? d.linkedParent.reversed : d.reversed,
          u = d.staggerLines,
          g = d.tickRotCorr || {
            x: 0,
            y: 0
          },
          f = s || d.reserveSpaceDefault ? 0 : -d.labelOffset * ("center" === d.labelAlign ? .5 : 1),
          m = o.distance,
          x = {};
        return h = 0 === d.side ? i.rotation ? -m : -i.getBBox().height : 2 === d.side ? g.y + m : Math.cos(i.rotation * se) * (g.y - i.getBBox(!1, 0).height / 2), so(o.y) && (h = 0 === d.side && d.horiz ? o.y + h : o.y), t = t + sp(o.x, [0, 1, 0, -1][d.side] * m) + f + g.x - (r && s ? r * c * (p ? -1 : 1) : 0), e = e + h - (r && !s ? r * c * (p ? 1 : -1) : 0), u && (l = a / (n || 1) % u, d.opposite && (l = u - l - 1), e += l * (d.labelOffset / u)), x.x = t, x.y = Math.round(e), sn(this, "afterGetLabelPosition", {
          pos: x,
          tickmarkOffset: r,
          index: a
        }), x
      }
      getLabelSize() {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
      }
      getMarkPath(t, e, i, s, o = !1, r) {
        return r.crispLine([
          ["M", t, e],
          ["L", t + (o ? 0 : -i), e + (o ? i : 0)]
        ], s)
      }
      handleOverflow(t) {
        let e = this.axis,
          i = e.options.labels,
          s = t.x,
          o = e.chart.chartWidth,
          r = e.chart.spacing,
          a = sp(e.labelLeft, Math.min(e.pos, r[3])),
          n = sp(e.labelRight, Math.max(e.isRadial ? 0 : e.pos + e.len, o - r[1])),
          h = this.label,
          l = this.rotation,
          d = sh(e.labelAlign || h.attr("align")),
          c = h.getBBox().width,
          p = e.getSlotWidth(this),
          u = p,
          g = 1,
          f, m, x;
        l || "justify" !== i.overflow ? l < 0 && s - d * c < a ? x = Math.round(s / Math.cos(l * se) - a) : l > 0 && s + d * c > n && (x = Math.round((o - s) / Math.cos(l * se))) : (f = s - d * c, m = s + (1 - d) * c, f < a ? u = t.x + u * (1 - d) - a : m > n && (u = n - t.x + u * d, g = -1), (u = Math.min(p, u)) < p && "center" === e.labelAlign && (t.x += g * (p - u - d * (p - Math.min(c, u)))), (c > u || e.autoRotation && (h.styles || {}).width) && (x = u)), x && h && (this.shortenLabel ? this.shortenLabel() : h.css(sa({}, {
          width: Math.floor(x) + "px",
          lineClamp: e.isRadial ? 0 : 1
        })))
      }
      moveLabel(t, e) {
        let i = this,
          s = i.label,
          o = i.axis,
          r = !1,
          a;
        s && s.textStr === t ? (i.movedLabel = s, r = !0, delete i.label) : sc(o.ticks, function (e) {
          r || e.isNew || e === i || !e.label || e.label.textStr !== t || (i.movedLabel = e.label, r = !0, e.labelPos = i.movedLabel.xy, delete e.label)
        }), !r && (i.labelPos || s) && (a = i.labelPos || s.xy, i.movedLabel = i.createLabel(t, e, a), i.movedLabel && i.movedLabel.attr({
          opacity: 0
        }))
      }
      render(t, e, i) {
        let s = this.axis,
          o = s.horiz,
          r = this.pos,
          a = sp(this.tickmarkOffset, s.tickmarkOffset),
          n = this.getPosition(o, r, a, e),
          h = n.x,
          l = n.y,
          d = s.pos,
          c = d + s.len,
          p = o ? h : l;
        !s.chart.polar && this.isNew && (ss(p) < d || p > c) && (i = 0);
        let u = sp(i, this.label && this.label.newOpacity, 1);
        i = sp(i, 1), this.isActive = !0, this.renderGridLine(e, i), this.renderMark(n, i), this.renderLabel(n, e, u, t), this.isNew = !1, sn(this, "afterRender")
      }
      renderGridLine(t, e) {
        let i = this.axis,
          s = i.options,
          o = {},
          r = this.pos,
          a = this.type,
          n = sp(this.tickmarkOffset, i.tickmarkOffset),
          h = i.chart.renderer,
          l = this.gridLine,
          d, c = s.gridLineWidth,
          p = s.gridLineColor,
          u = s.gridLineDashStyle;
        "minor" === this.type && (c = s.minorGridLineWidth, p = s.minorGridLineColor, u = s.minorGridLineDashStyle), l || (i.chart.styledMode || (o.stroke = p, o["stroke-width"] = c || 0, o.dashstyle = u), a || (o.zIndex = 1), t && (e = 0), this.gridLine = l = h.path().attr(o).addClass("highcharts-" + (a ? a + "-" : "") + "grid-line").add(i.gridGroup)), l && (d = i.getPlotLinePath({
          value: r + n,
          lineWidth: l.strokeWidth(),
          force: "pass",
          old: t,
          acrossPanes: !1
        })) && l[t || this.isNew ? "attr" : "animate"]({
          d: d,
          opacity: e
        })
      }
      renderMark(t, e) {
        let i = this.axis,
          s = i.options,
          o = i.chart.renderer,
          r = this.type,
          a = i.tickSize(r ? r + "Tick" : "tick"),
          n = t.x,
          h = t.y,
          l = sp(s["minor" !== r ? "tickWidth" : "minorTickWidth"], !r && i.isXAxis ? 1 : 0),
          d = s["minor" !== r ? "tickColor" : "minorTickColor"],
          c = this.mark,
          p = !c;
        a && (i.opposite && (a[0] = -a[0]), c || (this.mark = c = o.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(i.axisGroup), i.chart.styledMode || c.attr({
          stroke: d,
          "stroke-width": l
        })), c[p ? "attr" : "animate"]({
          d: this.getMarkPath(n, h, a[0], c.strokeWidth(), i.horiz, o),
          opacity: e
        }))
      }
      renderLabel(t, e, i, s) {
        let o = this.axis,
          r = o.horiz,
          a = o.options,
          n = this.label,
          h = a.labels,
          l = h.step,
          d = sp(this.tickmarkOffset, o.tickmarkOffset),
          c = t.x,
          p = t.y,
          u = !0;
        n && sl(c) && (n.xy = t = this.getLabelPosition(c, p, n, r, h, d, s, l), (!this.isFirst || this.isLast || a.showFirstLabel) && (!this.isLast || this.isFirst || a.showLastLabel) ? !r || h.step || h.rotation || e || 0 === i || this.handleOverflow(t) : u = !1, l && s % l && (u = !1), u && sl(t.y) ? (t.opacity = i, n[this.isNewLabel ? "attr" : "animate"](t).show(!0), this.isNewLabel = !1) : (n.hide(), this.isNewLabel = !0))
      }
      replaceMovedLabel() {
        let t = this.label,
          e = this.axis;
        t && !this.isNew && (t.animate({
          opacity: 0
        }, void 0, t.destroy), delete this.label), e.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel
      }
    },
    {
      animObject: sg
    } = tV,
    {
      xAxis: sf,
      yAxis: sm
    } = i6,
    {
      defaultOptions: sx
    } = tA,
    {
      registerEventOptions: sy
    } = st,
    {
      deg2rad: sb
    } = L,
    {
      arrayMax: sv,
      arrayMin: sk,
      clamp: sM,
      correctFloat: sw,
      defined: sS,
      destroyObjectProperties: sA,
      erase: sT,
      error: sC,
      extend: sP,
      fireEvent: sO,
      getClosestDistance: sE,
      insertItem: sL,
      isArray: sB,
      isNumber: sD,
      isString: sI,
      merge: sz,
      normalizeTickInterval: sR,
      objectEach: sN,
      pick: sW,
      relativeLength: sG,
      removeEvent: sX,
      splat: sH,
      syncTimeout: sF
    } = ti,
    sY = (t, e) => sR(e, void 0, void 0, sW(t.options.allowDecimals, e < .5 || void 0 !== t.tickAmount), !!t.tickAmount);
  sP(sx, {
    xAxis: sf,
    yAxis: sz(sf, sm)
  });
  class sj {
    constructor(t, e, i) {
      this.init(t, e, i)
    }
    init(t, e, i = this.coll) {
      let s = "xAxis" === i,
        o = this.isZAxis || (t.inverted ? !s : s);
      this.chart = t, this.horiz = o, this.isXAxis = s, this.coll = i, sO(this, "init", {
        userOptions: e
      }), this.opposite = sW(e.opposite, this.opposite), this.side = sW(e.side, this.side, o ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
      let r = this.options,
        a = r.labels;
      this.type ?? (this.type = r.type || "linear"), this.uniqueNames ?? (this.uniqueNames = r.uniqueNames ?? !0), sO(this, "afterSetType"), this.userOptions = e, this.minPixelPadding = 0, this.reversed = sW(r.reversed, this.reversed), this.visible = r.visible, this.zoomEnabled = r.zoomEnabled, this.hasNames = "category" === this.type || !0 === r.categories, this.categories = sB(r.categories) && r.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = sS(r.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ?? (this.len = 0), this.minRange = this.userMinRange = r.minRange || r.maxZoom, this.range = r.range, this.offset = r.offset || 0, this.max = void 0, this.min = void 0;
      let n = sW(r.crosshair, sH(t.options.tooltip.crosshairs)[s ? 0 : 1]);
      let p = sW(r.crosshair, sH(t.options.tooltip.crosshairs)[s ? 1 : 0]);

      this.crosshair = !0 === n ? {} : n, this.ycrosshair = !0 === p ? {} : p, -1 === t.axes.indexOf(this) && (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), sL(this, t[this.coll])), t.orderItems(this.coll), this.series = this.series || [], t.inverted && !this.isZAxis && s && !sS(this.reversed) && (this.reversed = !0), this.labelRotation = sD(a.rotation) ? a.rotation : void 0, sy(this, r), sO(this, "afterInit")
    }
    setOptions(t) {
      let e = this.horiz ? {
        labels: {
          autoRotation: [-45],
          padding: 3
        },
        margin: 15
      } : {
        labels: {
          padding: 1
        },
        title: {
          rotation: 90 * this.side
        }
      };
      this.options = sz(e, sx[this.coll], t), sO(this, "afterSetOptions", {
        userOptions: t
      })
    }
    defaultLabelFormatter() {
      let t = this.axis,
        {
          numberFormatter: e
        } = this.chart,
        i = sD(this.value) ? this.value : NaN,
        s = t.chart.time,
        o = t.categories,
        r = this.dateTimeLabelFormat,
        a = sx.lang,
        n = a.numericSymbols,
        h = a.numericSymbolMagnitude || 1e3,
        l = t.logarithmic ? Math.abs(i) : t.tickInterval,
        d = n && n.length,
        c, p;
      if (o) p = `${this.value}`;
      else if (r) p = s.dateFormat(r, i, !0);
      else if (d && n && l >= 1e3)
        for (; d-- && void 0 === p;) l >= (c = Math.pow(h, d + 1)) && 10 * i % c == 0 && null !== n[d] && 0 !== i && (p = e(i / c, -1) + n[d]);
      return void 0 === p && (p = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")), p
    }
    getSeriesExtremes() {
      let t;
      let e = this;
      sO(this, "getSeriesExtremes", null, function () {
        e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach(i => {
          if (i.reserveSpace()) {
            let s = i.options,
              o, r = s.threshold,
              a, n;
            if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= (r || 0) && (r = void 0), e.isXAxis) (o = i.getColumn("x")).length && (o = e.logarithmic ? o.filter(t => t > 0) : o, a = (t = i.getXExtremes(o)).min, n = t.max, sD(a) || a instanceof Date || (o = o.filter(sD), a = (t = i.getXExtremes(o)).min, n = t.max), o.length && (e.dataMin = Math.min(sW(e.dataMin, a), a), e.dataMax = Math.max(sW(e.dataMax, n), n)));
            else {
              let t = i.applyExtremes();
              sD(t.dataMin) && (a = t.dataMin, e.dataMin = Math.min(sW(e.dataMin, a), a)), sD(t.dataMax) && (n = t.dataMax, e.dataMax = Math.max(sW(e.dataMax, n), n)), sS(r) && (e.threshold = r), (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1)
            }
          }
        })
      }), sO(this, "afterGetSeriesExtremes")
    }
    translate(t, e, i, s, o, r) {
      let a = this.linkedParent || this,
        n = s && a.old ? a.old.min : a.min;
      if (!sD(n)) return NaN;
      let h = a.minPixelPadding,
        l = (a.isOrdinal || a.brokenAxis?.hasBreaks || a.logarithmic && o) && a.lin2val,
        d = 1,
        c = 0,
        p = s && a.old ? a.old.transA : a.transA,
        u = 0;
      return p || (p = a.transA), i && (d *= -1, c = a.len), a.reversed && (d *= -1, c -= d * (a.sector || a.len)), e ? (u = (t = t * d + c - h) / p + n, l && (u = a.lin2val(u))) : (l && (t = a.val2lin(t)), u = d * (t - n) * p + c + d * h + (sD(r) ? p * r : 0), a.isRadial || (u = sw(u))), u
    }
    toPixels(t, e) {
      return this.translate(this.chart?.time.parse(t) ?? NaN, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos)
    }
    toValue(t, e) {
      return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0)
    }
    getPlotLinePath(t) {
      let e = this,
        i = e.chart,
        s = e.left,
        o = e.top,
        r = t.old,
        a = t.value,
        n = t.lineWidth,
        h = r && i.oldChartHeight || i.chartHeight,
        l = r && i.oldChartWidth || i.chartWidth,
        d = e.transB,
        c = t.translatedValue,
        p = t.force,
        u, g, f, m, x;

      function y(t, e, i) {
        return "pass" !== p && (t < e || t > i) && (p ? t = sM(t, e, i) : x = !0), t
      }
      let b = {
        value: a,
        lineWidth: n,
        old: r,
        force: p,
        acrossPanes: t.acrossPanes,
        translatedValue: c
      };
      return sO(this, "getPlotLinePath", b, function (t) {
        u = f = (c = sM(c = sW(c, e.translate(a, void 0, void 0, r)), -1e9, 1e9)) + d, g = m = h - c - d, sD(c) ? e.horiz ? (g = o, m = h - e.bottom + (e.options.isInternal ? 0 : i.scrollablePixelsY || 0), u = f = y(u, s, s + e.width)) : (u = s, f = l - e.right + (i.scrollablePixelsX || 0), g = m = y(g, o, o + e.height)) : (x = !0, p = !1), t.path = x && !p ? void 0 : i.renderer.crispLine([
          ["M", u, g],
          ["L", f, m]
        ], n || 1)
      }), b.path
    }
    getLinearTickPositions(t, e, i) {
      let s, o, r;
      let a = sw(Math.floor(e / t) * t),
        n = sw(Math.ceil(i / t) * t),
        h = [];
      if (sw(a + t) === a && (r = 20), this.single) return [e];
      for (s = a; s <= n && (h.push(s), (s = sw(s + t, r)) !== o);) o = s;
      return h
    }
    getMinorTickInterval() {
      let {
        minorTicks: t,
        minorTickInterval: e
      } = this.options;
      return !0 === t ? sW(e, "auto") : !1 !== t ? e : void 0
    }
    getMinorTickPositions() {
      let t = this.options,
        e = this.tickPositions,
        i = this.minorTickInterval,
        s = this.pointRangePadding || 0,
        o = (this.min || 0) - s,
        r = (this.max || 0) + s,
        a = this.brokenAxis?.hasBreaks ? this.brokenAxis.unitLength : r - o,
        n = [],
        h;
      if (a && a / i < this.len / 3) {
        let s = this.logarithmic;
        if (s) this.paddedTicks.forEach(function (t, e, o) {
          e && n.push.apply(n, s.getLogTickPositions(i, o[e - 1], o[e], !0))
        });
        else if (this.dateTime && "auto" === this.getMinorTickInterval()) n = n.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), o, r, t.startOfWeek));
        else
          for (h = o + (e[0] - o) % i; h <= r && h !== n[0]; h += i) n.push(h)
      }
      return 0 !== n.length && this.trimTicks(n), n
    }
    adjustForMinRange() {
      let t = this.options,
        e = this.logarithmic,
        i = this.chart.time,
        {
          max: s,
          min: o,
          minRange: r
        } = this,
        a, n, h, l;
      this.isXAxis && void 0 === r && !e && (r = sS(t.min) || sS(t.max) || sS(t.floor) || sS(t.ceiling) ? null : Math.min(5 * (sE(this.series.map(t => {
        let e = t.getColumn("x");
        return t.xIncrement ? e.slice(0, 2) : e
      })) || 0), this.dataMax - this.dataMin)), sD(s) && sD(o) && sD(r) && s - o < r && (n = this.dataMax - this.dataMin >= r, a = (r - s + o) / 2, h = [o - a, i.parse(t.min) ?? o - a], n && (h[2] = e ? e.log2lin(this.dataMin) : this.dataMin), l = [(o = sv(h)) + r, i.parse(t.max) ?? o + r], n && (l[2] = e ? e.log2lin(this.dataMax) : this.dataMax), (s = sk(l)) - o < r && (h[0] = s - r, h[1] = i.parse(t.min) ?? s - r, o = sv(h))), this.minRange = r, this.min = o, this.max = s
    }
    getClosest() {
      let t, e;
      if (this.categories) e = 1;
      else {
        let i = [];
        this.series.forEach(function (t) {
          let s = t.closestPointRange,
            o = t.getColumn("x");
          1 === o.length ? i.push(o[0]) : t.sorted && sS(s) && t.reserveSpace() && (e = sS(e) ? Math.min(e, s) : s)
        }), i.length && (i.sort((t, e) => t - e), t = sE([i]))
      }
      return t && e ? Math.min(t, e) : t || e
    }
    nameToX(t) {
      let e = sB(this.options.categories),
        i = e ? this.categories : this.names,
        s = t.options.x,
        o;
      return t.series.requireSorting = !1, sS(s) || (s = this.uniqueNames && i ? e ? i.indexOf(t.name) : sW(i.keys[t.name], -1) : t.series.autoIncrement()), -1 === s ? !e && i && (o = i.length) : sD(s) && (o = s), void 0 !== o ? (this.names[o] = t.name, this.names.keys[t.name] = o) : t.x && (o = t.x), o
    }
    updateNames() {
      let t = this,
        e = this.names;
      e.length > 0 && (Object.keys(e.keys).forEach(function (t) {
        delete e.keys[t]
      }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(e => {
        e.xIncrement = null, (!e.points || e.isDirtyData) && (t.max = Math.max(t.max || 0, e.dataTable.rowCount - 1), e.processData(), e.generatePoints());
        let i = e.getColumn("x").slice();
        e.data.forEach((e, s) => {
          let o = i[s];
          e?.options && void 0 !== e.name && void 0 !== (o = t.nameToX(e)) && o !== e.x && (i[s] = e.x = o)
        }), e.dataTable.setColumn("x", i)
      }))
    }
    setAxisTranslation() {
      let t = this,
        e = t.max - t.min,
        i = t.linkedParent,
        s = !!t.categories,
        o = t.isXAxis,
        r = t.axisPointRange || 0,
        a, n = 0,
        h = 0,
        l, d = t.transA;
      (o || s || r) && (a = t.getClosest(), i ? (n = i.minPointOffset, h = i.pointRangePadding) : t.series.forEach(function (e) {
        let i = s ? 1 : o ? sW(e.options.pointRange, a, 0) : t.axisPointRange || 0,
          l = e.options.pointPlacement;
        if (r = Math.max(r, i), !t.single || s) {
          let t = e.is("xrange") ? !o : o;
          n = Math.max(n, t && sI(l) ? 0 : i / 2), h = Math.max(h, t && "on" === l ? 0 : i)
        }
      }), l = t.ordinal && t.ordinal.slope && a ? t.ordinal.slope / a : 1, t.minPointOffset = n *= l, t.pointRangePadding = h *= l, t.pointRange = Math.min(r, t.single && s ? 1 : e), o && a && (t.closestPointRange = a)), t.translationSlope = t.transA = d = t.staticScale || t.len / (e + h || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = d * n, sO(this, "afterSetAxisTranslation")
    }
    minFromRange() {
      let {
        max: t,
        min: e
      } = this;
      return sD(t) && sD(e) && t - e || void 0
    }
    setTickInterval(t) {
      let {
        categories: e,
        chart: i,
        dataMax: s,
        dataMin: o,
        dateTime: r,
        isXAxis: a,
        logarithmic: n,
        options: h,
        softThreshold: l
      } = this, d = i.time, c = sD(this.threshold) ? this.threshold : void 0, p = this.minRange || 0, {
        ceiling: u,
        floor: g,
        linkedTo: f,
        softMax: m,
        softMin: x
      } = h, y = sD(f) && i[this.coll]?.[f], b = h.tickPixelInterval, v = h.maxPadding, k = h.minPadding, M = 0, w, S = sD(h.tickInterval) && h.tickInterval >= 0 ? h.tickInterval : void 0, A, T, C, P;
      if (r || e || y || this.getTickAmount(), C = sW(this.userMin, d.parse(h.min)), P = sW(this.userMax, d.parse(h.max)), y ? (this.linkedParent = y, w = y.getExtremes(), this.min = sW(w.min, w.dataMin), this.max = sW(w.max, w.dataMax), this.type !== y.type && sC(11, !0, i)) : (l && sS(c) && sD(s) && sD(o) && (o >= c ? (A = c, k = 0) : s <= c && (T = c, v = 0)), this.min = sW(C, A, o), this.max = sW(P, T, s)), sD(this.max) && sD(this.min) && (n && (this.positiveValuesOnly && !t && 0 >= Math.min(this.min, sW(o, this.min)) && sC(10, !0, i), this.min = sw(n.log2lin(this.min), 16), this.max = sw(n.log2lin(this.max), 16)), this.range && sD(o) && (this.userMin = this.min = C = Math.max(o, this.minFromRange() || 0), this.userMax = P = this.max, this.range = void 0)), sO(this, "foundExtremes"), this.adjustForMinRange(), sD(this.min) && sD(this.max)) {
        if (!sD(this.userMin) && sD(x) && x < this.min && (this.min = C = x), !sD(this.userMax) && sD(m) && m > this.max && (this.max = P = m), e || this.axisPointRange || this.stacking?.usePercentage || y || !(M = this.max - this.min) || (!sS(C) && k && (this.min -= M * k), sS(P) || !v || (this.max += M * v)), !sD(this.userMin) && sD(g) && (this.min = Math.max(this.min, g)), !sD(this.userMax) && sD(u) && (this.max = Math.min(this.max, u)), l && sD(o) && sD(s)) {
          let t = c || 0;
          !sS(C) && this.min < t && o >= t ? this.min = h.minRange ? Math.min(t, this.max - p) : t : !sS(P) && this.max > t && s <= t && (this.max = h.minRange ? Math.max(t, this.min + p) : t)
        } !i.polar && this.min > this.max && (sS(h.min) ? this.max = this.min : sS(h.max) && (this.min = this.max)), M = this.max - this.min
      }
      if (this.min !== this.max && sD(this.min) && sD(this.max) ? y && !S && b === y.options.tickPixelInterval ? this.tickInterval = S = y.tickInterval : this.tickInterval = sW(S, this.tickAmount ? M / Math.max(this.tickAmount - 1, 1) : void 0, e ? 1 : M * b / Math.max(this.len, b)) : this.tickInterval = 1, a && !t) {
        let t = this.min !== this.old?.min || this.max !== this.old?.max;
        this.series.forEach(function (e) {
          e.forceCrop = e.forceCropping?.(), e.processData(t)
        }), sO(this, "postProcessData", {
          hasExtremesChanged: t
        })
      }
      this.setAxisTranslation(), sO(this, "initialAxisTranslation"), this.pointRange && !S && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
      let O = sW(h.minTickInterval, r && !this.series.some(t => !t.sorted) ? this.closestPointRange : 0);
      !S && this.tickInterval < O && (this.tickInterval = O), r || n || S || (this.tickInterval = sY(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions()
    }
    setTickPositions() {
      let t = this.options,
        e = t.tickPositions,
        i = t.tickPositioner,
        s = this.getMinorTickInterval(),
        o = !this.isPanning,
        r = o && t.startOnTick,
        a = o && t.endOnTick,
        n = [],
        h;
      if (this.tickmarkOffset = this.categories && "between" === t.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.single = this.min === this.max && sS(this.min) && !this.tickAmount && (this.min % 1 == 0 || !1 !== t.allowDecimals), e) n = e.slice();
      else if (sD(this.min) && sD(this.max)) {
        if (!this.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) n = [this.min, this.max], sC(19, !1, this.chart);
        else if (this.dateTime) n = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, this.ordinal?.positions, this.closestPointRange, !0);
        else if (this.logarithmic) n = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
        else {
          let t = this.tickInterval,
            e = t;
          for (; e <= 2 * t;)
            if (n = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && n.length > this.tickAmount) this.tickInterval = sY(this, e *= 1.1);
            else break
        }
        n.length > this.len && (n = [n[0], n[n.length - 1]])[0] === n[1] && (n.length = 1), i && (this.tickPositions = n, (h = i.apply(this, [this.min, this.max])) && (n = h))
      }
      this.tickPositions = n, this.minorTickInterval = "auto" === s && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : s, this.paddedTicks = n.slice(0), this.trimTicks(n, r, a), !this.isLinked && sD(this.min) && sD(this.max) && (this.single && n.length < 2 && !this.categories && !this.series.some(t => t.is("heatmap") && "between" === t.options.pointPlacement) && (this.min -= .5, this.max += .5), e || h || this.adjustTickAmount()), sO(this, "afterSetTickPositions")
    }
    trimTicks(t, e, i) {
      let s = t[0],
        o = t[t.length - 1],
        r = !this.isOrdinal && this.minPointOffset || 0;
      if (sO(this, "trimTicks"), !this.isLinked) {
        if (e && s !== -1 / 0) this.min = s;
        else
          for (; this.min - r > t[0];) t.shift();
        if (i) this.max = o;
        else
          for (; this.max + r < t[t.length - 1];) t.pop();
        0 === t.length && sS(s) && !this.options.tickPositions && t.push((o + s) / 2)
      }
    }
    alignToOthers() {
      let t;
      let e = this,
        i = e.chart,
        s = [this],
        o = e.options,
        r = i.options.chart,
        a = "yAxis" === this.coll && r.alignThresholds,
        n = [];
      if (e.thresholdAlignment = void 0, (!1 !== r.alignTicks && o.alignTicks || a) && !1 !== o.startOnTick && !1 !== o.endOnTick && !e.logarithmic) {
        let o = t => {
          let {
            horiz: e,
            options: i
          } = t;
          return [e ? i.left : i.top, i.width, i.height, i.pane].join(",")
        },
          r = o(this);
        i[this.coll].forEach(function (i) {
          let {
            series: a
          } = i;
          a.length && a.some(t => t.visible) && i !== e && o(i) === r && (t = !0, s.push(i))
        })
      }
      if (t && a) {
        s.forEach(t => {
          let i = t.getThresholdAlignment(e);
          sD(i) && n.push(i)
        });
        let t = n.length > 1 ? n.reduce((t, e) => t += e, 0) / n.length : void 0;
        s.forEach(e => {
          e.thresholdAlignment = t
        })
      }
      return t
    }
    getThresholdAlignment(t) {
      if ((!sD(this.dataMin) || this !== t && this.series.some(t => t.isDirty || t.isDirtyData)) && this.getSeriesExtremes(), sD(this.threshold)) {
        let t = sM((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
        return this.options.reversed && (t = 1 - t), t
      }
    }
    getTickAmount() {
      let t = this.options,
        e = t.tickPixelInterval,
        i = t.tickAmount;
      sS(t.tickInterval) || i || !(this.len < e) || this.isRadial || this.logarithmic || !t.startOnTick || !t.endOnTick || (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), i < 4 && (this.finalTickAmt = i, i = 5), this.tickAmount = i
    }
    adjustTickAmount() {
      let t = this,
        {
          finalTickAmt: e,
          max: i,
          min: s,
          options: o,
          tickPositions: r,
          tickAmount: a,
          thresholdAlignment: n
        } = t,
        h = r?.length,
        l = sW(t.threshold, t.softThreshold ? 0 : null),
        d, c, p = t.tickInterval,
        u, g = () => r.push(sw(r[r.length - 1] + p)),
        f = () => r.unshift(sw(r[0] - p));
      if (sD(n) && (u = n < .5 ? Math.ceil(n * (a - 1)) : Math.floor(n * (a - 1)), o.reversed && (u = a - 1 - u)), t.hasData() && sD(s) && sD(i)) {
        let n = () => {
          t.transA *= (h - 1) / (a - 1), t.min = o.startOnTick ? r[0] : Math.min(s, r[0]), t.max = o.endOnTick ? r[r.length - 1] : Math.max(i, r[r.length - 1])
        };
        if (sD(u) && sD(t.threshold)) {
          for (; r[u] !== l || r.length !== a || r[0] > s || r[r.length - 1] < i;) {
            for (r.length = 0, r.push(t.threshold); r.length < a;) void 0 === r[u] || r[u] > t.threshold ? f() : g();
            if (p > 8 * t.tickInterval) break;
            p *= 2
          }
          n()
        } else if (h < a) {
          for (; r.length < a;) r.length % 2 || s === l ? g() : f();
          n()
        }
        if (sS(e)) {
          for (c = d = r.length; c--;)(3 === e && c % 2 == 1 || e <= 2 && c > 0 && c < d - 1) && r.splice(c, 1);
          t.finalTickAmt = void 0
        }
      }
    }
    setScale() {
      let {
        coll: t,
        stacking: e
      } = this, i = !1, s = !1;
      this.series.forEach(t => {
        i = i || t.isDirtyData || t.isDirty, s = s || t.xAxis && t.xAxis.isDirty || !1
      }), this.setAxisSize();
      let o = this.len !== (this.old && this.old.len);
      o || i || s || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (e && "yAxis" === t && e.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e && "xAxis" === t && e.buildStacks(), this.isDirty || (this.isDirty = o || this.min !== this.old?.min || this.max !== this.old?.max)) : e && e.cleanStacks(), i && delete this.allExtremes, sO(this, "afterSetScale")
    }
    setExtremes(t, e, i = !0, s, o) {
      let r = this.chart;
      this.series.forEach(t => {
        delete t.kdTree
      }), t = r.time.parse(t), e = r.time.parse(e), sO(this, "setExtremes", o = sP(o, {
        min: t,
        max: e
      }), t => {
        this.userMin = t.min, this.userMax = t.max, this.eventArgs = t, i && r.redraw(s)
      })
    }
    setAxisSize() {
      let t = this.chart,
        e = this.options,
        i = e.offsets || [0, 0, 0, 0],
        s = this.horiz,
        o = this.width = Math.round(sG(sW(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)),
        r = this.height = Math.round(sG(sW(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)),
        a = this.top = Math.round(sG(sW(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)),
        n = this.left = Math.round(sG(sW(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
      this.bottom = t.chartHeight - r - a, this.right = t.chartWidth - o - n, this.len = Math.max(s ? o : r, 0), this.pos = s ? n : a
    }
    getExtremes() {
      let t = this.logarithmic;
      return {
        min: t ? sw(t.lin2log(this.min)) : this.min,
        max: t ? sw(t.lin2log(this.max)) : this.max,
        dataMin: this.dataMin,
        dataMax: this.dataMax,
        userMin: this.userMin,
        userMax: this.userMax
      }
    }
    getThreshold(t) {
      let e = this.logarithmic,
        i = e ? e.lin2log(this.min) : this.min,
        s = e ? e.lin2log(this.max) : this.max;
      return null === t || t === -1 / 0 ? t = i : t === 1 / 0 ? t = s : i > t ? t = i : s < t && (t = s), this.translate(t, 0, 1, 0, 1)
    }
    autoLabelAlign(t) {
      let e = (sW(t, 0) - 90 * this.side + 720) % 360,
        i = {
          align: "center"
        };
      return sO(this, "autoLabelAlign", i, function (t) {
        e > 15 && e < 165 ? t.align = "right" : e > 195 && e < 345 && (t.align = "left")
      }), i.align
    }
    tickSize(t) {
      let e = this.options,
        i = sW(e["tick" === t ? "tickWidth" : "minorTickWidth"], "tick" === t && this.isXAxis && !this.categories ? 1 : 0),
        s = e["tick" === t ? "tickLength" : "minorTickLength"],
        o;
      i && s && ("inside" === e[t + "Position"] && (s = -s), o = [s, i]);
      let r = {
        tickSize: o
      };
      return sO(this, "afterTickSize", r), r.tickSize
    }
    labelMetrics() {
      let t = this.chart.renderer,
        e = this.ticks,
        i = e[Object.keys(e)[0]] || {};
      return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box)
    }
    unsquish() {
      let t = this.options.labels,
        e = t.padding || 0,
        i = this.horiz,
        s = this.tickInterval,
        o = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / s),
        r = t.rotation,
        a = sw(.8 * this.labelMetrics().h),
        n = Math.max(this.max - this.min, 0),
        h = function (t) {
          let i = (t + 2 * e) / (o || 1);
          return (i = i > 1 ? Math.ceil(i) : 1) * s > n && t !== 1 / 0 && o !== 1 / 0 && n && (i = Math.ceil(n / s)), sw(i * s)
        },
        l = s,
        d, c = Number.MAX_VALUE,
        p;
      if (i) {
        if (!t.staggerLines && (sD(r) ? p = [r] : o < t.autoRotationLimit && (p = t.autoRotation)), p) {
          let t, e;
          for (let i of p) (i === r || i && i >= -90 && i <= 90) && (e = (t = h(Math.abs(a / Math.sin(sb * i)))) + Math.abs(i / 360)) < c && (c = e, d = i, l = t)
        }
      } else l = h(.75 * a);
      return this.autoRotation = p, this.labelRotation = sW(d, sD(r) ? r : 0), t.step ? s : l
    }
    getSlotWidth(t) {
      let e = this.chart,
        i = this.horiz,
        s = this.options.labels,
        o = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
        r = e.margin[3];
      if (t && sD(t.slotWidth)) return t.slotWidth;
      if (i && s.step < 2 && !this.isRadial) return s.rotation ? 0 : (this.staggerLines || 1) * this.len / o;
      if (!i) {
        let t = s.style.width;
        if (void 0 !== t) return parseInt(String(t), 10);
        if (r) return r - e.spacing[3]
      }
      return .33 * e.chartWidth
    }
    renderUnsquish() {
      let t = this.chart,
        e = t.renderer,
        i = this.tickPositions,
        s = this.ticks,
        o = this.options.labels,
        r = o.style,
        a = this.horiz,
        n = this.getSlotWidth(),
        h = Math.max(1, Math.round(n - (a ? 2 * (o.padding || 0) : o.distance || 0))),
        l = {},
        d = this.labelMetrics(),
        c = r.lineClamp,
        p, u = c ?? (Math.floor(this.len / (i.length * d.h)) || 1),
        g = 0;
      sI(o.rotation) || (l.rotation = o.rotation || 0), i.forEach(function (t) {
        let e = s[t];
        e.movedLabel && e.replaceMovedLabel();
        let i = e.label?.textPxLength || 0;
        i > g && (g = i)
      }), this.maxLabelLength = g, this.autoRotation ? g > h && g > d.h ? l.rotation = this.labelRotation : this.labelRotation = 0 : n && (p = h), l.rotation && (p = g > .5 * t.chartHeight ? .33 * t.chartHeight : g, c || (u = 1)), this.labelAlign = o.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (l.align = this.labelAlign), i.forEach(function (t) {
        let e = s[t],
          i = e && e.label,
          o = r.width,
          a = {};
        i && (i.attr(l), e.shortenLabel ? e.shortenLabel() : p && !o && "nowrap" !== r.whiteSpace && (p < (i.textPxLength || 0) || "SPAN" === i.element.tagName) ? i.css(sP(a, {
          width: `${p}px`,
          lineClamp: u
        })) : !i.styles.width || a.width || o || i.css({
          width: "auto"
        }), e.rotation = l.rotation)
      }, this), this.tickRotCorr = e.rotCorr(d.b, this.labelRotation || 0, 0 !== this.side)
    }
    hasData() {
      return this.series.some(function (t) {
        return t.hasData()
      }) || this.options.showEmpty && sS(this.min) && sS(this.max)
    }
    addTitle(t) {
      let e;
      let i = this.chart.renderer,
        s = this.horiz,
        o = this.opposite,
        r = this.options.title,
        a = this.chart.styledMode;
      this.axisTitle || ((e = r.textAlign) || (e = (s ? {
        low: "left",
        middle: "center",
        high: "right"
      } : {
        low: o ? "right" : "left",
        middle: "center",
        high: o ? "left" : "right"
      })[r.align]), this.axisTitle = i.text(r.text || "", 0, 0, r.useHTML).attr({
        zIndex: 7,
        rotation: r.rotation || 0,
        align: e
      }).addClass("highcharts-axis-title"), a || this.axisTitle.css(sz(r.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), a || r.style.width || this.isRadial || this.axisTitle.css({
        width: this.len + "px"
      }), this.axisTitle[t ? "show" : "hide"](t)
    }
    generateTick(t) {
      let e = this.ticks;
      e[t] ? e[t].addLabel() : e[t] = new su(this, t)
    }
    createGroups() {
      let {
        axisParent: t,
        chart: e,
        coll: i,
        options: s
      } = this, o = e.renderer, r = (e, r, a) => o.g(e).attr({
        zIndex: a
      }).addClass(`highcharts-${i.toLowerCase()}${r} ` + (this.isRadial ? `highcharts-radial-axis${r} ` : "") + (s.className || "")).add(t);
      this.axisGroup || (this.gridGroup = r("grid", "-grid", s.gridZIndex), this.axisGroup = r("axis", "", s.zIndex), this.labelGroup = r("axis-labels", "-labels", s.labels.zIndex))
    }
    getOffset() {
      let t = this,
        {
          chart: e,
          horiz: i,
          options: s,
          side: o,
          ticks: r,
          tickPositions: a,
          coll: n
        } = t,
        h = e.inverted && !t.isZAxis ? [1, 0, 3, 2][o] : o,
        l = t.hasData(),
        d = s.title,
        c = s.labels,
        p = sD(s.crossing),
        u = e.axisOffset,
        g = e.clipOffset,
        f = [-1, 1, 1, -1][o],
        m, x = 0,
        y, b = 0,
        v = 0,
        k, M;
      if (t.showAxis = m = l || s.showEmpty, t.staggerLines = t.horiz && c.staggerLines || void 0, t.createGroups(), l || t.isLinked ? (a.forEach(function (e) {
        t.generateTick(e)
      }), t.renderUnsquish(), t.reserveSpaceDefault = 0 === o || 2 === o || ({
        1: "left",
        3: "right"
      })[o] === t.labelAlign, sW(c.reserveSpace, !p && null, "center" === t.labelAlign || null, t.reserveSpaceDefault) && a.forEach(function (t) {
        v = Math.max(r[t].getLabelSize(), v)
      }), t.staggerLines && (v *= t.staggerLines), t.labelOffset = v * (t.opposite ? -1 : 1)) : sN(r, function (t, e) {
        t.destroy(), delete r[e]
      }), d?.text && !1 !== d.enabled && (t.addTitle(m), m && !p && !1 !== d.reserveSpace && (t.titleOffset = x = t.axisTitle.getBBox()[i ? "height" : "width"], b = sS(y = d.offset) ? 0 : sW(d.margin, i ? 5 : 10))), t.renderLine(), t.offset = f * sW(s.offset, u[o] ? u[o] + (s.margin || 0) : 0), t.tickRotCorr = t.tickRotCorr || {
        x: 0,
        y: 0
      }, M = 0 === o ? -t.labelMetrics().h : 2 === o ? t.tickRotCorr.y : 0, k = Math.abs(v) + b, v && (k -= M, k += f * (i ? sW(c.y, t.tickRotCorr.y + f * c.distance) : sW(c.x, f * c.distance))), t.axisTitleMargin = sW(y, k), t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(r, a)), "colorAxis" !== n && g) {
        let e = this.tickSize("tick");
        u[o] = Math.max(u[o], (t.axisTitleMargin || 0) + x + f * t.offset, k, a && a.length && e ? e[0] + f * t.offset : 0);
        let i = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
        g[h] = Math.max(g[h], i)
      }
      sO(this, "afterGetOffset")
    }
    getLinePath(t) {
      let e = this.chart,
        i = this.opposite,
        s = this.offset,
        o = this.horiz,
        r = this.left + (i ? this.width : 0) + s,
        a = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
      return i && (t *= -1), e.renderer.crispLine([
        ["M", o ? this.left : r, o ? a : this.top],
        ["L", o ? e.chartWidth - this.right : r, o ? a : e.chartHeight - this.bottom]
      ], t)
    }
    renderLine() {
      this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
        stroke: this.options.lineColor,
        "stroke-width": this.options.lineWidth,
        zIndex: 7
      }))
    }
    getTitlePosition(t) {
      let e = this.horiz,
        i = this.left,
        s = this.top,
        o = this.len,
        r = this.options.title,
        a = e ? i : s,
        n = this.opposite,
        h = this.offset,
        l = r.x,
        d = r.y,
        c = this.chart.renderer.fontMetrics(t),
        p = t ? Math.max(t.getBBox(!1, 0).height - c.h - 1, 0) : 0,
        u = {
          low: a + (e ? 0 : o),
          middle: a + o / 2,
          high: a + (e ? o : 0)
        }[r.align],
        g = (e ? s + this.height : i) + (e ? 1 : -1) * (n ? -1 : 1) * (this.axisTitleMargin || 0) + [-p, p, c.f, -p][this.side],
        f = {
          x: e ? u + l : g + (n ? this.width : 0) + h + l,
          y: e ? g + d - (n ? this.height : 0) + h : u + d
        };
      return sO(this, "afterGetTitlePosition", {
        titlePosition: f
      }), f
    }
    renderMinorTick(t, e) {
      let i = this.minorTicks;
      i[t] || (i[t] = new su(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
    }
    renderTick(t, e, i) {
      let s = this.isLinked,
        o = this.ticks;
      (!s || t >= this.min && t <= this.max || this.grid && this.grid.isColumn) && (o[t] || (o[t] = new su(this, t)), i && o[t].isNew && o[t].render(e, !0, -1), o[t].render(e))
    }
    render() {
      let t, e;
      let i = this,
        s = i.chart,
        o = i.logarithmic,
        r = s.renderer,
        a = i.options,
        n = i.isLinked,
        h = i.tickPositions,
        l = i.axisTitle,
        d = i.ticks,
        c = i.minorTicks,
        p = i.alternateBands,
        u = a.stackLabels,
        g = a.alternateGridColor,
        f = a.crossing,
        m = i.tickmarkOffset,
        x = i.axisLine,
        y = i.showAxis,
        b = sg(r.globalAnimation);
      if (i.labelEdge.length = 0, i.overlap = !1, [d, c, p].forEach(function (t) {
        sN(t, function (t) {
          t.isActive = !1
        })
      }), sD(f)) {
        let t = this.isXAxis ? s.yAxis[0] : s.xAxis[0],
          e = [1, -1, -1, 1][this.side];
        if (t) {
          let s = t.toPixels(f, !0);
          i.horiz && (s = t.len - s), i.offset = e * s
        }
      }
      if (i.hasData() || n) {
        let r = i.chart.hasRendered && i.old && sD(i.old.min);
        i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach(function (t) {
          i.renderMinorTick(t, r)
        }), h.length && (h.forEach(function (t, e) {
          i.renderTick(t, e, r)
        }), m && (0 === i.min || i.single) && (d[-1] || (d[-1] = new su(i, -1, null, !0)), d[-1].render(-1))), g && h.forEach(function (r, a) {
          e = void 0 !== h[a + 1] ? h[a + 1] + m : i.max - m, a % 2 == 0 && r < i.max && e <= i.max + (s.polar ? -m : m) && (p[r] || (p[r] = new L.PlotLineOrBand(i, {})), t = r + m, p[r].options = {
            from: o ? o.lin2log(t) : t,
            to: o ? o.lin2log(e) : e,
            color: g,
            className: "highcharts-alternate-grid"
          }, p[r].render(), p[r].isActive = !0)
        }), i._addedPlotLB || (i._addedPlotLB = !0, (a.plotLines || []).concat(a.plotBands || []).forEach(function (t) {
          i.addPlotBandOrLine(t)
        }))
      } [d, c, p].forEach(function (t) {
        let e = [],
          i = b.duration;
        sN(t, function (t, i) {
          t.isActive || (t.render(i, !1, 0), t.isActive = !1, e.push(i))
        }), sF(function () {
          let i = e.length;
          for (; i--;) t[e[i]] && !t[e[i]].isActive && (t[e[i]].destroy(), delete t[e[i]])
        }, t !== p && s.hasRendered && i ? i : 0)
      }), x && (x[x.isPlaced ? "animate" : "attr"]({
        d: this.getLinePath(x.strokeWidth())
      }), x.isPlaced = !0, x[y ? "show" : "hide"](y)), l && y && (l[l.isNew ? "attr" : "animate"](i.getTitlePosition(l)), l.isNew = !1), u && u.enabled && i.stacking && i.stacking.renderStackTotals(), i.old = {
        len: i.len,
        max: i.max,
        min: i.min,
        transA: i.transA,
        userMax: i.userMax,
        userMin: i.userMin
      }, i.isDirty = !1, sO(this, "afterRender")
    }
    redraw() {
      this.visible && (this.render(), this.plotLinesAndBands.forEach(function (t) {
        t.render()
      })), this.series.forEach(function (t) {
        t.isDirty = !0
      })
    }
    getKeepProps() {
      return this.keepProps || sj.keepProps
    }
    destroy(t) {
      let e = this,
        i = e.plotLinesAndBands,
        s = this.eventOptions;
      if (sO(this, "destroy", {
        keepEvents: t
      }), t || sX(e), [e.ticks, e.minorTicks, e.alternateBands].forEach(function (t) {
        sA(t)
      }), i) {
        let t = i.length;
        for (; t--;) i[t].destroy()
      }
      for (let t in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function (t) {
        e[t] && (e[t] = e[t].destroy())
      }), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[t] = e.plotLinesAndBandsGroups[t].destroy();
      sN(e, function (t, i) {
        -1 === e.getKeepProps().indexOf(i) && delete e[i]
      }), this.eventOptions = s
    }
    drawCrosshair(t, e) {
      let i = this.crosshair,
        s = sW(i && i.snap, !0),
        o = this.chart,
        r, a, n, h = this.cross,
        l, yCross;

      if (sO(this, "drawCrosshair", { e: t, point: e }), t || (t = this.cross && this.cross.e), i && !1 !== (sS(e) || !s)) {

        // Yatay (X ekseni için)
        if (this.isXAxis) {
          a = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos);
          if (sS(a)) {
            r = this.getPlotLinePath({ value: e.x, translatedValue: a }) || null;
          }
        }

        // Dikey (Y ekseni için)
        if (this.isYAxis) {
          let yPos = t ? t.chartY : (e.plotY + this.pos);
          if (sS(yPos)) {
            yCross = this.getPlotLinePath({ value: e.y, translatedValue: yPos }) || null;
          }
        }

        if (!sS(r) && !sS(yCross)) {
          this.hideCrosshair();
          return;
        }

        // Eğer crosshair henüz çizilmemişse oluştur
        if (!h) {
          this.cross = h = o.renderer.path()
            .addClass("highcharts-crosshair highcharts-crosshair-thin " + (i.className || ""))
            .attr({ zIndex: sW(i.zIndex, 2) })
            .add();

          !o.styledMode && h.attr({
            stroke: i.color || "#adadad",
            "stroke-width": i.width || 1.15,
            dashstyle: "Dash"
          });
        }

        h.show().attr({ d: r });

        // Yatay crosshair için ekleme
        if (!this.ycross) {
          this.ycross = o.renderer.path()
            .addClass("highcharts-crosshair highcharts-crosshair-thin " + (i.className || ""))
            .attr({ zIndex: sW(i.zIndex, 2) })
            .add();

          !o.styledMode && this.ycross.attr({
            stroke: i.color || "#adadad",
            "stroke-width": i.width || 1.15,
            dashstyle: "Dash"
          });
        }

        this.ycross.show().attr({ d: yCross });

        this.cross.e = t;
      } else {
        this.hideCrosshair();
      }

      sO(this, "afterDrawCrosshair", { e: t, point: e });
    }

    hideCrosshair() {
      this.cross && this.cross.hide(), sO(this, "afterHideCrosshair")
    }
    update(t, e) {
      let i = this.chart;
      t = sz(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, sW(e, !0) && i.redraw()
    }
    remove(t) {
      let e = this.chart,
        i = this.coll,
        s = this.series,
        o = s.length;
      for (; o--;) s[o] && s[o].remove(!1);
      sT(e.axes, this), sT(e[i] || [], this), e.orderItems(i), this.destroy(), e.isDirtyBox = !0, sW(t, !0) && e.redraw()
    }
    setTitle(t, e) {
      this.update({
        title: t
      }, e)
    }
    setCategories(t, e) {
      this.update({
        categories: t
      }, e)
    }
  }
  sj.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"];
  let {
    addEvent: sU,
    getMagnitude: sV,
    normalizeTickInterval: s_,
    timeUnits: s$
  } = ti;
  ! function (t) {
    function e() {
      return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
    }

    function i() {
      if ("datetime" !== this.type) {
        this.dateTime = void 0;
        return
      }
      this.dateTime || (this.dateTime = new s(this))
    }
    t.compose = function (t) {
      return t.keepProps.includes("dateTime") || (t.keepProps.push("dateTime"), t.prototype.getTimeTicks = e, sU(t, "afterSetType", i)), t
    };
    class s {
      constructor(t) {
        this.axis = t
      }
      normalizeTimeTickInterval(t, e) {
        let i = e || [
          ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
          ["second", [1, 2, 5, 10, 15, 30]],
          ["minute", [1, 2, 5, 10, 15, 30]],
          ["hour", [1, 2, 3, 4, 6, 8, 12]],
          ["day", [1, 2]],
          ["week", [1, 2]],
          ["month", [1, 2, 3, 4, 6]],
          ["year", null]
        ],
          s = i[i.length - 1],
          o = s$[s[0]],
          r = s[1],
          a;
        for (a = 0; a < i.length && (o = s$[(s = i[a])[0]], r = s[1], !i[a + 1] || !(t <= (o * r[r.length - 1] + s$[i[a + 1][0]]) / 2)); a++);
        o === s$.year && t < 5 * o && (r = [1, 2, 5]);
        let n = s_(t / o, r, "year" === s[0] ? Math.max(sV(t / o), 1) : 1);
        return {
          unitRange: o,
          count: n,
          unitName: s[0]
        }
      }
      getXDateFormat(t, e) {
        let {
          axis: i
        } = this, s = i.chart.time;
        return i.closestPointRange ? s.getDateFormat(i.closestPointRange, t, i.options.startOfWeek, e) || s.resolveDTLFormat(e.year).main : s.resolveDTLFormat(e.day).main
      }
    }
    t.Additions = s
  }(c || (c = {}));
  let sZ = c,
    {
      addEvent: sq,
      normalizeTickInterval: sK,
      pick: sJ
    } = ti;
  ! function (t) {
    function e() {
      "logarithmic" !== this.type ? this.logarithmic = void 0 : this.logarithmic ?? (this.logarithmic = new s(this))
    }

    function i() {
      let t = this.logarithmic;
      t && (this.lin2val = function (e) {
        return t.lin2log(e)
      }, this.val2lin = function (e) {
        return t.log2lin(e)
      })
    }
    t.compose = function (t) {
      return t.keepProps.includes("logarithmic") || (t.keepProps.push("logarithmic"), sq(t, "afterSetType", e), sq(t, "afterInit", i)), t
    };
    class s {
      constructor(t) {
        this.axis = t
      }
      getLogTickPositions(t, e, i, s) {
        let o = this.axis,
          r = o.len,
          a = o.options,
          n = [];
        if (s || (this.minorAutoInterval = void 0), t >= .5) t = Math.round(t), n = o.getLinearTickPositions(t, e, i);
        else if (t >= .08) {
          let o, r, a, h, l, d, c;
          let p = Math.floor(e);
          for (o = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], r = p; r < i + 1 && !c; r++)
            for (a = 0, h = o.length; a < h && !c; a++)(l = this.log2lin(this.lin2log(r) * o[a])) > e && (!s || d <= i) && void 0 !== d && n.push(d), d > i && (c = !0), d = l
        } else {
          let h = this.lin2log(e),
            l = this.lin2log(i),
            d = s ? o.getMinorTickInterval() : a.tickInterval,
            c = a.tickPixelInterval / (s ? 5 : 1),
            p = s ? r / o.tickPositions.length : r;
          t = sK(t = sJ("auto" === d ? null : d, this.minorAutoInterval, (l - h) * c / (p || 1))), n = o.getLinearTickPositions(t, h, l).map(this.log2lin), s || (this.minorAutoInterval = t / 5)
        }
        return s || (o.tickInterval = t), n
      }
      lin2log(t) {
        return Math.pow(10, t)
      }
      log2lin(t) {
        return Math.log(t) / Math.LN10
      }
    }
    t.Additions = s
  }(p || (p = {}));
  let sQ = p,
    {
      erase: s0,
      extend: s1,
      isNumber: s2
    } = ti;
  ! function (t) {
    let e;

    function i(t) {
      return this.addPlotBandOrLine(t, "plotBands")
    }

    function s(t, i) {
      let s = this.userOptions,
        o = new e(this, t);
      if (this.visible && (o = o.render()), o) {
        if (this._addedPlotLB || (this._addedPlotLB = !0, (s.plotLines || []).concat(s.plotBands || []).forEach(t => {
          this.addPlotBandOrLine(t)
        })), i) {
          let e = s[i] || [];
          e.push(t), s[i] = e
        }
        this.plotLinesAndBands.push(o)
      }
      return o
    }

    function o(t) {
      return this.addPlotBandOrLine(t, "plotLines")
    }

    function r(t, e, i) {
      i = i || this.options;
      let s = this.getPlotLinePath({
        value: e,
        force: !0,
        acrossPanes: i.acrossPanes
      }),
        o = [],
        r = this.horiz,
        a = !s2(this.min) || !s2(this.max) || t < this.min && e < this.min || t > this.max && e > this.max,
        n = this.getPlotLinePath({
          value: t,
          force: !0,
          acrossPanes: i.acrossPanes
        }),
        h, l = 1,
        d;
      if (n && s)
        for (a && (d = n.toString() === s.toString(), l = 0), h = 0; h < n.length; h += 2) {
          let t = n[h],
            e = n[h + 1],
            i = s[h],
            a = s[h + 1];
          ("M" === t[0] || "L" === t[0]) && ("M" === e[0] || "L" === e[0]) && ("M" === i[0] || "L" === i[0]) && ("M" === a[0] || "L" === a[0]) && (r && i[1] === t[1] ? (i[1] += l, a[1] += l) : r || i[2] !== t[2] || (i[2] += l, a[2] += l), o.push(["M", t[1], t[2]], ["L", e[1], e[2]], ["L", a[1], a[2]], ["L", i[1], i[2]], ["Z"])), o.isFlat = d
        }
      return o
    }

    function a(t) {
      this.removePlotBandOrLine(t)
    }

    function n(t) {
      let e = this.plotLinesAndBands,
        i = this.options,
        s = this.userOptions;
      if (e) {
        let o = e.length;
        for (; o--;) e[o].id === t && e[o].destroy();
        [i.plotLines || [], s.plotLines || [], i.plotBands || [], s.plotBands || []].forEach(function (e) {
          for (o = e.length; o--;)(e[o] || {}).id === t && s0(e, e[o])
        })
      }
    }

    function h(t) {
      this.removePlotBandOrLine(t)
    }
    t.compose = function (t, l) {
      let d = l.prototype;
      return d.addPlotBand || (e = t, s1(d, {
        addPlotBand: i,
        addPlotLine: o,
        addPlotBandOrLine: s,
        getPlotBandPath: r,
        removePlotBand: a,
        removePlotLine: h,
        removePlotBandOrLine: n
      })), l
    }
  }(u || (u = {}));
  let s3 = u,
    {
      addEvent: s5,
      arrayMax: s6,
      arrayMin: s9,
      defined: s4,
      destroyObjectProperties: s8,
      erase: s7,
      fireEvent: ot,
      merge: oe,
      objectEach: oi,
      pick: os
    } = ti;
  class oo {
    static compose(t, e) {
      return s5(t, "afterInit", function () {
        this.labelCollectors.push(() => {
          let t = [];
          for (let e of this.axes)
            for (let {
              label: i,
              options: s
            }
              of e.plotLinesAndBands) i && !s?.label?.allowOverlap && t.push(i);
          return t
        })
      }), s3.compose(oo, e)
    }
    constructor(t, e) {
      this.axis = t, this.options = e, this.id = e.id
    }
    render() {
      ot(this, "render");
      let {
        axis: t,
        options: e
      } = this, {
        horiz: i,
        logarithmic: s
      } = t, {
        color: o,
        events: r,
        zIndex: a = 0
      } = e, {
        renderer: n,
        time: h
      } = t.chart, l = {}, d = h.parse(e.to), c = h.parse(e.from), p = h.parse(e.value), u = e.borderWidth, g = e.label, {
        label: f,
        svgElem: m
      } = this, x = [], y, b = s4(c) && s4(d), v = s4(p), k = !m, M = {
        class: "highcharts-plot-" + (b ? "band " : "line ") + (e.className || "")
      }, w = b ? "bands" : "lines";
      if (!t.chart.styledMode && (v ? (M.stroke = o || "#999999", M["stroke-width"] = os(e.width, 1), e.dashStyle && (M.dashstyle = e.dashStyle)) : b && (M.fill = o || "#e6e9ff", u && (M.stroke = e.borderColor, M["stroke-width"] = u))), l.zIndex = a, w += "-" + a, (y = t.plotLinesAndBandsGroups[w]) || (t.plotLinesAndBandsGroups[w] = y = n.g("plot-" + w).attr(l).add()), m || (this.svgElem = m = n.path().attr(M).add(y)), s4(p)) x = t.getPlotLinePath({
        value: s?.log2lin(p) ?? p,
        lineWidth: m.strokeWidth(),
        acrossPanes: e.acrossPanes
      });
      else {
        if (!(s4(c) && s4(d))) return;
        x = t.getPlotBandPath(s?.log2lin(c) ?? c, s?.log2lin(d) ?? d, e)
      }
      return !this.eventsAdded && r && (oi(r, (t, e) => {
        m?.on(e, t => {
          r[e].apply(this, [t])
        })
      }), this.eventsAdded = !0), (k || !m.d) && x?.length ? m.attr({
        d: x
      }) : m && (x ? (m.show(), m.animate({
        d: x
      })) : m.d && (m.hide(), f && (this.label = f = f.destroy()))), g && (s4(g.text) || s4(g.formatter)) && x?.length && t.width > 0 && t.height > 0 && !x.isFlat ? (g = oe({
        align: i && b ? "center" : void 0,
        x: i ? !b && 4 : 10,
        verticalAlign: !i && b ? "middle" : void 0,
        y: i ? b ? 16 : 10 : b ? 6 : -4,
        rotation: i && !b ? 90 : 0,
        ...b ? {
          inside: !0
        } : {}
      }, g), this.renderLabel(g, x, b, a)) : f && f.hide(), this
    }
    renderLabel(t, e, i, s) {
      let o = this.axis,
        r = o.chart.renderer,
        a = t.inside,
        n = this.label;
      n || (this.label = n = r.text(this.getLabelText(t), 0, 0, t.useHTML).attr({
        align: t.textAlign || t.align,
        rotation: t.rotation,
        class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || ""),
        zIndex: s
      }), o.chart.styledMode || n.css(oe({
        fontSize: "0.8em",
        textOverflow: i && !a ? "" : "ellipsis"
      }, t.style)), n.add());
      let h = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]],
        l = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]],
        d = s9(h),
        c = s9(l),
        p = s6(h) - d;
      n.align(t, !1, {
        x: d,
        y: c,
        width: p,
        height: s6(l) - c
      }), (!n.alignValue || "left" === n.alignValue || s4(a)) && n.css({
        width: (t.style?.width || (i && a ? p : 90 === n.rotation ? o.height - (n.alignAttr.y - o.top) : (t.clip ? o.width : o.chart.chartWidth) - (n.alignAttr.x - o.left))) + "px"
      }), n.show(!0)
    }
    getLabelText(t) {
      return s4(t.formatter) ? t.formatter.call(this) : t.text
    }
    destroy() {
      s7(this.axis.plotLinesAndBands, this), delete this.axis, s8(this)
    }
  }
  let {
    animObject: or
  } = tV, {
    format: oa
  } = ec, {
    composed: on,
    dateFormats: oh,
    doc: ol,
    isSafari: od
  } = L, {
    distribute: oc
  } = ex, {
    addEvent: op,
    clamp: ou,
    css: og,
    discardElement: of,
    extend: om,
    fireEvent: ox,
    isArray: oy,
    isNumber: ob,
    isObject: ov,
    isString: ok,
    merge: oM,
    pick: ow,
    pushUnique: oS,
    splat: oA,
    syncTimeout: oT
  } = ti;
  class oC {
    constructor(t, e, i) {
      this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !0, this.options = {}, this.outside = !1, this.chart = t, this.init(t, e), this.pointer = i
    }
    bodyFormatter(t) {
      return t.map(t => {
        let e = t.series.tooltipOptions,
          i = t.formatPrefix || "point";
        return (e[i + "Formatter"] || t.tooltipFormatter).call(t, e[i + "Format"] || "")
      })
    }
    cleanSplit(t) {
      this.chart.series.forEach(function (e) {
        let i = e && e.tt;
        i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
      })
    }
    defaultFormatter(t) {
      let e;
      let i = this.points || oA(this);
      return (e = (e = [t.headerFooterFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.headerFooterFormatter(i[0], !0)), e
    }
    destroy() {
      this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), of(this.container)), ti.clearTimeout(this.hideTimer)
    }
    getAnchor(t, e) {
      let i;
      let {
        chart: s,
        pointer: o
      } = this, r = s.inverted, a = s.plotTop, n = s.plotLeft;
      if ((t = oA(t))[0].series && t[0].series.yAxis && !t[0].series.yAxis.options.reversedStacks && (t = t.slice().reverse()), this.followPointer && e) void 0 === e.chartX && (e = o.normalize(e)), i = [e.chartX - n, e.chartY - a];
      else if (t[0].tooltipPos) i = t[0].tooltipPos;
      else {
        let s = 0,
          o = 0;
        t.forEach(function (t) {
          let e = t.pos(!0);
          e && (s += e[0], o += e[1])
        }), s /= t.length, o /= t.length, this.shared && t.length > 1 && e && (r ? s = e.chartX : o = e.chartY), i = [s - n, o - a]
      }
      return i.map(Math.round)
    }
    getClassName(t, e, i) {
      let s = this.options,
        o = t.series,
        r = o.options;
      return [s.className, "highcharts-label", i && "highcharts-tooltip-header", e ? "highcharts-tooltip-box" : "highcharts-tooltip", !i && "highcharts-color-" + ow(t.colorIndex, o.colorIndex), r && r.className].filter(ok).join(" ")
    }
    getLabel({
      anchorX: t,
      anchorY: e
    } = {
        anchorX: 0,
        anchorY: 0
      }) {
      let i = this,
        s = this.chart.styledMode,
        o = this.options,
        r = this.split && this.allowShared,
        a = this.container,
        n = this.chart.renderer;
      if (this.label) {
        let t = !this.label.hasClass("highcharts-label");
        (!r && t || r && !t) && this.destroy()
      }
      if (!this.label) {
        if (this.outside) {
          let t = this.chart,
            e = t.options.chart.style,
            i = ep.getRendererType();
          this.container = a = L.doc.createElement("div"), a.className = "highcharts-tooltip-container " + (t.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || ""), og(a, {
            position: "absolute",
            top: "1px",
            pointerEvents: "none",
            zIndex: Math.max(this.options.style.zIndex || 0, (e && e.zIndex || 0) + 3)
          }), this.renderer = n = new i(a, 0, 0, e, void 0, void 0, n.styledMode)
        }
        if (r ? this.label = n.g("tooltip") : (this.label = n.label("", t, e, o.shape, void 0, void 0, o.useHTML, void 0, "tooltip").attr({
          padding: o.padding,
          r: o.borderRadius
        }), s || this.label.attr({
          fill: o.backgroundColor,
          "stroke-width": o.borderWidth || 0
        }).css(o.style).css({
          pointerEvents: o.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none")
        })), i.outside) {
          let t = this.label;
          [t.xSetter, t.ySetter].forEach((e, s) => {
            t[s ? "ySetter" : "xSetter"] = o => {
              e.call(t, i.distance), t[s ? "y" : "x"] = o, a && (a.style[s ? "top" : "left"] = `${o}px`)
            }
          })
        }
        this.label.attr({
          zIndex: 8
        }).shadow(o.shadow).add()
      }
      return a && !a.parentElement && L.doc.body.appendChild(a), this.label
    }
    getPlayingField() {
      let {
        body: t,
        documentElement: e
      } = ol, {
        chart: i,
        distance: s,
        outside: o
      } = this;
      return {
        width: o ? Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth) - 2 * s - 2 : i.chartWidth,
        height: o ? Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight) : i.chartHeight
      }
    }
    getPosition(t, e, i) {
      let {
        distance: s,
        chart: o,
        outside: r,
        pointer: a
      } = this, {
        inverted: n,
        plotLeft: h,
        plotTop: l,
        polar: d
      } = o, {
        plotX: c = 0,
        plotY: p = 0
      } = i, u = {}, g = n && i.h || 0, {
        height: f,
        width: m
      } = this.getPlayingField(), x = a.getChartPosition(), y = t => t * x.scaleX, b = t => t * x.scaleY, v = i => {
        let a = "x" === i;
        return [i, a ? m : f, a ? t : e].concat(r ? [a ? y(t) : b(e), a ? x.left - s + y(c + h) : x.top - s + b(p + l), 0, a ? m : f] : [a ? t : e, a ? c + h : p + l, a ? h : l, a ? h + o.plotWidth : l + o.plotHeight])
      }, k = v("y"), M = v("x"), w, S = !!i.negative;
      !d && o.hoverSeries?.yAxis?.reversed && (S = !S);
      let A = !this.followPointer && ow(i.ttBelow, !d && !n === S),
        T = function (t, e, i, o, a, n, h) {
          let l = r ? "y" === t ? b(s) : y(s) : s,
            d = (i - o) / 2,
            c = o < a - s,
            p = a + s + o < e,
            f = a - l - i + d,
            m = a + l - d;
          if (A && p) u[t] = m;
          else if (!A && c) u[t] = f;
          else if (c) u[t] = Math.min(h - o, f - g < 0 ? f : f - g);
          else {
            if (!p) return !1;
            u[t] = Math.max(n, m + g + i > e ? m : m + g)
          }
        },
        C = function (t, e, i, o, r) {
          if (r < s || r > e - s) return !1;
          r < i / 2 ? u[t] = 1 : r > e - o / 2 ? u[t] = e - o - 2 : u[t] = r - i / 2
        },
        P = function (t) {
          [k, M] = [M, k], w = t
        },
        O = () => {
          !1 !== T.apply(0, k) ? !1 !== C.apply(0, M) || w || (P(!0), O()) : w ? u.x = u.y = 0 : (P(!0), O())
        };
      return (n && !d || this.len > 1) && P(), O(), u
    }
    hide(t) {
      let e = this;
      ti.clearTimeout(this.hideTimer), t = ow(t, this.options.hideDelay), this.isHidden || (this.hideTimer = oT(function () {
        let i = e.getLabel();
        e.getLabel().animate({
          opacity: 0
        }, {
          duration: t ? 150 : t,
          complete: () => {
            i.hide(), e.container && e.container.remove()
          }
        }), e.isHidden = !0
      }, t))
    }
    init(t, e) {
      this.chart = t, this.options = e, this.crosshairs = [], this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = ow(e.outside, !!(t.scrollablePixelsX || t.scrollablePixelsY))
    }
    shouldStickOnContact(t) {
      return !!(!this.followPointer && this.options.stickOnContact && (!t || this.pointer.inClass(t.target, "highcharts-tooltip")))
    }
    move(t, e, i, s) {
      let o = this,
        r = or(!o.isHidden && o.options.animation),
        a = o.followPointer || (o.len || 0) > 1,
        n = {
          x: t,
          y: e
        };
      a || (n.anchorX = i, n.anchorY = s), r.step = () => o.drawTracker(), o.getLabel().animate(n, r)
    }
    refresh(t, e) {
      let {
        chart: i,
        options: s,
        pointer: o,
        shared: r
      } = this, a = oA(t), n = a[0], h = s.format, l = s.formatter || this.defaultFormatter, d = i.styledMode, c = this.allowShared;
      if (!s.enabled || !n.series) return;
      ti.clearTimeout(this.hideTimer), this.allowShared = !(!oy(t) && t.series && t.series.noSharedTooltip), c = c && !this.allowShared, this.followPointer = !this.split && n.series.tooltipOptions.followPointer;
      let p = this.getAnchor(t, e),
        u = p[0],
        g = p[1];
      r && this.allowShared && (o.applyInactiveState(a), a.forEach(t => t.setState("hover")), n.points = a), this.len = a.length;
      let f = ok(h) ? oa(h, n, i) : l.call(n, this);
      n.points = void 0;
      let m = n.series;
      if (this.distance = ow(m.tooltipOptions.distance, 16), !1 === f) this.hide();
      else {
        if (this.split && this.allowShared) this.renderSplit(f, a);
        else {
          let t = u,
            r = g;
          if (e && o.isDirectTouch && (t = e.chartX - i.plotLeft, r = e.chartY - i.plotTop), i.polar || !1 === m.options.clip || a.some(e => o.isDirectTouch || e.series.shouldShowTooltip(t, r))) {
            let t = this.getLabel(c && this.tt || {});
            (!s.style.width || d) && t.css({
              width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px"
            }), t.attr({
              class: this.getClassName(n),
              text: f && f.join ? f.join("") : f
            }), this.outside && t.attr({
              x: ou(t.x || 0, 0, this.getPlayingField().width - (t.width || 0) - 1)
            }), d || t.attr({
              stroke: s.borderColor || n.color || m.color || "#666666"
            }), this.updatePosition({
              plotX: u,
              plotY: g,
              negative: n.negative,
              ttBelow: n.ttBelow,
              h: p[2] || 0
            })
          } else {
            this.hide();
            return
          }
        }
        this.isHidden && this.label && this.label.attr({
          opacity: 1
        }).show(), this.isHidden = !1
      }
      ox(this, "refresh")
    }
    renderSplit(t, e) {
      let i = this,
        {
          chart: s,
          chart: {
            chartWidth: o,
            chartHeight: r,
            plotHeight: a,
            plotLeft: n,
            plotTop: h,
            scrollablePixelsY: l = 0,
            scrollablePixelsX: d,
            styledMode: c
          },
          distance: p,
          options: u,
          options: {
            positioner: g
          },
          pointer: f
        } = i,
        {
          scrollLeft: m = 0,
          scrollTop: x = 0
        } = s.scrollablePlotArea?.scrollingContainer || {},
        y = i.outside && "number" != typeof d ? ol.documentElement.getBoundingClientRect() : {
          left: m,
          right: m + o,
          top: x,
          bottom: x + r
        },
        b = i.getLabel(),
        v = this.renderer || s.renderer,
        k = !!(s.xAxis[0] && s.xAxis[0].opposite),
        {
          left: M,
          top: w
        } = f.getChartPosition(),
        S = h + x,
        A = 0,
        T = a - l;

      function C(t, e, s, o, r = !0) {
        let a, n;
        return s ? (a = k ? 0 : T, n = ou(t - o / 2, y.left, y.right - o - (i.outside ? M : 0))) : (a = e - S, n = ou(n = r ? t - o - p : t + p, r ? n : y.left, y.right)), {
          x: n,
          y: a
        }
      }
      ok(t) && (t = [!1, t]);
      let P = t.slice(0, e.length + 1).reduce(function (t, s, o) {
        if (!1 !== s && "" !== s) {
          let r = e[o - 1] || {
            isHeader: !0,
            plotX: e[0].plotX,
            plotY: a,
            series: {}
          },
            l = r.isHeader,
            d = l ? i : r.series,
            f = d.tt = function (t, e, s) {
              let o = t,
                {
                  isHeader: r,
                  series: a
                } = e;
              if (!o) {
                let t = {
                  padding: u.padding,
                  r: u.borderRadius
                };
                c || (t.fill = u.backgroundColor, t["stroke-width"] = u.borderWidth ?? 1), o = v.label("", 0, 0, u[r ? "headerShape" : "shape"], void 0, void 0, u.useHTML).addClass(i.getClassName(e, !0, r)).attr(t).add(b)
              }
              return o.isActive = !0, o.attr({
                text: s
              }), c || o.css(u.style).attr({
                stroke: u.borderColor || e.color || a.color || "#333333"
              }), o
            }(d.tt, r, s.toString()),
            m = f.getBBox(),
            x = m.width + f.strokeWidth();
          l && (A = m.height, T += A, k && (S -= A));
          let {
            anchorX: M,
            anchorY: w
          } = function (t) {
            let e, i;
            let {
              isHeader: s,
              plotX: o = 0,
              plotY: r = 0,
              series: l
            } = t;
            if (s) e = Math.max(n + o, n), i = h + a / 2;
            else {
              let {
                xAxis: t,
                yAxis: s
              } = l;
              e = t.pos + ou(o, -p, t.len + p), l.shouldShowTooltip(0, s.pos - h + r, {
                ignoreX: !0
              }) && (i = s.pos + r)
            }
            return {
              anchorX: e = ou(e, y.left - p, y.right + p),
              anchorY: i
            }
          }(r);
          if ("number" == typeof w) {
            let e = m.height + 1,
              s = g ? g.call(i, x, e, r) : C(M, w, l, x);
            t.push({
              align: g ? 0 : void 0,
              anchorX: M,
              anchorY: w,
              boxWidth: x,
              point: r,
              rank: ow(s.rank, l ? 1 : 0),
              size: e,
              target: s.y,
              tt: f,
              x: s.x
            })
          } else f.isActive = !1
        }
        return t
      }, []);
      !g && P.some(t => {
        let {
          outside: e
        } = i, s = (e ? M : 0) + t.anchorX;
        return s < y.left && s + t.boxWidth < y.right || s < M - y.left + t.boxWidth && y.right - s > s
      }) && (P = P.map(t => {
        let {
          x: e,
          y: i
        } = C(t.anchorX, t.anchorY, t.point.isHeader, t.boxWidth, !1);
        return om(t, {
          target: i,
          x: e
        })
      })), i.cleanSplit(), oc(P, T);
      let O = {
        left: M,
        right: M
      };
      P.forEach(function (t) {
        let {
          x: e,
          boxWidth: s,
          isHeader: o
        } = t;
        !o && (i.outside && M + e < O.left && (O.left = M + e), !o && i.outside && O.left + s > O.right && (O.right = M + e))
      }), P.forEach(function (t) {
        let {
          x: e,
          anchorX: s,
          anchorY: o,
          pos: r,
          point: {
            isHeader: a
          }
        } = t, n = {
          visibility: void 0 === r ? "hidden" : "inherit",
          x: e,
          y: (r || 0) + S,
          anchorX: s,
          anchorY: o
        };
        if (i.outside && e < s) {
          let t = M - O.left;
          t > 0 && (a || (n.x = e + t, n.anchorX = s + t), a && (n.x = (O.right - O.left) / 2, n.anchorX = s + t))
        }
        t.tt.attr(n)
      });
      let {
        container: E,
        outside: L,
        renderer: B
      } = i;
      if (L && E && B) {
        let {
          width: t,
          height: e,
          x: i,
          y: s
        } = b.getBBox();
        B.setSize(t + i, e + s, !1), E.style.left = O.left + "px", E.style.top = w + "px"
      }
      od && b.attr({
        opacity: 1 === b.opacity ? .999 : 1
      })
    }
    drawTracker() {
      if (!this.shouldStickOnContact()) {
        this.tracker && (this.tracker = this.tracker.destroy());
        return
      }
      let t = this.chart,
        e = this.label,
        i = this.shared ? t.hoverPoints : t.hoverPoint;
      if (!e || !i) return;
      let s = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
        o = this.getAnchor(i),
        r = e.getBBox();
      o[0] += t.plotLeft - (e.translateX || 0), o[1] += t.plotTop - (e.translateY || 0), s.x = Math.min(0, o[0]), s.y = Math.min(0, o[1]), s.width = o[0] < 0 ? Math.max(Math.abs(o[0]), r.width - o[0]) : Math.max(Math.abs(o[0]), r.width), s.height = o[1] < 0 ? Math.max(Math.abs(o[1]), r.height - Math.abs(o[1])) : Math.max(Math.abs(o[1]), r.height), this.tracker ? this.tracker.attr(s) : (this.tracker = e.renderer.rect(s).addClass("highcharts-tracker").add(e), t.styledMode || this.tracker.attr({
        fill: "rgba(0,0,0,0)"
      }))
    }
    styledModeFormat(t) {
      return t.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"')
    }
    headerFooterFormatter(t, e) {
      let i = t.series,
        s = i.tooltipOptions,
        o = i.xAxis,
        r = o && o.dateTime,
        a = {
          isFooter: e,
          point: t
        },
        n = s.xDateFormat || "",
        h = s[e ? "footerFormat" : "headerFormat"];
      return ox(this, "headerFormatter", a, function (e) {
        if (r && !n && ob(t.key) && (n = r.getXDateFormat(t.key, s.dateTimeLabelFormats)), r && n) {
          if (ov(n)) {
            let t = n;
            oh[0] = e => i.chart.time.dateFormat(t, e), n = "%0"
          } (t.tooltipDateKeys || ["key"]).forEach(t => {
            h = h.replace(RegExp("point\." + t + "([ \)}])", ""), `(point.${t}:${n})$1`)
          })
        }
        i.chart.styledMode && (h = this.styledModeFormat(h)), e.text = oa(h, t, this.chart)
      }), a.text || ""
    }
    update(t) {
      this.destroy(), this.init(this.chart, oM(!0, this.options, t))
    }
    updatePosition(t) {
      let {
        chart: e,
        container: i,
        distance: s,
        options: o,
        pointer: r,
        renderer: a
      } = this, {
        height: n = 0,
        width: h = 0
      } = this.getLabel(), {
        left: l,
        top: d,
        scaleX: c,
        scaleY: p
      } = r.getChartPosition(), u = (o.positioner || this.getPosition).call(this, h, n, t), g = L.doc, f = (t.plotX || 0) + e.plotLeft, m = (t.plotY || 0) + e.plotTop, x;
      a && i && (o.positioner && (u.x += l - s, u.y += d - s), x = (o.borderWidth || 0) + 2 * s + 2, a.setSize(ou(h + x, 0, g.documentElement.clientWidth) - 1, n + x, !1), (1 !== c || 1 !== p) && (og(i, {
        transform: `scale(${c}, ${p})`
      }), f *= c, m *= p), f += l - u.x, m += d - u.y), this.move(Math.round(u.x), Math.round(u.y || 0), f, m)
    }
  } ! function (t) {
    t.compose = function (e) {
      oS(on, "Core.Tooltip") && op(e, "afterInit", function () {
        let e = this.chart;
        e.options.tooltip && (e.tooltip = new t(e, e.options.tooltip, this))
      })
    }
  }(oC || (oC = {}));
  let oP = oC,
    {
      animObject: oO
    } = tV,
    {
      defaultOptions: oE
    } = tA,
    {
      format: oL
    } = ec,
    {
      addEvent: oB,
      crisp: oD,
      erase: oI,
      extend: oz,
      fireEvent: oR,
      getNestedProperty: oN,
      isArray: oW,
      isFunction: oG,
      isNumber: oX,
      isObject: oH,
      merge: oF,
      pick: oY,
      syncTimeout: oj,
      removeEvent: oU,
      uniqueKey: oV
    } = ti;
  class o_ {
    animateBeforeDestroy() {
      let t = this,
        e = {
          x: t.startXPos,
          opacity: 0
        },
        i = t.getGraphicalProps();
      i.singular.forEach(function (i) {
        t[i] = t[i].animate("dataLabel" === i ? {
          x: t[i].startXPos,
          y: t[i].startYPos,
          opacity: 0
        } : e)
      }), i.plural.forEach(function (e) {
        t[e].forEach(function (e) {
          e.element && e.animate(oz({
            x: t.startXPos
          }, e.startYPos ? {
            x: e.startXPos,
            y: e.startYPos
          } : {}))
        })
      })
    }
    applyOptions(t, e) {
      let i = this.series,
        s = i.options.pointValKey || i.pointValKey;
      return oz(this, t = o_.prototype.optionsToObject.call(this, t)), this.options = this.options ? oz(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = o_.prototype.getNestedProperty.call(this, s)), this.selected && (this.state = "select"), "name" in this && void 0 === e && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), void 0 === this.x && i ? this.x = e ?? i.autoIncrement() : oX(t.x) && i.options.relativeXValue ? this.x = i.autoIncrement(t.x) : "string" == typeof this.x && (e ?? (e = i.chart.time.parse(this.x)), oX(e) && (this.x = e)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this
    }
    destroy() {
      if (!this.destroyed) {
        let t = this,
          e = t.series,
          i = e.chart,
          s = e.options.dataSorting,
          o = i.hoverPoints,
          r = oO(t.series.chart.renderer.globalAnimation),
          a = () => {
            for (let e in (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (oU(t), t.destroyElements()), t) delete t[e]
          };
        t.legendItem && i.legend.destroyItem(t), o && (t.setState(), oI(o, t), o.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s && s.enabled ? (this.animateBeforeDestroy(), oj(a, r.duration)) : a(), i.pointCount--
      }
      this.destroyed = !0
    }
    destroyElements(t) {
      let e = this,
        i = e.getGraphicalProps(t);
      i.singular.forEach(function (t) {
        e[t] = e[t].destroy()
      }), i.plural.forEach(function (t) {
        e[t].forEach(function (t) {
          t && t.element && t.destroy()
        }), delete e[t]
      })
    }
    firePointEvent(t, e, i) {
      let s = this,
        o = this.series.options;
      s.manageEvent(t), "click" === t && o.allowPointSelect && (i = function (t) {
        !s.destroyed && s.select && s.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
      }), oR(s, t, e, i)
    }
    getClassName() {
      return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
    }
    getGraphicalProps(t) {
      let e, i;
      let s = this,
        o = [],
        r = {
          singular: [],
          plural: []
        };
      for ((t = t || {
        graphic: 1,
        dataLabel: 1
      }).graphic && o.push("graphic", "connector"), t.dataLabel && o.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = o.length; i--;) s[e = o[i]] && r.singular.push(e);
      return ["graphic", "dataLabel"].forEach(function (e) {
        let i = e + "s";
        t[e] && s[i] && r.plural.push(i)
      }), r
    }
    getNestedProperty(t) {
      return t ? 0 === t.indexOf("custom.") ? oN(t, this.options) : this[t] : void 0
    }
    getZone() {
      let t = this.series,
        e = t.zones,
        i = t.zoneAxis || "y",
        s, o = 0;
      for (s = e[0]; this[i] >= s.value;) s = e[++o];
      return this.nonZonedColor || (this.nonZonedColor = this.color), s && s.color && !this.options.color ? this.color = s.color : this.color = this.nonZonedColor, s
    }
    hasNewShapeType() {
      return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType
    }
    constructor(t, e, i) {
      this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = t, this.applyOptions(e, i), this.id ?? (this.id = oV()), this.resolveColor(), t.chart.pointCount++, oR(this, "afterInit")
    }
    isValid() {
      return (oX(this.x) || this.x instanceof Date) && oX(this.y)
    }
    optionsToObject(t) {
      let e = this.series,
        i = e.options.keys,
        s = i || e.pointArrayMap || ["y"],
        o = s.length,
        r = {},
        a, n = 0,
        h = 0;
      if (oX(t) || null === t) r[s[0]] = t;
      else if (oW(t))
        for (!i && t.length > o && ("string" == (a = typeof t[0]) ? e.xAxis?.dateTime ? r.x = e.chart.time.parse(t[0]) : r.name = t[0] : "number" === a && (r.x = t[0]), n++); h < o;) i && void 0 === t[n] || (s[h].indexOf(".") > 0 ? o_.prototype.setNestedProperty(r, t[n], s[h]) : r[s[h]] = t[n]), n++, h++;
      else "object" == typeof t && (r = t, t.dataLabels && (e.hasDataLabels = () => !0), t.marker && (e._hasPointMarkers = !0));
      return r
    }
    pos(t, e = this.plotY) {
      if (!this.destroyed) {
        let {
          plotX: i,
          series: s
        } = this, {
          chart: o,
          xAxis: r,
          yAxis: a
        } = s, n = 0, h = 0;
        if (oX(i) && oX(e)) return t && (n = r ? r.pos : o.plotLeft, h = a ? a.pos : o.plotTop), o.inverted && r && a ? [a.len - e + h, r.len - i + n] : [i + n, e + h]
      }
    }
    resolveColor() {
      let t = this.series,
        e = t.chart.options.chart,
        i = t.chart.styledMode,
        s, o, r = e.colorCount,
        a;
      delete this.nonZonedColor, t.options.colorByPoint ? (i || (s = (o = t.options.colors || t.chart.options.colors)[t.colorCounter], r = o.length), a = t.colorCounter, t.colorCounter++, t.colorCounter === r && (t.colorCounter = 0)) : (i || (s = t.color), a = t.colorIndex), this.colorIndex = oY(this.options.colorIndex, a), this.color = oY(this.options.color, s)
    }
    setNestedProperty(t, e, i) {
      return i.split(".").reduce(function (t, i, s, o) {
        let r = o.length - 1 === s;
        return t[i] = r ? e : oH(t[i], !0) ? t[i] : {}, t[i]
      }, t), t
    }
    shouldDraw() {
      return !this.isNull
    }
    tooltipFormatter(t) {
      let {
        chart: e,
        pointArrayMap: i = ["y"],
        tooltipOptions: s
      } = this.series, {
        valueDecimals: o = "",
        valuePrefix: r = "",
        valueSuffix: a = ""
      } = s;
      return e.styledMode && (t = e.tooltip?.styledModeFormat(t) || t), i.forEach(e => {
        e = "{point." + e, (r || a) && (t = t.replace(RegExp(e + "}", "g"), r + e + "}" + a)), t = t.replace(RegExp(e + "}", "g"), e + ":,." + o + "f}")
      }), oL(t, this, e)
    }
    update(t, e, i, s) {
      let o;
      let r = this,
        a = r.series,
        n = r.graphic,
        h = a.chart,
        l = a.options;

      function d() {
        r.applyOptions(t);
        let s = n && r.hasMockGraphic,
          d = null === r.y ? !s : s;
        n && d && (r.graphic = n.destroy(), delete r.hasMockGraphic), oH(t, !0) && (n && n.element && t && t.marker && void 0 !== t.marker.symbol && (r.graphic = n.destroy()), t?.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy())), o = r.index;
        let c = {};
        for (let t of a.dataColumnKeys()) c[t] = r[t];
        a.dataTable.setRow(c, o), l.data[o] = oH(l.data[o], !0) || oH(t, !0) ? r.options : oY(t, l.data[o]), a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (h.isDirtyBox = !0), "point" === l.legendType && (h.isDirtyLegend = !0), e && h.redraw(i)
      }
      e = oY(e, !0), !1 === s ? d() : r.firePointEvent("update", {
        options: t
      }, d)
    }
    remove(t, e) {
      this.series.removePoint(this.series.data.indexOf(this), t, e)
    }
    select(t, e) {
      let i = this,
        s = i.series,
        o = s.chart;
      t = oY(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", {
        accumulate: e
      }, function () {
        i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || o.getSelectedPoints().forEach(function (t) {
          let e = t.series;
          t.selected && t !== i && (t.selected = t.options.selected = !1, e.options.data[e.data.indexOf(t)] = t.options, t.setState(o.hoverPoints && e.options.inactiveOtherPoints ? "inactive" : ""), t.firePointEvent("unselect"))
        })
      }), delete this.selectedStaging
    }
    onMouseOver(t) {
      let {
        inverted: e,
        pointer: i
      } = this.series.chart;
      i && (t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e), i.runPointActions(t, this))
    }
    onMouseOut() {
      let t = this.series.chart;
      this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function (t) {
        t.setState()
      }), t.hoverPoints = t.hoverPoint = null
    }
    manageEvent(t) {
      let e = oF(this.series.options.point, this.options),
        i = e.events?.[t];
      oG(i) && (!this.hcEvents?.[t] || this.hcEvents?.[t]?.map(t => t.fn).indexOf(i) === -1) ? (this.importedUserEvent?.(), this.importedUserEvent = oB(this, t, i), this.hcEvents && (this.hcEvents[t].userEvent = !0)) : this.importedUserEvent && !i && this.hcEvents?.[t] && this.hcEvents?.[t].userEvent && (oU(this, t), delete this.hcEvents[t], Object.keys(this.hcEvents) || delete this.importedUserEvent)
    }
    setState(t, e) {
      let i = this.series,
        s = this.state,
        o = i.options.states[t || "normal"] || {},
        r = oE.plotOptions[i.type].marker && i.options.marker,
        a = r && !1 === r.enabled,
        n = r && r.states && r.states[t || "normal"] || {},
        h = !1 === n.enabled,
        l = this.marker || {},
        d = i.chart,
        c = r && i.markerAttribs,
        p = i.halo,
        u, g, f, m = i.stateMarkerGraphic,
        x;
      if ((t = t || "") === this.state && !e || this.selected && "select" !== t || !1 === o.enabled || t && (h || a && !1 === n.enabled) || t && l.states && l.states[t] && !1 === l.states[t].enabled) return;
      if (this.state = t, c && (u = i.markerAttribs(this, t)), this.graphic && !this.hasMockGraphic) {
        if (s && this.graphic.removeClass("highcharts-point-" + s), t && this.graphic.addClass("highcharts-point-" + t), !d.styledMode) {
          g = i.pointAttribs(this, t), f = oY(d.options.chart.animation, o.animation);
          let e = g.opacity;
          i.options.inactiveOtherPoints && oX(e) && (this.dataLabels || []).forEach(function (t) {
            t && !t.hasClass("highcharts-data-label-hidden") && (t.animate({
              opacity: e
            }, f), t.connector && t.connector.animate({
              opacity: e
            }, f))
          }), this.graphic.animate(g, f)
        }
        u && this.graphic.animate(u, oY(d.options.chart.animation, n.animation, r.animation)), m && m.hide()
      } else t && n && (x = l.symbol || i.symbol, m && m.currentSymbol !== x && (m = m.destroy()), u && (m ? m[e ? "animate" : "attr"]({
        x: u.x,
        y: u.y
      }) : x && (i.stateMarkerGraphic = m = d.renderer.symbol(x, u.x, u.y, u.width, u.height, oF(r, n)).add(i.markerGroup), m.currentSymbol = x)), !d.styledMode && m && "inactive" !== this.state && m.attr(i.pointAttribs(this, t))), m && (m[t && this.isInside ? "show" : "hide"](), m.element.point = this, m.addClass(this.getClassName(), !0));
      let y = o.halo,
        b = this.graphic || m,
        v = b && b.visibility || "inherit";
      y && y.size && b && "hidden" !== v && !this.isCluster ? (p || (i.halo = p = d.renderer.path().add(b.parentGroup)), p.show()[e ? "animate" : "attr"]({
        d: this.haloPath(y.size)
      }), p.attr({
        class: "highcharts-halo highcharts-color-" + oY(this.colorIndex, i.colorIndex) + (this.className ? " " + this.className : ""),
        visibility: v,
        zIndex: -1
      }), p.point = this, d.styledMode || p.attr(oz({
        fill: this.color || i.color,
        "fill-opacity": y.opacity
      }, t9.filterUserAttributes(y.attributes || {})))) : p?.point?.haloPath && !p.point.destroyed && p.animate({
        d: p.point.haloPath(0)
      }, null, p.hide), oR(this, "afterSetState", {
        state: t
      })
    }
    haloPath(t) {
      let e = this.pos();
      return e ? this.series.chart.renderer.symbols.circle(oD(e[0], 1) - t, e[1] - t, 2 * t, 2 * t) : []
    }
  }
  let o$ = o_,
    {
      parse: oZ
    } = tE,
    {
      charts: oq,
      composed: oK,
      isTouchDevice: oJ
    } = L,
    {
      addEvent: oQ,
      attr: o0,
      css: o1,
      extend: o2,
      find: o3,
      fireEvent: o5,
      isNumber: o6,
      isObject: o9,
      objectEach: o4,
      offset: o8,
      pick: o7,
      pushUnique: rt,
      splat: re
    } = ti;
  class ri {
    applyInactiveState(t) {
      let e = [],
        i;
      (t || []).forEach(function (t) {
        i = t.series, e.push(i), i.linkedParent && e.push(i.linkedParent), i.linkedSeries && (e = e.concat(i.linkedSeries)), i.navigatorSeries && e.push(i.navigatorSeries)
      }), this.chart.series.forEach(function (t) {
        -1 === e.indexOf(t) ? t.setState("inactive", !0) : t.options.inactiveOtherPoints && t.setAllPointsToState("inactive")
      })
    }
    destroy() {
      let t = this;
      this.eventsToUnbind.forEach(t => t()), this.eventsToUnbind = [], !L.chartCount && (ri.unbindDocumentMouseUp.forEach(t => t.unbind()), ri.unbindDocumentMouseUp.length = 0, ri.unbindDocumentTouchEnd && (ri.unbindDocumentTouchEnd = ri.unbindDocumentTouchEnd())), clearInterval(t.tooltipTimeout), o4(t, function (e, i) {
        t[i] = void 0
      })
    }
    getSelectionMarkerAttrs(t, e) {
      let i = {
        args: {
          chartX: t,
          chartY: e
        },
        attrs: {},
        shapeType: "rect"
      };
      return o5(this, "getSelectionMarkerAttrs", i, i => {
        let s;
        let {
          chart: o,
          zoomHor: r,
          zoomVert: a
        } = this, {
          mouseDownX: n = 0,
          mouseDownY: h = 0
        } = o, l = i.attrs;
        l.x = o.plotLeft, l.y = o.plotTop, l.width = r ? 1 : o.plotWidth, l.height = a ? 1 : o.plotHeight, r && (s = t - n, l.width = Math.max(1, Math.abs(s)), l.x = (s > 0 ? 0 : s) + n), a && (s = e - h, l.height = Math.max(1, Math.abs(s)), l.y = (s > 0 ? 0 : s) + h)
      }), i
    }
    drag(t) {
      let {
        chart: e
      } = this, {
        mouseDownX: i = 0,
        mouseDownY: s = 0
      } = e, {
        panning: o,
        panKey: r,
        selectionMarkerFill: a
      } = e.options.chart, n = e.plotLeft, h = e.plotTop, l = e.plotWidth, d = e.plotHeight, c = o9(o) ? o.enabled : o, p = r && t[`${r}Key`], u = t.chartX, g = t.chartY, f, m = this.selectionMarker;
      if ((!m || !m.touch) && (u < n ? u = n : u > n + l && (u = n + l), g < h ? g = h : g > h + d && (g = h + d), this.hasDragged = Math.sqrt(Math.pow(i - u, 2) + Math.pow(s - g, 2)), this.hasDragged > 10)) {
        f = e.isInsidePlot(i - n, s - h, {
          visiblePlotOnly: !0
        });
        let {
          shapeType: r,
          attrs: l
        } = this.getSelectionMarkerAttrs(u, g);
        (e.hasCartesianSeries || e.mapView) && this.hasZoom && f && !p && !m && (this.selectionMarker = m = e.renderer[r](), m.attr({
          class: "highcharts-selection-marker",
          zIndex: 7
        }).add(), e.styledMode || m.attr({
          fill: a || oZ("#334eff").setOpacity(.25).get()
        })), m && m.attr(l), f && !m && c && e.pan(t, o)
      }
    }
    dragStart(t) {
      let e = this.chart;
      e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = t.chartX, e.mouseDownY = t.chartY
    }
    getSelectionBox(t) {
      let e = {
        args: {
          marker: t
        },
        result: t.getBBox()
      };
      return o5(this, "getSelectionBox", e), e.result
    }
    drop(t) {
      let e;
      let {
        chart: i,
        selectionMarker: s
      } = this;
      for (let t of i.axes) t.isPanning && (t.isPanning = !1, (t.options.startOnTick || t.options.endOnTick || t.series.some(t => t.boosted)) && (t.forceRedraw = !0, t.setExtremes(t.userMin, t.userMax, !1), e = !0));
      if (e && i.redraw(), s && t) {
        if (this.hasDragged) {
          let e = this.getSelectionBox(s);
          i.transform({
            axes: i.axes.filter(t => t.zoomEnabled && ("xAxis" === t.coll && this.zoomX || "yAxis" === t.coll && this.zoomY)),
            selection: {
              originalEvent: t,
              xAxis: [],
              yAxis: [],
              ...e
            },
            from: e
          })
        }
        o6(i.index) && (this.selectionMarker = s.destroy())
      }
      i && o6(i.index) && (o1(i.container, {
        cursor: i._cursor
      }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [])
    }
    findNearestKDPoint(t, e, i) {
      let s;
      return t.forEach(function (t) {
        let o = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y"),
          r = t.searchPoint(i, o);
        o9(r, !0) && r.series && (!o9(s, !0) || function (t, i) {
          let s = t.distX - i.distX,
            o = t.dist - i.dist,
            r = i.series.group?.zIndex - t.series.group?.zIndex;
          return 0 !== s && e ? s : 0 !== o ? o : 0 !== r ? r : t.series.index > i.series.index ? -1 : 1
        }(s, r) > 0) && (s = r)
      }), s
    }
    getChartCoordinatesFromPoint(t, e) {
      let {
        xAxis: i,
        yAxis: s
      } = t.series, o = t.shapeArgs;
      if (i && s) {
        let r = t.clientX ?? t.plotX ?? 0,
          a = t.plotY || 0;
        return t.isNode && o && o6(o.x) && o6(o.y) && (r = o.x, a = o.y), e ? {
          chartX: s.len + s.pos - a,
          chartY: i.len + i.pos - r
        } : {
          chartX: r + i.pos,
          chartY: a + s.pos
        }
      }
      if (o && o.x && o.y) return {
        chartX: o.x,
        chartY: o.y
      }
    }
    getChartPosition() {
      if (this.chartPosition) return this.chartPosition;
      let {
        container: t
      } = this.chart, e = o8(t);
      this.chartPosition = {
        left: e.left,
        top: e.top,
        scaleX: 1,
        scaleY: 1
      };
      let {
        offsetHeight: i,
        offsetWidth: s
      } = t;
      return s > 2 && i > 2 && (this.chartPosition.scaleX = e.width / s, this.chartPosition.scaleY = e.height / i), this.chartPosition
    }
    getCoordinates(t) {
      let e = {
        xAxis: [],
        yAxis: []
      };
      for (let i of this.chart.axes) e[i.isXAxis ? "xAxis" : "yAxis"].push({
        axis: i,
        value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
      });
      return e
    }
    getHoverData(t, e, i, s, o, r) {
      let a = [],
        n = function (t) {
          return t.visible && !(!o && t.directTouch) && o7(t.options.enableMouseTracking, !0)
        },
        h = e,
        l, d = {
          chartX: r ? r.chartX : void 0,
          chartY: r ? r.chartY : void 0,
          shared: o
        };
      o5(this, "beforeGetHoverData", d), l = h && !h.stickyTracking ? [h] : i.filter(t => t.stickyTracking && (d.filter || n)(t));
      let c = s && t || !r ? t : this.findNearestKDPoint(l, o, r);
      return h = c && c.series, c && (o && !h.noSharedTooltip ? (l = i.filter(function (t) {
        return d.filter ? d.filter(t) : n(t) && !t.noSharedTooltip
      })).forEach(function (t) {
        let e = o3(t.points, function (t) {
          return t.x === c.x && !t.isNull
        });
        o9(e) && (t.boosted && t.boost && (e = t.boost.getPoint(e)), a.push(e))
      }) : a.push(c)), o5(this, "afterGetHoverData", d = {
        hoverPoint: c
      }), {
        hoverPoint: d.hoverPoint,
        hoverSeries: h,
        hoverPoints: a
      }
    }
    getPointFromEvent(t) {
      let e = t.target,
        i;
      for (; e && !i;) i = e.point, e = e.parentNode;
      return i
    }
    onTrackerMouseOut(t) {
      let e = this.chart,
        i = t.relatedTarget,
        s = e.hoverSeries;
      this.isDirectTouch = !1, !s || !i || s.stickyTracking || this.inClass(i, "highcharts-tooltip") || this.inClass(i, "highcharts-series-" + s.index) && this.inClass(i, "highcharts-tracker") || s.onMouseOut()
    }
    inClass(t, e) {
      let i = t,
        s;
      for (; i;) {
        if (s = o0(i, "class")) {
          if (-1 !== s.indexOf(e)) return !0;
          if (-1 !== s.indexOf("highcharts-container")) return !1
        }
        i = i.parentElement
      }
    }
    constructor(t, e) {
      this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = e, this.chart = t, this.runChartClick = !!e.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), o5(this, "afterInit")
    }
    normalize(t, e) {
      let i = t.touches,
        s = i ? i.length ? i.item(0) : o7(i.changedTouches, t.changedTouches)[0] : t;
      e || (e = this.getChartPosition());
      let o = s.pageX - e.left,
        r = s.pageY - e.top;
      return o2(t, {
        chartX: Math.round(o /= e.scaleX),
        chartY: Math.round(r /= e.scaleY)
      })
    }
    onContainerClick(t) {
      let e = this.chart,
        i = e.hoverPoint,
        s = this.normalize(t),
        o = e.plotLeft,
        r = e.plotTop;
      !e.cancelClick && (i && this.inClass(s.target, "highcharts-tracker") ? (o5(i.series, "click", o2(s, {
        point: i
      })), e.hoverPoint && i.firePointEvent("click", s)) : (o2(s, this.getCoordinates(s)), e.isInsidePlot(s.chartX - o, s.chartY - r, {
        visiblePlotOnly: !0
      }) && o5(e, "click", s)))
    }
    onContainerMouseDown(t) {
      let e = (1 & (t.buttons || t.button)) == 1;
      t = this.normalize(t), L.isFirefox && 0 !== t.button && this.onContainerMouseMove(t), (void 0 === t.button || e) && (this.zoomOption(t), e && t.preventDefault?.(), this.dragStart(t))
    }
    onContainerMouseLeave(t) {
      let {
        pointer: e
      } = oq[o7(ri.hoverChartIndex, -1)] || {};
      t = this.normalize(t), this.onContainerMouseMove(t), e && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (e.reset(), e.chartPosition = void 0)
    }
    onContainerMouseEnter() {
      delete this.chartPosition
    }
    onContainerMouseMove(t) {
      let e = this.chart,
        i = e.tooltip,
        s = this.normalize(t);
      this.setHoverChartIndex(t), ("mousedown" === e.mouseIsDown || this.touchSelect(s)) && this.drag(s), !e.openMenu && (this.inClass(s.target, "highcharts-tracker") || e.isInsidePlot(s.chartX - e.plotLeft, s.chartY - e.plotTop, {
        visiblePlotOnly: !0
      })) && !(i && i.shouldStickOnContact(s)) && (this.inClass(s.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(s))
    }
    onDocumentTouchEnd(t) {
      this.onDocumentMouseUp(t)
    }
    onContainerTouchMove(t) {
      this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t)
    }
    onContainerTouchStart(t) {
      this.touchSelect(t) ? this.onContainerMouseDown(t) : (this.zoomOption(t), this.touch(t, !0))
    }
    onDocumentMouseMove(t) {
      let e = this.chart,
        i = e.tooltip,
        s = this.chartPosition,
        o = this.normalize(t, s);
      !s || e.isInsidePlot(o.chartX - e.plotLeft, o.chartY - e.plotTop, {
        visiblePlotOnly: !0
      }) || i && i.shouldStickOnContact(o) || o.target !== e.container.ownerDocument && this.inClass(o.target, "highcharts-tracker") || this.reset()
    }
    onDocumentMouseUp(t) {
      oq[o7(ri.hoverChartIndex, -1)]?.pointer?.drop(t)
    }
    pinch(t) {
      let e = this,
        {
          chart: i,
          hasZoom: s,
          lastTouches: o
        } = e,
        r = [].map.call(t.touches || [], t => e.normalize(t)),
        a = r.length,
        n = 1 === a && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
        h = i.tooltip,
        l = 1 === a && o7(h?.options.followTouchMove, !0);
      a > 1 ? e.initiated = !0 : l && (e.initiated = !1), s && e.initiated && !n && !1 !== t.cancelable && t.preventDefault(), "touchstart" === t.type ? (e.pinchDown = r, e.res = !0, i.mouseDownX = t.chartX) : l ? this.runPointActions(e.normalize(t)) : o && (o5(i, "touchpan", {
        originalEvent: t,
        touches: r
      }, () => {
        let e = t => {
          let e = t[0],
            i = t[1] || e;
          return {
            x: e.chartX,
            y: e.chartY,
            width: i.chartX - e.chartX,
            height: i.chartY - e.chartY
          }
        };
        i.transform({
          axes: i.axes.filter(t => t.zoomEnabled && (this.zoomHor && t.horiz || this.zoomVert && !t.horiz)),
          to: e(r),
          from: e(o),
          trigger: t.type
        })
      }), e.res && (e.res = !1, this.reset(!1, 0))), e.lastTouches = r
    }
    reset(t, e) {
      let i = this.chart,
        s = i.hoverSeries,
        o = i.hoverPoint,
        r = i.hoverPoints,
        a = i.tooltip,
        n = a && a.shared ? r : o;
      t && n && re(n).forEach(function (e) {
        e.series.isCartesian && void 0 === e.plotX && (t = !1)
      }), t ? a && n && re(n).length && (a.refresh(n), a.shared && r ? r.forEach(function (t) {
        t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t))
      }) : o && (o.setState(o.state, !0), i.axes.forEach(function (t) {
        t.crosshair && o.series[t.coll] === t && t.drawCrosshair(null, o)
      }))) : (o && o.onMouseOut(), r && r.forEach(function (t) {
        t.setState()
      }), s && s.onMouseOut(), a && a.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach(function (t) {
        t.hideCrosshair()
      }), i.hoverPoints = i.hoverPoint = void 0)
    }
    runPointActions(t, e, i) {
      let s = this.chart,
        o = s.series,
        r = s.tooltip && s.tooltip.options.enabled ? s.tooltip : void 0,
        a = !!r && r.shared,
        n = e || s.hoverPoint,
        h = n && n.series || s.hoverSeries,
        l = (!t || "touchmove" !== t.type) && (!!e || h && h.directTouch && this.isDirectTouch),
        d = this.getHoverData(n, h, o, l, a, t);
      n = d.hoverPoint, h = d.hoverSeries;
      let c = d.hoverPoints,
        p = h && h.tooltipOptions.followPointer && !h.tooltipOptions.split,
        u = a && h && !h.noSharedTooltip;
      if (n && (i || n !== s.hoverPoint || r && r.isHidden)) {
        if ((s.hoverPoints || []).forEach(function (t) {
          -1 === c.indexOf(t) && t.setState()
        }), s.hoverSeries !== h && h.onMouseOver(), this.applyInactiveState(c), (c || []).forEach(function (t) {
          t.setState("hover")
        }), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !n.series) return;
        s.hoverPoints = c, s.hoverPoint = n, n.firePointEvent("mouseOver", void 0, () => {
          r && n && r.refresh(u ? c : n, t)
        })
      } else if (p && r && !r.isHidden) {
        let e = r.getAnchor([{}], t);
        s.isInsidePlot(e[0], e[1], {
          visiblePlotOnly: !0
        }) && r.updatePosition({
          plotX: e[0],
          plotY: e[1]
        })
      }
      this.unDocMouseMove || (this.unDocMouseMove = oQ(s.container.ownerDocument, "mousemove", t => oq[ri.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(t)), this.eventsToUnbind.push(this.unDocMouseMove)), s.axes.forEach(function (e) {
        let i;
        let o = o7((e.crosshair || {}).snap, !0);
        !o || (i = s.hoverPoint) && i.series[e.coll] === e || (i = o3(c, t => t.series && t.series[e.coll] === e)), i || !o ? e.drawCrosshair(t, i) : e.hideCrosshair()
      })
    }
    setDOMEvents() {
      let t = this.chart.container,
        e = t.ownerDocument;
      t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(oQ(t, "mouseenter", this.onContainerMouseEnter.bind(this)), oQ(t, "mouseleave", this.onContainerMouseLeave.bind(this))), ri.unbindDocumentMouseUp.some(t => t.doc === e) || ri.unbindDocumentMouseUp.push({
        doc: e,
        unbind: oQ(e, "mouseup", this.onDocumentMouseUp.bind(this))
      });
      let i = this.chart.renderTo.parentElement;
      for (; i && "BODY" !== i.tagName;) this.eventsToUnbind.push(oQ(i, "scroll", () => {
        delete this.chartPosition
      })), i = i.parentElement;
      this.eventsToUnbind.push(oQ(t, "touchstart", this.onContainerTouchStart.bind(this), {
        passive: !1
      }), oQ(t, "touchmove", this.onContainerTouchMove.bind(this), {
        passive: !1
      })), ri.unbindDocumentTouchEnd || (ri.unbindDocumentTouchEnd = oQ(e, "touchend", this.onDocumentTouchEnd.bind(this), {
        passive: !1
      })), this.setPointerCapture(), oQ(this.chart, "redraw", this.setPointerCapture.bind(this))
    }
    setPointerCapture() {
      if (!oJ) return;
      let t = this.pointerCaptureEventsToUnbind,
        e = this.chart,
        i = e.container,
        s = o7(e.options.tooltip?.followTouchMove, !0) && e.series.some(t => t.options.findNearestPointBy.indexOf("y") > -1);
      !this.hasPointerCapture && s ? (t.push(oQ(i, "pointerdown", t => {
        t.target?.hasPointerCapture(t.pointerId) && t.target?.releasePointerCapture(t.pointerId)
      }), oQ(i, "pointermove", t => {
        e.pointer?.getPointFromEvent(t)?.onMouseOver(t)
      })), e.styledMode || o1(i, {
        "touch-action": "none"
      }), i.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !s && (t.forEach(t => t()), t.length = 0, e.styledMode || o1(i, {
        "touch-action": o7(e.options.chart.style?.["touch-action"], "manipulation")
      }), i.className = i.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1)
    }
    setHoverChartIndex(t) {
      let e = this.chart,
        i = L.charts[o7(ri.hoverChartIndex, -1)];
      if (i && i !== e) {
        let s = {
          relatedTarget: e.container
        };
        t && !t?.relatedTarget && (t = {
          ...s,
          ...t
        }), i.pointer?.onContainerMouseLeave(t || s)
      }
      i && i.mouseIsDown || (ri.hoverChartIndex = e.index)
    }
    touch(t, e) {
      let i;
      let {
        chart: s,
        pinchDown: o = []
      } = this;
      this.setHoverChartIndex(), 1 === (t = this.normalize(t)).touches.length ? s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
        visiblePlotOnly: !0
      }) && !s.openMenu ? (e && this.runPointActions(t), "touchmove" === t.type && (i = !!o[0] && Math.pow(o[0].chartX - t.chartX, 2) + Math.pow(o[0].chartY - t.chartY, 2) >= 16), o7(i, !0) && this.pinch(t)) : e && this.reset() : 2 === t.touches.length && this.pinch(t)
    }
    touchSelect(t) {
      return !!(this.chart.zooming.singleTouch && t.touches && 1 === t.touches.length)
    }
    zoomOption(t) {
      let e = this.chart,
        i = e.inverted,
        s = e.zooming.type || "",
        o, r;
      /touch/.test(t.type) && (s = o7(e.zooming.pinchType, s)), this.zoomX = o = /x/.test(s), this.zoomY = r = /y/.test(s), this.zoomHor = o && !i || r && i, this.zoomVert = r && !i || o && i, this.hasZoom = o || r
    }
  }
  ri.unbindDocumentMouseUp = [],
    function (t) {
      t.compose = function (e) {
        rt(oK, "Core.Pointer") && oQ(e, "beforeRender", function () {
          this.pointer = new t(this, this.options)
        })
      }
    }(ri || (ri = {}));
  let rs = ri,
    {
      fireEvent: ro,
      isArray: rr,
      objectEach: ra,
      uniqueKey: rn
    } = ti,
    rh = class {
      constructor(t = {}) {
        this.autoId = !t.id, this.columns = {}, this.id = t.id || rn(), this.modified = this, this.rowCount = 0, this.versionTag = rn();
        let e = 0;
        ra(t.columns || {}, (t, i) => {
          this.columns[i] = t.slice(), e = Math.max(e, t.length)
        }), this.applyRowCount(e)
      }
      applyRowCount(t) {
        this.rowCount = t, ra(this.columns, e => {
          rr(e) && (e.length = t)
        })
      }
      getColumn(t, e) {
        return this.columns[t]
      }
      getColumns(t, e) {
        return (t || Object.keys(this.columns)).reduce((t, e) => (t[e] = this.columns[e], t), {})
      }
      getRow(t, e) {
        return (e || Object.keys(this.columns)).map(e => this.columns[e]?.[t])
      }
      setColumn(t, e = [], i = 0, s) {
        this.setColumns({
          [t]: e
        }, i, s)
      }
      setColumns(t, e, i) {
        let s = this.rowCount;
        ra(t, (t, e) => {
          this.columns[e] = t.slice(), s = t.length
        }), this.applyRowCount(s), i?.silent || (ro(this, "afterSetColumns"), this.versionTag = rn())
      }
      setRow(t, e = this.rowCount, i, s) {
        let {
          columns: o
        } = this, r = i ? this.rowCount + 1 : e + 1;
        ra(t, (t, a) => {
          let n = o[a] || s?.addColumns !== !1 && Array(r);
          n && (i ? n.splice(e, 0, t) : n[e] = t, o[a] = n)
        }), r > this.rowCount && this.applyRowCount(r), s?.silent || (ro(this, "afterSetRows"), this.versionTag = rn())
      }
    },
    {
      extend: rl,
      merge: rd,
      pick: rc
    } = ti;
  ! function (t) {
    function e(t, e, i) {
      let s = this.legendItem = this.legendItem || {},
        {
          chart: o,
          options: r
        } = this,
        {
          baseline: a = 0,
          symbolWidth: n,
          symbolHeight: h
        } = t,
        l = this.symbol || "circle",
        d = h / 2,
        c = o.renderer,
        p = s.group,
        u = a - Math.round((t.fontMetrics?.b || h) * (i ? .4 : .3)),
        g = {},
        f, m = r.marker,
        x = 0;
      if (o.styledMode || (g["stroke-width"] = Math.min(r.lineWidth || 0, 24), r.dashStyle ? g.dashstyle = r.dashStyle : "square" === r.linecap || (g["stroke-linecap"] = "round")), s.line = c.path().addClass("highcharts-graph").attr(g).add(p), i && (s.area = c.path().addClass("highcharts-area").add(p)), g["stroke-linecap"] && (x = Math.min(s.line.strokeWidth(), n) / 2), n) {
        let t = [
          ["M", x, u],
          ["L", n - x, u]
        ];
        s.line.attr({
          d: t
        }), s.area?.attr({
          d: [...t, ["L", n - x, a],
          ["L", x, a]
          ]
        })
      }
      if (m && !1 !== m.enabled && n) {
        let t = Math.min(rc(m.radius, d), d);
        0 === l.indexOf("url") && (m = rd(m, {
          width: h,
          height: h
        }), t = 0), s.symbol = f = c.symbol(l, n / 2 - t, u - t, 2 * t, 2 * t, rl({
          context: "legend"
        }, m)).addClass("highcharts-point").add(p), f.isMarker = !0
      }
    }
    t.areaMarker = function (t, i) {
      e.call(this, t, i, !0)
    }, t.lineMarker = e, t.rectangle = function (t, e) {
      let i = e.legendItem || {},
        s = t.options,
        o = t.symbolHeight,
        r = s.squareSymbol,
        a = r ? o : t.symbolWidth;
      i.symbol = this.chart.renderer.rect(r ? (t.symbolWidth - o) / 2 : 0, t.baseline - o + 1, a, o, rc(t.options.symbolRadius, o / 2)).addClass("highcharts-point").attr({
        zIndex: 3
      }).add(i.group)
    }
  }(g || (g = {}));
  let rp = g,
    {
      defaultOptions: ru
    } = tA,
    {
      extend: rg,
      extendClass: rf,
      merge: rm
    } = ti;
  ! function (t) {
    function e(e, i) {
      let s = ru.plotOptions || {},
        o = i.defaultOptions,
        r = i.prototype;
      return r.type = e, r.pointClass || (r.pointClass = o$), !t.seriesTypes[e] && (o && (s[e] = o), t.seriesTypes[e] = i, !0)
    }
    t.seriesTypes = L.seriesTypes, t.registerSeriesType = e, t.seriesType = function (i, s, o, r, a) {
      let n = ru.plotOptions || {};
      if (s = s || "", n[i] = rm(n[s], o), delete t.seriesTypes[i], e(i, rf(t.seriesTypes[s] || function () { }, r)), t.seriesTypes[i].prototype.type = i, a) {
        class e extends o$ { }
        rg(e.prototype, a), t.seriesTypes[i].prototype.pointClass = e
      }
      return t.seriesTypes[i]
    }
  }(f || (f = {}));
  let rx = f,
    {
      animObject: ry,
      setAnimation: rb
    } = tV,
    {
      defaultOptions: rv
    } = tA,
    {
      registerEventOptions: rk
    } = st,
    {
      svg: rM,
      win: rw
    } = L,
    {
      seriesTypes: rS
    } = rx,
    {
      arrayMax: rA,
      arrayMin: rT,
      clamp: rC,
      correctFloat: rP,
      crisp: rO,
      defined: rE,
      destroyObjectProperties: rL,
      diffObjects: rB,
      erase: rD,
      error: rI,
      extend: rz,
      find: rR,
      fireEvent: rN,
      getClosestDistance: rW,
      getNestedProperty: rG,
      insertItem: rX,
      isArray: rH,
      isNumber: rF,
      isString: rY,
      merge: rj,
      objectEach: rU,
      pick: rV,
      removeEvent: r_,
      syncTimeout: r$
    } = ti;
  class rZ {
    constructor() {
      this.zoneAxis = "y"
    }
    init(t, e) {
      let i;
      rN(this, "init", {
        options: e
      }), this.dataTable ?? (this.dataTable = new rh);
      let s = t.series;
      this.eventsToUnbind = [], this.chart = t, this.options = this.setOptions(e);
      let o = this.options,
        r = !1 !== o.visible;
      this.linkedSeries = [], this.bindAxes(), rz(this, {
        name: o.name,
        state: "",
        visible: r,
        selected: !0 === o.selected
      }), rk(this, o);
      let a = o.events;
      (a && a.click || o.point && o.point.events && o.point.events.click || o.allowPointSelect) && (t.runTrackerClick = !0), this.getColor(), this.getSymbol(), this.isCartesian && (t.hasCartesianSeries = !0), s.length && (i = s[s.length - 1]), this._i = rV(i && i._i, -1) + 1, this.opacity = this.options.opacity, t.orderItems("series", rX(this, s)), o.dataSorting && o.dataSorting.enabled ? this.setDataSortingOptions() : this.points || this.data || this.setData(o.data, !1), rN(this, "afterInit")
    }
    is(t) {
      return rS[t] && this instanceof rS[t]
    }
    bindAxes() {
      let t;
      let e = this,
        i = e.options,
        s = e.chart;
      rN(this, "bindAxes", null, function () {
        (e.axisTypes || []).forEach(function (o) {
          (s[o] || []).forEach(function (s) {
            t = s.options, (rV(i[o], 0) === s.index || void 0 !== i[o] && i[o] === t.id) && (rX(e, s.series), e[o] = s, s.isDirty = !0)
          }), e[o] || e.optionalAxis === o || rI(18, !0, s)
        })
      }), rN(this, "afterBindAxes")
    }
    hasData() {
      return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.dataTable.rowCount > 0
    }
    hasMarkerChanged(t, e) {
      let i = t.marker,
        s = e.marker || {};
      return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || s.height !== i.height || s.width !== i.width)
    }
    autoIncrement(t) {
      let e;
      let i = this.options,
        {
          pointIntervalUnit: s,
          relativeXValue: o
        } = this.options,
        r = this.chart.time,
        a = this.xIncrement ?? r.parse(i.pointStart) ?? 0;
      if (this.pointInterval = e = rV(this.pointInterval, i.pointInterval, 1), o && rF(t) && (e *= t), s) {
        let t = r.toParts(a);
        "day" === s ? t[2] += e : "month" === s ? t[1] += e : "year" === s && (t[0] += e), e = r.makeTime.apply(r, t) - a
      }
      return o && rF(t) ? a + e : (this.xIncrement = a + e, a)
    }
    setDataSortingOptions() {
      let t = this.options;
      rz(this, {
        requireSorting: !1,
        sorted: !1,
        enabledDataSorting: !0,
        allowDG: !1
      }), rE(t.pointRange) || (t.pointRange = 1)
    }
    setOptions(t) {
      let e;
      let i = this.chart,
        s = i.options.plotOptions,
        o = i.userOptions || {},
        r = rj(t),
        a = i.styledMode,
        n = {
          plotOptions: s,
          userOptions: r
        };
      rN(this, "setOptions", n);
      let h = n.plotOptions[this.type],
        l = o.plotOptions || {},
        d = l.series || {},
        c = rv.plotOptions[this.type] || {},
        p = l[this.type] || {};
      this.userOptions = n.userOptions;
      let u = rj(h, s.series, p, r);
      this.tooltipOptions = rj(rv.tooltip, rv.plotOptions.series?.tooltip, c?.tooltip, i.userOptions.tooltip, l.series?.tooltip, p.tooltip, r.tooltip), this.stickyTracking = rV(r.stickyTracking, p.stickyTracking, d.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || u.stickyTracking), null === h.marker && delete u.marker, this.zoneAxis = u.zoneAxis || "y";
      let g = this.zones = (u.zones || []).map(t => ({
        ...t
      }));
      return (u.negativeColor || u.negativeFillColor) && !u.zones && (e = {
        value: u[this.zoneAxis + "Threshold"] || u.threshold || 0,
        className: "highcharts-negative"
      }, a || (e.color = u.negativeColor, e.fillColor = u.negativeFillColor), g.push(e)), g.length && rE(g[g.length - 1].value) && g.push(a ? {} : {
        color: this.color,
        fillColor: this.fillColor
      }), rN(this, "afterSetOptions", {
        options: u
      }), u
    }
    getName() {
      return rV(this.options.name, "Series " + (this.index + 1))
    }
    getCyclic(t, e, i) {
      let s, o;
      let r = this.chart,
        a = `${t}Index`,
        n = `${t}Counter`,
        h = i?.length || r.options.chart.colorCount;
      !e && (rE(o = rV("color" === t ? this.options.colorIndex : void 0, this[a])) ? s = o : (r.series.length || (r[n] = 0), s = r[n] % h, r[n] += 1), i && (e = i[s])), void 0 !== s && (this[a] = s), this[t] = e
    }
    getColor() {
      this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || rv.plotOptions[this.type].color, this.chart.options.colors)
    }
    getPointsCollection() {
      return (this.hasGroupedData ? this.points : this.data) || []
    }
    getSymbol() {
      let t = this.options.marker;
      this.getCyclic("symbol", t.symbol, this.chart.options.symbols)
    }
    getColumn(t, e) {
      return (e ? this.dataTable.modified : this.dataTable).getColumn(t, !0) || []
    }
    findPointIndex(t, e) {
      let i, s, o;
      let r = t.id,
        a = t.x,
        n = this.points,
        h = this.options.dataSorting;
      if (r) {
        let t = this.chart.get(r);
        t instanceof o$ && (i = t)
      } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
        let e = e => !e.touched && e.index === t.index;
        if (h && h.matchByName ? e = e => !e.touched && e.name === t.name : this.options.relativeXValue && (e = e => !e.touched && e.options.x === t.x), !(i = rR(n, e))) return
      }
      return i && void 0 !== (o = i && i.index) && (s = !0), void 0 === o && rF(a) && (o = this.getColumn("x").indexOf(a, e)), -1 !== o && void 0 !== o && this.cropped && (o = o >= this.cropStart ? o - this.cropStart : o), !s && rF(o) && n[o] && n[o].touched && (o = void 0), o
    }
    updateData(t, e) {
      let i = this.options,
        s = i.dataSorting,
        o = this.points,
        r = [],
        a = this.requireSorting,
        n = t.length === o.length,
        h, l, d, c, p = !0;
      if (this.xIncrement = null, t.forEach(function (t, e) {
        let l;
        let d = rE(t) && this.pointClass.prototype.optionsToObject.call({
          series: this
        }, t) || {},
          p = d.x;
        d.id || rF(p) ? (-1 === (l = this.findPointIndex(d, c)) || void 0 === l ? r.push(t) : o[l] && t !== i.data[l] ? (o[l].update(t, !1, null, !1), o[l].touched = !0, a && (c = l + 1)) : o[l] && (o[l].touched = !0), (!n || e !== l || s && s.enabled || this.hasDerivedData) && (h = !0)) : r.push(t)
      }, this), h)
        for (l = o.length; l--;)(d = o[l]) && !d.touched && d.remove && d.remove(!1, e);
      else !n || s && s.enabled ? p = !1 : (t.forEach(function (t, e) {
        t === o[e].y || o[e].destroyed || o[e].update(t, !1, null, !1)
      }), r.length = 0);
      if (o.forEach(function (t) {
        t && (t.touched = !1)
      }), !p) return !1;
      r.forEach(function (t) {
        this.addPoint(t, !1, null, null, !1)
      }, this);
      let u = this.getColumn("x");
      return null === this.xIncrement && u.length && (this.xIncrement = rA(u), this.autoIncrement()), !0
    }
    dataColumnKeys() {
      return ["x", ...this.pointArrayMap || ["y"]]
    }
    setData(t, e = !0, i, s) {
      let o = this.points,
        r = o && o.length || 0,
        a = this.options,
        n = this.chart,
        h = a.dataSorting,
        l = this.xAxis,
        d = a.turboThreshold,
        c = this.dataTable,
        p = this.dataColumnKeys(),
        u = this.pointValKey || "y",
        g = (this.pointArrayMap || []).length,
        f = a.keys,
        m, x, y = 0,
        b = 1,
        v;
      n.options.chart.allowMutatingData || (a.data && delete this.options.data, this.userOptions.data && delete this.userOptions.data, v = rj(!0, t));
      let k = (t = v || t || []).length;
      if (h && h.enabled && (t = this.sortData(t)), n.options.chart.allowMutatingData && !1 !== s && k && r && !this.cropped && !this.hasGroupedData && this.visible && !this.boosted && (x = this.updateData(t, i)), !x) {
        this.xIncrement = null, this.colorCounter = 0;
        let e = d && k > d;
        if (e) {
          let i = this.getFirstValidPoint(t),
            s = this.getFirstValidPoint(t, k - 1, -1),
            o = t => !!(rH(t) && (f || rF(t[0])));
          if (rF(i) && rF(s)) {
            let e = [],
              i = [];
            for (let s of t) e.push(this.autoIncrement()), i.push(s);
            c.setColumns({
              x: e,
              [u]: i
            })
          } else if (o(i) && o(s)) {
            if (g) {
              let e = i.length === g ? 1 : 0,
                s = Array(p.length).fill(0).map(() => []);
              for (let i of t) {
                e && s[0].push(this.autoIncrement());
                for (let t = e; t <= g; t++) s[t]?.push(i[t - e])
              }
              c.setColumns(p.reduce((t, e, i) => (t[e] = s[i], t), {}))
            } else {
              f && (y = f.indexOf("x"), b = f.indexOf("y"), y = y >= 0 ? y : 0, b = b >= 0 ? b : 1), 1 === i.length && (b = 0);
              let e = [],
                s = [];
              if (y === b)
                for (let i of t) e.push(this.autoIncrement()), s.push(i[b]);
              else
                for (let i of t) e.push(i[y]), s.push(i[b]);
              c.setColumns({
                x: e,
                [u]: s
              })
            }
          } else e = !1
        }
        if (!e) {
          let e = p.reduce((t, e) => (t[e] = [], t), {});
          for (m = 0; m < k; m++) {
            let i = this.pointClass.prototype.applyOptions.apply({
              series: this
            }, [t[m]]);
            for (let t of p) e[t][m] = i[t]
          }
          c.setColumns(e)
        }
        for (rY(this.getColumn("y")[0]) && rI(14, !0, n), this.data = [], this.options.data = this.userOptions.data = t, m = r; m--;) o[m]?.destroy();
        l && (l.minRange = l.userMinRange), this.isDirty = n.isDirtyBox = !0, this.isDirtyData = !!o, i = !1
      }
      "point" === a.legendType && (this.processData(), this.generatePoints()), e && n.redraw(i)
    }
    sortData(t) {
      let e = this,
        i = e.options.dataSorting.sortKey || "y",
        s = function (t, e) {
          return rE(e) && t.pointClass.prototype.optionsToObject.call({
            series: t
          }, e) || {}
        };
      return t.forEach(function (i, o) {
        t[o] = s(e, i), t[o].index = o
      }, this), t.concat().sort((t, e) => {
        let s = rG(i, t),
          o = rG(i, e);
        return o < s ? -1 : o > s ? 1 : 0
      }).forEach(function (t, e) {
        t.x = e
      }, this), e.linkedSeries && e.linkedSeries.forEach(function (e) {
        let i = e.options,
          o = i.data;
        i.dataSorting && i.dataSorting.enabled || !o || (o.forEach(function (i, r) {
          o[r] = s(e, i), t[r] && (o[r].x = t[r].x, o[r].index = r)
        }), e.setData(o, !1))
      }), t
    }
    getProcessedData(t) {
      let e = this,
        {
          dataTable: i,
          isCartesian: s,
          options: o,
          xAxis: r
        } = e,
        a = o.cropThreshold,
        n = t || e.getExtremesFromAll,
        h = r?.logarithmic,
        l = i.rowCount,
        d, c, p = 0,
        u, g, f, m = e.getColumn("x"),
        x = i,
        y = !1;
      return r && (g = (u = r.getExtremes()).min, f = u.max, y = !!(r.categories && !r.names.length), s && e.sorted && !n && (!a || l > a || e.forceCrop) && (m[l - 1] < g || m[0] > f ? x = new rh : e.getColumn(e.pointValKey || "y").length && (m[0] < g || m[l - 1] > f) && (x = (d = this.cropData(i, g, f)).modified, p = d.start, c = !0))), m = x.getColumn("x") || [], {
        modified: x,
        cropped: c,
        cropStart: p,
        closestPointRange: rW([h ? m.map(h.log2lin) : m], () => e.requireSorting && !y && rI(15, !1, e.chart))
      }
    }
    processData(t) {
      let e = this.xAxis,
        i = this.dataTable;
      if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
      let s = this.getProcessedData();
      i.modified = s.modified, this.cropped = s.cropped, this.cropStart = s.cropStart, this.closestPointRange = this.basePointRange = s.closestPointRange, rN(this, "afterProcessData")
    }
    cropData(t, e, i) {
      let s = t.getColumn("x", !0) || [],
        o = s.length,
        r = {},
        a, n, h = 0,
        l = o;
      for (a = 0; a < o; a++)
        if (s[a] >= e) {
          h = Math.max(0, a - 1);
          break
        } for (n = a; n < o; n++)
        if (s[n] > i) {
          l = n + 1;
          break
        } for (let e of this.dataColumnKeys()) {
          let i = t.getColumn(e, !0);
          i && (r[e] = i.slice(h, l))
        }
      return {
        modified: new rh({
          columns: r
        }),
        start: h,
        end: l
      }
    }
    generatePoints() {
      let t = this.options,
        e = this.processedData || t.data,
        i = this.dataTable.modified,
        s = this.getColumn("x", !0),
        o = this.pointClass,
        r = i.rowCount,
        a = this.cropStart || 0,
        n = this.hasGroupedData,
        h = t.keys,
        l = [],
        d = t.dataGrouping && t.dataGrouping.groupAll ? a : 0,
        c = this.xAxis?.categories,
        p = this.pointArrayMap || ["y"],
        u = this.dataColumnKeys(),
        g, f, m, x, y = this.data,
        b;
      if (!y && !n) {
        let t = [];
        t.length = e?.length || 0, y = this.data = t
      }
      for (h && n && (this.options.keys = !1), x = 0; x < r; x++) f = a + x, n ? ((m = new o(this, i.getRow(x, u) || [])).dataGroup = this.groupMap[d + x], m.dataGroup?.options && (m.options = m.dataGroup.options, rz(m, m.dataGroup.options), delete m.dataLabels)) : (m = y[f], b = e ? e[f] : i.getRow(x, p), m || void 0 === b || (y[f] = m = new o(this, b, s[x]))), m && (m.index = n ? d + x : f, l[x] = m, m.category = c?.[m.x] ?? m.x, m.key = m.name ?? m.category);
      if (this.options.keys = h, y && (r !== (g = y.length) || n))
        for (x = 0; x < g; x++) x !== a || n || (x += r), y[x] && (y[x].destroyElements(), y[x].plotX = void 0);
      this.data = y, this.points = l, rN(this, "afterGeneratePoints")
    }
    getXExtremes(t) {
      return {
        min: rT(t),
        max: rA(t)
      }
    }
    getExtremes(t, e) {
      let {
        xAxis: i,
        yAxis: s
      } = this, o = e || this.getExtremesFromAll || this.options.getExtremesFromAll, r = o && this.cropped ? this.dataTable : this.dataTable.modified, a = r.rowCount, n = t || this.stackedYData, h = n ? [n] : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map(t => r.getColumn(t, !0) || []) || [], l = this.getColumn("x", !0), d = [], c = this.requireSorting && !this.is("column") ? 1 : 0, p = !!s && s.positiveValuesOnly, u = o || this.cropped || !i, g, f, m, x = 0, y = 0;
      for (i && (x = (g = i.getExtremes()).min, y = g.max), m = 0; m < a; m++)
        if (f = l[m], u || (l[m + c] || f) >= x && (l[m - c] || f) <= y)
          for (let t of h) {
            let e = t[m];
            rF(e) && (e > 0 || !p) && d.push(e)
          }
      let b = {
        activeYData: d,
        dataMin: rT(d),
        dataMax: rA(d)
      };
      return rN(this, "afterGetExtremes", {
        dataExtremes: b
      }), b
    }
    applyExtremes() {
      let t = this.getExtremes();
      return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t
    }
    getFirstValidPoint(t, e = 0, i = 1) {
      let s = t.length,
        o = e;
      for (; o >= 0 && o < s;) {
        if (rE(t[o])) return t[o];
        o += i
      }
    }
    translate() {
      this.generatePoints();
      let t = this.options,
        e = t.stacking,
        i = this.xAxis,
        s = this.enabledDataSorting,
        o = this.yAxis,
        r = this.points,
        a = r.length,
        n = this.pointPlacementToXValue(),
        h = !!n,
        l = t.threshold,
        d = t.startFromThreshold ? l : 0,
        c, p, u, g, f = Number.MAX_VALUE;

      function m(t) {
        return rC(t, -1e9, 1e9)
      }
      for (c = 0; c < a; c++) {
        let t;
        let a = r[c],
          x = a.x,
          y, b, v = a.y,
          k = a.low,
          M = e && o.stacking?.stacks[(this.negStacks && v < (d ? 0 : l) ? "-" : "") + this.stackKey];
        p = i.translate(x, !1, !1, !1, !0, n), a.plotX = rF(p) ? rP(m(p)) : void 0, e && this.visible && M && M[x] && (g = this.getStackIndicator(g, x, this.index), !a.isNull && g.key && (b = (y = M[x]).points[g.key]), y && rH(b) && (k = b[0], v = b[1], k === d && g.key === M[x].base && (k = rV(rF(l) ? l : o.min)), o.positiveValuesOnly && rE(k) && k <= 0 && (k = void 0), a.total = a.stackTotal = rV(y.total), a.percentage = rE(a.y) && y.total ? a.y / y.total * 100 : void 0, a.stackY = v, this.irregularWidths || y.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), a.yBottom = rE(k) ? m(o.translate(k, !1, !0, !1, !0)) : void 0, this.dataModify && (v = this.dataModify.modifyValue(v, c)), rF(v) && void 0 !== a.plotX && (t = rF(t = o.translate(v, !1, !0, !1, !0)) ? m(t) : void 0), a.plotY = t, a.isInside = this.isPointInside(a), a.clientX = h ? rP(i.translate(x, !1, !1, !1, !0, n)) : p, a.negative = (a.y || 0) < (l || 0), a.isNull || !1 === a.visible || (void 0 !== u && (f = Math.min(f, Math.abs(p - u))), u = p), a.zone = this.zones.length ? a.getZone() : void 0, !a.graphic && this.group && s && (a.isNew = !0)
      }
      this.closestPointRangePx = f, rN(this, "afterTranslate")
    }
    getValidPoints(t, e, i) {
      let s = this.chart;
      return (t || this.points || []).filter(function (t) {
        let {
          plotX: o,
          plotY: r
        } = t;
        return !!((i || !t.isNull && rF(r)) && (!e || s.isInsidePlot(o, r, {
          inverted: s.inverted
        }))) && !1 !== t.visible
      })
    }
    getClipBox() {
      let {
        chart: t,
        xAxis: e,
        yAxis: i
      } = this, {
        x: s,
        y: o,
        width: r,
        height: a
      } = rj(t.clipBox);
      return e && e.len !== t.plotSizeX && (r = e.len), i && i.len !== t.plotSizeY && (a = i.len), t.inverted && !this.invertible && ([r, a] = [a, r]), {
        x: s,
        y: o,
        width: r,
        height: a
      }
    }
    getSharedClipKey() {
      return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey
    }
    setClip() {
      let {
        chart: t,
        group: e,
        markerGroup: i
      } = this, s = t.sharedClips, o = t.renderer, r = this.getClipBox(), a = this.getSharedClipKey(), n = s[a];
      n ? n.animate(r) : s[a] = n = o.clipRect(r), e && e.clip(!1 === this.options.clip ? void 0 : n), i && i.clip()
    }
    animate(t) {
      let {
        chart: e,
        group: i,
        markerGroup: s
      } = this, o = e.inverted, r = ry(this.options.animation), a = [this.getSharedClipKey(), r.duration, r.easing, r.defer].join(","), n = e.sharedClips[a], h = e.sharedClips[a + "m"];
      if (t && i) {
        let t = this.getClipBox();
        if (n) n.attr("height", t.height);
        else {
          t.width = 0, o && (t.x = e.plotHeight), n = e.renderer.clipRect(t), e.sharedClips[a] = n;
          let i = {
            x: -99,
            y: -99,
            width: o ? e.plotWidth + 199 : 99,
            height: o ? 99 : e.plotHeight + 199
          };
          h = e.renderer.clipRect(i), e.sharedClips[a + "m"] = h
        }
        i.clip(n), s?.clip(h)
      } else if (n && !n.hasClass("highcharts-animating")) {
        let t = this.getClipBox(),
          i = r.step;
        (s?.element.childNodes.length || e.series.length > 1) && (r.step = function (t, e) {
          i && i.apply(e, arguments), "width" === e.prop && h?.element && h.attr(o ? "height" : "width", t + 99)
        }), n.addClass("highcharts-animating").animate(t, r)
      }
    }
    afterAnimate() {
      this.setClip(), rU(this.chart.sharedClips, (t, e, i) => {
        t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e])
      }), this.finishedAnimating = !0, rN(this, "afterAnimate")
    }
    drawPoints(t = this.points) {
      let e, i, s, o, r, a, n;
      let h = this.chart,
        l = h.styledMode,
        {
          colorAxis: d,
          options: c
        } = this,
        p = c.marker,
        u = this[this.specialGroup || "markerGroup"],
        g = this.xAxis,
        f = rV(p.enabled, !g || !!g.isRadial || null, this.closestPointRangePx >= p.enabledThreshold * p.radius);
      if (!1 !== p.enabled || this._hasPointMarkers)
        for (e = 0; e < t.length; e++)
          if (o = (s = (i = t[e]).graphic) ? "animate" : "attr", r = i.marker || {}, a = !!i.marker, (f && void 0 === r.enabled || r.enabled) && !i.isNull && !1 !== i.visible) {
            let t = rV(r.symbol, this.symbol, "rect");
            n = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = g.reversed ? -(n.width || 0) : g.width);
            let e = !1 !== i.isInside;
            if (!s && e && ((n.width || 0) > 0 || i.hasImage) && (i.graphic = s = h.renderer.symbol(t, n.x, n.y, n.width, n.height, a ? r : p).add(u), this.enabledDataSorting && h.hasRendered && (s.attr({
              x: i.startXPos
            }), o = "animate")), s && "animate" === o && s[e ? "show" : "hide"](e).animate(n), s) {
              let t = this.pointAttribs(i, l || !i.selected ? void 0 : "select");
              l ? d && s.css({
                fill: t.fill
              }) : s[o](t)
            }
            s && s.addClass(i.getClassName(), !0)
          } else s && (i.graphic = s.destroy())
    }
    markerAttribs(t, e) {
      let i = this.options,
        s = i.marker,
        o = t.marker || {},
        r = o.symbol || s.symbol,
        a = {},
        n, h, l = rV(o.radius, s && s.radius);
      e && (n = s.states[e], l = rV((h = o.states && o.states[e]) && h.radius, n && n.radius, l && l + (n && n.radiusPlus || 0))), t.hasImage = r && 0 === r.indexOf("url"), t.hasImage && (l = 0);
      let d = t.pos();
      return rF(l) && d && (i.crisp && (d[0] = rO(d[0], t.hasImage ? 0 : "rect" === r ? s?.lineWidth || 0 : 1)), a.x = d[0] - l, a.y = d[1] - l), l && (a.width = a.height = 2 * l), a
    }
    pointAttribs(t, e) {
      let i = this.options.marker,
        s = t && t.options,
        o = s && s.marker || {},
        r = s && s.color,
        a = t && t.color,
        n = t && t.zone && t.zone.color,
        h, l, d = this.color,
        c, p, u = rV(o.lineWidth, i.lineWidth),
        g = 1;
      return d = r || n || a || d, c = o.fillColor || i.fillColor || d, p = o.lineColor || i.lineColor || d, e = e || "normal", h = i.states[e] || {}, u = rV((l = o.states && o.states[e] || {}).lineWidth, h.lineWidth, u + rV(l.lineWidthPlus, h.lineWidthPlus, 0)), c = l.fillColor || h.fillColor || c, {
        stroke: p = l.lineColor || h.lineColor || p,
        "stroke-width": u,
        fill: c,
        opacity: g = rV(l.opacity, h.opacity, g)
      }
    }
    destroy(t) {
      let e, i, s;
      let o = this,
        r = o.chart,
        a = /AppleWebKit\/533/.test(rw.navigator.userAgent),
        n = o.data || [];
      for (rN(o, "destroy", {
        keepEventsForUpdate: t
      }), this.removeEvents(t), (o.axisTypes || []).forEach(function (t) {
        (s = o[t]) && s.series && (rD(s.series, o), s.isDirty = s.forceRedraw = !0)
      }), o.legendItem && o.chart.legend.destroyItem(o), e = n.length; e--;)(i = n[e]) && i.destroy && i.destroy();
      for (let t of o.zones) rL(t, void 0, !0);
      ti.clearTimeout(o.animationTimeout), rU(o, function (t, e) {
        t instanceof eK && !t.survive && t[a && "group" === e ? "hide" : "destroy"]()
      }), r.hoverSeries === o && (r.hoverSeries = void 0), rD(r.series, o), r.orderItems("series"), rU(o, function (e, i) {
        t && "hcEvents" === i || delete o[i]
      })
    }
    applyZones() {
      let {
        area: t,
        chart: e,
        graph: i,
        zones: s,
        points: o,
        xAxis: r,
        yAxis: a,
        zoneAxis: n
      } = this, {
        inverted: h,
        renderer: l
      } = e, d = this[`${n}Axis`], {
        isXAxis: c,
        len: p = 0,
        minPointOffset: u = 0
      } = d || {}, g = (i?.strokeWidth() || 0) / 2 + 1, f = (t, e = 0, i = 0) => {
        h && (i = p - i);
        let {
          translated: s = 0,
          lineClip: o
        } = t, r = i - s;
        o?.push(["L", e, Math.abs(r) < g ? i - g * (r <= 0 ? -1 : 1) : s])
      };
      if (s.length && (i || t) && d && rF(d.min)) {
        let e = d.getExtremes().max + u,
          g = t => {
            t.forEach((e, i) => {
              ("M" === e[0] || "L" === e[0]) && (t[i] = [e[0], c ? p - e[1] : e[1], c ? e[2] : p - e[2]])
            })
          };
        if (s.forEach(t => {
          t.lineClip = [], t.translated = rC(d.toPixels(rV(t.value, e), !0) || 0, 0, p)
        }), i && !this.showLine && i.hide(), t && t.hide(), "y" === n && o.length < r.len)
          for (let t of o) {
            let {
              plotX: e,
              plotY: i,
              zone: o
            } = t, r = o && s[s.indexOf(o) - 1];
            o && f(o, e, i), r && f(r, e, i)
          }
        let m = [],
          x = d.toPixels(d.getExtremes().min - u, !0);
        s.forEach(e => {
          let s = e.lineClip || [],
            o = Math.round(e.translated || 0);
          r.reversed && s.reverse();
          let {
            clip: n,
            simpleClip: d
          } = e, p = 0, u = 0, f = r.len, y = a.len;
          c ? (p = o, f = x) : (u = o, y = x);
          let b = [
            ["M", p, u],
            ["L", f, u],
            ["L", f, y],
            ["L", p, y],
            ["Z"]
          ],
            v = [b[0], ...s, b[1], b[2], ...m, b[3], b[4]];
          m = s.reverse(), x = o, h && (g(v), t && g(b)), n ? (n.animate({
            d: v
          }), d?.animate({
            d: b
          })) : (n = e.clip = l.path(v), t && (d = e.simpleClip = l.path(b))), i && e.graph?.clip(n), t && e.area?.clip(d)
        })
      } else this.visible && (i && i.show(), t && t.show())
    }
    plotGroup(t, e, i, s, o) {
      let r = this[t],
        a = !r,
        n = {
          visibility: i,
          zIndex: s || .1
        };
      return rE(this.opacity) && !this.chart.styledMode && "inactive" !== this.state && (n.opacity = this.opacity), r || (this[t] = r = this.chart.renderer.g().add(o)), r.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (rE(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (r.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), r.attr(n)[a ? "attr" : "animate"](this.getPlotBox(e)), r
    }
    getPlotBox(t) {
      let e = this.xAxis,
        i = this.yAxis,
        s = this.chart,
        o = s.inverted && !s.polar && e && this.invertible && "series" === t;
      return s.inverted && (e = i, i = this.xAxis), {
        translateX: e ? e.left : s.plotLeft,
        translateY: i ? i.top : s.plotTop,
        rotation: o ? 90 : 0,
        rotationOriginX: o ? (e.len - i.len) / 2 : 0,
        rotationOriginY: o ? (e.len + i.len) / 2 : 0,
        scaleX: o ? -1 : 1,
        scaleY: 1
      }
    }
    removeEvents(t) {
      let {
        eventsToUnbind: e
      } = this;
      t || r_(this), e.length && (e.forEach(t => {
        t()
      }), e.length = 0)
    }
    render() {
      let t = this,
        {
          chart: e,
          options: i,
          hasRendered: s
        } = t,
        o = ry(i.animation),
        r = t.visible ? "inherit" : "hidden",
        a = i.zIndex,
        n = e.seriesGroup,
        h = t.finishedAnimating ? 0 : o.duration;
      rN(this, "render"), t.plotGroup("group", "series", r, a, n), t.markerGroup = t.plotGroup("markerGroup", "markers", r, a, n), !1 !== i.clip && t.setClip(), h && t.animate?.(!0), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels?.(), t.redrawPoints?.(), i.enableMouseTracking && t.drawTracker?.(), h && t.animate?.(), s || (h && o.defer && (h += o.defer), t.animationTimeout = r$(() => {
        t.afterAnimate()
      }, h || 0)), t.isDirty = !1, t.hasRendered = !0, rN(t, "afterRender")
    }
    redraw() {
      let t = this.isDirty || this.isDirtyData;
      this.translate(), this.render(), t && delete this.kdTree
    }
    reserveSpace() {
      return this.visible || !this.chart.options.chart.ignoreHiddenSeries
    }
    searchPoint(t, e) {
      let {
        xAxis: i,
        yAxis: s
      } = this, o = this.chart.inverted;
      return this.searchKDTree({
        clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
        plotY: o ? s.len - t.chartX + s.pos : t.chartY - s.pos
      }, e, t)
    }
    buildKDTree(t) {
      this.buildingKdTree = !0;
      let e = this,
        i = e.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
      delete e.kdTree, r$(function () {
        e.kdTree = function t(i, s, o) {
          let r, a;
          let n = i?.length;
          if (n) return r = e.kdAxisArray[s % o], i.sort((t, e) => (t[r] || 0) - (e[r] || 0)), {
            point: i[a = Math.floor(n / 2)],
            left: t(i.slice(0, a), s + 1, o),
            right: t(i.slice(a + 1), s + 1, o)
          }
        }(e.getValidPoints(void 0, !e.directTouch), i, i), e.buildingKdTree = !1
      }, e.options.kdNow || t?.type === "touchstart" ? 0 : 1)
    }
    searchKDTree(t, e, i) {
      let s = this,
        [o, r] = this.kdAxisArray,
        a = e ? "distX" : "dist",
        n = (s.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1,
        h = !!s.isBubble;
      if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return function t(e, i, n, l) {
        let d = i.point,
          c = s.kdAxisArray[n % l],
          p, u, g = d;
        ! function (t, e) {
          let i = t[o],
            s = e[o],
            a = rE(i) && rE(s) ? i - s : null,
            n = t[r],
            l = e[r],
            d = rE(n) && rE(l) ? n - l : 0,
            c = h && e.marker?.radius || 0;
          e.dist = Math.sqrt((a && a * a || 0) + d * d) - c, e.distX = rE(a) ? Math.abs(a) - c : Number.MAX_VALUE
        }(e, d);
        let f = (e[c] || 0) - (d[c] || 0) + (h && d.marker?.radius || 0),
          m = f < 0 ? "left" : "right",
          x = f < 0 ? "right" : "left";
        return i[m] && (g = (p = t(e, i[m], n + 1, l))[a] < g[a] ? p : d), i[x] && Math.sqrt(f * f) < g[a] && (g = (u = t(e, i[x], n + 1, l))[a] < g[a] ? u : g), g
      }(t, this.kdTree, n, n)
    }
    pointPlacementToXValue() {
      let {
        options: t,
        xAxis: e
      } = this, i = t.pointPlacement;
      return "between" === i && (i = e.reversed ? -.5 : .5), rF(i) ? i * (t.pointRange || e.pointRange) : 0
    }
    isPointInside(t) {
      let {
        chart: e,
        xAxis: i,
        yAxis: s
      } = this, {
        plotX: o = -1,
        plotY: r = -1
      } = t;
      return r >= 0 && r <= (s ? s.len : e.plotHeight) && o >= 0 && o <= (i ? i.len : e.plotWidth)
    }
    drawTracker() {
      let t = this,
        e = t.options,
        i = e.trackByArea,
        s = [].concat((i ? t.areaPath : t.graphPath) || []),
        o = t.chart,
        r = o.pointer,
        a = o.renderer,
        n = o.options.tooltip?.snap || 0,
        h = () => {
          e.enableMouseTracking && o.hoverSeries !== t && t.onMouseOver()
        },
        l = "rgba(192,192,192," + (rM ? 1e-4 : .002) + ")",
        d = t.tracker;
      d ? d.attr({
        d: s
      }) : t.graph && (t.tracker = d = a.path(s).attr({
        visibility: t.visible ? "inherit" : "hidden",
        zIndex: 2
      }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), o.styledMode || d.attr({
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        stroke: l,
        fill: i ? l : "none",
        "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * n)
      }), [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach(t => {
        t && (t.addClass("highcharts-tracker").on("mouseover", h).on("mouseout", t => {
          r?.onTrackerMouseOut(t)
        }), e.cursor && !o.styledMode && t.css({
          cursor: e.cursor
        }), t.on("touchstart", h))
      })), rN(this, "afterDrawTracker")
    }
    addPoint(t, e, i, s, o) {
      let r, a;
      let n = this.options,
        {
          chart: h,
          data: l,
          dataTable: d,
          xAxis: c
        } = this,
        p = c && c.hasNames && c.names,
        u = n.data,
        g = this.getColumn("x");
      e = rV(e, !0);
      let f = {
        series: this
      };
      this.pointClass.prototype.applyOptions.apply(f, [t]);
      let m = f.x;
      if (a = g.length, this.requireSorting && m < g[a - 1])
        for (r = !0; a && g[a - 1] > m;) a--;
      d.setRow(f, a, !0, {
        addColumns: !1
      }), p && f.name && (p[m] = f.name), u?.splice(a, 0, t), (r || this.processedData) && (this.data.splice(a, 0, null), this.processData()), "point" === n.legendType && this.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : ([l, u, ...Object.values(d.getColumns())].filter(rE).forEach(t => {
        t.shift()
      }), d.rowCount -= 1, rN(d, "afterDeleteRows"))), !1 !== o && rN(this, "addPoint", {
        point: f
      }), this.isDirty = !0, this.isDirtyData = !0, e && h.redraw(s)
    }
    removePoint(t, e, i) {
      let s = this,
        {
          chart: o,
          data: r,
          points: a,
          dataTable: n
        } = s,
        h = r[t],
        l = function () {
          [a?.length === r.length ? a : void 0, r, s.options.data, ...Object.values(n.getColumns())].filter(rE).forEach(e => {
            e.splice(t, 1)
          }), n.rowCount -= 1, rN(n, "afterDeleteRows"), h?.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && o.redraw()
        };
      rb(i, o), e = rV(e, !0), h ? h.firePointEvent("remove", null, l) : l()
    }
    remove(t, e, i, s) {
      let o = this,
        r = o.chart;

      function a() {
        o.destroy(s), r.isDirtyLegend = r.isDirtyBox = !0, r.linkSeries(s), rV(t, !0) && r.redraw(e)
      } !1 !== i ? rN(o, "remove", null, a) : a()
    }
    update(t, e) {
      rN(this, "update", {
        options: t = rB(t, this.userOptions)
      });
      let i = this,
        s = i.chart,
        o = i.userOptions,
        r = i.initialType || i.type,
        a = s.options.plotOptions,
        n = rS[r].prototype,
        h = i.finishedAnimating && {
          animation: !1
        },
        l = {},
        d, c, p = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"],
        u = t.type || o.type || s.options.chart.type,
        g = !(this.hasDerivedData || u && u !== this.type || void 0 !== t.keys || void 0 !== t.pointStart || void 0 !== t.pointInterval || void 0 !== t.relativeXValue || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some(t => i.hasOptionChanged(t)));
      u = u || r, g ? (p.push("data", "isDirtyData", "isDirtyCanvas", "points", "dataTable", "processedData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), !1 !== t.visible && p.push("area", "graph"), i.parallelArrays.forEach(function (t) {
        p.push(t + "Data")
      }), t.data && (t.dataSorting && rz(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))) : this.dataTable.modified = this.dataTable, t = rj(o, {
        index: void 0 === o.index ? i.index : o.index,
        pointStart: a?.series?.pointStart ?? o.pointStart ?? i.getColumn("x")[0]
      }, !g && {
        data: i.options.data
      }, t, h), g && t.data && (t.data = i.options.data), (p = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(p)).forEach(function (t) {
        p[t] = i[t], delete i[t]
      });
      let f = !1;
      if (rS[u]) {
        if (f = u !== i.type, i.remove(!1, !1, !1, !0), f) {
          if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, rS[u].prototype);
          else {
            let t = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
            for (c in n) i[c] = void 0;
            rz(i, rS[u].prototype), t ? i.hcEvents = t : delete i.hcEvents
          }
        }
      } else rI(17, !0, s, {
        missingModuleFor: u
      });
      if (p.forEach(function (t) {
        i[t] = p[t]
      }), i.init(s, t), g && this.points)
        for (let t of (!1 === (d = i.options).visible ? (l.graphic = 1, l.dataLabel = 1) : (this.hasMarkerChanged(d, o) && (l.graphic = 1), i.hasDataLabels?.() || (l.dataLabel = 1)), this.points)) t && t.series && (t.resolveColor(), Object.keys(l).length && t.destroyElements(l), !1 === d.showInLegend && t.legendItem && s.legend.destroyItem(t));
      i.initialType = r, s.linkSeries(), s.setSortedData(), f && i.linkedSeries.length && (i.isDirtyData = !0), rN(this, "afterUpdate"), rV(e, !0) && s.redraw(!!g && void 0)
    }
    setName(t) {
      this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
    }
    hasOptionChanged(t) {
      let e = this.chart,
        i = this.options[t],
        s = e.options.plotOptions,
        o = this.userOptions[t],
        r = rV(s?.[this.type]?.[t], s?.series?.[t]);
      return o && !rE(r) ? i !== o : i !== rV(r, i)
    }
    onMouseOver() {
      let t = this.chart,
        e = t.hoverSeries,
        i = t.pointer;
      i?.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && rN(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
    }
    onMouseOut() {
      let t = this.options,
        e = this.chart,
        i = e.tooltip,
        s = e.hoverPoint;
      e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && rN(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach(function (t) {
        t.setState("", !0)
      })
    }
    setState(t, e) {
      let i = this,
        s = i.options,
        o = i.graph,
        r = s.inactiveOtherPoints,
        a = s.states,
        n = rV(a[t || "normal"] && a[t || "normal"].animation, i.chart.options.chart.animation),
        h = s.lineWidth,
        l = s.opacity;
      if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function (e) {
        e && (i.state && e.removeClass("highcharts-series-" + i.state), t && e.addClass("highcharts-series-" + t))
      }), i.state = t, !i.chart.styledMode)) {
        if (a[t] && !1 === a[t].enabled) return;
        if (t && (h = a[t].lineWidth || h + (a[t].lineWidthPlus || 0), l = rV(a[t].opacity, l)), o && !o.dashstyle && rF(h))
          for (let t of [o, ...this.zones.map(t => t.graph)]) t?.animate({
            "stroke-width": h
          }, n);
        r || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function (t) {
          t && t.animate({
            opacity: l
          }, n)
        })
      }
      e && r && i.points && i.setAllPointsToState(t || void 0)
    }
    setAllPointsToState(t) {
      this.points.forEach(function (e) {
        e.setState && e.setState(t)
      })
    }
    setVisible(t, e) {
      let i = this,
        s = i.chart,
        o = s.options.chart.ignoreHiddenSeries,
        r = i.visible;
      i.visible = t = i.options.visible = i.userOptions.visible = void 0 === t ? !r : t;
      let a = t ? "show" : "hide";
      ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(t => {
        i[t]?.[a]()
      }), (s.hoverSeries === i || s.hoverPoint?.series === i) && i.onMouseOut(), i.legendItem && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach(t => {
        t.options.stacking && t.visible && (t.isDirty = !0)
      }), i.linkedSeries.forEach(e => {
        e.setVisible(t, !1)
      }), o && (s.isDirtyBox = !0), rN(i, a), !1 !== e && s.redraw()
    }
    show() {
      this.setVisible(!0)
    }
    hide() {
      this.setVisible(!1)
    }
    select(t) {
      this.selected = t = this.options.selected = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), rN(this, t ? "select" : "unselect")
    }
    shouldShowTooltip(t, e, i = {}) {
      return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i)
    }
    drawLegendSymbol(t, e) {
      rp[this.options.legendSymbol || "rectangle"]?.call(this, t, e)
    }
  }
  rZ.defaultOptions = {
    lineWidth: 2,
    allowPointSelect: !1,
    crisp: !0,
    showCheckbox: !1,
    animation: {
      duration: 1e3
    },
    enableMouseTracking: !0,
    events: {},
    marker: {
      enabledThreshold: 2,
      lineColor: "#ffffff",
      lineWidth: 0,
      radius: 4,
      states: {
        normal: {
          animation: !0
        },
        hover: {
          animation: {
            duration: 150
          },
          enabled: !0,
          radiusPlus: 2,
          lineWidthPlus: 1
        },
        select: {
          fillColor: "#cccccc",
          lineColor: "#000000",
          lineWidth: 2
        }
      }
    },
    point: {
      events: {}
    },
    dataLabels: {
      animation: {},
      align: "center",
      borderWidth: 0,
      defer: !0,
      formatter: function () {
        let {
          numberFormatter: t
        } = this.series.chart;
        return "number" != typeof this.y ? "" : t(this.y, -1)
      },
      padding: 5,
      style: {
        fontSize: "0.7em",
        fontWeight: "bold",
        color: "contrast",
        textOutline: "1px contrast"
      },
      verticalAlign: "bottom",
      x: 0,
      y: 0
    },
    cropThreshold: 300,
    opacity: 1,
    pointRange: 0,
    softThreshold: !0,
    states: {
      normal: {
        animation: !0
      },
      hover: {
        animation: {
          duration: 150
        },
        lineWidthPlus: 1,
        marker: {},
        halo: {
          size: 10,
          opacity: .25
        }
      },
      select: {
        animation: {
          duration: 0
        }
      },
      inactive: {
        animation: {
          duration: 150
        },
        opacity: .2
      }
    },
    stickyTracking: !0,
    turboThreshold: 1e3,
    findNearestPointBy: "x"
  }, rZ.types = rx.seriesTypes, rZ.registerType = rx.registerSeriesType, rz(rZ.prototype, {
    axisTypes: ["xAxis", "yAxis"],
    coll: "series",
    colorCounter: 0,
    directTouch: !1,
    invertible: !0,
    isCartesian: !0,
    kdAxisArray: ["clientX", "plotY"],
    parallelArrays: ["x", "y"],
    pointClass: o$,
    requireSorting: !0,
    sorted: !0
  }), rx.series = rZ;
  let rq = rZ,
    {
      animObject: rK,
      setAnimation: rJ
    } = tV,
    {
      registerEventOptions: rQ
    } = st,
    {
      composed: r0,
      marginNames: r1
    } = L,
    {
      distribute: r2
    } = ex,
    {
      format: r3
    } = ec,
    {
      addEvent: r5,
      createElement: r6,
      css: r9,
      defined: r4,
      discardElement: r8,
      find: r7,
      fireEvent: at,
      isNumber: ae,
      merge: ai,
      pick: as,
      pushUnique: ao,
      relativeLength: ar,
      stableSort: aa,
      syncTimeout: an
    } = ti;
  class ah {
    constructor(t, e) {
      this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t, this.setOptions(e), e.enabled && (this.render(), rQ(this, e), r5(this.chart, "endResize", function () {
        this.legend.positionCheckboxes()
      })), r5(this.chart, "render", () => {
        this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems())
      })
    }
    setOptions(t) {
      let e = as(t.padding, 8);
      this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = ai(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop, this.itemMarginBottom = t.itemMarginBottom, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = as(t.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t.layout && !this.chart.inverted, this.baseline = void 0
    }
    update(t, e) {
      let i = this.chart;
      this.setOptions(ai(!0, this.options, t)), "events" in this.options && rQ(this, this.options), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, as(e, !0) && i.redraw(), at(this, "afterUpdate", {
        redraw: e
      })
    }
    colorizeItem(t, e) {
      let i = t.color,
        {
          area: s,
          group: o,
          label: r,
          line: a,
          symbol: n
        } = t.legendItem || {};
      if ((t instanceof rq || t instanceof o$) && (t.color = t.options?.legendSymbolColor || i), o?.[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
        let {
          itemHiddenStyle: i = {}
        } = this, o = i.color, {
          fillColor: h,
          fillOpacity: l,
          lineColor: d,
          marker: c
        } = t.options, p = t => (!e && (t.fill && (t.fill = o), t.stroke && (t.stroke = o)), t);
        r?.css(ai(e ? this.itemStyle : i)), a?.attr(p({
          stroke: d || t.color
        })), n && n.attr(p(c && n.isMarker ? t.pointAttribs() : {
          fill: t.color
        })), s?.attr(p({
          fill: h || t.color,
          "fill-opacity": h ? 1 : l ?? .75
        }))
      }
      t.color = i, at(this, "afterColorizeItem", {
        item: t,
        visible: e
      })
    }
    positionItems() {
      this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
    }
    positionItem(t) {
      let {
        group: e,
        x: i = 0,
        y: s = 0
      } = t.legendItem || {}, o = this.options, r = o.symbolPadding, a = !o.rtl, n = t.checkbox;
      if (e && e.element) {
        let o = {
          translateX: a ? i : this.legendWidth - i - 2 * r - 4,
          translateY: s
        };
        e[r4(e.translateY) ? "animate" : "attr"](o, void 0, () => {
          at(this, "afterPositionItem", {
            item: t
          })
        })
      }
      n && (n.x = i, n.y = s)
    }
    destroyItem(t) {
      let e = t.checkbox,
        i = t.legendItem || {};
      for (let t of ["group", "label", "line", "symbol"]) i[t] && (i[t] = i[t].destroy());
      e && r8(e), t.legendItem = void 0
    }
    destroy() {
      for (let t of this.getAllItems()) this.destroyItem(t);
      for (let t of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[t] && (this[t] = this[t].destroy());
      this.display = null
    }
    positionCheckboxes() {
      let t;
      let e = this.group && this.group.alignAttr,
        i = this.clipHeight || this.legendHeight,
        s = this.titleHeight;
      e && (t = e.translateY, this.allItems.forEach(function (o) {
        let r;
        let a = o.checkbox;
        a && (r = t + s + a.y + (this.scrollOffset || 0) + 3, r9(a, {
          left: e.translateX + o.checkboxOffset + a.x - 20 + "px",
          top: r + "px",
          display: this.proximate || r > t - 6 && r < t + i - 6 ? "" : "none"
        }))
      }, this))
    }
    renderTitle() {
      let t = this.options,
        e = this.padding,
        i = t.title,
        s, o = 0;
      i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, void 0, void 0, void 0, t.useHTML, void 0, "legend-title").attr({
        zIndex: 1
      }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({
        width: this.maxLegendWidth + "px"
      }), o = (s = this.title.getBBox()).height, this.offsetWidth = s.width, this.contentGroup.attr({
        translateY: o
      })), this.titleHeight = o
    }
    setText(t) {
      let e = this.options;
      t.legendItem.label.attr({
        text: e.labelFormat ? r3(e.labelFormat, t, this.chart) : e.labelFormatter.call(t)
      })
    }
    renderItem(t) {
      let e = t.legendItem = t.legendItem || {},
        i = this.chart,
        s = i.renderer,
        o = this.options,
        r = "horizontal" === o.layout,
        a = this.symbolWidth,
        n = o.symbolPadding || 0,
        h = this.itemStyle,
        l = this.itemHiddenStyle,
        d = r ? as(o.itemDistance, 20) : 0,
        c = !o.rtl,
        p = !t.series,
        u = !p && t.series.drawLegendSymbol ? t.series : t,
        g = u.options,
        f = !!this.createCheckboxForItem && g && g.showCheckbox,
        m = o.useHTML,
        x = t.options.className,
        y = e.label,
        b = a + n + d + (f ? 20 : 0);
      !y && (e.group = s.g("legend-item").addClass("highcharts-" + u.type + "-series highcharts-color-" + t.colorIndex + (x ? " " + x : "") + (p ? " highcharts-series-" + t.index : "")).attr({
        zIndex: 1
      }).add(this.scrollGroup), e.label = y = s.text("", c ? a + n : -n, this.baseline || 0, m), i.styledMode || y.css(ai(t.visible ? h : l)), y.attr({
        align: c ? "left" : "right",
        zIndex: 2
      }).add(e.group), !this.baseline && (this.fontMetrics = s.fontMetrics(y), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, y.attr("y", this.baseline), this.symbolHeight = as(o.symbolHeight, this.fontMetrics.f), o.squareSymbol && (this.symbolWidth = as(o.symbolWidth, Math.max(this.symbolHeight, 16)), b = this.symbolWidth + n + d + (f ? 20 : 0), c && y.attr("x", this.symbolWidth + n))), u.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, y, m)), f && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), (i.styledMode || !h.width) && y.css({
        width: (o.itemWidth || this.widthOption || i.spacingBox.width) - b + "px"
      }), this.setText(t);
      let v = y.getBBox(),
        k = this.fontMetrics && this.fontMetrics.h || 0;
      t.itemWidth = t.checkboxOffset = o.itemWidth || e.labelWidth || v.width + b, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(e.labelHeight || (v.height > 1.5 * k ? v.height : k))
    }
    layoutItem(t) {
      let e = this.options,
        i = this.padding,
        s = "horizontal" === e.layout,
        o = t.itemHeight,
        r = this.itemMarginBottom,
        a = this.itemMarginTop,
        n = s ? as(e.itemDistance, 20) : 0,
        h = this.maxLegendWidth,
        l = e.alignColumns && this.totalItemWidth > h ? this.maxItemWidth : t.itemWidth,
        d = t.legendItem || {};
      s && this.itemX - i + l > h && (this.itemX = i, this.lastLineHeight && (this.itemY += a + this.lastLineHeight + r), this.lastLineHeight = 0), this.lastItemY = a + this.itemY + r, this.lastLineHeight = Math.max(o, this.lastLineHeight), d.x = this.itemX, d.y = this.itemY, s ? this.itemX += l : (this.itemY += a + o + r, this.lastLineHeight = o), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : n) : l) + i, this.offsetWidth)
    }
    getAllItems() {
      let t = [];
      return this.chart.series.forEach(function (e) {
        let i = e && e.options;
        e && as(i.showInLegend, !r4(i.linkedTo) && void 0, !0) && (t = t.concat((e.legendItem || {}).labels || ("point" === i.legendType ? e.data : e)))
      }), at(this, "afterGetAllItems", {
        allItems: t
      }), t
    }
    getAlignment() {
      let t = this.options;
      return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
    }
    adjustMargins(t, e) {
      let i = this.chart,
        s = this.options,
        o = this.getAlignment();
      o && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (r, a) {
        r.test(o) && !r4(t[a]) && (i[r1[a]] = Math.max(i[r1[a]], i.legend[(a + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][a] * s[a % 2 ? "x" : "y"] + as(s.margin, 12) + e[a] + (i.titleOffset[a] || 0)))
      })
    }
    proximatePositions() {
      let t;
      let e = this.chart,
        i = [],
        s = "left" === this.options.align;
      for (let o of (this.allItems.forEach(function (t) {
        let o, r, a = s,
          n, h;
        t.yAxis && (t.xAxis.options.reversed && (a = !a), t.points && (o = r7(a ? t.points : t.points.slice(0).reverse(), function (t) {
          return ae(t.plotY)
        })), r = this.itemMarginTop + t.legendItem.label.getBBox().height + this.itemMarginBottom, h = t.yAxis.top - e.plotTop, n = t.visible ? (o ? o.plotY : t.yAxis.height) + (h - .3 * r) : h + t.yAxis.height, i.push({
          target: n,
          size: r,
          item: t
        }))
      }, this), r2(i, e.plotHeight))) t = o.item.legendItem || {}, ae(o.pos) && (t.y = e.plotTop - e.spacing[0] + o.pos)
    }
    render() {
      let t = this.chart,
        e = t.renderer,
        i = this.options,
        s = this.padding,
        o = this.getAllItems(),
        r, a, n, h = this.group,
        l, d = this.box;
      this.itemX = s, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = ar(i.width, t.spacingBox.width - s), l = t.spacingBox.width - 2 * s - i.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (l /= 2), this.maxLegendWidth = this.widthOption || l, h || (this.group = h = e.g("legend").addClass(i.className || "").attr({
        zIndex: 7
      }).add(), this.contentGroup = e.g().attr({
        zIndex: 1
      }).add(h), this.scrollGroup = e.g().add(this.contentGroup)), this.renderTitle(), aa(o, (t, e) => (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)), i.reversed && o.reverse(), this.allItems = o, this.display = r = !!o.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, o.forEach(this.renderItem, this), o.forEach(this.layoutItem, this), a = (this.widthOption || this.offsetWidth) + s, n = this.lastItemY + this.lastLineHeight + this.titleHeight, n = this.handleOverflow(n) + s, d || (this.box = d = e.rect().addClass("highcharts-legend-box").attr({
        r: i.borderRadius
      }).add(h)), t.styledMode || d.attr({
        stroke: i.borderColor,
        "stroke-width": i.borderWidth || 0,
        fill: i.backgroundColor || "none"
      }).shadow(i.shadow), a > 0 && n > 0 && d[d.placed ? "animate" : "attr"](d.crisp.call({}, {
        x: 0,
        y: 0,
        width: a,
        height: n
      }, d.strokeWidth())), h[r ? "show" : "hide"](), t.styledMode && "none" === h.getStyle("display") && (a = n = 0), this.legendWidth = a, this.legendHeight = n, r && this.align(), this.proximate || this.positionItems(), at(this, "afterRender")
    }
    align(t = this.chart.spacingBox) {
      let e = this.chart,
        i = this.options,
        s = t.y;
      /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0 ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e.titleOffset[2] > 0 && (s -= e.titleOffset[2]), s !== t.y && (t = ai(t, {
        y: s
      })), e.hasRendered || (this.group.placed = !1), this.group.align(ai(i, {
        width: this.legendWidth,
        height: this.legendHeight,
        verticalAlign: this.proximate ? "top" : i.verticalAlign
      }), !0, t)
    }
    handleOverflow(t) {
      let e = this,
        i = this.chart,
        s = i.renderer,
        o = this.options,
        r = o.y,
        a = "top" === o.verticalAlign,
        n = this.padding,
        h = o.maxHeight,
        l = o.navigation,
        d = as(l.animation, !0),
        c = l.arrowSize || 12,
        p = this.pages,
        u = this.allItems,
        g = function (t) {
          "number" == typeof t ? k.attr({
            height: t
          }) : k && (e.clipRect = k.destroy(), e.contentGroup.clip()), e.contentGroup.div && (e.contentGroup.div.style.clip = t ? "rect(" + n + "px,9999px," + (n + t) + "px,0)" : "auto")
        },
        f = function (t) {
          return e[t] = s.circle(0, 0, 1.3 * c).translate(c / 2, c / 2).add(v), i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)"), e[t]
        },
        m, x, y, b = i.spacingBox.height + (a ? -r : r) - n,
        v = this.nav,
        k = this.clipRect;
      return "horizontal" !== o.layout || "middle" === o.verticalAlign || o.floating || (b /= 2), h && (b = Math.min(b, h)), p.length = 0, t && b > 0 && t > b && !1 !== l.enabled ? (this.clipHeight = m = Math.max(b - 20 - this.titleHeight - n, 0), this.currentPage = as(this.currentPage, 1), this.fullHeight = t, u.forEach((t, e) => {
        let i = (y = t.legendItem || {}).y || 0,
          s = Math.round(y.label.getBBox().height),
          o = p.length;
        (!o || i - p[o - 1] > m && (x || i) !== p[o - 1]) && (p.push(x || i), o++), y.pageIx = o - 1, x && ((u[e - 1].legendItem || {}).pageIx = o - 1), e === u.length - 1 && i + s - p[o - 1] > m && i > p[o - 1] && (p.push(i), y.pageIx = o), i !== x && (x = i)
      }), k || (k = e.clipRect = s.clipRect(0, n - 2, 9999, 0), e.contentGroup.clip(k)), g(m), v || (this.nav = v = s.g().attr({
        zIndex: 1
      }).add(this.group), this.up = s.symbol("triangle", 0, 0, c, c).add(v), f("upTracker").on("click", function () {
        e.scroll(-1, d)
      }), this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation"), !i.styledMode && l.style && this.pager.css(l.style), this.pager.add(v), this.down = s.symbol("triangle-down", 0, 0, c, c).add(v), f("downTracker").on("click", function () {
        e.scroll(1, d)
      })), e.scroll(0), t = b) : v && (g(), this.nav = v.destroy(), this.scrollGroup.attr({
        translateY: 1
      }), this.clipHeight = 0), t
    }
    scroll(t, e) {
      let i = this.chart,
        s = this.pages,
        o = s.length,
        r = this.clipHeight,
        a = this.options.navigation,
        n = this.pager,
        h = this.padding,
        l = this.currentPage + t;
      l > o && (l = o), l > 0 && (void 0 !== e && rJ(e, i), this.nav.attr({
        translateX: h,
        translateY: r + this.padding + 7 + this.titleHeight,
        visibility: "inherit"
      }), [this.up, this.upTracker].forEach(function (t) {
        t.attr({
          class: 1 === l ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
        })
      }), n.attr({
        text: l + "/" + o
      }), [this.down, this.downTracker].forEach(function (t) {
        t.attr({
          x: 18 + this.pager.getBBox().width,
          class: l === o ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
        })
      }, this), i.styledMode || (this.up.attr({
        fill: 1 === l ? a.inactiveColor : a.activeColor
      }), this.upTracker.css({
        cursor: 1 === l ? "default" : "pointer"
      }), this.down.attr({
        fill: l === o ? a.inactiveColor : a.activeColor
      }), this.downTracker.css({
        cursor: l === o ? "default" : "pointer"
      })), this.scrollOffset = -s[l - 1] + this.initialItemY, this.scrollGroup.animate({
        translateY: this.scrollOffset
      }), this.currentPage = l, this.positionCheckboxes(), an(() => {
        at(this, "afterScroll", {
          currentPage: l
        })
      }, rK(as(e, i.renderer.globalAnimation, !0)).duration))
    }
    setItemEvents(t, e, i) {
      let s = this,
        o = t.legendItem || {},
        r = s.chart.renderer.boxWrapper,
        a = t instanceof o$,
        n = t instanceof rq,
        h = "highcharts-legend-" + (a ? "point" : "series") + "-active",
        l = s.chart.styledMode,
        d = i ? [e, o.symbol] : [o.group],
        c = e => {
          s.allItems.forEach(i => {
            t !== i && [i].concat(i.linkedSeries || []).forEach(t => {
              t.setState(e, !a)
            })
          })
        };
      for (let i of d) i && i.on("mouseover", function () {
        t.visible && c("inactive"), t.setState("hover"), t.visible && r.addClass(h), l || e.css(s.options.itemHoverStyle)
      }).on("mouseout", function () {
        s.chart.styledMode || e.css(ai(t.visible ? s.itemStyle : s.itemHiddenStyle)), c(""), r.removeClass(h), t.setState()
      }).on("click", function (e) {
        let i = function () {
          t.setVisible && t.setVisible(), c(t.visible ? "inactive" : "")
        };
        r.removeClass(h), at(s, "itemClick", {
          browserEvent: e,
          legendItem: t
        }, i), a ? t.firePointEvent("legendItemClick", {
          browserEvent: e
        }) : n && at(t, "legendItemClick", {
          browserEvent: e
        })
      })
    }
    createCheckboxForItem(t) {
      t.checkbox = r6("input", {
        type: "checkbox",
        className: "highcharts-legend-checkbox",
        checked: t.selected,
        defaultChecked: t.selected
      }, this.options.itemCheckboxStyle, this.chart.container), r5(t.checkbox, "click", function (e) {
        let i = e.target;
        at(t.series || t, "checkboxClick", {
          checked: i.checked,
          item: t
        }, function () {
          t.select()
        })
      })
    }
  } ! function (t) {
    t.compose = function (e) {
      ao(r0, "Core.Legend") && r5(e, "beforeMargins", function () {
        this.legend = new t(this, this.options.legend)
      })
    }
  }(ah || (ah = {}));
  let al = ah,
    {
      animate: ad,
      animObject: ac,
      setAnimation: ap
    } = tV,
    {
      defaultOptions: au
    } = tA,
    {
      numberFormat: ag
    } = ec,
    {
      registerEventOptions: af
    } = st,
    {
      charts: am,
      doc: ax,
      marginNames: ay,
      svg: ab,
      win: av
    } = L,
    {
      seriesTypes: ak
    } = rx,
    {
      addEvent: aM,
      attr: aw,
      createElement: aS,
      css: aA,
      defined: aT,
      diffObjects: aC,
      discardElement: aP,
      erase: aO,
      error: aE,
      extend: aL,
      find: aB,
      fireEvent: aD,
      getAlignFactor: aI,
      getStyle: az,
      isArray: aR,
      isNumber: aN,
      isObject: aW,
      isString: aG,
      merge: aX,
      objectEach: aH,
      pick: aF,
      pInt: aY,
      relativeLength: aj,
      removeEvent: aU,
      splat: aV,
      syncTimeout: a_,
      uniqueKey: a$
    } = ti;
  class aZ {
    static chart(t, e, i) {
      return new aZ(t, e, i)
    }
    constructor(t, e, i) {
      this.sharedClips = {};
      let s = [...arguments];
      (aG(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1])
    }
    setZoomOptions() {
      let t = this.options.chart,
        e = t.zooming;
      this.zooming = {
        ...e,
        type: aF(t.zoomType, e.type),
        key: aF(t.zoomKey, e.key),
        pinchType: aF(t.pinchType, e.pinchType),
        singleTouch: aF(t.zoomBySingleTouch, e.singleTouch, !1),
        resetButton: aX(e.resetButton, t.resetZoomButton)
      }
    }
    init(t, e) {
      aD(this, "init", {
        args: arguments
      }, function () {
        let i = aX(au, t),
          s = i.chart,
          o = this.renderTo || s.renderTo;
        this.userOptions = aL({}, t), (this.renderTo = aG(o) ? ax.getElementById(o) : o) || aE(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.locale = i.lang.locale ?? this.renderTo.closest("[lang]")?.lang, this.time = new tb(aL(i.time || {}, {
          locale: this.locale
        })), i.time = this.time.options, this.numberFormatter = (s.numberFormatter || ag).bind(this), this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes, this.index = am.length, am.push(this), L.chartCount++, af(this, s), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), aD(this, "afterInit"), this.firstRender()
      })
    }
    initSeries(t) {
      let e = this.options.chart,
        i = t.type || e.type,
        s = ak[i];
      s || aE(17, !0, this, {
        missingModuleFor: i
      });
      let o = new s;
      return "function" == typeof o.init && o.init(this, t), o
    }
    setSortedData() {
      this.getSeriesOrderByLinks().forEach(function (t) {
        t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1)
      })
    }
    getSeriesOrderByLinks() {
      return this.series.concat().sort(function (t, e) {
        return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0
      })
    }
    orderItems(t, e = 0) {
      let i = this[t],
        s = this.options[t] = aV(this.options[t]).slice(),
        o = this.userOptions[t] = this.userOptions[t] ? aV(this.userOptions[t]).slice() : [];
      if (this.hasRendered && (s.splice(e), o.splice(e)), i)
        for (let t = e, r = i.length; t < r; ++t) {
          let e = i[t];
          e && (e.index = t, e instanceof rq && (e.name = e.getName()), e.options.isInternal || (s[t] = e.options, o[t] = e.userOptions))
        }
    }
    isInsidePlot(t, e, i = {}) {
      let {
        inverted: s,
        plotBox: o,
        plotLeft: r,
        plotTop: a,
        scrollablePlotBox: n
      } = this, {
        scrollLeft: h = 0,
        scrollTop: l = 0
      } = i.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, d = i.series, c = i.visiblePlotOnly && n || o, p = i.inverted ? e : t, u = i.inverted ? t : e, g = {
        x: p,
        y: u,
        isInsidePlot: !0,
        options: i
      };
      if (!i.ignoreX) {
        let t = d && (s && !this.polar ? d.yAxis : d.xAxis) || {
          pos: r,
          len: 1 / 0
        },
          e = i.paneCoordinates ? t.pos + p : r + p;
        e >= Math.max(h + r, t.pos) && e <= Math.min(h + r + c.width, t.pos + t.len) || (g.isInsidePlot = !1)
      }
      if (!i.ignoreY && g.isInsidePlot) {
        let t = !s && i.axis && !i.axis.isXAxis && i.axis || d && (s ? d.xAxis : d.yAxis) || {
          pos: a,
          len: 1 / 0
        },
          e = i.paneCoordinates ? t.pos + u : a + u;
        e >= Math.max(l + a, t.pos) && e <= Math.min(l + a + c.height, t.pos + t.len) || (g.isInsidePlot = !1)
      }
      return aD(this, "afterIsInsidePlot", g), g.isInsidePlot
    }
    redraw(t) {
      aD(this, "beforeRedraw");
      let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
        i = this.series,
        s = this.pointer,
        o = this.legend,
        r = this.userOptions.legend,
        a = this.renderer,
        n = a.isHidden(),
        h = [],
        l, d, c, p = this.isDirtyBox,
        u = this.isDirtyLegend,
        g;
      for (a.rootFontSize = a.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), ap(!!this.hasRendered && t, this), n && this.temporaryDisplay(), this.layOutTitles(!1), c = i.length; c--;)
        if (((g = i[c]).options.stacking || g.options.centerInCategory) && (d = !0, g.isDirty)) {
          l = !0;
          break
        } if (l)
        for (c = i.length; c--;)(g = i[c]).options.stacking && (g.isDirty = !0);
      i.forEach(function (t) {
        t.isDirty && ("point" === t.options.legendType ? ("function" == typeof t.updateTotals && t.updateTotals(), u = !0) : r && (r.labelFormatter || r.labelFormat) && (u = !0)), t.isDirtyData && aD(t, "updatedData")
      }), u && o && o.options.enabled && (o.render(), this.isDirtyLegend = !1), d && this.getStacks(), e.forEach(function (t) {
        t.updateNames(), t.setScale()
      }), this.getMargins(), e.forEach(function (t) {
        t.isDirty && (p = !0)
      }), e.forEach(function (t) {
        let e = t.min + "," + t.max;
        t.extKey !== e && (t.extKey = e, h.push(function () {
          aD(t, "afterSetExtremes", aL(t.eventArgs, t.getExtremes())), delete t.eventArgs
        })), (p || d) && t.redraw()
      }), p && this.drawChartBox(), aD(this, "predraw"), i.forEach(function (t) {
        (p || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
      }), s && s.reset(!0), a.draw(), aD(this, "redraw"), aD(this, "render"), n && this.temporaryDisplay(!0), h.forEach(function (t) {
        t.call()
      })
    }
    get(t) {
      let e = this.series;

      function i(e) {
        return e.id === t || e.options && e.options.id === t
      }
      let s = aB(this.axes, i) || aB(this.series, i);
      for (let t = 0; !s && t < e.length; t++) s = aB(e[t].points || [], i);
      return s
    }
    createAxes() {
      let t = this.userOptions;
      for (let e of (aD(this, "createAxes"), ["xAxis", "yAxis"]))
        for (let i of t[e] = aV(t[e] || {})) new sj(this, i, e);
      aD(this, "afterCreateAxes")
    }
    getSelectedPoints() {
      return this.series.reduce((t, e) => (e.getPointsCollection().forEach(e => {
        aF(e.selectedStaging, e.selected) && t.push(e)
      }), t), [])
    }
    getSelectedSeries() {
      return this.series.filter(t => t.selected)
    }
    setTitle(t, e, i) {
      this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i)
    }
    applyDescription(t, e) {
      let i = this,
        s = this.options[t] = aX(this.options[t], e),
        o = this[t];
      o && e && (this[t] = o = o.destroy()), s && !o && ((o = this.renderer.text(s.text, 0, 0, s.useHTML).attr({
        align: s.align,
        class: "highcharts-" + t,
        zIndex: s.zIndex || 4
      }).css({
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }).add()).update = function (e, s) {
        i.applyDescription(t, e), i.layOutTitles(s)
      }, this.styledMode || o.css(aL("title" === t ? {
        fontSize: this.options.isStock ? "1em" : "1.2em"
      } : {}, s.style)), o.textPxLength = o.getBBox().width, o.css({
        whiteSpace: s.style?.whiteSpace
      }), this[t] = o)
    }
    layOutTitles(t = !0) {
      let e = [0, 0, 0],
        {
          options: i,
          renderer: s,
          spacingBox: o
        } = this;
      ["title", "subtitle", "caption"].forEach(t => {
        let i = this[t],
          r = this.options[t],
          a = aX(o),
          n = i?.textPxLength || 0;
        if (i && r) {
          aD(this, "layOutTitle", {
            alignTo: a,
            key: t,
            textPxLength: n
          });
          let o = s.fontMetrics(i),
            h = o.b,
            l = o.h,
            d = r.verticalAlign || "top",
            c = "top" === d,
            p = c && r.minScale || 1,
            u = "title" === t ? c ? -3 : 0 : c ? e[0] + 2 : 0,
            g = Math.min(a.width / n, 1),
            f = Math.max(p, g),
            m = aX({
              y: "bottom" === d ? h : u + h
            }, {
              align: "title" === t ? g < p ? "left" : "center" : this.title?.alignValue
            }, r),
            x = r.width || (g > p ? this.chartWidth : a.width) / f;
          i.alignValue !== m.align && (i.placed = !1);
          let y = Math.round(i.css({
            width: `${x}px`
          }).getBBox(r.useHTML).height);
          if (m.height = y, i.align(m, !1, a).attr({
            align: m.align,
            scaleX: f,
            scaleY: f,
            "transform-origin": `${a.x + n * f * aI(m.align)} ${l}`
          }), !r.floating) {
            let t = y * (y < 1.2 * l ? 1 : f);
            "top" === d ? e[0] = Math.ceil(e[0] + t) : "bottom" === d && (e[2] = Math.ceil(e[2] + t))
          }
        }
      }, this), e[0] && "top" === (i.title?.verticalAlign || "top") && (e[0] += i.title?.margin || 0), e[2] && i.caption?.verticalAlign === "bottom" && (e[2] += i.caption?.margin || 0);
      let r = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
      this.titleOffset = e, aD(this, "afterLayOutTitles"), !this.isDirtyBox && r && (this.isDirtyBox = this.isDirtyLegend = r, this.hasRendered && t && this.isDirtyBox && this.redraw())
    }
    getContainerBox() {
      let t = [].map.call(this.renderTo.children, t => {
        if (t !== this.container) {
          let e = t.style.display;
          return t.style.display = "none", [t, e]
        }
      }),
        e = {
          width: az(this.renderTo, "width", !0) || 0,
          height: az(this.renderTo, "height", !0) || 0
        };
      return t.filter(Boolean).forEach(([t, e]) => {
        t.style.display = e
      }), e
    }
    getChartSize() {
      let t = this.options.chart,
        e = t.width,
        i = t.height,
        s = this.getContainerBox(),
        o = s.height <= 1 || !this.renderTo.parentElement?.style.height && "100%" === this.renderTo.style.height;
      this.chartWidth = Math.max(0, e || s.width || 600), this.chartHeight = Math.max(0, aj(i, this.chartWidth) || (o ? 400 : s.height)), this.containerBox = s
    }
    temporaryDisplay(t) {
      let e = this.renderTo,
        i;
      if (t)
        for (; e && e.style;) e.hcOrigStyle && (aA(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (ax.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
      else
        for (; e && e.style && (ax.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, ax.body.appendChild(e)), ("none" === az(e, "display", !1) || e.hcOricDetached) && (e.hcOrigStyle = {
          display: e.style.display,
          height: e.style.height,
          overflow: e.style.overflow
        }, i = {
          display: "block",
          overflow: "hidden"
        }, e !== this.renderTo && (i.height = 0), aA(e, i), e.offsetWidth || e.style.setProperty("display", "block", "important")), (e = e.parentNode) !== ax.body););
    }
    setClassName(t) {
      this.container.className = "highcharts-container " + (t || "")
    }
    getContainer() {
      let t;
      let e = this.options,
        i = e.chart,
        s = "data-highcharts-chart",
        o = a$(),
        r = this.renderTo,
        a = aY(aw(r, s));
      aN(a) && am[a] && am[a].hasRendered && am[a].destroy(), aw(r, s, this.index), r.innerHTML = t9.emptyHTML, i.skipClone || r.offsetWidth || this.temporaryDisplay(), this.getChartSize();
      let n = this.chartHeight,
        h = this.chartWidth;
      aA(r, {
        overflow: "hidden"
      }), this.styledMode || (t = aL({
        position: "relative",
        overflow: "hidden",
        width: h + "px",
        height: n + "px",
        textAlign: "left",
        lineHeight: "normal",
        zIndex: 0,
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        userSelect: "none",
        "touch-action": "manipulation",
        outline: "none",
        padding: "0px"
      }, i.style || {}));
      let l = aS("div", {
        id: o
      }, t, r);
      this.container = l, this.getChartSize(), h === this.chartWidth || (h = this.chartWidth, this.styledMode || aA(l, {
        width: aF(i.style?.width, h + "px")
      })), this.containerBox = this.getContainerBox(), this._cursor = l.style.cursor;
      let d = i.renderer || !ab ? ep.getRendererType(i.renderer) : ij;
      if (this.renderer = new d(l, h, n, void 0, i.forExport, e.exporting && e.exporting.allowHTML, this.styledMode), ap(void 0, this), this.setClassName(i.className), this.styledMode)
        for (let t in e.defs) this.renderer.definition(e.defs[t]);
      else this.renderer.setStyle(i.style);
      this.renderer.chartIndex = this.index, aD(this, "afterGetContainer")
    }
    getMargins(t) {
      let {
        spacing: e,
        margin: i,
        titleOffset: s
      } = this;
      this.resetMargins(), s[0] && !aT(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !aT(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), aD(this, "getMargins"), t || this.getAxisMargins()
    }
    getAxisMargins() {
      let t = this,
        e = t.axisOffset = [0, 0, 0, 0],
        i = t.colorAxis,
        s = t.margin,
        o = function (t) {
          t.forEach(function (t) {
            t.visible && t.getOffset()
          })
        };
      t.hasCartesianSeries ? o(t.axes) : i && i.length && o(i), ay.forEach(function (i, o) {
        aT(s[o]) || (t[i] += e[o])
      }), t.setChartSize()
    }
    getOptions() {
      return aC(this.userOptions, au)
    }
    reflow(t) {
      let e = this,
        i = e.containerBox,
        s = e.getContainerBox();
      delete e.pointer?.chartPosition, !e.isPrinting && !e.isResizing && i && s.width && ((s.width !== i.width || s.height !== i.height) && (ti.clearTimeout(e.reflowTimeout), e.reflowTimeout = a_(function () {
        e.container && e.setSize(void 0, void 0, !1)
      }, t ? 100 : 0)), e.containerBox = s)
    }
    setReflow() {
      let t = this,
        e = e => {
          t.options?.chart.reflow && t.hasLoaded && t.reflow(e)
        };
      if ("function" == typeof ResizeObserver) new ResizeObserver(e).observe(t.renderTo);
      else {
        let t = aM(av, "resize", e);
        aM(this, "destroy", t)
      }
    }
    setSize(t, e, i) {
      let s = this,
        o = s.renderer;
      s.isResizing += 1, ap(i, s);
      let r = o.globalAnimation;
      s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, void 0 !== t && (s.options.chart.width = t), void 0 !== e && (s.options.chart.height = e), s.getChartSize();
      let {
        chartWidth: a,
        chartHeight: n,
        scrollablePixelsX: h = 0,
        scrollablePixelsY: l = 0
      } = s;
      (s.isDirtyBox || a !== s.oldChartWidth || n !== s.oldChartHeight) && (s.styledMode || (r ? ad : aA)(s.container, {
        width: `${a + h}px`,
        height: `${n + l}px`
      }, r), s.setChartSize(!0), o.setSize(a, n, r), s.axes.forEach(function (t) {
        t.isDirty = !0, t.setScale()
      }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(r), s.oldChartHeight = void 0, aD(s, "resize"), setTimeout(() => {
        s && aD(s, "endResize")
      }, ac(r).duration)), s.isResizing -= 1
    }
    setChartSize(t) {
      let e, i, s, o;
      let {
        chartHeight: r,
        chartWidth: a,
        inverted: n,
        spacing: h,
        renderer: l
      } = this, d = this.clipOffset, c = Math[n ? "floor" : "round"];
      this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(a - e - this.marginRight)), this.plotHeight = o = Math.max(0, Math.round(r - i - this.marginBottom)), this.plotSizeX = n ? o : s, this.plotSizeY = n ? s : o, this.spacingBox = l.spacingBox = {
        x: h[3],
        y: h[0],
        width: a - h[3] - h[1],
        height: r - h[0] - h[2]
      }, this.plotBox = l.plotBox = {
        x: e,
        y: i,
        width: s,
        height: o
      }, d && (this.clipBox = {
        x: c(d[3]),
        y: c(d[0]),
        width: c(this.plotSizeX - d[1] - d[3]),
        height: c(this.plotSizeY - d[0] - d[2])
      }), t || (this.axes.forEach(function (t) {
        t.setAxisSize(), t.setAxisTranslation()
      }), l.alignElements()), aD(this, "afterSetChartSize", {
        skipAxes: t
      })
    }
    resetMargins() {
      aD(this, "resetMargins");
      let t = this,
        e = t.options.chart,
        i = e.plotBorderWidth || 0,
        s = i / 2;
      ["margin", "spacing"].forEach(function (i) {
        let s = e[i],
          o = aW(s) ? s : [s, s, s, s];
        ["Top", "Right", "Bottom", "Left"].forEach(function (s, r) {
          t[i][r] = aF(e[i + s], o[r])
        })
      }), ay.forEach(function (e, i) {
        t[e] = aF(t.margin[i], t.spacing[i])
      }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [s, s, s, s], t.plotBorderWidth = i
    }
    drawChartBox() {
      let t = this.options.chart,
        e = this.renderer,
        i = this.chartWidth,
        s = this.chartHeight,
        o = this.styledMode,
        r = this.plotBGImage,
        a = t.backgroundColor,
        n = t.plotBackgroundColor,
        h = t.plotBackgroundImage,
        l = this.plotLeft,
        d = this.plotTop,
        c = this.plotWidth,
        p = this.plotHeight,
        u = this.plotBox,
        g = this.clipRect,
        f = this.clipBox,
        m = this.chartBackground,
        x = this.plotBackground,
        y = this.plotBorder,
        b, v, k, M = "animate";
      m || (this.chartBackground = m = e.rect().addClass("highcharts-background").add(), M = "attr"), o ? b = v = m.strokeWidth() : (v = (b = t.borderWidth || 0) + (t.shadow ? 8 : 0), k = {
        fill: a || "none"
      }, (b || m["stroke-width"]) && (k.stroke = t.borderColor, k["stroke-width"] = b), m.attr(k).shadow(t.shadow)), m[M]({
        x: v / 2,
        y: v / 2,
        width: i - v - b % 2,
        height: s - v - b % 2,
        r: t.borderRadius
      }), M = "animate", x || (M = "attr", this.plotBackground = x = e.rect().addClass("highcharts-plot-background").add()), x[M](u), !o && (x.attr({
        fill: n || "none"
      }).shadow(t.plotShadow), h && (r ? (h !== r.attr("href") && r.attr("href", h), r.animate(u)) : this.plotBGImage = e.image(h, l, d, c, p).add())), g ? g.animate({
        width: f.width,
        height: f.height
      }) : this.clipRect = e.clipRect(f), M = "animate", y || (M = "attr", this.plotBorder = y = e.rect().addClass("highcharts-plot-border").attr({
        zIndex: 1
      }).add()), o || y.attr({
        stroke: t.plotBorderColor,
        "stroke-width": t.plotBorderWidth || 0,
        fill: "none"
      }), y[M](y.crisp({
        x: l,
        y: d,
        width: c,
        height: p
      }, -y.strokeWidth())), this.isDirtyBox = !1, aD(this, "afterDrawChartBox")
    }
    propFromSeries() {
      let t, e, i;
      let s = this,
        o = s.options.chart,
        r = s.options.series;
      ["inverted", "angular", "polar"].forEach(function (a) {
        for (e = ak[o.type], i = o[a] || e && e.prototype[a], t = r && r.length; !i && t--;)(e = ak[r[t].type]) && e.prototype[a] && (i = !0);
        s[a] = i
      })
    }
    linkSeries(t) {
      let e = this,
        i = e.series;
      i.forEach(function (t) {
        t.linkedSeries.length = 0
      }), i.forEach(function (t) {
        let {
          linkedTo: i
        } = t.options;
        if (aG(i)) {
          let s;
          (s = ":previous" === i ? e.series[t.index - 1] : e.get(i)) && s.linkedParent !== t && (s.linkedSeries.push(t), t.linkedParent = s, s.enabledDataSorting && t.setDataSortingOptions(), t.visible = aF(t.options.visible, s.options.visible, t.visible))
        }
      }), aD(this, "afterLinkSeries", {
        isUpdating: t
      })
    }
    renderSeries() {
      this.series.forEach(function (t) {
        t.translate(), t.render()
      })
    }
    render() {
      let t = this.axes,
        e = this.colorAxis,
        i = this.renderer,
        s = this.options.chart.axisLayoutRuns || 2,
        o = t => {
          t.forEach(t => {
            t.visible && t.render()
          })
        },
        r = 0,
        a = !0,
        n, h = 0;
      for (let e of (this.setTitle(), aD(this, "beforeMargins"), this.getStacks?.(), this.getMargins(!0), this.setChartSize(), t)) {
        let {
          options: t
        } = e, {
          labels: i
        } = t;
        if (this.hasCartesianSeries && e.horiz && e.visible && i.enabled && e.series.length && "colorAxis" !== e.coll && !this.polar) {
          r = t.tickLength, e.createGroups();
          let s = new su(e, 0, "", !0),
            o = s.createLabel("x", i);
          if (s.destroy(), o && aF(i.reserveSpace, !aN(t.crossing)) && (r = o.getBBox().height + i.distance + Math.max(t.offset || 0, 0)), r) {
            o?.destroy();
            break
          }
        }
      }
      for (this.plotHeight = Math.max(this.plotHeight - r, 0);
        (a || n || s > 1) && h < s;) {
        let e = this.plotWidth,
          i = this.plotHeight;
        for (let e of t) 0 === h ? e.setScale() : (e.horiz && a || !e.horiz && n) && e.setTickInterval(!0);
        0 === h ? this.getAxisMargins() : this.getMargins(), a = e / this.plotWidth > (h ? 1 : 1.1), n = i / this.plotHeight > (h ? 1 : 1.05), h++
      }
      this.drawChartBox(), this.hasCartesianSeries ? o(t) : e && e.length && o(e), this.seriesGroup || (this.seriesGroup = i.g("series-group").attr({
        zIndex: 3
      }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
    }
    addCredits(t) {
      let e = this,
        i = aX(!0, this.options.credits, t);
      i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
        i.href && (av.location.href = i.href)
      }).attr({
        align: i.position.align,
        zIndex: 8
      }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function (t) {
        e.credits = e.credits.destroy(), e.addCredits(t)
      })
    }
    destroy() {
      let t;
      let e = this,
        i = e.axes,
        s = e.series,
        o = e.container,
        r = o && o.parentNode;
      for (aD(e, "destroy"), e.renderer.forExport ? aO(am, e) : am[e.index] = void 0, L.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), aU(e), t = i.length; t--;) i[t] = i[t].destroy();
      for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t = s.length; t--;) s[t] = s[t].destroy();
      ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(function (t) {
        let i = e[t];
        i && i.destroy && (e[t] = i.destroy())
      }), o && (o.innerHTML = t9.emptyHTML, aU(o), r && aP(o)), aH(e, function (t, i) {
        delete e[i]
      })
    }
    firstRender() {
      let t = this,
        e = t.options;
      t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.createAxes();
      let i = aR(e.series) ? e.series : [];
      e.series = [], i.forEach(function (e) {
        t.initSeries(e)
      }), t.linkSeries(), t.setSortedData(), aD(t, "beforeRender"), t.render(), t.pointer?.getChartPosition(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0)
    }
    onload() {
      this.callbacks.concat([this.callback]).forEach(function (t) {
        t && void 0 !== this.index && t.apply(this, [this])
      }, this), aD(this, "load"), aD(this, "render"), aT(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0
    }
    warnIfA11yModuleNotLoaded() {
      let {
        options: t,
        title: e
      } = this;
      !t || this.accessibility || (this.renderer.boxWrapper.attr({
        role: "img",
        "aria-label": (e && e.element.textContent || "").replace(/</g, "&lt;")
      }), t.accessibility && !1 === t.accessibility.enabled || aE('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this))
    }
    addSeries(t, e, i) {
      let s;
      let o = this;
      return t && (e = aF(e, !0), aD(o, "addSeries", {
        options: t
      }, function () {
        s = o.initSeries(t), o.isDirtyLegend = !0, o.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), aD(o, "afterAddSeries", {
          series: s
        }), e && o.redraw(i)
      })), s
    }
    addAxis(t, e, i, s) {
      return this.createAxis(e ? "xAxis" : "yAxis", {
        axis: t,
        redraw: i,
        animation: s
      })
    }
    addColorAxis(t, e, i) {
      return this.createAxis("colorAxis", {
        axis: t,
        redraw: e,
        animation: i
      })
    }
    createAxis(t, e) {
      let i = new sj(this, e.axis, t);
      return aF(e.redraw, !0) && this.redraw(e.animation), i
    }
    showLoading(t) {
      let e = this,
        i = e.options,
        s = i.loading,
        o = function () {
          r && aA(r, {
            left: e.plotLeft + "px",
            top: e.plotTop + "px",
            width: e.plotWidth + "px",
            height: e.plotHeight + "px"
          })
        },
        r = e.loadingDiv,
        a = e.loadingSpan;
      r || (e.loadingDiv = r = aS("div", {
        className: "highcharts-loading highcharts-loading-hidden"
      }, null, e.container)), a || (e.loadingSpan = a = aS("span", {
        className: "highcharts-loading-inner"
      }, null, r), aM(e, "redraw", o)), r.className = "highcharts-loading", t9.setElementHTML(a, aF(t, i.lang.loading, "")), e.styledMode || (aA(r, aL(s.style, {
        zIndex: 10
      })), aA(a, s.labelStyle), e.loadingShown || (aA(r, {
        opacity: 0,
        display: ""
      }), ad(r, {
        opacity: s.style.opacity || .5
      }, {
        duration: s.showDuration || 0
      }))), e.loadingShown = !0, o()
    }
    hideLoading() {
      let t = this.options,
        e = this.loadingDiv;
      e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || ad(e, {
        opacity: 0
      }, {
        duration: t.loading.hideDuration || 100,
        complete: function () {
          aA(e, {
            display: "none"
          })
        }
      })), this.loadingShown = !1
    }
    update(t, e, i, s) {
      let o, r, a;
      let n = this,
        h = {
          credits: "addCredits",
          title: "setTitle",
          subtitle: "setSubtitle",
          caption: "setCaption"
        },
        l = t.isResponsiveOptions,
        d = [];
      aD(n, "update", {
        options: t
      }), l || n.setResponsive(!1, !0), t = aC(t, n.options), n.userOptions = aX(n.userOptions, t);
      let c = t.chart;
      c && (aX(!0, n.options.chart, c), this.setZoomOptions(), "className" in c && n.setClassName(c.className), ("inverted" in c || "polar" in c || "type" in c) && (n.propFromSeries(), o = !0), "alignTicks" in c && (o = !0), "events" in c && af(this, c), aH(c, function (t, e) {
        -1 !== n.propsRequireUpdateSeries.indexOf("chart." + e) && (r = !0), -1 !== n.propsRequireDirtyBox.indexOf(e) && (n.isDirtyBox = !0), -1 === n.propsRequireReflow.indexOf(e) || (n.isDirtyBox = !0, l || (a = !0))
      }), !n.styledMode && c.style && n.renderer.setStyle(n.options.chart.style || {})), !n.styledMode && t.colors && (this.options.colors = t.colors), aH(t, function (e, i) {
        n[i] && "function" == typeof n[i].update ? n[i].update(e, !1) : "function" == typeof n[h[i]] ? n[h[i]](e) : "colors" !== i && -1 === n.collectionsWithUpdate.indexOf(i) && aX(!0, n.options[i], t[i]), "chart" !== i && -1 !== n.propsRequireUpdateSeries.indexOf(i) && (r = !0)
      }), this.collectionsWithUpdate.forEach(function (e) {
        t[e] && (aV(t[e]).forEach(function (t, s) {
          let o;
          let r = aT(t.id);
          r && (o = n.get(t.id)), !o && n[e] && (o = n[e][aF(t.index, s)]) && (r && aT(o.options.id) || o.options.isInternal) && (o = void 0), o && o.coll === e && (o.update(t, !1), i && (o.touched = !0)), !o && i && n.collectionsWithInit[e] && (n.collectionsWithInit[e][0].apply(n, [t].concat(n.collectionsWithInit[e][1] || []).concat([!1])).touched = !0)
        }), i && n[e].forEach(function (t) {
          t.touched || t.options.isInternal ? delete t.touched : d.push(t)
        }))
      }), d.forEach(function (t) {
        t.chart && t.remove && t.remove(!1)
      }), o && n.axes.forEach(function (t) {
        t.update({}, !1)
      }), r && n.getSeriesOrderByLinks().forEach(function (t) {
        t.chart && t.update({}, !1)
      }, this);
      let p = c && c.width,
        u = c && (aG(c.height) ? aj(c.height, p || n.chartWidth) : c.height);
      a || aN(p) && p !== n.chartWidth || aN(u) && u !== n.chartHeight ? n.setSize(p, u, s) : aF(e, !0) && n.redraw(s), aD(n, "afterUpdate", {
        options: t,
        redraw: e,
        animation: s
      })
    }
    setSubtitle(t, e) {
      this.applyDescription("subtitle", t), this.layOutTitles(e)
    }
    setCaption(t, e) {
      this.applyDescription("caption", t), this.layOutTitles(e)
    }
    showResetZoom() {
      let t = this,
        e = au.lang,
        i = t.zooming.resetButton,
        s = i.theme,
        o = "chart" === i.relativeTo || "spacingBox" === i.relativeTo ? null : "plotBox";

      function r() {
        t.zoomOut()
      }
      aD(this, "beforeShowResetZoom", null, function () {
        t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, r, s).attr({
          align: i.position.align,
          title: e.resetZoomTitle
        }).addClass("highcharts-reset-zoom").add().align(i.position, !1, o)
      }), aD(this, "afterShowResetZoom")
    }
    zoomOut() {
      aD(this, "selection", {
        resetSelection: !0
      }, () => this.transform({
        reset: !0,
        trigger: "zoom"
      }))
    }
    pan(t, e) {
      let i = this,
        s = "object" == typeof e ? e : {
          enabled: e,
          type: "x"
        },
        o = s.type,
        r = o && i[({
          x: "xAxis",
          xy: "axes",
          y: "yAxis"
        })[o]].filter(t => t.options.panningEnabled && !t.options.isInternal),
        a = i.options.chart;
      a?.panning && (a.panning = s), aD(this, "pan", {
        originalEvent: t
      }, () => {
        i.transform({
          axes: r,
          event: t,
          to: {
            x: t.chartX - (i.mouseDownX || 0),
            y: t.chartY - (i.mouseDownY || 0)
          },
          trigger: "pan"
        }), aA(i.container, {
          cursor: "move"
        })
      })
    }
    transform(t) {
      let {
        axes: e = this.axes,
        event: i,
        from: s = {},
        reset: o,
        selection: r,
        to: a = {},
        trigger: n
      } = t, {
        inverted: h,
        time: l
      } = this, d = !1, c, p;
      for (let t of (this.hoverPoints?.forEach(t => t.setState()), e)) {
        let {
          horiz: e,
          len: u,
          minPointOffset: g = 0,
          options: f,
          reversed: m
        } = t, x = e ? "width" : "height", y = e ? "x" : "y", b = aF(a[x], t.len), v = aF(s[x], t.len), k = 10 > Math.abs(b) ? 1 : b / v, M = (s[y] || 0) + v / 2 - t.pos, w = M - ((a[y] ?? t.pos) + b / 2 - t.pos) / k, S = m && !h || !m && h ? -1 : 1;
        if (!o && (M < 0 || M > t.len)) continue;
        let A = t.toValue(w, !0) + (r || t.isOrdinal ? 0 : g * S),
          T = t.toValue(w + u / k, !0) - (r || t.isOrdinal ? 0 : g * S || 0),
          C = t.allExtremes;
        if (A > T && ([A, T] = [T, A]), 1 === k && !o && "yAxis" === t.coll && !C) {
          for (let e of t.series) {
            let t = e.getExtremes(e.getProcessedData(!0).modified.getColumn("y") || [], !0);
            C ?? (C = {
              dataMin: Number.MAX_VALUE,
              dataMax: -Number.MAX_VALUE
            }), aN(t.dataMin) && aN(t.dataMax) && (C.dataMin = Math.min(t.dataMin, C.dataMin), C.dataMax = Math.max(t.dataMax, C.dataMax))
          }
          t.allExtremes = C
        }
        let {
          dataMin: P,
          dataMax: O,
          min: E,
          max: L
        } = aL(t.getExtremes(), C || {}), B = l.parse(f.min), D = l.parse(f.max), I = P ?? B, z = O ?? D, R = T - A, N = t.categories ? 0 : Math.min(R, z - I), W = I - N * (aT(B) ? 0 : f.minPadding), G = z + N * (aT(D) ? 0 : f.maxPadding), X = t.allowZoomOutside || 1 === k || "zoom" !== n && k > 1, H = Math.min(B ?? W, W, X ? E : W), F = Math.max(D ?? G, G, X ? L : G);
        (!t.isOrdinal || t.options.overscroll || 1 !== k || o) && (A < H && (A = H, k >= 1 && (T = A + R)), T > F && (T = F, k >= 1 && (A = T - R)), (o || t.series.length && (A !== E || T !== L) && A >= H && T <= F) && (r ? r[t.coll].push({
          axis: t,
          min: A,
          max: T
        }) : (t.isPanning = "zoom" !== n, t.isPanning && (p = !0), t.setExtremes(o ? void 0 : A, o ? void 0 : T, !1, !1, {
          move: w,
          trigger: n,
          scale: k
        }), !o && (A > H || T < F) && "mousewheel" !== n && (c = !0)), d = !0), i && (this[e ? "mouseDownX" : "mouseDownY"] = i[e ? "chartX" : "chartY"]))
      }
      return d && (r ? aD(this, "selection", r, () => {
        delete t.selection, t.trigger = "zoom", this.transform(t)
      }) : (!c || p || this.resetZoomButton ? !c && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw("zoom" === n && (this.options.chart.animation ?? this.pointCount < 100)))), d
    }
  }
  aL(aZ.prototype, {
    callbacks: [],
    collectionsWithInit: {
      xAxis: [aZ.prototype.addAxis, [!0]],
      yAxis: [aZ.prototype.addAxis, [!1]],
      series: [aZ.prototype.addSeries]
    },
    collectionsWithUpdate: ["xAxis", "yAxis", "series"],
    propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"],
    propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"],
    propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"]
  });
  let aq = aZ,
    {
      stop: aK
    } = tV,
    {
      composed: aJ
    } = L,
    {
      addEvent: aQ,
      createElement: a0,
      css: a1,
      defined: a2,
      erase: a3,
      merge: a5,
      pushUnique: a6
    } = ti;

  function a9() {
    let t = this.scrollablePlotArea;
    (this.scrollablePixelsX || this.scrollablePixelsY) && !t && (this.scrollablePlotArea = t = new a8(this)), t?.applyFixed()
  }

  function a4() {
    this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0)
  }
  class a8 {
    static compose(t, e, i) {
      a6(aJ, this.compose) && (aQ(t, "afterInit", a4), aQ(e, "afterSetChartSize", t => this.afterSetSize(t.target, t)), aQ(e, "render", a9), aQ(i, "show", a4))
    }
    static afterSetSize(t, e) {
      let i, s, o;
      let {
        minWidth: r,
        minHeight: a
      } = t.options.chart.scrollablePlotArea || {}, {
        clipBox: n,
        plotBox: h,
        inverted: l,
        renderer: d
      } = t;
      if (!d.forExport && (r ? (t.scrollablePixelsX = i = Math.max(0, r - t.chartWidth), i && (t.scrollablePlotBox = a5(t.plotBox), h.width = t.plotWidth += i, n[l ? "height" : "width"] += i, o = !0)) : a && (t.scrollablePixelsY = s = Math.max(0, a - t.chartHeight), a2(s) && (t.scrollablePlotBox = a5(t.plotBox), h.height = t.plotHeight += s, n[l ? "width" : "height"] += s, o = !1)), a2(o) && !e.skipAxes))
        for (let e of t.axes) (e.horiz === o || t.hasParallelCoordinates && "yAxis" === e.coll) && (e.setAxisSize(), e.setAxisTranslation())
    }
    constructor(t) {
      let e;
      let i = t.options.chart,
        s = ep.getRendererType(),
        o = i.scrollablePlotArea || {},
        r = this.moveFixedElements.bind(this),
        a = {
          WebkitOverflowScrolling: "touch",
          overflowX: "hidden",
          overflowY: "hidden"
        };
      t.scrollablePixelsX && (a.overflowX = "auto"), t.scrollablePixelsY && (a.overflowY = "auto"), this.chart = t;
      let n = this.parentDiv = a0("div", {
        className: "highcharts-scrolling-parent"
      }, {
        position: "relative"
      }, t.renderTo),
        h = this.scrollingContainer = a0("div", {
          className: "highcharts-scrolling"
        }, a, n),
        l = this.innerContainer = a0("div", {
          className: "highcharts-inner-container"
        }, void 0, h),
        d = this.fixedDiv = a0("div", {
          className: "highcharts-fixed"
        }, {
          position: "absolute",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: (i.style?.zIndex || 0) + 2,
          top: 0
        }, void 0, !0),
        c = this.fixedRenderer = new s(d, t.chartWidth, t.chartHeight, i.style);
      this.mask = c.path().attr({
        fill: i.backgroundColor || "#fff",
        "fill-opacity": o.opacity ?? .85,
        zIndex: -1
      }).addClass("highcharts-scrollable-mask").add(), h.parentNode.insertBefore(d, h), a1(t.renderTo, {
        overflow: "visible"
      }), aQ(t, "afterShowResetZoom", r), aQ(t, "afterApplyDrilldown", r), aQ(t, "afterLayOutTitles", r), aQ(h, "scroll", () => {
        let {
          pointer: i,
          hoverPoint: s
        } = t;
        i && (delete i.chartPosition, s && (e = s), i.runPointActions(void 0, e, !0))
      }), l.appendChild(t.container)
    }
    applyFixed() {
      let {
        chart: t,
        fixedRenderer: e,
        isDirty: i,
        scrollingContainer: s
      } = this, {
        axisOffset: o,
        chartWidth: r,
        chartHeight: a,
        container: n,
        plotHeight: h,
        plotLeft: l,
        plotTop: d,
        plotWidth: c,
        scrollablePixelsX: p = 0,
        scrollablePixelsY: u = 0
      } = t, {
        scrollPositionX: g = 0,
        scrollPositionY: f = 0
      } = t.options.chart.scrollablePlotArea || {}, m = r + p, x = a + u;
      e.setSize(r, a), (i ?? !0) && (this.isDirty = !1, this.moveFixedElements()), aK(t.container), a1(n, {
        width: `${m}px`,
        height: `${x}px`
      }), t.renderer.boxWrapper.attr({
        width: m,
        height: x,
        viewBox: [0, 0, m, x].join(" ")
      }), t.chartBackground?.attr({
        width: m,
        height: x
      }), a1(s, {
        width: `${r}px`,
        height: `${a}px`
      }), a2(i) || (s.scrollLeft = p * g, s.scrollTop = u * f);
      let y = d - o[0] - 1,
        b = l - o[3] - 1,
        v = d + h + o[2] + 1,
        k = l + c + o[1] + 1,
        M = l + c - p,
        w = d + h - u,
        S = [
          ["M", 0, 0]
        ];
      p ? S = [
        ["M", 0, y],
        ["L", l - 1, y],
        ["L", l - 1, v],
        ["L", 0, v],
        ["Z"],
        ["M", M, y],
        ["L", r, y],
        ["L", r, v],
        ["L", M, v],
        ["Z"]
      ] : u && (S = [
        ["M", b, 0],
        ["L", b, d - 1],
        ["L", k, d - 1],
        ["L", k, 0],
        ["Z"],
        ["M", b, w],
        ["L", b, a],
        ["L", k, a],
        ["L", k, w],
        ["Z"]
      ]), "adjustHeight" !== t.redrawTrigger && this.mask.attr({
        d: S
      })
    }
    moveFixedElements() {
      let t;
      let {
        container: e,
        inverted: i,
        scrollablePixelsX: s,
        scrollablePixelsY: o
      } = this.chart, r = this.fixedRenderer, a = a8.fixedSelectors;
      if (s && !i ? t = ".highcharts-yaxis" : s && i ? t = ".highcharts-xaxis" : o && !i ? t = ".highcharts-xaxis" : o && i && (t = ".highcharts-yaxis"), t && !(this.chart.hasParallelCoordinates && ".highcharts-yaxis" === t))
        for (let e of [`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`]) a6(a, e);
      else
        for (let t of [".highcharts-xaxis", ".highcharts-yaxis"])
          for (let e of [`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`]) a3(a, e);
      for (let t of a) [].forEach.call(e.querySelectorAll(t), t => {
        (t.namespaceURI === r.SVG_NS ? r.box : r.box.parentNode).appendChild(t), t.style.pointerEvents = "auto"
      })
    }
  }
  a8.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"];
  let {
    format: a7
  } = ec, {
    series: nt
  } = rx, {
    destroyObjectProperties: ne,
    fireEvent: ni,
    getAlignFactor: ns,
    isNumber: no,
    pick: nr
  } = ti, na = class {
    constructor(t, e, i, s, o) {
      let r = t.chart.inverted,
        a = t.reversed;
      this.axis = t;
      let n = this.isNegative = !!i != !!a;
      this.options = e = e || {}, this.x = s, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = o, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = {
        align: e.align || (r ? n ? "left" : "right" : "center"),
        verticalAlign: e.verticalAlign || (r ? "middle" : n ? "bottom" : "top"),
        y: e.y,
        x: e.x
      }, this.textAlign = e.textAlign || (r ? n ? "right" : "left" : "center")
    }
    destroy() {
      ne(this, this.axis)
    }
    render(t) {
      let e = this.axis.chart,
        i = this.options,
        s = i.format,
        o = s ? a7(s, this, e) : i.formatter.call(this);
      if (this.label) this.label.attr({
        text: o,
        visibility: "hidden"
      });
      else {
        this.label = e.renderer.label(o, null, void 0, i.shape, void 0, void 0, i.useHTML, !1, "stack-labels");
        let s = {
          r: i.borderRadius || 0,
          text: o,
          padding: nr(i.padding, 5),
          visibility: "hidden"
        };
        e.styledMode || (s.fill = i.backgroundColor, s.stroke = i.borderColor, s["stroke-width"] = i.borderWidth, this.label.css(i.style || {})), this.label.attr(s), this.label.added || this.label.add(t)
      }
      this.label.labelrank = e.plotSizeY, ni(this, "afterRender")
    }
    setOffset(t, e, i, s, o, r) {
      let {
        alignOptions: a,
        axis: n,
        label: h,
        options: l,
        textAlign: d
      } = this, c = n.chart, p = this.getStackBox({
        xOffset: t,
        width: e,
        boxBottom: i,
        boxTop: s,
        defaultX: o,
        xAxis: r
      }), {
        verticalAlign: u
      } = a;
      if (h && p) {
        let t = h.getBBox(void 0, 0),
          e = h.padding,
          i = "justify" === nr(l.overflow, "justify"),
          s;
        a.x = l.x || 0, a.y = l.y || 0;
        let {
          x: o,
          y: r
        } = this.adjustStackPosition({
          labelBox: t,
          verticalAlign: u,
          textAlign: d
        });
        p.x -= o, p.y -= r, h.align(a, !1, p), (s = c.isInsidePlot(h.alignAttr.x + a.x + o, h.alignAttr.y + a.y + r)) || (i = !1), i && nt.prototype.justifyDataLabel.call(n, h, a, h.alignAttr, t, p), h.attr({
          x: h.alignAttr.x,
          y: h.alignAttr.y,
          rotation: l.rotation,
          rotationOriginX: t.width * ns(l.textAlign || "center"),
          rotationOriginY: t.height / 2
        }), nr(!i && l.crop, !0) && (s = no(h.x) && no(h.y) && c.isInsidePlot(h.x - e + (h.width || 0), h.y) && c.isInsidePlot(h.x + e, h.y)), h[s ? "show" : "hide"]()
      }
      ni(this, "afterSetOffset", {
        xOffset: t,
        width: e
      })
    }
    adjustStackPosition({
      labelBox: t,
      verticalAlign: e,
      textAlign: i
    }) {
      return {
        x: t.width / 2 + t.width / 2 * (2 * ns(i) - 1),
        y: t.height / 2 * 2 * (1 - ns(e))
      }
    }
    getStackBox(t) {
      let e = this.axis,
        i = e.chart,
        {
          boxTop: s,
          defaultX: o,
          xOffset: r,
          width: a,
          boxBottom: n
        } = t,
        h = e.stacking.usePercentage ? 100 : nr(s, this.total, 0),
        l = e.toPixels(h),
        d = t.xAxis || i.xAxis[0],
        c = nr(o, d.translate(this.x)) + r,
        p = Math.abs(l - e.toPixels(n || no(e.min) && e.logarithmic && e.logarithmic.lin2log(e.min) || 0)),
        u = i.inverted,
        g = this.isNegative;
      return u ? {
        x: (g ? l : l - p) - i.plotLeft,
        y: d.height - c - a + d.top - i.plotTop,
        width: p,
        height: a
      } : {
        x: c + d.transB - i.plotLeft,
        y: (g ? l - p : l) - i.plotTop,
        width: a,
        height: p
      }
    }
  }, {
    getDeferredAnimation: nn
  } = tV, {
    series: {
      prototype: nh
    }
  } = rx, {
    addEvent: nl,
    correctFloat: nd,
    defined: nc,
    destroyObjectProperties: np,
    fireEvent: nu,
    isNumber: ng,
    objectEach: nf,
    pick: nm
  } = ti;

  function nx() {
    let t = this.inverted;
    this.axes.forEach(t => {
      t.stacking && t.stacking.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks)
    }), this.series.forEach(e => {
      let i = e.xAxis && e.xAxis.options || {};
      e.options.stacking && e.reserveSpace() && (e.stackKey = [e.type, nm(e.options.stack, ""), t ? i.top : i.left, t ? i.height : i.width].join(","))
    })
  }

  function ny() {
    let t = this.stacking;
    if (t) {
      let e = t.stacks;
      nf(e, (t, i) => {
        np(t), delete e[i]
      }), t.stackTotalGroup?.destroy()
    }
  }

  function nb() {
    this.stacking || (this.stacking = new nA(this))
  }

  function nv(t, e, i, s) {
    return !nc(t) || t.x !== e || s && t.stackKey !== s ? t = {
      x: e,
      index: 0,
      key: s,
      stackKey: s
    } : t.index++, t.key = [i, e, t.index].join(","), t
  }

  function nk() {
    let t;
    let e = this,
      i = e.yAxis,
      s = e.stackKey || "",
      o = i.stacking.stacks,
      r = e.getColumn("x", !0),
      a = e.options.stacking,
      n = e[a + "Stacker"];
    n && [s, "-" + s].forEach(i => {
      let s = r.length,
        a, h, l;
      for (; s--;) a = r[s], t = e.getStackIndicator(t, a, e.index, i), h = o[i]?.[a], (l = h?.points[t.key || ""]) && n.call(e, l, h, s)
    })
  }

  function nM(t, e, i) {
    let s = e.total ? 100 / e.total : 0;
    t[0] = nd(t[0] * s), t[1] = nd(t[1] * s), this.stackedYData[i] = t[1]
  }

  function nw(t) {
    (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? nh.setStackedPoints.call(this, t, "group") : t.stacking.resetStacks())
  }

  function nS(t, e) {
    let i, s, o, r, a, n, h;
    let l = e || this.options.stacking;
    if (!l || !this.reserveSpace() || (({
      group: "xAxis"
    })[l] || "yAxis") !== t.coll) return;
    let d = this.getColumn("x", !0),
      c = this.getColumn(this.pointValKey || "y", !0),
      p = [],
      u = c.length,
      g = this.options,
      f = g.threshold || 0,
      m = g.startFromThreshold ? f : 0,
      x = g.stack,
      y = e ? `${this.type},${l}` : this.stackKey || "",
      b = "-" + y,
      v = this.negStacks,
      k = t.stacking,
      M = k.stacks,
      w = k.oldStacks;
    for (k.stacksTouched += 1, h = 0; h < u; h++) {
      let e = d[h] || 0,
        u = c[h],
        g = ng(u) && u || 0;
      n = (i = this.getStackIndicator(i, e, this.index)).key || "", M[a = (s = v && g < (m ? 0 : f)) ? b : y] || (M[a] = {}), M[a][e] || (w[a]?.[e] ? (M[a][e] = w[a][e], M[a][e].total = null) : M[a][e] = new na(t, t.options.stackLabels, !!s, e, x)), o = M[a][e], null !== u ? (o.points[n] = o.points[this.index] = [nm(o.cumulative, m)], nc(o.cumulative) || (o.base = n), o.touched = k.stacksTouched, i.index > 0 && !1 === this.singleStacks && (o.points[n][0] = o.points[this.index + "," + e + ",0"][0])) : (delete o.points[n], delete o.points[this.index]);
      let S = o.total || 0;
      "percent" === l ? (r = s ? y : b, S = v && M[r]?.[e] ? (r = M[r][e]).total = Math.max(r.total || 0, S) + Math.abs(g) : nd(S + Math.abs(g))) : "group" === l ? ng(u) && S++ : S = nd(S + g), "group" === l ? o.cumulative = (S || 1) - 1 : o.cumulative = nd(nm(o.cumulative, m) + g), o.total = S, null !== u && (o.points[n].push(o.cumulative), p[h] = o.cumulative, o.hasValidPoints = !0)
    }
    "percent" === l && (k.usePercentage = !0), "group" !== l && (this.stackedYData = p), k.oldStacks = {}
  }
  class nA {
    constructor(t) {
      this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t
    }
    buildStacks() {
      let t, e;
      let i = this.axis,
        s = i.series,
        o = "xAxis" === i.coll,
        r = i.options.reversedStacks,
        a = s.length;
      for (this.resetStacks(), this.usePercentage = !1, e = a; e--;) t = s[r ? e : a - e - 1], o && t.setGroupedPoints(i), t.setStackedPoints(i);
      if (!o)
        for (e = 0; e < a; e++) s[e].modifyStacks();
      nu(i, "afterBuildStacks")
    }
    cleanStacks() {
      this.oldStacks && (this.stacks = this.oldStacks, nf(this.stacks, t => {
        nf(t, t => {
          t.cumulative = t.total
        })
      }))
    }
    resetStacks() {
      nf(this.stacks, t => {
        nf(t, (e, i) => {
          ng(e.touched) && e.touched < this.stacksTouched ? (e.destroy(), delete t[i]) : (e.total = null, e.cumulative = null)
        })
      })
    }
    renderStackTotals() {
      let t = this.axis,
        e = t.chart,
        i = e.renderer,
        s = this.stacks,
        o = nn(e, t.options.stackLabels?.animation || !1),
        r = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({
          zIndex: 6,
          opacity: 0
        }).add();
      r.translate(e.plotLeft, e.plotTop), nf(s, t => {
        nf(t, t => {
          t.render(r)
        })
      }), r.animate({
        opacity: 1
      }, o)
    }
  } (m || (m = {})).compose = function (t, e, i) {
    let s = e.prototype,
      o = i.prototype;
    s.getStacks || (nl(t, "init", nb), nl(t, "destroy", ny), s.getStacks = nx, o.getStackIndicator = nv, o.modifyStacks = nk, o.percentStacker = nM, o.setGroupedPoints = nw, o.setStackedPoints = nS)
  };
  let nT = m,
    {
      defined: nC,
      merge: nP,
      isObject: nO
    } = ti;
  class nE extends rq {
    drawGraph() {
      let t = this.options,
        e = (this.gappedPath || this.getGraphPath).call(this),
        i = this.chart.styledMode;
      [this, ...this.zones].forEach((s, o) => {
        let r, a = s.graph,
          n = a ? "animate" : "attr",
          h = s.dashStyle || t.dashStyle;
        a ? (a.endX = this.preventGraphAnimation ? null : e.xMap, a.animate({
          d: e
        })) : e.length && (s.graph = a = this.chart.renderer.path(e).addClass("highcharts-graph" + (o ? ` highcharts-zone-graph-${o - 1} ` : " ") + (o && s.className || "")).attr({
          zIndex: 1
        }).add(this.group)), a && !i && (r = {
          stroke: !o && t.lineColor || s.color || this.color || "#cccccc",
          "stroke-width": t.lineWidth || 0,
          fill: this.fillGraph && this.color || "none"
        }, h ? r.dashstyle = h : "square" !== t.linecap && (r["stroke-linecap"] = r["stroke-linejoin"] = "round"), a[n](r).shadow(t.shadow && nP({
          filterUnits: "userSpaceOnUse"
        }, nO(t.shadow) ? t.shadow : {}))), a && (a.startX = e.xMap, a.isArea = e.isArea)
      })
    }
    getGraphPath(t, e, i) {
      let s = this,
        o = s.options,
        r = [],
        a = [],
        n, h = o.step,
        l = (t = t || s.points).reversed;
      return l && t.reverse(), (h = ({
        right: 1,
        center: 2
      })[h] || h && 3) && l && (h = 4 - h), (t = this.getValidPoints(t, !1, !(o.connectNulls && !e && !i))).forEach(function (l, d) {
        let c;
        let p = l.plotX,
          u = l.plotY,
          g = t[d - 1],
          f = l.isNull || "number" != typeof u;
        (l.leftCliff || g && g.rightCliff) && !i && (n = !0), f && !nC(e) && d > 0 ? n = !o.connectNulls : f && !e ? n = !0 : (0 === d || n ? c = [
          ["M", l.plotX, l.plotY]
        ] : s.getPointSpline ? c = [s.getPointSpline(t, l, d)] : h ? (c = 1 === h ? [
          ["L", g.plotX, u]
        ] : 2 === h ? [
          ["L", (g.plotX + p) / 2, g.plotY],
          ["L", (g.plotX + p) / 2, u]
        ] : [
          ["L", p, g.plotY]
        ]).push(["L", p, u]) : c = [
          ["L", p, u]
        ], a.push(l.x), h && (a.push(l.x), 2 === h && a.push(l.x)), r.push.apply(r, c), n = !1)
      }), r.xMap = a, s.graphPath = r, r
    }
  }
  nE.defaultOptions = nP(rq.defaultOptions, {
    legendSymbol: "lineMarker"
  }), rx.registerSeriesType("line", nE);
  let {
    seriesTypes: {
      line: nL
    }
  } = rx, {
    extend: nB,
    merge: nD,
    objectEach: nI,
    pick: nz
  } = ti;
  class nR extends nL {
    drawGraph() {
      this.areaPath = [], super.drawGraph.apply(this);
      let {
        areaPath: t,
        options: e
      } = this;
      [this, ...this.zones].forEach((i, s) => {
        let o = {},
          r = i.fillColor || e.fillColor,
          a = i.area,
          n = a ? "animate" : "attr";
        a ? (a.endX = this.preventGraphAnimation ? null : t.xMap, a.animate({
          d: t
        })) : (o.zIndex = 0, (a = i.area = this.chart.renderer.path(t).addClass("highcharts-area" + (s ? ` highcharts-zone-area-${s - 1} ` : " ") + (s && i.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (o.fill = r || i.color || this.color, o["fill-opacity"] = r ? 1 : e.fillOpacity ?? .75, a.css({
          pointerEvents: this.stickyTracking ? "none" : "auto"
        })), a[n](o), a.startX = t.xMap, a.shiftUnit = e.step ? 2 : 1
      })
    }
    getGraphPath(t) {
      let e, i, s;
      let o = nL.prototype.getGraphPath,
        r = this.options,
        a = r.stacking,
        n = this.yAxis,
        h = [],
        l = [],
        d = this.index,
        c = n.stacking.stacks[this.stackKey],
        p = r.threshold,
        u = Math.round(n.getThreshold(r.threshold)),
        g = nz(r.connectNulls, "percent" === a),
        f = function (i, s, o) {
          let r = t[i],
            g = a && c[r.x].points[d],
            f = r[o + "Null"] || 0,
            m = r[o + "Cliff"] || 0,
            x, y, b = !0;
          m || f ? (x = (f ? g[0] : g[1]) + m, y = g[0] + m, b = !!f) : !a && t[s] && t[s].isNull && (x = y = p), void 0 !== x && (l.push({
            plotX: e,
            plotY: null === x ? u : n.getThreshold(x),
            isNull: b,
            isCliff: !0
          }), h.push({
            plotX: e,
            plotY: null === y ? u : n.getThreshold(y),
            doCurve: !1
          }))
        };
      t = t || this.points, a && (t = this.getStackPoints(t));
      for (let o = 0, r = t.length; o < r; ++o) a || (t[o].leftCliff = t[o].rightCliff = t[o].leftNull = t[o].rightNull = void 0), i = t[o].isNull, e = nz(t[o].rectPlotX, t[o].plotX), s = a ? nz(t[o].yBottom, u) : u, i && !g || (g || f(o, o - 1, "left"), i && !a && g || (l.push(t[o]), h.push({
        x: o,
        plotX: e,
        plotY: s
      })), g || f(o, o + 1, "right"));
      let m = o.call(this, l, !0, !0);
      h.reversed = !0;
      let x = o.call(this, h, !0, !0),
        y = x[0];
      y && "M" === y[0] && (x[0] = ["L", y[1], y[2]]);
      let b = m.concat(x);
      b.length && b.push(["Z"]);
      let v = o.call(this, l, !1, g);
      return this.chart.series.length > 1 && a && l.some(t => t.isCliff) && (b.hasStackedCliffs = v.hasStackedCliffs = !0), b.xMap = m.xMap, this.areaPath = b, v
    }
    getStackPoints(t) {
      let e = this,
        i = [],
        s = [],
        o = this.xAxis,
        r = this.yAxis,
        a = r.stacking.stacks[this.stackKey],
        n = {},
        h = r.series,
        l = h.length,
        d = r.options.reversedStacks ? 1 : -1,
        c = h.indexOf(e);
      if (t = t || this.points, this.options.stacking) {
        for (let e = 0; e < t.length; e++) t[e].leftNull = t[e].rightNull = void 0, n[t[e].x] = t[e];
        nI(a, function (t, e) {
          null !== t.total && s.push(e)
        }), s.sort(function (t, e) {
          return t - e
        });
        let p = h.map(t => t.visible);
        s.forEach(function (t, u) {
          let g = 0,
            f, m;
          if (n[t] && !n[t].isNull) i.push(n[t]), [-1, 1].forEach(function (i) {
            let o = 1 === i ? "rightNull" : "leftNull",
              r = a[s[u + i]],
              g = 0;
            if (r) {
              let i = c;
              for (; i >= 0 && i < l;) {
                let s = h[i].index;
                !(f = r.points[s]) && (s === e.index ? n[t][o] = !0 : p[i] && (m = a[t].points[s]) && (g -= m[1] - m[0])), i += d
              }
            }
            n[t][1 === i ? "rightCliff" : "leftCliff"] = g
          });
          else {
            let e = c;
            for (; e >= 0 && e < l;) {
              let i = h[e].index;
              if (f = a[t].points[i]) {
                g = f[1];
                break
              }
              e += d
            }
            g = nz(g, 0), g = r.translate(g, 0, 1, 0, 1), i.push({
              isNull: !0,
              plotX: o.translate(t, 0, 0, 0, 1),
              x: t,
              plotY: g,
              yBottom: g
            })
          }
        })
      }
      return i
    }
  }
  nR.defaultOptions = nD(nL.defaultOptions, {
    threshold: 0,
    legendSymbol: "areaMarker"
  }), nB(nR.prototype, {
    singleStacks: !1
  }), rx.registerSeriesType("area", nR);
  let {
    line: nN
  } = rx.seriesTypes, {
    merge: nW,
    pick: nG
  } = ti;
  class nX extends nN {
    getPointSpline(t, e, i) {
      let s, o, r, a;
      let n = e.plotX || 0,
        h = e.plotY || 0,
        l = t[i - 1],
        d = t[i + 1];

      function c(t) {
        return t && !t.isNull && !1 !== t.doCurve && !e.isCliff
      }
      if (c(l) && c(d)) {
        let t = l.plotX || 0,
          i = l.plotY || 0,
          c = d.plotX || 0,
          p = d.plotY || 0,
          u = 0;
        s = (1.5 * n + t) / 2.5, o = (1.5 * h + i) / 2.5, r = (1.5 * n + c) / 2.5, a = (1.5 * h + p) / 2.5, r !== s && (u = (a - o) * (r - n) / (r - s) + h - a), o += u, a += u, o > i && o > h ? (o = Math.max(i, h), a = 2 * h - o) : o < i && o < h && (o = Math.min(i, h), a = 2 * h - o), a > p && a > h ? (a = Math.max(p, h), o = 2 * h - a) : a < p && a < h && (a = Math.min(p, h), o = 2 * h - a), e.rightContX = r, e.rightContY = a, e.controlPoints = {
          low: [s, o],
          high: [r, a]
        }
      }
      let p = ["C", nG(l.rightContX, l.plotX, 0), nG(l.rightContY, l.plotY, 0), nG(s, n, 0), nG(o, h, 0), n, h];
      return l.rightContX = l.rightContY = void 0, p
    }
  }
  nX.defaultOptions = nW(nN.defaultOptions), rx.registerSeriesType("spline", nX);
  let nH = nX,
    {
      area: nF,
      area: {
        prototype: nY
      }
    } = rx.seriesTypes,
    {
      extend: nj,
      merge: nU
    } = ti;
  class nV extends nH { }
  nV.defaultOptions = nU(nH.defaultOptions, nF.defaultOptions), nj(nV.prototype, {
    getGraphPath: nY.getGraphPath,
    getStackPoints: nY.getStackPoints,
    drawGraph: nY.drawGraph
  }), rx.registerSeriesType("areaspline", nV);
  let {
    animObject: n_
  } = tV, {
    parse: n$
  } = tE, {
    noop: nZ
  } = L, {
    clamp: nq,
    crisp: nK,
    defined: nJ,
    extend: nQ,
    fireEvent: n0,
    isArray: n1,
    isNumber: n2,
    merge: n3,
    pick: n5,
    objectEach: n6
  } = ti;
  class n9 extends rq {
    animate(t) {
      let e, i;
      let s = this,
        o = this.yAxis,
        r = o.pos,
        a = o.reversed,
        n = s.options,
        {
          clipOffset: h,
          inverted: l
        } = this.chart,
        d = {},
        c = l ? "translateX" : "translateY";
      t && h ? (d.scaleY = .001, i = nq(o.toPixels(n.threshold || 0), r, r + o.len), l ? (i += a ? -Math.floor(h[0]) : Math.ceil(h[2]), d.translateX = i - o.len) : (i += a ? Math.ceil(h[0]) : -Math.floor(h[2]), d.translateY = i), s.clipBox && s.setClip(), s.group.attr(d)) : (e = Number(s.group.attr(c)), s.group.animate({
        scaleY: 1
      }, nQ(n_(s.options.animation), {
        step: function (t, i) {
          s.group && (d[c] = e + i.pos * (r - e), s.group.attr(d))
        }
      })))
    }
    init(t, e) {
      super.init.apply(this, arguments);
      let i = this;
      (t = i.chart).hasRendered && t.series.forEach(function (t) {
        t.type === i.type && (t.isDirty = !0)
      })
    }
    getColumnMetrics() {
      let t = this,
        e = t.options,
        i = t.xAxis,
        s = t.yAxis,
        o = i.options.reversedStacks,
        r = i.reversed && !o || !i.reversed && o,
        a = {},
        n, h = 0;
      !1 === e.grouping ? h = 1 : t.chart.series.forEach(function (e) {
        let i;
        let o = e.yAxis,
          r = e.options;
        e.type === t.type && e.reserveSpace() && s.len === o.len && s.pos === o.pos && (r.stacking && "group" !== r.stacking ? (void 0 === a[n = e.stackKey] && (a[n] = h++), i = a[n]) : !1 !== r.grouping && (i = h++), e.columnIndex = i)
      });
      let l = Math.min(Math.abs(i.transA) * (!i.brokenAxis?.hasBreaks && i.ordinal?.slope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len),
        d = l * e.groupPadding,
        c = (l - 2 * d) / (h || 1),
        p = Math.min(e.maxPointWidth || i.len, n5(e.pointWidth, c * (1 - 2 * e.pointPadding))),
        u = (t.columnIndex || 0) + (r ? 1 : 0);
      return t.columnMetrics = {
        width: p,
        offset: (c - p) / 2 + (d + u * c - l / 2) * (r ? -1 : 1),
        paddedWidth: c,
        columnCount: h
      }, t.columnMetrics
    }
    crispCol(t, e, i, s) {
      let o = this.borderWidth,
        r = this.chart.inverted;
      return s = nK(e + s, o, r) - (e = nK(e, o, r)), this.options.crisp && (i = nK(t + i, o) - (t = nK(t, o))), {
        x: t,
        y: e,
        width: i,
        height: s
      }
    }
    adjustForMissingColumns(t, e, i, s) {
      if (!i.isNull && s.columnCount > 1) {
        let o = this.xAxis.series.filter(t => t.visible).map(t => t.index),
          r = 0,
          a = 0;
        n6(this.xAxis.stacking?.stacks, t => {
          let e = "number" == typeof i.x ? t[i.x.toString()]?.points : void 0,
            s = e?.[this.index],
            n = {};
          if (e && n1(s)) {
            let t = this.index,
              i = Object.keys(e).filter(t => !t.match(",") && e[t] && e[t].length > 1).map(parseFloat).filter(t => -1 !== o.indexOf(t)).filter(e => {
                let i = this.chart.series[e].options,
                  s = i.stacking && i.stack;
                if (nJ(s)) {
                  if (n2(n[s])) return t === e && (t = n[s]), !1;
                  n[s] = e
                }
                return !0
              }).sort((t, e) => e - t);
            r = i.indexOf(t), a = i.length
          }
        }), r = this.xAxis.reversed ? a - 1 - r : r;
        let n = (a - 1) * s.paddedWidth + e;
        t = (i.plotX || 0) + n / 2 - e - r * s.paddedWidth
      }
      return t
    }
    translate() {
      let t = this,
        e = t.chart,
        i = t.options,
        s = t.dense = t.closestPointRange * t.xAxis.transA < 2,
        o = t.borderWidth = n5(i.borderWidth, s ? 0 : 1),
        r = t.xAxis,
        a = t.yAxis,
        n = i.threshold,
        h = n5(i.minPointLength, 5),
        l = t.getColumnMetrics(),
        d = l.width,
        c = t.pointXOffset = l.offset,
        p = t.dataMin,
        u = t.dataMax,
        g = t.translatedThreshold = a.getThreshold(n),
        f = t.barW = Math.max(d, 1 + 2 * o);
      i.pointPadding && i.crisp && (f = Math.ceil(f)), rq.prototype.translate.apply(t), t.points.forEach(function (s) {
        let o = n5(s.yBottom, g),
          m = 999 + Math.abs(o),
          x = s.plotX || 0,
          y = nq(s.plotY, -m, a.len + m),
          b, v = Math.min(y, o),
          k = Math.max(y, o) - v,
          M = d,
          w = x + c,
          S = f;
        h && Math.abs(k) < h && (k = h, b = !a.reversed && !s.negative || a.reversed && s.negative, n2(n) && n2(u) && s.y === n && u <= n && (a.min || 0) < n && (p !== u || (a.max || 0) <= n) && (b = !b, s.negative = !s.negative), v = Math.abs(v - g) > h ? o - h : g - (b ? h : 0)), nJ(s.options.pointWidth) && (w -= Math.round(((M = S = Math.ceil(s.options.pointWidth)) - d) / 2)), i.centerInCategory && (w = t.adjustForMissingColumns(w, M, s, l)), s.barX = w, s.pointWidth = M, s.tooltipPos = e.inverted ? [nq(a.len + a.pos - e.plotLeft - y, a.pos - e.plotLeft, a.len + a.pos - e.plotLeft), r.len + r.pos - e.plotTop - w - S / 2, k] : [r.left - e.plotLeft + w + S / 2, nq(y + a.pos - e.plotTop, a.pos - e.plotTop, a.len + a.pos - e.plotTop), k], s.shapeType = t.pointClass.prototype.shapeType || "roundedRect", s.shapeArgs = t.crispCol(w, s.isNull ? g : v, S, s.isNull ? 0 : k)
      }), n0(this, "afterColumnTranslate")
    }
    drawGraph() {
      this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
    }
    pointAttribs(t, e) {
      let i = this.options,
        s = this.pointAttrToOptions || {},
        o = s.stroke || "borderColor",
        r = s["stroke-width"] || "borderWidth",
        a, n, h, l = t && t.color || this.color,
        d = t && t[o] || i[o] || l,
        c = t && t.options.dashStyle || i.dashStyle,
        p = t && t[r] || i[r] || this[r] || 0,
        u = n5(t && t.opacity, i.opacity, 1);
      t && this.zones.length && (n = t.getZone(), l = t.options.color || n && (n.color || t.nonZonedColor) || this.color, n && (d = n.borderColor || d, c = n.dashStyle || c, p = n.borderWidth || p)), e && t && (h = (a = n3(i.states[e], t.options.states && t.options.states[e] || {})).brightness, l = a.color || void 0 !== h && n$(l).brighten(a.brightness).get() || l, d = a[o] || d, p = a[r] || p, c = a.dashStyle || c, u = n5(a.opacity, u));
      let g = {
        fill: l,
        stroke: d,
        "stroke-width": p,
        opacity: u
      };
      return c && (g.dashstyle = c), g
    }
    drawPoints(t = this.points) {
      let e;
      let i = this,
        s = this.chart,
        o = i.options,
        r = s.renderer,
        a = o.animationLimit || 250;
      t.forEach(function (t) {
        let n = t.plotY,
          h = t.graphic,
          l = !!h,
          d = h && s.pointCount < a ? "animate" : "attr";
        n2(n) && null !== t.y ? (e = t.shapeArgs, h && t.hasNewShapeType() && (h = h.destroy()), i.enabledDataSorting && (t.startXPos = i.xAxis.reversed ? -(e && e.width || 0) : i.xAxis.width), !h && (t.graphic = h = r[t.shapeType](e).add(t.group || i.group), h && i.enabledDataSorting && s.hasRendered && s.pointCount < a && (h.attr({
          x: t.startXPos
        }), l = !0, d = "animate")), h && l && h[d](n3(e)), s.styledMode || h[d](i.pointAttribs(t, t.selected && "select")).shadow(!1 !== t.allowShadow && o.shadow), h && (h.addClass(t.getClassName(), !0), h.attr({
          visibility: t.visible ? "inherit" : "hidden"
        }))) : h && (t.graphic = h.destroy())
      })
    }
    drawTracker(t = this.points) {
      let e;
      let i = this,
        s = i.chart,
        o = s.pointer,
        r = function (t) {
          o?.normalize(t);
          let e = o?.getPointFromEvent(t),
            r = !s.scrollablePlotArea || s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
              visiblePlotOnly: !0
            });
          o && e && i.options.enableMouseTracking && r && (o.isDirectTouch = !0, e.onMouseOver(t))
        };
      t.forEach(function (t) {
        e = n1(t.dataLabels) ? t.dataLabels : t.dataLabel ? [t.dataLabel] : [], t.graphic && (t.graphic.element.point = t), e.forEach(function (e) {
          (e.div || e.element).point = t
        })
      }), i._hasTracking || (i.trackerGroups.forEach(function (t) {
        i[t] && (i[t].addClass("highcharts-tracker").on("mouseover", r).on("mouseout", function (t) {
          o?.onTrackerMouseOut(t)
        }).on("touchstart", r), !s.styledMode && i.options.cursor && i[t].css({
          cursor: i.options.cursor
        }))
      }), i._hasTracking = !0), n0(this, "afterDrawTracker")
    }
    remove() {
      let t = this,
        e = t.chart;
      e.hasRendered && e.series.forEach(function (e) {
        e.type === t.type && (e.isDirty = !0)
      }), rq.prototype.remove.apply(t, arguments)
    }
  }
  n9.defaultOptions = n3(rq.defaultOptions, {
    borderRadius: 3,
    centerInCategory: !1,
    groupPadding: .2,
    marker: null,
    pointPadding: .1,
    minPointLength: 0,
    cropThreshold: 50,
    pointRange: null,
    states: {
      hover: {
        halo: !1,
        brightness: .1
      },
      select: {
        color: "#cccccc",
        borderColor: "#000000"
      }
    },
    dataLabels: {
      align: void 0,
      verticalAlign: void 0,
      y: void 0
    },
    startFromThreshold: !0,
    stickyTracking: !1,
    tooltip: {
      distance: 6
    },
    threshold: 0,
    borderColor: "#ffffff"
  }), nQ(n9.prototype, {
    directTouch: !0,
    getSymbol: nZ,
    negStacks: !0,
    trackerGroups: ["group", "dataLabelsGroup"]
  }), rx.registerSeriesType("column", n9);
  let n4 = n9,
    {
      getDeferredAnimation: n8
    } = tV,
    {
      format: n7
    } = ec,
    {
      defined: ht,
      extend: he,
      fireEvent: hi,
      getAlignFactor: hs,
      isArray: ho,
      isString: hr,
      merge: ha,
      objectEach: hn,
      pick: hh,
      pInt: hl,
      splat: hd
    } = ti;
  ! function (t) {
    function e() {
      return h(this).some(t => t?.enabled)
    }

    function i(t, e, i, s, o) {
      let {
        chart: r,
        enabledDataSorting: a
      } = this, n = this.isCartesian && r.inverted, h = t.plotX, l = t.plotY, d = i.rotation || 0, c = ht(h) && ht(l) && r.isInsidePlot(h, Math.round(l), {
        inverted: n,
        paneCoordinates: !0,
        series: this
      }), p = 0 === d && "justify" === hh(i.overflow, a ? "none" : "justify"), u = this.visible && !1 !== t.visible && ht(h) && (t.series.forceDL || a && !p || c || hh(i.inside, !!this.options.stacking) && s && r.isInsidePlot(h, n ? s.x + 1 : s.y + s.height - 1, {
        inverted: n,
        paneCoordinates: !0,
        series: this
      })), g = t.pos();
      if (u && g) {
        var f;
        let h = e.getBBox(),
          l = e.getBBox(void 0, 0);
        if (s = he({
          x: g[0],
          y: Math.round(g[1]),
          width: 0,
          height: 0
        }, s || {}), "plotEdges" === i.alignTo && this.isCartesian && (s[n ? "x" : "y"] = 0, s[n ? "width" : "height"] = this.yAxis?.len || 0), he(i, {
          width: h.width,
          height: h.height
        }), f = s, a && this.xAxis && !p && this.setDataLabelStartPos(t, e, o, c, f), e.align(ha(i, {
          width: l.width,
          height: l.height
        }), !1, s, !1), e.alignAttr.x += hs(i.align) * (l.width - h.width), e.alignAttr.y += hs(i.verticalAlign) * (l.height - h.height), e[e.placed ? "animate" : "attr"]({
          x: e.alignAttr.x + (h.width - l.width) / 2,
          y: e.alignAttr.y + (h.height - l.height) / 2,
          rotationOriginX: (e.width || 0) / 2,
          rotationOriginY: (e.height || 0) / 2
        }), p && s.height >= 0) this.justifyDataLabel(e, i, e.alignAttr, h, s, o);
        else if (hh(i.crop, !0)) {
          let {
            x: t,
            y: i
          } = e.alignAttr;
          u = r.isInsidePlot(t, i, {
            paneCoordinates: !0,
            series: this
          }) && r.isInsidePlot(t + h.width - 1, i + h.height - 1, {
            paneCoordinates: !0,
            series: this
          })
        }
        i.shape && !d && e[o ? "attr" : "animate"]({
          anchorX: g[0],
          anchorY: g[1]
        })
      }
      o && a && (e.placed = !1), u || a && !p ? (e.show(), e.placed = !0) : (e.hide(), e.placed = !1)
    }

    function s() {
      return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6)
    }

    function o(t) {
      let e = this.hasRendered || 0,
        i = this.initDataLabelsGroup().attr({
          opacity: +e
        });
      return !e && i && (this.visible && i.show(), this.options.animation ? i.animate({
        opacity: 1
      }, t) : i.attr({
        opacity: 1
      })), i
    }

    function r(t) {
      let e;
      t = t || this.points;
      let i = this,
        s = i.chart,
        o = i.options,
        r = s.renderer,
        {
          backgroundColor: a,
          plotBackgroundColor: l
        } = s.options.chart,
        d = r.getContrast(hr(l) && l || hr(a) && a || "#000000"),
        c = h(i),
        {
          animation: p,
          defer: u
        } = c[0],
        g = u ? n8(s, p, i) : {
          defer: 0,
          duration: 0
        };
      hi(this, "drawDataLabels"), i.hasDataLabels?.() && (e = this.initDataLabels(g), t.forEach(t => {
        let a = t.dataLabels || [];
        hd(n(c, t.dlOptions || t.options?.dataLabels)).forEach((n, h) => {
          let l = n.enabled && (t.visible || t.dataLabelOnHidden) && (!t.isNull || t.dataLabelOnNull) && function (t, e) {
            let i = e.filter;
            if (i) {
              let e = i.operator,
                s = t[i.property],
                o = i.value;
              return ">" === e && s > o || "<" === e && s < o || ">=" === e && s >= o || "<=" === e && s <= o || "==" === e && s == o || "===" === e && s === o || "!=" === e && s != o || "!==" === e && s !== o
            }
            return !0
          }(t, n),
            {
              backgroundColor: c,
              borderColor: p,
              distance: u,
              style: g = {}
            } = n,
            f, m, x, y = {},
            b = a[h],
            v = !b,
            k;
          l && (m = ht(f = hh(n[t.formatPrefix + "Format"], n.format)) ? n7(f, t, s) : (n[t.formatPrefix + "Formatter"] || n.formatter).call(t, n), x = n.rotation, !s.styledMode && (g.color = hh(n.color, g.color, hr(i.color) ? i.color : void 0, "#000000"), "contrast" === g.color ? ("none" !== c && (k = c), t.contrastColor = r.getContrast("auto" !== k && k || t.color || i.color), g.color = k || !ht(u) && n.inside || 0 > hl(u || 0) || o.stacking ? t.contrastColor : d) : delete t.contrastColor, o.cursor && (g.cursor = o.cursor)), y = {
            r: n.borderRadius || 0,
            rotation: x,
            padding: n.padding,
            zIndex: 1
          }, s.styledMode || (y.fill = "auto" === c ? t.color : c, y.stroke = "auto" === p ? t.color : p, y["stroke-width"] = n.borderWidth), hn(y, (t, e) => {
            void 0 === t && delete y[e]
          })), !b || l && ht(m) && !!b.div == !!n.useHTML && (b.rotation && n.rotation || b.rotation === n.rotation) || (b = void 0, v = !0), l && ht(m) && (b ? y.text = m : (b = r.label(m, 0, 0, n.shape, void 0, void 0, n.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + t.colorIndex + " " + (n.className || "") + (n.useHTML ? " highcharts-tracker" : "")), b && (b.options = n, b.attr(y), s.styledMode ? g.width && b.css({
            width: g.width,
            textOverflow: g.textOverflow,
            whiteSpace: g.whiteSpace
          }) : b.css(g).shadow(n.shadow), hi(b, "beforeAddingDataLabel", {
            labelOptions: n,
            point: t
          }), b.added || b.add(e), i.alignDataLabel(t, b, n, void 0, v), b.isActive = !0, a[h] && a[h] !== b && a[h].destroy(), a[h] = b))
        });
        let h = a.length;
        for (; h--;) a[h] && a[h].isActive ? a[h].isActive = !1 : (a[h]?.destroy(), a.splice(h, 1));
        t.dataLabel = a[0], t.dataLabels = a
      })), hi(this, "afterDrawDataLabels")
    }

    function a(t, e, i, s, o, r) {
      let a = this.chart,
        n = e.align,
        h = e.verticalAlign,
        l = t.box ? 0 : t.padding || 0,
        d = a.inverted ? this.yAxis : this.xAxis,
        c = d ? d.left - a.plotLeft : 0,
        p = a.inverted ? this.xAxis : this.yAxis,
        u = p ? p.top - a.plotTop : 0,
        {
          x: g = 0,
          y: f = 0
        } = e,
        m, x;
      return (m = (i.x || 0) + l + c) < 0 && ("right" === n && g >= 0 ? (e.align = "left", e.inside = !0) : g -= m, x = !0), (m = (i.x || 0) + s.width - l + c) > a.plotWidth && ("left" === n && g <= 0 ? (e.align = "right", e.inside = !0) : g += a.plotWidth - m, x = !0), (m = i.y + l + u) < 0 && ("bottom" === h && f >= 0 ? (e.verticalAlign = "top", e.inside = !0) : f -= m, x = !0), (m = (i.y || 0) + s.height - l + u) > a.plotHeight && ("top" === h && f <= 0 ? (e.verticalAlign = "bottom", e.inside = !0) : f += a.plotHeight - m, x = !0), x && (e.x = g, e.y = f, t.placed = !r, t.align(e, void 0, o)), x
    }

    function n(t, e) {
      let i = [],
        s;
      if (ho(t) && !ho(e)) i = t.map(function (t) {
        return ha(t, e)
      });
      else if (ho(e) && !ho(t)) i = e.map(function (e) {
        return ha(t, e)
      });
      else if (ho(t) || ho(e)) {
        if (ho(t) && ho(e))
          for (s = Math.max(t.length, e.length); s--;) i[s] = ha(t[s], e[s])
      } else i = ha(t, e);
      return i
    }

    function h(t) {
      let e = t.chart.options.plotOptions;
      return hd(n(n(e?.series?.dataLabels, e?.[t.type]?.dataLabels), t.options.dataLabels))
    }

    function l(t, e, i, s, o) {
      let r = this.chart,
        a = r.inverted,
        n = this.xAxis,
        h = n.reversed,
        l = ((a ? e.height : e.width) || 0) / 2,
        d = t.pointWidth,
        c = d ? d / 2 : 0;
      e.startXPos = a ? o.x : h ? -l - c : n.width - l + c, e.startYPos = a ? h ? this.yAxis.height - l + c : -l - c : o.y, s ? "hidden" === e.visibility && (e.show(), e.attr({
        opacity: 0
      }).animate({
        opacity: 1
      })) : e.attr({
        opacity: 1
      }).animate({
        opacity: 0
      }, void 0, e.hide), r.hasRendered && (i && e.attr({
        x: e.startXPos,
        y: e.startYPos
      }), e.placed = !0)
    }
    t.compose = function (t) {
      let n = t.prototype;
      n.initDataLabels || (n.initDataLabels = o, n.initDataLabelsGroup = s, n.alignDataLabel = i, n.drawDataLabels = r, n.justifyDataLabel = a, n.setDataLabelStartPos = l, n.hasDataLabels = e)
    }
  }(x || (x = {}));
  let hc = x,
    {
      composed: hp
    } = L,
    {
      series: hu
    } = rx,
    {
      merge: hg,
      pick: hf,
      pushUnique: hm
    } = ti;
  ! function (t) {
    function e(t, e, i, s, o) {
      let r = this.chart.inverted,
        a = t.series,
        n = (a.xAxis ? a.xAxis.len : this.chart.plotSizeX) || 0,
        h = (a.yAxis ? a.yAxis.len : this.chart.plotSizeY) || 0,
        l = t.dlBox || t.shapeArgs,
        d = hf(t.below, t.plotY > hf(this.translatedThreshold, h)),
        c = hf(i.inside, !!this.options.stacking);
      if (l) {
        if (s = hg(l), !("allow" === i.overflow && !1 === i.crop)) {
          s.y < 0 && (s.height += s.y, s.y = 0);
          let t = s.y + s.height - h;
          t > 0 && t < s.height - 1 && (s.height -= t)
        }
        r && (s = {
          x: h - s.y - s.height,
          y: n - s.x - s.width,
          width: s.height,
          height: s.width
        }), c || (r ? (s.x += d ? 0 : s.width, s.width = 0) : (s.y += d ? s.height : 0, s.height = 0))
      }
      i.align = hf(i.align, !r || c ? "center" : d ? "right" : "left"), i.verticalAlign = hf(i.verticalAlign, r || c ? "middle" : d ? "top" : "bottom"), hu.prototype.alignDataLabel.call(this, t, e, i, s, o), i.inside && t.contrastColor && e.css({
        color: t.contrastColor
      })
    }
    t.compose = function (t) {
      hc.compose(hu), hm(hp, "ColumnDataLabel") && (t.prototype.alignDataLabel = e)
    }
  }(y || (y = {}));
  let hx = y,
    {
      extend: hy,
      merge: hb
    } = ti;
  class hv extends n4 { }
  hv.defaultOptions = hb(n4.defaultOptions, {}), hy(hv.prototype, {
    inverted: !0
  }), rx.registerSeriesType("bar", hv);
  let {
    column: hk,
    line: hM
  } = rx.seriesTypes, {
    addEvent: hw,
    extend: hS,
    merge: hA
  } = ti;
  class hT extends hM {
    applyJitter() {
      let t = this,
        e = this.options.jitter,
        i = this.points.length;
      e && this.points.forEach(function (s, o) {
        ["x", "y"].forEach(function (r, a) {
          if (e[r] && !s.isNull) {
            let n = `plot${r.toUpperCase()}`,
              h = t[`${r}Axis`],
              l = e[r] * h.transA;
            if (h && !h.logarithmic) {
              let t = Math.max(0, (s[n] || 0) - l),
                e = Math.min(h.len, (s[n] || 0) + l);
              s[n] = t + (e - t) * function (t) {
                let e = 1e4 * Math.sin(t);
                return e - Math.floor(e)
              }(o + a * i), "x" === r && (s.clientX = s.plotX)
            }
          }
        })
      })
    }
    drawGraph() {
      this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy())
    }
  }
  hT.defaultOptions = hA(hM.defaultOptions, {
    lineWidth: 0,
    findNearestPointBy: "xy",
    jitter: {
      x: 0,
      y: 0
    },
    marker: {
      enabled: !0
    },
    tooltip: {
      enabled: false
    }
  }), hS(hT.prototype, {
    drawTracker: hk.prototype.drawTracker,
    sorted: !1,
    requireSorting: !1,
    noSharedTooltip: !0,
    trackerGroups: ["group", "markerGroup", "dataLabelsGroup"]
  }), hw(hT, "afterTranslate", function () {
    this.applyJitter()
  }), rx.registerSeriesType("scatter", hT);
  let {
    deg2rad: hC
  } = L, {
    fireEvent: hP,
    isNumber: hO,
    pick: hE,
    relativeLength: hL
  } = ti;
  ! function (t) {
    t.getCenter = function () {
      let t = this.options,
        e = this.chart,
        i = 2 * (t.slicedOffset || 0),
        s = e.plotWidth - 2 * i,
        o = e.plotHeight - 2 * i,
        r = t.center,
        a = Math.min(s, o),
        n = t.thickness,
        h, l = t.size,
        d = t.innerSize || 0,
        c, p;
      "string" == typeof l && (l = parseFloat(l)), "string" == typeof d && (d = parseFloat(d));
      let u = [hE(r?.[0], "50%"), hE(r?.[1], "50%"), hE(l && l < 0 ? void 0 : t.size, "100%"), hE(d && d < 0 ? void 0 : t.innerSize || 0, "0%")];
      for (!e.angular || this instanceof rq || (u[3] = 0), c = 0; c < 4; ++c) p = u[c], h = c < 2 || 2 === c && /%$/.test(p), u[c] = hL(p, [s, o, a, u[2]][c]) + (h ? i : 0);
      return u[3] > u[2] && (u[3] = u[2]), hO(n) && 2 * n < u[2] && n > 0 && (u[3] = u[2] - 2 * n), hP(this, "afterGetCenter", {
        positions: u
      }), u
    }, t.getStartAndEndRadians = function (t, e) {
      let i = hO(t) ? t : 0,
        s = hO(e) && e > i && e - i < 360 ? e : i + 360;
      return {
        start: hC * (i + -90),
        end: hC * (s + -90)
      }
    }
  }(b || (b = {}));
  let hB = b,
    {
      setAnimation: hD
    } = tV,
    {
      addEvent: hI,
      defined: hz,
      extend: hR,
      isNumber: hN,
      pick: hW,
      relativeLength: hG
    } = ti;
  class hX extends o$ {
    getConnectorPath(t) {
      let e = t.dataLabelPosition,
        i = t.options || {},
        s = i.connectorShape,
        o = this.connectorShapes[s] || s;
      return e && o.call(this, {
        ...e.computed,
        alignment: e.alignment
      }, e.connectorPosition, i) || []
    }
    getTranslate() {
      return this.sliced && this.slicedTranslation || {
        translateX: 0,
        translateY: 0
      }
    }
    haloPath(t) {
      let e = this.shapeArgs;
      return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
        innerR: e.r - 1,
        start: e.start,
        end: e.end,
        borderRadius: e.borderRadius
      })
    }
    constructor(t, e, i) {
      super(t, e, i), this.half = 0, this.name ?? (this.name = "Slice");
      let s = t => {
        this.slice("select" === t.type)
      };
      hI(this, "select", s), hI(this, "unselect", s)
    }
    isValid() {
      return hN(this.y) && this.y >= 0
    }
    setVisible(t, e = !0) {
      t !== this.visible && this.update({
        visible: t ?? !this.visible
      }, e, void 0, !1)
    }
    slice(t, e, i) {
      let s = this.series;
      hD(i, s.chart), e = hW(e, !0), this.sliced = this.options.sliced = t = hz(t) ? t : !this.sliced, s.options.data[s.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate())
    }
  }
  hR(hX.prototype, {
    connectorShapes: {
      fixedOffset: function (t, e, i) {
        let s = e.breakAt,
          o = e.touchingSliceAt,
          r = i.softConnector ? ["C", t.x + ("left" === t.alignment ? -5 : 5), t.y, 2 * s.x - o.x, 2 * s.y - o.y, s.x, s.y] : ["L", s.x, s.y];
        return [
          ["M", t.x, t.y], r, ["L", o.x, o.y]
        ]
      },
      straight: function (t, e) {
        let i = e.touchingSliceAt;
        return [
          ["M", t.x, t.y],
          ["L", i.x, i.y]
        ]
      },
      crookedLine: function (t, e, i) {
        let {
          angle: s = this.angle || 0,
          breakAt: o,
          touchingSliceAt: r
        } = e, {
          series: a
        } = this, [n, h, l] = a.center, d = l / 2, {
          plotLeft: c,
          plotWidth: p
        } = a.chart, u = "left" === t.alignment, {
          x: g,
          y: f
        } = t, m = o.x;
        if (i.crookDistance) {
          let t = hG(i.crookDistance, 1);
          m = u ? n + d + (p + c - n - d) * (1 - t) : c + (n - d) * t
        } else m = n + (h - f) * Math.tan(s - Math.PI / 2);
        let x = [
          ["M", g, f]
        ];
        return (u ? m <= g && m >= o.x : m >= g && m <= o.x) && x.push(["L", m, f]), x.push(["L", o.x, o.y], ["L", r.x, r.y]), x
      }
    }
  });
  let {
    getStartAndEndRadians: hH
  } = hB, {
    noop: hF
  } = L, {
    clamp: hY,
    extend: hj,
    fireEvent: hU,
    merge: hV,
    pick: h_
  } = ti;
  class h$ extends rq {
    animate(t) {
      let e = this,
        i = e.points,
        s = e.startAngleRad;
      t || i.forEach(function (t) {
        let i = t.graphic,
          o = t.shapeArgs;
        i && o && (i.attr({
          r: h_(t.startR, e.center && e.center[3] / 2),
          start: s,
          end: s
        }), i.animate({
          r: o.r,
          start: o.start,
          end: o.end
        }, e.options.animation))
      })
    }
    drawEmpty() {
      let t, e;
      let i = this.startAngleRad,
        s = this.endAngleRad,
        o = this.options;
      0 === this.total && this.center ? (t = this.center[0], e = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t, e, this.center[1] / 2, 0, i, s).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({
        d: ii.arc(t, e, this.center[2] / 2, 0, {
          start: i,
          end: s,
          innerR: this.center[3] / 2
        })
      }), this.chart.styledMode || this.graph.attr({
        "stroke-width": o.borderWidth,
        fill: o.fillColor || "none",
        stroke: o.color || "#cccccc"
      })) : this.graph && (this.graph = this.graph.destroy())
    }
    drawPoints() {
      let t = this.chart.renderer;
      this.points.forEach(function (e) {
        e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()), e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0)
      })
    }
    generatePoints() {
      super.generatePoints(), this.updateTotals()
    }
    getX(t, e, i, s) {
      let o = this.center,
        r = this.radii ? this.radii[i.index] || 0 : o[2] / 2,
        a = s.dataLabelPosition,
        n = a?.distance || 0,
        h = Math.asin(hY((t - o[1]) / (r + n), -1, 1));
      return o[0] + Math.cos(h) * (r + n) * (e ? -1 : 1) + (n > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0)
    }
    hasData() {
      return !!this.dataTable.rowCount
    }
    redrawPoints() {
      let t, e, i, s;
      let o = this,
        r = o.chart;
      this.drawEmpty(), o.group && !r.styledMode && o.group.shadow(o.options.shadow), o.points.forEach(function (a) {
        let n = {};
        e = a.graphic, !a.isNull && e ? (s = a.shapeArgs, t = a.getTranslate(), r.styledMode || (i = o.pointAttribs(a, a.selected && "select")), a.delayedRendering ? (e.setRadialReference(o.center).attr(s).attr(t), r.styledMode || e.attr(i).attr({
          "stroke-linejoin": "round"
        }), a.delayedRendering = !1) : (e.setRadialReference(o.center), r.styledMode || hV(!0, n, i), hV(!0, n, s, t), e.animate(n)), e.attr({
          visibility: a.visible ? "inherit" : "hidden"
        }), e.addClass(a.getClassName(), !0)) : e && (a.graphic = e.destroy())
      })
    }
    sortByAngle(t, e) {
      t.sort(function (t, i) {
        return void 0 !== t.angle && (i.angle - t.angle) * e
      })
    }
    translate(t) {
      hU(this, "translate"), this.generatePoints();
      let e = this.options,
        i = e.slicedOffset,
        s = hH(e.startAngle, e.endAngle),
        o = this.startAngleRad = s.start,
        r = (this.endAngleRad = s.end) - o,
        a = this.points,
        n = e.ignoreHiddenPoint,
        h = a.length,
        l, d, c, p, u, g, f, m = 0;
      for (t || (this.center = t = this.getCenter()), g = 0; g < h; g++) {
        f = a[g], l = o + m * r, f.isValid() && (!n || f.visible) && (m += f.percentage / 100), d = o + m * r;
        let e = {
          x: t[0],
          y: t[1],
          r: t[2] / 2,
          innerR: t[3] / 2,
          start: Math.round(1e3 * l) / 1e3,
          end: Math.round(1e3 * d) / 1e3
        };
        f.shapeType = "arc", f.shapeArgs = e, (c = (d + l) / 2) > 1.5 * Math.PI ? c -= 2 * Math.PI : c < -Math.PI / 2 && (c += 2 * Math.PI), f.slicedTranslation = {
          translateX: Math.round(Math.cos(c) * i),
          translateY: Math.round(Math.sin(c) * i)
        }, p = Math.cos(c) * t[2] / 2, u = Math.sin(c) * t[2] / 2, f.tooltipPos = [t[0] + .7 * p, t[1] + .7 * u], f.half = c < -Math.PI / 2 || c > Math.PI / 2 ? 1 : 0, f.angle = c
      }
      hU(this, "afterTranslate")
    }
    updateTotals() {
      let t = this.points,
        e = t.length,
        i = this.options.ignoreHiddenPoint,
        s, o, r = 0;
      for (s = 0; s < e; s++)(o = t[s]).isValid() && (!i || o.visible) && (r += o.y);
      for (s = 0, this.total = r; s < e; s++)(o = t[s]).percentage = r > 0 && (o.visible || !i) ? o.y / r * 100 : 0, o.total = r
    }
  }
  h$.defaultOptions = hV(rq.defaultOptions, {
    borderRadius: 3,
    center: [null, null],
    clip: !1,
    colorByPoint: !0,
    dataLabels: {
      connectorPadding: 5,
      connectorShape: "crookedLine",
      crookDistance: void 0,
      distance: 30,
      enabled: !0,
      formatter: function () {
        return this.isNull ? void 0 : this.name
      },
      softConnector: !0,
      x: 0
    },
    fillColor: void 0,
    ignoreHiddenPoint: !0,
    inactiveOtherPoints: !0,
    legendType: "point",
    marker: null,
    size: null,
    showInLegend: !1,
    slicedOffset: 10,
    stickyTracking: !1,
    tooltip: {
      followPointer: !0
    },
    borderColor: "#ffffff",
    borderWidth: 1,
    lineWidth: void 0,
    states: {
      hover: {
        brightness: .1
      }
    }
  }), hj(h$.prototype, {
    axisTypes: [],
    directTouch: !0,
    drawGraph: void 0,
    drawTracker: n4.prototype.drawTracker,
    getCenter: hB.getCenter,
    getSymbol: hF,
    invertible: !1,
    isCartesian: !1,
    noSharedTooltip: !0,
    pointAttribs: n4.prototype.pointAttribs,
    pointClass: hX,
    requireSorting: !1,
    searchPoint: hF,
    trackerGroups: ["group", "dataLabelsGroup"]
  }), rx.registerSeriesType("pie", h$);
  let {
    composed: hZ,
    noop: hq
  } = L, {
    distribute: hK
  } = ex, {
    series: hJ
  } = rx, {
    arrayMax: hQ,
    clamp: h0,
    defined: h1,
    pick: h2,
    pushUnique: h3,
    relativeLength: h5
  } = ti;
  ! function (t) {
    let e = {
      radialDistributionY: function (t, e) {
        return (e.dataLabelPosition?.top || 0) + t.distributeBox.pos
      },
      radialDistributionX: function (t, e, i, s, o) {
        let r = o.dataLabelPosition;
        return t.getX(i < (r?.top || 0) + 2 || i > (r?.bottom || 0) - 2 ? s : i, e.half, e, o)
      },
      justify: function (t, e, i, s) {
        return s[0] + (t.half ? -1 : 1) * (i + (e.dataLabelPosition?.distance || 0))
      },
      alignToPlotEdges: function (t, e, i, s) {
        let o = t.getBBox().width;
        return e ? o + s : i - o - s
      },
      alignToConnectors: function (t, e, i, s) {
        let o = 0,
          r;
        return t.forEach(function (t) {
          (r = t.dataLabel.getBBox().width) > o && (o = r)
        }), e ? o + s : i - o - s
      }
    };

    function i(t, e) {
      let i = Math.PI / 2,
        {
          start: s = 0,
          end: o = 0
        } = t.shapeArgs || {},
        r = t.angle || 0;
      e > 0 && s < i && o > i && r > i / 2 && r < 1.5 * i && (r = r <= i ? Math.max(i / 2, (s + i) / 2) : Math.min(1.5 * i, (i + o) / 2));
      let {
        center: a,
        options: n
      } = this, h = a[2] / 2, l = Math.cos(r), d = Math.sin(r), c = a[0] + l * h, p = a[1] + d * h, u = Math.min((n.slicedOffset || 0) + (n.borderWidth || 0), e / 5);
      return {
        natural: {
          x: c + l * e,
          y: p + d * e
        },
        computed: {},
        alignment: e < 0 ? "center" : t.half ? "right" : "left",
        connectorPosition: {
          angle: r,
          breakAt: {
            x: c + l * u,
            y: p + d * u
          },
          touchingSliceAt: {
            x: c,
            y: p
          }
        },
        distance: e
      }
    }

    function s() {
      let t = this,
        e = t.points,
        i = t.chart,
        s = i.plotWidth,
        o = i.plotHeight,
        r = i.plotLeft,
        a = Math.round(i.chartWidth / 3),
        n = t.center,
        h = n[2] / 2,
        l = n[1],
        d = [
          [],
          []
        ],
        c = [0, 0, 0, 0],
        p = t.dataLabelPositioners,
        u, g, f, m = 0;
      t.visible && t.hasDataLabels?.() && (e.forEach(t => {
        (t.dataLabels || []).forEach(t => {
          t.shortened && (t.attr({
            width: "auto"
          }).css({
            width: "auto",
            textOverflow: "clip"
          }), t.shortened = !1)
        })
      }), hJ.prototype.drawDataLabels.apply(t), e.forEach(t => {
        (t.dataLabels || []).forEach((e, i) => {
          let s = n[2] / 2,
            o = e.options,
            r = h5(o?.distance || 0, s);
          0 === i && d[t.half].push(t), !h1(o?.style?.width) && e.getBBox().width > a && (e.css({
            width: Math.round(.7 * a) + "px"
          }), e.shortened = !0), e.dataLabelPosition = this.getDataLabelPosition(t, r), m = Math.max(m, r)
        })
      }), d.forEach((e, a) => {
        let d = e.length,
          u = [],
          x, y, b = 0,
          v;
        d && (t.sortByAngle(e, a - .5), m > 0 && (x = Math.max(0, l - h - m), y = Math.min(l + h + m, i.plotHeight), e.forEach(t => {
          (t.dataLabels || []).forEach(e => {
            let s = e.dataLabelPosition;
            s && s.distance > 0 && (s.top = Math.max(0, l - h - s.distance), s.bottom = Math.min(l + h + s.distance, i.plotHeight), b = e.getBBox().height || 21, e.lineHeight = i.renderer.fontMetrics(e.text || e).h + 2 * e.padding, t.distributeBox = {
              target: (e.dataLabelPosition?.natural.y || 0) - s.top + e.lineHeight / 2,
              size: b,
              rank: t.y
            }, u.push(t.distributeBox))
          })
        }), hK(u, v = y + b - x, v / 5)), e.forEach(i => {
          (i.dataLabels || []).forEach(l => {
            let d = l.options || {},
              m = i.distributeBox,
              x = l.dataLabelPosition,
              y = x?.natural.y || 0,
              b = d.connectorPadding || 0,
              v = l.lineHeight || 21,
              k = (v - l.getBBox().height) / 2,
              M = 0,
              w = y,
              S = "inherit";
            if (x) {
              if (u && h1(m) && x.distance > 0 && (void 0 === m.pos ? S = "hidden" : (f = m.size, w = p.radialDistributionY(i, l))), d.justify) M = p.justify(i, l, h, n);
              else switch (d.alignTo) {
                case "connectors":
                  M = p.alignToConnectors(e, a, s, r);
                  break;
                case "plotEdges":
                  M = p.alignToPlotEdges(l, a, s, r);
                  break;
                default:
                  M = p.radialDistributionX(t, i, w - k, y, l)
              }
              if (x.attribs = {
                visibility: S,
                align: x.alignment
              }, x.posAttribs = {
                x: M + (d.x || 0) + (({
                  left: b,
                  right: -b
                })[x.alignment] || 0),
                y: w + (d.y || 0) - v / 2
              }, x.computed.x = M, x.computed.y = w - k, h2(d.crop, !0)) {
                let t;
                M - (g = l.getBBox().width) < b && 1 === a ? (t = Math.round(g - M + b), c[3] = Math.max(t, c[3])) : M + g > s - b && 0 === a && (t = Math.round(M + g - s + b), c[1] = Math.max(t, c[1])), w - f / 2 < 0 ? c[0] = Math.max(Math.round(-w + f / 2), c[0]) : w + f / 2 > o && (c[2] = Math.max(Math.round(w + f / 2 - o), c[2])), x.sideOverflow = t
              }
            }
          })
        }))
      }), (0 === hQ(c) || this.verifyDataLabelOverflow(c)) && (this.placeDataLabels(), this.points.forEach(e => {
        (e.dataLabels || []).forEach(s => {
          let {
            connectorColor: o,
            connectorWidth: r = 1
          } = s.options || {}, a = s.dataLabelPosition;
          if (r) {
            let n;
            u = s.connector, a && a.distance > 0 ? (n = !u, u || (s.connector = u = i.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + e.colorIndex + (e.className ? " " + e.className : "")).add(t.dataLabelsGroup)), i.styledMode || u.attr({
              "stroke-width": r,
              stroke: o || e.color || "#666666"
            }), u[n ? "attr" : "animate"]({
              d: e.getConnectorPath(s)
            }), u.attr({
              visibility: a.attribs?.visibility
            })) : u && (s.connector = u.destroy())
          }
        })
      })))
    }

    function o() {
      this.points.forEach(t => {
        (t.dataLabels || []).forEach(t => {
          let e = t.dataLabelPosition;
          e ? (e.sideOverflow && (t.css({
            width: Math.max(t.getBBox().width - e.sideOverflow, 0) + "px",
            textOverflow: (t.options?.style || {}).textOverflow || "ellipsis"
          }), t.shortened = !0), t.attr(e.attribs), t[t.moved ? "animate" : "attr"](e.posAttribs), t.moved = !0) : t && t.attr({
            y: -9999
          })
        }), delete t.distributeBox
      }, this)
    }

    function r(t) {
      let e = this.center,
        i = this.options,
        s = i.center,
        o = i.minSize || 80,
        r = o,
        a = null !== i.size;
      return !a && (null !== s[0] ? r = Math.max(e[2] - Math.max(t[1], t[3]), o) : (r = Math.max(e[2] - t[1] - t[3], o), e[0] += (t[3] - t[1]) / 2), null !== s[1] ? r = h0(r, o, e[2] - Math.max(t[0], t[2])) : (r = h0(r, o, e[2] - t[0] - t[2]), e[1] += (t[0] - t[2]) / 2), r < e[2] ? (e[2] = r, e[3] = Math.min(i.thickness ? Math.max(0, r - 2 * i.thickness) : Math.max(0, h5(i.innerSize || 0, r)), r), this.translate(e), this.drawDataLabels && this.drawDataLabels()) : a = !0), a
    }
    t.compose = function (t) {
      if (hc.compose(hJ), h3(hZ, "PieDataLabel")) {
        let a = t.prototype;
        a.dataLabelPositioners = e, a.alignDataLabel = hq, a.drawDataLabels = s, a.getDataLabelPosition = i, a.placeDataLabels = o, a.verifyDataLabelOverflow = r
      }
    }
  }(v || (v = {}));
  let h6 = v;
  ! function (t) {
    t.getCenterOfPoints = function (t) {
      let e = t.reduce((t, e) => (t.x += e.x, t.y += e.y, t), {
        x: 0,
        y: 0
      });
      return {
        x: e.x / t.length,
        y: e.y / t.length
      }
    }, t.getDistanceBetweenPoints = function (t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }, t.getAngleBetweenPoints = function (t, e) {
      return Math.atan2(e.x - t.x, e.y - t.y)
    }, t.pointInPolygon = function ({
      x: t,
      y: e
    }, i) {
      let s = i.length,
        o, r, a = !1;
      for (o = 0, r = s - 1; o < s; r = o++) {
        let [s, n] = i[o], [h, l] = i[r];
        n > e != l > e && t < (h - s) * (e - n) / (l - n) + s && (a = !a)
      }
      return a
    }
  }(k || (k = {}));
  let {
    pointInPolygon: h9
  } = k, {
    addEvent: h4,
    fireEvent: h8,
    objectEach: h7,
    pick: lt
  } = ti;

  function le(t) {
    let e = t.length,
      i = (t, e) => !(e.x >= t.x + t.width || e.x + e.width <= t.x || e.y >= t.y + t.height || e.y + e.height <= t.y),
      s = (t, e) => {
        for (let i of t)
          if (h9({
            x: i[0],
            y: i[1]
          }, e)) return !0;
        return !1
      },
      o, r, a, n, h, l = !1;
    for (let i = 0; i < e; i++)(o = t[i]) && (o.oldOpacity = o.opacity, o.newOpacity = 1, o.absoluteBox = function (t) {
      if (t && (!t.alignAttr || t.placed)) {
        let e = t.box ? 0 : t.padding || 0,
          i = t.alignAttr || {
            x: t.attr("x"),
            y: t.attr("y")
          },
          s = t.getBBox();
        return t.width = s.width, t.height = s.height, {
          x: i.x + (t.parentGroup?.translateX || 0) + e,
          y: i.y + (t.parentGroup?.translateY || 0) + e,
          width: (t.width || 0) - 2 * e,
          height: (t.height || 0) - 2 * e,
          polygon: s?.polygon
        }
      }
    }(o));
    t.sort((t, e) => (e.labelrank || 0) - (t.labelrank || 0));
    for (let o = 0; o < e; ++o) {
      n = (r = t[o]) && r.absoluteBox;
      let l = n?.polygon;
      for (let d = o + 1; d < e; ++d) {
        h = (a = t[d]) && a.absoluteBox;
        let e = !1;
        if (n && h && r !== a && 0 !== r.newOpacity && 0 !== a.newOpacity && "hidden" !== r.visibility && "hidden" !== a.visibility) {
          let t = h.polygon;
          if (l && t && l !== t ? s(l, t) && (e = !0) : i(n, h) && (e = !0), e) {
            let t = r.labelrank < a.labelrank ? r : a,
              e = t.text;
            t.newOpacity = 0, e?.element.querySelector("textPath") && e.hide()
          }
        }
      }
    }
    for (let e of t) li(e, this) && (l = !0);
    l && h8(this, "afterHideAllOverlappingLabels")
  }

  function li(t, e) {
    let i, s, o = !1;
    return t && (s = t.newOpacity, t.oldOpacity !== s && (t.hasClass("highcharts-data-label") ? (t[s ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), i = function () {
      e.styledMode || t.css({
        pointerEvents: s ? "auto" : "none"
      })
    }, o = !0, t[t.isOld ? "animate" : "attr"]({
      opacity: s
    }, void 0, i), h8(e, "afterHideOverlappingLabel")) : t.attr({
      opacity: s
    })), t.isOld = !0), o
  }

  function ls() {
    let t = this,
      e = [];
    for (let i of t.labelCollectors || []) e = e.concat(i());
    for (let i of t.yAxis || []) i.stacking && i.options.stackLabels && !i.options.stackLabels.allowOverlap && h7(i.stacking.stacks, t => {
      h7(t, t => {
        t.label && e.push(t.label)
      })
    });
    for (let i of t.series || [])
      if (i.visible && i.hasDataLabels?.()) {
        let s = i => {
          for (let s of i) s.visible && (s.dataLabels || []).forEach(i => {
            let o = i.options || {};
            i.labelrank = lt(o.labelrank, s.labelrank, s.shapeArgs?.height), o.allowOverlap ?? Number(o.distance) > 0 ? (i.oldOpacity = i.opacity, i.newOpacity = 1, li(i, t)) : e.push(i)
          })
        };
        s(i.nodes || []), s(i.points)
      } this.hideOverlappingLabels(e)
  }
  let lo = {
    compose: function (t) {
      let e = t.prototype;
      e.hideOverlappingLabels || (e.hideOverlappingLabels = le, h4(t, "render", ls))
    }
  },
    {
      defaultOptions: lr
    } = tA,
    {
      noop: la
    } = L,
    {
      addEvent: ln,
      extend: lh,
      isObject: ll,
      merge: ld,
      relativeLength: lc
    } = ti,
    lp = {
      radius: 0,
      scope: "stack",
      where: void 0
    },
    lu = la,
    lg = la;

  function lf(t, e, i, s, o = {}) {
    let r = lu(t, e, i, s, o),
      {
        innerR: a = 0,
        r: n = i,
        start: h = 0,
        end: l = 0
      } = o;
    if (o.open || !o.borderRadius) return r;
    let d = l - h,
      c = Math.sin(d / 2),
      p = Math.max(Math.min(lc(o.borderRadius || 0, n - a), (n - a) / 2, n * c / (1 + c)), 0),
      u = Math.min(p, d / Math.PI * 2 * a),
      g = r.length - 1;
    for (; g--;) ! function (t, e, i) {
      let s, o, r;
      let a = t[e],
        n = t[e + 1];
      if ("Z" === n[0] && (n = t[0]), ("M" === a[0] || "L" === a[0]) && "A" === n[0] ? (s = a, o = n, r = !0) : "A" === a[0] && ("M" === n[0] || "L" === n[0]) && (s = n, o = a), s && o && o.params) {
        let a = o[1],
          n = o[5],
          h = o.params,
          {
            start: l,
            end: d,
            cx: c,
            cy: p
          } = h,
          u = n ? a - i : a + i,
          g = u ? Math.asin(i / u) : 0,
          f = n ? g : -g,
          m = Math.cos(g) * u;
        r ? (h.start = l + f, s[1] = c + m * Math.cos(l), s[2] = p + m * Math.sin(l), t.splice(e + 1, 0, ["A", i, i, 0, 0, 1, c + a * Math.cos(h.start), p + a * Math.sin(h.start)])) : (h.end = d - f, o[6] = c + a * Math.cos(h.end), o[7] = p + a * Math.sin(h.end), t.splice(e + 1, 0, ["A", i, i, 0, 0, 1, c + m * Math.cos(d), p + m * Math.sin(d)])), o[4] = Math.abs(h.end - h.start) < Math.PI ? 0 : 1
      }
    }(r, g, g > 1 ? u : p);
    return r
  }

  function lm() {
    if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
      let {
        options: t,
        yAxis: e
      } = this, i = "percent" === t.stacking, s = lr.plotOptions?.[this.type]?.borderRadius, o = lx(t.borderRadius, ll(s) ? s : {}), r = e.options.reversed;
      for (let s of this.points) {
        let {
          shapeArgs: a
        } = s;
        if ("roundedRect" === s.shapeType && a) {
          let {
            width: n = 0,
            height: h = 0,
            y: l = 0
          } = a, d = l, c = h;
          if ("stack" === o.scope && s.stackTotal) {
            let o = e.translate(i ? 100 : s.stackTotal, !1, !0, !1, !0),
              r = e.translate(t.threshold || 0, !1, !0, !1, !0),
              a = this.crispCol(0, Math.min(o, r), 0, Math.abs(o - r));
            d = a.y, c = a.height
          }
          let p = (s.negative ? -1 : 1) * (r ? -1 : 1) == -1,
            u = o.where;
          !u && this.is("waterfall") && Math.abs((s.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (u = "all"), u || (u = "end");
          let g = Math.min(lc(o.radius, n), n / 2, "all" === u ? h / 2 : 1 / 0) || 0;
          "end" === u && (p && (d -= g), c += g), lh(a, {
            brBoxHeight: c,
            brBoxY: d,
            r: g
          })
        }
      }
    }
  }

  function lx(t, e) {
    return ll(t) || (t = {
      radius: t || 0
    }), ld(lp, e, t)
  }

  function ly() {
    let t = lx(this.options.borderRadius);
    for (let e of this.points) {
      let i = e.shapeArgs;
      i && (i.borderRadius = lc(t.radius, (i.r || 0) - (i.innerR || 0)))
    }
  }

  function lb(t, e, i, s, o = {}) {
    let r = lg(t, e, i, s, o),
      {
        r: a = 0,
        brBoxHeight: n = s,
        brBoxY: h = e
      } = o,
      l = e - h,
      d = h + n - (e + s),
      c = l - a > -.1 ? 0 : a,
      p = d - a > -.1 ? 0 : a,
      u = Math.max(c && l, 0),
      g = Math.max(p && d, 0),
      f = [t + c, e],
      m = [t + i - c, e],
      x = [t + i, e + c],
      y = [t + i, e + s - p],
      b = [t + i - p, e + s],
      v = [t + p, e + s],
      k = [t, e + s - p],
      M = [t, e + c],
      w = (t, e) => Math.sqrt(Math.pow(t, 2) - Math.pow(e, 2));
    if (u) {
      let t = w(c, c - u);
      f[0] -= t, m[0] += t, x[1] = M[1] = e + c - u
    }
    if (s < c - u) {
      let o = w(c, c - u - s);
      x[0] = y[0] = t + i - c + o, b[0] = Math.min(x[0], b[0]), v[0] = Math.max(y[0], v[0]), k[0] = M[0] = t + c - o, x[1] = M[1] = e + s
    }
    if (g) {
      let t = w(p, p - g);
      b[0] += t, v[0] -= t, y[1] = k[1] = e + s - p + g
    }
    if (s < p - g) {
      let o = w(p, p - g - s);
      x[0] = y[0] = t + i - p + o, m[0] = Math.min(x[0], m[0]), f[0] = Math.max(y[0], f[0]), k[0] = M[0] = t + p - o, y[1] = k[1] = e
    }
    return r.length = 0, r.push(["M", ...f], ["L", ...m], ["A", c, c, 0, 0, 1, ...x], ["L", ...y], ["A", p, p, 0, 0, 1, ...b], ["L", ...v], ["A", p, p, 0, 0, 1, ...k], ["L", ...M], ["A", c, c, 0, 0, 1, ...f], ["Z"]), r
  }
  let {
    diffObjects: lv,
    extend: lk,
    find: lM,
    merge: lw,
    pick: lS,
    uniqueKey: lA
  } = ti;
  ! function (t) {
    function e(t, e) {
      let i = t.condition;
      (i.callback || function () {
        return this.chartWidth <= lS(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= lS(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= lS(i.minWidth, 0) && this.chartHeight >= lS(i.minHeight, 0)
      }).call(this) && e.push(t._id)
    }

    function i(t, e) {
      let i = this.options.responsive,
        s = this.currentResponsive,
        o = [],
        r;
      !e && i && i.rules && i.rules.forEach(t => {
        void 0 === t._id && (t._id = lA()), this.matchResponsiveRule(t, o)
      }, this);
      let a = lw(...o.map(t => lM((i || {}).rules || [], e => e._id === t)).map(t => t && t.chartOptions));
      a.isResponsiveOptions = !0, o = o.toString() || void 0;
      let n = s && s.ruleIds;
      o === n || (s && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(s.undoOptions, t, !0), this.updatingResponsive = !1), o ? ((r = lv(a, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = {
        ruleIds: o,
        mergedOptions: a,
        undoOptions: r
      }, this.updatingResponsive || this.update(a, t, !0)) : this.currentResponsive = void 0)
    }
    t.compose = function (t) {
      let s = t.prototype;
      return s.matchResponsiveRule || lk(s, {
        matchResponsiveRule: e,
        setResponsive: i
      }), t
    }
  }(M || (M = {}));
  let lT = M;
  L.AST = t9, L.Axis = sj, L.Chart = aq, L.Color = tE, L.DataLabel = hc, L.DataTableCore = rh, L.Fx = tz, L.HTMLElement = i3, L.Legend = al, L.LegendSymbol = rp, L.OverlappingDataLabels = L.OverlappingDataLabels || lo, L.PlotLineOrBand = oo, L.Point = o$, L.Pointer = rs, L.RendererRegistry = ep, L.Series = rq, L.SeriesRegistry = rx, L.StackItem = na, L.SVGElement = eK, L.SVGRenderer = ij, L.Templating = ec, L.Tick = su, L.Time = tb, L.Tooltip = oP, L.animate = tV.animate, L.animObject = tV.animObject, L.chart = aq.chart, L.color = tE.parse, L.dateFormat = ec.dateFormat, L.defaultOptions = tA.defaultOptions, L.distribute = ex.distribute, L.format = ec.format, L.getDeferredAnimation = tV.getDeferredAnimation, L.getOptions = tA.getOptions, L.numberFormat = ec.numberFormat, L.seriesType = rx.seriesType, L.setAnimation = tV.setAnimation, L.setOptions = tA.setOptions, L.stop = tV.stop, L.time = tA.defaultTime, L.timers = tz.timers, ({
    compose: function (t, e, i) {
      let s = t.types.pie;
      if (!e.symbolCustomAttribs.includes("borderRadius")) {
        let o = i.prototype.symbols;
        ln(t, "afterColumnTranslate", lm, {
          order: 9
        }), ln(s, "afterTranslate", ly), e.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), lu = o.arc, lg = o.roundedRect, o.arc = lf, o.roundedRect = lb
      }
    },
    optionsToObject: lx
  }).compose(L.Series, L.SVGElement, L.SVGRenderer), hx.compose(L.Series.types.column), hc.compose(L.Series), sZ.compose(L.Axis), i3.compose(L.SVGRenderer), al.compose(L.Chart), sQ.compose(L.Axis), lo.compose(L.Chart), h6.compose(L.Series.types.pie), oo.compose(L.Chart, L.Axis), rs.compose(L.Chart), lT.compose(L.Chart), a8.compose(L.Axis, L.Chart, L.Series), nT.compose(L.Axis, L.Chart, L.Series), oP.compose(L.Pointer), ti.extend(L, ti);
  let {
    tooltipFormatter: lC
  } = o$.prototype, {
    addEvent: lP,
    arrayMax: lO,
    arrayMin: lE,
    correctFloat: lL,
    defined: lB,
    isArray: lD,
    isNumber: lI,
    isString: lz,
    pick: lR
  } = ti;
  ! function (t) {
    function e(t, e, i) {
      !this.isXAxis && (this.series.forEach(function (i) {
        "compare" === t && "boolean" != typeof e ? i.setCompare(e, !1) : "cumulative" !== t || lz(e) || i.setCumulative(e, !1)
      }), lR(i, !0) && this.chart.redraw())
    }

    function i(t) {
      let e = this,
        {
          numberFormatter: i
        } = e.series.chart,
        s = function (s) {
          t = t.replace("{point." + s + "}", (e[s] > 0 && "change" === s ? "+" : "") + i(e[s], lR(e.series.tooltipOptions.changeDecimals, 2)))
        };
      return lB(e.change) && s("change"), lB(e.cumulativeSum) && s("cumulativeSum"), lC.apply(this, [t])
    }

    function s() {
      let t;
      let e = this.options.compare;
      ("percent" === e || "value" === e || this.options.cumulative) && (t = new d(this), "percent" === e || "value" === e ? t.initCompare(e) : t.initCumulative()), this.dataModify = t
    }

    function o(t) {
      let e = t.dataExtremes,
        i = e.activeYData;
      if (this.dataModify && e) {
        let t;
        this.options.compare ? t = [this.dataModify.modifyValue(e.dataMin), this.dataModify.modifyValue(e.dataMax)] : this.options.cumulative && lD(i) && i.length >= 2 && (t = d.getCumulativeExtremes(i)), t && (e.dataMin = lE(t), e.dataMax = lO(t))
      }
    }

    function r(t, e) {
      this.options.compare = this.userOptions.compare = t, this.update({}, lR(e, !0)), this.dataModify && ("value" === t || "percent" === t) ? this.dataModify.initCompare(t) : this.points.forEach(t => {
        delete t.change
      })
    }

    function a() {
      let t = this.getColumn(this.pointArrayMap && (this.options.pointValKey || this.pointValKey) || "y", !0);
      if (this.xAxis && t.length && this.dataModify) {
        let e = this.getColumn("x", !0),
          i = this.dataTable.rowCount,
          s = !0 === this.options.compareStart ? 0 : 1;
        for (let o = 0; o < i - s; o++) {
          let i = t[o];
          if (lI(i) && 0 !== i && e[o + s] >= (this.xAxis.min || 0)) {
            this.dataModify.compareValue = i;
            break
          }
        }
      }
    }

    function n(t, e) {
      this.setModifier("compare", t, e)
    }

    function h(t, e) {
      t = lR(t, !1), this.options.cumulative = this.userOptions.cumulative = t, this.update({}, lR(e, !0)), this.dataModify ? this.dataModify.initCumulative() : this.points.forEach(t => {
        delete t.cumulativeSum
      })
    }

    function l(t, e) {
      this.setModifier("cumulative", t, e)
    }
    t.compose = function (t, d, c) {
      let p = d.prototype,
        u = c.prototype,
        g = t.prototype;
      return g.setCompare || (g.setCompare = r, g.setCumulative = h, lP(t, "afterInit", s), lP(t, "afterGetExtremes", o), lP(t, "afterProcessData", a)), p.setCompare || (p.setCompare = n, p.setModifier = e, p.setCumulative = l, u.tooltipFormatter = i), t
    };
    class d {
      constructor(t) {
        this.series = t
      }
      modifyValue() {
        return 0
      }
      static getCumulativeExtremes(t) {
        let e = 1 / 0,
          i = -1 / 0;
        return t.reduce((t, s) => {
          let o = t + s;
          return e = Math.min(e, o, t), i = Math.max(i, o, t), o
        }), [e, i]
      }
      initCompare(t) {
        this.modifyValue = function (e, i) {
          null === e && (e = 0);
          let s = this.compareValue;
          if (void 0 !== e && void 0 !== s) {
            if ("value" === t ? e -= s : e = e / s * 100 - (100 === this.series.options.compareBase ? 0 : 100), void 0 !== i) {
              let t = this.series.points[i];
              t && (t.change = e)
            }
            return e
          }
          return 0
        }
      }
      initCumulative() {
        this.modifyValue = function (t, e) {
          if (null === t && (t = 0), void 0 !== t && void 0 !== e) {
            let i = e > 0 ? this.series.points[e - 1] : null;
            i && i.cumulativeSum && (t = lL(i.cumulativeSum + t));
            let s = this.series.points[e],
              o = s.series.options.cumulativeStart,
              r = s.x <= this.series.xAxis.max && s.x >= this.series.xAxis.min;
            return s && (!o || r ? s.cumulativeSum = t : s.cumulativeSum = void 0), t
          }
          return 0
        }
      }
    }
    t.Additions = d
  }(w || (w = {}));
  let lN = w,
    {
      isTouchDevice: lW
    } = L,
    {
      addEvent: lG,
      merge: lX,
      pick: lH
    } = ti,
    lF = [];

  function lY() {
    this.navigator && this.navigator.setBaseSeries(null, !1)
  }

  function lj() {
    let t, e, i;
    let s = this.legend,
      o = this.navigator;
    if (o) {
      t = s && s.options, e = o.xAxis, i = o.yAxis;
      let {
        scrollbarHeight: r,
        scrollButtonSize: a
      } = o;
      this.inverted ? (o.left = o.opposite ? this.chartWidth - r - o.height : this.spacing[3] + r, o.top = this.plotTop + a) : (o.left = lH(e.left, this.plotLeft + a), o.top = o.navigatorOptions.top || this.chartHeight - o.height - r - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (t && "bottom" === t.verticalAlign && "proximate" !== t.layout && t.enabled && !t.floating ? s.legendHeight + lH(t.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), e && i && (this.inverted ? e.options.left = i.options.left = o.left : e.options.top = i.options.top = o.top, e.setAxisSize(), i.setAxisSize())
    }
  }

  function lU(t) {
    !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new i(this), lH(t.redraw, !0) && this.redraw(t.animation))
  }

  function lV() {
    let t = this.options;
    (t.navigator.enabled || t.scrollbar.enabled) && (this.scroller = this.navigator = new i(this))
  }

  function l_() {
    let t = this.options,
      e = t.navigator,
      i = t.rangeSelector;
    if ((e && e.enabled || i && i.enabled) && (!lW && "x" === this.zooming.type || lW && "x" === this.zooming.pinchType)) return !1
  }

  function l$(t) {
    let e = t.navigator;
    if (e && t.xAxis[0]) {
      let i = t.xAxis[0].getExtremes();
      e.render(i.min, i.max)
    }
  }

  function lZ(t) {
    let e = t.options.navigator || {},
      i = t.options.scrollbar || {};
    !this.navigator && !this.scroller && (e.enabled || i.enabled) && (lX(!0, this.options.navigator, e), lX(!0, this.options.scrollbar, i), delete t.options.navigator, delete t.options.scrollbar)
  }
  let lq = {
    compose: function (t, e) {
      if (ti.pushUnique(lF, t)) {
        let s = t.prototype;
        i = e, s.callbacks.push(l$), lG(t, "afterAddSeries", lY), lG(t, "afterSetChartSize", lj), lG(t, "afterUpdate", lU), lG(t, "beforeRender", lV), lG(t, "beforeShowResetZoom", l_), lG(t, "update", lZ)
      }
    }
  },
    {
      isTouchDevice: lK
    } = L,
    {
      addEvent: lJ,
      correctFloat: lQ,
      defined: l0,
      isNumber: l1,
      pick: l2
    } = ti;

  function l3() {
    this.navigatorAxis || (this.navigatorAxis = new l6(this))
  }

  function l5(t) {
    let e;
    let i = this.chart,
      s = i.options,
      o = s.navigator,
      r = this.navigatorAxis,
      a = i.zooming.pinchType,
      n = s.rangeSelector,
      h = i.zooming.type;
    if (this.isXAxis && (o?.enabled || n?.enabled)) {
      if ("y" === h && "zoom" === t.trigger) e = !1;
      else if (("zoom" === t.trigger && "xy" === h || lK && "xy" === a) && this.options.range) {
        let e = r.previousZoom;
        l0(t.min) ? r.previousZoom = [this.min, this.max] : e && (t.min = e[0], t.max = e[1], r.previousZoom = void 0)
      }
    }
    void 0 !== e && t.preventDefault()
  }
  class l6 {
    static compose(t) {
      t.keepProps.includes("navigatorAxis") || (t.keepProps.push("navigatorAxis"), lJ(t, "init", l3), lJ(t, "setExtremes", l5))
    }
    constructor(t) {
      this.axis = t
    }
    destroy() {
      this.axis = void 0
    }
    toFixedRange(t, e, i, s) {
      let o = this.axis,
        r = (o.pointRange || 0) / 2,
        a = l2(i, o.translate(t, !0, !o.horiz)),
        n = l2(s, o.translate(e, !0, !o.horiz));
      return l0(i) || (a = lQ(a + r)), l0(s) || (n = lQ(n - r)), l1(a) && l1(n) || (a = n = void 0), {
        min: a,
        max: n
      }
    }
  }
  let {
    parse: l9
  } = tE, {
    seriesTypes: l4
  } = rx, l8 = {
    height: 40,
    margin: 25,
    maskInside: !0,
    handles: {
      width: 7,
      borderRadius: 0,
      height: 15,
      symbols: ["navigator-handle", "navigator-handle"],
      enabled: !0,
      lineWidth: 1,
      backgroundColor: "#f2f2f2",
      borderColor: "#999999"
    },
    maskFill: l9("#667aff").setOpacity(.3).get(),
    outlineColor: "#999999",
    outlineWidth: 1,
    series: {
      type: void 0 === l4.areaspline ? "line" : "areaspline",
      fillOpacity: .05,
      lineWidth: 1,
      compare: null,
      sonification: {
        enabled: !1
      },
      dataGrouping: {
        approximation: "average",
        enabled: !0,
        groupPixelWidth: 2,
        firstAnchor: "firstPoint",
        anchor: "middle",
        lastAnchor: "lastPoint",
        units: [
          ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
          ["second", [1, 2, 5, 10, 15, 30]],
          ["minute", [1, 2, 5, 10, 15, 30]],
          ["hour", [1, 2, 3, 4, 6, 8, 12]],
          ["day", [1, 2, 3, 4]],
          ["week", [1, 2, 3]],
          ["month", [1, 3, 6]],
          ["year", null]
        ]
      },
      dataLabels: {
        enabled: !1,
        zIndex: 2
      },
      id: "highcharts-navigator-series",
      className: "highcharts-navigator-series",
      lineColor: null,
      marker: {
        enabled: !1
      },
      threshold: null
    },
    xAxis: {
      className: "highcharts-navigator-xaxis",
      tickLength: 0,
      lineWidth: 0,
      gridLineColor: "#e6e6e6",
      id: "navigator-x-axis",
      gridLineWidth: 1,
      tickPixelInterval: 200,
      labels: {
        align: "left",
        style: {
          color: "#000000",
          fontSize: "0.7em",
          opacity: .6,
          textOutline: "2px contrast"
        },
        x: 3,
        y: -4
      },
      crosshair: !1
    },
    yAxis: {
      className: "highcharts-navigator-yaxis",
      gridLineWidth: 0,
      startOnTick: !1,
      endOnTick: !1,
      minPadding: .1,
      id: "navigator-y-axis",
      maxPadding: .1,
      labels: {
        enabled: !1
      },
      crosshair: !1,
      title: {
        text: null
      },
      tickLength: 0,
      tickWidth: 0
    }
  }, {
    relativeLength: l7
  } = ti, dt = {
    "navigator-handle": function (t, e, i, s, o = {}) {
      let r = o.width ? o.width / 2 : i,
        a = l7(o.borderRadius || 0, Math.min(2 * r, s));
      return [
        ["M", -1.5, (s = o.height || s) / 2 - 3.5],
        ["L", -1.5, s / 2 + 4.5],
        ["M", .5, s / 2 - 3.5],
        ["L", .5, s / 2 + 4.5], ...ii.rect(-r - 1, .5, 2 * r + 1, s, {
          r: a
        })
      ]
    }
  }, {
    defined: de
  } = ti, di = {
    setFixedRange: function (t) {
      let e = this.xAxis[0];
      de(e.dataMax) && de(e.dataMin) && t ? this.fixedRange = Math.min(t, e.dataMax - e.dataMin) : this.fixedRange = t
    }
  }, {
    setOptions: ds
  } = tA, {
    composed: dr
  } = L, {
    getRendererType: da
  } = ep, {
    setFixedRange: dn
  } = di, {
    addEvent: dh,
    extend: dl,
    pushUnique: dd
  } = ti;

  function dc() {
    this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1)
  }
  let dp = {
    compose: function (t, e, i) {
      l6.compose(e), dd(dr, "Navigator") && (t.prototype.setFixedRange = dn, dl(da().prototype.symbols, dt), dh(i, "afterUpdate", dc), ds({
        navigator: l8
      }))
    }
  },
    {
      composed: du
    } = L,
    {
      addEvent: dg,
      defined: df,
      pick: dm,
      pushUnique: dx
    } = ti;
  ! function (t) {
    let e;

    function i(t) {
      let e = dm(t.options && t.options.min, t.min),
        i = dm(t.options && t.options.max, t.max);
      return {
        axisMin: e,
        axisMax: i,
        scrollMin: df(t.dataMin) ? Math.min(e, t.min, t.dataMin, dm(t.threshold, 1 / 0)) : e,
        scrollMax: df(t.dataMax) ? Math.max(i, t.max, t.dataMax, dm(t.threshold, -1 / 0)) : i
      }
    }

    function s() {
      let t = this.scrollbar,
        e = t && !t.options.opposite,
        i = this.horiz ? 2 : e ? 3 : 1;
      t && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[i] += t.size + (t.options.margin || 0))
    }

    function o() {
      let t = this;
      t.options && t.options.scrollbar && t.options.scrollbar.enabled && (t.options.scrollbar.vertical = !t.horiz, t.options.startOnTick = t.options.endOnTick = !1, t.scrollbar = new e(t.chart.renderer, t.options.scrollbar, t.chart), dg(t.scrollbar, "changed", function (e) {
        let s, o;
        let {
          axisMin: r,
          axisMax: a,
          scrollMin: n,
          scrollMax: h
        } = i(t), l = h - n;
        if (df(r) && df(a)) {
          if (t.horiz && !t.reversed || !t.horiz && t.reversed ? (s = n + l * this.to, o = n + l * this.from) : (s = n + l * (1 - this.from), o = n + l * (1 - this.to)), this.shouldUpdateExtremes(e.DOMType)) {
            let i = "mousemove" !== e.DOMType && "touchmove" !== e.DOMType && void 0;
            t.setExtremes(o, s, !0, i, e)
          } else this.setRange(this.from, this.to)
        }
      }))
    }

    function r() {
      let t, e, s;
      let {
        scrollMin: o,
        scrollMax: r
      } = i(this), a = this.scrollbar, n = this.axisTitleMargin + (this.titleOffset || 0), h = this.chart.scrollbarsOffsets, l = this.options.margin || 0;
      if (a && h) {
        if (this.horiz) this.opposite || (h[1] += n), a.position(this.left, this.top + this.height + 2 + h[1] - (this.opposite ? l : 0), this.width, this.height), this.opposite || (h[1] += l), t = 1;
        else {
          let e;
          this.opposite && (h[0] += n), e = a.options.opposite ? this.left + this.width + 2 + h[0] - (this.opposite ? 0 : l) : this.opposite ? 0 : l, a.position(e, this.top, this.width, this.height), this.opposite && (h[0] += l), t = 0
        }
        if (h[t] += a.size + (a.options.margin || 0), isNaN(o) || isNaN(r) || !df(this.min) || !df(this.max) || this.dataMin === this.dataMax) a.setRange(0, 1);
        else if (this.min === this.max) {
          let t = this.pointRange / (this.dataMax + 1);
          e = t * this.min, s = t * (this.max + 1), a.setRange(e, s)
        } else e = (this.min - o) / (r - o), s = (this.max - o) / (r - o), this.horiz && !this.reversed || !this.horiz && this.reversed ? a.setRange(e, s) : a.setRange(1 - s, 1 - e)
      }
    }
    t.compose = function (t, i) {
      dx(du, "Axis.Scrollbar") && (e = i, dg(t, "afterGetOffset", s), dg(t, "afterInit", o), dg(t, "afterRender", r))
    }
  }(S || (S = {}));
  let dy = S,
    db = {
      height: 10,
      barBorderRadius: 5,
      buttonBorderRadius: 0,
      buttonsEnabled: !1,
      liveRedraw: void 0,
      margin: void 0,
      minWidth: 6,
      opposite: !0,
      step: .2,
      zIndex: 3,
      barBackgroundColor: "#cccccc",
      barBorderWidth: 0,
      barBorderColor: "#cccccc",
      buttonArrowColor: "#333333",
      buttonBackgroundColor: "#e6e6e6",
      buttonBorderColor: "#cccccc",
      buttonBorderWidth: 1,
      rifleColor: "none",
      trackBackgroundColor: "rgba(255, 255, 255, 0.001)",
      trackBorderColor: "#cccccc",
      trackBorderRadius: 5,
      trackBorderWidth: 1
    },
    {
      defaultOptions: dv
    } = tA,
    {
      addEvent: dk,
      correctFloat: dM,
      crisp: dw,
      defined: dS,
      destroyObjectProperties: dA,
      fireEvent: dT,
      merge: dC,
      pick: dP,
      removeEvent: dO
    } = ti;
  class dE {
    static compose(t) {
      dy.compose(t, dE)
    }
    static swapXY(t, e) {
      return e && t.forEach(t => {
        let e;
        let i = t.length;
        for (let s = 0; s < i; s += 2) "number" == typeof (e = t[s + 1]) && (t[s + 1] = t[s + 2], t[s + 2] = e)
      }), t
    }
    constructor(t, e, i) {
      this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(t, e, i)
    }
    addEvents() {
      let t = this.options.inverted ? [1, 0] : [0, 1],
        e = this.scrollbarButtons,
        i = this.scrollbarGroup.element,
        s = this.track.element,
        o = this.mouseDownHandler.bind(this),
        r = this.mouseMoveHandler.bind(this),
        a = this.mouseUpHandler.bind(this),
        n = [
          [e[t[0]].element, "click", this.buttonToMinClick.bind(this)],
          [e[t[1]].element, "click", this.buttonToMaxClick.bind(this)],
          [s, "click", this.trackClick.bind(this)],
          [i, "mousedown", o],
          [i.ownerDocument, "mousemove", r],
          [i.ownerDocument, "mouseup", a],
          [i, "touchstart", o],
          [i.ownerDocument, "touchmove", r],
          [i.ownerDocument, "touchend", a]
        ];
      n.forEach(function (t) {
        dk.apply(null, t)
      }), this._events = n
    }
    buttonToMaxClick(t) {
      let e = (this.to - this.from) * dP(this.options.step, .2);
      this.updatePosition(this.from + e, this.to + e), dT(this, "changed", {
        from: this.from,
        to: this.to,
        trigger: "scrollbar",
        DOMEvent: t
      })
    }
    buttonToMinClick(t) {
      let e = dM(this.to - this.from) * dP(this.options.step, .2);
      this.updatePosition(dM(this.from - e), dM(this.to - e)), dT(this, "changed", {
        from: this.from,
        to: this.to,
        trigger: "scrollbar",
        DOMEvent: t
      })
    }
    cursorToScrollbarPosition(t) {
      let e = this.options,
        i = e.minWidth > this.calculatedWidth ? e.minWidth : 0;
      return {
        chartX: (t.chartX - this.x - this.xOffset) / (this.barWidth - i),
        chartY: (t.chartY - this.y - this.yOffset) / (this.barWidth - i)
      }
    }
    destroy() {
      let t = this,
        e = t.chart.scroller;
      t.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function (e) {
        t[e] && t[e].destroy && (t[e] = t[e].destroy())
      }), e && t === e.scrollbar && (e.scrollbar = null, dA(e.scrollbarButtons))
    }
    drawScrollbarButton(t) {
      let e = this.renderer,
        i = this.scrollbarButtons,
        s = this.options,
        o = this.size,
        r = e.g().add(this.group);
      if (i.push(r), s.buttonsEnabled) {
        let a = e.rect().addClass("highcharts-scrollbar-button").add(r);
        this.chart.styledMode || a.attr({
          stroke: s.buttonBorderColor,
          "stroke-width": s.buttonBorderWidth,
          fill: s.buttonBackgroundColor
        }), a.attr(a.crisp({
          x: -.5,
          y: -.5,
          width: o,
          height: o,
          r: s.buttonBorderRadius
        }, a.strokeWidth()));
        let n = e.path(dE.swapXY([
          ["M", o / 2 + (t ? -1 : 1), o / 2 - 3],
          ["L", o / 2 + (t ? -1 : 1), o / 2 + 3],
          ["L", o / 2 + (t ? 2 : -2), o / 2]
        ], s.vertical)).addClass("highcharts-scrollbar-arrow").add(i[t]);
        this.chart.styledMode || n.attr({
          fill: s.buttonArrowColor
        })
      }
    }
    init(t, e, i) {
      this.scrollbarButtons = [], this.renderer = t, this.userOptions = e, this.options = dC(db, dv.scrollbar, e), this.options.margin = dP(this.options.margin, 10), this.chart = i, this.size = dP(this.options.size, this.options.height), e.enabled && (this.render(), this.addEvents())
    }
    mouseDownHandler(t) {
      let e = this.chart.pointer?.normalize(t) || t,
        i = this.cursorToScrollbarPosition(e);
      this.chartX = i.chartX, this.chartY = i.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = !0
    }
    mouseMoveHandler(t) {
      let e;
      let i = this.chart.pointer?.normalize(t) || t,
        s = this.options.vertical ? "chartY" : "chartX",
        o = this.initPositions || [];
      this.grabbedCenter && (!t.touches || 0 !== t.touches[0][s]) && (e = this.cursorToScrollbarPosition(i)[s] - this[s], this.hasDragged = !0, this.updatePosition(o[0] + e, o[1] + e), this.hasDragged && dT(this, "changed", {
        from: this.from,
        to: this.to,
        trigger: "scrollbar",
        DOMType: t.type,
        DOMEvent: t
      }))
    }
    mouseUpHandler(t) {
      this.hasDragged && dT(this, "changed", {
        from: this.from,
        to: this.to,
        trigger: "scrollbar",
        DOMType: t.type,
        DOMEvent: t
      }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null
    }
    position(t, e, i, s) {
      let {
        buttonsEnabled: o,
        margin: r = 0,
        vertical: a
      } = this.options, n = this.rendered ? "animate" : "attr", h = s, l = 0;
      this.group.show(), this.x = t, this.y = e + this.trackBorderWidth, this.width = i, this.height = s, this.xOffset = h, this.yOffset = l, a ? (this.width = this.yOffset = i = l = this.size, this.xOffset = h = 0, this.yOffset = l = o ? this.size : 0, this.barWidth = s - (o ? 2 * i : 0), this.x = t += r) : (this.height = s = this.size, this.xOffset = h = o ? this.size : 0, this.barWidth = i - (o ? 2 * s : 0), this.y = this.y + r), this.group[n]({
        translateX: t,
        translateY: this.y
      }), this.track[n]({
        width: i,
        height: s
      }), this.scrollbarButtons[1][n]({
        translateX: a ? 0 : i - h,
        translateY: a ? s - l : 0
      })
    }
    removeEvents() {
      this._events.forEach(function (t) {
        dO.apply(null, t)
      }), this._events.length = 0
    }
    render() {
      let t = this.renderer,
        e = this.options,
        i = this.size,
        s = this.chart.styledMode,
        o = t.g("scrollbar").attr({
          zIndex: e.zIndex
        }).hide().add();
      this.group = o, this.track = t.rect().addClass("highcharts-scrollbar-track").attr({
        r: e.trackBorderRadius || 0,
        height: i,
        width: i
      }).add(o), s || this.track.attr({
        fill: e.trackBackgroundColor,
        stroke: e.trackBorderColor,
        "stroke-width": e.trackBorderWidth
      });
      let r = this.trackBorderWidth = this.track.strokeWidth();
      this.track.attr({
        x: -dw(0, r),
        y: -dw(0, r)
      }), this.scrollbarGroup = t.g().add(o), this.scrollbar = t.rect().addClass("highcharts-scrollbar-thumb").attr({
        height: i - r,
        width: i - r,
        r: e.barBorderRadius || 0
      }).add(this.scrollbarGroup), this.scrollbarRifles = t.path(dE.swapXY([
        ["M", -3, i / 4],
        ["L", -3, 2 * i / 3],
        ["M", 0, i / 4],
        ["L", 0, 2 * i / 3],
        ["M", 3, i / 4],
        ["L", 3, 2 * i / 3]
      ], e.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), s || (this.scrollbar.attr({
        fill: e.barBackgroundColor,
        stroke: e.barBorderColor,
        "stroke-width": e.barBorderWidth
      }), this.scrollbarRifles.attr({
        stroke: e.rifleColor,
        "stroke-width": 1
      })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-dw(0, this.scrollbarStrokeWidth), -dw(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1)
    }
    setRange(t, e) {
      let i, s;
      let o = this.options,
        r = o.vertical,
        a = o.minWidth,
        n = this.barWidth,
        h = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
      if (!dS(n)) return;
      let l = n * Math.min(e, 1);
      i = Math.ceil(n * (t = Math.max(t, 0))), this.calculatedWidth = s = dM(l - i), s < a && (i = (n - a + s) * t, s = a);
      let d = Math.floor(i + this.xOffset + this.yOffset),
        c = s / 2 - .5;
      this.from = t, this.to = e, r ? (this.scrollbarGroup[h]({
        translateY: d
      }), this.scrollbar[h]({
        height: s
      }), this.scrollbarRifles[h]({
        translateY: c
      }), this.scrollbarTop = d, this.scrollbarLeft = 0) : (this.scrollbarGroup[h]({
        translateX: d
      }), this.scrollbar[h]({
        width: s
      }), this.scrollbarRifles[h]({
        translateX: c
      }), this.scrollbarLeft = d, this.scrollbarTop = 0), s <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), !1 === o.showFull && (t <= 0 && e >= 1 ? this.group.hide() : this.group.show()), this.rendered = !0
    }
    shouldUpdateExtremes(t) {
      return dP(this.options.liveRedraw, L.svg && !L.isTouchDevice && !this.chart.boosted) || "mouseup" === t || "touchend" === t || !dS(t)
    }
    trackClick(t) {
      let e = this.chart.pointer?.normalize(t) || t,
        i = this.to - this.from,
        s = this.y + this.scrollbarTop,
        o = this.x + this.scrollbarLeft;
      this.options.vertical && e.chartY > s || !this.options.vertical && e.chartX > o ? this.updatePosition(this.from + i, this.to + i) : this.updatePosition(this.from - i, this.to - i), dT(this, "changed", {
        from: this.from,
        to: this.to,
        trigger: "scrollbar",
        DOMEvent: t
      })
    }
    update(t) {
      this.destroy(), this.init(this.chart.renderer, dC(!0, this.options, t), this.chart)
    }
    updatePosition(t, e) {
      e > 1 && (t = dM(1 - dM(e - t)), e = 1), t < 0 && (e = dM(e - t), t = 0), this.from = t, this.to = e
    }
  }
  dE.defaultOptions = db, dv.scrollbar = dC(!0, dE.defaultOptions, dv.scrollbar);
  let {
    defaultOptions: dL
  } = tA, {
    isTouchDevice: dB
  } = L, {
    prototype: {
      symbols: dD
    }
  } = ij, {
    addEvent: dI,
    clamp: dz,
    correctFloat: dR,
    defined: dN,
    destroyObjectProperties: dW,
    erase: dG,
    extend: dX,
    find: dH,
    fireEvent: dF,
    isArray: dY,
    isNumber: dj,
    merge: dU,
    pick: dV,
    removeEvent: d_,
    splat: d$
  } = ti;

  function dZ(t, ...e) {
    let i = [].filter.call(e, dj);
    if (i.length) return Math[t].apply(0, i)
  }
  class dq {
    static compose(t, e, i) {
      lq.compose(t, dq), dp.compose(t, e, i)
    }
    constructor(t) {
      this.isDirty = !1, this.scrollbarHeight = 0, this.init(t)
    }
    drawHandle(t, e, i, s) {
      let o = this.navigatorOptions.handles.height;
      this.handles[e][s](i ? {
        translateX: Math.round(this.left + this.height / 2),
        translateY: Math.round(this.top + parseInt(t, 10) + .5 - o)
      } : {
        translateX: Math.round(this.left + parseInt(t, 10)),
        translateY: Math.round(this.top + this.height / 2 - o / 2 - 1)
      })
    }
    drawOutline(t, e, i, s) {
      let o = this.navigatorOptions.maskInside,
        r = this.outline.strokeWidth(),
        a = r / 2,
        n = r % 2 / 2,
        h = this.scrollButtonSize,
        l = this.size,
        d = this.top,
        c = this.height,
        p = d - a,
        u = d + c,
        g = this.left,
        f, m;
      i ? (f = d + e + n, e = d + t + n, m = [
        ["M", g + c, d - h - n],
        ["L", g + c, f],
        ["L", g, f],
        ["M", g, e],
        ["L", g + c, e],
        ["L", g + c, d + l + h]
      ], o && m.push(["M", g + c, f - a], ["L", g + c, e + a])) : (g -= h, t += g + h - n, e += g + h - n, m = [
        ["M", g, p],
        ["L", t, p],
        ["L", t, u],
        ["M", e, u],
        ["L", e, p],
        ["L", g + l + 2 * h, p]
      ], o && m.push(["M", t - a, p], ["L", e + a, p])), this.outline[s]({
        d: m
      })
    }
    drawMasks(t, e, i, s) {
      let o, r, a, n;
      let h = this.left,
        l = this.top,
        d = this.height;
      i ? (a = [h, h, h], n = [l, l + t, l + e], r = [d, d, d], o = [t, e - t, this.size - e]) : (a = [h, h + t, h + e], n = [l, l, l], r = [t, e - t, this.size - e], o = [d, d, d]), this.shades.forEach((t, e) => {
        t[s]({
          x: a[e],
          y: n[e],
          width: r[e],
          height: o[e]
        })
      })
    }
    renderElements() {
      let t = this,
        e = t.navigatorOptions,
        i = e.maskInside,
        s = t.chart,
        o = s.inverted,
        r = s.renderer,
        a = {
          cursor: o ? "ns-resize" : "ew-resize"
        },
        n = t.navigatorGroup ?? (t.navigatorGroup = r.g("navigator").attr({
          zIndex: 8,
          visibility: "hidden"
        }).add());
      if ([!i, i, !i].forEach((i, o) => {
        let h = t.shades[o] ?? (t.shades[o] = r.rect().addClass("highcharts-navigator-mask" + (1 === o ? "-inside" : "-outside")).add(n));
        s.styledMode || (h.attr({
          fill: i ? e.maskFill : "rgba(0,0,0,0)"
        }), 1 === o && h.css(a))
      }), t.outline || (t.outline = r.path().addClass("highcharts-navigator-outline").add(n)), s.styledMode || t.outline.attr({
        "stroke-width": e.outlineWidth,
        stroke: e.outlineColor
      }), e.handles?.enabled) {
        let i = e.handles,
          {
            height: o,
            width: h
          } = i;
        [0, 1].forEach(e => {
          let l = i.symbols[e];
          if (t.handles[e] && t.handles[e].symbolUrl === l) {
            if (!t.handles[e].isImg && t.handles[e].symbolName !== l) {
              let i = dD[l].call(dD, -h / 2 - 1, 0, h, o);
              t.handles[e].attr({
                d: i
              }), t.handles[e].symbolName = l
            }
          } else t.handles[e]?.destroy(), t.handles[e] = r.symbol(l, -h / 2 - 1, 0, h, o, i), t.handles[e].attr({
            zIndex: 7 - e
          }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][e]).add(n), t.addMouseEvents();
          s.inverted && t.handles[e].attr({
            rotation: 90,
            rotationOriginX: Math.floor(-h / 2),
            rotationOriginY: (o + h) / 2
          }), s.styledMode || t.handles[e].attr({
            fill: i.backgroundColor,
            stroke: i.borderColor,
            "stroke-width": i.lineWidth,
            width: i.width,
            height: i.height,
            x: -h / 2 - 1,
            y: 0
          }).css(a)
        })
      }
    }
    update(t, e = !1) {
      let i = this.chart,
        s = i.options.chart.inverted !== i.scrollbar?.options.vertical;
      if (dU(!0, i.options.navigator, t), this.navigatorOptions = i.options.navigator || {}, this.setOpposite(), dN(t.enabled) || s) return this.destroy(), this.navigatorEnabled = t.enabled || this.navigatorEnabled, this.init(i);
      if (this.navigatorEnabled && (this.isDirty = !0, !1 === t.adaptToUpdatedData && this.baseSeries.forEach(t => {
        d_(t, "updatedData", this.updatedDataHandler)
      }, this), t.adaptToUpdatedData && this.baseSeries.forEach(t => {
        t.eventsToUnbind.push(dI(t, "updatedData", this.updatedDataHandler))
      }, this), (t.series || t.baseSeries) && this.setBaseSeries(void 0, !1), t.height || t.xAxis || t.yAxis)) {
        this.height = t.height ?? this.height;
        let e = this.getXAxisOffsets();
        this.xAxis.update({
          ...t.xAxis,
          offsets: e,
          [i.inverted ? "width" : "height"]: this.height,
          [i.inverted ? "height" : "width"]: void 0
        }, !1), this.yAxis.update({
          ...t.yAxis,
          [i.inverted ? "width" : "height"]: this.height
        }, !1)
      }
      e && i.redraw()
    }
    render(t, e, i, s) {
      let o = this.chart,
        r = this.xAxis,
        a = r.pointRange || 0,
        n = r.navigatorAxis.fake ? o.xAxis[0] : r,
        h = this.navigatorEnabled,
        l = this.rendered,
        d = o.inverted,
        c = o.xAxis[0].minRange,
        p = o.xAxis[0].options.maxRange,
        u = this.scrollButtonSize,
        g, f, m, x = this.scrollbarHeight,
        y, b;
      if (this.hasDragged && !dN(i)) return;
      if (this.isDirty && this.renderElements(), t = dR(t - a / 2), e = dR(e + a / 2), !dj(t) || !dj(e)) {
        if (!l) return;
        i = 0, s = dV(r.width, n.width)
      }
      this.left = dV(r.left, o.plotLeft + u + (d ? o.plotWidth : 0));
      let v = this.size = y = dV(r.len, (d ? o.plotHeight : o.plotWidth) - 2 * u);
      g = d ? x : y + 2 * u, i = dV(i, r.toPixels(t, !0)), s = dV(s, r.toPixels(e, !0)), dj(i) && Math.abs(i) !== 1 / 0 || (i = 0, s = g);
      let k = r.toValue(i, !0),
        M = r.toValue(s, !0),
        w = Math.abs(dR(M - k));
      w < c ? this.grabbedLeft ? i = r.toPixels(M - c - a, !0) : this.grabbedRight && (s = r.toPixels(k + c + a, !0)) : dN(p) && dR(w - a) > p && (this.grabbedLeft ? i = r.toPixels(M - p - a, !0) : this.grabbedRight && (s = r.toPixels(k + p + a, !0))), this.zoomedMax = dz(Math.max(i, s), 0, v), this.zoomedMin = dz(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(i, s), 0, v), this.range = this.zoomedMax - this.zoomedMin, v = Math.round(this.zoomedMax);
      let S = Math.round(this.zoomedMin);
      h && (this.navigatorGroup.attr({
        visibility: "inherit"
      }), b = l && !this.hasDragged ? "animate" : "attr", this.drawMasks(S, v, d, b), this.drawOutline(S, v, d, b), this.navigatorOptions.handles.enabled && (this.drawHandle(S, 0, d, b), this.drawHandle(v, 1, d, b))), this.scrollbar && (d ? (m = this.top - u, f = this.left - x + (h || !n.opposite ? 0 : (n.titleOffset || 0) + n.axisTitleMargin), x = y + 2 * u) : (m = this.top + (h ? this.height : -x), f = this.left - u), this.scrollbar.position(f, m, g, x), this.scrollbar.setRange(this.zoomedMin / (y || 1), this.zoomedMax / (y || 1))), this.rendered = !0, this.isDirty = !1, dF(this, "afterRender")
    }
    addMouseEvents() {
      let t = this,
        e = t.chart,
        i = e.container,
        s = [],
        o, r;
      t.mouseMoveHandler = o = function (e) {
        t.onMouseMove(e)
      }, t.mouseUpHandler = r = function (e) {
        t.onMouseUp(e)
      }, (s = t.getPartsEvents("mousedown")).push(dI(e.renderTo, "mousemove", o), dI(i.ownerDocument, "mouseup", r), dI(e.renderTo, "touchmove", o), dI(i.ownerDocument, "touchend", r)), s.concat(t.getPartsEvents("touchstart")), t.eventsToUnbind = s, t.series && t.series[0] && s.push(dI(t.series[0].xAxis, "foundExtremes", function () {
        e.navigator.modifyNavigatorAxisExtremes()
      }))
    }
    getPartsEvents(t) {
      let e = this,
        i = [];
      return ["shades", "handles"].forEach(function (s) {
        e[s].forEach(function (o, r) {
          i.push(dI(o.element, t, function (t) {
            e[s + "Mousedown"](t, r)
          }))
        })
      }), i
    }
    shadesMousedown(t, e) {
      t = this.chart.pointer?.normalize(t) || t;
      let i = this.chart,
        s = this.xAxis,
        o = this.zoomedMin,
        r = this.size,
        a = this.range,
        n = this.left,
        h = t.chartX,
        l, d, c, p;
      i.inverted && (h = t.chartY, n = this.top), 1 === e ? (this.grabbedCenter = h, this.fixedWidth = a, this.dragOffset = h - o) : (p = h - n - a / 2, 0 === e ? p = Math.max(0, p) : 2 === e && p + a >= r && (p = r - a, this.reversedExtremes ? (p -= a, d = this.getUnionExtremes().dataMin) : l = this.getUnionExtremes().dataMax), p !== o && (this.fixedWidth = a, dN((c = s.navigatorAxis.toFixedRange(p, p + a, d, l)).min) && dF(this, "setRange", {
        min: Math.min(c.min, c.max),
        max: Math.max(c.min, c.max),
        redraw: !0,
        eventArguments: {
          trigger: "navigator"
        }
      })))
    }
    handlesMousedown(t, e) {
      t = this.chart.pointer?.normalize(t) || t;
      let i = this.chart,
        s = i.xAxis[0],
        o = this.reversedExtremes;
      0 === e ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = o ? s.min : s.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = o ? s.max : s.min), i.setFixedRange(void 0)
    }
    onMouseMove(t) {
      let e = this,
        i = e.chart,
        s = e.navigatorSize,
        o = e.range,
        r = e.dragOffset,
        a = i.inverted,
        n = e.left,
        h;
      (!t.touches || 0 !== t.touches[0].pageX) && (h = (t = i.pointer?.normalize(t) || t).chartX, a && (n = e.top, h = t.chartY), e.grabbedLeft ? (e.hasDragged = !0, e.render(0, 0, h - n, e.otherHandlePos)) : e.grabbedRight ? (e.hasDragged = !0, e.render(0, 0, e.otherHandlePos, h - n)) : e.grabbedCenter && (e.hasDragged = !0, h < r ? h = r : h > s + r - o && (h = s + r - o), e.render(0, 0, h - r, h - r + o)), e.hasDragged && e.scrollbar && dV(e.scrollbar.options.liveRedraw, !dB && !this.chart.boosted) && (t.DOMType = t.type, setTimeout(function () {
        e.onMouseUp(t)
      }, 0)))
    }
    onMouseUp(t) {
      let e, i, s, o, r, a;
      let n = this.chart,
        h = this.xAxis,
        l = this.scrollbar,
        d = t.DOMEvent || t,
        c = n.inverted,
        p = this.rendered && !this.hasDragged ? "animate" : "attr";
      (this.hasDragged && (!l || !l.hasDragged) || "scrollbar" === t.trigger) && (s = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? o = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (r = this.fixedExtreme), this.zoomedMax === this.size && (r = this.reversedExtremes ? s.dataMin : s.dataMax), 0 === this.zoomedMin && (o = this.reversedExtremes ? s.dataMax : s.dataMin), dN((a = h.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, o, r)).min) && dF(this, "setRange", {
        min: Math.min(a.min, a.max),
        max: Math.max(a.min, a.max),
        redraw: !0,
        animation: !this.hasDragged && null,
        eventArguments: {
          trigger: "navigator",
          triggerOp: "navigator-drag",
          DOMEvent: d
        }
      })), "mousemove" !== t.DOMType && "touchmove" !== t.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && dj(this.zoomedMin) && dj(this.zoomedMax) && (i = Math.round(this.zoomedMin), e = Math.round(this.zoomedMax), this.shades && this.drawMasks(i, e, c, p), this.outline && this.drawOutline(i, e, c, p), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(i, 0, c, p), this.drawHandle(e, 1, c, p)))
    }
    removeEvents() {
      this.eventsToUnbind && (this.eventsToUnbind.forEach(function (t) {
        t()
      }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents()
    }
    removeBaseSeriesEvents() {
      let t = this.baseSeries || [];
      this.navigatorEnabled && t[0] && (!1 !== this.navigatorOptions.adaptToUpdatedData && t.forEach(function (t) {
        d_(t, "updatedData", this.updatedDataHandler)
      }, this), t[0].xAxis && d_(t[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes))
    }
    getXAxisOffsets() {
      return this.chart.inverted ? [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] : [0, -this.scrollButtonSize, 0, this.scrollButtonSize]
    }
    init(t) {
      let e = t.options,
        i = e.navigator || {},
        s = i.enabled,
        o = e.scrollbar || {},
        r = o.enabled,
        a = s && i.height || 0,
        n = r && o.height || 0,
        h = o.buttonsEnabled && n || 0;
      this.handles = [], this.shades = [], this.chart = t, this.setBaseSeries(), this.height = a, this.scrollbarHeight = n, this.scrollButtonSize = h, this.scrollbarEnabled = r, this.navigatorEnabled = s, this.navigatorOptions = i, this.scrollbarOptions = o, this.setOpposite();
      let l = this,
        d = l.baseSeries,
        c = t.xAxis.length,
        p = t.yAxis.length,
        u = d && d[0] && d[0].xAxis || t.xAxis[0] || {
          options: {}
        };
      if (t.isDirtyBox = !0, l.navigatorEnabled) {
        let e = this.getXAxisOffsets();
        l.xAxis = new sj(t, dU({
          breaks: u.options.breaks,
          ordinal: u.options.ordinal,
          overscroll: u.options.overscroll
        }, i.xAxis, {
          type: "datetime",
          yAxis: i.yAxis?.id,
          index: c,
          isInternal: !0,
          offset: 0,
          keepOrdinalPadding: !0,
          startOnTick: !1,
          endOnTick: !1,
          minPadding: u.options.ordinal ? 0 : u.options.minPadding,
          maxPadding: u.options.ordinal ? 0 : u.options.maxPadding,
          zoomEnabled: !1
        }, t.inverted ? {
          offsets: e,
          width: a
        } : {
          offsets: e,
          height: a
        }), "xAxis"), l.yAxis = new sj(t, dU(i.yAxis, {
          alignTicks: !1,
          offset: 0,
          index: p,
          isInternal: !0,
          reversed: dV(i.yAxis && i.yAxis.reversed, t.yAxis[0] && t.yAxis[0].reversed, !1),
          zoomEnabled: !1
        }, t.inverted ? {
          width: a
        } : {
          height: a
        }), "yAxis"), d || i.series.data ? l.updateNavigatorSeries(!1) : 0 === t.series.length && (l.unbindRedraw = dI(t, "beforeRedraw", function () {
          t.series.length > 0 && !l.series && (l.setBaseSeries(), l.unbindRedraw())
        })), l.reversedExtremes = t.inverted && !l.xAxis.reversed || !t.inverted && l.xAxis.reversed, l.renderElements(), l.addMouseEvents()
      } else l.xAxis = {
        chart: t,
        navigatorAxis: {
          fake: !0
        },
        translate: function (e, i) {
          let s = t.xAxis[0],
            o = s.getExtremes(),
            r = s.len - 2 * h,
            a = dZ("min", s.options.min, o.dataMin),
            n = dZ("max", s.options.max, o.dataMax) - a;
          return i ? e * n / r + a : r * (e - a) / n
        },
        toPixels: function (t) {
          return this.translate(t)
        },
        toValue: function (t) {
          return this.translate(t, !0)
        }
      }, l.xAxis.navigatorAxis.axis = l.xAxis, l.xAxis.navigatorAxis.toFixedRange = l6.prototype.toFixedRange.bind(l.xAxis.navigatorAxis);
      if (t.options.scrollbar.enabled) {
        let e = dU(t.options.scrollbar, {
          vertical: t.inverted
        });
        !dj(e.margin) && l.navigatorEnabled && (e.margin = t.inverted ? -3 : 3), t.scrollbar = l.scrollbar = new dE(t.renderer, e, t), dI(l.scrollbar, "changed", function (t) {
          let e = l.size,
            i = e * this.to,
            s = e * this.from;
          l.hasDragged = l.scrollbar.hasDragged, l.render(0, 0, s, i), this.shouldUpdateExtremes(t.DOMType) && setTimeout(function () {
            l.onMouseUp(t)
          })
        })
      }
      l.addBaseSeriesEvents(), l.addChartEvents()
    }
    setOpposite() {
      let t = this.navigatorOptions,
        e = this.navigatorEnabled,
        i = this.chart;
      this.opposite = dV(t.opposite, !!(!e && i.inverted))
    }
    getUnionExtremes(t) {
      let e;
      let i = this.chart.xAxis[0],
        s = this.chart.time,
        o = this.xAxis,
        r = o.options,
        a = i.options;
      return t && null === i.dataMin || (e = {
        dataMin: dV(s.parse(r?.min), dZ("min", s.parse(a.min), i.dataMin, o.dataMin, o.min)),
        dataMax: dV(s.parse(r?.max), dZ("max", s.parse(a.max), i.dataMax, o.dataMax, o.max))
      }), e
    }
    setBaseSeries(t, e) {
      let i = this.chart,
        s = this.baseSeries = [];
      t = t || i.options && i.options.navigator.baseSeries || (i.series.length ? dH(i.series, t => !t.options.isInternal).index : 0), (i.series || []).forEach((e, i) => {
        !e.options.isInternal && (e.options.showInNavigator || (i === t || e.options.id === t) && !1 !== e.options.showInNavigator) && s.push(e)
      }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(!0, e)
    }
    updateNavigatorSeries(t, e) {
      let i = this,
        s = i.chart,
        o = i.baseSeries,
        r = {
          enableMouseTracking: !1,
          index: null,
          linkedTo: null,
          group: "nav",
          padXAxis: !1,
          xAxis: this.navigatorOptions.xAxis?.id,
          yAxis: this.navigatorOptions.yAxis?.id,
          showInLegend: !1,
          stacking: void 0,
          isInternal: !0,
          states: {
            inactive: {
              opacity: 1
            }
          }
        },
        a = i.series = (i.series || []).filter(t => {
          let e = t.baseSeries;
          return !(0 > o.indexOf(e)) || (e && (d_(e, "updatedData", i.updatedDataHandler), delete e.navigatorSeries), t.chart && t.destroy(), !1)
        }),
        n, h, l = i.navigatorOptions.series,
        d;
      o && o.length && o.forEach(t => {
        let c = t.navigatorSeries,
          p = dX({
            color: t.color,
            visible: t.visible
          }, dY(l) ? dL.navigator.series : l);
        if (c && !1 === i.navigatorOptions.adaptToUpdatedData) return;
        r.name = "Navigator " + o.length, d = (n = t.options || {}).navigatorOptions || {}, p.dataLabels = d$(p.dataLabels), (h = dU(n, r, p, d)).pointRange = dV(p.pointRange, d.pointRange, dL.plotOptions[h.type || "line"].pointRange);
        let u = d.data || p.data;
        i.hasNavigatorData = i.hasNavigatorData || !!u, h.data = u || n.data?.slice(0), c && c.options ? c.update(h, e) : (t.navigatorSeries = s.initSeries(h), s.setSortedData(), t.navigatorSeries.baseSeries = t, a.push(t.navigatorSeries))
      }), (l.data && !(o && o.length) || dY(l)) && (i.hasNavigatorData = !1, (l = d$(l)).forEach((t, e) => {
        r.name = "Navigator " + (a.length + 1), (h = dU(dL.navigator.series, {
          color: s.series[e] && !s.series[e].options.isInternal && s.series[e].color || s.options.colors[e] || s.options.colors[0]
        }, r, t)).data = t.data, h.data && (i.hasNavigatorData = !0, a.push(s.initSeries(h)))
      })), t && this.addBaseSeriesEvents()
    }
    addBaseSeriesEvents() {
      let t = this,
        e = t.baseSeries || [];
      e[0] && e[0].xAxis && e[0].eventsToUnbind.push(dI(e[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), e.forEach(i => {
        i.eventsToUnbind.push(dI(i, "show", function () {
          this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1)
        })), i.eventsToUnbind.push(dI(i, "hide", function () {
          this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1)
        })), !1 !== this.navigatorOptions.adaptToUpdatedData && i.xAxis && i.eventsToUnbind.push(dI(i, "updatedData", this.updatedDataHandler)), i.eventsToUnbind.push(dI(i, "remove", function () {
          e && dG(e, i), this.navigatorSeries && t.series && (dG(t.series, this.navigatorSeries), dN(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries)
        }))
      })
    }
    getBaseSeriesMin(t) {
      return this.baseSeries.reduce(function (t, e) {
        return Math.min(t, e.getColumn("x")[0] ?? t)
      }, t)
    }
    modifyNavigatorAxisExtremes() {
      let t = this.xAxis;
      if (void 0 !== t.getExtremes) {
        let e = this.getUnionExtremes(!0);
        e && (e.dataMin !== t.min || e.dataMax !== t.max) && (t.min = e.dataMin, t.max = e.dataMax)
      }
    }
    modifyBaseAxisExtremes() {
      let t, e;
      let i = this.chart.navigator,
        s = this.getExtremes(),
        o = s.min,
        r = s.max,
        a = s.dataMin,
        n = s.dataMax,
        h = r - o,
        l = i.stickToMin,
        d = i.stickToMax,
        c = dV(this.ordinal?.convertOverscroll(this.options.overscroll), 0),
        p = i.series && i.series[0],
        u = !!this.setExtremes;
      !(this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger) && (l && (t = (e = a) + h), d && (t = n + c, l || (e = Math.max(a, t - h, i.getBaseSeriesMin(p && p.xData ? p.xData[0] : -Number.MAX_VALUE)))), u && (l || d) && dj(e) && (this.min = this.userMin = e, this.max = this.userMax = t)), i.stickToMin = i.stickToMax = null
    }
    updatedDataHandler() {
      let t = this.chart.navigator,
        e = this.navigatorSeries,
        i = t.reversedExtremes ? 0 === Math.round(t.zoomedMin) : Math.round(t.zoomedMax) >= Math.round(t.size);
      t.stickToMax = dV(this.chart.options.navigator && this.chart.options.navigator.stickToMax, i), t.stickToMin = t.shouldStickToMin(this, t), e && !t.hasNavigatorData && (e.options.pointStart = this.getColumn("x")[0], e.setData(this.options.data, !1, null, !1))
    }
    shouldStickToMin(t, e) {
      let i = e.getBaseSeriesMin(t.getColumn("x")[0]),
        s = t.xAxis,
        o = s.max,
        r = s.min,
        a = s.options.range;
      return !!(dj(o) && dj(r)) && (a && o - i > 0 ? o - i < a : r <= i)
    }
    addChartEvents() {
      this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(dI(this.chart, "redraw", function () {
        let t = this.navigator,
          e = t && (t.baseSeries && t.baseSeries[0] && t.baseSeries[0].xAxis || this.xAxis[0]);
        e && t.render(e.min, e.max)
      }), dI(this.chart, "getMargins", function () {
        let t = this.navigator,
          e = t.opposite ? "plotTop" : "marginBottom";
        this.inverted && (e = t.opposite ? "marginRight" : "plotLeft"), this[e] = (this[e] || 0) + (t.navigatorEnabled || !this.inverted ? t.height + t.scrollbarHeight : 0) + t.navigatorOptions.margin
      }), dI(dq, "setRange", function (t) {
        this.chart.xAxis[0].setExtremes(t.min, t.max, t.redraw, t.animation, t.eventArguments)
      }))
    }
    destroy() {
      this.removeEvents(), this.xAxis && (dG(this.chart.xAxis, this.xAxis), dG(this.chart.axes, this.xAxis)), this.yAxis && (dG(this.chart.yAxis, this.yAxis), dG(this.chart.axes, this.yAxis)), (this.series || []).forEach(t => {
        t.destroy && t.destroy()
      }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach(t => {
        this[t] && this[t].destroy && this[t].destroy(), this[t] = null
      }), [this.handles].forEach(t => {
        dW(t)
      }), this.navigatorEnabled = !1
    }
  }
  let {
    addEvent: dK,
    correctFloat: dJ,
    css: dQ,
    defined: d0,
    error: d1,
    isNumber: d2,
    pick: d3,
    timeUnits: d5,
    isString: d6
  } = ti;
  ! function (t) {
    function e(t, i, s, o, r = [], a = 0, n) {
      let h = {},
        l = this.options.tickPixelInterval,
        d = this.chart.time,
        c = [],
        p, u, g, f, m, x = 0,
        y = [],
        b = -Number.MAX_VALUE;
      if (!this.options.ordinal && !this.options.breaks || !r || r.length < 3 || void 0 === i) return d.getTimeTicks.apply(d, arguments);
      let v = r.length;
      for (p = 0; p < v; p++) {
        if (m = p && r[p - 1] > s, r[p] < i && (x = p), p === v - 1 || r[p + 1] - r[p] > 5 * a || m) {
          if (r[p] > b) {
            for (u = d.getTimeTicks(t, r[x], r[p], o); u.length && u[0] <= b;) u.shift();
            u.length && (b = u[u.length - 1]), c.push(y.length), y = y.concat(u)
          }
          x = p + 1
        }
        if (m) break
      }
      if (u) {
        if (f = u.info, n && f.unitRange <= d5.hour) {
          for (x = 1, p = y.length - 1; x < p; x++) d.dateFormat("%d", y[x]) !== d.dateFormat("%d", y[x - 1]) && (h[y[x]] = "day", g = !0);
          g && (h[y[0]] = "day"), f.higherRanks = h
        }
        f.segmentStarts = c, y.info = f
      } else d1(12, !1, this.chart);
      if (n && d0(l)) {
        let t = y.length,
          e = [],
          i = [],
          o, r, a, n, d, c = t;
        for (; c--;) r = this.translate(y[c]), a && (i[c] = a - r), e[c] = a = r;
        for (i.sort((t, e) => t - e), (n = i[Math.floor(i.length / 2)]) < .6 * l && (n = null), c = y[t - 1] > s ? t - 1 : t, a = void 0; c--;) d = Math.abs(a - (r = e[c])), a && d < .8 * l && (null === n || d < .8 * n) ? (h[y[c]] && !h[y[c + 1]] ? (o = c + 1, a = r) : o = c, y.splice(o, 1)) : a = r
      }
      return y
    }

    function i(t) {
      let e = this.ordinal.positions;
      if (!e) return t;
      let i = e.length - 1,
        s;
      return (t < 0 ? t = e[0] : t > i ? t = e[i] : (i = Math.floor(t), s = t - i), void 0 !== s && void 0 !== e[i]) ? e[i] + (s ? s * (e[i + 1] - e[i]) : 0) : t
    }

    function s(t) {
      let e = this.ordinal,
        i = this.old ? this.old.min : this.min,
        s = this.old ? this.old.transA : this.transA,
        o = e.getExtendedPositions();
      if (o?.length) {
        let r = dJ((t - i) * s + this.minPixelPadding),
          a = dJ(e.getIndexOfPoint(r, o)),
          n = dJ(a % 1);
        if (a >= 0 && a <= o.length - 1) {
          let t = o[Math.floor(a)],
            e = o[Math.ceil(a)];
          return o[Math.floor(a)] + n * (e - t)
        }
      }
      return t
    }

    function o(e, i) {
      let s = t.Additions.findIndexOf(e, i, !0);
      if (e[s] === i) return s;
      let o = (i - e[s]) / (e[s + 1] - e[s]);
      return s + o
    }

    function r() {
      this.ordinal || (this.ordinal = new t.Additions(this))
    }

    function a() {
      let {
        eventArgs: t,
        options: e
      } = this;
      if (this.isXAxis && d0(e.overscroll) && 0 !== e.overscroll && d2(this.max) && d2(this.min) && (this.options.ordinal && !this.ordinal.originalOrdinalRange && this.ordinal.getExtendedPositions(!1), this.max === this.dataMax && (t?.trigger !== "pan" || this.isInternal) && t?.trigger !== "navigator")) {
        let i = this.ordinal.convertOverscroll(e.overscroll);
        this.max += i, !this.isInternal && d0(this.userMin) && t?.trigger !== "mousewheel" && (this.min += i)
      }
    }

    function n() {
      this.horiz && !this.isDirty && (this.isDirty = this.isOrdinal && this.chart.navigator && !this.chart.navigator.adaptToUpdatedData)
    }

    function h() {
      this.ordinal && (this.ordinal.beforeSetTickPositions(), this.tickInterval = this.ordinal.postProcessTickInterval(this.tickInterval))
    }

    function l(t) {
      let e = this.xAxis[0],
        i = e.ordinal.convertOverscroll(e.options.overscroll),
        s = t.originalEvent.chartX,
        o = this.options.chart.panning,
        r = !1;
      if (o && "y" !== o.type && e.options.ordinal && e.series.length && (!t.touches || t.touches.length <= 1)) {
        let t, o;
        let a = this.mouseDownX,
          n = e.getExtremes(),
          h = n.dataMin,
          l = n.dataMax,
          d = n.min,
          c = n.max,
          p = this.hoverPoints,
          u = e.closestPointRange || e.ordinal && e.ordinal.overscrollPointsRange,
          g = Math.round((a - s) / (e.translationSlope * (e.ordinal.slope || u))),
          f = e.ordinal.getExtendedPositions(),
          m = {
            ordinal: {
              positions: f,
              extendedOrdinalPositions: f
            }
          },
          x = e.index2val,
          y = e.val2lin;
        if (d <= h && g < 0 || c + i >= l && g > 0) return;
        m.ordinal.positions ? Math.abs(g) > 1 && (p && p.forEach(function (t) {
          t.setState()
        }), l > (o = m.ordinal.positions)[o.length - 1] && o.push(l), this.setFixedRange(c - d), (t = e.navigatorAxis.toFixedRange(void 0, void 0, x.apply(m, [y.apply(m, [d, !0]) + g]), x.apply(m, [y.apply(m, [c, !0]) + g]))).min >= Math.min(o[0], d) && t.max <= Math.max(o[o.length - 1], c) + i && e.setExtremes(t.min, t.max, !0, !1, {
          trigger: "pan"
        }), this.mouseDownX = s, dQ(this.container, {
          cursor: "move"
        })) : r = !0
      } else r = !0;
      r || o && /y/.test(o.type) ? i && (e.max = e.dataMax + i) : t.preventDefault()
    }

    function d() {
      let t = this.xAxis;
      t && t.options.ordinal && (delete t.ordinal.index, delete t.ordinal.originalOrdinalRange)
    }

    function c(t, e) {
      let i;
      let s = this.ordinal,
        r = s.positions,
        a = s.slope,
        n;
      if (!r) return t;
      let h = r.length;
      if (r[0] <= t && r[h - 1] >= t) i = o(r, t);
      else {
        if (!((n = s.getExtendedPositions && s.getExtendedPositions()) && n.length)) return t;
        let h = n.length;
        a || (a = (n[h - 1] - n[0]) / h);
        let l = o(n, r[0]);
        if (t >= n[0] && t <= n[h - 1]) i = o(n, t) - l;
        else {
          if (!e) return t;
          i = t < n[0] ? -l - (n[0] - t) / a : (t - n[h - 1]) / a + h - l
        }
      }
      return e ? i : a * (i || 0) + s.offset
    }
    t.compose = function (t, o, p) {
      let u = t.prototype;
      return u.ordinal2lin || (u.getTimeTicks = e, u.index2val = i, u.lin2val = s, u.val2lin = c, u.ordinal2lin = u.val2lin, dK(t, "afterInit", r), dK(t, "foundExtremes", a), dK(t, "afterSetScale", n), dK(t, "initialAxisTranslation", h), dK(p, "pan", l), dK(p, "touchpan", l), dK(o, "updatedData", d)), t
    }, t.Additions = class {
      constructor(t) {
        this.index = {}, this.axis = t
      }
      beforeSetTickPositions() {
        let t = this.axis,
          e = t.ordinal,
          i = t.getExtremes(),
          s = i.min,
          o = i.max,
          r = t.brokenAxis?.hasBreaks,
          a = t.options.ordinal,
          n, h, l, d, c, p, u, g = [],
          f = Number.MAX_VALUE,
          m = !1,
          x = !1,
          y = !1;
        if (a || r) {
          let i = 0;
          if (t.series.forEach(function (t, e) {
            let s = t.getColumn("x", !0);
            if (h = [], e > 0 && "highcharts-navigator-series" !== t.options.id && s.length > 1 && (x = i !== s[1] - s[0]), i = s[1] - s[0], t.boosted && (y = t.boosted), t.reserveSpace() && (!1 !== t.takeOrdinalPosition || r) && (n = (g = g.concat(s)).length, g.sort(function (t, e) {
              return t - e
            }), f = Math.min(f, d3(t.closestPointRange, f)), n)) {
              for (e = 0; e < n - 1;) g[e] !== g[e + 1] && h.push(g[e + 1]), e++;
              h[0] !== g[0] && h.unshift(g[0]), g = h
            }
          }), t.ordinal.originalOrdinalRange || (t.ordinal.originalOrdinalRange = (g.length - 1) * f), x && y && (g.pop(), g.shift()), (n = g.length) > 2) {
            for (l = g[1] - g[0], u = n - 1; u-- && !m;) g[u + 1] - g[u] !== l && (m = !0);
            !t.options.keepOrdinalPadding && (g[0] - s > l || o - g[g.length - 1] > l) && (m = !0)
          } else t.options.overscroll && (2 === n ? f = g[1] - g[0] : 1 === n ? (f = t.ordinal.convertOverscroll(t.options.overscroll), g = [g[0], g[0] + f]) : f = e.overscrollPointsRange);
          m || t.forceOrdinal ? (t.options.overscroll && (e.overscrollPointsRange = f, g = g.concat(e.getOverscrollPositions())), e.positions = g, d = t.ordinal2lin(Math.max(s, g[0]), !0), c = Math.max(t.ordinal2lin(Math.min(o, g[g.length - 1]), !0), 1), e.slope = p = (o - s) / (c - d), e.offset = s - d * p) : (e.overscrollPointsRange = d3(t.closestPointRange, e.overscrollPointsRange), e.positions = t.ordinal.slope = e.offset = void 0)
        }
        t.isOrdinal = a && m, e.groupIntervalFactor = null
      }
      static findIndexOf(t, e, i) {
        let s = 0,
          o = t.length - 1,
          r;
        for (; s < o;) t[r = Math.ceil((s + o) / 2)] <= e ? s = r : o = r - 1;
        return t[s] === e ? s : i ? s : -1
      }
      getExtendedPositions(t = !0) {
        let e = this,
          i = e.axis,
          s = i.constructor.prototype,
          o = i.chart,
          r = i.series.reduce((t, e) => {
            let i = e.currentDataGrouping;
            return t + (i ? i.count + i.unitName : "raw")
          }, ""),
          a = t ? i.ordinal.convertOverscroll(i.options.overscroll) : 0,
          n = i.getExtremes(),
          h, l, d = e.index;
        return d || (d = e.index = {}), !d[r] && ((h = {
          series: [],
          chart: o,
          forceOrdinal: !1,
          getExtremes: function () {
            return {
              min: n.dataMin,
              max: n.dataMax + a
            }
          },
          applyGrouping: s.applyGrouping,
          getGroupPixelWidth: s.getGroupPixelWidth,
          getTimeTicks: s.getTimeTicks,
          options: {
            ordinal: !0
          },
          ordinal: {
            getGroupIntervalFactor: this.getGroupIntervalFactor
          },
          ordinal2lin: s.ordinal2lin,
          getIndexOfPoint: s.getIndexOfPoint,
          val2lin: s.val2lin
        }).ordinal.axis = h, i.series.forEach(i => {
          l = {
            xAxis: h,
            chart: o,
            groupPixelWidth: i.groupPixelWidth,
            destroyGroupedData: L.noop,
            getColumn: i.getColumn,
            applyGrouping: i.applyGrouping,
            getProcessedData: i.getProcessedData,
            reserveSpace: i.reserveSpace,
            visible: i.visible
          };
          let s = i.getColumn("x").concat(t ? e.getOverscrollPositions() : []);
          l.dataTable = new rh({
            columns: {
              x: s
            }
          }), l.options = {
            ...i.options,
            dataGrouping: i.currentDataGrouping ? {
              firstAnchor: i.options.dataGrouping?.firstAnchor,
              anchor: i.options.dataGrouping?.anchor,
              lastAnchor: i.options.dataGrouping?.firstAnchor,
              enabled: !0,
              forced: !0,
              approximation: "open",
              units: [
                [i.currentDataGrouping.unitName, [i.currentDataGrouping.count]]
              ]
            } : {
              enabled: !1
            }
          }, h.series.push(l), i.processData.apply(l)
        }), h.applyGrouping({
          hasExtremesChanged: !0
        }), l?.closestPointRange !== l?.basePointRange && l.currentDataGrouping && (h.forceOrdinal = !0), i.ordinal.beforeSetTickPositions.apply({
          axis: h
        }), !i.ordinal.originalOrdinalRange && h.ordinal.originalOrdinalRange && (i.ordinal.originalOrdinalRange = h.ordinal.originalOrdinalRange), h.ordinal.positions && (d[r] = h.ordinal.positions)), d[r]
      }
      getGroupIntervalFactor(t, e, i) {
        let s = i.getColumn("x", !0),
          o = s.length,
          r = [],
          a, n, h = this.groupIntervalFactor;
        if (!h) {
          for (n = 0; n < o - 1; n++) r[n] = s[n + 1] - s[n];
          r.sort(function (t, e) {
            return t - e
          }), a = r[Math.floor(o / 2)], t = Math.max(t, s[0]), e = Math.min(e, s[o - 1]), this.groupIntervalFactor = h = o * a / (e - t)
        }
        return h
      }
      getIndexOfPoint(t, e) {
        let i = this.axis,
          s = i.min,
          r = i.minPixelPadding;
        return o(e, s) + dJ((t - r) / (i.translationSlope * (this.slope || i.closestPointRange || this.overscrollPointsRange)))
      }
      getOverscrollPositions() {
        let t = this.axis,
          e = this.convertOverscroll(t.options.overscroll),
          i = this.overscrollPointsRange,
          s = [],
          o = t.dataMax;
        if (d0(i))
          for (; o < t.dataMax + e;) s.push(o += i);
        return s
      }
      postProcessTickInterval(t) {
        let e = this.axis,
          i = this.slope,
          s = e.closestPointRange;
        return i && s ? e.options.breaks ? s || t : t / (i / s) : t
      }
      convertOverscroll(t = 0) {
        let e = this,
          i = e.axis,
          s = function (t) {
            return d3(e.originalOrdinalRange, d0(i.dataMax) && d0(i.dataMin) ? i.dataMax - i.dataMin : 0) * t
          };
        if (d6(t)) {
          let e = parseInt(t, 10);
          if (/%$/.test(t)) return s(e / 100);
          if (/px/.test(t)) {
            let t = Math.min(e, .9 * i.len) / i.len;
            return s(t / (1 - t))
          }
          return 0
        }
        return t
      }
    }
  }(A || (A = {}));
  let d9 = A,
    d4 = {
      lang: {
        rangeSelectorZoom: "Zoom",
        rangeSelectorFrom: "",
        rangeSelectorTo: "→"
      },
      rangeSelector: {
        allButtonsEnabled: !1,
        buttons: [{
          type: "month",
          count: 1,
          text: "1m",
          title: "View 1 month"
        }, {
          type: "month",
          count: 3,
          text: "3m",
          title: "View 3 months"
        }, {
          type: "month",
          count: 6,
          text: "6m",
          title: "View 6 months"
        }, {
          type: "ytd",
          text: "YTD",
          title: "View year to date"
        }, {
          type: "year",
          count: 1,
          text: "1y",
          title: "View 1 year"
        }, {
          type: "all",
          text: "All",
          title: "View all"
        }],
        buttonSpacing: 5,
        dropdown: "responsive",
        enabled: void 0,
        verticalAlign: "top",
        buttonTheme: {
          width: 28,
          height: 18,
          padding: 2,
          zIndex: 7
        },
        floating: !1,
        x: 0,
        y: 0,
        height: void 0,
        inputBoxBorderColor: "none",
        inputBoxHeight: 17,
        inputBoxWidth: void 0,
        inputDateFormat: "%[ebY]",
        inputDateParser: void 0,
        inputEditDateFormat: "%Y-%m-%d",
        inputEnabled: !0,
        inputPosition: {
          align: "right",
          x: 0,
          y: 0
        },
        inputSpacing: 5,
        selected: void 0,
        buttonPosition: {
          align: "left",
          x: 0,
          y: 0
        },
        inputStyle: {
          color: "#334eff",
          cursor: "pointer",
          fontSize: "0.8em"
        },
        labelStyle: {
          color: "#666666",
          fontSize: "0.8em"
        }
      }
    },
    {
      defaultOptions: d8
    } = tA,
    {
      composed: d7
    } = L,
    {
      addEvent: ct,
      defined: ce,
      extend: ci,
      isNumber: cs,
      merge: co,
      pick: cr,
      pushUnique: ca
    } = ti,
    cn = [];

  function ch() {
    let t, e;
    let i = this.range,
      s = i.type,
      o = this.max,
      r = this.chart.time,
      a = function (t, e) {
        let i = r.toParts(t),
          o = i.slice();
        "year" === s ? o[0] += e : o[1] += e;
        let a = r.makeTime.apply(r, o),
          n = r.toParts(a);
        return "month" === s && i[1] === n[1] && 1 === Math.abs(e) && (o[0] = i[0], o[1] = i[1], o[2] = 0), (a = r.makeTime.apply(r, o)) - t
      };
    cs(i) ? (t = o - i, e = i) : i && (t = o + a(o, -(i.count || 1)), this.chart && this.chart.setFixedRange(o - t));
    let n = cr(this.dataMin, Number.MIN_VALUE);
    return cs(t) || (t = n), t <= n && (t = n, void 0 === e && (e = a(t, i.count)), this.newMax = Math.min(t + e, cr(this.dataMax, Number.MAX_VALUE))), cs(o) ? !cs(i) && i && i._offsetMin && (t += i._offsetMin) : t = void 0, t
  }

  function cl() {
    this.rangeSelector?.redrawElements()
  }

  function cd() {
    this.options.rangeSelector && this.options.rangeSelector.enabled && (this.rangeSelector = new s(this))
  }

  function cc() {
    let t = this.rangeSelector;
    if (t) {
      cs(t.deferredYTDClick) && (t.clickButton(t.deferredYTDClick), delete t.deferredYTDClick);
      let e = t.options.verticalAlign;
      t.options.floating || ("bottom" === e ? this.extraBottomMargin = !0 : "top" !== e || (this.extraTopMargin = !0))
    }
  }

  function cp() {
    let t;
    let e = this.rangeSelector;
    if (!e) return;
    let i = this.xAxis[0].getExtremes(),
      s = this.legend,
      o = e && e.options.verticalAlign;
    cs(i.min) && e.render(i.min, i.max), s.display && "top" === o && o === s.options.verticalAlign && (t = co(this.spacingBox), "vertical" === s.options.layout ? t.y = this.plotTop : t.y += e.getHeight(), s.group.placed = !1, s.align(t))
  }

  function cu() {
    for (let t = 0, e = cn.length; t < e; ++t) {
      let e = cn[t];
      if (e[0] === this) {
        e[1].forEach(t => t()), cn.splice(t, 1);
        return
      }
    }
  }

  function cg() {
    let t = this.rangeSelector;
    if (t?.options?.enabled) {
      let e = t.getHeight(),
        i = t.options.verticalAlign;
      t.options.floating || ("bottom" === i ? this.marginBottom += e : "middle" === i || (this.plotTop += e))
    }
  }

  function cf(t) {
    let e = t.options.rangeSelector,
      i = this.extraBottomMargin,
      o = this.extraTopMargin,
      r = this.rangeSelector;
    if (e && e.enabled && !ce(r) && this.options.rangeSelector && (this.options.rangeSelector.enabled = !0, this.rangeSelector = r = new s(this)), this.extraBottomMargin = !1, this.extraTopMargin = !1, r) {
      let t = e && e.verticalAlign || r.options && r.options.verticalAlign;
      r.options.floating || ("bottom" === t ? this.extraBottomMargin = !0 : "middle" === t || (this.extraTopMargin = !0)), (this.extraBottomMargin !== i || this.extraTopMargin !== o) && (this.isDirtyBox = !0)
    }
  }
  let cm = {
    compose: function (t, e, i) {
      if (s = i, ca(d7, "RangeSelector")) {
        let i = e.prototype;
        t.prototype.minFromRange = ch, ct(e, "afterGetContainer", cd), ct(e, "beforeRender", cc), ct(e, "destroy", cu), ct(e, "getMargins", cg), ct(e, "redraw", cp), ct(e, "update", cf), ct(e, "beforeRedraw", cl), i.callbacks.push(cp), ci(d8, {
          rangeSelector: d4.rangeSelector
        }), ci(d8.lang, d4.lang)
      }
    }
  },
    {
      defaultOptions: cx
    } = tA,
    {
      addEvent: cy,
      createElement: cb,
      css: cv,
      defined: ck,
      destroyObjectProperties: cM,
      diffObjects: cw,
      discardElement: cS,
      extend: cA,
      fireEvent: cT,
      isNumber: cC,
      isString: cP,
      merge: cO,
      objectEach: cE,
      pick: cL,
      splat: cB
    } = ti;

  function cD(t) {
    if (cP(t) ? -1 !== t.indexOf("%L") : t.fractionalSecondDigits) return "text";
    let e = cP(t) ? ["a", "A", "d", "e", "w", "b", "B", "m", "o", "y", "Y"].some(e => -1 !== t.indexOf("%" + e)) : t.dateStyle || t.day || t.month || t.year,
      i = cP(t) ? ["H", "k", "I", "l", "M", "S"].some(e => -1 !== t.indexOf("%" + e)) : t.timeStyle || t.hour || t.minute || t.second;
    return e && i ? "datetime-local" : e ? "date" : i ? "time" : "text"
  }
  class cI {
    static compose(t, e) {
      cm.compose(t, e, cI)
    }
    constructor(t) {
      this.isDirty = !1, this.buttonOptions = cI.prototype.defaultButtons, this.initialButtonGroupWidth = 0, this.init(t)
    }
    clickButton(t, e) {
      let i = this.chart,
        s = this.buttonOptions[t],
        o = i.xAxis[0],
        r = i.scroller && i.scroller.getUnionExtremes() || o || {},
        a = s.type,
        n = s.dataGrouping,
        h = r.dataMin,
        l = r.dataMax,
        d, c = cC(o?.max) ? Math.round(Math.min(o.max, l ?? o.max)) : void 0,
        p, u = s._range,
        g, f, m, x = !0;
      if (null !== h && null !== l) {
        if (this.setSelected(t), n && (this.forcedDataGrouping = !0, sj.prototype.setDataGrouping.call(o || {
          chart: this.chart
        }, n, !1), this.frozenStates = s.preserveDataGrouping), "month" === a || "year" === a) o ? (f = {
          range: s,
          max: c,
          chart: i,
          dataMin: h,
          dataMax: l
        }, d = o.minFromRange.call(f), cC(f.newMax) && (c = f.newMax), x = !1) : u = s;
        else if (u) cC(c) && (c = Math.min((d = Math.max(c - u, h)) + u, l), x = !1);
        else if ("ytd" === a) {
          if (o) !o.hasData() || cC(l) && cC(h) || (h = Number.MAX_VALUE, l = -Number.MAX_VALUE, i.series.forEach(t => {
            let e = t.getColumn("x");
            e.length && (h = Math.min(e[0], h), l = Math.max(e[e.length - 1], l))
          }), e = !1), cC(l) && cC(h) && (d = g = (m = this.getYTDExtremes(l, h)).min, c = m.max);
          else {
            this.deferredYTDClick = t;
            return
          }
        } else "all" === a && o && (i.navigator && i.navigator.baseSeries[0] && (i.navigator.baseSeries[0].xAxis.options.range = void 0), d = h, c = l);
        if (x && s._offsetMin && ck(d) && (d += s._offsetMin), s._offsetMax && ck(c) && (c += s._offsetMax), this.dropdown && (this.dropdown.selectedIndex = t + 1), o) cC(d) && cC(c) && (o.setExtremes(d, c, cL(e, !0), void 0, {
          trigger: "rangeSelectorButton",
          rangeSelectorButton: s
        }), i.setFixedRange(s._range));
        else {
          p = cB(i.options.xAxis || {})[0];
          let t = cy(i, "afterCreateAxes", function () {
            let t = i.xAxis[0];
            t.range = t.options.range = u, t.min = t.options.min = g
          });
          cy(i, "load", function () {
            let e = i.xAxis[0];
            i.setFixedRange(s._range), e.options.range = p.range, e.options.min = p.min, t()
          })
        }
        cT(this, "afterBtnClick")
      }
    }
    setSelected(t) {
      this.selected = this.options.selected = t
    }
    init(t) {
      let e = this,
        i = t.options.rangeSelector,
        s = i.buttons,
        o = i.selected,
        r = function () {
          let t = e.minInput,
            i = e.maxInput;
          t && t.blur && cT(t, "blur"), i && i.blur && cT(i, "blur")
        };
      e.chart = t, e.options = i, e.buttons = [], e.buttonOptions = s, this.eventsToUnbind = [], this.eventsToUnbind.push(cy(t.container, "mousedown", r)), this.eventsToUnbind.push(cy(t, "resize", r)), s.forEach(e.computeButtonRange), void 0 !== o && s[o] && this.clickButton(o, !1), this.eventsToUnbind.push(cy(t, "load", function () {
        t.xAxis && t.xAxis[0] && cy(t.xAxis[0], "setExtremes", function (i) {
          cC(this.max) && cC(this.min) && this.max - this.min !== t.fixedRange && "rangeSelectorButton" !== i.trigger && "updatedData" !== i.trigger && e.forcedDataGrouping && !e.frozenStates && this.setDataGrouping(!1, !1)
        })
      })), this.createElements()
    }
    updateButtonStates() {
      let t = this,
        e = this.chart,
        i = this.dropdown,
        s = this.dropdownLabel,
        o = e.xAxis[0],
        r = Math.round(o.max - o.min),
        a = !o.hasVisibleSeries,
        n = 24 * 36e5,
        h = e.scroller && e.scroller.getUnionExtremes() || o,
        l = h.dataMin,
        d = h.dataMax,
        c = t.getYTDExtremes(d, l),
        p = c.min,
        u = c.max,
        g = t.selected,
        f = t.options.allButtonsEnabled,
        m = Array(t.buttonOptions.length).fill(0),
        x = cC(g),
        y = t.buttons,
        b = !1,
        v = null;
      t.buttonOptions.forEach((e, i) => {
        let s = e._range,
          h = e.type,
          c = e.count || 1,
          y = e._offsetMax - e._offsetMin,
          k = i === g,
          M = s > d - l,
          w = s < o.minRange,
          S = !1,
          A = s === r;
        if (k && M && (b = !0), o.isOrdinal && o.ordinal?.positions && s && r < s) {
          let t = o.ordinal.positions,
            e = d9.Additions.findIndexOf(t, o.min, !0),
            i = Math.min(d9.Additions.findIndexOf(t, o.max, !0) + 1, t.length - 1);
          t[i] - t[e] > s && (A = !0)
        } else ("month" === h || "year" === h) && r + 36e5 >= ({
          month: 28,
          year: 365
        })[h] * n * c - y && r - 36e5 <= ({
          month: 31,
          year: 366
        })[h] * n * c + y ? A = !0 : "ytd" === h ? (A = u - p + y === r, S = !k) : "all" === h && (A = o.max - o.min >= d - l);
        let T = !f && !(b && "all" === h) && (M || w || a),
          C = b && "all" === h || !S && A || k && t.frozenStates;
        T ? m[i] = 3 : C && (!x || i === g) && (v = i)
      }), null !== v ? (m[v] = 2, t.setSelected(v)) : (t.setSelected(), s && (s.setState(0), s.attr({
        text: (cx.lang.rangeSelectorZoom || "") + " ▾"
      })));
      for (let e = 0; e < m.length; e++) {
        let o = m[e],
          r = y[e];
        if (r.state !== o && (r.setState(o), i)) {
          i.options[e + 1].disabled = 3 === o, 2 === o && (s && (s.setState(2), s.attr({
            text: t.buttonOptions[e].text + " ▾"
          })), i.selectedIndex = e + 1);
          let r = s.getBBox();
          cv(i, {
            width: `${r.width}px`,
            height: `${r.height}px`
          })
        }
      }
    }
    computeButtonRange(t) {
      let e = t.type,
        i = t.count || 1,
        s = {
          millisecond: 1,
          second: 1e3,
          minute: 6e4,
          hour: 36e5,
          day: 864e5,
          week: 6048e5
        };
      s[e] ? t._range = s[e] * i : ("month" === e || "year" === e) && (t._range = 24 * ({
        month: 30,
        year: 365
      })[e] * 36e5 * i), t._offsetMin = cL(t.offsetMin, 0), t._offsetMax = cL(t.offsetMax, 0), t._range += t._offsetMax - t._offsetMin
    }
    getInputValue(t) {
      let e = "min" === t ? this.minInput : this.maxInput,
        i = this.chart.options.rangeSelector,
        s = this.chart.time;
      return e ? ("text" === e.type && i.inputDateParser || this.defaultInputDateParser)(e.value, "UTC" === s.timezone, s) : 0
    }
    setInputValue(t, e) {
      let i = this.options,
        s = this.chart.time,
        o = "min" === t ? this.minInput : this.maxInput,
        r = "min" === t ? this.minDateBox : this.maxDateBox;
      if (o) {
        o.setAttribute("type", cD(i.inputDateFormat || "%e %b %Y"));
        let t = o.getAttribute("data-hc-time"),
          a = ck(t) ? Number(t) : void 0;
        if (ck(e)) {
          let t = a;
          ck(t) && o.setAttribute("data-hc-time-previous", t), o.setAttribute("data-hc-time", e), a = e
        }
        o.value = s.dateFormat(this.inputTypeFormats[o.type] || i.inputEditDateFormat, a), r && r.attr({
          text: s.dateFormat(i.inputDateFormat, a)
        })
      }
    }
    setInputExtremes(t, e, i) {
      let s = "min" === t ? this.minInput : this.maxInput;
      if (s) {
        let t = this.inputTypeFormats[s.type],
          o = this.chart.time;
        if (t) {
          let r = o.dateFormat(t, e);
          s.min !== r && (s.min = r);
          let a = o.dateFormat(t, i);
          s.max !== a && (s.max = a)
        }
      }
    }
    showInput(t) {
      let e = "min" === t ? this.minDateBox : this.maxDateBox,
        i = "min" === t ? this.minInput : this.maxInput;
      if (i && e && this.inputGroup) {
        let t = "text" === i.type,
          {
            translateX: s = 0,
            translateY: o = 0
          } = this.inputGroup,
          {
            x: r = 0,
            width: a = 0,
            height: n = 0
          } = e,
          {
            inputBoxWidth: h
          } = this.options;
        cv(i, {
          width: t ? a + (h ? -2 : 20) + "px" : "auto",
          height: n - 2 + "px",
          border: "2px solid silver"
        }), t && h ? cv(i, {
          left: s + r + "px",
          top: o + "px"
        }) : cv(i, {
          left: Math.min(Math.round(r + s - (i.offsetWidth - a) / 2), this.chart.chartWidth - i.offsetWidth) + "px",
          top: o - (i.offsetHeight - n) / 2 + "px"
        })
      }
    }
    hideInput(t) {
      let e = "min" === t ? this.minInput : this.maxInput;
      e && cv(e, {
        top: "-9999em",
        border: 0,
        width: "1px",
        height: "1px"
      })
    }
    defaultInputDateParser(t, e, i) {
      return i?.parse(t) || 0
    }
    drawInput(t) {
      let {
        chart: e,
        div: i,
        inputGroup: s
      } = this, o = this, r = e.renderer.style || {}, a = e.renderer, n = e.options.rangeSelector, h = cx.lang, l = "min" === t;

      function d(t) {
        let {
          maxInput: i,
          minInput: s
        } = o, r = e.xAxis[0], a = e.scroller?.getUnionExtremes() || r, n = a.dataMin, h = a.dataMax, d = e.xAxis[0].getExtremes()[t], c = o.getInputValue(t);
        cC(c) && c !== d && (l && i && cC(n) ? c > Number(i.getAttribute("data-hc-time")) ? c = void 0 : c < n && (c = n) : s && cC(h) && (c < Number(s.getAttribute("data-hc-time")) ? c = void 0 : c > h && (c = h)), void 0 !== c && r.setExtremes(l ? c : r.min, l ? r.max : c, void 0, void 0, {
          trigger: "rangeSelectorInput"
        }))
      }
      let c = h[l ? "rangeSelectorFrom" : "rangeSelectorTo"] || "",
        p = a.label(c, 0).addClass("highcharts-range-label").attr({
          padding: c ? 2 : 0,
          height: c ? n.inputBoxHeight : 0
        }).add(s),
        u = a.label("", 0).addClass("highcharts-range-input").attr({
          padding: 2,
          width: n.inputBoxWidth,
          height: n.inputBoxHeight,
          "text-align": "center"
        }).on("click", function () {
          o.showInput(t), o[t + "Input"].focus()
        });
      e.styledMode || u.attr({
        stroke: n.inputBoxBorderColor,
        "stroke-width": 1
      }), u.add(s);
      let g = cb("input", {
        name: t,
        className: "highcharts-range-selector"
      }, void 0, i);
      g.setAttribute("type", cD(n.inputDateFormat || "%e %b %Y")), e.styledMode || (p.css(cO(r, n.labelStyle)), u.css(cO({
        color: "#333333"
      }, r, n.inputStyle)), cv(g, cA({
        position: "absolute",
        border: 0,
        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        width: "1px",
        height: "1px",
        padding: 0,
        textAlign: "center",
        fontSize: r.fontSize,
        fontFamily: r.fontFamily,
        top: "-9999em"
      }, n.inputStyle))), g.onfocus = () => {
        o.showInput(t)
      }, g.onblur = () => {
        g === L.doc.activeElement && d(t), o.hideInput(t), o.setInputValue(t), g.blur()
      };
      let f = !1;
      return g.onchange = () => {
        f || (d(t), o.hideInput(t), g.blur())
      }, g.onkeypress = e => {
        13 === e.keyCode && d(t)
      }, g.onkeydown = e => {
        f = !0, ("ArrowUp" === e.key || "ArrowDown" === e.key || "Tab" === e.key) && d(t)
      }, g.onkeyup = () => {
        f = !1
      }, {
        dateBox: u,
        input: g,
        label: p
      }
    }
    getPosition() {
      let t = this.chart,
        e = t.options.rangeSelector,
        i = "top" === e.verticalAlign ? t.plotTop - t.axisOffset[0] : 0;
      return {
        buttonTop: i + e.buttonPosition.y,
        inputTop: i + e.inputPosition.y - 10
      }
    }
    getYTDExtremes(t, e) {
      let i = this.chart.time,
        s = i.toParts(t)[0];
      return {
        max: t,
        min: Math.max(e, i.makeTime(s, 0))
      }
    }
    createElements() {
      let t = this.chart,
        e = t.renderer,
        i = t.container,
        s = t.options,
        o = s.rangeSelector,
        r = o.inputEnabled,
        a = cL(s.chart.style?.zIndex, 0) + 1;
      !1 !== o.enabled && (this.group = e.g("range-selector-group").attr({
        zIndex: 7
      }).add(), this.div = cb("div", void 0, {
        position: "relative",
        height: 0,
        zIndex: a
      }), this.buttonOptions.length && this.renderButtons(), i.parentNode && i.parentNode.insertBefore(this.div, i), r && this.createInputs())
    }
    createInputs() {
      this.inputGroup = this.chart.renderer.g("input-group").add(this.group);
      let t = this.drawInput("min");
      this.minDateBox = t.dateBox, this.minLabel = t.label, this.minInput = t.input;
      let e = this.drawInput("max");
      this.maxDateBox = e.dateBox, this.maxLabel = e.label, this.maxInput = e.input
    }
    render(t, e) {
      if (!1 === this.options.enabled) return;
      let i = this.chart,
        s = i.options.rangeSelector;
      if (s.inputEnabled) {
        this.inputGroup || this.createInputs(), this.setInputValue("min", t), this.setInputValue("max", e), this.chart.styledMode || (this.maxLabel?.css(s.labelStyle), this.minLabel?.css(s.labelStyle));
        let o = i.scroller && i.scroller.getUnionExtremes() || i.xAxis[0] || {};
        if (ck(o.dataMin) && ck(o.dataMax)) {
          let t = i.xAxis[0].minRange || 0;
          this.setInputExtremes("min", o.dataMin, Math.min(o.dataMax, this.getInputValue("max")) - t), this.setInputExtremes("max", Math.max(o.dataMin, this.getInputValue("min")) + t, o.dataMax)
        }
        if (this.inputGroup) {
          let t = 0;
          [this.minLabel, this.minDateBox, this.maxLabel, this.maxDateBox].forEach(e => {
            if (e) {
              let {
                width: i
              } = e.getBBox();
              i && (e.attr({
                x: t
              }), t += i + s.inputSpacing)
            }
          })
        }
      } else this.inputGroup && (this.inputGroup.destroy(), delete this.inputGroup);
      !this.chart.styledMode && this.zoomText && this.zoomText.css(s.labelStyle), this.alignElements(), this.updateButtonStates()
    }
    renderButtons() {
      var t;
      let {
        chart: e,
        options: i
      } = this, s = cx.lang, o = e.renderer, r = cO(i.buttonTheme), a = r && r.states;
      delete r.width, delete r.states, this.buttonGroup = o.g("range-selector-buttons").add(this.group);
      let n = this.dropdown = cb("select", void 0, {
        position: "absolute",
        padding: 0,
        border: 0,
        cursor: "pointer",
        opacity: 1e-4
      }, this.div),
        h = e.userOptions.rangeSelector?.buttonTheme;
      this.dropdownLabel = o.button("", 0, 0, () => { }, cO(r, {
        "stroke-width": cL(r["stroke-width"], 0),
        width: "auto",
        paddingLeft: cL(i.buttonTheme.paddingLeft, h?.padding, 8),
        paddingRight: cL(i.buttonTheme.paddingRight, h?.padding, 8)
      }), a && a.hover, a && a.select, a && a.disabled).hide().add(this.group), cy(n, "touchstart", () => {
        n.style.fontSize = "16px"
      });
      let l = L.isMS ? "mouseover" : "mouseenter",
        d = L.isMS ? "mouseout" : "mouseleave";
      cy(n, l, () => {
        cT(this.dropdownLabel.element, l)
      }), cy(n, d, () => {
        cT(this.dropdownLabel.element, d)
      }), cy(n, "change", () => {
        cT(this.buttons[n.selectedIndex - 1].element, "click")
      }), this.zoomText = o.label(s.rangeSelectorZoom || "", 0).attr({
        padding: i.buttonTheme.padding,
        height: i.buttonTheme.height,
        paddingLeft: 0,
        paddingRight: 0
      }).add(this.buttonGroup), this.chart.styledMode || (this.zoomText.css(i.labelStyle), (t = i.buttonTheme)["stroke-width"] ?? (t["stroke-width"] = 0)), cb("option", {
        textContent: this.zoomText.textStr,
        disabled: !0
      }, void 0, n), this.createButtons()
    }
    createButtons() {
      let {
        options: t
      } = this, e = cO(t.buttonTheme), i = e && e.states, s = e.width || 28;
      delete e.width, delete e.states, this.buttonOptions.forEach((t, e) => {
        this.createButton(t, e, s, i)
      })
    }
    createButton(t, e, i, s) {
      let {
        dropdown: o,
        buttons: r,
        chart: a,
        options: n
      } = this, h = a.renderer, l = cO(n.buttonTheme);
      o?.add(cb("option", {
        textContent: t.title || t.text
      }), e + 2), r[e] = h.button(t.text, 0, 0, i => {
        let s;
        let o = t.events && t.events.click;
        o && (s = o.call(t, i)), !1 !== s && this.clickButton(e), this.isActive = !0
      }, l, s && s.hover, s && s.select, s && s.disabled).attr({
        "text-align": "center",
        width: i
      }).add(this.buttonGroup), t.title && r[e].attr("title", t.title)
    }
    alignElements() {
      let {
        buttonGroup: t,
        buttons: e,
        chart: i,
        group: s,
        inputGroup: o,
        options: r,
        zoomText: a
      } = this, n = i.options, h = n.exporting && !1 !== n.exporting.enabled && n.navigation && n.navigation.buttonOptions, {
        buttonPosition: l,
        inputPosition: d,
        verticalAlign: c
      } = r, p = (t, e) => h && this.titleCollision(i) && "top" === c && "right" === e.align && e.y - t.getBBox().height - 12 < (h.y || 0) + (h.height || 0) + i.spacing[0] ? -40 : 0, u = i.plotLeft;
      if (s && l && d) {
        let n = l.x - i.spacing[3];
        if (t) {
          if (this.positionButtons(), !this.initialButtonGroupWidth) {
            let t = 0;
            a && (t += a.getBBox().width + 5), e.forEach((i, s) => {
              t += i.width || 0, s !== e.length - 1 && (t += r.buttonSpacing)
            }), this.initialButtonGroupWidth = t
          }
          u -= i.spacing[3];
          let o = p(t, l);
          this.alignButtonGroup(o), this.buttonGroup?.translateY && this.dropdownLabel.attr({
            y: this.buttonGroup.translateY
          }), s.placed = t.placed = i.hasLoaded
        }
        let h = 0;
        r.inputEnabled && o && (h = p(o, d), "left" === d.align ? n = u : "right" === d.align && (n = -Math.max(i.axisOffset[1], -h)), o.align({
          y: d.y,
          width: o.getBBox().width,
          align: d.align,
          x: d.x + n - 2
        }, !0, i.spacingBox), o.placed = i.hasLoaded), this.handleCollision(h), s.align({
          verticalAlign: c
        }, !0, i.spacingBox);
        let g = s.alignAttr.translateY,
          f = s.getBBox().height + 20,
          m = 0;
        if ("bottom" === c) {
          let t = i.legend && i.legend.options;
          m = g - (f = f + (t && "bottom" === t.verticalAlign && t.enabled && !t.floating ? i.legend.legendHeight + cL(t.margin, 10) : 0) - 20) - (r.floating ? 0 : r.y) - (i.titleOffset ? i.titleOffset[2] : 0) - 10
        }
        "top" === c ? (r.floating && (m = 0), i.titleOffset && i.titleOffset[0] && (m = i.titleOffset[0]), m += i.margin[0] - i.spacing[0] || 0) : "middle" === c && (d.y === l.y ? m = g : (d.y || l.y) && (d.y < 0 || l.y < 0 ? m -= Math.min(d.y, l.y) : m = g - f)), s.translate(r.x, r.y + Math.floor(m));
        let {
          minInput: x,
          maxInput: y,
          dropdown: b
        } = this;
        r.inputEnabled && x && y && (x.style.marginTop = s.translateY + "px", y.style.marginTop = s.translateY + "px"), b && (b.style.marginTop = s.translateY + "px")
      }
    }
    redrawElements() {
      let t = this.chart,
        {
          inputBoxHeight: e,
          inputBoxBorderColor: i
        } = this.options;
      if (this.maxDateBox?.attr({
        height: e
      }), this.minDateBox?.attr({
        height: e
      }), t.styledMode || (this.maxDateBox?.attr({
        stroke: i
      }), this.minDateBox?.attr({
        stroke: i
      })), this.isDirty) {
        this.isDirty = !1, this.isCollapsed = void 0;
        let t = this.options.buttons ?? [],
          e = Math.min(t.length, this.buttonOptions.length),
          {
            dropdown: i,
            options: s
          } = this,
          o = cO(s.buttonTheme),
          r = o && o.states,
          a = o.width || 28;
        if (t.length < this.buttonOptions.length)
          for (let e = this.buttonOptions.length - 1; e >= t.length; e--) {
            let t = this.buttons.pop();
            t?.destroy(), this.dropdown?.options.remove(e + 1)
          }
        for (let s = e - 1; s >= 0; s--)
          if (0 !== Object.keys(cw(t[s], this.buttonOptions[s])).length) {
            let e = t[s];
            this.buttons[s].destroy(), i?.options.remove(s + 1), this.createButton(e, s, a, r), this.computeButtonRange(e)
          } if (t.length > this.buttonOptions.length)
          for (let e = this.buttonOptions.length; e < t.length; e++) this.createButton(t[e], e, a, r), this.computeButtonRange(t[e]);
        this.buttonOptions = this.options.buttons ?? [], ck(this.options.selected) && this.buttons.length && this.clickButton(this.options.selected, !1)
      }
    }
    alignButtonGroup(t, e) {
      let {
        chart: i,
        options: s,
        buttonGroup: o
      } = this, {
        buttonPosition: r
      } = s, a = i.plotLeft - i.spacing[3], n = r.x - i.spacing[3];
      "right" === r.align ? n += t - a : "center" === r.align && (n -= a / 2), o && o.align({
        y: r.y,
        width: cL(e, this.initialButtonGroupWidth),
        align: r.align,
        x: n
      }, !0, i.spacingBox)
    }
    positionButtons() {
      let {
        buttons: t,
        chart: e,
        options: i,
        zoomText: s
      } = this, o = e.hasLoaded ? "animate" : "attr", {
        buttonPosition: r
      } = i, a = e.plotLeft, n = a;
      s && "hidden" !== s.visibility && (s[o]({
        x: cL(a + r.x, a)
      }), n += r.x + s.getBBox().width + 5);
      for (let e = 0, s = this.buttonOptions.length; e < s; ++e) "hidden" !== t[e].visibility ? (t[e][o]({
        x: n
      }), n += (t[e].width || 0) + i.buttonSpacing) : t[e][o]({
        x: a
      })
    }
    handleCollision(t) {
      let {
        chart: e,
        buttonGroup: i,
        inputGroup: s
      } = this, {
        buttonPosition: o,
        dropdown: r,
        inputPosition: a
      } = this.options, n = () => {
        let t = 0;
        return this.buttons.forEach(e => {
          let i = e.getBBox();
          i.width > t && (t = i.width)
        }), t
      }, h = e => {
        if (s?.alignOptions && i) {
          let r = s.alignAttr.translateX + s.alignOptions.x - t + s.getBBox().x + 2,
            n = s.alignOptions.width || 0,
            h = i.alignAttr.translateX + i.getBBox().x;
          return h + e > r && r + n > h && o.y < a.y + s.getBBox().height
        }
        return !1
      }, l = () => {
        s && i && s.attr({
          translateX: s.alignAttr.translateX + (e.axisOffset[1] >= -t ? 0 : -t),
          translateY: s.alignAttr.translateY + i.getBBox().height + 10
        })
      };
      if (i) {
        if ("always" === r) {
          this.collapseButtons(), h(n()) && l();
          return
        }
        "never" === r && this.expandButtons()
      }
      s && i ? a.align === o.align || h(this.initialButtonGroupWidth + 20) ? "responsive" === r ? (this.collapseButtons(), h(n()) && l()) : l() : "responsive" === r && this.expandButtons() : i && "responsive" === r && (this.initialButtonGroupWidth > e.plotWidth ? this.collapseButtons() : this.expandButtons())
    }
    collapseButtons() {
      let {
        buttons: t,
        zoomText: e
      } = this;
      !0 !== this.isCollapsed && (this.isCollapsed = !0, e.hide(), t.forEach(t => void t.hide()), this.showDropdown())
    }
    expandButtons() {
      let {
        buttons: t,
        zoomText: e
      } = this;
      !1 !== this.isCollapsed && (this.isCollapsed = !1, this.hideDropdown(), e.show(), t.forEach(t => void t.show()), this.positionButtons())
    }
    showDropdown() {
      let {
        buttonGroup: t,
        chart: e,
        dropdownLabel: i,
        dropdown: s
      } = this;
      if (t && s) {
        let {
          translateX: o = 0,
          translateY: r = 0
        } = t, a = e.plotLeft + o;
        i.attr({
          x: a,
          y: r
        }).show(), cv(s, {
          left: a + "px",
          top: r + "px",
          visibility: "inherit"
        }), this.hasVisibleDropdown = !0
      }
    }
    hideDropdown() {
      let {
        dropdown: t
      } = this;
      t && (this.dropdownLabel.hide(), cv(t, {
        visibility: "hidden",
        width: "1px",
        height: "1px"
      }), this.hasVisibleDropdown = !1)
    }
    getHeight() {
      let t = this.options,
        e = this.group,
        i = t.inputPosition,
        s = t.buttonPosition,
        o = t.y,
        r = s.y,
        a = i.y,
        n = 0;
      if (t.height) return t.height;
      this.alignElements(), n = e ? e.getBBox(!0).height + 13 + o : 0;
      let h = Math.min(a, r);
      return (a < 0 && r < 0 || a > 0 && r > 0) && (n += Math.abs(h)), n
    }
    titleCollision(t) {
      return !(t.options.title.text || t.options.subtitle.text)
    }
    update(t, e = !0) {
      let i = this.chart;
      if (cO(!0, this.options, t), this.options.selected && this.options.selected >= this.options.buttons.length && (this.options.selected = void 0, i.options.rangeSelector.selected = void 0), ck(t.enabled)) return this.destroy(), this.init(i);
      this.isDirty = !!t.buttons, e && this.render()
    }
    destroy() {
      let t = this,
        e = t.minInput,
        i = t.maxInput;
      t.eventsToUnbind && (t.eventsToUnbind.forEach(t => t()), t.eventsToUnbind = void 0), cM(t.buttons), e && (e.onfocus = e.onblur = e.onchange = null), i && (i.onfocus = i.onblur = i.onchange = null), cE(t, function (e, i) {
        e && "chart" !== i && (e instanceof eK ? e.destroy() : e instanceof window.HTMLElement && cS(e), delete t[i]), e !== cI.prototype[i] && (t[i] = null)
      }, this), this.buttons = []
    }
  }
  cA(cI.prototype, {
    inputTypeFormats: {
      "datetime-local": "%Y-%m-%dT%H:%M:%S",
      date: "%Y-%m-%d",
      time: "%H:%M:%S"
    }
  });
  let {
    format: cz
  } = ec, {
    getOptions: cR
  } = tA, {
    setFixedRange: cN
  } = di, {
    addEvent: cW,
    clamp: cG,
    crisp: cX,
    defined: cH,
    extend: cF,
    find: cY,
    isNumber: cj,
    isString: cU,
    merge: cV,
    pick: c_,
    splat: c$
  } = ti;

  function cZ(t, e, i) {
    return "xAxis" === t ? {
      minPadding: 0,
      maxPadding: 0,
      overscroll: 0,
      ordinal: !0
    } : "yAxis" === t ? {
      labels: {
        y: -2
      },
      opposite: i.opposite ?? e.opposite ?? !0,
      showLastLabel: !!(e.categories || "category" === e.type),
      title: {
        text: i.title?.text !== "Values" ? i.title?.text : null
      }
    } : {}
  }

  function cq(t, e) {
    if ("xAxis" === t) {
      let t = c_(e.navigator && e.navigator.enabled, l8.enabled, !0),
        i = {
          type: "datetime",
          categories: void 0
        };
      return t && (i.startOnTick = !1, i.endOnTick = !1), i
    }
    return {}
  }
  class cK extends aq {
    init(t, e) {
      let i = cR(),
        s = t.xAxis,
        o = t.yAxis,
        r = c_(t.navigator && t.navigator.enabled, l8.enabled, !0);
      t.xAxis = t.yAxis = void 0;
      let a = cV({
        chart: {
          panning: {
            enabled: !0,
            type: "x"
          },
          zooming: {
            pinchType: "x",
            mouseWheel: {
              type: "x"
            }
          }
        },
        navigator: {
          enabled: false
        },
        scrollbar: {
          enabled: c_(db.enabled, !0)
        },
        rangeSelector: {
          enabled: c_(d4.rangeSelector.enabled, !0)
        },
        title: {
          text: null
        },
        tooltip: {
          split: c_(i.tooltip && i.tooltip.split, !0),
          crosshairs: !0
        },
        legend: {
          enabled: !1
        }
      }, t, {
        isStock: !0
      });
      t.xAxis = s, t.yAxis = o, a.xAxis = c$(t.xAxis || {}).map(e => cV(cZ("xAxis", e, i.xAxis), e, cq("xAxis", t))), a.yAxis = c$(t.yAxis || {}).map(t => cV(cZ("yAxis", t, i.yAxis), t)), super.init(a, e)
    }
    createAxis(t, e) {
      return e.axis = cV(cZ(t, e.axis, cR()[t]), e.axis, cq(t, this.userOptions)), super.createAxis(t, e)
    }
  }
  cW(aq, "update", function (t) {
    let e = t.options;
    "scrollbar" in e && this.navigator && (cV(!0, this.options.scrollbar, e.scrollbar), this.navigator.update({
      enabled: !!this.navigator.navigatorEnabled
    }), delete e.scrollbar)
  }),
    function (t) {
      function e(t) {
        if (!(this.crosshair?.label?.enabled && this.cross && cj(this.min) && cj(this.max))) return;
        let e = this.chart,
          i = this.logarithmic,
          s = this.crosshair.label,
          o = this.horiz,
          r = this.opposite,
          a = this.left,
          n = this.top,
          h = this.width,
          l = "inside" === this.options.tickPosition,
          d = !1 !== this.crosshair.snap,
          c = t.e || this.cross?.e,
          p = t.point,
          u = this.crossLabel,
          g, f, m = s.format,
          x = "",
          y, b = 0,
          v = this.min,
          k = this.max;
        i && (v = i.lin2log(this.min), k = i.lin2log(this.max));
        let M = o ? "center" : r ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center";
        u || (u = this.crossLabel = e.renderer.label("", 0, void 0, s.shape || "callout").addClass("highcharts-crosshair-label highcharts-color-" + (p && p.series ? p.series.colorIndex : this.series[0] && this.series[0].colorIndex)).attr({
          align: s.align || M,
          padding: c_(s.padding, 8),
          r: c_(s.borderRadius, 3),
          zIndex: 2
        }).add(this.labelGroup), e.styledMode || u.attr({
          fill: s.backgroundColor || p && p.series && p.series.color || "#666666",
          stroke: s.borderColor || "",
          "stroke-width": s.borderWidth || 0
        }).css(cF({
          color: "#ffffff",
          fontWeight: "normal",
          fontSize: "0.7em",
          textAlign: "center"
        }, s.style || {}))), o ? (g = d ? (p.plotX || 0) + a : c.chartX, f = n + (r ? 0 : this.height)) : (g = a + this.offset + (r ? h : 0), f = d ? (p.plotY || 0) + n : c.chartY), m || s.formatter || (this.dateTime && (x = "%b %d, %Y"), m = "{value" + (x ? ":" + x : "") + "}");
        let w = d ? this.isXAxis ? p.x : p.y : this.toValue(o ? c.chartX : c.chartY),
          S = p && p.series ? p.series.isPointInside(p) : cj(w) && w > v && w < k,
          A = "";
        m ? A = cz(m, {
          value: w
        }, e) : s.formatter && cj(w) && (A = s.formatter.call(this, w)), u.attr({
          text: A,
          x: g,
          y: f,
          visibility: S ? "inherit" : "hidden"
        });
        let T = u.getBBox();
        !cj(u.x) || o || r || (g = u.x - T.width / 2), cj(u.y) && (o ? (l && !r || !l && r) && (f = u.y - T.height) : f = u.y - T.height / 2), y = o ? {
          left: a,
          right: a + this.width
        } : {
          left: "left" === this.labelAlign ? a : 0,
          right: "right" === this.labelAlign ? a + this.width : e.chartWidth
        };
        let C = u.translateX || 0;
        C < y.left && (b = y.left - C), C + T.width >= y.right && (b = -(C + T.width - y.right)), u.attr({
          x: Math.max(0, g + b),
          y: Math.max(0, f),
          anchorX: o ? g : this.opposite ? 0 : e.chartWidth,
          anchorY: o ? this.opposite ? e.chartHeight : 0 : f + T.height / 2
        })
      }

      function i() {
        this.crossLabel && (this.crossLabel = this.crossLabel.hide())
      }

      function s(t) {
        let e = this.chart,
          i = this.options,
          s = e._labelPanes = e._labelPanes || {},
          o = i.labels;
        if (e.options.isStock && "yAxis" === this.coll) {
          let e = i.top + "," + i.height;
          !s[e] && o.enabled && (15 === o.distance && 1 === this.side && (o.distance = 0), void 0 === o.align && (o.align = "right"), s[e] = this, t.align = "right", t.preventDefault())
        }
      }

      function o() {
        let t = this.chart,
          e = this.options && this.options.top + "," + this.options.height;
        e && t._labelPanes && t._labelPanes[e] === this && delete t._labelPanes[e]
      }

      function r(t) {
        let e = this,
          i = e.isLinked && !e.series && e.linkedParent ? e.linkedParent.series : e.series,
          s = e.chart,
          o = s.renderer,
          r = e.left,
          a = e.top,
          n = [],
          h = t.translatedValue,
          l = t.value,
          d = t.force,
          c, p, u, g, f = [],
          m, x;
        if (s.options.isStock && !1 !== t.acrossPanes && "xAxis" === e.coll || "yAxis" === e.coll) {
          for (let o of (t.preventDefault(), f = (t => {
            let o = "xAxis" === t ? "yAxis" : "xAxis",
              r = e.options[o];
            return cj(r) ? [s[o][r]] : cU(r) ? [s.get(r)] : i.map(t => t[o])
          })(e.coll), e.isXAxis ? s.yAxis : s.xAxis))
            if (!o.options.isInternal) {
              let t = o.isXAxis ? "yAxis" : "xAxis";
              e === (cH(o.options[t]) ? s[t][o.options[t]] : s[t][0]) && f.push(o)
            } for (let t of (m = f.length ? [] : [e.isXAxis ? s.yAxis[0] : s.xAxis[0]], f)) - 1 !== m.indexOf(t) || cY(m, e => e.pos === t.pos && e.len === t.len) || m.push(t);
          if (cj(x = c_(h, e.translate(l || 0, void 0, void 0, t.old)))) {
            if (e.horiz)
              for (let t of m) {
                let i;
                g = (p = t.pos) + t.len, c = u = Math.round(x + e.transB), "pass" !== d && (c < r || c > r + e.width) && (d ? c = u = cG(c, r, r + e.width) : i = !0), i || n.push(["M", c, p], ["L", u, g])
              } else
              for (let t of m) {
                let i;
                u = (c = t.pos) + t.len, p = g = Math.round(a + e.height - x), "pass" !== d && (p < a || p > a + e.height) && (d ? p = g = cG(p, a, a + e.height) : i = !0), i || n.push(["M", c, p], ["L", u, g])
              }
          }
          t.path = n.length > 0 ? o.crispPolyLine(n, t.lineWidth || 1) : void 0
        }
      }

      function a(t) {
        if (this.chart.options.isStock) {
          let e;
          this.is("column") || this.is("columnrange") ? e = {
            borderWidth: 0,
            shadow: !1
          } : this.is("scatter") || this.is("sma") || (e = {
            marker: {
              enabled: !1,
              radius: 2
            }
          }), e && (t.plotOptions[this.type] = cV(t.plotOptions[this.type], e))
        }
      }

      function n() {
        let t = this.chart,
          e = this.options.dataGrouping;
        return !1 !== this.allowDG && e && c_(e.enabled, t.options.isStock)
      }

      function h(t, e) {
        for (let i = 0; i < t.length; i += 2) {
          let s = t[i],
            o = t[i + 1];
          cH(s[1]) && s[1] === o[1] && (s[1] = o[1] = cX(s[1], e)), cH(s[2]) && s[2] === o[2] && (s[2] = o[2] = cX(s[2], e))
        }
        return t
      }
      t.compose = function (t, l, d, c) {
        let p = d.prototype;
        p.forceCropping || (cW(l, "afterDrawCrosshair", e), cW(l, "afterHideCrosshair", i), cW(l, "autoLabelAlign", s), cW(l, "destroy", o), cW(l, "getPlotLinePath", r), t.prototype.setFixedRange = cN, p.forceCropping = n, cW(d, "setOptions", a), c.prototype.crispPolyLine = h)
      }, t.stockChart = function (e, i, s) {
        return new t(e, i, s)
      }
    }(cK || (cK = {}));
  let cJ = cK,
    {
      column: {
        prototype: {
          pointClass: cQ
        }
      }
    } = rx.seriesTypes,
    {
      column: c0
    } = rx.seriesTypes,
    {
      crisp: c1,
      extend: c2,
      merge: c3
    } = ti;
  class c5 extends c0 {
    extendStem(t, e, i) {
      let s = t[0],
        o = t[1];
      "number" == typeof s[2] && (s[2] = Math.max(i + e, s[2])), "number" == typeof o[2] && (o[2] = Math.min(i - e, o[2]))
    }
    getPointPath(t, e) {
      let i = e.strokeWidth(),
        s = t.series,
        o = c1(t.plotX || 0, i),
        r = Math.round(t.shapeArgs.width / 2),
        a = [
          ["M", o, Math.round(t.yBottom)],
          ["L", o, Math.round(t.plotHigh)]
        ];
      if (null !== t.close) {
        let e = c1(t.plotClose, i);
        a.push(["M", o, e], ["L", o + r, e]), s.extendStem(a, i / 2, e)
      }
      return a
    }
    drawSinglePoint(t) {
      let e = t.series,
        i = e.chart,
        s, o = t.graphic;
      void 0 !== t.plotY && (o || (t.graphic = o = i.renderer.path().add(e.group)), i.styledMode || o.attr(e.pointAttribs(t, t.selected && "select")), s = e.getPointPath(t, o), o[o ? "animate" : "attr"]({
        d: s
      }).addClass(t.getClassName(), !0))
    }
    drawPoints() {
      this.points.forEach(this.drawSinglePoint)
    }
    init() {
      super.init.apply(this, arguments), this.options.stacking = void 0
    }
    pointAttribs(t, e) {
      let i = super.pointAttribs.call(this, t, e);
      return delete i.fill, i
    }
    toYData(t) {
      return [t.high, t.low, t.close]
    }
    translate() {
      let t = this,
        e = t.yAxis,
        i = this.pointArrayMap && this.pointArrayMap.slice() || [],
        s = i.map(t => `plot${t.charAt(0).toUpperCase() + t.slice(1)}`);
      s.push("yBottom"), i.push("low"), super.translate.apply(t), t.points.forEach(function (o) {
        i.forEach(function (i, r) {
          let a = o[i];
          null !== a && (t.dataModify && (a = t.dataModify.modifyValue(a)), o[s[r]] = e.toPixels(a, !0))
        }), o.tooltipPos[1] = o.plotHigh + e.pos - t.chart.plotTop
      })
    }
  }
  c5.defaultOptions = c3(c0.defaultOptions, {
    lineWidth: 1,
    tooltip: {
      enabled: false
    }
  }), c2(c5.prototype, {
    pointClass: class extends cQ { },
    animate: null,
    directTouch: !1,
    keysAffectYAxis: ["low", "high"],
    pointArrayMap: ["high", "low", "close"],
    pointAttrToOptions: {
      stroke: "color",
      "stroke-width": "lineWidth"
    },
    pointValKey: "close"
  }), rx.registerSeriesType("hlc", c5);
  let {
    seriesTypes: {
      hlc: c6
    }
  } = rx;
  class c9 extends c6.prototype.pointClass {
    getClassName() {
      return super.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down")
    }
    resolveUpColor() {
      this.open < this.close && !this.options.color && this.series.options.upColor && (this.color = this.series.options.upColor)
    }
    resolveColor() {
      super.resolveColor(), this.series.is("heikinashi") || this.resolveUpColor()
    }
    getZone() {
      let t = super.getZone();
      return this.resolveUpColor(), t
    }
    applyOptions() {
      return super.applyOptions.apply(this, arguments), this.resolveColor && this.resolveColor(), this
    }
  }
  let {
    composed: c4
  } = L, {
    hlc: c8
  } = rx.seriesTypes, {
    addEvent: c7,
    crisp: pt,
    extend: pe,
    merge: pi,
    pushUnique: ps
  } = ti;

  function po(t) {
    let e = t.options,
      i = e.dataGrouping;
    i && e.useOhlcData && "highcharts-navigator-series" !== e.id && (i.approximation = "ohlc")
  }

  function pr(t) {
    let e = t.options;
    e.useOhlcData && "highcharts-navigator-series" !== e.id && pe(this, {
      pointValKey: pa.prototype.pointValKey,
      pointArrayMap: pa.prototype.pointArrayMap,
      toYData: pa.prototype.toYData
    })
  }
  class pa extends c8 {
    static compose(t, ...e) {
      ps(c4, "OHLCSeries") && (c7(t, "afterSetOptions", po), c7(t, "init", pr))
    }
    getPointPath(t, e) {
      let i = super.getPointPath(t, e),
        s = e.strokeWidth(),
        o = pt(t.plotX || 0, s),
        r = Math.round(t.shapeArgs.width / 2);
      if (null !== t.open) {
        let e = pt(t.plotOpen, s);
        i.push(["M", o, e], ["L", o - r, e]), super.extendStem(i, s / 2, e)
      }
      return i
    }
    pointAttribs(t, e) {
      let i = super.pointAttribs.call(this, t, e),
        s = this.options;
      return delete i.fill, !t.options.color && s.upColor && t.open < t.close && (i.stroke = s.upColor), i
    }
    toYData(t) {
      return [t.open, t.high, t.low, t.close]
    }
  }
  pa.defaultOptions = pi(c8.defaultOptions, {
    "tooltip": {
      "enabled": false
    }
  }), pe(pa.prototype, {
    pointClass: c9,
    pointArrayMap: ["open", "high", "low", "close"]
  }), rx.registerSeriesType("ohlc", pa);
  let {
    column: pn,
    ohlc: ph
  } = rx.seriesTypes, {
    crisp: pl,
    merge: pd
  } = ti;
  class pc extends ph {
    pointAttribs(t, e) {
      let i = pn.prototype.pointAttribs.call(this, t, e),
        s = this.options,
        o = t.open < t.close,
        r = s.lineColor || this.color,
        a = t.color || this.color;
      if (i["stroke-width"] = s.lineWidth, i.fill = t.options.color || o && s.upColor || a, i.stroke = t.options.lineColor || o && s.upLineColor || r, e) {
        let t = s.states[e];
        i.fill = t.color || i.fill, i.stroke = t.lineColor || i.stroke, i["stroke-width"] = t.lineWidth || i["stroke-width"]
      }
      return i
    }
    drawPoints() {
      let t = this.points,
        e = this.chart,
        i = this.yAxis.reversed;
      for (let s of t) {
        let t = s.graphic,
          o, r, a, n, h, l, d, c, p, u = !t;
        if (void 0 !== s.plotY) {
          t || (s.graphic = t = e.renderer.path().add(this.group)), this.chart.styledMode || t.attr(this.pointAttribs(s, s.selected && "select")).shadow(this.options.shadow);
          let g = t.strokeWidth();
          d = pl(s.plotX || 0, g), a = Math.min(o = s.plotOpen, r = s.plotClose), n = Math.max(o, r), p = Math.round(s.shapeArgs.width / 2), h = i ? n !== s.yBottom : Math.round(a) !== Math.round(s.plotHigh || 0), l = i ? Math.round(a) !== Math.round(s.plotHigh || 0) : n !== s.yBottom, a = pl(a, g), n = pl(n, g), (c = []).push(["M", d - p, n], ["L", d - p, a], ["L", d + p, a], ["L", d + p, n], ["Z"], ["M", d, a], ["L", d, h ? Math.round(i ? s.yBottom : s.plotHigh) : a], ["M", d, n], ["L", d, l ? Math.round(i ? s.plotHigh : s.yBottom) : n]), t[u ? "attr" : "animate"]({
            d: c
          }).addClass(s.getClassName(), !0)
        }
      }
    }
  }
  pc.defaultOptions = pd(ph.defaultOptions, {
    tooltip: ph.defaultOptions.tooltip
  }, {
    states: {
      hover: {
        lineWidth: 2
      }
    },
    threshold: null,
    lineColor: "#000000",
    lineWidth: 1,
    upColor: "#ffffff",
    stickyTracking: !0
  }), rx.registerSeriesType("candlestick", pc);
  let {
    column: {
      prototype: {
        pointClass: pp
      }
    }
  } = rx.seriesTypes, {
    isNumber: pu
  } = ti, pg = class extends pp {
    constructor() {
      super(...arguments), this.ttBelow = !1
    }
    isValid() {
      return pu(this.y) || void 0 === this.y
    }
    hasNewShapeType() {
      let t = this.options.shape || this.series.options.shape;
      return this.graphic && t && t !== this.graphic.symbolKey
    }
  };
  ! function (t) {
    let e = [];

    function i(t, e, i, s, o) {
      let r = o && o.anchorX || t,
        a = o && o.anchorY || e,
        n = this.circle(r - 1, a - 1, 2, 2);
      return n.push(["M", r, a], ["L", t, e + s], ["L", t, e], ["L", t + i, e], ["L", t + i, e + s], ["L", t, e + s], ["Z"]), n
    }

    function s(t, e) {
      t[e + "pin"] = function (i, s, o, r, a) {
        let n;
        let h = a && a.anchorX,
          l = a && a.anchorY;
        if ("circle" === e && r > o && (i -= Math.round((r - o) / 2), o = r), n = t[e](i, s, o, r, a), h && l) {
          let a = h;
          if ("circle" === e) a = i + o / 2;
          else {
            let t = n[0],
              e = n[1];
            "M" === t[0] && "L" === e[0] && (a = (t[1] + e[1]) / 2)
          }
          let d = s > l ? s : s + r;
          n.push(["M", a, d], ["L", h, l]), n = n.concat(t.circle(h - 1, l - 1, 2, 2))
        }
        return n
      }
    }
    t.compose = function (t) {
      if (-1 === e.indexOf(t)) {
        e.push(t);
        let o = t.prototype.symbols;
        o.flag = i, s(o, "circle"), s(o, "square")
      }
      let o = ep.getRendererType();
      e.indexOf(o) && e.push(o)
    }
  }(T || (T = {}));
  let pf = T,
    {
      composed: pm
    } = L,
    {
      prototype: px
    } = n4,
    {
      prototype: py
    } = rq,
    {
      defined: pb,
      pushUnique: pv,
      stableSort: pk
    } = ti;
  ! function (t) {
    function e(t) {
      return py.getPlotBox.call(this.options.onSeries && this.chart.get(this.options.onSeries) || this, t)
    }

    function i() {
      px.translate.apply(this);
      let t = this,
        e = t.options,
        i = t.chart,
        s = t.points,
        o = e.onSeries,
        r = o && i.get(o),
        a = r && r.options.step,
        n = r && r.points,
        h = i.inverted,
        l = t.xAxis,
        d = t.yAxis,
        c = s.length - 1,
        p, u, g = e.onKey || "y",
        f = n && n.length,
        m = 0,
        x, y, b, v, k;
      if (r && r.visible && f) {
        for (m = (r.pointXOffset || 0) + (r.barW || 0) / 2, v = r.currentDataGrouping, y = n[f - 1].x + (v ? v.totalRange : 0), pk(s, (t, e) => t.x - e.x), g = "plot" + g[0].toUpperCase() + g.substr(1); f-- && s[c];)
          if (x = n[f], (p = s[c]).y = x.y, x.x <= p.x && void 0 !== x[g]) {
            if (p.x <= y && (p.plotY = x[g], x.x < p.x && !a && (b = n[f + 1]) && void 0 !== b[g])) {
              if (pb(p.plotX) && r.is("spline")) {
                let t = [x.plotX || 0, x.plotY || 0],
                  e = [b.plotX || 0, b.plotY || 0],
                  i = x.controlPoints?.high || t,
                  s = b.controlPoints?.low || e,
                  o = (o, r) => Math.pow(1 - o, 3) * t[r] + 3 * (1 - o) * (1 - o) * o * i[r] + 3 * (1 - o) * o * o * s[r] + o * o * o * e[r],
                  r = 0,
                  a = 1,
                  n;
                for (let t = 0; t < 100; t++) {
                  let t = (r + a) / 2,
                    e = o(t, 0);
                  if (null === e) break;
                  if (.25 > Math.abs(e - p.plotX)) {
                    n = t;
                    break
                  }
                  e < p.plotX ? r = t : a = t
                }
                pb(n) && (p.plotY = o(n, 1), p.y = d.toValue(p.plotY, !0))
              } else k = (p.x - x.x) / (b.x - x.x), p.plotY += k * (b[g] - x[g]), p.y += k * (b.y - x.y)
            }
            if (c--, f++, c < 0) break
          }
      }
      s.forEach((e, i) => {
        let o;
        e.plotX += m, (void 0 === e.plotY || h) && (e.plotX >= 0 && e.plotX <= l.len ? h ? (e.plotY = l.translate(e.x, 0, 1, 0, 1), e.plotX = pb(e.y) ? d.translate(e.y, 0, 0, 0, 1) : 0) : e.plotY = (l.opposite ? 0 : t.yAxis.len) + l.offset : e.shapeArgs = {}), (u = s[i - 1]) && u.plotX === e.plotX && (void 0 === u.stackIndex && (u.stackIndex = 0), o = u.stackIndex + 1), e.stackIndex = o
      }), this.onSeries = r
    }
    t.compose = function (t) {
      if (pv(pm, "OnSeries")) {
        let s = t.prototype;
        s.getPlotBox = e, s.translate = i
      }
      return t
    }, t.getPlotBox = e, t.translate = i
  }(C || (C = {}));
  let pM = C,
    {
      noop: pw
    } = L,
    {
      distribute: pS
    } = ex,
    {
      series: pA,
      seriesTypes: {
        column: pT
      }
    } = rx,
    {
      addEvent: pC,
      defined: pP,
      extend: pO,
      isNumber: pE,
      merge: pL,
      objectEach: pB,
      wrap: pD
    } = ti;
  class pI extends pT {
    animate(t) {
      t && this.setClip()
    }
    drawPoints() {
      let t, e, i, s, o, r, a, n, h, l, d;
      let c = this.points,
        p = this.chart,
        u = p.renderer,
        g = p.inverted,
        f = this.options,
        m = f.y,
        x = this.yAxis,
        y = {},
        b = [],
        v = pE(f.borderRadius) ? f.borderRadius : 0;
      for (s = c.length; s--;) o = c[s], l = (g ? o.plotY : o.plotX) > this.xAxis.len, t = o.plotX, a = o.stackIndex, i = o.options.shape || f.shape, void 0 !== (e = o.plotY) && (e = o.plotY + m - (void 0 !== a && a * f.stackDistance)), o.anchorX = a ? void 0 : o.plotX, n = a ? void 0 : o.plotY, d = "flag" !== i, r = o.graphic, void 0 !== e && t >= 0 && !l ? (r && o.hasNewShapeType() && (r = r.destroy()), r || (r = o.graphic = u.label("", 0, void 0, i, void 0, void 0, f.useHTML).addClass("highcharts-point").add(this.markerGroup), o.graphic.div && (o.graphic.div.point = o), r.isNew = !0), r.attr({
        align: d ? "center" : "left",
        width: f.width,
        height: f.height,
        "text-align": f.textAlign,
        r: v
      }), p.styledMode || r.attr(this.pointAttribs(o)).css(pL(f.style, o.style)).shadow(f.shadow), t > 0 && (t -= r.strokeWidth() % 2), h = {
        y: e,
        anchorY: n
      }, f.allowOverlapX && (h.x = t, h.anchorX = o.anchorX), r.attr({
        text: o.options.title ?? f.title ?? "A"
      })[r.isNew ? "attr" : "animate"](h), f.allowOverlapX || (y[o.plotX] ? y[o.plotX].size = Math.max(y[o.plotX].size, r.width || 0) : y[o.plotX] = {
        align: d ? .5 : 0,
        size: r.width || 0,
        target: t,
        anchorX: t
      }), o.tooltipPos = [t, e + x.pos - p.plotTop]) : r && (o.graphic = r.destroy());
      if (!f.allowOverlapX) {
        let t = 100;
        for (let e of (pB(y, function (e) {
          e.plotX = e.anchorX, b.push(e), t = Math.max(e.size, t)
        }), pS(b, g ? x.len : this.xAxis.len, t), c)) {
          let t = e.plotX,
            i = e.graphic,
            s = i && y[t];
          s && i && (pP(s.pos) ? i[i.isNew ? "attr" : "animate"]({
            x: s.pos + (s.align || 0) * s.size,
            anchorX: e.anchorX
          }).show().isNew = !1 : i.hide().isNew = !0)
        }
      }
      f.useHTML && this.markerGroup && pD(this.markerGroup, "on", function (t) {
        return eK.prototype.on.apply(t.apply(this, [].slice.call(arguments, 1)), [].slice.call(arguments, 1))
      })
    }
    drawTracker() {
      let t = this.points;
      for (let e of (super.drawTracker(), t)) {
        let i = e.graphic;
        i && (e.unbindMouseOver && e.unbindMouseOver(), e.unbindMouseOver = pC(i.element, "mouseover", function () {
          for (let s of (e.stackIndex > 0 && !e.raised && (e._y = i.y, i.attr({
            y: e._y - 8
          }), e.raised = !0), t)) s !== e && s.raised && s.graphic && (s.graphic.attr({
            y: s._y
          }), s.raised = !1)
        }))
      }
    }
    pointAttribs(t, e) {
      let i = this.options,
        s = t && t.color || this.color,
        o = i.lineColor,
        r = t && t.lineWidth,
        a = t && t.fillColor || i.fillColor;
      return e && (a = i.states[e].fillColor, o = i.states[e].lineColor, r = i.states[e].lineWidth), {
        fill: a || s,
        stroke: o || s,
        "stroke-width": r || i.lineWidth || 0
      }
    }
    setClip() {
      pA.prototype.setClip.apply(this, arguments), !1 !== this.options.clip && this.sharedClipKey && this.markerGroup && this.markerGroup.clip(this.chart.sharedClips[this.sharedClipKey])
    }
  }
  pI.compose = pf.compose, pI.defaultOptions = pL(pT.defaultOptions, {
    borderRadius: 0,
    pointRange: 0,
    allowOverlapX: !1,
    shape: "flag",
    stackDistance: 12,
    textAlign: "center",
    tooltip: {
      pointFormat: "{point.text}"
    },
    threshold: null,
    y: -30,
    fillColor: "#ffffff",
    lineWidth: 1,
    states: {
      hover: {
        lineColor: "#000000",
        fillColor: "#ccd3ff"
      }
    },
    style: {
      fontSize: "0.7em",
      fontWeight: "bold"
    }
  }), pM.compose(pI), pO(pI.prototype, {
    allowDG: !1,
    forceCrop: !0,
    invertible: !1,
    noSharedTooltip: !0,
    pointClass: pg,
    sorted: !1,
    takeOrdinalPosition: !1,
    trackerGroups: ["markerGroup"],
    buildKDTree: pw,
    init: pA.prototype.init
  }), rx.registerSeriesType("flags", pI);
  let {
    addEvent: pz,
    find: pR,
    fireEvent: pN,
    isArray: pW,
    isNumber: pG,
    pick: pX
  } = ti;
  ! function (t) {
    function e() {
      void 0 !== this.brokenAxis && this.brokenAxis.setBreaks(this.options.breaks, !1)
    }

    function i() {
      this.brokenAxis?.hasBreaks && (this.options.ordinal = !1)
    }

    function s() {
      let t = this.brokenAxis;
      if (t?.hasBreaks) {
        let e = this.tickPositions,
          i = this.tickPositions.info,
          s = [];
        for (let i = 0; i < e.length; i++) t.isInAnyBreak(e[i]) || s.push(e[i]);
        this.tickPositions = s, this.tickPositions.info = i
      }
    }

    function o() {
      this.brokenAxis || (this.brokenAxis = new l(this))
    }

    function r() {
      let {
        isDirty: t,
        options: {
          connectNulls: e
        },
        points: i,
        xAxis: s,
        yAxis: o
      } = this;
      if (t) {
        let t = i.length;
        for (; t--;) {
          let r = i[t],
            a = !(null === r.y && !1 === e) && (s?.brokenAxis?.isInAnyBreak(r.x, !0) || o?.brokenAxis?.isInAnyBreak(r.y, !0));
          r.visible = !a && !1 !== r.options.visible
        }
      }
    }

    function a() {
      this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, pX(this.pointArrayMap, ["y"]))
    }

    function n(t, e) {
      let i, s, o;
      let r = this,
        a = r.points;
      if (t?.brokenAxis?.hasBreaks) {
        let n = t.brokenAxis;
        e.forEach(function (e) {
          i = n?.breakArray || [], s = t.isXAxis ? t.min : pX(r.options.threshold, t.min);
          let h = t?.options?.breaks?.filter(function (t) {
            let e = !0;
            for (let s = 0; s < i.length; s++) {
              let o = i[s];
              if (o.from === t.from && o.to === t.to) {
                e = !1;
                break
              }
            }
            return e
          });
          a.forEach(function (r) {
            o = pX(r["stack" + e.toUpperCase()], r[e]), i.forEach(function (e) {
              if (pG(s) && pG(o)) {
                let i = "";
                s < e.from && o > e.to || s > e.from && o < e.from ? i = "pointBreak" : (s < e.from && o > e.from && o < e.to || s > e.from && o > e.to && o < e.from) && (i = "pointInBreak"), i && pN(t, i, {
                  point: r,
                  brk: e
                })
              }
            }), h?.forEach(function (e) {
              pN(t, "pointOutsideOfBreak", {
                point: r,
                brk: e
              })
            })
          })
        })
      }
    }

    function h() {
      let t = this.currentDataGrouping,
        e = t?.gapSize,
        i = this.points.slice(),
        s = this.yAxis,
        o = this.options.gapSize,
        r = i.length - 1;
      if (o && r > 0) {
        let t, a;
        for ("value" !== this.options.gapUnit && (o *= this.basePointRange), e && e > o && e >= this.basePointRange && (o = e); r--;)
          if (a && !1 !== a.visible || (a = i[r + 1]), t = i[r], !1 !== a.visible && !1 !== t.visible) {
            if (a.x - t.x > o) {
              let e = (t.x + a.x) / 2;
              i.splice(r + 1, 0, {
                isNull: !0,
                x: e
              }), s.stacking && this.options.stacking && ((s.stacking.stacks[this.stackKey][e] = new na(s, s.options.stackLabels, !1, e, this.stack)).total = 0)
            }
            a = t
          }
      }
      return this.getGraphPath(i)
    }
    t.compose = function (t, l) {
      if (!t.keepProps.includes("brokenAxis")) {
        t.keepProps.push("brokenAxis"), pz(t, "init", o), pz(t, "afterInit", e), pz(t, "afterSetTickPositions", s), pz(t, "afterSetOptions", i);
        let d = l.prototype;
        d.drawBreaks = n, d.gappedPath = h, pz(l, "afterGeneratePoints", r), pz(l, "afterRender", a)
      }
      return t
    };
    class l {
      static isInBreak(t, e) {
        let i = t.repeat || 1 / 0,
          s = t.from,
          o = t.to - t.from,
          r = e >= s ? (e - s) % i : i - (s - e) % i;
        return t.inclusive ? r <= o : r < o && 0 !== r
      }
      static lin2Val(t) {
        let e = this.brokenAxis,
          i = e && e.breakArray;
        if (!i || !pG(t)) return t;
        let s = t,
          o, r;
        for (r = 0; r < i.length && !((o = i[r]).from >= s); r++) o.to < s ? s += o.len : l.isInBreak(o, s) && (s += o.len);
        return s
      }
      static val2Lin(t) {
        let e = this.brokenAxis,
          i = e && e.breakArray;
        if (!i || !pG(t)) return t;
        let s = t,
          o, r;
        for (r = 0; r < i.length; r++)
          if ((o = i[r]).to <= t) s -= o.len;
          else if (o.from >= t) break;
          else if (l.isInBreak(o, t)) {
            s -= t - o.from;
            break
          }
        return s
      }
      constructor(t) {
        this.hasBreaks = !1, this.axis = t
      }
      findBreakAt(t, e) {
        return pR(e, function (e) {
          return e.from < t && t < e.to
        })
      }
      isInAnyBreak(t, e) {
        let i = this.axis,
          s = i.options.breaks || [],
          o = s.length,
          r, a, n;
        if (o && pG(t)) {
          for (; o--;) l.isInBreak(s[o], t) && (r = !0, a || (a = pX(s[o].showPoints, !i.isXAxis)));
          n = r && e ? r && !a : r
        }
        return n
      }
      setBreaks(t, e) {
        let i = this,
          s = i.axis,
          o = s.chart.time,
          r = pW(t) && !!t.length && !!Object.keys(t[0]).length;
        s.isDirty = i.hasBreaks !== r, i.hasBreaks = r, t?.forEach(t => {
          t.from = o.parse(t.from) || 0, t.to = o.parse(t.to) || 0
        }), t !== s.options.breaks && (s.options.breaks = s.userOptions.breaks = t), s.forceRedraw = !0, s.series.forEach(function (t) {
          t.isDirty = !0
        }), r || s.val2lin !== l.val2Lin || (delete s.val2lin, delete s.lin2val), r && (s.userOptions.ordinal = !1, s.lin2val = l.lin2Val, s.val2lin = l.val2Lin, s.setExtremes = function (t, e, o, r, a) {
          if (i.hasBreaks) {
            let s;
            let o = this.options.breaks || [];
            for (; s = i.findBreakAt(t, o);) t = s.to;
            for (; s = i.findBreakAt(e, o);) e = s.from;
            e < t && (e = t)
          }
          s.constructor.prototype.setExtremes.call(this, t, e, o, r, a)
        }, s.setAxisTranslation = function () {
          if (s.constructor.prototype.setAxisTranslation.call(this), i.unitLength = void 0, i.hasBreaks) {
            let t = s.options.breaks || [],
              e = [],
              o = [],
              r = pX(s.pointRangePadding, 0),
              a = 0,
              n, h, d = s.userMin || s.min,
              c = s.userMax || s.max,
              p, u;
            t.forEach(function (t) {
              h = t.repeat || 1 / 0, pG(d) && pG(c) && (l.isInBreak(t, d) && (d += t.to % h - d % h), l.isInBreak(t, c) && (c -= c % h - t.from % h))
            }), t.forEach(function (t) {
              if (p = t.from, h = t.repeat || 1 / 0, pG(d) && pG(c)) {
                for (; p - h > d;) p -= h;
                for (; p < d;) p += h;
                for (u = p; u < c; u += h) e.push({
                  value: u,
                  move: "in"
                }), e.push({
                  value: u + t.to - t.from,
                  move: "out",
                  size: t.breakSize
                })
              }
            }), e.sort(function (t, e) {
              return t.value === e.value ? ("in" === t.move ? 0 : 1) - ("in" === e.move ? 0 : 1) : t.value - e.value
            }), n = 0, p = d, e.forEach(function (t) {
              1 === (n += "in" === t.move ? 1 : -1) && "in" === t.move && (p = t.value), 0 === n && pG(p) && (o.push({
                from: p,
                to: t.value,
                len: t.value - p - (t.size || 0)
              }), a += t.value - p - (t.size || 0))
            }), i.breakArray = o, pG(d) && pG(c) && pG(s.min) && (i.unitLength = c - d - a + r, pN(s, "afterBreaks"), s.staticScale ? s.transA = s.staticScale : i.unitLength && (s.transA *= (c - s.min + r) / i.unitLength), r && (s.minPixelPadding = s.transA * (s.minPointOffset || 0)), s.min = d, s.max = c)
          }
        }), pX(e, !0) && s.chart.redraw()
      }
    }
    t.Additions = l
  }(P || (P = {}));
  let pH = P;
  L.BrokenAxis = L.BrokenAxis || pH, L.BrokenAxis.compose(L.Axis, L.Series);
  let pF = {},
    {
      arrayMax: pY,
      arrayMin: pj,
      correctFloat: pU,
      extend: pV,
      isNumber: p_
    } = ti;

  function p$(t) {
    let e = t.length,
      i = pZ(t);
    return p_(i) && e && (i = pU(i / e)), i
  }

  function pZ(t) {
    let e = t.length,
      i;
    if (!e && t.hasNulls) i = null;
    else if (e)
      for (i = 0; e--;) i += t[e];
    return i
  }
  let pq = {
    average: p$,
    averages: function () {
      let t = [];
      return [].forEach.call(arguments, function (e) {
        t.push(p$(e))
      }), void 0 === t[0] ? void 0 : t
    },
    close: function (t) {
      return t.length ? t[t.length - 1] : t.hasNulls ? null : void 0
    },
    high: function (t) {
      return t.length ? pY(t) : t.hasNulls ? null : void 0
    },
    hlc: function (t, e, i) {
      if (t = pF.high(t), e = pF.low(e), i = pF.close(i), p_(t) || p_(e) || p_(i)) return [t, e, i]
    },
    low: function (t) {
      return t.length ? pj(t) : t.hasNulls ? null : void 0
    },
    ohlc: function (t, e, i, s) {
      if (t = pF.open(t), e = pF.high(e), i = pF.low(i), s = pF.close(s), p_(t) || p_(e) || p_(i) || p_(s)) return [t, e, i, s]
    },
    open: function (t) {
      return t.length ? t[0] : t.hasNulls ? null : void 0
    },
    range: function (t, e) {
      return (t = pF.low(t), e = pF.high(e), p_(t) || p_(e)) ? [t, e] : null === t && null === e ? null : void 0
    },
    sum: pZ
  };
  pV(pF, pq);
  let pK = {
    common: {
      groupPixelWidth: 2,
      dateTimeLabelFormats: {
        millisecond: ["%[AebHMSL]", "%[AebHMSL]", "-%[HMSL]"],
        second: ["%[AebHMS]", "%[AebHMS]", "-%[HMS]"],
        minute: ["%[AebHM]", "%[AebHM]", "-%[HM]"],
        hour: ["%[AebHM]", "%[AebHM]", "-%[HM]"],
        day: ["%[AebY]", "%[Aeb]", "-%[AebY]"],
        week: ["week from %[AebY]", "%[Aeb]", "-%[AebY]"],
        month: ["%[BY]", "%[B]", "-%[BY]"],
        year: ["%Y", "%Y", "-%Y"]
      }
    },
    seriesSpecific: {
      line: {},
      spline: {},
      area: {},
      areaspline: {},
      arearange: {},
      column: {
        groupPixelWidth: 10
      },
      columnrange: {
        groupPixelWidth: 10
      },
      candlestick: {
        groupPixelWidth: 10
      },
      ohlc: {
        groupPixelWidth: 5
      },
      hlc: {
        groupPixelWidth: 5
      },
      heikinashi: {
        groupPixelWidth: 10
      }
    },
    units: [
      ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
      ["second", [1, 2, 5, 10, 15, 30]],
      ["minute", [1, 2, 5, 10, 15, 30]],
      ["hour", [1, 2, 3, 4, 6, 8, 12]],
      ["day", [1]],
      ["week", [1]],
      ["month", [1, 3, 6]],
      ["year", null]
    ]
  },
    {
      addEvent: pJ,
      extend: pQ,
      merge: p0,
      pick: p1
    } = ti;

  function p2(t) {
    let e = this,
      i = e.series;
    i.forEach(function (t) {
      t.groupPixelWidth = void 0
    }), i.forEach(function (i) {
      i.groupPixelWidth = e.getGroupPixelWidth && e.getGroupPixelWidth(), i.groupPixelWidth && (i.hasProcessed = !0), i.applyGrouping(!!t.hasExtremesChanged)
    })
  }

  function p3() {
    let t = this.series,
      e = t.length,
      i = 0,
      s = !1,
      o, r;
    for (; e--;)(r = t[e].options.dataGrouping) && (i = Math.max(i, p1(r.groupPixelWidth, pK.common.groupPixelWidth)), o = (t[e].dataTable.modified || t[e].dataTable).rowCount, (t[e].groupPixelWidth || o > this.chart.plotSizeX / i || o && r.forced) && (s = !0));
    return s ? i : 0
  }

  function p5() {
    this.series.forEach(function (t) {
      t.hasProcessed = !1
    })
  }

  function p6(t, e) {
    let i;
    if (e = p1(e, !0), t || (t = {
      forced: !1,
      units: null
    }), this instanceof o)
      for (i = this.series.length; i--;) this.series[i].update({
        dataGrouping: t
      }, !1);
    else this.chart.options.series.forEach(function (e) {
      e.dataGrouping = "boolean" == typeof t ? t : p0(t, e.dataGrouping)
    });
    this.ordinal && (this.ordinal.slope = void 0), e && this.chart.redraw()
  }
  let p9 = {
    compose: function (t) {
      o = t;
      let e = t.prototype;
      e.applyGrouping || (pJ(t, "afterSetScale", p5), pJ(t, "postProcessData", p2), pQ(e, {
        applyGrouping: p2,
        getGroupPixelWidth: p3,
        setDataGrouping: p6
      }))
    }
  },
    {
      series: {
        prototype: p4
      }
    } = rx,
    {
      addEvent: p8,
      defined: p7,
      error: ut,
      extend: ue,
      isNumber: ui,
      merge: us,
      pick: uo,
      splat: ur
    } = ti,
    ua = p4.generatePoints;

  function un(t) {
    var e;
    let i, s;
    let o = this.chart,
      r = this.options.dataGrouping,
      a = !1 !== this.allowDG && r && uo(r.enabled, o.options.isStock),
      n = this.reserveSpace(),
      h = this.currentDataGrouping,
      l, d, c = !1;
    a && !this.requireSorting && (this.requireSorting = c = !0);
    let p = !1 == !(this.isCartesian && !this.isDirty && !this.xAxis.isDirty && !this.yAxis.isDirty && !t) || !a;
    if (c && (this.requireSorting = !1), p) return;
    this.destroyGroupedData();
    let u = r.groupAll ? this.dataTable : this.dataTable.modified || this.dataTable,
      g = this.getColumn("x", !r.groupAll),
      f = o.plotSizeX,
      m = this.xAxis,
      x = m.getExtremes(),
      y = m.options.ordinal,
      b = this.groupPixelWidth;
    if (b && g && u.rowCount && f && ui(x.min)) {
      s = !0, this.isDirty = !0, this.points = null;
      let t = x.min,
        a = x.max,
        h = y && m.ordinal && m.ordinal.getGroupIntervalFactor(t, a, this) || 1,
        c = b * (a - t) / f * h,
        p = m.getTimeTicks(sZ.Additions.prototype.normalizeTimeTickInterval(c, r.units || pK.units), Math.min(t, g[0]), Math.max(a, g[g.length - 1]), m.options.startOfWeek, g, this.closestPointRange),
        v = p4.groupData.apply(this, [u, p, r.approximation]),
        k = v.modified,
        M = k.getColumn("x", !0),
        w = 0;
      for (r?.smoothed && k.rowCount && (r.firstAnchor = "firstPoint", r.anchor = "middle", r.lastAnchor = "lastPoint", ut(32, !1, o, {
        "dataGrouping.smoothed": "use dataGrouping.anchor"
      })), i = 1; i < p.length; i++) p.info.segmentStarts && -1 !== p.info.segmentStarts.indexOf(i) || (w = Math.max(p[i] - p[i - 1], w));
      (l = p.info).gapSize = w, this.closestPointRange = p.info.totalRange, this.groupMap = v.groupMap, this.currentDataGrouping = l, ! function (t, e, i) {
        let s = t.options.dataGrouping,
          o = t.currentDataGrouping && t.currentDataGrouping.gapSize,
          r = t.getColumn("x");
        if (!(s && r.length && o && t.groupMap)) return;
        let a = e.length - 1,
          n = s.anchor,
          h = s.firstAnchor,
          l = s.lastAnchor,
          d = e.length - 1,
          c = 0;
        if (h && r[0] >= e[0]) {
          let i;
          c++;
          let s = t.groupMap[0].start,
            a = t.groupMap[0].length;
          ui(s) && ui(a) && (i = s + (a - 1)), e[0] = ({
            start: e[0],
            middle: e[0] + .5 * o,
            end: e[0] + o,
            firstPoint: r[0],
            lastPoint: i && r[i]
          })[h]
        }
        if (a > 0 && l && o && e[a] >= i - o) {
          d--;
          let i = t.groupMap[t.groupMap.length - 1].start;
          e[a] = ({
            start: e[a],
            middle: e[a] + .5 * o,
            end: e[a] + o,
            firstPoint: i && r[i],
            lastPoint: r[r.length - 1]
          })[l]
        }
        if (n && "start" !== n) {
          let t = o * ({
            middle: .5,
            end: 1
          })[n];
          for (; d >= c;) e[d] += t, d--
        }
      }(this, M || [], a), n && M && (p7((e = M)[0]) && ui(m.min) && ui(m.dataMin) && e[0] < m.min && ((!p7(m.options.min) && m.min <= m.dataMin || m.min === m.dataMin) && (m.min = Math.min(e[0], m.min)), m.dataMin = Math.min(e[0], m.dataMin)), p7(e[e.length - 1]) && ui(m.max) && ui(m.dataMax) && e[e.length - 1] > m.max && ((!p7(m.options.max) && ui(m.dataMax) && m.max >= m.dataMax || m.max === m.dataMax) && (m.max = Math.max(e[e.length - 1], m.max)), m.dataMax = Math.max(e[e.length - 1], m.dataMax))), r.groupAll && (this.allGroupedTable = k, M = (k = (d = this.cropData(k, m.min || 0, m.max || 0)).modified).getColumn("x"), this.cropStart = d.start), this.dataTable.modified = k
    } else this.groupMap = void 0, this.currentDataGrouping = void 0;
    this.hasGroupedData = s, this.preventGraphAnimation = (h && h.totalRange) !== (l && l.totalRange)
  }

  function uh() {
    this.groupedData && (this.groupedData.forEach(function (t, e) {
      t && (this.groupedData[e] = t.destroy ? t.destroy() : null)
    }, this), this.groupedData.length = 0, delete this.allGroupedTable)
  }

  function ul() {
    ua.apply(this), this.destroyGroupedData(), this.groupedData = this.hasGroupedData ? this.points : null
  }

  function ud() {
    return this.is("arearange") ? "range" : this.is("ohlc") ? "ohlc" : this.is("hlc") ? "hlc" : this.is("column") || this.options.cumulative ? "sum" : "average"
  }

  function uc(t, e, i) {
    let s = t.getColumn("x", !0) || [],
      o = t.getColumn("y", !0),
      r = this,
      a = r.data,
      n = r.options && r.options.data,
      h = [],
      l = new rh,
      d = [],
      c = t.rowCount,
      p = !!o,
      u = [],
      g = r.pointArrayMap,
      f = g && g.length,
      m = ["x"].concat(g || ["y"]),
      x = (g || ["y"]).map(() => []),
      y = this.options.dataGrouping && this.options.dataGrouping.groupAll,
      b, v, k, M = 0,
      w = 0,
      S = "function" == typeof i ? i : i && pF[i] ? pF[i] : pF[r.getDGApproximation && r.getDGApproximation() || "average"];
    if (f) {
      let t = g.length;
      for (; t--;) u.push([])
    } else u.push([]);
    let A = f || 1;
    for (let t = 0; t <= c; t++)
      if (!(s[t] < e[0])) {
        for (; void 0 !== e[M + 1] && s[t] >= e[M + 1] || t === c;) {
          if (b = e[M], r.dataGroupInfo = {
            start: y ? w : r.cropStart + w,
            length: u[0].length,
            groupStart: b
          }, k = S.apply(r, u), r.pointClass && !p7(r.dataGroupInfo.options) && (r.dataGroupInfo.options = us(r.pointClass.prototype.optionsToObject.call({
            series: r
          }, r.options.data[r.cropStart + w])), m.forEach(function (t) {
            delete r.dataGroupInfo.options[t]
          })), void 0 !== k) {
            h.push(b);
            let t = ur(k);
            for (let e = 0; e < t.length; e++) x[e].push(t[e]);
            d.push(r.dataGroupInfo)
          }
          w = t;
          for (let t = 0; t < A; t++) u[t].length = 0, u[t].hasNulls = !1;
          if (M += 1, t === c) break
        }
        if (t === c) break;
        if (g) {
          let e;
          let i = y ? t : r.cropStart + t,
            s = a && a[i] || r.pointClass.prototype.applyOptions.apply({
              series: r
            }, [n[i]]);
          for (let t = 0; t < f; t++) ui(e = s[g[t]]) ? u[t].push(e) : null === e && (u[t].hasNulls = !0)
        } else ui(v = p ? o[t] : null) ? u[0].push(v) : null === v && (u[0].hasNulls = !0)
      } let T = {
        x: h
      };
    return (g || ["y"]).forEach((t, e) => {
      T[t] = x[e]
    }), l.setColumns(T), {
      groupMap: d,
      modified: l
    }
  }

  function up(t) {
    let e = t.options,
      i = this.type,
      s = this.chart.options.plotOptions,
      o = this.useCommonDataGrouping && pK.common,
      r = pK.seriesSpecific,
      a = tA.defaultOptions.plotOptions[i].dataGrouping;
    if (s && (r[i] || o)) {
      let t = this.chart.rangeSelector;
      a || (a = us(pK.common, r[i])), e.dataGrouping = us(o, a, s.series && s.series.dataGrouping, s[i].dataGrouping, this.userOptions.dataGrouping, !e.isInternal && t && ui(t.selected) && t.buttonOptions[t.selected].dataGrouping)
    }
  }
  let uu = {
    compose: function (t) {
      let e = t.prototype;
      e.applyGrouping || (p8(t.prototype.pointClass, "update", function () {
        if (this.dataGroup) return ut(24, !1, this.series.chart), !1
      }), p8(t, "afterSetOptions", up), p8(t, "destroy", uh), ue(e, {
        applyGrouping: un,
        destroyGroupedData: uh,
        generatePoints: ul,
        getDGApproximation: ud,
        groupData: uc
      }))
    },
    groupData: uc
  },
    {
      format: ug
    } = ec,
    {
      composed: uf
    } = L,
    {
      addEvent: um,
      extend: ux,
      isNumber: uy,
      pick: ub,
      pushUnique: uv
    } = ti;

  function uk(t) {
    let e = this.chart,
      i = e.time,
      s = t.point,
      o = s.series,
      r = o.options,
      a = o.tooltipOptions,
      n = r.dataGrouping,
      h = o.xAxis,
      l = a.xDateFormat || "",
      d, c, p, u, g, f = a[t.isFooter ? "footerFormat" : "headerFormat"];
    if (h && "datetime" === h.options.type && n && uy(s.key)) {
      c = o.currentDataGrouping, p = n.dateTimeLabelFormats || pK.common.dateTimeLabelFormats, c ? (u = p[c.unitName], 1 === c.count ? l = u[0] : (l = u[1], d = u[2])) : !l && p && h.dateTime && (l = h.dateTime.getXDateFormat(s.x, a.dateTimeLabelFormats));
      let r = ub(o.groupMap?.[s.index].groupStart, s.key),
        m = r + (c?.totalRange || 0) - 1;
      g = i.dateFormat(l, r), d && (g += i.dateFormat(d, m)), o.chart.styledMode && (f = this.styledModeFormat(f)), t.text = ug(f, {
        point: ux(s, {
          key: g
        }),
        series: o
      }, e), t.preventDefault()
    }
  }
  let uM = {
    compose: function (t, e, i) {
      p9.compose(t), uu.compose(e), i && uv(uf, "DataGrouping") && um(i, "headerFormatter", uk)
    },
    groupData: uu.groupData
  };
  L.dataGrouping = L.dataGrouping || {}, L.dataGrouping.approximationDefaults = L.dataGrouping.approximationDefaults || pq, L.dataGrouping.approximations = L.dataGrouping.approximations || pF, uM.compose(L.Axis, L.Series, L.Tooltip);
  let {
    defined: uw,
    isNumber: uS,
    pick: uA
  } = ti, uT = {
    backgroundColor: "string",
    borderColor: "string",
    borderRadius: "string",
    color: "string",
    fill: "string",
    fontSize: "string",
    labels: "string",
    name: "string",
    stroke: "string",
    title: "string"
  }, {
    addEvent: uC,
    isObject: uP,
    pick: uO,
    defined: uE,
    merge: uL
  } = ti, {
    getAssignedAxis: uB
  } = {
      annotationsFieldsTypes: uT,
      getAssignedAxis: function (t) {
        return t.filter(t => {
          let e = t.axis.getExtremes(),
            i = e.min,
            s = e.max,
            o = uA(t.axis.minPointOffset, 0);
          return uS(i) && uS(s) && t.value >= i - o && t.value <= s + o && !t.axis.options.isInternal
        })[0]
      },
      getFieldType: function (t, e) {
        let i = uT[t],
          s = typeof e;
        return uw(i) && (s = i), ({
          string: "text",
          number: "number",
          boolean: "checkbox"
        })[s]
      }
    }, uD = [], uI = {
      enabled: !0,
      sensitivity: 1.1
    }, uz = t => (uP(t) || (t = {
      enabled: t ?? !0
    }), uL(uI, t)), uR = function (t, e, i, s, o, a, n) {
      let h = uO(n.type, t.zooming.type, ""),
        l = [];
      "x" === h ? l = i : "y" === h ? l = s : "xy" === h && (l = t.axes);
      let d = t.transform({
        axes: l,
        to: {
          x: o - 5,
          y: a - 5,
          width: 10,
          height: 10
        },
        from: {
          x: o - 5 * e,
          y: a - 5 * e,
          width: 10 * e,
          height: 10 * e
        },
        trigger: "mousewheel"
      });
      return d && (uE(r) && clearTimeout(r), r = setTimeout(() => {
        t.pointer?.drop()
      }, 400)), d
    };

  function uN() {
    let t = uz(this.zooming.mouseWheel);
    t.enabled && uC(this.container, "wheel", e => {
      e = this.pointer?.normalize(e) || e;
      let {
        pointer: i
      } = this, s = i && !i.inClass(e.target, "highcharts-no-mousewheel");
      if (this.isInsidePlot(e.chartX - this.plotLeft, e.chartY - this.plotTop) && s) {
        let s = t.sensitivity || 1.1,
          o = e.detail || (e.deltaY || 0) / 120,
          r = uB(i.getCoordinates(e).xAxis),
          a = uB(i.getCoordinates(e).yAxis);
        uR(this, Math.pow(s, o), r ? [r.axis] : this.xAxis, a ? [a.axis] : this.yAxis, e.chartX, e.chartY, t) && e.preventDefault?.()
      }
    })
  }
  L.MouseWheelZoom = L.MouseWheelZoom || {
    compose: function (t) {
      -1 === uD.indexOf(t) && (uD.push(t), uC(t, "afterGetContainer", uN))
    }
  }, L.MouseWheelZoom.compose(L.Chart), L.Navigator = L.Navigator || dq, L.OrdinalAxis = L.OrdinalAxis || d9, L.RangeSelector = L.RangeSelector || cI, L.Scrollbar = L.Scrollbar || dE, L.stockChart = L.stockChart || cJ.stockChart, L.StockChart = L.StockChart || L.stockChart, L.extend(L.StockChart, cJ), lN.compose(L.Series, L.Axis, L.Point), pI.compose(L.Renderer), pa.compose(L.Series), L.Navigator.compose(L.Chart, L.Axis, L.Series), L.OrdinalAxis.compose(L.Axis, L.Series, L.Chart), L.RangeSelector.compose(L.Axis, L.Chart), L.Scrollbar.compose(L.Axis), L.StockChart.compose(L.Chart, L.Axis, L.Series, L.SVGRenderer)/**
      * @license Highstock JS v12.0.2 (2024-12-04)
      * @module highcharts/highstock
      *
      * (c) 2009-2024 Torstein Honsi
      *
      * License: www.highcharts.com/license
      */L.product = "Highstock"; let uW = L; return E.default
})());