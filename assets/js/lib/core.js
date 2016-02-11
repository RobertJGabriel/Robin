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

app.controller('controller', function ($scope) {

    var ref = new Firebase("https://projectbird.firebaseio.com");
    var authData = ref.getAuth();

    $scope.words = [];
    $scope.loggedin = null;
    $scope.tabsLimit = 6;
    $scope.caughtColor = "#7B1FA2";
    $scope.saved = localStorage.getItem('banndedUrls');
    $scope.banndedUrlsList = [];
    
    $scope.themeList = [{   color: "#F44336",
        active: true
    }];

    $scope.banndedUrls = (localStorage.getItem('banndedUrls') !== null) ? JSON.parse($scope.saved) : $scope.banndedUrlsList;
   
    //this is fine.
    $scope.savedTheme = localStorage.getItem('theme');
    $scope.theme = (localStorage.getItem('theme') !== null) ? JSON.parse($scope.savedTheme) : $scope.themeList;
    $scope.themeStyle = (localStorage.getItem('theme') !== null) ? {'background-color': $scope.theme[0][0]['color']} : console.log('no color set');

    $scope.init = function () {
        createTab('');
       getProfanityWords(null,function(response) {
            for (i = 0; i <= Object.keys(response).length - 1; i++) {
                $scope.banndedUrlsList.push(Object.keys(response)[i] );
            }
            $scope.banndedUrls = $scope.banndedUrlsList;
            localStorage.setItem('banndedUrls', JSON.stringify($scope.banndedUrls));
        });
        
    };

    $scope.addLocalStorage = function () {
        $scope.newID = $scope.banndedUrls.length + 1;
        $scope.banndedUrls.forEach(function (item) {
            console.log(item);
        });
        localStorage.setItem('banndedUrls', JSON.stringify($scope.banndedUrls));
    };



    $scope.loadDefault = function () {
        $scope.banndedUrls = (localStorage.getItem('banndedUrls') !== null) ? JSON.parse($scope.saved) : $scope.banndedUrlsList;
    }



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
    }



    $scope.clearLocalStorage = function () {
        alert('you clicked clear ');
        $scope.banndedUrls = [];
        $scope.removeLocalStorage('banndedUrls');
        $scope.removeLocalStorage('theme');
        $scope.loadDefault();
        console.log('Reset');
        saveCurrentUrl('jjgj');
    };



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
        $('.iframe.active').attr('src', 'https://www.google.ie/#q=');
    };


    $scope.createTab = function () {
        createTab('');
    };

    $scope.search = function (keyEvent) {
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
        $('.iframe.active').attr('src', "https://www.google.ie/#q=" + search);
        resizeIframe();
    }

    function createTab(url) {
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
            title.innerHTML = "https://www.google.ie/#q=" + url;
            span2.appendChild(title);
            span.appendChild(span2);
            var iframes = document.createElement("iframe");
            iframes.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
            iframes.setAttribute("src", "https://www.google.ie/#q=" + url);
            iframes.setAttribute("class", "iframe active  ");
            iframes.setAttribute("id", getAmountOfTabs);
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
        } else {
            alert('tab Limit reached');
        }
    }




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
        iframes.setAttribute("src", "https://www.google.ie/#q=" + url);
        iframes.setAttribute("class", "iframe active");
        iframes.setAttribute("id", tabId);
        iframes.setAttribute("width", window.innerWidth);
        iframes.setAttribute("height", "100%");
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
            $(this).load(onSrcIframeChange()); // Attaches the onSrcIframeChange() event
        });
    }


    /**
    * Event to change and store the url 
    * @param {none} none
    * @return {none} none
    */
    function onSrcIframeChange() {

        var iframeId = $('.iframe.active').attr('id');
        var url = $('.iframe.active').attr('src');
        $scope.searchTerm = url;
        if ($scope.loggedin) {
            saveCurrentUrl($scope.searchTerm); //Store the url to firebase
        }

    }

    /**
    * Set the current userId in the database.
    * @param {String} id 
    * @return {none} none
    */
    function saveCurrentUrl(url) {
        var usersRef = ref.child($scope.loggedin).child("children").child(user);
        usersRef.update({
            macAddress:removeRegex(ip),
            status: "active",
            currentUrl: removeRegex(url)
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
    * Set the current userId in the database.
    * @param {String} id 
    * @return {none} none
    */
    function setIpAddress(id) {
        var usersRef = ref.child(id).child("children").child(user);
        usersRef.set({
            macAddress:removeRegex(ip),
            status: "active",
            currentUrl: "none"
        });
    }


    /**
    * Attach an asynchronous callback to read the data at our posts reference
    * @param {none} none
    * @param {none} none
    * @return {none} none
    */
    try {
        ref.child(authData.uid).on("value", function(snapshot) {
            console.log(snapshot.val());
        }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    } catch (e) {
        // statements to handle any exceptions
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
    * Checks each word if they profanity in an array.
    * @param {string} url
    * @param {object} words
    * @return {none} none
    */
    function addWord(url, words) {
        for (var i = 0; i < words.length - 1; i++) {
            profanityCheck(words[i], function(response) {
                response === "true" ? profanityToFirebase(words[i]) : null;
            });
        }
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
            async: false,
            type: "GET",
            dataType: "json",
            success: function(data) {
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
            console.log(snapshot.val());
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
        var usersRef = ref.child("profanity").child(word);
        usersRef.update({
            profanity: "true"
        });
    }

    /**
    * logout out from firebase,
    * @param {none} none
    * @return {none} none
    */
   $scope.logout = function() {
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
    ref.onAuth(authDataCallback);

});
