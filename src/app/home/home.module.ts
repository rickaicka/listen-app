import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
