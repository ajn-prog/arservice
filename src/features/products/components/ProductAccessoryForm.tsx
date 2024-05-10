import { Button, Card, FileInput, NumberInput, Radio, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCalendar, IconPhoto, IconPlus } from '@tabler/icons-react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { PictureList } from '@/features/file';
import { dayjs } from '@/lib/dayjs';
import { urlToFile } from '@/utils/file';

import { useCreateProduct, useUpdateProduct } from '../api';
import { Product, ProductAccessoryDTO } from '../types';

import { BrandSelect } from './BrandSelect';
import { CategorySelect } from './CategorySelect';
import { UnitSelect } from './UnitSelect';

type Props = {
  product?: Product;
};

export const ProductAccessoryForm: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();
  const form = useForm<ProductAccessoryDTO>({
    initialValues: {
      name: product?.name ?? '',
      brand_id: product?.brand_id.toString() ?? '',
      category_product_id: product?.category_product_id?.toString() ?? '',
      date_entry: product?.date_entry ? dayjs(product.date_entry).toDate() : '',
      product_code: product?.product_code ?? '',
      type: 'accessories',
      images: [],
      unit_product_id: product?.unit_product_id.toString() ?? '',
      is_consumable: product?.is_consumable ? '1' : '0',
      price: product?.price ? product?.price : '',
      thumbnail: undefined,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    if (product) {
      await updateMutation.mutateAsync(
        {
          id: product.id,
          type: 'accessories',
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
          type: 'accessories',
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

  useEffect(() => {
    if (!product?.images || product.images.length == 0) return;

    const promises = product.images.map(async ({ image }) => {
      const file = await urlToFile(image);
      return file;
    });

    Promise.all(promises)
      .then((results) => {
        form.setFieldValue('images', results);
      })
      .catch((e) => {
        console.error(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.images]);

  return (
    <Card component="form" onSubmit={handleSubmit} shadow="lg">
      <Card.Section p="lg" withBorder>
        <h2 className="font-semibold text-base">
          Edit Data Produk <span className="text-primary-600">(Accessory)</span>
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
          <DateInput
            {...form.getInputProps('date_entry')}
            label="Tanggal Masuk"
            placeholder="Pilih Tanggal"
            className="col-span-12 md:col-span-3"
            popoverProps={{ withinPortal: true }}
            rightSection={<IconCalendar size={16} color="gray" />}
            valueFormat="D MMMM YYYY"
          />
          <BrandSelect
            {...form.getInputProps('brand_id')}
            label="Brand"
            placeholder="Pilih Brand"
            className="col-span-12 md:col-span-3"
          />
          <CategorySelect
            {...form.getInputProps('category_product_id')}
            label="Kategori"
            placeholder="Pilih Kategori"
            className="col-span-12 md:col-span-3"
          />
          <UnitSelect
            {...form.getInputProps('unit_product_id')}
            label="Satuan"
            placeholder="Pilih Satuan"
            className="col-span-12 md:col-span-3"
          />
          <NumberInput
            {...form.getInputProps('price')}
            label="Harga"
            placeholder="Masukan Harga"
            leftSection={<span className="text-xs">Rp.</span>}
            className="col-span-12 md:col-span-6"
          />
          <div className="py-1">
            <div className="text-sm mb-2">Status</div>
            <Radio.Group {...form.getInputProps('is_consumable')}>
              <div className="flex items-center space-x-4">
                <Radio label="Consumable" value="1" />
                <Radio label="Unconsumable" value="0" />
              </div>
            </Radio.Group>
          </div>
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
