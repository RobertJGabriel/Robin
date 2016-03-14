var app = angular.module('robin', []);
var osenv = require('osenv');
var ip = null;
var user = osenv.user();
var async = require('async');
var mrscraper = require("scraper-web");
var bayes = require('bayes');
var classifier = bayes();
require('getmac').getMac(function (err, macAddress) {
    ip = macAddress;
});
       require('nw.gui').Window.get().showDevTools();
function ignoreerror() {
    return true;
}
window.onerror = ignoreerror();
app.controller('controller', function ($scope) {

    var ref = new Firebase("https://projectbird-robin.firebaseio.com");
    var authData = ref.getAuth();
var listOfVerbs = ["this","a","at","get","the","them","her","his","its","accept","ache","acknowledge","act","add","admire","admit","admonish","adopt","advise","affirm","afford","agree","ail","alert","allege","allow","allude","amuse","analyze","announce","annoy","answer","apologize","appeal","appear","applaud","appreciate","approve","argue","arrange","arrest","arrive","articulate","ask","assert","assure","attach","attack","attempt","attend","attract","auction","avoid","avow","awake","babble","back","bake","balance","balk","ban","bandage","bang","bar","bare","bargain","bark","barrage","barter","baste","bat","bathe","battle","bawl","be","beam","bear","beat","become","befriend","beg","begin","behave","believe","bellow","belong","bend","berate","besiege","bestow","bet","bid","bite","bleach","bleed","bless","blind","blink","blot","blow","blurt","blush","boast","bob","boil","bolt","bomb","book","bore","borrow","bounce","bow","box","brag","brake","branch","brand","break","breathe","breed","bring","broadcast","broil","bruise","brush","bubble","build","bump","burn","burnish","bury","buy","buzz","cajole","calculate","call","camp","care","carry","carve","catch","cause","caution","challenge","change","chant","charge","chase","cheat","check","cheer","chew","chide","chip","choke","chomp","choose","chop","claim","clap","clean","clear","climb","clip","close","coach","coil","collect","color","comb","come","comfort","command","comment","communicate","compare","compete","complain","complete","concede","concentrate","concern","conclude","concur","confess","confide","confirm","connect","consent","consider","consist","contain","contend","continue","cook","copy","correct","cost","cough","count","counter","cover","covet","crack","crash","crave","crawl","criticize","croak","crochet","cross","cross-examine","crowd","crush","cry","cure","curl","curse","curve","cut","cycle","dam","damage","dance","dare","deal","debate","decay","deceive","decide","decipher","declare","decorate","delay","delight","deliver","demand","deny","depend","describe","desert","deserve","desire","deter","develop","dial","dictate","die","dig","digress","direct","disclose","dislike","dive","divide","divorce","divulge","do","dock","dole","dote","double","doubt","drag","drain","draw","dream","dress","drill","drink","drip","drive","drone","drop","drown","dry","dump","dupe","dust","dye","earn","eat","echo","edit","educate","elope","embarrass","emigrate","emit","emphasize","employ","empty","enchant","encode","encourage","end","enjoin","enjoy","enter","entertain","enunciate","envy","equivocate","escape","evacuate","evaporate","exaggerate","examine","excite","exclaim","excuse","exercise","exhort","exist","expand","expect","expel","explain","explode","explore","extend","extoll","face","fade","fail","fall","falter","fasten","favor","fax","fear","feed","feel","fence","fetch","fight","file","fill","film","find","fire","fish","fit","fix","flap","flash","flee","float","flood","floss","flow","flower","fly","fold","follow","fool","force","foretell","forget","forgive","form","found","frame","freeze","fret","frighten","fry","fume","garden","gasp","gather","gaze","gel","get","gild","give","glide","glue","gnaw","go","grab","grate","grease","greet","grill","grin","grip","groan","grow","growl","grumble","grunt","guarantee","guard","guess","guide","gurgle","gush","hail","hammer","hand","handle","hang","happen","harass","harm","harness","hate","haunt","have","head","heal","heap","hear","heat","help","hide","highlight","hijack","hinder","hint","hiss","hit","hold","hook","hoot","hop","hope","hover","howl","hug","hum","hunt","hurry","hurt","ice","identify","ignore","imagine","immigrate","implore","imply","impress","improve","include","increase","infect","inflate","influence","inform","infuse","inject","injure","inquire","insist","inspect","inspire","instruct","intend","interest","interfere","interject","interrupt","introduce","invent","invest","invite","iron","irritate","itch","jab","jabber","jail","jam","jeer","jest","jog","join","joke","jolt","judge","juggle","jump","keep","kick","kill","kiss","kneel","knit","knock","knot","know","label","lament","land","last","laugh","lay","lead","lean","learn","leave","lecture","lend","let","level","license","lick","lie","lift","light","lighten","like","list","listen","live","load","loan","lock","long","look","loosen","lose","love","lower","mail","maintain","make","man","manage","mar","march","mark","marry","marvel","mate","matter","mean","measure","meet","melt","memorize","mend","mention","merge","milk","mine","miss","mix","moan","molt","moor","mourn","move","mow","mug","multiply","mumble","murder","mutter","nag","nail","name","nap","need","nest","nod","note","notice","number","obey","object","observe","obtain","occur","offend","offer","ogle","oil","omit","open","operate","order","overflow","overrun","owe","own","pack","pad","paddle","paint","pant","park","part","pass","paste","pat","pause","pay","peck","pedal","peel","peep","peer","peg","pelt","perform","permit","pester","pet","phone","pick","pinch","pine","place","plan","plant","play","plead","please","pledge","plow","plug","point","poke","polish","ponder","pop","possess","post","postulate","pour","practice","pray","preach","precede","predict","prefer","prepare","present","preserve","press","pretend","prevent","prick","print","proceed","proclaim","produce","profess","program","promise","propose","protect","protest","provide","pry","pull","pump","punch","puncture","punish","push","put","question","quilt","quit","quiz","quote","race","radiate","rain","raise","rant","rate","rave","reach","read","realize","rebuff","recall","receive","recite","recognize","recommend","record","reduce","reflect","refuse","regret","reign","reiterate","reject","rejoice","relate","relax","release","rely","remain","remember","remind","remove","repair","repeat","replace","reply","report","reprimand","reproduce","request","rescue","retire","retort","return","reveal","reverse","rhyme","ride","ring","rinse","rise","risk","roar","rob","rock","roll","rot","row","rub","ruin","rule","run","rush","sack","sail","satisfy","save","savor","saw","say","scare","scatter","scoff","scold","scoot","scorch","scrape","scratch","scream","screech","screw","scribble","seal","search","see","sell","send","sense","separate","serve","set","settle","sever","sew","shade","shampoo","share","shave","shelter","shift","shiver","shock","shoot","shop","shout","show","shriek","shrug","shut","sigh","sign","signal","sin","sing","singe","sip","sit","skate","skateboard","sketch","ski","skip","slap","sleep","slice","slide","slip","slow","smash","smell","smile","smoke","snap","snarl","snatch","sneak","sneer","sneeze","snicker","sniff","snoop","snooze","snore","snort","snow","soak","sob","soothe","sound","sow","span","spare","spark","sparkle","speak","speculate","spell","spend","spill","spin","spoil","spot","spray","sprout","sputter","squash","squeeze","stab","stain","stammer","stamp","stand","star","stare","start","stash","state","stay","steer","step","stipulate","stir","stitch","stop","store","storm","stow","strap","stray","strengthen","stress","stretch","strip","stroke","strum","strut","stuff","stun","stunt","stutter","submerge","succeed","suffer","suggest","suit","supply","support","suppose","surmise","surprise","surround","suspect","suspend","sway","swear","swim","swing","switch","swoop","sympathize","take","talk","tame","tap","taste","taunt","teach","tear","tease","telephone","tell","tempt","terrify","test","testify","thank","thaw","theorize","think","threaten","throw","thunder","tick","tickle","tie","time","tip","tire","toast","toss","touch","tour","tow","trace","track","trade","train","translate","transport","trap","travel","treat","tremble","trick","trickle","trim","trip","trot","trouble","trounce","trust","try","tug","tumble","turn","twist","type","understand","undress","unfasten","unite","unlock","unpack","untie","uphold","upset","upstage","urge","use","usurp","utter","vacuum","value","vanish","vanquish","venture","visit","voice","volunteer","vote","vouch","wail","wait","wake","walk","wallow","wander","want","warm","warn","wash","waste","watch","water","wave","waver","wear","weave","wed","weigh","welcome","whimper","whine","whip","whirl","whisper","whistle","win","wink","wipe","wish","wobble","wonder","work","worry","wrap","wreck","wrestle","wriggle","write","xray","yawn","yell","yelp","yield","yodel","zip","zoom","Tempt","fervor","intimate","playful","eager","wild","enthusiastic","vertex","vulnerable","intimate","relax ","vigorous","exquisite","exotic","skill","wrought","infuse","graceful","smother","powerless","exposed  ","errant","stimulate","excess","rich","meld","fuse","willingly","possess","arouse","entice","peak","tip","areola","contours","cock","flower","erection","hard-on","manhood","member","organ","rod","root","shaft","staff","Clit","bud","bundle","nub","pleasure ","bud","pussy","globes","mounds","backside","bottom","butt","rear","rear ","end","rump","climax","erupt","explode","peak","spasm","spend","spurt","weep","flex","brace","swallow","throb","pulse","ache"];

    $scope.listOfProfanityWords = [];
     $scope.listOfProfanity = [];
     $scope.listOfGoodWords =[];
    $scope.words = [];
    $scope.loggedin = null;
    $scope.tabsLimit = 6;
    $scope.caughtColor = "#7B1FA2";
    $scope.banndedUrlsList = [];
    $scope.searchTerm = "";
    $scope.stop = "no";
    $scope.themeList = [{
        color: "#F44336",
        active: true
            }];

    //Used to understand wha to overwrite
    $scope.blackList = [];
    $scope.whiteList = [];

    //this is fine.
    $scope.savedTheme = localStorage.getItem('theme');
    $scope.theme = (localStorage.getItem('theme') !== null) ? JSON.parse($scope.savedTheme) : $scope.themeList;
    $scope.themeStyle = (localStorage.getItem('theme') !== null) ? {
        'background-color': $scope.theme[0][0]['color']
    } : {
        'background-color': "#F44336"
    };
    $scope.themeStyleSides = (localStorage.getItem('theme') !== null) ? {
        'border-left': "2px solid " + $scope.theme[0][0]['color'],
        'border-bottom': "2px solid " + $scope.theme[0][0]['color']
    } : {
        'border-left': "2px solid " + "#F44336",
        'border-bottom': "2px solid " + "#F44336"
    };
    $scope.password = (localStorage.getItem('password') === null) ? null : localStorage.getItem('password');


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
        var getAmountOfTabs = document.getElementsByTagName("iframe").length;
        if (getAmountOfTabs !== $scope.tabsLimit) {


            $('.home').removeClass('active');
            $('.iframe').removeClass('active');
            var tabs = document.getElementById('tabs');
            var span = document.createElement("section");
            span.setAttribute("class", "home active ");
            span.setAttribute("id", "iframes" + getAmountOfTabs);
            span.setAttribute("ng-style", "themeStyle");



            var div = document.createElement("div");
            div.setAttribute("class", "urlText");

            var title = document.createElement("p");
            title.setAttribute("class", "title");
            title.innerHTML = "https://duckduckgo.com/?q=" + url;

            var exitTab = document.createElement("div");
            exitTab.setAttribute("class", "mdi-navigation-close");
            exitTab.setAttribute("id", getAmountOfTabs + "s");

            div.appendChild(title);

            var divBackdrop = document.createElement("div");
            divBackdrop.setAttribute("class", "backdrop");
            divBackdrop.setAttribute("class", "backdrop");
            divBackdrop.setAttribute("ng-style", "themeStyle");
            divBackdrop.appendChild(div);
            divBackdrop.appendChild(exitTab);
            var iframes = document.createElement("iframe");
            iframes.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
            iframes.setAttribute("src", "https://duckduckgo.com/?q=" + url);
            iframes.setAttribute("class", "iframe active  ");
            iframes.setAttribute("id", getAmountOfTabs);
            iframes.setAttribute("width", window.innerWidth);
            iframes.setAttribute("height", "100%");

            span.appendChild(divBackdrop);
            span.appendChild(iframes);
            tabs.appendChild(span);


            $('.iframe.active').on('load', function () { //binds the event 
                balance();
                checkForBannedUrl();
                setInterval(workHorse, 10000);


            });

            $(".mdi-navigation-close").on('click', function (event) {

                if (getAmountOfTabs !== 0) {
                    removeWindow(event.target.id);
                }

                event.stopPropagation();

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
     * Remove unneeded Windows
     * @param {none} none 
     * @param {none} none
     * @return {none} none
     */
    function removeWindow(id) {

        var parent = document.getElementById("tabs");
        var child = document.getElementById("iframes" + id.replace('s', ''));
        parent.removeChild(child);
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
                $scope.searchResult("http://projectbird.com");
                $scope.setColor("#000");
                break;
            }
            $scope.searchTerm = currentUrlNow;
            $scope.apply;

        }
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


      $scope.words = $scope.words.filter(function(x) { return listOfVerbs.indexOf(x) < 0 })
       var temp = classifier.categorize(unique($scope.words).toString());
       var stateJson = classifier.toJson();

        console.log(classifier.toJson());

            console.log("Current Page is " + temp);
        }


// => 'positive'

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
        var usersRef = ref.child($scope.loggedin).child("children").child(removeRegexForMac(ip));
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
        var usersRef = ref.child(id).child("children").child(removeRegexForMac(ip));
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
            success: function (data) {

                data.response === "true" ? $scope.listOfProfanity.push(word) : null;
                callback(data.response);
            },
            error: function (e) {
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
        ref.child("users").startAt(email).endAt(email).once('value', function (snapshot) {
            setIpAddress(id.uid);
            $scope.password = $('input[name="loginpassword"]').val();
            localStorage.setItem('password', $('input[name="loginpassword"]').val());

        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }


    /**
     * Get profanity words
     * @param {none} none
     * @param {none} none
     * @return {object} snapshot
     */
    function getProfanityWords() {
      
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

            ref.child(authData.uid).on("child_changed", function (snapshot) {
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
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        } catch (e) {
            // statements to handle any exceptions
        }
    


    try {


        ref.child("profanity").on('child_added', function (snapshot, prevChildKey) {

           for (var q in snapshot.val()) {    

            if (snapshot.val()["type"] === "good") {
              
                         $scope.listOfGoodWords.push(snapshot.val()["word"]);
                         classifier.learn($scope.listOfGoodWords.toString().toLowerCase(), 'positive');

                    } else {
                
                      $scope.listOfProfanityWords.push(snapshot.val()["word"]);
                                  classifier.learn($scope.listOfProfanityWords.toString(), 'negative');
                    
                }
          }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }catch (e){

    }





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
