import { TestBed } from '@angular/core/testing';
import { CobaLagiService } from './coba-lagi.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CobaLagiService', () => {
  let service: CobaLagiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CobaLagiService]
    });

    service = TestBed.get(CobaLagiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
