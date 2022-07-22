import { TestBed } from '@angular/core/testing';
import { DummyService } from './dummy.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DummyService', () => {
  let service: DummyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DummyService]
    });

    service = TestBed.get(DummyService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
