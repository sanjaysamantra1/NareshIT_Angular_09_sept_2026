import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalDemo2 } from './signal-demo2';

describe('SignalDemo2', () => {
  let component: SignalDemo2;
  let fixture: ComponentFixture<SignalDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDemo2],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalDemo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
