/*jslint browser:true, nomen:true */
/*globals $, chrome */

"use strict";
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-29376357-1']);
_gaq.push(['_trackPageview']);
(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

$(document).ready(function () {
    console.log('ready');
    $.each(chrome.extension.getBackgroundPage().GB.getBlockedSites(), function (index, value) {
        console.log(index);
        $("#blockedlist").append("<div class='siterow' title='" + value + "'><div class='sitename'>" + index + "</div><span class='sitedesc'> : " + value + "</span></div>");
    });
});
