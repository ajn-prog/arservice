import { ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEye, IconTrash, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from '@/components/elements';
import { Authorization } from '@/features/auth';
import { PRODUCT_TYPES } from '@/features/products';
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
} & Pagination;

export const InstallationTable: React.FC<Props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useInstallations({ params: { ...params, ...props } });
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
      header={['#', 'Project Number', 'Nama Kegiatan', 'Produk', 'Rumah Sakit', 'Diperbaharui', '']}
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
      renderItem={(installation, i) => (
        <tr key={installation.id}>
          <td>{(params.limit ?? 5) * ((params.page ?? 0) - 1) + i + 1}</td>
          <td>{installation.project_number}</td>
          <td>{installation.title}</td>
          <td>
            {installation.items.length > 0 && (
              <>
                <div className="text-xs text-primary-600">
                  {PRODUCT_TYPES[installation.items[0].product.type]}
                </div>
                <div className="text-sm text-gray-900">{installation.items[0].product.name}</div>

                {installation.items.length > 1 && (
                  <div className="text-xs text-gray-600 mt-1">
                    + {installation.items.length - 1} produk lainnya
                  </div>
                )}
              </>
            )}
          </td>
          <td>{installation.customer.name}</td>
          <td>{dayjs(installation.updatedAt).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                variant="subtle"
                component={Link}
                to={`/installation/${installation.id}`}
                title="Detail Install Base"
                color="primary"
                radius="lg"
              >
                <IconEye size={18} />
              </ActionIcon>
              <Authorization role={['-Customer']}>
                <ActionIcon
                  variant="subtle"
                  onClick={handleRemove(installation.id)}
                  title="Hapus Install Base"
                  color="red"
                  radius="lg"
                >
                  <IconTrash size={18} />
                </ActionIcon>
              </Authorization>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
