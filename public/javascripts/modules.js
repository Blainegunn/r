var myApp = angular.module('myApp', ["firebase"]);

// myApp.config(function($routeProvider){
// 	$routeProvider
// 	.when('/blaine',
// 	{
// 		template: 'Blaine is working',
// 	})
// });

myApp.factory('informations', function($firebase){
	var ref = new Firebase("https://rubydust.firebaseio.com/");
	$scope.info = $firebase(ref);
})

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
		preview: 'preview'
	}
});
myApp.controller('saveCtrl', function ($scope, $firebase){
	var ref = new Firebase("https://rubydust.firebaseio.com/");
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
myApp.controller('footerCtrl',function($scope, btns){
	$scope.previewBtn = {

	}
})
myApp.controller('loginCtrl', function($scope, $firebase){
	$scope.login = function(){
		var logView = document.getElementById('loginView');
		var user = document.getElementById('user');
		var pass = document.getElementById('pass')
		if(user.value != "$scope.info.user" && pass.value != "") {
			console.log('user in');
			user.style.border="";
			pass.style.border="";
			loginView.style.display='none';
		}else if(user.value === "" && pass.value === ""){
			user.style.border="1px red solid";
			pass.style.border="1px red solid";
		}else if(user.value != "" && pass.value === ""){
			user.style.border="";
			pass.style.border="1px red solid"
		}		
	}
})

myApp.controller('menuCtrl', function($scope){
	$scope.settingsMenu = function(){
		var select = document.getElementsByClassName('settingsMenu')[0];
		if(select.style.display === 'none'){
			select.style.display='block';
			}else{
			select.style.display='none';
			};
	};
	$scope.programsMenu = function(){
		var select = document.getElementsByClassName('programsMenu')[0];
		if(select.style.display ==='' || select.style.display ==='none' ){
			console.log('empty');
			select.style.display='block';
			select.onmouseleave = function(){
				select.style.display='none';
			};
		}
		// else if(select.style.display ==='block'){
		//   console.log('him here!');
		//   select.style.display='none';
		// }
		// else if(select.style.display ==='block'){
		// 	console.log('not empty');
		// 	select.style.display='none';
		// }else{
		// 	select.style.display='';
		// }
	}
});


myApp.controller('peopleCtrl', function($scope){
	$scope.name = {
		bg: 'Blaine R. Gunn'
	}
});

myApp.directive('newProgram', function(){
	var np = {};
	np.restrict = 'E';
	//np.templateUrl = '/newPro.base';

	return np;
});

myApp.directive('btns', function(){
	var preBtn;
	preBtn = function(a, b, c){
		preview = document.getElementsByClassName('preBtn')[0];
		close = document.getElementById('close');
		preview.onclick = function(){
			document.getElementById('program').style.display='block';
		};
		close.onclick = function(){
			document.getElementById('program').style.display='none';
		};
	};
	return {
		restrict: 'E',
		link: preBtn
	};
});
















