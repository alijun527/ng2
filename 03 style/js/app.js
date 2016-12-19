
import {Component, bootstrap} from "angular2/angular2";

// 定义注解为类添加数据
@Component({
	// 定义选择器
	selector:"ez-app",
	// 定义模板,行内样式
	// template:`<h1 style="color:red">ng2xxx---app.js内部模板</h1>
	// 		<p>app.js文字</p>
	// `,
	templateUrl:"tpl/tpl.html",

	//定义内部样式
	// styles:["h1{color: orange;}p{color:green;background:black;}"]

	// 在js中引入外部的css文件
	styleUrls: ['css/bg.css', 'css/color.css']


})

class EzApp{}
// 想将类渲染到页面中，就要用bootstrap方法
bootstrap(EzApp);

