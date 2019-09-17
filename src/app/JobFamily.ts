import {IJobFamily} from './ijob-family';
import {Capability} from './Capability';
import {IRole} from './irole';
import {TableObject} from './table-object';

export class JobFamily extends IJobFamily implements TableObject {
    capabilities: Capability[];
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
