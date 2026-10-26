export interface User { // User Model = Defines the structure of User Object
  id: number;
  username: string;
  name: string;
  email: string;
  phone: number;
  address: { city: string };
}
