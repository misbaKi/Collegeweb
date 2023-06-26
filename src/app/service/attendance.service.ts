import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendance } from 'src/Model/attendanceModel';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseUrl = "http://localhost:3000/attendance";

  constructor(private http: HttpClient) { }

  getAttendance() {
    return this.http.get<Attendance[]>(this.baseUrl);
  }

  addAttendance(data: any) {
    return this.http.post<Attendance>(this.baseUrl, data);
  }


  search(name: string) {
    return this.http.get<Attendance[]>(`${this.baseUrl}?studentName=${name}`);
  }
}

