import {Band} from './Band';
import {JobFamily} from './JobFamily';
import {DataService} from './data.service';
import {Capability} from './Capability';
import {Role} from './Role';

export class JobFamilyColumn {
    family: JobFamily;
    children;

    constructor() {
    }

    populateChildren(data: DataService, jobFamilyId: number) {
        data.getJobFamily(jobFamilyId).subscribe(value => {
            this.family = JobFamily.fromIJobFamily(value);
        });

        // Gets all the capabilities in the job family.
        data.getCapabilitiesInJobFamily(this.family.job_family_id)
            .subscribe(value => this.family.capabilities = value.map(v => Capability.fromICapability(v)));
        // Filters the roles by the capabilities present in the job family.
        // Then, it assigns the roles to each capability.
        this.family.capabilities.forEach(capability => {
            data.getRolesInCapabilityInJobFamily(this.family.job_family_id, capability.capability_id)
                .subscribe(value => capability.roles = value.map(r => Role.fromIRole(r)));
        });
        this.children = this.family.asTableObject();
    }

}
