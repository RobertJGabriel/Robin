require('events').EventEmitter.prototype._maxListeners = 100;
var Firebase = require('firebase');

var ref = new Firebase('https://projectbird-robin.firebaseio.com');
var authData = ref.getAuth();
var request = require('request');
var async = require('async');
var mrscraper = require('scraper-web');
var chalk = require('chalk');
var bayes = require('bayes')

var classifier = bayes()



function init(type,url23) {
	console.log(chalk.red('Starting Import........'));
    request(url23, function(err, response,body) {
        var url = JSON.parse(body);
        for (var i = 0; i < url.length; i++) {
            if (type == "notSafe"){
                downloadCall(type,"http" + "://" + url[i].domain);
            }else{
                console.log(url[i].site);
                downloadCall(type,"http" + "://" + url[i].site);
            }
           
            if (i == url.length-1){
            	console.log(chalk.green('Finished Import'));
            }
        }

    });

}


function downloadCall(type,url2) {
    async.waterfall([
        async.apply(myFirstFunction, url2)
    ], function(err, words) {
        var newChildRef = ref.push();
        var usersRef = ref.child("profanity");
        if ((words != null)  && (typeof words[0] !== 'undefined')){
            for (var q in words) {    
                if (words[q] !== ""){
                     usersRef.push({
                      word:  words[q].replace(/[^\w\s]/gi, ''),
                      type: "good"
                    });
                }
               
            }

        }

    });

    function myFirstFunction(url, callback) {
        mrscraper(url, function(response) {
            callback(null, response);
        });
    }
};


//init("notSafe","http://blocked-sites.herokuapp.com/");
init("safe","https://raw.githubusercontent.com/RobertJGabriel/List-Of-Explicit-Words/master/TopSites.json");



