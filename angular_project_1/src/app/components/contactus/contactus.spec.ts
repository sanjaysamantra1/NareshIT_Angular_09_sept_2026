import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contactus } from './contactus';

describe('Contactus', () => {
  let component: Contactus;
  let fixture: ComponentFixture<Contactus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactus],
    }).compileComponents();

    fixture = TestBed.createComponent(Contactus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
