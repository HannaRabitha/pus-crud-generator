import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CekListComponent } from './cek-list.component';
import { CekService } from '../cek.service';

describe('CekListComponent', () => {
  let component: CekListComponent;
  let fixture: ComponentFixture<CekListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CekListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CekService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
