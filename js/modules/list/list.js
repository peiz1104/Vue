	var Vue = require('../../lib/2vue.js');
	// 定义list组件
	var ListComponent = Vue.extend({
		template:$("#tpl_list").html(),
		// props:['key'],
		data:function(){
			return {
				listjson:[],
				list_json:[],
				other:[],
				searchKey:"",
				myKey:"",
				 type: [
                    {value: '价格排序', key: 'price'},
                    {value: '销量排序', key: 'sales'},
                    {value: '好评排序', key: 'evaluate'},
                    {value: '优惠排序', key: 'discount'}
                ]
			}
		},

		created:function(){
			var me = this;
			// console.log(me)
			$.get('data/list.json',function(res){
				if(res && res.errno==0){
					me.listjson = res.data;
					for(var i = 0;i < res.data.length;i++){
						me.list_json.push(res.data[i].imglist.slice(0,3));
						me.other.push(res.data[i].imglist.slice(3));
					}
				}

			})
		},
		methods:{
			removehome:function(){
				$(".removehome").css({"padding":"0 0 3px 4px","background":"none"});
				$(".home_pic").css("display","none");
				$(".close1").css("display","block")
			},
			showhome:function(){
				$(".close1").css("display","none");
				$(".home_pic").css("display","block");
				$(".removehome").css({"padding":"0 0 0 25px","background":"url(../img/static/homesearch.png) 5px center no-repeat"});
				$(".removehome").css("backgroundSize","17px auto")
			},
			loadMore:function(index){
				var newList_json = [];
				var newOther = [];
				// 获取list_json
				for(i = 0;i < this.list_json.length;i++){
					if(i===index){
						newList_json[i] = [].concat(this.list_json[i],this.other[i])
					}
					else{
						newList_json[i] = this.list_json[i]
					}
				};
				// 获取other
				for(i = 0;i < this.other.length;i++){
					if(i===index){
						newOther.push([])
					}
					else{
						newOther.push(this.other[i])
					}
				};
				this.list_json = newList_json;
				this.other = newOther
			},
			 changeType:function(key){
                //如果是优惠就要做特殊处理
                if(key==='discount'){
                    //用sort对list数组排序
                    this.listjson=this.listjson.sort(function(a,b){
                        //a,b参数为在list数组中要进行比较的项
                        //差价为原价减去现价
                        var adiscount= a.orignPrice- a.price;
                        var bdiscount= b.orignPrice- b.price;
                        //正序前面减后面的
                        return adiscount-bdiscount;
                    })
                }else{
                    this.listjson=this.listjson.sort(function(a,b){
                        return b[key]-a[key]
                    })
                }
            },
			goSearch:function(){
				this.myKey = this.searchKey
			}
		}
	})

	return ListComponent;
