import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Child1Demo } from './child1-demo';

describe('Child1Demo', () => {
  let component: Child1Demo;
  let fixture: ComponentFixture<Child1Demo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1Demo],
    }).compileComponents();

    fixture = TestBed.createComponent(Child1Demo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
