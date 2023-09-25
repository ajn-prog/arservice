import { BaseEntity } from '@/types/entity';

export type Unit = {
  name: string;
} & BaseEntity;

export type Category = {
  name: string;
} & BaseEntity;

export type Brand = {
  name: string;
} & BaseEntity;

export type Product = {
  date_entry: Date;
  code: string;
  name: string;
  brand: Brand;
  category: Category;
  unit: Unit;
} & BaseEntity;
