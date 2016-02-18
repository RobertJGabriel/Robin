   require('nw.gui').Window.get().showDevTools();
var app = angular.module('robin', []);
    var osenv = require('osenv');
    var ip = null;
    var path = osenv.path();
    var user = osenv.user();
    console.log(path);
    require('getmac').getMac(function(err,macAddress){
        if (err)  throw err
        console.log(macAddress)
        ip = macAddress; 
    });
    var listOfVerbs = [];
    var mrscraper = require("scraper-web");





app.controller('controller', function ($scope) {
    setInterval(workHorse,500)
    var ref = new Firebase("https://projectbird.firebaseio.com");
    var authData = ref.getAuth();

    $scope.words = [];
    $scope.loggedin = null;
    $scope.tabsLimit = 6;
    $scope.caughtColor = "#7B1FA2";
    $scope.banndedUrlsList = [];
    $scope.searchTerm ;
    $scope.themeList = [{   color: "#F44336",
        active: true
    }];

    //this is fine.
    $scope.savedTheme = localStorage.getItem('theme');
    $scope.theme = (localStorage.getItem('theme') !== null) ? JSON.parse($scope.savedTheme) : $scope.themeList;
    $scope.themeStyle = (localStorage.getItem('theme') !== null) ? {'background-color': $scope.theme[0][0]['color']} : console.log('no color set');
    $scope.themeStyleSides = (localStorage.getItem('theme') !== null) ? {   'border-left': "2px solid " + $scope.theme[0][0]['color'],'border-bottom': "2px solid " + $scope.theme[0][0]['color']} : console.log('no color set');


    $scope.init = function () {
   
        $scope.createTab('');
      
        
    };



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





    $scope.removeLocalStorage = function (key) {
        localStorage.removeItem(key);
    };


    $scope.showTabs = function (key) {
        expandTabs();
    };

    $scope.goBack = function () {
        document.getElementById($('.iframe.active').attr('id')).contentWindow.history.back();

    };


    $scope.goForword = function () {
        document.getElementById($('.iframe.active').attr('id')).contentWindow.history.forword();
    };


    $scope.refresh = function () {
        $('.iframe.active').attr('src', $('.iframe.active').attr('src'));
    };


    $scope.home = function () {
        $('.iframe.active').attr('src', 'https://duckduckgo.com/?q=');
    };




    $scope.search = function (keyEvent) {
        if ($scope.searchTerm === "devKeys"){
            require('nw.gui').Window.get().showDevTools();
        }
        if (keyEvent.which === 13) {
            searchResult($scope.searchTerm);
            setPageTitle($scope.searchTerm);

        };
    }


   $scope.autoFocus = function () {
         document.getElementById("searchTerm").select();
    }


    function setPageTitle(title) {
        document.title = "Robin : " + title;
    }

    function searchResult(search) {
        $('.iframe.active').attr('src', "https://duckduckgo.com/?q=" + search);
    }

   $scope.createTab = function(url) {
        var getAmountOfTabs = document.getElementsByTagName("iframe").length;
        if (getAmountOfTabs !== $scope.tabsLimit) {
            if (url == '[object MouseEvent]') {
                url = 'batman';
            }
            $('.home').removeClass('active');
            $('.iframe').removeClass('active');
            var tabs = document.getElementById('tabs');
            var span = document.createElement("section");

            var span2 = document.createElement("span");




            span.setAttribute("class", "home active ");
            var title = document.createElement("h1");
            title.setAttribute("class", "title");
            title.innerHTML = "https://duckduckgo.com/?q=" + url;
            span2.appendChild(title);
            span.appendChild(span2);
            var iframes = document.createElement("iframe");
            iframes.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms ");
            iframes.setAttribute("src", "https://duckduckgo.com/?q=" + url);
            iframes.setAttribute("class", "iframe active  ");
            iframes.setAttribute("id", getAmountOfTabs);
            iframes.setAttribute("width", window.innerWidth);
            iframes.setAttribute("height", "100%");
            span.appendChild(iframes);
            tabs.appendChild(span);
   
            $('.iframe.active').on('load', function() { //binds the event 
                balance();
//worker = ;
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

        }
        $scope.searchTerm = tempUrl;
             
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
console.log('Start');
    if (typeof listOfVerbs !== 'undefined' && listOfVerbs.length > 0){

        for (var i = 0; i < listOfVerbs.length  ; i++) {
               console.log("Work horse" + listOfVerbs[i]);
            profanityToFirebase(listOfVerbs[i]);
        }
    } else {
         // clearInterval(worker);
          console.log('Stop');
    }


/* this is mostly to check words
        getProfanityWords(null,function(response) {

            if (response !== null){
                for (i = 0; i <= Object.keys(response).length - 1; i++) {
                    $scope.banndedUrlsList.push(Object.keys(response)[i] );
                }
            }
        });
*/
    }

    ref.onAuth(authDataCallback);






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
            error ? errorCodes(error) : displayMessage("Just logging you in"),loginInformation($('input[name="loginemail"]').val(), authData);
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
            error ? errorCodes(error) : createData(userObj, $('input[name="signupemail"]').val(), $('input[name="signuppassword"]').val()),displayMessage( "Awesome , Your account is created");
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
        var desired = stringToReplace.replace(/[^\w\s]/gi, '')
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

                data.response === "true" ? listOfVerbs.push(word) : null;
                callback(data.response);
            },
            error: function(e) {
                alert('error, try again');
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
        console.log(word + "added");
       
        var usersRef = ref.child("profanity").child(removeRegex(word.toLowerCase()));
        usersRef.set({
            profanity: "true"
        });
         listOfVerbs.shift();
    }

    /**
    * logout out from firebase,
    * @param {none} none
    * @return {none} none
    */
   $scope.logout = function() {
    $scope.banndedUrlsList = [];
        $scope.loggedin = null;
        ref.unauth();
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


});
