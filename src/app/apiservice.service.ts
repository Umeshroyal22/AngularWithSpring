import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private getUrl = 'http://localhost:9090/getAllEmployee';
  private addUrl = 'http://localhost:9090/addEmployee';

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrl);
  }

  addEmployee(emp: any): Observable<any> {
    return this.http.post(this.addUrl, emp);
  }

  deleteAllEmployees(): Observable<any> {
    return this.http.delete('http://localhost:9090/deleteAll');
  }

  // ✅ delete by id
  deleteById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:9090/deleteById/${id}`);
  }
}