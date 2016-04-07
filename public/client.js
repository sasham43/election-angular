var app = angular.module('electionApp', []);

console.log('client.js loaded');

app.controller('ElectionController', function($scope, $http){
  $scope.dems = [];
  $scope.repubs = [];

    $scope.winnerPicked = false;

  $scope.listPoliticians = function(){
    $http.get('/democrats').then(function(response){
      console.log(response);
      $scope.dems = response.data;
    });

    $http.get('/republicans').then(function(response){
      console.log(response);
      $scope.repubs = response.data;
    });
  }

  $scope.pickWinner = function(){
    var partyPicker = Math.floor(Math.random() * 10);
    var winnerList = [];

    if (partyPicker >= 0 && partyPicker <= 4){
      winnerList = $scope.dems;
    } else {
      winnerList = $scope.repubs;
    }

    var winnerPicker = Math.floor(Math.random() * 10);
    $scope.winner = winnerList[winnerPicker];
    $scope.winnerPicked = true;
  }

});
