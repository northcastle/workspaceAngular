import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.css']
})
export class Page02Component implements OnInit {

  //1.创建参数用于接受路由过来的参数
  productID02 : number = 0;

  //2.注入ActivatedRoute
  constructor(private routerInfo:ActivatedRoute) { }

  //3.接受参数
  ngOnInit() {
    //通过参数快照的方式进行获取参数
    //this.productID02 = this.routerInfo.snapshot.params["id"];
    //通过参数订阅的方式进行获取参数:特别是当路由自己跳转到自己的时候，用参数定于的方式比较安全
   this.routerInfo.params.subscribe((params:Params)=>this.productID02 = params['id']);
  }

}
