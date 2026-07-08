export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
}

export const mockUsers: User[] = [
  {
    id: 1,
    fullName: "Nguyễn Văn A",
    email: "user@gmail.com",
    password: "123456",
    role: "USER",
  },
  {
    id: 2,
    fullName: "Admin IA Coffee",
    email: "admin@iacoffee.com",
    password: "admin123",
    role: "ADMIN",
  },
];