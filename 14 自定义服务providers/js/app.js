
/**
*====自定义服务=========Inject
*Inject 	注射器注解类，
*服务就是对一组方法的复用，我们定义服务就是为了复用这些方法，
	在ng2中通常我们通过一个类定义一个服务，这个类的中属性方法就是这个服务的具体内容使用服务
		第一步 通过一个类定义一个服务
		第二步 在组件注解中通过providers提供这个服务给 父组件
		第三步 在父组件的类的构造函数中，我们通过注射器将这个服务注入进来，并保存在类中，
		这样我们就可以在类的任何地方通过这个类的实例化对象访问这个服务
*
*
*/
// 引入注解器Inject
import {Component,bootstrap,Inject} from "angular2/angular2";
// import {Component,bootstrap,Injectable} from "angular2/angular2";

// 页面中有两个input元素，当点击提交按钮时候，计算这两个内容值
// 我们可以将加法运算提取到服务中
// 第一步 通过一个类定义一个服务
class Tools{
	add(a,b){
		return a + b;
	}
}

@Component({
	selector:".app",
	template: `
		<div>
			<input type="text" [(ng-model)]="firstNum" />
			<input type="text" [(ng-model)]="secondNum" />
			<button (click)="showResult()">求和</button>
			<h1>{{result}}</h1>
		</div>
	`,
	//第二步 在组件注解中通过providers提供这个服务给 父组件
	providers:[Tools]
})

class App{
	constructor(@Inject(Tools) tl){
		console.log(tl,2222)
		// 定义变量
		this.firstNum = 0;
		this.secondNum = 0;
		this.result = 0;
		// 保存服务,tl表示：是Tools这个类，将Tools这个类赋值给tools这个变量
		this.tools = tl;
	}
	// 定义方法
	showResult(){
		this.result = this.tools.add(+this.firstNum , +this.secondNum)
	}
}

bootstrap(App)
