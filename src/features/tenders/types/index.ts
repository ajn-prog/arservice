import { Agency } from '@/features/agencies';
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

export type TenderStatus = 'pending' | 'approved' | 'rejected';

export type TenderItem = {
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  product: Product;
} & BaseEntity;

export type Tender = {
  customer_id: number;
  stakeholder_id: any;
  receipt_number: any;
  expedition: any;
  status: TenderStatus;
  details: TenderItem[];
  customer: Agency;
  recipient_address: string;
  recipient_name: string;
  recipient_phone: string;
  recipient_position: string;
} & BaseEntity;

export type TenderUpdateDTO = {
  status: TenderStatus;
  contract_value?: string | number;
  delivery_cost?: string | number;
};
