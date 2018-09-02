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
