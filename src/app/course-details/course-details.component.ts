import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { courseModel } from './course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {

  Courseform!: FormGroup;
  CourseModelObj: courseModel = new courseModel()
  CourseData!:courseModel[]
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private formbuilder: FormBuilder, private course:CourseService) { }

  ngOnInit(): void {
    this.Courseform = this.formbuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      select: ['null', Validators.required],
      email: ['', Validators.required],
      time: ['', Validators.required],
      

    })
    this.getCourse();
    
  }

  clickAddCourse() {
    this.Courseform.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  addCourse() {
    this.CourseModelObj.name = this.Courseform.value.name;
    this.CourseModelObj.mobile = this.Courseform.value.mobile;
    this.CourseModelObj.select = this.Courseform.value.select;
    this.CourseModelObj.email = this.Courseform.value.email;
    this.CourseModelObj.time = this.Courseform.value.time;
   


    this.course.postCourse(this.CourseModelObj).subscribe(res => {
      console.log(res);
      alert("Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.Courseform.reset();
      this.getCourse();
    })
  }

  getCourse() {
    this.course.getCourse().subscribe(res => {
      this.CourseData = res;

    })
  }

  deleteCourse(row: any) {
    this.course.deleteCourse(row.id).subscribe(res => {
      alert("Deleted");
      this.getCourse();

    })
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.CourseModelObj.id = row.id;
    this.Courseform.controls['name'].setValue(row.name);
    this.Courseform.controls['mobile'].setValue(row.mobile);
    this.Courseform.controls['select'].setValue(row.select);
    this.Courseform.controls['email'].setValue(row.email);
    this.Courseform.controls['time'].setValue(row.time);
    

  }

  updateCourse() {
    this.CourseModelObj.name = this.Courseform.value.name;
    this.CourseModelObj.mobile = this.Courseform.value.mobile;
    this.CourseModelObj.select = this.Courseform.value.select;
    this.CourseModelObj.email = this.Courseform.value.email;
    this.CourseModelObj.time = this.Courseform.value.time;

    this.course.updateCourse(this.CourseModelObj, this.CourseModelObj.id)
      .subscribe(res => {
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.Courseform.reset();
        this.getCourse();
      })
  }

  

}
