//var app = angular.module("myapp", ["firebase"]);

// app.controller('MyController', function ($scope, $firebase){
//         var ref = new Firebase("https://rubydust.firebaseio.com/");
//         $scope.info = $firebase(ref);
//         $scope.addMessage = function(e) {
//           //if (e.keyCode != 13) return;
//           // $scope.info.$set({name: $scope.name, age: $scope.age});
//           // $scope.info.$add({name: $scope.team});
//           $scope.msg = "";
//           $scope.quantity = 1;
//         };
//       });


// myapp.controller("MyCtrl", function($firebase) {
//    var ref = new Firebase("https://rubydust.firebaseio.com/");
//    var sync = $firebase(ref);

//    // if ref points to a data collection
//    $scope.list = sync.$asArray();

//    // if ref points to a single record
//    $scope.rec = sync.$asObject();
// });