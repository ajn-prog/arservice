import { Product } from '@/features/products';
import { BaseEntity } from '@/types/entity';

export type Cart = {
  customer_id: number;
  product_id: number;
  quantity: number;
  product: Product;
} & BaseEntity;

export type Order = {
  customer_id: number;
  status: string;
  recipient_address?: string;
} & BaseEntity;
