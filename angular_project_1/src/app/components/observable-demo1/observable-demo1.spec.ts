import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableDemo1 } from './observable-demo1';

describe('ObservableDemo1', () => {
  let component: ObservableDemo1;
  let fixture: ComponentFixture<ObservableDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
