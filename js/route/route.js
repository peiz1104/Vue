	var app = require('../modules/app');

	function route(){
		var hash = location.hash;
		hash = hash.slice(1);
		hash = hash.replace(/^\//,"");
		hash = hash.split('/');
		var map = {
			home:true,
			list:true,
			product:true
		};

		if(map[hash[0]]){
			app.view = hash[0]
		}else{
			app.view = 'home'
		}
		
	}
	window.addEventListener('hashchange',route);
	
	return route;
