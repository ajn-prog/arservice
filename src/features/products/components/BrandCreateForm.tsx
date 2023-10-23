import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

import { useCreateBrand } from '../api';
import { Brand, BrandDTO } from '../types';

type Props = {
  onSuccess?: (result: Brand) => void;
  onCancel?: () => void;
};

export const BrandCreateForm: React.FC<Props> = ({ onCancel, onSuccess }) => {
  const { mutateAsync } = useCreateBrand();
  const form = useForm<BrandDTO>({
    initialValues: {
      name: '',
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync(
      { data: values },
      {
        onError({ response }) {
          form.setErrors((response?.data as any).errors);
        },
        onSuccess({ data }) {
          notifications.show({
            message: 'Brand berhasil dibuat',
            color: 'green',
            icon: <IconCheck />,
          });
          if (onSuccess) {
            onSuccess(data);
          }
        },
      }
    );
  });

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <TextInput
          {...form.getInputProps('name')}
          label="Nama"
          placeholder="Masukan Nama"
          required
        />
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        <Button
          type="button"
          variant="default"
          onClick={() => {
            if (onCancel) onCancel();
          }}
        >
          Batal
        </Button>
        <Button type="submit">Simpan</Button>
      </div>
    </form>
  );
};
