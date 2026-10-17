import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableDemo2 } from './observable-demo2';

describe('ObservableDemo2', () => {
  let component: ObservableDemo2;
  let fixture: ComponentFixture<ObservableDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableDemo2],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableDemo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
