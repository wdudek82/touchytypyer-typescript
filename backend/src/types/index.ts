export enum UserType {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  type: UserType;
}

export interface Exercise {
  id: string;
  author: string;
  title: string;
  text: string;
  isPublic: boolean;
  createdAt: string,
  updatedAt: string,
}

export interface Database {
  users: User[];
  exercises: Exercise[];
}
