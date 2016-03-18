var app = angular.module('robin', []).filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });


var osenv = require('osenv'),
    user = osenv.user(),
    async = require('async'),
    mrscraper = require("scraper-web"),
    bayes = require('bayes'),
    firebase = require('firebase');
    ref = new firebase('https://projectbird-robin.firebaseio.com'),
    authData = ref.getAuth(),
    classifier = bayes(),
    usersMacAddress = null,
    macAddress = require('getmac').getMac(function (err, macAddress) { usersMacAddress = macAddress;});
  require('nw.gui').Window.get().showDevTools();

    app.controller('controller', function ($scope) {


        $scope.listOfProfanityWords = [];
        $scope.listOfProfanity = [];
        $scope.listOfGoodWords =[];
        $scope.browser = [];
        $scope.words = [];
        $scope.loggedin = null;
        $scope.tabsLimit = 6;
        $scope.caughtColor = "#7B1FA2";
        $scope.banndedUrlsList = [];
        $scope.searchTerm = "";
        $scope.stop = "no";
        $scope.blackList = [];
        $scope.whiteList = [];
        $scope.password = (localStorage.getItem('password') === null) ? null : localStorage.getItem('password');

        $scope.theme = (localStorage.getItem('theme') !== null) ? JSON.parse(localStorage.getItem('theme')) : [{color: "#F44336"}];
        $scope.themeStyle = (localStorage.getItem('theme') !== null) ? {
            'background-color': $scope.theme[0][0]['color']
        } : {
            'background-color': "#F44336"
        };


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
            $scope.theme = [{color: color}];
            localStorage.setItem('theme', JSON.stringify($scope.theme));
            $scope.themeStyle = {
                'background-color': color
            };

        };


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
            if ($scope.searchTerm === "devKeys") {
                require('nw.gui').Window.get().showDevTools();
            }
            if ($scope.searchTerm === "easteregg") {
                cornify_add();
            }

            if (keyEvent.which === 13) {
                $scope.searchResult($scope.searchTerm);
                setPageTitle($scope.searchTerm);
            }
        };


        /**
         * Auto focus the text in input
         * @param {none} none
         * @return {none} none
         */
        $scope.autoFocus = function () {
            document.getElementById("searchTerm").select();
        };


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
        $scope.searchResult = function (search) {
            var currentUrlNow = $('.iframe.active').contents().get(0).location.href;
            var searchUrl;
            if (search.indexOf("http") > -1) {
                searchUrl = search;
            } else if (search.indexOf("assets") > -1) {
                searchUrl = search;
                $('.iframe.active').attr('src', searchUrl);
            } else {

                searchUrl = "https://duckduckgo.com/?q=" + search;
            }
            $('.iframe.active').attr('src', searchUrl);
        };


        /**
         * Create Tab
         * @param {String} search
         * @return {none} none
         */
        $scope.createTab = function (url) {

            if ($scope.browser.length !== $scope.tabsLimit) {
                var newTab = {id: $scope.browser.length,iframeId:"iframes" + $scope.browser.length, closeId:$scope.browser.length + "s", title:"https://duckduckgo.com/?q=" + url, color:"white"};
                $scope.browser.push(newTab) ;
                $('.home').removeClass('active');
                $('.iframe').removeClass('active');

                $('.iframe.active').on('load', function () { //binds the event
                    balance();
                    checkForBannedUrl();
                    setInterval(workHorse, 10000);
                });
            } else {
                //  alert('tab Limit reached');
            }
        };


    /**
     * Select the Current Tab
     * @param {Object} $event
     * @return {none} none
     */
    $scope.selectTab = function ($event){
        $($event.currentTarget).closest('section').prependTo('.contain');
        $('section').removeClass('active');
        $('.home.active .iframe').removeClass('active');
        $($event.currentTarget).addClass('active');
        $('.home.active .iframe').addClass('active');
        $('.contain').removeClass('active');
    }


    /**
     * Remove the tab from the array list
     * @param {Object} $event
     * @return {none} none
     */
    $scope.closeTab = function ($event){
      if ($scope.browser.length  > 1){
          for(var i = $scope.browser.length - 1; i >= 0; i--){
            console.log($scope.browser[i]["closeId"]  +  "   "  + $event.target.id);
            if($scope.browser[i]["closeId"] == $event.target.id){
              $scope.browser.splice(i,1);
            }
          }
        }
    }


    /**
     * Banned Urls, redirects if its a banned url
     * @param {none} none
     * @return {none} none
     */
    function checkForBannedUrl() {
        for (i = 0; i < $scope.blackList.length; i++) {
            var currentUrlNow = $('.iframe.active').contents().get(0).location.href,
                bannedUrl = $scope.blackList[i]["url"];
            if (currentUrlNow.indexOf(bannedUrl) > -1) {
               smartCaught();
                break;
            }
            $scope.searchTerm = currentUrlNow;
            $scope.apply;

        }
    }

    function smartCaught(){
         $scope.searchResult("http://projectbird.com");
          $scope.setColor("#000");
                 $scope.apply;
    }


    /**
     * Load balacing for the scraping of files
     * @param {none} none
     * @return {none} none
     */
    function balance() {

        var tempUrl = $('.iframe.active').contents().get(0).location.href;

        if ($scope.loggedin) {
            saveCurrentUrl(tempUrl); //Store the url to firebase
            parser(tempUrl);
        }

        $scope.searchTerm = tempUrl;
        resizeIframe();
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
        });
    }


    /**
     * Scrap Results
     * @param {String} url
     * @return {none} none
     */
    function parser(url) {


        async.waterfall([
                    async.apply(myFirstFunction, url),
                    mySecondFunction
                ], function (err, words, profanity) {

                    $scope.words = words;
            var temp = (100 / words.length) * profanity.length;


            setWebsiteScore(url, temp);
        });

        function myFirstFunction(urls, callback) {
            mrscraper(urls, function (words2) {
                callback(null, words2);
            });
        }

        function mySecondFunction(words, callback) {

            callback(null, words, getMatch(words, $scope.listOfProfanityWords));
        }

    }


    /**
     * Checks for matching items in arras
     * @param {array} array
     * @param {array} array
     * @return {array} matching strings
     */
    function getMatch(a, b) {
        var matches = [];

        for (var i = 0; i < a.length; i++) {
            for (var e = 0; e < b.length; e++) {
                if (a[i] === b[e]) matches.push(a[i]), $scope.listOfProfanity.push(a[i]);
            }
        }
        return matches;
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
    function workHorse() {
        console.log('Robin Running.....');

        if (typeof $scope.listOfProfanity !== 'undefined' && $scope.listOfProfanity.length > -1) {
            for (var i = 0; i < $scope.listOfProfanity.length; i++) {
              //  profanityToFirebase($scope.listOfProfanity[i]);
            }
        }
          if ($scope.loggedin) {

            runIsItDisabled();
        }
       if ($scope.words.length !== 0){

            var temp = classifier.categorize(unique($scope.words).toString());

            if (temp === "negative"){smartCaught();}
            console.log("Current Page is " + temp);
        }

        $scope.words = []; //clears it

    }

    function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}



    /**
     * Stringify a string
     * @param {String} String
     * @return {String} JSON encoded string
     */
    function stringify(string) {
        return JSON.stringify(string);
    }


    /**
     * Get the current Time
     * @param {none} none
     * @return {Time} Time
     */
    function getCurrentTime() {

        var d = new Date(); // for now
        return d.getHours() + " " + d.getMinutes() + " " + d.getSeconds();

    }


    /**
     * Get the current Date
     * @param {none} none
     * @return {Date} Date
     */
    function getCurrentDate() {

        var d = new Date();
        return d.toDateString();

    }


    /**
     * Set the current userId in the database.
     * @param {String} id
     * @return {none} none
     */
    function saveCurrentUrl(url) {
        $scope.searchTerm = url;
        var usersRef = ref.child($scope.loggedin).child("children").child(removeRegexForMac(usersMacAddress));
        usersRef.update({
            name: user,
            status: "active",
            currentUrl: stringify(url),
            time: getCurrentTime(),
            date: getCurrentDate(),
            platform: navigator.platform
        });
    }


    /**
     * Set the current userId in the database.
     * @param {String} id
     * @return {none} none
     */
    function setIpAddress(id) {
        var usersRef = ref.child(id).child("children").child(removeRegexForMac(usersMacAddress));
        usersRef.set({
            name: user,
            status: "active",
            currentUrl: "none",
            time: getCurrentTime(),
            date: getCurrentDate(),
            platform: navigator.platform
        });
    }


    /**
     * Set website score
     * @param {String} id
     * @return {none} none
     */
    var lastUrl = null;

    function setWebsiteScore(url, scores) {
        if (lastUrl != url) {
            var usersRef = ref.child("scores").child(removeRegexForMac(url));
            usersRef.set({
                currentUrl: stringify(url),
                score: stringify(scores)
            });
        }
        lastUrl = url;
    }


    /**
     * Hand the login information for the robin
     * @param {none} none
     * @param {none} none
     * @return {none} none
     */
    $scope.login = function () {
        ref.child("users").authWithPassword({
            email: $('input[name="loginemail"]').val(),
            password: $('input[name="loginpassword"]').val()
        }, function (error, authData) {
            error ? errorCodes(error) : displayMessage("Just logging you in"), loginInformation($('input[name="loginemail"]').val(), authData), hideModal("login");
        });
    };


    /**
     * Hand the signup information for the robin
     * @param {none} none
     * @param {none} none
     * @return {none} none
     */
    $scope.signup = function () {
        ref.child("users").createUser({
            email: $('input[name="signupemail"]').val(),
            password: $('input[name="signuppassword"]').val()
        }, function (error, userObj) {
        	console.log(userObj);
        	console.log(error)
            error ? errorCodes(error) : displayMessage("Awesome , Your account is created"), createData(userObj, $('input[name="signupemail"]').val(), $('input[name="signuppassword"]').val()), hideModal("signup");
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
        setTimeout(function () {
            $scope.showError = true;
            $scope.errorMessage = message;
            $scope.$apply();
        }, 1000)

        setTimeout(function () {
            $scope.showError = false;
            $scope.$apply();
        }, 4000)

    }


    /**
     * Hide current Id
     * @param {Id} modalId
     * @return {none} none
     */
    function hideModal(modalId) {
        setTimeout(function () {
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
            ip: {},
            list: {}
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
     * removeRegex for Mac
     * @param {string} stringToReplace
     * @return {string} desired
     */
    function removeRegexForMac(stringToReplace) {
        var desired = stringToReplace.replace(/[^\w\s]/gi, '');
        return desired;
    }


    /**
     * redirect, rediect the user
     * @param {string} url
     * @return {none} none
     */
    function redirect(url) {
        setTimeout(function () {
            window.location = url;
        }, 1000);
    }





    /**
     * Sets the ipaddress and gets the user information objects,
     * @param {string} the users email address they inputted
     * @param {number} The firebase Id for the user.
     * @return {none} none
     */
    function loginInformation(email, id) {
        ref.child("users").startAt(email).endAt(email).once('value', function (snapshot) {
            setIpAddress(id.uid);
            $scope.password = $('input[name="loginpassword"]').val();
            localStorage.setItem('password', $('input[name="loginpassword"]').val());

        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    /**
     * Store words that are classed as profanity to the database
     * @param {word} the stting needed to be stored
     * @return {none} none
     */
    function profanityToFirebase(word) {

        var usersRef = ref.child("profanity");
        usersRef.push({
            word: removeRegex(word.toLowerCase()),
            type: "bad"
        });
        console.log(word + " added to firebase");
        $scope.listOfProfanity.shift();
    }


    /**
     * logout out from firebase,
     * @param {none} none
     * @return {none} none
     */
    $scope.logout = function () {
        $scope.showError = false;
        if ($('input[name="logoutpassword"]').val() === localStorage.getItem('password')) {
            $scope.banndedUrlsList = [];
            logoutUpdate();
            $scope.loggedin = null;
            displayMessage("logedout");
            $scope.removeLocalStorage("password"); //Remove password
            ref.unauth();
            hideModal("logoutModal");
        } else {
            $scope.showError = true;
            $scope.errorMessage = "Wrong Password";
            displayMessage("Wrong password");
        }
    }


    /**
     * Update the User as logged out
     * @param {String} id
     * @return {none} none
     */
    function logoutUpdate() {
        var usersRef = ref.child($scope.loggedin).child("children").child(removeRegexForMac(ip));
        usersRef.update({
            stop: "no",
            status: "loggedout",
            currentUrl: "none",
            time: getCurrentTime(),
            date: getCurrentDate()
        });
    }



    /**
     * Attach an asynchronous callback to read the data at our posts reference
     * @param {none} none
     * @param {none} none
     * @return {none} none
     */
    function runIsItDisabled() {
        var usersRef = ref.child($scope.loggedin).child("children").child(removeRegexForMac(ip)).on("value", function (snapshot2) {
            $scope.stop = snapshot2.val()["stop"];
            if ($scope.stop == "yes") {
                document.getElementById("blank").style.display = "block";
            } else {
                document.getElementById("blank").style.display = "none";
            }
           // console.log($scope.stop);
        });
    }


    /**
     * Attach an asynchronous callback to read the data at our posts reference
     * @param {none} none
     * @param {none} none
     * @return {none} none
     */
    try {
        ref.child(authData.uid).on("child_changed", function(snapshot) {
            console.log("change");
            for (var q in snapshot.val()["list"]) {
                if (snapshot.val()["list"][q]["type"] === "white") {
                    $scope.whiteList.push({
                        url: q.replace(/['"]+/g, '')
                    });
                } else {
                    $scope.blackList.push({
                        url: q.replace(/['"]+/g, '')
                    });
                }
            }
            //console.log($scope.blackList);
            //console.log($scope.whiteList);
            saveCurrentUrl($('.iframe.active').attr('src'));
        }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    } catch (e) {
        // statements to handle any exceptions
    }
    try {
        ref.child("profanity").on('child_added', function(snapshot,
            prevChildKey) {
            for (var q in snapshot.val()) {
                if (snapshot.val()["type"] === "good") {
                    $scope.listOfGoodWords.push(snapshot.val()["word"]);
                    classifier.learn($scope.listOfGoodWords.toString().toLowerCase(),
                        'positive');
                } else {
                    $scope.listOfProfanityWords.push(snapshot.val()[
                        "word"]);
                    classifier.learn($scope.listOfProfanityWords.toString(),
                        'negative');
                }
            }
        }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    } catch (e) {}




    /**
     * Check if the user is logged in or not
     * @param  {none} none
     * @param  {none} none
     * @return {none} none
     */
    function authDataCallback(authData) {
        if (authData) {
            $scope.loggedin = authData.uid;
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            $scope.loggedin = null;
            console.log("User is logged out");
        }
    }


    ref.onAuth(authDataCallback);
});
