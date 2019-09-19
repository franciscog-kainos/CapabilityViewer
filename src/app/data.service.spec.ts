import {async, inject, TestBed, tick} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClientModule, HttpResponse} from "@angular/common/http";
import {HttpTestingController} from "@angular/common/http/testing";
import {of} from "rxjs";


describe('DataService', () => {
    let data: DataService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [DataService]
        });
        data = TestBed.get(DataService);
    });

    it('should be created',(done: DoneFn) => {
        data.testConnection().subscribe(value => {
          expect(value).toBeTruthy();
          expect(value).toEqual({'name': 'Hello World'});
          done();
        });
    });


    it('should return a job family',(done: DoneFn) => {
        data.getJobFamily(1).subscribe(value => {
            expect(value).toBeTruthy();
            done();
        });
    });
    it('should return all job families',(done: DoneFn) => {
        data.getAllJobFamilies().subscribe(value => {
            expect(value).toBeTruthy();
            expect(value.length).toBeGreaterThan(2);
            done();
        });
    });


    it('should return a list of capabilities in the job family',(done: DoneFn) => {
        data.getCapabilitiesInJobFamily(1).subscribe(value => {
            expect(value).toBeTruthy();
            done();
        });
    });

  it('should return more than one capability',(done: DoneFn) => {
      data.getCapabilitiesInJobFamily(1).subscribe(value => {
        expect(value.length).toBeGreaterThan(1);
        done();
      });
  });

  it('should return more than one role',(done: DoneFn) => {
    data.getRolesInCapabilityInJobFamily(1, 1).subscribe(value => {
      expect(value.length).toBeGreaterThan(1);
      done();
    });
  });

    it('should return more than one role in the band',(done: DoneFn) => {
        data.getRolesInBand(1).subscribe(value => {
            expect(value.length).toBeGreaterThan(1);
            done();
        });
    });

    it('should return a user', (done: DoneFn) => {
       data.getUser(1).subscribe(value => {
           expect(value).toBeTruthy();
           done();
       })
    });


});
