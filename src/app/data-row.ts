import {Band} from "./Band";
import {Capability} from "./Capability";
import {DataService} from "./data.service";
import {Role} from "./Role";

export class DataRow {
    map: any[];
    band: Band;
    capabilities: Capability[];

    private constructor(band: Band, capabilities: Capability[]) {
        this.band = band;
        this.capabilities = capabilities;
        this.map = [];
    }

    static makeRow(band: Band, capabilities: Capability[], data: DataService, callback) {

        data.getRolesInBand(band.band_id).toPromise().then(value => value.map(r => Role.fromIRole(r)))
            .then(roles => {
                let dataRow = new DataRow(band, capabilities);
                let rolesMap = [];
                roles.forEach(r => {
                    r.type = 'role';
                    rolesMap["capability_" + r.capability_id] = r
                });
                dataRow.capabilities.forEach(c => {
                    if (c.capability_id) {
                        dataRow.map["capability_" + c.capability_id] = rolesMap["capability_" + c.capability_id]
                    } else {
                        dataRow.map["capability_undefined"] = band;
                    }

                });

                callback(dataRow.map);
            });

    }

}
