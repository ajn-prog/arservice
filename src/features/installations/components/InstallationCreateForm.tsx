import { Button, Card, TextInput, Textarea } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCalendar } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';

import { AgencySelect } from '@/features/agencies';
import { FileDropzone } from '@/features/file';
import { EngineerSelect } from '@/features/user';

import { useCreateInstallation } from '../api';
import { InstallationDTO } from '../types';

import { ProductSelectForm } from './ProductSelectForm';

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
      project_number: '',
      serial_number: '',
      warranty_month: 0,
      file: undefined,
      products: [
        {
          product_id: '',
          serial_number: '',
          warranty_month: '',
        },
      ],
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

      <Card.Section p="lg" pt="xs" withBorder>
        <div className="pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300">
          <DateInput
            {...form.getInputProps('installation_date')}
            label="Tanggal Install"
            placeholder="Pilih Tanggal"
            className="col-span-6 md:col-span-3"
            popoverProps={{ withinPortal: true }}
            rightSection={<IconCalendar size={16} color="gray" />}
            valueFormat="D MMMM YYYY"
          />
          <TextInput
            {...form.getInputProps('project_number')}
            label="Project Number"
            placeholder="Ex : 20392"
            className="col-span-6 md:col-span-3"
          />
          <TextInput
            {...form.getInputProps('title')}
            label="Nama Kegiatan"
            placeholder="Ex : Perbaikan Alat MINDRAY xxxx"
            className="col-span-12 md:col-span-6"
          />

          <AgencySelect
            {...form.getInputProps('customer_id')}
            label="Instansi"
            placeholder="Pilih Instansi"
            className="col-span-12 md:col-span-12"
            nothingFoundMessage="Data tidak ditemukan"
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
        <div className="pt-2 pb-4 border-b border-gray-300">
          <ProductSelectForm
            value={form.values['products']}
            onChange={(v) => form.setFieldValue('products', v)}
          />
        </div>
        <div className="pt-4 grid grid-cols-12 gap-x-6 gap-y-4">
          <div className="col-span-12">
            <FileDropzone
              label="File Kegiatan"
              onDrop={(files) => form.setFieldValue('file', files[0] || undefined)}
              onReject={() => notifications.show({ message: 'File tidak sesuai', color: 'red' })}
              maxSize={5 * 1024 ** 2}
              maxFiles={1}
              value={form.values['file']}
              error={form.errors['file']?.toString()}
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

      <Card.Section p="lg" withBorder className="flex items-center space-x-4">
        <Button type="submit" loading={isLoading}>
          Simpan
        </Button>
        <Button component={Link} to="/installation" variant="light" color="gray.6" bg="gray.2">
          Batal
        </Button>
      </Card.Section>
    </Card>
  );
};
