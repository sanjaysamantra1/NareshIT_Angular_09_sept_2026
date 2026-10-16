export interface User { // User Model = Defines the structure of User Object
  id: number;
  userName: string;
  name: string;
  email: string;
  phone: number;
  address: { city: string };
}
