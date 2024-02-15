import { Agency } from '@/features/agencies';
import { InstallationItem } from '@/features/installations';
import { User } from '@/features/user';
import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

type UserProfile = {
  email: string;
  profile: {
    name: string;
    phone: string;
    display_picture: string;
    is_active: string;
    is_open_call: number;
  };
};

export type ComplainFile = {
  complain_id: number;
  complain_reply_id: number | null;
  filename: string;
} & BaseEntity;

export type ComplainReply = {
  complain_id: number;
  user_id: number;
  detail: string;
  rate: number;
  complain_files: ComplainFile[];
  user: {
    email: string;
    profile: {
      name: string;
      phone: string;
      display_picture: string;
      is_active: string;
      is_open_call: number;
    };
    roles: { id: number; name: string }[];
  };
} & BaseEntity;

export type ComplainStatus = 'waiting' | 'progress' | 'close';

export type ComplainPriority = 'low' | 'medium' | 'high';

export type Complain = {
  installbase_detail_id: number;
  title: string;
  status: ComplainStatus;
  priority: ComplainPriority;
  detail: string;
  placement_space: string;
  installbase_detail: InstallationItem;
  user: User;
  customer: Agency;
  user_engineer?: UserProfile;
  complain_files: ComplainFile[];
  complain_reply: ComplainReply[];
} & BaseEntity;

export type ComplainDTO = {
  installbase_id?: number | string;
  title?: string;
  status?: ComplainStatus;
  priority?: ComplainPriority;
  detail?: string;
  placement_space?: string;
  filename: File[];
  buying?: 'external' | 'internal';
  product_name?: string;
  serial_number?: string;
  brand_name?: string;
};

export type ComplainQuery = {
  customer_id?: string;
  status?: ComplainStatus;
} & Pagination;

export type ReplyDTO = {
  complain_id: number;
  detail: string;
  filename: File[];
};
