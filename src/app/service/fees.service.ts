import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeesService {
  private baseUrl = 'http://localhost:3000/fees'; 

  constructor(private http: HttpClient) { }

  getFeesData(){
    return this.http.get<any>(`${this.baseUrl}/fees`);
  }
}
