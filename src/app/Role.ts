import {IRole} from './irole';

export class Role extends IRole {
    constructor(name: string) {
        super();
        super.role_name = name;
    }
}
