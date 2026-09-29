import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Body } from './body';

describe('Body', () => {
  let component: Body;
  let fixture: ComponentFixture<Body>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Body],
    }).compileComponents();

    fixture = TestBed.createComponent(Body);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
