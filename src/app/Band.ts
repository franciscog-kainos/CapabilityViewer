import {IBand} from './iband';

export class Band extends IBand {
    type: string;
    static fromIBand(band: IBand): Band {
        let newBand = new Band(band.band_name);
        newBand.band_competency = band.band_competency;
        newBand.band_id = band.band_id;
        newBand.band_responsibilities = band.band_responsibilities;
        return newBand;
    }

    constructor(name: string) {
        super();
        super.band_name = name;
    }
}
