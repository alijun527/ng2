
/**
*组件的嵌套：用directives（相当于子组件====>给父组件传数据）
*父组件：ez-app
*子组件：news-list
*用法：在父组建的注解中用：directives[newsList]引入子组件，
*	  子组建的tempalte就可以嵌入到父组件的template中，
*	  在父组件的tempalte中写的自定义元素：<news-list></news-list>就是字组件的：selector:"news-list",
*/
import {Component, bootstrap} from "angular2/angular2";
// //定义子组件
@Component({
	selector:"news-list",
	template:"<h1>---子组件-{{boy}}-</h1>"
})
// 创建子组件类
class NewsList{
	boy = "hi--boy";
}


// 定义注解为类添加数据,父组件
@Component({
	// 定义选择器
	selector:"ez-app",
	// template:"<h1>{{star}}--{{color}}</h1>"
	templateUrl:"tpl/tpl.html",
	// 引入子组件，可以得到子组件的数据
	directives:[NewsList]

})
class EzApp{
	star = "ng2学习";
	color = "orange";
	constructor(){
		this.name = "alijun";
		this.boy = "aj";
	}
}
// 想将类渲染到页面中，就要用bootstrap方法
bootstrap(EzApp);


