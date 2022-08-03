import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwagEditComponent } from './swag-edit.component';
import { SwagService } from '../swag.service';

describe('SwagEditComponent', () => {
  let component: SwagEditComponent;
  let fixture: ComponentFixture<SwagEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwagEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [SwagService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwagEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
