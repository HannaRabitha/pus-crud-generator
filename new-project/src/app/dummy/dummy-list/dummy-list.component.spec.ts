import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DummyListComponent } from './dummy-list.component';
import { DummyService } from '../dummy.service';

describe('DummyListComponent', () => {
  let component: DummyListComponent;
  let fixture: ComponentFixture<DummyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DummyListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [DummyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
