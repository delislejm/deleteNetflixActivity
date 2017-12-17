// ==UserScript==
// @name       Delete Netflix activity
// @namespace  https://www.netflix.com
// @version    1
// @description  Opens all of the links from the CodeProject newsletter in one go
// @match https://www.netflix.com/viewingactivity
// @copyright  2017+, delislejm.com
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function deleteHistory() {

    var links = document.querySelectorAll("a.deleteBtn");
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("click", true, true);
    for (var j = 0; j < links.length; j++) {
        links[j].dispatchEvent(evt);
    }

    setTimeout(function () {

        var linksRemoveSeries = document.querySelectorAll("a.removeSeries");
        var event = document.createEvent("MouseEvents");
        event.initEvent("click", true, true);
        for (var r = 0; r < linksRemoveSeries.length; r++) {
            linksRemoveSeries[r].dispatchEvent(event);
        }
    }, 2000);

}

$(".pageToggle").append('<button type="button" class="btn akira-button akira-button-red btn-plain btn-medium" id="deleteHistoryBtn">Delete whole activity</button>');
$("#deleteHistoryBtn").click(function () {
    deleteHistory();
    setTimeout(function () {
        alert("Hstory successfully cleared");
    }, 3000);
});