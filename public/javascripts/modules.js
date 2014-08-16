//new mods
var myApp = angular.module('myApp', ["firebase"]);

myApp.factory('informations', function($firebase){
	var box = {name: 'Blaine', age: 26} ;


	return {
		all: function(){
			return box;
		}
	};
});
myApp.controller('saveCtrl', function($scope, $firebase){
	var ref = new Firebase("https://rubydust.firebaseio.com/test");
	$scope.info = $firebase(ref);
	$scope.addMessage = function(e) {
	  //if (e.keyCode != 13) return;
	  $scope.info.$set({
	  	ward: $scope.info.ward, 
	  	date: $scope.info.date,
	  	presiding: $scope.info.presiding,
	    conducting: $scope.info.conducting,
	    chorister: $scope.info.chorister,
	    organist: $scope.info.organist,
	    oHymn: $scope.info.oHymn,
	    oPrayer: $scope.info.oPrayer,
	    wardBiz: $scope.info.wardBiz,
	    sacHymn: $scope.info.sacHymn,
		speakers: $scope.info.speakers,
		iHymn: $scope.info.iHymn,
		cHymn: $scope.info.cHymn,
		cPrayer: $scope.info.cPrayer,
	  });
	  //$scope.info.$add({name: $scope.team});
	  $scope.msg = "";
	  $scope.quantity = 1;
	};
});
myApp.controller('userCtrl', function($scope, $firebase){
	var ref = $firebase(new Firebase("https://rubydust.firebaseio.com/users"));
	$scope.user = {};
	$scope.showError = false;
	ref.$on('loaded', function(data){
			var arr = [];
			for(var key in data){
				arr.push(data[key]);
			};
		$scope.users = arr;
		$scope.createUser = function(e) {
		  //if (e.keyCode != 13) return;
		  console.log('user created');

		  ref.$add({
			firstName: $scope.user.firstName,
			lasttName: $scope.user.lastName,
			email: $scope.user.email,
			pass1: $scope.user.pass1,
			pass2: $scope.user.pass2,
		  });
		  $scope.quantity = 1;
		};
		
		var userBox = [];
		var passBox = [];
		var userName = $scope.user.firstName;
		$scope.login = function(){
			console.log('working');
			// for (var i = 0; i < arr.length; i++) {
			// 	var single = $scope.user[i].email; 
			// 	var pass = $scope.user[i].pass1;
			// 	userBox.push(single);
			// 	passBox.push(pass);
			// 	// console.log($scope.user.email);
			// 	// console.log(userBox[i]);
			// 	// console.log(passBox[i]);
			// 	// console.log($scope.user.pass1)
			// 	if($scope.user.email === userBox[i] && $scope.user.pass1 === passBox[i]){
			// 		//console.log('You\'ve logged in!!!!');
			// 	}
			// };
		} 
	});
});

myApp.controller('strCtrl', function($scope){
	$scope.str = {
		programs: 'My Programs',
		wards: 'My Ward',
		distribution: 'Distribution',
		settings: 'Settings',
		make: 'make new program',
		welcome: 'Welcome to the Program',
		ward: 'ward',
		date: 'date',
		presiding: 'presiding',
		conducting: 'conducting',
		chorister: 'chorister',
		organist: 'organist',
		oHymn: 'opening hymn',
		oPrayer: 'incovation',
		wardBiz:'ward business',
		sacHymn:'scrament hymn',
		admin: 'Administration and Passing of the Sacrament',
		speakers: 'speakers',
		iHymn: 'intermediate hymn',
		cHymn: 'closing hymn',
		cPrayer: 'benediction',
		save: 'save',
		preview: 'preview',
		winSize: window.innerHeight
	}
});
myApp.controller('loginCtrl', function($scope, $firebase, informations){
	$scope.test = informations.all();
})
















