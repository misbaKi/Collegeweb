import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormBuilder} from '@angular/forms'
import { FeesService } from 'src/app/service/fees.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  applicableFee =[]=["90,000"];
  feesForm!:FormGroup;
  

  constructor(private feesService: FeesService,private router:Router,private formBuilder:FormBuilder)
   {  }

  ngOnInit() {
    this.feesForm = this.formBuilder.group({
    applicableFee:['',Validators.required]
     
    });
    this.getFeesData();
  }

  getFeesData() {
    this.feesService.getFeesData().subscribe(data => {
      this.applicableFee = data.applicableFee;
    });
  }

  payAmount() {
    // Navigate to the payment gateway component
    this.router.navigate(['/payment-gateway']);
  }

}
