export class Capability {
    capability_id: number;
    capability_name: string;
    job_family_id: number;

    constructor(name: string) {
        this.capability_name = name;
    }
}
