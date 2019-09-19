import { DataRow } from './data-row';
import {JobFamilyColumns} from "./job-family-columns";
import {DataService} from "./data.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientModule} from "@angular/common/http";
import {Capability} from "./Capability";
import {RowComp} from "ag-grid-community";

describe('DataRow', () => {
  let data: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });
    data = TestBed.get(DataService);
  });

  it('should create an instance', (done: DoneFn) => {
    let column = JobFamilyColumns.populateChildren(data, () => "");
    column.then(value => {
      expect(value.bands.length).toBeGreaterThan(2);
      let allCapabilities: Capability[] = value.families
          .reduce((a, b) => a.concat(b.capabilities), []);

      let promises: Promise<Map<string, string>>[] = value.bands.reduce((a, b) => a.concat(DataRow.makeRow(b, allCapabilities, data, () => 'Done')), []);
      promises.forEach(p => p.then(v => console.log(v)));
      console.log(promises);
      done();
    });

  });
});
