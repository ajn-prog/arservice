import { ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEye, IconTrash, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';

import { useComplains, useDeleteComplain } from '../api';
import { ComplainQuery } from '../types';

import { ComplainBadge } from './ComplainBadge';

type Props = {
  toolbar?: React.ReactNode;
} & ComplainQuery;

export const ComplainTable: React.FC<Props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState<ComplainQuery>({
    page: 1,
    limit: 10,
    search: '',
  });
  const { data, isLoading } = useComplains({ params: { ...params, ...props } });
  const deleteMutation = useDeleteComplain();

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus Komplain',
        children: <div className="text-sm">Apakah anda yakin untuk menghapus komplain ini?</div>,
        centered: true,
        closeOnConfirm: false,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'Komplain berhasil dihapus',
                  color: 'green',
                  icon: <IconCheck />,
                });
                modals.closeAll();
              },
              onError: () => {
                notifications.show({
                  message: 'Komplain tidak bisa dihapus',
                  color: 'red',
                  icon: <IconX />,
                });
                modals.closeAll();
              },
            }
          );
        },
      });
    };
  }

  return (
    <Table
      title="Tabel Data Komplain"
      toolbar={toolbar}
      header={['#', 'Judul', 'Prioritas', 'Produk', 'Instansi', 'Status', 'Diperbaharui', '']}
      items={data?.data}
      onPageChange={(page) => {
        setParams({ ...params, page });
      }}
      loading={isLoading}
      metadata={{
        count: data?.data.length || 10,
        limit: params.limit || 10,
        page: params.page || 10,
        total: data?.total || 10,
      }}
      renderItem={(complain, i) => (
        <tr key={complain.id}>
          <td>{(params.limit ?? 5) * ((params.page ?? 0) - 1) + i + 1}</td>
          <td>{complain.title}</td>
          <td className="capitalize">{complain.priority}</td>
          <td>{complain.installbase_detail.product.name}</td>
          <td>{complain.customer.name}</td>
          <td>
            <ComplainBadge status={complain.status} />
          </td>
          <td>{dayjs(complain.updated_at).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                component={Link}
                to={`/complain/${complain.id}`}
                title="Detail Komplain"
                color="gray"
                size="xs"
              >
                <IconEye size={16} />
              </ActionIcon>
              <ActionIcon
                onClick={handleRemove(complain.id)}
                title="Hapus Komplain"
                color="red"
                size="xs"
              >
                <IconTrash size={16} />
              </ActionIcon>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
