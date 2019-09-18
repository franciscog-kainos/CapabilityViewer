import {Band} from './Band';
import {JobFamily} from './JobFamily';
import {DataService} from './data.service';
import {Capability} from './Capability';
import {Role} from './Role';
import {IJobFamily} from "./ijob-family";

export class JobFamilyColumn {
    family: JobFamily;

    constructor() {
    }

    populateChildren(data: DataService, jobFamilyId: number, doneFun) {

        data.getJobFamily(jobFamilyId).subscribe(value => {
            this.family = JobFamily.fromIJobFamily(value);
            console.log(this.family.job_family_id);
            // Gets all the capabilities in the job family.
            data.getCapabilitiesInJobFamily(this.family.job_family_id)
                .subscribe(value => {
                    this.family.capabilities = value.map(v => Capability.fromICapability(v));
                    // Filters the roles by the capabilities present in the job family.
                    // Then, it assigns the roles to each capability.
                    this.family.capabilities.forEach(capability => {
                        data.getRolesInCapabilityInJobFamily(capability.job_family_id, capability.capability_id)
                            .subscribe(roles => {
                                capability.roles = roles.map(role => Role.fromIRole(role));
                                doneFun()
                            });
                    });
                });

        });

    }

}
