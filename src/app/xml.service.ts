import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxXmlToJsonService } from 'ngx-xml-to-json';

@Injectable({
  providedIn: 'root'
})
export class XmlService {

  private json: any = undefined
  constructor(private httpClient:HttpClient ,private ngxXmlToJsonService: NgxXmlToJsonService){
  }

  async getData(){
    return this.httpClient.get("../assets/czasopisma.xml", {responseType: "text"}).toPromise()
  }

  async getJson(){
    let xml = await this.getData() as string

    const options = { // set up the default options
      textKey: 'text', // tag name for text nodes
      attrKey: 'attr', // tag for attr groups
      cdataKey: 'cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
    };
    this.json = this.ngxXmlToJsonService.xmlToJson(xml, options).czasopisma

    return this.json;
  }

  async getYears(name:string): Promise<Array<string>>{
    if (this.json == undefined){
      this.json = await this.getJson()
    }

    const text: string = this.json.lata[name].text;
    return text.split(",")
  }

  async getMagazines(name: string, year: string): Promise<Array<any>>{
    const magazineCollection = this.json[name]
    const returnArray: Array<any> = []
    for (const key in magazineCollection){
      if (key == "text") continue
      if (magazineCollection[key].attr.rok == year){
        returnArray.push(magazineCollection[key])
      }
    }

  return returnArray
  }
}
