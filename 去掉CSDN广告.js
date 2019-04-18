// ==UserScript==
// @name         CSDN广告去除
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      https://blog.csdn.net/*/article/details/*
// @grant        none
// ==/UserScript==

//去掉csdn广告的一个脚本
(function() {
    'use strict';
    function remove(add){
        add.parentNode.removeChild(add);
    }
    //移除左栏
    var tag = document.getElementsByTagName("aside");
    remove(tag[0]);
    //移除右两栏
    var mainBox = document.getElementById("mainBox");
    mainBox.removeChild(mainBox.firstElementChild);
    //设置主窗口适应宽高
    var main = document.getElementsByTagName("main");
    main = main[0]; main.style.width = "85vw";
    main.style.float = "left";
    //去掉底下的广告
    main.removeChild(main.children[7]);
    //去掉工具栏
    var bottonbar = document.getElementsByClassName("tool-box");
    remove(bottonbar[0]);

    var floatbar = document.getElementsByClassName("meau-gotop-box");
    remove(floatbar[0]);
    //去掉底下能去的广告
    var adds = document.getElementsByClassName("recommend-ad-box");
    while (adds.length!=0){
        remove(adds[0]);
    }
    //展开阅读更多
    var btn = document.getElementById("btn-readmore");
    btn.click();
})();