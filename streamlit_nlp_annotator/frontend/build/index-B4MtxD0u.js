var zu = { exports: {} }, Cr = {}, Lu = { exports: {} }, $ = {};
var Ra;
function Uf() {
  if (Ra) return $;
  Ra = 1;
  var h = /* @__PURE__ */ Symbol.for("react.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.fragment"), T = /* @__PURE__ */ Symbol.for("react.strict_mode"), z = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), A = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), U = Symbol.iterator;
  function I(c) {
    return c === null || typeof c != "object" ? null : (c = U && c[U] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var te = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ye = Object.assign, Y = {};
  function X(c, v, V) {
    this.props = c, this.context = v, this.refs = Y, this.updater = V || te;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, X.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function Pe() {
  }
  Pe.prototype = X.prototype;
  function De(c, v, V) {
    this.props = c, this.context = v, this.refs = Y, this.updater = V || te;
  }
  var fe = De.prototype = new Pe();
  fe.constructor = De, ye(fe, X.prototype), fe.isPureReactComponent = !0;
  var ge = Array.isArray, Re = Object.prototype.hasOwnProperty, le = { current: null }, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function we(c, v, V) {
    var W, G = {}, Z = null, ne = null;
    if (v != null) for (W in v.ref !== void 0 && (ne = v.ref), v.key !== void 0 && (Z = "" + v.key), v) Re.call(v, W) && !pe.hasOwnProperty(W) && (G[W] = v[W]);
    var ee = arguments.length - 2;
    if (ee === 1) G.children = V;
    else if (1 < ee) {
      for (var ie = Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He + 2];
      G.children = ie;
    }
    if (c && c.defaultProps) for (W in ee = c.defaultProps, ee) G[W] === void 0 && (G[W] = ee[W]);
    return { $$typeof: h, type: c, key: Z, ref: ne, props: G, _owner: le.current };
  }
  function me(c, v) {
    return { $$typeof: h, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function et(c) {
    return typeof c == "object" && c !== null && c.$$typeof === h;
  }
  function Oe(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(V) {
      return v[V];
    });
  }
  var Se = /\/+/g;
  function je(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Oe("" + c.key) : v.toString(36);
  }
  function Ke(c, v, V, W, G) {
    var Z = typeof c;
    (Z === "undefined" || Z === "boolean") && (c = null);
    var ne = !1;
    if (c === null) ne = !0;
    else switch (Z) {
      case "string":
      case "number":
        ne = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case h:
          case S:
            ne = !0;
        }
    }
    if (ne) return ne = c, G = G(ne), c = W === "" ? "." + je(ne, 0) : W, ge(G) ? (V = "", c != null && (V = c.replace(Se, "$&/") + "/"), Ke(G, v, V, "", function(He) {
      return He;
    })) : G != null && (et(G) && (G = me(G, V + (!G.key || ne && ne.key === G.key ? "" : ("" + G.key).replace(Se, "$&/") + "/") + c)), v.push(G)), 1;
    if (ne = 0, W = W === "" ? "." : W + ":", ge(c)) for (var ee = 0; ee < c.length; ee++) {
      Z = c[ee];
      var ie = W + je(Z, ee);
      ne += Ke(Z, v, V, ie, G);
    }
    else if (ie = I(c), typeof ie == "function") for (c = ie.call(c), ee = 0; !(Z = c.next()).done; ) Z = Z.value, ie = W + je(Z, ee++), ne += Ke(Z, v, V, ie, G);
    else if (Z === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return ne;
  }
  function Ye(c, v, V) {
    if (c == null) return c;
    var W = [], G = 0;
    return Ke(c, W, "", "", function(Z) {
      return v.call(V, Z, G++);
    }), W;
  }
  function ze(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(V) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = V);
      }, function(V) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = V);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ue = { current: null }, _ = { transition: null }, M = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: _, ReactCurrentOwner: le };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $.Children = { map: Ye, forEach: function(c, v, V) {
    Ye(c, function() {
      v.apply(this, arguments);
    }, V);
  }, count: function(c) {
    var v = 0;
    return Ye(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return Ye(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!et(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, $.Component = X, $.Fragment = f, $.Profiler = z, $.PureComponent = De, $.StrictMode = T, $.Suspense = j, $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, $.act = x, $.cloneElement = function(c, v, V) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var W = ye({}, c.props), G = c.key, Z = c.ref, ne = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (Z = v.ref, ne = le.current), v.key !== void 0 && (G = "" + v.key), c.type && c.type.defaultProps) var ee = c.type.defaultProps;
      for (ie in v) Re.call(v, ie) && !pe.hasOwnProperty(ie) && (W[ie] = v[ie] === void 0 && ee !== void 0 ? ee[ie] : v[ie]);
    }
    var ie = arguments.length - 2;
    if (ie === 1) W.children = V;
    else if (1 < ie) {
      ee = Array(ie);
      for (var He = 0; He < ie; He++) ee[He] = arguments[He + 2];
      W.children = ee;
    }
    return { $$typeof: h, type: c.type, key: G, ref: Z, props: W, _owner: ne };
  }, $.createContext = function(c) {
    return c = { $$typeof: A, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: E, _context: c }, c.Consumer = c;
  }, $.createElement = we, $.createFactory = function(c) {
    var v = we.bind(null, c);
    return v.type = c, v;
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(c) {
    return { $$typeof: H, render: c };
  }, $.isValidElement = et, $.lazy = function(c) {
    return { $$typeof: B, _payload: { _status: -1, _result: c }, _init: ze };
  }, $.memo = function(c, v) {
    return { $$typeof: K, type: c, compare: v === void 0 ? null : v };
  }, $.startTransition = function(c) {
    var v = _.transition;
    _.transition = {};
    try {
      c();
    } finally {
      _.transition = v;
    }
  }, $.unstable_act = x, $.useCallback = function(c, v) {
    return ue.current.useCallback(c, v);
  }, $.useContext = function(c) {
    return ue.current.useContext(c);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(c) {
    return ue.current.useDeferredValue(c);
  }, $.useEffect = function(c, v) {
    return ue.current.useEffect(c, v);
  }, $.useId = function() {
    return ue.current.useId();
  }, $.useImperativeHandle = function(c, v, V) {
    return ue.current.useImperativeHandle(c, v, V);
  }, $.useInsertionEffect = function(c, v) {
    return ue.current.useInsertionEffect(c, v);
  }, $.useLayoutEffect = function(c, v) {
    return ue.current.useLayoutEffect(c, v);
  }, $.useMemo = function(c, v) {
    return ue.current.useMemo(c, v);
  }, $.useReducer = function(c, v, V) {
    return ue.current.useReducer(c, v, V);
  }, $.useRef = function(c) {
    return ue.current.useRef(c);
  }, $.useState = function(c) {
    return ue.current.useState(c);
  }, $.useSyncExternalStore = function(c, v, V) {
    return ue.current.useSyncExternalStore(c, v, V);
  }, $.useTransition = function() {
    return ue.current.useTransition();
  }, $.version = "18.3.1", $;
}
var za;
function Ou() {
  return za || (za = 1, Lu.exports = Uf()), Lu.exports;
}
var La;
function Af() {
  if (La) return Cr;
  La = 1;
  var h = Ou(), S = /* @__PURE__ */ Symbol.for("react.element"), f = /* @__PURE__ */ Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, z = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(H, j, K) {
    var B, U = {}, I = null, te = null;
    K !== void 0 && (I = "" + K), j.key !== void 0 && (I = "" + j.key), j.ref !== void 0 && (te = j.ref);
    for (B in j) T.call(j, B) && !E.hasOwnProperty(B) && (U[B] = j[B]);
    if (H && H.defaultProps) for (B in j = H.defaultProps, j) U[B] === void 0 && (U[B] = j[B]);
    return { $$typeof: S, type: H, key: I, ref: te, props: U, _owner: z.current };
  }
  return Cr.Fragment = f, Cr.jsx = A, Cr.jsxs = A, Cr;
}
var Ta;
function Vf() {
  return Ta || (Ta = 1, zu.exports = Af()), zu.exports;
}
var q = Vf(), oe = Ou(), Dl = {}, Tu = { exports: {} }, be = {}, Mu = { exports: {} }, Du = {};
var Ma;
function Bf() {
  return Ma || (Ma = 1, (function(h) {
    function S(_, M) {
      var x = _.length;
      _.push(M);
      e: for (; 0 < x; ) {
        var c = x - 1 >>> 1, v = _[c];
        if (0 < z(v, M)) _[c] = M, _[x] = v, x = c;
        else break e;
      }
    }
    function f(_) {
      return _.length === 0 ? null : _[0];
    }
    function T(_) {
      if (_.length === 0) return null;
      var M = _[0], x = _.pop();
      if (x !== M) {
        _[0] = x;
        e: for (var c = 0, v = _.length, V = v >>> 1; c < V; ) {
          var W = 2 * (c + 1) - 1, G = _[W], Z = W + 1, ne = _[Z];
          if (0 > z(G, x)) Z < v && 0 > z(ne, G) ? (_[c] = ne, _[Z] = x, c = Z) : (_[c] = G, _[W] = x, c = W);
          else if (Z < v && 0 > z(ne, x)) _[c] = ne, _[Z] = x, c = Z;
          else break e;
        }
      }
      return M;
    }
    function z(_, M) {
      var x = _.sortIndex - M.sortIndex;
      return x !== 0 ? x : _.id - M.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      h.unstable_now = function() {
        return E.now();
      };
    } else {
      var A = Date, H = A.now();
      h.unstable_now = function() {
        return A.now() - H;
      };
    }
    var j = [], K = [], B = 1, U = null, I = 3, te = !1, ye = !1, Y = !1, X = typeof setTimeout == "function" ? setTimeout : null, Pe = typeof clearTimeout == "function" ? clearTimeout : null, De = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function fe(_) {
      for (var M = f(K); M !== null; ) {
        if (M.callback === null) T(K);
        else if (M.startTime <= _) T(K), M.sortIndex = M.expirationTime, S(j, M);
        else break;
        M = f(K);
      }
    }
    function ge(_) {
      if (Y = !1, fe(_), !ye) if (f(j) !== null) ye = !0, ze(Re);
      else {
        var M = f(K);
        M !== null && ue(ge, M.startTime - _);
      }
    }
    function Re(_, M) {
      ye = !1, Y && (Y = !1, Pe(we), we = -1), te = !0;
      var x = I;
      try {
        for (fe(M), U = f(j); U !== null && (!(U.expirationTime > M) || _ && !Oe()); ) {
          var c = U.callback;
          if (typeof c == "function") {
            U.callback = null, I = U.priorityLevel;
            var v = c(U.expirationTime <= M);
            M = h.unstable_now(), typeof v == "function" ? U.callback = v : U === f(j) && T(j), fe(M);
          } else T(j);
          U = f(j);
        }
        if (U !== null) var V = !0;
        else {
          var W = f(K);
          W !== null && ue(ge, W.startTime - M), V = !1;
        }
        return V;
      } finally {
        U = null, I = x, te = !1;
      }
    }
    var le = !1, pe = null, we = -1, me = 5, et = -1;
    function Oe() {
      return !(h.unstable_now() - et < me);
    }
    function Se() {
      if (pe !== null) {
        var _ = h.unstable_now();
        et = _;
        var M = !0;
        try {
          M = pe(!0, _);
        } finally {
          M ? je() : (le = !1, pe = null);
        }
      } else le = !1;
    }
    var je;
    if (typeof De == "function") je = function() {
      De(Se);
    };
    else if (typeof MessageChannel < "u") {
      var Ke = new MessageChannel(), Ye = Ke.port2;
      Ke.port1.onmessage = Se, je = function() {
        Ye.postMessage(null);
      };
    } else je = function() {
      X(Se, 0);
    };
    function ze(_) {
      pe = _, le || (le = !0, je());
    }
    function ue(_, M) {
      we = X(function() {
        _(h.unstable_now());
      }, M);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, h.unstable_continueExecution = function() {
      ye || te || (ye = !0, ze(Re));
    }, h.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : me = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, h.unstable_getFirstCallbackNode = function() {
      return f(j);
    }, h.unstable_next = function(_) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = I;
      }
      var x = I;
      I = M;
      try {
        return _();
      } finally {
        I = x;
      }
    }, h.unstable_pauseExecution = function() {
    }, h.unstable_requestPaint = function() {
    }, h.unstable_runWithPriority = function(_, M) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var x = I;
      I = _;
      try {
        return M();
      } finally {
        I = x;
      }
    }, h.unstable_scheduleCallback = function(_, M, x) {
      var c = h.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? c + x : c) : x = c, _) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = x + v, _ = { id: B++, callback: M, priorityLevel: _, startTime: x, expirationTime: v, sortIndex: -1 }, x > c ? (_.sortIndex = x, S(K, _), f(j) === null && _ === f(K) && (Y ? (Pe(we), we = -1) : Y = !0, ue(ge, x - c))) : (_.sortIndex = v, S(j, _), ye || te || (ye = !0, ze(Re))), _;
    }, h.unstable_shouldYield = Oe, h.unstable_wrapCallback = function(_) {
      var M = I;
      return function() {
        var x = I;
        I = M;
        try {
          return _.apply(this, arguments);
        } finally {
          I = x;
        }
      };
    };
  })(Du)), Du;
}
var Da;
function Hf() {
  return Da || (Da = 1, Mu.exports = Bf()), Mu.exports;
}
var Oa;
function Wf() {
  if (Oa) return be;
  Oa = 1;
  var h = Ou(), S = Hf();
  function f(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var T = /* @__PURE__ */ new Set(), z = {};
  function E(e, t) {
    A(e, t), A(e + "Capture", t);
  }
  function A(e, t) {
    for (z[e] = t, e = 0; e < t.length; e++) T.add(t[e]);
  }
  var H = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, K = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, U = {};
  function I(e) {
    return j.call(U, e) ? !0 : j.call(B, e) ? !1 : K.test(e) ? U[e] = !0 : (B[e] = !0, !1);
  }
  function te(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ye(e, t, n, r) {
    if (t === null || typeof t > "u" || te(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function Y(e, t, n, r, l, o, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
  }
  var X = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    X[e] = new Y(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    X[t] = new Y(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    X[e] = new Y(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    X[e] = new Y(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    X[e] = new Y(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    X[e] = new Y(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    X[e] = new Y(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    X[e] = new Y(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    X[e] = new Y(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Pe = /[\-:]([a-z])/g;
  function De(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Pe,
      De
    );
    X[t] = new Y(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Pe, De);
    X[t] = new Y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Pe, De);
    X[t] = new Y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    X[e] = new Y(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), X.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    X[e] = new Y(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function fe(e, t, n, r) {
    var l = X.hasOwnProperty(t) ? X[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ye(t, n, l, r) && (n = null), r || l === null ? I(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ge = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Re = /* @__PURE__ */ Symbol.for("react.element"), le = /* @__PURE__ */ Symbol.for("react.portal"), pe = /* @__PURE__ */ Symbol.for("react.fragment"), we = /* @__PURE__ */ Symbol.for("react.strict_mode"), me = /* @__PURE__ */ Symbol.for("react.profiler"), et = /* @__PURE__ */ Symbol.for("react.provider"), Oe = /* @__PURE__ */ Symbol.for("react.context"), Se = /* @__PURE__ */ Symbol.for("react.forward_ref"), je = /* @__PURE__ */ Symbol.for("react.suspense"), Ke = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ye = /* @__PURE__ */ Symbol.for("react.memo"), ze = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.offscreen"), _ = Symbol.iterator;
  function M(e) {
    return e === null || typeof e != "object" ? null : (e = _ && e[_] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var x = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      c = t && t[1] || "";
    }
    return `
` + c + e;
  }
  var V = !1;
  function W(e, t) {
    if (!e || V) return "";
    V = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var r = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          r = m;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (var l = m.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; ) i--;
        for (; 1 <= u && 0 <= i; u--, i--) if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if (u--, i--, 0 > i || l[u] !== o[i]) {
                var s = `
` + l[u].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= u && 0 <= i);
          break;
        }
      }
    } finally {
      V = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function G(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = W(e.type, !1), e;
      case 11:
        return e = W(e.type.render, !1), e;
      case 1:
        return e = W(e.type, !0), e;
      default:
        return "";
    }
  }
  function Z(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case pe:
        return "Fragment";
      case le:
        return "Portal";
      case me:
        return "Profiler";
      case we:
        return "StrictMode";
      case je:
        return "Suspense";
      case Ke:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Oe:
        return (e.displayName || "Context") + ".Consumer";
      case et:
        return (e._context.displayName || "Context") + ".Provider";
      case Se:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ye:
        return t = e.displayName || null, t !== null ? t : Z(e.type) || "Memo";
      case ze:
        t = e._payload, e = e._init;
        try {
          return Z(e(t));
        } catch {
        }
    }
    return null;
  }
  function ne(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Z(t);
      case 8:
        return t === we ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ee(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ie(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function He(e) {
    var t = ie(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(u) {
        r = "" + u, o.call(this, u);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Q(e) {
    e._valueTracker || (e._valueTracker = He(e));
  }
  function We(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ie(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ft(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ct(e, t) {
    var n = t.checked;
    return x({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function pn(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Iu(e, t) {
    t = t.checked, t != null && fe(e, "checked", t, !1);
  }
  function Il(e, t) {
    Iu(e, t);
    var n = ee(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Fl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fl(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Fu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Fl(e, t, n) {
    (t !== "number" || ft(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var An = Array.isArray;
  function mn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ee(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ul(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(f(91));
    return x({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Uu(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(f(92));
        if (An(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ee(n) };
  }
  function Au(e, t) {
    var n = ee(t.value), r = ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Vu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Bu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Al(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var xr, Hu = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Vn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ba = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bn).forEach(function(e) {
    Ba.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Bn[t] = Bn[e];
    });
  });
  function Wu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bn.hasOwnProperty(e) && Bn[e] ? ("" + t).trim() : t + "px";
  }
  function Qu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Wu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ha = x({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Vl(e, t) {
    if (t) {
      if (Ha[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(f(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(f(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(f(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(f(62));
    }
  }
  function Bl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Hl = null;
  function Wl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ql = null, hn = null, vn = null;
  function $u(e) {
    if (e = ar(e)) {
      if (typeof Ql != "function") throw Error(f(280));
      var t = e.stateNode;
      t && (t = Xr(t), Ql(e.stateNode, e.type, t));
    }
  }
  function Ku(e) {
    hn ? vn ? vn.push(e) : vn = [e] : hn = e;
  }
  function Yu() {
    if (hn) {
      var e = hn, t = vn;
      if (vn = hn = null, $u(e), t) for (e = 0; e < t.length; e++) $u(t[e]);
    }
  }
  function Xu(e, t) {
    return e(t);
  }
  function Gu() {
  }
  var $l = !1;
  function Zu(e, t, n) {
    if ($l) return e(t, n);
    $l = !0;
    try {
      return Xu(e, t, n);
    } finally {
      $l = !1, (hn !== null || vn !== null) && (Gu(), Yu());
    }
  }
  function Hn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Xr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(f(231, t, typeof n));
    return n;
  }
  var Kl = !1;
  if (H) try {
    var Wn = {};
    Object.defineProperty(Wn, "passive", { get: function() {
      Kl = !0;
    } }), window.addEventListener("test", Wn, Wn), window.removeEventListener("test", Wn, Wn);
  } catch {
    Kl = !1;
  }
  function Wa(e, t, n, r, l, o, u, i, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (g) {
      this.onError(g);
    }
  }
  var Qn = !1, Nr = null, Pr = !1, Yl = null, Qa = { onError: function(e) {
    Qn = !0, Nr = e;
  } };
  function $a(e, t, n, r, l, o, u, i, s) {
    Qn = !1, Nr = null, Wa.apply(Qa, arguments);
  }
  function Ka(e, t, n, r, l, o, u, i, s) {
    if ($a.apply(this, arguments), Qn) {
      if (Qn) {
        var m = Nr;
        Qn = !1, Nr = null;
      } else throw Error(f(198));
      Pr || (Pr = !0, Yl = m);
    }
  }
  function bt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ju(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function qu(e) {
    if (bt(e) !== e) throw Error(f(188));
  }
  function Ya(e) {
    var t = e.alternate;
    if (!t) {
      if (t = bt(e), t === null) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return qu(l), e;
          if (o === r) return qu(l), t;
          o = o.sibling;
        }
        throw Error(f(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var u = !1, i = l.child; i; ) {
          if (i === n) {
            u = !0, n = l, r = o;
            break;
          }
          if (i === r) {
            u = !0, r = l, n = o;
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i; ) {
            if (i === n) {
              u = !0, n = o, r = l;
              break;
            }
            if (i === r) {
              u = !0, r = o, n = l;
              break;
            }
            i = i.sibling;
          }
          if (!u) throw Error(f(189));
        }
      }
      if (n.alternate !== r) throw Error(f(190));
    }
    if (n.tag !== 3) throw Error(f(188));
    return n.stateNode.current === n ? e : t;
  }
  function bu(e) {
    return e = Ya(e), e !== null ? ei(e) : null;
  }
  function ei(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ei(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ti = S.unstable_scheduleCallback, ni = S.unstable_cancelCallback, Xa = S.unstable_shouldYield, Ga = S.unstable_requestPaint, _e = S.unstable_now, Za = S.unstable_getCurrentPriorityLevel, Xl = S.unstable_ImmediatePriority, ri = S.unstable_UserBlockingPriority, Rr = S.unstable_NormalPriority, Ja = S.unstable_LowPriority, li = S.unstable_IdlePriority, zr = null, wt = null;
  function qa(e) {
    if (wt && typeof wt.onCommitFiberRoot == "function") try {
      wt.onCommitFiberRoot(zr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var dt = Math.clz32 ? Math.clz32 : tc, ba = Math.log, ec = Math.LN2;
  function tc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ba(e) / ec | 0) | 0;
  }
  var Lr = 64, Tr = 4194304;
  function $n(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Mr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = n & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? r = $n(i) : (o &= u, o !== 0 && (r = $n(o)));
    } else u = n & ~l, u !== 0 ? r = $n(u) : o !== 0 && (r = $n(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - dt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function nc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function rc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var u = 31 - dt(o), i = 1 << u, s = l[u];
      s === -1 ? ((i & n) === 0 || (i & r) !== 0) && (l[u] = nc(i, t)) : s <= t && (e.expiredLanes |= i), o &= ~i;
    }
  }
  function Gl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function oi() {
    var e = Lr;
    return Lr <<= 1, (Lr & 4194240) === 0 && (Lr = 64), e;
  }
  function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Kn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = n;
  }
  function lc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - dt(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function Jl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - dt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var re = 0;
  function ui(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var ii, ql, si, ai, ci, bl = !1, Dr = [], Dt = null, Ot = null, jt = null, Yn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), It = [], oc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ot = null;
        break;
      case "mouseover":
      case "mouseout":
        jt = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xn.delete(t.pointerId);
    }
  }
  function Gn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = ar(t), t !== null && ql(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function uc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Dt = Gn(Dt, e, t, n, r, l), !0;
      case "dragenter":
        return Ot = Gn(Ot, e, t, n, r, l), !0;
      case "mouseover":
        return jt = Gn(jt, e, t, n, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return Yn.set(o, Gn(Yn.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Xn.set(o, Gn(Xn.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function di(e) {
    var t = en(e.target);
    if (t !== null) {
      var n = bt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ju(n), t !== null) {
            e.blockedOn = t, ci(e.priority, function() {
              si(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Or(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = to(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Hl = r, n.target.dispatchEvent(r), Hl = null;
      } else return t = ar(n), t !== null && ql(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function pi(e, t, n) {
    Or(e) && n.delete(t);
  }
  function ic() {
    bl = !1, Dt !== null && Or(Dt) && (Dt = null), Ot !== null && Or(Ot) && (Ot = null), jt !== null && Or(jt) && (jt = null), Yn.forEach(pi), Xn.forEach(pi);
  }
  function Zn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, bl || (bl = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, ic)));
  }
  function Jn(e) {
    function t(l) {
      return Zn(l, e);
    }
    if (0 < Dr.length) {
      Zn(Dr[0], e);
      for (var n = 1; n < Dr.length; n++) {
        var r = Dr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Dt !== null && Zn(Dt, e), Ot !== null && Zn(Ot, e), jt !== null && Zn(jt, e), Yn.forEach(t), Xn.forEach(t), n = 0; n < It.length; n++) r = It[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && (n = It[0], n.blockedOn === null); ) di(n), n.blockedOn === null && It.shift();
  }
  var yn = ge.ReactCurrentBatchConfig, jr = !0;
  function sc(e, t, n, r) {
    var l = re, o = yn.transition;
    yn.transition = null;
    try {
      re = 1, eo(e, t, n, r);
    } finally {
      re = l, yn.transition = o;
    }
  }
  function ac(e, t, n, r) {
    var l = re, o = yn.transition;
    yn.transition = null;
    try {
      re = 4, eo(e, t, n, r);
    } finally {
      re = l, yn.transition = o;
    }
  }
  function eo(e, t, n, r) {
    if (jr) {
      var l = to(e, t, n, r);
      if (l === null) wo(e, t, r, Ir, n), fi(e, r);
      else if (uc(l, e, t, n, r)) r.stopPropagation();
      else if (fi(e, r), t & 4 && -1 < oc.indexOf(e)) {
        for (; l !== null; ) {
          var o = ar(l);
          if (o !== null && ii(o), o = to(e, t, n, r), o === null && wo(e, t, r, Ir, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else wo(e, t, r, null, n);
    }
  }
  var Ir = null;
  function to(e, t, n, r) {
    if (Ir = null, e = Wl(r), e = en(e), e !== null) if (t = bt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ju(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ir = e, null;
  }
  function mi(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Za()) {
          case Xl:
            return 1;
          case ri:
            return 4;
          case Rr:
          case Ja:
            return 16;
          case li:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ft = null, no = null, Fr = null;
  function hi() {
    if (Fr) return Fr;
    var e, t = no, n = t.length, r, l = "value" in Ft ? Ft.value : Ft.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++) ;
    return Fr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ur(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ar() {
    return !0;
  }
  function vi() {
    return !1;
  }
  function tt(e) {
    function t(n, r, l, o, u) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ar : vi, this.isPropagationStopped = vi, this;
    }
    return x(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ar);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ar);
    }, persist: function() {
    }, isPersistent: Ar }), t;
  }
  var gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ro = tt(gn), qn = x({}, gn, { view: 0, detail: 0 }), cc = tt(qn), lo, oo, bn, Vr = x({}, qn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: io, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== bn && (bn && e.type === "mousemove" ? (lo = e.screenX - bn.screenX, oo = e.screenY - bn.screenY) : oo = lo = 0, bn = e), lo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : oo;
  } }), yi = tt(Vr), fc = x({}, Vr, { dataTransfer: 0 }), dc = tt(fc), pc = x({}, qn, { relatedTarget: 0 }), uo = tt(pc), mc = x({}, gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hc = tt(mc), vc = x({}, gn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), yc = tt(vc), gc = x({}, gn, { data: 0 }), gi = tt(gc), wc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Sc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, kc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _c(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = kc[e]) ? !!t[e] : !1;
  }
  function io() {
    return _c;
  }
  var Ec = x({}, qn, { key: function(e) {
    if (e.key) {
      var t = wc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ur(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: io, charCode: function(e) {
    return e.type === "keypress" ? Ur(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Cc = tt(Ec), xc = x({}, Vr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wi = tt(xc), Nc = x({}, qn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: io }), Pc = tt(Nc), Rc = x({}, gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zc = tt(Rc), Lc = x({}, Vr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Tc = tt(Lc), Mc = [9, 13, 27, 32], so = H && "CompositionEvent" in window, er = null;
  H && "documentMode" in document && (er = document.documentMode);
  var Dc = H && "TextEvent" in window && !er, Si = H && (!so || er && 8 < er && 11 >= er), ki = " ", _i = !1;
  function Ei(e, t) {
    switch (e) {
      case "keyup":
        return Mc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ci(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var wn = !1;
  function Oc(e, t) {
    switch (e) {
      case "compositionend":
        return Ci(t);
      case "keypress":
        return t.which !== 32 ? null : (_i = !0, ki);
      case "textInput":
        return e = t.data, e === ki && _i ? null : e;
      default:
        return null;
    }
  }
  function jc(e, t) {
    if (wn) return e === "compositionend" || !so && Ei(e, t) ? (e = hi(), Fr = no = Ft = null, wn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Si && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ic = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function xi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ic[e.type] : t === "textarea";
  }
  function Ni(e, t, n, r) {
    Ku(r), t = $r(t, "onChange"), 0 < t.length && (n = new ro("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var tr = null, nr = null;
  function Fc(e) {
    Qi(e, 0);
  }
  function Br(e) {
    var t = Cn(e);
    if (We(t)) return e;
  }
  function Uc(e, t) {
    if (e === "change") return t;
  }
  var Pi = !1;
  if (H) {
    var ao;
    if (H) {
      var co = "oninput" in document;
      if (!co) {
        var Ri = document.createElement("div");
        Ri.setAttribute("oninput", "return;"), co = typeof Ri.oninput == "function";
      }
      ao = co;
    } else ao = !1;
    Pi = ao && (!document.documentMode || 9 < document.documentMode);
  }
  function zi() {
    tr && (tr.detachEvent("onpropertychange", Li), nr = tr = null);
  }
  function Li(e) {
    if (e.propertyName === "value" && Br(nr)) {
      var t = [];
      Ni(t, nr, e, Wl(e)), Zu(Fc, t);
    }
  }
  function Ac(e, t, n) {
    e === "focusin" ? (zi(), tr = t, nr = n, tr.attachEvent("onpropertychange", Li)) : e === "focusout" && zi();
  }
  function Vc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Br(nr);
  }
  function Bc(e, t) {
    if (e === "click") return Br(t);
  }
  function Hc(e, t) {
    if (e === "input" || e === "change") return Br(t);
  }
  function Wc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var pt = typeof Object.is == "function" ? Object.is : Wc;
  function rr(e, t) {
    if (pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!j.call(t, l) || !pt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ti(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mi(e, t) {
    var n = Ti(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ti(n);
    }
  }
  function Di(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Di(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Oi() {
    for (var e = window, t = ft(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ft(e.document);
    }
    return t;
  }
  function fo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Qc(e) {
    var t = Oi(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Di(n.ownerDocument.documentElement, n)) {
      if (r !== null && fo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Mi(n, o);
          var u = Mi(
            n,
            r
          );
          l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var $c = H && "documentMode" in document && 11 >= document.documentMode, Sn = null, po = null, lr = null, mo = !1;
  function ji(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mo || Sn == null || Sn !== ft(r) || (r = Sn, "selectionStart" in r && fo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), lr && rr(lr, r) || (lr = r, r = $r(po, "onSelect"), 0 < r.length && (t = new ro("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sn)));
  }
  function Hr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var kn = { animationend: Hr("Animation", "AnimationEnd"), animationiteration: Hr("Animation", "AnimationIteration"), animationstart: Hr("Animation", "AnimationStart"), transitionend: Hr("Transition", "TransitionEnd") }, ho = {}, Ii = {};
  H && (Ii = document.createElement("div").style, "AnimationEvent" in window || (delete kn.animationend.animation, delete kn.animationiteration.animation, delete kn.animationstart.animation), "TransitionEvent" in window || delete kn.transitionend.transition);
  function Wr(e) {
    if (ho[e]) return ho[e];
    if (!kn[e]) return e;
    var t = kn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ii) return ho[e] = t[n];
    return e;
  }
  var Fi = Wr("animationend"), Ui = Wr("animationiteration"), Ai = Wr("animationstart"), Vi = Wr("transitionend"), Bi = /* @__PURE__ */ new Map(), Hi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ut(e, t) {
    Bi.set(e, t), E(t, [e]);
  }
  for (var vo = 0; vo < Hi.length; vo++) {
    var yo = Hi[vo], Kc = yo.toLowerCase(), Yc = yo[0].toUpperCase() + yo.slice(1);
    Ut(Kc, "on" + Yc);
  }
  Ut(Fi, "onAnimationEnd"), Ut(Ui, "onAnimationIteration"), Ut(Ai, "onAnimationStart"), Ut("dblclick", "onDoubleClick"), Ut("focusin", "onFocus"), Ut("focusout", "onBlur"), Ut(Vi, "onTransitionEnd"), A("onMouseEnter", ["mouseout", "mouseover"]), A("onMouseLeave", ["mouseout", "mouseover"]), A("onPointerEnter", ["pointerout", "pointerover"]), A("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xc = new Set("cancel close invalid load scroll toggle".split(" ").concat(or));
  function Wi(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ka(r, t, void 0, e), e.currentTarget = null;
  }
  function Qi(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u], s = i.instance, m = i.currentTarget;
          if (i = i.listener, s !== o && l.isPropagationStopped()) break e;
          Wi(l, i, m), o = s;
        }
        else for (u = 0; u < r.length; u++) {
          if (i = r[u], s = i.instance, m = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped()) break e;
          Wi(l, i, m), o = s;
        }
      }
    }
    if (Pr) throw e = Yl, Pr = !1, Yl = null, e;
  }
  function ae(e, t) {
    var n = t[xo];
    n === void 0 && (n = t[xo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || ($i(t, e, 2, !1), n.add(r));
  }
  function go(e, t, n) {
    var r = 0;
    t && (r |= 4), $i(n, e, r, t);
  }
  var Qr = "_reactListening" + Math.random().toString(36).slice(2);
  function ur(e) {
    if (!e[Qr]) {
      e[Qr] = !0, T.forEach(function(n) {
        n !== "selectionchange" && (Xc.has(n) || go(n, !1, e), go(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qr] || (t[Qr] = !0, go("selectionchange", !1, t));
    }
  }
  function $i(e, t, n, r) {
    switch (mi(t)) {
      case 1:
        var l = sc;
        break;
      case 4:
        l = ac;
        break;
      default:
        l = eo;
    }
    n = l.bind(null, t, n, e), l = void 0, !Kl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function wo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var s = u.tag;
          if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          u = u.return;
        }
        for (; i !== null; ) {
          if (u = en(i), u === null) return;
          if (s = u.tag, s === 5 || s === 6) {
            r = o = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Zu(function() {
      var m = o, g = Wl(n), w = [];
      e: {
        var y = Bi.get(e);
        if (y !== void 0) {
          var C = ro, P = e;
          switch (e) {
            case "keypress":
              if (Ur(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = Cc;
              break;
            case "focusin":
              P = "focus", C = uo;
              break;
            case "focusout":
              P = "blur", C = uo;
              break;
            case "beforeblur":
            case "afterblur":
              C = uo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = yi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = dc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Pc;
              break;
            case Fi:
            case Ui:
            case Ai:
              C = hc;
              break;
            case Vi:
              C = zc;
              break;
            case "scroll":
              C = cc;
              break;
            case "wheel":
              C = Tc;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = yc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = wi;
          }
          var R = (t & 4) !== 0, Ee = !R && e === "scroll", d = R ? y !== null ? y + "Capture" : null : y;
          R = [];
          for (var a = m, p; a !== null; ) {
            p = a;
            var k = p.stateNode;
            if (p.tag === 5 && k !== null && (p = k, d !== null && (k = Hn(a, d), k != null && R.push(ir(a, k, p)))), Ee) break;
            a = a.return;
          }
          0 < R.length && (y = new C(y, P, null, n, g), w.push({ event: y, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (y = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", y && n !== Hl && (P = n.relatedTarget || n.fromElement) && (en(P) || P[xt])) break e;
          if ((C || y) && (y = g.window === g ? g : (y = g.ownerDocument) ? y.defaultView || y.parentWindow : window, C ? (P = n.relatedTarget || n.toElement, C = m, P = P ? en(P) : null, P !== null && (Ee = bt(P), P !== Ee || P.tag !== 5 && P.tag !== 6) && (P = null)) : (C = null, P = m), C !== P)) {
            if (R = yi, k = "onMouseLeave", d = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (R = wi, k = "onPointerLeave", d = "onPointerEnter", a = "pointer"), Ee = C == null ? y : Cn(C), p = P == null ? y : Cn(P), y = new R(k, a + "leave", C, n, g), y.target = Ee, y.relatedTarget = p, k = null, en(g) === m && (R = new R(d, a + "enter", P, n, g), R.target = p, R.relatedTarget = Ee, k = R), Ee = k, C && P) t: {
              for (R = C, d = P, a = 0, p = R; p; p = _n(p)) a++;
              for (p = 0, k = d; k; k = _n(k)) p++;
              for (; 0 < a - p; ) R = _n(R), a--;
              for (; 0 < p - a; ) d = _n(d), p--;
              for (; a--; ) {
                if (R === d || d !== null && R === d.alternate) break t;
                R = _n(R), d = _n(d);
              }
              R = null;
            }
            else R = null;
            C !== null && Ki(w, y, C, R, !1), P !== null && Ee !== null && Ki(w, Ee, P, R, !0);
          }
        }
        e: {
          if (y = m ? Cn(m) : window, C = y.nodeName && y.nodeName.toLowerCase(), C === "select" || C === "input" && y.type === "file") var L = Uc;
          else if (xi(y)) if (Pi) L = Hc;
          else {
            L = Vc;
            var D = Ac;
          }
          else (C = y.nodeName) && C.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (L = Bc);
          if (L && (L = L(e, m))) {
            Ni(w, L, n, g);
            break e;
          }
          D && D(e, y, m), e === "focusout" && (D = y._wrapperState) && D.controlled && y.type === "number" && Fl(y, "number", y.value);
        }
        switch (D = m ? Cn(m) : window, e) {
          case "focusin":
            (xi(D) || D.contentEditable === "true") && (Sn = D, po = m, lr = null);
            break;
          case "focusout":
            lr = po = Sn = null;
            break;
          case "mousedown":
            mo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mo = !1, ji(w, n, g);
            break;
          case "selectionchange":
            if ($c) break;
          case "keydown":
          case "keyup":
            ji(w, n, g);
        }
        var O;
        if (so) e: {
          switch (e) {
            case "compositionstart":
              var F = "onCompositionStart";
              break e;
            case "compositionend":
              F = "onCompositionEnd";
              break e;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break e;
          }
          F = void 0;
        }
        else wn ? Ei(e, n) && (F = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
        F && (Si && n.locale !== "ko" && (wn || F !== "onCompositionStart" ? F === "onCompositionEnd" && wn && (O = hi()) : (Ft = g, no = "value" in Ft ? Ft.value : Ft.textContent, wn = !0)), D = $r(m, F), 0 < D.length && (F = new gi(F, e, null, n, g), w.push({ event: F, listeners: D }), O ? F.data = O : (O = Ci(n), O !== null && (F.data = O)))), (O = Dc ? Oc(e, n) : jc(e, n)) && (m = $r(m, "onBeforeInput"), 0 < m.length && (g = new gi("onBeforeInput", "beforeinput", null, n, g), w.push({ event: g, listeners: m }), g.data = O));
      }
      Qi(w, t);
    });
  }
  function ir(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Hn(e, n), o != null && r.unshift(ir(e, o, l)), o = Hn(e, t), o != null && r.push(ir(e, o, l))), e = e.return;
    }
    return r;
  }
  function _n(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ki(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var i = n, s = i.alternate, m = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && m !== null && (i = m, l ? (s = Hn(n, o), s != null && u.unshift(ir(n, s, i))) : l || (s = Hn(n, o), s != null && u.push(ir(n, s, i)))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Gc = /\r\n?/g, Zc = /\u0000|\uFFFD/g;
  function Yi(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gc, `
`).replace(Zc, "");
  }
  function Kr(e, t, n) {
    if (t = Yi(t), Yi(e) !== t && n) throw Error(f(425));
  }
  function Yr() {
  }
  var So = null, ko = null;
  function _o(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Eo = typeof setTimeout == "function" ? setTimeout : void 0, Jc = typeof clearTimeout == "function" ? clearTimeout : void 0, Xi = typeof Promise == "function" ? Promise : void 0, qc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xi < "u" ? function(e) {
    return Xi.resolve(null).then(e).catch(bc);
  } : Eo;
  function bc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Co(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Jn(t);
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Gi(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var En = Math.random().toString(36).slice(2), St = "__reactFiber$" + En, sr = "__reactProps$" + En, xt = "__reactContainer$" + En, xo = "__reactEvents$" + En, ef = "__reactListeners$" + En, tf = "__reactHandles$" + En;
  function en(e) {
    var t = e[St];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[xt] || n[St]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gi(e); e !== null; ) {
          if (n = e[St]) return n;
          e = Gi(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ar(e) {
    return e = e[St] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Cn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Xr(e) {
    return e[sr] || null;
  }
  var No = [], xn = -1;
  function Vt(e) {
    return { current: e };
  }
  function ce(e) {
    0 > xn || (e.current = No[xn], No[xn] = null, xn--);
  }
  function se(e, t) {
    xn++, No[xn] = e.current, e.current = t;
  }
  var Bt = {}, Ue = Vt(Bt), Xe = Vt(!1), tn = Bt;
  function Nn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Bt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ge(e) {
    return e = e.childContextTypes, e != null;
  }
  function Gr() {
    ce(Xe), ce(Ue);
  }
  function Zi(e, t, n) {
    if (Ue.current !== Bt) throw Error(f(168));
    se(Ue, t), se(Xe, n);
  }
  function Ji(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(f(108, ne(e) || "Unknown", l));
    return x({}, n, r);
  }
  function Zr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt, tn = Ue.current, se(Ue, e), se(Xe, Xe.current), !0;
  }
  function qi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(f(169));
    n ? (e = Ji(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, ce(Xe), ce(Ue), se(Ue, e)) : ce(Xe), se(Xe, n);
  }
  var Nt = null, Jr = !1, Po = !1;
  function bi(e) {
    Nt === null ? Nt = [e] : Nt.push(e);
  }
  function nf(e) {
    Jr = !0, bi(e);
  }
  function Ht() {
    if (!Po && Nt !== null) {
      Po = !0;
      var e = 0, t = re;
      try {
        var n = Nt;
        for (re = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Nt = null, Jr = !1;
      } catch (l) {
        throw Nt !== null && (Nt = Nt.slice(e + 1)), ti(Xl, Ht), l;
      } finally {
        re = t, Po = !1;
      }
    }
    return null;
  }
  var Pn = [], Rn = 0, qr = null, br = 0, ot = [], ut = 0, nn = null, Pt = 1, Rt = "";
  function rn(e, t) {
    Pn[Rn++] = br, Pn[Rn++] = qr, qr = e, br = t;
  }
  function es(e, t, n) {
    ot[ut++] = Pt, ot[ut++] = Rt, ot[ut++] = nn, nn = e;
    var r = Pt;
    e = Rt;
    var l = 32 - dt(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - dt(t) + l;
    if (30 < o) {
      var u = l - l % 5;
      o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, Pt = 1 << 32 - dt(t) + l | n << l | r, Rt = o + e;
    } else Pt = 1 << o | n << l | r, Rt = e;
  }
  function Ro(e) {
    e.return !== null && (rn(e, 1), es(e, 1, 0));
  }
  function zo(e) {
    for (; e === qr; ) qr = Pn[--Rn], Pn[Rn] = null, br = Pn[--Rn], Pn[Rn] = null;
    for (; e === nn; ) nn = ot[--ut], ot[ut] = null, Rt = ot[--ut], ot[ut] = null, Pt = ot[--ut], ot[ut] = null;
  }
  var nt = null, rt = null, de = !1, mt = null;
  function ts(e, t) {
    var n = ct(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ns(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = At(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: Pt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ct(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, rt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Lo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function To(e) {
    if (de) {
      var t = rt;
      if (t) {
        var n = t;
        if (!ns(e, t)) {
          if (Lo(e)) throw Error(f(418));
          t = At(n.nextSibling);
          var r = nt;
          t && ns(e, t) ? ts(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, nt = e);
        }
      } else {
        if (Lo(e)) throw Error(f(418));
        e.flags = e.flags & -4097 | 2, de = !1, nt = e;
      }
    }
  }
  function rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    nt = e;
  }
  function el(e) {
    if (e !== nt) return !1;
    if (!de) return rs(e), de = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_o(e.type, e.memoizedProps)), t && (t = rt)) {
      if (Lo(e)) throw ls(), Error(f(418));
      for (; t; ) ts(e, t), t = At(t.nextSibling);
    }
    if (rs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = At(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = rt; e; ) e = At(e.nextSibling);
  }
  function zn() {
    rt = nt = null, de = !1;
  }
  function Mo(e) {
    mt === null ? mt = [e] : mt.push(e);
  }
  var rf = ge.ReactCurrentBatchConfig;
  function cr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(f(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(f(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(u) {
          var i = l.refs;
          u === null ? delete i[o] : i[o] = u;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(f(284));
      if (!n._owner) throw Error(f(290, e));
    }
    return e;
  }
  function tl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function os(e) {
    var t = e._init;
    return t(e._payload);
  }
  function us(e) {
    function t(d, a) {
      if (e) {
        var p = d.deletions;
        p === null ? (d.deletions = [a], d.flags |= 16) : p.push(a);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null; ) t(d, a), a = a.sibling;
      return null;
    }
    function r(d, a) {
      for (d = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? d.set(a.key, a) : d.set(a.index, a), a = a.sibling;
      return d;
    }
    function l(d, a) {
      return d = Zt(d, a), d.index = 0, d.sibling = null, d;
    }
    function o(d, a, p) {
      return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < a ? (d.flags |= 2, a) : p) : (d.flags |= 2, a)) : (d.flags |= 1048576, a);
    }
    function u(d) {
      return e && d.alternate === null && (d.flags |= 2), d;
    }
    function i(d, a, p, k) {
      return a === null || a.tag !== 6 ? (a = Eu(p, d.mode, k), a.return = d, a) : (a = l(a, p), a.return = d, a);
    }
    function s(d, a, p, k) {
      var L = p.type;
      return L === pe ? g(d, a, p.props.children, k, p.key) : a !== null && (a.elementType === L || typeof L == "object" && L !== null && L.$$typeof === ze && os(L) === a.type) ? (k = l(a, p.props), k.ref = cr(d, a, p), k.return = d, k) : (k = xl(p.type, p.key, p.props, null, d.mode, k), k.ref = cr(d, a, p), k.return = d, k);
    }
    function m(d, a, p, k) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== p.containerInfo || a.stateNode.implementation !== p.implementation ? (a = Cu(p, d.mode, k), a.return = d, a) : (a = l(a, p.children || []), a.return = d, a);
    }
    function g(d, a, p, k, L) {
      return a === null || a.tag !== 7 ? (a = dn(p, d.mode, k, L), a.return = d, a) : (a = l(a, p), a.return = d, a);
    }
    function w(d, a, p) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = Eu("" + a, d.mode, p), a.return = d, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Re:
            return p = xl(a.type, a.key, a.props, null, d.mode, p), p.ref = cr(d, null, a), p.return = d, p;
          case le:
            return a = Cu(a, d.mode, p), a.return = d, a;
          case ze:
            var k = a._init;
            return w(d, k(a._payload), p);
        }
        if (An(a) || M(a)) return a = dn(a, d.mode, p, null), a.return = d, a;
        tl(d, a);
      }
      return null;
    }
    function y(d, a, p, k) {
      var L = a !== null ? a.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number") return L !== null ? null : i(d, a, "" + p, k);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Re:
            return p.key === L ? s(d, a, p, k) : null;
          case le:
            return p.key === L ? m(d, a, p, k) : null;
          case ze:
            return L = p._init, y(
              d,
              a,
              L(p._payload),
              k
            );
        }
        if (An(p) || M(p)) return L !== null ? null : g(d, a, p, k, null);
        tl(d, p);
      }
      return null;
    }
    function C(d, a, p, k, L) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return d = d.get(p) || null, i(a, d, "" + k, L);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Re:
            return d = d.get(k.key === null ? p : k.key) || null, s(a, d, k, L);
          case le:
            return d = d.get(k.key === null ? p : k.key) || null, m(a, d, k, L);
          case ze:
            var D = k._init;
            return C(d, a, p, D(k._payload), L);
        }
        if (An(k) || M(k)) return d = d.get(p) || null, g(a, d, k, L, null);
        tl(a, k);
      }
      return null;
    }
    function P(d, a, p, k) {
      for (var L = null, D = null, O = a, F = a = 0, Me = null; O !== null && F < p.length; F++) {
        O.index > F ? (Me = O, O = null) : Me = O.sibling;
        var b = y(d, O, p[F], k);
        if (b === null) {
          O === null && (O = Me);
          break;
        }
        e && O && b.alternate === null && t(d, O), a = o(b, a, F), D === null ? L = b : D.sibling = b, D = b, O = Me;
      }
      if (F === p.length) return n(d, O), de && rn(d, F), L;
      if (O === null) {
        for (; F < p.length; F++) O = w(d, p[F], k), O !== null && (a = o(O, a, F), D === null ? L = O : D.sibling = O, D = O);
        return de && rn(d, F), L;
      }
      for (O = r(d, O); F < p.length; F++) Me = C(O, d, F, p[F], k), Me !== null && (e && Me.alternate !== null && O.delete(Me.key === null ? F : Me.key), a = o(Me, a, F), D === null ? L = Me : D.sibling = Me, D = Me);
      return e && O.forEach(function(Jt) {
        return t(d, Jt);
      }), de && rn(d, F), L;
    }
    function R(d, a, p, k) {
      var L = M(p);
      if (typeof L != "function") throw Error(f(150));
      if (p = L.call(p), p == null) throw Error(f(151));
      for (var D = L = null, O = a, F = a = 0, Me = null, b = p.next(); O !== null && !b.done; F++, b = p.next()) {
        O.index > F ? (Me = O, O = null) : Me = O.sibling;
        var Jt = y(d, O, b.value, k);
        if (Jt === null) {
          O === null && (O = Me);
          break;
        }
        e && O && Jt.alternate === null && t(d, O), a = o(Jt, a, F), D === null ? L = Jt : D.sibling = Jt, D = Jt, O = Me;
      }
      if (b.done) return n(
        d,
        O
      ), de && rn(d, F), L;
      if (O === null) {
        for (; !b.done; F++, b = p.next()) b = w(d, b.value, k), b !== null && (a = o(b, a, F), D === null ? L = b : D.sibling = b, D = b);
        return de && rn(d, F), L;
      }
      for (O = r(d, O); !b.done; F++, b = p.next()) b = C(O, d, F, b.value, k), b !== null && (e && b.alternate !== null && O.delete(b.key === null ? F : b.key), a = o(b, a, F), D === null ? L = b : D.sibling = b, D = b);
      return e && O.forEach(function(Ff) {
        return t(d, Ff);
      }), de && rn(d, F), L;
    }
    function Ee(d, a, p, k) {
      if (typeof p == "object" && p !== null && p.type === pe && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Re:
            e: {
              for (var L = p.key, D = a; D !== null; ) {
                if (D.key === L) {
                  if (L = p.type, L === pe) {
                    if (D.tag === 7) {
                      n(d, D.sibling), a = l(D, p.props.children), a.return = d, d = a;
                      break e;
                    }
                  } else if (D.elementType === L || typeof L == "object" && L !== null && L.$$typeof === ze && os(L) === D.type) {
                    n(d, D.sibling), a = l(D, p.props), a.ref = cr(d, D, p), a.return = d, d = a;
                    break e;
                  }
                  n(d, D);
                  break;
                } else t(d, D);
                D = D.sibling;
              }
              p.type === pe ? (a = dn(p.props.children, d.mode, k, p.key), a.return = d, d = a) : (k = xl(p.type, p.key, p.props, null, d.mode, k), k.ref = cr(d, a, p), k.return = d, d = k);
            }
            return u(d);
          case le:
            e: {
              for (D = p.key; a !== null; ) {
                if (a.key === D) if (a.tag === 4 && a.stateNode.containerInfo === p.containerInfo && a.stateNode.implementation === p.implementation) {
                  n(d, a.sibling), a = l(a, p.children || []), a.return = d, d = a;
                  break e;
                } else {
                  n(d, a);
                  break;
                }
                else t(d, a);
                a = a.sibling;
              }
              a = Cu(p, d.mode, k), a.return = d, d = a;
            }
            return u(d);
          case ze:
            return D = p._init, Ee(d, a, D(p._payload), k);
        }
        if (An(p)) return P(d, a, p, k);
        if (M(p)) return R(d, a, p, k);
        tl(d, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, a !== null && a.tag === 6 ? (n(d, a.sibling), a = l(a, p), a.return = d, d = a) : (n(d, a), a = Eu(p, d.mode, k), a.return = d, d = a), u(d)) : n(d, a);
    }
    return Ee;
  }
  var Ln = us(!0), is = us(!1), nl = Vt(null), rl = null, Tn = null, Do = null;
  function Oo() {
    Do = Tn = rl = null;
  }
  function jo(e) {
    var t = nl.current;
    ce(nl), e._currentValue = t;
  }
  function Io(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Mn(e, t) {
    rl = e, Do = Tn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ze = !0), e.firstContext = null);
  }
  function it(e) {
    var t = e._currentValue;
    if (Do !== e) if (e = { context: e, memoizedValue: t, next: null }, Tn === null) {
      if (rl === null) throw Error(f(308));
      Tn = e, rl.dependencies = { lanes: 0, firstContext: e };
    } else Tn = Tn.next = e;
    return t;
  }
  var ln = null;
  function Fo(e) {
    ln === null ? ln = [e] : ln.push(e);
  }
  function ss(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Fo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, zt(e, r);
  }
  function zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Wt = !1;
  function Uo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function as(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Lt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (J & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, zt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Fo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, zt(e, n);
  }
  function ll(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Jl(e, n);
    }
  }
  function cs(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = u : o = o.next = u, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function ol(e, t, n, r) {
    var l = e.updateQueue;
    Wt = !1;
    var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, m = s.next;
      s.next = null, u === null ? o = m : u.next = m, u = s;
      var g = e.alternate;
      g !== null && (g = g.updateQueue, i = g.lastBaseUpdate, i !== u && (i === null ? g.firstBaseUpdate = m : i.next = m, g.lastBaseUpdate = s));
    }
    if (o !== null) {
      var w = l.baseState;
      u = 0, g = m = s = null, i = o;
      do {
        var y = i.lane, C = i.eventTime;
        if ((r & y) === y) {
          g !== null && (g = g.next = {
            eventTime: C,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var P = e, R = i;
            switch (y = t, C = n, R.tag) {
              case 1:
                if (P = R.payload, typeof P == "function") {
                  w = P.call(C, w, y);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = R.payload, y = typeof P == "function" ? P.call(C, w, y) : P, y == null) break e;
                w = x({}, w, y);
                break e;
              case 2:
                Wt = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [i] : y.push(i));
        } else C = { eventTime: C, lane: y, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, g === null ? (m = g = C, s = w) : g = g.next = C, u |= y;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          y = i, i = y.next, y.next = null, l.lastBaseUpdate = y, l.shared.pending = null;
        }
      } while (!0);
      if (g === null && (s = w), l.baseState = s, l.firstBaseUpdate = m, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          u |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      sn |= u, e.lanes = u, e.memoizedState = w;
    }
  }
  function fs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(f(191, l));
        l.call(r);
      }
    }
  }
  var fr = {}, kt = Vt(fr), dr = Vt(fr), pr = Vt(fr);
  function on(e) {
    if (e === fr) throw Error(f(174));
    return e;
  }
  function Ao(e, t) {
    switch (se(pr, t), se(dr, e), se(kt, fr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Al(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Al(t, e);
    }
    ce(kt), se(kt, t);
  }
  function Dn() {
    ce(kt), ce(dr), ce(pr);
  }
  function ds(e) {
    on(pr.current);
    var t = on(kt.current), n = Al(t, e.type);
    t !== n && (se(dr, e), se(kt, n));
  }
  function Vo(e) {
    dr.current === e && (ce(kt), ce(dr));
  }
  var he = Vt(0);
  function ul(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Bo = [];
  function Ho() {
    for (var e = 0; e < Bo.length; e++) Bo[e]._workInProgressVersionPrimary = null;
    Bo.length = 0;
  }
  var il = ge.ReactCurrentDispatcher, Wo = ge.ReactCurrentBatchConfig, un = 0, ve = null, xe = null, Le = null, sl = !1, mr = !1, hr = 0, lf = 0;
  function Ae() {
    throw Error(f(321));
  }
  function Qo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function $o(e, t, n, r, l, o) {
    if (un = o, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, il.current = e === null || e.memoizedState === null ? af : cf, e = n(r, l), mr) {
      o = 0;
      do {
        if (mr = !1, hr = 0, 25 <= o) throw Error(f(301));
        o += 1, Le = xe = null, t.updateQueue = null, il.current = ff, e = n(r, l);
      } while (mr);
    }
    if (il.current = fl, t = xe !== null && xe.next !== null, un = 0, Le = xe = ve = null, sl = !1, t) throw Error(f(300));
    return e;
  }
  function Ko() {
    var e = hr !== 0;
    return hr = 0, e;
  }
  function _t() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Le === null ? ve.memoizedState = Le = e : Le = Le.next = e, Le;
  }
  function st() {
    if (xe === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Le === null ? ve.memoizedState : Le.next;
    if (t !== null) Le = t, xe = e;
    else {
      if (e === null) throw Error(f(310));
      xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, Le === null ? ve.memoizedState = Le = e : Le = Le.next = e;
    }
    return Le;
  }
  function vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Yo(e) {
    var t = st(), n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = xe, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = o.next, o.next = u;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var i = u = null, s = null, m = o;
      do {
        var g = m.lane;
        if ((un & g) === g) s !== null && (s = s.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
        else {
          var w = {
            lane: g,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          };
          s === null ? (i = s = w, u = r) : s = s.next = w, ve.lanes |= g, sn |= g;
        }
        m = m.next;
      } while (m !== null && m !== o);
      s === null ? u = r : s.next = i, pt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, ve.lanes |= o, sn |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Xo(e) {
    var t = st(), n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = l = l.next;
      do
        o = e(o, u.action), u = u.next;
      while (u !== l);
      pt(o, t.memoizedState) || (Ze = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function ps() {
  }
  function ms(e, t) {
    var n = ve, r = st(), l = t(), o = !pt(r.memoizedState, l);
    if (o && (r.memoizedState = l, Ze = !0), r = r.queue, Go(ys.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Le !== null && Le.memoizedState.tag & 1) {
      if (n.flags |= 2048, yr(9, vs.bind(null, n, r, l, t), void 0, null), Te === null) throw Error(f(349));
      (un & 30) !== 0 || hs(n, t, l);
    }
    return l;
  }
  function hs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function vs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, gs(t) && ws(e);
  }
  function ys(e, t, n) {
    return n(function() {
      gs(t) && ws(e);
    });
  }
  function gs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pt(e, n);
    } catch {
      return !0;
    }
  }
  function ws(e) {
    var t = zt(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function Ss(e) {
    var t = _t();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vr, lastRenderedState: e }, t.queue = e, e = e.dispatch = sf.bind(null, ve, e), [t.memoizedState, e];
  }
  function yr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ks() {
    return st().memoizedState;
  }
  function al(e, t, n, r) {
    var l = _t();
    ve.flags |= e, l.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function cl(e, t, n, r) {
    var l = st();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (xe !== null) {
      var u = xe.memoizedState;
      if (o = u.destroy, r !== null && Qo(r, u.deps)) {
        l.memoizedState = yr(t, n, o, r);
        return;
      }
    }
    ve.flags |= e, l.memoizedState = yr(1 | t, n, o, r);
  }
  function _s(e, t) {
    return al(8390656, 8, e, t);
  }
  function Go(e, t) {
    return cl(2048, 8, e, t);
  }
  function Es(e, t) {
    return cl(4, 2, e, t);
  }
  function Cs(e, t) {
    return cl(4, 4, e, t);
  }
  function xs(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ns(e, t, n) {
    return n = n != null ? n.concat([e]) : null, cl(4, 4, xs.bind(null, t, e), n);
  }
  function Zo() {
  }
  function Ps(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Rs(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function zs(e, t, n) {
    return (un & 21) === 0 ? (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n) : (pt(n, t) || (n = oi(), ve.lanes |= n, sn |= n, e.baseState = !0), t);
  }
  function of(e, t) {
    var n = re;
    re = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Wo.transition;
    Wo.transition = {};
    try {
      e(!1), t();
    } finally {
      re = n, Wo.transition = r;
    }
  }
  function Ls() {
    return st().memoizedState;
  }
  function uf(e, t, n) {
    var r = Xt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ts(e)) Ms(t, n);
    else if (n = ss(e, t, n, r), n !== null) {
      var l = $e();
      gt(n, e, r, l), Ds(n, t, r);
    }
  }
  function sf(e, t, n) {
    var r = Xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ts(e)) Ms(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var u = t.lastRenderedState, i = o(u, n);
        if (l.hasEagerState = !0, l.eagerState = i, pt(i, u)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Fo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = ss(e, t, l, r), n !== null && (l = $e(), gt(n, e, r, l), Ds(n, t, r));
    }
  }
  function Ts(e) {
    var t = e.alternate;
    return e === ve || t !== null && t === ve;
  }
  function Ms(e, t) {
    mr = sl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ds(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Jl(e, n);
    }
  }
  var fl = { readContext: it, useCallback: Ae, useContext: Ae, useEffect: Ae, useImperativeHandle: Ae, useInsertionEffect: Ae, useLayoutEffect: Ae, useMemo: Ae, useReducer: Ae, useRef: Ae, useState: Ae, useDebugValue: Ae, useDeferredValue: Ae, useTransition: Ae, useMutableSource: Ae, useSyncExternalStore: Ae, useId: Ae, unstable_isNewReconciler: !1 }, af = { readContext: it, useCallback: function(e, t) {
    return _t().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: it, useEffect: _s, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, al(
      4194308,
      4,
      xs.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return al(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return al(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = _t();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = _t();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = uf.bind(null, ve, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = _t();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ss, useDebugValue: Zo, useDeferredValue: function(e) {
    return _t().memoizedState = e;
  }, useTransition: function() {
    var e = Ss(!1), t = e[0];
    return e = of.bind(null, e[1]), _t().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ve, l = _t();
    if (de) {
      if (n === void 0) throw Error(f(407));
      n = n();
    } else {
      if (n = t(), Te === null) throw Error(f(349));
      (un & 30) !== 0 || hs(r, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, _s(ys.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, yr(9, vs.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = _t(), t = Te.identifierPrefix;
    if (de) {
      var n = Rt, r = Pt;
      n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = lf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, cf = {
    readContext: it,
    useCallback: Ps,
    useContext: it,
    useEffect: Go,
    useImperativeHandle: Ns,
    useInsertionEffect: Es,
    useLayoutEffect: Cs,
    useMemo: Rs,
    useReducer: Yo,
    useRef: ks,
    useState: function() {
      return Yo(vr);
    },
    useDebugValue: Zo,
    useDeferredValue: function(e) {
      var t = st();
      return zs(t, xe.memoizedState, e);
    },
    useTransition: function() {
      var e = Yo(vr)[0], t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: ps,
    useSyncExternalStore: ms,
    useId: Ls,
    unstable_isNewReconciler: !1
  }, ff = { readContext: it, useCallback: Ps, useContext: it, useEffect: Go, useImperativeHandle: Ns, useInsertionEffect: Es, useLayoutEffect: Cs, useMemo: Rs, useReducer: Xo, useRef: ks, useState: function() {
    return Xo(vr);
  }, useDebugValue: Zo, useDeferredValue: function(e) {
    var t = st();
    return xe === null ? t.memoizedState = e : zs(t, xe.memoizedState, e);
  }, useTransition: function() {
    var e = Xo(vr)[0], t = st().memoizedState;
    return [e, t];
  }, useMutableSource: ps, useSyncExternalStore: ms, useId: Ls, unstable_isNewReconciler: !1 };
  function ht(e, t) {
    if (e && e.defaultProps) {
      t = x({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Jo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : x({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var dl = { isMounted: function(e) {
    return (e = e._reactInternals) ? bt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), l = Xt(e), o = Lt(r, l);
    o.payload = t, n != null && (o.callback = n), t = Qt(e, o, l), t !== null && (gt(t, e, l, r), ll(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), l = Xt(e), o = Lt(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Qt(e, o, l), t !== null && (gt(t, e, l, r), ll(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $e(), r = Xt(e), l = Lt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Qt(e, l, r), t !== null && (gt(t, e, r, n), ll(t, e, r));
  } };
  function Os(e, t, n, r, l, o, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : t.prototype && t.prototype.isPureReactComponent ? !rr(n, r) || !rr(l, o) : !0;
  }
  function js(e, t, n) {
    var r = !1, l = Bt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = it(o) : (l = Ge(t) ? tn : Ue.current, r = t.contextTypes, o = (r = r != null) ? Nn(e, l) : Bt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = dl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Is(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && dl.enqueueReplaceState(t, t.state, null);
  }
  function qo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Uo(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = it(o) : (o = Ge(t) ? tn : Ue.current, l.context = Nn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Jo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && dl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function On(e, t) {
    try {
      var n = "", r = t;
      do
        n += G(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function bo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function eu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var df = typeof WeakMap == "function" ? WeakMap : Map;
  function Fs(e, t, n) {
    n = Lt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      wl || (wl = !0, hu = r), eu(e, t);
    }, n;
  }
  function Us(e, t, n) {
    n = Lt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        eu(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      eu(e, t), typeof r != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
    }), n;
  }
  function As(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new df();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Nf.bind(null, e, t, n), t.then(e, e));
  }
  function Vs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Bs(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var pf = ge.ReactCurrentOwner, Ze = !1;
  function Qe(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : Ln(t, e.child, n, r);
  }
  function Hs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Mn(t, l), r = $o(e, t, n, r, o, l), n = Ko(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Tt(e, t, l)) : (de && n && Ro(t), t.flags |= 1, Qe(e, t, r, l), t.child);
  }
  function Ws(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !_u(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Qs(e, t, o, r, l)) : (e = xl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var u = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : rr, n(u, r) && e.ref === t.ref) return Tt(e, t, l);
    }
    return t.flags |= 1, e = Zt(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Qs(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (rr(o, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ze = !0);
      else return t.lanes = e.lanes, Tt(e, t, l);
    }
    return tu(e, t, n, r, l);
  }
  function $s(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, se(In, lt), lt |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, se(In, lt), lt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, se(In, lt), lt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, se(In, lt), lt |= r;
    return Qe(e, t, l, n), t.child;
  }
  function Ks(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function tu(e, t, n, r, l) {
    var o = Ge(n) ? tn : Ue.current;
    return o = Nn(t, o), Mn(t, l), n = $o(e, t, n, r, o, l), r = Ko(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Tt(e, t, l)) : (de && r && Ro(t), t.flags |= 1, Qe(e, t, n, l), t.child);
  }
  function Ys(e, t, n, r, l) {
    if (Ge(n)) {
      var o = !0;
      Zr(t);
    } else o = !1;
    if (Mn(t, l), t.stateNode === null) ml(e, t), js(t, n, r), qo(t, n, r, l), r = !0;
    else if (e === null) {
      var u = t.stateNode, i = t.memoizedProps;
      u.props = i;
      var s = u.context, m = n.contextType;
      typeof m == "object" && m !== null ? m = it(m) : (m = Ge(n) ? tn : Ue.current, m = Nn(t, m));
      var g = n.getDerivedStateFromProps, w = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      w || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== m) && Is(t, u, r, m), Wt = !1;
      var y = t.memoizedState;
      u.state = y, ol(t, r, u, l), s = t.memoizedState, i !== r || y !== s || Xe.current || Wt ? (typeof g == "function" && (Jo(t, n, g, r), s = t.memoizedState), (i = Wt || Os(t, n, i, r, y, s, m)) ? (w || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), u.props = r, u.state = s, u.context = m, r = i) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, as(e, t), i = t.memoizedProps, m = t.type === t.elementType ? i : ht(t.type, i), u.props = m, w = t.pendingProps, y = u.context, s = n.contextType, typeof s == "object" && s !== null ? s = it(s) : (s = Ge(n) ? tn : Ue.current, s = Nn(t, s));
      var C = n.getDerivedStateFromProps;
      (g = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== w || y !== s) && Is(t, u, r, s), Wt = !1, y = t.memoizedState, u.state = y, ol(t, r, u, l);
      var P = t.memoizedState;
      i !== w || y !== P || Xe.current || Wt ? (typeof C == "function" && (Jo(t, n, C, r), P = t.memoizedState), (m = Wt || Os(t, n, m, r, y, P, s) || !1) ? (g || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, P, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, P, s)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), u.props = r, u.state = P, u.context = s, r = m) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return nu(e, t, n, r, o, l);
  }
  function nu(e, t, n, r, l, o) {
    Ks(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && qi(t, n, !1), Tt(e, t, o);
    r = t.stateNode, pf.current = t;
    var i = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && u ? (t.child = Ln(t, e.child, null, o), t.child = Ln(t, null, i, o)) : Qe(e, t, i, o), t.memoizedState = r.state, l && qi(t, n, !0), t.child;
  }
  function Xs(e) {
    var t = e.stateNode;
    t.pendingContext ? Zi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zi(e, t.context, !1), Ao(e, t.containerInfo);
  }
  function Gs(e, t, n, r, l) {
    return zn(), Mo(l), t.flags |= 256, Qe(e, t, n, r), t.child;
  }
  var ru = { dehydrated: null, treeContext: null, retryLane: 0 };
  function lu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, t, n) {
    var r = t.pendingProps, l = he.current, o = !1, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), se(he, l & 1), e === null)
      return To(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, u = { mode: "hidden", children: u }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = Nl(u, r, 0, null), e = dn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = lu(n), t.memoizedState = ru, e) : ou(t, u));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return mf(e, t, u, r, i, l, n);
    if (o) {
      o = r.fallback, u = t.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return (u & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Zt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = Zt(i, o) : (o = dn(o, u, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, u = e.child.memoizedState, u = u === null ? lu(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~n, t.memoizedState = ru, r;
    }
    return o = e.child, e = o.sibling, r = Zt(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ou(e, t) {
    return t = Nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function pl(e, t, n, r) {
    return r !== null && Mo(r), Ln(t, e.child, null, n), e = ou(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function mf(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = bo(Error(f(422))), pl(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Nl({ mode: "visible", children: r.children }, l, 0, null), o = dn(o, l, u, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Ln(t, e.child, null, u), t.child.memoizedState = lu(u), t.memoizedState = ru, o);
    if ((t.mode & 1) === 0) return pl(e, t, u, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, o = Error(f(419)), r = bo(o, r, void 0), pl(e, t, u, r);
    }
    if (i = (u & e.childLanes) !== 0, Ze || i) {
      if (r = Te, r !== null) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, zt(e, l), gt(r, e, l, -1));
      }
      return ku(), r = bo(Error(f(421))), pl(e, t, u, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, rt = At(l.nextSibling), nt = t, de = !0, mt = null, e !== null && (ot[ut++] = Pt, ot[ut++] = Rt, ot[ut++] = nn, Pt = e.id, Rt = e.overflow, nn = t), t = ou(t, r.children), t.flags |= 4096, t);
  }
  function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Io(e.return, t, n);
  }
  function uu(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function qs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (Qe(e, t, r.children, n), r = he.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Js(e, n, t);
        else if (e.tag === 19) Js(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (se(he, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ul(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), uu(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ul(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        uu(t, !0, n, null, o);
        break;
      case "together":
        uu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ml(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Zt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function hf(e, t, n) {
    switch (t.tag) {
      case 3:
        Xs(t), zn();
        break;
      case 5:
        ds(t);
        break;
      case 1:
        Ge(t.type) && Zr(t);
        break;
      case 4:
        Ao(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        se(nl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (se(he, he.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zs(e, t, n) : (se(he, he.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
        se(he, he.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return qs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), se(he, he.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, $s(e, t, n);
    }
    return Tt(e, t, n);
  }
  var bs, iu, ea, ta;
  bs = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, iu = function() {
  }, ea = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, on(kt.current);
      var o = null;
      switch (n) {
        case "input":
          l = Ct(e, l), r = Ct(e, r), o = [];
          break;
        case "select":
          l = x({}, l, { value: void 0 }), r = x({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Ul(e, l), r = Ul(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
      }
      Vl(n, r);
      var u;
      n = null;
      for (m in l) if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null) if (m === "style") {
        var i = l[m];
        for (u in i) i.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
      } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (z.hasOwnProperty(m) ? o || (o = []) : (o = o || []).push(m, null));
      for (m in r) {
        var s = r[m];
        if (i = l?.[m], r.hasOwnProperty(m) && s !== i && (s != null || i != null)) if (m === "style") if (i) {
          for (u in i) !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
          for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (n || (n = {}), n[u] = s[u]);
        } else n || (o || (o = []), o.push(
          m,
          n
        )), n = s;
        else m === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(m, s)) : m === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(m, "" + s) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (z.hasOwnProperty(m) ? (s != null && m === "onScroll" && ae("scroll", e), o || i === s || (o = [])) : (o = o || []).push(m, s));
      }
      n && (o = o || []).push("style", n);
      var m = o;
      (t.updateQueue = m) && (t.flags |= 4);
    }
  }, ta = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function gr(e, t) {
    if (!de) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function vf(e, t, n) {
    var r = t.pendingProps;
    switch (zo(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Ge(t.type) && Gr(), Ve(t), null;
      case 3:
        return r = t.stateNode, Dn(), ce(Xe), ce(Ue), Ho(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (el(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, mt !== null && (gu(mt), mt = null))), iu(e, t), Ve(t), null;
      case 5:
        Vo(t);
        var l = on(pr.current);
        if (n = t.type, e !== null && t.stateNode != null) ea(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(f(166));
            return Ve(t), null;
          }
          if (e = on(kt.current), el(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[St] = t, r[sr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ae("cancel", r), ae("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < or.length; l++) ae(or[l], r);
                break;
              case "source":
                ae("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ae(
                  "error",
                  r
                ), ae("load", r);
                break;
              case "details":
                ae("toggle", r);
                break;
              case "input":
                pn(r, o), ae("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ae("invalid", r);
                break;
              case "textarea":
                Uu(r, o), ae("invalid", r);
            }
            Vl(n, o), l = null;
            for (var u in o) if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && Kr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && Kr(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : z.hasOwnProperty(u) && i != null && u === "onScroll" && ae("scroll", r);
            }
            switch (n) {
              case "input":
                Q(r), Fu(r, o, !0);
                break;
              case "textarea":
                Q(r), Vu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Yr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[St] = t, e[sr] = r, bs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (u = Bl(n, r), n) {
                case "dialog":
                  ae("cancel", e), ae("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ae("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < or.length; l++) ae(or[l], e);
                  l = r;
                  break;
                case "source":
                  ae("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ae(
                    "error",
                    e
                  ), ae("load", e), l = r;
                  break;
                case "details":
                  ae("toggle", e), l = r;
                  break;
                case "input":
                  pn(e, r), l = Ct(e, r), ae("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = x({}, r, { value: void 0 }), ae("invalid", e);
                  break;
                case "textarea":
                  Uu(e, r), l = Ul(e, r), ae("invalid", e);
                  break;
                default:
                  l = r;
              }
              Vl(n, l), i = l;
              for (o in i) if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style" ? Qu(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Hu(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Vn(e, s) : typeof s == "number" && Vn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (z.hasOwnProperty(o) ? s != null && o === "onScroll" && ae("scroll", e) : s != null && fe(e, o, s, u));
              }
              switch (n) {
                case "input":
                  Q(e), Fu(e, r, !1);
                  break;
                case "textarea":
                  Q(e), Vu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? mn(e, !!r.multiple, o, !1) : r.defaultValue != null && mn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Yr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ve(t), null;
      case 6:
        if (e && t.stateNode != null) ta(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(f(166));
          if (n = on(pr.current), on(kt.current), el(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (o = r.nodeValue !== n) && (e = nt, e !== null)) switch (e.tag) {
              case 3:
                Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Kr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
        }
        return Ve(t), null;
      case 13:
        if (ce(he), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (de && rt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ls(), zn(), t.flags |= 98560, o = !1;
          else if (o = el(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(f(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(f(317));
              o[St] = t;
            } else zn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), o = !1;
          } else mt !== null && (gu(mt), mt = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (he.current & 1) !== 0 ? Ne === 0 && (Ne = 3) : ku())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
      case 4:
        return Dn(), iu(e, t), e === null && ur(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return jo(t.type._context), Ve(t), null;
      case 17:
        return Ge(t.type) && Gr(), Ve(t), null;
      case 19:
        if (ce(he), o = t.memoizedState, o === null) return Ve(t), null;
        if (r = (t.flags & 128) !== 0, u = o.rendering, u === null) if (r) gr(o, !1);
        else {
          if (Ne !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = ul(e), u !== null) {
              for (t.flags |= 128, gr(o, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return se(he, he.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && _e() > Fn && (t.flags |= 128, r = !0, gr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ul(u), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), gr(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !de) return Ve(t), null;
          } else 2 * _e() - o.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, gr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (u.sibling = t.child, t.child = u) : (n = o.last, n !== null ? n.sibling = u : t.child = u, o.last = u);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = _e(), t.sibling = null, n = he.current, se(he, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
      case 22:
      case 23:
        return Su(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (lt & 1073741824) !== 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function yf(e, t) {
    switch (zo(t), t.tag) {
      case 1:
        return Ge(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Dn(), ce(Xe), ce(Ue), Ho(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Vo(t), null;
      case 13:
        if (ce(he), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(f(340));
          zn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ce(he), null;
      case 4:
        return Dn(), null;
      case 10:
        return jo(t.type._context), null;
      case 22:
      case 23:
        return Su(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hl = !1, Be = !1, gf = typeof WeakSet == "function" ? WeakSet : Set, N = null;
  function jn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ke(e, t, r);
    }
    else n.current = null;
  }
  function su(e, t, n) {
    try {
      n();
    } catch (r) {
      ke(e, t, r);
    }
  }
  var na = !1;
  function wf(e, t) {
    if (So = jr, e = Oi(), fo(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0, i = -1, s = -1, m = 0, g = 0, w = e, y = null;
          t: for (; ; ) {
            for (var C; w !== n || l !== 0 && w.nodeType !== 3 || (i = u + l), w !== o || r !== 0 && w.nodeType !== 3 || (s = u + r), w.nodeType === 3 && (u += w.nodeValue.length), (C = w.firstChild) !== null; )
              y = w, w = C;
            for (; ; ) {
              if (w === e) break t;
              if (y === n && ++m === l && (i = u), y === o && ++g === r && (s = u), (C = w.nextSibling) !== null) break;
              w = y, y = w.parentNode;
            }
            w = C;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ko = { focusedElem: e, selectionRange: n }, jr = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
    else for (; N !== null; ) {
      t = N;
      try {
        var P = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (P !== null) {
              var R = P.memoizedProps, Ee = P.memoizedState, d = t.stateNode, a = d.getSnapshotBeforeUpdate(t.elementType === t.type ? R : ht(t.type, R), Ee);
              d.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var p = t.stateNode.containerInfo;
            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(f(163));
        }
      } catch (k) {
        ke(t, t.return, k);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, N = e;
        break;
      }
      N = t.return;
    }
    return P = na, na = !1, P;
  }
  function wr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && su(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function vl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function au(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ra(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ra(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[sr], delete t[xo], delete t[ef], delete t[tf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function la(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function oa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || la(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yr));
    else if (r !== 4 && (e = e.child, e !== null)) for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), e = e.sibling;
  }
  function fu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (fu(e, t, n), e = e.sibling; e !== null; ) fu(e, t, n), e = e.sibling;
  }
  var Ie = null, vt = !1;
  function $t(e, t, n) {
    for (n = n.child; n !== null; ) ua(e, t, n), n = n.sibling;
  }
  function ua(e, t, n) {
    if (wt && typeof wt.onCommitFiberUnmount == "function") try {
      wt.onCommitFiberUnmount(zr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Be || jn(n, t);
      case 6:
        var r = Ie, l = vt;
        Ie = null, $t(e, t, n), Ie = r, vt = l, Ie !== null && (vt ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
        break;
      case 18:
        Ie !== null && (vt ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? Co(e.parentNode, n) : e.nodeType === 1 && Co(e, n), Jn(e)) : Co(Ie, n.stateNode));
        break;
      case 4:
        r = Ie, l = vt, Ie = n.stateNode.containerInfo, vt = !0, $t(e, t, n), Ie = r, vt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, u = o.destroy;
            o = o.tag, u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && su(n, t, u), l = l.next;
          } while (l !== r);
        }
        $t(e, t, n);
        break;
      case 1:
        if (!Be && (jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (i) {
          ke(n, t, i);
        }
        $t(e, t, n);
        break;
      case 21:
        $t(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null, $t(e, t, n), Be = r) : $t(e, t, n);
        break;
      default:
        $t(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new gf()), t.forEach(function(r) {
        var l = Rf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, u = t, i = u;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              Ie = i.stateNode, vt = !1;
              break e;
            case 3:
              Ie = i.stateNode.containerInfo, vt = !0;
              break e;
            case 4:
              Ie = i.stateNode.containerInfo, vt = !0;
              break e;
          }
          i = i.return;
        }
        if (Ie === null) throw Error(f(160));
        ua(o, u, l), Ie = null, vt = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (m) {
        ke(l, t, m);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sa(t, e), t = t.sibling;
  }
  function sa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (yt(t, e), Et(e), r & 4) {
          try {
            wr(3, e, e.return), vl(3, e);
          } catch (R) {
            ke(e, e.return, R);
          }
          try {
            wr(5, e, e.return);
          } catch (R) {
            ke(e, e.return, R);
          }
        }
        break;
      case 1:
        yt(t, e), Et(e), r & 512 && n !== null && jn(n, n.return);
        break;
      case 5:
        if (yt(t, e), Et(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Vn(l, "");
          } catch (R) {
            ke(e, e.return, R);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, u = n !== null ? n.memoizedProps : o, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && o.type === "radio" && o.name != null && Iu(l, o), Bl(i, u);
            var m = Bl(i, o);
            for (u = 0; u < s.length; u += 2) {
              var g = s[u], w = s[u + 1];
              g === "style" ? Qu(l, w) : g === "dangerouslySetInnerHTML" ? Hu(l, w) : g === "children" ? Vn(l, w) : fe(l, g, w, m);
            }
            switch (i) {
              case "input":
                Il(l, o);
                break;
              case "textarea":
                Au(l, o);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var C = o.value;
                C != null ? mn(l, !!o.multiple, C, !1) : y !== !!o.multiple && (o.defaultValue != null ? mn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : mn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[sr] = o;
          } catch (R) {
            ke(e, e.return, R);
          }
        }
        break;
      case 6:
        if (yt(t, e), Et(e), r & 4) {
          if (e.stateNode === null) throw Error(f(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (R) {
            ke(e, e.return, R);
          }
        }
        break;
      case 3:
        if (yt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Jn(t.containerInfo);
        } catch (R) {
          ke(e, e.return, R);
        }
        break;
      case 4:
        yt(t, e), Et(e);
        break;
      case 13:
        yt(t, e), Et(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (mu = _e())), r & 4 && ia(e);
        break;
      case 22:
        if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (Be = (m = Be) || g, yt(t, e), Be = m) : yt(t, e), Et(e), r & 8192) {
          if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !g && (e.mode & 1) !== 0) for (N = e, g = e.child; g !== null; ) {
            for (w = N = g; N !== null; ) {
              switch (y = N, C = y.child, y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wr(4, y, y.return);
                  break;
                case 1:
                  jn(y, y.return);
                  var P = y.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    r = y, n = y.return;
                    try {
                      t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                    } catch (R) {
                      ke(r, n, R);
                    }
                  }
                  break;
                case 5:
                  jn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    fa(w);
                    continue;
                  }
              }
              C !== null ? (C.return = y, N = C) : fa(w);
            }
            g = g.sibling;
          }
          e: for (g = null, w = e; ; ) {
            if (w.tag === 5) {
              if (g === null) {
                g = w;
                try {
                  l = w.stateNode, m ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = w.stateNode, s = w.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Wu("display", u));
                } catch (R) {
                  ke(e, e.return, R);
                }
              }
            } else if (w.tag === 6) {
              if (g === null) try {
                w.stateNode.nodeValue = m ? "" : w.memoizedProps;
              } catch (R) {
                ke(e, e.return, R);
              }
            } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
              w.child.return = w, w = w.child;
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              g === w && (g = null), w = w.return;
            }
            g === w && (g = null), w.sibling.return = w.return, w = w.sibling;
          }
        }
        break;
      case 19:
        yt(t, e), Et(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        yt(
          t,
          e
        ), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (la(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(f(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Vn(l, ""), r.flags &= -33);
            var o = oa(e);
            fu(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, i = oa(e);
            cu(e, i, u);
            break;
          default:
            throw Error(f(161));
        }
      } catch (s) {
        ke(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sf(e, t, n) {
    N = e, aa(e);
  }
  function aa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null; ) {
      var l = N, o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || hl;
        if (!u) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || Be;
          i = hl;
          var m = Be;
          if (hl = u, (Be = s) && !m) for (N = l; N !== null; ) u = N, s = u.child, u.tag === 22 && u.memoizedState !== null ? da(l) : s !== null ? (s.return = u, N = s) : da(l);
          for (; o !== null; ) N = o, aa(o), o = o.sibling;
          N = l, hl = i, Be = m;
        }
        ca(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, N = o) : ca(e);
    }
  }
  function ca(e) {
    for (; N !== null; ) {
      var t = N;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && fs(t, o, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                fs(t, u, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var g = m.memoizedState;
                  if (g !== null) {
                    var w = g.dehydrated;
                    w !== null && Jn(w);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(f(163));
          }
          Be || t.flags & 512 && au(t);
        } catch (y) {
          ke(t, t.return, y);
        }
      }
      if (t === e) {
        N = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, N = n;
        break;
      }
      N = t.return;
    }
  }
  function fa(e) {
    for (; N !== null; ) {
      var t = N;
      if (t === e) {
        N = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, N = n;
        break;
      }
      N = t.return;
    }
  }
  function da(e) {
    for (; N !== null; ) {
      var t = N;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              vl(4, t);
            } catch (s) {
              ke(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ke(t, l, s);
              }
            }
            var o = t.return;
            try {
              au(t);
            } catch (s) {
              ke(t, o, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              au(t);
            } catch (s) {
              ke(t, u, s);
            }
        }
      } catch (s) {
        ke(t, t.return, s);
      }
      if (t === e) {
        N = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, N = i;
        break;
      }
      N = t.return;
    }
  }
  var kf = Math.ceil, yl = ge.ReactCurrentDispatcher, du = ge.ReactCurrentOwner, at = ge.ReactCurrentBatchConfig, J = 0, Te = null, Ce = null, Fe = 0, lt = 0, In = Vt(0), Ne = 0, Sr = null, sn = 0, gl = 0, pu = 0, kr = null, Je = null, mu = 0, Fn = 1 / 0, Mt = null, wl = !1, hu = null, Kt = null, Sl = !1, Yt = null, kl = 0, _r = 0, vu = null, _l = -1, El = 0;
  function $e() {
    return (J & 6) !== 0 ? _e() : _l !== -1 ? _l : _l = _e();
  }
  function Xt(e) {
    return (e.mode & 1) === 0 ? 1 : (J & 2) !== 0 && Fe !== 0 ? Fe & -Fe : rf.transition !== null ? (El === 0 && (El = oi()), El) : (e = re, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mi(e.type)), e);
  }
  function gt(e, t, n, r) {
    if (50 < _r) throw _r = 0, vu = null, Error(f(185));
    Kn(e, n, r), ((J & 2) === 0 || e !== Te) && (e === Te && ((J & 2) === 0 && (gl |= n), Ne === 4 && Gt(e, Fe)), qe(e, r), n === 1 && J === 0 && (t.mode & 1) === 0 && (Fn = _e() + 500, Jr && Ht()));
  }
  function qe(e, t) {
    var n = e.callbackNode;
    rc(e, t);
    var r = Mr(e, e === Te ? Fe : 0);
    if (r === 0) n !== null && ni(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ni(n), t === 1) e.tag === 0 ? nf(ma.bind(null, e)) : bi(ma.bind(null, e)), qc(function() {
        (J & 6) === 0 && Ht();
      }), n = null;
      else {
        switch (ui(r)) {
          case 1:
            n = Xl;
            break;
          case 4:
            n = ri;
            break;
          case 16:
            n = Rr;
            break;
          case 536870912:
            n = li;
            break;
          default:
            n = Rr;
        }
        n = _a(n, pa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function pa(e, t) {
    if (_l = -1, El = 0, (J & 6) !== 0) throw Error(f(327));
    var n = e.callbackNode;
    if (Un() && e.callbackNode !== n) return null;
    var r = Mr(e, e === Te ? Fe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Cl(e, r);
    else {
      t = r;
      var l = J;
      J |= 2;
      var o = va();
      (Te !== e || Fe !== t) && (Mt = null, Fn = _e() + 500, cn(e, t));
      do
        try {
          Cf();
          break;
        } catch (i) {
          ha(e, i);
        }
      while (!0);
      Oo(), yl.current = o, J = l, Ce !== null ? t = 0 : (Te = null, Fe = 0, t = Ne);
    }
    if (t !== 0) {
      if (t === 2 && (l = Gl(e), l !== 0 && (r = l, t = yu(e, l))), t === 1) throw n = Sr, cn(e, 0), Gt(e, r), qe(e, _e()), n;
      if (t === 6) Gt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !_f(l) && (t = Cl(e, r), t === 2 && (o = Gl(e), o !== 0 && (r = o, t = yu(e, o))), t === 1)) throw n = Sr, cn(e, 0), Gt(e, r), qe(e, _e()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            fn(e, Je, Mt);
            break;
          case 3:
            if (Gt(e, r), (r & 130023424) === r && (t = mu + 500 - _e(), 10 < t)) {
              if (Mr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                $e(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Eo(fn.bind(null, e, Je, Mt), t);
              break;
            }
            fn(e, Je, Mt);
            break;
          case 4:
            if (Gt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - dt(r);
              o = 1 << u, u = t[u], u > l && (l = u), r &= ~o;
            }
            if (r = l, r = _e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Eo(fn.bind(null, e, Je, Mt), r);
              break;
            }
            fn(e, Je, Mt);
            break;
          case 5:
            fn(e, Je, Mt);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return qe(e, _e()), e.callbackNode === n ? pa.bind(null, e) : null;
  }
  function yu(e, t) {
    var n = kr;
    return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = Cl(e, t), e !== 2 && (t = Je, Je = n, t !== null && gu(t)), e;
  }
  function gu(e) {
    Je === null ? Je = e : Je.push.apply(Je, e);
  }
  function _f(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!pt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Gt(e, t) {
    for (t &= ~pu, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - dt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ma(e) {
    if ((J & 6) !== 0) throw Error(f(327));
    Un();
    var t = Mr(e, 0);
    if ((t & 1) === 0) return qe(e, _e()), null;
    var n = Cl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Gl(e);
      r !== 0 && (t = r, n = yu(e, r));
    }
    if (n === 1) throw n = Sr, cn(e, 0), Gt(e, t), qe(e, _e()), n;
    if (n === 6) throw Error(f(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, Je, Mt), qe(e, _e()), null;
  }
  function wu(e, t) {
    var n = J;
    J |= 1;
    try {
      return e(t);
    } finally {
      J = n, J === 0 && (Fn = _e() + 500, Jr && Ht());
    }
  }
  function an(e) {
    Yt !== null && Yt.tag === 0 && (J & 6) === 0 && Un();
    var t = J;
    J |= 1;
    var n = at.transition, r = re;
    try {
      if (at.transition = null, re = 1, e) return e();
    } finally {
      re = r, at.transition = n, J = t, (J & 6) === 0 && Ht();
    }
  }
  function Su() {
    lt = In.current, ce(In);
  }
  function cn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Jc(n)), Ce !== null) for (n = Ce.return; n !== null; ) {
      var r = n;
      switch (zo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Gr();
          break;
        case 3:
          Dn(), ce(Xe), ce(Ue), Ho();
          break;
        case 5:
          Vo(r);
          break;
        case 4:
          Dn();
          break;
        case 13:
          ce(he);
          break;
        case 19:
          ce(he);
          break;
        case 10:
          jo(r.type._context);
          break;
        case 22:
        case 23:
          Su();
      }
      n = n.return;
    }
    if (Te = e, Ce = e = Zt(e.current, null), Fe = lt = t, Ne = 0, Sr = null, pu = gl = sn = 0, Je = kr = null, ln !== null) {
      for (t = 0; t < ln.length; t++) if (n = ln[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var u = o.next;
          o.next = l, r.next = u;
        }
        n.pending = r;
      }
      ln = null;
    }
    return e;
  }
  function ha(e, t) {
    do {
      var n = Ce;
      try {
        if (Oo(), il.current = fl, sl) {
          for (var r = ve.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          sl = !1;
        }
        if (un = 0, Le = xe = ve = null, mr = !1, hr = 0, du.current = null, n === null || n.return === null) {
          Ne = 1, Sr = t, Ce = null;
          break;
        }
        e: {
          var o = e, u = n.return, i = n, s = t;
          if (t = Fe, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var m = s, g = i, w = g.tag;
            if ((g.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var y = g.alternate;
              y ? (g.updateQueue = y.updateQueue, g.memoizedState = y.memoizedState, g.lanes = y.lanes) : (g.updateQueue = null, g.memoizedState = null);
            }
            var C = Vs(u);
            if (C !== null) {
              C.flags &= -257, Bs(C, u, i, o, t), C.mode & 1 && As(o, m, t), t = C, s = m;
              var P = t.updateQueue;
              if (P === null) {
                var R = /* @__PURE__ */ new Set();
                R.add(s), t.updateQueue = R;
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                As(o, m, t), ku();
                break e;
              }
              s = Error(f(426));
            }
          } else if (de && i.mode & 1) {
            var Ee = Vs(u);
            if (Ee !== null) {
              (Ee.flags & 65536) === 0 && (Ee.flags |= 256), Bs(Ee, u, i, o, t), Mo(On(s, i));
              break e;
            }
          }
          o = s = On(s, i), Ne !== 4 && (Ne = 2), kr === null ? kr = [o] : kr.push(o), o = u;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var d = Fs(o, s, t);
                cs(o, d);
                break e;
              case 1:
                i = s;
                var a = o.type, p = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Kt === null || !Kt.has(p)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var k = Us(o, i, t);
                  cs(o, k);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ga(n);
      } catch (L) {
        t = L, Ce === n && n !== null && (Ce = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function va() {
    var e = yl.current;
    return yl.current = fl, e === null ? fl : e;
  }
  function ku() {
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4), Te === null || (sn & 268435455) === 0 && (gl & 268435455) === 0 || Gt(Te, Fe);
  }
  function Cl(e, t) {
    var n = J;
    J |= 2;
    var r = va();
    (Te !== e || Fe !== t) && (Mt = null, cn(e, t));
    do
      try {
        Ef();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if (Oo(), J = n, yl.current = r, Ce !== null) throw Error(f(261));
    return Te = null, Fe = 0, Ne;
  }
  function Ef() {
    for (; Ce !== null; ) ya(Ce);
  }
  function Cf() {
    for (; Ce !== null && !Xa(); ) ya(Ce);
  }
  function ya(e) {
    var t = ka(e.alternate, e, lt);
    e.memoizedProps = e.pendingProps, t === null ? ga(e) : Ce = t, du.current = null;
  }
  function ga(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = vf(n, t, lt), n !== null) {
          Ce = n;
          return;
        }
      } else {
        if (n = yf(n, t), n !== null) {
          n.flags &= 32767, Ce = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ne = 6, Ce = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ce = t;
        return;
      }
      Ce = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
  }
  function fn(e, t, n) {
    var r = re, l = at.transition;
    try {
      at.transition = null, re = 1, xf(e, t, n, r);
    } finally {
      at.transition = l, re = r;
    }
    return null;
  }
  function xf(e, t, n, r) {
    do
      Un();
    while (Yt !== null);
    if ((J & 6) !== 0) throw Error(f(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(f(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (lc(e, o), e === Te && (Ce = Te = null, Fe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Sl || (Sl = !0, _a(Rr, function() {
      return Un(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = at.transition, at.transition = null;
      var u = re;
      re = 1;
      var i = J;
      J |= 4, du.current = null, wf(e, n), sa(n, e), Qc(ko), jr = !!So, ko = So = null, e.current = n, Sf(n), Ga(), J = i, re = u, at.transition = o;
    } else e.current = n;
    if (Sl && (Sl = !1, Yt = e, kl = l), o = e.pendingLanes, o === 0 && (Kt = null), qa(n.stateNode), qe(e, _e()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (wl) throw wl = !1, e = hu, hu = null, e;
    return (kl & 1) !== 0 && e.tag !== 0 && Un(), o = e.pendingLanes, (o & 1) !== 0 ? e === vu ? _r++ : (_r = 0, vu = e) : _r = 0, Ht(), null;
  }
  function Un() {
    if (Yt !== null) {
      var e = ui(kl), t = at.transition, n = re;
      try {
        if (at.transition = null, re = 16 > e ? 16 : e, Yt === null) var r = !1;
        else {
          if (e = Yt, Yt = null, kl = 0, (J & 6) !== 0) throw Error(f(331));
          var l = J;
          for (J |= 4, N = e.current; N !== null; ) {
            var o = N, u = o.child;
            if ((N.flags & 16) !== 0) {
              var i = o.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var m = i[s];
                  for (N = m; N !== null; ) {
                    var g = N;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wr(8, g, o);
                    }
                    var w = g.child;
                    if (w !== null) w.return = g, N = w;
                    else for (; N !== null; ) {
                      g = N;
                      var y = g.sibling, C = g.return;
                      if (ra(g), g === m) {
                        N = null;
                        break;
                      }
                      if (y !== null) {
                        y.return = C, N = y;
                        break;
                      }
                      N = C;
                    }
                  }
                }
                var P = o.alternate;
                if (P !== null) {
                  var R = P.child;
                  if (R !== null) {
                    P.child = null;
                    do {
                      var Ee = R.sibling;
                      R.sibling = null, R = Ee;
                    } while (R !== null);
                  }
                }
                N = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null) u.return = o, N = u;
            else e: for (; N !== null; ) {
              if (o = N, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  wr(9, o, o.return);
              }
              var d = o.sibling;
              if (d !== null) {
                d.return = o.return, N = d;
                break e;
              }
              N = o.return;
            }
          }
          var a = e.current;
          for (N = a; N !== null; ) {
            u = N;
            var p = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && p !== null) p.return = u, N = p;
            else e: for (u = a; N !== null; ) {
              if (i = N, (i.flags & 2048) !== 0) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vl(9, i);
                }
              } catch (L) {
                ke(i, i.return, L);
              }
              if (i === u) {
                N = null;
                break e;
              }
              var k = i.sibling;
              if (k !== null) {
                k.return = i.return, N = k;
                break e;
              }
              N = i.return;
            }
          }
          if (J = l, Ht(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
            wt.onPostCommitFiberRoot(zr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        re = n, at.transition = t;
      }
    }
    return !1;
  }
  function wa(e, t, n) {
    t = On(n, t), t = Fs(e, t, 1), e = Qt(e, t, 1), t = $e(), e !== null && (Kn(e, 1, t), qe(e, t));
  }
  function ke(e, t, n) {
    if (e.tag === 3) wa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        wa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
          e = On(n, e), e = Us(t, e, 1), t = Qt(t, e, 1), e = $e(), t !== null && (Kn(t, 1, e), qe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Nf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Te === e && (Fe & n) === n && (Ne === 4 || Ne === 3 && (Fe & 130023424) === Fe && 500 > _e() - mu ? cn(e, 0) : pu |= n), qe(e, t);
  }
  function Sa(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Tr, Tr <<= 1, (Tr & 130023424) === 0 && (Tr = 4194304)));
    var n = $e();
    e = zt(e, t), e !== null && (Kn(e, t, n), qe(e, n));
  }
  function Pf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Sa(e, n);
  }
  function Rf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    r !== null && r.delete(t), Sa(e, n);
  }
  var ka;
  ka = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) Ze = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ze = !1, hf(e, t, n);
      Ze = (e.flags & 131072) !== 0;
    }
    else Ze = !1, de && (t.flags & 1048576) !== 0 && es(t, br, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ml(e, t), e = t.pendingProps;
        var l = Nn(t, Ue.current);
        Mn(t, n), l = $o(null, t, r, e, l, n);
        var o = Ko();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ge(r) ? (o = !0, Zr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Uo(t), l.updater = dl, t.stateNode = l, l._reactInternals = t, qo(t, r, e, n), t = nu(null, t, r, !0, o, n)) : (t.tag = 0, de && o && Ro(t), Qe(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ml(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Lf(r), e = ht(r, e), l) {
            case 0:
              t = tu(null, t, r, e, n);
              break e;
            case 1:
              t = Ys(null, t, r, e, n);
              break e;
            case 11:
              t = Hs(null, t, r, e, n);
              break e;
            case 14:
              t = Ws(null, t, r, ht(r.type, e), n);
              break e;
          }
          throw Error(f(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ht(r, l), tu(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ht(r, l), Ys(e, t, r, l, n);
      case 3:
        e: {
          if (Xs(t), e === null) throw Error(f(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, as(e, t), ol(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = On(Error(f(423)), t), t = Gs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = On(Error(f(424)), t), t = Gs(e, t, r, n, l);
            break e;
          } else for (rt = At(t.stateNode.containerInfo.firstChild), nt = t, de = !0, mt = null, n = is(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (zn(), r === l) {
              t = Tt(e, t, n);
              break e;
            }
            Qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ds(t), e === null && To(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, _o(r, l) ? u = null : o !== null && _o(r, o) && (t.flags |= 32), Ks(e, t), Qe(e, t, u, n), t.child;
      case 6:
        return e === null && To(t), null;
      case 13:
        return Zs(e, t, n);
      case 4:
        return Ao(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ln(t, null, r, n) : Qe(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ht(r, l), Hs(e, t, r, l, n);
      case 7:
        return Qe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Qe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Qe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, u = l.value, se(nl, r._currentValue), r._currentValue = u, o !== null) if (pt(o.value, u)) {
            if (o.children === l.children && !Xe.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var i = o.dependencies;
            if (i !== null) {
              u = o.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = Lt(-1, n & -n), s.tag = 2;
                    var m = o.updateQueue;
                    if (m !== null) {
                      m = m.shared;
                      var g = m.pending;
                      g === null ? s.next = s : (s.next = g.next, g.next = s), m.pending = s;
                    }
                  }
                  o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Io(
                    o.return,
                    n,
                    t
                  ), i.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (u = o.return, u === null) throw Error(f(341));
              u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), Io(u, n, t), u = o.sibling;
            } else u = o.child;
            if (u !== null) u.return = o;
            else for (u = o; u !== null; ) {
              if (u === t) {
                u = null;
                break;
              }
              if (o = u.sibling, o !== null) {
                o.return = u.return, u = o;
                break;
              }
              u = u.return;
            }
            o = u;
          }
          Qe(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Mn(t, n), l = it(l), r = r(l), t.flags |= 1, Qe(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = ht(r, t.pendingProps), l = ht(r.type, l), Ws(e, t, r, l, n);
      case 15:
        return Qs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ht(r, l), ml(e, t), t.tag = 1, Ge(r) ? (e = !0, Zr(t)) : e = !1, Mn(t, n), js(t, r, l), qo(t, r, l, n), nu(null, t, r, !0, e, n);
      case 19:
        return qs(e, t, n);
      case 22:
        return $s(e, t, n);
    }
    throw Error(f(156, t.tag));
  };
  function _a(e, t) {
    return ti(e, t);
  }
  function zf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ct(e, t, n, r) {
    return new zf(e, t, n, r);
  }
  function _u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Lf(e) {
    if (typeof e == "function") return _u(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Se) return 11;
      if (e === Ye) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function xl(e, t, n, r, l, o) {
    var u = 2;
    if (r = e, typeof e == "function") _u(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case pe:
        return dn(n.children, l, o, t);
      case we:
        u = 8, l |= 8;
        break;
      case me:
        return e = ct(12, n, t, l | 2), e.elementType = me, e.lanes = o, e;
      case je:
        return e = ct(13, n, t, l), e.elementType = je, e.lanes = o, e;
      case Ke:
        return e = ct(19, n, t, l), e.elementType = Ke, e.lanes = o, e;
      case ue:
        return Nl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case et:
            u = 10;
            break e;
          case Oe:
            u = 9;
            break e;
          case Se:
            u = 11;
            break e;
          case Ye:
            u = 14;
            break e;
          case ze:
            u = 16, r = null;
            break e;
        }
        throw Error(f(130, e == null ? e : typeof e, ""));
    }
    return t = ct(u, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function dn(e, t, n, r) {
    return e = ct(7, e, r, t), e.lanes = n, e;
  }
  function Nl(e, t, n, r) {
    return e = ct(22, e, r, t), e.elementType = ue, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Eu(e, t, n) {
    return e = ct(6, e, null, t), e.lanes = n, e;
  }
  function Cu(e, t, n) {
    return t = ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Tf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function xu(e, t, n, r, l, o, u, i, s) {
    return e = new Tf(e, t, n, i, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ct(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Uo(o), e;
  }
  function Mf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ea(e) {
    if (!e) return Bt;
    e = e._reactInternals;
    e: {
      if (bt(e) !== e || e.tag !== 1) throw Error(f(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ge(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(f(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ge(n)) return Ji(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, o, u, i, s) {
    return e = xu(n, r, !0, e, l, o, u, i, s), e.context = Ea(null), n = e.current, r = $e(), l = Xt(n), o = Lt(r, l), o.callback = t ?? null, Qt(n, o, l), e.current.lanes = l, Kn(e, l, r), qe(e, r), e;
  }
  function Pl(e, t, n, r) {
    var l = t.current, o = $e(), u = Xt(l);
    return n = Ea(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(o, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(l, t, u), e !== null && (gt(e, l, u, o), ll(e, l, u)), u;
  }
  function Rl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function xa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Nu(e, t) {
    xa(e, t), (e = e.alternate) && xa(e, t);
  }
  function Df() {
    return null;
  }
  var Na = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Pu(e) {
    this._internalRoot = e;
  }
  zl.prototype.render = Pu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    Pl(e, t, null, null);
  }, zl.prototype.unmount = Pu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      an(function() {
        Pl(null, e, null, null);
      }), t[xt] = null;
    }
  };
  function zl(e) {
    this._internalRoot = e;
  }
  zl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ai();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++) ;
      It.splice(n, 0, e), n === 0 && di(e);
    }
  };
  function Ru(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ll(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Pa() {
  }
  function Of(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var m = Rl(u);
          o.call(m);
        };
      }
      var u = Ca(t, r, e, 0, null, !1, !1, "", Pa);
      return e._reactRootContainer = u, e[xt] = u.current, ur(e.nodeType === 8 ? e.parentNode : e), an(), u;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var m = Rl(s);
        i.call(m);
      };
    }
    var s = xu(e, 0, !1, null, null, !1, !1, "", Pa);
    return e._reactRootContainer = s, e[xt] = s.current, ur(e.nodeType === 8 ? e.parentNode : e), an(function() {
      Pl(t, s, n, r);
    }), s;
  }
  function Tl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = Rl(u);
          i.call(s);
        };
      }
      Pl(t, u, e, l);
    } else u = Of(n, t, e, l, r);
    return Rl(u);
  }
  ii = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = $n(t.pendingLanes);
          n !== 0 && (Jl(t, n | 1), qe(t, _e()), (J & 6) === 0 && (Fn = _e() + 500, Ht()));
        }
        break;
      case 13:
        an(function() {
          var r = zt(e, 1);
          if (r !== null) {
            var l = $e();
            gt(r, e, 1, l);
          }
        }), Nu(e, 1);
    }
  }, ql = function(e) {
    if (e.tag === 13) {
      var t = zt(e, 134217728);
      if (t !== null) {
        var n = $e();
        gt(t, e, 134217728, n);
      }
      Nu(e, 134217728);
    }
  }, si = function(e) {
    if (e.tag === 13) {
      var t = Xt(e), n = zt(e, t);
      if (n !== null) {
        var r = $e();
        gt(n, e, t, r);
      }
      Nu(e, t);
    }
  }, ai = function() {
    return re;
  }, ci = function(e, t) {
    var n = re;
    try {
      return re = e, t();
    } finally {
      re = n;
    }
  }, Ql = function(e, t, n) {
    switch (t) {
      case "input":
        if (Il(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Xr(r);
              if (!l) throw Error(f(90));
              We(r), Il(r, l);
            }
          }
        }
        break;
      case "textarea":
        Au(e, n);
        break;
      case "select":
        t = n.value, t != null && mn(e, !!n.multiple, t, !1);
    }
  }, Xu = wu, Gu = an;
  var jf = { usingClientEntryPoint: !1, Events: [ar, Cn, Xr, Ku, Yu, wu] }, Er = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, If = { bundleType: Er.bundleType, version: Er.version, rendererPackageName: Er.rendererPackageName, rendererConfig: Er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = bu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Er.findFiberByHostInstance || Df, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ml.isDisabled && Ml.supportsFiber) try {
      zr = Ml.inject(If), wt = Ml;
    } catch {
    }
  }
  return be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf, be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ru(t)) throw Error(f(200));
    return Mf(e, t, null, n);
  }, be.createRoot = function(e, t) {
    if (!Ru(e)) throw Error(f(299));
    var n = !1, r = "", l = Na;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = xu(e, 1, !1, null, null, n, !1, r, l), e[xt] = t.current, ur(e.nodeType === 8 ? e.parentNode : e), new Pu(t);
  }, be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = bu(t), e = e === null ? null : e.stateNode, e;
  }, be.flushSync = function(e) {
    return an(e);
  }, be.hydrate = function(e, t, n) {
    if (!Ll(t)) throw Error(f(200));
    return Tl(null, e, t, !0, n);
  }, be.hydrateRoot = function(e, t, n) {
    if (!Ru(e)) throw Error(f(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", u = Na;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = Ca(t, null, e, 1, n ?? null, l, !1, o, u), e[xt] = t.current, ur(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new zl(t);
  }, be.render = function(e, t, n) {
    if (!Ll(t)) throw Error(f(200));
    return Tl(null, e, t, !1, n);
  }, be.unmountComponentAtNode = function(e) {
    if (!Ll(e)) throw Error(f(40));
    return e._reactRootContainer ? (an(function() {
      Tl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[xt] = null;
      });
    }), !0) : !1;
  }, be.unstable_batchedUpdates = wu, be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ll(n)) throw Error(f(200));
    if (e == null || e._reactInternals === void 0) throw Error(f(38));
    return Tl(e, t, n, !1, r);
  }, be.version = "18.3.1-next-f1338f8080-20240426", be;
}
var ja;
function Qf() {
  if (ja) return Tu.exports;
  ja = 1;
  function h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (S) {
        console.error(S);
      }
  }
  return h(), Tu.exports = Wf(), Tu.exports;
}
var Ia;
function $f() {
  if (Ia) return Dl;
  Ia = 1;
  var h = Qf();
  return Dl.createRoot = h.createRoot, Dl.hydrateRoot = h.hydrateRoot, Dl;
}
var Kf = $f();
function Yf() {
  const h = {
    bg: "var(--st-secondary-background-color)",
    fg: "var(--st-primary-color)",
    border: "var(--st-primary-color)"
  };
  return {
    light: [h],
    dark: [h]
  };
}
function Xf(h) {
  const S = Yf();
  return {
    light: h?.light && h.light.length > 0 ? h.light : S.light,
    dark: h?.dark && h.dark.length > 0 ? h.dark : S.dark
  };
}
function Gf(h, S) {
  return Number.isInteger(S.start) && Number.isInteger(S.end) && S.start >= 0 && S.end >= S.start && S.end < h.length;
}
function jl(h, S) {
  const f = [...S].filter((E) => Gf(h, E)).sort((E, A) => E.start - A.start), T = [];
  let z = -1;
  for (const E of f)
    E.start <= z || (T.push({
      ...E,
      text: h.slice(E.start, E.end + 1)
    }), z = E.end);
  return T;
}
function Zf(h, S) {
  const f = jl(h, S), T = [];
  let z = 0;
  for (const E of f)
    z < E.start && T.push({
      type: "plain",
      text: h.slice(z, E.start),
      start: z,
      end: E.start - 1
    }), T.push({
      type: "annotation",
      annotation: {
        ...E,
        text: h.slice(E.start, E.end + 1)
      }
    }), z = E.end + 1;
  return z < h.length && T.push({
    type: "plain",
    text: h.slice(z),
    start: z,
    end: h.length - 1
  }), T;
}
function Fa(h, S, f) {
  return h.some((T) => !(f < T.start || S > T.end));
}
function qt() {
  const h = window.getSelection();
  h && h.removeAllRanges();
}
function Jf(h, S, f) {
  return f < S ? S : Math.min(Math.max(h, S), f);
}
function Ua(h) {
  return h.nodeType === Node.ELEMENT_NODE ? h.closest(
    '[data-segment-type="plain"]'
  ) : h.parentElement?.closest(
    '[data-segment-type="plain"]'
  );
}
function Aa(h, S, f) {
  try {
    const T = document.createRange();
    return T.setStart(h, 0), T.setEnd(S, f), T.toString().length;
  } catch {
    return null;
  }
}
function qf(h) {
  const S = window.getSelection();
  if (!S || S.rangeCount === 0)
    return null;
  const f = S, T = h.getRootNode(), z = T instanceof ShadowRoot ? [T] : [];
  let E = null;
  if (typeof f.getComposedRanges == "function" ? E = f.getComposedRanges({ shadowRoots: z })?.[0] ?? null : E = f.getRangeAt(0), !E)
    return null;
  const A = f.toString();
  if (!A || !A.trim())
    return null;
  const H = Ua(E.startContainer), j = Ua(E.endContainer);
  if (!H || !j || H !== j)
    return null;
  const K = Number(H.dataset.start);
  if (Number.isNaN(K))
    return null;
  const B = Aa(H, E.startContainer, E.startOffset), U = Aa(H, E.endContainer, E.endOffset);
  if (B == null || U == null)
    return null;
  const I = K + Math.min(B, U), te = K + Math.max(B, U) - 1;
  return te < I ? null : {
    start: I,
    end: te,
    text: A
  };
}
function bf(h) {
  const S = h.ownerDocument.getSelection();
  if (!S)
    return null;
  const f = S;
  let T = null;
  if (typeof f.getComposedRanges == "function") {
    const A = h.getRootNode(), H = A instanceof ShadowRoot ? [A] : [], K = f.getComposedRanges({ shadowRoots: H })?.[0];
    if (K)
      try {
        const B = h.ownerDocument.createRange();
        B.setStart(K.startContainer, K.startOffset), B.setEnd(K.endContainer, K.endOffset), T = B;
      } catch {
        return null;
      }
  } else f.rangeCount > 0 && (T = f.getRangeAt(0));
  if (!T)
    return null;
  const z = T.getBoundingClientRect(), E = h.getBoundingClientRect();
  return !z.width && !z.height ? null : {
    anchorLeft: z.left - E.left + z.width / 2,
    anchorTop: z.top - E.top
  };
}
function ed(h, S) {
  const f = S.getBoundingClientRect(), T = h.getBoundingClientRect();
  return {
    anchorLeft: f.left - T.left + f.width / 2,
    anchorTop: f.top - T.top
  };
}
function Va(h, S, f, T) {
  const z = h.getBoundingClientRect(), E = S.getBoundingClientRect(), A = 8, H = Jf(
    f.anchorLeft - E.width / 2,
    A,
    z.width - E.width - A
  ), j = f.anchorTop - E.height - 10, K = f.anchorTop + T, B = j >= A ? j : Math.min(K, z.height - E.height - A);
  return {
    left: `${H}px`,
    top: `${Math.max(A, B)}px`
  };
}
function td(h, S) {
  const f = /* @__PURE__ */ new Map();
  return S.length === 0 || Array.from(new Set(h)).sort(
    (z, E) => z.localeCompare(E)
  ).forEach((z, E) => {
    f.set(z, S[E % S.length]);
  }), f;
}
function nd() {
  return {
    bg: "var(--st-secondary-background-color)",
    fg: "var(--st-primary-color)",
    border: "var(--st-primary-color)"
  };
}
function ju(h, S, f) {
  return S.get(h) ?? f[0] ?? nd();
}
function rd(h, S) {
  return S.trim() ? h.toLowerCase().includes(S.trim().toLowerCase()) : !0;
}
const ld = ({
  labels: h,
  allowRuntimeLabels: S,
  readonly: f,
  labelColorMap: T,
  activePalette: z,
  onRemoveLabel: E
}) => /* @__PURE__ */ q.jsx("div", { className: "nlp-annotator__chips", children: h.map((A) => {
  const H = ju(A, T, z);
  return /* @__PURE__ */ q.jsxs(
    "div",
    {
      className: "nlp-annotator__chip",
      style: {
        "--label-bg": H.bg,
        "--label-fg": H.fg,
        "--label-border": H.border
      },
      children: [
        /* @__PURE__ */ q.jsx("span", { children: A }),
        S && !f && /* @__PURE__ */ q.jsx(
          "button",
          {
            onClick: () => E(A),
            className: "nlp-annotator__chip-remove",
            "aria-label": `Remove label ${A}`,
            children: "×"
          }
        )
      ]
    },
    A
  );
}) }), od = ({
  selection: h,
  filteredLabels: S,
  labelSearch: f,
  onLabelSearchChange: T,
  onCreateAnnotation: z,
  onCancel: E,
  labelSearchInputRef: A,
  selectionMenuRef: H,
  selectionMenuStyle: j,
  labelColorMap: K,
  activePalette: B
}) => /* @__PURE__ */ q.jsxs(
  "div",
  {
    ref: H,
    onMouseDown: (U) => U.stopPropagation(),
    className: "nlp-annotator__menu nlp-annotator__menu--selection",
    style: j,
    children: [
      /* @__PURE__ */ q.jsxs("div", { className: "nlp-annotator__menu-caption", children: [
        "Annotate:",
        " ",
        /* @__PURE__ */ q.jsx("span", { className: "nlp-annotator__menu-selection-text", children: h.text })
      ] }),
      /* @__PURE__ */ q.jsx(
        "input",
        {
          ref: A,
          type: "text",
          placeholder: "Search label...",
          value: f,
          onChange: (U) => T(U.target.value),
          onMouseDown: (U) => U.stopPropagation(),
          className: "nlp-annotator__input nlp-annotator__input--menu"
        }
      ),
      /* @__PURE__ */ q.jsx("div", { className: "nlp-annotator__menu-chip-list", children: S.length > 0 ? S.map((U) => {
        const I = ju(U, K, B);
        return /* @__PURE__ */ q.jsx(
          "button",
          {
            onClick: () => z(U),
            className: "nlp-annotator__menu-chip",
            style: {
              "--label-bg": I.bg,
              "--label-fg": I.fg,
              "--label-border": I.border
            },
            children: U
          },
          U
        );
      }) : /* @__PURE__ */ q.jsx("div", { className: "nlp-annotator__menu-empty", children: "No matching labels" }) }),
      /* @__PURE__ */ q.jsx("div", { className: "nlp-annotator__menu-footer", children: /* @__PURE__ */ q.jsx(
        "button",
        {
          onClick: E,
          className: "nlp-annotator__button nlp-annotator__button--ghost",
          children: "Cancel"
        }
      ) })
    ]
  }
), ud = ({
  annotationMenuRef: h,
  annotationMenuStyle: S,
  onDelete: f
}) => /* @__PURE__ */ q.jsx(
  "div",
  {
    ref: h,
    onMouseDown: (T) => T.stopPropagation(),
    className: "nlp-annotator__menu nlp-annotator__menu--delete",
    style: S,
    children: /* @__PURE__ */ q.jsx(
      "button",
      {
        onClick: f,
        "aria-label": "Delete annotation",
        title: "Delete annotation",
        className: "nlp-annotator__delete-button",
        children: "×"
      }
    )
  }
), id = ({
  segments: h,
  readonly: S,
  containerRef: f,
  onMouseUp: T,
  onAnnotationClick: z,
  selectedAnnotationId: E,
  selection: A,
  selectionMenuPositionVisible: H,
  annotationMenuPositionVisible: j,
  selectionMenuRef: K,
  annotationMenuRef: B,
  labelSearchInputRef: U,
  selectionMenuStyle: I,
  annotationMenuStyle: te,
  filteredLabels: ye,
  labelSearch: Y,
  onLabelSearchChange: X,
  onCreateAnnotation: Pe,
  onCancelSelection: De,
  onDeleteAnnotation: fe,
  labelColorMap: ge,
  activePalette: Re
}) => /* @__PURE__ */ q.jsxs("div", { className: "nlp-annotator__text-section", children: [
  /* @__PURE__ */ q.jsx("h3", { className: "nlp-annotator__section-title", children: "Text" }),
  /* @__PURE__ */ q.jsxs(
    "div",
    {
      ref: f,
      onMouseUp: T,
      className: "nlp-annotator__text-container",
      "data-readonly": S ? "true" : "false",
      children: [
        h.map((le, pe) => {
          if (le.type === "plain")
            return /* @__PURE__ */ q.jsx(
              "span",
              {
                "data-segment-type": "plain",
                "data-start": le.start,
                "data-end": le.end,
                className: "nlp-annotator__plain-segment",
                children: le.text
              },
              `plain-${pe}-${le.start}`
            );
          const we = le.annotation, me = ju(we.label, ge, Re), et = we.id === E;
          return /* @__PURE__ */ q.jsxs(
            "span",
            {
              "data-annotation-id": we.id,
              onClick: (Oe) => z(Oe, we),
              className: `nlp-annotator__annotation ${et ? "is-selected" : ""}`,
              style: {
                "--label-bg": me.bg,
                "--label-fg": me.fg,
                "--label-border": me.border
              },
              children: [
                /* @__PURE__ */ q.jsx("span", { className: "nlp-annotator__annotation-text", children: we.text }),
                /* @__PURE__ */ q.jsx("span", { className: "nlp-annotator__annotation-label", children: we.label })
              ]
            },
            we.id
          );
        }),
        A && H && !S && /* @__PURE__ */ q.jsx(
          od,
          {
            selection: A,
            filteredLabels: ye,
            labelSearch: Y,
            onLabelSearchChange: X,
            onCreateAnnotation: Pe,
            onCancel: De,
            labelSearchInputRef: U,
            selectionMenuRef: K,
            selectionMenuStyle: I,
            labelColorMap: ge,
            activePalette: Re
          }
        ),
        E && j && !S && /* @__PURE__ */ q.jsx(
          ud,
          {
            annotationMenuRef: B,
            annotationMenuStyle: te,
            onDelete: fe
          }
        )
      ]
    }
  )
] }), sd = ({
  text: h,
  labels: S,
  annotations: f,
  allow_runtime_labels: T,
  readonly: z,
  setStateValue: E,
  colorPalette: A,
  themeMode: H
}) => {
  const [j, K] = oe.useState(
    jl(h, f)
  ), [B, U] = oe.useState(S), [I, te] = oe.useState(null), [ye, Y] = oe.useState(null), [X, Pe] = oe.useState(null), [De, fe] = oe.useState(""), [ge, Re] = oe.useState(""), [le, pe] = oe.useState(null), [we, me] = oe.useState(), [et, Oe] = oe.useState(), Se = oe.useRef(null), je = oe.useRef(null), Ke = oe.useRef(null), Ye = oe.useRef(null), ze = oe.useRef(null);
  oe.useEffect(() => {
    K(jl(h, f)), U(S), te(null), fe(""), Re(""), pe(null), Y(null), Pe(null), me(void 0), Oe(void 0), qt();
  }, [h, S, f]), oe.useEffect(() => {
    E("annotations", j), E("selection", I), E("labels", B);
  }, [j, I, B, E]), oe.useLayoutEffect(() => {
    I && ye && Ke.current?.focus();
  }, [I, ye]), oe.useLayoutEffect(() => {
    if (!Se.current || !Ye.current || !ye) {
      me(void 0);
      return;
    }
    me(
      Va(
        Se.current,
        Ye.current,
        ye,
        24
      )
    );
  }, [ye, I, De, B]), oe.useLayoutEffect(() => {
    if (!Se.current || !ze.current || !X) {
      Oe(void 0);
      return;
    }
    Oe(
      Va(
        Se.current,
        ze.current,
        X,
        12
      )
    );
  }, [X, le]), oe.useEffect(() => {
    const Q = (We) => {
      const ft = We.target;
      !je.current || !ft || je.current.contains(ft) || V();
    };
    return document.addEventListener("mousedown", Q), () => {
      document.removeEventListener("mousedown", Q);
    };
  }, []);
  const ue = oe.useMemo(
    () => Xf(A),
    [A]
  ), _ = oe.useMemo(
    () => H === "dark" ? ue.dark : ue.light,
    [H, ue]
  ), M = oe.useMemo(
    () => Array.from(
      /* @__PURE__ */ new Set([
        ...B,
        ...j.map((Q) => Q.label),
        ...S,
        ...f.map((Q) => Q.label)
      ])
    ),
    [B, j, S, f]
  ), x = oe.useMemo(
    () => td(M, _),
    [M, _]
  ), c = oe.useMemo(
    () => Zf(h, j),
    [h, j]
  ), v = oe.useMemo(
    () => B.filter((Q) => rd(Q, De)),
    [B, De]
  );
  function V() {
    te(null), pe(null), Y(null), Pe(null), me(void 0), Oe(void 0), fe(""), qt();
  }
  function W() {
    z || !Se.current || requestAnimationFrame(() => {
      if (!Se.current)
        return;
      const Q = qf(Se.current);
      if (!Q)
        return;
      if (Fa(j, Q.start, Q.end)) {
        te(null), Y(null), me(void 0), fe(""), qt();
        return;
      }
      const We = bf(Se.current);
      pe(null), Pe(null), Oe(void 0), te(Q), Y(We), fe("");
    });
  }
  function G(Q) {
    if (z || !I || !Q.trim())
      return;
    if (Fa(j, I.start, I.end)) {
      V();
      return;
    }
    const We = {
      id: crypto.randomUUID(),
      start: I.start,
      end: I.end,
      label: Q.trim(),
      text: h.slice(I.start, I.end + 1)
    };
    K((ft) => jl(h, [...ft, We])), te(null), Y(null), me(void 0), fe(""), qt();
  }
  function Z() {
    z || !le || (K((Q) => Q.filter((We) => We.id !== le)), pe(null), Pe(null), Oe(void 0), te(null), Y(null), me(void 0), fe(""), qt());
  }
  function ne() {
    if (!T || z)
      return;
    const Q = ge.trim();
    !Q || B.includes(Q) || (U((We) => [...We, Q]), Re(""));
  }
  function ee(Q) {
    if (!T || z)
      return;
    const ft = j.find(
      (Ct) => Ct.id === le
    )?.label === Q;
    U((Ct) => Ct.filter((pn) => pn !== Q)), K((Ct) => Ct.filter((pn) => pn.label !== Q)), ft && (pe(null), Pe(null), Oe(void 0)), te(null), Y(null), me(void 0), fe(""), qt();
  }
  function ie(Q, We) {
    z || !Se.current || (Q.stopPropagation(), qt(), te(null), Y(null), me(void 0), fe(""), pe(We.id), Pe(
      ed(Se.current, Q.currentTarget)
    ));
  }
  function He() {
    te(null), Y(null), me(void 0), fe(""), qt();
  }
  return /* @__PURE__ */ q.jsxs("div", { ref: je, className: "nlp-annotator", children: [
    /* @__PURE__ */ q.jsx("h3", { className: "nlp-annotator__section-title", children: "Labels" }),
    T && /* @__PURE__ */ q.jsxs("div", { className: "nlp-annotator__label-controls", children: [
      /* @__PURE__ */ q.jsx(
        "input",
        {
          type: "text",
          placeholder: "Add label",
          value: ge,
          onChange: (Q) => Re(Q.target.value),
          onKeyDown: (Q) => {
            Q.key === "Enter" && ne();
          },
          disabled: z,
          className: "nlp-annotator__input"
        }
      ),
      /* @__PURE__ */ q.jsx(
        "button",
        {
          onClick: ne,
          disabled: z,
          className: "nlp-annotator__button nlp-annotator__button--secondary",
          children: "Add"
        }
      )
    ] }),
    /* @__PURE__ */ q.jsx(
      ld,
      {
        labels: B,
        allowRuntimeLabels: T,
        readonly: z,
        labelColorMap: x,
        activePalette: _,
        onRemoveLabel: ee
      }
    ),
    /* @__PURE__ */ q.jsx(
      id,
      {
        segments: c,
        readonly: z,
        containerRef: Se,
        onMouseUp: W,
        onAnnotationClick: ie,
        selectedAnnotationId: le,
        selection: I,
        selectionMenuPositionVisible: !!ye,
        annotationMenuPositionVisible: !!X,
        selectionMenuRef: Ye,
        annotationMenuRef: ze,
        labelSearchInputRef: Ke,
        selectionMenuStyle: we,
        annotationMenuStyle: et,
        filteredLabels: v,
        labelSearch: De,
        onLabelSearchChange: fe,
        onCreateAnnotation: G,
        onCancelSelection: He,
        onDeleteAnnotation: Z,
        labelColorMap: x,
        activePalette: _
      }
    )
  ] });
}, Ol = /* @__PURE__ */ new WeakMap(), ad = (h) => {
  const { data: S, parentElement: f, setStateValue: T } = h, z = f.querySelector(".react-root");
  if (!z)
    throw new Error("Unexpected error: React root element not found");
  let E = Ol.get(f);
  E || (E = Kf.createRoot(z), Ol.set(f, E));
  const { text: A, labels: H, annotations: j, allow_runtime_labels: K, readonly: B, colorPalette: U, themeMode: I } = S;
  return E.render(
    /* @__PURE__ */ q.jsx(oe.StrictMode, { children: /* @__PURE__ */ q.jsx(
      sd,
      {
        setStateValue: T,
        text: S.text,
        labels: S.labels,
        annotations: S.annotations,
        allow_runtime_labels: S.allow_runtime_labels,
        readonly: S.readonly,
        colorPalette: S.colorPalette,
        themeMode: S.themeMode
      }
    ) })
  ), () => {
    const te = Ol.get(f);
    te && (te.unmount(), Ol.delete(f));
  };
};
export {
  ad as default
};
