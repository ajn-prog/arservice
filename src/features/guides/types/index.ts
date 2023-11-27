import { Product } from '@/features/products';
import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

export type Guide = {
  product_id: number;
  title: string;
  description: string;
  image: string;
  video: string | null;
  product: Product;
} & BaseEntity;

export type GuideDTO = {
  product_id?: number | string;
  title: string;
  description: string;
  video?: string;
  image?: File;
};

export type GuideQuery = {
  product_id?: string | number;
} & Pagination;
