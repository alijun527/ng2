
/**
*事件event:
* 	在ng2中我们定义每一个事件可以像定义动态属性一样定义，只不过，用的()语法
	动态属性语法 [title] = “这里是一个js作用域”
	定义事件语法 (click) = “这里是一个js作用域”
	既然是js作用域我们就可以直接调用类中的方法  
*	  Ng2中事件回调函数
		默认没有参数，想使用事件对象必须传递$event参数
		作用域就是类的实例化对象，并且不能更改作用域（更改作用域得不到预期结果的）
		所以只能在回调函数里面更改某个函数的作用域
*/


// import {Component, bootstrap} from "angular2/angular2";
import {Component, bootstrap} from "@angular/core";
let demo = {
	a : 5
}

// 定义注解为类添加数据,父组件
@Component({
	// 定义选择器
	selector:".app",
	template:`
		<button (click)="addNum($event,this)">点击我</button>
		<h1>11点击的次数{{num}}</h1>


		<input (keyup)="getVal($event)">
		<h3>{{val}}</h3>

		 <input #box1 (keyup)="0">
   		 <p>{{box1.value}}</p>

   		 <input #box2 (keyup)="getVal2(box2.value)">
   		 <p>{{val2}}</p>
	`
})
class EzApp{
	num = 0;
	val = '';
	val2 = '';

	addNum(){
		console.log('success')
		this.num++;
		this.qwer.call(demo);
	}
	qwer() {
		console.log(this,111)
	}
	getVal(e) {
		this.val += e.target.value + '|';
	}
	getVal2(value) {
		this.val2 += value + '|';
	}
	constructor(){

	}
}
// 想将类渲染到页面中，就要用bootstrap方法
bootstrap(EzApp);


