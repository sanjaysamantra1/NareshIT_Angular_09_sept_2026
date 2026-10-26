import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Careers } from './careers';

describe('Careers', () => {
  let component: Careers;
  let fixture: ComponentFixture<Careers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Careers],
    }).compileComponents();

    fixture = TestBed.createComponent(Careers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
