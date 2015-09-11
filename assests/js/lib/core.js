var banndedUrls = [];
var tabsLimit = 5; // This is 5 ;)


var Robin= {
    Init: function () {
        addEventListeners();
        loadLocalStoage();
        createTab("Google");
    }
};



/*

  _                     _  _____ _                             
 | |                   | |/ ____| |                            
 | |     ___   ___ __ _| | (___ | |_ ___  _ __ __ _  __ _  ___ 
 | |    / _ \ / __/ _` | |\___ \| __/ _ \| '__/ _` |/ _` |/ _ \
 | |___| (_) | (_| (_| | |____) | || (_) | | | (_| | (_| |  __/
 |______\___/ \___\__,_|_|_____/ \__\___/|_|  \__,_|\__, |\___|
                                                     __/ |     
                                                    |___/      


*/

function loadLocalStoage() {
//localStorage.clear();
    if (typeof(Storage) !== "undefined") {
       $('.settings').each(function(i, e) {
            if (localStorage.getItem(i) !== null) {
                var bannedUrl = getLocalStorge(i);
                $(e).val(bannedUrl);
                banndedUrls.push(bannedUrl);
            } 
        });

        if (localStorage.getItem('firstLoad') == null) {
            showPopupModal('about');
        }

        if (localStorage.getItem('password') !== null) {
            removeElements('#setPasswordButton');
        } else {
            removeElements('#settingsButton');
        }
        if (localStorage.getItem('catch') !== null) {
            changeBackgroundColor('pink');
        }else if (localStorage.getItem('color') !== null) {
            changeBackgroundColor(localStorage.getItem('color'));
        }

    }
}


function setLocalStorge(x, value) {
    if (typeof(Storage) != "undefined") {
        localStorage.setItem(x, value);
    } else {
        document.getElementById("result").innerHTML ="Sorry, your browser does not support Web Storage...";
    }
}

function getLocalStorge(x) {
var getLocalStageTemp =localStorage.getItem(x);
    console.log(getLocalStageTemp);
    return getLocalStageTemp ;
}





/*

  ______ _ _ _            _             
 |  ____| (_) |          (_)            
 | |__  | |_| |_ ___ _ __ _ _ __   __ _ 
 |  __| | | | __/ _ \ '__| | '_ \ / _` |
 | |    | | | ||  __/ |  | | | | | (_| |
 |_|    |_|_|\__\___|_|  |_|_| |_|\__, |
                                   __/ |
                                  |___/ 

*/


function urlCleaner(url) {
    console.log('url to blocked' + url);
    for (i = 0; i < banndedUrls.length; i++) {
        if (banndedUrls[i] !== '') {
            var patt = new RegExp(banndedUrls[i]);
            if (patt.test(url)) {
                changeBackgroundColor('pink');
                redirect();
                break;
            }
        }
    }
}













function changeColor(){

    var getColorCode = $("#" + this.id).attr('data-color');
        changeBackgroundColor(getColorCode);
        setLocalStorge('color', getColorCode);
}

function changeBackgroundColor(color){

    $('.navbar-material-light-blue.navbar')
        .css('background-color', '')
        .css('background-color', color);

}



function goBack() {
  
    var iframeId = $('.iframe.active').attr('id');
        document.getElementById(iframeId).contentWindow.history.back();
}

function pastUrl(history) {

    if (history !== 0)  {
        var lasturl = passUrls[history];
        $('.iframe.active').attr('src', lasturl);
    }
}

function goForword() {

    var iframeId = $('.iframe.active').attr('id');  
        document.getElementById(iframeId).contentWindow.history.forward();
        
}

function openDev() {
    require('nw.gui').Window.get().openDevTools()
}

function goHome() {
    $('.iframe.active').attr('src', "assests/view/index.html");
}

function refresh() {
    console.log('refresh');
    $('.iframe.active').attr('src', $('.iframe.active').attr('src'));
}

function setPageTitle(title) {
    document.title = "Robin : " + title;
}

function search(event) {

    var searchTerm = document.getElementById("searchTerm").value;

    if (event.keyCode === 13) {
        searchResult(searchTerm);
        setPageTitle(searchTerm);
    }
}

function searchResult(search) {
    $('.iframe.active').attr('src', "http://www.bing.com/search?q=" + search);
    resizeIframe();
}


function resizeIframe() {
    $("iframe").each(function() {
        console.log('iframe bitches');
        $(this).width = window.innerWidth;
        $(this).height = "100%";
        $(this).load(onSrcIframeChange());

    });
}

function onSrcIframeChange() {
    var iframeId = $('.iframe.active').attr('id');
    var url = $('.iframe.active').attr('src');
    console.log('src changed ' + $('.iframe.active').attr('src'));

    urlCleaner(url);
}



function redirect() {
    localStorage.setItem('catch', 'true');
    $('.iframe.active').attr('src', "http://www.bing.com");
}



function createIframe(url,tabId){

    var iframes = document.createElement("iframe");
        iframes.setAttribute("src", "http://www.bing.com/search?q=" + url);
        iframes.setAttribute("class", "iframe active");
        iframes.setAttribute("id", tabId);
        iframes.setAttribute("width", window.innerWidth);
        iframes.setAttribute("height", "100%");






}


function createTab(url) {
    var getAmountOfTabs = document.getElementsByTagName("iframe").length;
    if (getAmountOfTabs !== tabsLimit) {
        if (url == '[object MouseEvent]') {
            url = 'batman';
        }
        $('.home').removeClass('active');
        $('.iframe').removeClass('active');
        var tabs = document.getElementById('tabs');
        var span = document.createElement("section");
        span.setAttribute("class", "home active");
        var title = document.createElement("h1");
        title.setAttribute("class", "title");
        title.innerHTML = "http://www.bing.com/search?q=" + url;
        span.appendChild(title);
        var iframes = document.createElement("iframe");
        iframes.setAttribute("sandbox",
            "allow-same-origin allow-scripts allow-popups allow-forms");
        iframes.setAttribute("src", "http://www.bing.com/search?q=" + url);
        iframes.setAttribute("class", "iframe active");
        iframes.setAttribute("id", getAmountOfTabs);
        iframes.setAttribute("width", window.innerWidth);
        iframes.setAttribute("height", "100%");
        span.appendChild(iframes);
        tabs.appendChild(span);
       resizeIframe();
        $('section').on('click', function() {
            $(this).closest('section').prependTo('.contain');
            $('section').removeClass('active');
            $('.home.active .iframe').removeClass('active');
            $(this).addClass('active');
            $('.home.active .iframe').addClass('active');
            $('.contain').removeClass('active');
        });
    } else {
        alert('tab Limit reached');
    }
}

function expandTabs() {
    $('section').scrollTop(54);
    $('.contain').toggleClass('active');
}

function addEventListeners() {




    $('.colors').on('click', changeColor);
    document.getElementById("back").addEventListener("click", goBack);
    document.getElementById("forword").addEventListener("click", goForword);
    document.getElementById("refresh").addEventListener("click", refresh);
    document.getElementById("home").addEventListener("click", goHome);
    document.getElementById("newTab").addEventListener("click", createTab);
    $('#tabsq').on('click', expandTabs);
    document.getElementById("passwordSave").addEventListener("click", setPassword,
        false);
    document.getElementById("passwordTry").addEventListener("click",
        checkSetPassword, false);
    document.getElementById("settingsSave").addEventListener("click",
        saveSettings, false);
    document.getElementById("restart").addEventListener("click", restart, false);
    // document.getElementById("devTools").addEventListener("click", openDev, false);
}



function showPopupModal(dialog) {
    setLocalStorge('firstLoad', 'true');
    $('#' + dialog + '-dialog').modal('show');
}

function removePopupModal(dialog) {
    $('#' + dialog + '-dialog').modal('hide');
}

function restart() {
    $('#settings-dialog').modal('hide');
    localStorage.removeItem('catch');
    location.reload();
}

function removeElements(element) {
    $(element).remove();
}






function setPassword() {
    console.log('set password');
    var password = document.getElementById("passwordSet").value;
    if (typeof(Storage) !== "undefined") {
        if (localStorage.password) {
            localStorage.password = password;
        } else {
            localStorage.password = password;
        }
    }
    console.log(localStorage.password);
    $('#password-dialog').modal('hide');
    removeElements('#setPasswordButton');
    loadLocalStoage();
}

function saveSettings() {
    console.log('save settings');
    $('#settings-dialog').modal('hide');
    var x = 0;
    $('.settings').each(function(i, e) {
        setLocalStorge(x, $(e).val());
        x++;
    });
    loadLocalStoage();
}

function checkSetPassword() {
    var userInput = document.getElementById("password").value;
    if (userInput == localStorage.password) {
        $('#complete-dialog').modal('hide');
        $('#settings-dialog').modal('show');
    } else {
        error();
    }
}

function error() {
    $('.modal').modal('hide');
    $('#error-dialog').modal('show');
}

function removeAlert() {
    $("#alert > div").remove();
}



$(window).on('resize', function() {
   resizeIframe();
});
