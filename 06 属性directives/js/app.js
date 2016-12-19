
/**
*父组件为====>子组件提供数据，因此要为组件添加属性
*在子组件中写：	properties: ['news']
*父组件：.app 		子组件：news-list
*用法：子组件内写properties：["news"],与父组件tempalte中绑定的一致
* <news-list [news]="newsList"></news-list>
*	  
*	  [] 属性 表示：变成一个具有js作用域的属性
*/


import {Component, bootstrap} from "angular2/angular2";
// //定义子组件
@Component({
	selector:"news-list",
	//[]是属性变成一个具有js作用域的属性
	template:`
		<ul>
 			<li [style]="'color:' + color[0]">{{news[0]}}</li>
 			<li [style]="'color:' + color[1]">{{news[1]}}</li>
 			<li [style]="'color:' + color[2]">{{news[2]}}</li>
		</ul>
	`,
	// 现在希望父组件为子组件提供数据（父===>子），因此要为组件添加属性
	properties: ['news']
})
// 创建子组件类
class NewsList{
	news = [
		'广西助学达人强奸多名学生 获刑16年 ',
		'老虎咬人死者家属曝内幕 动物园慌了',
		'除了"蓝瘦香菇" 还有哪些方言被玩坏 '
	];
	color = ["red","orange","purple"];
}


// 定义注解为类添加数据,父组件
@Component({
	// 定义选择器
	selector:".app",
	// template:"<h1>{{star}}--{{color}}</h1>"
	templateUrl:"tpl/tpl.html",
	// 引入子组件，可以得到子组件的数据（子===>父）,NewsList是子组件类的名字
	directives:[NewsList]

})
class EzApp{
	newsList= [
		'三星召回次日 央视暗访结果竟是这样',
		'央视主持人：高洪波辞职是肇事逃逸',
		'央视主持人：高洪波辞职是肇事逃逸'
	];
	star = "ng2学习";
	color = "orange";
	constructor(){
		this.name = "alijun";
	}
}
// 想将类渲染到页面中，就要用bootstrap方法
bootstrap(EzApp);


