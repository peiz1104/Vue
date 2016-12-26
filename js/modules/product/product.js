	var Vue = require('../../lib/2vue.js');
	// 定义产品组件
	// 定义组件类
	var ProductComponent = Vue.extend({
		template: $('#tpl_product').html(),
		data: function () {
			return {
				data: {}
			}
		},
		// 请求数据
		created: function () {
			// 缓存this
			var me = this;
			// 请求数据
			$.get('data/product.json', function (res) {
				// 如果请求成功保存数据
				if (res && res.errno === 0) {
					// 缓存数据
					me.data = res.data;
				}
			})
		}
	})

	// 暴漏接口
	return ProductComponent;
