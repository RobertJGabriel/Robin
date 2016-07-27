var app = angular.module('robin', []).filter('trustUrl', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
});

app.directive('iframeOnload', [function() {
    return {
        scope: {
            callBack: '&iframeOnload'
        },
        link: function(scope, element, attrs) {
            element.on('load', function() {
                return scope.callBack();
            })
        }
    }
}]);

app.controller('controller', function($scope) {

            $scope.listOfProfanityWords = [];
            $scope.listOfProfanity = [];
            $scope.listOfGoodWords = [];
            $scope.usersMacAddress = "";
            $scope.browsers = [];
            $scope.words = [];
            $scope.loggedin = null;
            $scope.tabsLimit = 6;
            $scope.caughtColor = "#7B1FA2";
            $scope.banndedUrlsList = [];
            $scope.searchTerm = "";
            $scope.stop = "no";
            $scope.blackList = [];
            $scope.whiteList = [];
            $scope.searchEngine = "https://duckduckgo.com/?q=";
            $scope.password = (localStorage.getItem('password') === null) ? null : localStorage.getItem('password');

            $scope.theme = (localStorage.getItem('theme') !== null) ? localStorage.getItem('theme') : "#F44336";
            $scope.themeStyle = (localStorage.getItem('theme') !== null) ? {
                'background-color': $scope.theme
            } : {
                'background-color': "#F44336"
            };



            $scope.iframeLoadedCallBack = function() {
                balance();
                var macAddress = require('getmac').getMac(function(err, macAddress) {
                    usersMacAddress = macAddress;
                });
                setTimeout(function() {

                    console.log("Mac address is : " + usersMacAddress)
                }, 2000);

            };


            function toFixed(x) {
                if (Math.abs(x) < 1.0) {
                    var e = parseInt(x.toString().split('e-')[1]);
                    if (e) {
                        x *= Math.pow(10, e - 1);
                        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
                    }
                } else {
                    var e = parseInt(x.toString().split('+')[1]);
                    if (e > 20) {
                        e -= 20;
                        x /= Math.pow(10, e);
                        x += (new Array(e + 1)).join('0');
                    }
                }
                return x;
            }
            /**
             * Onload Event for Angular
             * @param {none} none
             * @return {none} none
             */
            $scope.init = function() {
                $scope.createTab('');
            };


            /**
             * sets current color or theme
             * @param {String} color
             * @return {none} none
             */
            $scope.setColor = function(colors) {

                $scope.removeLocalStorage('theme');
                $scope.theme = colors;
                localStorage.setItem('theme', $scope.theme);
                $scope.themeStyle = {
                    'background-color': colors
                };
            };

            /**
             * sets current color or theme
             * @param {String} color
             * @return {none} none
             */
            $scope.setColor = function(colors) {

                $scope.removeLocalStorage('hide');
                $scope.theme = colors;
                localStorage.setItem('theme', $scope.theme);
                $scope.themeStyle = {
                    'background-color': colors
                };
            };


            /**
             * Remove localstorage by key
             * @param {String} Key
             * @return {none} none
             */
            $scope.removeLocalStorage = function(key) {
                localStorage.removeItem(key);
            };


            /**
             * Show Current tabs in expand view
             * @param {String} Key
             * @return {none} none
             */
            $scope.showTabs = function(key) {
                expandTabs();
            };


            /**
             * Go Back in iframe
             * @param {none} none
             * @return {none} none
             */
            $scope.goBack = function() {
                console.log("go back");
            };


            /**
             * Go Forword in iframe
             * @param {none} none
             * @return {none} none
             */
            $scope.goForword = function() {
                console.log("goForword");
            };


            /**
             * Refresh iframe
             * @param {none} none
             * @return {none} none
             */
            $scope.refresh = function() {
                console.log("refresh");
            };


            /**
             * Go Home in iframe
             * @param {none} none
             * @return {none} none
             */
            $scope.home = function() {
                console.log("home");
            };


            /**
             * Search
             * @param {object} keyEvent
             * @return {none} none
             */
            $scope.search = function(keyEvent) {
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
            $scope.autoFocus = function() {
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
            $scope.searchResult = function(search) {
                var currentUrlNow = $('.iframe.active').contents().get(0).location.href;
                var searchUrl;
                if (search.indexOf("http") > -1) {
                    searchUrl = search;
                } else if (search.indexOf("assets") > -1) {
                    searchUrl = search;
                    $('.iframe.active').attr('src', searchUrl);
                } else {

                    searchUrl = $scope.searchEngine + search;
                }
                $('.iframe.active').attr('src', searchUrl);
            };


            /**
             * Create Tab
             * @param {String} search
             * @return {none} none
             */
            $scope.createTab = function(url) {

                if ($scope.browsers.length !== $scope.tabsLimit) {
                    var newTab = {
                        id: $scope.browsers.length,
                        iframeId: "iframes" + $scope.browsers.length,
                        closeId: $scope.browsers.length + "s",
                        title: $scope.searchEngine + url,
                        color: "white"
                    };
                    $scope.browsers.push(newTab);
                    $('.home').removeClass('active');
                    $('.iframe').removeClass('active');


                } else {
                    //  alert('tab Limit reached');
                }
            };


            /**
             * Select the Current Tab
             * @param {Object} $event
             * @return {none} none
             */
            $scope.selectTab = function($event) {
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
            $scope.closeTab = function($event) {
                if ($scope.browsers.length > 1) {
                    for (var i = $scope.browsers.length - 1; i >= 0; i--) {
                        console.log($scope.browsers[i]["closeId"] + "   " + $event.target.id);
                        if ($scope.browsers[i]["closeId"] == $event.target.id) {
                            $scope.browsers.splice(i, 1);
                        }
                    }
                }
            }




            function smartCaught() {
                $scope.searchResult("http://duckduckgo.com/");
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
                $("iframe").each(function() {
                    $(this).width = window.innerWidth;
                    $(this).height = "100%";
                });
            }




            /**
             * Checks for profanity
             * @param {object} callback
             * @param {String} word
             * @return {profanity} returns true or false if the word is classed.
             */
            function profanityCheck(word, callback) {

            }


            /**
             * Checks for matching items in arrays
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
             * @return {none} none
             */
            function expandTabs() {
                $('section').scrollTop(54);
                $('.contain').toggleClass('active');
            }


            /**
             * Unique Vaules from two arrays
             * @param {Object} List
             * @return {Array} JSON encoded string
             */
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
             * Hand the login information for the robin
             * @param {none} none
             * @param {none} none
             * @return {none} none
             */
            $scope.login = function() {
                console.log("login");
            };


            /**
             * Hand the signup information for the robin
             * @param {none} none
             * @param {none} none
             * @return {none} none
             */
            $scope.signup = function() {

                console.log("signup");
            };




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

                setTimeout(function() {
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
                setTimeout(function() {
                    $('#' + modalId).modal('hide');
                }, 3000)

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
             * logout out from firebase,
             * @param {none} none
             * @return {none} none
             */
            $scope.logout = function() {
                console.log("logout")
            }

            /**
             * System to run in the background to process huge data
             * @param {none} none
             * @return {none} none
             */
            $scope.workHorse = function() {

                console.log("Work horse is running......");

                $scope.listOfProfanity = unique($scope.listOfProfanity); // Get list of words from a webpage and remove any copys
                clearInterval(workHorses); // Stop the loop

                if (typeof $scope.listOfProfanity !== 'undefined' && $scope.listOfProfanity.length > -1) {
                    for (var i = 0; i < $scope.listOfProfanity.length; i++) {
                        $scope.listOfProfanityWords.indexOf($scope.listOfProfanity[i]) > -1 ? console.log("Already in database : " + $scope.listOfProfanity[i]) : console.log("Added to database : " + $scope.listOfProfanity[i]) //profanityToFirebase($scope.listOfProfanity[i]);
                        $scope.listOfProfanity.indexOf($scope.listOfProfanity[i] !== -1) ?   $scope.listOfProfanity.splice(index, 1) : null;
                        $scope.listOfProfanity.shift();
                      }
                  }

                  $scope.loggedin ?   runIsItDisabled() : null;
                  workHorses = setInterval(workHorse, 1000);

                };

            });
