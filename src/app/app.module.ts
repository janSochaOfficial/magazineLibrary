import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XmlService } from './xml.service';
import { MainListComponent } from './main-list/main-list.component';

import { HttpClientModule } from '@angular/common/http';
import { MagazineShowcaseComponent } from './magazine-showcase/magazine-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    MagazineShowcaseComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [XmlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
