import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, forkJoin} from 'rxjs';
import {User} from './user';
import {Capability} from './Capability';
import {Role} from './Role';
import {Band} from './Band';
import {IJobFamily} from './ijob-family';
import {ICapability} from './icapability';
import {IRole} from './irole';
import {IBand} from './iband';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    mockUser: User;

    constructor(private http: HttpClient) {
        this.getAllFromDatabase();
        this.mockUser = new User('Test User',
            new Capability('A Random Capability'),
            new Role('A Random Role'),
            new Band('A random band'));
    }

    public getAllFromDatabase(): Observable<any[]> {
        let jobFamilies = this.getAllJobFamilies();
        let capabilities = this.getAllCapabilities();
        let bands = this.getAllBands();
        let roles = this.getAllRoles();
        return forkJoin(jobFamilies, capabilities, bands, roles);
    }

    public getAllJobFamilies(): Observable<IJobFamily[]> {
        return this.http.get<IJobFamily[]>('/api/families');
    }

    public getAllCapabilities(): Observable<ICapability[]> {
        return this.http.get<ICapability[]>('/api/capabilities');
    }

    public getAllBands(): Observable<IBand[]> {
        return this.http.get<IBand[]>('/api/bands');
    }

    public getAllRoles(): Observable<IRole[]> {
        return this.http.get<IRole[]>('/api/roles');
    }

    public getRole(id): Observable<IRole> {
        return this.http.get<IRole>('/api/roles/' + id);
    }

    public getCapability(id): Observable<ICapability> {
        return this.http.get<ICapability>('/api/capabilities/' + id);
    }

    public getBand(bandId): Observable<IBand> {
        return this.http.get<IBand>('/api/bands/' + bandId);
    }

    public getCapabilitiesInJobFamily(familyId): Observable<ICapability[]> {
        return this.http.get<ICapability[]>('/api/capabilitiesByJobFamily/' + familyId);
    }

    public getRolesInCapabilityInJobFamily(familyId, capabilityId): Observable<IRole[]> {
      return this.http.get<IRole[]>('/api/rolesInCapabilityInJobFamily/' + familyId + '/' + capabilityId);
    }

    public getJobFamily(jobFamilyId: number) {
        return this.http.get<IJobFamily>('/api/jobFamily/' + jobFamilyId);
    }
}
