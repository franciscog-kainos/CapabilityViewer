import {IRole} from './irole';
import {ICapability} from './icapability';
import {IBand} from './iband';

export class User {

    name: string;
    capability: ICapability;
    role: IRole;
    band: IBand;
    // Just a random comment
    constructor(name: string, capability: ICapability, role: IRole, band: IBand) {
        this.name = name;
        this.capability = capability;
        this.role = role;
        this.band = band;
    }

}
