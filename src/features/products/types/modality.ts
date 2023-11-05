import { BaseEntity } from '@/types/entity';

export type Modality = {
  name: string;
} & BaseEntity;

export type ModalityDTO = {
  name?: string;
};
