export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export interface UserInput {
  firstName: string;
  lastName: string;
  age: number;
}

export interface Action {
  success: boolean;
}
