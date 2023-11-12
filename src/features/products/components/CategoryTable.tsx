import { ActionIcon, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

import { Table } from '@/components/elements';

import { useDeleteCategory, useCategories } from '../api';
import { Category, CategoryQuery } from '../types';

import { CategoryUpdateForm } from '.';

type Props = {
  toolbar?: React.ReactNode;
};

const initialParams: CategoryQuery = {
  page: 1,
  limit: 5,
  search: '',
};

export const CategoryTable: React.FC<Props> = ({ toolbar }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useCategories({ params });
  const deleteMutation = useDeleteCategory();

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus Kategori',
        children: <Text size="sm">Apakah anda yakin untuk menghapus kategori ini?</Text>,
        centered: true,
        closeOnConfirm: false,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'Kategori berhasil dihapus',
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

  function handleUpdate(category: Category) {
    return () => {
      modals.open({
        title: 'Update Kategori',
        children: (
          <CategoryUpdateForm
            category={category}
            onSuccess={() => modals.closeAll()}
            onCancel={() => modals.closeAll()}
          />
        ),
      });
    };
  }

  return (
    <Table
      title="Tabel Data Kategori"
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
      renderItem={(category) => (
        <tr key={category.id}>
          <td>{category.name}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                variant="subtle"
                title="Update Kategori"
                color="primary"
                radius="lg"
                onClick={handleUpdate(category)}
              >
                <IconEdit size={18} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                title="Hapus Kategori"
                color="red"
                radius="lg"
                onClick={handleRemove(category.id)}
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
