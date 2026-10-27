import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { canExitGuard } from './can-exit-guard';

describe('canExitGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => canExitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
