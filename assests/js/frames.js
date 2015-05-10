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
    document.getElementById('iframe').src = document.getElementById('iframe').src;
 });

$("#back").click(function(){
    document.getElementById('iframe').contentWindow.history.go(-1);
 });

$("#forword").click(function(){
    document.getElementById('iframe').contentWindow.history.go(1);
 });






$(document).keyup(function (e) {
    if ($("#passwordSet:focus") && (e.keyCode === 13)) {
        setPassword(document.getElementById("passwordSet").value);
    }
 });


function setPassword(password) {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.password) {
            localStorage.password = password;
        } else {
            localStorage.password = password ;
        }

    } else {
       
    }
    console.log(localStorage.password);
}



