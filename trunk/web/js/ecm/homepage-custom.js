/*! $Id: homepage-custom.source.js,v 1.18 2014/07/16 18:54:45 santelia Exp $ */ ;
var homeCustom = (function() {
    var o = function(u, q, r) {
            var v = k.fromStorage === true ? "storage" : "service",
                s = q == "none" ? "no module" : q;
            ibmweb.queue.push(function() {
                return ibmStats && typeof ibmStats.event == "function"
            }, function() {
                ibmStats.event({
                    ibmEV: "pers action",
                    ibmEvName: "ibmhomepers",
                    ibmEvGroup: k.currentName === "" ? "no industry" : k.currentName,
                    ibmEvLinkTitle: k.subIndustryName === "" ? "no sub industry" : k.subIndustryName,
                    ibmEvSection: "ind from " + v,
                    ibmEvTarget: u,
                    ibmEvModule: s,
                    ibmEvAction: r
                })
            })
        },
        b = "/common/js/hp-pers/perscontent-{cc}{lc}.js",
        k = {
            contentArray: [],
            contentReady: false,
            cryptKey: "yxsdpqmouenictjarzvkbfhwlg",
            currentCode: "",
            currentName: "",
            fromStorage: false,
            storageKey: "hppi",
            storageKeySub: "hppsi",
            get: function() {
                if (ibmweb.storage.getItem(k.storageKey) !== null) {
                    k.currentName = i(ibmweb.storage.getItem(k.storageKey));
                    k.currentCode = k.serviceToEcmMap[k.currentName];
                    k.userInfoLoaded = true;
                    k.fromStorage = true
                }
                if (ibmweb.storage.getItem(k.storageKeySub) !== null) {
                    k.subIndustryName = i(ibmweb.storage.getItem(k.storageKeySub));
                    k.subIndustryCode = k.serviceToEcmMap[k.subIndustryName] || "";
                    k.userInfoLoaded = true;
                    k.fromStorage = true
                }
            },
            serviceToEcmMap: window.dbNameToIndustryCodeMap || {
                "aerospace & defense": "V",
                automotive: "J",
                "banking & finance": "F",
                "chemicals & petroleum": "P",
                "computer services": "B",
                "consumer products": "D",
                "consumer goods & services": "D",
                education: "E",
                electronics: "L",
                "energy & utilities": "U",
                "financial services": "S",
                government: "G",
                "healthcare & medical": "H",
                "healthcare & life sciences": "HX",
                "industrial products": "M",
                insurance: "N",
                "life sciences": "X",
                "media & entertainment": "K",
                "no specified industry": "ZZ",
                "professional services": "C",
                "retail & distribution": "R",
                telecommunications: "A",
                "transportation & logistics": "T",
                "travel & logistics": "T",
                "travel & transportation": "T",
                wholesale: "W"
            },
            store: function() {
                if (k.currentName != "") {
                    ibmweb.storage.setItem(k.storageKey, f(k.currentName))
                }
                if (k.subIndustryName != "") {
                    ibmweb.storage.setItem(k.storageKeySub, f(k.subIndustryName))
                }
            },
            subIndustryName: "",
            subIndustryCode: "",
            userInfoLoaded: false
        },
        m = dojo.query("meta[name='DC.Language']").attr("content")[0].split("-"),
        e = m[1].toLowerCase(),
        a = m[0],
        p = "",
        h = null,
        l;

    function j() {
        var s = "",
            r = '<img alt="{imgAlt}" height="297" width="578" src="{imgSrc}" class="ibm-no-mobile" />',
            y = '<img alt="{imgAlt}" height="98" width="318" src="{imgSrc}" class="ibm-mobile"/>',
            v = '<div class="ibm-columns{darkBackgroundClass}" id="ibm-lead-4"><div class="ibm-col-1-1"><h1><a href="{linkUrl}"{linkOnclick}>{foreImage}{foreImageMobile}</a></h1><p class="ibm-access"><em>{tooltipText}</em></p></div></div>',
            x = '<div class="ibm-columns"><div class="ibm-col-6-2 "><a href="{linkUrl}"><img alt="{imgAlt}" height="98" width="318" src="{imgSrc}"/></a></div></div>',
            q = "",
            t = "",
            w = "",
            z, u = "";
        if (k.currentName == "" || k.contentArray.length == 0) {
            u = k.currentName == "" ? "no pers - no ind name" : "no pers - no content loaded";
            o(u, "none", "none");
            homeCustom.personalized = false;
            return
        }
        dojo.forEach(k.contentArray, function(A) {
            if (A.industryCode == k.currentCode) {
                h = A
            }
        });
        if (k.subIndustryCode != "") {
            dojo.forEach(k.contentArray, function(A) {
                if (A.industryCode == k.subIndustryCode) {
                    h = A
                }
            })
        }
        if (h == null) {
            o("no pers - no ind content", "none", "none");
            homeCustom.personalized = false;
            return
        }
        if (h.leadspace.leafImgBackSrc != "") {
            homeCustom.personalized = true;
            r = r.replace(/{imgSrc}/g, h.leadspace.leafImgForeSrc).replace(/{imgAlt}/g, h.leadspace.leafImgForeAlt);
            y = y.replace(/{imgSrc}/g, h.leadspace.leafImgForeSrcMobile).replace(/{imgAlt}/g, h.leadspace.leafImgForeAltMobile);
            if (h.leadspace.leafImgLinkOnclick && h.leadspace.leafImgLinkOnclick != "") {
                t = ' onclick="' + h.leadspace.leafImgLinkOnclick.replace(/"/g, "'") + '"'
            }
            if (h.leadspace.darkBackground == true) {
                s = " ibm-alternate"
            }
            q = v.replace(/{darkBackgroundClass}/, s).replace(/{linkUrl}/g, h.leadspace.leafImgLinkUrl).replace(/{linkOnclick}/, t).replace(/{foreImage}/g, r).replace(/{foreImageMobile}/g, y).replace(/{tooltipText}/, h.leadspace.leafImgHiddenText);
            ibmweb.queue.push(function() {
                return document.getElementById("ibm-leadspace-body")
            }, function() {
                c(q)
            })
        }
        if (h.promoCount > 0) {
            homeCustom.personalized = true;
            l = h.promotions[0].promotion;
            w = x.replace("{linkUrl}", l.imageLinkUrl).replace("{imgAlt}", l.imageAlt).replace("{imgSrc}", l.imageSrc);
            z = ibmweb.queue.push(function() {
                return document.getElementById("ibm-promotion-module")
            }, function() {
                dojo.query(dojo.query("#ibm-promotion-module > .ibm-container-body > .ibm-columns")[1]).after(w);
                ibmweb.queue.push(function() {
                    return typeof dojo.query("#ibm-promotion-module .ibm-ribbon-pane .ibm-columns .ibm-col-6-2 a")[2] !== "undefined"
                }, function() {
                    var A = dojo.query("#ibm-promotion-module .ibm-ribbon-pane .ibm-columns .ibm-col-6-2 a")[2];
                    dojo.query(A).onclick(function() {
                        o("link click", "promo", dojo.query(this).attr("href")[0])
                    })
                });
                o("personalized", "promo", "none")
            });
            setTimeout(function() {
                if (ibmweb.queue.remove(z) == true) {
                    o("no pers - widget loaded", "promo", "none")
                }
            }, 3000)
        }
    }

    function i(s) {
        var u = s,
            q, t = "",
            r = /[a-z]/;
        for (q = 0; q < u.length; q++) {
            if (r.test(u.charAt(q))) {
                t += String.fromCharCode(k.cryptKey.indexOf(u.charAt(q)) + 97)
            } else {
                t += u.charAt(q)
            }
        }
        return decodeURIComponent(t)
    }

    function f(u) {
        var t = u.toLowerCase(),
            s = "",
            q, r = /[a-z]/;
        for (q = 0; q < t.length; q++) {
            if (r.test(t.charAt(q))) {
                s += k.cryptKey.charAt(t.charCodeAt(q) - 97)
            } else {
                s += t.charAt(q)
            }
        }
        return encodeURIComponent(s)
    }

    function n() {
        var r = dojo.place("<div id='tmpinj'><div class='ibm-lead-thumb-1'> </div><div class='ibm-lead-thumb-2'> </div></div>", "ibm-leadspace-head", "last"),
            u = dojo.query(".ibm-lead-thumb-1", r).style("backgroundImage")[0],
            t = dojo.query(".ibm-lead-thumb-2", r).style("backgroundImage")[0],
            s = dojo.query("#ibm-lead-1"),
            q = dojo.query("#ibm-lead-2");
        dojo.destroy(r);
        return {
            pos1: {
                lead: {
                    image: s.style("backgroundImage")[0],
                    pos: s.style("backgroundPosition")[0]
                },
                thumb: {
                    image: u
                }
            },
            pos2: {
                lead: {
                    image: q.style("backgroundImage")[0],
                    pos: q.style("backgroundPosition")[0]
                },
                thumb: {
                    image: t
                }
            }
        }
    }

    function d() {
        function q(t, w) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            w = w !== undefined ? w : window.location.href;
            var s = "[\\?&]" + t + "=([^&#]*)",
                v = new RegExp(s, "i"),
                u = v.exec(w),
                x = "";
            if (u !== null) {
                x = u[1]
            }
            return x
        }
        var r = q("ip");
        if (r != "") {
            r = "?query=" + r
        }
        o("service called", "none", "none");
        dojo.io.script.get({
            url: "//www.ibm.com/webmaster/dbip/ip/" + r,
            callbackParamName: "callback",
            load: function(s) {
                o("service responded", "none", "none");
                g(s)
            },
            error: function() {
                o("service errored", "none", "none")
            }
        })
    }

    function c(s) {
        var w = ".ibm-home-page #ibm-lead-1 { background: {lead1bg} repeat-x;}.ibm-home-page #ibm-leadspace-head .ibm-lead-thumb-1 { background: {lead1thumb} no-repeat 0 0;} .ibm-home-page #ibm-lead-2 { background: {lead2bg} repeat-x;} .ibm-home-page #ibm-leadspace-head .ibm-lead-thumb-2 { background: {lead2thumb} no-repeat 0 0;} .ibm-home-page #ibm-lead-3 { background: {lead3bg} repeat-x;} .ibm-home-page #ibm-leadspace-head .ibm-lead-thumb-3 { background: {lead3thumb} no-repeat 0 0;}",
            r = "",
            v = document.getElementById("ibm-leadspace-body"),
            u = n(),
            t, q = "no pers - widget loaded";
        r = w.replace("{lead1bg}", "url(" + h.leadspace.leafImgBackSrc + ") 50% 0").replace("{lead1thumb}", "url(" + h.leadspace.thumbImgSrc + ")").replace("{lead2bg}", u.pos1.lead.image + " " + u.pos1.lead.pos).replace("{lead2thumb}", u.pos1.thumb.image).replace("{lead3bg}", u.pos2.lead.image + " " + u.pos2.lead.pos).replace("{lead3thumb}", u.pos2.thumb.image);
        if (dojo.query(" > #ibm-lead-1", v).length == 1) {
            dojo.destroy(dojo.query(" > .ibm-columns:last-child", v)[0]);
            dojo.query("#ibm-lead-1").before(s);
            dojo.query(" > div.ibm-columns", v).forEach(function(y, x) {
                y.id = "ibm-lead-" + (x + 1)
            });
            t = document.createElement("style");
            t.type = "text/css";
            if (t.styleSheet) {
                t.styleSheet.cssText = r
            } else {
                t.appendChild(document.createTextNode(r))
            }
            document.getElementsByTagName("head")[0].appendChild(t);
            q = "personalized";
            ibmweb.queue.push(function() {
                return dojo.query("#ibm-leadspace-body .ibm-ribbon-pane #ibm-lead-1 div").children().length > 0
            }, function() {
                dojo.query("#ibm-leadspace-body .ibm-ribbon-pane #ibm-lead-1 div").children().onclick(function() {
                    o("link click", "leadspace", dojo.query("a", this).attr("href")[0])
                })
            })
        }
        o(q, "leadspace", "none")
    }

    function g(q) {
        k.currentName = (typeof q.industry != "undefined" ? q.industry : "").toLowerCase();
        k.currentCode = k.serviceToEcmMap[k.currentName] !== "" ? k.serviceToEcmMap[k.currentName] : "none";
        k.subIndustryName = (typeof q.sub_industry != "undefined" ? q.sub_industry : "").toLowerCase();
        k.userInfoLoaded = true;
        k.store()
    }
    dojo.xhrGet({
        url: b.replace("{cc}", e).replace("{lc}", a),
        handleAs: "json",
        load: function(q) {
            k.contentArray = q;
            k.contentReady = true
        },
        error: function() {
            o("content file 404", "none", "none")
        }
    });
    k.get();
    if (!k.userInfoLoaded || window.location.search.indexOf("ip=") > -1) {
        k.userInfoLoaded = false;
        d()
    }
    ibmweb.queue.push(function() {
        return k.contentReady && k.userInfoLoaded
    }, function() {
        o("page viewed", "none", "none");
        j()
    });
    return {
        status: "Loaded",
        personalized: p
    }
})();