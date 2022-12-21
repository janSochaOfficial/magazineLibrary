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
  years: Array<string> = []
  actYear: string = ""
  magazineCollection: Array<any> = []
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get("name")!
      this.actYear = params.get("year") ?? ""
      this.loadYeras()
    });


  }

  async loadYeras(){

    this.years = await this.Xml.getYears(this.name)

    if (this.years.length == 0){
      this.goToHome()
      return
    }
    this.years.push("all")

    if (this.actYear == "") return;

    this.magazineCollection = await this.Xml.getMagazines(
      this.name,
      this.actYear
    )
  }

  isActive(year: string){
    return year == this.actYear
  }

  goToHome(){
    this.router.navigate(['/', 'lista'])
  }


}
