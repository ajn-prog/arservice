import { Carousel } from '@mantine/carousel';
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import {
  IconArrowLeft,
  IconCheck,
  IconEdit,
  IconShoppingCart,
  IconTrash,
  IconX,
} from '@tabler/icons-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';
import { Authorization } from '@/features/auth';
import { useCart } from '@/features/tenders';
import { formatCurrency } from '@/utils/format';

import { useDeleteProduct, useProduct } from '../api';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();
  const { addProduct } = useCart();
  const { data: product, isLoading, isError } = useProduct({ id: id as string });
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
                modals.closeAll();
                navigate('/product');
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

  function handlePicture(src: string) {
    return () => {
      modals.open({
        title: 'Detail',
        children: <img src={src} alt="" />,
        size: 'xl',
      });
    };
  }

  if (isLoading)
    return (
      <div className="mt-48">
        <LoadingScreen />
      </div>
    );

  if (isError)
    return (
      <div className="mt-48 text-center">
        <h1 className="text-lg font-bold mb-2">Produk tidak ditemukan</h1>
        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={14} />}>
          Kembali
        </Button>
      </div>
    );

  return (
    <main>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">Detail Produk</h1>
        <Button component={Link} size="xs" to="/product" leftSection={<IconArrowLeft size={16} />}>
          Kembali
        </Button>
      </header>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4">
          <div className="mb-6">
            <img
              src={product.thumbnail ?? '/default_image.png'}
              alt={product.name}
              loading="eager"
              className="w-full h-auto rounded-md"
            />
          </div>

          {product.images.length > 0 && (
            <Carousel slideSize="33.333333%" slideGap="md" align="start">
              {product.images.map(({ id, image }) => (
                <Carousel.Slide key={id}>
                  <div
                    onClick={handlePicture(image)}
                    aria-hidden
                    className="bg-gray-200 w-full h-full aspect-square rounded-md relative overflow-hidden cursor-pointer"
                  >
                    <img
                      src={image ?? '/default_image.png'}
                      alt=""
                      className="w-full h-full absolute inset-0 object-cover object-center"
                    />
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          )}
        </div>

        <article className="col-span-8">
          <section className="mb-5">
            <h2 className="text-primary-600 font-body text-sm font-bold uppercase">
              {product.brand.name}
            </h2>
            <h1 className="mb-3 text-3xl font-semibold">{product.name}</h1>

            <div className="mt-2 flex space-x-4 text-sm font-semibold uppercase text-gray-600">
              {product.category.name}
            </div>

            {product.price && (
              <div className="text-primary-600 mt-2 text-xl font-black">
                {formatCurrency(product.price)}
              </div>
            )}
          </section>

          <section>
            <div className="mb-8">
              <h3 className="font-body text-sm font-semibold text-gray-800">DESCRIPTION</h3>
              <div
                className="prose text-gray-700 transition-all"
                dangerouslySetInnerHTML={{ __html: product.description || '-' }}
              ></div>
            </div>

            <Authorization role={['Customer']}>
              <Button
                size="xs"
                leftSection={<IconShoppingCart size={14} />}
                onClick={() => addProduct(product.id)}
              >
                Tambah Keranjang
              </Button>
            </Authorization>
            <Authorization role={['-Customer']}>
              <div className="flex space-x-2">
                <Button
                  component={Link}
                  to={`/product/${product.id}/update`}
                  leftSection={<IconEdit size={16} />}
                  size="xs"
                >
                  Edit
                </Button>
                <Button
                  color="red"
                  leftSection={<IconTrash size={16} />}
                  size="xs"
                  onClick={handleRemove(product.id)}
                >
                  Hapus
                </Button>
              </div>
            </Authorization>
          </section>
        </article>
      </div>
    </main>
  );
};
