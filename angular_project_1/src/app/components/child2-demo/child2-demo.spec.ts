import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Child2Demo } from './child2-demo';

describe('Child2Demo', () => {
  let component: Child2Demo;
  let fixture: ComponentFixture<Child2Demo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child2Demo],
    }).compileComponents();

    fixture = TestBed.createComponent(Child2Demo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
