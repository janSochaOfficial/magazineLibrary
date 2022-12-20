import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private router: Router){}
  title = 'pipes';
  time = new Date()
  ngOnInit() {
    setInterval(()=>{
      this.time = new Date();
    }, 1000)
  }


}
