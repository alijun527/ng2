
/**
*Ng2中ng-if使用在普通元素上，必须加上一个*否则报错
	Ng-if使用在template，必须将该属性转化成一个动态属性
	没有任何注释

*if 在普通元素标签中的用法：'<h1 *ng-if="show">{{data}}</h1>' 
*   在template中的用法：'<template [ng-if]="show"><h1 >{{data}}</h1></template>'
*/
import {Component,bootstrap} from "angular2/angular2";

@Component({
	selector:".app",
	// if：两种写法：*ng-if、[ng-if]
	// template:'<h1 *ng-if="show">{{data}}</h1>' 

	// template:'<template [ng-if]="show"><h1 >{{data}}</h1></template>'

	// template:'<h1 *ngIf="show">{{data}}</h1>' 错误写法
	

	//switch指令两种写法：
	//1、普通元素用法
	template:`
		<div ng-switch="home">
			<h1 *ng-switch-when="'home'">home--首页</h1>
			<h1 *ng-switch-when="'list'">list--列表页</h1>
			<h1 *ng-switch-default>详情页</h1>
		</div>
	`
	// 2、template中的用法,为么子渲染不了，？？？？？
	// template: `
	// 	<div [ng-switch]="">
	// 		<template [ng-switch-when]="'home'">首页111</template>
	// 		<template [ng-switch-when]="'list'">列表页222</template>
	// 		<template ng-switch-default>详情页333</template>
	// 	</div>
	// `
	
})
class App{
	show = true;
	data = "2016年12月6日14:27:13pm----";
}
bootstrap(App);



