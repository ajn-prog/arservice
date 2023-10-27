import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

export type Unit = {
  name: string;
} & BaseEntity;

export type UnitDTO = {
  name?: string;
};

export type UnitQuery = {
  search?: string;
} & Pagination;
