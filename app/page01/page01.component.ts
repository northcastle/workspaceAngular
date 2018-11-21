import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})
export class Page01Component implements OnInit {

  //1.创建参数用于接受路由中传递过来的参数
  productID : number  = 0;

  //2.ActivatedRoute,用于参数的接受
  constructor(private routerInfo:ActivatedRoute) { }

  //3.对参数进行赋值
  ngOnInit() {
    //通过snapshot参数快照的方式接受  查询  参数
    this.productID = this.routerInfo.snapshot.queryParams["id"];
  }

}
