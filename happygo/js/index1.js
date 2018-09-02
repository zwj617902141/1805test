/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)
__webpack_require__(2)
$(".nav").nav()

			$(".box").banner({
				items:$(".banner1 img"),		//必选,要切换的元素
			left:$(".banner1 #left"),		//可选，左按钮
			right:$(".banner1 #right"),		//可选，右按钮
				//可选，下标按钮
			autoPlay:true,					//可选，是否自动播放
			time:2000,						//可选，间隔时间
			moveTime:2000,
				
			})
	
$.ajax({
				type:"get",
				data:{},
				url:"http://localhost/happygo/goods.json",
				success:function(res){
					var str1="";
					var str2="";
				
					for (var i=0;i<4;i++) {
						str1+= `<li class="box2">
									<img src='${res[i].src}'>
									<span>${res[i].price}</span>
									<p>${res[i].name}</p>
								
								</li>`
					}
					$(".box1").html(str1)
					
			for (var j=4;j<10;j++) {
						str2 += `<li class="">
									<img src='${res[j].src}'>
									<span>${res[j].price}</span>
									<p>${res[j].name}</p>
								
								</li>`
					}
				
					$(".tuijian1").html(str2)
				}
				
			})


	$.ajax({
       type:"get",
       data:{},
		url:"http://localhost/happygo/goods.json",
		success:function(res){
			var  str3=""
			for (var k=11;k<=22;k++) {
						str3+= `<li class="sport2">
									<img src='${res[k].src}'/>
									<p>${res[k].price}</p>
									<p>${res[k].name}</p>
								
								</li>`
	}
	
       $("#sport1").html(str3)
	}});
	
	
	


var onav=document.querySelector(".nav")
var otop =onav.offsetTop
onscroll=function()
{ 
var scrollT = document.documentElement.scrollTop;
  if(otop<=scrollT)
  {
//	onav.style.position='fixed'
  	onav.style.top=scrollT+"px";
 
  }
  else
  {
       onav.style.top=otop+"px"
 
  }

}

$(".first li").hover(function(){
	$(".first li").find("i").css({background:"black"}).eq($(this).index()).css({background:"#d84c29"})
	$(".first li").find("i").eq($(this).index()).siblings().css({display:"inline-block"})
}
    
,
	
	
	function(){
	$(".first li").find("i").css({background:"black"})
	$(".first li").find("i").eq($(this).index()).siblings().css({display:"none"})
		
	}
	
)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

;(function($){
	"use strict";
	$.fn.extend({
		banner:function(options){
			var that = this;
			this.LOCAL = {
				items:options.items,
				time : options.time?options.time :1000,
				movetime: options.movetime?options.movetime :200,
				iNow : 0,
				right:function(){
					if (that.LOCAL.iNow==that.LOCAL.items.length -1) {
						that.LOCAL.iNow = 0;
						that.LOCAL.prev = that.LOCAL.items.length - 1;
					} else{
						that.LOCAL.iNow++;
						that.LOCAL.prev = that.LOCAL.iNow-1;
					}
					that.LOCAL.items.eq(that.LOCAL.prev).css({left:0}).stop().animate({left:-that.LOCAL.items.eq(0).width()},this.movetime).end().eq(that.LOCAL.iNow).css({left:that.LOCAL.items.eq(0).width()}).stop().animate({left:0},this.movetime);
					if (typeof options.list=="object"&&options.list.length>0) {
						options.list.eq(that.LOCAL.prev).removeClass("active").end().eq(that.LOCAL.iNow).addClass("active");
					}
				}
			}
			if (typeof options.list=="object"&&options.list.length>0) {
				options.list.on("click",function(){
					if ($(this).index()>that.LOCAL.iNow) {
						var type = 1;
					}
					if ($(this).index()<that.LOCAL.iNow) {
						var type = -1;
					}
					that.LOCAL.items.eq(that.LOCAL.iNow).css({left:0}).stop()
					.animate({left:-that.LOCAL.items.eq(0).width()*type},that.LOCAL.movetime).end()
					.eq($(this).index()).css({left:that.LOCAL.items.eq(0).width()*type}).stop()
					.animate({left:0},that.LOCAL.movetime);
					options.list.eq(that.LOCAL.iNow).removeClass("active").end().eq($(this).index()).addClass("active");
					that.LOCAL.iNow = $(this).index();
				})
			}
			if (typeof options.left == "object" && options.left.length > 0 && typeof options.right== "object" && options.right.length > 0) {
				options.left.on("click",function(){
					if (that.LOCAL.iNow==0) {
						that.LOCAL.iNow = that.LOCAL.items.length -1;
						that.LOCAL.prev = 0;
					} else{
						that.LOCAL.iNow--;
						that.LOCAL.prev = that.LOCAL.iNow+1;
					}
					that.LOCAL.items.eq(that.LOCAL.prev).css({left:0}).stop().animate({left:that.LOCAL.items.eq(0).width()},that.LOCAL.movetime).end().eq(that.LOCAL.iNow).css({left:-that.LOCAL.items.eq(0).width()}).stop().animate({left:0},that.LOCAL.movetime);
					if (typeof options.list=="object"&&options.list.length>0) {
						options.list.eq(that.LOCAL.prev).removeClass("active").end().eq(that.LOCAL.iNow).addClass("active");
					}
				})
				options.right.on("click",this.LOCAL.right)
			}
			if (options.autoplay==undefined||options.autoplay) {
				this.LOCAL.timer = setInterval(()=>{
					this.LOCAL.right();
				},this.LOCAL.time)
				this.hover(function(){
					clearInterval(that.LOCAL.timer);
				},function(){
					clearInterval(that.LOCAL.timer);
					that.LOCAL.timer = setInterval(()=>{
						that.LOCAL.right();
					},that.LOCAL.time)
				})
			}
		}
	})
})(jQuery);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

;(function($){
	"use strict";
	
//	extend全局
//	$.extend({
//		myname:"nav插件",
//		nav:function(ele){
//			console.log(ele)
//			console.log(this.myname + "被执行了")
//		}
//	})

//	自定义属性全局
//	$.nav = function(ele){
//		console.log(ele)
//		console.log("nav" + "被执行了")
//	}
	
//	extend局部
//	$.fn.extend({
//		nav:function(){
//			var name = "admin"
//			console.log(this)
//			console.log(name + "被执行了")
//		}
//	})

//	自定义属性局部
//	$.fn.nav = function(){
//		console.log(this)
//		console.log("nav" + "被执行了")
//	}
	
	$.fn.nav = function(){
		this.children("ul").children("li").hover(function(){
			
			$(this).siblings().removeClass("active").end().addClass("active")
			$(this).siblings().eq(0).addClass("active")
			
			$(this)				//鼠标经过谁就是谁
			.siblings()			//除了鼠标经过的这个，其他的所有兄弟
			.children("div")		//兄弟的子元素ul
			.stop().slideUp(200)
			.end()				//除了鼠标经过的这个，其他的所有兄弟
			.end()				//鼠标经过谁就是谁
			.children("div")		//鼠标经过谁就是谁    的    ul
			.stop().slideDown(200);
			
		},function(){
			
			$(this).children("div").stop().slideUp(200)
			
		})
	}
})(jQuery);


/***/ })
/******/ ]);