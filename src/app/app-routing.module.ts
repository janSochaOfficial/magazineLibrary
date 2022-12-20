import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { MainListComponent } from './main-list/main-list.component';
import { MagazineShowcaseComponent } from './magazine-showcase/magazine-showcase.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'lista', component: MainListComponent},
  {path: 'lista/:name', component: MagazineShowcaseComponent},
  {path: 'lista/:name/:year', component: MagazineShowcaseComponent},
  {path: '', component: LoginComponent}
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
