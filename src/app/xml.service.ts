import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxXmlToJsonService } from 'ngx-xml-to-json';

@Injectable({
  providedIn: 'root'
})
export class XmlService {

  constructor(private httpClient:HttpClient ,private ngxXmlToJsonService: NgxXmlToJsonService){}

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
    const jsonObj = this.ngxXmlToJsonService.xmlToJson(xml, options)

    return jsonObj.czasopisma;
  }

  async getYears(name:string): Promise<Array<string>>{
    const json = await this.getJson()
    const text: string = json.lata[name].text;
    return text.split(",")
  }
}
