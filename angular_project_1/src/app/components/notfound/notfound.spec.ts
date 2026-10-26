import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Notfound } from './notfound';

describe('Notfound', () => {
  let component: Notfound;
  let fixture: ComponentFixture<Notfound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notfound],
    }).compileComponents();

    fixture = TestBed.createComponent(Notfound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
