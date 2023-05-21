// ==UserScript==
// @name         SouthPlus301
// @namespace    liangbo
// @author       liangbo
// @version      0.1
// @description  重定向南+同素异形体域名
// @match        *://south-plus.net/*
// @match        *://south-plus.org/*
// @match        *://north-plus.net/*
// @match        *://white-plus.net/*
// @match        *://level-plus.net/*
// @match        *://summer-plus.net/*
// @match        *://spring-plus.net/*
// @match        *://snow-plus.net/*
// @match        *://east-plus.net/*
// @match        *://blue-plus.net/*
// @match        *://*.south-plus.org/*
// @match        *://*.south-plus.net/*
// @match        *://*.north-plus.net/*
// @match        *://*.white-plus.net/*
// @match        *://*.level-plus.net/*
// @match        *://*.summer-plus.net/*
// @match        *://*.spring-plus.net/*
// @match        *://*.snow-plus.net/*
// @match        *://*.east-plus.net/*
// @match        *://*.blue-plus.net/*
// @match        *://*.bbs.imoutolove.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=south-plus.net
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function() {
    if (document.location.pathname === "/simple/index.php") {
        let numArr = document.location.search.match(/\d+/g);
        let url = `https://www.south-plus.net/read.php?tid=${numArr[0]}`;
        document.location.href = url;
    }
    if (document.location.host !== "south-plus.net") {
        document.location.host = "south-plus.net";
    }
})();
