myApp.directive('menu',function(){
	var menu;
	menu = function(a,b,c){
		var select = document.getElementsByClassName('programsMenu')[0];
		var menu = document.getElementsByClassName('menuItem')[0];
		menu.onclick = function(){
			if(select.style.display === 'none' || select.style.display === ''){
				select.style.display='block';
			}else{
				select.style.display='none';
			};
		}
	}
	return{
		restrict :'A',
		link: menu
	}
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
myApp.directive('createBtn', function(){
	var createBtn;
	createBtn = function(a,b,c){
		var createBtn = document.getElementById('createBtn');
		var pass1 = document.getElementById('pass1');
		var pass2 = document.getElementById('pass2');
		createBtn.onclick = function(){
				if(pass2.value != pass1.value){
				pass2.style.border='1px red solid';
				console.log('1 doesn\'t match 2')
			}else if(pass2.value === pass1.value){
				pass2.style.border='';
			}
		};
	}
	return{
		restrict: 'A',
		link: createBtn
	}
});
myApp.directive('createAccount', function(){
	var createAccount;
	createAccount = function(a,b,c){
		var createAccount = document.getElementById('createAccount');
		createAccount.onclick = function(){
			console.log('trying to create an account');
			var enterAccount = document.getElementById('enterAccount');
			var newAccount = document.getElementById('newAccount');
			var frame = document.getElementsByClassName('frame')[0];
			enterAccount.style.display='none';
			newAccount.style.display='block';	
		}
	}
    return{
    	restrict: 'A',
    	link: createAccount
    }
});
myApp.directive('login', function(){
	var login;
	login = function(a,b,c){
		var login = document.getElementById('login');
		login.onclick = function(){
			console.log(a.users.firstName)
			var logView = document.getElementById('loginView');
			var userR = document.getElementById('user');
			var pass = document.getElementById('pass');
			var userBox = [];
			var passBox = [];
			var userName = a.users.firstName;
			var fnBox =[];
			//console.log("this is a directive bitch " + a.users.length);
			for(var i = 0; i < a.users.length; i++){
				console.log(a.users.length)
				console.log("username: " + a.user.email);
				var single = a.users[i].email; 
				var pass = a.users[i].pass1;
				var fn = a.users[i].firstName;
				var blaine = 'blaine';
				userBox.push(single);
				passBox.push(pass);
				fnBox.push(fn);
				console.log('USERNAME: ' + userBox[i]);
				console.log('PW: ' +passBox[i]);
				console.log()
				console.log("pw: " +a.user.pass1)
					if(a.user.email === userBox[i] && a.user.pass1 === passBox[i]){
						console.log('You\'ve logged in!!!! via the directive ' + fnBox[i]);
						// user.style.border="";
						// pass.style.border="";
						loginView.style.display='none';
						a.beenTrill = fnBox[i];
					}else if(a.users.email === "" && a.users.pass1 === ""){
						// user.style.border="1px red solid";
						// pass.style.border="1px red solid";
					}
			}	
		}
	}
	return{
		restrict: 'A',
		link: login
	}
});
myApp.directive('makeNewPro', function(){
	var makeNewPro;
	makeNewPro = function(a,b,c){
		var makeNewPro = document.getElementById('makeNewPro');
		makeNewPro.onclick = function(){
			var select = document.getElementsByClassName('programsMenu')[0];
			var newPro = document.getElementsByClassName('newPro')[0];
			var intro = document.getElementsByClassName('intro')[0];
			newPro.style.display='block';
  			intro.style.display='none';
  			select.style.display='none';
		};
	}
	return{
		restrict: 'A',
		link: makeNewPro
	}
});
