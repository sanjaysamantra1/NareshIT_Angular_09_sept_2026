import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesDemo } from './pipes-demo';

describe('PipesDemo', () => {
  let component: PipesDemo;
  let fixture: ComponentFixture<PipesDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
