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
  value = "";
  re = /^(\d+\.?\d*)$/
  time = new Date()
  ngOnInit() {
    setInterval(()=>{
      this.time = new Date();
    }, 1000)
  }

  getVal(){
    return Math.round(Number(this.value) * 1000) / 1000
  }
  onlyNumberKey(s: string, e: KeyboardEvent) {
    return this.re.test(s + e.key)
  }
  goToList(){
    this.router.navigate(['/', 'lista']);
  }

}
