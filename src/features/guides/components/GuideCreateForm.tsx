import { Button, Card, TextInput } from '@mantine/core';
import { IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';

import { TextEditor } from '@/components/forms';
import { FileDropzone } from '@/features/file';
import { ProductSelect } from '@/features/products';

import { useCreateGuide } from '../api';
import { GuideDTO } from '../types';

type Props = {
  product?: number | string;
};

export const GuideCreateForm: React.FC<Props> = ({ product }) => {
  const createMutation = useCreateGuide();
  const navigate = useNavigate();
  const form = useForm<GuideDTO>({
    initialValues: {
      product_id: product,
      title: '',
      image: undefined,
      description: '',
      video: '',
    },
  });

  const handleSubmit = form.onSubmit(async (data) => {
    await createMutation.mutateAsync(
      {
        data,
      },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Panduan berhasil dibuat',
          });
          navigate('/guide');
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Panduan gagal dibuat',
          });
        },
      }
    );
  });

  return (
    <Card component="form" onSubmit={handleSubmit} shadow="lg">
      <Card.Section p="lg" withBorder>
        <h2 className="font-semibold text-base">Tambah Data Panduan</h2>
      </Card.Section>

      <Card.Section p="lg" pt="xs" withBorder>
        <div className="grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300">
          <ProductSelect
            {...form.getInputProps('product_id')}
            label="Produk"
            placeholder="Pilih Produk"
            className="col-span-12 md:col-span-12"
            limit={20}
            nothingFoundMessage="Data tidak ditemukan"
          />

          <TextInput
            {...form.getInputProps('title')}
            label="Judul"
            placeholder="Masukan Judul"
            className="col-span-12"
          />

          <TextInput
            {...form.getInputProps('video')}
            label="Link Video Youtube (Opsional)"
            placeholder="https://"
            className="col-span-12"
          />

          <div className="col-span-12">
            <FileDropzone
              label="Foto Sampul"
              value={form.values['image']}
              onDrop={(files) => {
                form.setFieldValue('image', files[0]);
              }}
              accept={IMAGE_MIME_TYPE}
              maxSize={5 * 1024 ** 2}
              maxFiles={1}
              multiple={false}
            />
          </div>

          <div className="col-span-12">
            <TextEditor
              value={form.values['description']}
              onChange={(v) => form.setFieldValue('description', v)}
            />
          </div>
        </div>
      </Card.Section>

      <Card.Section p="lg" withBorder className="flex justify-start items-center space-x-4">
        <Button type="submit" loading={createMutation.isLoading}>
          Simpan
        </Button>
        <Button onClick={() => navigate(-1)} variant="light" color="gray.6" bg="gray.2">
          Batal
        </Button>
      </Card.Section>
    </Card>
  );
};
