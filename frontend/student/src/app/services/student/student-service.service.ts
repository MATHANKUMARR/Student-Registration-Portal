import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  API = "http://localhost:4000";
  
  constructor(private httpClient:HttpClient) { }

  addStudent(data: any): Observable<any> {
    return this.httpClient.post(this.API + '/addStudent', data);
  }

  getAllDAta() {
    return this.httpClient.get(this.API + '/getAllStudents');
  }

  updateStudentData(id:any,data:any): Observable<any> {
    return this.httpClient.put(this.API + '/updateStudent/'+id , data);
  }

  getOneStudentData(id:any): Observable<any> {
    return this.httpClient.get(this.API + '/findOneStudent/' + id);
  }

  deleteStudentData(id:any): Observable<any> {
    return this.httpClient.delete(this.API + '/deleteStudent/' + id);
  }

}
