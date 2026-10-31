import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterDemo } from './counter-demo';

describe('CounterDemo', () => {
  let component: CounterDemo;
  let fixture: ComponentFixture<CounterDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
