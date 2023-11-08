export type Engineer = {
  id: number;
  name: string;
  phone: string;
  address: string;
  display_picture: string | null;
  isActive: boolean | number;
  user_id: number;
};

export type User = {
  name: string;
  phone: string;
  email: string;
  role: 'Superadmin' | 'Admin' | 'Customer';
  agency: string;
  is_from_arkan: number;
  display_picture: string;
};
