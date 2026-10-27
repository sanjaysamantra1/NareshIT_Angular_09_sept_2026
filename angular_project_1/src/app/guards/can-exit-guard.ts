import { CanDeactivateFn } from '@angular/router';

export const canExitGuard: CanDeactivateFn<unknown> = (
  component: any,
  currentRoute,
  currentState,
  nextState,
) => {
  if (component.hasChanges) {
    alert('Please save your changes before moving out of this page');
    return false;
  } else {
    return true;
  }
};
