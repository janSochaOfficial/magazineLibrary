import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { XmlService } from '../xml.service';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-magazine-showcase',
  templateUrl: './magazine-showcase.component.html',
  styleUrls: ['./magazine-showcase.component.less']
})
export class MagazineShowcaseComponent {
  constructor(
     private route: ActivatedRoute,
     private Xml: XmlService,
     private router: Router)
     { }

  name: string = ""
  years: Array<string> =[]
  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name")!
    this.loadYeras()
  }

  async loadYeras(){
    try{
      this.years = await this.Xml.getYears(this.name)
    }
    catch{
      this.router.navigate(['/', 'lista'])
    }

  }

}
