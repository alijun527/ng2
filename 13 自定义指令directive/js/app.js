/**
*====自定义指令=========directive
*Directive 	引入注解类, 
*Inject 	注射器注解类，
*ElementRef 获取元素的服务
*	nativeElement 表示这个元素
*
*
*/
// 第一步 引入注解类, 注射器注解类，获取元素的服务
import {Component, bootstrap, Directive, Inject, ElementRef} from 'angular2/angular2';
// 第二步 通过注解类定义指令
// 带属性是color-red的元素内容值是红色的
@Directive({
	selector:'[color-red]'
})
// 第三步 定义组件类
class ColorRed{
	// 定义构造函数, 通过注射器将服务注入
	constructor(@Inject(ElementRef) el){
		// 这个el是处理元素服务，里面有个nativeElement表示这个元素
		// 定义元素
		console.log(el,111111)
		//el 表示：ElementRef获取元素的服务，赋值给ele这个变量
		var ele = el.nativeElement;
		ele.style.background = "orange";
		ele.style.color = "green";
	}
}

@Component({
	selector:".app",
	// 第五步 在模板中使用指令
	template:'<h1 color-red>{{time}}</h1>',
	// 第四步 引入指令
	directives:[ColorRed]
})

class App{time = new Date();}

// 渲染组件
bootstrap(App);

