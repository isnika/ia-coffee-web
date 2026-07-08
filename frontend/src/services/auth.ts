import { mockUsers } from "../mock/users";

export const login = (email: string, password: string) => {
  return mockUsers.find(
    (user) =>
      user.email === email &&
      user.password === password
  );
};