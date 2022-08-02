import { TestBed } from '@angular/core/testing';
import { SwaggerService } from './swagger.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SwaggerService', () => {
  let service: SwaggerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwaggerService]
    });

    service = TestBed.get(SwaggerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
