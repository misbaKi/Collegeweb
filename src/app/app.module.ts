import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { HomeComponent } from './home/home.component';
=======
import { AttendanceComponent } from './attendance/attendance.component';
import{HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FeesComponent } from './fees/fees.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
>>>>>>> dc955f3502b61d2e06e19c2458763cb1bf895c8f

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    StaffdetailsComponent,
    HomeComponent
=======
    AttendanceComponent,
    FeesComponent,
    PaymentGatewayComponent,
    StudentDetailsComponent
>>>>>>> dc955f3502b61d2e06e19c2458763cb1bf895c8f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    FormsModule,
    
>>>>>>> dc955f3502b61d2e06e19c2458763cb1bf895c8f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
