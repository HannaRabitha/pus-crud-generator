import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CobacobaListComponent } from './cobacoba-list.component';
import { CobacobaService } from '../cobacoba.service';

describe('CobacobaListComponent', () => {
  let component: CobacobaListComponent;
  let fixture: ComponentFixture<CobacobaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobacobaListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CobacobaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobacobaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
