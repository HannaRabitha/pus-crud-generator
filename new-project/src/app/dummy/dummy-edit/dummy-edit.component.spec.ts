import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DummyEditComponent } from './dummy-edit.component';
import { DummyService } from '../dummy.service';

describe('DummyEditComponent', () => {
  let component: DummyEditComponent;
  let fixture: ComponentFixture<DummyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DummyEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [DummyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
