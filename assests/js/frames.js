var frame = document.getElementById("iframe");



window.onload = init;



function init() {
    iframe();
    localStorage();
    addEventListeners();
}



function iframe() {
    frame.width = window.innerWidth;
    frame.height = "100%";
}

function localStorage() {
    if (localStorage.password != null) {
        $('#setPasswordButton').remove();
    }
}

function addEventListeners() {
    document.getElementById("back").addEventListener("click", goback);
    document.getElementById("forword").addEventListener("click", goForword);
    document.getElementById("refresh").addEventListener("click", refresh);
    document.getElementById("home").addEventListener("click", goHome);
    document.getElementById("passwordSave").addEventListener("click", setPassword, false);
    document.getElementById("passwordTry").addEventListener("click", checkSetPassword, false);
    document.getElementById("settingsSave").addEventListener("click", saveSettings, false);
}


function goback() {
    alert('goback');
    //document.getElementById('iframe').contentWindow.history.go(-1);
}

function goForword() {
    alert('goForword');
    //document.getElementById('iframe').contentWindow.history.go(-1);
}

function refresh() {
    alert('refresh');
    document.getElementById('iframe').src = document.getElementById('iframe').src;
}

function goHome() {
    frame.src = "http://www.bing.com";
}

function search(event) {
    if (event.keyCode === 13) {
        frame.src = "http://www.bing.com/search?q=" + document.getElementById("searchTerm").value;
        console.log(document.getElementById("searchTerm").value);
    }
}

function setPassword() {
    alert('set password');
    var password = document.getElementById("passwordSet").value;

    if (typeof (Storage) !== "undefined") {
        if (localStorage.password) {
            localStorage.password = password;
        } else {
            localStorage.password = password;
        }

    } else {}
    console.log(localStorage.password);
    $('#complete-dialog').modal('hide');
}


function saveSettings() {
    alert('save settings');
}







function checkSetPassword() {
    alert('check set password');
    var userInput = document.getElementById("password").value;
    if (userInput == localStorage.password) {
        $('#complete-dialog').modal('hide');
        $('#settings-dialog').modal('show');
    } else {
        alerts('error', '');
    }
}




function setColors(){

}

function urlCleaner(){

}


function loadLocalStorage(){

}


function alerts(status, message) {

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
        setTimeout(removeAlert, 2000)
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

function removeAlert() {
    $("#alert > div").remove();
}