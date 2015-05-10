var frame = document.getElementById("iframe");
var searchTerm = document.getElementById("searchTerm").value;



frame.width = window.innerWidth;
frame.height = "100%";


if (localStorage.password != null) {
    
    $('#setPasswordButton').remove();
    
}





$("#searchTerm").keyup(function (e) {
    if ($("#searchTerm:focus") && (e.keyCode === 13)) {
        frame.src = "http://www.bing.com/search?q=" + document.getElementById("searchTerm").value ;
        console.log(document.getElementById("searchTerm").value);
    }
 });




$("#password").keyup(function (e) {
    if (($("#password:focus") && (e.keyCode === 13))) {
      checkSetPassword();
    }
 });

$("#passwordTry").click(function() {
    checkSetPassword();
 });








$("#passwordSave").click(function() {
    setPassword(document.getElementById("passwordSet").value);
    $('#complete-dialog').modal('hide');
 });

$("#home").click(function(){
           frame.src = "http://www.bing.com" ;
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
     $('#complete-dialog').modal('hide');
     $('#settings-dialog').modal('show');
 }else{
     alerts('error','');
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
























function alerts(status, message) {
    $("#alert >div").remove();
    if (status == 'true') {
      var div = document.createElement("div");
          div.setAttribute("class", "alert alert-dismissable alert-success");
          div.setAttribute("role", "alert");
          div.setAttribute("id", "alertDiv");
          div.innerHTML = "Awesome, Hold on two seconds " + message;
      var button = document.createElement("button");
          button.setAttribute("type", "button");
          button.setAttribute("class", "close");
          button.setAttribute("data-dismiss", "alert");
          button.innerHTML = "x";
          div.appendChild(button);
      document.getElementById("alert").appendChild(div);
      setTimeout(redirect, 2000);


    } else if (status == 'error') {
      var div = document.createElement("div");
          div.setAttribute("class", "alert alert-dismissable alert-danger");
          div.setAttribute("role", "alert");
          div.setAttribute("id", "alertDiv");
    var button = document.createElement("button");
          button.setAttribute("type", "button");
          button.setAttribute("class", "close");
          button.setAttribute("data-dismiss", "alertDiv");
          button.innerHTML = "x";
          div.appendChild(button);
          div.innerHTML = "Oh snap something is wrong ";
      document.getElementById("alert").appendChild(div);
             $('#complete-dialog').modal('hide');

    } else if (status == 'passwordchanged') {
      var div = document.createElement("div");
          div.setAttribute("class", "alert alert-dismissable alert-success");
          div.setAttribute("role", "alert");
          div.setAttribute("id", "alertDiv");
          div.innerHTML = "Password Change Successful";
      var button = document.createElement("button");
          button.setAttribute("type", "button");
          button.setAttribute("class", "close");
          button.setAttribute("data-dismiss", "alert");
          button.innerHTML = "x";
          div.appendChild(button);
      document.getElementById("alert").appendChild(div);
    }
  }


