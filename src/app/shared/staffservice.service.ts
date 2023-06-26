import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { staffModel } from '../staffdetails/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffserviceService {

 

  baseurl:string="http://localhost:3000/staff"

  //loacl variable http referring to httpclient instance

  constructor(private http:HttpClient) { }    
  
  getstaff() {
    return this.http.get<staffModel[]>(this.baseurl)
      
  }

  poststaff(data: any) {
    return this.http.post<staffModel>(this.baseurl, data)
      
  }
  
  deletestaff(id: number) {
    return this.http.delete<staffModel>(this.baseurl + '/' + id)
     
  }
  updatestaff(data: any, id: number) {
    return this.http.put<staffModel>(this.baseurl + '/' + id, data)
     
  }
  

}
