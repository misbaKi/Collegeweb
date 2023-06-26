import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AttendanceComponent } from './attendance/attendance.component';
import{HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FeesComponent } from './fees/fees.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AttendanceComponent,
    FeesComponent,
    PaymentGatewayComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
