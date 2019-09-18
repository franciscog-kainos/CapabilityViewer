export class Capability {
    capability_id: number;
    capability_name: string;

    job_family_id: number;

    leader_id: number;
    user_f_name: string;
    user_l_name: string;
    user_picture: string;

    constructor(name: string) {
        this.capability_name = name;
    }
}
