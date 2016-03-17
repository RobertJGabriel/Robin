var parser = require("scraper-web");
parser("http://www.projectbird.com", function (words2) {
    console.log(words2);
});