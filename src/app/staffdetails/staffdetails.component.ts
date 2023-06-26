import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { staffModel } from './staff.model';
import { StaffserviceService } from '../shared/staffservice.service';

@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.component.html',
  styleUrls: ['./staffdetails.component.css']
})
export class StaffdetailsComponent {
  staffform!:FormGroup;
  staffModelObject:staffModel=new staffModel();
  staffData!:staffModel[];
  showadd!: boolean;
  showupdate!: boolean;


  constructor(private staffserice:StaffserviceService, private formbuilder:FormBuilder){}
  ngOnInit(): void {
  this.staffform=this.formbuilder.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
    class:['',[Validators.required]],
    department:['',[Validators.required]],
    subject:['',[Validators.required]],
    
     
  })
this.getstaff();    
  }
  getstaff() {
    this.staffserice.getstaff().subscribe(res => {
      this.staffData = res;
    })
  }
  clickAddstaffdata(){
    this.staffform.reset();
    this.showadd = true;
    this.showupdate = false;
  }


  poststaff() {
    console.log(this.staffform.value);
    this.staffModelObject.name = this.staffform.value.name;
    this.staffModelObject.class = this.staffform.value.class;
    this.staffModelObject.department = this.staffform.value.department;
    this.staffModelObject.subject = this.staffform.value.subject;
   
    
    this.staffserice.poststaff(this.staffModelObject)
      .subscribe(res => {
        console.log(res);
        alert('Staff Added Succesfully')
        this.staffform.reset();
        this.getstaff();
      })
  }
 
  deletestaff(row: any) {
    this.staffserice.deletestaff(row.id)
      .subscribe(res => {
        alert("Faculty Deleted");
        this.getstaff();
      })
  }
  onEdit(row: any) {
    this.showadd = false;
    this.showupdate = true;

    this.staffModelObject.id = row.id;
    this.staffform.controls['name'].setValue(row.name);
    this.staffform.controls['class'].setValue(row.class);
    this.staffform.controls['department'].setValue(row.department);
    this.staffform.controls['subject'].setValue(row.subject);
    
    
  }
  updatestaff() {
    this.staffModelObject.name = this.staffform.value.name;
    this.staffModelObject.class = this.staffform.value.class;
    this.staffModelObject.department = this.staffform.value.department;
    this.staffModelObject.subject = this.staffform.value.subject;
   
    
    this.staffserice.updatestaff(this.staffModelObject, this.staffModelObject.id)
      .subscribe(res => {
        console.log(res);
        let ref = document.getElementById('cancel')
        ref?.click();
        alert('Faculty updated Succesfully')
        this.staffform.reset();
        this.getstaff();
      })
  }
  get name(){
    return this.staffform.get('name')
  }
  
  get class(){
    return this.staffform.get('class')
  }
  get department(){
    return this.staffform.get('department')
  }
  get subject(){
    return this.staffform.get('subject')
  }
  
}

