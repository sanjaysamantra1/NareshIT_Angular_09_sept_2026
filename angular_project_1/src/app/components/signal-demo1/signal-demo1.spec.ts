import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalDemo1 } from './signal-demo1';

describe('SignalDemo1', () => {
  let component: SignalDemo1;
  let fixture: ComponentFixture<SignalDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
