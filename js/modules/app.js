
	var HomeComponent = require('home/home');
	var ListComponent = require('list/list');
	var ProductComponent = require('product/product');
	var Vue = require('../lib/2vue.js');
	Vue.component('home',HomeComponent);
	Vue.component('list',ListComponent);
	Vue.component('product',ProductComponent);

	var app = new Vue({
		el:"#app",
		data:{
			view:'home'
		},
	})
	
	// module.exports = app;
	return app;
