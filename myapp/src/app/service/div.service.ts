import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from '../../model/division.model';

@Injectable({
  providedIn: 'root'
})
export class DivService {

  apiUrl:string="http://localhost:3000/division";

 constructor(private http: HttpClient) {}

  getAll(): Observable<Division[]> {
    return this.http.get<Division[]>(this.apiUrl);
  }

  add(division: Division): Observable<Division> {
    return this.http.post<Division>(this.apiUrl, division);
  }

  update(division: Division): Observable<Division> {
    return this.http.put<Division>(`${this.apiUrl}/${division.id}`, division);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
