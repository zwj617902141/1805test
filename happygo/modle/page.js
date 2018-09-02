define(function(){
	
class Page{
//			接收各种用户参数,保存到对象身上
			constructor(options){
				this.url = options.url;
				this.list = options.list;
				this.num = options.num;
//				默认页码为0
				this.index = 0;
//				开始请求数据
				this.load()
			}
			load(){
				var that = this;
				$.ajax({
					url:this.url,
					type:"get",
					success:function(res){
//						请求成功之后,渲染页面,生成页码
						that.res = res;
						console.log(that.res.length)
						that.display();
						that.createPage();
					}
				})
			}
			display(){
//				var str = "";
	       var str = "<ul class='con_ul'>";
//				this.num*this.index ~~ this.num*this.index+this.num
//				计算出当前页面显示的对应数据
				for(var i=this.num*this.index;i<this.num*this.index+this.num;i++){
//					判断索引是否超过数据的长度
					if(i<this.res.length){
						console.log(111)
						    str +=`<li>
						    <a href="goodsDetail.html?shoesId=${this.res[i].id}">
						    <div ><img src="${this.res[i].imgUrl}"/></div>
						    <p> ${this.res[i].title}</p>
						    <p> ￥${this.res[i].price}</p>
						    </a>
						    </li>`;
   					}
					}
						    str += "</ul>";
						    this.list.html(str)
			}
			
			
			
			createPage(){
				var that = this;
//				使用分页插件
				$(".pagination").pagination(this.res.length,{
					items_per_page:this.num,
					prev_text:"上一页",
					next_text:"下一页",
					callback:function(index){
//						将当前页码存到当前对象上
						that.index = index;
//						修改页码之后,重新渲染页面
						that.display()
					}
				})
			}
		}	
	
	return 		new Page({
			url:"http://localhost/happygo/data/list.json",
			list:$(".content"),
			num:8
		})
})

		
//		$("#setPage").change(function(){
//			new Page({
//				url:"http://localhost/1805/jq-page/data/list.json",
//				list:$("#list ul"),
//				num:parseInt($(this).val())		//巨坑:记得转成数值
//			})
//		})
		
		
//		执行的时候,传递参数进去,传url,传容器,传单页数目
//		new Page({
//			url:"http://localhost/happygo/data/list.json",
//			list:$(".content"),
//			num:8
//		})