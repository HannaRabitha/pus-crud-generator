import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwagListComponent } from './swag-list.component';
import { SwagService } from '../swag.service';

describe('SwagListComponent', () => {
  let component: SwagListComponent;
  let fixture: ComponentFixture<SwagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwagListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [SwagService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
