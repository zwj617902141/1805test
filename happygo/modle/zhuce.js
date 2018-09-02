//function getUrlParam(name){
// var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
// var r = window.location.search.substr(1).match(reg); //匹配目标参数
// if (r != null) return unescape(r[2]); return null; //返回参数值
//}
// 
// 
// var name = getUrlParam("userName");
// if (name!="null") {
// 	console.log(name)
// 	$("ul").eq(0).children().eq(0).html('<a href="list.html">退出</a>')
// 	$(".header").children().eq(0).html("name")
// 	
// }
// 
// else{
// 	console.log(name)
// 	$("ul").eq(0).children().eq(0).html('<a href="login.html">登录</a>')
// 	}
console.log(document.cookie)
var arr;
var k;

check()

function check()
{
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
		 	$("ul").eq(0).children().eq(0).html('退出')
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
	
		$(".denglu").click(function()
		{console.log(1)
			if($(".denglu").html()=='退出')
	{       
			arr[k][1].status="false"
			console.log(arr[k][1])
			document.cookie = arr[k][0]+"="+JSON.stringify(arr[k][1]);
		console.log(document.cookie)
		 	$(".denglu").html('登录')
		
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