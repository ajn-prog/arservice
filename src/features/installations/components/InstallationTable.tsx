import { ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEdit, IconTrash, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';
import { Pagination } from '@/types/api';

import { useInstallations, useDeleteInstallation } from '../api';

const initialParams: Pagination = {
  page: 1,
  limit: 10,
  search: '',
};

type Props = {
  toolbar?: React.ReactNode;
};

export const InstallationTable: React.FC<Props> = ({ toolbar }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useInstallations({ params });
  const deleteMutation = useDeleteInstallation();

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus Install Base',
        children: (
          <div className="text-sm">Apakah anda yakin untuk menghapus install Base ini?</div>
        ),
        centered: true,
        closeOnConfirm: false,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'Install Base berhasil dihapus',
                  color: 'green',
                  icon: <IconCheck />,
                });
                modals.closeAll();
              },
              onError: () => {
                notifications.show({
                  message: 'Install Base tidak bisa dihapus',
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
      title="Tabel Data Install Base"
      toolbar={toolbar}
      header={['Project Number', 'Rumah Sakit', 'Produk', 'Diperbaharui', '']}
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
      renderItem={(installation) => (
        <tr key={installation.id}>
          <td>{installation.project_number}</td>
          <td>{installation.customer.name}</td>
          <td>{installation.product.name}</td>
          <td>{dayjs(installation.updatedAt).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                variant="subtle"
                component={Link}
                to={`/installation/${installation.id}`}
                title="Update Install Base"
                color="primary"
                radius="lg"
              >
                <IconEdit size={18} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                onClick={handleRemove(installation.id)}
                title="Hapus Install Base"
                color="red"
                radius="lg"
              >
                <IconTrash size={18} />
              </ActionIcon>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
