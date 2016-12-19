/**
*管道：Pipe
*管道就是指的angular1过滤器,使用语法跟angular1中的语法是一样的，
	语法 {{data | filteName : param1 : param2}}
*
*
*/
// 第一步引入管道注解类
import {Component,bootstrap,Pipe} from "angular2/angular2";

// 第二步 通过注解定义管道名称
@Pipe({
	// 定义截取字符串管道铺
	name: 'mySlice'
})
// 第三步 定义管道类
class mySlicePipe{
	time = 123;
	// 定义transform方法来处理数据
	/**
	*Transform方法
		作用域是管道类对象
		参数有两个，
			第一个表示原数据，
			第二个表示参数集合
			必须有返回值，返回值就是处理后的结果
	*/
	transform(inp, args) {
		console.log(arguments)
		// 将字符串截取返回
		return inp.slice(args[0], args[1])
	}
}
//转大写的方法（过滤的名称）
@Pipe({
	name:"toDa"
})
// 定义管道类
class myToDa{
	transform(inp,args){
		return inp.toUpperCase()
	}
}

@Pipe({
	name:"firstFilter"
})
class firstFilterPipe{
	transform(inp,args){
		return inp.replace(/^([a-z])/g,function(match,$1){
			return $1.toUpperCase();
		})
	}
}
//可以定义模板
@Component({
	selector:".app",
	//mySlice、toDa、date都是过滤对应的名称
	template:`
		<div>
			<p>{{'会呼吸的痛ng2' | mySlice : 1 : 5}}</p>
			<h1>{{myDate | date : "yyyyMMdd"}}</h1>
			<h2>{{color | toDa | mySlice : 1 : 3}}</h2>
			<h3>{{myName | firstFilter }}</h3>
		</div>
	`,
	// 第四步 在组件中引入管道类
	pipes:[mySlicePipe,myToDa,firstFilterPipe]
})

//定义数据
class App{
	myDate = new Date();
	color = "yellow";
	myName = "alijun";
}
bootstrap(App)