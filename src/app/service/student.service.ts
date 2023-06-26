import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studInfo } from 'src/Model/studInfo';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = "http://localhost:3000/studentInfo";
  constructor(private http:HttpClient ) {}


 

  getStudInfo() {
    return this.http.get<studInfo[]>(this.baseUrl);
  }

  addStudInfo(data: any) {
    return this.http.post<studInfo>(this.baseUrl, data);
  }

}
