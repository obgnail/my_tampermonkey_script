// ==UserScript==
// @name         净化思剪切板
// @version      0.0.1
// @description  从思否、简书、牛客、掘金、CSDN、知乎、慕课网、力扣、哔哩哔哩复制的文字都会被加上版权声明，这个脚本会去除这个版权声明
// @author       obgnail
// @match        *://*.zhihu.com/*
// @match        *://*.jianshu.com/*
// @match        *://*.csdn.net/*
// @match        *://*.nowcoder.com/*
// @match        *://*.juejin.im/*
// @match        *://*.segmentfault.com/*
// @match        *://*.imooc.com/*
// @match        *://zhidao.baidu.com/*
// @match        *://*.leetcode-cn.com/*
// @match        *://*.bilibili.com/read/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    function addLink(e) {
        e.preventDefault();
        let context = window.getSelection().toString();
        if (context.indexOf("慕课网") > -1) {
            context = context.split("作者")[0];
        }
        navigator.clipboard.writeText(context);
    }

    document.addEventListener("copy", addLink);
    document.querySelector(".normal-article-holder") &&
    document.querySelector(".normal-article-holder").addEventListener("copy", addLink);
})();
