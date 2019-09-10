import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobFamily } from './JobFamily';
import { Capability } from './Capability';
import { Band } from './Band';
import { Role } from './Role';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  jobFamilies: JobFamily[];
  capabilities: Capability[];
  bands: Band[];
  roles: Role[];
  role: Role = new Role();

  constructor(private http: HttpClient) { }

  
  getAllJobFamilies() : void {
    this.http.get<JobFamily[]>('/api/jobfamilies').subscribe(res => {
      console.log(res)
      if(res[0] == null){
        console.error(res);
      } else {
        this.jobFamilies = res;
      }
    });
  }

  getAllCapabilities() : void {
    this.http.get<Capability[]>('/api/capabilities').subscribe(res => {
      console.log(res)
      if(res[0] == null){
        console.error(res);
      } else {
        this.capabilities = res;
      }
    });
  }

  getAllBands() : void {
    this.http.get<Band[]>('/api/bands').subscribe(res => {
      console.log(res)
      if(res[0] == null){
        console.error(res);
      } else {
        this.bands = res;
      }
    });
  }

  getAllRoles() : void {
    this.http.get<Role[]>('/api/roles').subscribe(res => {
      console.log(res)
      if(res[0] == null){
        console.error(res);
      } else {
        this.roles = res;
      }
    });
  }

  getRole(id) : void {
    this.http.get<Role>('/api/role/' + id).subscribe(role => {
      this.role = role;
    });
  }
}
