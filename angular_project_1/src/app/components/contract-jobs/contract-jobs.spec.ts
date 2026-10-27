import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractJobs } from './contract-jobs';

describe('ContractJobs', () => {
  let component: ContractJobs;
  let fixture: ComponentFixture<ContractJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractJobs],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractJobs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
