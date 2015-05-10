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