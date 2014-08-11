var app = angular.module("myapp", ["firebase"]);

app.controller('MyController', function ($scope, $firebase){
        var ref = new Firebase("https://rubydust.firebaseio.com/");
        $scope.info = $firebase(ref);
        $scope.addMessage = function(e) {
          //if (e.keyCode != 13) return;
          $scope.info.$set({name: $scope.name, age: $scope.age});
          $scope.info.$add({name: $scope.team});
          $scope.msg = "";
          $scope.quantity = 1;
        };
      });


