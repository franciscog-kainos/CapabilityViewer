import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, forkJoin, Subject} from 'rxjs';
import {IUser} from './IUser';
import {Capability} from './Capability';
import {Role} from './Role';
import {Band} from './Band';
import {IJobFamily} from './ijob-family';
import {ICapability} from './icapability';
import {IRole} from './irole';
import {IBand} from './iband';
import {JobFamilyColumns} from "./job-family-columns";
import {DataRow} from "./data-row";
import {TrainingResource} from './TrainingResource';
import {User} from "./user";
import {placeholdersToParams} from "@angular/compiler/src/render3/view/i18n/util";


@Injectable({
    providedIn: 'root'
})
export class DataService {

    mockUser: IUser;
    rowData: Subject<any[]>;
    rowData$: Observable<any[]>;
    tableRowData: any[];
    tableHeaderData: any[];
    headerData: Subject<any[]>;
    headerData$: Observable<any[]>;
    roles: Role[];
    numberOfBands = 0;
    updateNumber = 0;

    constructor(private http: HttpClient) {
        this.getAllFromDatabase();
        this.mockUser = new User();
        this.mockUser.user_f_name = 'Test';
        this.mockUser.user_l_name = 'User';
        this.rowData = new Subject<any[]>();
        this.rowData$ = this.rowData.asObservable();
        this.headerData = new Subject<any[]>();
        this.headerData$ = this.headerData.asObservable();
        this.tableRowData = [];
        this.tableHeaderData = [];
    }

    public generateTableData(dataUpdate, headerUpdate): void {

        JobFamilyColumns.populateChildren(this, () => console.log('Done'))
            .then(columns => {
                this.headerData.next(columns.asColumnDef());
                let capabilities: Capability[] = columns.families
                    .reduce((a, b) => a.concat(b.capabilities), []);
                this.numberOfBands = columns.bands.length;
                console.log(capabilities);
                columns.bands.forEach(b => DataRow.makeRow(b, capabilities, this, (update) => this.rowData.next(update)));
            });

        this.headerData$.subscribe(header => {
            console.log(header);
            headerUpdate(header)
        });

        this.rowData$.subscribe(update => {
            if (this.updateNumber < this.numberOfBands - 1 && this.tableRowData.length < this.numberOfBands - 1) {
                this.tableRowData.push(update);
                this.updateNumber++;
            } else {
                dataUpdate(this.tableRowData);
                this.updateNumber = 0;
                console.log(this.tableRowData);
            }

        })

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
    public getRolesInBand(bandId): Observable<IRole[]> {
        let params = new HttpParams()
            .set('id', bandId);
        return this.http.get<IRole[]>('/api/rolesInBand/' + bandId, {params: params});
    }
    public getRole(id): Observable<IRole> {
        return this.http.get<IRole>('/api/roles/' + id);
    }

    public getCapability(id): Observable<ICapability> {
        let params = new HttpParams()
            .set('capabilityId', id);
        return this.http.get<ICapability>('/api/capabilities/' + id, {params: params});
    }

    public getBand(bandId): Observable<IBand> {
        return this.http.get<IBand>('/api/bands/' + bandId);
    }

    public getCapabilitiesInJobFamily(familyId): Observable<ICapability[]> {
        let params = new HttpParams()
            .set('familyId', familyId);
        return this.http.get<ICapability[]>('/api/capabilitiesByJobFamily/' + familyId, {params: params});
    }

    public getBandTraining(bandId): Observable<TrainingResource[]> {
        return this.http.get<TrainingResource[]>('/api/bands/' + bandId + '/training');
    }

    public getRolesInCapabilityInJobFamily(familyId, capabilityId): Observable<IRole[]> {
        let params = new HttpParams()
            .set('capabilityId', capabilityId)
            .set('familyId', familyId);
        return this.http.get<IRole[]>('/api/rolesInCapabilityInJobFamily/' + familyId + '/' + capabilityId, {params: params});
    }

    public getJobFamily(jobFamilyId: number): Observable<IJobFamily> {
        return this.http.get<IJobFamily>('/api/jobFamily/' + jobFamilyId);
    }

    public testConnection() {
        return this.http.get<object>('/api/');
    }

    public getUser(id): Observable<IUser> {
        let params = new HttpParams()
            .set('id', id);
        return this.http.get<IUser>('/api/user/'+id, {params: params});
    }

    public addFamily(newFamily: IJobFamily): void {
        console.log(newFamily);

        this.http.post<IJobFamily>('api/families', newFamily).subscribe( res => {

            if (res == null) {
                console.log('Could not add family!');
            } else {
                console.log('Added new family!');
                console.log(newFamily);
            }
        });
    }

    public updateFamily(newFamily: IJobFamily): void {
        console.log(newFamily);

        this.http.put<IJobFamily>('api/families', newFamily).subscribe( res => {

            if (res == null) {
                console.log('Family was not updated!');
                console.log(newFamily);
            } else {
                console.log('Famlily was updated');
                console.log(newFamily);

            }
        });
    }

    public getDeletableJobFamilies() : Observable<IJobFamily[]> {
        return this.http.get<IJobFamily[]>('/api/deletableJobFamilies');
    }

    public deleteJobFamily(jobFamilyId): Observable<Object> {
        return this.http.delete('/api/deleteJobFamily/' + jobFamilyId);
    }
}
