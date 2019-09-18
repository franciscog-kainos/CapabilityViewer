import { JobFamilyColumns } from './job-family-columns';
import {TestBed} from "@angular/core/testing";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./data.service";
import {Role} from "./Role";
import {Capability} from "./Capability";

describe('BandColumn', () => {
  let data: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });
    data = TestBed.get(DataService);
  });

  it('should create an instance', () => {
    expect(JobFamilyColumns.populateChildren(data, () => '')).toBeTruthy();
  });

  it('should not return a null capability table object', (done: DoneFn) => {
    data.getCapability(1).subscribe(value => {
      let capability = Capability.fromICapability(value);
      data.getRolesInCapabilityInJobFamily(capability.capability_id, capability.job_family_id).subscribe(roles => {
        expect(Capability.fromICapability(value).asTableObject).toBeTruthy();
        capability.roles = roles.map(role => Role.fromIRole(role));
        expect(capability.roles).toBeTruthy();
        expect(capability.roles.length).toBeGreaterThan(0);
        console.log(capability.asTableObject());
        done();
      });

    });
  });

  it('show the columns', (done: DoneFn) => {
    const fam = JobFamilyColumns.populateChildren(data, () => '');
    fam.then(f => {
      expect(f.asColumnDef).toBeTruthy();
      console.log(f.asColumnDef());
      done();
    });

  })
});
