var frame = document.getElementById("iframe");
var searchTerm = document.getElementById("searchTerm").value;



frame.width = window.innerWidth;
frame.height = "100%";



$(document).keyup(function (e) {
    if ($("#searchTerm:focus") && (e.keyCode === 13)) {
        frame.src = "https://duckduckgo.com/?q=" + document.getElementById("searchTerm").value + "&ia=meanings";
        console.log(document.getElementById("searchTerm").value);
    }
 });



$(document).keyup(function (e) {
    if ($("#searchTerm:focus") && (e.keyCode === 13)) {
        frame.src = "http://www.bing.com/search?q=" + document.getElementById("searchTerm").value ;
        console.log(document.getElementById("searchTerm").value);
    }
 });


$("#refresh").click(function(){
    document.getElementById('iframe').contentWindow.location.reload();
 });

$("#back").click(function(){
    document.getElementById('iframe').contentWindow.history.go(-1);
 });

$("#forword").click(function(){
    document.getElementById('iframe').contentWindow.history.go(1);
 });



