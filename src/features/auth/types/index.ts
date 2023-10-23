export type Creds = {
  name: string;
  phone: string;
  email: string;
  role: 'Superadmin' | 'Admin';
  agency: string;
  is_from_arkan: number;
  display_picture: string;
};
