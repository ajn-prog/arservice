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
  profile: Profile;
};

export type Biodata = {
  user_id: number;
  hospital_code: string;
  name: string;
  sector: string;
  owner: string;
  classes: string;
  address: string;
  kecamatan_id: number;
  phone_number: string;
  latitude: number | string;
  longitude: number | string;
  kecamatan: District;
  user: User;
} & BaseEntity;

export type BiodataDTO = {
  kecamatan_id?: number | string;
  hospital_code?: string;
  name?: string;
  sector?: string;
  owner?: string;
  classes?: string;
  address?: string;
  phone_number?: string;
  latitude?: number | string;
  longitude?: number | string;
  email?: string;
  password?: string;
};

export type Profile = {
  customer_id: number;
  kelurahan_id: number;
  name: string;
  phone: string;
  address: string;
  position: string;
  kelurahan: Village;
} & BaseEntity;

export type Stakeholder = {
  name: string;
  phone: string;
  tool_type: string | null;
  address: string;
  position: string;
} & BaseEntity;

export type StakeholderDTO = Array<{
  name?: string;
  phone?: string;
  tool_type?: string;
}>;
