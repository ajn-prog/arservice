import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

export type Category = {
  name: string;
} & BaseEntity;

export type CategoryDTO = {
  name?: string;
};

export type CategoryQuery = {
  search?: string;
} & Pagination;
