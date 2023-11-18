import { Agency } from '@/features/agencies';
import { Product } from '@/features/products';
import { BaseEntity } from '@/types/entity';

export type Installation = {
  title: string;
  technical_contract_id: any;
  product_id: number;
  customer_id: number;
  installation_date_estimation: string;
  installation_date: string;
  warranty_month: number;
  serial_number: string;
  project_number: string;
  note: string;
  customer: Agency;
  product: Product;
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
    product_id?: number | string;
    warranty_month?: number | string;
    serial_number?: number | string;
  }[];
};
