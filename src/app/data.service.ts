import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  roles = [];
  constructor(private http: HttpClient) { }

  /*
  public getAllRoles(): void {
    this.roles = this.http.post<Roles[]>('/api/roles');
  }
  */
  /*public addCity(newCity: City): void {
     this.cities = this.http.post<City[]>('/api/addcity', newCity);
  }x
  */
}
