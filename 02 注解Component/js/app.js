
/**
*2016.12.06
*写angular2的项目要引入angular2
*引入angular2有两种方式：
*1、import * as Angular from "angular2/angular2";
*2、import {Component} from "angular2/angular2";
*/

// import * as Angular from "angular2/angular2";
// console.log(Angular)


// 使用Component,所以要从angular2中获取它
// import * as Angular from "angular2/angular2";

// import {Component} from "angular2/angular2";
// let {Component} = Angular;
// 上面的过程我们可以通过一条语句来实现
import {Component, bootstrap} from "angular2/angular2";

// 定义注解为类添加数据
@Component({
	// 定义选择器
	selector:"ez-app",
	// 定义模板
	// template:"<h1>ng2xxx</h1>"
	templateUrl:"tpl/tpl.html"
})

class EzApp{}
// 想将类渲染到页面中，就要用bootstrap方法
bootstrap(EzApp);

