import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { studInfo } from 'src/Model/studInfo';
import { AttendanceService } from '../service/attendance.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  studInfoForm!: FormGroup;
  studInfoModel: studInfo = new studInfo();
  studInfoData!: studInfo[];

  showAdd!: boolean;
  showUpdate!: boolean;
  searchInput!: string;

  constructor(private formBuilder: FormBuilder, private studInfoService: StudentService) {
    this.studInfoForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.studInfoForm = this.formBuilder.group({
      card: ['', Validators.required],
      expiry: ['', Validators.required],
      cvv: ['', Validators.required]
    });

    this.getStudInfo();
  }

  clickAddStudInfo() {
    this.studInfoForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  addStudInfo() {
    this.studInfoModel.card = this.studInfoForm.value.card;
    this.studInfoModel.expiry = this.studInfoForm.value.expiry;
    this.studInfoModel.cvv = this.studInfoForm.value.cvv;

    this.studInfoService.addStudInfo(this.studInfoModel).subscribe(res => {
      console.log(res);
      alert("Student Info Added Successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.studInfoForm.reset();
      this.getStudInfo();
    });
  }

  getStudInfo() {
    this.studInfoService.getStudInfo().subscribe(res => {
      this.studInfoData = res;
    });
  }



}

