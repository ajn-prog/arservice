import { District } from '@/features/region';
import { User } from '@/features/user';
import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

export type Agency = {
  hospital_code: string;
  name: string;
  sector: 'Private' | 'Public';
  owner: string;
  classes: 'A' | 'B' | 'C' | 'D' | 'D Pratama';
  address: string;
  kecamatan_id: number;
  phone_number: string;
  latitude: number;
  longitude: number;
  email: string;
  kecamatan: District;
  user: User;
} & BaseEntity;

export type AgencyDTO = {
  kecamatan_id?: string | number;
  name?: string;
  sector?: 'Private' | 'Public';
  owner?: string;
  classes?: 'A' | 'B' | 'C' | 'D' | 'D Pratama';
  address?: string;
  phone_number?: string;
  latitude?: number;
  longitude?: number;
  email?: string;
  password?: string;
  hospital_code?: string;
};

export type AgencyQuery = {
  search?: string;
} & Pagination;
