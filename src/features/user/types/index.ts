export type UserRole = 'super admin' | 'admin' | 'walisantri' | 'kasir' | 'guru';

export type User = {
  id: number;
  username: string;
  role: UserRole;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserRequest = {
  username: string;
  password?: string;
  role: UserRole;
  status: boolean;
};

export type UserQuery = {
  page?: number;
  limit?: number;
  roles?: UserRole[];
};
