import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'Home' ,component:HomeComponent},
  {path:'staffdetails' ,component:StaffdetailsComponent}
=======
import { AttendanceComponent } from './attendance/attendance.component';
import { FeesComponent } from './fees/fees.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'attendance',component:AttendanceComponent},
  {path:'fees',component:FeesComponent},
  {path:'student-details',component:StudentDetailsComponent},
  { path: 'payment-gateway', component: PaymentGatewayComponent }
>>>>>>> dc955f3502b61d2e06e19c2458763cb1bf895c8f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
