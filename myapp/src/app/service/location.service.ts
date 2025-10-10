import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../../model/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseurl: string = "http://localhost:3000/locations";

  constructor(private http: HttpClient) { }

  getAllLocation(): Observable<any> {

    return this.http.get(this.baseurl);
  }

  saveLocation(l: Location): Observable<any> {

    return this.http.post(this.baseurl, l);
  }


  deleteLocation(id: string): Observable<any> {

    return this.http.delete(this.baseurl + '/' + id);
  }


  getLocationById(id: string): Observable<any> {

    return this.http.get(this.baseurl + '/' + id);
  }


  updateLocation(id: string, l: Location): Observable<any> {
    
    return this.http.put(this.baseurl + '/' + id, l);
  }
}
