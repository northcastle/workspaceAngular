import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ROUTER';

  constructor(private router:Router){}

  jumpToPage02(){
    console.log("按钮被点击，马上就要跳转了。。。");
    //这个地方的写法和我们routerLink=“['/page02']”的写法是一样的
    this.router.navigate(['/page02',123]);
  }
}
