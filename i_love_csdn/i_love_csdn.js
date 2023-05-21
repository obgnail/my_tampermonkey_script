// ==UserScript==
// @name         i love csdn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  i love csdn
// @author       obgnail
// @include      https://blog.csdn.net/*
// @grant        GM.getValue
// @grant        GM.setValue
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?domain=csdn.net
// ==/UserScript==

(function () {
    'use strict';
    document.getElementById("article_content").removeAttribute("id")
    document.getElementById("content_views").removeAttribute("id")
    var ads = document.getElementsByClassName("csdn-side-toolbar")
    if (ads.length !== 0) {
        ads[0].remove()
    }
    var adbars = document.getElementsByClassName("toolbar-adver-btn")
    if (adbars.length !== 0) {
        adbars[0].click()
    }

    /**
     * 监听所有的 addEventListener, removeEventListener 事件
     */
    var documentAddEventListener = document.addEventListener
    var eventTargetAddEventListener = EventTarget.prototype.addEventListener
    var documentRemoveEventListener = document.removeEventListener
    var eventTargetRemoveEventListener = EventTarget.prototype.removeEventListener
    var events = []

    /**
     * 用来保存监听到的事件信息
     */
    class Event {
        constructor(el, type, listener, useCapture) {
            this.el = el
            this.type = type
            this.listener = listener
            this.useCapture = useCapture
        }
    }

    /**
     * 自定义的添加事件监听函数
     * @param {String} type 事件类型
     * @param {EventListener} listener 事件监听函数
     * @param {Boolean} {useCapture} 是否需要捕获事件冒泡，默认为 false
     */
    function addEventListener(type, listener, useCapture = false) {
        var _this = this
        var $addEventListener =
            _this === document
                ? documentAddEventListener
                : eventTargetAddEventListener
        events.push(new Event(_this, type, listener, useCapture))
        $addEventListener.apply(this, arguments)
    }

    /**
     * 自定义的根据类型删除事件函数
     * 该方法会删除这个类型下面全部的监听函数，不管数量
     * @param {String} type 事件类型
     */
    function removeEventListenerByType(type) {
        var _this = this
        var $removeEventListener =
            _this === document
                ? documentRemoveEventListener
                : eventTargetRemoveEventListener
        var removeIndexs = events
            .map((e, i) => (e.el === _this || e.type === arguments[0] ? i : -1))
            .filter(i => i !== -1)
        removeIndexs.forEach(i => {
            var e = events[i]
            $removeEventListener.apply(e.el, [e.type, e.listener, e.useCapture])
        })
        removeIndexs.sort((a, b) => b - a).forEach(i => events.splice(i, 1))
    }

    function clearEvent() {
        var eventTypes = [
            'copy',
            'cut',
            'select',
            'contextmenu',
            'selectstart',
            'dragstart',
        ]
        document.querySelectorAll('*').forEach(el => {
            eventTypes.forEach(type => el.removeEventListenerByType(type))
        })
    }

    ;(function () {
        document.addEventListener = EventTarget.prototype.addEventListener = addEventListener
        document.removeEventListenerByType = EventTarget.prototype.removeEventListenerByType = removeEventListenerByType
    })()

    window.onload = function () {
        clearEvent()
    }
})();
