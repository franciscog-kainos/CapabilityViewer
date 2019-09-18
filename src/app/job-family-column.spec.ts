import { JobFamilyColumn } from './job-family-column';
import {TestBed} from "@angular/core/testing";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./data.service";
import {Role} from "./Role";
import {Capability} from "./Capability";

describe('BandColumn', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });
  });

  it('should create an instance', () => {
    expect(new JobFamilyColumn()).toBeTruthy();
  });

  it('should not return a null role table object', (done: DoneFn) => {
    let data: DataService = TestBed.get(DataService);
    data.getRole(7).subscribe(value => {
      expect(Role.fromIRole(value).asTableObject).toBeTruthy();
      done();
    });
  });

  it('should not return a null capability table object', (done: DoneFn) => {
    let data: DataService = TestBed.get(DataService);
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
    const fam = new JobFamilyColumn();
    let data = TestBed.get(DataService);
    fam.populateChildren(data, 1, () => {
      console.log(fam.family.asTableObject());
      done();
    });

  })
});
