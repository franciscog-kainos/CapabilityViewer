import {IJobFamily} from './ijob-family';
import {Capability} from './Capability';
import {IRole} from './irole';
import {TableObject} from './table-object';

export class JobFamily extends IJobFamily implements TableObject {
    capabilities: Capability[];
    static fromIJobFamily(value: IJobFamily): JobFamily {
        const jobFamily = new JobFamily(value.job_family_name);
        jobFamily.job_family_id = value.job_family_id;
        return jobFamily;
    }
    constructor(name) {
        super();
        super.job_family_name = name;
        this.capabilities = [];
    }

    addCapability(capability: Capability) {
        this.capabilities.push(capability);
    }

    asTableObject(): object {
        return {
            headerName: 'Sales and Marketing',
            children: this.capabilities.map(c => c.asTableObject())
        };
    }
}
