//Dev Tools
require('nw.gui').Window.get().showDevTools();

var firebase = require('firebase');
// Initialize the app with a service account, granting admin privileges
firebase.initializeApp({
  serviceAccount: {

      "type": "service_account",
      "project_id": "projectbird-robin",
      "private_key_id": "15e9235d7b03e29597f7f3921d2aeacdc2414b65",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCVvmUiliqgfFvf\nxiza3QiszD0/zzs9y/tiZ+rpaXhoK6sQAEzUyaaMcEJebhA/j3WhXebiM5O9gkab\ntc/oxV+5s7lck1sAZBbz1FB/0lr1L3Lhk9DqVQMCjWP1VcG+se5XvhE2jB6TWJ9s\nH4QPBWG292szbHVK7szmyTyCErAy2tBI7D49mv4+sYJ2Yr9QukUkFB9P44nfe2e0\nwafLCw7CheJJmKHwLpTD1u65VLmtnI1nlcfF14qDa242i7f8gb+dbj/MZXetecpx\nlZroGqcQdU66MrfXPOUMbSzZAX2eUI4AzS4Z0a9mbb8v4X7X6nbJ+w3idglBLM7a\nbnYS1TTZAgMBAAECggEAWylwNKArD0zmOdNSF2QdFeW5HBGzRSnbvsr47mSxUunS\n2Ij2PU0OQc1N+mMTLT7PJBAgsXEo7mRTTBRhoJoYbtuFa2CiNBi7CHInF8oeacob\nLE1rEF302SbuxbsRmmCEc5JYtFaVfqqjU5XUNbjXBiaWctYCij3bLF0yoxVxg2NV\nLLqjGGw/F8KwVSxC07l5IKueYK/gR7BEpxnoAKFSuJwDRCQFWgaS063gDxQdufVK\n6BA+3D7dcaZUDaZkcyfgJib12DGUwxzkPJ1uA/wHDRky1JduPISEZyU+K10EylND\nVzAUigegZTUxRGIeloHI8rOVeCoqDSPCe46D0iqjqQKBgQDoQ23jfUaAhK8qnYQi\ncXGA3HDX8pNakMLMgK1o5jc7qjhFMxPM4foq8zbmoRArep4W6Ut8jd5ibuKmsjHq\nzCMJtwmvq/3l1+SIqCpWoYrm7B3RGxNWhOS2dgPIfxQmMbCeVOVQEv7rcH8bVhwq\ne4yMJBUw4kxsdLBJfmoQc1cgmwKBgQClDA1jn+5/7wxW2NpaMYb5a1Ihd67OnaBC\nqWRq3j+i7yTYSMoK2ZdPRnapHRrHoAo5lJycHOx0Q8ktBiNaBKWTylig6s5T9pqW\nNCAQGf5CYwp00dX4v4U7VSWQB6ywcvoC4RNOzMejA4MI3Bj0Q+5TpGsxtge+3H1y\ngzb5h1NVmwKBgFSexHl+WeJW9Q68prh5xlWhesdijIcReLdTJlqyjWsCgE/N5Sff\nKOrfA6CRC7gbi19jjeoKMfyA07jR8VfPGfDfK/tB2VYVCyEyy4IWhunNGqvlhm0e\nK8nCQ2yXx/qGXgfBfG5pDVEwAk8uV0KvEqy4NLRDrn5RIS0VjoUB0LuDAoGAUcwH\nVriMmxr+IoyWqtyg6DwoGC4YlI3KPz90ZQKAx19+AzMP7xCnzMI/TND/1K+cYa0l\ncLlk9rohmg7QtmxXI0fFZPr6BuLQ+mAbA9/eA0jShdL5GK7SePVaCGfFTi2ten/R\n8dvLlR7IcjuiomyIUSvLdHeinxTnlzkwpbpLssECgYBitlBbrOyKuDy9erNlvfe6\nYbcQ1MPevPHY9sIhJjxmLrgMTmn6yOML6GImlKFxiNU7kwlpdGb1iIGKDof4mOG/\njntwSpSN4mueVt5wnOLFysf20HFIfbF8pZl0e9IsrlnId7c7rxxjQM4anZotgon9\nB6HPc2nkOGhv0v83YEsH2Q==\n-----END PRIVATE KEY-----\n",
      "client_email": "desktoprobin@projectbird-robin.iam.gserviceaccount.com",
      "client_id": "106804725117141413855",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/desktoprobin%40projectbird-robin.iam.gserviceaccount.com"
  },
  databaseURL: "https://projectbird-robin.firebaseio.com"
});

var db = firebase.database();
var ref = firebase.database().ref();
var authData = firebase.database().ref().auth();
var osenv = require('osenv');
var user = osenv.user();
var async = require('async');
var mrscraper = require("scraper-web");
var usersMacAddress = null;
var natural = require('natural');
var classifier = new natural.BayesClassifier();
var macAddress = require('getmac').getMac(function(err, macAddress) {
    usersMacAddress = macAddress;
});


var app = angular.module('robin', []);



app.controller('controller', function($scope) {
    $scope.listOfProfanityWords = [];
    $scope.listOfProfanity = [];
    $scope.listOfGoodWords = [];
    $scope.browser = [];
    $scope.words = [];
    $scope.loggedin = null;
    $scope.tabsLimit = 6;
    $scope.caughtColor = "#7B1FA2";
    $scope.banndedUrlsList = [];
    $scope.searchTerm = "";
    $scope.stop = "no";
    $scope.workHorses;
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










});
