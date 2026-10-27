import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermanentJobs } from './permanent-jobs';

describe('PermanentJobs', () => {
  let component: PermanentJobs;
  let fixture: ComponentFixture<PermanentJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentJobs],
    }).compileComponents();

    fixture = TestBed.createComponent(PermanentJobs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
