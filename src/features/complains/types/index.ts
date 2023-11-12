import { Installation } from '@/features/installations';
import { BaseEntity } from '@/types/entity';

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
  };
} & BaseEntity;

export type ComplainStatus = 'open' | 'closed';

export type ComplainPriority = 'low' | 'medium' | 'high';

export type Complain = {
  installbase_id: number;
  title: string;
  status: string;
  priority: string;
  detail: string;
  placement_space: string;
  installbase: Installation;
  complain_files: ComplainFile[];
  complain_reply: ComplainReply[];
} & BaseEntity;

export type ComplainDTO = {
  installbase_id: number | string;
  title: string;
  status: ComplainStatus;
  priority: ComplainPriority;
  detail: string;
  placement_space: string;
  filename: File[];
};

export type ReplyDTO = {
  complain_id: number;
  detail: string;
  filename: File[];
};
