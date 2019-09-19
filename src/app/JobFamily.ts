import {IJobFamily} from './ijob-family';
import {Capability} from './Capability';
import {IRole} from './irole';
import {TableObject} from './table-object';

export class JobFamily extends IJobFamily implements TableObject {
    capabilities: Capability[] = [];
    job_family_id: number;
    job_family_name: string;

    public static fromIJobFamily(value): JobFamily {
        let jobFamily = new JobFamily(value.job_family_name);
        jobFamily.job_family_id = value.job_family_id;
        return jobFamily;
    }
    constructor(name) {
        super();
        this.job_family_name = name;
        this.capabilities = [];
    }

    addCapability(capability: Capability) {
        this.capabilities.push(capability);
    }

    asTableObject(): any {
        let children: any[] = [this.groupHead()];
        if (this.job_family_name === 'Bands') {
            children = this.capabilities.map(c => c.asTableObject());
        } else
            children = children.concat(this.capabilities.map(c => c.asTableObject()));
        return {
            headerName: this.job_family_name,
            children: children
        };
    }

    groupHead() {
        return {
            headerName: '',
            width:300,
            columnGroupShow: 'closed',
            resizable: true
        }
    }
}
