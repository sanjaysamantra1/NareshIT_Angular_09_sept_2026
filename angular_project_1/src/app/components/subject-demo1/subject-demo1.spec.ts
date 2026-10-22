import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectDemo1 } from './subject-demo1';

describe('SubjectDemo1', () => {
  let component: SubjectDemo1;
  let fixture: ComponentFixture<SubjectDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
