import { Button, Card, NumberInput, TextInput, Textarea } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCalendar } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';

import { AgencySelect } from '@/features/agencies';
import { FileDropzone } from '@/features/file';
import { ProductSelect } from '@/features/products';
import { EngineerSelect } from '@/features/user';

import { useCreateInstallation } from '../api';
import { InstallationDTO } from '../types';

export const InstallationCreateForm: React.FC = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useCreateInstallation();
  const form = useForm<InstallationDTO>({
    initialValues: {
      title: '',
      customer_id: undefined,
      engineer_ids: [],
      installation_date: null,
      note: '',
      product_id: undefined,
      project_number: '',
      serial_number: '',
      warranty_month: 0,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync(
      {
        data: {
          ...values,
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Install Base berhasil dibuat',
          });
          navigate('/installation');
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Install Base gagal dibuat',
          });
        },
      }
    );
  });

  return (
    <Card component="form" onSubmit={handleSubmit} shadow="lg">
      <Card.Section p="lg" withBorder>
        <h2 className="font-semibold text-base">Tambah Data Install Base</h2>
      </Card.Section>

      <Card.Section p="lg" pt="xs">
        <div className="pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300">
          <TextInput
            {...form.getInputProps('project_number')}
            label="Project Number"
            placeholder="Ex : 20392"
            className="col-span-12 md:col-span-3"
          />
          <TextInput
            {...form.getInputProps('title')}
            label="Nama Kegiatan"
            placeholder="Ex : Perbaikan Alat MINDRAY xxxx"
            className="col-span-12 md:col-span-9"
          />

          <AgencySelect
            {...form.getInputProps('customer_id')}
            label="Instansi"
            placeholder="Pilih Instansi"
            className="col-span-12 md:col-span-12"
            nothingFoundMessage="Data tidak ditemukan"
          />

          <ProductSelect
            {...form.getInputProps('product_id')}
            label="Produk"
            placeholder="Pilih Produk"
            className="col-span-12 md:col-span-12"
            limit={20}
            nothingFoundMessage="Data tidak ditemukan"
          />

          <TextInput
            {...form.getInputProps('serial_number')}
            label="Serial Number"
            placeholder="Ex : MU/23/09/001"
            className="col-span-12 md:col-span-5"
          />
          <DateInput
            {...form.getInputProps('date_entry')}
            label="Tanggal Masuk"
            placeholder="Pilih Tanggal"
            className="col-span-6 md:col-span-5"
            popoverProps={{ withinPortal: true }}
            rightSection={<IconCalendar size={16} color="gray" />}
            valueFormat="D MMMM YYYY"
          />
          <NumberInput
            {...form.getInputProps('warranty_month')}
            label="Masa Garansi"
            placeholder=". . ."
            className="col-span-6 md:col-span-2"
            hideControls
            rightSection={<span className="text-xs text-gray-600 pr-7">/bulan</span>}
          />

          <EngineerSelect
            {...form.getInputProps('engineer_ids')}
            label="Teknisi"
            placeholder="Pilih Teknisi"
            className="col-span-12 md:col-span-12"
            limit={20}
            nothingFoundMessage="Data tidak ditemukan"
          />
        </div>
        <div className="pt-4 grid grid-cols-12 gap-x-6 gap-y-4">
          <div className="col-span-12">
            <FileDropzone
              label="File BASTB"
              onDrop={(files) => form.setFieldValue('bastb_file', files[0] || undefined)}
              onReject={() => notifications.show({ message: 'File tidak sesuai', color: 'red' })}
              maxSize={5 * 1024 ** 2}
              maxFiles={1}
              error={form.errors['bastb_file']?.toString()}
            />
          </div>
          <div className="col-span-12">
            <div className="text-sm mb-1">File BASTP</div>
            <FileDropzone
              label="File BASTP"
              onDrop={(files) => form.setFieldValue('bastp_file', files[0] || undefined)}
              onReject={() => notifications.show({ message: 'File tidak sesuai', color: 'red' })}
              maxSize={5 * 1024 ** 2}
              maxFiles={1}
              error={form.errors['bastp_file']?.toString()}
            />
          </div>
          <Textarea
            {...form.getInputProps('note')}
            label="Catatan"
            placeholder="Tambahkan Catatan. . ."
            className="col-span-12 md:col-span-12"
          />
        </div>
      </Card.Section>

      <Card.Section p="lg" withBorder className="flex justify-end items-center space-x-4">
        <Button component={Link} to="/installation" variant="light" color="gray.6" bg="gray.2">
          Batal
        </Button>
        <Button type="submit" loading={isLoading}>
          Simpan
        </Button>
      </Card.Section>
    </Card>
  );
};
