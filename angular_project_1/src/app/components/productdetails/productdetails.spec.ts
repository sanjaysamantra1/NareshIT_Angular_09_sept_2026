import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Productdetails } from './productdetails';

describe('Productdetails', () => {
  let component: Productdetails;
  let fixture: ComponentFixture<Productdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Productdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
