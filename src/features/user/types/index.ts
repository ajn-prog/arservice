export type Engineer = {
  id: number;
  name: string;
  phone: string;
  address: string;
  display_picture: string | null;
  isActive: boolean | number;
  user_id: number;
};

export type UserAdmin = {
  name: string;
  phone: string;
  email: string;
  role: string;
  agency: string;
  is_from_arkan: number;
  display_picture: string;
};

export type UserCustomer = {
  id: number;
  hospital_code: string;
  name: string;
  sector: string;
  owner: string;
  classes: string;
  address: string;
  kecamatan_id: number;
  phone_number: string;
  latitude: string;
  longitude: string;
  email: string;
  created_at: string | Date;
};
