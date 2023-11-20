import { Button, Card, FileInput, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconPhoto, IconPlus } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';

import { PictureList } from '@/features/file';

import { useCreateProduct, useUpdateProduct } from '../api';
import { Product, ProductPreventiveDTO } from '../types';

import { CategorySelect } from './CategorySelect';

type Props = {
  product?: Product;
};

export const ProductPreventiveForm: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();
  const form = useForm<ProductPreventiveDTO>({
    initialValues: {
      name: product?.name ?? '',
      category_product_id: product?.category_product_id.toString() ?? '',
      product_code: product?.product_code ?? '',
      type: 'preventive',
      images: [],
      thumbnail: undefined,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    if (product) {
      await updateMutation.mutateAsync(
        {
          id: product.id,
          type: 'preventive',
          data: {
            ...values,
          },
        },
        {
          onSuccess: () => {
            notifications.show({
              color: 'green',
              message: 'Produk berhasil diubah',
            });
            navigate('/product');
          },
          onError: ({ response }) => {
            form.setErrors((response?.data as any).errors);
            notifications.show({
              color: 'red',
              message: 'Produk gagal diubah',
            });
          },
        }
      );
    } else {
      await createMutation.mutateAsync(
        {
          type: 'preventive',
          data: {
            ...values,
          },
        },
        {
          onSuccess: () => {
            notifications.show({
              color: 'green',
              message: 'Produk berhasil dibuat',
            });
            navigate('/product');
          },
          onError: ({ response }) => {
            form.setErrors((response?.data as any).errors);
            notifications.show({
              color: 'red',
              message: 'Produk gagal dibuat',
            });
          },
        }
      );
    }
  });

  return (
    <Card component="form" onSubmit={handleSubmit} shadow="lg">
      <Card.Section p="lg" withBorder>
        <h2 className="font-semibold text-base">
          Tambah Data Produk <span className="text-primary-600">(Service dan Sparespart)</span>
        </h2>
      </Card.Section>

      <Card.Section p="lg" withBorder>
        <div className="grid grid-cols-12 gap-x-6 gap-y-4 mb-6">
          <TextInput
            {...form.getInputProps('product_code')}
            label="Kode Produk"
            placeholder="Masukan Kode"
            className="col-span-12 md:col-span-2"
          />
          <TextInput
            {...form.getInputProps('name')}
            label="Nama Produk"
            placeholder="Masukan Nama Produk"
            className="col-span-12 md:col-span-7"
          />
          <CategorySelect
            {...form.getInputProps('category_product_id')}
            label="Kategori"
            placeholder="Pilih Kategori"
            className="col-span-12 md:col-span-3"
          />
          <Textarea
            {...form.getInputProps('description')}
            label="Detail"
            placeholder="Masukan Detail"
            className="col-span-12"
          />
          <FileInput
            {...form.getInputProps('thumbnail')}
            label="Thumbnail"
            placeholder="Pilih Thumbnail"
            className="col-span-12"
            multiple={false}
            accept="image/*"
            leftSection={<IconPhoto size={16} />}
            value={form.values['thumbnail']}
            onChange={(v) => {
              if (v) form.setFieldValue('thumbnail', v);
            }}
          />
        </div>

        <section className="mt-6">
          <h2 className="font-bold mb-2">Foto</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label
              htmlFor="file"
              className="bg-gray-200 hover:bg-gray-300 transition rounded w-full h-44 relative flex items-center justify-center cursor-pointer"
            >
              <IconPlus className="text-gray-600 w-10 h-10" />
              <input
                id="file"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {
                  if (!e.target.files) return;
                  form.setFieldValue('images', [...form.values.images!, ...e.target.files]);
                }}
              />
            </label>
            <PictureList
              files={form.values['images']!}
              onChange={(files) => form.setFieldValue('images', files as File[])}
            />
          </div>
        </section>
      </Card.Section>

      <Card.Section p="lg" withBorder className="flex justify-end items-center space-x-4">
        <Button type="submit" loading={createMutation.isLoading || updateMutation.isLoading}>
          Simpan
        </Button>
        <Button
          component={Link}
          to="/product"
          variant="light"
          color="gray.6"
          bg="gray.2"
          disabled={createMutation.isLoading || updateMutation.isLoading}
        >
          Batal
        </Button>
      </Card.Section>
    </Card>
  );
};
