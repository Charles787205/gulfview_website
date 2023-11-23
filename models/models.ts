/* Models in the database */

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  id?: number;
}

export interface OfficerProfile {
  user: User;
  userId: number;
  position: string;
}
