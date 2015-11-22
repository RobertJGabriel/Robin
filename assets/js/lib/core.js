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
    
    $scope.themeList = [{color: '#F44336',active: true}];
    $scope.banndedUrls = (localStorage.getItem('banndedUrls') !== null) ? JSON.parse($scope.saved) : $scope.banndedUrlsList;
    $scope.savedTheme = localStorage.getItem('theme');
    $scope.theme = (localStorage.getItem('theme') !== null) ? JSON.parse($scope.savedTheme) : $scope.themeList;
    $scope.themeStyle = (localStorage.getItem('theme') !== null) ? {'background-color': $scope.theme[0][0]['color']} : console.log('no color set');
    localStorage.setItem('banndedUrls', JSON.stringify($scope.banndedUrls));


    $scope.left = function () {
        return 100 - $scope.message.length;
    };


    $scope.clear = function () {

        $scope.message = "";
    };

    $scope.save = function () {
        alert("Note Saved");
    };


});
