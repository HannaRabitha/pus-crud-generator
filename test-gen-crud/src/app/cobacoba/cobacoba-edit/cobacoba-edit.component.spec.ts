import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CobacobaEditComponent } from './cobacoba-edit.component';
import { CobacobaService } from '../cobacoba.service';

describe('CobacobaEditComponent', () => {
  let component: CobacobaEditComponent;
  let fixture: ComponentFixture<CobacobaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobacobaEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CobacobaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobacobaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
