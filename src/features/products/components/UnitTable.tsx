import { ActionIcon, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

import { Table } from '@/components/elements';

import { useDeleteUnit, useUnits } from '../api';
import { Unit, UnitQuery } from '../types';

import { UnitUpdateForm } from '.';

type Props = {
  toolbar?: React.ReactNode;
} & UnitQuery;

const initialParams: UnitQuery = {
  page: 1,
  limit: 5,
  search: '',
};

export const UnitTable: React.FC<Props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useUnits({ params: { ...params, ...props } });
  const deleteMutation = useDeleteUnit();

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus Unit',
        children: <Text size="sm">Apakah anda yakin untuk menghapus Unit ini?</Text>,
        centered: true,
        closeOnConfirm: false,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'Unit berhasil dihapus',
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

  function handleUpdate(unit: Unit) {
    return () => {
      modals.open({
        title: 'Update Unit',
        children: (
          <UnitUpdateForm
            unit={unit}
            onSuccess={() => modals.closeAll()}
            onCancel={() => modals.closeAll()}
          />
        ),
      });
    };
  }

  return (
    <Table
      title="Tabel Data Satuan"
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
      renderItem={(unit) => (
        <tr key={unit.id}>
          <td>{unit.name}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                variant="subtle"
                title="Update Satuan"
                color="primary"
                radius="lg"
                onClick={handleUpdate(unit)}
              >
                <IconEdit size={18} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                title="Hapus Satuan"
                color="red"
                radius="lg"
                onClick={handleRemove(unit.id)}
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
