var mrscraper = require('scraper-web');
var profanityCheck = require('profanity-check');
var chalk = require('chalk');



var getText = function (callback) {
    mrscraper("http://sexetc.org", function (response) {
        typeof callback === 'function' && callback(response);
    }, function () {
        alert("fail");
    });
};




var getProfanity = function (word, callback) {



    profanityCheck(word, function (response) {
        if (response === "true") {
            typeof callback === 'function' && callback(word);
        }
    }, function () {
        alert("fail");
    });




};


getText(function (words, callback) {
    var x = [];

    for (i = 0; i < words.length; i++) {
        getProfanity(words[i], function (callback) {
            x.push(callback.toLowerCase());
        });
    };








    setTimeout(function () {

uniqueArray = x.filter(function(elem, pos) {
    return x.indexOf(elem) == pos;
})


    console.log("Amount of Words on page :" + chalk.blue(words.length));
    console.log("Amount of Profonaity words page and Percentage :" + chalk.red(uniqueArray.length));
    console.log(uniqueArray);

    }, 5000);
});