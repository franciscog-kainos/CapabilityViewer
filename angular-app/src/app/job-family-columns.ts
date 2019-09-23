import {JobFamily} from './JobFamily';
import {DataService} from './data.service';
import {Capability} from './Capability';
import {Role} from './Role';
import {Subject, timer} from "rxjs";
import {Band} from "./Band";

export class JobFamilyColumns {
    families: JobFamily[] = [];
    bands: Band[] = [];
    static firstBand = new JobFamily('Bands');
    static defaultCapability = new Capability('');

    private constructor(families, bands) {
        this.families = families;
        this.bands = bands;
    }

    static async populateChildren(data: DataService, doneFun) {

        let Ifamilies: JobFamily[] = [];
        let Ibands: Band[] = [];
        JobFamilyColumns.firstBand.capabilities[0] = JobFamilyColumns.defaultCapability;
        Ifamilies[0] = JobFamilyColumns.firstBand;

        await Promise.resolve(data.getAllBands().toPromise().then(bands => {
            Ibands = bands.map(b => Band.fromIBand(b));
        }));

        await Promise.resolve(data.getAllJobFamilies().toPromise().then(fams => {
            Ifamilies = Ifamilies.concat(fams.map(f => JobFamily.fromIJobFamily(f)));
            console.log(Ifamilies)
        }));

        for (const f of Ifamilies) {
            // Gets all the capabilities in the job family.
            if (f.job_family_id) {
                await Promise.resolve(data.getCapabilitiesInJobFamily(f.job_family_id).toPromise()
                    .then(capabilities => {
                        f.capabilities = capabilities.map(c => Capability.fromICapability(c));
                    }));
            }
            // Filters the roles by the capabilities present in the job family.
            // Then, it assigns the roles to each capability.
            for (const capability of f.capabilities) {
                if (capability.capability_id) {
                    await Promise.resolve(data.getRolesInCapabilityInJobFamily(capability.job_family_id, capability.capability_id)
                        .toPromise().then(roles => {
                            capability.roles = roles.map(role => Role.fromIRole(role));
                        }));
                }
            }

        }

        doneFun();

        return new JobFamilyColumns(Ifamilies, Ibands);

    }

    asColumnDef(): any[] {
        return this.families.map(f => f.asTableObject());
    }


}
