import { Button, Card } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';
import { AttachmentList } from '@/features/file';
import { dayjs } from '@/lib/dayjs';
import { clsx } from '@/utils/format';

import { useComplain } from '../api';
import { ComplainBadge, ComplainReplies, ReplyForm } from '../components';

export const ComplainDetail: React.FC = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();
  const { data: complain, isLoading, isError } = useComplain({ id: id as string });

  function handleReply() {
    if (!complain) return;

    modals.open({
      modalId: 'complain-reply',
      title: 'Balas Komplain',
      size: 'xl',
      children: (
        <ReplyForm
          complain={complain.id}
          onCancel={() => modals.close('complain-reply')}
          onSuccess={() => modals.close('complain-reply')}
        />
      ),
    });
  }

  if (isLoading)
    return (
      <div className="mt-48">
        <LoadingScreen />
      </div>
    );

  if (isError)
    return (
      <div className="mt-48 text-center">
        <h1 className="text-lg font-bold mb-2">Data komplain tidak ditemukan</h1>
        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={14} />}>
          Kembali
        </Button>
      </div>
    );

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Detail Komplain</h1>
      </div>

      <Card>
        <Card.Section px="lg" py="md" withBorder>
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-3 border-b border-gray-300 pb-4">
            <div className="flex-grow">
              <ComplainBadge status={complain.status} radius="sm" />
              <h1 className="font-bold text-xl text-gray-800 mt-1 mb-1">
                {complain.title} #{complain.id}
              </h1>
              <p className="text-xs text-gray-600">
                Dibuka oleh <span className="font-bold">{complain.customer.name}</span> pada{' '}
                {dayjs(complain.createdAt).fromNow()}.
              </p>
            </div>
            <div className="text-sm md:text-base">
              Priority:{' '}
              <span
                className={clsx(
                  'capitalize',
                  complain.priority == 'high'
                    ? 'text-red-600'
                    : complain.priority == 'medium'
                    ? 'text-primary-600'
                    : 'text-green-600'
                )}
              >
                {complain.priority}
              </span>
            </div>
          </div>
          <div className="pt-4">
            <div
              className="prose prose-sm mb-4"
              dangerouslySetInnerHTML={{ __html: complain.detail }}
            />

            <AttachmentList files={complain.complain_files.map(({ filename }) => filename)} />
          </div>

          <section className="mt-6">
            <div className="mb-2">
              <h3 className="text-base font-bold">Balasan</h3>
            </div>

            <ComplainReplies replies={complain.complain_reply} />
          </section>
        </Card.Section>
        <Card.Section p="lg">
          <div className="flex items-center space-x-2">
            <Button onClick={handleReply}>Reply</Button>
            <Button color="red">Close</Button>
          </div>
        </Card.Section>
      </Card>
    </main>
  );
};
