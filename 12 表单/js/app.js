

import {Component,bootstrap,Pipe} from "angular2/angular2";

@Pipe({
	name:"firstFilter"
})
class firstFilterPipe{
	transform(inp){
		return inp.replace(/^([a-z])/g,function(match,$1){
			return $1.toUpperCase();
		})
	}
}

@Component({
	selector:".app",
	template:`
		<form #f="form" (submit)="goLogin(f)">
			<input ng-control="username" [(ng-model)]="data.userName" type="text" />
			<input ng-control="passWord" [(ng-model)]="data.passWord" type="text" />
			<button type="submit">登录</button>


			<h1>{{data.userName}}</h1>
			<h1>{{data.passWord}}</h1>
		</form>


		<input type="text" ng-control="name" [(ng-model)]="name" />

		<h1>{{name | firstFilter }}</h1>

	`,
	pipes:[firstFilterPipe]
})

class App{
	name = "alijun";
	// 定义双向绑定的数据
	data = {
		userName: 'yyqh',
		passWord: '123'
	}
	goLogin(form) {
		// 查看参数，以及组件实例化对象中的data数据
		console.log(form, this)
	}
}


bootstrap(App);