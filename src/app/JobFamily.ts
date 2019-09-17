import {IJobFamily} from './ijob-family';
import {Capability} from './Capability';
import {IRole} from './irole';

export class JobFamily extends IJobFamily {
    capabilities: Capability[];
    constructor(name) {
        super();
        super.job_family_name = name;
        this.capabilities = [];
    }

    addCapability(capability: Capability) {
        this.capabilities.push(capability);
    }

}
