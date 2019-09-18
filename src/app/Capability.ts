import {ICapability} from './icapability';
import {Role} from './Role';
import {TableObject} from './table-object';

export class Capability extends ICapability implements TableObject {
    roles: Role[] = [];
    static numberOfCapabilities = 0;
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
        this.capability_id = undefined;
    }

    addRoles(role: Role) {
        this.roles.push(role);
    }

    asTableObject(): any {
        if (this.capability_name === '')
            return {
                headerName: this.capability_name,
                field: "capability_" + this.capability_id,
                resizable: true,
                cellRenderer: "nameCellRenderer",
                filter: 'agTextColumnFilter',
                filterParams: {
                    valueGetter: params => {
                        if (params.data.capability_undefined.band_name != undefined) {
                            return params.data.capability_undefined.band_name;
                        }
                    }
                }
            };

        else
            return {
                headerName: this.capability_name,
                field: "capability_" + this.capability_id,
                resizable: true,
                cellRenderer: "nameCellRenderer",
                filter: 'agTextColumnFilter',
                getQuickFilterText: (params) => {
                    console.log(params);
                    if (params.value !== undefined)
                    return params.value.role_name;
                }
            }
    }
}
