import { Rating } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconUser } from '@tabler/icons-react';
import dayjs from 'dayjs';

import { useAuth } from '@/features/auth';
import { AttachmentList } from '@/features/file';

import { useRateComplain } from '../api';
import { ComplainReply } from '../types';

type Props = {
  replies: ComplainReply[];
};

export const ComplainReplies: React.FC<Props> = ({ replies }) => {
  const { creds } = useAuth();
  const rateMutation = useRateComplain();

  async function handleRate(id: number, rate: number) {
    await rateMutation.mutateAsync(
      { data: { complain_reply_id: id, rate } },
      {
        onSuccess: () =>
          notifications.show({ message: 'Terima kasih atas feedback Anda', color: 'green' }),
        onError: () => notifications.show({ message: 'Gagal menambah rating', color: 'red' }),
      }
    );
  }

  if (replies.length == 0) return <div className="text-gray-600">Belum ada balasan</div>;

  return (
    <div className="space-y-4">
      {replies.map((reply) => (
        <div key={reply.id} className="border border-gray-300 rounded-md">
          <div className="p-4 border-b border-gray-300 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-200 text-gray-600 rounded-full">
                <IconUser size={24} />
              </div>
              <div>
                <div className="font-semibold text-sm">{reply.user.profile.name}</div>
                <div className="text-xs text-gray-600">
                  {dayjs(reply.created_at).format('D MMMM YYYY HH:mm')}
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div
              className="prose prose-sm mb-2"
              dangerouslySetInnerHTML={{ __html: reply.detail }}
            />

            <AttachmentList files={reply.complain_files.map(({ filename }) => filename)} />

            <div className="mt-3">
              <Rating
                value={reply.rate}
                readOnly={creds?.role != 'Customer'}
                onChange={(v) => {
                  if (!rateMutation.isLoading) handleRate(reply.id, v);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
