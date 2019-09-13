import {Capability} from './Capability';
import {Role} from './Role';
import {Band} from './Band';

export class User {

    name: string;
    capability: Capability;
    role: Role;
    band: Band;

    constructor(name: string, capability: Capability, role: Role, band: Band) {
        this.name = name;
        this.capability = capability;
        this.role = role;
        this.band = band;
    }

}
