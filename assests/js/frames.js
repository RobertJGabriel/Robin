var frame = document.getElementById("iframe");
var searchTerm = document.getElementById("searchTerm").value;



frame.width = window.innerWidth;
frame.height = "100%";



$("#searchTerm").keyup(function (e) {
    if ($("#searchTerm:focus") && (e.keyCode === 13)) {
        frame.src = "http://www.bing.com/search?q=" + document.getElementById("searchTerm").value ;
        console.log(document.getElementById("searchTerm").value);
    }
 });




$("#password").keyup(function (e) {
    if ($("#password:focus") && (e.keyCode === 13)) {
      checkSetPassword();
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





function checkSetPassword(){
    
var userInput = document.getElementById("password").value;
 if (userInput == localStorage.password){
     alert('sss');
     $('#complete-dialog').modal('toggle');
     $('#complete-dialog').modal('show');
 }else{
 alert('error');
 }
    
    
}







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



