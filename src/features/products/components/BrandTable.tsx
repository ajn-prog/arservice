import { ActionIcon, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

import { Table } from '@/components/elements';

import { useDeleteBrand, useBrands } from '../api';
import { Brand, BrandQuery } from '../types';

import { BrandUpdateForm } from '.';

type Props = {
  toolbar?: React.ReactNode;
} & BrandQuery;

const initialParams: BrandQuery = {
  page: 1,
  limit: 5,
  search: '',
};

export const BrandTable: React.FC<Props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useBrands({ params: { ...params, ...props } });
  const deleteMutation = useDeleteBrand();

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus Brand',
        children: <Text size="sm">Apakah anda yakin untuk menghapus Brand ini?</Text>,
        centered: true,
        closeOnConfirm: false,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'Brand berhasil dihapus',
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

  function handleUpdate(brand: Brand) {
    return () => {
      modals.open({
        title: 'Update Brand',
        children: (
          <BrandUpdateForm
            brand={brand}
            onSuccess={() => modals.closeAll()}
            onCancel={() => modals.closeAll()}
          />
        ),
      });
    };
  }

  return (
    <Table
      title="Tabel Data Brand"
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
      renderItem={(brand) => (
        <tr key={brand.id}>
          <td>{brand.name}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                variant="subtle"
                title="Update Brand"
                color="primary"
                radius="lg"
                onClick={handleUpdate(brand)}
              >
                <IconEdit size={18} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                title="Hapus Brand"
                color="red"
                radius="lg"
                onClick={handleRemove(brand.id)}
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
