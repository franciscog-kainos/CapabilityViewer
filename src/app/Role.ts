import {IRole} from './irole';
import {TableObject} from './table-object';

export class Role extends IRole implements TableObject {
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

    asTableObject(): object {
        return {
            headerName: this.role_name,
            resizable: true,
            cellRenderer: 'nameCellRenderer',
            field: this.columnName,
            width: 200,
            filter: 'agTextColumnFilter',
            columnGroupShow: 'open',
            filterParams: {
                valueGetter: params => {
                    if (params.data.firstColumn.role_name !== undefined) {
                        return params.data.firstColumn.role_name;
                    }
                }
            },
        };
    }
}
