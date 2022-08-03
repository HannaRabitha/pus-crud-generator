import { TestBed } from '@angular/core/testing';
import { SwagService } from './swag.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SwagService', () => {
  let service: SwagService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwagService]
    });

    service = TestBed.get(SwagService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
