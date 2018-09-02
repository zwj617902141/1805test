console.log(1)
		$(function(){
  //获取url中的参数
function getUrlParam(name){
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
   var r = window.location.search.substr(1).match(reg); //匹配目标参数
   if (r != null) return unescape(r[2]); return null; //返回参数值
// var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//                  var r = window.location.search.substr(1).match(reg);
//                  if (r != null) return unescape(r[2]); return null;
}
  //接收URL中的参数booksId
var id = getUrlParam('shoesId');
console.log('id:'+id);
$("#addcart").click(function(){
	if ($(".denglu").html()=='退出') {
	$.cookie(id,$("#buyNum").val(),{
			expires:30,
		})	
		location.href="car.html"
	} else{
		alert("请先登录")
		location.href="login.html"
		
	}
	

	})
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

    if(id == val.id){
    str = `<li  class="on"><img src='${val.img1}'></li><li  class=""><img src='${val.img2}'></li>
                <li class=""><img src='${val.img3}'></li>
                    
					  <li class=""><img src='${val.img4}'></li>
                    
					  <li  class=""><img src='${val.img5}'></li>`;
     console.log('index:'+idx);
                 
     str1=`<img class="MagTargetImg" src='${val.imgUrl}'>`
     str2=`<img src='${val.img1}'><img src='${val.img2}'><img src='${val.img3}'><img src='${val.img4}'><img src='${val.img5}'>`
    }
   });
   $('.content').html(str);
   $(".MagnifierMain").html(str1)
   $(".Deatail").html(str2)
}
})
	
})
		


var arr;
var k;


function check()
{
	console.log(111111)
	var str = document.cookie;
if (str) {
    arr = str.split("; ");
console.log(arr)
for (var i = 0;i<arr.length;i++) {
	arr[i] = arr[i].split("=");
console.log(arr[i])
}
for (var i = 0;i<arr.length;i++) {
	arr[i][1]=JSON.parse(arr[i][1]);
	console.log(arr[i][1])
}
for (var i = 0;i<arr.length;i++) {
	if (arr[i][1].status=="true") {
		 k=i
		 	$(".denglu").html('退出')
		 	$(".header").children().eq(0).html(`${arr[k][0]},欢迎来到乐淘`)
// 	$(".header").children().eq(0).html("name")
// 	
//		arr[i][1].status = "false";
//		setCookie(arr[i][0],JSON.stringify(arr[i][1]))
  return k;
	}
	else{
		 	$("ul").eq(0).children().eq(0).html('登录')
		 	$(".header").children().eq(0).html(`您好,欢迎来到乐淘`)
		 	
		
		
	}
	
}}
}
check()
	
		$(".denglu").click(function()
		{console.log(1)
			if($(".denglu").html()=='退出')
	{       
			arr[k][1].status="false"
			console.log(arr[k][1])
			document.cookie = arr[k][0]+"="+JSON.stringify(arr[k][1]);
		console.log(document.cookie)
		
		check()
	}
	
	else{
		location.href="login.html"
	}
		})
	


function setCookie(key,value,day){
			var str = ""
			if(day){
				var d = new Date();
				d.setDate(d.getDate()+day)
				str = ";expires="+d;
			}
			document.cookie = key+"="+value+str;
		}