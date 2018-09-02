class Details{
	constructor(options){
		this.url=options.url
        this.content=options.content
        this.MagnifierMain=options.MagnifierMain
        this.Deatail=options.Deatail;
        this.load()
	}
	load()
	{
		console.log(1111)
		this.id=this.getUrlParam('shoesId'),
		this.display()
		this.init()
	}
	
	getUrlParam(name){
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
   var r = window.location.search.substr(1).match(reg); //匹配目标参数
   if (r != null) return unescape(r[2]); return null; }
   
   display(){
   	
   	var that =this
   	$.ajax({
type:'get',
url:"http://localhost/happygo/data/list.json",
//dataType:'json',
success:function(res,status){
	
   console.log(status)
   var str = ""
var str1=""
var str2=""
   $.each(res, function(idx,val) {
   
    //根据id获取详情数据

    if(that.id == val.id){
    str = `<li  class="on"><img src='${val.img1}'></li><li  class=""><img src='${val.img2}'></li>
                <li class=""><img src='${val.img3}'></li>
                    
					  <li class=""><img src='${val.img4}'></li>
                    
					  <li  class=""><img src='${val.img5}'></li>`;
     console.log('index:'+idx);
                 
     str1=`<img class="MagTargetImg" src='${val.imgUrl}'>`
     str2=`<img src='${val.img1}'><img src='${val.img2}'><img src='${val.img3}'><img src='${val.img4}'><img src='${val.img5}'>`
    }
   });
   that.content.html(str);
   that.MagnifierMain.html(str1)
   that.Deatail.html(str2)
}
})
   	
   }
   init(){
   	
   	var that=this;
   	$("#addcart").click(function(){
	if ($(".denglu").html()=='退出') {
	$.cookie(that.id,$("#buyNum").val(),{
			expires:30,
		})	
		location.href="car.html"
	} else{
		alert("请先登录")
		location.href="login.html"
		
	}
	

	})
   }
}

new Details({
	url:"http://localhost/happygo/data/list.json",
	content:$('.content'),
	MagnifierMain:$(".MagnifierMain"),
	Deatail:$(".Deatail")
	
})
//console.log($(".Deatail"))
