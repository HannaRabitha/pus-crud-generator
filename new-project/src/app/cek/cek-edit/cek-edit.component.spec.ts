import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CekEditComponent } from './cek-edit.component';
import { CekService } from '../cek.service';

describe('CekEditComponent', () => {
  let component: CekEditComponent;
  let fixture: ComponentFixture<CekEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CekEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CekService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
