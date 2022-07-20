import { TestBed } from '@angular/core/testing';
import { CobacobaService } from './cobacoba.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CobacobaService', () => {
  let service: CobacobaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CobacobaService]
    });

    service = TestBed.get(CobacobaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
