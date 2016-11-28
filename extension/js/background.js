/*jslint browser:true, nomen:true */
/*globals $, chrome, GB */
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

if (!GB.getWatchThisInstead()) {
    GB.setWatchThisInstead(chrome.extension.getURL("instead.html"));
}
chrome.tabs.onUpdated.addListener(function (tabId, changedInfo, tab) {
    var site;
    for (site in GB.getBlockedSites()) {
        if (tab.url.match(site)) {
            chrome.tabs.update(tabId, {"url" : GB.getWatchThisInstead()}, function () {});
        }
    }
});
chrome.tabs.onCreated.addListener(function (tab) {
    var site;
    for (site in GB.getBlockedSites()) {
        if (tab.url.match(site)) {
            chrome.tabs.update(tab.id, {"url" : GB.getWatchThisInstead()}, function () {});
        }
    }
});
chrome.browserAction.setBadgeBackgroundColor({"color" : [200, 0, 0, 255]});
chrome.browserAction.setBadgeText({"text" : "1.7"});
