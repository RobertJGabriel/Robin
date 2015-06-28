 var passUrls = [];
 var banndedUrls = [];
 var historyPoint = 0;
 load();

 function load() {
     addEventListeners();
     // resizeIframe();
     localStoage();
     //   onSrcIframeChange();
     createTab("Google");
 }



 function goBack() {


 }


 function goForword() {


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
     if (event.keyCode === 13) {
         console.log(document.getElementById("searchTerm").value);
         searchResult(document.getElementById("searchTerm").value);
         setPageTitle(document.getElementById("searchTerm").value);
     }

 }


 function searchResult(search) {
     $('.iframe.active').attr('src', "http://www.bing.com/search?q=" + search);
 }




 function expand() {
     $(".searcharea").toggleClass("box-change");
 }




 function resizeIframe() {
     $("iframe").each(function () {
         console.log('iframe bitches');
         $(this).width = window.innerWidth;
         $(this).height = "100%";
         $(this).bind("load", onSrcIframeChange);
     });
 }


 function onSrcIframeChange() {

     var url = $('.iframe.active').attr('src');
     console.log('src changed ' + $('.iframe.active').attr('src'));
     resizeIframe();
     urlCleaner(url);
     passUrls.push(url);

 }


 function urlCleaner(url) {
     console.log('url to blocked' + url);
     for (i = 0; i < banndedUrls.length; i++) {
         if (banndedUrls[i] !== '') {
             var patt = new RegExp(banndedUrls[i]);
             if (patt.test(url)) {
                 setColors();
                 redirect();
                 break;
             } else {}
         }
     }
 }


 function redirect() {
     localStorage.setItem('catch', 'true');
     $('.iframe.active').attr('src', "http://www.bing.com");
 }


 function setColors() {
     $('div').addClass('navbar-warning').removeClass('navbar-material-light-blue');
 }




 function createTab(url) {
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
     iframes.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
     iframes.setAttribute("src", "http://www.bing.com/search?q=" + url);
     iframes.setAttribute("class", "iframe active");
     iframes.setAttribute("width", window.innerWidth);
     iframes.setAttribute("height", "100%");
     span.appendChild(iframes);

     tabs.appendChild(span);

     resizeIframe();

     $('section').on('click', function () {
         $(this).closest('section').prependTo('.contain');
         $('section').removeClass('active');
         $('.home.active .iframe').removeClass('active');
         $(this).addClass('active');
         $('.home.active .iframe').addClass('active');
         $('.contain').removeClass('active');
     });
 }





 function expandTabs() {

     $('section').scrollTop(0);
     $('.contain').toggleClass('active');

 }



 function addEventListeners() {
     document.getElementById("back").addEventListener("click", goBack);
     document.getElementById("forword").addEventListener("click", goForword);
     document.getElementById("refresh").addEventListener("click", refresh);
     document.getElementById("home").addEventListener("click", goHome);
     document.getElementById("search").addEventListener("click", expand);
     document.getElementById("newTab").addEventListener("click", createTab);
     $('a.toggle').on('click', expandTabs);




     document.getElementById("passwordSave").addEventListener("click", setPassword, false);
     document.getElementById("passwordTry").addEventListener("click", checkSetPassword, false);
     document.getElementById("settingsSave").addEventListener("click", saveSettings, false);
     document.getElementById("restart").addEventListener("click", restart, false);



 }



 function showPop(dialog) {
     setLocalStorge('firstLoad', 'true');
     $('#' + dialog + '-dialog').modal('show');
 }

 function removePop(dialog) {

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
     if (typeof (Storage) !== "undefined") {
         if (localStorage.password) {
             localStorage.password = password;
         } else {
             localStorage.password = password;
         }
     }
     console.log(localStorage.password);
     $('#password-dialog').modal('hide');
     removeElements('#setPasswordButton');
     localStoage();
 }

 function saveSettings() {
     console.log('save settings');
     $('#settings-dialog').modal('hide');
     var x = 0;
     $('.settings').each(function (i, e) {
         setLocalStorge(x, $(e).val());
         x++;
     });
     localStoage();
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






 function localStoage() {
     console.log('ss');
     //localStorage.clear();
     var x = 0;
     var k = 0;
     if (typeof (Storage) !== "undefined") {
         $('.settings').each(function (i, e) {
             if (localStorage.getItem(x) !== null) {
                 $(e).val(getLocalStorge(x));
                 banndedUrls.push(getLocalStorge(k));
                 k++;
             } else {
                 console.log('not set');
             }
             x++;
         });
         if (localStorage.getItem('firstLoad') === null) {
             showPop('about');
         } else {
             // removePop('about');
         }
         if (localStorage.getItem('password') !== null) {
             removeElements('#setPasswordButton');
         } else {
             removeElements('#settingsButton');
         }
         if (localStorage.getItem('catch') !== null) {
             setColors();
         }
     }

 }




 function setLocalStorge(x, value) {
     // Check browser support
     if (typeof (Storage) != "undefined") {
         // Store
         localStorage.setItem(x, value);
         console.log(localStorage.getItem(x));
     } else {
         document.getElementById("result").innerHTML =
             "Sorry, your browser does not support Web Storage...";
     }
 }


 function getLocalStorge(x) {

     console.log(localStorage.getItem(x));
     return localStorage.getItem(x);
 }


 $(window).on('resize', function () {
     resizeIframe();
 });
