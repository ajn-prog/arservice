import { Pagination } from '@/types/api';

export type Province = {
  id: number;
  name: string;
};

export type Regency = {
  id: number;
  name: string;
  province?: Province;
};

export type District = {
  id: number;
  name: string;
  regency?: Regency;
};

export type Village = {
  id: number;
  name: string;
  district?: District;
};

export type ProvinceQuery = {
  keyword?: string;
} & Pagination;

export type RegencyQuery = {
  keyword?: string;
  province?: number;
} & Pagination;

export type DistrictQuery = {
  keyword?: string;
  regency?: number;
} & Pagination;

export type VillageQuery = {
  keyword?: string;
  district?: number;
} & Pagination;
