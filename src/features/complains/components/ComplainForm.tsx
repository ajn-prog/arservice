import { Button, Card, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { Link, useNavigate } from 'react-router-dom';

import { TextEditor } from '@/components/forms';
import { FileDropzone } from '@/features/file';
import { ItemSelect } from '@/features/installations';

import { useCreateComplain } from '../api';
import { ComplainDTO } from '../types';

export const ComplainForm: React.FC = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useCreateComplain();
  const form = useForm<ComplainDTO>({
    initialValues: {
      title: '',
      detail: '',
      filename: [],
      installbase_id: undefined,
      placement_space: '',
      priority: undefined,
      status: 'waiting',
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    console.log(values);

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
            message: 'Komplain berhasil dibuat',
          });
          navigate('/complain');
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Komplain gagal dibuat',
          });
        },
      }
    );
  });

  return (
    <Card component="form" onSubmit={handleSubmit} shadow="lg">
      <Card.Section p="lg" withBorder>
        <h2 className="font-semibold text-base">Tambah Data Komplain</h2>
      </Card.Section>

      <Card.Section p="lg" pt="xs" withBorder>
        <div className="grid grid-cols-12 gap-x-6 gap-y-4">
          <TextInput
            {...form.getInputProps('title')}
            label="Judul"
            placeholder="Masukan Judul"
            className="col-span-12 md:col-span-8"
          />

          <Select
            {...form.getInputProps('priority')}
            label="Proritas"
            placeholder="Pilih Prioritas"
            data={[
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
            ]}
            className="col-span-12 md:col-span-2"
          />

          <TextInput
            {...form.getInputProps('placement_space')}
            label="Ruang Penempatan"
            placeholder="Ex: Radiologi"
            className="col-span-12 md:col-span-2"
          />

          <ItemSelect
            {...form.getInputProps('installbase_id')}
            label="Produk"
            placeholder="Pilih Produk"
            className="col-span-12 md:col-span-12"
            nothingFoundMessage="Data tidak ditemukan"
          />

          <div className="col-span-12">
            <TextEditor
              label="Detail"
              value={form.values['detail']}
              onChange={(v) => form.setFieldValue('detail', v)}
            />
          </div>
          <div className="col-span-12">
            <FileDropzone
              value={form.values['filename']}
              onDrop={(files) => form.setFieldValue('filename', files)}
              label="Foto/Video Pendukung"
              maxFiles={5}
              maxSize={5 * 1024 ** 2}
            />
          </div>
        </div>
      </Card.Section>

      <Card.Section p="lg" withBorder className="flex items-center space-x-4">
        <Button type="submit" loading={isLoading}>
          Simpan
        </Button>
        <Button component={Link} to="/complain" variant="light" color="gray.6" bg="gray.2">
          Batal
        </Button>
      </Card.Section>
    </Card>
  );
};
