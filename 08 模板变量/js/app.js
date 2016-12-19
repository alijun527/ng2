
/**
*定义在模板中，在外界是访问不到的，（在类的构造函数中也是访问不到的）
语法 ：在元素中定义
		 #变量名称的属性 ===>（ #title ）

变量在使用时候，是没有#的，通过这个变量可以访问这个元素上的所有属性，使用方式就是原生js属性方法
*<p [title]="title.innerHTML" [style]="'color:' + title.style.background"></p>
* 	[style]="'color:' + title.style.background"可以动态获取数据
*
*/

import {Component,bootstrap} from "angular2/angular2";

@Component({
	selector:".app",
	template:`
		<h1 style="color:green;background:orange" #title>ng2--{{name}}</h1>
		<p [title]="title.innerHTML" [style]="'color:' + title.style.background">2016年12月6日14:12:04</p>
	`
})

class App{
	name = "hello";
}

bootstrap(App);



