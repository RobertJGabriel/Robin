app.controller("myNoteCtrl", function($scope) {

    $scope.saved = localStorage.getItem('banndedUrls');
    $scope.banndedUrls =  (localStorage.getItem('banndedUrls')!==null) ? JSON.parse($scope.saved) : [ {id: 1,text: 'Learn AngularJS', done: false}, {id:2,text: 'Build an Angular app', done: false} ];
    localStorage.setItem('banndedUrls', JSON.stringify($scope.banndedUrls));
  
    $scope.addLocalStorage = function() {
        console.log($scope.banndedUrls[0].bannedUrlText);
        $scope.newID = $scope.banndedUrls.length + 1 ;
        console.log($scope.bannedUrlText );
        $scope.banndedUrls.push({
            id: $scope.newID ,
            text: $scope.todoText,
            done: false
        });
       // $scope.todoText = ''; //clear the input after adding
        localStorage.setItem('banndedUrls', JSON.stringify($scope.banndedUrls));
    };
});
