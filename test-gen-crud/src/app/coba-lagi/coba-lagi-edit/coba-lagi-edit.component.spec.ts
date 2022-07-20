import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CobaLagiEditComponent } from './coba-lagi-edit.component';
import { CobaLagiService } from '../coba-lagi.service';

describe('CobaLagiEditComponent', () => {
  let component: CobaLagiEditComponent;
  let fixture: ComponentFixture<CobaLagiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobaLagiEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CobaLagiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobaLagiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
