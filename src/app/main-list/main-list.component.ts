import { Component } from '@angular/core';
import { XmlService } from '../xml.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.less']
})
export class MainListComponent {

  json: any;
  constructor(private _XmlService: XmlService){}
  ngOnInit(){
    this.loadJson()
  }

  async loadJson(){
    this.json = await this._XmlService.getJson()
    console.log(this.json)
  }

  getNames(){
    if (this.json == undefined) return []

    const returnArray: Array<string> = []

    for (const name in this.json.zmienne) {
      if (name == "text") continue;
      returnArray.push(name)
    }
    return returnArray
  }
  getSrc(name: string){

    const link = "http://atarionline.pl/biblioteka/czasopisma/img/"
    return link + this.json.zmienne[name].src.text
  }
}
