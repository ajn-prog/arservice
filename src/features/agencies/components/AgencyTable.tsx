import { ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEdit, IconTrash, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from '@/components/elements';
import { Authorization } from '@/features/auth';
import { dayjs } from '@/lib/dayjs';

import { useAgencies, useDeleteAgency } from '../api';
import { AgencyQuery } from '../types';

const initialParams: AgencyQuery = {
  page: 1,
  limit: 10,
  search: '',
};

type Props = {
  toolbar?: React.ReactNode;
} & AgencyQuery;

export const AgencyTable: React.FC<Props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useAgencies({ params: { ...params, ...props } });
  const deleteMutation = useDeleteAgency();

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus Instansi',
        children: <div className="text-sm">Apakah anda yakin untuk menghapus instansi ini?</div>,
        centered: true,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'Instansi berhasil dihapus',
                  color: 'green',
                  icon: <IconCheck />,
                });
                modals.closeAll();
              },
              onError: () => {
                notifications.show({
                  message: 'Instansi tidak bisa dihapus',
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
      title="Tabel Data Instansi"
      toolbar={toolbar}
      header={['Instansi', 'Kelas', 'Alamat', 'Provinsi/Area', 'Created At', '']}
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
      renderItem={(agency) => (
        <tr key={agency.id}>
          <td>{agency.name}</td>
          <td>{agency.classes}</td>
          <td>{agency.address}</td>
          <td>{agency.kecamatan.kabupaten?.province?.name ?? '-'}</td>
          <td>{dayjs(agency.created_at).format('D MMMM YYYY H:mm')}</td>
          <td>
            <Authorization role={['Superadmin']}>
              <div className="flex items-center space-x-2">
                <ActionIcon
                  variant="subtle"
                  component={Link}
                  to={`/agency/${agency.id}`}
                  title="Update Instansi"
                  color="primary"
                  radius="lg"
                >
                  <IconEdit size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  onClick={handleRemove(agency.id)}
                  title="Hapus Instansi"
                  color="red"
                  radius="lg"
                >
                  <IconTrash size={18} />
                </ActionIcon>
              </div>
            </Authorization>
          </td>
        </tr>
      )}
    />
  );
};
