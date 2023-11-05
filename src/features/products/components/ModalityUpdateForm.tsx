import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

import { useUpdateModality } from '../api';
import { Modality, ModalityDTO } from '../types';

type Props = {
  modality: Modality;
  onSuccess?: (result: Modality) => void;
  onCancel?: () => void;
};

export const ModalityUpdateForm: React.FC<Props> = ({ modality, onSuccess, onCancel }) => {
  const { mutateAsync } = useUpdateModality();
  const form = useForm<ModalityDTO>({
    initialValues: {
      name: modality.name,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync(
      { id: modality.id, data: values },
      {
        onError({ response }) {
          form.setErrors((response?.data as any).errors);
        },
        onSuccess({ data }) {
          notifications.show({
            message: 'Modality berhasil diubah',
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
