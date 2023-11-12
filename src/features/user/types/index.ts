import { District, Village } from '@/features/region';
import { BaseEntity } from '@/types/entity';

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

export type Biodata = {
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
  kecamatan: District;
} & BaseEntity;

export type Profile = {
  customer_id: number;
  kelurahan_id: number;
  name: string;
  phone: string;
  address: string;
  position: string;
  kelurahan: Village;
} & BaseEntity;
