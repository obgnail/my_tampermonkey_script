// ==UserScript==
// @name         去除b站播放时关注、三连、投票弹窗
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  去除b站播放中的关注、三连、投票弹窗
// @author       OYX
// @match        *://*.bilibili.com/video/*

// ==/UserScript==

function remove(selector) {
    var ele = document.querySelector(selector)
    if (ele != null) {
        ele.remove()
    }
}

setInterval(
    function(){
        remove('.bpx-player-cmd-dm-inside .bili-score')
        remove('.bili-vote')
    },100
)