import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

import { useUpdateUnit } from '../api';
import { Unit, UnitDTO } from '../types';

type Props = {
  unit: Unit;
  onSuccess?: (result: Unit) => void;
  onCancel?: () => void;
};

export const UnitUpdateForm: React.FC<Props> = ({ unit, onSuccess, onCancel }) => {
  const { mutateAsync } = useUpdateUnit();
  const form = useForm<UnitDTO>({
    initialValues: {
      name: unit.name,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync(
      { id: unit.id, data: values },
      {
        onError({ response }) {
          form.setErrors((response?.data as any).errors);
        },
        onSuccess({ data }) {
          notifications.show({
            message: 'Unit berhasil diubah',
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
