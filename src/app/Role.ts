import {IRole} from './irole';
import {TableObject} from './table-object';

export class Role extends IRole {
    columnName: string;
    constructor(name: string) {
        super();
        super.role_name = name;
    }

    static fromIRole(value: IRole) {
        const role = new Role(value.role_name);
        role.role_id = value.role_id;
        role.role_summary = value.role_summary;
        role.role_training = value.role_training ;
        role.role_responsibilities = value.role_responsibilities;
        role.capability_id = value.capability_id;
        role.band_id = value.band_id;
        role.type = value.type;
        return role;
    }
}
