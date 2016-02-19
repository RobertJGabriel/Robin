var app = angular.module('robin', []);
var osenv = require('osenv');
var ip = null;
var user = osenv.user();
var mrscraper = require("scraper-web");
require('getmac').getMac(function(err,macAddress){ ip = macAddress; });


app.controller('controller', function ($scope) {

    setInterval(workHorse,500)
    var ref = new Firebase("https://projectbird.firebaseio.com");
    var authData = ref.getAuth();
    $scope.listOfProfanity = [];
    $scope.words = [];
    $scope.loggedin = null;
    $scope.tabsLimit = 6;
    $scope.caughtColor = "#7B1FA2";
    $scope.banndedUrlsList = [];
    $scope.searchTerm ;
    $scope.themeList = [{   
        color: "#F44336",
        active: true
    }];

    //this is fine.
    $scope.savedTheme = localStorage.getItem('theme');
    $scope.theme = (localStorage.getItem('theme') !== null) ? JSON.parse($scope.savedTheme) : $scope.themeList;
    $scope.themeStyle = (localStorage.getItem('theme') !== null) ? {'background-color': $scope.theme[0][0]['color']} : console.log('no color set');
    $scope.themeStyleSides = (localStorage.getItem('theme') !== null) ? {   'border-left': "2px solid " + $scope.theme[0][0]['color'],'border-bottom': "2px solid " + $scope.theme[0][0]['color']} : console.log('no color set');
    $scope.password = (localStorage.getItem('password') === null) ?  null : localStorage.getItem('password');


    /**
    * Onload Event for Angular
    * @param {none} none 
    * @return {none} none
    */
    $scope.init = function () {
        $scope.createTab('');        
    };


    /**
    * sets current color or theme
    * @param {String} color 
    * @return {none} none
    */
    $scope.setColor = function (color) {
        $scope.removeLocalStorage('theme');
        $scope.theme = [];
        $scope.theme.push([{
            color: color,
            active: true
        }]);
        localStorage.setItem('theme', JSON.stringify($scope.theme));
        $scope.themeStyle = {
            'background-color': color

        };
        $scope.themeStyleSides = {
            'border-left': "2px solid " + color,
            'border-bottom': "2px solid " + color
        };
    }


    /**
    * Remove localstorage by key
    * @param {String} Key
    * @return {none} none
    */
    $scope.removeLocalStorage = function (key) {
        localStorage.removeItem(key);
    };


    /**
    * Show Current tabs in expand view
    * @param {String} Key
    * @return {none} none
    */
    $scope.showTabs = function (key) {
        expandTabs();
    };


    /**
    * Go Back in iframe
    * @param {none} none
    * @return {none} none
    */
    $scope.goBack = function () {
        document.getElementById($('.iframe.active').attr('id')).contentWindow.history.back();

    };


    /**
    * Go Forword in iframe
    * @param {none} none
    * @return {none} none
    */
    $scope.goForword = function () {
        document.getElementById($('.iframe.active').attr('id')).contentWindow.history.forword();
    };


    /**
    * Refresh iframe
    * @param {none} none
    * @return {none} none
    */
    $scope.refresh = function () {
        $('.iframe.active').attr('src', $('.iframe.active').attr('src'));
    };


    /**
    * Go Home in iframe
    * @param {none} none
    * @return {none} none
    */
    $scope.home = function () {
        $('.iframe.active').attr('src', 'https://duckduckgo.com/?q=');
    };


    /**
    * Search
    * @param {object} keyEvent
    * @return {none} none
    */
    $scope.search = function (keyEvent) {
        if ($scope.searchTerm === "devKeys"){
            require('nw.gui').Window.get().showDevTools();
        }

        if (keyEvent.which === 13) {
            searchResult($scope.searchTerm);
            setPageTitle($scope.searchTerm);
        };
    }


    /**
    * Auto focus the text in input
    * @param {none} none
    * @return {none} none
    */
    $scope.autoFocus = function () {
        document.getElementById("searchTerm").select();
    }


    /**
    * Set Page title
    * @param {String} title
    * @return {none} none
    */
    function setPageTitle(title) {
        document.title = "Robin : " + title;
    }


    /**
    * Run search String 
    * @param {String} search
    * @return {none} none
    */
    function searchResult(search) {
        $('.iframe.active').attr('src', "https://duckduckgo.com/?q=" + search);
    }


    /**
    * Create Tab
    * @param {String} search
    * @return {none} none
    */
    $scope.createTab = function(url) {
        var getAmountOfTabs = document.getElementsByTagName("iframe").length;
        if (getAmountOfTabs !== $scope.tabsLimit) {

            $('.home').removeClass('active');
            $('.iframe').removeClass('active');
       


            var tabs = document.getElementById('tabs');

            var panel = document.createElement('section');
                panel.setAttribute("class", "panel panel-default home active ");

            var panelBody = document.createElement('div');
                panelBody.setAttribute("class", "panel-body");

            var iframes = document.createElement("iframe");
                iframes.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms ");
                iframes.setAttribute("src", "https://duckduckgo.com/?q=" + url);
                iframes.setAttribute("class", "iframe active  ");
                iframes.setAttribute("id", getAmountOfTabs);
                iframes.setAttribute("width", window.innerWidth);
                iframes.setAttribute("height", "100%");
                
                panelBody.appendChild(iframes);
            
            var panelFooter = document.createElement('div');
                panelFooter.setAttribute("class", "panel-footer tabsTemp");
            
            var title = document.createElement("p");
                title.setAttribute("class", "title");
                title.innerHTML = "https://duckduckgo.com/?q=" + url;
                panelFooter.appendChild(title);


            panel.appendChild(panelBody);
            panel.appendChild(panelFooter);
            tabs.appendChild(panel);


            $('.iframe.active').on('load', function() { //binds the event 
                balance();
            });


            $('section').on('click', function () {
                $(this).closest('section').prependTo('.contain');
                $('section').removeClass('active');
                $('.home.active .iframe').removeClass('active');
                $(this).addClass('active');
                $('.home.active .iframe').addClass('active');
                $('.contain').removeClass('active');
            });
                 
        } else {
          //  alert('tab Limit reached');
        }
    };



    /**
    * Load balacing for the scraping of files
    * @param {none} none
    * @return {none} none
    */
    function balance(){

        var   tempUrl = $('.iframe.active').contents().get(0).location.href ;
         if ($scope.loggedin) {
            saveCurrentUrl(tempUrl); //Store the url to firebase
            sraper(tempUrl);
            resizeIframe();
        }
        $scope.searchTerm = tempUrl;
             
    }


   /**
    * Resize the Iframes to the width and height of the window 
    * @param {none} none
    * @return {none} none
    */
    function resizeIframe() {
        $("iframe").each(function () {
            $(this).width = window.innerWidth;
            $(this).height = "100%";
         //   $(this).load(onSrcIframeChange()); // Attaches the onSrcIframeChange() event
        });
    }


    /**
    * Scrap Results
    * @param {String} url
    * @return {none} none
    */
     function sraper(url) {
        
        mrscraper(url, function (words2) {
            console.log(words2 + "hhhhh" + words2.length);
            for (var i = 0; i < words2.length -1 ; i++) {
                profanityCheck(words2[i], function(response) {
            
                });
            }
        });
    }


    /**
    * Expand and view all tabs
    * @param {none} none
    * @return {none} nonehttp://www.buzzfeed.com/mjs538/the-68-words-you-cant-say-on-tv#.nbvLJyL2m
    */
    function expandTabs() {
        $('section').scrollTop(54);
        $('.contain').toggleClass('active');
    }


    /**
    * Create a new iframe
    * @param {String} url
    * @return {Number} tabId
    */
    function createIframe(url, tabId) {
        var iframes = document.createElement("iframe");
        iframes.setAttribute("src", "https://duckduckgo.com/?q=" + url);
        iframes.setAttribute("class", "iframe active");
        iframes.setAttribute("id", tabId);
        iframes.setAttribute("width", window.innerWidth);
        iframes.setAttribute("height", "100%");
  
    }   


    /**
    * Runs the system to upload to firebase
    * @param {none} none
    * @return {Number} tabId
    */
    function workHorse(){
        console.log('worker');
        if (typeof $scope.listOfProfanity !== 'undefined' && $scope.listOfProfanity.length > 0){
            for (var i = 0; i < $scope.listOfProfanity.length  ; i++) {
                profanityToFirebase($scope.listOfProfanity[i]);
            }
        }
    }


    /**
    * Stringify a string
    * @param {String} String
    * @return {String} JSON encoded string
    */
    function stringify(string){

        return  JSON.stringify( string );
    }


    /**
    * Get the current Time
    * @param {none} none
    * @return {Time} Time
    */
    function getCurrentTime(){

        var d = new Date(); // for now
        return d.getHours() + " "+ d.getMinutes() + " " + d.getSeconds();
    
    }


    /**
    * Get the current Date
    * @param {none} none
    * @return {Date} Date
    */
    function getCurrentDate(){

        var d = new Date();
        return d.toDateString();
    
    }


    /**
    * Set the current userId in the database.
    * @param {String} id 
    * @return {none} none
    */
    function saveCurrentUrl(url) {
        $scope.searchTerm =url;
        var usersRef = ref.child($scope.loggedin).child("children").child(removeRegex(ip));
        usersRef.update({
            name:user,
            status: "active",
            currentUrl: stringify(url),
            time:getCurrentTime(),
            date:getCurrentDate(),
            platform:navigator.platform
        });
    }

  /**
    * Set the current userId in the database.
    * @param {String} id 
    * @return {none} none
    */
    function setIpAddress(id) {
        var usersRef = ref.child(id).child("children").child(removeRegex(ip));
        usersRef.set({
            name:user,
            status: "active",
            currentUrl: "none",
            time:getCurrentTime(),
            date:getCurrentDate(),
            platform:navigator.platform
        });
    }


    /**
    * Hand the login information for the robin
    * @param {none} none 
    * @param {none} none
    * @return {none} none
    */
    $scope.login = function() {
 
        ref.child("users").authWithPassword({
            email: $('input[name="loginemail"]').val(),
            password: $('input[name="loginpassword"]').val()
        }, function(error, authData) {
            error ? errorCodes(error) : displayMessage("Just logging you in"),loginInformation($('input[name="loginemail"]').val(), authData),hideModal("login");
        });
    };


    /**
    * Hand the signup information for the robin
    * @param {none} none 
    * @param {none} none
    * @return {none} none
    */
    $scope.signup = function() {
       
        ref.child("users").createUser({
            email: $('input[name="signupemail"]').val(),
            password: $('input[name="signuppassword"]').val()
        }, function(error, userObj) {
            error ? errorCodes(error) : createData(userObj, $('input[name="signupemail"]').val(), $('input[name="signuppassword"]').val()),displayMessage( "Awesome , Your account is created"),hideModal("signup");
        });
    };


    /**
    * Handles and Displays the error codes
    * @param {object} The error object thats is sent in from  firebase
    * @return {none} none
    */
    function errorCodes(error) {
        switch (error.code) {
            case "EMAIL_TAKEN":
                displayMessage("The new user account cannot be created use.");
                break;
            case "INVALID_EMAIL":
                displayMessage("The specified eeeeemail is not a valid email.");
                break;
            case "INVALID_USER":
                displayMessage("The email or password wasnt there ");
                break;
            case "INVALID_PASSWORD":
                displayMessage("The email or password wasnt there ");
                break;
            default:
                displayMessage("Error :", error);
        }
    }


    /**
    * Display and error or comfirm message on login
    * @param {String} message
    * @return {none} none
    */
    function displayMessage(message) {
        setTimeout(function() {
            $scope.showError = true;
            $scope.errorMessage = message;
            $scope.$apply();
        }, 1000)
    }


    /**
    * Hide current Id
    * @param {Id} modalId
    * @return {none} none
    */
    function hideModal(modalId) {
        setTimeout(function() {
            $('#' + modalId).modal('hide');
        }, 3000)

    }


    /**
    * Creates the user and stores it in the database
    * @param {String} userData
    * @param {String} email
    * @param {String} password
    * @return {none} none
    */
    function createData(userData, email, password) {
        var usersRef = ref.child(userData.uid);
        usersRef.set({
            information: {
                email: email,
                password: password
            },
            ip: {}
        });
        setIpAddress(userData.uid);
    }


    /**
    * removeRegex
    * @param {string} stringToReplace
    * @return {string} desired
    */
    function removeRegex(stringToReplace) {
        var desired = stringToReplace.replace(/[^\w\s]/gi, '');
            desired = desired.replace(/[^a-zA-Z ]/g, "");
        return desired;
    }


    /**
    * redirect, rediect the user
    * @param {string} url
    * @return {none} none
    */
    function redirect(url) {
        setTimeout(function() {
            window.location = url;
        }, 1000);
    }


    /**
    * Checks for profanity
    * @param {object} callback 
    * @param {String} word
    * @return {profanity} returns true or false if the word is classed.
    */
    function profanityCheck(word, callback) {
        $.ajax({
            url: "http://www.wdyl.com/profanity?q=" + word,
            async: true,
            type: "GET",
            dataType: "json",
            success: function(data) {

                data.response === "true" ? $scope.listOfProfanity.push(word) : null;
                callback(data.response);
            },
            error: function(e) {
               // alert('error, try again');
            }
        });
    }


    /**
    * Sets the ipaddress and gets the user information objects,
    * @param {string} the users email address they inputted
    * @param {number} The firebase Id for the user.
    * @return {none} none
    */
    function loginInformation(email, id) {
        ref.child("users").startAt(email).endAt(email).once('value', function(snapshot) {
            console.log(snapshot.val());
            setIpAddress(id.uid);
            $scope.password = $('input[name="loginpassword"]').val();
            localStorage.setItem('password',$('input[name="loginpassword"]').val());
        
        }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }


    /**
    * Get profanity words
    * @param {none} none
    * @param {none} none
    * @return {object} snapshot
    */
    function getProfanityWords(temp,callback) {
        ref.child("profanity").on('value', function(snapshot) {
            callback(snapshot.val());
        }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }


    /**
    * Store words that are classed as profanity to the database
    * @param {word} the stting needed to be stored
    * @return {none} none
    */
    function profanityToFirebase(word) {
       
        var usersRef = ref.child("profanity").child(removeRegex(word.toLowerCase()));
        usersRef.set({
            profanity: "true"
        });
        console.log(word + "added");
        $scope.listOfProfanity.shift();
    }


    /**
    * logout out from firebase,
    * @param {none} none
    * @return {none} none
    */
   $scope.logout = function() {

console.log(localStorage.getItem('password') + "hi sexy");
 
 if ($('input[name="loginpassword"]').val() === localStorage.getItem('password')){
        displayMessage("logedout");
        $scope.banndedUrlsList = [];
        $scope.loggedin = null;
        ref.unauth();
        $scope.removeLocalStorage("password"); //Remove password
        hideModal("logoutModal");
    }
 }

    /**
    * Check if the user is logged in or not
    * @param  {none} none
    * @param  {none} none
    * @return {none} none
    */
    function authDataCallback(authData) {
        if (authData) {
            $scope.loggedin = authData.uid ;
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            $scope.loggedin = null;
            console.log("User is logged out");
        }
    }


    ref.onAuth(authDataCallback);
});
