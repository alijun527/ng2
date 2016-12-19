
import {Component, bootstrap} from "angular2/angular2";

// 定义注解为类添加数据
@Component({
	// 定义选择器
	// selector:"ez-app",
	//元素名称，类，ID
	// selector:"h2",
	// selector:".my-app",
	// selector:"#my_app",
	//自定义属性
	selector:"[my-key]",
	template:"<h1>{{star}}--{{color}}</h1>"

})

class EzApp{
	// 定义属性数据
	// movie;
	star = "ng2学习";
	constructor() {
		// this.star = "aaaabbb";
		this.color = "red";
	}

}
console.log(1111)

// 想将类渲染到页面中，就要用bootstrap方法
bootstrap(EzApp);

