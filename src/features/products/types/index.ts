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

export type Category = {
  name: string;
} & BaseEntity;

export type CategoryDTO = {
  name?: string;
};

export type CategoryQuery = {
  search?: string;
} & Pagination;

export type Brand = {
  name: string;
} & BaseEntity;

export type BrandDTO = {
  name?: string;
};

export type BrandQuery = {
  search?: string;
} & Pagination;

export type Product = {
  date_entry: Date;
  code: string;
  name: string;
  brand: Brand;
  category: Category;
  unit: Unit;
} & BaseEntity;
