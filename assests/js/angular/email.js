app.controller("email", function($scope) {


    $scope.user_Information = localStorage.getItem('userInfo');

    $scope.user_Email =  (localStorage.getItem('userInfo')!==null) ? JSON.parse($scope.user_Information) : $scope.requestInformation(); ;
    


$scope.requestInformation = function() {

alert('need your stuff :-O ');
};


$scope.sendEmail = function() {
$.ajax({
  type: 'POST' ,
  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
  data: {
    'key': 'k4nTg_AnBIf50E0OVkm6HQ',
    'message': {
      'from_email': 'robert_gabriel@outlook.com',
      'to': [
          {
            'email': 'robert_gabriel@outlook.com',
            'name': 'RECIPIENT NAME (OPTIONAL)',
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': 'YOUR SUBJECT HERE!',
      'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 });


};


});
