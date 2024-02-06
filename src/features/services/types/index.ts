import { Agency } from '@/features/agencies';
import { InstallationItem } from '@/features/installations';
import { Engineer } from '@/features/user';
import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

export type ServiceType = 'Customer Visit' | 'Corective Maintenance' | 'Preventive Maintenance';

export type ServiceFile = {
  service_id: number;
  filename: string;
} & BaseEntity;

export type Service = {
  id: number;
  customer_id: number;
  engineer_id: number;
  installbase_detail_id: number;
  placement_space: string;
  buying: string;
  serial_number: string;
  pic_name: string;
  pic_phone: string;
  description: string;
  type_service: ServiceType;
  created_at: string;
  updated_at: string;
  customer: Agency;
  installbase_detail: InstallationItem;
  engineer: Engineer;
  service_files: ServiceFile[];
} & BaseEntity;

export type ServiceInternalDTO = {
  customer_id?: number | string;
  installbase_id?: number | string;
  buying?: string;
  serial_number?: string;
  pic_name?: string;
  pic_phone?: string;
  description?: string;
  type_service?: ServiceType;
  placement_space?: string;
};

export type ServiceExternalDTO = {
  customer_id?: number | string;
  buying?: string;
  serial_number?: string;
  pic_name?: string;
  pic_phone?: string;
  description?: string;
  type_service?: ServiceType;
  brand_name?: string;
  product_name?: string;
  placement_space?: string;
};

export type ServiceConfirmDTO = {
  filename: File[];
};

export type ServiceQuery = Pagination;
