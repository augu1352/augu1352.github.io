﻿var pwagHelpers = function () {
    function e() {
        var e = document.querySelector(".pwag-gate"),
            t = document.querySelector(".pwag-modal"),
            n = e.parentNode;
        n && (n.removeChild(e), n.removeChild(t))
    }

    function t() {
        window.removeEventListener ? (window.removeEventListener("resize", pwagLinks.windowResize), "birthday" == pwagTemplate.config.type ? window.removeEventListener("resize", pwagBirthday.windowResize) : window.removeEventListener("resize", pwagYesNo.windowResize)) : (window.detachEvent("resize", function () {
            pwagLinks.windowResize
        }), "birthday" == pwagTemplate.config.type ? window.detachEvent("resize", function () {
            pwagBirthday.windowResize
        }) : window.detachEvent("resize", function () {
            pwagYesNo.windowResize
        }))
    }
    var n = function (e) {
        return new RegExp("(\\s|^)" + e + "(\\s|$)", "g")
    },
        o = function (e) {
            return " " + e + " "
        };
    return Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
        var n, o;
        if (null === this) throw new TypeError(" this is null or not defined");
        var a = Object(this),
            i = a.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (arguments.length > 1 && (n = t), o = 0; o < i;) {
            var r;
            o in a && (r = a[o], e.call(n, r, o, a)), o++
        }
    }), {
            appendHTML: function (e, t) {
                var n = document.createElement("div");
                for (n.innerHTML = t; n.children.length > 0;) e.appendChild(n.children[0])
            },
            appendCSS: function (e) {
                var t = document.createElement("link");
                t.href = e, t.type = "text/css", t.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(t)
            },
            extendConfig: function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            },
            hasClass: function (e, t) {
                if (e.classList) {
                    for (var n = !1, o = t.split(" "), a = 0; a < o.length; a++) {
                        var i = o[a].trim();
                        i && e.classList.contains(i) && (n = !0)
                    }
                    return n
                }
                return new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
            },
            addClass: function (e, t) {
                e = this.nodeListToArray(e);
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    pwagHelpers.hasClass(a, a.className) || (a.className += o(t))
                }
            },
            addClassToElement: function (e, t) {
                pwagHelpers.hasClass(e, t) || (e.className += o(t))
            },
            removeClass: function (e, t) {
                e = this.nodeListToArray(e);
                for (var o = n(t), a = 0; a < e.length; a++) e[a].className = e[a].className.replace(o, " ")
            },
            removeClassFromElement: function (e, t) {
                var o = n(t);
                e.className = e.className.replace(o, " ")
            },
            nodeListToArray: function (e) {
                var t = e;
                if (NodeList.prototype.isPrototypeOf(e)) t = Array.prototype.slice.call(e, 0);
                else {
                    for (var n = [], o = 0; o < e.length; o++) n.push(e[o]);
                    t = n
                }
                return t
            },
            text: function (e, t) {
                e.forEach(function (e) {
                    pwagHelpers.isIE8() ? e.textContent = t : e.innerText = t
                })
            },
            index: function (e) {
                return [].slice.call(e.parentNode.children).indexOf(e)
            },
            consoleLog: function (e) {
                console.log(e)
            },
            debounce: function (e, t, n) {
                var o;
                return function () {
                    var a = this,
                        i = arguments;
                    clearTimeout(o), o = setTimeout(function () {
                        o = null, n || e.apply(a, i)
                    }, t), n && !o && e.apply(a, i)
                }
            },
            getCookie: function (e) {
                var t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
                return t ? t[2] : null
            },
            setCookie: function (e, t, n) {
                var o = new Date;
                o.setTime(o.getTime() + 864e5 * n), document.cookie = e + "=" + t + ";path=/;expires=" + o.toGMTString()
            },
            getWindowDims: function () {
                var e = window,
                    t = document,
                    n = t.documentElement,
                    o = t.getElementsByTagName("body")[0],
                    a = e.innerWidth || n.clientWidth || o.clientWidth,
                    i = e.innerHeight || n.clientHeight || o.clientHeight,
                    r = {};
                return r.x = a, r.y = i, r
            },
            getWidth: function (e) {
                return "undefined" != typeof getComputedStyle ? getComputedStyle(e, null).getPropertyValue("width") : e.offsetWidth
            },
            isIE8: function () {
                return !(!window.attachEvent || window.addEventListener)
            },
            replaceAll: function (e, t, n) {
                return e.replace(new RegExp(t, "g"), n)
            },
            dispose: function () {
                e(), t()
            }
        }
},
    pwagTemplate = function () {
        function e(e, t) {
            for (i = 0; i < t.length; i++) e = pwagHelpers.replaceAll(e, t[i].text, '<a href="' + t[i].url + '" class="pwag-terms__link">' + t[i].text + "</a>");
            return e
        }
        var t = {
            logoURL: "",
            type: "birthday",
            age: 18,
            placeholderYear: "Y",
            placeholderMonth: "M",
            placeholderDay: "D",
            enterTextYear: "Indtast dit fødselsår",
            enterTextMonth: "Enter the month of your birth",
            enterTextDay: "Enter the day of your birth",
            errorInvalidYear: "The year you entered is invalid",
            errorInvalidMonth: "The month you entered is invalid",
            errorInvalidDay: "The day you entered is invalid",
            errorNotOldEnough: "You are not old enough to enter this site",
            errorUnableToGetSocialData: "Unable to get your age from the provided social network",
            loginViaSocialMedia: "or log in with:",
            yesNoQuestion: "Are you old enough to enter this site?",
            yes: "Yes",
            no: "No",
            errorYesNo: "Please confirm that you are old enough to enter this site",
            termsText: "",
            termsLinks: [],
            cookieName: "pwag",
            cookieExpiry: 365,
            windowResizeThreshold: 100,
            delayBeforeOpenGate: 750,
            direction: ""
        },
            n = window.pwagConfig;
        t = pwagHelpers.extendConfig(t, n);
        var o = t.direction.toLowerCase(),
            a = (t.socialNetworks, '\t\t<div class="pwag-clearfix pwag-yes-no">\t\t\t<div class="pwag-yes-no__title pwag-instruction"><p>' + t.yesNoQuestion + '</p></div>\t\t\t<div class="pwag-yes-no__options">\t\t\t\t<button class="pwag-yes-no__option pwag-yes-no__option--yes">' + t.yes + '</button>\t\t\t\t<button class="pwag-yes-no__option pwag-yes-no__option--no">' + t.no + '</button>\t\t\t</div>\t\t\t<div class="pwag-clearfix pwag-feedback pwag-feedback--relative">\t\t\t\t<span class="pwag-feedback__message pwag-feedback__message--no">' + t.errorYesNo + "</span>\t\t\t</div>\t\t</div>\t"),
            r = '\t\t<div class="pwag-clearfix pwag-birthday-groups">\t\t\t<div class="pwag-clearfix pwag-birthday-groups__inner">\t\t\t\t<div class="pwag-birthday-group pwag-birthday-group--y">\t\t\t\t\t<p class="pwag-birthday-group__instruction pwag-instruction">' + t.enterTextYear + '</p>\t\t\t\t\t<div class="pwag-date-box pwag-date-box--valid pwag-date-box--0">\t\t\t\t\t\t<span class="pwag-date-box__value">1</span>\t\t\t\t\t\t<span class="pwag-date-box__placeholder">' + t.placeholderYear + '</span>\t\t\t\t\t\t<input type="number" pattern="[0-9]*" class="pwag-date-box__input" />\t\t\t\t\t</div>\t\t\t\t\t<div class="pwag-date-box pwag-date-box--valid pwag-date-box--1">\t\t\t\t\t\t<span class="pwag-date-box__value">9</span>\t\t\t\t\t\t<span class="pwag-date-box__placeholder">' + t.placeholderYear + '</span>\t\t\t\t\t\t<input type="number" pattern="[0-9]*" class="pwag-date-box__input" />\t\t\t\t\t</div>\t\t\t\t\t<div class="pwag-date-box pwag-date-box--2">\t\t\t\t\t\t<span class="pwag-date-box__value"></span>\t\t\t\t\t\t<span class="pwag-date-box__placeholder">' + t.placeholderYear + '</span>\t\t\t\t\t\t<input type="number" pattern="[0-9]*"  class="pwag-date-box__input" />\t\t\t\t\t</div>\t\t\t\t\t<div class="pwag-date-box pwag-date-box--3">\t\t\t\t\t\t<span class="pwag-date-box__value"></span>\t\t\t\t\t\t<span class="pwag-date-box__placeholder">' + t.placeholderYear + '</span>\t\t\t\t\t\t<input type="number" pattern="[0-9]*" class="pwag-date-box__input" />\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t\t<div class="pwag-birthday-group pwag-birthday-group--m">\t\t\t\t\t<p class="pwag-birthday-group__instruction pwag-instruction">' + t.enterTextMonth + '</p>\t\t\t\t\t<div class="pwag-date-box pwag-date-box--4">\t\t\t\t\t\t<span class="pwag-date-box__value"></span>\t\t\t\t\t\t<span class="pwag-date-box__placeholder">' + t.placeholderMonth + '</span>\t\t\t\t\t\t<input type="number" pattern="[0-9]*" class="pwag-date-box__input" />\t\t\t\t\t</div>\t\t\t\t\t<div class="pwag-date-box pwag-date-box--5">\t\t\t\t\t\t<span class="pwag-date-box__value"></span>\t\t\t\t\t\t<span class="pwag-date-box__placeholder">' + t.placeholderMonth + '</span>\t\t\t\t\t\t<input type="number" pattern="[0-9]*" class="pwag-date-box__input" />\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t\t<div class="pwag-birthday-group pwag-birthday-group--d">\t\t\t\t\t<p class="pwag-birthday-group__instruction pwag-instruction">' + t.enterTextDay + '</p>\t\t\t\t\t<div class="pwag-date-box pwag-date-box--6">\t\t\t\t\t\t<span class="pwag-date-box__value"></span>\t\t\t\t\t\t<span class="pwag-date-box__placeholder">' + t.placeholderDay + '</span>\t\t\t\t\t\t<input type="number" pattern="[0-9]*" class="pwag-date-box__input" />\t\t\t\t\t</div>\t\t\t\t\t<div class="pwag-date-box pwag-date-box--7">\t\t\t\t\t\t<span class="pwag-date-box__value"></span>\t\t\t\t\t\t<span class="pwag-date-box__placeholder">' + t.placeholderDay + '</span>\t\t\t\t\t\t<input type="number" pattern="[0-9]*" class="pwag-date-box__input" />\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>\t\t\t<div class="pwag-clearfix pwag-feedback">\t\t\t\t<span class="pwag-feedback__message pwag-feedback__message--year">' + t.errorInvalidYear + '</span>\t\t\t\t<span class="pwag-feedback__message pwag-feedback__message--month">' + t.errorInvalidMonth + '</span>\t\t\t\t<span class="pwag-feedback__message pwag-feedback__message--day">' + t.errorInvalidDay + '</span>\t\t\t\t<span class="pwag-feedback__message pwag-feedback__message--notLegal">' + t.errorNotOldEnough + '</span>\t\t\t\t<span class="pwag-feedback__message pwag-feedback__message--unableToGetSocialData">' + t.errorUnableToGetSocialData + "</span>\t\t\t</div>\t\t</div>\t",
            s = "birthday" == t.type ? r : a,
            l = '\t\t<div class="pwag-gate pwag-gate--' + o + '" dir="' + o + '">\t\t\t<div class="pwag-gate__inner">\t\t\t\t<div class="pwag-gate__content">\t\t\t\t\t' + function () {
                var e = "";
                return logoURL = n.logoURL, logoURL && (e = '\t\t\t\t<div class="pwag-logo">\t\t\t\t\t<img src="' + logoURL + '" class="pwag-logo__image">\t\t\t\t</div>\t\t\t'), e
            }() + "\t\t\t\t\t" + s + '\t\t\t\t\t<div class="pwag-social-container"></div>\t\t\t\t\t' + function () {
                var n = t.termsText,
                    o = t.termsLinks,
                    a = "";
                return n && (a = n), n && (a = e(n, o)), a && (a = '\t\t\t\t<div class="pwag-clearfix pwag-terms">\t\t\t\t\t<p>' + a + "</p>\t\t\t\t</div>\t\t\t"), a
            }() + "\t\t\t\t</div>\t\t\t</div>\t\t</div>\t\t" + function () {
                return '\t\t\t<div class="pwag-modal pwag-modal--' + o + '" dir="' + o + '">\t\t\t\t<div class="pwag-modal__outer">\t\t\t\t\t<div class="pwag-modal__inner">\t\t\t\t\t\t<button class="pwag-modal__close">Close</button>\t\t\t\t\t\t<div class="pwag-modal__content"></div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>\t\t'
            }() + "\t";
        return pwagHelpers.getCookie(t.cookieName) || pwagHelpers.appendHTML(document.body, l), {
            config: t
        }
    },
    pwagBirthday = function () {
        function e() {
            H[$].focus()
        }

        function t(e) {
            var t = e ? M : h($);
            b(), E(), r(), o(), pwagHelpers.addClassToElement(O[$], "pwag-date-box--focus"), M > t && (M-- , pwagHelpers.removeClass([].slice.call(D, t), "pwag-birthday-group--visible"), l(M))
        }

        function n(e, t) {
            for (var n = J[e], o = 0, a = n[0]; a <= n[1]; a++) {
                if (o == t) return a;
                o++
            }
        }

        function o() {
            pwagHelpers.removeClass(O, "pwag-date-box--focus")
        }

        function a() {
            for (var e = 0; e < A.length; e++) A[e].blur()
        }

        function r() {
            var e = R.slice($, I.length);
            pwagHelpers.text(e, ""), pwagHelpers.removeClass(S.slice($, O.length), "pwag-date-box--valid")
        }

        function s() {
            pwagHelpers.addClassToElement(O[$], "pwag-date-box--valid")
        }

        function l(e) {
            var t = D[e];
            pwagHelpers.removeClass(D, "pwag-current"), pwagHelpers.addClassToElement(t, "pwag-birthday-group--visible"), pwagHelpers.addClassToElement(t, "pwag-current"), pwagContent = document.querySelector(".pwag-gate__content"), pwagContentWidth = parseInt(pwagHelpers.getWidth(pwagContent));
            var n = pwagContentWidth / 2 - t.offsetWidth / 2 - t.offsetLeft + "px";
            B.style.left = n
        }

        function c() {
            for (var e = 0; e < S.length; e++) _thisItem = S[e], _thisItem.addEventListener ? _thisItem.addEventListener("click", u, !1) : _thisItem.onclick = function () {
                u()
            }
        }

        function u(o) {
            element = o.target;
            var a = element.getAttribute("class");
            "pwag-date-box__value" != a && "pwag-date-box__placeholder" != a && "pwag-date-box__input" != a || (element = element.parentNode);
            var i = pwagHelpers.index(element.parentNode);
            M = i, $ = pwagHelpers.index(element) - 1;
            var r = n(i, pwagHelpers.index(element) - 1);
            $ = r, l(i), t(!0), e()
        }

        function d() {
            document.onkeyup = function (e) {
                f(e)
            }
        }

        function p(e) {
            if (s(), pwagHelpers.isIE8() ? document.querySelector(".pwag-date-box--" + $ + " .pwag-date-box__value").innerText = e : document.querySelector(".pwag-date-box--" + $ + " .pwag-date-box__value").textContent = e, !0 === w(M))
                if (g()) {
                    var n = v(M);
                    switch (n) {
                        case 1:
                            x("notLegal"), o(), a(), _(M);
                            break;
                        case 2:
                            $++ , M++ , t(!1), l(M);
                            break;
                        case 3:
                            T()
                    }
                } else _(M), x(Y[M]);
            else $++ , t(!1)
        }

        function f(e) {
            var t;
            if (0 === (t = pwagHelpers.isIE8() ? window.event.keyCode : e.keyCode || e.which) || 229 === t) {
                var n = document.activeElement;
                n && (t = m(n.value))
            }
            switch (t) {
                case 8:
                case 37:
                    k(), e.preventDefault();
                    break;
                default:
                    if (t >= 48 && t <= 57 || t >= 96 && t <= 105) {
                        var o = t >= 96 ? t - 96 : t - 48;
                        E(), p(o)
                    } else e.preventDefault()
            }
        }

        function m(e) {
            return e.charCodeAt(e.length - 1)
        }

        function h(e) {
            for (var t = 0; t < J.length; t++) {
                var n = J[t][0],
                    o = J[t][1];
                if (e >= n && e <= o) return t
            }
        }

        function g() {
            var e = !0,
                t = y(),
                n = G[M][0],
                o = G[M][1];
            return (t < n || t > o) && (e = !1), e
        }

        function w(e) {
            var t = !0,
                n = J[e][0],
                o = J[e][1];
            for (i = n; i <= o; i++) pwagHelpers.isIE8() ? !0 !== F.test(R[i].innerText) && (t = !1) : !0 !== F.test(R[i].textContent) && (t = !1);
            return t
        }

        function v(e) {
            var t = J[e][0],
                n = J[e][1],
                o = y(),
                a = parseInt(z.slice(t, n + 1));
            return o < a ? 3 : o > a ? 1 : 2 == e ? 3 : 2
        }

        function y() {
            var e = "",
                t = J[M][0],
                n = J[M][1];
            for (i = t; i <= n; i++) pwagHelpers.isIE8() ? e += I[i].innerText : e += I[i].textContent;
            return e
        }

        function _(e) {
            pwagHelpers.addClassToElement(D[e], "pwag-invalid")
        }

        function b() {
            pwagHelpers.removeClass(D, "pwag-invalid")
        }

        function k() {
            $ > 0 && ($-- , t(!1))
        }

        function x(e) {
            pwagHelpers.addClassToElement(document.querySelector(".pwag-feedback"), "pwag-show"), pwagHelpers.addClassToElement(document.querySelector(".pwag-feedback__message--" + e), "pwag-show")
        }

        function E() {
            pwagHelpers.removeClass(document.querySelectorAll(".pwag-feedback"), "pwag-show"), pwagHelpers.removeClass(document.querySelectorAll(".pwag-feedback__message"), "pwag-show")
        }

        function T() {
            pwagHelpers.setCookie(C.cookieName, !0, C.cookieExpiry), pwagHelpers.addClassToElement(N, "pwag-success"), setTimeout(q, C.delayBeforeOpenGate)
        }

        function q() {
            var e = window,
                t = document,
                n = t.documentElement,
                o = t.getElementsByTagName("body")[0],
                a = e.innerHeight || n.clientHeight || o.clientHeight;
            N.style.transform = "translate(0px, " + -a + "px)", setTimeout(function () {
                pwagHelpers.removeClassFromElement(document.querySelector("html"), "pwag-gate-enabled"), pwagHelpers.dispose();
                pwagHelpers.removeClassFromElement(document.querySelector("body"), "pwag-gate-enabled"), pwagHelpers.dispose()
            }, 450)
        }

        function j(e) {
            return e < 10 ? "0" + e : e
        }
        var C = pwagTemplate.config,
            L = C.age,
            N = document.querySelector(".pwag-gate"),
            H = document.querySelectorAll(".pwag-date-box__input"),
            A = pwagHelpers.nodeListToArray(H),
            O = document.querySelectorAll(".pwag-date-box"),
            S = pwagHelpers.nodeListToArray(O),
            I = document.querySelectorAll(".pwag-date-box__value"),
            R = pwagHelpers.nodeListToArray(I),
            D = document.querySelectorAll(".pwag-birthday-group"),
            B = (pwagHelpers.nodeListToArray(D), document.querySelector(".pwag-birthday-groups__inner")),
            z = function () {
                var e = new Date,
                    t = e.getFullYear(),
                    n = j(e.getDate()),
                    o = j(e.getMonth() + 1);
                return "" + (Number(t) - Number(L)) + o + n
            }(),
            F = new RegExp("^[0-9]+$"),
            $ = 2,
            M = 0,
            P = new Date,
            U = P.getFullYear(),
            J = [
                [0, 3],
                [4, 5],
                [6, 7]
            ],
            Y = ["year", "month", "day"],
            G = [
                [U - 150, U],
                [1, 12],
                [1, 31]
            ],
            W = function () {
                c(), d(), l(M), t(!1), e()
            };
        return {
            initGate: function () {
                "birthday" == C.type ? W() : _initGateYesNo()
            },
            windowResize: pwagHelpers.debounce(function () {
                l(M)
            }, C.windowResizeThreshold)
        }
    },
    pwagYesNo = function () {
        function e() {
            t(), n()
        }

        function t() {
            u.addEventListener ? u.addEventListener("click", function () {
                a(), i()
            }, !1) : u.onclick = function () {
                a(), i()
            }
        }

        function n() {
            d.addEventListener ? d.addEventListener("click", function () {
                o("no")
            }, !1) : d.onclick = function () {
                o("no")
            }
        }

        function o(e) {
            pwagHelpers.addClassToElement(document.querySelector(".pwag-feedback__message--" + e), "pwag-show")
        }

        function a() {
            pwagHelpers.removeClass(document.querySelectorAll(".pwag-feedback__message"), "pwag-show")
        }

        function i() {
            pwagHelpers.setCookie(s.cookieName, !0, s.cookieExpiry), pwagHelpers.addClass(c, "pwag-yes-no--success"), setTimeout(r, s.delayBeforeOpenGate)
        }

        function r() {
            var e = window,
                t = document,
                n = t.documentElement,
                o = t.getElementsByTagName("body")[0],
                a = e.innerHeight || n.clientHeight || o.clientHeight;
            l.style.transform = "translate(0px, " + -a + "px)", setTimeout(function () {
                pwagHelpers.removeClassFromElement(document.querySelector("html"), "pwag-gate-enabled"), pwagHelpers.dispose();
                pwagHelpers.removeClassFromElement(document.querySelector("body"), "pwag-gate-enabled"), pwagHelpers.dispose()
            }, 450)
        }
        if ("yes-no" === pwagTemplate.config.type) {
            var s = pwagTemplate.config,
                l = document.querySelector(".pwag-gate"),
                c = document.querySelectorAll(".pwag-yes-no__option"),
                u = document.querySelector(".pwag-yes-no__option--yes"),
                d = document.querySelector(".pwag-yes-no__option--no"),
                p = function () {
                    e()
                };
            return {
                initGate: function () {
                    p()
                }
            }
        }
    },
    pwagLinks = function () {
        function e() {
            for (var e = 0; e < c.length; e++) _thisItem = c[e], _thisItem.addEventListener ? _thisItem.addEventListener("click", t, !1) : _thisItem.onclick = function () { }
        }

        function t(e) {
            e.preventDefault(), n(e.target.href)
        }

        function n(e) {
            var t = new XMLHttpRequest;
            t.open("GET", e), t.onload = function () {
                o(200 === t.status ? t.responseText : t.status)
            }, t.send()
        }

        function o(e) {
            p.innerHTML = e, pwagHelpers.addClassToElement(u, "pwag-modal--visible"), window.addEventListener ? window.addEventListener("resize", h) : window.attachEvent("resize", function () { }), r()
        }

        function a() {
            u.addEventListener ? u.addEventListener("click", function (e) {
                p.contains(e.target) || i()
            }) : u.onclick = function (e) {
                p.contains(e.target) || i()
            }, f.addEventListener ? f.addEventListener("click", function (e) {
                e.preventDefault(), i()
            }, !1) : f.onclick = function (e) {
                e.preventDefault(), i()
            }
        }

        function i() {
            pwagHelpers.removeClassFromElement(u, "pwag-modal--visible")
        }

        function r() {
            p.style.height = "auto";
            var e = pwagHelpers.getWindowDims(),
                t = e.y,
                n = d.offsetHeight,
                o = p.offsetHeight,
                a = n - o;
            t < n && (p.style.height = t - a + "px")
        }
        var s = pwagTemplate.config,
            l = document.querySelectorAll(".pwag-terms__link"),
            c = pwagHelpers.nodeListToArray(l),
            u = document.querySelector(".pwag-modal"),
            d = document.querySelector(".pwag-modal__inner"),
            p = document.querySelector(".pwag-modal__content"),
            f = document.querySelector(".pwag-modal__close"),
            m = function () {
                e(), a()
            },
            h = pwagHelpers.debounce(function () {
                r()
            }, s.windowResizeThreshold);
        return {
            initLinks: m,
            windowResize: h
        }
    };
Object.create || (Object.create = function () {
    function e() { }
    return function (t) {
        if (1 != arguments.length) throw new Error("Object.create implementation only accepts one parameter.");
        return e.prototype = t, new e
    }
}()), Object.keys || (Object.keys = function (e, t, n) {
    n = [];
    for (t in e) n.hasOwnProperty.call(e, t) && n.push(t);
    return n
}), Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
    for (var t = 0; t < this.length; t++)
        if (this[t] === e) return t;
    return -1
}), Array.prototype.forEach || (Array.prototype.forEach = function (e) {
    if (void 0 === this || null === this) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if ("function" != typeof e) throw new TypeError;
    for (var o = arguments.length >= 2 ? arguments[1] : void 0, a = 0; n > a; a++) a in t && e.call(o, t[a], a, t);
    return this
}), Array.prototype.filter || (Array.prototype.filter = function (e, t) {
    var n = [];
    return this.forEach(function (o, a, i) {
        e.call(t || void 0, o, a, i) && n.push(o)
    }), n
}), Array.prototype.map || (Array.prototype.map = function (e, t) {
    var n = [];
    return this.forEach(function (o, a, i) {
        n.push(e.call(t || void 0, o, a, i))
    }), n
}), Array.isArray || (Array.isArray = function (e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}), "object" != typeof window || "object" != typeof window.location || window.location.assign || (window.location.assign = function (e) {
    window.location = e
}), Function.prototype.bind || (Function.prototype.bind = function (e) {
    function t() { }
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var n = [].slice,
        o = n.call(arguments, 1),
        a = this,
        i = function () {
            return a.apply(this instanceof t ? this : e || window, o.concat(n.call(arguments)))
        };
    return t.prototype = this.prototype, i.prototype = new t, i
});
var hello = function (e) {
    return hello.use(e)
};
hello.utils = {
    extend: function (e) {
        return Array.prototype.slice.call(arguments, 1).forEach(function (t) {
            if (Array.isArray(e) && Array.isArray(t)) Array.prototype.push.apply(e, t);
            else if (e instanceof Object && t instanceof Object && e !== t)
                for (var n in t) e[n] = hello.utils.extend(e[n], t[n]);
            else Array.isArray(t) && (t = t.slice(0)), e = t
        }), e
    }
}, hello.utils.extend(hello, {
    settings: {
        redirect_uri: window.location.href.split("#")[0],
        response_type: "token",
        display: "popup",
        state: "",
        oauth_proxy: "https://auth-server.herokuapp.com/proxy",
        timeout: 2e4,
        popup: {
            resizable: 1,
            scrollbars: 1,
            width: 500,
            height: 550
        },
        scope: ["basic"],
        scope_map: {
            basic: ""
        },
        default_service: null,
        force: null,
        page_uri: window.location.href
    },
    services: {},
    use: function (e) {
        var t = Object.create(this);
        return t.settings = Object.create(this.settings), e && (t.settings.default_service = e), t.utils.Event.call(t), t
    },
    init: function (e, t) {
        var n = this.utils;
        if (!e) return this.services;
        for (var o in e) e.hasOwnProperty(o) && "object" != typeof e[o] && (e[o] = {
            id: e[o]
        });
        return n.extend(this.services, e), t && (n.extend(this.settings, t), "redirect_uri" in t && (this.settings.redirect_uri = n.url(t.redirect_uri).href)), this
    },
    login: function () {
        function e(e, t) {
            hello.emit(e, t)
        }

        function t(e) {
            return e
        }

        function n(e) {
            return !!e
        }
        var o, a = this,
            i = a.utils,
            r = i.error,
            s = i.Promise(),
            l = i.args({
                network: "s",
                options: "o",
                callback: "f"
            }, arguments),
            c = i.diffKey(l.options, a.settings),
            u = l.options = i.merge(a.settings, l.options || {});
        if (u.popup = i.merge(a.settings.popup, l.options.popup || {}), l.network = l.network || a.settings.default_service, s.proxy.then(l.callback, l.callback), s.proxy.then(e.bind(this, "auth.login auth"), e.bind(this, "auth.failed auth")), "string" != typeof l.network || !(l.network in a.services)) return s.reject(r("invalid_network", "The provided network was not recognized"));
        var d = a.services[l.network],
            p = i.globalEvent(function (e) {
                var t;
                t = e ? JSON.parse(e) : r("cancelled", "The authentication was not completed"), t.error ? s.reject(t) : (i.store(t.network, t), s.fulfill({
                    network: t.network,
                    authResponse: t
                }))
            }),
            f = i.url(u.redirect_uri).href,
            m = d.oauth.response_type || u.response_type;
        /\bcode\b/.test(m) && !d.oauth.grant && (m = m.replace(/\bcode\b/, "token")), l.qs = i.merge(c, {
            client_id: encodeURIComponent(d.id),
            response_type: encodeURIComponent(m),
            redirect_uri: encodeURIComponent(f),
            state: {
                client_id: d.id,
                network: l.network,
                display: u.display,
                callback: p,
                state: u.state,
                redirect_uri: f
            }
        });
        var h = i.store(l.network),
            g = /[,\s]+/,
            w = a.settings.scope ? [a.settings.scope.toString()] : [],
            v = i.merge(a.settings.scope_map, d.scope || {});
        if (u.scope && w.push(u.scope.toString()), h && "scope" in h && h.scope instanceof String && w.push(h.scope), w = w.join(",").split(g), w = i.unique(w).filter(n), l.qs.state.scope = w.join(","), w = w.map(function (e) {
            return e in v ? v[e] : e
        }), w = w.join(",").split(g), w = i.unique(w).filter(n), l.qs.scope = w.join(d.scope_delim || ","), !1 === u.force && h && "access_token" in h && h.access_token && "expires" in h && h.expires > (new Date).getTime() / 1e3) {
            if (0 === i.diff((h.scope || "").split(g), (l.qs.state.scope || "").split(g)).length) return s.fulfill({
                unchanged: !0,
                network: l.network,
                authResponse: h
            }), s
        }
        if ("page" === u.display && u.page_uri && (l.qs.state.page_uri = i.url(u.page_uri).href), "login" in d && "function" == typeof d.login && d.login(l), (!/\btoken\b/.test(m) || parseInt(d.oauth.version, 10) < 2 || "none" === u.display && d.oauth.grant && h && h.refresh_token) && (l.qs.state.oauth = d.oauth, l.qs.state.oauth_proxy = u.oauth_proxy), l.qs.state = encodeURIComponent(JSON.stringify(l.qs.state)), 1 === parseInt(d.oauth.version, 10) ? o = i.qs(u.oauth_proxy, l.qs, t) : "none" === u.display && d.oauth.grant && h && h.refresh_token ? (l.qs.refresh_token = h.refresh_token, o = i.qs(u.oauth_proxy, l.qs, t)) : o = i.qs(d.oauth.auth, l.qs, t), e("auth.init", l), "none" === u.display) i.iframe(o, f);
        else if ("popup" === u.display) var y = i.popup(o, f, u.popup),
            _ = setInterval(function () {
                if ((!y || y.closed) && (clearInterval(_), !s.state)) {
                    var e = r("cancelled", "Login has been cancelled");
                    y || (e = r("blocked", "Popup was blocked")), e.network = l.network, s.reject(e)
                }
            }, 100);
        else window.location = o;
        return s.proxy
    },
    logout: function () {
        function e(e, t) {
            hello.emit(e, t)
        }
        var t = this,
            n = t.utils,
            o = n.error,
            a = n.Promise(),
            i = n.args({
                name: "s",
                options: "o",
                callback: "f"
            }, arguments);
        if (i.options = i.options || {}, a.proxy.then(i.callback, i.callback), a.proxy.then(e.bind(this, "auth.logout auth"), e.bind(this, "error")), i.name = i.name || this.settings.default_service, i.authResponse = n.store(i.name), !i.name || i.name in t.services)
            if (i.name && i.authResponse) {
                var r = function (e) {
                    n.store(i.name, null), a.fulfill(hello.utils.merge({
                        network: i.name
                    }, e || {}))
                },
                    s = {};
                if (i.options.force) {
                    var l = t.services[i.name].logout;
                    if (l)
                        if ("function" == typeof l && (l = l(r, i)), "string" == typeof l) n.iframe(l), s.force = null, s.message = "Logout success on providers site was indeterminate";
                        else if (void 0 === l) return a.proxy
                }
                r(s)
            } else a.reject(o("invalid_session", "There was no session to remove"));
        else a.reject(o("invalid_network", "The network was unrecognized"));
        return a.proxy
    },
    getAuthResponse: function (e) {
        return e = e || this.settings.default_service, e && e in this.services ? this.utils.store(e) || null : null
    },
    events: {}
}), hello.utils.extend(hello.utils, {
    error: function (e, t) {
        return {
            error: {
                code: e,
                message: t
            }
        }
    },
    qs: function (e, t, n) {
        if (t) {
            n = n || encodeURIComponent;
            for (var o in t) {
                var a = "([\\?\\&])" + o + "=[^\\&]*",
                    i = new RegExp(a);
                e.match(i) && (e = e.replace(i, "$1" + o + "=" + n(t[o])), delete t[o])
            }
        }
        return this.isEmpty(t) ? e : e + (e.indexOf("?") > -1 ? "&" : "?") + this.param(t, n)
    },
    param: function (e, t) {
        var n, o, a = {};
        if ("string" == typeof e) {
            if (t = t || decodeURIComponent, o = e.replace(/^[\#\?]/, "").match(/([^=\/\&]+)=([^\&]+)/g))
                for (var i = 0; i < o.length; i++) n = o[i].match(/([^=]+)=(.*)/), a[n[1]] = t(n[2]);
            return a
        }
        t = t || encodeURIComponent;
        var r = e;
        a = [];
        for (var s in r) r.hasOwnProperty(s) && r.hasOwnProperty(s) && a.push([s, "?" === r[s] ? "?" : t(r[s])].join("="));
        return a.join("&")
    },
    store: function () {
        function e() {
            var e = {};
            try {
                e = JSON.parse(n.getItem("hello")) || {}
            } catch (e) { }
            return e
        }

        function t(e) {
            n.setItem("hello", JSON.stringify(e))
        }
        for (var n, o = ["localStorage", "sessionStorage"], a = -1, i = "test"; o[++a];) try {
            n = window[o[a]], n.setItem(i + a, a), n.removeItem(i + a);
            break
        } catch (e) {
            n = null
        }
        if (!n) {
            var r = null;
            n = {
                getItem: function (e) {
                    e += "=";
                    for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                        var o = t[n].replace(/(^\s+|\s+$)/, "");
                        if (o && 0 === o.indexOf(e)) return o.substr(e.length)
                    }
                    return r
                },
                setItem: function (e, t) {
                    r = t, document.cookie = e + "=" + t
                }
            }, r = n.getItem("hello")
        }
        return function (n, o, a) {
            var i = e();
            if (n && void 0 === o) return i[n] || null;
            if (n && null === o) try {
                delete i[n]
            } catch (e) {
                i[n] = null
            } else {
                if (!n) return i;
                i[n] = o
            }
            return t(i), i || null
        }
    }(),
    append: function (e, t, n) {
        var o = "string" == typeof e ? document.createElement(e) : e;
        if ("object" == typeof t)
            if ("tagName" in t) n = t;
            else
                for (var a in t)
                    if (t.hasOwnProperty(a))
                        if ("object" == typeof t[a])
                            for (var i in t[a]) t[a].hasOwnProperty(i) && (o[a][i] = t[a][i]);
                        else "html" === a ? o.innerHTML = t[a] : /^on/.test(a) ? o[a] = t[a] : o.setAttribute(a, t[a]);
        return "body" === n ? function e() {
            document.body ? document.body.appendChild(o) : setTimeout(e, 16)
        }() : "object" == typeof n ? n.appendChild(o) : "string" == typeof n && document.getElementsByTagName(n)[0].appendChild(o), o
    },
    iframe: function (e) {
        this.append("iframe", {
            src: e,
            style: {
                position: "absolute",
                left: "-1000px",
                bottom: 0,
                height: "1px",
                width: "1px"
            }
        }, "body")
    },
    merge: function () {
        var e = Array.prototype.slice.call(arguments);
        return e.unshift({}), this.extend.apply(null, e)
    },
    args: function (e, t) {
        var n = {},
            o = 0,
            a = null,
            i = null;
        for (i in e)
            if (e.hasOwnProperty(i)) break;
        if (1 === t.length && "object" == typeof t[0] && "o!" != e[i])
            for (i in t[0])
                if (e.hasOwnProperty(i) && i in e) return t[0];
        for (i in e)
            if (e.hasOwnProperty(i))
                if (a = typeof t[o], "function" == typeof e[i] && e[i].test(t[o]) || "string" == typeof e[i] && (e[i].indexOf("s") > -1 && "string" === a || e[i].indexOf("o") > -1 && "object" === a || e[i].indexOf("i") > -1 && "number" === a || e[i].indexOf("a") > -1 && "object" === a || e[i].indexOf("f") > -1 && "function" === a)) n[i] = t[o++];
                else if ("string" == typeof e[i] && e[i].indexOf("!") > -1) return !1;
        return n
    },
    url: function (e) {
        if (e) {
            if (window.URL && URL instanceof Function && 0 !== URL.length) return new URL(e, window.location);
            var t = document.createElement("a");
            return t.href = e, t.cloneNode(!1)
        }
        return window.location
    },
    diff: function (e, t) {
        return t.filter(function (t) {
            return -1 === e.indexOf(t)
        })
    },
    diffKey: function (e, t) {
        if (e || !t) {
            var n = {};
            for (var o in e) o in t || (n[o] = e[o]);
            return n
        }
        return e
    },
    unique: function (e) {
        return Array.isArray(e) ? e.filter(function (t, n) {
            return e.indexOf(t) === n
        }) : []
    },
    isEmpty: function (e) {
        if (!e) return !0;
        if (Array.isArray(e)) return !e.length;
        if ("object" == typeof e)
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
        return !0
    },
    Promise: function () {
        var e = function (t) {
            return this instanceof e ? (this.id = "Thenable/1.0.6", this.state = 0, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
                then: this.then.bind(this)
            }, void ("function" == typeof t && t.call(this, this.fulfill.bind(this), this.reject.bind(this)))) : new e(t)
        };
        e.prototype = {
            fulfill: function (e) {
                return t(this, 1, "fulfillValue", e)
            },
            reject: function (e) {
                return t(this, 2, "rejectReason", e)
            },
            then: function (t, o) {
                var i = this,
                    r = new e;
                return i.onFulfilled.push(a(t, r, "fulfill")), i.onRejected.push(a(o, r, "reject")), n(i), r.proxy
            }
        };
        var t = function (e, t, o, a) {
            return 0 === e.state && (e.state = t, e[o] = a, n(e)), e
        },
            n = function (e) {
                1 === e.state ? o(e, "onFulfilled", e.fulfillValue) : 2 === e.state && o(e, "onRejected", e.rejectReason)
            },
            o = function (e, t, n) {
                if (0 !== e[t].length) {
                    var o = e[t];
                    e[t] = [];
                    var a = function () {
                        for (var e = 0; e < o.length; e++) o[e](n)
                    };
                    "object" == typeof process && "function" == typeof process.nextTick ? process.nextTick(a) : "function" == typeof setImmediate ? setImmediate(a) : setTimeout(a, 0)
                }
            },
            a = function (e, t, n) {
                return function (o) {
                    if ("function" != typeof e) t[n].call(t, o);
                    else {
                        var a;
                        try {
                            a = e(o)
                        } catch (e) {
                            return void t.reject(e)
                        }
                        i(t, a)
                    }
                }
            },
            i = function (e, t) {
                if (e === t || e.proxy === t) return void e.reject(new TypeError("cannot resolve promise with itself"));
                var n;
                if ("object" == typeof t && null !== t || "function" == typeof t) try {
                    n = t.then
                } catch (t) {
                    return void e.reject(t)
                }
                if ("function" != typeof n) e.fulfill(t);
                else {
                    var o = !1;
                    try {
                        n.call(t, function (n) {
                            o || (o = !0, n === t ? e.reject(new TypeError("circular thenable chain")) : i(e, n))
                        }, function (t) {
                            o || (o = !0, e.reject(t))
                        })
                    } catch (t) {
                        o || e.reject(t)
                    }
                }
            };
        return e
    }(),
    Event: function () {
        var e = /[\s\,]+/;
        return this.parent = {
            events: this.events,
            findEvents: this.findEvents,
            parent: this.parent,
            utils: this.utils
        }, this.events = {}, this.on = function (t, n) {
            if (n && "function" == typeof n)
                for (var o = t.split(e), a = 0; a < o.length; a++) this.events[o[a]] = [n].concat(this.events[o[a]] || []);
            return this
        }, this.off = function (e, t) {
            return this.findEvents(e, function (e, n) {
                t && this.events[e][n] !== t || (this.events[e][n] = null)
            }), this
        }, this.emit = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            t.push(e);
            for (var n = function (n, o) {
                t[t.length - 1] = "*" === n ? e : n, this.events[n][o].apply(this, t)
            }, o = this; o && o.findEvents;) o.findEvents(e + ",*", n), o = o.parent;
            return this
        }, this.emitAfter = function () {
            var e = this,
                t = arguments;
            return setTimeout(function () {
                e.emit.apply(e, t)
            }, 0), this
        }, this.findEvents = function (t, n) {
            var o = t.split(e);
            for (var a in this.events)
                if (this.events.hasOwnProperty(a) && o.indexOf(a) > -1)
                    for (var i = 0; i < this.events[a].length; i++) this.events[a][i] && n.call(this, a, i)
        }, this
    },
    globalEvent: function (e, t) {
        return t = t || "_hellojs_" + parseInt(1e12 * Math.random(), 10).toString(36), window[t] = function () {
            try {
                e.apply(this, arguments) && delete window[t]
            } catch (e) {
                console.error(e)
            }
        }, t
    },
    popup: function (e, t, n) {
        var o = document.documentElement;
        if (n.height) {
            var a = void 0 !== window.screenTop ? window.screenTop : screen.top,
                i = screen.height || window.innerHeight || o.clientHeight;
            n.top = parseInt((i - n.height) / 2, 10) + a
        }
        if (n.width) {
            var r = void 0 !== window.screenLeft ? window.screenLeft : screen.left,
                s = screen.width || window.innerWidth || o.clientWidth;
            n.left = parseInt((s - n.width) / 2, 10) + r
        }
        var l = [];
        Object.keys(n).forEach(function (e) {
            var t = n[e];
            l.push(e + (null !== t ? "=" + t : ""))
        }), -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && (e = t + "#oauth_redirect=" + encodeURIComponent(encodeURIComponent(e)));
        var c = window.open(e, "_blank", l.join(","));
        return c && c.focus && c.focus(), c
    },
    responseHandler: function (e, t) {
        function n(e, t, n) {
            var i = e.callback,
                s = e.network;
            if (r.store(s, e), !("display" in e && "page" === e.display)) {
                if (n && i && i in n) {
                    try {
                        delete e.callback
                    } catch (e) { }
                    r.store(s, e);
                    var l = JSON.stringify(e);
                    try {
                        o(n, i)(l)
                    } catch (e) { }
                }
                a()
            }
        }

        function o(e, t) {
            return 0 !== t.indexOf("_hellojs_") ? function () {
                throw "Could not execute callback " + t
            } : e[t]
        }

        function a() {
            if (e.frameElement) t.document.body.removeChild(e.frameElement);
            else {
                try {
                    e.close()
                } catch (e) { }
                e.addEventListener && e.addEventListener("load", function () {
                    e.close()
                })
            }
        }
        var i, r = this,
            s = e.location;
        if ((i = r.param(s.search)) && i.state && (i.code || i.oauth_token)) {
            var l = JSON.parse(i.state);
            i.redirect_uri = l.redirect_uri || s.href.replace(/[\?\#].*$/, "");
            var c = l.oauth_proxy + "?" + r.param(i);
            return void s.assign(c)
        }
        if ((i = r.merge(r.param(s.search || ""), r.param(s.hash || ""))) && "state" in i) {
            try {
                var u = JSON.parse(i.state);
                r.extend(i, u)
            } catch (e) {
                console.error("Could not decode state parameter")
            }
            if ("access_token" in i && i.access_token && i.network) i.expires_in && 0 !== parseInt(i.expires_in, 10) || (i.expires_in = 0), i.expires_in = parseInt(i.expires_in, 10), i.expires = (new Date).getTime() / 1e3 + (i.expires_in || 31536e3), n(i, e, t);
            else if ("error" in i && i.error && i.network) i.error = {
                code: i.error,
                message: i.error_message || i.error_description
            }, n(i, e, t);
            else if (i.callback && i.callback in t) {
                var d = !!("result" in i && i.result) && JSON.parse(i.result);
                o(t, i.callback)(d), a()
            }
            i.page_uri && s.assign(i.page_uri)
        } else if ("oauth_redirect" in i) return void s.assign(decodeURIComponent(i.oauth_redirect))
    }
}), hello.utils.Event.call(hello),
    function (e) {
        var t = {},
            n = {};
        e.on("auth.login, auth.logout", function (n) {
            n && "object" == typeof n && n.network && (t[n.network] = e.utils.store(n.network) || {})
        }),
            function o() {
                var a = (new Date).getTime() / 1e3,
                    i = function (t) {
                        e.emit("auth." + t, {
                            network: r,
                            authResponse: s
                        })
                    };
                for (var r in e.services)
                    if (e.services.hasOwnProperty(r)) {
                        if (!e.services[r].id) continue;
                        var s = e.utils.store(r) || {},
                            l = e.services[r],
                            c = t[r] || {};
                        if (s && "callback" in s) {
                            var u = s.callback;
                            try {
                                delete s.callback
                            } catch (e) { }
                            e.utils.store(r, s);
                            try {
                                window[u](s)
                            } catch (e) { }
                        }
                        if (s && "expires" in s && s.expires < a) {
                            var d = l.refresh || s.refresh_token;
                            !d || r in n && !(n[r] < a) ? d || r in n || (i("expired"), n[r] = !0) : (e.emit("notice", r + " has expired trying to resignin"), e.login(r, {
                                display: "none",
                                force: !1
                            }), n[r] = a + 600);
                            continue
                        }
                        if (c.access_token === s.access_token && c.expires === s.expires) continue;
                        !s.access_token && c.access_token ? i("logout") : s.access_token && !c.access_token ? i("login") : s.expires !== c.expires && i("update"), t[r] = s, r in n && delete n[r]
                    }
                setTimeout(o, 1e3)
            }()
    }(hello), hello.api = function () {
        function e(e) {
            e = e.replace(/\@\{([a-z\_\-]+)(\|.*?)?\}/gi, function (e, t, n) {
                var r = n ? n.replace(/^\|/, "") : "";
                return t in i.query ? (r = i.query[t], delete i.query[t]) : i.data && t in i.data ? (r = i.data[t], delete i.data[t]) : n || a.reject(o("missing_attribute", "The attribute " + t + " is missing from the request")), r
            }), e.match(/^https?:\/\//) || (e = c.base + e), i.url = e, n.request(i, function (e, t) {
                if (!i.formatResponse) return void (("object" == typeof t ? t.statusCode >= 400 : "object" == typeof e && "error" in e) ? a.reject(e) : a.fulfill(e));
                if (!0 === e ? e = {
                    success: !0
                } : e || (e = {}), "delete" === i.method && (e = !e || n.isEmpty(e) ? {
                    success: !0
                } : e), c.wrap && (i.path in c.wrap || "default" in c.wrap)) {
                    var o = i.path in c.wrap ? i.path : "default",
                        r = ((new Date).getTime(), c.wrap[o](e, t, i));
                    r && (e = r)
                }
                e && "paging" in e && e.paging.next && ("?" === e.paging.next[0] ? e.paging.next = i.path + e.paging.next : e.paging.next += "#" + i.path), !e || "error" in e ? a.reject(e) : a.fulfill(e)
            })
        }
        var t = this,
            n = t.utils,
            o = n.error,
            a = n.Promise(),
            i = n.args({
                path: "s!",
                query: "o",
                method: "s",
                data: "o",
                timeout: "i",
                callback: "f"
            }, arguments);
        i.method = (i.method || "get").toLowerCase(), i.headers = i.headers || {}, i.query = i.query || {}, "get" !== i.method && "delete" !== i.method || (n.extend(i.query, i.data), i.data = {});
        var r = i.data = i.data || {};
        if (a.then(i.callback, i.callback), !i.path) return a.reject(o("invalid_path", "Missing the path parameter from the request"));
        i.path = i.path.replace(/^\/+/, "");
        var s = (i.path.split(/[\/\:]/, 2) || [])[0].toLowerCase();
        if (s in t.services) {
            i.network = s;
            var l = new RegExp("^" + s + ":?/?");
            i.path = i.path.replace(l, "")
        }
        i.network = t.settings.default_service = i.network || t.settings.default_service;
        var c = t.services[i.network];
        if (!c) return a.reject(o("invalid_network", "Could not match the service requested: " + i.network));
        if (i.method in c && i.path in c[i.method] && !1 === c[i.method][i.path]) return a.reject(o("invalid_path", "The provided path is not available on the selected network"));
        i.oauth_proxy || (i.oauth_proxy = t.settings.oauth_proxy), "proxy" in i || (i.proxy = i.oauth_proxy && c.oauth && 1 === parseInt(c.oauth.version, 10)), "timeout" in i || (i.timeout = t.settings.timeout), "formatResponse" in i || (i.formatResponse = !0), i.authResponse = t.getAuthResponse(i.network), i.authResponse && i.authResponse.access_token && (i.query.access_token = i.authResponse.access_token);
        var u, d = i.path;
        i.options = n.clone(i.query), i.data = n.clone(r);
        var p = c[{
            delete: "del"
        }[i.method] || i.method] || {};
        if ("get" === i.method) {
            var f = d.split(/[\?#]/)[1];
            f && (n.extend(i.query, n.param(f)), d = d.replace(/\?.*?(#|$)/, "$1"))
        }
        return (u = d.match(/#(.+)/, "")) ? (d = d.split("#")[0], i.path = u[1]) : d in p ? (i.path = d, d = p[d]) : "default" in p && (d = p.default), i.redirect_uri = t.settings.redirect_uri, i.xhr = c.xhr, i.jsonp = c.jsonp, i.form = c.form, "function" == typeof d ? d(i, e) : e(d), a.proxy
    }, hello.utils.extend(hello.utils, {
        request: function (e, t) {
            function n(e, t) {
                var n;
                e.authResponse && e.authResponse.oauth && 1 === parseInt(e.authResponse.oauth.version, 10) && (n = e.query.access_token, delete e.query.access_token, e.proxy = !0), !e.data || "get" !== e.method && "delete" !== e.method || (o.extend(e.query, e.data), e.data = null);
                var a = o.qs(e.url, e.query);
                e.proxy && (a = o.qs(e.oauth_proxy, {
                    path: a,
                    access_token: n || "",
                    then: e.proxy_response_type || ("get" === e.method.toLowerCase() ? "redirect" : "proxy"),
                    method: e.method.toLowerCase(),
                    suppress_response_codes: !0
                })), t(a)
            }
            var o = this,
                a = o.error;
            if (o.isEmpty(e.data) || "FileList" in window || !o.hasBinary(e.data) || (e.xhr = !1, e.jsonp = !1), this.request_cors(function () {
                return void 0 === e.xhr || e.xhr && ("function" != typeof e.xhr || e.xhr(e, e.query))
            })) return void n(e, function (n) {
                var a = o.xhr(e.method, n, e.headers, e.data, t);
                a.onprogress = e.onprogress || null, a.upload && e.onuploadprogress && (a.upload.onprogress = e.onuploadprogress)
            });
            var i = e.query;
            if (e.query = o.clone(e.query), e.callbackID = o.globalEvent(), !1 !== e.jsonp) {
                if (e.query.callback = e.callbackID, "function" == typeof e.jsonp && e.jsonp(e, e.query), "get" === e.method) return void n(e, function (n) {
                    o.jsonp(n, t, e.callbackID, e.timeout)
                });
                e.query = i
            }
            if (!1 !== e.form) {
                e.query.redirect_uri = e.redirect_uri, e.query.state = JSON.stringify({
                    callback: e.callbackID
                });
                var r;
                if ("function" == typeof e.form && (r = e.form(e, e.query)), "post" === e.method && !1 !== r) return void n(e, function (n) {
                    o.post(n, e.data, r, t, e.callbackID, e.timeout)
                })
            }
            t(a("invalid_request", "There was no mechanism for handling this request"))
        },
        request_cors: function (e) {
            return "withCredentials" in new XMLHttpRequest && e()
        },
        domInstance: function (e, t) {
            var n = "HTML" + (e || "").replace(/^[a-z]/, function (e) {
                return e.toUpperCase()
            }) + "Element";
            return !!t && (window[n] ? t instanceof window[n] : window.Element ? t instanceof window.Element && (!e || t.tagName && t.tagName.toLowerCase() === e) : !(t instanceof Object || t instanceof Array || t instanceof String || t instanceof Number) && t.tagName && t.tagName.toLowerCase() === e)
        },
        clone: function (e) {
            if (null === e || "object" != typeof e || e instanceof Date || "nodeName" in e || this.isBinary(e) || "function" == typeof FormData && e instanceof FormData) return e;
            if (Array.isArray(e)) return e.map(this.clone.bind(this));
            var t = {};
            for (var n in e) t[n] = this.clone(e[n]);
            return t
        },
        xhr: function (e, t, n, o, a) {
            function i(e) {
                for (var t, n = {}, o = /([a-z\-]+):\s?(.*);?/gi; t = o.exec(e);) n[t[1]] = t[2];
                return n
            }
            var r = new XMLHttpRequest,
                s = this.error,
                l = !1;
            "blob" === e && (l = e, e = "GET"), e = e.toUpperCase(), r.onload = function (t) {
                var n = r.response;
                try {
                    n = JSON.parse(r.responseText)
                } catch (e) {
                    401 === r.status && (n = s("access_denied", r.statusText))
                }
                var o = i(r.getAllResponseHeaders());
                o.statusCode = r.status, a(n || ("GET" === e ? s("empty_response", "Could not get resource") : {}), o)
            }, r.onerror = function (e) {
                var t = r.responseText;
                try {
                    t = JSON.parse(r.responseText)
                } catch (e) { }
                a(t || s("access_denied", "Could not get resource"))
            };
            var c;
            if ("GET" === e || "DELETE" === e) o = null;
            else if (o && "string" != typeof o && !(o instanceof FormData) && !(o instanceof File) && !(o instanceof Blob)) {
                var u = new FormData;
                for (c in o) o.hasOwnProperty(c) && (o[c] instanceof HTMLInputElement ? "files" in o[c] && o[c].files.length > 0 && u.append(c, o[c].files[0]) : o[c] instanceof Blob ? u.append(c, o[c], o.name) : u.append(c, o[c]));
                o = u
            }
            if (r.open(e, t, !0), l && ("responseType" in r ? r.responseType = l : r.overrideMimeType("text/plain; charset=x-user-defined")), n)
                for (c in n) r.setRequestHeader(c, n[c]);
            return r.send(o), r
        },
        jsonp: function (e, t, n, o) {
            var a, i = this,
                r = i.error,
                s = 0,
                l = document.getElementsByTagName("head")[0],
                c = r("server_error", "server_error"),
                u = function () {
                    s++ || window.setTimeout(function () {
                        t(c), l.removeChild(d)
                    }, 0)
                };
            n = i.globalEvent(function (e) {
                return c = e, !0
            }, n), e = e.replace(new RegExp("=\\?(&|$)"), "=" + n + "$1");
            var d = i.append("script", {
                id: n,
                name: n,
                src: e,
                async: !0,
                onload: u,
                onerror: u,
                onreadystatechange: function () {
                    /loaded|complete/i.test(this.readyState) && u()
                }
            });
            window.navigator.userAgent.toLowerCase().indexOf("opera") > -1 && (a = i.append("script", {
                text: "document.getElementById('" + n + "').onerror();"
            }), d.async = !1), o && window.setTimeout(function () {
                c = r("timeout", "timeout"), u()
            }, o), l.appendChild(d), a && l.appendChild(a)
        },
        post: function (e, t, n, o, a, i) {
            var r, s = this,
                l = s.error,
                c = document,
                u = null,
                d = [],
                p = 0,
                f = null,
                m = 0,
                h = function (e) {
                    m++ || o(e)
                };
            s.globalEvent(h, a);
            var g;
            try {
                g = c.createElement('<iframe name="' + a + '">')
            } catch (e) {
                g = c.createElement("iframe")
            }
            if (g.name = a, g.id = a, g.style.display = "none", n && n.callbackonload && (g.onload = function () {
                h({
                    response: "posted",
                    message: "Content was posted"
                })
            }), i && setTimeout(function () {
                h(l("timeout", "The post operation timed out"))
            }, i), c.body.appendChild(g), s.domInstance("form", t)) {
                for (u = t.form, p = 0; p < u.elements.length; p++) u.elements[p] !== t && u.elements[p].setAttribute("disabled", !0);
                t = u
            }
            if (s.domInstance("form", t))
                for (u = t, p = 0; p < u.elements.length; p++) u.elements[p].disabled || "file" !== u.elements[p].type || (u.encoding = u.enctype = "multipart/form-data", u.elements[p].setAttribute("name", "file"));
            else {
                for (f in t) t.hasOwnProperty(f) && s.domInstance("input", t[f]) && "file" === t[f].type && (u = t[f].form, u.encoding = u.enctype = "multipart/form-data");
                u || (u = c.createElement("form"), c.body.appendChild(u), r = u);
                var w;
                for (f in t)
                    if (t.hasOwnProperty(f)) {
                        var v = s.domInstance("input", t[f]) || s.domInstance("textArea", t[f]) || s.domInstance("select", t[f]);
                        if (v && t[f].form === u) v && t[f].name !== f && (t[f].setAttribute("name", f), t[f].name = f);
                        else {
                            var y = u.elements[f];
                            if (w)
                                for (y instanceof NodeList || (y = [y]), p = 0; p < y.length; p++) y[p].parentNode.removeChild(y[p]);
                            w = c.createElement("input"), w.setAttribute("type", "hidden"), w.setAttribute("name", f), v ? w.value = t[f].value : s.domInstance(null, t[f]) ? w.value = t[f].innerHTML || t[f].innerText : w.value = t[f], u.appendChild(w)
                        }
                    }
                for (p = 0; p < u.elements.length; p++) w = u.elements[p], w.name in t || !0 === w.getAttribute("disabled") || (w.setAttribute("disabled", !0), d.push(w))
            }
            u.setAttribute("method", "POST"), u.setAttribute("target", a), u.target = a, u.setAttribute("action", e), setTimeout(function () {
                u.submit(), setTimeout(function () {
                    try {
                        r && r.parentNode.removeChild(r)
                    } catch (e) {
                        try {
                            console.error("HelloJS: could not remove iframe")
                        } catch (e) { }
                    }
                    for (var e = 0; e < d.length; e++) d[e] && (d[e].setAttribute("disabled", !1), d[e].disabled = !1)
                }, 0)
            }, 100)
        },
        hasBinary: function (e) {
            for (var t in e)
                if (e.hasOwnProperty(t) && this.isBinary(e[t])) return !0;
            return !1
        },
        isBinary: function (e) {
            return e instanceof Object && (this.domInstance("input", e) && "file" === e.type || "FileList" in window && e instanceof window.FileList || "File" in window && e instanceof window.File || "Blob" in window && e instanceof window.Blob)
        },
        toBlob: function (e) {
            var t = /^data\:([^;,]+(\;charset=[^;,]+)?)(\;base64)?,/i,
                n = e.match(t);
            if (!n) return e;
            for (var o = atob(e.replace(t, "")), a = [], i = 0; i < o.length; i++) a.push(o.charCodeAt(i));
            return new Blob([new Uint8Array(a)], {
                type: n[1]
            })
        }
    }),
    function (e) {
        var t = e.api,
            n = e.utils;
        n.extend(n, {
            dataToJSON: function (e) {
                var t = this,
                    n = window,
                    o = e.data;
                if (t.domInstance("form", o) ? o = t.nodeListToJSON(o.elements) : "NodeList" in n && o instanceof NodeList ? o = t.nodeListToJSON(o) : t.domInstance("input", o) && (o = t.nodeListToJSON([o])), ("File" in n && o instanceof n.File || "Blob" in n && o instanceof n.Blob || "FileList" in n && o instanceof n.FileList) && (o = {
                    file: o
                }), !("FormData" in n && o instanceof n.FormData))
                    for (var a in o)
                        if (o.hasOwnProperty(a))
                            if ("FileList" in n && o[a] instanceof n.FileList) 1 === o[a].length && (o[a] = o[a][0]);
                            else {
                                if (t.domInstance("input", o[a]) && "file" === o[a].type) continue;
                                t.domInstance("input", o[a]) || t.domInstance("select", o[a]) || t.domInstance("textArea", o[a]) ? o[a] = o[a].value : t.domInstance(null, o[a]) && (o[a] = o[a].innerHTML || o[a].innerText)
                            }
                return e.data = o, o
            },
            nodeListToJSON: function (e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                    var o = e[n];
                    !o.disabled && o.name && ("file" === o.type ? t[o.name] = o : t[o.name] = o.value || o.innerHTML)
                }
                return t
            }
        }), e.api = function () {
            var e = n.args({
                path: "s!",
                method: "s",
                data: "o",
                timeout: "i",
                callback: "f"
            }, arguments);
            return e.data && n.dataToJSON(e), t.call(this, e)
        }
    }(hello), hello.utils.responseHandler(window, window.opener || window.parent), "object" == typeof chrome && "object" == typeof chrome.identity && chrome.identity.launchWebAuthFlow && function () {
        function e(t, n) {
            var o = {
                closed: !1
            };
            return chrome.identity.launchWebAuthFlow({
                url: t,
                interactive: n
            }, function (t) {
                if (void 0 === t) return void (o.closed = !0);
                var n = hello.utils.url(t),
                    a = {
                        location: {
                            assign: function (t) {
                                e(t, !1)
                            },
                            search: n.search,
                            hash: n.hash,
                            href: n.href
                        },
                        close: function () { }
                    };
                hello.utils.responseHandler(a, window)
            }), o
        }
        hello.utils.popup = function (t) {
            return e(t, !0)
        }, hello.utils.iframe = function (t) {
            e(t, !1)
        }, hello.utils.request_cors = function (e) {
            return e(), !0
        };
        var t = {};
        chrome.storage.local.get("hello", function (e) {
            t = e.hello || {}
        }), hello.utils.store = function (e, n) {
            return 0 === arguments.length ? t : 1 === arguments.length ? t[e] || null : n ? (t[e] = n, chrome.storage.local.set({
                hello: t
            }), n) : null === n ? (delete t[e], chrome.storage.local.set({
                hello: t
            }), null) : void 0
        }
    }(),
    function () {
        if (/^file:\/{3}[^\/]/.test(window.location.href) && window.cordova) {
            hello.utils.iframe = function (e, t) {
                hello.utils.popup(e, t, {
                    hidden: "yes"
                })
            };
            var e = hello.utils.popup;
            hello.utils.popup = function (t, n, o) {
                var a = e.call(this, t, n, o);
                try {
                    if (a && a.addEventListener) {
                        var i = hello.utils.url(n),
                            r = i.origin || i.protocol + "//" + i.hostname;
                        a.addEventListener("loadstart", function (e) {
                            var t = e.url;
                            if (0 === t.indexOf(r)) {
                                var n = hello.utils.url(t),
                                    o = {
                                        location: {
                                            assign: function (e) {
                                                a.executeScript({
                                                    code: 'window.location.href = "' + e + ';"'
                                                })
                                            },
                                            search: n.search,
                                            hash: n.hash,
                                            href: n.href
                                        },
                                        close: function () {
                                            if (a.close) {
                                                a.close();
                                                try {
                                                    a.closed = !0
                                                } catch (e) { }
                                            }
                                        }
                                    };
                                hello.utils.responseHandler(o, window)
                            }
                        })
                    }
                } catch (e) { }
                return a
            }
        }
    }(),
    function (e) {
        function t(e) {
            e && "error" in e && (e.error = {
                code: "server_error",
                message: e.error.message || e.error
            })
        }

        function n(t, n, o) {
            if (!("object" != typeof t || "undefined" != typeof Blob && t instanceof Blob || "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer || "error" in t)) {
                var a = ("app_folder" !== t.root ? t.root : "") + t.path.replace(/\&/g, "%26");
                a = a.replace(/^\//, ""), t.thumb_exists && (t.thumbnail = o.oauth_proxy + "?path=" + encodeURIComponent("https://api-content.dropbox.com/1/thumbnails/auto/" + a + "?format=jpeg&size=m") + "&access_token=" + o.options.access_token), t.type = t.is_dir ? "folder" : t.mime_type, t.name = t.path.replace(/.*\//g, ""), t.is_dir ? t.files = a.replace(/^\//, "") : (t.downloadLink = e.settings.oauth_proxy + "?path=" + encodeURIComponent("https://api-content.dropbox.com/1/files/auto/" + a) + "&access_token=" + o.options.access_token, t.file = "https://api-content.dropbox.com/1/files/auto/" + a), t.id || (t.id = t.path.replace(/^\//, ""))
            }
        }

        function o(e) {
            return function (t, n) {
                delete t.query.limit, n(e)
            }
        }
        var a = {
            version: "1.0",
            auth: "https://www.dropbox.com/1/oauth/authorize",
            request: "https://api.dropbox.com/1/oauth/request_token",
            token: "https://api.dropbox.com/1/oauth/access_token"
        },
            i = {
                version: 2,
                auth: "https://www.dropbox.com/1/oauth2/authorize",
                grant: "https://api.dropbox.com/1/oauth2/token"
            };
        e.init({
            dropbox: {
                name: "Dropbox",
                oauth: i,
                login: function (t) {
                    t.qs.scope = "";
                    var n = decodeURIComponent(t.qs.redirect_uri);
                    0 === n.indexOf("http:") && 0 !== n.indexOf("http://localhost/") ? e.services.dropbox.oauth = a : e.services.dropbox.oauth = i, t.options.popup.width = 1e3, t.options.popup.height = 1e3
                },
                base: "https://api.dropbox.com/1/",
                root: "sandbox",
                get: {
                    me: "account/info",
                    "me/files": o("metadata/auto/@{parent|}"),
                    "me/folder": o("metadata/auto/@{id}"),
                    "me/folders": o("metadata/auto/"),
                    default: function (e, t) {
                        e.path.match("https://api-content.dropbox.com/1/files/") && (e.method = "blob"), t(e.path)
                    }
                },
                post: {
                    "me/files": function (t, n) {
                        var o = t.data.parent,
                            a = t.data.name;
                        t.data = {
                            file: t.data.file
                        }, "string" == typeof t.data.file && (t.data.file = e.utils.toBlob(t.data.file)), n("https://api-content.dropbox.com/1/files_put/auto/" + o + "/" + a)
                    },
                    "me/folders": function (t, n) {
                        var o = t.data.name;
                        t.data = {}, n("fileops/create_folder?root=@{root|sandbox}&" + e.utils.param({
                            path: o
                        }))
                    }
                },
                del: {
                    "me/files": "fileops/delete?root=@{root|sandbox}&path=@{id}",
                    "me/folder": "fileops/delete?root=@{root|sandbox}&path=@{id}"
                },
                wrap: {
                    me: function (e) {
                        if (t(e), !e.uid) return e;
                        e.name = e.display_name;
                        var n = e.name.split(" ");
                        return e.first_name = n.shift(), e.last_name = n.join(" "), e.id = e.uid, delete e.uid, delete e.display_name, e
                    },
                    default: function (e, o, a) {
                        return t(e), e.is_dir && e.contents && (e.data = e.contents, delete e.contents, e.data.forEach(function (t) {
                            t.root = e.root, n(t, o, a)
                        })), n(e, o, a), e.is_deleted && (e.success = !0), e
                    }
                },
                xhr: function (e) {
                    if (e.data && e.data.file) {
                        var t = e.data.file;
                        t && (t.files ? e.data = t.files[0] : e.data = t)
                    }
                    return "delete" === e.method && (e.method = "post"), !0
                },
                form: function (e, t) {
                    delete t.state, delete t.redirect_uri
                }
            }
        })
    }(hello),
    function (e) {
        function t(e) {
            return e.id && (e.thumbnail = e.picture = "https://graph.facebook.com/" + e.id + "/picture"), e
        }

        function n(e) {
            return "data" in e && e.data.forEach(t), e
        }

        function o(e, t, n) {
            if ("boolean" == typeof e && (e = {
                success: e
            }), e && "data" in e) {
                var o = n.query.access_token;
                if (!(e.data instanceof Array)) {
                    var i = e.data;
                    delete e.data, e.data = [i]
                }
                e.data.forEach(function (e) {
                    e.picture && (e.thumbnail = e.picture), e.pictures = (e.images || []).sort(function (e, t) {
                        return e.width - t.width
                    }), e.cover_photo && e.cover_photo.id && (e.thumbnail = a + e.cover_photo.id + "/picture?access_token=" + o), "album" === e.type && (e.files = e.photos = a + e.id + "/photos"), e.can_upload && (e.upload_location = a + e.id + "/photos")
                })
            }
            return e
        }
        e.init({
            facebook: {
                name: "Facebook",
                oauth: {
                    version: 2,
                    auth: "https://www.facebook.com/dialog/oauth/",
                    grant: "https://graph.facebook.com/oauth/access_token"
                },
                scope: {
                    basic: "public_profile",
                    email: "email",
                    share: "user_posts",
                    birthday: "user_birthday",
                    events: "user_events",
                    photos: "user_photos",
                    videos: "user_videos",
                    friends: "user_friends",
                    files: "user_photos,user_videos",
                    publish_files: "user_photos,user_videos,publish_actions",
                    publish: "publish_actions",
                    offline_access: ""
                },
                refresh: !1,
                login: function (e) {
                    e.options.force && (e.qs.auth_type = "reauthenticate"), e.qs.display = e.options.display || "popup"
                },
                logout: function (t, n) {
                    var o = e.utils.globalEvent(t),
                        a = encodeURIComponent(e.settings.redirect_uri + "?" + e.utils.param({
                            callback: o,
                            result: JSON.stringify({
                                force: !0
                            }),
                            state: "{}"
                        })),
                        i = (n.authResponse || {}).access_token;
                    return e.utils.iframe("https://www.facebook.com/logout.php?next=" + a + "&access_token=" + i), !!i && void 0
                },
                base: "https://graph.facebook.com/v2.7/",
                get: {
                    me: "me?fields=email,first_name,last_name,name,timezone,verified",
                    "me/friends": "me/friends",
                    "me/following": "me/friends",
                    "me/followers": "me/friends",
                    "me/share": "me/feed",
                    "me/like": "me/likes",
                    "me/files": "me/albums",
                    "me/albums": "me/albums?fields=cover_photo,name",
                    "me/album": "@{id}/photos?fields=picture",
                    "me/photos": "me/photos",
                    "me/photo": "@{id}",
                    "friend/albums": "@{id}/albums",
                    "friend/photos": "@{id}/photos"
                },
                post: {
                    "me/share": "me/feed",
                    "me/photo": "@{id}"
                },
                wrap: {
                    me: t,
                    "me/friends": n,
                    "me/following": n,
                    "me/followers": n,
                    "me/albums": o,
                    "me/photos": o,
                    "me/files": o,
                    default: o
                },
                xhr: function (t, n) {
                    return "get" !== t.method && "post" !== t.method || (n.suppress_response_codes = !0), "post" === t.method && t.data && "string" == typeof t.data.file && (t.data.file = e.utils.toBlob(t.data.file)), !0
                },
                jsonp: function (t, n) {
                    var o = t.method;
                    "get" === o || e.utils.hasBinary(t.data) ? "delete" === t.method && (n.method = "delete", t.method = "post") : (t.data.method = o, t.method = "get")
                },
                form: function (e) {
                    return {
                        callbackonload: !0
                    }
                }
            }
        });
        var a = "https://graph.facebook.com/"
    }(hello),
    function (e) {
        function t(t, n, o) {
            var a = (o ? "" : "flickr:") + "?method=" + t + "&api_key=" + e.services.flickr.id + "&format=json";
            for (var i in n) n.hasOwnProperty(i) && (a += "&" + i + "=" + n[i]);
            return a
        }

        function n(t) {
            var n = e.getAuthResponse("flickr");
            t(n && n.user_nsid ? n.user_nsid : null)
        }

        function o(e, o) {
            return o || (o = {}),
                function (a, i) {
                    n(function (n) {
                        o.user_id = n, i(t(e, o, !0))
                    })
                }
        }

        function a(e, t) {
            var n = "images/buddyicon.gif";
            return e.nsid && e.iconserver && e.iconfarm && (n = "https://farm" + e.iconfarm + ".staticflickr.com/" + e.iconserver + "/buddyicons/" + e.nsid + (t ? "_" + t : "") + ".jpg"), n
        }

        function i(e, t, n, o, a) {
            return a = a ? "_" + a : "", "https://farm" + t + ".staticflickr.com/" + n + "/" + e + "_" + o + a + ".jpg"
        }

        function r(e) {
            e && e.stat && "ok" != e.stat.toLowerCase() && (e.error = {
                code: "invalid_request",
                message: e.message
            })
        }

        function s(e) {
            if (e.photoset || e.photos) {
                e = c(e, "photoset" in e ? "photoset" : "photos"), d(e), e.data = e.photo, delete e.photo;
                for (var t = 0; t < e.data.length; t++) {
                    var n = e.data[t];
                    n.name = n.title, n.picture = i(n.id, n.farm, n.server, n.secret, ""), n.pictures = l(n.id, n.farm, n.server, n.secret), n.source = i(n.id, n.farm, n.server, n.secret, "b"), n.thumbnail = i(n.id, n.farm, n.server, n.secret, "m")
                }
            }
            return e
        }

        function l(e, t, n, o) {
            return [{
                id: "t",
                max: 100
            }, {
                id: "m",
                max: 240
            }, {
                id: "n",
                max: 320
            }, {
                id: "",
                max: 500
            }, {
                id: "z",
                max: 640
            }, {
                id: "c",
                max: 800
            }, {
                id: "b",
                max: 1024
            }, {
                id: "h",
                max: 1600
            }, {
                id: "k",
                max: 2048
            }, {
                id: "o",
                max: 2048
            }].map(function (a) {
                return {
                    source: i(e, t, n, o, a.id),
                    width: a.max,
                    height: a.max
                }
            })
        }

        function c(e, t) {
            return t in e ? e = e[t] : "error" in e || (e.error = {
                code: "invalid_request",
                message: e.message || "Failed to get data from Flickr"
            }), e
        }

        function u(e) {
            if (r(e), e.contacts) {
                e = c(e, "contacts"), d(e), e.data = e.contact, delete e.contact;
                for (var t = 0; t < e.data.length; t++) {
                    var n = e.data[t];
                    n.id = n.nsid, n.name = n.realname || n.username, n.thumbnail = a(n, "m")
                }
            }
            return e
        }

        function d(e) {
            e.page && e.pages && e.page !== e.pages && (e.paging = {
                next: "?page=" + ++e.page
            })
        }
        e.init({
            flickr: {
                name: "Flickr",
                oauth: {
                    version: "1.0a",
                    auth: "https://www.flickr.com/services/oauth/authorize?perms=read",
                    request: "https://www.flickr.com/services/oauth/request_token",
                    token: "https://www.flickr.com/services/oauth/access_token"
                },
                base: "https://api.flickr.com/services/rest",
                get: {
                    me: o("flickr.people.getInfo"),
                    "me/friends": o("flickr.contacts.getList", {
                        per_page: "@{limit|50}"
                    }),
                    "me/following": o("flickr.contacts.getList", {
                        per_page: "@{limit|50}"
                    }),
                    "me/followers": o("flickr.contacts.getList", {
                        per_page: "@{limit|50}"
                    }),
                    "me/albums": o("flickr.photosets.getList", {
                        per_page: "@{limit|50}"
                    }),
                    "me/album": o("flickr.photosets.getPhotos", {
                        photoset_id: "@{id}"
                    }),
                    "me/photos": o("flickr.people.getPhotos", {
                        per_page: "@{limit|50}"
                    })
                },
                wrap: {
                    me: function (e) {
                        if (r(e), e = c(e, "person"), e.id) {
                            if (e.realname) {
                                e.name = e.realname._content;
                                var t = e.name.split(" ");
                                e.first_name = t.shift(), e.last_name = t.join(" ")
                            }
                            e.thumbnail = a(e, "l"), e.picture = a(e, "l")
                        }
                        return e
                    },
                    "me/friends": u,
                    "me/followers": u,
                    "me/following": u,
                    "me/albums": function (e) {
                        return r(e), e = c(e, "photosets"), d(e), e.photoset && (e.data = e.photoset, e.data.forEach(function (e) {
                            e.name = e.title._content, e.photos = "https://api.flickr.com/services/rest" + t("flickr.photosets.getPhotos", {
                                photoset_id: e.id
                            }, !0)
                        }), delete e.photoset), e
                    },
                    "me/photos": function (e) {
                        return r(e), s(e)
                    },
                    default: function (e) {
                        return r(e), s(e)
                    }
                },
                xhr: !1,
                jsonp: function (e, t) {
                    "get" == e.method && (delete t.callback, t.jsoncallback = e.callbackID)
                }
            }
        })
    }(hello),
    function (e) {
        function t(e) {
            !e.meta || 400 !== e.meta.code && 401 !== e.meta.code || (e.error = {
                code: "access_denied",
                message: e.meta.errorDetail
            })
        }

        function n(e) {
            e && e.id && (e.thumbnail = e.photo.prefix + "100x100" + e.photo.suffix, e.name = e.firstName + " " + e.lastName, e.first_name = e.firstName, e.last_name = e.lastName, e.contact && e.contact.email && (e.email = e.contact.email))
        }

        function o(e, t) {
            var n = t.access_token;
            return delete t.access_token, t.oauth_token = n, t.v = 20121125, !0
        }
        e.init({
            foursquare: {
                name: "Foursquare",
                oauth: {
                    version: 2,
                    auth: "https://foursquare.com/oauth2/authenticate",
                    grant: "https://foursquare.com/oauth2/access_token"
                },
                refresh: !0,
                base: "https://api.foursquare.com/v2/",
                get: {
                    me: "users/self",
                    "me/friends": "users/self/friends",
                    "me/followers": "users/self/friends",
                    "me/following": "users/self/friends"
                },
                wrap: {
                    me: function (e) {
                        return t(e), e && e.response && (e = e.response.user, n(e)), e
                    },
                    default: function (e) {
                        return t(e), e && "response" in e && "friends" in e.response && "items" in e.response.friends && (e.data = e.response.friends.items, e.data.forEach(n), delete e.response), e
                    }
                },
                xhr: o,
                jsonp: o
            }
        })
    }(hello),
    function (e) {
        function t(e, t) {
            var n = t ? t.statusCode : e && "meta" in e && "status" in e.meta && e.meta.status;
            401 !== n && 403 !== n || (e.error = {
                code: "access_denied",
                message: e.message || (e.data ? e.data.message : "Could not get response")
            }, delete e.message)
        }

        function n(e) {
            e.id && (e.thumbnail = e.picture = e.avatar_url, e.name = e.login)
        }

        function o(e, t, n) {
            if (e.data && e.data.length && t && t.Link) {
                var o = t.Link.match(/<(.*?)>;\s*rel=\"next\"/);
                o && (e.paging = {
                    next: o[1]
                })
            }
        }
        e.init({
            github: {
                name: "GitHub",
                oauth: {
                    version: 2,
                    auth: "https://github.com/login/oauth/authorize",
                    grant: "https://github.com/login/oauth/access_token",
                    response_type: "code"
                },
                scope: {
                    email: "user:email"
                },
                base: "https://api.github.com/",
                get: {
                    me: "user",
                    "me/friends": "user/following?per_page=@{limit|100}",
                    "me/following": "user/following?per_page=@{limit|100}",
                    "me/followers": "user/followers?per_page=@{limit|100}",
                    "me/like": "user/starred?per_page=@{limit|100}"
                },
                wrap: {
                    me: function (e, o) {
                        return t(e, o), n(e), e
                    },
                    default: function (e, a, i) {
                        return t(e, a), Array.isArray(e) && (e = {
                            data: e
                        }), e.data && (o(e, a, i), e.data.forEach(n)), e
                    }
                },
                xhr: function (e) {
                    return "get" !== e.method && e.data && (e.headers = e.headers || {}, e.headers["Content-Type"] = "application/json", "object" == typeof e.data && (e.data = JSON.stringify(e.data))), !0
                }
            }
        })
    }(hello),
    function (e) {
        function t(e) {
            return parseInt(e, 10)
        }

        function n(e) {
            return u(e), e.data = e.items, delete e.items, e
        }

        function o(e) {
            return e.error ? void 0 : (e.name || (e.name = e.title || e.message), e.picture || (e.picture = e.thumbnailLink), e.thumbnail || (e.thumbnail = e.thumbnailLink), "application/vnd.google-apps.folder" === e.mimeType && (e.type = "folder", e.files = "https://www.googleapis.com/drive/v2/files?q=%22" + e.id + "%22+in+parents"), e)
        }

        function a(e) {
            return {
                source: e.url,
                width: e.width,
                height: e.height
            }
        }

        function i(e) {
            e.data = e.feed.entry.map(c), delete e.feed
        }

        function r(e) {
            if (u(e), "feed" in e && "entry" in e.feed) e.data = e.feed.entry.map(c), delete e.feed;
            else {
                if ("entry" in e) return c(e.entry);
                "items" in e ? (e.data = e.items.map(o), delete e.items) : o(e)
            }
            return e
        }

        function s(e) {
            e.name = e.displayName || e.name, e.picture = e.picture || (e.image ? e.image.url : null), e.thumbnail = e.picture
        }

        function l(e, t, n) {
            if (u(e), "feed" in e && "entry" in e.feed) {
                for (var o = n.query.access_token, a = 0; a < e.feed.entry.length; a++) {
                    var i = e.feed.entry[a];
                    if (i.id = i.id.$t, i.name = i.title.$t, delete i.title, i.gd$email && (i.email = i.gd$email && i.gd$email.length > 0 ? i.gd$email[0].address : null, i.emails = i.gd$email, delete i.gd$email), i.updated && (i.updated = i.updated.$t), i.link) {
                        var r = i.link.length > 0 ? i.link[0].href : null;
                        r && i.link[0].gd$etag && (r += (r.indexOf("?") > -1 ? "&" : "?") + "access_token=" + o, i.picture = r, i.thumbnail = r), delete i.link
                    }
                    i.category && delete i.category
                }
                e.data = e.feed.entry, delete e.feed
            }
            return e
        }

        function c(e) {
            var t, n = e.media$group,
                o = n.media$content.length ? n.media$content[0] : {},
                i = n.media$content || [],
                r = n.media$thumbnail || [],
                s = i.concat(r).map(a).sort(function (e, t) {
                    return e.width - t.width
                }),
                l = 0,
                c = {
                    id: e.id.$t,
                    name: e.title.$t,
                    description: e.summary.$t,
                    updated_time: e.updated.$t,
                    created_time: e.published.$t,
                    picture: o ? o.url : null,
                    pictures: s,
                    images: [],
                    thumbnail: o ? o.url : null,
                    width: o.width,
                    height: o.height
                };
            if ("link" in e)
                for (l = 0; l < e.link.length; l++) {
                    var u = e.link[l];
                    if (u.rel.match(/\#feed$/)) {
                        c.upload_location = c.files = c.photos = u.href;
                        break
                    }
                }
            if ("category" in e && e.category.length)
                for (t = e.category, l = 0; l < t.length; l++) t[l].scheme && t[l].scheme.match(/\#kind$/) && (c.type = t[l].term.replace(/^.*?\#/, ""));
            return "media$thumbnail" in n && n.media$thumbnail.length && (t = n.media$thumbnail, c.thumbnail = t[0].url, c.images = t.map(a)), t = n.media$content, t && t.length && c.images.push(a(t[0])), c
        }

        function u(e) {
            if ("feed" in e && e.feed.openSearch$itemsPerPage) {
                var n = t(e.feed.openSearch$itemsPerPage.$t),
                    o = t(e.feed.openSearch$startIndex.$t);
                t(e.feed.openSearch$totalResults.$t) > o + n && (e.paging = {
                    next: "?start=" + (o + n)
                })
            } else "nextPageToken" in e && (e.paging = {
                next: "?pageToken=" + e.nextPageToken
            })
        }

        function d() {
            function e(e) {
                var n = new FileReader;
                n.onload = function (n) {
                    t(btoa(n.target.result), e.type + i + "Content-Transfer-Encoding: base64")
                }, n.readAsBinaryString(e)
            }

            function t(e, t) {
                n.push(i + "Content-Type: " + t + i + i + e), a-- , s()
            }
            var n = [],
                o = (1e10 * Math.random()).toString(32),
                a = 0,
                i = "\r\n",
                r = i + "--" + o,
                s = function () { },
                l = /^data\:([^;,]+(\;charset=[^;,]+)?)(\;base64)?,/i;
            this.append = function (n, o) {
                "string" != typeof n && "length" in Object(n) || (n = [n]);
                for (var r = 0; r < n.length; r++) {
                    a++;
                    var s = n[r];
                    if ("undefined" != typeof File && s instanceof File || "undefined" != typeof Blob && s instanceof Blob) e(s);
                    else if ("string" == typeof s && s.match(l)) {
                        var c = s.match(l);
                        t(s.replace(l, ""), c[1] + i + "Content-Transfer-Encoding: base64")
                    } else t(s, o)
                }
            }, this.onready = function (e) {
                (s = function () {
                    0 === a && (n.unshift(""), n.push("--"), e(n.join(r), o), n = [])
                })()
            }
        }

        function p(e, t) {
            var n = {};
            e.data && "undefined" != typeof HTMLInputElement && e.data instanceof HTMLInputElement && (e.data = {
                file: e.data
            }), !e.data.name && Object(Object(e.data.file).files).length && "post" === e.method && (e.data.name = e.data.file.files[0].name), "post" === e.method ? e.data = {
                title: e.data.name,
                parents: [{
                    id: e.data.parent || "root"
                }],
                file: e.data.file
            } : (n = e.data, e.data = {}, n.parent && (e.data.parents = [{
                id: e.data.parent || "root"
            }]), n.file && (e.data.file = n.file), n.name && (e.data.title = n.name));
            var o;
            if ("file" in e.data && (o = e.data.file, delete e.data.file, "object" == typeof o && "files" in o && (o = o.files), !o || !o.length)) return void t({
                error: {
                    code: "request_invalid",
                    message: "There were no files attached with this request to upload"
                }
            });
            var a = new d;
            a.append(JSON.stringify(e.data), "application/json"), o && a.append(o), a.onready(function (o, a) {
                e.headers["content-type"] = 'multipart/related; boundary="' + a + '"', e.data = o, t("upload/drive/v2/files" + (n.id ? "/" + n.id : "") + "?uploadType=multipart")
            })
        }

        function f(e) {
            if ("object" == typeof e.data) try {
                e.data = JSON.stringify(e.data), e.headers["content-type"] = "application/json"
            } catch (e) { }
        }
        var m = "https://www.google.com/m8/feeds/contacts/default/full?v=3.0&alt=json&max-results=@{limit|1000}&start-index=@{start|1}";
        e.init({
            google: {
                name: "Google Plus",
                oauth: {
                    version: 2,
                    auth: "https://accounts.google.com/o/oauth2/auth",
                    grant: "https://accounts.google.com/o/oauth2/token"
                },
                scope: {
                    basic: "https://www.googleapis.com/auth/plus.me profile",
                    email: "email",
                    birthday: "",
                    events: "",
                    photos: "https://picasaweb.google.com/data/",
                    videos: "http://gdata.youtube.com",
                    friends: "https://www.google.com/m8/feeds, https://www.googleapis.com/auth/plus.login",
                    files: "https://www.googleapis.com/auth/drive.readonly",
                    publish: "",
                    publish_files: "https://www.googleapis.com/auth/drive",
                    share: "",
                    create_event: "",
                    offline_access: ""
                },
                scope_delim: " ",
                login: function (e) {
                    "code" === e.qs.response_type && (e.qs.access_type = "offline"), e.options.force && (e.qs.approval_prompt = "force")
                },
                base: "https://www.googleapis.com/",
                get: {
                    me: "plus/v1/people/me",
                    "me/friends": "plus/v1/people/me/people/visible?maxResults=@{limit|100}",
                    "me/following": m,
                    "me/followers": m,
                    "me/contacts": m,
                    "me/share": "plus/v1/people/me/activities/public?maxResults=@{limit|100}",
                    "me/feed": "plus/v1/people/me/activities/public?maxResults=@{limit|100}",
                    "me/albums": "https://picasaweb.google.com/data/feed/api/user/default?alt=json&max-results=@{limit|100}&start-index=@{start|1}",
                    "me/album": function (e, t) {
                        var n = e.query.id;
                        delete e.query.id, t(n.replace("/entry/", "/feed/"))
                    },
                    "me/photos": "https://picasaweb.google.com/data/feed/api/user/default?alt=json&kind=photo&max-results=@{limit|100}&start-index=@{start|1}",
                    "me/file": "drive/v2/files/@{id}",
                    "me/files": "drive/v2/files?q=%22@{parent|root}%22+in+parents+and+trashed=false&maxResults=@{limit|100}",
                    "me/folders": "drive/v2/files?q=%22@{id|root}%22+in+parents+and+mimeType+=+%22application/vnd.google-apps.folder%22+and+trashed=false&maxResults=@{limit|100}",
                    "me/folder": "drive/v2/files?q=%22@{id|root}%22+in+parents+and+trashed=false&maxResults=@{limit|100}"
                },
                post: {
                    "me/files": p,
                    "me/folders": function (e, t) {
                        e.data = {
                            title: e.data.name,
                            parents: [{
                                id: e.data.parent || "root"
                            }],
                            mimeType: "application/vnd.google-apps.folder"
                        }, t("drive/v2/files")
                    }
                },
                put: {
                    "me/files": p
                },
                del: {
                    "me/files": "drive/v2/files/@{id}",
                    "me/folder": "drive/v2/files/@{id}"
                },
                patch: {
                    "me/file": "drive/v2/files/@{id}"
                },
                wrap: {
                    me: function (e) {
                        return e.id && (e.last_name = e.family_name || (e.name ? e.name.familyName : null), e.first_name = e.given_name || (e.name ? e.name.givenName : null), e.emails && e.emails.length && (e.email = e.emails[0].value), s(e)), e
                    },
                    "me/friends": function (e) {
                        return e.items && (u(e), e.data = e.items, e.data.forEach(s), delete e.items), e
                    },
                    "me/contacts": l,
                    "me/followers": l,
                    "me/following": l,
                    "me/share": n,
                    "me/feed": n,
                    "me/albums": r,
                    "me/photos": i,
                    default: r
                },
                xhr: function (t) {
                    return "post" === t.method || "put" === t.method ? f(t) : "patch" === t.method && (e.utils.extend(t.query, t.data), t.data = null), !0
                },
                form: !1
            }
        })
    }(hello),
    function (e) {
        function t(e) {
            return {
                source: e.url,
                width: e.width,
                height: e.height
            }
        }

        function n(e) {
            return "string" == typeof e ? {
                error: {
                    code: "invalid_request",
                    message: e
                }
            } : (e && "meta" in e && "error_type" in e.meta && (e.error = {
                code: e.meta.error_type,
                message: e.meta.error_message
            }), e)
        }

        function o(e) {
            return i(e), e && "data" in e && e.data.forEach(a), e
        }

        function a(e) {
            e.id && (e.thumbnail = e.profile_picture, e.name = e.full_name || e.username)
        }

        function i(e) {
            "pagination" in e && (e.paging = {
                next: e.pagination.next_url
            }, delete e.pagination)
        }
        e.init({
            instagram: {
                name: "Instagram",
                oauth: {
                    version: 2,
                    auth: "https://instagram.com/oauth/authorize/",
                    grant: "https://api.instagram.com/oauth/access_token"
                },
                refresh: !0,
                scope: {
                    basic: "basic",
                    photos: "",
                    friends: "relationships",
                    publish: "likes comments",
                    email: "",
                    share: "",
                    publish_files: "",
                    files: "",
                    videos: "",
                    offline_access: ""
                },
                scope_delim: " ",
                base: "https://api.instagram.com/v1/",
                get: {
                    me: "users/self",
                    "me/feed": "users/self/feed?count=@{limit|100}",
                    "me/photos": "users/self/media/recent?min_id=0&count=@{limit|100}",
                    "me/friends": "users/self/follows?count=@{limit|100}",
                    "me/following": "users/self/follows?count=@{limit|100}",
                    "me/followers": "users/self/followed-by?count=@{limit|100}",
                    "friend/photos": "users/@{id}/media/recent?min_id=0&count=@{limit|100}"
                },
                post: {
                    "me/like": function (e, t) {
                        var n = e.data.id;
                        e.data = {}, t("media/" + n + "/likes")
                    }
                },
                del: {
                    "me/like": "media/@{id}/likes"
                },
                wrap: {
                    me: function (e) {
                        return n(e), "data" in e && (e.id = e.data.id, e.thumbnail = e.data.profile_picture, e.name = e.data.full_name || e.data.username), e
                    },
                    "me/friends": o,
                    "me/following": o,
                    "me/followers": o,
                    "me/photos": function (e) {
                        return n(e), i(e), "data" in e && (e.data = e.data.filter(function (e) {
                            return "image" === e.type
                        }), e.data.forEach(function (e) {
                            e.name = e.caption ? e.caption.text : null, e.thumbnail = e.images.thumbnail.url, e.picture = e.images.standard_resolution.url, e.pictures = Object.keys(e.images).map(function (n) {
                                return t(e.images[n])
                            }).sort(function (e, t) {
                                return e.width - t.width
                            })
                        })), e
                    },
                    default: function (e) {
                        return e = n(e), i(e), e
                    }
                },
                xhr: function (e, t) {
                    var n = e.method,
                        o = "get" !== n;
                    return o && ("post" !== n && "put" !== n || !e.query.access_token || (e.data.access_token = e.query.access_token, delete e.query.access_token), e.proxy = o), o
                },
                form: !1
            }
        })
    }(hello),
    function (e) {
        function t(e, t) {
            var n, a;
            return e && "Message" in e && (a = e.Message, delete e.Message, "ErrorCode" in e ? (n = e.ErrorCode, delete e.ErrorCode) : n = o(t), e.error = {
                code: n,
                message: a,
                details: e
            }), e
        }

        function n(e, t) {
            var n = t.access_token;
            return delete t.access_token, e.headers.Authorization = "Bearer " + n, "get" !== e.method && e.data && (e.headers["Content-Type"] = "application/json", "object" == typeof e.data && (e.data = JSON.stringify(e.data))), "put" === e.method && (e.method = "patch"), !0
        }

        function o(e) {
            switch (e.statusCode) {
                case 400:
                    return "invalid_request";
                case 403:
                    return "stale_token";
                case 401:
                    return "invalid_token";
                case 500:
                default:
                    return "server_error"
            }
        }
        e.init({
            joinme: {
                name: "join.me",
                oauth: {
                    version: 2,
                    auth: "https://secure.join.me/api/public/v1/auth/oauth2",
                    grant: "https://secure.join.me/api/public/v1/auth/oauth2"
                },
                refresh: !1,
                scope: {
                    basic: "user_info",
                    user: "user_info",
                    scheduler: "scheduler",
                    start: "start_meeting",
                    email: "",
                    friends: "",
                    share: "",
                    publish: "",
                    photos: "",
                    publish_files: "",
                    files: "",
                    videos: "",
                    offline_access: ""
                },
                scope_delim: " ",
                login: function (e) {
                    e.options.popup.width = 400, e.options.popup.height = 700
                },
                base: "https://api.join.me/v1/",
                get: {
                    me: "user",
                    meetings: "meetings",
                    "meetings/info": "meetings/@{id}"
                },
                post: {
                    "meetings/start/adhoc": function (e, t) {
                        t("meetings/start")
                    },
                    "meetings/start/scheduled": function (e, t) {
                        var n = e.data.meetingId;
                        e.data = {}, t("meetings/" + n + "/start")
                    },
                    "meetings/schedule": function (e, t) {
                        t("meetings")
                    }
                },
                patch: {
                    "meetings/update": function (e, t) {
                        t("meetings/" + e.data.meetingId)
                    }
                },
                del: {
                    "meetings/delete": "meetings/@{id}"
                },
                wrap: {
                    me: function (e, n) {
                        return t(e, n), e.email ? (e.name = e.fullName, e.first_name = e.name.split(" ")[0], e.last_name = e.name.split(" ")[1], e.id = e.email, e) : e
                    },
                    default: function (e, n) {
                        return t(e, n), e
                    }
                },
                xhr: n
            }
        })
    }(hello),
    function (e) {
        function t(e) {
            e && "errorCode" in e && (e.error = {
                code: e.status,
                message: e.message
            })
        }

        function n(e) {
            return e.error ? void 0 : (e.first_name = e.firstName, e.last_name = e.lastName, e.name = e.formattedName || e.first_name + " " + e.last_name, e.thumbnail = e.pictureUrl, e.email = e.emailAddress, e)
        }

        function o(e) {
            return t(e), a(e), e.values && (e.data = e.values.map(n), delete e.values), e
        }

        function a(e) {
            "_count" in e && "_start" in e && e._count + e._start < e._total && (e.paging = {
                next: "?start=" + (e._start + e._count) + "&count=" + e._count
            })
        }

        function i(e, t) {
            "{}" === JSON.stringify(e) && 200 === t.statusCode && (e.success = !0)
        }

        function r(e) {
            e.access_token && (e.oauth2_access_token = e.access_token, delete e.access_token)
        }

        function s(e, t) {
            e.headers["x-li-format"] = "json";
            var n = e.data.id;
            e.data = ("delete" !== e.method).toString(), e.method = "put", t("people/~/network/updates/key=" + n + "/is-liked")
        }
        e.init({
            linkedin: {
                oauth: {
                    version: 2,
                    response_type: "code",
                    auth: "https://www.linkedin.com/uas/oauth2/authorization",
                    grant: "https://www.linkedin.com/uas/oauth2/accessToken"
                },
                refresh: !0,
                scope: {
                    basic: "r_basicprofile",
                    email: "r_emailaddress",
                    files: "",
                    friends: "",
                    photos: "",
                    publish: "w_share",
                    publish_files: "w_share",
                    share: "",
                    videos: "",
                    offline_access: ""
                },
                scope_delim: " ",
                base: "https://api.linkedin.com/v1/",
                get: {
                    me: "people/~:(picture-url,first-name,last-name,id,formatted-name,email-address)",
                    "me/share": "people/~/network/updates?count=@{limit|250}"
                },
                post: {
                    "me/share": function (e, t) {
                        var n = {
                            visibility: {
                                code: "anyone"
                            }
                        };
                        e.data.id ? n.attribution = {
                            share: {
                                id: e.data.id
                            }
                        } : (n.comment = e.data.message, e.data.picture && e.data.link && (n.content = {
                            "submitted-url": e.data.link,
                            "submitted-image-url": e.data.picture
                        })), e.data = JSON.stringify(n), t("people/~/shares?format=json")
                    },
                    "me/like": s
                },
                del: {
                    "me/like": s
                },
                wrap: {
                    me: function (e) {
                        return t(e), n(e), e
                    },
                    "me/friends": o,
                    "me/following": o,
                    "me/followers": o,
                    "me/share": function (e) {
                        return t(e), a(e), e.values && (e.data = e.values.map(n), e.data.forEach(function (e) {
                            e.message = e.headline
                        }), delete e.values), e
                    },
                    default: function (e, n) {
                        t(e), i(e, n), a(e)
                    }
                },
                jsonp: function (e, t) {
                    r(t), "get" === e.method && (t.format = "jsonp", t["error-callback"] = e.callbackID)
                },
                xhr: function (e, t) {
                    return "get" !== e.method && (r(t), e.headers["Content-Type"] = "application/json", e.headers["x-li-format"] = "json", e.proxy = !0, !0)
                }
            }
        })
    }(hello),
    function (e) {
        function t(e, t) {
            var n = t.access_token;
            return delete t.access_token, t.oauth_token = n, t["_status_code_map[302]"] = 200, !0
        }

        function n(e) {
            return e.id && (e.picture = e.avatar_url, e.thumbnail = e.avatar_url, e.name = e.username || e.full_name), e
        }

        function o(e) {
            "next_href" in e && (e.paging = {
                next: e.next_href
            })
        }
        e.init({
            soundcloud: {
                name: "SoundCloud",
                oauth: {
                    version: 2,
                    auth: "https://soundcloud.com/connect",
                    grant: "https://soundcloud.com/oauth2/token"
                },
                base: "https://api.soundcloud.com/",
                get: {
                    me: "me.json",
                    "me/friends": "me/followings.json",
                    "me/followers": "me/followers.json",
                    "me/following": "me/followings.json",
                    default: function (e, t) {
                        t(e.path + ".json")
                    }
                },
                wrap: {
                    me: function (e) {
                        return n(e), e
                    },
                    default: function (e) {
                        return Array.isArray(e) && (e = {
                            data: e.map(n)
                        }), o(e), e
                    }
                },
                xhr: t,
                jsonp: t
            }
        })
    }(hello),
    function (e) {
        function t(e) {
            if (e.id) {
                if (e.name) {
                    var t = e.name.split(" ");
                    e.first_name = t.shift(), e.last_name = t.join(" ")
                }
                e.thumbnail = e.profile_image_url_https || e.profile_image_url
            }
            return e
        }

        function n(e) {
            return o(e), a(e), e.users && (e.data = e.users.map(t), delete e.users), e
        }

        function o(e) {
            if (e.errors) {
                var t = e.errors[0];
                e.error = {
                    code: "request_failed",
                    message: t.message
                }
            }
        }

        function a(e) {
            "next_cursor_str" in e && (e.paging = {
                next: "?cursor=" + e.next_cursor_str
            })
        }

        function i(e) {
            return Array.isArray(e) ? {
                data: e
            } : e
        }
        var r = "https://api.twitter.com/";
        e.init({
            twitter: {
                oauth: {
                    version: "1.0a",
                    auth: r + "oauth/authenticate",
                    request: r + "oauth/request_token",
                    token: r + "oauth/access_token"
                },
                login: function (e) {
                    var t = "?force_login=true";
                    this.oauth.auth = this.oauth.auth.replace(t, "") + (e.options.force ? t : "")
                },
                base: r + "1.1/",
                get: {
                    me: "account/verify_credentials.json",
                    "me/friends": "friends/list.json?count=@{limit|200}",
                    "me/following": "friends/list.json?count=@{limit|200}",
                    "me/followers": "followers/list.json?count=@{limit|200}",
                    "me/share": "statuses/user_timeline.json?count=@{limit|200}",
                    "me/like": "favorites/list.json?count=@{limit|200}"
                },
                post: {
                    "me/share": function (t, n) {
                        var o = t.data;
                        t.data = null;
                        var a = [];
                        o.message && (a.push(o.message), delete o.message), o.link && (a.push(o.link), delete o.link), o.picture && (a.push(o.picture), delete o.picture), a.length && (o.status = a.join(" ")), o.file ? (o["media[]"] = o.file, delete o.file, t.data = o, n("statuses/update_with_media.json")) : "id" in o ? n("statuses/retweet/" + o.id + ".json") : (e.utils.extend(t.query, o), n("statuses/update.json?include_entities=1"))
                    },
                    "me/like": function (e, t) {
                        var n = e.data.id;
                        e.data = null, t("favorites/create.json?id=" + n)
                    }
                },
                del: {
                    "me/like": function () {
                        p.method = "post";
                        var e = p.data.id;
                        p.data = null, callback("favorites/destroy.json?id=" + e)
                    }
                },
                wrap: {
                    me: function (e) {
                        return o(e), t(e), e
                    },
                    "me/friends": n,
                    "me/followers": n,
                    "me/following": n,
                    "me/share": function (e) {
                        return o(e), a(e), !e.error && "length" in e ? {
                            data: e
                        } : e
                    },
                    default: function (e) {
                        return e = i(e), a(e), e
                    }
                },
                xhr: function (e) {
                    return "get" !== e.method
                }
            }
        })
    }(hello),
    function (e) {
        function t(e, t) {
            return null !== e && "response" in e && null !== e.response && e.response.length && (e = e.response[0], e.id = e.uid, e.thumbnail = e.picture = e.photo_max, e.name = e.first_name + " " + e.last_name, t.authResponse && null !== t.authResponse.email && (e.email = t.authResponse.email)), e
        }

        function n(e) {
            if (e.error) {
                var t = e.error;
                e.error = {
                    code: t.error_code,
                    message: t.error_msg
                }
            }
        }
        e.init({
            vk: {
                name: "Vk",
                oauth: {
                    version: 2,
                    auth: "https://oauth.vk.com/authorize",
                    grant: "https://oauth.vk.com/access_token"
                },
                scope: {
                    email: "email",
                    friends: "friends",
                    photos: "photos",
                    videos: "video",
                    share: "share",
                    offline_access: "offline"
                },
                refresh: !0,
                login: function (e) {
                    e.qs.display = window.navigator && window.navigator.userAgent && /ipad|phone|phone|android/.test(window.navigator.userAgent.toLowerCase()) ? "mobile" : "popup"
                },
                base: "https://api.vk.com/method/",
                get: {
                    me: function (e, t) {
                        e.query.fields = "id,first_name,last_name,photo_max", t("users.get")
                    }
                },
                wrap: {
                    me: function (e, o, a) {
                        return n(e), t(e, a)
                    }
                },
                xhr: !1,
                jsonp: !0,
                form: !1
            }
        })
    }(hello),
    function (e) {
        function t(e) {
            return "data" in e && e.data.forEach(function (e) {
                e.picture && (e.thumbnail = e.picture), e.images && (e.pictures = e.images.map(n).sort(function (e, t) {
                    return e.width - t.width
                }))
            }), e
        }

        function n(e) {
            return {
                width: e.width,
                height: e.height,
                source: e.source
            }
        }

        function o(e) {
            return "data" in e && e.data.forEach(function (e) {
                e.photos = e.files = "https://apis.live.net/v5.0/" + e.id + "/photos"
            }), e
        }

        function a(e, t, n) {
            if (e.id) {
                var o = n.query.access_token;
                if (e.emails && (e.email = e.emails.preferred), !1 !== e.is_friend) {
                    var a = e.user_id || e.id;
                    e.thumbnail = e.picture = "https://apis.live.net/v5.0/" + a + "/picture?access_token=" + o
                }
            }
            return e
        }

        function i(e, t, n) {
            return "data" in e && e.data.forEach(function (e) {
                a(e, t, n)
            }), e
        }
        e.init({
            windows: {
                name: "Windows live",
                oauth: {
                    version: 2,
                    auth: "https://login.live.com/oauth20_authorize.srf",
                    grant: "https://login.live.com/oauth20_token.srf"
                },
                refresh: !0,
                logout: function () {
                    return "http://login.live.com/oauth20_logout.srf?ts=" + (new Date).getTime()
                },
                scope: {
                    basic: "wl.signin,wl.basic",
                    email: "wl.emails",
                    birthday: "wl.birthday",
                    events: "wl.calendars",
                    photos: "wl.photos",
                    videos: "wl.photos",
                    friends: "wl.contacts_emails",
                    files: "wl.skydrive",
                    publish: "wl.share",
                    publish_files: "wl.skydrive_update",
                    share: "wl.share",
                    create_event: "wl.calendars_update,wl.events_create",
                    offline_access: "wl.offline_access"
                },
                base: "https://apis.live.net/v5.0/",
                get: {
                    me: "me",
                    "me/friends": "me/friends",
                    "me/following": "me/contacts",
                    "me/followers": "me/friends",
                    "me/contacts": "me/contacts",
                    "me/albums": "me/albums",
                    "me/album": "@{id}/files",
                    "me/photo": "@{id}",
                    "me/files": "@{parent|me/skydrive}/files",
                    "me/folders": "@{id|me/skydrive}/files",
                    "me/folder": "@{id|me/skydrive}/files"
                },
                post: {
                    "me/albums": "me/albums",
                    "me/album": "@{id}/files/",
                    "me/folders": "@{id|me/skydrive/}",
                    "me/files": "@{parent|me/skydrive}/files"
                },
                del: {
                    "me/album": "@{id}",
                    "me/photo": "@{id}",
                    "me/folder": "@{id}",
                    "me/files": "@{id}"
                },
                wrap: {
                    me: a,
                    "me/friends": i,
                    "me/contacts": i,
                    "me/followers": i,
                    "me/following": i,
                    "me/albums": o,
                    "me/photos": t,
                    default: t
                },
                xhr: function (t) {
                    return "get" === t.method || "delete" === t.method || e.utils.hasBinary(t.data) || ("string" == typeof t.data.file ? t.data.file = e.utils.toBlob(t.data.file) : (t.data = JSON.stringify(t.data), t.headers = {
                        "Content-Type": "application/json"
                    })), !0
                },
                jsonp: function (t) {
                    "get" === t.method || e.utils.hasBinary(t.data) || (t.data.method = t.method, t.method = "get")
                }
            }
        })
    }(hello),
    function (e) {
        function t(e) {
            e && "meta" in e && "error_type" in e.meta && (e.error = {
                code: e.meta.error_type,
                message: e.meta.error_message
            })
        }

        function n(e) {
            if (t(e), e.query && e.query.results && e.query.results.profile) {
                e = e.query.results.profile, e.id = e.guid, e.last_name = e.familyName, e.first_name = e.givenName || e.nickname;
                var n = [];
                e.first_name && n.push(e.first_name), e.last_name && n.push(e.last_name), e.name = n.join(" "), e.email = e.emails && e.emails[0] ? e.emails[0].handle : null, e.thumbnail = e.image ? e.image.imageUrl : null
            }
            return e
        }

        function o(e, n, o) {
            return t(e), i(e, n, o), e.query && e.query.results && e.query.results.contact && (e.data = e.query.results.contact, delete e.query, Array.isArray(e.data) || (e.data = [e.data]), e.data.forEach(a)), e
        }

        function a(e) {
            e.id = null, !e.fields || e.fields instanceof Array || (e.fields = [e.fields]), (e.fields || []).forEach(function (t) {
                "email" === t.type && (e.email = t.value), "name" === t.type && (e.first_name = t.value.givenName, e.last_name = t.value.familyName, e.name = t.value.givenName + " " + t.value.familyName), "yahooid" === t.type && (e.id = t.value)
            })
        }

        function i(e, t, n) {
            return e.query && e.query.count && n.options && (e.paging = {
                next: "?start=" + (e.query.count + (+n.options.start || 1))
            }), e
        }

        function r(e) {
            return "https://query.yahooapis.com/v1/yql?q=" + (e + " limit @{limit|100} offset @{start|0}").replace(/\s/g, "%20") + "&format=json"
        }
        e.init({
            yahoo: {
                oauth: {
                    version: "1.0a",
                    auth: "https://api.login.yahoo.com/oauth/v2/request_auth",
                    request: "https://api.login.yahoo.com/oauth/v2/get_request_token",
                    token: "https://api.login.yahoo.com/oauth/v2/get_token"
                },
                login: function (e) {
                    e.options.popup.width = 560;
                    try {
                        delete e.qs.state.scope
                    } catch (e) { }
                },
                base: "https://social.yahooapis.com/v1/",
                get: {
                    me: r("select * from social.profile(0) where guid=me"),
                    "me/friends": r("select * from social.contacts(0) where guid=me"),
                    "me/following": r("select * from social.contacts(0) where guid=me")
                },
                wrap: {
                    me: n,
                    "me/friends": o,
                    "me/following": o,
                    default: i
                }
            }
        })
    }(hello), "function" == typeof define && define.amd && define(function () {
        return hello
    }), "object" == typeof module && module.exports && (module.exports = hello);
var pwagSocialNetworks = function () {
    function e() {
        pwagHelpers.appendHTML(s, h())
    }

    function t(e) {
        pwagHelpers.addClassToElement(document.querySelector(".pwag-feedback__message--" + e), "pwag-show")
    }

    function n() {
        pwagHelpers.setCookie(a.cookieName, !0, a.cookieExpiry), setTimeout(o, a.delayBeforeOpenGate)
    }

    function o() {
        var e = window,
            t = document,
            n = t.documentElement,
            o = t.getElementsByTagName("body")[0],
            a = e.innerHeight || n.clientHeight || o.clientHeight;
        r.style.transform = "translate(0px, " + -a + "px)", setTimeout(function () {
            pwagHelpers.removeClassFromElement(document.querySelector("html"), "pwag-gate-enabled"), pwagHelpers.dispose();
            pwagHelpers.removeClassFromElement(document.querySelector("body"), "pwag-gate-enabled"), pwagHelpers.dispose()
        }, 450)
    }
    var a = pwagTemplate.config,
        i = window.location.href,
        r = document.querySelector(".pwag-gate"),
        s = document.querySelector(".pwag-social-container"),
        l = function () {
            for (var t = {}, n = 0; n < a.socialNetworks.length; n++) t[a.socialNetworks[n].name] = a.socialNetworks[n].clientId;
            hello.init(t, {
                redirect_uri: i
            }), e()
        },
        c = function (e) {
            var t = d(e);
            hello(e).login(t)
        },
        u = function (e) {
            hello(e).logout()
        },
        d = function (e) {
            switch (e) {
                case "windows":
                    return {
                        scope: "wl.birthday"
                    };
                default:
                    return {}
            }
        };
    hello.on("auth.login", function (e) {
        switch (e.network) {
            case "facebook":
                p.viaFacebook();
                break;
            case "google":
                p.viaGoogle();
                break;
            case "windows":
                p.viaWindows()
        }
    });
    var p = {
        viaFacebook: function () {
            hello("facebook").api("me", {
                fields: "id,name,age_range"
            }).then(function (e) {
                var t = e.age_range;
                t && t.min ? g(t.min, "facebook") : g(-1, "facebook"), u("facebook")
            })
        },
        viaGoogle: function () {
            hello("google").api("me").then(function (e) {
                if (e.birthday) {
                    var t = new Date(e.birthday),
                        n = f(t);
                    g(n, "google")
                } else g(-1, "google");
                u("google")
            })
        },
        viaWindows: function () {
            hello("windows").api("me").then(function (e) {
                if (e.birth_year && e.birth_month && e.birth_day) {
                    var t = e.birth_year + "-" + e.birth_month + "-" + e.birth_day,
                        n = new Date(t),
                        o = f(n);
                    g(o, "windows")
                } else g(-1, "windows");
                u("windows")
            })
        }
    },
        f = function (e) {
            var t = Date.now() - e.getTime(),
                n = new Date(t);
            return Math.abs(n.getUTCFullYear() - 1970)
        },
        m = function () {
            for (var e, t = "", n = 0; n < a.socialNetworks.length; n++) e = a.socialNetworks[n], t += "<button onclick=\"pwagSocialNetworks.login('" + e.name + '\')" class="pwag-social__button pwag-social__button--' + e.name + '">' + e.label + "</button>";
            return t
        },
        h = function () {
            return '<div class="pwag-clearfix pwag-social"><p class="pwag-social__message">' + a.loginViaSocialMedia + "</p>" + m() + "</div>"
        },
        g = function (e) {
            e >= a.age ? n() : t(-1 == e ? "unableToGetSocialData" : "notLegal")
        };
    return {
        init: l,
        login: c
    }
},
    pwagInit = function (e, t) {
        function n() {
            pwagHelpers = pwagHelpers(), pwagTemplate = pwagTemplate(), a = pwagTemplate.config, pwagBirthday = pwagBirthday(), pwagYesNo = pwagYesNo(), pwagLinks = pwagLinks(), pwagSocialNetworks = pwagSocialNetworks(), o()
        }

        function o() {
            pwagHelpers.getCookie(a.cookieName) || (pwagHelpers.addClassToElement(document.querySelector("html"), "pwag-gate-enabled pwag-ie8-" + pwagHelpers.isIE8()), pwagHelpers.addClassToElement(document.body, "pwag-gate-enabled pwag-ie8-" + pwagHelpers.isIE8()), "birthday" == pwagTemplate.config.type ? (pwagBirthday.initGate(), window.addEventListener ? window.addEventListener("resize", pwagBirthday.windowResize) : window.attachEvent("resize", function () {
                pwagBirthday.windowResize
            }), pwagTemplate.config.socialNetworks && pwagSocialNetworks.init()) : (pwagYesNo.initGate(), window.addEventListener ? window.addEventListener("resize", pwagYesNo.windowResize) : window.attachEvent("resize", function () {
                pwagYesNo.windowResize
            })), pwagLinks.initLinks())
        }
        var a;
        document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
            document.removeEventListener("DOMContentLoaded", arguments.callee, !1), n()
        }, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), n())
        })
    }(window, document);
;;;