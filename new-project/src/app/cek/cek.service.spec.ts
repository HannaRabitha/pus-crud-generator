import { TestBed } from '@angular/core/testing';
import { CekService } from './cek.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CekService', () => {
  let service: CekService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CekService]
    });

    service = TestBed.get(CekService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
