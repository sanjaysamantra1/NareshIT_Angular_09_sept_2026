import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDemo1 } from './form-demo1';

describe('FormDemo1', () => {
  let component: FormDemo1;
  let fixture: ComponentFixture<FormDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
