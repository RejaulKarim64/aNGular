import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoliceStationMod } from '../../model/policeStation.model';


@Injectable({
  providedIn: 'root'
})
export class PolStService {

  apiUrl: string = "http://localhost:3000/policeStation";

  constructor(private http: HttpClient) { }

  getAll(): Observable<PoliceStationMod[]> {
    return this.http.get<PoliceStationMod[]>(this.apiUrl);
  }

  add(policeStation: PoliceStationMod): Observable<PoliceStationMod> {
    return this.http.post<PoliceStationMod>(this.apiUrl, policeStation);
  }

  update(policeStation: PoliceStationMod): Observable<PoliceStationMod> {
    return this.http.put<PoliceStationMod>(`${this.apiUrl}/${policeStation.id}`, policeStation);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
