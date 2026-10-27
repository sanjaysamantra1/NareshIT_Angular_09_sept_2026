import { CanActivateFn } from '@angular/router';
import { UserInformationService } from '../services/user-information-service';
import { inject } from '@angular/core';

export const trainerGuard: CanActivateFn = (route, state) => {
  let userInformationService = inject(UserInformationService);

  if (userInformationService.getUserRole() == 'trainer') {
    return true;
  } else {
    alert('You dont have access to this page');
    return false;
  }
};
