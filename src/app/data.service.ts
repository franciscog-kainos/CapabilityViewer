import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobFamily } from './JobFamily';
import { Capability } from './Capability';
import { Band } from './Band';
import { Role } from './Role';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    this.getEverything();
  }

  public getEverything(){
    this.getAllJobFamilies();
    this.getAllCapabilities();
    this.getAllBands();
    this.getAllRoles();
  }

  public getAllJobFamilies() : Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/families');
  }

  public getAllCapabilities() : Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/capabilities');
  }

  public getAllBands() : Observable<Band[]> {
    return this.http.get<Band[]>('/api/bands');
  }

  public getAllRoles() : Observable<Role[]> {
    return this.http.get<Role[]>('/api/roles');
  }

  public getRole(id) : Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/role' + id);
  }
}
