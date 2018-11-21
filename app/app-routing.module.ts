import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';

const routes: Routes = [
  //2.重定向操作
  {path:"",redirectTo:"/page02",pathMatch:"full"},
  //1.常规的路由操作
  {path:"page01",component:Page01Component},
  //参数传递的方式二：通过路径进行参数传递
  {path:"page02/:id",component:Page02Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
