(function (t) {
  function e(e) {
    for (
      var a, s, o = e[0], c = e[1], l = e[2], d = 0, h = [];
      d < o.length;
      d++
    )
      (s = o[d]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && h.push(r[s][0]),
        (r[s] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    u && u(e);
    while (h.length) h.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], a = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== r[c] && (a = !1);
      }
      a && (i.splice(e--, 1), (t = s((s.s = n[0]))));
    }
    return t;
  }
  var a = {},
    r = { app: 0 },
    i = [];
  function s(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = t),
    (s.c = a),
    (s.d = function (t, e, n) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (s.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function (t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          s.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var l = 0; l < o.length; l++) e(o[l]);
  var u = c;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "0e95": function (t, e, n) {
    "use strict";
    var a = n("c2e9"),
      r = n.n(a);
    r.a;
  },
  "34ba": function (t, e, n) {
    "use strict";
    var a = n("7dbb"),
      r = n.n(a);
    r.a;
  },
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var a,
      r = n("2b0e"),
      i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "d-flex flex-column h-100", attrs: { id: "app" } },
          [
            n("nav-bar"),
            n(
              "div",
              { staticClass: "container flex-grow-1" },
              [
                n("error"),
                n("div", { staticClass: "mt-5" }, [n("router-view")], 1),
              ],
              1
            ),
            t._m(0),
          ],
          1
        );
      },
      s = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("footer", { staticClass: "bg-light text-center p-3" }, [
            n("div", { staticClass: "logo" }),
            n("p", [
              t._v("\n      Sample project provided by\n      "),
              n("a", { attrs: { href: "https://auth0.com" } }, [t._v("Auth0")]),
            ]),
          ]);
        },
      ],
      o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "nav-container mb-3" }, [
          n(
            "nav",
            { staticClass: "navbar navbar-expand-md navbar-light bg-light" },
            [
              n("div", { staticClass: "container" }, [
                n("div", { staticClass: "navbar-brand logo" }),
                t._m(0),
                n(
                  "div",
                  {
                    staticClass: "collapse navbar-collapse",
                    attrs: { id: "navbarNav" },
                  },
                  [
                    n("ul", { staticClass: "navbar-nav mr-auto" }, [
                      n(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          n(
                            "router-link",
                            { staticClass: "nav-link", attrs: { to: "/" } },
                            [t._v("Home")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    n("ul", { staticClass: "navbar-nav d-none d-md-block" }, [
                      t.$auth.isAuthenticated || t.$auth.loading
                        ? t._e()
                        : n("li", { staticClass: "nav-item" }, [
                            n(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-margin",
                                attrs: { id: "qsLoginBtn" },
                                on: {
                                  click: function (e) {
                                    return e.preventDefault(), t.login(e);
                                  },
                                },
                              },
                              [t._v("Login")]
                            ),
                          ]),
                      t.$auth.isAuthenticated
                        ? n("li", { staticClass: "nav-item dropdown" }, [
                            n(
                              "a",
                              {
                                staticClass: "nav-link dropdown-toggle",
                                attrs: {
                                  href: "#",
                                  id: "profileDropDown",
                                  "data-toggle": "dropdown",
                                },
                              },
                              [
                                n("img", {
                                  staticClass:
                                    "nav-user-profile rounded-circle",
                                  attrs: {
                                    src: t.$auth.user.picture,
                                    alt: "User's profile picture",
                                    width: "50",
                                  },
                                }),
                              ]
                            ),
                            n(
                              "div",
                              {
                                staticClass:
                                  "dropdown-menu dropdown-menu-right",
                              },
                              [
                                n("div", { staticClass: "dropdown-header" }, [
                                  t._v(t._s(t.$auth.user.name)),
                                ]),
                                n(
                                  "router-link",
                                  {
                                    staticClass:
                                      "dropdown-item dropdown-profile",
                                    attrs: { to: "/profile" },
                                  },
                                  [
                                    n("font-awesome-icon", {
                                      staticClass: "mr-3",
                                      attrs: { icon: "user" },
                                    }),
                                    t._v("Profile\n              "),
                                  ],
                                  1
                                ),
                                n(
                                  "a",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { id: "qsLogoutBtn", href: "#" },
                                    on: {
                                      click: function (e) {
                                        return e.preventDefault(), t.logout(e);
                                      },
                                    },
                                  },
                                  [
                                    n("font-awesome-icon", {
                                      staticClass: "mr-3",
                                      attrs: { icon: "power-off" },
                                    }),
                                    t._v("Log out\n              "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ])
                        : t._e(),
                    ]),
                    t.$auth.isAuthenticated || t.$auth.loading
                      ? t._e()
                      : n("ul", { staticClass: "navbar-nav d-md-none" }, [
                          n(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-block",
                              attrs: { id: "qsLoginBtn" },
                              on: { click: t.login },
                            },
                            [t._v("Log in")]
                          ),
                        ]),
                    t.$auth.isAuthenticated
                      ? n(
                          "ul",
                          {
                            staticClass: "navbar-nav d-md-none d-flex",
                            attrs: { id: "mobileAuthNavBar" },
                          },
                          [
                            n("li", { staticClass: "nav-item" }, [
                              n("span", { staticClass: "user-info" }, [
                                n("img", {
                                  staticClass:
                                    "nav-user-profile d-inline-block rounded-circle mr-3",
                                  attrs: {
                                    src: t.$auth.user.picture,
                                    alt: "User's profile picture",
                                    width: "50",
                                  },
                                }),
                                n("h6", { staticClass: "d-inline-block" }, [
                                  t._v(t._s(t.$auth.user.name)),
                                ]),
                              ]),
                            ]),
                            n(
                              "li",
                              [
                                n("font-awesome-icon", {
                                  staticClass: "mr-3",
                                  attrs: { icon: "user" },
                                }),
                                n(
                                  "router-link",
                                  { attrs: { to: "/profile" } },
                                  [t._v("Profile")]
                                ),
                              ],
                              1
                            ),
                            n(
                              "li",
                              [
                                n("font-awesome-icon", {
                                  staticClass: "mr-3",
                                  attrs: { icon: "power-off" },
                                }),
                                n(
                                  "a",
                                  {
                                    attrs: { id: "qsLogoutBtn", href: "#" },
                                    on: {
                                      click: function (e) {
                                        return e.preventDefault(), t.logout(e);
                                      },
                                    },
                                  },
                                  [t._v("Log out")]
                                ),
                              ],
                              1
                            ),
                          ]
                        )
                      : t._e(),
                  ]
                ),
              ]),
            ]
          ),
        ]);
      },
      c = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "button",
            {
              staticClass: "navbar-toggler",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarNav",
                "aria-controls": "navbarNav",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [n("span", { staticClass: "navbar-toggler-icon" })]
          );
        },
      ],
      l = {
        name: "NavBar",
        methods: {
          login: function () {
            this.$auth.loginWithRedirect();
          },
          logout: function () {
            this.$auth.logout(), this.$router.push({ path: "/" });
          },
        },
      },
      u = l,
      d = (n("34ba"), n("2877")),
      h = Object(d["a"])(u, o, c, !1, null, null, null),
      p = h.exports,
      f = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.msg
          ? n("div", { staticClass: "alert alert-danger alert-dismissible" }, [
              t._v("\n  " + t._s(t.msg) + "\n  "),
              t._m(0),
            ])
          : t._e();
      },
      m = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "button",
            {
              staticClass: "close",
              attrs: {
                type: "button",
                "data-dismiss": "alert",
                "aria-label": "Close",
              },
            },
            [n("span", { attrs: { "aria-hidden": "true" } }, [t._v("×")])]
          );
        },
      ],
      v = {
        name: "Error",
        computed: {
          msg: function () {
            return this.$auth.error;
          },
        },
      },
      g = v,
      b = Object(d["a"])(g, f, m, !1, null, null, null),
      C = b.exports,
      w = { components: { NavBar: p, Error: C } },
      _ = w,
      y = Object(d["a"])(_, i, s, !1, null, null, null),
      x = y.exports,
      k = n("8c4f"),
      O = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [n("hero"), n("hr"), n("home-content")], 1);
      },
      $ = [],
      j = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      A = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "text-center hero" }, [
            n("img", {
              staticClass: "mb-3 app-logo",
              attrs: { src: "/logo.png", alt: "Vue.js logo", width: "120" },
            }),
            n("h1", { staticClass: "mb-4" }, [t._v("Vue.js Sample Project")]),
            n("p", { staticClass: "lead" }, [
              t._v(
                "\n    This is a sample application that demonstrates an authentication flow for an SPA, using\n    "
              ),
              n("a", { attrs: { href: "https://vuejs.org" } }, [
                t._v("Vue.js"),
              ]),
            ]),
          ]);
        },
      ],
      S = { name: "Hero" },
      E = S,
      R = Object(d["a"])(E, j, A, !1, null, null, null),
      P = R.exports,
      U = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "next-steps" }, [
          n("h2", { staticClass: "my-5 text-center" }, [
            t._v("What can I do next?"),
          ]),
          n("div", { staticClass: "row" }, [
            n("div", { staticClass: "col-md-5 mb-4" }, [
              n("h6", { staticClass: "mb-3" }, [
                n(
                  "a",
                  { attrs: { href: "https://auth0.com/docs/connections" } },
                  [
                    n("font-awesome-icon", {
                      staticClass: "mr-2",
                      attrs: { icon: "link" },
                    }),
                    t._v("Configure other identity providers\n        "),
                  ],
                  1
                ),
              ]),
              n("p", [
                t._v(
                  "Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server."
                ),
              ]),
            ]),
            n("div", { staticClass: "col-md" }),
            n("div", { staticClass: "col-md-5 mb-4" }, [
              n("h6", { staticClass: "mb-3" }, [
                n(
                  "a",
                  {
                    attrs: {
                      href: "https://auth0.com/docs/multifactor-authentication",
                    },
                  },
                  [
                    n("font-awesome-icon", {
                      staticClass: "mr-2",
                      attrs: { icon: "link" },
                    }),
                    t._v("Enable Multifactor Authentication\n        "),
                  ],
                  1
                ),
              ]),
              n("p", [
                t._v(
                  "Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported."
                ),
              ]),
            ]),
          ]),
          n("div", { staticClass: "row" }, [
            n("div", { staticClass: "col-md-5 mb-4" }, [
              n("h6", { staticClass: "mb-3" }, [
                n(
                  "a",
                  {
                    attrs: { href: "https://auth0.com/docs/anomaly-detection" },
                  },
                  [
                    n("font-awesome-icon", {
                      staticClass: "mr-2",
                      attrs: { icon: "link" },
                    }),
                    t._v("Anomaly Detection\n        "),
                  ],
                  1
                ),
              ]),
              n("p", [
                t._v(
                  "Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts."
                ),
              ]),
            ]),
            n("div", { staticClass: "col-md" }),
            n("div", { staticClass: "col-md-5 mb-4" }, [
              n("h6", { staticClass: "mb-3" }, [
                n(
                  "a",
                  { attrs: { href: "https://auth0.com/docs/rules" } },
                  [
                    n("font-awesome-icon", {
                      staticClass: "mr-2",
                      attrs: { icon: "link" },
                    }),
                    t._v("Learn About Rules\n        "),
                  ],
                  1
                ),
              ]),
              n("p", [
                t._v(
                  "Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities."
                ),
              ]),
            ]),
          ]),
        ]);
      },
      T = [],
      N = { name: "HomeContent" },
      L = N,
      M = Object(d["a"])(L, U, T, !1, null, null, null),
      B = M.exports,
      W = { name: "home", components: { Hero: P, HomeContent: B } },
      q = W,
      D = (n("0e95"), Object(d["a"])(q, O, $, !1, null, "7a563414", null)),
      H = D.exports,
      I = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "container" }, [
          n("div", { staticClass: "row align-items-center profile-header" }, [
            n("div", { staticClass: "col-md-2 mb-3" }, [
              n("img", {
                staticClass: "rounded-circle img-fluid profile-picture",
                attrs: {
                  src: t.$auth.user.picture,
                  alt: "User's profile picture",
                },
              }),
            ]),
            n("div", { staticClass: "col-md text-center text-md-left" }, [
              n("h2", [t._v(t._s(t.$auth.user.name))]),
              n("p", { staticClass: "lead text-muted" }, [
                t._v(t._s(t.$auth.user.email)),
              ]),
            ]),
          ]),
          n("div", { staticClass: "row" }, [
            n(
              "pre",
              {
                directives: [
                  {
                    name: "highlightjs",
                    rawName: "v-highlightjs",
                    value: JSON.stringify(t.$auth.user, null, 2),
                    expression: "JSON.stringify($auth.user, null, 2)",
                  },
                ],
                staticClass: "rounded w-100",
              },
              [n("code", { staticClass: "json" })]
            ),
          ]),
        ]);
      },
      J = [],
      z = {},
      F = Object(d["a"])(z, I, J, !1, null, null, null),
      V = F.exports,
      Q = (n("386d"), n("6762"), n("2fdb"), n("96cf"), n("3b8d")),
      G = n("a8db"),
      K = n("9767"),
      Y = function () {
        return window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      },
      X = function () {
        return a;
      },
      Z = function (t) {
        var e = t.onRedirectCallback,
          n = void 0 === e ? Y : e,
          i = t.redirectUri,
          s = void 0 === i ? window.location.origin : i,
          o = Object(G["a"])(t, ["onRedirectCallback", "redirectUri"]);
        return (
          a ||
          ((a = new r["a"]({
            data: function () {
              return {
                loading: !0,
                isAuthenticated: !1,
                user: {},
                auth0Client: null,
                popupOpen: !1,
                error: null,
              };
            },
            methods: {
              loginWithPopup: (function () {
                var t = Object(Q["a"])(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.popupOpen = !0),
                                (t.prev = 1),
                                (t.next = 4),
                                this.auth0Client.loginWithPopup(e)
                              );
                            case 4:
                              return (t.next = 6), this.auth0Client.getUser();
                            case 6:
                              return (
                                (this.user = t.sent),
                                (t.next = 9),
                                this.auth0Client.isAuthenticated()
                              );
                            case 9:
                              (this.isAuthenticated = t.sent),
                                (this.error = null),
                                (t.next = 17);
                              break;
                            case 13:
                              (t.prev = 13),
                                (t.t0 = t["catch"](1)),
                                console.error(t.t0),
                                (this.error = t.t0);
                            case 17:
                              return (
                                (t.prev = 17),
                                (this.popupOpen = !1),
                                t.finish(17)
                              );
                            case 20:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[1, 13, 17, 20]]
                    );
                  })
                );
                function e(e) {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
              handleRedirectCallback: (function () {
                var t = Object(Q["a"])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.loading = !0),
                                (t.prev = 1),
                                (t.next = 4),
                                this.auth0Client.handleRedirectCallback()
                              );
                            case 4:
                              return (t.next = 6), this.auth0Client.getUser();
                            case 6:
                              (this.user = t.sent),
                                (this.isAuthenticated = !0),
                                (this.error = null),
                                (t.next = 14);
                              break;
                            case 11:
                              (t.prev = 11),
                                (t.t0 = t["catch"](1)),
                                (this.error = t.t0);
                            case 14:
                              return (
                                (t.prev = 14), (this.loading = !1), t.finish(14)
                              );
                            case 17:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[1, 11, 14, 17]]
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
              loginWithRedirect: function (t) {
                return this.auth0Client.loginWithRedirect(t);
              },
              getIdTokenClaims: function (t) {
                return this.auth0Client.getIdTokenClaims(t);
              },
              getTokenSilently: function (t) {
                return this.auth0Client.getTokenSilently(t);
              },
              getTokenWithPopup: function (t) {
                return this.auth0Client.getTokenWithPopup(t);
              },
              logout: function (t) {
                return this.auth0Client.logout(t);
              },
            },
            created: (function () {
              var t = Object(Q["a"])(
                regeneratorRuntime.mark(function t() {
                  var e, a;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Object(K["a"])({
                                domain: o.domain,
                                client_id: o.clientId,
                                audience: o.audience,
                                redirect_uri: s,
                              })
                            );
                          case 2:
                            if (
                              ((this.auth0Client = t.sent),
                              (t.prev = 3),
                              !window.location.search.includes("code=") ||
                                !window.location.search.includes("state="))
                            ) {
                              t.next = 11;
                              break;
                            }
                            return (
                              (t.next = 7),
                              this.auth0Client.handleRedirectCallback()
                            );
                          case 7:
                            (e = t.sent),
                              (a = e.appState),
                              (this.error = null),
                              n(a);
                          case 11:
                            t.next = 16;
                            break;
                          case 13:
                            (t.prev = 13),
                              (t.t0 = t["catch"](3)),
                              (this.error = t.t0);
                          case 16:
                            return (
                              (t.prev = 16),
                              (t.next = 19),
                              this.auth0Client.isAuthenticated()
                            );
                          case 19:
                            return (
                              (this.isAuthenticated = t.sent),
                              (t.next = 22),
                              this.auth0Client.getUser()
                            );
                          case 22:
                            return (
                              (this.user = t.sent),
                              (this.loading = !1),
                              t.finish(16)
                            );
                          case 25:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[3, 13, 16, 25]]
                  );
                })
              );
              function e() {
                return t.apply(this, arguments);
              }
              return e;
            })(),
          })),
          a)
        );
      },
      tt = {
        install: function (t, e) {
          t.prototype.$auth = Z(e);
        },
      },
      et = function (t, e, n) {
        var a = X(),
          r = function () {
            if (a.isAuthenticated) return n();
            a.loginWithRedirect({ appState: { targetUrl: t.fullPath } });
          };
        if (!a.loading) return r();
        a.$watch("loading", function (t) {
          if (!1 === t) return r();
        });
      };
    r["a"].use(k["a"]);
    var nt = new k["a"]({
        mode: "history",
        base: "/",
        routes: [
          { path: "/", name: "home", component: H },
          { path: "/profile", name: "profile", component: V, beforeEnter: et },
        ],
      }),
      at = nt,
      rt = (n("ac6a"), n("f3e2"), n("a70e")),
      it = n.n(rt),
      st = n("5ad2"),
      ot = n.n(st);
    n("6e2e");
    it.a.registerLanguage("json", ot.a);
    var ct = {
        deep: !0,
        bind: function (t, e) {
          var n = t.querySelectorAll("code");
          n.forEach(function (t) {
            e.value && (t.textContent = e.value), it.a.highlightBlock(t);
          });
        },
        componentUpdated: function (t, e) {
          var n = t.querySelectorAll("code");
          n.forEach(function (t) {
            e.value && ((t.textContent = e.value), it.a.highlightBlock(t));
          });
        },
      },
      lt = n("ecee"),
      ut = n("c074"),
      dt = n("ad3d"),
      ht = n("8160");
    (r["a"].config.productionTip = !1),
      r["a"].use(tt, {
        domain: ht["b"],
        clientId: ht["a"],
        onRedirectCallback: function (t) {
          at.push(t && t.targetUrl ? t.targetUrl : window.location.pathname);
        },
      }),
      r["a"].directive("highlightjs", ct),
      lt["c"].add(ut["a"], ut["c"], ut["b"]),
      r["a"].component("font-awesome-icon", dt["a"]),
      new r["a"]({
        router: at,
        render: function (t) {
          return t(x);
        },
      }).$mount("#app");
  },
  "7dbb": function (t, e, n) {},
  8160: function (t) {
    t.exports = JSON.parse(
      '{"a":"H2m2q1eC04zmriMKOzMuQWEBFE6ofQqb","b":"sample-apps.auth0.com"}'
    );
  },
  c2e9: function (t, e, n) {},
  e7a0: function (t, e) {
    function n(t) {
      var e = new Error("Cannot find module '" + t + "'");
      throw ((e.code = "MODULE_NOT_FOUND"), e);
    }
    (n.keys = function () {
      return [];
    }),
      (n.resolve = n),
      (t.exports = n),
      (n.id = "e7a0");
  },
});
//# sourceMappingURL=app.0fd599f4.js.map
