import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Attendance } from 'src/Model/attendanceModel';
import { AttendanceService } from 'src/app/service/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements OnInit {

  attendanceForm: FormGroup;
  attendanceModelObj: Attendance = new Attendance();
  attendanceData!: Attendance[];

  showAdd!: boolean;
  showUpdate!: boolean;
  selectedDate!:string;
  studentNames: string[] = [
    'Aarav','Aarush', 'Aditi', 'Advait', 'Avani', 'Ayush', 'Dhruv',
    'Ishaan', 'Krish', 'Myra', 'Navya', 'Pranav', 'Saanvi', 'Samarth',
   'Shreya', 'Tanvi', 'Vedant', 'Vihaan', 'Yash'
  ];

  constructor(private formBuilder: FormBuilder, private attendanceService: AttendanceService) {
    this.attendanceForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.attendanceForm = this.formBuilder.group({
      studentName:['',Validators.required],
      date:['',Validators.required],
      status: ['', Validators.required],
    });

    this.getAttendance();
  }

  clickAddAttendance() {
    this.attendanceForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  addAttendance(studentName:string,date:string) {
    this.attendanceModelObj.studentName = studentName;
    this.attendanceModelObj.date = date;
    this.attendanceModelObj.status = this.attendanceForm.value.status;
    this.attendanceModelObj.status = this.attendanceForm.value.status;


    this.attendanceService.addAttendance(this.attendanceModelObj).subscribe(res => {
      console.log(res);
      alert("Attendance Added Successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.attendanceForm.reset();
      this.getAttendance();
    });
  }



  getAttendance() {
    this.attendanceService.getAttendance().subscribe(res => {
      this.attendanceData = res;
    });
  }

 

  search(event: any) {
    console.log(event.target.value);

    if (event.target.value) {
      this.attendanceService.search(event.target.value).subscribe(res => {
        this.attendanceData = res;
      });
    } else {
      this.getAttendance();
    }
  }



}

