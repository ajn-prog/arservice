import { BaseEntity } from '@/types/entity';

export type Notification = {
  user_id: number;
  title: string;
  description: string;
  type: string;
  read: boolean;
  notification_reads: any[];
} & BaseEntity;
