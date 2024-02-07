import { Button, Card } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import {
  IconArrowLeft,
  IconBrandWhatsapp,
  IconMapPin,
  IconMessage,
  IconPhoneCall,
} from '@tabler/icons-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';
import { Authorization, useAuth } from '@/features/auth';
import { AttachmentList } from '@/features/file';
import { dayjs } from '@/lib/dayjs';
import { clsx } from '@/utils/format';

import { useCloseComplain, useComplain, useOpenCall } from '../api';
import { ComplainBadge, ComplainReplies, ReplyForm, VisitForm } from '../components';

export const ComplainDetail: React.FC = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();
  const closeMutation = useCloseComplain();
  const callMutation = useOpenCall();
  const { creds } = useAuth();
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

  function handleVisit() {
    if (!complain) return;

    modals.open({
      modalId: 'complain-visit',
      title: 'Form Rencana Kunjungan',
      size: 'xl',
      children: (
        <VisitForm
          complain={complain.id}
          onCancel={() => modals.close('complain-visit')}
          onSuccess={() => modals.close('complain-visit')}
        />
      ),
    });
  }

  function handleCall() {
    modals.openConfirmModal({
      title: 'Open Call',
      children: (
        <div className="text-sm">
          Apakah anda yakin untuk &apos;open call&apos; untuk komplain ini?
        </div>
      ),
      centered: true,
      onConfirm: async () => {
        await callMutation.mutateAsync(
          { data: { id: complain?.id || '', is_open_call: 'true' } },
          {
            onSuccess: () => {
              notifications.show({
                message: 'Call berhasil dibuka',
                color: 'green',
              });
              modals.closeAll();
            },
            onError: () => {
              notifications.show({
                message: 'Call gagal dibuka',
                color: 'red',
              });
              modals.closeAll();
            },
          }
        );
      },
    });
  }

  function handleClose() {
    modals.openConfirmModal({
      title: 'Tutup Komplain',
      children: <div className="text-sm">Apakah anda yakin untuk menutup komplain ini?</div>,
      centered: true,
      onConfirm: async () => {
        await closeMutation.mutateAsync(
          { id: complain!.id, data: { status: 'close' } },
          {
            onSuccess: () => {
              notifications.show({
                message: 'Komplain berhasil ditutup',
                color: 'green',
              });
              modals.closeAll();
            },
            onError: () => {
              notifications.show({
                message: 'Komplain gagal dihapus',
                color: 'red',
              });
              modals.closeAll();
            },
          }
        );
      },
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
                {dayjs(complain.created_at).fromNow()}.
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
            <div className="flex justify-end mt-4"></div>
          </section>
        </Card.Section>
        <Card.Section p="lg">
          <div className="flex items-center space-x-2">
            <Authorization role={['Engineer']}>
              <Button onClick={handleVisit} leftSection={<IconMapPin size={16} />} color="yellow">
                Visit
              </Button>
            </Authorization>
            <Button onClick={handleReply} leftSection={<IconMessage size={16} />}>
              Reply
            </Button>
            {!complain.user_engineer && creds?.role != 'Customer' && (
              <Button onClick={handleCall} color="teal" leftSection={<IconPhoneCall size={16} />}>
                Open Call
              </Button>
            )}
            {complain.user_engineer && creds?.role == 'Customer' && (
              <Button
                component={Link}
                to={`https://wa.me/${complain.user_engineer.profile.phone}`}
                target="_blank"
                color="green"
                leftSection={<IconBrandWhatsapp size={16} />}
              >
                Hubungi Teknisi
              </Button>
            )}
            {complain.status != 'close' && (
              <Button color="red" onClick={handleClose}>
                Close
              </Button>
            )}
            <Button component={Link} to="/complain" variant="light" color="gray.6" bg="gray.2">
              Kembali
            </Button>
          </div>
        </Card.Section>
      </Card>
    </main>
  );
};
