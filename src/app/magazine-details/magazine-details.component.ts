import { Component, Input } from '@angular/core';


@Component({
  selector: 'magazine-details',
  templateUrl: './magazine-details.component.html',
  styleUrls: ['./magazine-details.component.less']
})
export class MagazineDetailsComponent {
  @Input() magazineData: any;
  @Input() magazineName!: string;

  ngOnInit(): void {

  }

  getImageSorce(){
    return `http://atarionline.pl/biblioteka/czasopisma/${this.magazineName}/${(this.magazineData.miniaturka.text as string).trim()}`
  }

  getFileSorce(){
    return `http://atarionline.pl/biblioteka/czasopisma/${this.magazineName}/${(this.magazineData.plik.text as string).trim()}`
  }

  getAttr(attr: string){
    return this.magazineData[attr].text
  }
}
