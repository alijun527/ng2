/**
*1、[value]="myVal"        单向邦定
*2、[(ng-model)]="myName"  双向绑定
*3、[style.color]  		   表示设置元素的样式
*4、[class.special]  	   表示是否添加.special这个类
*5、[ng-class]="setClass()"表示可以设置多个类
*
*
**/
import {Component, bootstrap} from "angular2/angular2";

@Component({
	selector:".app",
	template:`
		<input type="text" [value]="myVal" />
		<p>{{myVal}}</p>

		<input type="text" [(ng-model)]="myName" />
		<p>{{myName}}</p>

		<button [style.color] = "isShowColor ? 'red': 'green'">随机颜色</button>

		<div [class.special]="isSpecial">The class binding is special</div>

		<div [ng-class]="setClasses()">This div is saveable and special</div>
	`
})

class App{
	myVal = "hello 单向绑定 ";
	myName = "hello 双向绑定";
	isShowColor = Math.random() > 0.5;
	isSpecial = false;
	setClasses(){
		var myClass = {
			"a" : true,
			"b" : false,
			 c  : true
		}
		return myClass;
	}
}

bootstrap(App);