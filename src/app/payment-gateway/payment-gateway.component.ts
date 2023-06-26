import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  submitPaymentForm() {

    this.router.navigate(['../'], { relativeTo: this.route });
  }
  pay(){
    alert("payment succesfull")
    this.router.navigate(['fees'])
  }
}
