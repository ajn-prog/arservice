import { Badge, Button, Pagination } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconEdit, IconShoppingCart, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Authorization } from '@/features/auth';
import { useCart } from '@/features/tenders';

import { useDeleteProduct, useProducts } from '../api';
import { PRODUCT_TYPES } from '../constants';
import { ProductQuery } from '../types';

type Props = ProductQuery;

export const ProductList: React.FC<Props> = ({ ...props }) => {
  const [params, setParams] = useState<ProductQuery>({
    page: 1,
    limit: 8,
    search: '',
    sort: 'desc',
    sort_by: 'created_at',
  });
  const { data, isLoading, isError, isFetching } = useProducts({ params: { ...params, ...props } });
  const deleteMutation = useDeleteProduct();
  const { addProduct } = useCart();

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus Produk',
        children: <div className="text-sm">Apakah anda yakin untuk menghapus produk ini?</div>,
        centered: true,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'Produk berhasil dihapus',
                  color: 'green',
                });
                setParams({ ...params, page: 1 });
                modals.closeAll();
              },
              onError: () => {
                notifications.show({
                  message: 'Produk tidak bisa dihapus',
                  color: 'red',
                });
                modals.closeAll();
              },
            }
          );
        },
      });
    };
  }

  if (isLoading || isError || isFetching)
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={`skp_${i}`} className="w-full bg-white rounded-lg overflow-hidden">
              <div className="w-full aspect-video bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 w-20 bg-gray-200 animate-pulse rounded-lg mt-1 mb-2"></div>
                <div className="bg-gray-200 animate-pulse h-5 w-full rounded-md mb-2"></div>
                <div className="bg-gray-200 animate-pulse h-5 w-1/2 rounded-md mb-2"></div>

                <div className="h-4 w-12 bg-gray-200 rounded-md animate-pulse"></div>

                <div className="space-y-2 mt-2">
                  <div className="bg-gray-200 w-full h-7 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.data.map((product) => (
          <div key={product.id} className="w-full bg-white rounded-lg overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <div className="w-full aspect-video bg-gray-200 relative">
                <div className="z-20 absolute top-4 left-4">
                  <Badge size="xs" color="gray">
                    {PRODUCT_TYPES[product.type]}
                  </Badge>
                </div>
                {product.thumbnail && (
                  <img
                    src={product.thumbnail}
                    alt=""
                    className="absolute w-full h-full inset-0 object-cover object-center"
                  />
                )}
              </div>
            </Link>
            <div className="p-4">
              <Badge className="mb-2">{product.category.name}</Badge>

              <Link to={`/product/${product.id}`}>
                <h2 className="line-clamp-2 text-base font-bold mb-1 hover:underline">
                  {product.name}
                </h2>
              </Link>
              {product.brand && <div className="text-sm text-gray-600">{product.brand.name}</div>}

              <Authorization role={['-Customer']}>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button
                    component={Link}
                    to={`/product/${product.id}/update`}
                    variant="light"
                    leftSection={<IconEdit size={16} />}
                    fullWidth
                    size="xs"
                  >
                    Edit
                  </Button>
                  <Button
                    color="red"
                    variant="light"
                    leftSection={<IconTrash size={16} />}
                    fullWidth
                    size="xs"
                    onClick={handleRemove(product.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </Authorization>

              <Authorization role={['Customer']}>
                <div className="space-y-2 mt-2">
                  <Button
                    fullWidth
                    size="xs"
                    variant="outline"
                    leftSection={<IconShoppingCart size={14} />}
                    onClick={() => addProduct(product.id)}
                  >
                    Tambah Keranjang
                  </Button>
                </div>
              </Authorization>
            </div>
          </div>
        ))}
      </div>

      <div className="my-6">
        <Pagination
          total={data.last_page}
          value={data.current_page}
          onChange={(page) => setParams({ ...params, page })}
          withEdges
        />
      </div>
    </div>
  );
};
