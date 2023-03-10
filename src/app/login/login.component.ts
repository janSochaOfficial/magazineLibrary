import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  constructor(private router: Router){}
  title = 'pipes';
  value = "";
  re = /^(\d+\.?\d*)$/


  getVal(){
    return Math.round(Number(this.value) * 1000) / 1000
  }
  onlyNumberKey(s: string, e: KeyboardEvent) {
    if (s + e.key == "666.666") this.goToList()
    return this.re.test(s + e.key)
  }
  goToList(){
    this.router.navigate(['/', 'lista']);
  }
}
