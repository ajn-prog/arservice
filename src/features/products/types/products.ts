import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

import { Brand } from './brands';
import { Category } from './categories';
import { Unit } from './units';

export type ProductType = 'main' | 'accessories' | 'preventive';

export type ProductImage = {
  product_id: number | string;
  image: string;
} & BaseEntity;

export type Product = {
  brand_id: number;
  category_product_id: number;
  unit_product_id: number;
  modality_product_id: number;
  product_code: string | null;
  name: string;
  description: string;
  price: number;
  catalogue_link: string;
  type: ProductType;
  stock: number;
  warranty: number;
  plat_number: string;
  serial_number: any;
  location: any;
  is_consumable: number;
  date_entry: any;
  admin_user_id: any;
  brand: Brand;
  category: Category;
  unit?: Unit;
  images: ProductImage[];
} & BaseEntity;

export type ProductUnitDTO = {
  brand_id?: string | number;
  category_product_id?: string | number;
  unit_product_id?: string | number;
  modality_product_id?: string | number;
  product_code?: string;
  date_entry?: string;
  name?: string;
  type?: ProductType;
};

export type ProductAccessoryDTO = {
  brand_id?: string | number;
  category_product_id?: string | number;
  unit_product_id?: string | number;
  product_code?: string;
  name?: string;
  date_entry?: string;
  type?: ProductType;
  price?: string;
  is_consumable?: string | boolean;
  images?: File[];
};

export type ProductPreventiveDTO = {
  category_product_id?: string | number;
  product_code?: string;
  name?: string;
  type?: ProductType;
  description?: string;
  images?: File[];
};

export type ProductQuery = {
  search?: string;
} & Pagination;
