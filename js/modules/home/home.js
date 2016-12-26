	var Vue = require('../../lib/2vue.js');
	// 定义home组件
	var HomeComponent = Vue.extend({
		template: $('#tpl_home').html(),
		// props:['key'],
		data:function(){
			return {
				navjson1:[],
				navjson2:[],
				homejson:[],
				searchKey:"",
				myKey:""

			}
		},

		created:function(){
			var me = this;
			$.get("data/nav.json",function(res){
				me.navjson1 = res.data.type1;
				me.navjson2 = res.data.type2;

			});

			$.get("data/home.json",function(res){
				if(res && res.errno == 0){
					me.homejson = res.data.list;
				}
			})
				
		},
		ready:function(){
			setTimeout(function(){
					var mySwiper = new Swiper ('.swiper-container', {
	    			direction: 'horizontal',
	    			loop: true,
	    			// 如果需要分页器
	    			pagination: '.swiper-pagination',
  				});
			},1)

			var spans = document.getElementsByClassName('timeout')[0].getElementsByTagName('span')
	
			setInterval(function(){
				var t1 = new Date("2016-12-26 14:00:00");
				var t2 = new Date();
				//毫秒数
				var msdiff = t1 - t2;
				//方法2：
				var D = parseInt(msdiff / 1000 / 60 / 60 / 24);
				var H = parseInt(msdiff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
				var M = parseInt(msdiff % (1000 * 60 * 60) / 1000 / 60);
				var S = parseInt(msdiff % (1000 * 60) / 1000);
				if(H < 10){
					H = "0" + H;
				}
				if(M < 10){
					M = "0" + M;
				};
				if(S < 10){
					S = "0" + S;
				};
				var arr = [D,H,M,S];

				for(var i = 0 ; i < arr.length ; i++){
					spans[i].innerHTML = arr[i];
				}
			},1000);
			// goTop事件
			$(window).scroll(function(){
       			var scrollTop = $(window).scrollTop(); //方法！
      			 // console.log($(window).scrollTop())
      			 if($(window).scrollTop()>30){
      			 	$('header').css({'position':'fixed',
                   'z-index':13
      			   })	
      			 }else{
      			 	$('header').css({
      			 		'position':'relative',
                        'z-index':0
      			 	})
      			 }
				if($(window).scrollTop() > 250){
					$(".goTop").css("display","block")
				}
				if($(window).scrollTop() < 250){
					$(".goTop").css("display","none")
				}
					
    		})

		},
		methods:{
			displayb:function(){
				// console.log(this)
				$('.addressPage').css({
					'position':'fixed',
					'display':'block',
                     'z-index':15
			})
			},
			goback:function(){
				$('.addressPage').css({
					'display':'none'
				})
			},
			showclose:function(){
				// console.log($(this.$el))
				// this.$el.getElementsByClassName(".search1")
				$(".search1").animate({"width":"90%"}, 250,function(){
				
					$(".close").css("display","block")
				});
			},
			closeinput:function(){
				$(".close").css("display","none");
				$(".search1").animate({width:"100%"}, 250);
			},
			goTop:function(){
				
				$("html,body").animate({
       				"scrollTop" : 0
    			},200);
			},
			goSearch:function(){
				this.myKey = this.searchKey
				// console.log(this.myKey)
			}
		}
	})
	return HomeComponent;
