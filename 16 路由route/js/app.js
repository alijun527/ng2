/**
*1、[value]="myVal"        单向邦定
*2、[(ng-model)]="myName"  双向绑定
*3、[style.color]  		   表示设置元素的样式
*4、[class.special]  	   表示是否添加.special这个类
*
*
*
**/
import {Component, bootstrap, Routes,RouterModule} from "angular2/angular2";


console.log(Routes)
console.log(RouterModule)

const routes = [
    {
        path: 'home'
        // component: HomeComponent,
        // children: [
        //     {
        //         path: 'welcome',
        //         component: WelcomeComponent,
        //     }
        // ]
    }, {
        path: '**'
        // component: NoContentComponent,
    }
];

@Component({
	selector:".app",
	template:`
		<h1>Angular Router</h1>
		<router-outlet></router-outlet>
		<a routerLink="['/home']">Home</a>
		<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
		 <router-outlet></router-outlet>
	`
})

class App{

}

bootstrap(App);