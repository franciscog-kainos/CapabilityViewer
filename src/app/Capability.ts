import {ICapability} from './icapability';
import {Role} from './Role';

export class Capability extends ICapability {
    roles: Role[];
    constructor(capability_name: string) {
        super();
        this.capability_name = capability_name;
    }

    addRoles(role: Role) {
        this.roles.push(role);
    }
}
