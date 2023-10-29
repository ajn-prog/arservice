import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

export type Tender = {
  name: string;
} & BaseEntity;

export type TenderQuery = {
  status?: string;
} & Pagination;
