import { Agency } from '@/features/agencies';
import { Product } from '@/features/products';
import { Engineer } from '@/features/user';
import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

export type Contract = {
  engineers: Engineer[];
} & BaseEntity;

export type InstallationItem = {
  installbase_id: number;
  product_id: number;
  serial_number: string;
  warranty_month: string | number;
  product: Product;
} & BaseEntity;

export type Installation = {
  technical_contract_id: number;
  customer_id: number;
  installation_date: string;
  project_number: string;
  note: string;
  title: string;
  file: string | null;
  created_at: string;
  updated_at: string;
  customer: Agency;
  technical_contract: Contract;
  items: InstallationItem[];
} & BaseEntity;

export type InstallationDTO = {
  title?: string;
  customer_id?: number | string;
  installation_date?: string | Date | null;
  warranty_month?: number | string;
  serial_number?: number | string;
  project_number?: number | string;
  note?: string;
  engineer_ids?: Array<string | number>;
  file?: File;
  products: {
    product_id?: string;
    warranty_month?: number | string;
    serial_number?: string;
  }[];
};

export type InstallationQuery = {
  customer_id?: string;
} & Pagination;
