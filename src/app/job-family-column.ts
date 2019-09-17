import {Band} from './Band';
import {JobFamily} from './JobFamily';
import {DataService} from './data.service';
import {Capability} from './Capability';
import {Role} from './Role';

export class JobFamilyColumn {
    family: JobFamily;
    children;

    constructor(family: JobFamily) {
        this.family = family;
    }

    populateChildren(data: DataService) {
        // Gets all the capabilities in the job family.
        data.getCapabilitiesInJobFamily(this.family.job_family_id)
            .subscribe(value => this.capabilities = value);

        // Gets all the roles
        let roles: Role[] = [];
        data.getAllRoles().subscribe(value => {
            roles = value;
        });
        // Filters the roles by the capabilities present in the job family.
        this.capabilities.forEach(capability => {
            roles.filter(r => r.capability_id === capability.capability_id);
        });

    }


    asColumnObject() {
        return {
            headerName: this.family.job_family_name,
            children: this.children
        };
    }
}
