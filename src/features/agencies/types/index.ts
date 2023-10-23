import { BaseEntity } from '@/types/entity';

export type Agency = {
  code: string;
  name: string;
  group: string;
  address: string;
  area: string;
} & BaseEntity;
