import {IBand} from './iband';

export class Band extends IBand {

    constructor(name: string) {
        super();
        super.band_name = name;
    }
}
