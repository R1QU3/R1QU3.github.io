export const hasEvent = ! function (e, n, t) {

    /* CSS Use example;
    
        li {
            color: green;
        } 
        .no-hasevent li.hasevent {
            color: red;
        }
        .no-setclasses li.setclasses {
            color: red;
        }
    
    */

    function o(e, n) {
        return typeof e === n
    }

    function s() {
        var e, n, t, s, a, i, f;
        for (var u in l)
            if (l.hasOwnProperty(u)) {
                if (e = [], n = l[u], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], f = i.split("."), 1 === f.length ? Modernizr[f[0]] = s : (!Modernizr[f[0]] || Modernizr[f[0]] instanceof Boolean || (Modernizr[f[0]] = new Boolean(Modernizr[f[0]])), Modernizr[f[0]][f[1]] = s), r.push((s ? "" : "no-") + f.join("-"))
            }
    }

    function a(e) {
        var n = u.className,
            t = Modernizr._config.classPrefix || "";
        if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), c ? u.className.baseVal = n : u.className = n)
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : c ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }
    var r = [],
        l = [],
        f = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout(function () {
                    n(t[e])
                }, 0)
            },
            addTest: function (e, n, t) {
                l.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function (e) {
                l.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = f, Modernizr = new Modernizr;
    var u = n.documentElement,
        c = "svg" === u.nodeName.toLowerCase(),
        p = function () {
            function e(e, n) {
                var s;
                return e ? (n && "string" != typeof n || (n = i(n || "div")), e = "on" + e, s = e in n, !s && o && (n.setAttribute || (n = i("div")), n.setAttribute(e, ""), s = "function" == typeof n[e], n[e] !== t && (n[e] = t), n.removeAttribute(e)), s) : !1
            }
            var o = !("onblur" in n.documentElement);
            return e
        }();
    f.hasEvent = p, s(), a(r), delete f.addTest, delete f.addAsyncTest;
    for (var m = 0; m < Modernizr._q.length; m++) Modernizr._q[m]();
    e.Modernizr = Modernizr
}(window, document);