import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

export type Brand = {
  name: string;
} & BaseEntity;

export type BrandDTO = {
  name?: string;
};

export type BrandQuery = {
  search?: string;
} & Pagination;
