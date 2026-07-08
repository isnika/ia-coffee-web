export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  avatar?: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    fullName: "Nguyễn Văn A",
    email: "user@iacoffee.com",
    password: "123456",
    role: "USER",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    fullName: "Admin IA Coffee",
    email: "admin@iacoffee.com",
    password: "admin123",
    role: "ADMIN",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
];