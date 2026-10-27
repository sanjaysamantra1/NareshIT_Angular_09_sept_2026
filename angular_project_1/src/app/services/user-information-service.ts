import { Service } from '@angular/core';

@Service()
export class UserInformationService {
  // userRole: string = 'student';
  userRole:string = 'trainer';

  getUserRole() {
    return this.userRole;
  }
}
