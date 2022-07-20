import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CobaLagiListComponent } from './coba-lagi-list.component';
import { CobaLagiService } from '../coba-lagi.service';

describe('CobaLagiListComponent', () => {
  let component: CobaLagiListComponent;
  let fixture: ComponentFixture<CobaLagiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobaLagiListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CobaLagiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobaLagiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
