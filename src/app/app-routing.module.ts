import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'Home' ,component:HomeComponent},
  {path:'staffdetails' ,component:StaffdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
