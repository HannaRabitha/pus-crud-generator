import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwaggerListComponent } from './swagger-list.component';
import { SwaggerService } from '../swagger.service';

describe('SwaggerListComponent', () => {
  let component: SwaggerListComponent;
  let fixture: ComponentFixture<SwaggerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwaggerListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [SwaggerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
