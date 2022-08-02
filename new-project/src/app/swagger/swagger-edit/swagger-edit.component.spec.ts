import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwaggerEditComponent } from './swagger-edit.component';
import { SwaggerService } from '../swagger.service';

describe('SwaggerEditComponent', () => {
  let component: SwaggerEditComponent;
  let fixture: ComponentFixture<SwaggerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwaggerEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [SwaggerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
