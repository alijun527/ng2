/**
*for循环语法：<li *ng-for="#item of list">{{item}}</li>
*    *Ng-for = “#item of list”
	循环指令，可以遍历list中的数据，注意要使用模板局部变量，
	因此要给item加上一个#；
*
*
*/

import {Component,bootstrap} from "angular2/angular2";


@Component({
	selector:".app",
	template:`
		<ul>
			<li *ng-for="#item of list">{{item}}</li>
		</ul>
	`
	//为么子不能运行？？？？？
	// template:`
	// 	<ul>
	// 		<li *ngFor="let hero of heroes">{{ hero }}--ng222--</li>
	// 	</ul>
	// `
})
//<li *ngFor="let item of heroes">{{ item }}--ng222--</li>
class App{
	list = ["马云与马化腾等双创周上“抢”总理z ", "广西助学达人强奸多名学生 获刑16年 ", "老虎咬人死者家属曝内幕 动物园慌了 ", "除了'蓝瘦香菇' 还有哪些方言被玩坏 ", "三星召回次日 央视暗访结果竟是这样 ", "央视主持人：高洪波辞职是肇事逃逸 ", "捐精者需捐40份精液 可获5000元补贴 ", "妻子请丈夫再娶一个:看孩子满足需求"]
}

bootstrap(App);