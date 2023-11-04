import { Button, Card, Select, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCalendar } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateProduct } from '../api';
import { Product, ProductUnitDTO } from '../types';

import { BrandSelect } from './BrandSelect';
import { CategorySelect } from './CategorySelect';
import { UnitSelect } from './UnitSelect';

type Props = {
  product?: Product;
};

export const ProductUnitForm: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const createMutation = useCreateProduct();
  const form = useForm<ProductUnitDTO>({
    initialValues: {
      name: product?.name ?? '',
      brand_id: product?.brand_id ?? '',
      category_product_id: product?.category_product_id.toString() ?? '',
      date_entry: product?.date_entry ?? '',
      modality_product_id: product?.modality_product_id ?? '',
      product_code: product?.product_code ?? '',
      type: 'main',
      unit_product_id: product?.unit_product_id ?? '',
    },
  });

  console.log(form.values);

  const handleSubmit = form.onSubmit(async (values) => {
    await createMutation.mutateAsync(
      {
        type: 'main',
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
  });

  return (
    <Card component="form" onSubmit={handleSubmit} shadow="lg">
      <Card.Section p="lg" withBorder>
        <h2 className="font-semibold text-base">
          Tambah Data Produk <span className="text-primary-600">(Unit)</span>
        </h2>
      </Card.Section>

      <Card.Section p="lg">
        <div className="grid grid-cols-12 gap-4">
          <TextInput
            {...form.getInputProps('product_code')}
            label="Kode Produk"
            placeholder="Masukan Kode Produk"
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
            nothingFound="Data tidak ditemukan"
            withinPortal
          />
          <CategorySelect
            {...form.getInputProps('category_product_id')}
            label="Kategori"
            placeholder="Pilih Kategori"
            className="col-span-12 md:col-span-3"
            nothingFound="Data tidak ditemukan"
            withinPortal
          />
          <UnitSelect
            {...form.getInputProps('unit_product_id')}
            label="Satuan"
            placeholder="Pilih Satuan"
            className="col-span-12 md:col-span-3"
            nothingFound="Data tidak ditemukan"
            withinPortal
          />
          <Select
            {...form.getInputProps('modality_product_id')}
            label="Modality"
            placeholder="Pilih Modality"
            data={['1', '2']}
            className="col-span-12 md:col-span-3"
            nothingFound="Data tidak ditemukan"
            withinPortal
          />
        </div>
      </Card.Section>

      <Card.Section p="lg" withBorder className="flex justify-end items-center space-x-4">
        <Button component={Link} to="/product" variant="light" color="gray.6" bg="gray.2">
          Batal
        </Button>
        <Button type="submit">Tambah</Button>
      </Card.Section>
    </Card>
  );
};
