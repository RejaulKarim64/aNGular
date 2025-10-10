import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseurl: string = "http://localhost:3000/students";

  constructor(private http: HttpClient) { }

  getAllStudent(): Observable<any> {

    return this.http.get(this.baseurl);


  }
  saveStudent(student: Student): Observable<any> {

    return this.http.post(this.baseurl, student);
  }

  deleteStudent(id: string): Observable<any> {

    return this.http.delete(this.baseurl + "/" + id)
  }

  getStudentById(id: string): Observable<any> {

    return this.http.get(this.baseurl + '/' + id);

  }
  
  updateStudent(id: string, student: Student): Observable<any> {

    return this.http.put(this.baseurl + '/' + id, student);
  }
}
