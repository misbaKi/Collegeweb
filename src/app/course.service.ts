import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { courseModel } from './course-details/course.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  baseurl: string = " http://localhost:3000/post"

  postCourse(data: any) {
    return this.http.post<courseModel>(this.baseurl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getCourse() {
    return this.http.get<courseModel[]>(this.baseurl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateCourse(data: any, id: number) {
    return this.http.put<courseModel>(this.baseurl + '/' + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteCourse(id: number) {
    return this.http.delete<courseModel>(this.baseurl + '/' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  
  }
  


