import { ActionIcon, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

import { Table } from '@/components/elements';
import { Pagination } from '@/types/api';

import { useDeleteModality, useModalities } from '../api';
import { Modality } from '../types';

import { ModalityUpdateForm } from './ModalityUpdateForm';

type Props = {
  toolbar?: React.ReactNode;
};

const initialParams: Pagination = {
  page: 1,
  limit: 5,
  search: '',
  sort: 'desc',
  sort_by: 'created_at',
};

export const ModalityTable: React.FC<Props> = ({ toolbar }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useModalities({ params });
  const deleteMutation = useDeleteModality();

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus Modality',
        children: <Text size="sm">Apakah anda yakin untuk menghapus modality ini?</Text>,
        centered: true,
        closeOnConfirm: false,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'Modality berhasil dihapus',
                  color: 'green',
                  icon: <IconCheck />,
                });
                modals.closeAll();
              },
            }
          );
        },
      });
    };
  }

  function handleUpdate(modality: Modality) {
    return () => {
      modals.open({
        title: 'Update Modality',
        children: (
          <ModalityUpdateForm
            modality={modality}
            onSuccess={() => modals.closeAll()}
            onCancel={() => modals.closeAll()}
          />
        ),
      });
    };
  }

  return (
    <Table
      title="Tabel Data Modality"
      toolbar={toolbar}
      loading={isLoading}
      header={['Nama', '']}
      items={data?.data}
      onPageChange={(page) => {
        setParams({ ...params, page });
      }}
      metadata={{
        count: data?.data.length || 10,
        limit: params.limit || 10,
        page: params.page || 10,
        total: data?.total || 10,
      }}
      renderItem={(modality) => (
        <tr key={modality.id}>
          <td>{modality.name}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                title="Update Modality"
                color="primary"
                radius="lg"
                onClick={handleUpdate(modality)}
              >
                <IconEdit size={18} />
              </ActionIcon>
              <ActionIcon
                title="Hapus Modality"
                color="red"
                radius="lg"
                onClick={handleRemove(modality.id)}
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
