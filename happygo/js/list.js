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

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){
	
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
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

__webpack_require__(1)
__webpack_require__(2)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * This jQuery plugin displays pagination links inside the selected elements.
 *
 * @author Gabriel Birke (birke *at* d-scribe *dot* de)
 * @version 1.2
 * @param {int} maxentries Number of entries to paginate
 * @param {Object} opts Several options (see README for documentation)
 * @return {Object} jQuery Object
 */
jQuery.fn.pagination = function(maxentries, opts){
	
	opts = jQuery.extend({
		items_per_page:10,
		num_display_entries:10,
		current_page:0,
		num_edge_entries:0,
		link_to:"javascript:(0)",
		prev_text:"Prev",
		next_text:"Next",
		ellipse_text:"...",
		prev_show_always:true,
		next_show_always:true,
		callback:function(){return false;}
	},opts||{});

	
	
	return this.each(function() {
		/**
		 * 计算最大分页显示数目
		 */
		function numPages() {
			return Math.ceil(maxentries/opts.items_per_page);
		}	
		/**
		 * 极端分页的起始和结束点，这取决于current_page 和 num_display_entries.
		 * @返回 {数组(Array)}
		 */
		function getInterval()  {
			var ne_half = Math.ceil(opts.num_display_entries/2);
			var np = numPages();
			var upper_limit = np-opts.num_display_entries;
			var start = current_page>ne_half?Math.max(Math.min(current_page-ne_half, upper_limit), 0):0;
			var end = current_page>ne_half?Math.min(current_page+ne_half, np):Math.min(opts.num_display_entries, np);
			return [start,end];
		}
		
		/**
		 * 分页链接事件处理函数
		 * @参数 {int} page_id 为新页码
		 */
		function pageSelected(page_id, evt){
			current_page = page_id;
			drawLinks();
			var continuePropagation = opts.callback(page_id, panel);
			if (!continuePropagation) {
				if (evt.stopPropagation) {
					evt.stopPropagation();
				}
				else {
					evt.cancelBubble = true;
				}
			}
			return continuePropagation;
		}
		
		/**
		 * 此函数将分页链接插入到容器元素中
		 */
		function drawLinks() {
			panel.empty();
			var interval = getInterval();
			var np = numPages();
			// 这个辅助函数返回一个处理函数调用有着正确page_id的pageSelected。
			var getClickHandler = function(page_id) {
				return function(evt){ return pageSelected(page_id,evt); }
			}
			//辅助函数用来产生一个单链接(如果不是当前页则产生span标签)
			var appendItem = function(page_id, appendopts){
				page_id = page_id<0?0:(page_id<np?page_id:np-1); // 规范page id值
				appendopts = jQuery.extend({text:page_id+1, classes:""}, appendopts||{});
				if(page_id == current_page){
					var lnk = jQuery("<span class='current'>"+(appendopts.text)+"</span>");
				}else{
					var lnk = jQuery("<a>"+(appendopts.text)+"</a>")
						.bind("click", getClickHandler(page_id))
						.attr('href', opts.link_to.replace(/__id__/,page_id));		
				}
				if(appendopts.classes){lnk.addClass(appendopts.classes);}
				panel.append(lnk);
			}
			// 产生"Previous"-链接
			if(opts.prev_text && (current_page > 0 || opts.prev_show_always)){
				appendItem(current_page-1,{text:opts.prev_text, classes:"prev"});
			}
			// 产生起始点
			if (interval[0] > 0 && opts.num_edge_entries > 0)
			{
				var end = Math.min(opts.num_edge_entries, interval[0]);
				for(var i=0; i<end; i++) {
					appendItem(i);
				}
				if(opts.num_edge_entries < interval[0] && opts.ellipse_text)
				{
					jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
				}
			}
			// 产生内部的些链接
			for(var i=interval[0]; i<interval[1]; i++) {
				appendItem(i);
			}
			// 产生结束点
			if (interval[1] < np && opts.num_edge_entries > 0)
			{
				if(np-opts.num_edge_entries > interval[1]&& opts.ellipse_text)
				{
					jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
				}
				var begin = Math.max(np-opts.num_edge_entries, interval[1]);
				for(var i=begin; i<np; i++) {
					appendItem(i);
				}
				
			}
			// 产生 "Next"-链接
			if(opts.next_text && (current_page < np-1 || opts.next_show_always)){
				appendItem(current_page+1,{text:opts.next_text, classes:"next"});
			}
		}
		
		//从选项中提取current_page
		var current_page = opts.current_page;
		//创建一个显示条数和每页显示条数值
		maxentries = (!maxentries || maxentries < 0)?1:maxentries;
		opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0)?1:opts.items_per_page;
		//存储DOM元素，以方便从所有的内部结构中获取
		var panel = jQuery(this);
		// 获得附加功能的元素
		this.selectPage = function(page_id){ pageSelected(page_id);}
		this.prevPage = function(){ 
			if (current_page > 0) {
				pageSelected(current_page - 1);
				return true;
			}
			else {
				return false;
			}
		}
		this.nextPage = function(){ 
			if(current_page < numPages()-1) {
				pageSelected(current_page+1);
				return true;
			}
			else {
				return false;
			}
		}
		// 所有初始化完成，绘制链接
		drawLinks();
        // 回调函数
        opts.callback(current_page, this);
	});
}




/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);