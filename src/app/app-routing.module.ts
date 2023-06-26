import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeesComponent } from './fees/fees.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'attendance',component:AttendanceComponent},
  {path:'fees',component:FeesComponent},
  {path:'student-details',component:StudentDetailsComponent},
  { path: 'payment-gateway', component: PaymentGatewayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
