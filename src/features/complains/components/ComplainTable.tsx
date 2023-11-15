import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEye, IconTrash, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';
import { Pagination } from '@/types/api';

import { useComplains, useDeleteComplain } from '../api';

import { ComplainBadge } from './ComplainBadge';

const initialParams: Pagination = {
  page: 1,
  limit: 10,
  search: '',
};

type Props = {
  toolbar?: React.ReactNode;
};

export const ComplainTable: React.FC<Props> = ({ toolbar }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useComplains({ params });
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
          <td>{complain.installbase.product.name}</td>
          <td>{complain.installbase.customer.name}</td>
          <td>
            <ComplainBadge status={complain.status} />
          </td>
          <td>{dayjs(complain.updatedAt).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <Button
                component={Link}
                leftSection={<IconEye size={16} />}
                to={`/complain/${complain.id}`}
                title="Update Komplain"
                color="primary"
                size="xs"
              >
                Detail
              </Button>
              <Button
                leftSection={<IconTrash size={16} />}
                onClick={handleRemove(complain.id)}
                title="Hapus Komplain"
                color="red"
                size="xs"
              >
                Hapus
              </Button>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
