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

function showBlockList() {
    $("#blocklist").children().remove();
    var i = 1;
    $.each(GB.getBlockedSites(), function (index, value) {
        $("#blocklist").append("<div id='site-" + i + "'><input type='button' id='unblock-" + i + "' value='REMOVE FROM BLOCKIT' /> " + index + " : " + value + "</div>");
        $("#unblock-" + i).click(function () {
            GB.removeBlockedSite(index);
            showBlockList();
        });
        i += 1;
    });
}
function trackButtonUse(id) {
    _gaq.push(['_trackEvent', 'button-' + id, 'clicked']);
}

$(document).ready(function () {
    $("#watchthis").click(function () {
        trackButtonUse("watchthis");
        GB.setWatchThisInstead(chrome.extension.getURL("instead.html"));
        $("#status").text("ALL GOOD!  ");
        $("#status").append("<a href='http://gawker.com'>TRY ME</a>");
    });
    $("#makethathappen").click(function () {
        trackButtonUse("makethathappen");
        GB.setWatchThisInstead($("#watchthatinstead").val());
        $("#status").text("IF YOU WANT,  ");
        $("#status").append("<a href='http://gawker.com'>TRY ME</a>");
    });
    $("#blockthistoo").click(function () {
        trackButtonUse("blockthistoo");
        GB.addBlockedSite($("#dontgothere").val());
        $("#status").text("GO FOR IT.  ");
        var prot = /\/\//g;
        if ($("#dontgothere").val().match(prot)) {
            $("#status").append("<a href='" + $("#dontgothere").val() + "'>TRY ME</a>");
        } else {
            $("#status").append("<a href='http://" + $("#dontgothere").val() + "'>TRY ME</a>");
        }
        showBlockList();
    });
    if (GB.getWatchThisInstead() !== chrome.extension.getURL("instead.html")) {
        $("#watchthatinstead").attr('value', GB.getWatchThisInstead());
    }
    showBlockList();
});