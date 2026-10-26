import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Userdetails } from './userdetails';

describe('Userdetails', () => {
  let component: Userdetails;
  let fixture: ComponentFixture<Userdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Userdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
