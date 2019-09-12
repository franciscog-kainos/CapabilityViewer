import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobFamily } from './JobFamily';
import { Capability } from './Capability';
import { Band } from './Band';
import { Role } from './Role';
import { Observable, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    this.getAllFromDatabase();
  }

  public getAllFromDatabase(): Observable<any[]> {
    let jobFamilies = this.getAllJobFamilies();
    let capabilities = this.getAllCapabilities();
    let bands = this.getAllBands();
    let roles = this.getAllRoles();
    return forkJoin(jobFamilies, capabilities, bands, roles);
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

  public getRole(id) : Observable<Role> {
    return this.http.get<Role>('/api/roles/' + id);
  }

  public getCapability(id) : Observable<Capability> {
    return this.http.get<Capability>('/api/capabilities/' + id);
  }

  public getBandDetails(bandId) : Observable<Band>{
    return this.http.get<Band>('/api/bands/' + bandId);
  }
}
