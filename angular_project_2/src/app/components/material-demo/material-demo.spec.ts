import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialDemo } from './material-demo';

describe('MaterialDemo', () => {
  let component: MaterialDemo;
  let fixture: ComponentFixture<MaterialDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
