import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { MainListComponent } from './main-list/main-list.component';
import { MagazineShowcaseComponent } from './magazine-showcase/magazine-showcase.component';

const routes: Routes = [
  {path: 'lista', component: MainListComponent},
  {path: 'lista/:name', component: MagazineShowcaseComponent},
  {path: '', redirectTo: '/lista', pathMatch: "full"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = []
