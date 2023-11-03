import { BaseEntity } from '@/types/entity';

export type Guide = {
  product_id: number;
  title: string;
  description: string;
  image: string | null;
  video: string | null;
} & BaseEntity;

export type GuideList = {
  guide: Guide[];
} & BaseEntity;

export type GuideDTO = {
  product_id: number;
  title: string;
  description: string;
  video?: string;
  image: File;
};