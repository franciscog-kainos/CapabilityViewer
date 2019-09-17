import {ICapability} from './icapability';
import {Role} from './Role';
import {TableObject} from './table-object';

export class Capability extends ICapability implements TableObject {
    roles: Role[];

    static fromICapability(cap: ICapability) {
        const capability = new Capability(cap.capability_name);
        capability.capability_name = cap.capability_name;
        capability.capability_id = cap.capability_id;
        capability.job_family_id = cap.job_family_id;
        capability.leader_id = cap.leader_id;
        return capability;
    }
    constructor(capability_name: string) {
        super();
        this.capability_name = capability_name;
    }

    addRoles(role: Role) {
        this.roles.push(role);
    }

    asTableObject(): object {
        return {
            headerName: this.capability_name,
            children: this.roles.map(r => r.asTableObject())
        };
    }
}
