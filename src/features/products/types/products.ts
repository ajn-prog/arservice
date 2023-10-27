import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

import { Brand } from './brands';
import { Category } from './categories';
import { Unit } from './units';

export type Product = {
  date_entry: Date;
  code: string;
  name: string;
  brand: Brand;
  category: Category;
  unit: Unit;
} & BaseEntity;

export type ProductQuery = {
  search?: string;
} & Pagination;
