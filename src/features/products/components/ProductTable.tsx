import { ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import {
  IconCheck,
  IconDotsCircleHorizontal,
  IconEdit,
  IconTrash,
  IconX,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';

import { useDeleteProduct, useProducts } from '../api';
import { ProductQuery } from '../types';

const initialParams: ProductQuery = {
  page: 1,
  limit: 10,
  search: '',
};

const types = {
  main: 'Unit',
  accessories: 'Accessories',
  preventive: 'Service/Sparepart',
};

type Props = {
  toolbar?: React.ReactNode;
};

export const ProductTable: React.FC<Props> = ({ toolbar }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useProducts({ params });
  const deleteMutation = useDeleteProduct();

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus Produk',
        children: <div className="text-sm">Apakah anda yakin untuk menghapus produk ini?</div>,
        centered: true,
        closeOnConfirm: false,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'Produk berhasil dihapus',
                  color: 'green',
                  icon: <IconCheck />,
                });
                setParams(initialParams);
                modals.closeAll();
              },
              onError: () => {
                notifications.show({
                  message: 'Produk tidak bisa dihapus',
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
      title="Tabel Data Produk"
      toolbar={toolbar}
      header={['Produk', 'Tipe', 'Kategori', 'Brand', 'Modified At', '']}
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
      renderItem={(product) => (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{types[product.type]}</td>
          <td>{product.category.name}</td>
          <td>{product.brand.name}</td>
          <td>{dayjs(product.updatedAt).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon variant="subtle" title="Detail Produk" color="gray" radius="lg">
                <IconDotsCircleHorizontal size={18} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                component={Link}
                to={`/product/${product.id}`}
                title="Update Produk"
                color="primary"
                radius="lg"
              >
                <IconEdit size={18} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                onClick={handleRemove(product.id)}
                title="Hapus Produk"
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
