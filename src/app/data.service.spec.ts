import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpClient, HttpClientModule, HttpHandler, HttpResponse} from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';

describe('DataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });
  });
  const dataService: DataService = TestBed.get(DataService);
  const httpMock: HttpTestingController = TestBed.get(HttpTestingController);


  it('should connect to the database', () => {
    dataService.checkHttpConnection().subscribe();
    const req = httpMock.expectOne('http://localhost:8002/api/', 'call to api');
    expect(req.request.method).toBe('GET');
  });

});
