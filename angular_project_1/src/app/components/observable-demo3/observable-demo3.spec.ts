import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableDemo3 } from './observable-demo3';

describe('ObservableDemo3', () => {
  let component: ObservableDemo3;
  let fixture: ComponentFixture<ObservableDemo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableDemo3],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableDemo3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
