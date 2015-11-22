var app = angular.module('robin', []);
app.controller('controller', function ($scope) {

    $scope.saved = localStorage.getItem('banndedUrls');
    $scope.banndedUrlsList = [{
        text: 'porn',
        done: false
    }, {
        text: 'sex',
        done: false
    }, {
        text: 'facebook',
        done: false
    }, {
        text: 'twitters',
        done: false
    }, {
        text: 'rob',
        done: false
    }];

    $scope.themeList = [{
        color: '#F44336',
        active: true
    }];
    $scope.banndedUrls = (localStorage.getItem('banndedUrls') !== null) ? JSON.parse($scope.saved) : $scope.banndedUrlsList;
    $scope.savedTheme = localStorage.getItem('theme');
    $scope.theme = (localStorage.getItem('theme') !== null) ? JSON.parse($scope.savedTheme) : $scope.themeList;
    $scope.themeStyle = (localStorage.getItem('theme') !== null) ? {
        'background-color': $scope.theme[0][0]['color']
    } : console.log('no color set');
    localStorage.setItem('banndedUrls', JSON.stringify($scope.banndedUrls));



    $scope.addLocalStorage = function () {
        alert('you clicked save');
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
        }
    }

    $scope.clearLocalStorage = function () {
        alert('you clicked clear ');
        $scope.banndedUrls = [];
        $scope.removeLocalStorage('banndedUrls');
        $scope.removeLocalStorage('theme');
        $scope.loadDefault();
        console.log('Reset');
    };

    $scope.removeLocalStorage = function (key) {

        localStorage.removeItem(key);
    };



    $scope.showTabs = function (key) {

        alert('Show Tabs');
    };
    $scope.goBack = function () {

        alert('You clicked the Go Back Window');
    };

    $scope.goForword = function () {

        alert('You clicked the Go Forword Window');
    };

    $scope.refresh = function () {

        alert('You clicked the refresh Button');
    };

    $scope.home = function () {

        alert('You clicked the home Button');
    };

    $scope.createTab = function () {

        alert('You clicked the create Tab Button');
    };


});
